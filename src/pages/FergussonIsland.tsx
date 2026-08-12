import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Subscribe from "@/components/layout/Subscribe";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import projectHeaderBg from "@/assets/project-header-bg.jpg";

const stats = [
  { value: "1.06 Moz Au", label: "Indicated + Inferred" },
  { value: "50/50 JV", label: "with EVIH" },
  { value: "US$9.5M", label: "EVIH committed" },
  { value: "Milne Bay", label: "Province, PNG" },
];

const wapoluResults = [
  { hole: "WPDH002", from: 19, interval: 4, au: "9.85", notes: "incl. 1m @ 36 g/t Au" },
  { hole: "WPDH002", from: 8, interval: 6, au: "2.46", notes: "" },
  { hole: "WPDH001", from: 16, interval: 8, au: "2.36", notes: "" },
  { hole: "WPDH006", from: 15, interval: 6, au: "2.32", notes: "" },
  { hole: "WPDH001", from: 5, interval: 5, au: "1.66", notes: "" },
];

const combinedResource = [
  {
    project: "Gameta",
    indGrade: "1.41",
    indTonnes: "8.94",
    indKoz: "404",
    infGrade: "0.99",
    infTonnes: "6.52",
    infKoz: "207",
  },
  {
    project: "Wapolu",
    indGrade: "0.92",
    indTonnes: "1.25",
    indKoz: "37",
    infGrade: "0.89",
    infTonnes: "14.72",
    infKoz: "419",
  },
  {
    project: "TOTAL",
    indGrade: "1.35",
    indTonnes: "10.19",
    indKoz: "441",
    infGrade: "0.92",
    infTonnes: "21.24",
    infKoz: "626",
  },
];

const timeline = [
  { period: "2026", title: "Fergusson Permitting", desc: "Final regulatory approvals & community engagement" },
  { period: "2026 H2", title: "Construction & Ramp-Up", desc: "JV funding deployment & site development" },
  { period: "2027", title: "First Revenue", desc: "Concentrate shipment begins" },
  {
    period: "Future",
    title: "Portfolio Growth (Gameta and Feni)",
    desc: "Reinvest cash flow into development of Gameta and Feni exploration",
  },
];

