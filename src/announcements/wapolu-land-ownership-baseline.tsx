import Header from "@/components/layout/Header";
import Subscribe from "@/components/layout/Subscribe";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import ArticleSchema from "@/components/schema/ArticleSchema";
import { seoConfig } from "@/config/seo";
import AboutAdyton from "@/components/AboutAdyton";

const ARTICLE = {
  title: "Adyton Reports Completion Of Land Ownership And Baseline Field Work At Wapolu Joint Venture",
  date: "November 19, 2025",
  excerpt:
    "Adyton's 50/50 JV partner EVIH has completed land ownership mapping and baseline social and environmental field work at the Wapolu gold project on Fergusson Island, advancing toward Mining Lease and Environment permit applications.",
};

const WapoluLandOwnershipBaseline = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title={ARTICLE.title}
      description={ARTICLE.excerpt}
      canonical={`${seoConfig.siteUrl}/news/adyton-reports-completion-of-land-ownership-and-baseline-field-work-at-wapolu-joint-venture`}
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
              <strong>Brisbane, Australia – November 18, 2025 – Adyton Resources Corporation</strong> (TSX Venture:{" "}
              <strong>ADY</strong>) ("<strong>Adyton</strong>" or the "<strong>Company</strong>") is pleased to announce
              that its 50/50 Joint Venture Partner, East Vision Investment Holdings (EVIH), has completed both land
              ownership mapping and baseline social and environmental base line work at its Wapolu gold project,
              Fergusson Island, Papua New Guinea.
            </p>

            <h2 className="font-display font-bold text-2xl md:text-3xl mt-8 mb-3">Key Highlights</h2>
            <p className="mb-3">
              Adyton's JV partner, EVIH, is the operator and has been progressing a number of key enabling work streams
              to satisfy the requirements for both Mining Lease and Environment permit applications. In parallel, EVIH
              has also been progressing metallurgical test work to inform the Wapolu flow sheet design and resource
              modelling and meeting with a range of equipment suppliers in preparation to place orders for long lead
              items with the goal of production in 2H26.
            </p>

            <p className="mb-3">Tim Crossley, Chief Executive Officer, stated:</p>
            <blockquote className="border-l-4 pl-4 italic mb-4" style={{ borderColor: "#c4a14f" }}>
              "We are pleased with the progress being made by EVIH and remain confident that, with strong execution and
              a timely assessment by the Mineral Resources Authority (MRA) and Conservation and Environment Protection
              Authority (CEPA), together we can achieve first production at Wapolu in 2H26. Although it is early days,
              this significant progress bodes well for the JVs near-term development plans for a shallow, open-pit
              surface mining operation at Wapolu."
            </blockquote>

            <p className="mb-3">Gary Wang, Chief Executive Officer, EVIH stated:</p>
            <blockquote className="border-l-4 pl-4 italic mb-4" style={{ borderColor: "#c4a14f" }}>
              "We have now completed more than 8,000 m of drilling at Fergusson Island, and my team has been working on
              meeting the requirements for our mining lease and environment permit applications for the restart of the
              old Wapolu operation. We are also well advanced in completing metallurgical test work and finalizing the
              flowsheet design for the Wapolu process plant."
            </blockquote>

            <h3 className="font-display font-bold text-xl md:text-2xl mt-8 mb-3">Project Update</h3>
            <p className="mb-3">
              Adyton's JV partner, EVIH, has completed the current phase of drilling at both Wapolu and Gameta. Due to
              a large back-log in samples being processed through a Lae laboratory in PNG, Gameta drill core samples
              are being dispatched to international laboratories. Key activities are now focused on updating resource
              reports, metallurgical testing, equipment selection, social and environment base line studies and land
              ownership boundary mapping. At Adyton's projects, numerous local jobs have been created, providing
              employment opportunities in areas with limited job prospects.
            </p>

            <h3 className="font-display font-bold text-xl md:text-2xl mt-8 mb-3">Background</h3>
            <p className="mb-3">
              Adyton's gold projects in JV with EVIH are in PNG on easily accessible island locations. The Gameta and
              Wapolu projects are located on Fergusson Island in the Milne Bay province of PNG which also hosts the
              Woodlark and Misima projects.
            </p>
            <p className="mb-3">
              The Wapolu gold project is a proposed restart of the past-producing Wapolu mine which operated in the mid
              1990's producing about 9,000oz of gold before shutting down due to low gold prices. The restart of Wapolu
              will be substantially easier than a green field project, being enabled by significant existing
              infrastructure such as airstrips, workshop and warehouse structures, basic wharf infrastructure and
              tailings impoundments.
            </p>
            <p className="mb-3">
              The neighboring Gameta project is an advanced exploration asset being prepared to be taken into
              permitting and development, that lies approximately 30 km from Wapolu and has the benefit of being able
              to leverage some of the Wapolu infrastructure, such as the airstrip.
            </p>
            <p className="mb-3">
              As previously reported, the Fergusson projects are under an earn-in Joint Venture Agreement with EVIH,
              granting EVIH the right to acquire up to 50% ownership interest in the project. This interest is
              contingent on the achievement of certain development milestones and a total investment of up to US$9.5
              million, allocated as follows:
            </p>
            <ul className="mb-4 pl-6 list-disc">
              <li className="mb-2">
                <strong>US$8.5 million</strong> to fund project expenditures; and
              </li>
              <li className="mb-2">
                <strong>US$1.0 million</strong> as a direct payment to the Company (US$500,000 paid).
              </li>
              <li className="mb-2">
                Once the projects are permitted and a financial investment decision made by the JV, the agreement
                provides for EVIH to provide a shareholder loan (8% interest charge) to the JV to fund the project
                development capital which would carry Adyton to production on the Fergusson projects.
              </li>
            </ul>
            <p className="mb-3">
              While this JV agreement at its end point results in Adyton diluting its interest at Fergusson Island to
              50%, the agreement does provide for a complete "carried" funding solution to production for Adyton at its
              Fergusson projects.
            </p>

            <h3 className="font-display font-bold text-xl md:text-2xl mt-8 mb-3">Resource Estimate</h3>
            <p className="mb-3">
              The existing Gameta and Wapolu Mineral Resource Estimate has resources open at depth and along strike.
              The current drill programs at both Wapolu and Gameta are in part designed to test depth and strike
              extensions but also importantly to increase resource confidence to enable progression to establish
              reserve estimates and the Mining License (ML) application.
            </p>

            <h3 className="font-display font-bold text-xl md:text-2xl mt-8 mb-3">For further information please contact:</h3>
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

export default WapoluLandOwnershipBaseline;
