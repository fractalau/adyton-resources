import { useHead } from "@unhead/react";
import { seoConfig } from "@/config/seo";

interface ArticleSchemaProps {
  headline: string;
  datePublished: string;
  dateModified?: string;
  description: string;
  image?: string;
  authorName?: string;
}

const ArticleSchema = ({
  headline,
  datePublished,
  dateModified,
  description,
  image,
  authorName,
}: ArticleSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    datePublished,
    dateModified: dateModified || datePublished,
    description,
    image: image || seoConfig.defaultOgImage,
    author: {
      "@type": "Organization",
      name: authorName || seoConfig.siteName,
    },
    publisher: {
      "@type": "Organization",
      name: seoConfig.siteName,
      logo: {
        "@type": "ImageObject",
        url: `${seoConfig.siteUrl}/logo.png`,
      },
    },
  };

  useHead({
    script: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify(schema),
      },
    ],
  });

  return null;
};

export default ArticleSchema;
