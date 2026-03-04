import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Download, ArrowRight, CheckCircle } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import TickerStrip from "@/components/TickerStrip";
import MetricCard from "@/components/MetricCard";
import KeyMessages from "@/components/KeyMessages";
import TwoTrackCard from "@/components/TwoTrackCard";
import ProjectTile from "@/components/ProjectTile";
import NewsCard from "@/components/NewsCard";
import BluePanelCallout from "@/components/BluePanelCallout";
import heroBg from "@/assets/hero-bg.jpg";

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
  { name: "Fergusson Island", slug: "fergusson", stage: "Exploration", highlights: ["Growth and upside across multiple targets", "Results, maps, and disclosures available in Investor Hub"], location: "Milne Bay Province, PNG" },
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

const lightBg = { background: "hsl(var(--light-bg))" };
const lightText = { color: "hsl(var(--light-foreground))" };
const lightMuted = { color: "hsl(var(--light-muted-foreground))" };
const lightBorder = { borderColor: "hsl(var(--light-border))" };

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <TickerStrip />

      {/* Hero */}
      <section className="relative min-h-[520px] md:min-h-[600px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="container relative z-10 py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-4">
              TSXV: ADY
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-[1.1] mb-6">
              PNG Gold and Copper.
              <br />
              <span className="text-primary">Two value drivers.</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-3 max-w-xl">
              High-quality gold and copper assets in Papua New Guinea, anchored by a near-term pathway at Wapolu and broader growth and upside across Fergusson Island.
            </p>
            <p className="text-sm text-foreground/50 mb-8 max-w-xl">
              Find the investment thesis, key documents, and project updates in one place.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <Button variant="gold" size="lg">
                <Download className="h-4 w-4" />
                Download Deck
              </Button>
              <Button variant="gold-outline" size="lg" asChild>
                <Link to="/projects">View Projects</Link>
              </Button>
              <Button variant="ghost" size="lg" className="text-foreground/70 hover:text-foreground" asChild>
                <Link to="/contact">Contact IR</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Messages icon strip */}
      <KeyMessages />

      {/* Key Metrics */}
      <section className="py-8 border-b" style={{ ...lightBg, ...lightBorder }}>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {metrics.map((m) => (
              <MetricCard key={m.label} {...m} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 md:py-20 border-b" style={{ ...lightBg, ...lightBorder }}>
        <div className="container">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl md:text-3xl font-display font-bold" style={lightText}>
              Latest News
            </h2>
            <Link to="/news" className="text-sm text-primary font-semibold hover:text-primary/80 flex items-center gap-1">
              See all <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <p className="text-sm mb-8 max-w-3xl" style={lightMuted}>
            Recent releases and corporate updates. Summaries for quick scanning, with full release access and the original source linked.
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {news.map((n) => (
              <NewsCard key={n.slug} {...n} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 md:py-20 border-b" style={{ ...lightBg, ...lightBorder }}>
        <div className="container">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl md:text-3xl font-display font-bold" style={lightText}>
              Projects
            </h2>
            <Link to="/projects" className="text-sm text-primary font-semibold hover:text-primary/80 flex items-center gap-1">
              View all <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <p className="text-sm mb-8 max-w-2xl" style={lightMuted}>
            PNG gold and copper assets across multiple stages, anchored by Wapolu and Fergusson. Start with the two value drivers, then explore the broader portfolio.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {projects.map((p) => (
              <ProjectTile key={p.slug} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* Two value drivers */}
      <section className="py-16 md:py-20" style={lightBg}>
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-3" style={lightText}>
              Two value drivers
            </h2>
            <p className="max-w-xl mx-auto" style={lightMuted}>
              A focused PNG portfolio with a near-term pathway at Wapolu and broader growth and upside across Fergusson Island.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <TwoTrackCard
              title="Wapolu"
              subtitle="Track A: Near-term pathway"
              highlights={[
                "Near-term pathway focus within the portfolio strategy",
                "Defined milestones tracked through frequent company updates",
                "Key documents and disclosures available in the Investor Hub",
              ]}
              linkTo="/projects/wapolu"
              linkLabel="Explore Wapolu"
              variant="gold"
              lightMode
            />
            <TwoTrackCard
              title="Fergusson Island"
              subtitle="Track B: Growth and upside"
              highlights={[
                "Growth and upside across multiple targets",
                "Systematic exploration approach with regular disclosure",
                "Maps, results, and technical reporting organised for diligence",
              ]}
              linkTo="/projects/fergusson"
              linkLabel="Explore Fergusson"
              variant="blue"
              lightMode
            />
          </div>
        </div>
      </section>

      {/* Investor Hub Callout — stays deep blue */}
      <BluePanelCallout />

      {/* Why PNG */}
      <section className="py-16 md:py-20" style={lightBg}>
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center" style={lightText}>
              Why Papua New Guinea
            </h2>
            <p className="text-center mb-8" style={lightMuted}>
              PNG is a long-established gold and copper jurisdiction with significant geological prospectivity and existing mining operations.
            </p>
            <ul className="space-y-4 mb-10">
              {pngFacts.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm" style={lightMuted}>{f}</span>
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
