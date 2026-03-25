import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import articles from "@/data/articles.json";

const PressReleaseIndex = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title="Press Releases"
      description="Adyton Resources press release archive."
      canonical="https://adytonresources.com/pr"
      noIndex
    />
    <Header />
    <main className="container py-16 max-w-3xl">
      <h1 className="text-3xl font-display font-bold text-foreground mb-8">Press Releases</h1>
      <div className="space-y-4">
        {articles.map((a: { slug: string; title: string; date: string }) => (
          <Link
            key={a.slug}
            to={`/pr/${a.slug}`}
            className="block rounded-lg border border-border p-4 hover:border-primary/50 transition-colors"
          >
            <p className="text-sm font-display font-semibold text-foreground">{a.title}</p>
            <p className="text-xs text-foreground/50 mt-1 font-body">{a.date}</p>
          </Link>
        ))}
      </div>
    </main>
    <Footer />
  </div>
);

export default PressReleaseIndex;
