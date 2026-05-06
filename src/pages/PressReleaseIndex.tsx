import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useSEO } from "@/hooks/useSEO";
import articles from "@/data/articles.json";

const PressReleaseIndex = () => {
  useSEO("Press Releases", "Adyton Resources press release archive.");

  return (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="container py-16 max-w-3xl">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-8">Press Releases</h1>
      <div className="space-y-4">
        {articles.map((a: { slug: string; title: string; date: string }) => (
          <Link
            key={a.slug}
            to={`/pr/${a.slug}`}
            className="block rounded-lg border border-border p-4 hover:border-primary/50 transition-colors"
          >
            <p className="text-sm font-display font-semibold text-foreground">{a.title}</p>
            <p className="text-sm text-foreground/50 mt-1 font-body">{a.date}</p>
          </Link>
        ))}
      </div>
    </main>
    <Footer />
  </div>
  );
};

export default PressReleaseIndex;
