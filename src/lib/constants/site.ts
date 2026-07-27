export const siteConfig = {
  name: "Hireveal",
  tagline: "The trust layer for hiring",
  description:
    "Hireveal is a Chrome extension that tells you whether a job listing is active, whether sponsorship claims are truthful, and whether a recruiter is legitimate — before you spend an hour on an application.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://hireveal.com",
  extensionUrl: "#", // TODO: replace with Chrome Web Store listing once published
} as const;

export type NavItem = {
  label: string;
  href: string;
  description?: string;
};

export const primaryNav: NavItem[] = [
  { label: "Product", href: "/features" },
  { label: "Extension", href: "/extension" },
  { label: "Methodology", href: "/methodology" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
];

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "Product",
    items: [
      { label: "Features", href: "/features" },
      { label: "Chrome Extension", href: "/extension" },
      { label: "Methodology", href: "/methodology" },
      { label: "Pricing", href: "/pricing" },
      { label: "Roadmap", href: "/roadmap" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "FAQ", href: "/faq" },
      { label: "Methodology", href: "/methodology" },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];
