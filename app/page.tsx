import { Applications } from "@/features/landing/components/applications/applications";
import { Comparison } from "@/features/landing/components/comparison/comparison";
import { Faq } from "@/features/landing/components/faq/faq";
import { Hero } from "@/features/landing/components/hero/hero";
import { PricingSection } from "@/features/landing/components/pricing/pricing-section";
import { ProductShowcase } from "@/features/landing/components/product-showcase/product-showcase";
import { Specifications } from "@/features/landing/components/specifications/specifications";
import { Testimonials } from "@/features/landing/components/testimonials/testimonials";
import { TrustBar } from "@/features/landing/components/trust-bar/trust-bar";
import { WhyUs } from "@/features/landing/components/why-us/why-us";
import { getFeaturedProduct } from "@/lib/services/product.service";
import { buildWhatsAppOrderUrl } from "@/lib/utils/whatsapp";

export default async function HomePage() {
  const product = await getFeaturedProduct();
  const whatsappUrl = buildWhatsAppOrderUrl();

  return (
    <main id="main-content" className="relative flex-1" tabIndex={-1}>
      <Hero product={product} whatsappUrl={whatsappUrl} />
      <TrustBar />
      <WhyUs />
      <Applications />
      <ProductShowcase />
      <Specifications product={product} />
      <PricingSection unitPrice={product.price} />
      <Comparison />
      <Testimonials />
      <Faq />
    </main>
  );
}
