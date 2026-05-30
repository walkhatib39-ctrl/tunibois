"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { z } from "zod";
import type { Locale } from "@/lib/locales";
import { Button } from "@/components/ui/button";

type LeadMode = "quote" | "sample" | "contact";

const labels: Record<Locale, Record<string, string>> = {
  fr: {
    name: "Nom",
    company: "Société",
    country: "Pays",
    phone: "Téléphone",
    email: "Email",
    product: "Produit recherché",
    quantity: "Quantité",
    subject: "Sujet",
    message: "Message",
    deliveryAddress: "Adresse de livraison échantillon",
    submit: "Envoyer la demande",
    success: "Votre demande a bien été envoyée.",
    error: "Impossible d'envoyer la demande. Merci de réessayer.",
  },
  en: {
    name: "Name",
    company: "Company",
    country: "Country",
    phone: "Phone",
    email: "Email",
    product: "Requested product",
    quantity: "Quantity",
    subject: "Subject",
    message: "Message",
    deliveryAddress: "Sample delivery address",
    submit: "Send request",
    success: "Your request has been sent.",
    error: "The request could not be sent. Please try again.",
  },
  ar: {
    name: "الاسم",
    company: "الشركة",
    country: "البلد",
    phone: "الهاتف",
    email: "البريد الإلكتروني",
    product: "المنتج المطلوب",
    quantity: "الكمية",
    subject: "الموضوع",
    message: "الرسالة",
    deliveryAddress: "عنوان تسليم العينة",
    submit: "إرسال الطلب",
    success: "تم إرسال طلبك بنجاح.",
    error: "تعذر إرسال الطلب. الرجاء المحاولة مرة أخرى.",
  },
};

const baseSchema = z.object({
  name: z.string().trim().min(2).max(120),
  company: z.string().trim().max(160).optional(),
  country: z.string().trim().min(2).max(120),
  phone: z.string().trim().max(80).optional(),
  email: z.string().trim().email().max(160),
  product: z.string().trim().max(160).optional(),
  quantity: z.string().trim().max(120).optional(),
  subject: z.string().trim().max(160).optional(),
  deliveryAddress: z.string().trim().max(1000).optional(),
  message: z.string().trim().min(5).max(3000),
});

type LeadFormValues = z.infer<typeof baseSchema>;

type LeadFormProps = {
  mode: LeadMode;
  locale: Locale;
  product?: string;
  sourcePath: string;
};

export function LeadForm({ mode, locale, product, sourcePath }: LeadFormProps) {
  const t = labels[locale];
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const endpoint = `/api/leads/${mode}`;
  const showProduct = mode !== "contact";
  const showSampleAddress = mode === "sample";
  const schema = useMemo(() => baseSchema, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      product: product ?? "",
      message: "",
    },
  });

  async function onSubmit(values: LeadFormValues) {
    setStatus("idle");
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...values, sourceLocale: locale, sourcePath }),
    });

    if (!response.ok) {
      setStatus("error");
      return;
    }

    setStatus("success");
    reset({ product: product ?? "", message: "" });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 rounded-lg border border-line bg-surface p-5 shadow-sm">
      <div className="grid gap-4 md:grid-cols-2">
        <Field label={t.name} error={errors.name?.message}>
          <input {...register("name")} className="field" autoComplete="name" />
        </Field>
        <Field label={t.company} error={errors.company?.message}>
          <input {...register("company")} className="field" autoComplete="organization" />
        </Field>
        <Field label={t.country} error={errors.country?.message}>
          <input {...register("country")} className="field" autoComplete="country-name" />
        </Field>
        <Field label={t.phone} error={errors.phone?.message}>
          <input {...register("phone")} className="field" autoComplete="tel" />
        </Field>
        <Field label={t.email} error={errors.email?.message}>
          <input {...register("email")} className="field" autoComplete="email" type="email" />
        </Field>
        {showProduct ? (
          <Field label={t.product} error={errors.product?.message}>
            <input {...register("product")} className="field" />
          </Field>
        ) : (
          <Field label={t.subject} error={errors.subject?.message}>
            <input {...register("subject")} className="field" />
          </Field>
        )}
        {mode === "quote" ? (
          <Field label={t.quantity} error={errors.quantity?.message}>
            <input {...register("quantity")} className="field" />
          </Field>
        ) : null}
      </div>
      {showSampleAddress ? (
        <Field label={t.deliveryAddress} error={errors.deliveryAddress?.message}>
          <textarea {...register("deliveryAddress")} className="field min-h-24" />
        </Field>
      ) : null}
      <Field label={t.message} error={errors.message?.message}>
        <textarea {...register("message")} className="field min-h-32" />
      </Field>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" disabled={isSubmitting}>
          <Send className="size-4" aria-hidden />
          {isSubmitting ? "..." : t.submit}
        </Button>
        {status === "success" ? <p className="text-sm font-semibold text-brand">{t.success}</p> : null}
        {status === "error" ? <p className="text-sm font-semibold text-red-700">{t.error}</p> : null}
      </div>
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-brand">
      {label}
      {children}
      {error ? <span className="text-xs font-medium text-red-700">{error}</span> : null}
    </label>
  );
}
