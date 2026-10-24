import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { parseNewsFeed } from "./feed.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const FEED_URL = "https://feeds.newsfilecorp.com/company/7416";

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const res = await fetch(FEED_URL, {
      headers: { Accept: "application/rss+xml, application/xml, text/xml" },
      signal: AbortSignal.timeout(15000),
    });
    if (res.status !== 200 || res.headers.get("x-amzn-waf-action")) {
      throw new Error(`Newsfile feed unavailable: ${res.status}`);
    }
    const items = parseNewsFeed(await res.text());

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
