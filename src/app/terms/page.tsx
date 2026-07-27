import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { ComingSoon } from "@/components/shared/coming-soon";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <ComingSoon
      title="Terms of Service"
      description="Our terms of service are being finalized alongside legal review before we publish them."
    />
  );
}
