import type { ApplicationCategory } from "@/types/landing";

export const applicationsSection = {
  eyebrow: "Applications",
  title: "Professional Applications",
  description:
    "Deionised water for systems where mineral content, conductivity and consistency matter.",
} as const;

export const applicationCategories: ApplicationCategory[] = [
  {
    id: "automotive",
    title: "Automotive & Workshops",
    description:
      "Battery top-ups, radiator systems and coolant preparation.",
    icon: "wrench",
  },
  {
    id: "fleets",
    title: "Fleets",
    description: "Reliable water supply for routine fleet maintenance.",
    icon: "truck",
  },
  {
    id: "laboratories",
    title: "Laboratories",
    description:
      "Low-mineral water for rinsing and suitable laboratory applications.",
    icon: "flask",
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    description:
      "Process and equipment applications where low-mineral water is required.",
    icon: "factory",
  },
  {
    id: "detailing",
    title: "Detailing",
    description:
      "Low-mineral water for applications where residue and spotting matter.",
    icon: "sparkles",
  },
  {
    id: "industrial",
    title: "Industrial",
    description:
      "Equipment, cooling and process applications requiring controlled water quality.",
    icon: "cog",
  },
  {
    id: "laser-cooling",
    title: "CO₂ Laser Cooling",
    description:
      "Suitable for systems where low-mineral cooling water is specified.",
    icon: "zap",
  },
];
