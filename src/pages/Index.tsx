import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Download, ArrowRight, MapPin, CheckCircle } from "lucide-react";
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
  "Papua New Guinea hosts world-class gold and copper deposits with proven geological prospectivity.",
  "Established mining jurisdiction with major operators including Newmont, Barrick, and Harmony Gold.",
  "Government supportive of responsible resource development with modernized mining legislation.",
  "Significant infrastructure investment underway, improving access and logistics for exploration.",
  "Under-explored relative to geological potential — discovery opportunity remains substantial.",
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <TickerStrip />

      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-4">
              TSXV: ADY
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-[1.1] mb-6">
              PNG Gold and Copper.
              <br />
              <span className="text-primary">Two value drivers.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl">
              Restart pathway plus scalable discovery upside, backed by compliant technical reporting.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="gold" size="lg">
                <Download className="h-4 w-4" />
                Download Deck
              </Button>
              <Button variant="gold-outline" size="lg" asChild>
                <Link to="/projects">View Projects</Link>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <Link to="/contact">Contact IR</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-12 border-y border-border">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {metrics.map((m) => (
              <MetricCard key={m.label} {...m} />
            ))}
          </div>
        </div>
      </section>

      {/* Two-Track Value Story */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
              Two-Track Value Story
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Dual catalysts for value creation: near-term execution and long-term discovery.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
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
      <section className="py-16 md:py-20 bg-card/50">
        <div className="container">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
                Project Portfolio
              </h2>
              <p className="text-muted-foreground">PNG-focused gold and copper assets.</p>
            </div>
            <Button variant="gold-outline" size="sm" asChild className="hidden md:inline-flex">
              <Link to="/projects">
                View all
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {projects.map((p) => (
              <ProjectTile key={p.slug} {...p} />
            ))}
          </div>
          <div className="mt-6 md:hidden text-center">
            <Button variant="gold-outline" size="sm" asChild>
              <Link to="/projects">View all projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
                Latest News
              </h2>
              <p className="text-muted-foreground">Recent releases and corporate updates.</p>
            </div>
            <Button variant="gold-outline" size="sm" asChild className="hidden md:inline-flex">
              <Link to="/news">
                All news
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {news.map((n) => (
              <NewsCard key={n.slug} {...n} />
            ))}
          </div>
        </div>
      </section>

      {/* Investor Hub Callout */}
      <BluePanelCallout />

      {/* Why PNG Preview */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8 text-center">
              Why Papua New Guinea?
            </h2>
            <ul className="space-y-4 mb-10">
              {pngFacts.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm">{f}</span>
                </li>
              ))}
            </ul>
            <div className="text-center">
              <Button variant="gold-outline" asChild>
                <Link to="/why-png">
                  Learn more about PNG
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
