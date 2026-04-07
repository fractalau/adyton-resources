import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import TagChip from "./TagChip";

interface NewsCardProps {
  title: string;
  date: string;
  excerpt: string;
  tags?: string[];
  sourceUrl: string;
  slug?: string;
}

const NewsCard = ({ title, date, excerpt, tags = [], sourceUrl, slug }: NewsCardProps) => (
  <div className="border rounded-lg p-5 flex flex-col" style={{ background: "hsl(var(--light-card))", borderColor: "hsl(var(--light-border))" }}>
    <div className="flex flex-wrap gap-1.5 mb-3">
      {tags.map((t) => (
        <TagChip key={t} label={t} />
      ))}
    </div>
    <p className="text-xs mb-2 font-body" style={{ color: "hsl(var(--light-muted-foreground))" }}>{date}</p>
    <h3 className="font-display font-semibold text-sm mb-2 line-clamp-3" style={{ color: "hsl(var(--light-foreground))" }}>{title}</h3>
    <p className="text-xs line-clamp-2 mb-4 flex-1 font-body" style={{ color: "hsl(var(--light-muted-foreground))" }}>{excerpt}</p>
    <Button variant="gold-outline" size="sm" asChild className="w-full">
      {slug ? (
        <Link to={`/news/${slug}`}>
          Read More <ExternalLink className="h-3.5 w-3.5 ml-1" />
        </Link>
      ) : (
        <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
          Read Full Release <ExternalLink className="h-3.5 w-3.5 ml-1" />
        </a>
      )}
    </Button>
  </div>
);

export default NewsCard;
