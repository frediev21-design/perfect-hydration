import { SectionHeading } from "@/components/shared/section-heading";
import { Section } from "@/components/shared/section";
import { WhyUsGrid } from "@/features/landing/components/why-us/why-us-grid";
import { whyUsSection } from "@/lib/config/why-us";

export function WhyUs() {
  return (
    <Section id="why" ariaLabel="Why Perfect Hydration">
      <SectionHeading
        eyebrow={whyUsSection.eyebrow}
        title={whyUsSection.title}
        description={whyUsSection.description}
      />
      <WhyUsGrid />
    </Section>
  );
}
