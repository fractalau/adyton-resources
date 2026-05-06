import { FileText, Download, ExternalLink } from "lucide-react";

interface DownloadTileProps {
  title: string;
  date: string;
  description: string;
  fileType?: string;
  fileSize?: string;
  href?: string;
}

const DownloadTile = ({ title, date, description, fileType = "PDF", fileSize = "2.4 MB", href }: DownloadTileProps) => {
  const isExternal = href?.startsWith("http");
  const Icon = isExternal ? ExternalLink : Download;

  const content = (
    <>
      <div className="h-8 w-8 rounded flex items-center justify-center shrink-0" style={{ background: "hsl(var(--light-bg))" }}>
        <FileText className="h-4 w-4 text-primary" />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-display font-semibold text-sm mb-0.5 leading-tight" style={{ color: "hsl(var(--light-foreground))" }}>{title}</h4>
        <p className="text-sm" style={{ color: "hsl(var(--light-muted-foreground) / 0.6)" }}>{date} · {fileType}{fileSize !== "—" ? ` · ${fileSize}` : ""}</p>
      </div>
      <div className="shrink-0 flex items-center justify-center h-6 w-6">
        <Icon className="h-3.5 w-3.5 text-primary" />
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={isExternal ? "_blank" : "_self"}
        rel={isExternal ? "noopener noreferrer" : undefined}
        download={!isExternal || undefined}
        className="rounded-lg p-3 flex items-center gap-3 transition-colors hover:opacity-90 cursor-pointer no-underline"
        style={{ background: "hsl(var(--light-card))", border: "1px solid hsl(var(--light-border))" }}
      >
        {content}
      </a>
    );
  }

  return (
    <div className="rounded-lg p-3 flex items-center gap-3 opacity-50" style={{ background: "hsl(var(--light-card))", border: "1px solid hsl(var(--light-border))" }}>
      {content}
    </div>
  );
};

export default DownloadTile;
