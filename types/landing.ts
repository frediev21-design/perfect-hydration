import type { LucideIcon } from "lucide-react";

export interface TrustIndustry {
  id: string;
  label: string;
  icon: LucideIcon;
}

export interface WhyUsFeature {
  id: string;
  title: string;
  description: string;
  highlight?: string;
  icon: LucideIcon;
}
