import { SectionHeading } from "@/components/shared/section-heading";
import { Section } from "@/components/shared/section";
import { DeionizedWaterColumns } from "@/features/landing/components/deionized-water/deionized-water-columns";
import { deionizedWaterSection } from "@/lib/config/deionized-water";

export function DeionizedWater() {
  return (
    <Section id="what-is-deionized-water" ariaLabel="What is deionised water">
      <SectionHeading
        eyebrow={deionizedWaterSection.eyebrow}
        title={deionizedWaterSection.title}
        description={deionizedWaterSection.description}
      />
      <DeionizedWaterColumns />
    </Section>
  );
}
