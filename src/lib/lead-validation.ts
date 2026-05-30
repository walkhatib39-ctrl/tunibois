import { z } from "zod";

const optionalText = (max: number) =>
  z.preprocess((value) => (typeof value === "string" && value.trim() === "" ? undefined : value), z.string().trim().max(max).optional());

const localeSchema = z.enum(["fr", "en", "ar"]).default("fr");

export const quoteRequestSchema = z.object({
  name: z.string().trim().min(2).max(120),
  company: optionalText(160),
  country: z.string().trim().min(2).max(120),
  phone: optionalText(80),
  email: z.string().trim().email().max(160),
  product: z.string().trim().min(2).max(160),
  quantity: optionalText(120),
  message: optionalText(3000),
  sourceLocale: localeSchema,
  sourcePath: optionalText(300),
});

export const sampleRequestSchema = z.object({
  name: z.string().trim().min(2).max(120),
  company: optionalText(160),
  country: z.string().trim().min(2).max(120),
  phone: optionalText(80),
  email: z.string().trim().email().max(160),
  product: z.string().trim().min(2).max(160),
  deliveryAddress: optionalText(1000),
  message: optionalText(3000),
  sourceLocale: localeSchema,
  sourcePath: optionalText(300),
});

export const contactMessageSchema = z.object({
  name: z.string().trim().min(2).max(120),
  company: optionalText(160),
  country: optionalText(120),
  phone: optionalText(80),
  email: z.string().trim().email().max(160),
  subject: optionalText(160),
  message: z.string().trim().min(5).max(3000),
  sourceLocale: localeSchema,
  sourcePath: optionalText(300),
});

export type QuoteRequestInput = z.infer<typeof quoteRequestSchema>;
export type SampleRequestInput = z.infer<typeof sampleRequestSchema>;
export type ContactMessageInput = z.infer<typeof contactMessageSchema>;
