import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/shared/animated-section";

export function FinalCta() {
  return (
    <section className="relative flex flex-1 flex-col justify-center overflow-hidden bg-brand-900">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute top-1/2 left-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-success-500/10 blur-3xl" />
      </div>

      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6 lg:px-8">
        <AnimatedSection className="flex flex-col items-center gap-6">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Stop applying on faith.
          </h2>
          <p className="max-w-md text-pretty text-white/70">
            Add Hireveal and see the signals behind every listing you already visit.
          </p>
          <Button size="lg" className="h-12 bg-white px-6 text-base text-brand-900 hover:bg-white/90">
            Add to Chrome — it&apos;s free
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
