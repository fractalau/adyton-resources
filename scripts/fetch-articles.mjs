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
    .slice(0, 200);
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
  const linkRegex = /href="\/release\/(\d+)\/([^"]+)"/g;
  const seen = new Set();
  let match;
  while ((match = linkRegex.exec(html)) !== null) {
    const [, id, slug] = match;
    if (!seen.has(id)) {
      seen.add(id);
      articles.push({
        newsfileId: id,
        newsfileUrl: `https://www.newsfilecorp.com/release/${id}/${slug}`,
      });
    }
  }
  return articles;
}

/**
 * Decode all HTML entities (named, numeric decimal, numeric hex)
 */
function decodeEntities(str) {
  const named = {
    '&nbsp;': ' ', '&amp;': '&', '&lt;': '<', '&gt;': '>',
    '&quot;': '"', '&#39;': "'", '&apos;': "'",
    '&ndash;': '\u2013', '&mdash;': '\u2014', '&lsquo;': '\u2018',
    '&rsquo;': '\u2019', '&ldquo;': '\u201C', '&rdquo;': '\u201D',
    '&bull;': '\u2022', '&hellip;': '\u2026', '&trade;': '\u2122',
    '&copy;': '\u00A9', '&reg;': '\u00AE', '&deg;': '\u00B0',
    '&plusmn;': '\u00B1', '&times;': '\u00D7', '&divide;': '\u00F7',
    '&micro;': '\u00B5', '&para;': '\u00B6', '&sect;': '\u00A7',
    '&laquo;': '\u00AB', '&raquo;': '\u00BB', '&cent;': '\u00A2',
    '&pound;': '\u00A3', '&yen;': '\u00A5', '&euro;': '\u20AC',
    '&frac12;': '\u00BD', '&frac14;': '\u00BC', '&frac34;': '\u00BE',
    '&sup2;': '\u00B2', '&sup3;': '\u00B3',
  };

  return str
    // Named entities
    .replace(/&[a-zA-Z]+;/g, m => named[m] || m)
    // Hex numeric entities: &#x2010; &#X2010;
    .replace(/&#x([0-9a-fA-F]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    // Decimal numeric entities: &#8208;
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(parseInt(dec, 10)));
}

/**
 * Extract images from article HTML. Returns array of { url, caption, position }
 * position = character index in the cleaned text where the image appeared
 */
function extractImages(articleHtml) {
  const images = [];
  // Match <img> tags with newsfilecorp image URLs
  const imgRegex = /<(?:a[^>]*href="(https:\/\/images\.newsfilecorp\.com\/[^"]+)"[^>]*>)?\s*<img[^>]*src="(https:\/\/images\.newsfilecorp\.com\/[^"]+)"[^>]*>(?:\s*<\/a>)?/gi;
  let match;
  while ((match = imgRegex.exec(articleHtml)) !== null) {
    const fullUrl = match[1] || match[2]; // Prefer the link href (full-size) over thumbnail src
    const thumbUrl = match[2];
    
    // Skip tracking pixels
    if (thumbUrl.includes('/newsinfo/')) continue;

    // Extract alt text
    const altMatch = match[0].match(/alt="([^"]*)"/);
    const alt = altMatch ? decodeEntities(altMatch[1]).replace(/^Cannot view this image\? Visit:\s*/i, '') : '';

    // Look for caption text after the image (often in the same <p> or next element)
    let caption = '';
    const afterImg = articleHtml.slice(match.index + match[0].length, match.index + match[0].length + 500);
    // Caption patterns: <br>...<br> or plain text before next tag
    const captionMatch = afterImg.match(/(?:<br\s*\/?>[\s\n]*){1,2}([^<]+?)(?:<br|<\/p|<p[ >])/si);
    if (captionMatch) {
      const c = decodeEntities(captionMatch[1].trim());
      // Filter out "To view an enhanced version..." links
      if (c && !c.startsWith('To view an enhanced') && !c.startsWith('https://images.newsfile')) {
        caption = c;
      }
    }

    // Use full-size URL, removing _550 suffix if present
    const url = fullUrl.replace(/_\d+(\.\w+)$/, '$1');

    images.push({ url, thumb: thumbUrl, alt, caption });
  }
  return images;
}

/**
 * Extract clean article content from the <article id="release"> element
 */
