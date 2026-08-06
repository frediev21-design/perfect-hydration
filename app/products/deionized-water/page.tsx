import { createMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/lib/seo/json-ld";
import { buildProductSchema } from "@/lib/seo/product-schema";
import { getProductBySlug } from "@/lib/services/product.service";
import { notFound } from "next/navigation";

import { Container } from "@/components/shared/container";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return createMetadata({ title: "Product Not Found", noIndex: true });
  }

  return createMetadata({
    title: product.seo.title,
    description: product.seo.description,
    path: `/products/${product.slug}`,
  });
}

export default async function DeionizedWaterPage() {
  const product = await getProductBySlug("deionized-water");

  if (!product) {
    notFound();
  }

  return (
    <main id="main-content" className="min-h-screen flex-1 py-24" tabIndex={-1}>
      <JsonLd data={buildProductSchema(product)} />
      <Container>
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-accent">
          {product.grade}
        </p>
        <h1 className="mt-4 font-heading text-5xl text-white">{product.name}</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          {product.description}
        </p>
      </Container>
    </main>
  );
}
