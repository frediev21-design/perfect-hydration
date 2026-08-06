import { SectionHeading } from "@/components/shared/section-heading";
import { Section } from "@/components/shared/section";
import { TestimonialCarousel } from "@/features/landing/components/testimonials/testimonial-carousel";
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
      <TestimonialCarousel />
    </Section>
  );
}
