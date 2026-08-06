import { SectionHeading } from "@/components/shared/section-heading";
import { Section } from "@/components/shared/section";
import { DeliveryAreas } from "@/features/landing/components/delivery/delivery-areas";
import { DeliveryMap } from "@/features/landing/components/delivery/delivery-map";
import { deliverySection } from "@/lib/config/delivery";

export function Delivery() {
  return (
    <Section id="delivery" ariaLabel="Delivery areas">
      <SectionHeading
        eyebrow={deliverySection.eyebrow}
        title={deliverySection.title}
        description={deliverySection.description}
        align="center"
        className="mx-auto"
      />
      <div className="mt-12">
        <DeliveryMap />
        <DeliveryAreas />
      </div>
    </Section>
  );
}
