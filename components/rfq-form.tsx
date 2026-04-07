"use client";

import type { FormEvent } from "react";
import { useState } from "react";

import type { Dictionary, Locale } from "@/lib/i18n";

type FormLabels = Dictionary["contact"]["form"];
type FormState = {
  name: string;
  email: string;
  phone: string;
  treatment: string;
};

type RfqFormProps = {
  locale: Locale;
  labels: FormLabels;
};

const initialFormState: FormState = {
  name: "",
  email: "",
  phone: "",
  treatment: "",
};

export function RfqForm({ locale, labels }: RfqFormProps) {
  const [formState, setFormState] = useState(initialFormState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const isSubmitting = status === "submitting";

  function updateField(field: keyof FormState, value: string) {
    setFormState((current) => ({
      ...current,
      [field]: value,
    }));

    if (status !== "idle") {
      setStatus("idle");
      setMessage("");
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    const payload = {
      locale,
      name: formState.name.trim(),
      email: formState.email.trim(),
      phone: formState.phone.trim(),
      treatment: formState.treatment.trim(),
    };

    if (!payload.name || !payload.email || !payload.phone || !payload.treatment) {
      setStatus("error");
      setMessage(labels.validation);
      return;
    }

    if (!event.currentTarget.reportValidity()) {
      return;
    }

    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/rfq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json().catch(() => null)) as
        | { ok?: boolean; message?: string }
        | null;

      if (!response.ok) {
        throw new Error(
          result?.message ??
            (response.status === 400 ? labels.validation : labels.failure),
        );
      }

      setFormState(initialFormState);
      setStatus("success");
      setMessage(labels.success);
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error && error.message
          ? error.message
          : labels.failure,
      );
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="rounded-[1.75rem] border border-white/80 bg-white/85 p-5 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.45)]">
        <p className="text-sm leading-7 text-[color:var(--muted-foreground)]">{labels.helper}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-medium text-[color:var(--foreground)]">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--muted-foreground)]">
            {labels.nameLabel}
          </span>
          <input
            type="text"
            name="name"
            value={formState.name}
            onChange={(event) => updateField("name", event.target.value)}
            placeholder={labels.namePlaceholder}
            autoComplete="name"
            required
            disabled={isSubmitting}
            className="h-14 rounded-[1.35rem] border border-[color:var(--border)] bg-white/90 px-4 text-base font-normal outline-none shadow-[0_24px_55px_-42px_rgba(15,23,42,0.55)] transition placeholder:text-[color:var(--muted-foreground)] placeholder:opacity-70 focus:border-[color:var(--brand)]"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-[color:var(--foreground)]">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--muted-foreground)]">
            {labels.emailLabel}
          </span>
          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={(event) => updateField("email", event.target.value)}
            placeholder={labels.emailPlaceholder}
            autoComplete="email"
            inputMode="email"
            dir="ltr"
            required
            disabled={isSubmitting}
            className="h-14 rounded-[1.35rem] border border-[color:var(--border)] bg-white/90 px-4 text-base font-normal outline-none shadow-[0_24px_55px_-42px_rgba(15,23,42,0.55)] transition placeholder:text-[color:var(--muted-foreground)] placeholder:opacity-70 focus:border-[color:var(--brand)]"
          />
        </label>
      </div>

      <label className="flex flex-col gap-2 text-sm font-medium text-[color:var(--foreground)]">
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--muted-foreground)]">
          {labels.phoneLabel}
        </span>
        <input
          type="tel"
          name="phone"
          value={formState.phone}
          onChange={(event) => updateField("phone", event.target.value)}
          placeholder={labels.phonePlaceholder}
          autoComplete="tel"
          inputMode="tel"
          dir="ltr"
          required
          disabled={isSubmitting}
          className="h-14 rounded-[1.35rem] border border-[color:var(--border)] bg-white/90 px-4 text-base font-normal outline-none shadow-[0_24px_55px_-42px_rgba(15,23,42,0.55)] transition placeholder:text-[color:var(--muted-foreground)] placeholder:opacity-70 focus:border-[color:var(--brand)]"
        />
      </label>

      <label className="flex flex-col gap-2 text-sm font-medium text-[color:var(--foreground)]">
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--muted-foreground)]">
          {labels.treatmentLabel}
        </span>
        <textarea
          rows={6}
          name="treatment"
          value={formState.treatment}
          onChange={(event) => updateField("treatment", event.target.value)}
          placeholder={labels.treatmentPlaceholder}
          required
          disabled={isSubmitting}
          className="min-h-40 rounded-[1.5rem] border border-[color:var(--border)] bg-white/90 px-4 py-3 text-base font-normal outline-none shadow-[0_24px_55px_-42px_rgba(15,23,42,0.55)] transition placeholder:text-[color:var(--muted-foreground)] placeholder:opacity-70 focus:border-[color:var(--brand)]"
        />
      </label>

      {message ? (
        <p
          role="status"
          aria-live="polite"
          className={`rounded-[1.35rem] border px-4 py-3 text-sm font-medium ${
            status === "success"
              ? "border-emerald-200 bg-emerald-50 text-emerald-700"
              : "border-rose-200 bg-rose-50 text-rose-700"
          }`}
        >
          {message}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex h-14 w-full items-center justify-center rounded-full bg-[color:var(--brand)] px-6 text-sm font-semibold text-white shadow-[0_24px_55px_-24px_rgba(13,148,136,0.9)] transition hover:bg-[color:var(--brand-strong)] disabled:cursor-not-allowed disabled:opacity-80"
      >
        {isSubmitting ? labels.submittingLabel : labels.submitLabel}
      </button>
    </form>
  );
}
