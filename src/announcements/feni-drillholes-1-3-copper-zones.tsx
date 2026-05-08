import Header from "@/components/layout/Header";
import Subscribe from "@/components/layout/Subscribe";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import ArticleSchema from "@/components/schema/ArticleSchema";
import { seoConfig } from "@/config/seo";
import AboutAdyton from "@/components/AboutAdyton";

const SLUG =
  "adyton-reports-final-assays-from-feni-drillholes-1-3-confirming-multiple-copper-mineralised-zones-complementing-previously-reported-gold-fdd003-upgraded-by-40-for-combined-125-9-gxm-au-eq";

const ARTICLE = {
  title:
    "Adyton Reports Final Assays From Feni Drillholes 1-3 Confirming Multiple Copper Mineralised Zones, Complementing Previously Reported Gold; FDD003 Upgraded By 40% For Combined 125.9 Gxm (Au.eq)",
  date: "August 29, 2025",
  excerpt:
    "Final copper and gold assays from the first three diamond drill holes at the Feni Island gold-copper project confirm multiple copper-mineralised zones; FDD003 upgraded 40% to a combined 125.9 gxm Au.eq.",
};

const FeniDrillholes13CopperZones = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title={ARTICLE.title}
      description={ARTICLE.excerpt}
      canonical={`${seoConfig.siteUrl}/news/${SLUG}`}
    />
    <ArticleSchema headline={ARTICLE.title} datePublished={ARTICLE.date} description={ARTICLE.excerpt} />
    <Header />

    <main>
      {/* Header */}
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

      {/* Body */}
      <section className="py-14 md:py-18" style={{ background: "hsl(var(--off-white))" }}>
        <div className="container max-w-3xl">
          <article
            className="prose prose-lg max-w-none"
            style={{ color: "hsl(var(--text-dark))", fontSize: "18px", lineHeight: 1.75 }}
          >
            <p className="mb-3">
              <strong>Brisbane, Australia – August 28, 2025 – Adyton Resources Corporation</strong> (TSX Venture:{" "}
              <strong>ADY</strong>) ("<strong>Adyton</strong>" or the "<strong>Company</strong>") is pleased to report
              new copper assays and confirm final gold assays from its first three diamond drill holes at the Feni
              Island gold-copper (Au-Cu) project. The results confirm multiple zones of copper mineralisation
              complementing previously reported gold intercepts. The Company also provides an update on its ongoing
              2025 drilling program.
            </p>

            <h2 className="font-display font-bold text-2xl md:text-3xl mt-8 mb-3">Highlights</h2>
            <ul className="mb-4 pl-6 list-disc">
              <li className="mb-2">
                Hole FDD003 returned strong copper mineralization (complementing previous gold), including:
                <ul className="mt-2 pl-6 list-disc">
                  <li className="mb-1">
                    <strong>24m @ 0.51% Cu, 5m @ 0.48% Cu</strong>, and <strong>12m @ 0.23% Cu</strong>;
                  </li>
                </ul>
              </li>
              <li className="mb-2">
                The previously reported FDD003 Significant Intercept now has a grade increase to{" "}
                <strong>1.36g/t Au.eq over 81m (for 109.8 gxm)</strong>, with multiple Significant Intercepts now
                resulting in <strong>FDD003 for a combined 125.9 gxm Au.eq</strong> (a 40% upgrade from the initial
                gold-only 90 gxm);
              </li>
              <li className="mb-2">
                Each of the three Feni Island drill holes now report <strong>&gt;100 g-m</strong> on an AuEq basis;
              </li>
              <li className="mb-2">
                The return of copper assays, particularly coherent zones at <strong>&gt;0.5% Cu</strong>, within gold
                mineralized intervals (<strong>&gt;1g/t Au</strong>), are highly encouraging and provide strong
                potential for a future upgrade to the Mineral Resource Estimate (MRE);
              </li>
              <li className="mb-2">
                Since the July 21, 2025 news release, an additional <strong>1,064 meters</strong> of drilling have been
                completed.
              </li>
            </ul>

            <p className="mb-3">Tim Crossley, Chief Executive Officer, stated:</p>
            <blockquote className="border-l-4 pl-4 italic mb-4" style={{ borderColor: "#c4a14f" }}>
              "We are very encouraged that the first three drillholes of this program are all reporting greater than
              100 g-m AuEq basis. The addition of the copper assays reinforces our view that the Feni Au-Cu asset
              contains strong potential for significant copper mineralisation, alongside the previously reported gold."
            </blockquote>

            <p className="mb-3">Dr Chris Bowden, Chief Operating Officer and Chief Geologist, commented:</p>
            <blockquote className="border-l-4 pl-4 italic mb-4" style={{ borderColor: "#c4a14f" }}>
              "To have the results from the first three drillholes from a new drill program all return &gt;100g-m AuEq
              highlights the geological robustness of the Feni Project. Whilst Feni shares many geological similarities
              with Lihir, it also contains a significant copper component to the mineralisation, which to date, has
              never been included in any MRE. This is only the beginning for Feni, and we look forward to keeping the
              market updated as future gold and copper assay results are received."
            </blockquote>

            <h3 className="font-display font-bold text-xl md:text-2xl mt-8 mb-3">Significant Intercepts and Geology</h3>
            <p className="mb-3">
              Significant Intercepts for gold and copper assay results have been received to date for the first three
              drillholes from the Kabang mineralized corridor.
            </p>
            <p className="text-sm mb-3" style={{ color: "hsl(var(--light-muted-foreground))" }}>
              Notes: Interval widths are "apparent" widths downhole, subject to true width determination. Gold
              equivalent calculated as: Au.eq = (Au g/t + 1.12(Cu %)). FDD002 ended in mineralisation.
            </p>
            <p className="text-sm mb-3" style={{ color: "hsl(var(--light-muted-foreground))" }}>
              Drillhole status notes: FDD008 was abandoned at a shallow depth while still in post-mineral cover due to
              operational issues, redrilled as FDD009. FDD002 was terminated prematurely due to ground conditions while
              still in observed visual mineralisation. WGS 84 Zone 56S UTM coordinates.
            </p>

            <h3 className="font-display font-bold text-xl md:text-2xl mt-8 mb-3">Quality Assurance / Quality Control</h3>
            <p className="mb-3">
              Adyton adheres to industry-recognized standards of Best Practice and Quality Assurance/Quality Control
              (QA/QC). Drill core samples were submitted in batches to Intertek Laboratory in Lae, which include a
              field blank, certified reference materials (CRMs) and staged duplicates. Samples were sealed using
              single-use tie-locks ensuring Chain of Custody. To date, all batches have passed QA/QC, and blanks and
              CRMs were within acceptable tolerance limits. All drill holes were drilled and sampled predominantly from
              PQ and/or HQ diameter drill core (noting some drilling and upcoming sampling will be on NQ core). Core
              recovery is considered to be appropriate.
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

export default FeniDrillholes13CopperZones;
