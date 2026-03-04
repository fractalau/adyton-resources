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
    className={`rounded-md border p-6 md:p-8 transition-all ${
      variant === "gold"
        ? "border-primary/15 bg-primary/[0.03]"
        : "border-accent/20 bg-accent/10"
    }`}
  >
    <div className={`text-[10px] uppercase tracking-[0.2em] font-semibold mb-4 ${
      variant === "gold" ? "text-primary/80" : "text-secondary-foreground/70"
    }`}>
      {subtitle}
    </div>
    <h3 className="text-lg md:text-xl font-display font-bold text-foreground mb-4 leading-snug">{title}</h3>
    <ul className="space-y-2.5 mb-6">
      {highlights.map((h, i) => (
        <li key={i} className="flex items-start gap-2.5 text-[13px] text-muted-foreground leading-relaxed">
          <span className={`mt-[7px] h-1 w-1 rounded-full shrink-0 ${
            variant === "gold" ? "bg-primary/60" : "bg-secondary-foreground/50"
          }`} />
          {h}
        </li>
      ))}
    </ul>
    <Link
      to={linkTo}
      className={`inline-flex items-center gap-1.5 text-[13px] font-semibold transition-colors ${
        variant === "gold" ? "text-primary/90 hover:text-primary" : "text-secondary-foreground/80 hover:text-secondary-foreground"
      }`}
    >
      {linkLabel}
      <ArrowRight className="h-3.5 w-3.5" />
    </Link>
  </div>
);

export default TwoTrackCard;
