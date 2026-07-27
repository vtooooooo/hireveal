import { NumberCounter } from "@/components/shared/number-counter";
import { AnimatedSection } from "@/components/shared/animated-section";
import { WaitlistForm } from "@/components/shared/waitlist-form";
import { getWaitlistCount } from "@/lib/waitlist-count";

export async function EarlyAccess() {
  const count = await getWaitlistCount();

  return (
    <section className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
      <AnimatedSection className="flex flex-col items-center gap-6 rounded-3xl border border-border bg-card px-6 py-16 text-center shadow-sm sm:px-16">
        <span className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground uppercase">
          Early access
        </span>

        {count > 0 ? (
          <p className="font-mono text-3xl font-semibold text-foreground">
            <NumberCounter value={count} />
            <span className="ml-2 text-base font-normal text-muted-foreground">
              people already on the list
            </span>
          </p>
        ) : null}

        <h2 className="max-w-xl text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Hireveal is in early access. What we build next is shaped by who joins now.
        </h2>
        <p className="max-w-md text-pretty text-muted-foreground">
          No spam, no resale of your email. Just a note when new detection signals ship.
        </p>

        <WaitlistForm className="mt-2" />
      </AnimatedSection>
    </section>
  );
}
