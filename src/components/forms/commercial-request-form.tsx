"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { commercialRequestForm } from "@/content/pages/contact";
import type { Locale } from "@/lib/locales";
import { cn } from "@/lib/cn";

type RequestType = "quote" | "sample";

type CommercialRequestFormProps = {
  locale: Locale;
  sourcePath: string;
};

const optionalText = (max: number) => z.string().trim().max(max).optional();

const commercialRequestSchema = z.object({
  requestType: z.enum(["quote", "sample"]),
  name: z.string().trim().min(2).max(120),
  company: optionalText(160),
  country: z.string().trim().min(2).max(120),
  phone: optionalText(80),
  email: z.string().trim().email().max(160),
  product: z.string().trim().min(2).max(160),
  quantity: optionalText(120),
  deliveryAddress: optionalText(1000),
  message: optionalText(3000),
});

type CommercialRequestValues = z.infer<typeof commercialRequestSchema>;

export function CommercialRequestForm({ locale, sourcePath }: CommercialRequestFormProps) {
  const t = commercialRequestForm.labels;
  const requestTypes = commercialRequestForm.requestTypes;
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [selectedRequestType, setSelectedRequestType] = useState<RequestType>("quote");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CommercialRequestValues>({
    resolver: zodResolver(commercialRequestSchema),
    defaultValues: {
      requestType: "quote",
      message: "",
    },
  });
  const requestTypeField = register("requestType");

  async function onSubmit(values: CommercialRequestValues) {
    setStatus("idle");
    const endpoint = values.requestType === "sample" ? "/api/leads/sample" : "/api/leads/quote";
    const payload =
      values.requestType === "sample"
        ? {
            name: values.name,
            company: values.company,
            country: values.country,
            phone: values.phone,
            email: values.email,
            product: values.product,
            deliveryAddress: values.deliveryAddress,
            message: values.message,
            sourceLocale: locale,
            sourcePath,
          }
        : {
            name: values.name,
            company: values.company,
            country: values.country,
            phone: values.phone,
            email: values.email,
            product: values.product,
            quantity: values.quantity,
            message: values.message,
            sourceLocale: locale,
            sourcePath,
          };

    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      setStatus("error");
      return;
    }

    setStatus("success");
    setSelectedRequestType(values.requestType);
    reset({ requestType: values.requestType, message: "" });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 rounded-lg border border-line bg-surface p-5 shadow-sm">
      <fieldset className="grid gap-3">
        <legend className="text-sm font-semibold text-brand">{t.requestType[locale]}</legend>
        <div className="grid gap-3 sm:grid-cols-2">
          {(["quote", "sample"] as RequestType[]).map((type) => (
            <label key={type} className="cursor-pointer">
              <input
                type="radio"
                value={type}
                checked={selectedRequestType === type}
                className="peer sr-only"
                name={requestTypeField.name}
                ref={requestTypeField.ref}
                onBlur={requestTypeField.onBlur}
                onChange={(event) => {
                  requestTypeField.onChange(event);
                  setSelectedRequestType(event.target.value as RequestType);
                }}
              />
              <span
                className={cn(
                  "flex min-h-12 items-center justify-center rounded-md border border-line bg-white px-4 py-3 text-sm font-semibold text-brand transition",
                  "peer-checked:border-brand peer-checked:bg-brand peer-checked:text-white",
                )}
              >
                {requestTypes[type][locale]}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-4 md:grid-cols-2">
        <Field label={t.name[locale]} error={errors.name?.message}>
          <input {...register("name")} className="field" autoComplete="name" />
        </Field>
        <Field label={t.company[locale]} error={errors.company?.message}>
          <input {...register("company")} className="field" autoComplete="organization" />
        </Field>
        <Field label={t.country[locale]} error={errors.country?.message}>
          <input {...register("country")} className="field" autoComplete="country-name" />
        </Field>
        <Field label={t.phone[locale]} error={errors.phone?.message}>
          <input {...register("phone")} className="field" autoComplete="tel" />
        </Field>
        <Field label={t.email[locale]} error={errors.email?.message}>
          <input {...register("email")} className="field" autoComplete="email" type="email" />
        </Field>
        <Field label={t.product[locale]} error={errors.product?.message}>
          <input {...register("product")} className="field" />
        </Field>
        {selectedRequestType === "sample" ? (
          <Field label={t.deliveryAddress[locale]} error={errors.deliveryAddress?.message}>
            <textarea {...register("deliveryAddress")} className="field min-h-24" />
          </Field>
        ) : (
          <Field label={t.quantity[locale]} error={errors.quantity?.message}>
            <input {...register("quantity")} className="field" />
          </Field>
        )}
      </div>

      <Field label={t.message[locale]} error={errors.message?.message}>
        <textarea {...register("message")} className="field min-h-32" />
      </Field>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" disabled={isSubmitting}>
          <Send className="size-4" aria-hidden />
          {isSubmitting ? t.sending[locale] : t.submit[locale]}
        </Button>
        {status === "success" ? <p className="text-sm font-semibold text-brand">{t.success[locale]}</p> : null}
        {status === "error" ? <p className="text-sm font-semibold text-red-700">{t.error[locale]}</p> : null}
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
