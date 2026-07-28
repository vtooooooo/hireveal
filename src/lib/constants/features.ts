import { Activity, Ghost, ShieldCheck } from "lucide-react";
import type { DemoListing, Feature } from "@/types";

export const features: Feature[] = [
  {
    title: "Listing Pulse",
    description:
      "Know in one glance whether a posting is actively being reviewed, gone stale, or effectively dead — before you write a cover letter for it.",
    icon: Activity,
    status: "live",
  },
  {
    title: "Ghosting Index",
    description:
      "A score built from repost frequency, response patterns, and time-to-close, so you can tell a slow hiring process from one that never intended to close.",
    icon: Ghost,
    status: "live",
  },
  {
    title: "Sponsorship Truth Layer",
    description:
      "Cross-checks a listing's visa sponsorship claim against the hiring company's actual sponsorship history, so you stop applying on a promise that isn't backed up.",
    icon: ShieldCheck,
    status: "live",
  },
];

export const demoListings: DemoListing[] = [
  {
    id: "healthy",
    company: "Northwind Data",
    role: "Senior Backend Engineer",
    location: "Remote (US)",
    salary: "$155K – $190K",
    postedDaysAgo: 3,
    applicants: 41,
    sponsorshipClaim: "Sponsors H-1B and green card applicants",
    ghostScore: 91,
    pulseStatus: "active",
    sponsorshipVerdict: "consistent",
    signals: [
      {
        label: "Sponsorship history matches",
        detail: "Company has sponsored 12 visas in the last 2 years.",
        severity: "healthy",
      },
      {
        label: "Recruiter tenure",
        detail: "Posting owner has been with the company for 3+ years.",
        severity: "healthy",
      },
      {
        label: "Posting cadence",
        detail: "First time posted — no repost pattern detected.",
        severity: "healthy",
      },
    ],
    description: {
      overview:
        "Northwind Data builds infrastructure for teams running large-scale analytics pipelines. We're hiring a senior backend engineer to help scale our ingestion layer as we move from hundreds to thousands of customer pipelines.",
      responsibilities: [
        "Design and own core services in our ingestion and query pipeline (Go, Postgres, Kafka).",
        "Improve reliability and observability across distributed data services.",
        "Partner with product to scope technical tradeoffs for new pipeline features.",
        "Mentor mid-level engineers and participate in architecture reviews.",
        "Rotate on-call for services you own, roughly one week in six.",
      ],
      requirements: [
        "5+ years building backend systems in a production environment.",
        "Experience with distributed systems and event-driven architectures.",
        "Strong proficiency in Go, Java, or a comparable statically-typed language.",
        "Comfortable owning a service end-to-end, from design through on-call.",
        "Authorized to work in the US, or eligible for employer-sponsored visa transfer.",
      ],
    },
  },
  {
    id: "ghost",
    company: "Vantage Cloud Systems",
    role: "Product Marketing Manager",
    location: "New York, NY",
    salary: "$110K – $130K",
    postedDaysAgo: 74,
    applicants: 214,
    sponsorshipClaim: "Sponsorship available for the right candidate",
    ghostScore: 24,
    pulseStatus: "likely closed",
    sponsorshipVerdict: "unverifiable",
    signals: [
      {
        label: "Reposted 4× in 60 days",
        detail: "Same role reappeared with minor title changes since May.",
        severity: "risk",
      },
      {
        label: "No sponsorship record found",
        detail: "No public record of this company sponsoring a visa, ever.",
        severity: "caution",
      },
      {
        label: "Applicant-to-response ratio",
        detail: "214 applicants, no reported interview activity in 60 days.",
        severity: "risk",
      },
    ],
    description: {
      overview:
        "Vantage Cloud Systems is looking for a Product Marketing Manager to lead go-to-market for our platform tier. You'll partner closely with product and sales to shape how we position new releases.",
      responsibilities: [
        "Own positioning and messaging for the platform product line.",
        "Partner with product management on launch timing and narrative.",
        "Build sales enablement content and competitive battlecards.",
        "Run customer and win/loss interviews to sharpen messaging.",
        "Report on launch performance against pipeline and adoption goals.",
      ],
      requirements: [
        "4+ years in B2B SaaS product marketing.",
        "Track record of leading multi-team product launches.",
        "Strong written communication — this role writes a lot of external copy.",
        "Comfortable presenting to executive stakeholders.",
        "Sponsorship available for the right candidate.",
      ],
    },
  },
  {
    id: "scam",
    company: "Elite Career Partners",
    role: "Remote Data Entry Specialist",
    location: "Remote (Anywhere)",
    salary: "$4,200/mo",
    postedDaysAgo: 1,
    applicants: 9,
    sponsorshipClaim: "Sponsorship guaranteed within 30 days",
    ghostScore: 6,
    pulseStatus: "active",
    sponsorshipVerdict: "contradicted",
    signals: [
      {
        label: "Sponsorship claim contradicted",
        detail: "Entity has no legal standing to sponsor a work visa.",
        severity: "risk",
      },
      {
        label: "Recruiter profile age",
        detail: "Poster's profile was created 5 days ago.",
        severity: "risk",
      },
      {
        label: "Matches known scam pattern",
        detail: "Upfront 'training fee' language matches 3 reported scams.",
        severity: "risk",
      },
    ],
    description: {
      overview:
        "Elite Career Partners is expanding our remote team! No experience necessary — we provide full training. Work from anywhere, set your own hours, and start earning right away.",
      responsibilities: [
        "Enter data into our proprietary system from home.",
        "Communicate with your team lead through chat.",
        "Complete a short daily task list at your own pace.",
        "Attend a brief onboarding orientation before your first shift.",
      ],
      requirements: [
        "Own laptop and reliable internet connection.",
        "No prior experience or degree required.",
        "Must complete paid onboarding training to receive account access.",
        "Available to start within 48 hours of being accepted.",
      ],
    },
  },
];
