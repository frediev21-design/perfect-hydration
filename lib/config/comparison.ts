import type { ComparisonFeature } from "@/types/content";

export const comparisonSection = {
  eyebrow: "Comparison",
  title: "Why Not Tap Water?",
  description:
    "Tap water contains minerals and impurities that can damage batteries, cooling systems, and sensitive equipment. Perfect Hydration is engineered for purity you can measure.",
} as const;

export const comparisonFeatures: ComparisonFeature[] = [
  {
    id: "minerals",
    label: "Minerals & ions removed",
    tapWater: false,
    perfectHydration: true,
  },
  {
    id: "conductivity",
    label: "Low conductivity (≤1 µS/cm)",
    tapWater: false,
    perfectHydration: true,
  },
  {
    id: "automotive",
    label: "Automotive grade purity",
    tapWater: false,
    perfectHydration: true,
  },
  {
    id: "consistent",
    label: "Consistent batch quality",
    tapWater: false,
    perfectHydration: true,
  },
  {
    id: "battery",
    label: "Safe for battery top-up",
    tapWater: false,
    perfectHydration: true,
  },
  {
    id: "scale",
    label: "Reduces scale & corrosion risk",
    tapWater: false,
    perfectHydration: true,
  },
  {
    id: "lab",
    label: "Suitable for laboratory use",
    tapWater: false,
    perfectHydration: true,
  },
  {
    id: "delivery",
    label: "Fast Gauteng delivery",
    tapWater: "Varies",
    perfectHydration: true,
  },
];
