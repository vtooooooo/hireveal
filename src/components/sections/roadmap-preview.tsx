import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedSection } from "@/components/shared/animated-section";
import { Timeline } from "@/components/shared/timeline";
import { Button } from "@/components/ui/button";
import { roadmap } from "@/lib/constants/roadmap";

export function RoadmapPreview() {
  return (
    <section className="bg-muted/40">
      <div className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Roadmap"
          title="Where this is going."
          description="Verification of hiring claims doesn't stop at the listing."
        />

        <div className="mt-14">
          <Timeline items={roadmap.slice(0, 4)} />
        </div>

        <AnimatedSection className="mt-10 flex justify-center">
          <Button asChild variant="outline">
            <Link href="/roadmap">
              See full roadmap
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
