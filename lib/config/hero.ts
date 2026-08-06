export const assetPaths = {
  hero: {
    visual: "/images/hero-cinematic.png",
    visualAlt:
      "Perfect Hydration 5 litre ultra pure deionised water with water splash effects",
  },
  product: {
    bottle5L: "/images/hero-bottle.png",
    bottle5LAlt:
      "5 litre Perfect Hydration automotive grade deionised water bottle",
  },
  social: {
    ogImage: "/images/PerfectHydration_FB_IG_Square.png",
  },
  brand: {
    logo: "/images/perfect-hydration-logo.png",
    logoCompact: "/images/perfect-hydration-logo-compact.png",
    logoAlt: "Perfect Hydration — Hydration That Does More",
  },
} as const;

export const heroUseCases = [
  "Battery Top-up",
  "Radiators",
  "Coolant Mixing",
  "Laboratories",
  "Manufacturing",
] as const;

export const heroTrustChips = [
  "≤1 µS/cm",
  "RO + DI",
  "Pretoria, SA",
] as const;
