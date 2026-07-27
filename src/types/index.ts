import type { LucideIcon } from "lucide-react";

export type SignalSeverity = "healthy" | "caution" | "risk";

export type Signal = {
  label: string;
  detail: string;
  severity: SignalSeverity;
};

export type JobDescription = {
  overview: string;
  responsibilities: string[];
  requirements: string[];
};

export type DemoListing = {
  id: string;
  company: string;
  role: string;
  location: string;
  salary: string;
  postedDaysAgo: number;
  applicants: number;
  sponsorshipClaim: string;
  ghostScore: number; // 0-100, higher = healthier
  pulseStatus: "active" | "stale" | "likely closed";
  sponsorshipVerdict: "consistent" | "unverifiable" | "contradicted";
  signals: Signal[];
  description: JobDescription;
};

export type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
  status?: "live" | "beta" | "roadmap";
};

export type FaqItem = {
  question: string;
  answer: string;
};
