import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { Hero } from "@/components/sections/hero";
import { TrustMarkers } from "@/components/sections/trust-markers";
import { Problem } from "@/components/sections/problem";
import { InteractiveDemo } from "@/components/sections/interactive-demo";
import { FeatureOverview } from "@/components/sections/feature-overview";
import { HowItWorks } from "@/components/sections/how-it-works";
import { ExtensionShowcase } from "@/components/sections/extension-showcase";
import { EarlyAccess } from "@/components/sections/early-access";
import { FaqPreview } from "@/components/sections/faq-preview";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = buildMetadata({
  title: "Hireveal — The trust layer for hiring",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Hero />
      <TrustMarkers />
      <Problem />
      <InteractiveDemo />
      <FeatureOverview />
      <HowItWorks />
      <ExtensionShowcase />
      <EarlyAccess />
      <FaqPreview />
      <FinalCta />
    </>
  );
}
