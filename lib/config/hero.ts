export const heroProductImage = {
  src: "/images/hero-cinematic.png",
  alt: "Perfect Hydration 5 litre ultra pure deionised water bottle for automotive and industrial applications",
  width: 682,
  height: 1024,
} as const;

export const assetPaths = {
  hero: {
    visual: heroProductImage.src,
    visualAlt: heroProductImage.alt,
  },
  product: {
    bottle5L: heroProductImage.src,
    bottle5LAlt: heroProductImage.alt,
  },
  social: {
    ogImage: heroProductImage.src,
  },
  brand: {
    logo: "/images/perfect-hydration-logo.png",
    logoCompact: "/images/perfect-hydration-logo-compact.png",
    logoAlt: "Perfect Hydration — Hydration That Does More",
  },
} as const;

export const heroContent = {
  eyebrow: "Automotive Grade",
  titleLead: "Ultra Pure",
  titleAccent: "Deionised Water",
  subline:
    "Professional-grade deionised water for automotive, industrial and precision applications.",
  specLine: [
    "≤1 µS/cm conductivity",
    "Pre-filtration + RO + DI",
    "Bottled & tested in Pretoria",
  ],
  priceLabel: "From R69 per 5L",
  deliveryNote: "Gauteng delivery available",
  primaryCta: "Order 5L Now",
  secondaryCta: "Buy on Bobshop",
} as const;
