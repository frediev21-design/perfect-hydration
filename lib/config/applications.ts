import {
  Battery,
  Building2,
  CarFront,
  Droplets,
  FlaskConical,
  Microscope,
  Shirt,
  Thermometer,
  Truck,
  Wrench,
} from "lucide-react";

import type { ProductApplication } from "@/types/landing";

export const applicationsSection = {
  eyebrow: "Applications",
  title: "Professional Grade for Every Industry",
  description:
    "From workshop battery top-ups to laboratory workflows — Perfect Hydration delivers ultra pure water where consistency matters most.",
  moreUsesLabel: "More uses",
} as const;

export const productApplications: ProductApplication[] = [
  {
    id: "battery",
    title: "Battery",
    description: "Top-up lead-acid and auxiliary batteries without mineral buildup.",
    icon: Battery,
    tier: "primary",
  },
  {
    id: "radiator",
    title: "Radiator",
    description: "Safe for cooling systems that require low-mineral water.",
    icon: Thermometer,
    tier: "primary",
  },
  {
    id: "coolant",
    title: "Coolant",
    description: "Ideal for mixing concentrates to manufacturer specifications.",
    icon: Droplets,
    tier: "primary",
  },
  {
    id: "laboratory",
    title: "Laboratory",
    description: "Reliable purity for rinsing, testing, and analytical prep.",
    icon: FlaskConical,
    tier: "primary",
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    description: "Process water for production lines and quality-sensitive output.",
    icon: Building2,
    tier: "primary",
  },
  {
    id: "industrial",
    title: "Industrial",
    description: "Workshop and plant applications where purity reduces downtime.",
    icon: Wrench,
    tier: "primary",
  },
  {
    id: "autoclaves",
    title: "Autoclaves",
    description: "Supports sterilisation equipment that demands pure feed water.",
    icon: Microscope,
    tier: "secondary",
  },
  {
    id: "fleet",
    title: "Fleet",
    description: "Keep commercial vehicles and equipment running at peak performance.",
    icon: Truck,
    tier: "secondary",
  },
  {
    id: "car-detailing",
    title: "Car Detailing",
    description: "Spot-free rinsing for premium paintwork and glass finishes.",
    icon: CarFront,
    tier: "secondary",
  },
  {
    id: "steam-irons",
    title: "Steam Irons",
    description: "Prevents scale and spotting in garment care applications.",
    icon: Shirt,
    tier: "secondary",
  },
];

export const primaryApplications = productApplications.filter(
  (application) => application.tier === "primary",
);

export const secondaryApplications = productApplications.filter(
  (application) => application.tier === "secondary",
);
