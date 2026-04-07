import { notFound } from "next/navigation";

import { LandingPage } from "@/components/landing-page";
import { getBusinessEmail, getBusinessWhatsApp } from "@/lib/contact";
import { getDictionary, isValidLocale } from "@/lib/i18n";

type PageProps = {
  params: Promise<{ lang: string }>;
};

export default async function Page({ params }: PageProps) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const dictionary = getDictionary(lang);
  const businessEmail = getBusinessEmail();
  const businessWhatsApp = getBusinessWhatsApp();

  return (
    <LandingPage
      locale={lang}
      dictionary={dictionary}
      businessEmail={businessEmail}
      businessWhatsApp={businessWhatsApp}
    />
  );
}
