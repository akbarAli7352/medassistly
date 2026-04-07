import nodemailer from "nodemailer";

import { getBusinessEmail } from "@/lib/contact";

export type RfqSubmission = {
  locale: string;
  name: string;
  email: string;
  phone: string;
  treatment: string;
};

export class EmailConfigurationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "EmailConfigurationError";
  }
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_LENGTHS = {
  name: 120,
  email: 160,
  phone: 40,
  treatment: 4000,
} as const;

const localeLabels: Record<string, string> = {
  ar: "Arabic",
  en: "English",
  fr: "French",
};

let cachedTransporter: nodemailer.Transporter | null = null;

function normalizeField(value: unknown) {
  if (typeof value !== "string") {
    return "";
  }

  return value.replace(/\r\n/g, "\n").trim();
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatMultilineHtml(value: string) {
  return escapeHtml(value).replaceAll("\n", "<br />");
}

function getLocaleLabel(locale: string) {
  return localeLabels[locale] ?? locale.toUpperCase();
}

function getSubmittedAt() {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "Asia/Kolkata",
  }).format(new Date());
}

function getTransporter() {
  if (cachedTransporter) {
    return cachedTransporter;
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailAppPassword) {
    throw new EmailConfigurationError(
      "Gmail SMTP is not configured. Set GMAIL_USER and GMAIL_APP_PASSWORD.",
    );
  }

  cachedTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailUser,
      pass: gmailAppPassword,
    },
  });

  return cachedTransporter;
}

function buildDetailRow(label: string, value: string) {
  return `
    <tr>
      <td style="padding: 0 0 14px; vertical-align: top; width: 160px; color: #567388; font-size: 13px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;">
        ${escapeHtml(label)}
      </td>
      <td style="padding: 0 0 14px; color: #102a43; font-size: 15px; line-height: 1.7;">
        ${escapeHtml(value)}
      </td>
    </tr>
  `;
}

function createRfqEmailHtml(submission: RfqSubmission) {
  const { locale, name, email, phone, treatment } = submission;
  const treatmentDirection = locale === "ar" ? "rtl" : "ltr";
  const treatmentAlign = treatmentDirection === "rtl" ? "right" : "left";
  const submittedAt = getSubmittedAt();

  return `<!DOCTYPE html>
<html lang="${escapeHtml(locale)}" dir="ltr">
  <body style="margin: 0; padding: 24px; background: #f4fbfa; color: #102a43; font-family: Arial, 'Avenir Next', 'Segoe UI', sans-serif;">
    <div style="display: none; max-height: 0; overflow: hidden; opacity: 0;">
      New MedAssistly RFQ from ${escapeHtml(name)}
    </div>

    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse: separate;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 720px; border-collapse: separate;">
            <tr>
              <td style="padding-bottom: 20px;">
                <div style="overflow: hidden; border-radius: 32px; background: linear-gradient(135deg, #102a43 0%, #0d9488 100%); box-shadow: 0 36px 80px -46px rgba(15, 23, 42, 0.55);">
                  <div style="padding: 32px; background:
                    radial-gradient(circle at top right, rgba(255, 255, 255, 0.18), transparent 35%),
                    radial-gradient(circle at top left, rgba(204, 251, 241, 0.2), transparent 32%);
                  ">
                    <span style="display: inline-block; padding: 8px 14px; border-radius: 999px; background: rgba(255, 255, 255, 0.14); color: #ecfeff; font-size: 12px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase;">
                      New RFQ Request
                    </span>
                    <h1 style="margin: 18px 0 10px; color: #ffffff; font-size: 34px; line-height: 1.1;">
                      MedAssistly inquiry from ${escapeHtml(name)}
                    </h1>
                    <p style="margin: 0; color: rgba(255, 255, 255, 0.82); font-size: 16px; line-height: 1.8;">
                      A new patient inquiry has been submitted through the website. Reply to
                      <a href="mailto:${escapeHtml(email)}" style="color: #ccfbf1; text-decoration: none;">${escapeHtml(email)}</a>
                      or contact the patient on ${escapeHtml(phone)}.
                    </p>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td style="padding-bottom: 18px;">
                <div style="border: 1px solid rgba(16, 42, 67, 0.12); border-radius: 28px; background: #ffffff; padding: 28px;">
                  <h2 style="margin: 0 0 20px; color: #102a43; font-size: 22px; line-height: 1.2;">
                    Patient Details
                  </h2>

                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse: collapse;">
                    ${buildDetailRow("Full Name", name)}
                    ${buildDetailRow("Email Address", email)}
                    ${buildDetailRow("Phone Number", phone)}
                    ${buildDetailRow("Preferred Locale", getLocaleLabel(locale))}
                    ${buildDetailRow("Received At", submittedAt)}
                  </table>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <div style="border: 1px solid rgba(16, 42, 67, 0.12); border-radius: 28px; background: linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(236, 247, 245, 0.95)); padding: 28px;">
                  <h2 style="margin: 0 0 14px; color: #102a43; font-size: 22px; line-height: 1.2;">
                    Treatment Request
                  </h2>
                  <div style="border-radius: 22px; background: #ffffff; padding: 22px; color: #102a43; font-size: 15px; line-height: 1.9; text-align: ${treatmentAlign}; direction: ${treatmentDirection}; box-shadow: inset 0 0 0 1px rgba(16, 42, 67, 0.08);">
                    ${formatMultilineHtml(treatment)}
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td style="padding-top: 18px;">
                <p style="margin: 0; color: #567388; font-size: 13px; line-height: 1.8; text-align: center;">
                  This RFQ was sent from the MedAssistly website inquiry form using the Gmail delivery service.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function createRfqEmailText(submission: RfqSubmission) {
  const { locale, name, email, phone, treatment } = submission;

  return [
    "New MedAssistly RFQ",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Locale: ${getLocaleLabel(locale)}`,
    `Received: ${getSubmittedAt()}`,
    "",
    "Treatment Request:",
    treatment,
  ].join("\n");
}

export function parseRfqSubmission(payload: unknown) {
  if (!payload || typeof payload !== "object") {
    return null;
  }

  const record = payload as Record<string, unknown>;
  const locale = normalizeField(record.locale);
  const submission: RfqSubmission = {
    locale: localeLabels[locale] ? locale : "en",
    name: normalizeField(record.name),
    email: normalizeField(record.email),
    phone: normalizeField(record.phone),
    treatment: normalizeField(record.treatment),
  };

  if (
    !submission.name ||
    !submission.email ||
    !submission.phone ||
    !submission.treatment
  ) {
    return null;
  }

  if (!EMAIL_PATTERN.test(submission.email)) {
    return null;
  }

  if (
    submission.name.length > MAX_LENGTHS.name ||
    submission.email.length > MAX_LENGTHS.email ||
    submission.phone.length > MAX_LENGTHS.phone ||
    submission.treatment.length > MAX_LENGTHS.treatment
  ) {
    return null;
  }

  return submission;
}

export async function sendRfqEmail(submission: RfqSubmission) {
  const transporter = getTransporter();
  const gmailUser = process.env.GMAIL_USER;

  if (!gmailUser) {
    throw new EmailConfigurationError(
      "Gmail SMTP is not configured. Set GMAIL_USER and GMAIL_APP_PASSWORD.",
    );
  }

  await transporter.sendMail({
    from: `"MedAssistly RFQ" <${gmailUser}>`,
    to: getBusinessEmail(),
    replyTo: submission.email,
    subject: `New MedAssistly RFQ from ${submission.name}`,
    text: createRfqEmailText(submission),
    html: createRfqEmailHtml(submission),
  });
}
