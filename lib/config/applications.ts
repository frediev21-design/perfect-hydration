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
} as const;

export const productApplications: ProductApplication[] = [
  {
    id: "battery",
    title: "Battery",
    description: "Top-up lead-acid and auxiliary batteries without mineral buildup.",
    icon: Battery,
  },
  {
    id: "radiator",
    title: "Radiator",
    description: "Safe for cooling systems that require low-mineral water.",
    icon: Thermometer,
  },
  {
    id: "coolant",
    title: "Coolant",
    description: "Ideal for mixing concentrates to manufacturer specifications.",
    icon: Droplets,
  },
  {
    id: "autoclaves",
    title: "Autoclaves",
    description: "Supports sterilisation equipment that demands pure feed water.",
    icon: Microscope,
  },
  {
    id: "steam-irons",
    title: "Steam Irons",
    description: "Prevents scale and spotting in garment care applications.",
    icon: Shirt,
  },
  {
    id: "laboratory",
    title: "Laboratory",
    description: "Reliable purity for rinsing, testing, and analytical prep.",
    icon: FlaskConical,
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    description: "Process water for production lines and quality-sensitive output.",
    icon: Building2,
  },
  {
    id: "fleet",
    title: "Fleet",
    description: "Keep commercial vehicles and equipment running at peak performance.",
    icon: Truck,
  },
  {
    id: "car-detailing",
    title: "Car Detailing",
    description: "Spot-free rinsing for premium paintwork and glass finishes.",
    icon: CarFront,
  },
  {
    id: "industrial",
    title: "Industrial",
    description: "Workshop and plant applications where purity reduces downtime.",
    icon: Wrench,
  },
];
