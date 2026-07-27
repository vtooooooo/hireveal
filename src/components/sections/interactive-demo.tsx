"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Building2,
  MapPin,
  Clock,
  Users,
  DollarSign,
  Globe2,
  AlertTriangle,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedSection } from "@/components/shared/animated-section";
import { GhostScoreGauge } from "@/components/shared/ghost-score-gauge";
import { demoListings } from "@/lib/constants/features";
import { cn } from "@/lib/utils";
import type { Signal } from "@/types";

const tabs = [
  { id: "healthy", label: "Healthy listing" },
  { id: "ghost", label: "Ghost listing" },
  { id: "scam", label: "Likely scam" },
] as const;

const pulseCopy: Record<string, { label: string; className: string }> = {
  active: { label: "Active listing", className: "bg-success-50 text-success-700 dark:bg-success-950/50 dark:text-success-400" },
  stale: { label: "Going stale", className: "bg-warning-50 text-warning-700 dark:bg-warning-950/50 dark:text-warning-400" },
  "likely closed": { label: "Likely closed", className: "bg-danger-50 text-danger-700 dark:bg-danger-950/50 dark:text-danger-400" },
};

const verdictCopy: Record<string, { label: string; icon: typeof CheckCircle2; className: string }> = {
  consistent: { label: "Consistent with sponsorship history", icon: CheckCircle2, className: "text-success-600 dark:text-success-400" },
  unverifiable: { label: "No sponsorship history found", icon: AlertTriangle, className: "text-warning-600 dark:text-warning-400" },
  contradicted: { label: "Contradicts sponsorship history", icon: XCircle, className: "text-danger-600 dark:text-danger-400" },
};

const severityIcon: Record<Signal["severity"], { icon: typeof CheckCircle2; className: string }> = {
  healthy: { icon: CheckCircle2, className: "text-success-600 dark:text-success-400" },
  caution: { icon: AlertTriangle, className: "text-warning-600 dark:text-warning-400" },
  risk: { icon: XCircle, className: "text-danger-600 dark:text-danger-400" },
};

export function InteractiveDemo() {
  const [activeId, setActiveId] = React.useState<(typeof tabs)[number]["id"]>("healthy");
  const shouldReduceMotion = useReducedMotion();
  const listing = demoListings.find((item) => item.id === activeId)!;
  const pulse = pulseCopy[listing.pulseStatus];
  const verdict = verdictCopy[listing.sponsorshipVerdict];
  const VerdictIcon = verdict.icon;

  return (
    <section id="interactive-demo" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="See it in action"
        title="Same job board. Completely different picture."
        description="Hireveal reads the listing you're already on and adds what's missing. Try the three examples below."
      />

      <AnimatedSection className="mt-10 flex flex-wrap justify-center gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveId(tab.id)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              activeId === tab.id
                ? "border-brand-900 bg-brand-900 text-white dark:border-brand-25 dark:bg-brand-25 dark:text-brand-900"
                : "border-border bg-background text-muted-foreground hover:text-foreground"
            )}
          >
            {tab.label}
          </button>
        ))}
      </AnimatedSection>

      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-5 lg:items-start">
        {/* Simulated job listing card */}
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm lg:col-span-3">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-muted text-muted-foreground">
                <Building2 className="size-5" />
              </div>
              <div>
                <AnimatePresence mode="wait">
                  <motion.h3
                    key={listing.role}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: shouldReduceMotion ? 0.01 : 0.25 }}
                    className="text-base font-semibold text-foreground"
                  >
                    {listing.role}
                  </motion.h3>
                </AnimatePresence>
                <p className="text-sm text-muted-foreground">{listing.company}</p>
              </div>
            </div>
            <span
              className={cn(
                "shrink-0 rounded-full px-2.5 py-1 text-xs font-medium",
                pulse.className
              )}
            >
              {pulse.label}
            </span>
          </div>

          <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-3">
            <div className="flex items-center gap-2">
              <MapPin className="size-4 text-muted-foreground" />
              <dd className="text-sm text-foreground">{listing.location}</dd>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="size-4 text-muted-foreground" />
              <dd className="font-mono text-sm text-foreground">{listing.salary}</dd>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="size-4 text-muted-foreground" />
              <dd className="text-sm text-foreground">
                Posted {listing.postedDaysAgo}d ago
              </dd>
            </div>
            <div className="flex items-center gap-2">
              <Users className="size-4 text-muted-foreground" />
              <dd className="text-sm text-foreground">{listing.applicants} applicants</dd>
            </div>
            <div className="col-span-2 flex items-center gap-2 sm:col-span-2">
              <Globe2 className="size-4 shrink-0 text-muted-foreground" />
              <dd className="text-sm text-pretty text-foreground">{listing.sponsorshipClaim}</dd>
            </div>
          </dl>

          <div className="mt-6 border-t border-border pt-6">
            <p className="mb-3 text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Full job description
            </p>
            <div className="max-h-64 overflow-y-auto rounded-xl border border-border bg-muted/30 p-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={listing.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: shouldReduceMotion ? 0.01 : 0.2 }}
                >
                  <p className="text-sm text-pretty text-muted-foreground">
                    {listing.description.overview}
                  </p>

                  <h4 className="mt-4 text-xs font-semibold tracking-wide text-foreground uppercase">
                    Responsibilities
                  </h4>
                  <ul className="mt-2 list-disc space-y-1.5 pl-4">
                    {listing.description.responsibilities.map((item) => (
                      <li key={item} className="text-sm text-pretty text-muted-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>

                  <h4 className="mt-4 text-xs font-semibold tracking-wide text-foreground uppercase">
                    Requirements
                  </h4>
                  <ul className="mt-2 list-disc space-y-1.5 pl-4">
                    {listing.description.requirements.map((item) => (
                      <li key={item} className="text-sm text-pretty text-muted-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Hireveal panel */}
        <div className="flex flex-col gap-4 rounded-2xl border border-border bg-muted/40 p-6 lg:col-span-2">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-foreground">Hireveal analysis</p>
            <GhostScoreGauge score={listing.ghostScore} size={56} strokeWidth={5} />
          </div>

          <div className={cn("flex items-center gap-2 rounded-xl px-3 py-2", pulse.className)}>
            <span className="text-xs font-medium">Listing Pulse: {pulse.label}</span>
          </div>

          <div className="flex flex-col gap-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={listing.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: shouldReduceMotion ? 0.01 : 0.2 }}
                className="flex flex-col gap-3"
              >
                {listing.signals.map((signal) => {
                  const { icon: SignalIcon, className } = severityIcon[signal.severity];
                  return (
                    <div key={signal.label} className="flex items-start gap-2.5">
                      <SignalIcon className={cn("mt-0.5 size-4 shrink-0", className)} />
                      <div>
                        <p className="text-xs font-medium text-foreground">{signal.label}</p>
                        <p className="text-xs text-pretty text-muted-foreground">{signal.detail}</p>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-2 flex items-center gap-2 border-t border-border pt-4">
            <VerdictIcon className={cn("size-4 shrink-0", verdict.className)} />
            <p className="text-xs font-medium text-foreground">{verdict.label}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
