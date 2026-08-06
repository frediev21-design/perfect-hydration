import { SectionHeading } from "@/components/shared/section-heading";
import { Section } from "@/components/shared/section";
import { FaqAccordion } from "@/features/landing/components/faq/faq-accordion";
import { faqItems, faqSection } from "@/lib/config/faq";
import { buildFaqSchema } from "@/lib/seo/faq-schema";

export function Faq() {
  const faqSchema = buildFaqSchema(faqItems);

  return (
    <Section id="faq" ariaLabel="Frequently asked questions">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <SectionHeading
        eyebrow={faqSection.eyebrow}
        title={faqSection.title}
        description={faqSection.description}
        align="center"
        className="mx-auto"
      />
      <FaqAccordion />
    </Section>
  );
}
