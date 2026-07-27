import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { ComingSoon } from "@/components/shared/coming-soon";

export const metadata: Metadata = buildMetadata({
  title: "Pricing",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <ComingSoon
      title="Pricing"
      description="The Chrome extension is free today. If a paid tier ever makes sense, we'll announce it here well before it exists — not retroactively paywall what already shipped."
    />
  );
}
