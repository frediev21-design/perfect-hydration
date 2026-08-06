import { SectionHeading } from "@/components/shared/section-heading";
import { Section } from "@/components/shared/section";
import { AnimatedPrice } from "@/features/landing/components/pricing/animated-price";
import { BulkCalculator } from "@/features/landing/components/pricing/bulk-calculator";
import { pricingSection } from "@/lib/config/pricing";
import { siteConfig } from "@/lib/config/site";

interface PricingSectionProps {
  unitPrice: number;
}

export function PricingSection({ unitPrice }: PricingSectionProps) {
  const { vatRate, deliveryFee, freeDeliveryThreshold } = siteConfig.commerce;

  return (
    <Section id="pricing" ariaLabel="Pricing and bulk calculator">
      <SectionHeading
        eyebrow={pricingSection.eyebrow}
        title={pricingSection.title}
        description={pricingSection.description}
        align="center"
        className="mx-auto"
      />

      <AnimatedPrice
        price={unitPrice}
        label={pricingSection.priceLabel}
        suffix={pricingSection.priceSuffix}
      />

      <BulkCalculator
        unitPrice={unitPrice}
        vatRate={vatRate}
        deliveryFee={deliveryFee}
        freeDeliveryThreshold={freeDeliveryThreshold}
      />
    </Section>
  );
}
