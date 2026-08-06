import {
  Activity,
  Car,
  Droplets,
  Filter,
  Sparkles,
  Truck,
} from "lucide-react";

import type { WhyUsFeature } from "@/types/landing";

export const whyUsSection = {
  eyebrow: "Why Perfect Hydration",
  title: "Purity You Can Measure",
  description:
    "Every bottle is produced to automotive and industrial standards — ultra pure, consistently tested, and ready for critical applications.",
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
    id: "reverse-osmosis",
    title: "Reverse Osmosis",
    description:
      "Pre-filtration protects the RO membrane before dissolved solids are stripped — the foundation of consistent batch quality.",
    icon: Filter,
  },
  {
    id: "deionization",
    title: "Deionization",
    description:
      "Ion-exchange resin beds remove remaining charged particles for ultra-low conductivity water.",
    icon: Sparkles,
  },
  {
    id: "low-conductivity",
    title: "Low Conductivity",
    highlight: "≤1 µS/cm",
    description:
      "Laboratory-grade conductivity levels suitable for batteries, coolant systems, and precision equipment.",
    icon: Activity,
  },
  {
    id: "automotive-grade",
    title: "Automotive Grade",
    description:
      "Formulated for workshops and fleet operators who need reliable water for top-ups, radiators, and mixing.",
    icon: Car,
  },
  {
    id: "fast-delivery",
    title: "Fast Delivery",
    description:
      "Reliable Gauteng delivery to homes, offices, workshops, and industrial sites — order via WhatsApp in seconds.",
    icon: Truck,
  },
];
