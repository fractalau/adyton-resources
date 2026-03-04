import { CheckCircle, ArrowRight, Download, TrendingUp, Search, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MetricCard from "@/components/MetricCard";
import TwoTrackCard from "@/components/TwoTrackCard";

const thesisPoints = [
  { icon: TrendingUp, title: "Near-Term Restart Catalyst", desc: "Feni gold-copper project targets a restart decision with existing infrastructure and clear economic pathway." },
  { icon: Search, title: "Discovery-Scale Exploration", desc: "Fergusson Island hosts a multi-kilometre gold system with high-grade intercepts and significant upside." },
  { icon: Shield, title: "Technical Credibility", desc: "NI 43-101 compliant reporting, experienced management team, and transparent disclosure practices." },
];

const WhyAdyton = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <section className="py-16 md:py-24">
      <div className="container">
        <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-4">Investment Thesis</p>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight mb-6 max-w-3xl">
          Why Adyton Resources
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mb-12">
          PNG gold and copper with two clear value drivers: near-term restart pathway plus scalable discovery upside, backed by technical credibility and execution momentum.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {thesisPoints.map((p) => (
            <div key={p.title} className="bg-card border border-border rounded-lg p-6">
              <p.icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-display font-semibold text-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <TwoTrackCard
            title="Near-Term Restart Pathway"
            subtitle="Track A — Execution"
            highlights={["Historical production infrastructure at Feni", "Updated economic study targeting 2025", "Clear de-risking milestones"]}
            linkTo="/projects/feni"
            linkLabel="View Feni Project"
            variant="gold"
          />
          <TwoTrackCard
            title="Flagship Exploration Upside"
            subtitle="Track B — Discovery"
            highlights={["Multi-km gold system at Fergusson Island", "Significant discovery runway", "NI 43-101 compliant reporting"]}
            linkTo="/projects/fergusson"
            linkLabel="View Fergusson Project"
            variant="blue"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <MetricCard label="Market Cap" value="$12.4M" />
          <MetricCard label="Cash" value="$3.2M" />
          <MetricCard label="EV/oz" value="$8.20" />
          <MetricCard label="Projects" value="4" />
        </div>

        <div className="text-center">
          <Button variant="gold" size="lg">
            <Download className="h-4 w-4" />
            Download Investor Deck
          </Button>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default WhyAdyton;
