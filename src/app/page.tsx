import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { Hero } from "@/components/sections/hero";
import { TrustMarkers } from "@/components/sections/trust-markers";
import { ScrollCue } from "@/components/shared/scroll-cue";
import { Problem } from "@/components/sections/problem";
import { FeatureOverview } from "@/components/sections/feature-overview";
import { HowItWorks } from "@/components/sections/how-it-works";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = buildMetadata({
  title: "Hireveal — The trust layer for hiring",
  path: "/",
});

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-[calc(100vh-4rem)] flex-col overflow-hidden">
        <Hero />
        <TrustMarkers />
        <ScrollCue targetId="problem" />
      </section>

      <Problem />

      <FeatureOverview />

      <section
        id="how-it-works"
        className="relative flex min-h-[calc(100vh-4rem)] scroll-mt-16 flex-col overflow-hidden"
      >
        <HowItWorks />
        <FinalCta />
      </section>
    </>
  );
}
