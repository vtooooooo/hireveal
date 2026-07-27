import { Ghost, ShieldQuestion, UserX, Wallet } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedSection } from "@/components/shared/animated-section";

const problems = [
  {
    icon: Ghost,
    title: "Ghost listings",
    description:
      "Postings stay live long after the role has closed — or was never really open — collecting applications no one will read.",
  },
  {
    icon: ShieldQuestion,
    title: "Unverifiable sponsorship claims",
    description:
      "\"Sponsorship available\" gets typed into a listing with no way for a candidate to check if it's true before applying.",
  },
  {
    icon: UserX,
    title: "Recruiter impersonation",
    description:
      "Fake recruiter accounts and cloned profiles target job seekers precisely when they're most eager to respond.",
  },
  {
    icon: Wallet,
    title: "Pay-to-play scams",
    description:
      "\"Career coaching\" and staffing services that charge upfront fees for access to jobs that were never guaranteed.",
  },
];

export function Problem() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="The problem"
        title="Job searching runs on information you can't verify."
        description="None of this is new. What's missing is a way to check it before you spend the time."
      />

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {problems.map((problem, index) => {
          const Icon = problem.icon;
          return (
            <AnimatedSection
              key={problem.title}
              delay={index * 0.08}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex size-10 items-center justify-center rounded-xl bg-danger-50 text-danger-600 dark:bg-danger-950/60 dark:text-danger-400">
                <Icon className="size-5" strokeWidth={1.75} />
              </div>
              <h3 className="text-base font-semibold text-foreground">{problem.title}</h3>
              <p className="text-sm text-pretty text-muted-foreground">{problem.description}</p>
            </AnimatedSection>
          );
        })}
      </div>
    </section>
  );
}
