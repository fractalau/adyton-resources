import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative min-h-[520px] md:min-h-[620px] flex items-center overflow-hidden">
    <div
      className="absolute inset-[-5%] bg-cover bg-center animate-hero-drift opacity-30"
      style={{ backgroundImage: `url(${heroBg})` }}
    />
    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
    <div className="container relative z-10 py-20 md:py-28">
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-4 font-body">
          PNG · GOLD + COPPER
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-[1.1] mb-6">
          High-Quality Gold-Copper Assets
          <br />
          in Papua New Guinea
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-3 max-w-xl font-body">
          Positioned for near-term cash flow.{" "}
          <span className="font-mono font-semibold text-primary">2,401,000 oz Au</span>{" "}
          across two island-based projects on the Pacific Ring of Fire.
        </p>
        <div className="flex flex-wrap gap-3 mt-8">
          <Button variant="gold" size="lg">
            <Download className="h-4 w-4" />
            Download Investor Deck
          </Button>
          <Button variant="gold-outline" size="lg" asChild>
            <Link to="/projects/feni">Explore Our Projects</Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
