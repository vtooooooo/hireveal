"use server";

import fs from "node:fs/promises";
import path from "node:path";
import { contactSchema, type ContactInput } from "@/lib/schemas/contact";

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

  await saveContactMessage(parsed.data);

  return {
    status: "success",
    message: "Thanks for reaching out — we'll get back to you soon.",
  };
}

// Local stub: appends to a gitignored JSON file. Swap this for a real
// provider (email, CRM, ticketing) once one is wired up.
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
