import { promises as fs } from "fs";
import path from "path";

export async function getWaitlistCount(): Promise<number> {
  try {
    const filePath = path.join(process.cwd(), ".data", "waitlist.json");
    const raw = await fs.readFile(filePath, "utf-8");
    const entries = JSON.parse(raw);
    return Array.isArray(entries) ? entries.length : 0;
  } catch {
    return 0;
  }
}
