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
    className="group bg-card border border-border rounded-md overflow-hidden hover:border-primary/20 transition-all flex flex-col"
  >
    <div className="aspect-[16/10] bg-muted/50 dot-grid flex items-center justify-center relative">
      <MapPin className="h-6 w-6 text-muted-foreground/20 relative z-10" />
      <div className="absolute top-2.5 left-2.5 z-10">
        <TagChip label={stage} />
      </div>
    </div>
    <div className="p-4 flex-1 flex flex-col">
      <h3 className="font-display font-semibold text-sm text-foreground group-hover:text-primary transition-colors mb-0.5">
        {name}
      </h3>
      {location && (
        <p className="text-[11px] text-muted-foreground/70 mb-2.5">{location}</p>
      )}
      <ul className="space-y-1 mb-3 flex-1">
        {highlights.map((h, i) => (
          <li key={i} className="text-[11px] text-muted-foreground flex items-start gap-1.5">
            <span className="mt-[5px] h-0.5 w-0.5 rounded-full bg-primary/50 shrink-0" />
            {h}
          </li>
        ))}
      </ul>
      <span className="text-[11px] font-semibold text-primary/80 flex items-center gap-1 group-hover:gap-1.5 transition-all">
        View project <ArrowRight className="h-3 w-3" />
      </span>
    </div>
  </Link>
);

export default ProjectTile;
