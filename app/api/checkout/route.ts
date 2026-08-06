import { NextResponse } from "next/server";

import {
  isPayFastConfigured,
  isPayPalConfigured,
} from "@/lib/config/server-env";
import { initiateCheckoutPayment } from "@/lib/services/checkout.service";
import { checkoutFormSchema } from "@/lib/validations/checkout";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = checkoutFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Invalid checkout details",
          details: parsed.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    if (parsed.data.provider === "payfast" && !isPayFastConfigured()) {
      return NextResponse.json(
        { error: "PayFast is not configured" },
        { status: 503 },
      );
    }

    if (parsed.data.provider === "paypal" && !isPayPalConfigured()) {
      return NextResponse.json(
        { error: "PayPal is not configured" },
        { status: 503 },
      );
    }

    const result = await initiateCheckoutPayment(parsed.data);

    return NextResponse.json(result);
  } catch (error) {
    console.error("Checkout initiation failed:", error);
    return NextResponse.json(
      { error: "Unable to start checkout. Please try again." },
      { status: 500 },
    );
  }
}

export async function GET() {
  return NextResponse.json({
    payfast: isPayFastConfigured(),
    paypal: isPayPalConfigured(),
  });
}
