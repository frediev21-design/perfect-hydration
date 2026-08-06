import type { Metadata } from "next";

import { siteConfig } from "@/lib/config/site";

const defaultOgImage = "/images/og-default.jpg";

/**
 * Builds consistent metadata for Perfect Hydration pages.
 */
export function createMetadata({
  title,
  description,
  path = "",
  image = defaultOgImage,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}): Metadata {
  const pageTitle = title ?? siteConfig.name;
  const pageDescription = description ?? siteConfig.description;
  const canonicalUrl = `${siteConfig.url}${path}`;

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: siteConfig.name,
      template: `%s | ${siteConfig.name}`,
    },
    description: pageDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: canonicalUrl,
      siteName: siteConfig.name,
      title: pageTitle,
      description: pageDescription,
      images: [{ url: image, width: 1200, height: 630, alt: pageTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [image],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export const rootMetadata = createMetadata({
  title: "Ultra Pure Deionized Water | Gauteng Delivery",
  description: siteConfig.description,
});
