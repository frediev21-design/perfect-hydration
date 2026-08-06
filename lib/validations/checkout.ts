import { z } from "zod";

import { calculatorLimits } from "@/lib/config/pricing";

export const checkoutFormSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(80),
  lastName: z.string().trim().min(1, "Last name is required").max(80),
  email: z.email("Enter a valid email address"),
  phone: z
    .string()
    .trim()
    .min(10, "Enter a valid phone number")
    .max(20)
    .regex(/^[\d+\s()-]+$/, "Enter a valid phone number"),
  deliveryAddress: z
    .string()
    .trim()
    .min(10, "Enter your full delivery address in Gauteng")
    .max(500),
  quantity: z
    .number()
    .int()
    .min(calculatorLimits.min)
    .max(calculatorLimits.max),
  provider: z.enum(["payfast", "paypal"]),
});

export type CheckoutFormValues = z.infer<typeof checkoutFormSchema>;
