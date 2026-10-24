import { XMLParser } from "npm:fast-xml-parser@5.3.0";

export interface NewsItem {
  title: string;
  link: string;
  pubDate: string;
  excerpt: string;
}

export function parseNewsFeed(xml: string): NewsItem[] {
  const parser = new XMLParser({ ignoreAttributes: true });
  const feed = parser.parse(xml);
  const entries = feed?.rss?.channel?.item;
  if (!entries) throw new Error("Newsfile returned no RSS releases");

  const seen = new Set<string>();
  const items: NewsItem[] = [];
  for (const entry of Array.isArray(entries) ? entries : [entries]) {
    const { title, link, pubDate } = entry;
    if (typeof title !== "string" || typeof link !== "string" || typeof pubDate !== "string") continue;
    if (!/^https:\/\/www\.newsfilecorp\.com\/release\/\d+(?:\/|$)/.test(link)) continue;
    if (!Number.isFinite(Date.parse(pubDate)) || seen.has(link)) continue;
    seen.add(link);
    const excerpt = String(entry.description ?? "")
      .replace(/<[^>]*>/g, "")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 200);
    items.push({ title: title.trim(), link, pubDate, excerpt });
  }
  if (!items.length) throw new Error("Newsfile returned no valid releases");
  return items.sort((a, b) => Date.parse(b.pubDate) - Date.parse(a.pubDate));
}