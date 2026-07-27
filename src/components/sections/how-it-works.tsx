import { Download, MousePointerClick, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedSection } from "@/components/shared/animated-section";

const steps = [
  {
    icon: Download,
    title: "Install the extension",
    description: "One click from the Chrome Web Store. No account, no setup screen.",
  },
  {
    icon: MousePointerClick,
    title: "Browse job listings normally",
    description: "Keep using LinkedIn or Indeed exactly as you already do.",
  },
  {
    icon: Sparkles,
    title: "See signals appear inline",
    description: "Ghost Score, sponsorship check, and scam flags show up on the listing itself.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-muted/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="How it works" title="Nothing to change about how you search." />

        <div className="relative mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div
            aria-hidden
            className="absolute top-6 right-[16.67%] left-[16.67%] hidden h-px bg-border sm:block"
          />
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <AnimatedSection
                key={step.title}
                delay={index * 0.1}
                className="relative flex flex-col items-center gap-4 text-center"
              >
                <div className="relative flex size-12 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-sm">
                  <Icon className="size-5" strokeWidth={1.75} />
                  <span className="absolute -top-2 -right-2 flex size-5 items-center justify-center rounded-full bg-brand-900 font-mono text-[10px] font-medium text-white">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
                <p className="max-w-xs text-sm text-pretty text-muted-foreground">
                  {step.description}
                </p>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
