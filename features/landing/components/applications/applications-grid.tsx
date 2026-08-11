"use client";

import {
  Cog,
  Factory,
  FlaskConical,
  Sparkles,
  Truck,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

import { ApplicationIconCard } from "@/features/landing/components/applications/application-icon-card";
import { applicationCategories } from "@/lib/config/applications";
import type { ApplicationIconKey } from "@/types/landing";

const applicationIcons: Record<ApplicationIconKey, LucideIcon> = {
  wrench: Wrench,
  truck: Truck,
  flask: FlaskConical,
  factory: Factory,
  sparkles: Sparkles,
  cog: Cog,
  zap: Zap,
};

export function ApplicationsGrid() {
  return (
    <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
      {applicationCategories.map((application, index) => (
        <ApplicationIconCard
          key={application.id}
          title={application.title}
          description={application.description}
          icon={applicationIcons[application.icon]}
          index={index}
        />
      ))}
    </div>
  );
}
