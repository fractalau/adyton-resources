import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import ArticleSchema from "@/components/schema/ArticleSchema";
import { seoConfig } from "@/config/seo";
import AboutAdyton from "@/components/AboutAdyton";

const ARTICLE = {
  title: "Adyton Resources Outlines Dual-Track Growth Strategy in Crux Investor Interview",
  date: "January 20, 2026",
  excerpt:
    "Managing Director Tim Crossley outlines how the Company is executing a differentiated strategy in Papua New Guinea that combines near-term production with significant exploration upside.",
  sourceUrl:
    "https://adytonresources.com/adyton-resources-outlines-dual-track-growth-strategy-in-crux-investor-interview/",
  youtubeId: "ffnSyLnFeFo",
};

const DualTrackGrowthStrategy = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title={ARTICLE.title}
      description={ARTICLE.excerpt}
      canonical={`${seoConfig.siteUrl}/news/dual-track-growth-strategy`}
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
            <p className="mb-3">
              Adyton Resources (TSXV:ADY) recently featured in a new Crux Investor interview with our Managing Director,
              Tim Crossley, where he outlined how the Company is executing a differentiated strategy in Papua New Guinea
              that combines near-term production with significant exploration upside. In the conversation, Tim discussed
              how Adyton has deliberately structured its portfolio to progress development and discovery in parallel,
              without forcing a trade-off between the two. With more than a decade of PNG-specific operating experience
              and a background that includes senior roles at BHP and the Roy Hill project, Tim shared why we believe
              this two-track model positions Adyton to transition from explorer to producer while maintaining
              substantial long-term growth optionality.
            </p>

            <p className="mb-3">
              The near-term production pathway centres on Fergusson Island, where Adyton has established an asset-level
              joint venture with East Vision Investment Holdings, a Singaporean-Chinese group with recent PNG delivery
              experience, including a 50-megawatt hydropower project. Under this structure, East Vision funds
              development through to production and earns into 50 percent ownership by meeting milestones, preserving
              Adyton's corporate balance sheet for exploration. As discussed in the interview, the initial focus is the
              Wapolu project, a former producing mine with existing infrastructure such as tailings impoundments, an
              airstrip, and wharf facilities, which shortens the path to restart. Production is currently targeted for
              October 2026 at approximately 15,000 ounces per year, with the higher-grade Gameta project planned to
              follow 12 to 15 months later. Together, these assets are expected to lift total production to over 80,000
              ounces per year. Importantly, Tim emphasised that this pathway is designed not just to establish cash
              flow, but to do so without further dilution, creating the potential to internally fund future growth.
            </p>

            <p className="mb-3">
              At the same time, Adyton is advancing its flagship Feni Island project, located in what Tim describes as a
              120-million-ounce discovery belt between Lihir and Bougainville. Following our CAD$20 million capital
              raise in August 2025, the Company has deployed more than 8,000 metres of drilling since March, testing
              targets across a whole-of-island land package. Tim also highlighted the operational advantages of
              island-based exploration in PNG, including barge mobilisation that eliminates helicopter costs and ocean
              transit that avoids customary landowner consents, simplifying logistics and social licence compared to
              mainland operations. A mineral resource estimate update is planned for late 2026, with the longer-term
              objective of proving a 5+ million ounce gold resource with copper credits. For investors seeking a deeper
              understanding of how Adyton is positioning itself for 2026 and beyond, including our approach to capital
              allocation, joint venture governance, and exploration priorities, we encourage you to watch the full Crux
              Investor interview below.
            </p>
          </div>

          {/* YouTube Embed */}
          <div className="mt-10 rounded-lg overflow-hidden" style={{ border: "1px solid hsl(var(--light-border))" }}>
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${ARTICLE.youtubeId}`}
                title="Crux Investor Interview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
      <AboutAdyton />
    </main>

    <Footer />
  </div>
);

export default DualTrackGrowthStrategy;
