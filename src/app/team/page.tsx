import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { Team } from "@/components/sections/team";

export const metadata: Metadata = buildMetadata({
  title: "Team",
  path: "/team",
});

export default function TeamPage() {
  return <Team />;
}
