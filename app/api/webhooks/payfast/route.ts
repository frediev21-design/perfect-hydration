import { NextResponse } from "next/server";

import {
  buildPayFastParamString,
  validatePayFastItn,
  verifyPayFastSignature,
} from "@/lib/services/payfast.service";
import {
  getOrder,
  updateOrderStatus,
} from "@/lib/services/order-repository.service";

function formDataToRecord(formData: FormData): Record<string, string> {
  const record: Record<string, string> = {};

  formData.forEach((value, key) => {
    record[key] = String(value);
  });

  return record;
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const payload = formDataToRecord(formData);
    const signature = payload.signature;

    if (!signature || !verifyPayFastSignature(payload, signature)) {
      return new NextResponse("Invalid signature", { status: 400 });
    }

    const paramString = buildPayFastParamString(
      Object.fromEntries(
        Object.entries(payload).filter(([key]) => key !== "signature"),
      ),
    );

    const isValid = await validatePayFastItn(paramString);

    if (!isValid) {
      return new NextResponse("ITN validation failed", { status: 400 });
    }

    const orderId = payload.m_payment_id;
    const paymentStatus = payload.payment_status;

    if (!orderId) {
      return new NextResponse("Missing order reference", { status: 400 });
    }

    const order = getOrder(orderId);

    if (!order) {
      return new NextResponse("Order not found", { status: 404 });
    }

    const expectedAmount = order.calculation.total.toFixed(2);
    const receivedAmount = Number.parseFloat(payload.amount_gross ?? "0").toFixed(
      2,
    );

    if (expectedAmount !== receivedAmount) {
      return new NextResponse("Amount mismatch", { status: 400 });
    }

    if (paymentStatus === "COMPLETE") {
      updateOrderStatus(orderId, "paid", payload.pf_payment_id);
    } else if (paymentStatus === "FAILED") {
      updateOrderStatus(orderId, "failed", payload.pf_payment_id);
    }

    return new NextResponse("OK", { status: 200 });
  } catch (error) {
    console.error("PayFast ITN failed:", error);
    return new NextResponse("Server error", { status: 500 });
  }
}
