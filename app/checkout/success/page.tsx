import { CheckoutSuccessClient } from "@/features/checkout/components/checkout-success-client";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata = createMetadata({
  title: "Order Confirmed",
  description: "Your Perfect Hydration order has been received.",
  path: "/checkout/success",
});

interface CheckoutSuccessPageProps {
  searchParams: Promise<{ provider?: string; token?: string }>;
}

export default async function CheckoutSuccessPage({
  searchParams,
}: CheckoutSuccessPageProps) {
  const params = await searchParams;

  return (
    <CheckoutSuccessClient provider={params.provider} token={params.token} />
  );
}
