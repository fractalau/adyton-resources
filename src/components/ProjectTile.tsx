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
    className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/30 transition-all"
  >
    <div className="aspect-[16/10] bg-muted flex items-center justify-center relative">
      <MapPin className="h-8 w-8 text-muted-foreground/30" />
      <div className="absolute top-3 left-3">
        <TagChip label={stage} />
      </div>
    </div>
    <div className="p-5">
      <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
        {name}
      </h3>
      {location && (
        <p className="text-xs text-muted-foreground mb-3">{location}</p>
      )}
      <ul className="space-y-1.5 mb-4">
        {highlights.map((h, i) => (
          <li key={i} className="text-xs text-muted-foreground flex items-start gap-1.5">
            <span className="mt-1 h-1 w-1 rounded-full bg-primary/60 shrink-0" />
            {h}
          </li>
        ))}
      </ul>
      <span className="text-xs font-semibold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
        View project <ArrowRight className="h-3 w-3" />
      </span>
    </div>
  </Link>
);

export default ProjectTile;
