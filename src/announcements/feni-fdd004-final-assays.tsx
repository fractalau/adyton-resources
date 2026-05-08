import Header from "@/components/layout/Header";
import Subscribe from "@/components/layout/Subscribe";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import ArticleSchema from "@/components/schema/ArticleSchema";
import { seoConfig } from "@/config/seo";
import AboutAdyton from "@/components/AboutAdyton";

const SLUG =
  "adyton-reports-final-assays-from-fdd004-confirming-strong-mineralized-intercepts-of-115m-at-1-00g-t-gold-equivalent-0-92g-t-au-0-07-cu-within-a-broader-mineralized-zone-of-229m-at-0-79g-t-gold-equ";

const ARTICLE = {
  title:
    "Adyton Reports Final Assays from FDD004 Confirming Strong Mineralized Intercepts of 115m at 1.00g/t Gold Equivalent (0.92g/t Au & 0.07% Cu) Within A Broader Mineralized Zone of 229m at 0.79g/t Gold Equivalent (0.71g/t Au & 0.07% Cu), With the Hole Ending in Gold-Copper Mineralization of 70.2m at 0.21% Cu & 0.33g/t Au",
  date: "September 9, 2025",
  excerpt:
    "Final assays from drillhole FDD004 at the 100%-owned Feni Island gold-copper project in PNG confirm long, continuous gold-copper intercepts and successfully fill a targeted gap in the existing block model.",
};

