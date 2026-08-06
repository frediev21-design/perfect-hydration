"use client";

import { FeatureCard } from "@/features/landing/components/why-us/feature-card";
import { whyUsFeatures } from "@/lib/config/why-us";

export function WhyUsGrid() {
  return (
    <div className="mt-14 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-6">
      {whyUsFeatures.map((feature, index) => (
        <FeatureCard
          key={feature.id}
          title={feature.title}
          description={feature.description}
          highlight={feature.highlight}
          icon={feature.icon}
          index={index}
        />
      ))}
    </div>
  );
}
