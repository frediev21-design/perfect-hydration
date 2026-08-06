export interface ProductSpecification {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  grade: string;
  volumeLitres: number;
  price: number;
  currency: "ZAR";
  description: string;
  applications: string[];
  specifications: ProductSpecification[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}
