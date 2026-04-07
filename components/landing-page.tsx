import Link from "next/link";

import {
  ArrowIcon,
  BuildingIcon,
  ClipboardIcon,
  FacebookIcon,
  GlobeIcon,
  HeartPulseIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  MessageIcon,
  PhoneIcon,
  PlaneIcon,
  ShieldIcon,
  StethoscopeIcon,
  WalletIcon,
} from "@/components/icons";
import { RfqForm } from "@/components/rfq-form";
import { SiteHeader } from "@/components/site-header";
import { getBusinessWhatsAppHref } from "@/lib/contact";
import { localeDirections, type Dictionary, type Locale } from "@/lib/i18n";

type LandingPageProps = {
  locale: Locale;
  dictionary: Dictionary;
  businessEmail: string;
  businessWhatsApp: string;
};

const serviceIcons = [
  StethoscopeIcon,
  PlaneIcon,
  BuildingIcon,
  WalletIcon,
  GlobeIcon,
  MessageIcon,
  ClipboardIcon,
  ShieldIcon,
  PhoneIcon,
];

const detailIcons = [MailIcon, PhoneIcon, ClipboardIcon];

export function LandingPage({
  locale,
  dictionary,
  businessEmail,
  businessWhatsApp,
}: LandingPageProps) {
  const direction = localeDirections[locale];
  const businessWhatsAppHref = getBusinessWhatsAppHref(businessWhatsApp);

  return (
    <div dir={direction} className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)]">
      <SiteHeader currentLocale={locale} nav={dictionary.nav} siteName={dictionary.site.name} />

      <main>
        <section
          id="home"
          className="relative overflow-hidden border-b border-[color:var(--border)]"
        >
          <div className="hero-orb hero-orb-left" />
          <div className="hero-orb hero-orb-right" />
          <div className="mx-auto grid w-full max-w-7xl gap-14 px-5 py-20 sm:px-6 md:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-28">
            <div className="relative z-10 space-y-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/80 px-4 py-2 text-sm font-semibold text-[color:var(--brand-strong)] shadow-[0_20px_40px_-28px_rgba(13,148,136,0.8)] backdrop-blur">
                <HeartPulseIcon className="size-4" />
                {dictionary.site.badge}
              </span>

              <div className="space-y-5">
                <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
                  {dictionary.home.title}
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-[color:var(--muted-foreground)] sm:text-xl">
                  {dictionary.home.subtitle}
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="#services"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-[color:var(--brand)] px-7 text-sm font-semibold text-white shadow-[0_30px_60px_-25px_rgba(13,148,136,0.85)] transition hover:bg-[color:var(--brand-strong)]"
                >
                  {dictionary.home.primaryCta}
                </a>
                <a
                  href="#contact"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[color:var(--border)] bg-white px-7 text-sm font-semibold text-[color:var(--foreground)] transition hover:border-[color:var(--brand)]"
                >
                  {dictionary.home.secondaryCta}
                  <ArrowIcon className="size-4" />
                </a>
              </div>
            </div>

            <div className="relative z-10">
              <div className="glass-panel relative overflow-hidden rounded-[2rem] p-6 sm:p-8">
                <div className="absolute inset-x-0 top-0 h-28 bg-[radial-gradient(circle_at_top,rgba(45,212,191,0.22),transparent_72%)]" />
                <div className="relative space-y-5">
                  {dictionary.home.highlights.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-[1.5rem] border border-white/70 bg-white/80 p-5 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.55)]"
                    >
                      <p className="text-base font-semibold">{item.title}</p>
                      <p className="mt-2 text-sm leading-7 text-[color:var(--muted-foreground)]">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section-shell">
          <div className="section-copy">
            <span className="section-kicker">{dictionary.about.label}</span>
            <h2 className="section-title">{dictionary.about.title}</h2>
            <div className="space-y-5">
              {dictionary.about.paragraphs.map((paragraph) => (
                <p key={paragraph} className="section-body">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
              <h3 className="text-2xl font-semibold tracking-tight">
                {dictionary.about.supportTitle}
              </h3>
              <div className="mt-6 grid gap-4">
                {dictionary.about.supportItems.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-[1.5rem] border border-white/80 bg-white/85 p-5"
                  >
                    <p className="text-base font-semibold">{item.title}</p>
                    <p className="mt-2 text-sm leading-7 text-[color:var(--muted-foreground)]">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              <div className="md:col-span-2 xl:col-span-3">
                <h3 className="text-2xl font-semibold tracking-tight">
                  {dictionary.about.reasonsTitle}
                </h3>
              </div>
              {dictionary.about.reasons.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[1.75rem] border border-[color:var(--border)] bg-white p-5 shadow-[0_25px_50px_-40px_rgba(15,23,42,0.35)]"
                >
                  <span className="mb-4 flex size-11 items-center justify-center rounded-2xl bg-[color:var(--brand-soft)] text-[color:var(--brand-strong)]">
                    <ShieldIcon className="size-5" />
                  </span>
                  <p className="text-base font-semibold">{item.title}</p>
                  <p className="mt-2 text-sm leading-7 text-[color:var(--muted-foreground)]">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="section-shell border-y border-[color:var(--border)] bg-white/65">
          <div className="section-copy">
            <span className="section-kicker">{dictionary.services.label}</span>
            <h2 className="section-title">{dictionary.services.title}</h2>
            <p className="section-body">{dictionary.services.intro}</p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
              <h3 className="text-2xl font-semibold tracking-tight">
                {dictionary.services.careTitle}
              </h3>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {dictionary.services.careItems.map((item, index) => {
                  const Icon = serviceIcons[index % serviceIcons.length];

                  return (
                    <article
                      key={item.title}
                      className="rounded-[1.5rem] border border-white/75 bg-white/85 p-5"
                    >
                      <span className="mb-4 flex size-11 items-center justify-center rounded-2xl bg-[color:var(--brand-soft)] text-[color:var(--brand-strong)]">
                        <Icon className="size-5" />
                      </span>
                      <p className="text-base font-semibold">{item.title}</p>
                      <p className="mt-2 text-sm leading-7 text-[color:var(--muted-foreground)]">
                        {item.description}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>

            <div className="rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--foreground)] p-6 text-white shadow-[0_35px_90px_-45px_rgba(2,8,23,0.8)] sm:p-8">
              <h3 className="text-2xl font-semibold tracking-tight">
                {dictionary.services.treatmentsTitle}
              </h3>
              <div className="mt-6 space-y-4">
                {dictionary.services.treatments.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-[1.5rem] border border-white/12 bg-white/5 p-5"
                  >
                    <p className="text-base font-semibold">{item.title}</p>
                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="process" className="section-shell">
          <div className="section-copy">
            <span className="section-kicker">{dictionary.process.label}</span>
            <h2 className="section-title">{dictionary.process.title}</h2>
            <p className="section-body">{dictionary.process.subtitle}</p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
            {dictionary.process.steps.map((step) => (
              <article
                key={step.number}
                className="rounded-[2rem] border border-[color:var(--border)] bg-white p-6 shadow-[0_25px_50px_-40px_rgba(15,23,42,0.35)]"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-strong)]">
                    Step {step.number}
                  </span>
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-[color:var(--brand-soft)] text-[color:var(--brand-strong)]">
                    <ClipboardIcon className="size-5" />
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[color:var(--muted-foreground)]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="section-shell border-t border-[color:var(--border)] bg-[linear-gradient(180deg,rgba(240,253,250,0.7),rgba(255,255,255,0.95))]"
        >
          <div className="section-copy">
            <span className="section-kicker">{dictionary.contact.label}</span>
            <h2 className="section-title">{dictionary.contact.title}</h2>
            <p className="section-body">{dictionary.contact.intro}</p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_0.82fr]">
            <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
              <RfqForm locale={locale} labels={dictionary.contact.form} />
            </div>

            <div className="rounded-[2rem] border border-[color:var(--border)] bg-white p-6 shadow-[0_30px_70px_-45px_rgba(15,23,42,0.45)] sm:p-8">
              <div className="flex h-full flex-col">
                <h3 className="text-2xl font-semibold tracking-tight">
                  {dictionary.contact.detailsTitle}
                </h3>
                <div className="mt-5 space-y-4">
                  {dictionary.contact.details.map((detail, index) => {
                    const Icon = detailIcons[index % detailIcons.length];

                    return (
                      <article
                        key={detail}
                        className="rounded-[1.5rem] border border-[color:var(--border)] bg-[color:var(--surface-strong)] p-5"
                      >
                        <span className="mb-3 flex size-10 items-center justify-center rounded-2xl bg-white text-[color:var(--brand-strong)] shadow-[0_20px_40px_-30px_rgba(15,23,42,0.5)]">
                          <Icon className="size-5" />
                        </span>
                        <p className="text-sm leading-7 text-[color:var(--muted-foreground)]">
                          {detail}
                        </p>
                      </article>
                    );
                  })}
                </div>
                <div className="mt-6 flex items-center justify-around  gap-3 pt-1">
                  <Link
                    href={`mailto:${businessEmail}`}
                    aria-label="Business email"
                    title="Business email"
                    className="flex size-11 items-center justify-center rounded-full border border-[color:var(--brand-soft)] bg-[color:var(--brand-soft)] text-[color:var(--brand-strong)] transition hover:border-[color:var(--brand)] hover:bg-[color:var(--surface-strong)] hover:text-[color:var(--brand-strong)]"
                  >
                    <MailIcon className="size-5" />
                  </Link>
                  {businessWhatsAppHref ? (
                    <Link
                      href={businessWhatsAppHref}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Business WhatsApp"
                      title="Business WhatsApp"
                      className="flex size-11 items-center justify-center rounded-full border border-[color:var(--brand-soft)] bg-[color:var(--brand-soft)] text-[color:var(--brand-strong)] transition hover:border-[color:var(--brand)] hover:bg-[color:var(--surface-strong)] hover:text-[color:var(--brand-strong)]"
                    >
                      <MessageIcon className="size-5" />
                    </Link>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[color:var(--border)] bg-white/85">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 py-10 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-3">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[color:var(--brand)] text-white">
                <HeartPulseIcon className="size-5" />
              </span>
              <div className="min-w-0">
                <p className="truncate text-lg font-semibold tracking-tight">
                  {dictionary.site.name}
                </p>
                <p className="text-sm text-[color:var(--muted-foreground)]">
                  {dictionary.site.tagline}
                </p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-7 text-[color:var(--muted-foreground)]">
              {dictionary.footer.licensing}
            </p>
          </div>

          <div className="flex flex-col items-start gap-4 lg:items-end">
            <div className="flex items-center gap-3">
              <Link
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="flex size-11 items-center justify-center rounded-full border border-[color:var(--border)] bg-white text-[color:var(--foreground)] transition hover:border-[color:var(--brand)] hover:text-[color:var(--brand-strong)]"
              >
                <FacebookIcon className="size-5" />
              </Link>
              <Link
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="flex size-11 items-center justify-center rounded-full border border-[color:var(--border)] bg-white text-[color:var(--foreground)] transition hover:border-[color:var(--brand)] hover:text-[color:var(--brand-strong)]"
              >
                <InstagramIcon className="size-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="flex size-11 items-center justify-center rounded-full border border-[color:var(--border)] bg-white text-[color:var(--foreground)] transition hover:border-[color:var(--brand)] hover:text-[color:var(--brand-strong)]"
              >
                <LinkedinIcon className="size-5" />
              </Link>
            </div>
            <p className="text-sm text-[color:var(--muted-foreground)]">
              {dictionary.footer.rights}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
