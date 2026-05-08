import Header from "@/components/layout/Header";
import Subscribe from "@/components/layout/Subscribe";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import ArticleSchema from "@/components/schema/ArticleSchema";
import { seoConfig } from "@/config/seo";
import AboutAdyton from "@/components/AboutAdyton";

const SLUG = "adyton-resources-featured-on-clarus-securities-mining-watch-list";

const ARTICLE = {
  title: "Adyton Resources Featured on Clarus Securities' Mining Watch List",
  date: "May 21, 2025",
  excerpt:
    "Adyton Resources has been featured in the latest edition of the Clarus Securities Mining Watch List, recognising progress across its Papua New Guinea portfolio.",
};

const ClarusSecuritiesMiningWatchList = () => (
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
              We are pleased to share that Adyton Resources has been featured in the latest edition of the{" "}
              <strong>Clarus Securities Mining Watch List</strong> — a trusted publication among institutional investors
              tracking high-potential exploration and development-stage mining companies.
            </p>

            <p className="mb-3">
              <strong>Clarus Securities</strong>, based in Toronto, is a leading independent investment dealer known
              for its in-depth, research-focused approach to small and mid-cap equities. The Mining Watch List is a
              curated selection of companies Clarus believes are well-positioned to create shareholder value through
              technical progress, sound management, and favourable market exposure.
            </p>

            <p className="mb-3">
              Our inclusion in the list reflects the <strong>growing interest in Adyton's progress across its Papua
              New Guinea portfolio</strong>, particularly the:
            </p>

            <ul className="mb-4 pl-6 list-disc">
              <li className="mb-1">
                <strong>Advancement of drilling programs</strong> at both <strong>Wapolu</strong> and{" "}
                <strong>Gameta</strong> on Fergusson Island
              </li>
              <li className="mb-1">
                Commencement of drilling at <strong>Feni Island</strong>, with a focus on expanding the gold-copper
                resource
              </li>
              <li className="mb-1">
                Clear path toward <strong>updated Mineral Resource Estimates</strong> and{" "}
                <strong>future development milestones</strong>
              </li>
              <li className="mb-1">
                Continued recognition of <strong>Adyton's leadership and operational capability</strong> in one of the
                world's most prospective mineral belts
              </li>
            </ul>

            <p className="mb-3">
              This recognition is an encouraging signal from the market and underscores the value-creation potential
              of our strategic focus: developing high-grade, scalable gold and copper projects in proven geological
              settings with strong community engagement and government support.
            </p>

            <p className="mb-3">
              We look forward to sharing further updates as our programs continue to advance, and{" "}
              <a
                href="https://adytonresources.com/wp/wp-content/uploads/2025/05/ADY-2024-05-06-Clarus_WATCH-LIST.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                to download the full report click here
              </a>
              .
            </p>

            <p className="italic mb-4">
              For investor inquiries, please contact us at{" "}
              <a href="mailto:ir@adytonresources.com" className="text-primary hover:underline">
                ir@adytonresources.com
              </a>
              .
            </p>
          </article>
        </div>
      </section>
      <AboutAdyton />
    </main>

    <Footer />
  </div>
);

export default ClarusSecuritiesMiningWatchList;
