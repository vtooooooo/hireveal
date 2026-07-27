import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants/site";

type BuildMetadataArgs = {
  title: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
};

export function buildMetadata({
  title,
  description = siteConfig.description,
  path = "/",
  noIndex = false,
}: BuildMetadataArgs): Metadata {
  const url = new URL(path, siteConfig.url).toString();
  const isHome = path === "/";
  // Non-home pages pass a bare page title and let the root layout's
  // `title.template` append " — Hireveal" once. The home page sets an
  // absolute title so the template doesn't double up on it.
  const fullTitle = isHome ? title : `${title} — ${siteConfig.name}`;

  return {
    title: isHome ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
      // images intentionally omitted — app/opengraph-image.tsx supplies the
      // default OG image for every route via Next's file convention.
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
