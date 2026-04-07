import { NextRequest, NextResponse } from "next/server";

import { defaultLocale, isValidLocale, locales, type Locale } from "@/lib/i18n";

function getPreferredLocale(request: NextRequest): Locale {
  const acceptLanguage = request.headers.get("accept-language");

  if (!acceptLanguage) {
    return defaultLocale;
  }

  const requestedLocales = acceptLanguage
    .split(",")
    .map((entry) => entry.split(";")[0]?.trim().toLowerCase())
    .filter(Boolean);

  for (const requestedLocale of requestedLocales) {
    if (isValidLocale(requestedLocale)) {
      return requestedLocale;
    }

    const baseLocale = requestedLocale.split("-")[0];

    if (isValidLocale(baseLocale)) {
      return baseLocale;
    }
  }

  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathnameIsApiRequest = pathname === "/api" || pathname.startsWith("/api/");
  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (pathnameIsApiRequest || pathnameHasLocale) {
    return NextResponse.next();
  }

  const locale = getPreferredLocale(request);
  const redirectUrl = request.nextUrl.clone();

  redirectUrl.pathname = `/${locale}${pathname}`;

  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: ["/((?!api|_next|icon|apple-icon|.*\\..*).*)"],
};
