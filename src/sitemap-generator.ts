/**
 * Sitemap generator script.
 * Run: npx tsx src/sitemap-generator.ts
 * Generates public/sitemap.xml from the route definitions.
 */
import * as fs from "fs";
import * as path from "path";

const SITE_URL = "https://adytonresources.com";
const TODAY = new Date().toISOString().split("T")[0];

interface SitemapEntry {
  path: string;
  changefreq: string;
  priority: number;
}

const routes: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: 1.0 },
  { path: "/projects/feni", changefreq: "monthly", priority: 0.8 },
  { path: "/projects/fergusson", changefreq: "monthly", priority: 0.8 },
  { path: "/investors", changefreq: "monthly", priority: 0.8 },
  { path: "/news", changefreq: "weekly", priority: 0.8 },
  { path: "/about", changefreq: "monthly", priority: 0.8 },
  { path: "/why-png", changefreq: "monthly", priority: 0.6 },
  { path: "/contact", changefreq: "monthly", priority: 0.6 },
];

function generateSitemap(): string {
  const urls = routes
    .map(
      (r) => `  <url>
    <loc>${SITE_URL}${r.path === "/" ? "/" : r.path}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority.toFixed(1)}</priority>
  </url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

const outputPath = path.resolve(__dirname, "../public/sitemap.xml");
fs.writeFileSync(outputPath, generateSitemap(), "utf-8");
console.log(`Sitemap generated at ${outputPath}`);
