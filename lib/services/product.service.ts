import type { Product } from "@/types/product";

export const productPricing = {
  unitPrice: 69,
  bulkUnitPrice: 65,
  bulkThreshold: 6,
} as const;

const deionizedWater5L: Product = {
  id: "deionized-water-5l",
  slug: "deionized-water",
  name: "Ultra Pure Deionised Water",
  shortName: "5L Deionised Water",
  tagline: "Automotive & Industrial Grade",
  grade: "Automotive Grade",
  volumeLitres: 5,
  price: productPricing.unitPrice,
  currency: "ZAR",
  description:
    "Professional quality deionised water for battery top-up, radiators, coolant mixing, laboratories, and manufacturing.",
  applications: [
    "Battery Top-up",
    "Radiators",
    "Coolant Mixing",
    "Laboratories",
    "Manufacturing",
    "Autoclaves",
    "Steam Irons",
    "Fleet Maintenance",
    "Car Detailing",
    "Industrial Processes",
  ],
  specifications: [
    { label: "Conductivity", value: "≤1 µS/cm @ 25°C" },
    { label: "TDS", value: "≤1 mg/L" },
    { label: "pH", value: "5.0–6.7" },
    { label: "Treatment", value: "Pre-filtration + RO + DI" },
    { label: "Volume", value: "5 Litres" },
  ],
  seo: {
    title: "5L Automotive Grade Deionised Water | Perfect Hydration",
    description:
      "Order ultra pure deionised water in Gauteng. R69 per 5L bottle. Fast delivery for workshops, fleets, labs, and industry.",
    keywords: [
      "deionised water",
      "deionized water",
      "automotive grade water",
      "battery top up water",
      "Gauteng water delivery",
      "Perfect Hydration",
    ],
  },
};

/**
 * Retrieves a product by slug.
 * Static implementation — replace with Supabase/PostgreSQL when ready.
 */
export async function getProductBySlug(slug: string): Promise<Product | null> {
  if (slug === deionizedWater5L.slug) {
    return deionizedWater5L;
  }

  return null;
}

/**
 * Returns the primary featured product for the landing page.
 */
export async function getFeaturedProduct(): Promise<Product> {
  return deionizedWater5L;
}

/**
 * Lists all available products.
 */
export async function getProducts(): Promise<Product[]> {
  return [deionizedWater5L];
}
