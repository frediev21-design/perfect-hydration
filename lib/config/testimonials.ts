import type { Testimonial } from "@/types/content";

export const testimonialsSection = {
  eyebrow: "Testimonials",
  title: "Trusted by Gauteng Workshops",
  description:
    "Feedback from auto workshops, fleets, laboratories, and industrial buyers who rely on measured purity — not tap water.",
  verificationNote:
    "Customer feedback shown below. Verify testimonials with our team before using in marketing materials.",
  bobshopSellerRating: "98.59% positive seller rating on Bobshop",
  reviewLinks: [
    {
      id: "facebook",
      label: "Follow on Facebook",
      href: "https://www.facebook.com/perfecthydration",
    },
    {
      id: "bobshop",
      label: "View on Bobshop",
      href: "https://www.bobshop.co.za/perfect-hydration-5l-automotive-grade-deionized-water-ultra-pure-battery-radiator-coolant-wat/p/690408606",
    },
  ],
} as const;

export const testimonials: Testimonial[] = [
  {
    id: "workshop-pretoria",
    name: "Johan Meyer",
    businessName: "Meyer Auto Works",
    role: "Workshop Owner",
    suburb: "Pretoria East",
    location: "Pretoria",
    quote:
      "We use Perfect Hydration for battery top-ups and radiator refills every week. Conductivity is consistent and delivery is reliable — exactly what a busy workshop needs.",
    rating: 5,
    source: "direct",
  },
  {
    id: "fleet-midrand",
    name: "Thabo Nkosi",
    businessName: "Nkosi Fleet Services",
    role: "Fleet Manager",
    suburb: "Midrand",
    location: "Midrand",
    quote:
      "Our maintenance team orders in bulk via WhatsApp. Free delivery on 6+ bottles saves us on every run, and the water quality holds up batch after batch.",
    rating: 5,
    source: "direct",
  },
  {
    id: "lab-johannesburg",
    name: "Dr. Sarah Khumalo",
    businessName: "Johannesburg Analytical Lab",
    role: "Laboratory Technician",
    suburb: "Sandton",
    location: "Johannesburg",
    quote:
      "Conductivity readings are consistently within spec. Having a reliable local Pretoria supplier for deionised water makes our prep work much easier.",
    rating: 5,
    source: "direct",
  },
  {
    id: "detailing-centurion",
    name: "Mike Roberts",
    businessName: "Roberts Detailing Studio",
    role: "Studio Owner",
    suburb: "Centurion",
    location: "Centurion",
    quote:
      "Spot-free rinsing makes a visible difference on premium finishes. Perfect Hydration is now our go-to for final rinse water on detail jobs.",
    rating: 5,
    source: "direct",
  },
  {
    id: "industrial-east-rand",
    name: "Linda Pillay",
    businessName: "East Rand Manufacturing",
    role: "Production Supervisor",
    suburb: "Boksburg",
    location: "East Rand",
    quote:
      "We switched from inconsistent tap water treatment to Perfect Hydration for a critical rinse stage. Scale-related downtime dropped noticeably.",
    rating: 5,
    source: "bobshop",
  },
];
