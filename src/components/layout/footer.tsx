import Link from "next/link";
import { footerNav, siteConfig } from "@/lib/constants/site";
import { LogoMark } from "@/components/shared/logo-mark";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 flex flex-col gap-4 sm:col-span-3 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2" aria-label={`${siteConfig.name} home`}>
              <LogoMark />
              <span className="text-base font-semibold tracking-tight text-foreground">
                {siteConfig.name}
              </span>
            </Link>
            <p className="max-w-xs text-sm text-pretty text-muted-foreground">
              {siteConfig.tagline}.
            </p>
          </div>

          {footerNav.map((group) => (
            <div key={group.title} className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold text-foreground">{group.title}</h3>
              <ul className="flex flex-col gap-2.5">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <Link
            href="/contact"
            className="text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact us
          </Link>
        </div>
      </div>
    </footer>
  );
}
