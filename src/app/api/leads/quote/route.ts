import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { quoteRequestSchema } from "@/lib/lead-validation";
import { sendLeadEmail } from "@/lib/mail";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const input = quoteRequestSchema.parse(body);
    const lead = await prisma.quoteRequest.create({ data: input });

    await sendLeadEmail({
      subject: `[Tunibois] Nouvelle demande de devis #${lead.id}`,
      heading: "Nouvelle demande de devis Tunibois",
      rows: [
        ["ID", String(lead.id)],
        ["Nom", input.name],
        ["Société", input.company],
        ["Pays", input.country],
        ["Téléphone", input.phone],
        ["Email", input.email],
        ["Produit", input.product],
        ["Quantité", input.quantity],
        ["Message", input.message],
        ["Langue", input.sourceLocale],
        ["Page", input.sourcePath],
      ],
    });

    return NextResponse.json({ ok: true, id: lead.id });
  } catch (error) {
    console.error("quote lead failed", error);
    return NextResponse.json({ ok: false, error: "REQUEST_FAILED" }, { status: 400 });
  }
}
