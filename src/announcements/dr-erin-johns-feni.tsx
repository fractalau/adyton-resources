import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import ArticleSchema from "@/components/schema/ArticleSchema";
import { seoConfig } from "@/config/seo";
import AboutAdyton from "@/components/AboutAdyton";

const ARTICLE = {
  title:
    "Adyton Resources Welcomes Lihir Deposit Expert Dr. Erin Johns to the Team to Drive Feni Gold-Copper Project Development",
  date: "December 3, 2025",
  excerpt:
    "Adyton announces the appointment of Dr. Erin Johns, a world-class Lihir deposit expert, to its technical team to accelerate discovery at the Feni Gold-Copper Project.",
  sourceUrl:
    "https://adytonresources.com/adyton-resources-welcomes-lihir-deposit-expert-dr-erin-johns-to-the-team-to-drive-feni-gold-copper-project-development/",
  slug: "adyton-resources-welcomes-lihir-deposit-expert-dr-erin-johns-to-the-team-to-drive-feni-gold-copper-project-development",
};

const DrErinJohnsFeni = () => (
  <div className="min-h-screen bg-background">
    <SEO title={ARTICLE.title} description={ARTICLE.excerpt} canonical={`${seoConfig.siteUrl}/news/${ARTICLE.slug}`} />
    <ArticleSchema headline={ARTICLE.title} datePublished={ARTICLE.date} description={ARTICLE.excerpt} />
    <Header />

    <main>
      {/* Header */}
      <section className="py-16 md:py-20" style={{ background: "#10374c" }}>
        <div className="container max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-3 font-body">ANNOUNCEMENT</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white leading-tight mb-4">
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
              <strong>Brisbane, Australia – December 02, 2025 – Adyton Resources Corporation</strong> (TSX Venture:{" "}
              <strong>ADY</strong>) ("<strong>Adyton</strong>" or the "<strong>Company</strong>") is very pleased to
              announce the appointment of <strong>Dr. Erin Johns</strong> to its technical team, focusing on the
              Company's flagship <strong>Feni Gold-Copper Project</strong> in Papua New Guinea.
            </p>

            <h2 className="text-xl font-display font-bold mt-10 mb-4" style={{ color: "hsl(var(--text-dark))" }}>
              Highlights
            </h2>

            <ul className="mb-6">
              <li>
                <strong>World-Class Lihir Au Deposit Expertise:</strong> Dr. Johns completed her PhD research
                specifically on the Lihir Gold Deposit, a neighbouring, world class alkalic-type epithermal gold deposit
                owned and operated by Newmont, which is crucial for understanding the geological controls at the Feni
                gold-copper deposit.
              </li>
              <li>
                <strong>Targeted De-Risking:</strong> Dr. Johns' specialized knowledge will provide critical insights
                for Adyton to accurately vector towards high-grade Au-Cu zones and expand the resource at Feni,
                effectively derisking the exploration model.
              </li>
              <li>
                <strong>Strategic Academic Ties:</strong> Dr. Johns maintains close connections with the Centre for Ore
                Deposits and Earth Sciences (CODES) at the University of Tasmania, a globally recognized leader in
                economic geology and volcanology.
              </li>
              <li>
                <strong>Enhanced Exploration Capability:</strong> Dr. Johns' Lihir expertise directly aligns with the
                discovery process underway at Adyton's 100%-owned Feni Project, an existing 1.46moz alkalic-type
                gold-copper resource, and significantly strengthens the technical team as the Company advances its
                exploration and resource growth strategy.
              </li>
            </ul>

            <blockquote
              className="border-l-4 border-primary pl-5 italic my-8"
              style={{ color: "hsl(var(--text-dark))", opacity: 0.85 }}
            >
              <p>
                "We are thrilled to welcome Dr. Erin Johns to the Adyton team. Her specialized academic background on
                the anatomy of the world class Lihir gold system, combined with her boots-on-the-ground experience,
                provides an immediate and substantial competitive advantage for accelerating the discovery process and
                unlocking the full potential of Adyton's whole-of-island land position."
              </p>
              <footer className="mt-2 not-italic text-sm font-semibold">— Tim Crossley, Chief Executive Officer</footer>
            </blockquote>

            <blockquote
              className="border-l-4 border-primary pl-5 italic my-8"
              style={{ color: "hsl(var(--text-dark))", opacity: 0.85 }}
            >
              <p>
                "I am thrilled to join the Adyton team and contribute my experience from Lihir to the next phase of work
                at Feni. Having spent years studying the geological controls of the Lihir system, I see clear parallels
                in the volcanic architecture, structural framework, mineralisation types, and alteration patterns at
                Feni. Those similarities suggest we are only beginning to understand the scale and potential of this
                system. I'm looking forward to helping advance the Feni project, which I believe has all the ingredients
                to become another significant gold resource in the region."
              </p>
              <footer className="mt-2 not-italic text-sm font-semibold">— Dr. Erin Johns</footer>
            </blockquote>

            <h2 className="text-xl font-display font-bold mt-10 mb-4" style={{ color: "hsl(var(--text-dark))" }}>
              About Dr. Erin Johns
            </h2>

            <p className="mb-4">
              Dr. Erin Johns is an accomplished economic geologist with a focus on alkalic-type gold-copper systems in
              the Pacific Rim region. Her PhD dissertation (2020) was entitled "Geology of the Kapit NE and Coastal Ore
              Zones, Lihir Gold Deposit, Papua New Guinea" from the University of Tasmania (CODES).
            </p>

            <p className="mb-4">Her expertise is directly relevant to Adyton's strategy:</p>

            <ul className="mb-6">
              <li>
                The Feni and Lihir deposits are both classic examples of alkalic-type epithermal gold deposits, which
                represents a highly valuable, yet geologically complex, class of mineral systems globally.
              </li>
              <li>
                Dr. Johns' PhD thesis at the University of Tasmania's renowned CODES department focused on the
                geological controls that concentrated gold mineralization at Lihir. Understanding the relationship
                between these controls and the deep-seated intrusive complex is paramount.
              </li>
              <li>
                The full-time appointment ensures that Adyton is applying a "Lihir-style" geological lens and learnings
                to the Feni Project. This provides the technical team with the ability to swiftly interpret new data,
                recognize subtle alteration signatures, and refine targeting, dramatically increasing the probability of
                a major discovery.
              </li>
            </ul>

            <h2 className="text-xl font-display font-bold mt-10 mb-4" style={{ color: "hsl(var(--text-dark))" }}>
              About the Feni Gold-Copper Project
            </h2>

            <p className="mb-4">
              The Feni Project is a key asset in Adyton's portfolio, located in a highly prospective region of Papua New
              Guinea known for world-class alkalic-type gold-copper deposits, including Lihir. The Company has a
              whole-of-island land position and has confirmed significant gold-copper mineralization at Feni. The
              Company is focussed on expanding its existing Kabang/Matangkaka resource and identifying new high-grade
              targets regionally.
            </p>

            <h2 className="text-xl font-display font-bold mt-10 mb-4" style={{ color: "hsl(var(--text-dark))" }}>
              About Adyton Resources Corporation
            </h2>

            <p className="mb-4">
              Adyton Resources Corporation is focused on the development of gold and copper resources in world class
              mineral jurisdictions. It currently has a portfolio of highly prospective mineral exploration projects in
              Papua New Guinea on which it is exploring to expand its identified gold Inferred and Indicated Mineral
              Resources and expand on its recent significant copper drill intercepts on the 100% owned Feni Island
              project.
            </p>

            <p className="mb-4">
              The Feni Island Project currently has a mineral resource prepared in accordance with NI 43-101 dated
              October 14, 2021, which has outlined an initial inferred mineral resource of 60.4 million tonnes at an
              average grade of 0.75 g/t Au, for contained gold of 1,460,000 ounces, assuming a cut-off grade of 0.5 g/t
              Au. See the NI 43-101 technical report entitled “NI 43-101 Technical Report on the Feni Gold-Copper
              Property, New Ireland Province, Papua New Guinea prepared for Adyton Resources by Mark Berry (MAIG), Simon
              Tear (MIGI PGeo), Matthew White (MAIG) and Andy Thomas (MAIG), each an independent mining consultant and
              “qualified person” as defined in NI 43-101, available under Adyton’s profile on SEDAR+ at
              www.sedarplus.ca. Mineral resources are not mineral reserves and have not demonstrated economic viability.
            </p>

            <p className="mb-4">
              The Fergusson Island Project currently has a mineral resource prepared in accordance with NI 43-101 dated
              October 14, 2021, which outlined an indicated mineral resource of 4.0 million tonnes at an average grade
              of 1.33 g/t Au for contained gold of 173,000 ounces and an inferred mineral resource of 16.3 million
              tonnes at an average grade of 1.02 g/t Au for contained gold of 540,000 ounces. See the technical report
              entitled “NI 43-101 Technical Report on the Fergusson Gold Property, Milne Bay Province, Papua New Guinea”
              prepared for Adyton Resources by Mark Berry (MAIG), Simon Tear (MIGI PGeo), Matthew White (MAIG) and Andy
              Thomas (MAIG), each an independent mining consultant and “qualified person” as defined in NI 43-101,
              available under the Company’s profile on SEDAR+ at www.sedarplus.ca. Mineral resources are not mineral
              reserves and have not demonstrated economic viability.
            </p>

            <p className="mb-4">
              <strong>Forward looking statements</strong>
            </p>

            <p className="mb-4">
              This press release contains certain forward-looking statements as well as historical information. Readers
              should not rely on information in this summary for any purpose other than for gaining general knowledge of
              the Company. Forward-looking statements include, but are not limited to, the completion and the closing of
              the Offering and use of proceeds raised in the Offering and Non-Brokered Offering. The words “expected”,
              “will” and similar expressions are intended to be among the statements that identify forward-looking
              statements. Although the Company believes that its expectations as reflected in any forward-looking
              statements, are reasonable, such statements involve risks and uncertainties and no assurance can be given
              that actual results will be consistent with these forward- looking statements. Except as required by law,
              the Company undertakes no obligation to update these forward-looking statements in the event that
              management’s beliefs, estimates, opinions or other factors should change.
            </p>

            <p className="mb-4">
              This press release does not constitute an offer to buy or sell securities in the United States. The
              distribution of Adyton securities in connection with the Offerings and Non-Brokered Offering described
              herein will not be registered under the United States Securities Act of 1933 (the “U.S. Securities Act”)
              and Adyton securities may not be offered or sold in the United States absent registration or an applicable
              exemption from the registration requirements of the U.S. Securities Act and applicable state securities
              laws. This press release shall not constitute an offer to sell or the solicitation of an offer to buy
              Adyton securities, nor shall there be any offer or sale of Adyton securities in any jurisdiction in which
              such offer, solicitation or sale would be unlawful.
            </p>

            <p className="mb-4">
              <i>
                Neither TSX Venture Exchange nor its Regulation Services Provider (as that term is defined in policies
                of the TSX Venture Exchange) accepts responsibility for the adequacy or accuracy of this release.
              </i>
            </p>
          </div>
        </div>
      </section>
      <AboutAdyton />
    </main>

    <Footer />
  </div>
);

export default DrErinJohnsFeni;
