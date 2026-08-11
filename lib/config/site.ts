import { env } from "@/lib/config/env";

export const siteConfig = {
  name: "Perfect Hydration",
  tagline: "Ultra Pure. Clean. Consistent.",
  description:
    "Premium deionised water for batteries, radiators, coolant mixing, laboratories, detailing and industrial applications. Bottled and tested in Pretoria. Gauteng delivery and nationwide ordering via Bobshop.",
  url: env.NEXT_PUBLIC_SITE_URL,
  locale: "en-ZA",
  currency: "ZAR",
  contact: {
    phoneDisplay: env.NEXT_PUBLIC_PHONE_DISPLAY,
    phoneTel: env.NEXT_PUBLIC_PHONE_TEL,
    email: env.NEXT_PUBLIC_CONTACT_EMAIL,
    whatsappNumber: env.NEXT_PUBLIC_WHATSAPP_NUMBER,
  },
  social: {
    facebook: "https://www.facebook.com/perfecthydration",
  },
  commerce: {
    vatRate: env.NEXT_PUBLIC_VAT_RATE,
    freeDeliveryThreshold: env.NEXT_PUBLIC_FREE_DELIVERY_THRESHOLD,
    deliveryFee: env.NEXT_PUBLIC_DELIVERY_FEE,
    bobshopUrl: env.NEXT_PUBLIC_BOBSHOP_URL,
  },
  channels: {
    bobshop: {
      url: env.NEXT_PUBLIC_BOBSHOP_URL,
      label: "Order on Bobshop",
    },
  },
  location: {
    city: "Pretoria",
    region: "Gauteng",
    country: "South Africa",
    display: "Pretoria, Gauteng, South Africa",
  },
} as const;
