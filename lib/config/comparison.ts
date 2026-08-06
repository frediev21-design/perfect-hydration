import type { ComparisonFeature } from "@/types/content";

export const comparisonSection = {
  titleLead: "The Purity",
  titleAccent: "Difference",
  description:
    "Tap water leaves minerals, scale and corrosion behind. Perfect Hydration is processed to high-purity deionised water — engineered to protect equipment, improve performance, and eliminate mineral contamination.",
  tapWaterLabel: "Tap Water",
  perfectHydrationLabel: "Perfect Hydration",
  infographic: {
    src: "/images/purity-difference.png",
    alt: "The Purity Difference — Tap water vs Perfect Hydration deionised water comparison with conductivity ≤1 µS/cm, TDS ≤1 mg/L, and equipment protection benefits",
    width: 1024,
    height: 682,
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
    perfectHydration: "≤1 µS/cm @ 25°C",
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
    perfectHydration: "≤1 mg/L TDS (0 ppm typical internal test)",
  },
];
