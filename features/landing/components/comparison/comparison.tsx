import { Section } from "@/components/shared/section";
import { ComparisonInfographic } from "@/features/landing/components/comparison/comparison-infographic";

export function Comparison() {
  return (
    <Section id="comparison" ariaLabel="Product comparison">
      <ComparisonInfographic />
    </Section>
  );
}
