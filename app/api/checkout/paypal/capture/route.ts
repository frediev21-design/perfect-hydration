import { NextResponse } from "next/server";

import { capturePayPalOrder } from "@/lib/services/paypal.service";
import {
  getOrder,
  updateOrderStatus,
} from "@/lib/services/order-repository.service";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { paypalOrderId?: string };

    if (!body.paypalOrderId) {
      return NextResponse.json(
        { error: "PayPal order ID is required" },
        { status: 400 },
      );
    }

    const capture = await capturePayPalOrder(body.paypalOrderId);
    const orderId = capture.referenceId;

    if (!orderId) {
      return NextResponse.json(
        { error: "Unable to resolve order reference" },
        { status: 400 },
      );
    }

    const order = updateOrderStatus(orderId, "paid", capture.captureId);

    if (!order) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    return NextResponse.json({ order });
  } catch (error) {
    console.error("PayPal capture failed:", error);
    return NextResponse.json(
      { error: "Unable to capture PayPal payment" },
      { status: 500 },
    );
  }
}

export async function GET(request: Request) {
  const orderId = new URL(request.url).searchParams.get("orderId");

  if (!orderId) {
    return NextResponse.json({ error: "Order ID is required" }, { status: 400 });
  }

  const order = getOrder(orderId);

  if (!order) {
    return NextResponse.json({ error: "Order not found" }, { status: 404 });
  }

  return NextResponse.json({ order });
}
