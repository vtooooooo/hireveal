import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants/site";

const routes = [
  "",
  "/team",
  "/extension",
  "/faq",
  "/contact",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((route) => ({
    url: new URL(route, siteConfig.url).toString(),
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.6,
  }));
}
