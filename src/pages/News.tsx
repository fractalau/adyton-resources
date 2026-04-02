import { useState } from "react";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import NewsCard from "@/components/NewsCard";
import SEO from "@/components/SEO";
import { seoConfig } from "@/config/seo";
import projectHeaderBg from "@/assets/project-header-bg.jpg";

const PER_PAGE = 9;

const fetchRss = async () => {
  const { data, error } = await supabase.functions.invoke("fetch-rss");
  if (error) throw error;
  return (data.items ?? []).map((item: any) => ({
    title: item.title,
    date:
      new Date(item.pubDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }) || item.pubDate,
    excerpt: item.excerpt || "",
    tags: [] as string[],
    sourceUrl: item.link,
  }));
};

const fetchAnnouncements = async () => {
  const { data, error } = await supabase.functions.invoke("fetch-announcements");
  if (error) throw error;
  return (data.items ?? []).map((item: any) => ({
    title: item.title,
    date: item.date,
    excerpt: "",
    tags: [] as string[],
    sourceUrl: item.link,
  }));
};

const News = () => {
  const [page, setPage] = useState(1);

  const { data: newsItems = [], isLoading } = useQuery({
    queryKey: ["rss-news-all"],
    queryFn: fetchRss,
    staleTime: 1000 * 60 * 15,
  });

  const totalPages = Math.ceil(newsItems.length / PER_PAGE);
  const paged = newsItems.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const goTo = (p: number) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="News &amp; Announcements"
        description="Latest press releases and corporate announcements from Adyton Resources — exploration updates, drilling results, and regulatory filings."
        canonical={`${seoConfig.siteUrl}/news`}
      />
      <Header />

      <main>
        {/* Hero */}
        <section className="relative bg-background py-16 md:py-20 border-b border-border overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-25"
            style={{ backgroundImage: `url(${projectHeaderBg})` }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80"
            aria-hidden="true"
          />
          <div className="container relative z-10">
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-3 font-body">
              PRESS RELEASES
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4">
              News & Announcements
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl font-body">
              Corporate news, exploration updates, and regulatory filings. All releases link directly to the
              authoritative source.
            </p>
            <p className="text-sm text-foreground/40 mt-2 font-mono">{newsItems.length} announcements</p>
          </div>
        </section>

        {/* News Grid */}
        <section aria-label="News articles" className="py-14 md:py-18" style={{ background: "hsl(var(--off-white))" }}>
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8" style={{ color: "#3e6174" }}>
              Press Releases
            </h2>
            {isLoading ? (
              <div className="flex justify-center py-12">
                <Loader2 className="h-6 w-6 animate-spin text-primary" />
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {paged.map((n, i) => (
                  <NewsCard key={`${page}-${i}`} {...n} />
                ))}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <nav aria-label="Pagination" className="flex items-center justify-center gap-2 mt-12">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => goTo(page - 1)}
                  disabled={page === 1}
                  className="h-9 w-9"
                  style={{ color: "hsl(var(--text-dark))" }}
                  aria-label="Previous page"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <Button
                    key={p}
                    variant={p === page ? "gold" : "ghost"}
                    size="sm"
                    onClick={() => goTo(p)}
                    className="h-9 w-9 p-0 font-mono text-xs"
                    style={p !== page ? { color: "hsl(var(--text-dark))" } : undefined}
                    aria-label={`Page ${p}`}
                    aria-current={p === page ? "page" : undefined}
                  >
                    {p}
                  </Button>
                ))}

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => goTo(page + 1)}
                  disabled={page === totalPages}
                  className="h-9 w-9"
                  style={{ color: "hsl(var(--text-dark))" }}
                  aria-label="Next page"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </nav>
            )}

            <p className="text-center text-xs mt-8 font-body" style={{ color: "hsl(var(--light-muted-foreground))" }}>
              All press releases sourced from{" "}
              <a
                href="https://www.newsfilecorp.com/company/7416/Adyton-Resources-Corporation"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                TMX Newsfile
              </a>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default News;
