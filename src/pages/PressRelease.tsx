import { useParams, Link } from "react-router-dom";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import ArticleSchema from "@/components/schema/ArticleSchema";
import { seoConfig } from "@/config/seo";
import articles from "@/data/articles.json";

interface ArticleImage {
  url: string;
  thumb: string;
  alt: string;
  caption: string;
}

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

  const images: ArticleImage[] = (article as any).images || [];

  // Split body into paragraphs and insert images at natural break points
  const paragraphs = article.body.split("\n\n").filter((p: string) => p.trim().length > 0);

  // Place images after roughly 1/3 of the content, then evenly spaced
  const imagePositions: Map<number, ArticleImage[]> = new Map();
  if (images.length > 0) {
    const interval = Math.max(3, Math.floor(paragraphs.length / (images.length + 1)));
    images.forEach((img, i) => {
      const pos = Math.min((i + 1) * interval, paragraphs.length - 1);
      const existing = imagePositions.get(pos) || [];
      existing.push(img);
      imagePositions.set(pos, existing);
    });
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

            {/* Article body with inline images */}
            <div className="prose prose-sm max-w-none mb-10">
              {paragraphs.map((paragraph: string, i: number) => {
                // Detect pipe-delimited table blocks
                const lines = paragraph.split("\n").filter((l: string) => l.trim().length > 0);
                const isTable = lines.length >= 2 && lines.every((l: string) => l.includes("|"));

                return (
                <div key={i}>
                  {isTable ? (
                    <div className="overflow-x-auto mb-4 rounded-lg" style={{ border: "1px solid hsl(var(--light-border))" }}>
                      <table className="w-full text-xs">
                        {lines.map((row: string, ri: number) => {
                          const cells = row.split("|").map((c: string) => c.trim()).filter((c: string) => c.length > 0);
                          const Tag = ri === 0 ? "th" : "td";
                          return (
                            <tr
                              key={ri}
                              className={ri === 0 ? "" : "border-t"}
                              style={{ borderColor: "hsl(var(--light-border))" }}
                            >
                              {cells.map((cell: string, ci: number) => (
                                <Tag
                                  key={ci}
                                  className={`px-3 py-2 text-left whitespace-nowrap ${ri === 0 ? "font-semibold" : ""}`}
                                  style={{
                                    color: ri === 0 ? "hsl(var(--light-foreground))" : "hsl(var(--light-muted-foreground))",
                                    background: ri === 0 ? "hsl(var(--light-card))" : "transparent",
                                  }}
                                >
                                  {cell}
                                </Tag>
                              ))}
                            </tr>
                          );
                        })}
                      </table>
                    </div>
                  ) : (
                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{ color: "hsl(var(--light-muted-foreground))" }}
                  >
                    {paragraph}
                  </p>
                  )}
                  {imagePositions.has(i) && imagePositions.get(i)!.map((img, imgIdx) => (
                    <figure key={imgIdx} className="my-6">
                      <a
                        href={img.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <img
                          src={img.url}
                          alt={img.alt || img.caption || "Press release image"}
                          className="w-full rounded-lg"
                          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                          style={{
                            border: "1px solid hsl(var(--light-border))",
                          }}
                          loading="lazy"
                        />
                      </a>
                      {img.caption && (
                        <figcaption
                          className="text-xs mt-2 text-center italic"
                          style={{ color: "hsl(var(--light-muted-foreground))" }}
                        >
                          {img.caption}
                        </figcaption>
                      )}
                    </figure>
                  ))}
                </div>
                );
              })}
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
