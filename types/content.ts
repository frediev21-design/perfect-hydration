export interface ComparisonFeature {
  id: string;
  label: string;
  tapWater: string;
  perfectHydration: string;
}

export interface Testimonial {
  id: string;
  name: string;
  businessName: string;
  role: string;
  suburb: string;
  location: string;
  quote: string;
  rating: number;
  source: "direct" | "bobshop";
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface DeliveryArea {
  id: string;
  name: string;
  description: string;
  /** Horizontal position on the map SVG (0–100). */
  mapX: number;
  /** Vertical position on the map SVG (0–100). */
  mapY: number;
}
