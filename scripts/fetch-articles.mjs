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
    .replace(/&[a-zA-Z]+;/g, m => named[m] || m)
    .replace(/&#x([0-9a-fA-F]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(parseInt(dec, 10)));
}

/**
 * Split HTML into top-level segments (roughly by <p>, <table>, <div> etc.)
 * so we can process each block independently.
 */
function splitIntoBlocks(html) {
  // Split on </p>, </table>, </div> boundaries while keeping delimiters
  const blocks = [];
  // Use a simple approach: split on closing paragraph/block tags
  const parts = html.split(/(<\/p>|<\/table>|<\/div>)/gi);
  let current = '';
  for (const part of parts) {
    current += part;
    if (/^<\/(p|table|div)>$/i.test(part)) {
      blocks.push(current);
      current = '';
    }
  }
  if (current.trim()) blocks.push(current);
  return blocks;
}

/**
 * Check if a block is primarily an image block (contains newsfilecorp image)
 */
function isImageBlock(block) {
  return /<img[^>]*src="https:\/\/images\.newsfilecorp\.com/i.test(block);
}

/**
 * Check if a block is a "To view enhanced version" caption block
 */
function isViewEnhancedBlock(block) {
  const text = block.replace(/<[^>]+>/g, '').trim();
  return /^To view an enhanced version/i.test(text) || 
         /^https:\/\/images\.newsfilecorp\.com/i.test(text);
}

/**
 * Extract image info from an image block
 */
function extractImageFromBlock(block) {
  // Get the full-size URL (from <a href>) and thumbnail (from <img src>)
  const linkMatch = block.match(/href="(https:\/\/images\.newsfilecorp\.com\/[^"]+)"/i);
  const srcMatch = block.match(/src="(https:\/\/images\.newsfilecorp\.com\/[^"]+)"/i);
  
  if (!srcMatch) return null;
  
  // Skip tracking pixels
  if (srcMatch[1].includes('/newsinfo/')) return null;
  
  const fullUrl = linkMatch ? linkMatch[1] : srcMatch[1];
  const thumb = srcMatch[1];
  
  // Get alt text
  const altMatch = block.match(/alt="([^"]*)"/i);
  let alt = altMatch ? decodeEntities(altMatch[1]) : '';
  if (alt.startsWith('Cannot view this image')) alt = '';
  
  // Get caption - text content of the block excluding the image/link parts
  // Look for figure captions like "Figure 1: ..." 
  let caption = '';
  const captionMatch = block.match(/<b>(Figure \d+[^<]*)<\/b>:\s*([^<]+)/i)
    || block.match(/<b>(Figure \d+[^<]*)<\/b>/i);
  if (captionMatch) {
    caption = decodeEntities((captionMatch[1] + (captionMatch[2] ? ': ' + captionMatch[2] : '')).trim());
  }

  // Use full-size URL, removing _550 suffix
  const url = fullUrl.replace(/_\d+(\.\w+)$/, '$1');
  
  return { url, thumb, alt, caption };
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

  // Remove script tags, style tags, noscript, tracking pixels
  articleHtml = articleHtml.replace(/<script[\s\S]*?<\/script>/gi, '');
  articleHtml = articleHtml.replace(/<style[\s\S]*?<\/style>/gi, '');
  articleHtml = articleHtml.replace(/<noscript[\s\S]*?<\/noscript>/gi, '');
  articleHtml = articleHtml.replace(/<img[^>]*class="tracker"[^>]*>/gi, '');
  articleHtml = articleHtml.replace(/\s+on\w+="[^"]*"/gi, '');
  // Remove source attribution
  articleHtml = articleHtml.replace(/<p>\s*Source:\s*<a[^>]*>.*?<\/a>\s*<\/p>/gi, '');
  // Remove corporateLinkBack
  articleHtml = articleHtml.replace(/<p[^>]*id="corporateLinkBack"[^>]*>[\s\S]*?<\/p>/gi, '');

  // Process block by block to extract images and text separately
  const blocks = splitIntoBlocks(articleHtml);
  const images = [];
  const textBlocks = [];
  // Track paragraph index where each image should be inserted
  const imageInsertions = []; // { paragraphIndex, imageIndex }

  for (const block of blocks) {
    if (isImageBlock(block)) {
      const img = extractImageFromBlock(block);
      if (img) {
        const imgIndex = images.length;
        images.push(img);
        // Insert after the current paragraph count
        imageInsertions.push({ paragraphIndex: textBlocks.length, imageIndex: imgIndex });
      }
      // Don't add image blocks to text
      continue;
    }
    
    if (isViewEnhancedBlock(block)) {
      // Skip "To view enhanced version..." blocks
      continue;
    }
    
    textBlocks.push(block);
  }

  // Convert remaining HTML blocks to clean text
  let cleanBody = textBlocks.join('')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n\n')
    .replace(/<\/tr>/gi, '\n')
    .replace(/<\/td>/gi, ' | ')
    .replace(/<\/th>/gi, ' | ')
    .replace(/<\/li>/gi, '\n')
    .replace(/<li[^>]*>/gi, '• ')
    .replace(/<[^>]+>/g, '');

  // Decode entities
  cleanBody = decodeEntities(cleanBody);

  // Clean up whitespace
  cleanBody = cleanBody
    .replace(/[ \t]+/g, ' ')
    .replace(/ *\n */g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

  // Remove leftover "To view enhanced version" lines
  cleanBody = cleanBody.replace(/To view an enhanced version of this graphic.*?\n?/gi, '');
  cleanBody = cleanBody.replace(/https:\/\/images\.newsfilecorp\.com\/[^\s\n]+\n?/g, '');
  cleanBody = cleanBody.replace(/\n{3,}/g, '\n\n').trim();

  // Extract first meaningful paragraph as excerpt
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

      console.log(`  ✓ ${content.title.slice(0, 60)}... (${content.images.length} imgs, ${content.body.length} chars)`);
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
