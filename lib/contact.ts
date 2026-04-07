export function getBusinessEmail() {
  return (
    process.env.BUSINESS_EMAIL ??
    process.env.NEXT_PUBLIC_BUSINESS_EMAIL ??
    "hello@medassistly.com"
  );
}

export function getBusinessWhatsApp() {
  return process.env.BUSINESS_WHATSAPP ?? "";
}

export function getBusinessWhatsAppHref(value: string) {
  const digits = value.replace(/\D/g, "");

  if (!digits) {
    return "";
  }

  return `https://wa.me/${digits}`;
}
