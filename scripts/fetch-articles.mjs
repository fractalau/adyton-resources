/**
 * Build-time script: Scrapes Newsfile company page for Adyton Resources
 * press releases and fetches full article content for each.
 * 
 * Outputs: src/data/articles.json
 * 
 * Usage: node scripts/fetch-articles.mjs
 */

const COMPANY_URL = 'https://www.newsfilecorp.com/company/7416/Adyton-Resources-Corporation';
const OUTPUT_PATH = new URL('../src/data/articles.json', import.meta.url);

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/['']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 80);
}

function delay(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function fetchPage(url) {
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (compatible; AdytonBot/1.0; +https://adytonresources.com)',
      'Accept': 'text/html,application/xhtml+xml',
    },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return await res.text();
}

function extractArticleLinks(html) {
  const articles = [];
  // Match release links: /release/{id}/{slug}
  const linkRegex = /href="(https:\/\/www\.newsfilecorp\.com\/release\/(\d+)\/([^"]+))"/g;
  const seen = new Set();
  let match;
  while ((match = linkRegex.exec(html)) !== null) {
    const [, url, id] = match;
    if (!seen.has(id) && url.includes('Adyton')) {
      seen.add(id);
      articles.push({ newsfileId: id, newsfileUrl: url });
    }
  }
  return articles;
}

function extractArticleContent(html) {
  // Extract title from <h1>
  const titleMatch = html.match(/<h1[^>]*class="[^"]*release-title[^"]*"[^>]*>(.*?)<\/h1>/s)
    || html.match(/<h1[^>]*>(.*?)<\/h1>/s);
  const title = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, '').trim() : '';

  // Extract date
  const dateMatch = html.match(/(\w+ \d{1,2}, \d{4})\s+\d{1,2}:\d{2}\s+[AP]M\s+E[SD]T/);
  const date = dateMatch ? dateMatch[1] : '';

  // Extract body content - look for the main release text
  // Newsfile wraps article body in a specific div
  let body = '';
  const bodyMatch = html.match(/<div[^>]*class="[^"]*release-body[^"]*"[^>]*>([\s\S]*?)<\/div>\s*<div/);
  if (bodyMatch) {
    body = bodyMatch[1];
  } else {
    // Fallback: extract text between the title and the forward-looking statements
    const startMarker = 'Newsfile Corp.';
    const endMarker = 'Forward-looking';
    const startIdx = html.indexOf(startMarker);
    const endIdx = html.indexOf(endMarker, startIdx);
    if (startIdx > -1 && endIdx > -1) {
      body = html.slice(startIdx, endIdx);
    }
  }

  // Clean HTML to plain text with paragraph breaks
  const cleanBody = body
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n\n')
    .replace(/<\/li>/gi, '\n')
    .replace(/<li[^>]*>/gi, '• ')
    .replace(/<\/?(strong|b|em|i|u|span|a|div|table|tr|td|th|thead|tbody|img|figure|figcaption|ul|ol|h[1-6])[^>]*>/gi, '')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\n{3,}/g, '\n\n')
    .trim();

  // Extract first meaningful paragraph as excerpt
  const paragraphs = cleanBody.split('\n\n').filter(p => p.trim().length > 50);
  const excerpt = paragraphs[0]?.slice(0, 300)?.trim() || '';

  return { title, date, body: cleanBody, excerpt };
}

async function main() {
  console.log('📰 Fetching Adyton press releases from Newsfile...');

  // Step 1: Fetch company page to get all article links
  const companyHtml = await fetchPage(COMPANY_URL);
  const articleLinks = extractArticleLinks(companyHtml);
  console.log(`Found ${articleLinks.length} articles`);

  // Step 2: Fetch each article's full content
  const articles = [];
  for (const link of articleLinks) {
    try {
      console.log(`  Fetching: ${link.newsfileId}...`);
      const articleHtml = await fetchPage(link.newsfileUrl);
      const content = extractArticleContent(articleHtml);

      if (!content.title) {
        console.warn(`  ⚠️ Could not extract title for ${link.newsfileId}, skipping`);
        continue;
      }

      articles.push({
        slug: slugify(content.title),
        newsfileId: link.newsfileId,
        newsfileUrl: link.newsfileUrl,
        title: content.title,
        date: content.date,
        excerpt: content.excerpt,
        body: content.body,
        fetchedAt: new Date().toISOString(),
      });

      // Be polite - small delay between requests
      await delay(500);
    } catch (err) {
      console.error(`  ❌ Failed to fetch ${link.newsfileId}: ${err.message}`);
    }
  }

  // Step 3: Write output
  const { writeFileSync, mkdirSync } = await import('fs');
  const { dirname } = await import('path');
  const { fileURLToPath } = await import('url');
  const outPath = fileURLToPath(OUTPUT_PATH);

  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, JSON.stringify(articles, null, 2));
  console.log(`✅ Wrote ${articles.length} articles to src/data/articles.json`);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
