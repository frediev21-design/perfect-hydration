export type PricingTierIcon = "droplets" | "building";
export type PricingTierCtaVariant = "default" | "primary" | "outline";

export interface PricingTier {
  id: string;
  label: string;
  price: string;
  priceSuffix: string;
  features: string[];
  ctaLabel: string;
  ctaVariant: PricingTierCtaVariant;
  icon?: PricingTierIcon;
  badge?: string;
  highlighted?: boolean;
  orderQuantity?: number;
  quote?: boolean;
  business?: boolean;
}

export const bulkPricingSection = {
  eyebrow: "Pricing",
  titleLead: "Clear, Transparent",
  titleAccent: "Pricing",
  description:
    "Professional-grade deionised water with straightforward bulk value.",
  vatNote: "Prices exclude VAT (15%). VAT is calculated in the order summary below.",
} as const;

export const pricingTiers: PricingTier[] = [
  {
    id: "single",
    label: "1 × 5L",
    price: "R69",
    priceSuffix: "per bottle",
    features: [
      "5L Deionised Water",
      "Automotive Grade",
      "Gauteng delivery",
    ],
    ctaLabel: "Order via WhatsApp",
    ctaVariant: "outline",
    icon: "droplets",
    orderQuantity: 1,
  },
  {
    id: "case-6",
    label: "6 × 5L",
    price: "R390",
    priceSuffix: "R65 per bottle",
    features: [
      "Save R24 vs single bottles",
      "Free delivery in Gauteng",
      "Ideal for workshops",
    ],
    ctaLabel: "Order via WhatsApp",
    ctaVariant: "primary",
    icon: "droplets",
    highlighted: true,
    orderQuantity: 6,
  },
  {
    id: "case-12",
    label: "12 × 5L",
    price: "Bulk",
    priceSuffix: "Request bulk pricing",
    features: [
      "Best per-bottle rate",
      "Priority delivery",
      "Stock-up value",
    ],
    ctaLabel: "Request Bulk Pricing",
    ctaVariant: "outline",
    icon: "droplets",
    badge: "Best Value",
    orderQuantity: 12,
    quote: true,
  },
  {
    id: "business",
    label: "Business",
    price: "Custom",
    priceSuffix: "Volume & recurring supply",
    features: [
      "Recurring supply",
      "Volume pricing",
      "Dedicated account support",
    ],
    ctaLabel: "Request Business Pricing",
    ctaVariant: "outline",
    icon: "building",
    business: true,
  },
];
