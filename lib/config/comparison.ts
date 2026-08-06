import type { ComparisonFeature } from "@/types/content";

export const comparisonSection = {
  titleLead: "The Purity",
  titleAccent: "Difference",
  description:
    "Tap water leaves minerals, scale and corrosion behind. Perfect Hydration is processed to laboratory-grade purity.",
  tapWaterLabel: "Tap Water",
  perfectHydrationLabel: "Perfect Hydration",
  infographic: {
    src: "/images/purity-difference.png",
    alt: "The Purity Difference — Tap water vs Perfect Hydration automotive grade deionized water comparison showing minerals, scale, conductivity, corrosion, and impurities",
    width: 1024,
    height: 415,
  },
} as const;

export const comparisonFeatures: ComparisonFeature[] = [
  {
    id: "minerals",
    label: "Minerals",
    tapWater: "Present",
    perfectHydration: "Ultra Pure",
  },
  {
    id: "scale",
    label: "Scale",
    tapWater: "Builds Scale",
    perfectHydration: "No Scale",
  },
  {
    id: "conductivity",
    label: "Conductivity",
    tapWater: "Conductive",
    perfectHydration: "Low Conductivity",
  },
  {
    id: "corrosion",
    label: "Corrosion",
    tapWater: "Causes Rust",
    perfectHydration: "Prevents Corrosion",
  },
  {
    id: "impurities",
    label: "Impurities",
    tapWater: "Trace Impurities",
    perfectHydration: "Laboratory Grade",
  },
];
