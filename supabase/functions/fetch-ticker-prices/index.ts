import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';

const SYMBOLS = [
  { symbol: 'GC=F', label: 'Gold', name: 'Gold Futures', currency: 'USD', unit: '/oz' },
  { symbol: 'HG=F', label: 'Copper', name: 'Copper Futures', currency: 'USD', unit: '/lb' },
  { symbol: 'ADY.V', label: 'TSXV: ADY', name: 'Adyton (TSX-V)' },
  { symbol: 'ADYRF', label: 'OTCQB: ADYRF', name: 'Adyton (OTCQB)' },
];

const CACHE_TTL_MS = 5 * 60 * 1000;
let cache: { data: unknown; expires: number } | null = null;

async function fetchYahoo(symbol: string) {
  const url = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(symbol)}?interval=1d&range=1d`;
  const res = await fetch(url, {
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36',
      Accept: 'application/json',
    },
  });
  if (!res.ok) throw new Error(`Yahoo ${symbol} ${res.status}`);
  const json = await res.json();
  const meta = json?.chart?.result?.[0]?.meta;
  if (!meta) throw new Error(`No meta for ${symbol}`);
  return {
    price: meta.regularMarketPrice ?? null,
    currency: meta.currency ?? null,
  };
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });

  try {
    if (cache && cache.expires > Date.now()) {
      return new Response(JSON.stringify(cache.data), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json', 'Cache-Control': 'public, max-age=300' },
      });
    }

    const results = await Promise.all(
      SYMBOLS.map(async (s) => {
        try {
          const q = await fetchYahoo(s.symbol);
          return { ...s, price: q.price, currency: s.currency ?? q.currency ?? 'USD' };
        } catch (_e) {
          return { ...s, price: null, currency: s.currency ?? 'USD' };
        }
      }),
    );

    const payload = { quotes: results, updatedAt: new Date().toISOString() };
    cache = { data: payload, expires: Date.now() + CACHE_TTL_MS };

    return new Response(JSON.stringify(payload), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json', 'Cache-Control': 'public, max-age=300' },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: (e as Error).message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
