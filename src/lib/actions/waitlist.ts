"use server";

import { promises as fs } from "fs";
import path from "path";
import { waitlistSchema } from "@/lib/schemas/waitlist";

export type WaitlistResult = { success: true } | { success: false; error: string };

type WaitlistEntry = { email: string; createdAt: string };

/**
 * Local dev stub — appends to a gitignored JSON file. Swap this function's body
 * for a real provider (Resend, Supabase, ConvertKit, etc.) once one is wired up;
 * nothing else in the waitlist flow needs to change.
 */
async function saveWaitlistEntry(email: string): Promise<void> {
  const dataDir = path.join(process.cwd(), ".data");
  const filePath = path.join(dataDir, "waitlist.json");
  await fs.mkdir(dataDir, { recursive: true });

  let entries: WaitlistEntry[] = [];
  try {
    entries = JSON.parse(await fs.readFile(filePath, "utf-8"));
  } catch {
    entries = [];
  }

  if (!entries.some((entry) => entry.email === email)) {
    entries.push({ email, createdAt: new Date().toISOString() });
    await fs.writeFile(filePath, JSON.stringify(entries, null, 2), "utf-8");
  }
}

export async function joinWaitlist(email: string): Promise<WaitlistResult> {
  const parsed = waitlistSchema.safeParse({ email });

  if (!parsed.success) {
    return { success: false, error: parsed.error.issues[0]?.message ?? "Invalid email." };
  }

  await saveWaitlistEntry(parsed.data.email);

  return { success: true };
}
