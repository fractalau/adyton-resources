import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const BASE_URL = "https://www.newsfilecorp.com/company/7416/Adyton-Resources-Corporation";

interface NewsItem {
  title: string;
  link: string;
  pubDate: string;
  excerpt: string;
}

function extractItems(html: string): NewsItem[] {
  const items: NewsItem[] = [];
  const figureRegex = /<figure class="nf-tile-wide"[^>]*>([\s\S]*?)<\/figure>/g;
  let match;
  while ((match = figureRegex.exec(html)) !== null) {
    const block = match[1];
    const linkMatch = block.match(/<a[^>]*href="(\/release\/\d+\/[^"]+)"[^>]*>([^<]+)<\/a>/);
    if (!linkMatch) continue;
    const link = "https://www.newsfilecorp.com" + linkMatch[1];
    const title = linkMatch[2].trim();
    const dateMatch = block.match(/Newsfile Corp\.\s*-\s*(\w+ \d{1,2}, \d{4})/);
    const pubDate = dateMatch ? dateMatch[1] : "";
    // Extract excerpt from the <p lang="en"> tag
    const excerptMatch = block.match(/<p lang="en">([\s\S]*?)<\/p>/);
    const excerpt = excerptMatch
      ? excerptMatch[1].replace(/<[^>]*>/g, "").trim().substring(0, 200)
      : "";
    items.push({ title, link, pubDate, excerpt });
  }
  return items;
}

function hasNextPage(html: string): string | null {
  const nextMatch = html.match(/<a[^>]*href="([^"]*\?pg=\d+)"[^>]*class="btn-outline next"/);
  if (nextMatch) {
    return nextMatch[1].startsWith("http")
      ? nextMatch[1]
      : "https://www.newsfilecorp.com" + nextMatch[1];
  }
  return null;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const allItems: NewsItem[] = [];
    let url: string | null = BASE_URL;
    const MAX_PAGES = 10; // Safety limit
    let page = 0;

    while (url && page < MAX_PAGES) {
      const res = await fetch(url, {
        headers: {
          "User-Agent": "Mozilla/5.0 (compatible; AdytonBot/1.0)",
          Accept: "text/html",
        },
      });

      if (!res.ok) {
        throw new Error(`Fetch failed: ${res.status} on page ${page + 1}`);
      }

      const html = await res.text();
      const items = extractItems(html);
      allItems.push(...items);

      url = hasNextPage(html);
      page++;
    }

    return new Response(JSON.stringify({ items: allItems }), {
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
