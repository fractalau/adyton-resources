import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative min-h-[520px] md:min-h-[620px] flex items-center overflow-hidden">
    <div
      className="absolute inset-[-5%] bg-cover bg-center lg:bg-[length:110%_auto] xl:bg-[length:100%_auto] bg-[center_40%] animate-hero-drift opacity-90"
      style={{ backgroundImage: `url(${heroBg})` }}
    />
    <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/10" />
    <div className="container relative z-10 py-20 md:py-28">
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-4 font-body">
          PNG · GOLD + COPPER
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-[1.1] mb-6">
          Built for Discovery.
          <br />
          Structured for Growth.
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-3 max-w-xl font-body">
          High-quality gold-copper assets in Papua New Guinea.{" "}
          <span className="font-mono font-semibold text-primary">2.4 Moz Au</span>{" "}
          across two island-based projects on the Pacific Ring of Fire.
        </p>
        <div className="flex flex-wrap gap-3 mt-8">
          <Button variant="gold" size="lg" asChild>
            <a href="/Adyton-Investor-Deck.pdf" download>
              <Download className="h-4 w-4" />
              Download Investor Deck
            </a>
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
