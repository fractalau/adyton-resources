import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import TagChip from "./TagChip";

interface ProjectTileProps {
  name: string;
  slug: string;
  stage: string;
  highlights: string[];
  location?: string;
}

const ProjectTile = ({ name, slug, stage, highlights, location }: ProjectTileProps) => (
  <Link
    to={`/projects/${slug}`}
    className="group rounded-lg overflow-hidden border hover:border-primary/30 transition-all"
    style={{ background: "hsl(var(--light-card))", borderColor: "hsl(var(--light-border))" }}
  >
    <div className="aspect-[16/10] bg-muted flex items-center justify-center relative">
      <MapPin className="h-8 w-8 text-muted-foreground/30" />
      <div className="absolute top-3 left-3">
        <TagChip label={stage} />
      </div>
    </div>
    <div className="p-5">
      <h3 className="font-display font-semibold group-hover:text-primary transition-colors mb-1" style={{ color: "hsl(var(--light-foreground))" }}>
        {name}
      </h3>
      {location && (
        <p className="text-sm mb-3" style={{ color: "hsl(var(--light-muted-foreground))" }}>{location}</p>
      )}
      <ul className="space-y-1.5 mb-4">
        {highlights.map((h, i) => (
          <li key={i} className="text-sm flex items-start gap-1.5" style={{ color: "hsl(var(--light-muted-foreground))" }}>
            <span className="mt-1 h-1 w-1 rounded-full bg-primary/60 shrink-0" />
            {h}
          </li>
        ))}
      </ul>
      <span className="text-sm font-semibold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
        View project <ArrowRight className="h-3 w-3" />
      </span>
    </div>
  </Link>
);

export default ProjectTile;
