import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { seoConfig } from "@/config/seo";
import projectHeaderBg from "@/assets/project-header-bg.jpg";

const stats = [
  { value: "1.46 Moz Au", label: "Inferred (Kabang)" },
  { value: "100%", label: "Adyton-owned" },
  { value: "Whole-of-island", label: "Land tenure" },
  { value: "New Ireland", label: "Province, PNG" },
];

const similarityData = [
  { header: "", lihir: "LIHIR", feni: "FENI ISLAND" },
  { header: "System", lihir: "Alkalic epithermal-porphyry", feni: "Alkalic epithermal-porphyry" },
  { header: "Age", lihir: "~0.5 Ma", feni: "~0.5 Ma (ca.)" },
  { header: "Structure", lihir: "NW-SE structural corridor", feni: "NW-SE structural corridor" },
  { header: "Setting", lihir: "Island-based", feni: "Island-based" },
  { header: "Operator", lihir: "Newmont (major operator)", feni: "Adyton (ASX/TSXV explorer)" },
];

const drillResults = [
  { hole: "FDD002", from: 45, interval: 142.2, au: 1.18, cu: 0.05, aueq: 1.17, gxm: 166.4 },
  { hole: "  incl.", from: 45, interval: 93, au: 1.58, cu: 0.05, aueq: 1.55, gxm: 144.2 },
  { hole: "FDD001", from: 95, interval: 76, au: 1.43, cu: 0.03, aueq: 1.38, gxm: 104.9 },
  { hole: "FDD004", from: 62, interval: 229, au: 0.71, cu: 0.08, aueq: 0.78, gxm: 178.6 },
  { hole: "  incl.", from: 62, interval: 115, au: 0.92, cu: 0.07, aueq: 0.96, gxm: 110.4 },
  { hole: "FDD003", from: 70, interval: 81, au: 1.12, cu: 0.21, aueq: 1.36, gxm: 110.2 },
  { hole: "ADK001", from: 1, interval: 145.8, au: 0.84, cu: 0.08, aueq: 0.91, gxm: 132.7 },
  { hole: "FDD017", from: 151, interval: 53, au: 1.29, cu: null, aueq: null, gxm: 68.4 },
];

const cuIntercepts = [
  { hole: "ADK004", from: 70.7, to: 156.1, interval: 85.4, au: 0.94, cu: 0.57, aueq: 1.47, uplift: "+56.5%" },
  { hole: "KAD001", from: 3.5, to: 109.7, interval: 106.2, au: 0.84, cu: 0.29, aueq: 1.11, uplift: "+32.1%" },
  { hole: "MAD007", from: 74.0, to: 278.0, interval: 204.0, au: 0.36, cu: 0.13, aueq: 0.48, uplift: "+34.3%" },
  { hole: "AMD002", from: 0.0, to: null, interval: 250.0, au: 0.77, cu: 0.17, aueq: 0.93, uplift: "+21.0%" },
];

