import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import TagChip from "./TagChip";

interface NewsCardProps {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  tags?: string[];
  sourceUrl?: string;
}

const NewsCard = ({ title, date, excerpt, slug, tags = [], sourceUrl }: NewsCardProps) => (
  <div className="bg-card border border-border rounded-lg p-5 flex flex-col">
    <div className="flex flex-wrap gap-1.5 mb-3">
      {tags.map((t) => (
        <TagChip key={t} label={t} />
      ))}
    </div>
    <p className="text-xs text-muted-foreground mb-2">{date}</p>
    <h3 className="font-display font-semibold text-foreground mb-2 line-clamp-2">{title}</h3>
    <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">{excerpt}</p>
    <div className="flex gap-2">
      <Button variant="gold-outline" size="sm" asChild className="flex-1">
        <Link to={`/news/${slug}`}>Read</Link>
      </Button>
      {sourceUrl && (
        <Button variant="ghost" size="sm" asChild>
          <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </Button>
      )}
    </div>
  </div>
);

export default NewsCard;
