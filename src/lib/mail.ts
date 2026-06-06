import nodemailer from "nodemailer";
import { appConfig } from "@/lib/config";

type LeadEmail = {
  subject: string;
  heading: string;
  rows: Array<[string, string | undefined]>;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function rowsToText(rows: LeadEmail["rows"]) {
  return rows
    .filter(([, value]) => value)
    .map(([label, value]) => `${label}: ${value}`)
    .join("\n");
}

function rowsToHtml(rows: LeadEmail["rows"]) {
  return rows
    .filter(([, value]) => value)
    .map(([label, value]) => `<tr><th align="left">${escapeHtml(label)}</th><td>${escapeHtml(value ?? "")}</td></tr>`)
    .join("");
}

export async function sendLeadEmail({ subject, heading, rows }: LeadEmail) {
  const transporter =
    appConfig.MAIL_TRANSPORT === "sendmail"
      ? nodemailer.createTransport({
          sendmail: true,
          newline: "unix",
          path: appConfig.MAIL_SENDMAIL_PATH,
        })
      : nodemailer.createTransport({
          host: appConfig.MAIL_HOST,
          port: appConfig.MAIL_PORT,
          secure: appConfig.MAIL_PORT === 465,
          ignoreTLS: appConfig.MAIL_IGNORE_TLS,
          auth: appConfig.MAIL_USER
            ? {
                user: appConfig.MAIL_USER,
                pass: appConfig.MAIL_PASSWORD,
              }
            : undefined,
        });

  await transporter.sendMail({
    from: appConfig.MAIL_FROM,
    to: appConfig.LEADS_TO_EMAIL,
    subject,
    text: `${heading}\n\n${rowsToText(rows)}`,
    html: `
      <div style="font-family:Arial,sans-serif;line-height:1.5;color:#17241b">
        <h1 style="font-size:20px">${escapeHtml(heading)}</h1>
        <table cellpadding="8" cellspacing="0" border="1" style="border-collapse:collapse;border-color:#ded6c8">
          ${rowsToHtml(rows)}
        </table>
      </div>
    `,
  });
}
