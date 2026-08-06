"use client";

import { useState } from "react";

import { CheckoutForm } from "@/features/checkout/components/checkout-form";
import { CheckoutSummary } from "@/features/checkout/components/checkout-summary";

interface CheckoutViewProps {
  initialQuantity: number;
}

export function CheckoutView({ initialQuantity }: CheckoutViewProps) {
  const [quantity, setQuantity] = useState(initialQuantity);

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
      <CheckoutForm
        initialQuantity={initialQuantity}
        onQuantityChange={setQuantity}
      />
      <CheckoutSummary quantity={quantity} />
    </div>
  );
}
