import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import ArticleSchema from "@/components/schema/ArticleSchema";
import { seoConfig } from "@/config/seo";
import AboutAdyton from "@/components/AboutAdyton";

const ARTICLE = {
  title: "Adyton Expands Discovery Capability at Feni Gold-Copper Project With Global Ore Discovery Consultants",
  date: "December 18, 2025",
  excerpt:
    "Adyton announces the formal engagement of world-class geological consulting group Global Ore Discovery to collaboratively advance a high-priority integrated technical exploration program at Feni Island.",
  sourceUrl:
    "https://adytonresources.com/adyton-expands-discovery-capability-at-feni-gold-copper-project-with-global-ore-discovery-consultants/",
  slug: "adyton-expands-discovery-capability-at-feni-gold-copper-project-with-global-ore-discovery-consultants",
};

const FeniGlobalOreDiscovery = () => (
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
            <p className="mb-6">
              <strong>Brisbane, Australia – December 17, 2025 – Adyton Resources Corporation</strong> (TSX Venture: <strong>ADY</strong>) ("Adyton" or the "Company") is pleased to announce the formal engagement of world-class geological consulting group, <strong>Global Ore Discovery ("Global Ore")</strong>. The Company has engaged Global Ore to <strong>collaboratively advance</strong> a high-priority integrated technical exploration program by providing expert oversight and targeting strategies. This strategic collaboration leverages Global Ore's deep epithermal and porphyry expertise with Adyton's enhanced in-house technical capacity, including <strong>Dr. Erin Johns as an Expert Consultant</strong>.
            </p>

            <h2 className="text-2xl md:text-3xl font-display font-bold mt-10 mb-4" style={{ color: "hsl(var(--text-dark))" }}>
              Strategic Rationale and Initiative Highlights
            </h2>

            <p className="mb-4">
              The engagement with <strong>Global Ore</strong>, a globally recognized leader in defining and optimising potential for exploration success in mineral systems, provides immediate high-level technical validation and an accelerated path to discovery from integrated analysis and interpretation of vectors to potential gold-copper mineralisation:
            </p>

            <ul className="mb-6">
              <li><strong>World-Class Expertise:</strong> The relationship between ADY and Global Ore was officially initiated following a "kick-off" workshop held at Global Ore Discovery's head office (in late October 2025), attended by high-calibre experts including Dr. Daniel Muller, Simon Meldrum, Dr. Quinton Hills, Ben Spence, Stephen Nano and Simon Tear, as well as Dr. Chris Bowden and Dr. Erin Johns representing Adyton. The workshop focused on an integrated 3D review of all historical and current data sets, and of alkalic-style gold-copper systems globally and culminated in developing a critical technical action list for next steps.</li>
              <li><strong>Tier-1 Exploration Potential Validation:</strong> Two senior Global Ore consultants have already completed a site visit to Feni undertaking a program of systematic relogging of alteration, lithological and structural controls on gold mineralisation in the Kabang drill core. Their preliminary technical observations have indicated that the geological and structural setting of the Feni Au-Cu system exhibits many similarities to the controls on alteration and gold mineralisation seen at the world-class Newmont owned and operated Lihir gold mine, reinforcing the Company's belief in Feni's Tier 1 scale potential.</li>
              <li><strong>Integrated Pathway to Resource Expansion:</strong> Global Ore has immediately initiated an integrated geological, structural, geophysical and hyperspectral data reinterpretation that will be iteratively enhanced as new exploration data is gathered. The primary goal is to deliver a new, high-resolution 3D geological model that will serve as the foundation to optimise drill targeting for the ongoing resource expansion drill program at Kabang.</li>
              <li><strong>Accelerate the Whole of Island Discovery Potential:</strong> Global Ore, during their recent deployment on site, have identified initial priority areas for immediate follow-up sampling of outcropping gold mineralisation highlighted in the historic database, and visually confirmed the presence of higher grade copper from chalcopyrite-bornite mineralisation in drill core, below and lateral to the existing Kabang resource, supporting the concept to explore for concealed alkalic porphyry copper-gold mineralisation at Feni.</li>
            </ul>

            <blockquote className="border-l-4 border-primary pl-5 italic my-8" style={{ color: "hsl(var(--text-dark))", opacity: 0.85 }}>
              <p>
                "Engaging Global Ore Discovery marks the next significant expansion of our discovery efforts at Feni Island. This is a deliberate shift from Adyton's initial focus on near resource drilling to a more aggressive program; exploring for resource expansion at Kabang while we also accelerate an exciting strategic approach to evaluation of multiple compelling epithermal gold prospects and targeting of large-scale concealed copper-gold porphyry mineralization within a 'Whole of Island' district scale thinking."
              </p>
              <footer className="mt-2 not-italic text-sm font-semibold">— Tim Crossley, Chief Executive Officer</footer>
            </blockquote>

            <h2 className="text-2xl md:text-3xl font-display font-bold mt-10 mb-4" style={{ color: "hsl(var(--text-dark))" }}>
              Global Ore Discovery: Engagement Objectives
            </h2>

            <p className="mb-4">
              This key consulting initiative is designed to support a multi-faceted exploration strategy at the Feni Gold-Copper Project, including: (i) optimising drill targeting for resource expansion at the current drill program underway at Kabang; (ii) hone-in on a number of known epithermal gold prospects for drill testing; and (iii) assess the potential for concealed porphyry-related copper-gold mineralization across the island, building on known porphyry targets such as Danmagal.
            </p>

            <p className="mb-4">
              Global Ore Discovery will deploy personnel on site, provide integrated targeting for optimal drill hole placement, as well as deliver strategic advice and insights to enable Adyton to zero in on the best targets faster and maximise the potential of Adyton's aggressive "whole of island" exploration strategy at its 100% controlled Feni Au-Cu project.
            </p>

            <h2 className="text-2xl md:text-3xl font-display font-bold mt-10 mb-4" style={{ color: "hsl(var(--text-dark))" }}>
              Global Ore Discovery: Track Record
            </h2>

            <p className="mb-4">
              Global Ore Discovery is a highly experienced geological consulting team with extensive knowledge of many of the world's premier porphyry and epithermal belts in the Americas, Australasia, and Central Asia, where Global Ore, and its principal consultants, have a track record of directly contributing to a number of high value gold, silver and copper discoveries, including Batu Hija PCD and Toka Tindung District, Indonesia, and brownfield expansion of the Wafi Golpu Resource in Papua New Guinea.
            </p>

            <h2 className="text-2xl md:text-3xl font-display font-bold mt-10 mb-4" style={{ color: "hsl(var(--text-dark))" }}>
              Go-Forward Work Program and Next Steps
            </h2>

            <p className="mb-4">
              The Global Ore engagement is active and focused on a number of immediate deliverables expected by Q1 2026:
            </p>

            <ol className="mb-6">
              <li>Direct observations and core documentation to gain insights into geological setting, controls on mineralisation and vectors to new targets;</li>
              <li>Spectral mineral mapping of drill core, leading to a 3D alteration model to better interpret gold-copper mineralising fluid flow aimed at an increased probability of success from future drill targeting at Kabang;</li>
              <li>Prioritising evaluation of known and new epithermal mineralisation outside of the Kabang resource footprint and generation of new conceptual porphyry and epithermal targets;</li>
              <li>Acquisition, integration and reinterpretation of data sets, including geological, geochemical, geophysical, and hyperspectral; and</li>
              <li>3D Geological Model & Target Generation: Complete an integrated 3D geological model and interpret it to define a new suite of high-priority drill targets.</li>
            </ol>

            <p className="mb-4">
              Adyton is committed to providing regular updates as the work program is executed and stages are finalized and outcomes are achieved.
            </p>

            <h2 className="text-2xl md:text-3xl font-display font-bold mt-10 mb-4" style={{ color: "hsl(var(--text-dark))" }}>
              About the Feni Gold-Copper Project
            </h2>

            <p className="mb-4">
              The Feni Project is 100% owned by Adyton and is a key asset in Adyton's portfolio, located in a highly prospective region of Papua New Guinea on the Lihir Island chain known for world-class gold-copper deposits, including Lihir (owned and operated by Newmont). The Company has confirmed significant gold-copper mineralization at Feni, with a focus on expanding its existing resource and identifying new high-grade targets.
            </p>
          </div>
        </div>
      </section>
      <AboutAdyton />
    </main>

    <Footer />
  </div>
);

export default FeniGlobalOreDiscovery;
