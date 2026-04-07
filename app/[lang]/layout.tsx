import type { Metadata } from "next";
import type { ReactNode } from "react";

import "@/app/globals.css";
import {
  defaultLocale,
  getDictionary,
  isValidLocale,
  localeDirections,
  locales,
} from "@/lib/i18n";

type LayoutProps = {
  children: ReactNode;
  params: Promise<{ lang: string }>;
};

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = isValidLocale(lang) ? lang : defaultLocale;
  const dictionary = getDictionary(locale);

  return {
    title: dictionary.meta.title,
    description: dictionary.meta.description,
  };
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const { lang } = await params;
  const locale = isValidLocale(lang) ? lang : defaultLocale;

  return (
    <html lang={locale} dir={localeDirections[locale]} className="h-full scroll-smooth antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
