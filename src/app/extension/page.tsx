import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { InteractiveDemo } from "@/components/sections/interactive-demo";

export const metadata: Metadata = buildMetadata({
  title: "Chrome Extension",
  path: "/extension",
});

export default function ExtensionPage() {
  return <InteractiveDemo />;
}
