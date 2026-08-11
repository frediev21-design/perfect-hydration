import { Applications } from "@/features/landing/components/applications/applications";
import { BusinessSupply } from "@/features/landing/components/business-supply/business-supply";
import { Comparison } from "@/features/landing/components/comparison/comparison";
import { DeionizedWater } from "@/features/landing/components/deionized-water/deionized-water";
import { Delivery } from "@/features/landing/components/delivery/delivery";
import { Faq } from "@/features/landing/components/faq/faq";
import { FinalCta } from "@/features/landing/components/final-cta/final-cta";
import { Hero } from "@/features/landing/components/hero/hero";
import { OriginBlock } from "@/features/landing/components/origin/origin-block";
import { PricingSection } from "@/features/landing/components/pricing/pricing-section";
import { ProductShowcase } from "@/features/landing/components/product-showcase/product-showcase";
import { Specifications } from "@/features/landing/components/specifications/specifications";
import { Testimonials } from "@/features/landing/components/testimonials/testimonials";
import { TrustBar } from "@/features/landing/components/trust-bar/trust-bar";
import { WhyUs } from "@/features/landing/components/why-us/why-us";
import { buildBreadcrumbSchema } from "@/lib/seo/breadcrumb-schema";
import { JsonLd } from "@/lib/seo/json-ld";
import { buildOrganizationSchema } from "@/lib/seo/organization-schema";
import { buildProductSchema } from "@/lib/seo/product-schema";
import { getFeaturedProduct } from "@/lib/services/product.service";
import { buildWhatsAppOrderUrl } from "@/lib/utils/whatsapp";

export default async function HomePage() {
  const product = await getFeaturedProduct();
  const whatsappUrl = buildWhatsAppOrderUrl();
  const productSchema = buildProductSchema(product);
  const organizationSchema = buildOrganizationSchema();
  const breadcrumbSchema = buildBreadcrumbSchema();

  return (
    <main id="main-content" className="relative flex-1" tabIndex={-1}>
      <JsonLd
        data={[productSchema, organizationSchema, breadcrumbSchema]}
      />
      <Hero whatsappUrl={whatsappUrl} />
      <TrustBar />
      <DeionizedWater />
      <Applications />
      <Comparison />
      <BusinessSupply />
      <PricingSection />
      <OriginBlock />
      <Specifications product={product} />
      <ProductShowcase />
      <WhyUs />
      <Testimonials />
      <Delivery />
      <Faq />
      <FinalCta whatsappUrl={whatsappUrl} />
    </main>
  );
}
