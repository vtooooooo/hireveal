import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { SectionHeading } from "@/components/shared/section-heading";
import { Timeline } from "@/components/shared/timeline";
import { roadmap } from "@/lib/constants/roadmap";

export const metadata: Metadata = buildMetadata({
  title: "Roadmap",
  path: "/roadmap",
});

export default function RoadmapPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeading
        align="left"
        eyebrow="Roadmap"
        title="What we've shipped, and what's next."
        description="Verification of hiring claims doesn't stop at the listing — here's where we're taking it."
      />
      <div className="mt-14">
        <Timeline items={roadmap} />
      </div>
    </section>
  );
}
