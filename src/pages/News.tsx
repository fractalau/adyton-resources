import { useState, useEffect } from "react";
import { Calendar, ArrowRight, ExternalLink } from "lucide-react";

// Define what a news item looks like coming from the proxy
interface NewsItem {
  title: string;
  pubDate: string;
  link: string;
  description: string;
}

const NewsSection = () => {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 1. The direct RSS URL for Adyton Resources on Newsfile Corp
    // (If this link ever changes, just right-click the "RSS" button on their Newsfile page and copy the new link)
    const adytonRssUrl = "https://www.newsfilecorp.com/company/7416/rss";

    // 2. Wrap it in the free rss2json proxy to bypass CORS and convert XML to JSON
    const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(adytonRssUrl)}`;

    const fetchNews = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.status === "ok") {
          // Grab the 3 most recent press releases
          setNewsItems(data.items.slice(0, 3));
        }
      } catch (error) {
        console.error("Failed to fetch Adyton news:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <section className="py-20 bg-[#0F172A] border-t border-white/10" id="news">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex justify-between items-end mb-12">
          <div>
            <p className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-2">Latest Updates</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white">News & Press Releases</h2>
          </div>

          <a
            href="https://www.newsfilecorp.com/company/7416/Adyton-Resources-Corporation"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-primary hover:text-white transition-colors text-sm font-semibold"
          >
            View All News <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Loading State */}
        {isLoading ? (
          <div className="grid md:grid-cols-3 gap-8 animate-pulse">
            {[1, 2, 3].map((skeleton) => (
              <div key={skeleton} className="h-64 bg-white/5 rounded-lg border border-white/10"></div>
            ))}
          </div>
        ) : (
          /* News Grid */
          <div className="grid md:grid-cols-3 gap-8">
            {newsItems.map((item, index) => {
              // Format the date to look professional (e.g., "March 25, 2026")
              const formattedDate = new Date(item.pubDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              });

              return (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-white/5 border border-white/10 rounded-lg p-8 hover:bg-white/10 hover:border-primary/50 transition-all duration-300 flex flex-col h-full"
                >
                  <div className="flex items-center gap-2 text-white/50 text-xs font-mono mb-4">
                    <Calendar className="w-4 h-4 text-primary" />
                    {formattedDate}
                  </div>

                  {/* We truncate the title to 3 lines using Tailwind's line-clamp so the cards stay even */}
                  <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors mb-4 line-clamp-3">
                    {item.title}
                  </h3>

                  <div className="mt-auto pt-6 flex items-center text-sm font-semibold text-primary group-hover:text-white transition-colors">
                    Read Release <ExternalLink className="w-4 h-4 ml-2" />
                  </div>
                </a>
              );
            })}
          </div>
        )}

        {/* Mobile View All Button */}
        <div className="mt-8 text-center md:hidden">
          <a
            href="https://www.newsfilecorp.com/company/7416/Adyton-Resources-Corporation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors text-sm font-semibold border border-primary px-6 py-3 rounded-md hover:bg-primary hover:text-[#0F172A]"
          >
            View All News <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
