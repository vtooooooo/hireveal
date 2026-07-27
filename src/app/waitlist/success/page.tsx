import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/shared/animated-section";

export const metadata: Metadata = buildMetadata({
  title: "You're on the list",
  path: "/waitlist/success",
  noIndex: true,
});

export default function WaitlistSuccessPage() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-lg flex-col items-center justify-center gap-6 px-4 py-24 text-center sm:px-6">
      <AnimatedSection className="flex flex-col items-center gap-6">
        <div className="flex size-14 items-center justify-center rounded-full bg-success-50 text-success-600 dark:bg-success-950 dark:text-success-400">
          <CheckCircle2 className="size-7" strokeWidth={1.75} />
        </div>
        <h1 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          You&apos;re on the list.
        </h1>
        <p className="max-w-sm text-pretty text-muted-foreground">
          We&apos;ll email you when new detection signals ship. In the meantime, the
          Chrome extension is free to install today.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button size="lg">Add to Chrome — it&apos;s free</Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/">Back to home</Link>
          </Button>
        </div>
      </AnimatedSection>
    </section>
  );
}
