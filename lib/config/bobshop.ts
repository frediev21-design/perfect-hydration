import { siteConfig } from "@/lib/config/site";

export const bobshopConfig = {
  url: siteConfig.channels.bobshop.url,
  label: siteConfig.channels.bobshop.label,
  shortNote:
    "Also available on Bobshop with delivery nationwide across South Africa.",
} as const;
