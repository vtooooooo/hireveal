import { Activity, Ghost, ShieldCheck, Users } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedSection } from "@/components/shared/animated-section";
import { ExtensionPopupMockup } from "@/components/shared/extension-popup-mockup";
import { demoListings } from "@/lib/constants/features";

const callouts = [
  {
    icon: Activity,
    title: "Listing Pulse",
    description: "A live status — active, going stale, or likely closed — right at the top.",
  },
  {
    icon: Ghost,
    title: "Ghost Score",
    description: "One number summarizing repost patterns, response history, and time open.",
  },
  {
    icon: ShieldCheck,
    title: "Sponsorship Truth Layer",
    description: "The listing's sponsorship claim, checked against real sponsorship history.",
  },
  {
    icon: Users,
    title: "Recruiter signals",
    description: "Profile age and tenure, surfaced so impersonation stands out.",
  },
];

export function ExtensionShowcase() {
  return (
    <section id="extension-showcase" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="The Chrome extension"
        title="Everything shows up where you're already looking."
        description="No dashboard to check. The popup opens on top of the listing you're reading."
      />

      <div className="mt-14 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <AnimatedSection direction="left" className="flex justify-center">
          <div className="w-full max-w-xl overflow-hidden rounded-2xl border border-border bg-muted/50 shadow-lg">
            <div className="flex items-center gap-1.5 border-b border-border bg-background px-4 py-3">
              <span className="size-2.5 rounded-full bg-danger-400" />
              <span className="size-2.5 rounded-full bg-warning-400" />
              <span className="size-2.5 rounded-full bg-success-400" />
              <div className="ml-3 flex-1 rounded-md bg-muted px-3 py-1 text-xs text-muted-foreground">
                linkedin.com/jobs/view/…
              </div>
            </div>
            <div className="flex justify-end p-6 sm:p-10">
              <ExtensionPopupMockup listing={demoListings[0]} />
            </div>
          </div>
        </AnimatedSection>

        <div className="flex flex-col gap-8">
          {callouts.map((callout, index) => {
            const Icon = callout.icon;
            return (
              <AnimatedSection
                key={callout.title}
                direction="right"
                delay={index * 0.08}
                className="flex gap-4"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-success-50 text-success-700 dark:bg-success-950 dark:text-success-400">
                  <Icon className="size-5" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground">{callout.title}</h3>
                  <p className="text-sm text-pretty text-muted-foreground">
                    {callout.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
