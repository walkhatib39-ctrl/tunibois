import { z } from "zod";

const configSchema = z.object({
  DATABASE_URL: z.string().min(1),
  NEXT_PUBLIC_SITE_URL: z.string().url().default("http://localhost:3000"),
  MAIL_HOST: z.string().min(1).default("localhost"),
  MAIL_PORT: z.coerce.number().int().positive().default(1025),
  MAIL_USER: z.string().optional().default(""),
  MAIL_PASSWORD: z.string().optional().default(""),
  MAIL_FROM: z.string().min(1).default("Tunibois <devis@tunibois.tn>"),
  LEADS_TO_EMAIL: z.string().email().default("devis@tunibois.tn"),
});

export const appConfig = configSchema.parse({
  DATABASE_URL: process.env.DATABASE_URL,
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  MAIL_HOST: process.env.MAIL_HOST,
  MAIL_PORT: process.env.MAIL_PORT,
  MAIL_USER: process.env.MAIL_USER,
  MAIL_PASSWORD: process.env.MAIL_PASSWORD,
  MAIL_FROM: process.env.MAIL_FROM,
  LEADS_TO_EMAIL: process.env.LEADS_TO_EMAIL,
});
