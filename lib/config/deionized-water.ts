import {
  Battery,
  Building2,
  CarFront,
  Cpu,
  Droplets,
  Microscope,
  Printer,
  Sparkles,
  Waves,
  Zap,
} from "lucide-react";

import type { DeionizedWaterUseCase } from "@/types/landing";

export const deionizedWaterSection = {
  eyebrow: "Product Education",
  title: "What is Deionized Water?",
  intro: [
    "Perfect Hydration Ultra-Pure Deionized Water is manufactured using a multi-stage purification process that combines Reverse Osmosis (RO) and Deionization (DI) to remove virtually all dissolved minerals, salts, and ionic contaminants. The result is exceptionally pure water with ultra-low conductivity and Total Dissolved Solids (TDS), helping to prevent scale, corrosion, and contamination in sensitive equipment.",
    "Every batch undergoes rigorous quality control, with our internal testing consistently recording 0 ppm Total Dissolved Solids (TDS) and 0 µS/cm conductivity under controlled testing conditions, while our certified product specification is ≤ 1 mg/L TDS and ≤ 1 µS/cm conductivity @ 25°C.",
  ],
  usesHeading:
    "Perfect Hydration Deionized Water is trusted for applications where uncompromising water quality is essential, including:",
  taglinePrimary: "Engineered Purity. Trusted Quality.",
  taglineSecondary: "Because Performance Demands Purity.",
} as const;

export const deionizedWaterUseCases: DeionizedWaterUseCase[] = [
  {
    id: "battery",
    title: "Battery top-up and maintenance",
    icon: Battery,
  },
  {
    id: "coolant",
    title: "Coolant mixing for automotive cooling systems",
    icon: Droplets,
  },
  {
    id: "radiators",
    title: "Radiators and cooling systems",
    icon: CarFront,
  },
  {
    id: "industrial",
    title: "Industrial equipment and manufacturing processes",
    icon: Building2,
  },
  {
    id: "laboratory",
    title: "Laboratory testing and scientific applications",
    icon: Microscope,
  },
  {
    id: "parts-cleaning",
    title: "Precision parts cleaning",
    icon: Sparkles,
  },
  {
    id: "steam",
    title: "Steam generators and humidifiers",
    icon: Waves,
  },
  {
    id: "printing",
    title: "Inkjet and printing systems",
    icon: Printer,
  },
  {
    id: "electronics",
    title: "Electronics manufacturing and cleaning",
    icon: Cpu,
  },
  {
    id: "co2-laser",
    title: "CO₂ laser tube cooling systems",
    description:
      "Ultra-pure water helps reduce mineral build-up, supports efficient heat transfer, and contributes to extending the service life of the laser tube and cooling system.",
    icon: Zap,
    featured: true,
  },
];
