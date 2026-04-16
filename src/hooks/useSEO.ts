import { useEffect } from "react";
import { seoConfig } from "@/config/seo";

function getOrCreateMetaProperty(property: string, content: string): void {
  let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("property", property);
    document.head.appendChild(meta);
  }
  meta.content = content;
}

function getOrCreateMetaName(name: string, content: string): void {
  let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!meta) {
    meta = document.createElement("meta");
    meta.name = name;
    document.head.appendChild(meta);
  }
  meta.content = content;
}

export function useSEO(title: string, description: string) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} | ${seoConfig.siteName}`
      : seoConfig.defaultTitle;
    const desc = description || seoConfig.defaultDescription;

    // Update standard meta tags
    document.title = fullTitle;
    getOrCreateMetaName("description", desc);

    // Update Open Graph meta tags for Slack/social previews
    getOrCreateMetaProperty("og:title", fullTitle);
    getOrCreateMetaProperty("og:description", desc);
    getOrCreateMetaProperty("og:url", window.location.href);
  }, [title, description]);
}
