import {
  Building2,
  Cog,
  FlaskConical,
  Truck,
  Wrench,
} from "lucide-react";

import type { TrustIndustry } from "@/types/landing";

export const trustBarConfig = {
  headline: "Consistently Tested · Pretoria Bottling",
  subheadline: "Same-week Gauteng delivery · Nationwide via Bobshop",
} as const;

export const trustIndustries: TrustIndustry[] = [
  { id: "workshops", label: "Workshops", icon: Wrench },
  { id: "fleet", label: "Fleet", icon: Truck },
  { id: "engineering", label: "Engineering", icon: Cog },
  { id: "laboratory", label: "Laboratory", icon: FlaskConical },
  { id: "manufacturing", label: "Manufacturing", icon: Building2 },
];
