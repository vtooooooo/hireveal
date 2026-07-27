import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { ComingSoon } from "@/components/shared/coming-soon";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <ComingSoon
      title="Privacy Policy"
      description="Our full privacy policy is being finalized alongside legal review before we publish it — we'd rather ship it right than ship it fast."
    />
  );
}
