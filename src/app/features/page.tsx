import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { ComingSoon } from "@/components/shared/coming-soon";

export const metadata: Metadata = buildMetadata({
  title: "Features",
  path: "/features",
});

export default function FeaturesPage() {
  return (
    <ComingSoon
      title="A deeper look at every feature"
      description="The full feature breakdown is on its way. In the meantime, the homepage covers what ships today and what's next."
    />
  );
}
