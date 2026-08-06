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
  eyebrow: "Bulk Pricing",
  titleLead: "The More You Order, The Better",
  titleAccent: "The Value",
  description:
    "Transparent pricing for individuals, workshops and industrial accounts.",
} as const;

export const pricingTiers: PricingTier[] = [
  {
    id: "single",
    label: "1 Bottle",
    price: "R69",
    priceSuffix: "per 5L bottle",
    features: [
      "5L Deionized Water",
      "Automotive Grade",
      "Delivery across Gauteng",
    ],
    ctaLabel: "Order",
    ctaVariant: "outline",
    icon: "droplets",
    orderQuantity: 1,
  },
  {
    id: "case-6",
    label: "6 Bottles",
    price: "R390",
    priceSuffix: "per case • R65/bottle",
    features: [
      "Save R24",
      "Free delivery in Gauteng",
      "Ideal for workshops",
    ],
    ctaLabel: "Order 6",
    ctaVariant: "primary",
    icon: "droplets",
    badge: "Best Value",
    highlighted: true,
    orderQuantity: 6,
  },
  {
    id: "case-12",
    label: "12 Bottles",
    price: "Quote",
    priceSuffix: "bulk case pricing",
    features: [
      "Best per-bottle rate",
      "Priority delivery",
      "Stock-up value",
    ],
    ctaLabel: "Request Quote",
    ctaVariant: "outline",
    icon: "droplets",
    orderQuantity: 12,
    quote: true,
  },
  {
    id: "business",
    label: "Business Accounts",
    price: "Custom",
    priceSuffix: "tailored to your fleet",
    features: [
      "Recurring deliveries",
      "Net-30 terms",
      "Dedicated account manager",
    ],
    ctaLabel: "Contact Us",
    ctaVariant: "outline",
    icon: "building",
    business: true,
  },
];
