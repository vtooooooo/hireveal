import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#101828",
    // Favicon/apple-touch-icon are served via app/icon.tsx and app/apple-icon.tsx.
    // Add dedicated 192/512 PNGs here once real brand assets exist.
  };
}