function extractArticleContent(html) {
  // Extract title from the banner <h1>
  const titleMatch = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  const title = titleMatch ? decodeEntities(titleMatch[1].replace(/<[^>]+>/g, '').trim()) : '';

  // Extract date from banner
  const dateMatch = html.match(/(\w+ \d{1,2}, \d{4})\s+\d{1,2}:\d{2}\s+[AP]M\s+E[SD]T/);
  const date = dateMatch ? dateMatch[1] : '';

  // Extract the <article id="release"> content
  const articleMatch = html.match(/<article[^>]*id="release"[^>]*>([\s\S]*?)<\/article>/);
  if (!articleMatch) {
    return { title, date, body: '', excerpt: '', images: [] };
  }

  let articleHtml = articleMatch[1];

  // Extract images before cleaning
  const images = extractImages(articleHtml);

  // Remove script tags and their content
  articleHtml = articleHtml.replace(/<script[\s\S]*?<\/script>/gi, '');
  // Remove style tags
  articleHtml = articleHtml.replace(/<style[\s\S]*?<\/style>/gi, '');
  // Remove tracking pixels
  articleHtml = articleHtml.replace(/<img[^>]*class="tracker"[^>]*>/gi, '');
  // Remove inline event handlers
  articleHtml = articleHtml.replace(/\s+on\w+="[^"]*"/gi, '');
  // Remove noscript
  articleHtml = articleHtml.replace(/<noscript[\s\S]*?<\/noscript>/gi, '');
  // Remove the source attribution at the bottom (Source: Adyton...)
  articleHtml = articleHtml.replace(/<p>\s*Source:\s*<a[^>]*>.*?<\/a>\s*<\/p>/gi, '');
  // Remove corporateLinkBack
  articleHtml = articleHtml.replace(/<p[^>]*id="corporateLinkBack"[^>]*>[\s\S]*?<\/p>/gi, '');

  // Remove image blocks (we handle them separately via the images array)
  // Remove <p> blocks that contain newsfilecorp images and their captions
  articleHtml = articleHtml.replace(/<p[^>]*>[\s\S]*?<img[^>]*src="https:\/\/images\.newsfilecorp\.com[^"]*"[^>]*>[\s\S]*?<\/p>/gi, '');

  // Insert image placeholders at roughly the right position
  // We'll use a marker format: {{IMAGE:index}}
  // For now, images go at the end of the main content, before forward-looking statements

  // Convert HTML to clean text with paragraph breaks
  let cleanBody = articleHtml
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n\n')
    .replace(/<\/tr>/gi, '\n')
    .replace(/<\/td>/gi, ' | ')
    .replace(/<\/th>/gi, ' | ')
    .replace(/<\/li>/gi, '\n')
    .replace(/<li[^>]*>/gi, '• ')
    .replace(/<\/?(strong|b)[^>]*>/gi, '')
    .replace(/<\/?(em|i)[^>]*>/gi, '')
    .replace(/<\/?(u|span|a|div|table|tr|td|th|thead|tbody|img|figure|figcaption|ul|ol|h[1-6]|p|section|article|blockquote|cite|sup|sub|small|big|center|font|abbr|acronym|address|code|pre|samp|var|kbd|tt|mark|del|ins|s|strike|caption|col|colgroup|tfoot|dd|dt|dl|fieldset|legend|label|select|option|optgroup|button|input|textarea|form|details|summary|dialog|nav|header|footer|aside|main|time|wbr|nobr|map|area|source|track|video|audio|picture|canvas|svg|path|g|defs|use|symbol|clipPath|mask|pattern|linearGradient|radialGradient|stop|rect|circle|ellipse|line|polyline|polygon|text|tspan)[^>]*>/gi, '')
    .replace(/<[^>]+>/g, '');

  // Decode all HTML entities
  cleanBody = decodeEntities(cleanBody);

  // Clean up whitespace
  cleanBody = cleanBody
    .replace(/[ \t]+/g, ' ')       // collapse horizontal whitespace
    .replace(/ *\n */g, '\n')      // trim lines
    .replace(/\n{3,}/g, '\n\n')    // max 2 newlines
    .trim();

  // Remove "To view an enhanced version..." lines
  cleanBody = cleanBody.replace(/To view an enhanced version of this graphic.*?\n?/gi, '');
  cleanBody = cleanBody.replace(/https:\/\/images\.newsfilecorp\.com\/[^\s\n]+\n?/g, '');

  // Extract first meaningful paragraph as excerpt (skip location/dateline)
  const paragraphs = cleanBody.split('\n\n').filter(p => p.trim().length > 50);
  const excerpt = paragraphs[0]?.slice(0, 300)?.trim() || '';

  return { title, date, body: cleanBody, excerpt, images };
}

async function main() {
  console.log('📰 Fetching Adyton press releases from Newsfile...');

  const companyHtml = await fetchPage(COMPANY_URL);
  const articleLinks = extractArticleLinks(companyHtml);
  console.log(`Found ${articleLinks.length} articles`);

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
        images: content.images,
        fetchedAt: new Date().toISOString(),
      });

      console.log(`  ✓ ${content.title.slice(0, 60)}... (${content.images.length} images)`);
      await delay(500);
    } catch (err) {
      console.error(`  ❌ Failed to fetch ${link.newsfileId}: ${err.message}`);
    }
  }

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
