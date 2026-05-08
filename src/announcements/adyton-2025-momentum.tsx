import Header from "@/components/layout/Header";
import Subscribe from "@/components/layout/Subscribe";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import ArticleSchema from "@/components/schema/ArticleSchema";
import { seoConfig } from "@/config/seo";
import AboutAdyton from "@/components/AboutAdyton";

const ARTICLE = {
  title: "Adyton 2025: Momentum, Execution and a Clear Path Forward",
  date: "December 22, 2025",
  excerpt:
    "Managing Director Tim Crossley reflects on a transformational 2025 for Adyton Resources and outlines key 2026 priorities across the Feni Island and Fergusson Island projects in Papua New Guinea.",
  sourceUrl:
    "https://adytonresources.com/adyton-2025-momentum-execution-and-a-clear-path-forward/",
};

const Adyton2025Momentum = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title={ARTICLE.title}
      description={ARTICLE.excerpt}
      canonical={`${seoConfig.siteUrl}/news/adyton-2025-momentum-execution-and-a-clear-path-forward`}
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
            <h2 className="font-display font-bold text-2xl md:text-3xl mt-2 mb-4">
              To the Stakeholders and Shareholders of Adyton Resources
            </h2>
            <p className="mb-3 italic">Message from Tim Crossley, Managing Director</p>

            <p className="mb-3">
              As we approach Christmas and the New Year, I would like to take the opportunity to reflect on the year
              that has been and look forward to 2026.
            </p>
            <p className="mb-3">
              2025 was a transformational year for Adyton during which we laid the foundations for the Company's next
              phase of growth. Key strategic pillars were implemented, and the Company successfully advanced on the
              ground exploration activities across both our 100% owned Feni Island Project and the Fergusson Island
              Projects, located in Papua New Guinea ("PNG").
            </p>
            <p className="mb-3">
              Drilling at the Fergusson projects commenced in late 2024 and continued through 2025 while drilling at
              Feni began in March 2025, marking an important milestone for the Company. Across all projects, Adyton
              completed a total of approximately 16,000 metres of drilling during the year, significantly advancing
              our understanding of these highly prospective gold, and, in the case of Feni, gold and copper systems.
            </p>

            <h3 className="font-display font-bold text-xl md:text-2xl mt-8 mb-3">Strategy Reflection</h3>
            <p className="mb-3">
              In April 2024 the Adyton Board set a strategy to advance all of the Company's projects concurrently, an
              ambitious objective for a junior explorer with limited funding at the time. We were, however
              well-positioned with several advanced exploration assets at Fergusson Island ready to enter the
              permitting phase, alongside Feni Island, one of the most compelling Tier 1 exploration opportunities in
              PNG.
            </p>
            <p className="mb-3">
              The Board also reaffirmed its focus on Island based projects with excellent access and logistics and
              identified an opportunity at Fergusson Island with the clear objective of bringing these assets into
              cash flow. Achieving this would enable the ongoing advancement of Feni through internally generated
              funds while minimising shareholder dilution.
            </p>
            <p className="mb-3">
              I am pleased to report that the execution of this strategy has delivered the outcomes we set out to
              achieve. Our Joint Venture partner EVIH, has made strong progress on advancing the Fergusson assets,
              providing the confidence to establish a target date for the restart of the Wapolu Project in late 2026.
              This progress, combined with the Company's approximately 20-month cash runway, places Adyton in a very
              strong position to fully deliver on the intent and outcomes of the Board's 2024 strategy.
            </p>

            <h3 className="font-display font-bold text-xl md:text-2xl mt-8 mb-3">Feni Island Project</h3>
            <p className="mb-3">
              Adyton's return to on the ground exploration at Feni marked a major inflection point for the Company in
              H2 2024, beginning with an extensive field reconnaissance program and a first-ever whole of Island drone
              magnetic survey.
            </p>
            <p className="mb-3">
              This modern geophysical dataset has materially enhanced the Company's understanding of the mineralized
              architecture across Feni and continues to directly inform drill targeting.
            </p>
            <p className="mb-3">
              Building on this momentum, Adyton mobilized PNG based drilling contractor Zenex to site in late February
              2025 with drilling commencing in March. The initial program focused on confirmation and infill drilling
              at the existing Kabang Resource, providing a strong technical foundation for resource growth. With this
              work largely complete, drilling has advanced into step out and expansion mode, targeting the margins of
              Kabang and testing newly identified geophysical anomalies that mirror the signatures of known high-grade
              zones beyond the current resource boundary.
            </p>
            <p className="mb-3">
              Results to date within the Kabang system have exceeded expectations and provide strong confidence that
              the ongoing drill program could materially expand the Kabang Resource. Of particular excitement are
              recent step-out holes southwest of Kabang, where core observations and strong near surface visual
              mineralisation indicate the potential discovery of a previously unrecognized ore zone. This emerging
              zone highlights the broader scale potential beyond the limits of the existing Kabang system and
              reinforces the opportunity for multiple centres of mineralisation within the Feni project area.
            </p>
            <p className="mb-3">
              The Company's recent engagement of Global Ore Discovery and renowned epithermal and Lihir specialist Dr.
              Erin Johns has further strengthened the technical team and sharpened the exploration thesis. Their work
              has reaffirmed that Feni hosts multiple Kabang-style epithermal targets alongside high-impact concealed
              porphyry targets, positioning the project as a district-scale exploration opportunity with significant
              upside beyond the current resource.
            </p>
            <p className="mb-3">
              In parallel with exploration success, Adyton continues to demonstrate leadership in local engagement and
              sustainable development. More than 95% of our Feni workforce are PNG nationals, with the majority
              recruited directly from Feni Island. The Company also maintains a 100% PNG based logistics and supply
              chain, ensuring the benefits of exploration activity are felt locally.
            </p>
            <p className="mb-3">
              Adyton's commitment to community partnership extends beyond employment. During the year, the Company
              supported the Books4PNG Kids charity by providing logistics assistance to deliver educational materials
              to children across Feni Island. Reflecting its confidence in the long-term future of the project,
              Adyton has also committed to supporting the recommissioning of the Babase Island airstrip and is funding
              a clean water supply project for the nearby Pikan village, both tangible investments that leave a
              lasting positive legacy alongside exploration success.
            </p>

            <h3 className="font-display font-bold text-xl md:text-2xl mt-8 mb-3">Fergusson Island</h3>
            <p className="mb-3">
              In May 2024, Adyton entered into a Joint Venture agreement with East Vision Investment Holdings (EVIH),
              providing EVIH with the right (subject to the achievement of defined milestones) to earn a 50% stake in
              the Fergusson Island projects. Importantly, the agreement establishes a clear pathway for EVIH's parent
              company to provide all required project financing, significantly de-risking development and funding
              execution.
            </p>
            <p className="mb-3">
              Throughout the year, substantial progress was made at Fergusson Island. 8,000 metres of drilling were
              completed across the Wapolu and Gameta projects, alongside comprehensive landowner engagement, and the
              completion of social and environmental base line studies. Metallurgical test work has advanced to a
              stage that supports confirmation of the proposed process flow sheet, and the Company recently executed
              its first non-binding Letter Of Intent for the purchase of Wapolu concentrate, an important milestone.
            </p>
            <p className="mb-3">
              Near term activities are focused on completing feasibility studies, submitting environmental permits
              and advancing the Mining Lease application. In parallel, Adyton is finalising agreements with EVIH to
              accelerate development at the Gameta project, positioning Fergusson Island for a clear and well-defined
              path toward production.
            </p>

            <h3 className="font-display font-bold text-xl md:text-2xl mt-8 mb-3">Our key deliverables for 2026</h3>

            <h4 className="font-display font-semibold text-lg mt-6 mb-2">Feni Island – 2026 Priorities</h4>
            <ul className="mb-4 pl-6 list-disc">
              <li className="mb-2">
                Continue drilling and resource expansion at Feni Island including testing targets beyond the Kabang
                resource footprint. The primary objective is to demonstrate that the scale and continuity and the
                structural controls of the Feni system support expansion of the resource target greater than 5 Moz
                with an increasing proposition of Indicated resources that underpin feasible and economic mining
                scenarios;
              </li>
              <li className="mb-2">Target the release of an updated Mineral Resource Estimate (MRE) in H2 2026;</li>
              <li className="mb-2">
                Advance a preliminary assessment of the geothermal energy potential on the Island, evaluating its
                suitability as a future low-carbon or carbon-neutral power source for a potential mining operation;
                and
              </li>
              <li className="mb-2">
                Apply modern exploration vectoring and targeting tools to refine geological models and build
                confidence in new, large-scale exploration targets across the broader Feni system.
              </li>
            </ul>

            <h4 className="font-display font-semibold text-lg mt-6 mb-2">Fergusson Island – 2026 Priorities</h4>
            <ul className="mb-4 pl-6 list-disc">
              <li className="mb-2">
                Complete feasibility workstreams and submit Environmental Permit and Mining Lease applications to
                support the restart of the Wapolu operation;
              </li>
              <li className="mb-2">
                Secure granting of the ML and Environmental approvals, together with completion of all required
                landowner agreements;
              </li>
              <li className="mb-2">
                Commence operations at Wapolu, marking a key transition from development to cash flow generation;
              </li>
              <li className="mb-2">
                Continuous infill drilling at Gameta to expand Indicated Resource, complemented by selective step-out
                drilling to test near-mine resource growth potential; and
              </li>
              <li className="mb-2">
                Advance permission at Gameta including submission of the Mining Lease and ML and Environmental Permit
                applications and completion of all baseline studies and landowner agreements.
              </li>
            </ul>

            <p className="mb-3">
              None of this progress would have been possible without the dedication of our talented team, the
              guidance of the Board and the continued support of our shareholders. I would particularly like to
              acknowledge the strong support of our local landowners, especially the family of principal landowner,
              Vincent Terer, whose partnership is fundamental to our ability to operate on Feni Island.
            </p>
            <p className="mb-3">
              I also want to recognize the unwavering commitment of our employees, and particularly Dr. Chris Bowden,
              our senior geologists and site leadership team Fred Iwei and Eugene Atase, along with all staff and
              local stakeholders who contribute every day to our success.
            </p>
            <p className="mb-3">
              Finally, I would also like to acknowledge the support of the Mineral Resources Authority along with
              Provincial and Local Government support, whose leadership and assistance were instrumental in enabling
              Adyton to successfully return to operations on Feni Island.
            </p>

            <p className="mb-1 mt-6 font-semibold">Tim Crossley</p>
            <p className="mb-6">Managing Director</p>

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

          {/* Source link */}
          <div className="mt-10 rounded-lg p-5" style={{ background: "hsl(var(--light-card))", border: "1px solid hsl(var(--light-border))" }}>
            <p className="text-sm mb-2" style={{ color: "hsl(var(--light-muted-foreground))" }}>
              Originally published on adytonresources.com
            </p>
            <a
              href={ARTICLE.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline font-medium"
            >
              View original source →
            </a>
          </div>
        </div>
      </section>
      <AboutAdyton />
    </main>

    <Footer />
  </div>
);

export default Adyton2025Momentum;
