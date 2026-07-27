import { SectionHeading } from "@/components/shared/section-heading";
import { FeatureCard } from "@/components/shared/feature-card";
import { features } from "@/lib/constants/features";

export function FeatureOverview() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="What Hireveal checks"
        title="Six signals. One extension."
        description="Some of this ships today. Some of it is next on the roadmap — we mark the difference."
      />

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <FeatureCard key={feature.title} feature={feature} delay={index * 0.06} />
        ))}
      </div>
    </section>
  );
}
