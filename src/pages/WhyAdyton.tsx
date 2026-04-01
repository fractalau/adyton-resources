import { TrendingUp, Search, Shield, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MetricCard from "@/components/MetricCard";
import TwoTrackCard from "@/components/TwoTrackCard";
import SEO from "@/components/SEO";
import { seoConfig } from "@/config/seo";

const thesisPoints = [
  { icon: TrendingUp, title: "Near-Term Execution", desc: "Focus on advancing defined pathways toward near-term milestones, with clear disclosure and progress updates." },
  { icon: Search, title: "Discovery Growth", desc: "Flagship exploration potential across multiple targets in PNG, supported by compliant technical reporting." },
  { icon: Shield, title: "Technical Credibility", desc: "NI 43-101 compliant reporting, experienced management team, and transparent disclosure practices." },
];

const WhyAdyton = () => (
  <div className="min-h-screen" style={{ background: "hsl(var(--light-bg))" }}>
    <Header />
    <section className="py-16 md:py-24">
      <div className="container">
        <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-4">Investment Thesis</p>
        <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6 max-w-3xl" style={{ color: "hsl(var(--light-foreground))" }}>
          Why Adyton Resources
        </h1>
        <p className="text-lg max-w-2xl mb-12" style={{ color: "hsl(var(--light-muted-foreground))" }}>
          A portfolio anchored by a near-term restart pathway and scalable exploration upside, supported by compliant technical disclosure and regular market updates.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {thesisPoints.map((p) => (
            <div key={p.title} className="rounded-lg p-6" style={{ background: "hsl(var(--light-card))", border: "1px solid hsl(var(--light-border))" }}>
              <p.icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-display font-semibold mb-2" style={{ color: "hsl(var(--light-foreground))" }}>{p.title}</h3>
              <p className="text-sm" style={{ color: "hsl(var(--light-muted-foreground))" }}>{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
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
            lightMode
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
            lightMode
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <MetricCard label="Market Cap" value="$12.4M" source="As shown on TSXV" />
          <MetricCard label="Cash Position" value="$3.2M" source="Refer latest MD&A" />
          <MetricCard label="EV per Au Eq oz" value="$8.20" source="Indicative, based on disclosed resources" />
          <MetricCard label="Projects" value="4" source="PNG portfolio" />
        </div>

        <div className="text-center">
          <Button variant="gold" size="lg" asChild>
            <a href="/Adyton-Investor-Deck.pdf" download>
              <Download className="h-4 w-4" />
              Download Investor Deck
            </a>
          </Button>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default WhyAdyton;
