import { useHead } from "@unhead/react";
import { seoConfig } from "@/config/seo";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noIndex?: boolean;
  schema?: object | object[];
}

const SEO = ({
  title,
  description,
  canonical,
  ogImage,
  ogType = "website",
  noIndex = false,
  schema,
}: SEOProps) => {
  const fullTitle = title
    ? `${title} | ${seoConfig.siteName}`
    : seoConfig.defaultTitle;
  const desc = description || seoConfig.defaultDescription;
  const image = ogImage || seoConfig.defaultOgImage;
  const url = canonical || seoConfig.siteUrl;

  const meta: any[] = [
    { name: "description", content: desc },
    {
      name: "robots",
      content: noIndex ? "noindex, nofollow" : "index, follow",
    },
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: desc },
    { property: "og:image", content: image },
    { property: "og:url", content: url },
    { property: "og:type", content: ogType },
    { property: "og:site_name", content: seoConfig.siteName },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:description", content: desc },
    { name: "twitter:image", content: image },
  ];

  if (seoConfig.twitterHandle) {
    meta.push({ name: "twitter:site", content: seoConfig.twitterHandle });
  }

  const script: any[] = [];
  if (schema) {
    const schemas = Array.isArray(schema) ? schema : [schema];
    schemas.forEach((s) => {
      script.push({
        type: "application/ld+json",
        innerHTML: JSON.stringify(s),
      });
    });
  }

  useHead({
    title: fullTitle,
    link: [{ rel: "canonical", href: url }],
    meta,
    script,
  });

  return null;
};

export default SEO;
