import Header from "@/components/layout/Header";
import Subscribe from "@/components/layout/Subscribe";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import ArticleSchema from "@/components/schema/ArticleSchema";
import { seoConfig } from "@/config/seo";
import AboutAdyton from "@/components/AboutAdyton";

const SLUG =
  "adyton-reports-multiple-significant-gold-intersections-from-its-feni-island-gold-copper-project-drilling";

const ARTICLE = {
  title:
    "Adyton Reports Multiple Significant Gold Intersections from its Feni Island Gold-Copper Project Drilling, Including 144m at 1.18g/t Au",
  date: "July 23, 2025",
  excerpt:
    "Preliminary gold assays from the first three diamond drillholes at Feni Island deliver consistent broad gold zones — FDD002 returns 144.2m @ 1.18g/t Au — with strong visual mineralisation continuing in subsequent holes.",
};

const FeniMultipleGoldIntersections = () => (
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
              <strong>Port Moresby, PNG – July 22, 2025 – Adyton Resources Corporation</strong> (TSX Venture:{" "}
              <strong>ADY</strong>) ("<strong>Adyton</strong>" or the "<strong>Company</strong>") is pleased to report
              its first preliminary gold only assays from three diamond drill holes and provide an update on its
              ongoing 2025 drilling activities. This news release is also designed to provide new geological
              observations on drillholes pending assays at its 100% owned Feni Island project.
            </p>

            <h2 className="font-display font-bold text-2xl md:text-3xl mt-8 mb-3">Highlights</h2>
            <ul className="mb-4 pl-6 list-disc">
              <li className="mb-2">
                Preliminary gold assay results have been returned for the first three (3) drillholes of this drill
                program at the Feni Island Project (no multi-element assay results or final gold assay results).
                Results show very consistent and broad gold zones in all three drillholes:
                <ul className="mt-2 pl-6 list-disc">
                  <li className="mb-1">
                    <strong>FDD001: 76m @ 1.43g/t Au</strong> (from 95m) for 108gxm
                  </li>
                  <li className="mb-1">
                    <strong>FDD002: 144.2m @ 1.18g/t Au</strong> (from 45m, EOH) for 170gxm; including{" "}
                    <strong>93m @ 1.58g/t Au</strong> (from 45m) for 147gxm
                  </li>
                  <li className="mb-1">
                    <strong>FDD003: 81m @ 1.12g/t Au</strong> (from 70m) for 90gxm
                  </li>
                </ul>
              </li>
              <li className="mb-2">
                As of July 21, 2025, ten (10) diamond drillholes for 3,332m have been drilled with six (6) drillholes
                completed, one (1) terminated early, two (2) in-progress and one (1) abandoned. Sawn core samples from
                drillholes FDD001 through to FDD005 have been dispatched to the laboratory.
              </li>
              <li className="mb-2">
                Target hole depths are typically 400m. FDD001 and FDD002 reached 396m and 196m respectively (FDD002
                terminated prematurely due to operational issues). FDD003 and FDD004 ended at 421.7m and 453.2m. Due to
                significant visual mineralization, <strong>FDD005 was drilled to 839m</strong> and terminated with
                visual mineralization still observed at EOH. FDD006 and FDD007 were terminated at 412m and 468m
                respectively.
              </li>
              <li className="mb-2">
                The preliminary assay results for the first three holes confirm that observations of shallow
                sulphide-mineralised hydrothermal breccias are consistently gold bearing.
              </li>
              <li className="mb-2">
                Similar — and stronger and deeper — visual sulphide mineralised breccias have been observed in
                FDD004, FDD005, FDD006 and FDD007.
              </li>
            </ul>

            <p className="text-sm italic mb-4" style={{ color: "hsl(var(--light-muted-foreground))" }}>
              Cautionary Statement: Observations of mineralization do not necessarily accurately predict true
              laboratory determined assay mineralization. Analytical assay results are pending and required to confirm
              the presence and grade of mineralization.
            </p>

            <p className="mb-3">Tim Crossley, Chief Executive Officer, stated:</p>
            <blockquote className="border-l-4 pl-4 italic mb-4" style={{ borderColor: "#c4a14f" }}>
              "These preliminary gold assays are very encouraging and demonstrate consistently greater than 100
              gram/metre grade intercepts at relatively shallow depths. Subsequent to these holes being drilled we
              have tested for deeper mineralized extensions outside of the existing block model and we have had
              success with strong visual observed mineralisation to end of the holes. In particular, hole FDD005 was
              drilled to 839m and showed visual mineralisation from 45m through to end of hole, for a 794m
              mineralized interval. This hole in particular has generated a lot of excitement with our geology team
              as we await with interest for the assays to be reported."
            </blockquote>

            <p className="mb-3">Dr Chris Bowden, COO and Chief Geologist, commented:</p>
            <blockquote className="border-l-4 pl-4 italic mb-4" style={{ borderColor: "#c4a14f" }}>
              "We are encouraged by what we are seeing in the drill core from this round of drilling at the Feni
              Island project. Initial assay results (preliminary gold only) for the first three drillholes confirm
              the geological model for the shallow, gold-bearing hydrothermal breccias encountered just below the
              base of the post-mineral tephra cover. These initial assay results give us confidence in the additional
              drillholes that also show visual observations of strong sulphide mineralisation within similar
              breccias, plus the upside of the deeper porphyry-style mineralisation (still pending assays)."
            </blockquote>

            <h3 className="font-display font-bold text-xl md:text-2xl mt-8 mb-3">Significant Intercepts and Geology</h3>
            <p className="mb-3">
              Significant Intercepts received to date are based on preliminary gold assays for the first three
              drillholes. Gold equivalent calculated as: Au.eq = (Au g/t + 1.12(Cu %)). 'gxm' is the sum product of
              gold grade and widths.
            </p>

            <h3 className="font-display font-bold text-xl md:text-2xl mt-8 mb-3">
              Visual Results — Geological Observations from Core Logging
            </h3>

            <h4 className="font-display font-bold text-lg md:text-xl mt-6 mb-2">FDD004 Drillhole</h4>
            <p className="mb-3">
              FDD004 tested the Gap between the Kabang and Matangkaka mineralized zones that include the MRE. From the
              base of tephra to end of hole (EOH), FDD004 intersected variably mineralized breccias and intrusive
              units.
            </p>
            <ul className="mb-4 pl-6 list-disc">
              <li className="mb-1">
                Hydrothermal breccias showing strong sulphide mineralization from base of tephra (45m) to 111m.
              </li>
              <li className="mb-1">
                Intrusives to intrusive breccias showing disseminated and veined mineralization from 111m to EOH —
                including porphyry-style alteration assemblage of secondary biotite-magnetite-actinolite-chalcopyrite
                with stockwork pyrite-chalcopyrite-magnetite veining.
              </li>
            </ul>

            <h4 className="font-display font-bold text-lg md:text-xl mt-6 mb-2">FDD005 Drillhole</h4>
            <p className="mb-3">
              FDD005 was designed to test the Gap between Kabang and Matangkaka zones and east of FDD004, drilled to a
              depth of 839.60m through hydrothermal breccias, diorites, microdiorite, monzodiorite and andesitic dykes
              with widespread sulphide mineralization from surface to over 800m depth downhole.
            </p>
            <ul className="mb-4 pl-6 list-disc">
              <li className="mb-1">
                Hydrothermal breccias with strong sulphide mineralization from base of tephra to depth.
              </li>
              <li className="mb-1">Semi-massive sulphides (up to 10%) in brecciated zones (e.g., 89.7m to 96.0m).</li>
              <li className="mb-1">
                Stockwork veining and fine disseminated sulphides over broad intervals from 120m to 347.6m and 450m to
                616.1m.
              </li>
              <li className="mb-1">
                Deep, continuous veining and disseminated mineralization within altered monzodiorite from 743m to
                829.1m (EOH), with 2–4% sulphide content.
              </li>
            </ul>

            <h4 className="font-display font-bold text-lg md:text-xl mt-6 mb-2">FDD006 Drillhole</h4>
            <p className="mb-3">
              FDD006 is testing the northeast extension of Matangkaka zone and is outside any previous drilling.
              Drilled to 412.6m, the upper 69m intersected tephra cover; from 69m to EOH the hole intersected extensive
              hydrothermal breccias and mineralized intrusives.
            </p>
            <ul className="mb-4 pl-6 list-disc">
              <li className="mb-1">69m to 207m: hydrothermal breccias with strong sulphide mineralization.</li>
              <li className="mb-1">
                207m to 315m: fine- to medium-grained intrusive rocks with pervasive chlorite-silica-pyrite alteration,
                2–5% disseminated pyrite and up to 1% chalcopyrite.
              </li>
              <li className="mb-1">315.2m to 316.6m: vein-hosted quartz-magnetite-pyrite-chalcopyrite (Cu up to 1%).</li>
              <li className="mb-1">320.2m to 360.1m: strongly brecciated intrusive rocks with sulphide-rich matrix infill.</li>
              <li className="mb-1">
                360.1m to 412.6m: polymictic hydrothermal breccia with 2–4% sulphides, including clasts exceeding 5%
                sulphide content.
              </li>
            </ul>

            <h4 className="font-display font-bold text-lg md:text-xl mt-6 mb-2">FDD007 Drillhole</h4>
            <p className="mb-3">
              FDD007 is testing the lateral extent of the gold-bearing hydrothermal breccias in a north to
              northwesterly direction, north of FDD005. Drilled to 468.20m, the hole encountered extensive hydrothermal
              breccias and a range of intrusive units with widespread disseminated and fracture-hosted sulphides
              (primarily pyrite, chalcopyrite, arsenopyrite) locally reaching 6–10%.
            </p>
            <ul className="mb-4 pl-6 list-disc">
              <li className="mb-1">63.2m to 100.0m: hydrothermal breccia with strong pyrite and chalcopyrite mineralization.</li>
              <li className="mb-1">100.0m to 133.7m: silicified zones and fractured monzodiorite with up to 6% total sulphides.</li>
              <li className="mb-1">133.7m to 175.2m: intensely fractured monzodiorite with pyrite, chalcopyrite, arsenopyrite up to 6%.</li>
              <li className="mb-1">
                221.0m to 243.2m: strongly mineralized hydrothermal breccia zone with 5–10% sulphides and intense
                silica-clay alteration — potential high-grade gold zone.
              </li>
              <li className="mb-1">
                243.2m to 350.7m: fractured monzodiorite and diorite with consistent sulphide content (3–6%) and strong
                quartz-anhydrite veining.
              </li>
              <li className="mb-1">
                370.1m to 427.7m: pervasively altered diorite with increasing sulphide intensity, potassic and clay
                overprinting, and stockwork vein development.
              </li>
              <li className="mb-1">
                427.7m to 468.2m: diorite with disseminated sulphides and notable potassic alteration and sporadic
                mineralized quartz-chlorite veinlets.
              </li>
            </ul>

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

export default FeniMultipleGoldIntersections;
