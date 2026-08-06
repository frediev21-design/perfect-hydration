import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.url(),
  NEXT_PUBLIC_WHATSAPP_NUMBER: z.string().min(10),
  NEXT_PUBLIC_PHONE_DISPLAY: z.string().min(1),
  NEXT_PUBLIC_PHONE_TEL: z.string().min(1),
  NEXT_PUBLIC_CONTACT_EMAIL: z.email(),
  NEXT_PUBLIC_VAT_RATE: z.coerce.number().min(0).max(1),
  NEXT_PUBLIC_FREE_DELIVERY_THRESHOLD: z.coerce.number().int().positive(),
  NEXT_PUBLIC_DELIVERY_FEE: z.coerce.number().min(0),
  NEXT_PUBLIC_GA_MEASUREMENT_ID: z.string().optional(),
  NEXT_PUBLIC_META_PIXEL_ID: z.string().optional(),
  NEXT_PUBLIC_GTM_ID: z.string().optional(),
});

export type Env = z.infer<typeof envSchema>;

/**
 * Validates and exposes public environment variables.
 * Throws at build/runtime when required values are invalid.
 */
export function getEnv(): Env {
  const parsed = envSchema.safeParse({
    NEXT_PUBLIC_SITE_URL:
      process.env.NEXT_PUBLIC_SITE_URL ??
      "https://www.perfecthydration.co.za",
    NEXT_PUBLIC_WHATSAPP_NUMBER:
      process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "27648848483",
    NEXT_PUBLIC_PHONE_DISPLAY:
      process.env.NEXT_PUBLIC_PHONE_DISPLAY ?? "064 884 8483",
    NEXT_PUBLIC_PHONE_TEL:
      process.env.NEXT_PUBLIC_PHONE_TEL ?? "+27648848483",
    NEXT_PUBLIC_CONTACT_EMAIL:
      process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "info@perfecthydration.co.za",
    NEXT_PUBLIC_VAT_RATE: process.env.NEXT_PUBLIC_VAT_RATE ?? "0.15",
    NEXT_PUBLIC_FREE_DELIVERY_THRESHOLD:
      process.env.NEXT_PUBLIC_FREE_DELIVERY_THRESHOLD ?? "6",
    NEXT_PUBLIC_DELIVERY_FEE: process.env.NEXT_PUBLIC_DELIVERY_FEE ?? "80",
    NEXT_PUBLIC_GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
    NEXT_PUBLIC_META_PIXEL_ID: process.env.NEXT_PUBLIC_META_PIXEL_ID,
    NEXT_PUBLIC_GTM_ID: process.env.NEXT_PUBLIC_GTM_ID,
  });

  if (!parsed.success) {
    console.error(
      "Invalid environment variables:",
      parsed.error.flatten().fieldErrors,
    );
    throw new Error("Invalid environment variables");
  }

  return parsed.data;
}

export const env = getEnv();
