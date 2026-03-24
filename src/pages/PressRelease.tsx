import { useParams, Link } from "react-router-dom";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import ArticleSchema from "@/components/schema/ArticleSchema";
import { seoConfig } from "@/config/seo";
import articles from "@/data/articles.json";

const PressRelease = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a: any) => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen" style={{ background: "hsl(var(--light-bg))" }}>
        <Header />
        <main className="py-20">
          <div className="container max-w-3xl text-center">
            <h1 className="text-3xl font-display font-bold mb-4" style={{ color: "hsl(var(--light-foreground))" }}>
              Press Release Not Found
            </h1>
            <p className="mb-6" style={{ color: "hsl(var(--light-muted-foreground))" }}>
              This press release may have been moved or is no longer available.
            </p>
            <Button variant="gold" asChild>
              <Link to="/news">View All News</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: "hsl(var(--light-bg))" }}>
      <SEO
        title={article.title}
        description={article.excerpt}
        canonical={`${seoConfig.siteUrl}/pr/${article.slug}`}
        ogType="article"
        noIndex={true}
      />
      <ArticleSchema
        headline={article.title}
        datePublished={article.date}
        description={article.excerpt}
      />
      <Header />
      <main>
        <article className="py-16 md:py-20">
          <div className="container max-w-3xl">
            {/* Back link - subtle, not prominent */}
            <Link
              to="/news"
              className="inline-flex items-center gap-1.5 text-sm mb-6 hover:text-primary transition-colors"
              style={{ color: "hsl(var(--light-muted-foreground))" }}
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to News
            </Link>

            <p className="text-sm mb-3" style={{ color: "hsl(var(--light-muted-foreground))" }}>
              {article.date}
            </p>

            <h1
              className="text-3xl md:text-4xl font-display font-bold leading-tight mb-6"
              style={{ color: "hsl(var(--light-foreground))" }}
            >
              {article.title}
            </h1>

            {/* Article body */}
            <div className="prose prose-sm max-w-none mb-10">
              {article.body.split("\n\n").map((paragraph: string, i: number) => (
                <p
                  key={i}
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: "hsl(var(--light-muted-foreground))" }}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Source attribution */}
            <div
              className="rounded-lg p-5 mb-8"
              style={{
                background: "hsl(var(--light-card))",
                border: "1px solid hsl(var(--light-border))",
              }}
            >
              <p className="text-xs mb-2" style={{ color: "hsl(var(--light-muted-foreground))" }}>
                Originally published via Newsfile Corp.
              </p>
              <Button variant="gold-outline" size="sm" asChild>
                <a
                  href={article.newsfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Original Source <ExternalLink className="h-3 w-3" />
                </a>
              </Button>
            </div>

            {/* Investor CTA */}
            <div
              className="rounded-lg p-6 text-center"
              style={{
                background: "hsl(var(--light-card))",
                border: "1px solid hsl(var(--light-border))",
              }}
            >
              <p className="font-display font-semibold mb-2" style={{ color: "hsl(var(--light-foreground))" }}>
                Interested in Adyton Resources?
              </p>
              <p className="text-sm mb-4" style={{ color: "hsl(var(--light-muted-foreground))" }}>
                Learn more about our gold and copper exploration projects in Papua New Guinea.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Button variant="gold" size="sm" asChild>
                  <Link to="/investors">Investor Hub</Link>
                </Button>
                <Button variant="gold-outline" size="sm" asChild>
                  <Link to="/projects/feni">Explore Projects</Link>
                </Button>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default PressRelease;
