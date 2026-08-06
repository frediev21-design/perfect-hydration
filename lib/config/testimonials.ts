import type { Testimonial } from "@/types/content";

export const testimonialsSection = {
  eyebrow: "Testimonials",
  title: "What Our Customers Say",
  description:
    "Workshops, fleets, laboratories, and businesses rely on Perfect Hydration for consistent ultra pure water.",
} as const;

export const testimonials: Testimonial[] = [
  {
    id: "workshop-pretoria",
    name: "Johan M.",
    role: "Auto Workshop Owner",
    location: "Pretoria",
    quote:
      "We use Perfect Hydration for battery top-ups and radiator refills every week. Consistent quality and fast delivery — exactly what a busy workshop needs.",
    rating: 5,
  },
  {
    id: "fleet-midrand",
    name: "Thabo N.",
    role: "Fleet Manager",
    location: "Midrand",
    quote:
      "Our fleet maintenance team orders in bulk. The WhatsApp ordering is quick, and free delivery on 6+ bottles saves us on every run.",
    rating: 5,
  },
  {
    id: "lab-johannesburg",
    name: "Dr. Sarah K.",
    role: "Laboratory Technician",
    location: "Johannesburg",
    quote:
      "Conductivity readings are consistently within spec. Having a reliable local supplier for deionized water makes our prep work much easier.",
    rating: 5,
  },
  {
    id: "detailing-centurion",
    name: "Mike R.",
    role: "Detailing Studio",
    location: "Centurion",
    quote:
      "Spot-free rinsing makes a visible difference on premium finishes. Perfect Hydration is now our go-to for final rinse water.",
    rating: 5,
  },
  {
    id: "industrial-east-rand",
    name: "Linda P.",
    role: "Production Supervisor",
    location: "East Rand",
    quote:
      "We switched from inconsistent tap water treatment to Perfect Hydration bottles for a critical rinse stage. Downtime from scale issues dropped noticeably.",
    rating: 5,
  },
];
