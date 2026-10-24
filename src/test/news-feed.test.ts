import { describe, expect, it } from "vitest";
import { parseNewsFeed } from "../../supabase/functions/fetch-rss/feed";

const item = (id: number, date: string) => `<item>
  <title>Adyton Gold &amp; Copper</title>
  <link>https://www.newsfilecorp.com/release/${id}/Adyton</link>
  <pubDate>${date}</pubDate>
  <description><![CDATA[Exploration update<img src="https://api.newsfilecorp.com/newsinfo/1/156" />]]></description>
</item>`;

describe("Newsfile RSS feed", () => {
  it("parses a single release, decodes entities and removes tracking images", () => {
    const result = parseNewsFeed(`<rss><channel>${item(320574, "Fri, 23 Oct 2026 06:00:00 -0400")}</channel></rss>`);
    expect(result).toEqual([{ title: "Adyton Gold & Copper", link: "https://www.newsfilecorp.com/release/320574/Adyton", pubDate: "Fri, 23 Oct 2026 06:00:00 -0400", excerpt: "Exploration update" }]);
  });

  it("deduplicates releases and sorts newest first", () => {
    const older = item(316123, "Fri, 25 Sep 2026 18:00:00 -0400");
    const newer = item(320574, "Fri, 23 Oct 2026 06:00:00 -0400");
    const result = parseNewsFeed(`<rss><channel>${older}${newer}${older}</channel></rss>`);
    expect(result.map(entry => entry.link)).toEqual(["https://www.newsfilecorp.com/release/320574/Adyton", "https://www.newsfilecorp.com/release/316123/Adyton"]);
  });

  it("rejects challenge pages and empty feeds instead of reporting success", () => {
    expect(() => parseNewsFeed("<html><body>Challenge</body></html>")).toThrow();
    expect(() => parseNewsFeed("<rss><channel></channel></rss>")).toThrow();
  });
});