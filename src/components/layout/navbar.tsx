"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  useReducedMotion,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { primaryNav, siteConfig } from "@/lib/constants/site";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Logo } from "@/components/shared/logo";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  // Starts false on both server and initial client render (no localStorage
  // access yet, so no hydration mismatch); the effect below flips it after
  // mount, only for a genuine first visit.
  const [firstVisit, setFirstVisit] = React.useState(false);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll();
  const bgOpacity = useTransform(scrollYProgress, [0, 0.03], [0, 0.8]);
  const borderPercent = useTransform(scrollYProgress, [0, 0.03], ["0%", "100%"]);
  const blurPx = useTransform(scrollYProgress, [0, 0.03], [0, 12]);
  const backgroundColor = useMotionTemplate`rgba(255, 255, 255, ${bgOpacity})`;
  const borderColor = useMotionTemplate`color-mix(in oklch, var(--border) ${borderPercent}, transparent)`;
  const backdropFilter = useMotionTemplate`blur(${blurPx}px)`;

  React.useEffect(() => {
    const visited = localStorage.getItem("hireveal-visited");
    if (!visited) {
      localStorage.setItem("hireveal-visited", "1");
      // Reading localStorage requires an Effect; this only ever fires once,
      // on a genuine first visit, to trigger the logo's one-time entrance.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFirstVisit(true);
    }
  }, []);

  return (
    <>
      <motion.div
        aria-hidden
        className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-success-500"
        style={{ scaleX: scrollYProgress }}
      />
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: shouldReduceMotion ? 0.01 : 0.25 }}
        style={
          shouldReduceMotion
            ? undefined
            : { backgroundColor, borderBottomColor: borderColor, backdropFilter }
        }
        className={cn(
          "sticky top-0 z-50 w-full border-b border-transparent",
          shouldReduceMotion && "border-border bg-background/80 backdrop-blur-md"
        )}
      >
        <div className="flex h-16 w-full items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center" aria-label={`${siteConfig.name} home`}>
            <motion.div
              initial={firstVisit && !shouldReduceMotion ? { opacity: 0, scale: 0.9 } : false}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <Logo />
            </motion.div>
          </Link>

          <nav className="hidden items-center gap-2 md:flex" aria-label="Primary">
            {primaryNav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "nav-link-underline rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    active
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <Button asChild size="lg" className="h-9 px-4">
              <Link href={siteConfig.extensionUrl}>Add to Chrome</Link>
            </Button>
          </nav>

          <div className="flex items-center gap-1 md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:max-w-xs">
                <SheetHeader>
                  <SheetTitle className="flex items-center">
                    <Logo />
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-1 px-4" aria-label="Mobile">
                  {primaryNav.map((item) => (
                    <SheetClose asChild key={item.href}>
                      <Link
                        href={item.href}
                        className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted"
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                <div className="mt-auto flex flex-col gap-2 p-4">
                  <SheetClose asChild>
                    <Button asChild size="lg">
                      <Link href={siteConfig.extensionUrl}>Add to Chrome</Link>
                    </Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.header>
    </>
  );
}
