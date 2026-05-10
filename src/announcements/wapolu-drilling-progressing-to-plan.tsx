import Header from "@/components/layout/Header";
import Subscribe from "@/components/layout/Subscribe";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import ArticleSchema from "@/components/schema/ArticleSchema";
import { seoConfig } from "@/config/seo";
import AboutAdyton from "@/components/AboutAdyton";

const ARTICLE = {
  title: "Drilling Progressing to Plan at Fergusson Wapolu Project",
  date: "January 30, 2025",
  slug: "drilling-progressing-to-plan-at-fergusson-wapolu-project",
};

const WapoluDrillingProgressingToPlan = () => (
  <div className="min-h-screen bg-background">
    <SEO title={ARTICLE.title} description={ARTICLE.title} canonical={`${seoConfig.siteUrl}/news/${ARTICLE.slug}`} />
    <ArticleSchema headline={ARTICLE.title} datePublished={ARTICLE.date} description={ARTICLE.title} />
    <Header />

    <main>
      <section className="py-16 md:py-20" style={{ background: "#10374c" }}>
        <div className="container max-w-3xl">
          <p className="uppercase tracking-[0.3em] text-primary font-semibold mb-3 font-body">ANNOUNCEMENT</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-4">
            {ARTICLE.title}
          </h1>
          <p className="text-sm text-white/60 font-body">{ARTICLE.date}</p>
        </div>
      </section>
      <Subscribe />
      <AboutAdyton />
    </main>

    <Footer />
  </div>
);

export default WapoluDrillingProgressingToPlan;
