import { useEffect } from "react";
import { seoConfig } from "@/config/seo";

export function useSEO(title: string, description: string) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} | ${seoConfig.siteName}`
      : seoConfig.defaultTitle;

    document.title = fullTitle;

    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = description || seoConfig.defaultDescription;
  }, [title, description]);
}
