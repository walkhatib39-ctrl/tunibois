import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { contactMessageSchema } from "@/lib/lead-validation";
import { sendLeadEmail } from "@/lib/mail";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const input = contactMessageSchema.parse(body);
    const lead = await prisma.contactMessage.create({ data: input });

    await sendLeadEmail({
      subject: `[Tunibois] Nouveau message contact #${lead.id}`,
      heading: "Nouveau message contact Tunibois",
      rows: [
        ["ID", String(lead.id)],
        ["Nom", input.name],
        ["Société", input.company],
        ["Pays", input.country],
        ["Téléphone", input.phone],
        ["Email", input.email],
        ["Sujet", input.subject],
        ["Message", input.message],
        ["Langue", input.sourceLocale],
        ["Page", input.sourcePath],
      ],
    });

    return NextResponse.json({ ok: true, id: lead.id });
  } catch (error) {
    console.error("contact lead failed", error);
    return NextResponse.json({ ok: false, error: "REQUEST_FAILED" }, { status: 400 });
  }
}
