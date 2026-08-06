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

export interface ProductApplication {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  tier: "primary" | "secondary";
}

export interface DeionizedWaterUseCase {
  id: string;
  title: string;
  description?: string;
  icon: LucideIcon;
  featured?: boolean;
}
