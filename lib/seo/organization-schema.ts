import { assetPaths } from "@/lib/config/hero";
import { originSection } from "@/lib/config/origin";
import { siteConfig } from "@/lib/config/site";

/**
 * Builds Organization + LocalBusiness JSON-LD for brand entity search.
 */
export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}${assetPaths.brand.logo}`,
    description: siteConfig.description,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phoneTel,
    address: {
      "@type": "PostalAddress",
      addressLocality: originSection.location.city,
      addressRegion: originSection.location.region,
      addressCountry: "ZA",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Gauteng",
    },
    sameAs: [siteConfig.social.facebook],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.phoneTel,
      contactType: "sales",
      areaServed: "ZA",
      availableLanguage: ["English"],
    },
  };
}
