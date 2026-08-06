import { heroProductImage } from "@/lib/config/hero";
import { siteConfig } from "@/lib/config/site";
import type { Product } from "@/types/product";

/**
 * Builds Product JSON-LD for the featured deionised water SKU.
 */
export function buildProductSchema(product: Product) {
  const productUrl = `${siteConfig.url}/products/${product.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: `${siteConfig.url}${heroProductImage.src}`,
    sku: product.id,
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    category: "Automotive Fluids",
    additionalProperty: product.specifications.map((spec) => ({
      "@type": "PropertyValue",
      name: spec.label,
      value: spec.value,
    })),
    offers: {
      "@type": "Offer",
      url: productUrl,
      priceCurrency: product.currency,
      price: product.price.toFixed(2),
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: {
        "@type": "Organization",
        name: siteConfig.name,
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Gauteng",
      },
    },
  };
}
