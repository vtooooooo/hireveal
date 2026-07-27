import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { ComingSoon } from "@/components/shared/coming-soon";

export const metadata: Metadata = buildMetadata({
  title: "Chrome Extension",
  path: "/extension",
});

export default function ExtensionPage() {
  return (
    <ComingSoon
      title="The Chrome extension, in detail"
      description="A dedicated walkthrough of every panel is coming. For now, see it in action in the interactive demo on the homepage."
    />
  );
}
