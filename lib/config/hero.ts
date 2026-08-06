export const heroProductImage = {
  src: "/images/hero-cinematic.png",
  alt: "Perfect Hydration 5 litre ultra pure deionised water with water splash effects",
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

export const heroUseCases = [
  "Battery Top-up",
  "Radiators",
  "Coolant Mixing",
  "Laboratories",
  "Manufacturing",
] as const;

export const heroTrustChips = [
  "≤1 µS/cm",
  "Pre-filtration · RO · DI",
  "Pretoria, SA",
] as const;
