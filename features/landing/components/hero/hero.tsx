import { Container } from "@/components/shared/container";
import { HeroBackground } from "@/features/landing/components/hero/hero-background";
import { HeroContent } from "@/features/landing/components/hero/hero-content";
import { HeroVisual } from "@/features/landing/components/hero/hero-visual";
import type { Product } from "@/types/product";

interface HeroProps {
  product: Product;
  whatsappUrl: string;
}

export function Hero({ product, whatsappUrl }: HeroProps) {
  return (
    <section
      id="hero"
      aria-label="Ultra Pure Deionised Water"
      className="relative min-h-[calc(100svh-4.5rem)] overflow-hidden"
    >
      <HeroBackground />

      <Container className="relative grid min-h-[calc(100svh-4.5rem)] items-center gap-12 py-12 lg:grid-cols-2 lg:gap-16 lg:py-16">
        <HeroContent product={product} whatsappUrl={whatsappUrl} />
        <HeroVisual />
      </Container>
    </section>
  );
}
