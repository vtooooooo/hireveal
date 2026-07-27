import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { ComingSoon } from "@/components/shared/coming-soon";

export const metadata: Metadata = buildMetadata({
  title: "About",
  path: "/about",
});

export default function AboutPage() {
  return (
    <ComingSoon
      title="About Hireveal"
      description="Our story, team, and why we're building the trust layer for hiring is being written up properly. Check back soon."
    />
  );
}
