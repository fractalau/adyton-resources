import Header from "@/components/layout/Header";
import Subscribe from "@/components/layout/Subscribe";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import ArticleSchema from "@/components/schema/ArticleSchema";
import { seoConfig } from "@/config/seo";
import AboutAdyton from "@/components/AboutAdyton";

const ARTICLE = {
  title:
    "Adyton Confirms Significant Scale at Feni Gold-Copper Project: FDD005 Returns 158m @ 0.72g/t Au.Eq (0.54g/t Au & 0.14% Cu) and Identifies New High-Priority Drill Targets",
  date: "October 15, 2025",
  excerpt:
    "Final assays from expansionary drill hole FDD005 at the 100%-owned Feni Au-Cu project in PNG confirm the significant scale of the gold-copper system and highlight new high-priority drill targets at Kabang.",
};

const FeniFDD005SignificantScale = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title={ARTICLE.title}
      description={ARTICLE.excerpt}
      canonical={`${seoConfig.siteUrl}/news/adyton-confirms-significant-scale-at-feni-gold-copper-project-fdd005-returns-158m-0-72g-t-au-eq-0-54g-t-au-0-14-cu-and-identifies-new-high-priority-drill-targets`}
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
      <Subscribe />

      {/* Body */}
      <section className="py-14 md:py-18" style={{ background: "hsl(var(--off-white))" }}>
        <div className="container max-w-3xl">
          <article
            className="prose prose-lg max-w-none"
            style={{ color: "hsl(var(--text-dark))", fontSize: "18px", lineHeight: 1.75 }}
          >
            <p className="mb-3">
              <strong>Brisbane, Australia – October 14, 2025 – Adyton Resources Corporation</strong> (TSX Venture:{" "}
              <strong>ADY</strong>) ("<strong>Adyton</strong>" or the "<strong>Company</strong>") is pleased to report
              final assays from expansionary drill hole FDD005 at its 100% owned Feni Au-Cu project, Papua New Guinea.
              The results continue to confirm the significant scale of the Feni gold-copper mineral system, whilst also
              highlighting the challenges and opportunities of exploring a very large mineralized system that is under
              cover, particularly to target and intercept higher-grade gold-copper zones.
            </p>

            <h2 className="font-display font-bold text-2xl md:text-3xl mt-8 mb-3">Highlights</h2>
            <ul className="mb-4 pl-6 list-disc">
              <li className="mb-2">
                <strong>158m @ 0.72g/t gold equivalent (Au.Eq)</strong> (0.54g/t Au &amp; 0.14% Cu), including{" "}
                <strong>32m @ 1.09g/t Au.Eq</strong> (0.99g/t Au &amp; 0.11% Cu) from drill hole FDD005
              </li>
              <li className="mb-2">FDD005 is the fifth consecutive drill hole with assays &gt;100gxm Au.Eq</li>
              <li className="mb-2">
                Furthermore, FDD005 ended with <strong>significant molybdenum at end of hole (383ppm Mo)</strong>{" "}
                signifying a direct link to a deeper-seated intrusive-related mineral system
              </li>
              <li className="mb-2">
                FDD004 and FDD005 encountered strong and broad zones of gold and copper mineralization within the "gap"
                zone that is wide open for expansion between the two open pit MRE resources
              </li>
              <li className="mb-2">
                FDD005 provides key <strong>geological and structural insights</strong> into the Kabang area, including
                new understanding of the relationship between <strong>sulphide content and gold/copper grade</strong>,
                which is critical for future targeting
              </li>
              <li className="mb-2">
                Geophysics and assay re-interpretation identifies <strong>multiple additional high-priority targets</strong>{" "}
                within the Kabang prospect, potentially unlocking <strong>significant upside.</strong>
              </li>
            </ul>

            <p className="mb-3">Tim Crossley, Chief Executive Officer, stated:</p>
            <blockquote className="border-l-4 pl-4 italic mb-4" style={{ borderColor: "#c4a14f" }}>
              "The drilling of hole FDD005 was a bold move in the middle of the "gap" area in our block model. It is the
              deepest hole ever drilled at Feni with a gold bearing vertical footprint of greater than 700m. Our next
              focus is to integrate the new data from our current drill program into our historical data set and recent
              close-spaced drone magnetic survey to vector in on and identify the higher-grade zones within this
              extensive mineral system."
            </blockquote>

            <p className="mb-3">Dr Chris Bowden, Chief Operating Officer and Chief Geologist, commented:</p>
            <blockquote className="border-l-4 pl-4 italic mb-4" style={{ borderColor: "#c4a14f" }}>
              "While the highlight intersection in FDD005 was lower-grade than previous drillholes, it still reported
              &gt;100gxm and the two very broad zones of gold-copper mineralization (382m @ 0.43g/t AuEq (from 69m) and
              332m @ 0.13g/t AuEq (from 508m to EOH)) clearly indicate the footprint and scale of the system at Feni is
              extensive. Subsequently, we have re-interrogated the assay results with the outcomes from geophysics data
              (including high resolution drone survey). We now have higher confidence that FDD005 likely sits in a
              structural offset, explaining the significantly wide and highly anomalous grades. Furthermore, the
              re-review of the geophysics and assay results has resulted in a revised understanding of the potential
              structural controls to mineralization (more akin to the structural setting at Lihir)."
            </blockquote>

            <h3 className="font-display font-bold text-xl md:text-2xl mt-8 mb-3">Significant Intercepts and Geology</h3>
            <p className="mb-3">
              Significant Intercepts for gold and copper assay results have been received to date. The current status of
              the Feni drill program covers 15 drillholes for 5,216.9m.
            </p>
            <p className="text-sm mb-3" style={{ color: "hsl(var(--light-muted-foreground))" }}>
              Notes: Interval widths are "apparent" widths downhole, subject to true width determination. ADK series
              drilling (2021) reported previously to TSX.V; Au.eq recalculated. Gold equivalent calculated as: Au.eq =
              ((Au g/t × 0.93) + (Cu% × 1.71 × 0.90)). Based on metal prices of US$2,000/oz Au and US$5/lb Cu; and
              recoveries of 93% Au and 90% Cu. Recovery assumptions are speculative as no metallurgical test work has
              been completed at Feni but are based on comparable deposits. FDD002 &amp; FDD004 ended in mineralisation.
            </p>

            <h3 className="font-display font-bold text-xl md:text-2xl mt-8 mb-3">Discussion of Results</h3>
            <p className="mb-3">
              Whilst it is very early days, the dynamic and ongoing process of re-reviewing the geophysics with new
              assay results as received allows us to refine our geological model. This process has directly resulted in
              a number of additional targets now highlighted as more prospective than previously considered, and if
              successful, would likely result in significant upside to potential targets at Kabang. Adyton is
              prioritizing the newly identified geophysical targets in our current phase of drilling (4Q2025) and
              expects this revised geological model to significantly enhance our exploration success rate.
            </p>
            <p className="text-sm mb-3" style={{ color: "hsl(var(--light-muted-foreground))" }}>
              Drillhole status notes: FDD008 was abandoned at a shallow depth while still in post-mineral cover due to
              operational issues, redrilled as FDD009. FDD002 was terminated prematurely due to ground conditions while
              still in observed visual mineralisation. WGS 84 Zone 56S UTM coordinates.
            </p>

            <h3 className="font-display font-bold text-xl md:text-2xl mt-8 mb-3">Quality Assurance / Quality Control</h3>
            <p className="mb-3">
              Adyton adheres to industry-recognized standards of Best Practice and Quality Assurance/Quality Control
              (QA/QC). Drill core samples were submitted in batches to Intertek Laboratory in Lae, which include a field
              blank, certified reference materials (CRMs) and staged duplicates. Samples were sealed using single-use
              tie-locks ensuring Chain of Custody. To date, all batches have passed QA/QC, and blanks and CRMs were
              within acceptable tolerance limits. All drill holes were drilled and sampled predominantly from PQ and/or
              HQ diameter drill core, and to a much lesser extent, also NQ core. Core recovery is considered to be
              appropriate.
            </p>

            <h3 className="font-display font-bold text-xl md:text-2xl mt-8 mb-3">
              Feni Island Gold-Copper asset, on-trend location to giant gold +/- copper mines
            </h3>
            <p className="mb-3">
              The Adyton Feni Island Au-Cu project is strategically located on the easily accessible Bismark Islands in
              PNG. Feni Island is part of the 250km long Tabar-Lihir-Tanga-Feni Island chain, which to the northwest
              hosts the operating gold mines of Simberi and the giant Lihir mine, while Feni hosts a foundational
              resource of 1.45moz Au. To the southeast of Feni Island, on Bougainville Island, lies the giant past
              producing Panguna Cu-Au mine.
            </p>

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

export default FeniFDD005SignificantScale;
