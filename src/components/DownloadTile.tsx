import { FileText, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DownloadTileProps {
  title: string;
  date: string;
  description: string;
  fileType?: string;
  fileSize?: string;
  href?: string;
}

const DownloadTile = ({ title, date, description, fileType = "PDF", fileSize = "2.4 MB", href }: DownloadTileProps) => (
  <div className="rounded-lg p-5 flex items-start gap-4" style={{ background: "hsl(var(--light-card))", border: "1px solid hsl(var(--light-border))" }}>
    <div className="h-10 w-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: "hsl(var(--light-bg))" }}>
      <FileText className="h-5 w-5 text-primary" />
    </div>
    <div className="flex-1 min-w-0">
      <h4 className="font-display font-semibold text-sm mb-0.5" style={{ color: "hsl(var(--light-foreground))" }}>{title}</h4>
      <p className="text-xs mb-1" style={{ color: "hsl(var(--light-muted-foreground))" }}>{date}</p>
      <p className="text-xs line-clamp-1" style={{ color: "hsl(var(--light-muted-foreground))" }}>{description}</p>
      <p className="text-[10px] mt-1" style={{ color: "hsl(var(--light-muted-foreground) / 0.6)" }}>{fileType} · {fileSize}</p>
    </div>
    {href ? (
      <Button variant="ghost" size="icon" className="shrink-0" asChild>
        <a href={href} target="_blank" rel="noopener noreferrer" download>
          <Download className="h-4 w-4" />
        </a>
      </Button>
    ) : (
      <Button variant="ghost" size="icon" className="shrink-0">
        <Download className="h-4 w-4" />
      </Button>
    )}
  </div>
);

export default DownloadTile;
