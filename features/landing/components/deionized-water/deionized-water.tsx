import { SectionHeading } from "@/components/shared/section-heading";
import { Section } from "@/components/shared/section";
import { DeionizedWaterContent } from "@/features/landing/components/deionized-water/deionized-water-content";
import { deionizedWaterSection } from "@/lib/config/deionized-water";

export function DeionizedWater() {
  return (
    <Section id="what-is-deionized-water" ariaLabel="Water engineered for equipment">
      <SectionHeading
        eyebrow={deionizedWaterSection.eyebrow}
        title={deionizedWaterSection.title}
      />
      <DeionizedWaterContent />
    </Section>
  );
}
