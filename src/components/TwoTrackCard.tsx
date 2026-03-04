import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface TwoTrackCardProps {
  title: string;
  subtitle: string;
  highlights: string[];
  linkTo: string;
  linkLabel: string;
  variant: "gold" | "blue";
  lightMode?: boolean;
}

const TwoTrackCard = ({ title, subtitle, highlights, linkTo, linkLabel, variant, lightMode }: TwoTrackCardProps) => {
  const isGold = variant === "gold";

  return (
    <div
      className={`rounded-lg border p-6 md:p-8 transition-all hover:translate-y-[-2px] ${
        lightMode
          ? isGold
            ? "border-primary/20"
            : "border-[hsl(215_55%_70%/0.3)]"
          : isGold
            ? "border-primary/20 bg-primary/5"
            : "border-accent/30 bg-accent/20"
      }`}
      style={lightMode ? { background: "hsl(var(--light-card))" } : undefined}
    >
      <div
        className={`text-xs uppercase tracking-widest font-semibold mb-3 ${
          isGold ? "text-primary" : lightMode ? "" : "text-secondary-foreground"
        }`}
        style={!isGold && lightMode ? { color: "hsl(215 55% 40%)" } : undefined}
      >
        {subtitle}
      </div>
      <h3
        className="text-xl md:text-2xl font-display font-bold mb-5"
        style={lightMode ? { color: "hsl(var(--light-foreground))" } : undefined}
      >
        {title}
      </h3>
      <ul className="space-y-3 mb-6">
        {highlights.map((h, i) => (
          <li key={i} className="flex items-start gap-2 text-sm" style={lightMode ? { color: "hsl(var(--light-muted-foreground))" } : undefined}>
            <span className={`mt-1.5 h-1.5 w-1.5 rounded-full shrink-0 ${
              isGold ? "bg-primary" : lightMode ? "bg-[hsl(215_55%_40%)]" : "bg-secondary-foreground"
            }`} />
            {h}
          </li>
        ))}
      </ul>
      <Link
        to={linkTo}
        className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${
          isGold ? "text-primary hover:text-primary/80" : lightMode ? "text-[hsl(215_55%_40%)] hover:text-[hsl(215_55%_30%)]" : "text-secondary-foreground hover:text-secondary-foreground/80"
        }`}
      >
        {linkLabel}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
};

export default TwoTrackCard;
