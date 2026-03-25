export const seoConfig = {
  siteName: "Adyton Resources Corp.",
  siteUrl: "https://adytonresources.com",
  defaultTitle: "Adyton Resources Corp. | Gold & Copper Exploration in PNG",
  defaultDescription:
    "Adyton Resources (TSXV: ADY) is a gold and copper exploration company building high-quality assets in Papua New Guinea, positioned for near-term cash flow and long-term growth.",
  defaultOgImage: "https://adytonresources.com/og-image.jpg",
  twitterHandle: "@AdytonResources",
  business: {
    name: "Adyton Resources Corp.",
    legalName: "Adyton Resources Corporation",
    phone: "+61 7 3854 2389",
    email: "info@adytonresources.com",
    address: {
      streetAddress: "Level 7, 300 Adelaide Street",
      addressLocality: "Brisbane",
      addressRegion: "QLD",
      postalCode: "4000",
      addressCountry: "AU",
    },
    foundingYear: 2020,
    businessType: "Corporation",
  },
  socialProfiles: [
    "https://www.linkedin.com/company/adyton-resources",
    "https://x.com/AdytonResources",
  ],
};

export function getOrganisationSchema() {
  const b = seoConfig.business;
  return {
    "@context": "https://schema.org",
    "@type": b.businessType,
    name: seoConfig.siteName,
    legalName: b.legalName,
    url: seoConfig.siteUrl,
    logo: `${seoConfig.siteUrl}/logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: b.phone,
      contactType: "customer service",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: b.address.streetAddress,
      addressLocality: b.address.addressLocality,
      addressRegion: b.address.addressRegion,
      postalCode: b.address.postalCode,
      addressCountry: b.address.addressCountry,
    },
    sameAs: seoConfig.socialProfiles,
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: seoConfig.siteName,
    url: seoConfig.siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${seoConfig.siteUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}
