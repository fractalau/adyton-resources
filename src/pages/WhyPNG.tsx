import { CheckCircle, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import projectHeaderBg from "@/assets/project-header-bg.jpg";

const keyStats = [
  { value: "100+ Moz", label: "Historical gold production" },
  { value: "5+", label: "Major miners operating" },
  { value: "Tidewater", label: "Island-based logistics" },
  { value: "Under-explored", label: "vs. peer jurisdictions" },
];

const facts = [
  { heading: "Geological Prospectivity", points: ["Papua New Guinea sits on the Pacific Ring of Fire, hosting world-class gold and copper deposits.", "The PNG mineral province has produced over 100 million ounces of gold historically.", "Multiple deposit types present: porphyry, epithermal, and orogenic gold systems."] },
  { heading: "Established Mining Jurisdiction", points: ["Major miners including Newmont, Barrick, and Harmony Gold operate successfully in PNG.", "Modernized Mining Act provides clear framework for exploration and development.", "Government of PNG actively supports responsible resource development as a pillar of national economic strategy."] },
  { heading: "Infrastructure & Access", points: ["Significant government investment in roads, ports, and power infrastructure.", "Multiple international airports and deep-water port facilities.", "Growing telecommunications and logistics networks support exploration operations."] },
  { heading: "Under-Explored Opportunity", points: ["Despite proven geological prospectivity, PNG remains significantly under-explored compared to peer jurisdictions.", "Modern exploration techniques have not been systematically applied across most of the country.", "Discovery opportunity remains substantial for well-funded, technically capable operators."] },
];

const peerComparison = [
  { jurisdiction: "Australia", goldProd: "~10 Moz/yr", explorationSpend: "High", comment: "Mature, well-explored" },
  { jurisdiction: "Canada", goldProd: "~6 Moz/yr", explorationSpend: "High", comment: "Mature, well-explored" },
  { jurisdiction: "Papua New Guinea", goldProd: "~2 Moz/yr", explorationSpend: "Low", comment: "Under-explored, high prospectivity" },
  { jurisdiction: "Philippines", goldProd: "~1 Moz/yr", explorationSpend: "Moderate", comment: "Complex permitting environment" },
];

const WhyPNG = () => (
  <div className="min-h-screen bg-background">
    <Header />

    {/* Hero */}
    <section className="relative bg-background py-16 md:py-20 border-b border-border overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: `url(${projectHeaderBg})` }} />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
      <div className="container relative z-10">
        <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-3 font-body">JURISDICTION</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4">
          Why Papua New Guinea?
        </h1>
        <p className="text-lg text-foreground/70 max-w-2xl font-body">
          A world-class mineral province with proven geology, established mining operations, and substantial discovery runway.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {keyStats.map((s) => (
            <div key={s.label} className="text-center p-4 rounded-lg border border-border bg-card">
              <p className="text-xl md:text-2xl font-mono font-bold text-primary">{s.value}</p>
              <p className="text-xs text-foreground/50 mt-1 font-body">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Map placeholder */}
    <section className="py-14 md:py-18" style={{ background: "hsl(var(--off-white))" }}>
      <div className="container">
        <div className="rounded-lg aspect-[21/9] flex items-center justify-center" style={{ background: "hsl(var(--light-card))", border: "1px solid hsl(var(--light-border))" }}>
          <div className="text-center">
            <MapPin className="h-12 w-12 text-primary/30 mx-auto mb-2" />
            <p className="text-xs font-body" style={{ color: "hsl(var(--light-muted-foreground))" }}>Interactive map — placeholder</p>
          </div>
        </div>
      </div>
    </section>

    {/* Facts Grid */}
    <section className="py-14 md:py-18" style={{ background: "hsl(var(--off-white))" }}>
      <div className="container">
        <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-3 font-body">THE OPPORTUNITY</p>
        <h2 className="text-2xl md:text-3xl font-display font-bold mb-10" style={{ color: "hsl(var(--text-dark))" }}>
          Why PNG Stands Out
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {facts.map((f) => (
            <div key={f.heading} className="rounded-lg p-6" style={{ background: "hsl(var(--light-card))", border: "1px solid hsl(var(--light-border))" }}>
              <h3 className="font-display font-semibold mb-4" style={{ color: "hsl(var(--text-dark))" }}>{f.heading}</h3>
              <ul className="space-y-3">
                {f.points.map((p, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm leading-relaxed" style={{ color: "hsl(var(--light-muted-foreground))" }}>
                    <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Peer Comparison */}
    <section className="py-14 md:py-18 bg-background">
      <div className="container max-w-3xl">
        <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-3 font-body">PEER COMPARISON</p>
        <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8">
          How PNG Compares
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm font-body">
            <thead className="bg-card">
              <tr>
                <th className="text-left px-4 py-3 text-foreground font-semibold">Jurisdiction</th>
                <th className="text-right px-4 py-3 text-foreground font-semibold">Gold Prod.</th>
                <th className="text-right px-4 py-3 text-foreground font-semibold">Exploration $</th>
                <th className="text-left px-4 py-3 text-foreground font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {peerComparison.map((r, i) => (
                <tr key={i} className="border-t border-border">
                  <td className={`px-4 py-2.5 ${r.jurisdiction === "Papua New Guinea" ? "text-primary font-semibold" : "text-foreground/70"}`}>
                    {r.jurisdiction}
                  </td>
                  <td className="text-right px-4 py-2.5 font-mono text-foreground/60">{r.goldProd}</td>
                  <td className="text-right px-4 py-2.5 font-mono text-foreground/60">{r.explorationSpend}</td>
                  <td className={`px-4 py-2.5 text-xs ${r.jurisdiction === "Papua New Guinea" ? "text-primary font-semibold" : "text-foreground/50"}`}>
                    {r.comment}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>

    {/* Stakeholder Principles */}
    <section className="py-14 md:py-18" style={{ background: "hsl(var(--off-white))" }}>
      <div className="container max-w-3xl">
        <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-3 font-body">COMMUNITY & STAKEHOLDERS</p>
        <h2 className="text-2xl md:text-3xl font-display font-bold mb-6" style={{ color: "hsl(var(--text-dark))" }}>
          Stakeholder & Operating Principles
        </h2>
        <div className="text-sm leading-relaxed space-y-4 font-body" style={{ color: "hsl(var(--light-muted-foreground))" }}>
          <p>Adyton is committed to responsible exploration and development practices that respect local communities, protect the environment, and deliver lasting benefits to all stakeholders.</p>
          <p>The Company maintains active engagement with traditional landowners at both Feni Island and Fergusson Island. Landowner agreements are in place and community consultations are ongoing as projects advance.</p>
          <p>Detailed sustainability policies and environmental management frameworks will be published as the Company progresses toward development milestones.</p>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-background py-10 border-t border-border">
      <div className="container max-w-4xl flex flex-wrap justify-center gap-3">
        <Button variant="gold-outline" size="lg" asChild>
          <Link to="/projects/feni">Explore Feni Island <ArrowRight className="h-4 w-4" /></Link>
        </Button>
        <Button variant="gold-outline" size="lg" asChild>
          <Link to="/projects/fergusson">Explore Fergusson Island <ArrowRight className="h-4 w-4" /></Link>
        </Button>
        <Button variant="gold-outline" size="lg" asChild>
          <Link to="/about">About the Team <ArrowRight className="h-4 w-4" /></Link>
        </Button>
      </div>
    </section>

    <Footer />
  </div>
);

export default WhyPNG;
