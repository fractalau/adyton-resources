import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import { seoConfig } from "@/config/seo";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

const fetchAllNews = async () => {
  const [rssRes, annRes] = await Promise.all([
    supabase.functions.invoke("fetch-rss"),
    supabase.functions.invoke("fetch-announcements"),
  ]);

  const rssItems = (rssRes.data?.items ?? []).map((item: any, i: number) => ({
    slug: `rss-${i}`,
    title: item.title,
    date: new Date(item.pubDate).toLocaleDateString("en-US", {
      year: "numeric", month: "long", day: "numeric",
    }),
    excerpt: item.excerpt || "",
    sourceUrl: item.link,
    source: "Newsfile",
  }));

  const annItems = (annRes.data?.items ?? []).map((item: any, i: number) => ({
    slug: `ann-${i}`,
    title: item.title,
    date: item.date,
    excerpt: "",
    sourceUrl: item.link,
    source: "adytonresources.com",
  }));

  return [...rssItems, ...annItems];
};

const NewsDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const { data: allNews = [], isLoading } = useQuery({
    queryKey: ["all-news-detail"],
    queryFn: fetchAllNews,
    staleTime: 1000 * 60 * 15,
  });

  const article = allNews.find((n) => n.slug === slug);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={article?.title || "News"}
        description={article?.excerpt || "Adyton Resources news article"}
        canonical={`${seoConfig.siteUrl}/news/${slug}`}
      />
      <Header />

      <main>
        {/* Blue title section */}
        <section style={{ background: "#10374c" }} className="py-14 md:py-20">
          <div className="container max-w-3xl">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/news")}
              className="text-white/60 hover:text-white hover:bg-white/10 mb-6 -ml-2"
            >
              <ArrowLeft className="h-4 w-4 mr-1.5" /> Back to News
            </Button>

            {isLoading ? (
              <div className="flex justify-center py-8">
                <Loader2 className="h-6 w-6 animate-spin text-white/60" />
              </div>
            ) : article ? (
              <>
                <p className="text-sm text-white/50 mb-3 font-body">{article.date}</p>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white leading-tight">
                  {article.title}
                </h1>
                {article.excerpt && (
                  <p className="text-lg text-white/70 mt-4 leading-relaxed font-body">
                    {article.excerpt}
                  </p>
                )}
              </>
            ) : (
              <h1 className="text-3xl font-display font-bold text-white">Article not found</h1>
            )}
          </div>
        </section>

        {/* White body section */}
        <section style={{ background: "#ffffff" }} className="py-12 md:py-16">
          <div className="container max-w-3xl">
            {isLoading ? (
              <div className="flex justify-center py-12">
                <Loader2 className="h-6 w-6 animate-spin text-primary" />
              </div>
            ) : article ? (
              <>
                {/* Source attribution */}
                <div
                  className="rounded-lg p-5 mb-8"
                  style={{ background: "hsl(var(--light-bg))", border: "1px solid hsl(var(--light-border))" }}
                >
                  <p className="text-sm mb-2" style={{ color: "hsl(var(--light-muted-foreground))", fontSize: "14px" }}>
                    Originally published via {article.source}
                  </p>
                  <a
                    href={article.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 inline-flex items-center gap-1.5 font-medium"
                    style={{ fontSize: "16px" }}
                  >
                    View original source <ExternalLink className="h-4 w-4" />
                  </a>
                </div>

                {/* Body text placeholder */}
                <div style={{ fontSize: "18px", lineHeight: "1.75", color: "hsl(var(--light-foreground))" }}>
                  <p className="font-body" style={{ color: "hsl(var(--light-muted-foreground))" }}>
                    This press release was originally published on {article.source}. Please click the link above to read the full article on the original source.
                  </p>
                </div>

                {/* CTA */}
                <div className="mt-10">
                  <Button variant="gold" asChild>
                    <a href={article.sourceUrl} target="_blank" rel="noopener noreferrer">
                      Read Full Release <ExternalLink className="h-4 w-4 ml-1.5" />
                    </a>
                  </Button>
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <p style={{ fontSize: "18px", color: "hsl(var(--light-muted-foreground))" }} className="font-body">
                  This article could not be found.
                </p>
                <Button variant="gold-outline" className="mt-4" asChild>
                  <Link to="/news">Browse all news</Link>
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NewsDetail;
