"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import { useTheme } from "./ThemeProvider";
import { IconClose, IconMenu, IconMoon, IconSun } from "./ui/Icons";
import { ctaLabel, nav, site } from "@/lib/content";

export function Header() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu when navigating — adjusted during render
  // (React's recommended pattern) instead of via a setState-in-effect.
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-canvas/90 backdrop-blur-md shadow-[0_1px_0_0_var(--color-line)]"
          : "bg-canvas/0"
      )}
    >
      <Container className="flex h-[76px] items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-canvas font-display text-base transition-transform duration-300 group-hover:rotate-[18deg]">
            С
          </span>
          <span className="font-display text-[1.15rem] leading-none">{site.shortName}</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "relative py-1 text-[0.95rem] transition-colors hover:text-sage-deep",
                pathname === item.href ? "text-ink font-semibold" : "text-ink-soft"
              )}
            >
              {item.label}
              {pathname === item.href && (
                <span className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-sage" />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            aria-label={theme === "light" ? "Включить тёмную тему" : "Включить светлую тему"}
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink-soft transition-colors hover:border-sage hover:text-sage-deep"
          >
            {theme === "light" ? <IconMoon className="h-[18px] w-[18px]" /> : <IconSun className="h-[18px] w-[18px]" />}
          </button>

          {/* <Button href="/contact" size="md" className="hidden lg:inline-flex"> */}
            {/* {ctaLabel} */}
          {/* </Button> */}

          <button
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink lg:hidden"
          >
            {open ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      <div
        className={clsx(
          "overflow-hidden bg-canvas transition-[max-height] duration-300 ease-out lg:hidden",
          open ? "max-h-[560px] border-t border-line" : "max-h-0"
        )}
      >
        <Container className="flex flex-col gap-1 py-4">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "rounded-xl px-3 py-3 text-[1.02rem] transition-colors",
                pathname === item.href ? "bg-sage-pale font-semibold text-sage-deep" : "text-ink-soft"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Button href="/contact" className="mt-3 w-full">
            {ctaLabel}
          </Button>
        </Container>
      </div>
    </header>
  );
}
