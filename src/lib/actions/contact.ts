"use server";

import fs from "node:fs/promises";
import path from "node:path";
import { Resend } from "resend";
import { contactSchema, type ContactInput } from "@/lib/schemas/contact";
import { siteConfig } from "@/lib/constants/site";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<keyof ContactInput, string>>;
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const parsed = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors;
    return {
      status: "error",
      message: "Please fix the errors below.",
      errors: {
        name: fieldErrors.name?.[0],
        email: fieldErrors.email?.[0],
        message: fieldErrors.message?.[0],
      },
    };
  }

  const emailed = await sendContactEmail(parsed.data);
  if (!emailed) {
    // Never lose a submission if email isn't configured (yet) or the send fails.
    await saveContactMessage(parsed.data);
  }

  return {
    status: "success",
    message: "Thanks for reaching out — we'll get back to you soon.",
  };
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

async function sendContactEmail(entry: ContactInput): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn(
      "RESEND_API_KEY is not set — contact form message saved locally instead of emailed."
    );
    return false;
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: "Hireveal Contact Form <onboarding@resend.dev>",
      to: siteConfig.supportEmail,
      replyTo: entry.email,
      subject: `New contact form message from ${entry.name}`,
      html: `
        <p><strong>Name:</strong> ${escapeHtml(entry.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(entry.email)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(entry.message).replace(/\n/g, "<br />")}</p>
      `,
    });

    if (error) {
      console.error("Resend failed to send the contact form email:", error);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Unexpected error sending the contact form email:", error);
    return false;
  }
}

// Fallback log used only when email sending isn't available — appends to a
// gitignored JSON file so no submission is silently lost.
async function saveContactMessage(entry: ContactInput) {
  const dir = path.join(process.cwd(), ".data");
  const filePath = path.join(dir, "contact-messages.json");

  await fs.mkdir(dir, { recursive: true });

  let existing: unknown[] = [];
  try {
    existing = JSON.parse(await fs.readFile(filePath, "utf-8"));
  } catch {
    existing = [];
  }

  existing.push({ ...entry, submittedAt: new Date().toISOString() });
  await fs.writeFile(filePath, JSON.stringify(existing, null, 2), "utf-8");
}
