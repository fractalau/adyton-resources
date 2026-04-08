import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import ArticleSchema from "@/components/schema/ArticleSchema";
import { seoConfig } from "@/config/seo";

const ARTICLE = {
  title: "Adyton Resources Receives Non-Binding Letter of Intent (LOI) for the Purchase of Gold Concentrate From Its Wapolu Project",
  date: "December 11, 2025",
  excerpt:
    "Adyton announces receipt of a Non-Binding LOI from Hyosung TNC Corporation for the purchase of gold concentrate from its Wapolu Gold Project in Papua New Guinea.",
  sourceUrl:
    "https://adytonresources.com/adyton-resources-receives-non-binding-letter-of-intent-loi-for-the-purchase-of-gold-concentrate-from-its-wapolu-project/",
  slug: "adyton-resources-receives-non-binding-letter-of-intent-loi-for-the-purchase-of-gold-concentrate-from-its-wapolu-project",
};

const WapoluLoiGoldConcentrate = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title={ARTICLE.title}
      description={ARTICLE.excerpt}
      canonical={`${seoConfig.siteUrl}/news/${ARTICLE.slug}`}
    />
    <ArticleSchema headline={ARTICLE.title} datePublished={ARTICLE.date} description={ARTICLE.excerpt} />
    <Header />

    <main>
      {/* Header */}
      <section className="py-16 md:py-20" style={{ background: "#10374c" }}>
        <div className="container max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-3 font-body">ANNOUNCEMENT</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white leading-tight mb-4">
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
            <p className="mb-6">
              <strong>Brisbane, Australia – December 10, 2025 – Adyton Resources Corporation</strong> (TSX Venture: <strong>ADY</strong>) ("<strong>Adyton</strong>" or the "<strong>Company</strong>") is pleased to announce that it has received a Non-Binding LOI from Korean group Hyosung TNC Corporation on December 8, 2025 for the purchase of gold concentrate from its <strong>Wapolu Gold Project</strong> in Papua New Guinea.
            </p>

            <h2 className="text-xl font-display font-bold mt-10 mb-4" style={{ color: "hsl(var(--text-dark))" }}>
              Highlights
            </h2>

            <ul className="mb-6">
              <li><strong>Strong demand interest from concentrate traders:</strong> Adyton has attracted strong interest from global trading houses for concentrate from its Wapolu project, which is targeted to restart production in late 2026;</li>
              <li><strong>Payable terms significantly improved:</strong> Adyton's discussions with a range of traders indicate that payable terms for concentrates with the expected Wapolu specifications have materially improved, with an anticipated 15% improvement from terms previously provided and used in Adyton's internal modelling;</li>
              <li><strong>Significant project value uplift expected:</strong> Supported by a strong gold price environment, Adyton expects that should the improved payability terms be reflected in final sale and purchase agreements, there will be a significant and material enhancement to the value of the Wapolu and Gameta projects on Fergusson Island.</li>
            </ul>

            <blockquote className="border-l-4 border-primary pl-5 italic my-8" style={{ color: "hsl(var(--text-dark))", opacity: 0.85 }}>
              <p>
                "This LOI is a very positive indicator for our Fergusson Island projects, highlighting robust demand for precious-metal concentrates. The material improvement in payable terms combined with the current strength in gold prices positions our Fergusson projects to generate strong cash flows."
              </p>
              <footer className="mt-2 not-italic text-sm font-semibold">— Tim Crossley, Chief Executive Officer</footer>
            </blockquote>

            <blockquote className="border-l-4 border-primary pl-5 italic my-8" style={{ color: "hsl(var(--text-dark))", opacity: 0.85 }}>
              <p>
                "This indicative concentrate pricing is very positive for our Fergusson Island projects and, combined with the strong gold price, provides us with strong motivation to accelerate all aspects of project permitting and development."
              </p>
              <footer className="mt-2 not-italic text-sm font-semibold">— Gary Wang, Chief Executive Officer, EVIH</footer>
            </blockquote>

            <h2 className="text-xl font-display font-bold mt-10 mb-4" style={{ color: "hsl(var(--text-dark))" }}>
              Project Update
            </h2>

            <p className="mb-6">
              Adyton, together with its joint venture (JV) partner EVIH, is advancing the Wapolu project with a targeted production restart in late 2026. Current work streams are focusing on completing all precursor inputs to the submission of the Mining Lease (ML) application and the Conservation and Environment Protection Authority (CEPA) permit.
            </p>

            <h2 className="text-xl font-display font-bold mt-10 mb-4" style={{ color: "hsl(var(--text-dark))" }}>
              Background
            </h2>

            <p className="mb-4">
              Adyton's gold projects, held in JV with EVIH, are located on easily accessible islands in Papua New Guinea (PNG). The Gameta and Wapolu projects are situated on Fergusson Island in the Milne Bay province of PNG, which also hosts the Woodlark and Misima projects.
            </p>

            <p className="mb-6">
              The Wapolu gold project is a proposed restart of the past-producing Wapolu mine which operated in the mid 1990's, producing about 9,000oz of gold before shutting down due to low gold prices. The restart of Wapolu will be substantially easier than a green field project, being enabled by significant existing infrastructure such as airstrips, workshop and warehouse structures, basic wharf infrastructure and tailings impoundments.
            </p>

            <p className="mb-6">
              The neighboring Gameta project is an advanced exploration asset being prepared to be taken into permitting and development, that lies approximately 30 km from Wapolu and has the benefit of being able to leverage some of the Wapolu infrastructure, such as the airstrip.
            </p>

            <h2 className="text-xl font-display font-bold mt-10 mb-4" style={{ color: "hsl(var(--text-dark))" }}>
              Resource Estimate
            </h2>

            <p className="mb-6">
              The existing Gameta and Wapolu Mineral Resource Estimate is highlighted below, with resources open at depth and along strike. The current drill programs at both Wapolu and Gameta are in part designed to test depth and strike extensions but also importantly to increase resource confidence to enable progression to establish reserve estimates and the Mining License (ML) application.
            </p>

            <p className="text-xs italic mb-6" style={{ opacity: 0.7 }}>
              See the technical report entitled "NI 43-101 Technical Report on the Fergusson Gold Property, Milne Bay Province, Papua New Guinea" dated October 14, 2022 and prepared for the Company in accordance with National Instrument 43-101. Mineral resources are not mineral reserves and have not demonstrated economic viability.
            </p>

            <h2 className="text-xl font-display font-bold mt-10 mb-4" style={{ color: "hsl(var(--text-dark))" }}>
              About Adyton Resources Corporation
            </h2>

            <p className="mb-4">
              Adyton Resources Corporation is focused on the development of gold and copper resources in world class mineral jurisdictions. It currently has a portfolio of highly prospective mineral exploration projects in Papua New Guinea on which it is exploring to expand its identified gold Inferred and Indicated Mineral Resources and expand on its recent significant copper drill intercepts on the 100% owned Feni Island project.
            </p>

            <p className="mb-4">
              Adyton has a total Mineral Resource Estimate inventory within its PNG portfolio of projects comprising indicated resources of 173,000 ounces gold and inferred resources of 2,000,000 ounces gold.
            </p>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
);

export default WapoluLoiGoldConcentrate;
