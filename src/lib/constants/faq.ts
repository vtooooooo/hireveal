import type { FaqItem } from "@/types";

export const faqs: FaqItem[] = [
  {
    question: "What does Hireveal actually do?",
    answer:
      "Hireveal is a Chrome extension that reads the job listing you're already looking at and tells you whether it's likely active, whether its sponsorship claim holds up, and whether the recruiter or listing matches known scam patterns. It runs inline on sites like LinkedIn — no separate app, no new tab.",
  },
  {
    question: "Is Hireveal trying to replace LinkedIn?",
    answer:
      "No. Hireveal isn't a job board and doesn't compete with where you search for jobs. It's a transparency layer that sits on top of the listings you already find, wherever you find them.",
  },
  {
    question: "How does the Ghosting Index work?",
    answer:
      "It combines signals like repost frequency, how long a listing has been open, applicant counts, and observed response patterns into a single score. A low score doesn't prove a listing is fake — it means the pattern matches listings that historically went nowhere.",
  },
  {
    question: "Where does the sponsorship data come from?",
    answer:
      "We cross-reference a company's sponsorship claim against public visa-sponsorship disclosure data. If a company has no sponsorship history and claims otherwise, we flag it as unverifiable, not as certain fraud — we show you the evidence and let you decide.",
  },
  {
    question: "Does Hireveal collect or sell my data?",
    answer:
      "No account is required to use the core extension, and we don't sell browsing data. Full detail on what we do and don't collect is in our Privacy Policy.",
  },
  {
    question: "Is it free?",
    answer:
      "The Chrome extension is free to install and use today. We'll be transparent well in advance of introducing any paid tier, and existing core features won't be paywalled retroactively.",
  },
];
