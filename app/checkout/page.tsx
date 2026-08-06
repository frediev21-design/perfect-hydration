import { Container } from "@/components/shared/container";
import { CheckoutView } from "@/features/checkout/components/checkout-view";
import { checkoutSection } from "@/lib/config/checkout";
import { calculatorLimits } from "@/lib/config/pricing";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata = createMetadata({
  title: "Secure Checkout | Gauteng Delivery",
  description: checkoutSection.description,
  path: "/checkout",
});

interface CheckoutPageProps {
  searchParams: Promise<{ qty?: string }>;
}

function parseInitialQuantity(qty?: string): number {
  const parsed = Number.parseInt(qty ?? "6", 10);

  if (Number.isNaN(parsed)) {
    return 6;
  }

  return Math.min(
    calculatorLimits.max,
    Math.max(calculatorLimits.min, parsed),
  );
}

export default async function CheckoutPage({ searchParams }: CheckoutPageProps) {
  const params = await searchParams;
  const initialQuantity = parseInitialQuantity(params.qty);

  return (
    <main id="main-content" className="min-h-screen flex-1 py-16 sm:py-20" tabIndex={-1}>
      <Container>
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-accent">
            Checkout
          </p>
          <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {checkoutSection.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            {checkoutSection.description}
          </p>

          <div className="mt-10">
            <CheckoutView initialQuantity={initialQuantity} />
          </div>
        </div>
      </Container>
    </main>
  );
}
