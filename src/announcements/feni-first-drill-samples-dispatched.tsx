import Header from "@/components/layout/Header";
import Subscribe from "@/components/layout/Subscribe";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import ArticleSchema from "@/components/schema/ArticleSchema";
import { seoConfig } from "@/config/seo";
import AboutAdyton from "@/components/AboutAdyton";

const SLUG = "adyton-announces-first-drill-samples-from-latest-campaign-at-its-feni-island-gold-project-with-high-copper-prospectivity-have-been-dispatched-for-analysis";

const ARTICLE = {
  title: "Adyton Announces First Drill Samples From Latest Campaign At Its Feni Island Gold Project (With High Copper Prospectivity) Have Been Dispatched For Analysis",
  date: "April 30, 2025",
  excerpt:
    "First batch of drill samples from the 2025 Feni Island campaign dispatched to Intertek laboratory; ~90 local jobs created and resupply by coastal barge demonstrated.",
};

const FeniFirstDrillSamplesDispatched = () => (
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
              <strong>Port Moresby, PNG – April 29, 2025 – Adyton Resources Corporation</strong> (TSX Venture:{" "}
              <strong>ADY</strong>) ("<strong>Adyton</strong>" or the "<strong>Company</strong>") is pleased to provide
              an update on its ongoing drilling activities at its 100% owned Feni Island project.
            </p>

            <h2 className="font-display font-bold text-2xl md:text-3xl mt-8 mb-3">Highlights</h2>
            <ul className="mb-4 pl-6 list-disc">
              <li className="mb-2">
                <strong>The first batch of Feni drill samples have been prepared for dispatch to Intertek laboratory.</strong>
              </li>
              <li className="mb-2">
                <strong>The first barge resupply of fuel and other items at Feni demonstrated the ease of access for resupply by large existing coastal supply barges.</strong>
              </li>
              <li className="mb-2">
                <strong>At Adyton's Feni Island project, approximately 90 local jobs have been created, providing employment opportunities in areas with limited job prospects.</strong>
              </li>
            </ul>

            <p className="mb-3">
              The current drill program is focused on the Kabang Prospect in order to twin select holes and assay for
              copper from holes previously drilled with no copper assays — enabling copper to be included in the future
              MRE — whilst at the same time targeting open extensions and high-grade gold zones proximal to the
              current MRE.
            </p>

            <p className="mb-3">Tim Crossley, Chief Executive Officer stated:</p>
            <blockquote className="border-l-4 pl-4 italic mb-4" style={{ borderColor: "#c4a14f" }}>
              "Significant progress is being made at the 100% owned Feni Island project, with our drill programme now
              well underway and first batch of drill samples already dispatched to the Laboratory in Lae, PNG's second
              largest city. It is also pleasing to note that approximately 90 new direct local jobs have been created
              along with several local businesses benefiting from the projects activities. Of course, it goes without
              saying that none of this activity would have been possible without the support from our local
              stakeholders and in particular the Feni Island Landowners."
            </blockquote>

            <h3 className="font-display font-bold text-xl md:text-2xl mt-8 mb-3">Background</h3>
            <p className="mb-3">
              The Adyton projects are located in PNG on easily accessible island locations. Feni Island is part of the
              Tabar to Feni island chain which also hosts the operating gold mines of Simbiri (8 Moz) and Lihir
              (87 Moz) while Feni hosts a foundation resource of 1.45 Moz Au. To the southeast of Feni on Bougainville
              Island lies the giant Panguna deposit (23 Moz Au, 6.3 Mt Cu).
            </p>

            <h3 className="font-display font-bold text-xl md:text-2xl mt-8 mb-3">The Current Drill Program</h3>
            <p className="mb-3">
              Adyton began its drilling campaign at Feni Island targets in February of 2025. Two diamond drill rigs
              were deployed at site (i.e. Kabang). The focus of this program has been:
            </p>
            <ul className="mb-4 pl-6 list-disc">
              <li className="mb-2">
                A number of historical holes will be twinned in order to provide copper assays for input into an
                updated MRE. Evidence from Adyton drill holes, which were assayed for gold and copper, indicates
                inclusion of copper assays in the MRE would positively impact both grade and tonnage of an Au Eq. MRE.
                Twinned holes will also be taken to deeper target depths to test depth extension of mineralization.
              </li>
              <li className="mb-2">
                Step-out and step-back drill holes will target the strike and depth extensions of mineralization which
                are open in all directions. This includes infill drilling within the existing resource model where
                historical holes failed to penetrate post-mineralization cover.
              </li>
              <li className="mb-2">
                High grade breccia zones beneath the existing resource are high reward targets. A number of deeper
                holes (approx. 400 m) will target these zones.
              </li>
            </ul>

            <h3 className="font-display font-bold text-xl md:text-2xl mt-8 mb-3">Copper Potential</h3>
            <p className="mb-3">
              Feni Island displays multiple Lihir-style gold and copper targets. On the island, there is a central
              caldera complex that occurs within a NW-SE (TLTF parallel) trending pull-apart basin with low magnetic
              response. Within the Caldera complex the Kabang, Dome, Saddle and Caldera targets are analogous to the
              structural and geological setting of the Lihir deposits.
            </p>
            <p className="mb-3">
              High reward gold-copper alkalic-type epithermal targets including Kabang (current MRE of 1.46 Moz Au)
              and its surrounding extensions (not drill tested), as well as Dome, Saddle and Caldera prospects, plus
              high resolution drone geophysical targets.
            </p>
            <p className="mb-3">
              Not all historical holes were assayed for copper — yet several holes that were assayed for copper
              returned significant copper assays over large down-hole intervals. Previous drilling by Adyton and
              explorers prior to Adyton confirmed the presence of near surface gold-copper mineralization and
              high-grade copper-gold mineralization beneath and proximal to the existing Kabang MRE.
            </p>
            <p className="mb-3">
              It is notable that neither copper nor Adyton's successful 2021 drill holes have been included in the
              current Kabang MRE of 1.46 Moz Au.
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
            <p className="text-sm italic mb-3" style={{ color: "hsl(var(--light-muted-foreground))" }}>
              Mineral resources are not mineral reserves and have not demonstrated economic viability.
            </p>
          </article>
        </div>
      </section>
      <AboutAdyton />
    </main>

    <Footer />
  </div>
);

export default FeniFirstDrillSamplesDispatched;
