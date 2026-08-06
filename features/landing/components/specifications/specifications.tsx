import { SectionHeading } from "@/components/shared/section-heading";
import { Section } from "@/components/shared/section";
import { SpecificationCard } from "@/features/landing/components/specifications/specification-card";
import { specificationsSection } from "@/lib/config/specifications";
import type { Product } from "@/types/product";

interface SpecificationsProps {
  product: Product;
}

export function Specifications({ product }: SpecificationsProps) {
  return (
    <Section id="specifications" ariaLabel="Product specifications">
      <SectionHeading
        eyebrow={specificationsSection.eyebrow}
        title={specificationsSection.title}
        description={specificationsSection.description}
      />
      <SpecificationCard
        specifications={product.specifications}
        volumeLitres={product.volumeLitres}
      />
    </Section>
  );
}
