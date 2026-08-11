import type { Metadata } from "next";

import { assetPaths, heroProductImage } from "@/lib/config/hero";
import { siteConfig } from "@/lib/config/site";

const defaultOgImage = assetPaths.social.ogImage;

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
      images: [
        {
          url: image,
          width: heroProductImage.width,
          height: heroProductImage.height,
          alt: pageTitle,
        },
      ],
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
  title: "Deionised Water South Africa | Perfect Hydration",
  description: siteConfig.description,
});
