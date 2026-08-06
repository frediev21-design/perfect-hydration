import { SectionHeading } from "@/components/shared/section-heading";
import { Section } from "@/components/shared/section";
import { ApplicationsGrid } from "@/features/landing/components/applications/applications-grid";
import { applicationsSection } from "@/lib/config/applications";

export function Applications() {
  return (
    <Section id="applications" ariaLabel="Product applications">
      <SectionHeading
        eyebrow={applicationsSection.eyebrow}
        title={applicationsSection.title}
        description={applicationsSection.description}
      />
      <ApplicationsGrid />
    </Section>
  );
}
