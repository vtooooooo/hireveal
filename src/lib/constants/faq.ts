import type { FaqItem } from "@/types";

export const faqs: FaqItem[] = [
  {
    question: "What does Hireveal actually do?",
    answer:
      "Hireveal is a Chrome extension that reads the job listing you have open, checks what independent evidence exists about it, and combines that with your own confirmed profile to produce a personalized 0–100 opportunity score. It's not a universal fraud detector — it's built to answer a narrower, more useful question: is this specific role worth your time.",
  },
  {
    question: "Is Hireveal trying to replace LinkedIn?",
    answer:
      "No. Hireveal isn't a job board and doesn't compete with where you search for jobs. It's a layer that sits on top of the listing you're already viewing — today, that means LinkedIn.",
  },
  {
    question: "How is the opportunity score calculated?",
    answer:
      "It's two components blended 65% candidate fit and 35% listing health. The listing component starts at 100 and is reduced for things like reposts, how old the listing really is, and applicant volume. The candidate component starts at 100 and is reduced for experience gaps, work-mode mismatches, and missing skills, then hard-capped if the role's sponsorship stance or salary rules it out for you. Scores land in four bands — Worth your time, Stretch, Low priority, Skip — and \"Why this score?\" always shows the exact reasons behind your number.",
  },
  {
    question: "How does Hireveal know when a listing was actually posted?",
    answer:
      "It checks an evidence waterfall: first an official publish date from Greenhouse or Lever if the listing links to one, then the earliest snapshot the Internet Archive has of the listing, and only then LinkedIn's own \"posted X ago\" text. An archive snapshot is labeled exactly as that — the earliest date we can prove the page existed — never as the listing's original posting date, because that's not something anyone can prove with certainty.",
  },
  {
    question: "Where does the sponsorship information come from?",
    answer:
      "Hireveal reads the actual job description first. If it explicitly offers or explicitly rules out sponsorship, that's what you see. Only when a listing says nothing at all do we check the hiring company's public H-1B filing history as background context — never as proof that the specific role in front of you sponsors.",
  },
  {
    question: "Does Hireveal need my resume, and is it safe?",
    answer:
      "You can upload a PDF, DOCX, or TXT resume (up to 8 MB) so Hireveal can suggest profile details, but it's optional — the extension works without one. Parsing happens locally in your browser, the original file and raw extracted text are never saved, and only the structured fields you review and confirm are kept, on your device.",
  },
  {
    question: "Does Hireveal collect or sell my data?",
    answer:
      "We don't sell your data. Any account, profile, or resume-derived information lives locally in your browser, not on a Hireveal server — there's no cross-device sync because there's nothing to sync from. The only outbound requests the extension makes are the specific lookups described in our Privacy Policy (Greenhouse, Lever, Internet Archive, and MyVisaJobs), and they only ever carry the minimum a lookup needs.",
  },
  {
    question: "Is it free?",
    answer:
      "The Chrome extension is free to install and use today, while in beta. We may introduce paid credit plans down the line, and we'll be upfront about it before it happens — nothing that works for free today gets paywalled retroactively without notice.",
  },
];
