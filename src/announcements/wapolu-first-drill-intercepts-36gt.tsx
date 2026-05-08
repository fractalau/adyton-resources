import Header from "@/components/layout/Header";
import Subscribe from "@/components/layout/Subscribe";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import ArticleSchema from "@/components/schema/ArticleSchema";
import { seoConfig } from "@/config/seo";
import AboutAdyton from "@/components/AboutAdyton";

const SLUG = "adyton-reports-first-drill-intercepts-of-up-to-36-grams-per-tonne-gold-from-its-wapolu-drill-campaign";

const ARTICLE = {
  title: "Adyton Reports First Drill Intercepts Of Up To 36 Grams Per Tonne Gold From Its Wapolu Drill Campaign",
  date: "May 7, 2025",
  excerpt:
    "First assay results from the Wapolu drill campaign on Fergusson Island deliver significant near-surface intercepts up to 36 g/t Au, including 4m @ 9.85g/t Au from WPDH002.",
};

const WapoluFirstDrillIntercepts36gt = () => (
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
              <strong>Port Moresby, PNG – May 06, 2025 – Adyton Resources Corporation</strong> (TSX Venture:{" "}
              <strong>ADY</strong>) ("<strong>Adyton</strong>" or the "<strong>Company</strong>") is pleased to provide
              its first assay results from its drill campaign at Wapolu and an update on its ongoing development
              activities at the Wapolu and Gameta deposits on Fergusson Island in Papua New Guinea.
            </p>

            <h2 className="font-display font-bold text-2xl md:text-3xl mt-8 mb-3">Highlights</h2>
            <p className="mb-3">
              <strong>
                Significant intercepts up to 36 grams per tonne gold (g/t Au) reported from the first samples of a
                4,300 metre (m), 48 drillhole program at Wapolu including the following notable gold intercepts:
              </strong>
            </p>
            <ul className="mb-4 pl-6 list-disc">
              <li className="mb-1">WPDH001: <strong>5m @ 1.66g/t Au</strong> <em>(from 5m)</em></li>
              <li className="mb-1">WPDH001: <strong>8m @ 2.36g/t Au</strong> <em>(from 16m)</em></li>
              <li className="mb-1">WPDH002: <strong>6m @ 2.46g/t Au</strong> <em>(from 8m)</em></li>
              <li className="mb-1">
                WPDH002: <strong>4m @ 9.85g/t Au</strong> <em>(from 19m)</em> incl.{" "}
                <strong>1m @ 36g/t Au</strong>
              </li>
              <li className="mb-1">WPDH006: <strong>6m @ 2.32g/t Au</strong> <em>(from 15m)</em></li>
            </ul>

            <p className="mb-3">Tim Crossley, Chief Executive Officer stated:</p>
            <blockquote className="border-l-4 pl-4 italic mb-4" style={{ borderColor: "#c4a14f" }}>
              "We are pleased to have received the first batch of results from our Wapolu campaign, which are
              consistent with expectations and confirm the Resource is near surface, with the majority of
              mineralization occurring at depths of less than 40 meters. It is always encouraging to see some stellar
              grades which, if replicated in future holes, are likely to materially increase the current reported
              Resource grade. Additional assay results are expected progressively over May and June. Although it is
              early days, these results bode well for the JVs near-term development plans for a low cost, shallow
              open-pit surface mining operation."
            </blockquote>

            <h3 className="font-display font-bold text-xl md:text-2xl mt-8 mb-3">Project Update</h3>
            <p className="mb-3">
              Adyton's projects are in PNG on easily accessible island locations. The Gameta and Wapolu projects are
              located on Fergusson Island in the Milne Bay province of PNG which also hosts the Woodlark project
              (1.6Moz) and the Misima project (5.0Moz).
            </p>
            <p className="mb-3">
              The Wapolu project is a proposed restart of the Wapolu mine which operated in the mid 1990's producing
              about 9,000oz of gold before shutting down due to low gold prices. The restart of Wapolu will be
              substantially easier than a green field project, being enabled by significant existing infrastructure
              such as airstrips, workshop and warehouse structures, and tailings impoundments.
            </p>
            <p className="mb-3">
              The neighboring Gameta project is an advanced exploration asset being prepared to be taken into
              permitting and development, and lies approximately 30 km from Wapolu and has the benefit of being able
              to leverage some of the Wapolu infrastructure, such as the airstrip. As previously reported, the
              Fergusson projects are under a Joint Venture Agreement with EVIH, granting EVIH the right to acquire up
              to 50% ownership interest in the project. This interest is contingent on the achievement of certain
              development milestones and a total investment of up to US$9.5 million, allocated as follows:
            </p>
            <ul className="mb-4 pl-6 list-disc">
              <li className="mb-1">US$8.5 million to fund project expenditures; and</li>
              <li className="mb-1">
                US$1.0 million as a direct payment to the Company, with US$500,000 already paid upon executing the
                agreement in May 2024.
              </li>
              <li className="mb-1">
                Once the projects are permitted and a financial investment decision made by the JV, the agreement
                provides for EVIH to provide a shareholder loan (8% interest charge) to the JV to fund the project
                development capital.
              </li>
            </ul>
            <p className="mb-3">
              While this agreement at its end point results in Adyton diluting its interest at Fergusson Island to
              50%, the agreement does provide for a complete "carried" funding solution to production for Adyton at
              its Fergusson projects.
            </p>

            <h3 className="font-display font-bold text-xl md:text-2xl mt-8 mb-3">Resource Estimate</h3>
            <p className="mb-3">
              The existing Gameta and Wapolu Mineral Resource Estimate has resources open at depth and along strike.
              The current drill programs at both Wapolu and Gameta are in part designed to test depth and strike
              extensions but also importantly to increase resource confidence to enable progression to Reserve
              Estimates and mining license (ML) application.
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

export default WapoluFirstDrillIntercepts36gt;
