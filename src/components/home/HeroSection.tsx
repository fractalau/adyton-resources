import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import hero1 from "@/assets/hero-01.jpg";
import hero2 from "@/assets/hero-02.jpg";
import hero3 from "@/assets/hero-03.jpg";

const HERO_IMAGES = [hero1, hero2, hero3];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-[520px] md:min-h-[620px] flex items-center overflow-hidden">
      {HERO_IMAGES.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-[-5%] bg-cover bg-center lg:bg-[length:110%_auto] xl:bg-[length:100%_auto] bg-[center_40%] animate-hero-drift transition-opacity duration-[2000ms] ease-in-out ${
            i === index ? "opacity-90" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${src})` }}
          aria-hidden={i !== index}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/10" />
      <div className="container relative z-10 py-20 md:py-28">
        <div className="max-w-4xl">
          <p className="uppercase tracking-[0.3em] text-primary font-semibold mb-4 font-body">PNG · GOLD + COPPER</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-[1.1] mb-6">
            Built for Discovery.
            <br />
            Structured for Cash Flow.
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-3 max-w-xl font-body">
            High-quality gold-copper assets in Papua New Guinea.{" "}
            <span className="font-mono font-semibold text-primary">2.4 Moz Au</span> across two island-based projects on
            the Pacific Ring of Fire.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <Button variant="gold" size="lg" asChild>
              <a href="/Adyton-Investor-Deck.pdf" target="_blank" rel="noopener noreferrer">
                View Investor Deck
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="gold" size="lg" asChild>
              <Link to="/projects/feni">Explore Our Feni Island Project</Link>
            </Button>
            <Button variant="gold" size="lg" asChild>
              <Link to="/projects/ferguson">Explore Our Ferguson Island Project</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
