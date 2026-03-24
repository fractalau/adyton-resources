/**
 * Build-time script: Fetches live market prices for the ticker strip.
 * 
 * Sources: Yahoo Finance (no API key required for server-side)
 * Tickers: Gold (GC=F), Copper (HG=F), ADY.V (TSXV), ADYRF (OTC)
 * 
 * Outputs: src/data/prices.json
 * 
 * Usage: node scripts/fetch-prices.mjs
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const OUTPUT_PATH = new URL('../src/data/prices.json', import.meta.url);

const SYMBOLS = [
  { symbol: 'GC=F', label: 'Gold', icon: '🟡', prefix: '$', decimals: 2 },
  { symbol: 'HG=F', label: 'Copper', icon: '🟠', prefix: '$', decimals: 2 },
  { symbol: 'ADY.V', label: 'TSXV: ADY', prefix: 'C$', decimals: 3 },
  { symbol: 'ADYRF', label: 'OTC: ADYRF', prefix: '$', decimals: 2 },
];

async function fetchQuote(symbol) {
  const url = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(symbol)}?interval=1d&range=2d`;
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (compatible; AdytonBot/1.0)',
    },
  });

  if (!res.ok) {
    throw new Error(`Yahoo Finance returned ${res.status} for ${symbol}`);
  }

  const data = await res.json();
  const result = data?.chart?.result?.[0];
  if (!result) throw new Error(`No data for ${symbol}`);

  const meta = result.meta;
  const price = meta.regularMarketPrice;
  const prevClose = meta.chartPreviousClose || meta.previousClose;

  return { price, prevClose };
}

async function main() {
  console.log('📊 Fetching market prices...');

  let existingData = { tickers: [] };
  try {
    const outPath = fileURLToPath(OUTPUT_PATH);
    existingData = JSON.parse(readFileSync(outPath, 'utf-8'));
  } catch (e) {
    console.log('  No existing price data found, starting fresh.');
  }

  const tickers = [];

  for (const s of SYMBOLS) {
    try {
      const { price, prevClose } = await fetchQuote(s.symbol);
      const change = prevClose ? ((price - prevClose) / prevClose * 100) : 0;
      const changeStr = change >= 0 ? `+${change.toFixed(1)}%` : `${change.toFixed(1)}%`;

      tickers.push({
        label: s.label,
        value: `${s.prefix}${price.toLocaleString('en-US', { minimumFractionDigits: s.decimals, maximumFractionDigits: s.decimals })}`,
        change: changeStr,
        up: change >= 0,
        icon: s.icon || undefined,
      });

      console.log(`  ${s.label}: ${s.prefix}${price} (${changeStr})`);
    } catch (err) {
      console.warn(`  ⚠️ Failed to fetch ${s.symbol}: ${err.message}`);
      const fallback = existingData.tickers.find(t => t.label === s.label) || {
        label: s.label,
        value: 'N/A',
        change: '',
        up: true,
        icon: s.icon || undefined,
      };
      tickers.push(fallback);
    }
  }

  // Add FSE ticker (Yahoo doesn't reliably have 701.F)
  tickers.push({
    label: 'FSE: 701GR',
    value: '€0.28',
    change: '',
    up: true,
  });

  const output = {
    tickers,
    fetchedAt: new Date().toISOString(),
    date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
  };

  const outPath = fileURLToPath(OUTPUT_PATH);
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, JSON.stringify(output, null, 2));
  console.log(`✅ Wrote prices to src/data/prices.json`);

  // Trigger Webhook
  if (process.env.WEBHOOK_URL) {
    try {
      await fetch(process.env.WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ event: 'prices_updated', data: output })
      });
      console.log('✅ Webhook triggered');
    } catch (err) {
      console.error('❌ Webhook failed:', err.message);
    }
  }
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