const FeniFDD004FinalAssays = () => (
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
              <strong>Brisbane, Australia – September 8, 2025 – Adyton Resources Corporation</strong> (TSX Venture:{" "}
              <strong>ADY</strong>) ("<strong>Adyton</strong>" or the "<strong>Company</strong>") is pleased to report
              final assays from drillhole FDD004 at its 100% owned Feni Island gold-copper (Au-Cu) project, located
              within the gold-prolific Lihir Island Chain, Papua New Guinea (PNG). The results confirm long &gt;200m
              intercepts of consistent gold mineralization.
            </p>

            <h2 className="font-display font-bold text-2xl md:text-3xl mt-8 mb-3">Highlights</h2>
            <ul className="mb-4 pl-6 list-disc">
              <li className="mb-2">
                FDD004 represents another drillhole returning significant and continuous gold-copper intercepts from the
                Feni Island project, consistent with assay results from FDD001, FDD002 &amp; FDD003;
              </li>
              <li className="mb-2">
                FDD004 returned <strong>115m at 1.00g/t Gold Equivalent (Au.Eq)</strong> (0.92g/t Au &amp; 0.07% Cu),
                within a broader interval of <strong>229m at 0.72g/t Au.Eq</strong> (0.71g/t Au &amp; 0.07% Cu);
              </li>
              <li className="mb-2">
                FDD004 also ended in gold and copper mineralization:{" "}
                <strong>2m at 0.21% Cu &amp; 0.33g/t Au</strong> (0.57g/t Au.Eq);
              </li>
              <li className="mb-2">
                FDD004 successfully encountered strong gold and copper mineralization within a targeted "gap" in the
                current block model which currently has minimal blocks above cut-off reporting to the existing MRE.
              </li>
            </ul>

            <p className="mb-3">Tim Crossley, Chief Executive Officer, stated:</p>
            <blockquote className="border-l-4 pl-4 italic mb-4" style={{ borderColor: "#c4a14f" }}>
              "The results from FDD004 continue to demonstrate the scale of the mineral system with in excess of 200m of
              continuous mineralization and the hole bottoming in copper and gold mineralization. Hole FDD004 was also
              an important hole having been drilled in a gap area within the block model. With holes 5, 6, and 7 now
              sampled and dispatched to the lab, we can expect ongoing results in the coming weeks and months; given
              the current observed consistency in grades in the upper hydrothermal breccia zone, we are confident that
              where the hydrothermal breccia's repeat in these holes, we anticipate ongoing strong grades in these
              mineral zones."
            </blockquote>

            <p className="mb-3">Dr Chris Bowden, Chief Operating Officer and Chief Geologist, commented:</p>
            <blockquote className="border-l-4 pl-4 italic mb-4" style={{ borderColor: "#c4a14f" }}>
              "It is rare to work on an early-stage exploration project and continue to hit significant gold-copper
              intersections. This is a testament to the geological robustness of the Feni Project, and the regional
              prospectivity of the gold-prolific Lihir Island Chain. Looking forward, in knowing the post-mineral
              tephra cover has a large footprint (effectively hiding the mineralization at surface), we need to leverage
              our observations on geology, mineralization, alteration zonation, structural controls, and paragenesis. By
              better understanding these controlling factors to mineralization, we can continue to optimize the drill
              program and optimize the probability of success."
            </blockquote>

            <h3 className="font-display font-bold text-xl md:text-2xl mt-8 mb-3">Significant Intercepts and Geology</h3>
            <p className="mb-3">
              Significant Intercepts for gold and copper assay results have been received to date for the first four
              drill holes in 2025.
            </p>
            <p className="text-sm mb-3" style={{ color: "hsl(var(--light-muted-foreground))" }}>
              Notes: Interval widths are "apparent" widths downhole, subject to true width determination. Gold equivalent
              calculated as: Au.eq = (Au g/t + (1.12 × Cu %)). Assuming 100% recovery – detailed met pending. FDD002
              &amp; FDD004 ended in mineralisation.
            </p>
            <p className="mb-3">
              FDD004 has been drilled on the edge of the "gap zone". The gold and copper assay results from this
              drillhole show a number of important outcomes, namely:
            </p>
            <ol className="mb-4 pl-6 list-decimal">
              <li className="mb-2">
                The upper gold-rich (plus copper) hydrothermal breccia is reporting grades higher than previously
                modeled. This will increase the grade and confidence in this location and will likely expand the MRE in
                proximity to this drillhole, namely to the east 'filling the gap';
              </li>
              <li className="mb-2">
                The copper assays will likely be a material addition to any future MRE (not previously in MRE);
              </li>
              <li className="mb-2">
                The deeper copper-gold zone is below the base of the MRE and will likely add depth extent to any future
                MRE.
              </li>
            </ol>
            <p className="text-sm mb-3" style={{ color: "hsl(var(--light-muted-foreground))" }}>
              Drillhole status notes: FDD008 was abandoned at a shallow depth while still in post-mineral cover due to
              operational issues, redrilled as FDD009. FDD002 was terminated prematurely due to ground conditions while
              still in observed visual mineralisation. WGS 84 Zone 56S UTM coordinates.
            </p>

            <h3 className="font-display font-bold text-xl md:text-2xl mt-8 mb-3">
              Feni Island Gold-Copper asset, on-trend location to giant gold +/- copper mines
            </h3>
            <p className="mb-3">
              The Adyton Feni Island Au-Cu project is strategically located on the easily accessible Outer Bismark
              Islands in PNG. Feni Island is part of the 250km long gold-prolific Lihir Island Chain, which to the
              northwest hosts the operating gold mines of Simberi and the giant Lihir mine, while Feni hosts a
              foundational resource of 1.45moz Au. To the southeast of Feni Island, on Bougainville Island, lies the
              giant past producing Panguna Cu-Au mine.
            </p>

            <h3 className="font-display font-bold text-xl md:text-2xl mt-8 mb-3">
              Sampling and Quality Assurance / Quality Control
            </h3>
            <p className="mb-3">
              Adyton adheres to industry-recognized standards of Best Practice and Quality Assurance/Quality Control
              (QA/QC). All drill holes were drilled and half core sampled predominantly from PQ and HQ diameter drill
              core with lesser amounts of NQ core sampling. Samples undergo an auditable record from point of drilling
              (including sealed using single-use tie-locks) to delivery to the laboratory, ensuring chain of custody.
              Drill core samples were submitted in batches to Intertek Laboratory in Lae, Papua New Guinea, an ISO 9001
              certified laboratory. Samples are dried (105°C), crushed (95% &lt;3mm), and pulverised (95% &lt;75µm).
              Analytical testing includes 50gm fire assay digest and AAS determination for gold, and a four-acid digest
              with ICP determination for a 33 multi-element suite. QA/QC samples were inserted into the batches in
              accordance with industry-standard practices, and include: a field coarse blank, certified reference
              materials (CRMs) and staged duplicates (coarse, crush and pulp). To date, all batches have passed QA/QC,
              and blanks and CRMs were within acceptable tolerance limits.
            </p>
            <p className="mb-3">Adyton has no direct relationship with Intertek laboratory.</p>

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

export default FeniFDD004FinalAssays;
