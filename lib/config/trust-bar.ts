import {
  Building2,
  Cog,
  FlaskConical,
  Truck,
  Wrench,
} from "lucide-react";

import type { TrustIndustry } from "@/types/landing";

export const trustBarConfig = {
  rating: 5,
  headline: "Serving Gauteng Industry",
  subheadline: "Serving workshops, fleets, labs, and industry",
} as const;

export const trustIndustries: TrustIndustry[] = [
  { id: "workshops", label: "Workshops", icon: Wrench },
  { id: "fleet", label: "Fleet", icon: Truck },
  { id: "engineering", label: "Engineering", icon: Cog },
  { id: "laboratory", label: "Laboratory", icon: FlaskConical },
  { id: "manufacturing", label: "Manufacturing", icon: Building2 },
];
