import { SectionHeading } from "@/components/shared/section-heading";
import { Section } from "@/components/shared/section";
import { ComparisonTable } from "@/features/landing/components/comparison/comparison-table";
import { comparisonSection } from "@/lib/config/comparison";

export function Comparison() {
  return (
    <Section id="comparison" ariaLabel="Product comparison">
      <SectionHeading
        eyebrow={comparisonSection.eyebrow}
        title={comparisonSection.title}
        description={comparisonSection.description}
      />
      <ComparisonTable />
    </Section>
  );
}