const FeniIsland = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title="Feni Island Gold-Copper Project"
      description="Feni Island hosts 1.46 Moz Au inferred at Kabang on the +120 Moz Lihir gold corridor. 100% Adyton-owned with significant copper upside. Active drilling program."
      canonical={`${seoConfig.siteUrl}/projects/feni`}
    />
    <Header />
    <main>

    {/* Hero */}
    <section className="relative bg-background py-16 md:py-20 border-b border-border overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: `url(${projectHeaderBg})` }} />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
      <div className="container relative z-10">
        <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-3 font-body">FLAGSHIP GROWTH ASSET</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
          Feni Island<br />Gold-Copper Project
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center p-4 rounded-lg border border-border bg-card">
              <p className="text-xl md:text-2xl font-mono font-bold text-primary">{s.value}</p>
              <p className="text-xs text-foreground/50 mt-1 font-body">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Geological Setting */}
    <section className="py-16 md:py-20" style={{ background: "hsl(var(--off-white))" }}>
      <div className="container max-w-4xl">
        <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-3 font-body">LIHIR ISLAND DISCOVERY TREND</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6" style={{ color: "hsl(var(--text-dark))" }}>
          Located on the World's Most Prolific Gold Discovery Corridor
        </h2>
        <div className="text-sm leading-relaxed space-y-4 mb-8 font-body" style={{ color: "hsl(var(--light-muted-foreground))" }}>
          <p>Feni Island sits within the +120 Moz Lihir Island Chain — the same gold-prolific geological arc as Lihir (Newmont), Simberi (St Barbara), and Panguna (formerly Rio Tinto).</p>
          <p>The Feni project shares key geological characteristics with the Lihir deposit: similar host rock geology, comparable age (~0.5 Ma), and analogous mineralisation styles. The system is hosted within a large alkalic-type epithermal-porphyry setting, supporting both high-grade gold mineralisation and significant copper potential.</p>
          <p>Whole-of-island tenure enables systematic testing of multiple targets within the same mineral system, beyond the defined Kabang resource area.</p>
        </div>

        {/* Similarity table */}
        <div className="overflow-x-auto rounded-lg border" style={{ borderColor: "hsl(var(--light-border))" }}>
          <table className="w-full text-sm font-body">
            <thead>
              <tr style={{ background: "hsl(var(--light-card))" }}>
                <th className="text-left px-4 py-3 font-semibold" style={{ color: "hsl(var(--text-dark))" }}></th>
                <th className="text-left px-4 py-3 font-semibold" style={{ color: "hsl(var(--text-dark))" }}>Lihir</th>
                <th className="text-left px-4 py-3 font-semibold text-primary">Feni Island</th>
              </tr>
            </thead>
            <tbody>
              {similarityData.slice(1).map((row, i) => (
                <tr key={i} className="border-t" style={{ borderColor: "hsl(var(--light-border))", background: i % 2 ? "hsl(var(--light-card))" : "transparent" }}>
                  <td className="px-4 py-2 font-medium" style={{ color: "hsl(var(--text-dark))" }}>{row.header}</td>
                  <td className="px-4 py-2 font-mono text-xs" style={{ color: "hsl(var(--light-muted-foreground))" }}>{row.lihir}</td>
                  <td className="px-4 py-2 font-mono text-xs text-primary">{row.feni}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>

    {/* Kabang MRE */}
    <section className="py-16 md:py-20 bg-background">
      <div className="container max-w-4xl">
        <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-3 font-body">NI 43-101 COMPLIANT RESOURCE</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
          1.46 Moz Au Foundational Resource
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border mb-6">
          <table className="w-full text-sm font-body">
            <thead className="bg-card">
              <tr>
                <th className="text-left px-4 py-3 text-foreground font-semibold">Classification</th>
                <th className="text-right px-4 py-3 text-foreground font-semibold">Tonnes (Mt)</th>
                <th className="text-right px-4 py-3 text-foreground font-semibold">Grade (g/t Au)</th>
                <th className="text-right px-4 py-3 text-foreground font-semibold">Contained Au (Moz)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-border">
                <td className="px-4 py-2 text-foreground/80">Inferred</td>
                <td className="px-4 py-2 text-right font-mono text-primary">—</td>
                <td className="px-4 py-2 text-right font-mono text-primary">—</td>
                <td className="px-4 py-2 text-right font-mono text-primary font-bold">1.46</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-[10px] italic text-foreground/40 mb-6 font-body">
          NI 43-101 Technical Report on the Feni Gold-Copper Property, New Ireland Province, Papua New Guinea, dated October 14, 2021. Qualified Person: Dr. Chris Bowden PhD, GCMEE, FAusIMM(CP), FSEG. Mineral resources are not mineral reserves and have not demonstrated economic viability.
        </p>
        <p className="text-sm text-foreground/70 font-body leading-relaxed">
          The Kabang deposit represents a foundational resource with significant upside potential. Mineralisation remains open along strike and at depth. Multiple priority targets across Feni Island — including Dome, Saddle, Caldera, and Danmagal — have not yet been systematically drill-tested, and over 7 km² of proximal and extensional geophysical targets have been identified.
        </p>
      </div>
    </section>

    {/* Drill Program */}
    <section className="py-16 md:py-20" style={{ background: "hsl(var(--off-white))" }}>
      <div className="container max-w-4xl">
        <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-3 font-body">ACTIVE EXPLORATION — ONGOING RESULTS</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6" style={{ color: "hsl(var(--text-dark))" }}>
          Confirming Scale and New Discoveries
        </h2>
        <p className="text-sm leading-relaxed mb-8 font-body" style={{ color: "hsl(var(--light-muted-foreground))" }}>
          Adyton has completed 10,663 m of its ongoing drill program at Feni Island, successfully confirming high-grade extensions to the north and documenting resource continuity across the Kabang system. New gold-copper mineralised zones have been identified in the February 2026 program.
        </p>

        <div className="overflow-x-auto rounded-lg border mb-4" style={{ borderColor: "hsl(var(--light-border))" }}>
          <table className="w-full text-xs font-mono">
            <thead>
              <tr style={{ background: "hsl(var(--light-card))" }}>
                <th className="text-left px-3 py-2" style={{ color: "hsl(var(--text-dark))" }}>Hole</th>
                <th className="text-right px-3 py-2" style={{ color: "hsl(var(--text-dark))" }}>From(m)</th>
                <th className="text-right px-3 py-2" style={{ color: "hsl(var(--text-dark))" }}>Interval(m)</th>
                <th className="text-right px-3 py-2" style={{ color: "hsl(var(--text-dark))" }}>Au(g/t)</th>
                <th className="text-right px-3 py-2" style={{ color: "hsl(var(--text-dark))" }}>Cu(%)</th>
                <th className="text-right px-3 py-2" style={{ color: "hsl(var(--text-dark))" }}>Au.eq(g/t)</th>
                <th className="text-right px-3 py-2" style={{ color: "hsl(var(--text-dark))" }}>gXm</th>
              </tr>
            </thead>
            <tbody>
              {drillResults.map((r, i) => (
                <tr key={i} className="border-t" style={{ borderColor: "hsl(var(--light-border))" }}>
                  <td className="px-3 py-1.5" style={{ color: r.hole.startsWith("  ") ? "hsl(var(--light-muted-foreground))" : "hsl(var(--text-dark))" }}>{r.hole}</td>
                  <td className="text-right px-3 py-1.5" style={{ color: "hsl(var(--light-muted-foreground))" }}>{r.from}</td>
                  <td className="text-right px-3 py-1.5" style={{ color: "hsl(var(--light-muted-foreground))" }}>{r.interval}</td>
                  <td className="text-right px-3 py-1.5 text-primary font-semibold">{r.au}</td>
                  <td className="text-right px-3 py-1.5" style={{ color: "hsl(var(--light-muted-foreground))" }}>{r.cu ?? "—"}</td>
                  <td className="text-right px-3 py-1.5" style={{ color: "hsl(var(--light-muted-foreground))" }}>{r.aueq ?? "—"}</td>
                  <td className="text-right px-3 py-1.5" style={{ color: "hsl(var(--light-muted-foreground))" }}>{r.gxm}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[10px] italic font-body" style={{ color: "hsl(var(--light-muted-foreground) / 0.6)" }}>
          All intercepts are downhole lengths. True widths not yet determined. Cu assays pending for some holes. See individual press releases on Newsfile for full details.
        </p>
      </div>
    </section>

    {/* Copper Upside */}
    <section className="py-16 md:py-20 bg-background">
      <div className="container max-w-4xl">
        <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-3 font-body">NOT YET IN THE MRE</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
          Copper Adds Material Upside to the Kabang Resource
        </h2>
        <div className="text-sm leading-relaxed space-y-4 mb-8 font-body text-foreground/70">
          <p>Copper mineralisation at Feni was confirmed through assaying of Adyton's ADK-series and FDD-series drill holes. Copper is not included in the current 1.46 Moz Kabang MRE — most historical holes through mineralised intervals were not assayed for copper.</p>
          <p>Where both Au and Cu have been assayed, Au-equivalent grades are up to approximately 56% higher than the gold-only figure. Adyton's geological model identifies the Danmagal porphyry system at depth as the likely source of copper mineralisation, linked to the Kabang epithermal system.</p>
        </div>

        <div className="overflow-x-auto rounded-lg border border-border mb-4">
          <table className="w-full text-xs font-mono">
            <thead className="bg-card">
              <tr>
                <th className="text-left px-3 py-2 text-foreground">Hole</th>
                <th className="text-right px-3 py-2 text-foreground">From(m)</th>
                <th className="text-right px-3 py-2 text-foreground">To(m)</th>
                <th className="text-right px-3 py-2 text-foreground">Int(m)</th>
                <th className="text-right px-3 py-2 text-foreground">Au(g/t)</th>
                <th className="text-right px-3 py-2 text-foreground">Cu(%)</th>
                <th className="text-right px-3 py-2 text-foreground">Au.eq</th>
                <th className="text-right px-3 py-2 text-primary">% uplift</th>
              </tr>
            </thead>
            <tbody>
              {cuIntercepts.map((r, i) => (
                <tr key={i} className="border-t border-border">
                  <td className="px-3 py-1.5 text-foreground/80">{r.hole}</td>
                  <td className="text-right px-3 py-1.5 text-foreground/60">{r.from}</td>
                  <td className="text-right px-3 py-1.5 text-foreground/60">{r.to ?? "EOH"}</td>
                  <td className="text-right px-3 py-1.5 text-foreground/60">{r.interval}</td>
                  <td className="text-right px-3 py-1.5 text-foreground/60">{r.au}</td>
                  <td className="text-right px-3 py-1.5 text-foreground/60">{r.cu}</td>
                  <td className="text-right px-3 py-1.5 text-foreground/60">{r.aueq}</td>
                  <td className="text-right px-3 py-1.5 text-primary font-bold">{r.uplift}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-[10px] italic font-body text-foreground/40">
          Copper upside is exploration potential only and is not included in any current NI 43-101 Mineral Resource Estimate.
        </p>
      </div>
    </section>

    {/* Global Ore + Dr Erin Johns */}
    <section className="py-16 md:py-20" style={{ background: "hsl(var(--off-white))" }}>
      <div className="container max-w-4xl space-y-10">
        <div>
          <h3 className="text-xl font-display font-bold mb-3" style={{ color: "hsl(var(--text-dark))" }}>Global Ore Discovery Collaboration</h3>
          <p className="text-sm leading-relaxed font-body" style={{ color: "hsl(var(--light-muted-foreground))" }}>
            In December 2025, Adyton engaged world-class geological consulting group Global Ore Discovery to provide expert oversight and targeting strategies for the Feni exploration program, leveraging their deep expertise in epithermal and porphyry systems. Adyton also appointed Dr. Erin Johns — whose PhD research focused specifically on the Lihir Gold Deposit — to its technical team to drive Feni project development.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-display font-bold mb-3" style={{ color: "hsl(var(--text-dark))" }}>Dr. Erin Johns — World-Class Lihir Deposit Expertise</h3>
          <p className="text-sm leading-relaxed font-body" style={{ color: "hsl(var(--light-muted-foreground))" }}>
            In December 2025, Adyton appointed Dr. Erin Johns to its technical team. Dr. Johns completed her PhD research specifically on the Lihir Gold Deposit — a neighbouring world-class alkalic-type epithermal gold deposit operated by Newmont. Her appointment directly strengthens Adyton's geological capability at Feni.
          </p>
        </div>
      </div>
    </section>

    {/* Logistics */}
    <section className="py-16 md:py-20" style={{ background: "hsl(var(--off-white))" }}>
      <div className="container max-w-4xl">
        <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-3 font-body">DIRECT SHIP ORE OPPORTUNITY</p>
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6" style={{ color: "hsl(var(--text-dark))" }}>
          5 km Pit-to-Ship Distance
        </h2>
        <p className="text-sm leading-relaxed font-body" style={{ color: "hsl(var(--light-muted-foreground))" }}>
          Feni Island's direct tidewater access means the pit-to-ship distance for any future operation is approximately 5 km — compared to 1,350 km for the Ok Tedi operation in PNG's highlands. Coastal access reduces logistical complexity, supports lower capital intensity, and simplifies permitting and construction compared with remote inland projects.
        </p>
      </div>
    </section>

    {/* CTAs */}
    <section className="py-12" style={{ background: "hsl(var(--off-white))", borderTop: "1px solid hsl(var(--light-border))" }}>
      <div className="container max-w-4xl flex flex-wrap gap-3">
        <Button variant="gold" size="lg">
          <Download className="h-4 w-4" />
          NI 43-101 Technical Report — Feni Island (Oct 2021)
        </Button>
        <Button variant="gold-outline" size="lg" asChild>
          <a href="https://www.newsfilecorp.com/company/7416" target="_blank" rel="noopener noreferrer">
            View All Feni Releases on Newsfile <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </section>

    </main>
    <Footer />
  </div>
);

export default FeniIsland;
