import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteConfig.url,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/checkout`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${siteConfig.url}/products/deionized-water`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];
}
