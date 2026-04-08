import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const bullets = [
  "Same arc as Lihir — +120 Moz Au discovery trend",
  "Coastal access — lower capex vs. highland projects",
  "Established mining jurisdiction with regulatory framework",
  "Strong community relationships and social licence to operate",
];

const WhyPNGSection = () => (
  <section className="py-16 md:py-20" style={{ background: "hsl(var(--off-white))" }}>
    <div className="container max-w-4xl">
      <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold mb-3 font-body">
        TIER-ONE MINING ADDRESS
      </p>
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-6" style={{ color: "hsl(var(--text-dark))" }}>
        Papua New Guinea:{" "}
        <span className="block">World-Class Geological Endowment</span>
      </h2>
      <p className="text-sm leading-relaxed mb-8 font-body" style={{ color: "hsl(var(--light-muted-foreground))" }}>
        Papua New Guinea sits on the Pacific Ring of Fire, home to some of the world's largest gold and copper deposits. Adyton's projects are located in the same geological arc as Lihir (Newmont) and Panguna (formerly Rio Tinto) — two of the most significant deposits in the Asia-Pacific. Island-based access means natural coastal logistics, shorter pit-to-ship distances, and lower capital intensity compared with highland projects.
      </p>
      <ul className="mb-8 text-sm font-body" style={{ color: "hsl(var(--light-muted-foreground))" }}>
        {bullets.map((b, i) => (
          <li key={i}>
            {b}
          </li>
        ))}
      </ul>
      <Button variant="gold-outline" asChild>
        <Link to="/about#community">
          Learn more <ArrowRight className="h-4 w-4" />
        </Link>
      </Button>
    </div>
  </section>
);

export default WhyPNGSection;
