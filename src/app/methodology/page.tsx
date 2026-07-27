import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { ComingSoon } from "@/components/shared/coming-soon";

export const metadata: Metadata = buildMetadata({
  title: "Methodology",
  path: "/methodology",
});

export default function MethodologyPage() {
  return (
    <ComingSoon
      title="How we calculate every signal"
      description="We're writing up the full, open methodology behind the Ghost Score and sponsorship verification — the exact inputs, not just the output."
    />
  );
}
