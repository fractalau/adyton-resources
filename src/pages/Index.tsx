import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Download, ArrowRight, CheckCircle } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import TickerStrip from "@/components/TickerStrip";
import MetricCard from "@/components/MetricCard";
import TwoTrackCard from "@/components/TwoTrackCard";
import ProjectTile from "@/components/ProjectTile";
import NewsCard from "@/components/NewsCard";
import BluePanelCallout from "@/components/BluePanelCallout";

const metrics = [
  { label: "Market Cap", value: "$12.4M", source: "Source: TSXV" },
  { label: "Cash Position", value: "$3.2M", source: "Source: Q3 2024 MD&A" },
  { label: "Enterprise Value", value: "$9.8M", source: "Source: Calculated" },
  { label: "EV/oz Au Eq", value: "$8.20", source: "Source: Placeholder" },
  { label: "Resource (Au Eq)", value: "1.2 Moz", source: "Source: NI 43-101" },
  { label: "Projects", value: "4", source: "Source: Corporate" },
];

const projects = [
  { name: "Feni Gold-Copper", slug: "feni", stage: "Restart Pathway", highlights: ["Near-term restart candidate", "Historical production base"], location: "New Ireland Province, PNG" },
  { name: "Fergusson Island", slug: "fergusson", stage: "Exploration", highlights: ["Flagship discovery target", "Multi-km alteration system"], location: "Milne Bay Province, PNG" },
  { name: "Wapolu", slug: "wapolu", stage: "Exploration", highlights: ["Gold discovery potential", "Extensive tenement package"], location: "Milne Bay Province, PNG" },
  { name: "Yandera", slug: "yandera", stage: "Advanced", highlights: ["Large porphyry copper-gold", "Significant resource base"], location: "Madang Province, PNG" },
];

const news = [
  { title: "Adyton Completes Phase 2 Drilling at Fergusson Island", date: "January 15, 2025", excerpt: "Results from 12 diamond drill holes confirm high-grade gold mineralization across a 2.4 km strike length.", slug: "fergusson-phase-2", tags: ["Fergusson", "Drilling"], sourceUrl: "#" },
  { title: "Feni Restart Study Advances to Final Stage", date: "December 8, 2024", excerpt: "Updated economic assessment demonstrates robust project economics at current gold prices.", slug: "feni-restart-study", tags: ["Feni", "Corporate"], sourceUrl: "#" },
  { title: "Q3 2024 Financial Results Released", date: "November 22, 2024", excerpt: "Company reports strong cash position and provides update on exploration activities across PNG portfolio.", slug: "q3-2024-results", tags: ["Corporate", "Financials"], sourceUrl: "#" },
];

const pngFacts = [
  "World-class gold and copper deposits with proven geological prospectivity.",
  "Major operators present: Newmont, Barrick, Harmony Gold.",
  "Government supportive of responsible resource development.",
  "Significantly under-explored relative to geological potential.",
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <TickerStrip />

      {/* Hero */}
      <section className="py-16 md:py-24 topo-texture overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.3em] text-primary/70 font-semibold mb-5">
              TSXV: ADY
            </p>
            <h1 className="text-3xl md:text-[44px] lg:text-[52px] font-display font-bold text-foreground leading-[1.08] mb-5">
              PNG Gold & Copper.
              <br />
              Two value drivers.
            </h1>
            <p className="text-[15px] md:text-base text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Near-term restart pathway plus scalable discovery upside, backed by compliant technical reporting.
            </p>
            <div className="flex flex-wrap items-center gap-2.5">
              <Button variant="gold" size="default">
                <Download className="h-3.5 w-3.5" />
                Download Deck
              </Button>
              <Button variant="gold-outline" size="default" asChild>
                <Link to="/projects">View Projects</Link>
              </Button>
              <Button variant="ghost" size="default" asChild>
                <Link to="/contact" className="text-muted-foreground">Contact IR</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-8 border-y border-border/60">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {metrics.map((m) => (
              <MetricCard key={m.label} {...m} />
            ))}
          </div>
        </div>
      </section>

      {/* Two-Track Value Story */}
      <section className="py-14 md:py-20">
        <div className="container">
          <div className="mb-10">
            <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground/60 font-semibold mb-2">Investment Thesis</p>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
              Two-Track Value Story
            </h2>
            <p className="text-[13px] text-muted-foreground max-w-md">
              Dual catalysts: near-term execution and long-term discovery.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <TwoTrackCard
              title="Near-Term Restart Pathway"
              subtitle="Track A — Execution"
              highlights={[
                "Feni gold-copper project with historical production infrastructure",
                "Updated economic study targeting restart decision in 2025",
                "Clear de-risking milestones with defined timeline to production",
              ]}
              linkTo="/projects/feni"
              linkLabel="View Feni Project"
              variant="gold"
            />
            <TwoTrackCard
              title="Flagship Exploration Upside"
              subtitle="Track B — Discovery"
              highlights={[
                "Fergusson Island — multi-kilometre gold system with high-grade intercepts",
                "Significant discovery runway across under-explored tenement portfolio",
                "Systematic exploration approach with NI 43-101 compliant reporting",
              ]}
              linkTo="/projects/fergusson"
              linkLabel="View Fergusson Project"
              variant="blue"
            />
          </div>
        </div>
      </section>

      {/* Projects Overview */}
      <section className="py-14 md:py-20 dot-grid overflow-hidden">
        <div className="container relative z-10">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground/60 font-semibold mb-2">Portfolio</p>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                Project Portfolio
              </h2>
            </div>
            <Link to="/projects" className="hidden md:inline-flex items-center gap-1 text-[13px] text-muted-foreground hover:text-foreground font-medium transition-colors">
              View all <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {projects.map((p) => (
              <ProjectTile key={p.slug} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-14 md:py-20">
        <div className="container">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground/60 font-semibold mb-2">Updates</p>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                Latest News
              </h2>
            </div>
            <Link to="/news" className="hidden md:inline-flex items-center gap-1 text-[13px] text-muted-foreground hover:text-foreground font-medium transition-colors">
              All news <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {news.map((n) => (
              <NewsCard key={n.slug} {...n} />
            ))}
          </div>
        </div>
      </section>

      {/* Investor Hub Callout */}
      <BluePanelCallout />

      {/* Why PNG Preview */}
      <section className="py-14 md:py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground/60 font-semibold mb-2 text-center">Jurisdiction</p>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6 text-center">
              Why Papua New Guinea?
            </h2>
            <ul className="space-y-3 mb-8">
              {pngFacts.map((f, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle className="h-4 w-4 text-primary/60 shrink-0 mt-0.5" />
                  <span className="text-[13px] text-muted-foreground leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>
            <div className="text-center">
              <Link to="/why-png" className="inline-flex items-center gap-1 text-[13px] text-primary/80 hover:text-primary font-semibold transition-colors">
                Learn more about PNG <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
