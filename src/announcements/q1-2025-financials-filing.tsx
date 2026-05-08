import Header from "@/components/layout/Header";
import Subscribe from "@/components/layout/Subscribe";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import ArticleSchema from "@/components/schema/ArticleSchema";
import { seoConfig } from "@/config/seo";
import AboutAdyton from "@/components/AboutAdyton";

const SLUG = "adyton-resources-announces-filing-of-financial-statements-and-mda-for-the-three-months-ended-march-31-2025";

const ARTICLE = {
  title: "Adyton Resources Announces Filing of Financial Statements and MD&A for the Three Months Ended March 31, 2025",
  date: "May 30, 2025",
  excerpt:
    "Adyton Resources has filed its Q1 2025 financial statements and accompanying Management Discussion and Analysis on SEDAR+.",
};

const Q12025FinancialsFiling = () => (
  <div className="min-h-screen bg-background">
    <SEO title={ARTICLE.title} description={ARTICLE.excerpt} canonical={`${seoConfig.siteUrl}/news/${SLUG}`} />
    <ArticleSchema headline={ARTICLE.title} datePublished={ARTICLE.date} description={ARTICLE.excerpt} />
    <Header />

    <main>
      <section className="py-16 md:py-20" style={{ background: "#10374c" }}>
        <div className="container max-w-3xl">
          <p className="uppercase tracking-[0.3em] text-primary font-semibold mb-3 font-body">ANNOUNCEMENT</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white leading-tight mb-4">
            {ARTICLE.title}
          </h1>
          <p className="text-sm text-white/60 font-body">{ARTICLE.date}</p>
        </div>
      </section>
      <Subscribe />

      <section className="py-14 md:py-18" style={{ background: "hsl(var(--off-white))" }}>
        <div className="container max-w-3xl">
          <article
            className="prose prose-lg max-w-none"
            style={{ color: "hsl(var(--text-dark))", fontSize: "18px", lineHeight: 1.75 }}
          >
            <p className="mb-3">
              <strong>Port Moresby, Papua New Guinea – May 28, 2025 – Adyton Resources Corporation</strong> (TSX
              Venture: <strong>ADY</strong>) announces that it has filed its financial statements for the three months
              ended March 31, 2025 and accompanying Management Discussion and Analysis on its SEDAR profile at{" "}
              <a href="https://www.sedarplus.ca" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                www.sedarplus.ca
              </a>
              .
            </p>

            <p className="mb-3"><strong>ON BEHALF OF THE BOARD OF ADYTON RESOURCES CORPORATION</strong></p>
            <p className="mb-4">Tim Crossley, Chief Executive Officer</p>

            <h3 className="font-display font-bold text-xl md:text-2xl mt-8 mb-3">
              For further information please contact:
            </h3>
            <p className="mb-1">Tim Crossley, Chief Executive Officer</p>
            <p className="mb-1">
              E-mail:{" "}
              <a href="mailto:ir@adytonresources.com" className="text-primary hover:underline">
                ir@adytonresources.com
              </a>
            </p>
            <p className="mb-1">Phone: +61 7 3854 2389</p>
            <p className="mb-4">Phone: +1 778 549 6768</p>

            <p className="text-sm italic mb-4">
              Neither the TSX Venture Exchange nor its Regulation Services Provider (as that term is defined in the
              policies of the TSX Venture Exchange) accepts responsibility for the adequacy or accuracy of this press
              release.
            </p>
          </article>
        </div>
      </section>
      <AboutAdyton />
    </main>

    <Footer />
  </div>
);

export default Q12025FinancialsFiling;
