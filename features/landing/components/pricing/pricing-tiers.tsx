import {
  bulkPricingSection,
  pricingTiers,
} from "@/lib/config/pricing-tiers";
import { PricingTierCard } from "@/features/landing/components/pricing/pricing-tier-card";

export function PricingTiers() {
  return (
    <div>
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-accent">
          {bulkPricingSection.eyebrow}
        </p>
        <h2 className="mt-4 font-heading text-4xl tracking-tight text-white sm:text-5xl lg:text-6xl">
          {bulkPricingSection.titleLead}{" "}
          <span className="text-gradient-accent">
            {bulkPricingSection.titleAccent}
          </span>
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          {bulkPricingSection.description}
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {pricingTiers.map((tier, index) => (
          <PricingTierCard key={tier.id} tier={tier} index={index} />
        ))}
      </div>
    </div>
  );
}
