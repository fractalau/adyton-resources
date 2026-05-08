import Header from "@/components/layout/Header";
import Subscribe from "@/components/layout/Subscribe";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import ArticleSchema from "@/components/schema/ArticleSchema";
import { seoConfig } from "@/config/seo";
import AboutAdyton from "@/components/AboutAdyton";

const SLUG =
  "adyton-resources-closes-oversubscribed-c20-million-financing-comprised-of-14-million-brokered-private-placement-of-units-and-concurrent-6-million-nonbrokered-private-placements";

const ARTICLE = {
  title:
    "Adyton Resources Closes Oversubscribed C$20 Million Financing Comprised of $14 Million Brokered Private Placement of Units and Concurrent $6 Million Nonbrokered Private Placements",
  date: "August 14, 2025",
  excerpt:
    "Adyton Resources has closed an oversubscribed C$20 million financing, comprising a $14 million brokered private placement of units and a concurrent $6 million non-brokered private placement.",
};

const C20mFinancingClosing = () => (
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
              <strong>Brisbane, Australia /ACCESSWIRE/ (August 13, 2025)</strong> – Adyton Resources Corp. (TSXV:{" "}
              <strong>ADY</strong>) (FSE: 701GR) ("<strong>Adyton</strong>" or the "<strong>Company</strong>") is
              pleased to announce that it has completed its previously announced brokered private placement financing
              (the "<strong>Offering</strong>") for total gross proceeds of C$14,000,000 from the sale of 35,000,000
              units of the Company (each, a "Unit") at a price of $0.40 per Unit (the "<strong>Offering Price</strong>").
              Each Unit consists of one common share of the Company (each, a "<strong>Share</strong>") and one-half of
              one common share purchase warrant (each whole warrant, a "<strong>Warrant</strong>"). Each Warrant
              entitles the holder to purchase one Share at a price of $0.60 for a period of 24 months following the
              date of closing.
            </p>

            <p className="mb-3">
              Clarus Securities Inc. ("<strong>Clarus</strong>") and PowerOne Capital Markets Limited ("
              <strong>PowerOne</strong>" and, together with Clarus, the "<strong>Lead Agents</strong>") acted as agents
              for the Offering.
            </p>

            <p className="mb-3">
              In connection with the Offering, the Company paid a cash commission to the Lead Agents equal to 6.5% of
              the gross proceeds of the Offering and also issued to the Lead Agents an aggregate of 2,275,000
              nontransferable compensation options (each, a "<strong>Compensation Option</strong>"). Each Compensation
              Option entitles the holder to acquire one Unit at the Offering Price for a period of 24 months from the
              date of issuance.
            </p>

            <p className="mb-3">
              Concurrent with the Offering, the Company also completed a non-brokered private placement of 15,000,000
              units of the Company (the "<strong>NB Units</strong>") at the Offering Price per NB Unit for aggregate
              gross proceeds of C$6,000,000 (the "<strong>Non-Brokered Offering</strong>"). The NB Units have the same
              terms as the Units. The purpose of the Non-Brokered Offering was primarily to enable the board of
              directors and management of the Company, along with residents of Papua New Guinea, to participate in a
              financing of the Company on similar terms as the Offering and to use the net proceeds from the
              Non-Brokered Offering to advance the Company's exploration and development activities. No finder's fees
              were paid in connection with the Non-Brokered Offering.
            </p>

            <p className="mb-3">
              Two insiders of the Company, Company Chairman Sinton Spence and Independent Director Michael Gray,
              participated in the Offering and subscribed for an aggregate of 1,225,775 Units. Such participation
              constitutes a "related-party transaction" within the meaning of Multilateral Instrument 61-101 –
              Protection of Minority Security Holders in Special Transactions ("<strong>MI 61-101</strong>"). The
              Company has relied on the exemptions from the formal valuation and minority shareholder approval
              requirements under sections 5.5(a) and 5.7(1)(a) of MI 61-101, as neither the fair market value of the
              securities issued to the insiders nor the consideration paid by them exceeded 25% of the Company's market
              capitalization (as determined in accordance with MI 61-101).
            </p>

            <p className="mb-3">
              The Units and NB Units were issued pursuant to applicable exemptions from the prospectus requirements
              under applicable securities laws. The securities issued pursuant to the Offering and the Non-Brokered
              Offering will be subject to a statutory hold period of four months plus one day from the date of closing,
              in accordance with applicable securities legislation.
            </p>

            <p className="mb-3">
              The securities issued under the Offering and the Non-Brokered Offering have not been and will not be
              registered under the United States Securities Act of 1933, as amended (the "U.S. Securities Act"), and
              may not be offered or sold in the United States absent registration or an applicable exemption from
              registration requirements. This press release does not constitute an offer to sell or the solicitation of
              an offer to buy any securities in any jurisdiction.
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

            <h3 className="font-display font-bold text-xl md:text-2xl mt-8 mb-3">Forward looking statements</h3>
            <p className="text-sm mb-3" style={{ color: "hsl(var(--light-muted-foreground))" }}>
              This press release contains certain forward-looking statements as well as historical information. Readers
              should not rely on information in this summary for any purpose other than for gaining general knowledge
              of the Company. Forward-looking statements include, but are not limited to, the completion and the
              closing of the Offering and use of proceeds raised in the Offering and Non-Brokered Offering. The words
              "expected", "will" and similar expressions are intended to be among the statements that identify
              forward-looking statements. Although the Company believes that its expectations as reflected in any
              forward-looking statements, are reasonable, such statements involve risks and uncertainties and no
              assurance can be given that actual results will be consistent with these forward-looking statements.
              Except as required by law, the Company undertakes no obligation to update these forward-looking
              statements in the event that management's beliefs, estimates, opinions or other factors should change.
            </p>
            <p className="text-sm mb-3" style={{ color: "hsl(var(--light-muted-foreground))" }}>
              This press release does not constitute an offer to buy or sell securities in the United States. The
              distribution of Adyton securities in connection with the Offerings and Non-Brokered Offering described
              herein will not be registered under the United States Securities Act of 1933 (the "U.S. Securities Act")
              and Adyton securities may not be offered or sold in the United States absent registration or an
              applicable exemption from the registration requirements of the U.S. Securities Act and applicable state
              securities laws. This press release shall not constitute an offer to sell or the solicitation of an offer
              to buy Adyton securities, nor shall there be any offer or sale of Adyton securities in any jurisdiction
              in which such offer, solicitation or sale would be unlawful.
            </p>

            <p className="text-sm italic mb-4">
              Neither TSX Venture Exchange nor its Regulation Services Provider (as that term is defined in policies of
              the TSX Venture Exchange) accepts responsibility for the adequacy or accuracy of this release.
            </p>
          </article>
        </div>
      </section>
      <AboutAdyton />
    </main>

    <Footer />
  </div>
);

export default C20mFinancingClosing;
