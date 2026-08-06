export interface ComparisonFeature {
  id: string;
  label: string;
  tapWater: string | false;
  perfectHydration: string | true;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  rating: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
