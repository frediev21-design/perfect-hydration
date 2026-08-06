import { SectionHeading } from "@/components/shared/section-heading";
import { Section } from "@/components/shared/section";
import {
  TestimonialGrid,
  TestimonialReviewLinks,
} from "@/features/landing/components/testimonials/testimonial-grid";
import { testimonialsSection } from "@/lib/config/testimonials";

export function Testimonials() {
  return (
    <Section id="testimonials" ariaLabel="Customer testimonials">
      <SectionHeading
        eyebrow={testimonialsSection.eyebrow}
        title={testimonialsSection.title}
        description={testimonialsSection.description}
        align="center"
        className="mx-auto"
      />
      <TestimonialGrid />
      <TestimonialReviewLinks />
    </Section>
  );
}
