import { Hero } from "@/features/landing/components/hero/hero";
import { getFeaturedProduct } from "@/lib/services/product.service";
import { buildWhatsAppOrderUrl } from "@/lib/utils/whatsapp";

export default async function HomePage() {
  const product = await getFeaturedProduct();
  const whatsappUrl = buildWhatsAppOrderUrl();

  return (
    <main id="main-content" className="relative flex-1" tabIndex={-1}>
      <Hero product={product} whatsappUrl={whatsappUrl} />
    </main>
  );
}
