import Header from "@/components/layout/Header";
import Subscribe from "@/components/layout/Subscribe";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import ArticleSchema from "@/components/schema/ArticleSchema";
import { seoConfig } from "@/config/seo";
import AboutAdyton from "@/components/AboutAdyton";

const SLUG = "adyton-reports-update-on-feni-island-gold-copper-project-drilling";

const ARTICLE = {
  title: "Adyton Reports Update On Feni Island Gold-Copper Project Drilling",
  date: "June 13, 2025",
  excerpt:
    "Update on the 2025 Feni Island drill program: six diamond drillholes (1,876m) completed or in progress, with strong visual sulphide mineralisation observed including semi-massive intervals in FDD005.",
};

const FeniDrillingUpdateJune2025 = () => (
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
              <strong>Port Moresby, PNG – June 12, 2025 – Adyton Resources Corporation</strong> (TSX Venture:{" "}
              <strong>ADY</strong>) ("<strong>Adyton</strong>" or the "<strong>Company</strong>") is pleased to provide
              an update on its ongoing 2025 drilling activities and share preliminary geological observations at its
              100% owned Feni Island project.
            </p>

            <p className="mb-3">The 2025 drill program is designed to achieve 4 key objectives:</p>
            <ol className="mb-4 pl-6 list-decimal">
              <li className="mb-1">Test the depth extension of the existing Feni Resource with deep 400m+ drill holes;</li>
              <li className="mb-1">
                Test the extent of mineralization in the gap area between the existing Kabang and Matangkaka Ore Zones;
              </li>
              <li className="mb-1">
                Test and better understand the continuity of the previously identified copper mineralization; and
              </li>
              <li className="mb-1">
                Test the lateral northeast extension of the Matangkaka Zone under post-mineral cover, that has had no
                previous drilling.
              </li>
            </ol>

            <h2 className="font-display font-bold text-2xl md:text-3xl mt-8 mb-3">Highlights</h2>
            <ul className="mb-4 pl-6 list-disc">
              <li className="mb-2">
                As at June 6, 2025, <strong>six diamond drill holes (1,876m)</strong> have been drilled with 4 drill
                holes completed and two in-progress.
              </li>
              <li className="mb-2">
                Sawn core samples from Holes 1, 2 and 3 have been dispatched to the laboratory and are awaiting
                results.
              </li>
              <li className="mb-2">
                Target hole depths are typically 400m, with FDD003 and FDD004 ending at 421.7m and 453.2m respectively.
                FDD004 was terminated largely due to operational reasons with end-of-hole observations indicating
                ongoing vein-hosted and disseminated sulphide mineralization.
              </li>
              <li className="mb-2">
                Core logging observations indicate mineralization from base of tephra (post-mineral volcanic cover;
                ranging from 38m to 70m), with local intercepts of semi-massive (20%–30% pyrite), along with
                significant lengths of disseminated, vein and fracture-filled pyrite-chalcopyrite mineralization in
                hydrothermal breccia, polymictic breccia and intrusive units.
              </li>
              <li className="mb-2">
                <strong>FDD004</strong> targets the untested gap between Kabang and Matangkaka.
                Anhydrite-pyrite-chalcopyrite (est. 1%) ± minor bornite vein-related mineralization was logged from
                383.9m to 453m (EOH). A porphyry-style alteration assemblage of secondary
                biotite-magnetite-actinolite-chalcopyrite was logged from 383.9m to 424m with stockwork
                pyrite-chalcopyrite-magnetite veining from 383.9m to 397.5m and 402.3m to 424m.
              </li>
              <li className="mb-2">
                <strong>FDD005</strong> intersected semi-massive sulphides (20–30% pyrite + chalcopyrite) from 89.7m to
                96.0m and intermittent semi-massive pyritic sulphide intervals from 120.0m to 156.5m. Intense
                anhydrite veining associated with fine-grained pyrite + 0.5–1% chalcopyrite mineralization from 156.5m
                to 255.1m. From 255.1m to 340.0m, weak potassic alteration is associated with ~1% disseminated
                chalcopyrite.
              </li>
              <li className="mb-2">
                <strong>FDD001</strong> intersected pyrite-mineralized hydrothermal breccia from 75.8m to 151.50m;
                151.5m to 168.6m is intensely fractured within hydrothermal breccia with fine-grained pyritic sulphides
                filling the breccia matrix. From 168.6m to 396.0m, logged units include intermittent hydrothermal
                breccia, intrusive units and tephra with disseminated and vein-filled pyritic sulphides.
              </li>
              <li className="mb-2">
                <strong>FDD002</strong> intersected mineralized hydrothermal breccia from 45.9m to 125.0m. The interval
                125.0m to 195.4m is intensely fractured with disseminated and fracture/vein filled fine-grained
                sulphides (pyrite). FDD002 was terminated in mineralization (at 195.4m) due to operational issues.
              </li>
              <li className="mb-2">
                <strong>FDD003</strong> intersected sulphide (pyrite) mineralized hydrothermal breccia from 57.0m to
                110.0m. Intensely fractured intrusive with intermittent semi-massive, disseminated, fracture/veinlet
                filled pyrite-chalcopyrite (up to ~1%) mineralization was encountered from 110.0m to 186.5m, 197.0m to
                218.1m and 227.0m to 277.7m.
              </li>
            </ul>

            <p className="text-sm italic mb-4" style={{ color: "hsl(var(--light-muted-foreground))" }}>
              Cautionary Statement: Observations of mineralization do not necessarily accurately predict true
              laboratory determined assay mineralization. Analytical assay results are pending and required to confirm
              the presence and grade of mineralization.
            </p>

            <p className="mb-3">Tim Crossley, Chief Executive Officer, stated:</p>
            <blockquote className="border-l-4 pl-4 italic mb-4" style={{ borderColor: "#c4a14f" }}>
              "Significant progress is being made at the 100% owned Feni Island project, with our drill programme now
              having completed 4 drill holes, with holes 5 and 6 underway, and over 1800m completed. Holes FDD001 and
              FDD002 were drilled in a geothermal area with challenging drilling conditions, characterized by intense
              alteration, hot springs, and highly fractured and altered ground. Despite these difficulties, the team
              performed exceptionally well, still achieving excellent core recoveries. We are encouraged by the visual
              logging results of the holes, particularly Hole 4 and the ongoing Hole 5. With the extent of drilling
              underway across all our projects, including on Fergusson Island, we are well-positioned to provide the
              market with regular updates as assay results become available in the coming months."
            </blockquote>

            <p className="mb-3">Dr Chris Bowden, COO and Chief Geologist, commented:</p>
            <blockquote className="border-l-4 pl-4 italic mb-4" style={{ borderColor: "#c4a14f" }}>
              "We are encouraged by what we are seeing in the drill core from this round of drilling at Feni. Whilst
              assay results are still pending, visual observations are showing long intercepts &gt;100m of hydrothermal
              to intrusive breccias that are evidencing mineralisation with sulphides (pyrite ± chalcopyrite) and
              intensely altered (sulphide ± silica-clay) – the sulphides being the typical host to the gold stage of
              mineralisation at Feni as evidenced from previous drill campaigns, correlation to historical assays and
              historical petrography."
            </blockquote>

            <h3 className="font-display font-bold text-xl md:text-2xl mt-8 mb-3">Feni Island on-trend location</h3>
            <p className="mb-3">
              The Adyton projects are located in PNG on easily accessible island locations. Feni Island is part of the
              Tabar to Feni Island chain to the Northwest that hosts the operating gold mines of Simbiri and Lihir,
              while Feni hosts a foundation resource of inferred 1.45moz Au. To the southeast of Feni on Bougainville
              Island lies the giant Panguna deposit.
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

            <p className="text-sm mb-3" style={{ color: "hsl(var(--light-muted-foreground))" }}>
              <strong>Qualified Person:</strong> The scientific and technical information contained in this press
              release has been prepared, reviewed, and approved by Dr Chris Bowden, PhD, GCMEE, FAusIMM(CP), FSEG,
              the Chief Operating Officer and Chief Geologist of Adyton, who is a "Qualified Person" as defined by
              National Instrument 43-101.
            </p>
          </article>
        </div>
      </section>
      <AboutAdyton />
    </main>

    <Footer />
  </div>
);

export default FeniDrillingUpdateJune2025;
