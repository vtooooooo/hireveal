import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { ComingSoon } from "@/components/shared/coming-soon";

export const metadata: Metadata = buildMetadata({
  title: "Blog",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <ComingSoon
      title="Notes on hiring transparency"
      description="We're writing about ghost listings, sponsorship fraud, and what we're learning building this in the open. First posts coming soon."
    />
  );
}
