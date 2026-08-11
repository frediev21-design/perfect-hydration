import { siteConfig } from "@/lib/config/site";

/**
 * Builds BreadcrumbList JSON-LD for the homepage.
 */
export function buildBreadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: siteConfig.name,
        item: siteConfig.url,
      },
    ],
  };
}
