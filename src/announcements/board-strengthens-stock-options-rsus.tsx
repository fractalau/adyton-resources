import Header from "@/components/layout/Header";
import Subscribe from "@/components/layout/Subscribe";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import ArticleSchema from "@/components/schema/ArticleSchema";
import { seoConfig } from "@/config/seo";
import AboutAdyton from "@/components/AboutAdyton";

const SLUG = "adyton-resources-strengthens-board-and-grants-stock-options-and-rsus";

const ARTICLE = {
  title: "Adyton Resources Strengthens Board and Grants Stock Options and RSUs",
  date: "July 28, 2025",
  excerpt:
    "Adyton Resources appoints Michael Gray, Co-Founder of Agentis Capital, as a Non-Executive Director and grants 9,000,000 stock options and 1,830,000 RSUs to officers, directors and employees.",
};

const BoardStrengthensStockOptionsRsus = () => (
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
              <strong>Brisbane, Australia – July 24, 2025</strong> – <strong>Adyton Resources Corporation</strong> (TSX
              Venture: <strong>ADY</strong>) ("<strong>Adyton</strong>" or the "<strong>Company</strong>") is pleased
              to announce the appointment of Co-Founder of Agentis Capital, Michael Gray as a Non-Executive Director to
              the Board. Michael's appointment is subject to TSXV approval and fills the vacancy created by the prior
              resignation of Mr. Chris Wilson.
            </p>

            <h2 className="font-display font-bold text-2xl md:text-3xl mt-8 mb-3">Appointment of Director</h2>
            <p className="mb-3">
              Michael Gray is one of the industry's most respected and trusted independent research analysts and will
              bring to the board a wealth of technical, corporate and capital markets experience. Michael is a
              geologist (MSc) and has been a top-ranked mining equity analyst for the past 20 years covering explorers,
              developers and producers with a particular focus on Tier 1 assets (or proto Tier 1) in the precious
              metals sector. Michael co-founded Agentis Capital Mining Partners in 2019 and previously had a nine-year
              career with Macquarie Capital Markets, where he was Managing Director and Team Head, Mining Equity
              Research, Canada. Early in his career, he worked with senior mining companies including Falconbridge and
              Cominco (now Teck) then co-founded and helped manage explorer Rubicon Minerals (1997-2005). Michael is a
              Past President of the +5000 member Association for Mineral Exploration (2004).
            </p>

            <blockquote className="border-l-4 pl-4 italic mb-4" style={{ borderColor: "#c4a14f" }}>
              Michael Gray commented "I am pleased to join the board of Adyton and contribute to the success of the
              firm by bringing to bear my technical, corporate and capital markets skill set."
            </blockquote>

            <blockquote className="border-l-4 pl-4 italic mb-4" style={{ borderColor: "#c4a14f" }}>
              Adyton Chairman Sinton Spence said "I am thrilled to have Michael Gray join the Board. Michael's
              extensive track record as an analyst, involvement in capital markets and his technical expertise as a
              geologist make him an invaluable addition to our team."
            </blockquote>

            <h2 className="font-display font-bold text-2xl md:text-3xl mt-8 mb-3">Grant of Stock Options and RSUs</h2>
            <p className="mb-3">
              The Company also announces that it has granted an aggregate of 9,000,000 stock options and 1,830,000
              restricted share units (each an "<strong>RSU</strong>") to certain officers, directors and employees of
              the Company.
            </p>
            <p className="mb-3">
              The stock options have been granted under the Company's Amended and Restated Stock Option Plan (the
              "Option Plan"). Each option entitles the holder to acquire one common share at an exercise price of $0.40
              for a three-year period expiring on July 22, 2028, subject to vesting requirements that the options only
              vest on the date on which the holder has been an officer, director or employee of the Company for 12
              months. Any common shares acquired on the exercise of the options will be subject to contractual resale
              restrictions for a period of 12 months.
            </p>
            <p className="mb-3">
              The RSUs have been granted under the Company's Amended and Restated Non-Option Omnibus Incentive Plan
              (the "Omnibus Plan"). Each RSU entitles the holder to a payment in the form of one common share or its
              cash equivalent in accordance with the provisions of the Omnibus Plan, subject to vesting requirements
              that the RSU's only vest on the date on which the holder has been an officer, director or employee of
              the Company for 12 months. The RSU's are also subject to performance criteria such that they will only
              vest following the date on which the 30-day VWAP of the common shares on the TSX Venture Exchange is at
              least C$0.40. Any common shares acquired on vesting of the RSUs will be subject to contractual resale
              restrictions for a period of 12 months.
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

export default BoardStrengthensStockOptionsRsus;
