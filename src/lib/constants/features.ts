import {
  Activity,
  Ghost,
  ShieldCheck,
  ShieldAlert,
  BadgeCheck,
  Radar,
} from "lucide-react";
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
  {
    title: "Scam Detection",
    description:
      "Flags listings and 'career service' offers that match known patterns for fee-based scams, fake staffing agencies, and pay-to-interview schemes.",
    icon: ShieldAlert,
    status: "live",
  },
  {
    title: "Verified History Badge",
    description:
      "Lets candidates verify past employment directly, so recruiters and future employers can trust a work history without a phone-tag reference check.",
    icon: BadgeCheck,
    status: "roadmap",
  },
  {
    title: "Behavioral Fraud Detection",
    description:
      "Watches for the behavioral fingerprints of recruiter impersonation and account takeover — not just what a profile says, but how it acts.",
    icon: Radar,
    status: "roadmap",
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
  },
];
