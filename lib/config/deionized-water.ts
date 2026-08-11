export const deionizedWaterSection = {
  eyebrow: "Product Value",
  title: "Water Engineered for Equipment",
  description:
    "Ordinary water contains dissolved minerals and ions that can contribute to mineral deposits, scale, contamination, inconsistent cooling performance, and residue in sensitive systems.",
  processTitle: "Purification Process",
  processSteps: [
    { id: "prefiltration", label: "Pre-filtration" },
    { id: "ro", label: "Reverse Osmosis" },
    { id: "di", label: "Deionisation" },
  ],
  processOutcome:
    "Perfect Hydration is processed to remove dissolved minerals and ions — delivering low-conductivity water suitable for professional applications.",
  comparisonTitle: "Why Deionised Water?",
  ordinaryLabel: "Ordinary Water",
  perfectHydrationLabel: "Perfect Hydration",
  ordinaryPoints: [
    "Minerals present",
    "Dissolved solids",
    "Scale potential",
    "Variable quality",
  ],
  perfectHydrationPoints: [
    "Low conductivity",
    "Low TDS",
    "Consistent quality",
    "Batch tested",
  ],
} as const;
