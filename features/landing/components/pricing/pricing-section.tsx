import { Section } from "@/components/shared/section";
import { BulkCalculator } from "@/features/landing/components/pricing/bulk-calculator";
import { PricingTiers } from "@/features/landing/components/pricing/pricing-tiers";
import { pricingSection } from "@/lib/config/pricing";
import { siteConfig } from "@/lib/config/site";

export function PricingSection() {
  const { vatRate, deliveryFee, freeDeliveryThreshold } = siteConfig.commerce;

  return (
    <Section id="pricing" ariaLabel="Pricing and bulk calculator">
      <PricingTiers />

      <div className="mx-auto mt-20 max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-accent">
          {pricingSection.eyebrow}
        </p>
        <h3 className="mt-4 font-heading text-3xl tracking-tight text-white sm:text-4xl lg:text-5xl">
          {pricingSection.title}
        </h3>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          {pricingSection.description}
        </p>
      </div>

      <BulkCalculator
        vatRate={vatRate}
        deliveryFee={deliveryFee}
        freeDeliveryThreshold={freeDeliveryThreshold}
      />
    </Section>
  );
}
