import {
  Activity,
  Car,
  Droplets,
  Sparkles,
} from "lucide-react";

import type { WhyUsFeature } from "@/types/landing";

export const whyUsSection = {
  eyebrow: "Why Perfect Hydration",
  title: "Purity You Can Measure",
  description:
    "Four pillars of measured purity — engineered for automotive and industrial systems that cannot tolerate mineral contamination.",
} as const;

export const whyUsFeatures: WhyUsFeature[] = [
  {
    id: "ultra-pure",
    title: "Ultra Pure",
    description:
      "Multi-stage purification removes minerals, ions, and contaminants for water you can trust in sensitive systems.",
    icon: Droplets,
  },
  {
    id: "purification-process",
    title: "Purification Process",
    description:
      "Pre-filtration protects the RO membrane before deionization removes remaining charged particles for ultra-low conductivity.",
    icon: Sparkles,
  },
  {
    id: "low-conductivity",
    title: "Measured Specs",
    highlight: "≤1 µS/cm",
    description:
      "Laboratory-grade conductivity, TDS, and pH targets suitable for batteries, coolant systems, and precision equipment.",
    icon: Activity,
  },
  {
    id: "automotive-grade",
    title: "Automotive Grade",
    description:
      "Formulated for workshops and fleet operators who need reliable water for top-ups, radiators, and mixing.",
    icon: Car,
  },
];
