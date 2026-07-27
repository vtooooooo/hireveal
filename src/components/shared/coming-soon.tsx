import Link from "next/link";
import { ArrowLeft, Construction } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/shared/animated-section";

export function ComingSoon({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center gap-6 px-4 py-24 text-center sm:px-6">
      <AnimatedSection className="flex flex-col items-center gap-6">
        <div className="flex size-12 items-center justify-center rounded-full bg-muted text-muted-foreground">
          <Construction className="size-5" strokeWidth={1.75} />
        </div>
        <h1 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h1>
        <p className="max-w-md text-pretty text-muted-foreground">{description}</p>
        <Button asChild variant="outline">
          <Link href="/">
            <ArrowLeft className="size-4" />
            Back to home
          </Link>
        </Button>
      </AnimatedSection>
    </section>
  );
}