const FergussonIsland = () => {
  useSEO(
    "Fergusson Island Gold Project",
    "Fergusson Island holds 1.06 Moz Au across Wapolu and Gameta deposits. 50/50 JV with EVIH committing US$9.5M. Near-term path to production in PNG.",
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-background py-16 md:py-20 border-b border-border overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-25"
            style={{ backgroundImage: `url(${projectHeaderBg})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
          <div className="container relative z-10">
            <p className="uppercase tracking-[0.3em] text-primary font-semibold mb-3 font-body">NEAR-TERM CASH FLOW</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              Fergusson Island
              <br />
              Gold Project
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {stats.map((s) => (
                <div key={s.label} className="text-center p-4 rounded-lg border border-border bg-card">
                  <p className="text-2xl md:text-3xl font-mono font-bold text-primary">{s.value}</p>
                  <p className="text-foreground/50 mt-1 font-body">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Subscribe />

        {/* Overview */}
        <section className="py-16 md:py-20" style={{ background: "hsl(var(--off-white))" }}>
          <div className="container max-w-4xl">
            <p className="uppercase tracking-[0.3em] text-primary font-semibold mb-3 font-body">
              FERGUSSON ISLAND GOLD PROJECT
            </p>
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-6" style={{ color: "hsl(var(--text-dark))" }}>
              Zero capital outlay. 50% free cash flow.
            </h2>
            <div
              className="leading-relaxed space-y-4 font-body"
              style={{ color: "hsl(var(--light-muted-foreground))" }}
            >
              <p>
                The Fergusson Island Gold Project comprises two development-ready deposits — Wapolu and Gameta — located
                at the western end of the Woodlark Basin a partially submerged extension to the world class Owen Stanley
                Range discovery belt in Milne Bay Province, Papua New Guinea. Other notable discoveries in the region
                include the Misima and Woodlark projects.
              </p>
              <p>
                The project is 100% funded and operated by Adyton's joint venture partner, East Vision Investment
                Holdings (EVIH), which is committing up to US$9.5M to advance Fergusson to shovel-ready status. Adyton
                retains 50% of free cash flow with zero capital outlay for construction.
              </p>
              <p>
                Island-based logistics provide a development advantage: low-cost barge access, short distances between
                deposits, and supportive landholders.
              </p>
              <p
                className="text-sm mt-4 italic font-body"
                style={{ color: "hsl(var(--light-muted-foreground) / 0.6)" }}
              >
                Subject to EVIH completing earn-in conditions. See ASX/TSXV disclosures for full terms, and any right
                the state may have for participating interest in mining projects.
              </p>
            </div>
          </div>
        </section>

        {/* EVIH JV */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container max-w-4xl">
            <p className="uppercase tracking-[0.3em] text-primary font-semibold mb-3 font-body">DEVELOPMENT PARTNER</p>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
              East Vision Investment Holdings (EVIH)
            </h2>
            <div className="leading-relaxed space-y-4 mb-6 font-body text-foreground/70">
              <p>
                EVIH is committing up to US$9.5M to fund feasibility, metallurgical work, permitting, bulk sample and
                Capex for the Wapolu project restart to earn a 50% interest in Fergusson Mining Pte. Ltd.
              </p>
              <p>Progress to date:</p>
              <ul>
                <li>~8,000 m of drilling completed</li>
                <li>Metallurgical testwork completed</li>
                <li>Mining and environmental permit applications lodged</li>
                <li>Landowner and baseline environmental studies completed</li>
              </ul>
              <p>
                EVIH's parent will provide a shareholder bridging loan to fund the Gameta project to a target 2 Mtpa
                Life of Mine project. Timeline to shovel-ready: 12–14 months from submission of ML application funding
                milestone.
              </p>
              <p>
                On December 10, 2025, Adyton received a non-binding Letter of Intent from Korean trading group Hyosung
                TNC Corporation for the purchase of gold concentrate from Wapolu — demonstrating strong market demand
                and materially improved payability terms for project concentrate output.
              </p>
            </div>
            <p className="italic font-body text-foreground/40">
              LOI is non-binding. No binding offtake agreement has been entered into. See December 10, 2025 press
              release for full details.
            </p>
          </div>
        </section>

        {/* Wapolu */}
        <section className="py-16 md:py-20" style={{ background: "hsl(var(--off-white))" }}>
          <div className="container max-w-4xl">
            <p className="uppercase tracking-[0.3em] text-primary font-semibold mb-3 font-body">WAPOLU GOLD PROJECT</p>
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-6" style={{ color: "hsl(var(--text-dark))" }}>
              Near-Surface, High-Grade Gold Ready for Restart
            </h2>
            <p className="leading-relaxed mb-8 font-body" style={{ color: "hsl(var(--light-muted-foreground))" }}>
              Wapolu is a shallow open-pit gold deposit with an established production history. A small-scale mine
              operated at Wapolu from 1995 to 1997, producing more than 9,000 oz Au before closure due to historically
              low gold prices — not geology.
            </p>

            <div className="overflow-x-auto rounded-lg border mb-4" style={{ borderColor: "hsl(var(--light-border))" }}>
              <table className="w-full text-sm font-body">
                <thead>
                  <tr style={{ background: "hsl(var(--light-card))" }}>
                    <th className="text-left px-4 py-3 font-semibold" style={{ color: "hsl(var(--text-dark))" }}>
                      Classification
                    </th>
                    <th className="text-right px-4 py-3 font-semibold" style={{ color: "hsl(var(--text-dark))" }}>
                      Tonnes (Mt)
                    </th>
                    <th className="text-right px-4 py-3 font-semibold" style={{ color: "hsl(var(--text-dark))" }}>
                      Grade (g/t Au)
                    </th>
                    <th className="text-right px-4 py-3 font-semibold" style={{ color: "hsl(var(--text-dark))" }}>
                      Contained (koz)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t" style={{ borderColor: "hsl(var(--light-border))" }}>
                    <td className="px-4 py-2" style={{ color: "hsl(var(--light-muted-foreground))" }}>
                      Indicated
                    </td>
                    <td className="text-right px-4 py-2 font-mono text-primary">1.25</td>
                    <td className="text-right px-4 py-2 font-mono text-primary">0.92</td>
                    <td className="text-right px-4 py-2 font-mono text-primary font-bold">37</td>
                  </tr>
                  <tr className="border-t" style={{ borderColor: "hsl(var(--light-border))" }}>
                    <td className="px-4 py-2" style={{ color: "hsl(var(--light-muted-foreground))" }}>
                      Inferred
                    </td>
                    <td className="text-right px-4 py-2 font-mono text-primary">14.72</td>
                    <td className="text-right px-4 py-2 font-mono text-primary">0.89</td>
                    <td className="text-right px-4 py-2 font-mono text-primary font-bold">419</td>
                  </tr>
                  <tr className="border-t-2 border-primary/30">
                    <td className="px-4 py-2 font-semibold" style={{ color: "hsl(var(--text-dark))" }}>
                      TOTAL
                    </td>
                    <td className="text-right px-4 py-2 font-mono text-primary font-bold">15.97</td>
                    <td className="text-right px-4 py-2 font-mono text-primary font-bold">0.89</td>
                    <td className="text-right px-4 py-2 font-mono text-primary font-bold">456</td>

                  </tr>
                </tbody>
              </table>
            </div>
            <p className="italic font-body mb-8" style={{ color: "hsl(var(--light-muted-foreground) / 0.6)" }}>
              Filed on SEDAR+ February 25, 2026. Mineral resources are not mineral reserves and have not demonstrated
              economic viability.
            </p>

            <blockquote
              className="border-l-2 border-primary pl-4 mb-8 italic font-body"
              style={{ color: "hsl(var(--light-muted-foreground))" }}
            >
              "The updated Wapolu Mineral Resource materially strengthens the foundation of our Fergusson Island
              development strategy and exceeds our internal expectations. Development work is fully funded to production
              through our joint venture with EVIH. Adyton is entering a clear growth and execution phase."
              <span className="block mt-1 not-italic text-sm text-primary">
                — Tim Crossley, Managing Director, Adyton Resources
              </span>
            </blockquote>

            {/* Drill intercepts */}
            <h3 className="text-lg font-display font-bold mb-4" style={{ color: "hsl(var(--text-dark))" }}>
              Selected 2025 Drill Intercepts
            </h3>
            <div className="overflow-x-auto rounded-lg border mb-4" style={{ borderColor: "hsl(var(--light-border))" }}>
              <table className="w-full text-sm font-mono">
                <thead>
                  <tr style={{ background: "hsl(var(--light-card))" }}>
                    <th className="text-left px-3 py-2" style={{ color: "hsl(var(--text-dark))" }}>
                      Hole
                    </th>
                    <th className="text-right px-3 py-2" style={{ color: "hsl(var(--text-dark))" }}>
                      From(m)
                    </th>
                    <th className="text-right px-3 py-2" style={{ color: "hsl(var(--text-dark))" }}>
                      Int(m)
                    </th>
                    <th className="text-right px-3 py-2" style={{ color: "hsl(var(--text-dark))" }}>
                      Au(g/t)
                    </th>
                    <th className="text-left px-3 py-2" style={{ color: "hsl(var(--text-dark))" }}>
                      Notes
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {wapoluResults.map((r, i) => (
                    <tr key={i} className="border-t" style={{ borderColor: "hsl(var(--light-border))" }}>
                      <td className="px-3 py-1.5" style={{ color: "hsl(var(--text-dark))" }}>
                        {r.hole}
                      </td>
                      <td className="text-right px-3 py-1.5" style={{ color: "hsl(var(--light-muted-foreground))" }}>
                        {r.from}
                      </td>
                      <td className="text-right px-3 py-1.5" style={{ color: "hsl(var(--light-muted-foreground))" }}>
                        {r.interval}
                      </td>
                      <td className="text-right px-3 py-1.5 text-primary font-semibold">{r.au}</td>
                      <td className="px-3 py-1.5 text-sm" style={{ color: "hsl(var(--light-muted-foreground))" }}>
                        {r.notes}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Gameta */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container max-w-4xl">
            <p className="uppercase tracking-[0.3em] text-primary font-semibold mb-3 font-body">GAMETA GOLD DEPOSIT</p>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
              611 Koz Au Resource Open in All Directions
            </h2>
            <div className="leading-relaxed space-y-4 mb-8 font-body text-foreground/70">
              <p>
                Gameta is located approximately 30 km from Wapolu on Fergusson Island, with potential to combine
                resources and leverage shared infrastructure for a future dig-and-ship or barge-supported development
                concept.
              </p>
              <p>
                The deposit has three identified high-grade ore zones — Northern, Central, and Southern — with resource
                definition drilling confirming continuity and indicating further upside from expansion drilling.
              </p>
              <p>
                Preliminary metallurgical testwork indicates approximately 87% gold and approximately 85% silver
                reporting to concentrate, supporting a potential development pathway following Wapolu.
              </p>
            </div>

            <div className="overflow-x-auto rounded-lg border border-border mb-4">
              <table className="w-full text-sm font-body">
                <thead className="bg-card">
                  <tr>
                    <th className="text-left px-4 py-3 text-foreground font-semibold">Classification</th>
                    <th className="text-right px-4 py-3 text-foreground font-semibold">Tonnes (Mt)</th>
                    <th className="text-right px-4 py-3 text-foreground font-semibold">Grade (g/t Au)</th>
                    <th className="text-right px-4 py-3 text-foreground font-semibold">Contained (koz)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border">
                    <td className="px-4 py-2 text-foreground/80">Indicated</td>
                    <td className="text-right px-4 py-2 font-mono text-primary">8.94</td>
                    <td className="text-right px-4 py-2 font-mono text-primary">1.41</td>
                    <td className="text-right px-4 py-2 font-mono text-primary font-bold">404</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="px-4 py-2 text-foreground/80">Inferred</td>
                    <td className="text-right px-4 py-2 font-mono text-primary">6.52</td>
                    <td className="text-right px-4 py-2 font-mono text-primary">0.99</td>
                    <td className="text-right px-4 py-2 font-mono text-primary font-bold">207</td>
                  </tr>
                  <tr className="border-t-2 border-primary/30">
                    <td className="px-4 py-2 font-semibold text-foreground">TOTAL</td>
                    <td className="text-right px-4 py-2 font-mono text-primary font-bold">15.46</td>
                    <td className="text-right px-4 py-2 font-mono text-primary font-bold">1.23</td>
                    <td className="text-right px-4 py-2 font-mono text-primary font-bold">611</td>
                  </tr>

                </tbody>
              </table>
            </div>
            <p className="italic font-body text-foreground/40 mb-8">
              Mineral resources are not mineral reserves and have not demonstrated economic viability.
            </p>

            {/* Drill intercepts */}
            <h3 className="text-lg font-display font-bold mb-4 text-foreground">Selected 2025 Drill Intercepts</h3>
            <div className="overflow-x-auto rounded-lg border border-border mb-4">
              <table className="w-full text-sm font-mono">
                <thead className="bg-card">
                  <tr>
                    <th className="text-left px-3 py-2 text-foreground">Hole</th>
                    <th className="text-right px-3 py-2 text-foreground">From(m)</th>
                    <th className="text-right px-3 py-2 text-foreground">Int(m)</th>
                    <th className="text-right px-3 py-2 text-foreground">Au(g/t)</th>
                    <th className="text-left px-3 py-2 text-foreground">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { hole: "GMDH001", from: 0, int: 9, au: "1.08" },
                    { hole: "Inc.", from: 5, int: 1, au: "4.6" },
                    { hole: "GMDH002", from: 0, int: 6, au: "1.22" },
                    { hole: "Inc.", from: 0, int: 2, au: "2.34" },
                    { hole: "GMDH004", from: 0, int: 6, au: "1.15" },
                    { hole: "Inc.", from: 2, int: 3, au: "1.66" },
                    { hole: "GMDH005", from: 49, int: 13, au: "1.88" },
                    { hole: "GMDH005", from: 94, int: 14, au: "1.05" },
                    { hole: "Inc.", from: 94, int: 1, au: "4.21" },
                    { hole: "Inc.", from: 96, int: 2, au: "1.37" },
                    { hole: "GMDH008", from: 98, int: 13, au: "3.84" },
                    { hole: "Inc.", from: 99, int: 5, au: "8.65" },
                    { hole: "Inc.", from: 100, int: 2, au: "14.37" },
                    { hole: "GMDH009", from: 86, int: 6, au: "2.28" },
                    { hole: "GMDH009", from: 146, int: 12, au: "28.56" },
                    { hole: "Inc.", from: 150, int: 3, au: "105" },
                    { hole: "GMDH010", from: 114, int: 6, au: "2.69" },
                    { hole: "GMDH013", from: 105, int: 13, au: "1.37" },
                    { hole: "Inc.", from: 105, int: 8, au: "1.8" },
                    { hole: "GMDH021", from: 51, int: 16, au: "2.07" },
                    { hole: "Inc.", from: 55, int: 5, au: "3.63" },
                    { hole: "GMDH028", from: 80, int: 2, au: "4.33" },
                    { hole: "GMDH033", from: 9, int: 2, au: "3.59" },
                    { hole: "Inc.", from: 9, int: 1, au: "5.17" },
                  ].map((r) => (
                    <tr key={r.hole} className="border-t border-border">
                      <td className="px-3 py-1.5 text-foreground">{r.hole}</td>
                      <td className="text-right px-3 py-1.5 text-foreground/70">{r.from}</td>
                      <td className="text-right px-3 py-1.5 text-foreground/70">{r.int}</td>
                      <td className="text-right px-3 py-1.5 text-primary font-semibold">{r.au}</td>
                      <td className="px-3 py-1.5 text-sm text-foreground/70"></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Combined Resource */}
        <section className="pt-16 md:py-20" style={{ background: "hsl(var(--off-white))" }}>
          <div className="container max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-6" style={{ color: "hsl(var(--text-dark))" }}>
              Combined Fergusson Resource Summary
            </h2>
            <div className="overflow-x-auto rounded-lg border" style={{ borderColor: "hsl(var(--light-border))" }}>
              <table className="w-full text-sm font-mono">
                <thead>
                  <tr style={{ background: "hsl(var(--light-card))" }}>
                    <th className="text-left px-3 py-2" style={{ color: "hsl(var(--text-dark))" }}>
                      Project
                    </th>
                    <th className="text-right px-3 py-2" style={{ color: "hsl(var(--text-dark))" }}>
                      Ind. g/t
                    </th>
                    <th className="text-right px-3 py-2" style={{ color: "hsl(var(--text-dark))" }}>
                      Ind. Mt
                    </th>
                    <th className="text-right px-3 py-2" style={{ color: "hsl(var(--text-dark))" }}>
                      Ind. koz
                    </th>
                    <th className="text-right px-3 py-2" style={{ color: "hsl(var(--text-dark))" }}>
                      Inf. g/t
                    </th>
                    <th className="text-right px-3 py-2" style={{ color: "hsl(var(--text-dark))" }}>
                      Inf. Mt
                    </th>
                    <th className="text-right px-3 py-2" style={{ color: "hsl(var(--text-dark))" }}>
                      Inf. koz
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {combinedResource.map((r, i) => (
                    <tr
                      key={i}
                      className={`border-t ${r.project === "TOTAL" ? "border-t-2 border-primary/30" : ""}`}
                      style={r.project !== "TOTAL" ? { borderColor: "hsl(var(--light-border))" } : undefined}
                    >
                      <td
                        className={`px-3 py-1.5 ${r.project === "TOTAL" ? "font-bold" : ""}`}
                        style={{ color: "hsl(var(--text-dark))" }}
                      >
                        {r.project}
                      </td>
                      <td className="text-right px-3 py-1.5 text-primary">{r.indGrade}</td>
                      <td className="text-right px-3 py-1.5 text-primary">{r.indTonnes}</td>
                      <td className="text-right px-3 py-1.5 text-primary font-semibold">{r.indKoz}</td>
                      <td className="text-right px-3 py-1.5 text-primary">{r.infGrade}</td>
                      <td className="text-right px-3 py-1.5 text-primary">{r.infTonnes}</td>
                      <td className="text-right px-3 py-1.5 text-primary font-semibold">{r.infKoz}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Development Timeline */}
        <section
          className="py-16 md:py-20 border-t"
          style={{ background: "hsl(var(--off-white))", borderTopColor: "#d6d2cd" }}
        >
          <div className="container max-w-4xl">
            <p className="uppercase tracking-[0.3em] text-primary font-semibold mb-3 font-body">PATH TO PRODUCTION</p>
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-8" style={{ color: "hsl(var(--text-dark))" }}>
              Development Pathway
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {timeline.map((t, i) => (
                <div
                  key={i}
                  className="relative p-4 rounded-lg border"
                  style={{ background: "hsl(var(--light-card))", borderColor: "hsl(var(--light-border))" }}
                >
                  <p className="font-mono font-bold text-primary mb-2">{t.period}</p>
                  <h4 className="text-lg font-display font-semibold mb-1" style={{ color: "hsl(var(--text-dark))" }}>
                    {t.title}
                  </h4>
                  <p className="font-body" style={{ color: "hsl(var(--light-muted-foreground))" }}>
                    {t.desc}
                  </p>
                </div>
              ))}
            </div>
            <p className="italic font-body mt-4" style={{ color: "hsl(var(--light-muted-foreground) / 0.6)" }}>
              Timeline represents management targets based on current plans. Actual timing subject to permitting,
              regulatory approvals, and other factors outside Adyton's control.
            </p>
          </div>
        </section>

        {/* CTAs */}
        <section
          className="py-12"
          style={{ background: "hsl(var(--off-white))", borderTop: "1px solid hsl(var(--light-border))" }}
        >
          <div className="container max-w-4xl flex flex-wrap gap-3">
            <Button variant="gold" size="lg" asChild>
              <a href="/reports/NI43-101_Fergusson_Oct2021.pdf" target="_blank" rel="noopener noreferrer">
                NI 43-101 Technical Report — Fergusson Island (Oct 2021) <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="gold" size="lg" asChild>
              <a href="/reports/NI43-101_Wapolu_Jan2026.pdf" target="_blank" rel="noopener noreferrer">
                NI 43-101 Technical Report — Wapolu (Jan 2026) <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="gold-outline" size="lg" asChild>
              <a href="/news#press-release-section">
                View All Fergusson Releases <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FergussonIsland;
