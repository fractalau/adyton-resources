import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const COMPANY_URL = "https://www.newsfilecorp.com/company/7416/Adyton-Resources-Corporation";

function extractItems(html: string) {
  const items: { title: string; link: string; pubDate: string }[] = [];
  const figureRegex = /<figure class="nf-tile-wide"[^>]*>([\s\S]*?)<\/figure>/g;
  let match;
  while ((match = figureRegex.exec(html)) !== null) {
    const block = match[1];
    const linkMatch = block.match(/<a[^>]*href="(\/release\/\d+\/[^"]+)"[^>]*>([^<]+)<\/a>/);
    if (!linkMatch) continue;
    const link = "https://www.newsfilecorp.com" + linkMatch[1];
    const title = linkMatch[2].trim();
    // Date is in the <p> tag, format: "City--(Newsfile Corp. - March 25, 2026)"
    const dateMatch = block.match(/Newsfile Corp\.\s*-\s*(\w+ \d{1,2}, \d{4})/);
    const pubDate = dateMatch ? dateMatch[1] : "";
    items.push({ title, link, pubDate });
  }
  return items;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const res = await fetch(COMPANY_URL, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; AdytonBot/1.0)",
        Accept: "text/html",
      },
    });

    if (!res.ok) {
      throw new Error(`Fetch failed: ${res.status}`);
    }

    const html = await res.text();
    const items = extractItems(html);

    return new Response(JSON.stringify({ items }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("fetch-rss error:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch news" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
