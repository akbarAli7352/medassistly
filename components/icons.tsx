import type { ReactNode, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function createIcon(path: ReactNode) {
  return function Icon(props: IconProps) {
    return (
      <svg
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
        {...props}
      >
        {path}
      </svg>
    );
  };
}

export const HeartPulseIcon = createIcon(
  <>
    <path d="M12 21s-6.6-4.35-9-8.39C1 9.3 2.48 5.5 6.13 4.56c2.04-.52 4.11.15 5.37 1.72 1.26-1.57 3.33-2.24 5.37-1.72C20.52 5.5 22 9.3 21 12.61 18.6 16.65 12 21 12 21Z" />
    <path d="M3.8 12h4.2l1.7-3.2 3 6 2.2-4.1H20" />
  </>
);

export const GlobeIcon = createIcon(
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3a14.5 14.5 0 0 1 0 18" />
    <path d="M12 3a14.5 14.5 0 0 0 0 18" />
  </>
);

export const MenuIcon = createIcon(
  <>
    <path d="M4 7h16" />
    <path d="M4 12h16" />
    <path d="M4 17h16" />
  </>
);

export const CloseIcon = createIcon(
  <>
    <path d="m6 6 12 12" />
    <path d="M18 6 6 18" />
  </>
);

export const ArrowIcon = createIcon(
  <>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </>
);

export const ShieldIcon = createIcon(
  <>
    <path d="M12 3c2.52 2.03 5.26 3 8 3v5c0 5.27-3.44 8.93-8 10-4.56-1.07-8-4.73-8-10V6c2.74 0 5.48-.97 8-3Z" />
    <path d="m9.5 12 1.8 1.8 3.7-4.3" />
  </>
);

export const StethoscopeIcon = createIcon(
  <>
    <path d="M8 4v5a4 4 0 1 0 8 0V4" />
    <path d="M10 4H6" />
    <path d="M18 4h-4" />
    <path d="M12 13v3a4 4 0 1 0 8 0v-1.5" />
    <circle cx="20" cy="13.5" r="1.5" />
  </>
);

export const PlaneIcon = createIcon(
  <>
    <path d="M10 14 3 17l1-4 5-1 9-7a2.2 2.2 0 0 1 3 3l-7 9-1 5-4 1 3-7" />
  </>
);

export const BuildingIcon = createIcon(
  <>
    <path d="M4 21V7l8-4 8 4v14" />
    <path d="M9 21v-4h6v4" />
    <path d="M8 10h.01" />
    <path d="M12 10h.01" />
    <path d="M16 10h.01" />
    <path d="M8 14h.01" />
    <path d="M12 14h.01" />
    <path d="M16 14h.01" />
  </>
);

export const WalletIcon = createIcon(
  <>
    <path d="M3 7.5A2.5 2.5 0 0 1 5.5 5h11A2.5 2.5 0 0 1 19 7.5V8H7a2 2 0 0 0 0 4h12v4.5A2.5 2.5 0 0 1 16.5 19h-11A2.5 2.5 0 0 1 3 16.5v-9Z" />
    <path d="M19 12H7a2 2 0 0 1 0-4h12v4Z" />
    <path d="M15 10h.01" />
  </>
);

export const MessageIcon = createIcon(
  <>
    <path d="M21 12a8.95 8.95 0 0 1-1.2 4.47A9 9 0 0 1 12 21a8.95 8.95 0 0 1-4.47-1.2L3 21l1.2-4.53A9 9 0 1 1 21 12Z" />
  </>
);

export const ClipboardIcon = createIcon(
  <>
    <rect x="7" y="4" width="10" height="16" rx="2" />
    <path d="M9 4.5h6" />
    <path d="M9 9h6" />
    <path d="M9 13h6" />
  </>
);

export const MailIcon = createIcon(
  <>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m4 7 8 6 8-6" />
  </>
);

export const PhoneIcon = createIcon(
  <>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 11.2 18.8 19.5 19.5 0 0 1 5.2 12.8 19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72l.46 3.24a2 2 0 0 1-.57 1.76l-1.18 1.18a16 16 0 0 0 6.06 6.06l1.18-1.18a2 2 0 0 1 1.76-.57l3.24.46A2 2 0 0 1 22 16.92Z" />
  </>
);

export const FacebookIcon = createIcon(
  <>
    <path d="M14 8h3V4h-3c-2.76 0-5 2.24-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.55.45-1 1-1Z" />
  </>
);

export const InstagramIcon = createIcon(
  <>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <path d="M17.5 6.5h.01" />
  </>
);

export const LinkedinIcon = createIcon(
  <>
    <path d="M6 9v9" />
    <path d="M6 6h.01" />
    <path d="M10 9v9" />
    <path d="M10 13a4 4 0 0 1 8 0v5" />
  </>
);
