"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useTransition } from "react";

import { CloseIcon, GlobeIcon, HeartPulseIcon, MenuIcon } from "@/components/icons";
import { localeLabels, locales, type Locale } from "@/lib/i18n";

type SiteHeaderProps = {
  currentLocale: Locale;
  nav: Array<{ href: string; label: string }>;
  siteName: string;
};

export function SiteHeader({
  currentLocale,
  nav,
  siteName,
}: SiteHeaderProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function switchLocale(nextLocale: Locale) {
    const segments = pathname.split("/").filter(Boolean);

    if (segments.length === 0) {
      startTransition(() => {
        router.replace(`/${nextLocale}`);
      });
      return;
    }

    segments[0] = nextLocale;

    startTransition(() => {
      router.replace(`/${segments.join("/")}`);
      setIsMenuOpen(false);
    });
  }

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/60 bg-[color:var(--surface)]/80 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-6 lg:px-8">
          <Link
            href={`/${currentLocale}`}
            className="flex min-w-0 flex-1 items-center gap-3 text-[color:var(--foreground)] md:flex-none"
          >
            <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[color:var(--brand)] text-white shadow-[0_18px_40px_-20px_rgba(13,148,136,0.9)]">
              <HeartPulseIcon className="size-5" />
            </span>
            <span className="flex min-w-0 flex-col">
              <span className="truncate text-base font-semibold tracking-tight sm:text-lg">
                {siteName}
              </span>
              <span className="hidden text-xs text-[color:var(--muted-foreground)] sm:block">
                Global patient coordination
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[color:var(--muted-foreground)] transition hover:text-[color:var(--foreground)]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <div className="relative">
              <GlobeIcon className="pointer-events-none absolute inset-y-0 left-3 my-auto size-4 text-[color:var(--muted-foreground)]" />
              <select
                aria-label="Select language"
                className="h-11 rounded-full border border-[color:var(--border)] bg-white px-10 pr-4 text-sm font-medium text-[color:var(--foreground)] outline-none transition focus:border-[color:var(--brand)]"
                value={currentLocale}
                disabled={isPending}
                onChange={(event) => switchLocale(event.target.value as Locale)}
              >
                {locales.map((locale) => (
                  <option key={locale} value={locale}>
                    {localeLabels[locale]}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <div className="relative">
              <GlobeIcon className="pointer-events-none absolute inset-y-0 left-3 my-auto size-4 text-[color:var(--muted-foreground)]" />
              <select
                aria-label="Select language"
                className="h-10 rounded-full border border-[color:var(--border)] bg-white px-10 pr-4 text-sm font-medium text-[color:var(--foreground)] outline-none transition focus:border-[color:var(--brand)]"
                value={currentLocale}
                disabled={isPending}
                onChange={(event) => switchLocale(event.target.value as Locale)}
              >
                {locales.map((locale) => (
                  <option key={locale} value={locale}>
                    {localeLabels[locale]}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="button"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="flex size-10 items-center justify-center rounded-full border border-[color:var(--border)] bg-white text-[color:var(--foreground)]"
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              {isMenuOpen ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen ? (
        <div className="fixed inset-0 z-40 bg-[color:var(--foreground)]/15 backdrop-blur-sm md:hidden">
          <div className="absolute inset-x-4 top-20 rounded-[2rem] border border-white/70 bg-white p-6 shadow-[0_40px_120px_-40px_rgba(15,23,42,0.4)]">
            <div className="flex flex-col gap-4">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl border border-[color:var(--border)] px-4 py-3 text-base font-medium text-[color:var(--foreground)]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
