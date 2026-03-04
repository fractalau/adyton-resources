import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface TwoTrackCardProps {
  title: string;
  subtitle: string;
  highlights: string[];
  linkTo: string;
  linkLabel: string;
  variant: "gold" | "blue";
}

const TwoTrackCard = ({ title, subtitle, highlights, linkTo, linkLabel, variant }: TwoTrackCardProps) => (
  <div
    className={`rounded-lg border p-6 md:p-8 transition-all hover:translate-y-[-2px] ${
      variant === "gold"
        ? "border-primary/20 bg-primary/5"
        : "border-accent/30 bg-accent/20"
    }`}
  >
    <div className={`text-xs uppercase tracking-widest font-semibold mb-3 ${
      variant === "gold" ? "text-primary" : "text-secondary-foreground"
    }`}>
      {subtitle}
    </div>
    <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-5">{title}</h3>
    <ul className="space-y-3 mb-6">
      {highlights.map((h, i) => (
        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
          <span className={`mt-1.5 h-1.5 w-1.5 rounded-full shrink-0 ${
            variant === "gold" ? "bg-primary" : "bg-secondary-foreground"
          }`} />
          {h}
        </li>
      ))}
    </ul>
    <Link
      to={linkTo}
      className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${
        variant === "gold" ? "text-primary hover:text-primary/80" : "text-secondary-foreground hover:text-secondary-foreground/80"
      }`}
    >
      {linkLabel}
      <ArrowRight className="h-4 w-4" />
    </Link>
  </div>
);

export default TwoTrackCard;
