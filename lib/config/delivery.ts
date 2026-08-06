import type { DeliveryArea } from "@/types/content";

export const deliverySection = {
  eyebrow: "Delivery",
  title: "Gauteng-Wide Coverage",
  description:
    "Fast, reliable delivery to homes, workshops, fleets, and industrial sites across the province. Not sure about your area? Message us on WhatsApp.",
  mapLabel: "Delivery coverage map",
  coverageNote:
    "Serving major hubs and surrounding suburbs across Gauteng. Contact us for areas outside the map.",
  bobshopTitle: "Outside Gauteng?",
  bobshopNote:
    "Also available on Bobshop with delivery nationwide across South Africa.",
  bobshopLabel: "Order on Bobshop",
} as const;

export const deliveryAreas: DeliveryArea[] = [
  {
    id: "pretoria",
    name: "Pretoria",
    description: "Pretoria CBD, Menlyn, Brooklyn, and northern suburbs.",
    mapX: 52,
    mapY: 22,
  },
  {
    id: "centurion",
    name: "Centurion",
    description: "Centurion, Irene, Highveld, and surrounding business parks.",
    mapX: 50,
    mapY: 36,
  },
  {
    id: "midrand",
    name: "Midrand",
    description: "Midrand, Halfway House, Kyalami, and Waterfall.",
    mapX: 48,
    mapY: 48,
  },
  {
    id: "johannesburg",
    name: "Johannesburg",
    description: "Sandton, Rosebank, Randburg, and inner-city areas.",
    mapX: 46,
    mapY: 58,
  },
  {
    id: "east-rand",
    name: "East Rand",
    description: "Boksburg, Benoni, Kempton Park, and Germiston.",
    mapX: 68,
    mapY: 62,
  },
  {
    id: "west-rand",
    name: "West Rand",
    description: "Roodepoort, Krugersdorp, and western industrial zones.",
    mapX: 28,
    mapY: 60,
  },
];
