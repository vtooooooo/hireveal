export const siteConfig = {
  name: "Hireveal",
  tagline: "The trust layer for hiring",
  description:
    "Hireveal is a Chrome extension that tells you whether a job listing is active, whether sponsorship claims are truthful, and whether a recruiter is legitimate — before you spend an hour on an application.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://hireveal.com",
  extensionUrl: "#", // TODO: replace with Chrome Web Store listing once published
  supportEmail: "support@hireveal.online",
} as const;

export type NavItem = {
  label: string;
  href: string;
  description?: string;
};

export const primaryNav: NavItem[] = [
  { label: "Extension", href: "/extension" },
];

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "Product",
    items: [{ label: "Chrome Extension", href: "/extension" }],
  },
  {
    title: "Company",
    items: [
      { label: "Team", href: "/team" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    items: [{ label: "FAQ", href: "/faq" }],
  },
  {
    title: "Legal",
    items: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];
