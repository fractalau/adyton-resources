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
  { label: "Market Cap", value: "$12.4M", source: "As shown on TSXV" },
  { label: "Cash Position", value: "$3.2M", source: "Refer latest MD&A" },
  { label: "Enterprise Value", value: "$9.8M", source: "Indicative, calculated" },
  { label: "EV per Au Eq oz", value: "$8.20", source: "Indicative, based on disclosed resources" },
  { label: "Resource (Au Eq)", value: "1.2 Moz", source: "Refer NI 43-101" },
  { label: "Projects", value: "4", source: "PNG portfolio" },
];

const projects = [
  { name: "Feni Gold-Copper", slug: "feni", stage: "Growth", highlights: ["Portfolio growth opportunity with exploration upside", "Key project updates consolidated in News and Investor Hub"], location: "New Ireland Province, PNG" },
  { name: "Fergusson Island", slug: "fergusson", stage: "Exploration", highlights: ["Flagship exploration focus within the PNG portfolio", "Results, maps, and disclosures available in Investor Hub"], location: "Milne Bay Province, PNG" },
  { name: "Wapolu", slug: "wapolu", stage: "Near-Term", highlights: ["Near-term pathway focus within the portfolio strategy", "Milestones and updates tracked via News and releases"], location: "Milne Bay Province, PNG" },
  { name: "Yandera", slug: "yandera", stage: "Advanced", highlights: ["Large-scale copper-gold system within the broader portfolio", "Supporting technical materials available in Investor Hub"], location: "Madang Province, PNG" },
];

const news = [
  { title: "Adyton Completes Phase 2 Drilling at Fergusson Island", date: "January 15, 2025", excerpt: "Results from 12 diamond drill holes confirm gold mineralization across multiple targets, with full details available through company disclosures.", slug: "fergusson-phase-2", tags: ["Fergusson", "Drilling"], sourceUrl: "#" },
  { title: "Feni Project Update Released", date: "December 8, 2024", excerpt: "Updated project summary and work program details released through company disclosures.", slug: "feni-restart-study", tags: ["Feni", "Corporate"], sourceUrl: "#" },
  { title: "Q3 2024 Financial Results Released", date: "November 22, 2024", excerpt: "Company reports cash position and provides update on exploration activities across the PNG portfolio.", slug: "q3-2024-results", tags: ["Corporate", "Financials"], sourceUrl: "#" },
];

const pngFacts = [
  "Proven endowment across major gold and copper belts.",
  "Established operating environment with existing mining activity.",
  "Clear focus on responsible development and stakeholder engagement.",
  "Large areas remain under-explored relative to geological potential.",
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
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4 max-w-2xl">
              A portfolio anchored by a near-term restart pathway and scalable exploration upside, supported by compliant technical disclosure and regular market updates.
            </p>
            <p className="text-sm text-muted-foreground/70 mb-10 max-w-2xl">
              Explore projects, access current investor materials, and track milestones in one place.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
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
            <div className="flex flex-wrap gap-2">
              <span className="text-[11px] uppercase tracking-wider text-muted-foreground bg-card border border-border rounded-full px-3 py-1">TSXV: ADY</span>
              <Link to="/investors" className="text-[11px] uppercase tracking-wider text-muted-foreground bg-card border border-border rounded-full px-3 py-1 hover:text-primary transition-colors">Investor Hub</Link>
              <Link to="/news" className="text-[11px] uppercase tracking-wider text-muted-foreground bg-card border border-border rounded-full px-3 py-1 hover:text-primary transition-colors">Latest News</Link>
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
              Two value drivers
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Clear pathways to value creation — near-term execution plus discovery growth.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <TwoTrackCard
              title="Restart pathway and disciplined delivery"
              subtitle="Track A: Near-term execution"
              highlights={[
                "Focus on advancing defined pathways toward near-term milestones",
                "Clear disclosure and progress updates for diligence and tracking",
                "Capital discipline and prioritisation across the portfolio",
              ]}
              linkTo="/projects/wapolu"
              linkLabel="View restart pathway project"
              variant="gold"
            />
            <TwoTrackCard
              title="Scalable exploration upside"
              subtitle="Track B: Discovery growth"
              highlights={[
                "Flagship exploration potential across multiple targets in PNG",
                "Systematic programs supported by compliant technical reporting",
                "Ongoing results flow designed to build the long-term growth case",
              ]}
              linkTo="/projects/fergusson"
              linkLabel="View flagship exploration projects"
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
                Project portfolio
              </h2>
              <p className="text-muted-foreground max-w-xl">PNG-focused gold and copper assets across multiple stages, from near-term pathways to longer-term growth opportunities.</p>
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
                Latest news
              </h2>
              <p className="text-muted-foreground">Recent releases and corporate updates, formatted for quick review with full source access.</p>
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
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 text-center">
              Why Papua New Guinea
            </h2>
            <p className="text-muted-foreground text-center mb-8">
              PNG is a long-established gold and copper jurisdiction with significant geological prospectivity and existing mining operations.
            </p>
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
