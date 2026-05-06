import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import ArticleSchema from "@/components/schema/ArticleSchema";
import { seoConfig } from "@/config/seo";
import AboutAdyton from "@/components/AboutAdyton";

const ARTICLE = {
  title: "Adyton Reports ~200% Increase To Wapolu Updated Inferred Mineral Resources Estimate",
  date: "January 14, 2026",
  excerpt:
    "Updated NI 43-101 Mineral Resource Estimate for the Wapolu gold project on Fergusson Island comprises 1.0 million tonnes grading 1.00 g/t Au for an indicated resource of 33 koz Au and 12.7 million tonnes grading 0.97 g/t Au for an inferred resource of 393 koz Au.",
  sourceUrl:
    "https://adytonresources.com/adyton-reports-200-increase-to-wapolu-updated-inferred-mineral-resources-estimate/",
};

const SLUG = "adyton-reports-200-increase-to-wapolu-updated-inferred-mineral-resources-estimate";

const WapoluMineralResourcesEstimate = () => (
  <div className="min-h-screen bg-background">
    <SEO title={ARTICLE.title} description={ARTICLE.excerpt} canonical={`${seoConfig.siteUrl}/news/${SLUG}`} />
    <ArticleSchema headline={ARTICLE.title} datePublished={ARTICLE.date} description={ARTICLE.excerpt} />
    <Header />

    <main>
      {/* Header */}
      <section className="py-16 md:py-20" style={{ background: "#10374c" }}>
        <div className="container max-w-3xl">
          <p className="uppercase tracking-[0.3em] text-primary font-semibold mb-3 font-body">ANNOUNCEMENT</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-4">
            {ARTICLE.title}
          </h1>
          <p className="text-sm text-white/60 font-body">{ARTICLE.date}</p>
        </div>
      </section>

      {/* Body */}
      <section className="py-14 md:py-18" style={{ background: "hsl(var(--off-white))" }}>
        <div className="container max-w-3xl">
          <div
            className="prose prose-lg max-w-none"
            style={{ color: "hsl(var(--text-dark))", fontSize: "18px", lineHeight: 1.75 }}
          >
            <p className="mb-3">
              <strong>Brisbane, Australia – January 13, 2026</strong> – Adyton Resources Corporation (TSX Venture: ADY)
              is pleased to announce an updated NI 43-101 Mineral Resource Estimate (MRE) for its Wapolu gold project on
              Fergusson Island, Papua New Guinea (PNG). The updated MRE is comprised of{" "}
              <strong>
                1.0 million tonnes grading 1.00 g/t Au for an indicated resource of 33 koz Au and 12.7 million tonnes
                grading 0.97 g/t Au for an inferred resource of 393 koz Au.
              </strong>{" "}
              The estimate was prepared by Mining One under the authorship of Louis Cohalan (MAIG), an independent
              mining consultant and "qualified person" as defined in NI 43-101.
            </p>

            <p className="mb-3">
              The restart of the Wapolu gold project is an important pillar to Adyton's strategy to achieve near term
              production and cash flow. The proposed initial Wapolu operation would be a shallow open pit ~300kt ROM
              operation with a simple crush, grind, float flow sheet to produce and market a gold rich concentrate. On
              the 10th of December 2025, Adyton announced it had received a non-binding Letter Of Intent (LOI) from
              Korean trading group Hyosung TNC Corporation to purchase its Wapolu concentrate.
            </p>

            <h2 className="text-2xl font-display font-bold mb-1">Key Highlights</h2>

            <ul>
              <li><strong>Inferred Resource increases 197%</strong> — Wapolu MRE increases Indicated Resources to 33 koz
              and Inferred Resources to 393 koz, adding 226 koz versus the prior estimate, confirming strong growth
              potential at Fergusson Island.</li>
              <li><strong>Attractive grade profile</strong> — Near-surface, open pit resource grading ~1.0 g/t Au (1.00
              g/t Indicated; 0.97 g/t Inferred), supportive of simple, low-cost open-pit mining development scenarios.</li>
              <li><strong>Advances project toward permitting</strong> — Updated MRE represents a key milestone for the
              Mining Lease Application, materially de-risking the pathway to development.</li>
            </ul>

            <blockquote>
              <p className="mb-3">
                "The updated Wapolu Mineral Resource materially strengthens the foundation of our Fergusson Island
                development strategy and exceeds our internal expectations," said Tim Crossley, Chief Executive Officer
                of Adyton. "The combination of a near-1.0 g/t gold grade and a more than doubled resource base enhances
                the potential for a larger, more flexible operation beyond the initially planned 300,000 tpa Run Of Mine
                scenario as we push towards a targeted start-up later this year."
              </p>
            </blockquote>

            <h2 className="text-2xl font-display font-bold mb-1">Resource Estimate</h2>

            <p className="mb-3">
              The existing Gameta and updated Wapolu Mineral Resource Estimates are highlighted in Table 1. The current
              drill programs at both Wapolu and Gameta are in part designed to test depth and strike extensions (with
              resources open at depth and along strike) but also importantly to increase resource confidence to enable
              progress to establish reserve estimates and Mining License (ML) applications.
            </p>

            <h2 className="text-2xl font-display font-bold mb-1">Project Update and Key Next Steps</h2>

            <p className="mb-3">
              Adyton's JV partner, EVIH, has completed the current phase of drilling at both Wapolu and Gameta. Key
              activities currently underway include:
            </p>

            <ul>
              <li>Finalizing work streams, reports and compensation agreements for the Mining Lease (ML) application.</li>
              <li>Submission of the Wapolu ML application.</li>
              <li>Responding to information requests from government departments.</li>
              <li>Finalizing equipment selection for long-lead items.</li>
              <li>Gameta, located only 30km away, is being fast-tracked to leverage the Wapolu production infrastructure.</li>
            </ul>

            <h2 className="text-2xl font-display font-bold mb-1">The Wapolu Restart Advantage</h2>

            <p className="mb-3">
              The Wapolu gold project is a proposed restart of the past-producing Wapolu mine which operated in the mid
              1990's before shutting down due to low gold prices. The restart of Wapolu is expected to be significantly
              less complex than a greenfield development, supported by substantial existing infrastructure including
              airstrips, workshop and warehouse facilities, basic wharf infrastructure and established tailings
              impoundments.
            </p>

            <h2 className="text-2xl font-display font-bold mb-1">EVIH Joint Venture</h2>

            <p className="mb-3">
              The Fergusson projects are under an earn-in Joint Venture Agreement with EVIH, granting EVIH the right to
              acquire up to 50% ownership interest in the project. This interest is contingent on the achievement of
              certain development milestones and a total investment of up to <strong>US$9.5 million</strong>.
            </p>

            <p className="mb-3">
              At full earn-in, the JV positions Adyton with a 50% interest at Fergusson while delivering a fully carried
              funding solution that advances the Fergusson projects through development and into production, preserving
              capital and minimizing risk for Adyton shareholders.
            </p>
          </div>
        </div>
      </section>
      <AboutAdyton />
    </main>

    <Footer />
  </div>
);

export default WapoluMineralResourcesEstimate;
