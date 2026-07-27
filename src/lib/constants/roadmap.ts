import type { RoadmapItem } from "@/types";

export const roadmap: RoadmapItem[] = [
  {
    quarter: "Shipped",
    title: "Listing Pulse & Ghosting Index",
    description:
      "Real-time status and a ghost-risk score for any job posting, right inside LinkedIn and Indeed.",
    status: "shipped",
  },
  {
    quarter: "Shipped",
    title: "Sponsorship Truth Layer",
    description:
      "Cross-referencing sponsorship claims against public visa-sponsorship records.",
    status: "shipped",
  },
  {
    quarter: "In progress",
    title: "Scam Detection v2",
    description:
      "Expanding pattern coverage to career-coaching and staffing-fee scams, not just fake listings.",
    status: "in-progress",
  },
  {
    quarter: "Planned",
    title: "Verified Employment History",
    description:
      "Let candidates verify past roles directly, so a work history badge means something.",
    status: "planned",
  },
  {
    quarter: "Planned",
    title: "Behavioral Fraud Detection",
    description:
      "Detecting recruiter-account takeover and impersonation from behavior, not just profile text.",
    status: "planned",
  },
];
