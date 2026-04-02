import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const PAGE_URL = "https://adytonresources.com/announcements/";

interface Announcement {
  title: string;
  link: string;
  date: string;
  pdfUrl: string | null;
}

function extractAnnouncements(html: string): Announcement[] {
  const items: Announcement[] = [];
  // Each announcement row is a et_pb_row containing a blurb with title/date
  // and optionally a PDF download link
  const rowRegex = /et_pb_row[^"]*et_pb_row_3-5_1-5_1-5">([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/g;
  
  // Simpler approach: extract all blurbs
  const blurbRegex = /<div class="et_pb_blurb_container">\s*<h4[^>]*><a href="([^"]+)"[^>]*>([\s\S]*?)<\/a><\/h4>\s*<div class="et_pb_blurb_description"><p>([\s\S]*?)<\/p><\/div>/g;
  
  let match;
  while ((match = blurbRegex.exec(html)) !== null) {
    const link = match[1].trim();
    const title = match[2].replace(/<[^>]+>/g, "").trim();
    const date = match[3].replace(/<[^>]+>/g, "").trim();
    
    items.push({ title, link, date, pdfUrl: null });
  }

  // Now try to find PDF links associated with each row
  // PDF links appear in the same row as the blurb, in the download column
  const pdfRegex = /href="([^"]*\.pdf)"[^>]*>/g;
  const pdfLinks: string[] = [];
  let pdfMatch;
  while ((pdfMatch = pdfRegex.exec(html)) !== null) {
    pdfLinks.push(pdfMatch[1]);
  }

  // Associate PDFs with items by position (they appear in order)
  // Some items link to pages instead of PDFs, so we match by row position
  // For now, attach PDFs we find in order to items that don't already have article links
  // Actually, let's just provide the PDF links separately
  
  return items;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const res = await fetch(PAGE_URL, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; AdytonBot/1.0)",
        Accept: "text/html",
      },
    });

    if (!res.ok) {
      throw new Error(`Fetch failed: ${res.status}`);
    }

    const html = await res.text();
    const items = extractAnnouncements(html);

    return new Response(JSON.stringify({ items }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("fetch-announcements error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch announcements" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
