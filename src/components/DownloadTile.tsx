import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DownloadTileProps {
  title: string;
  date: string;
  description: string;
  fileType?: string;
  fileSize?: string;
}

const DownloadTile = ({ title, date, description, fileType = "PDF", fileSize = "2.4 MB" }: DownloadTileProps) => (
  <div className="bg-card border border-border rounded-lg p-5 flex items-start gap-4">
    <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
      <FileText className="h-5 w-5 text-primary" />
    </div>
    <div className="flex-1 min-w-0">
      <h4 className="font-display font-semibold text-foreground text-sm mb-0.5">{title}</h4>
      <p className="text-xs text-muted-foreground mb-1">{date}</p>
      <p className="text-xs text-muted-foreground line-clamp-1">{description}</p>
      <p className="text-[10px] text-muted-foreground mt-1">{fileType} · {fileSize}</p>
    </div>
    <Button variant="ghost" size="icon" className="shrink-0">
      <Download className="h-4 w-4" />
    </Button>
  </div>
);

export default DownloadTile;
