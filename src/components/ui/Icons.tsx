type IconProps = {
  className?: string;
  strokeWidth?: number;
};

const base = "none";

export function IconPen({ className = "h-6 w-6", strokeWidth = 1.4 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill={base} stroke="currentColor" strokeWidth={strokeWidth} className={className} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 21l3.5-.8L20 6.7a2 2 0 0 0 0-2.8l-.9-.9a2 2 0 0 0-2.8 0L2.8 16.5 2 20a1 1 0 0 0 1 1z" />
      <path d="M14.5 5.5l4 4" />
      <path d="M6.5 17.5l1.8-4.3 2.5 2.5-4.3 1.8z" />
    </svg>
  );
}

export function IconPress({ className = "h-6 w-6", strokeWidth = 1.4 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill={base} stroke="currentColor" strokeWidth={strokeWidth} className={className} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 9V3h12v6" />
      <rect x="3" y="9" width="18" height="7" rx="1.5" />
      <path d="M7 16v5h10v-5" />
      <path d="M9 19h6" />
      <circle cx="18" cy="12.5" r=".9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconCamera({ className = "h-6 w-6", strokeWidth = 1.4 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill={base} stroke="currentColor" strokeWidth={strokeWidth} className={className} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 8.5A1.5 1.5 0 0 1 4.5 7h2.2l1.1-2h7.4l1.1 2h2.2A1.5 1.5 0 0 1 20 8.5v9A1.5 1.5 0 0 1 18.5 19h-14A1.5 1.5 0 0 1 3 17.5z" />
      <circle cx="11.5" cy="12.8" r="3.6" />
      <path d="M17.4 10h.9" />
    </svg>
  );
}

export function IconMotion({ className = "h-6 w-6", strokeWidth = 1.4 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill={base} stroke="currentColor" strokeWidth={strokeWidth} className={className} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2.5" y="5" width="19" height="14" rx="2" />
      <path d="M6 5v14M18 5v14" />
      <path d="M2.5 9.5h3.2M2.5 14.5h3.2M18.3 9.5h3.2M18.3 14.5h3.2" />
      <path d="M10.4 9.6l4 2.4-4 2.4z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconTeam({ className = "h-6 w-6", strokeWidth = 1.4 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill={base} stroke="currentColor" strokeWidth={strokeWidth} className={className} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="8.5" cy="8" r="3.1" />
      <circle cx="16.5" cy="10" r="2.4" />
      <path d="M2.8 19.2c.5-3 2.8-4.8 5.7-4.8s5.2 1.8 5.7 4.8" />
      <path d="M15.6 14.6c2.6-.4 5 1.2 5.6 4.6" />
    </svg>
  );
}

export function IconArrowUpRight({ className = "h-4 w-4", strokeWidth = 1.8 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill={base} stroke="currentColor" strokeWidth={strokeWidth} className={className} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17L17 7" />
      <path d="M8.5 7H17v8.5" />
    </svg>
  );
}

export function IconArrowRight({ className = "h-4 w-4", strokeWidth = 1.8 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill={base} stroke="currentColor" strokeWidth={strokeWidth} className={className} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 12h15" />
      <path d="M13.5 6.5L20 12l-6.5 5.5" />
    </svg>
  );
}

export function IconArrowDown({ className = "h-4 w-4", strokeWidth = 1.6 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill={base} stroke="currentColor" strokeWidth={strokeWidth} className={className} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 4v15" />
      <path d="M6.5 13.5L12 19l5.5-5.5" />
    </svg>
  );
}

export function IconPlay({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M8 5.2c0-.9 1-1.5 1.8-1L19 10.1c.7.5.7 1.5 0 2l-9.2 5.9c-.8.5-1.8-.1-1.8-1z" />
    </svg>
  );
}

export function IconWhatsApp({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.94.53 3.75 1.45 5.3L2 22l4.98-1.6a9.8 9.8 0 0 0 5.06 1.4h.01c5.43 0 9.84-4.4 9.84-9.84 0-2.63-1.02-5.1-2.88-6.96A9.77 9.77 0 0 0 12.04 2m0 1.8c2.15 0 4.17.84 5.69 2.36a7.98 7.98 0 0 1 2.36 5.68c0 4.45-3.62 8.05-8.06 8.05a8.1 8.1 0 0 1-4.34-1.26l-.31-.19-2.95.95.96-2.88-.2-.32a7.98 7.98 0 0 1-1.2-4.3c0-4.45 3.62-8.09 8.05-8.09m-3.2 4.03c-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.02s.87 2.34.99 2.5c.12.16 1.7 2.6 4.13 3.64.58.25 1.03.4 1.38.51.58.19 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.05.14-1.15-.06-.1-.22-.16-.46-.28-.24-.12-1.44-.71-1.66-.79-.22-.08-.38-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.52.06-.24-.12-1.03-.38-1.96-1.21-.72-.64-1.21-1.44-1.35-1.68-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.32-.75-1.8-.2-.48-.4-.41-.55-.42z" />
    </svg>
  );
}

export function IconMail({ className = "h-5 w-5", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill={base} stroke="currentColor" strokeWidth={strokeWidth} className={className} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2.8" y="4.8" width="18.4" height="14.4" rx="2" />
      <path d="M3.5 6.6l8.5 6 8.5-6" />
    </svg>
  );
}

export function IconInstagram({ className = "h-5 w-5", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill={base} stroke="currentColor" strokeWidth={strokeWidth} className={className} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconBehance({ className = "h-5 w-5", strokeWidth = 1.6 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} className={className} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4.6 4.8h6a3.4 3.4 0 0 1 0 6.8h-6z" />
      <path d="M4.6 11.6h6.5a3.6 3.6 0 0 1 0 7.2H4.6z" />
      <path d="M4.6 4.8v14" />
      <path d="M15.4 6.6h5.4" />
      <path d="M15.2 14.6h6.6a3.3 3.3 0 0 0-6.5-.9c-.3 1.9.8 4.4 3.4 4.4 1.5 0 2.5-.7 3-1.8" />
    </svg>
  );
}

export function IconCopy({ className = "h-4 w-4", strokeWidth = 1.5 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill={base} stroke="currentColor" strokeWidth={strokeWidth} className={className} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="9" y="9" width="12" height="12" rx="2" />
      <path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1" />
    </svg>
  );
}

export function IconCheck({ className = "h-4 w-4", strokeWidth = 2 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill={base} stroke="currentColor" strokeWidth={strokeWidth} className={className} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 12.5l5 5L20 6.5" />
    </svg>
  );
}

export function IconPlus({ className = "h-4 w-4", strokeWidth = 1.6 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill={base} stroke="currentColor" strokeWidth={strokeWidth} className={className} strokeLinecap="round" aria-hidden="true">
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function IconSparkle({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2l1.9 6.1L20 10l-6.1 1.9L12 18l-1.9-6.1L4 10l6.1-1.9z" />
    </svg>
  );
}

export const PASSION_ICONS = {
  pen: IconPen,
  press: IconPress,
  camera: IconCamera,
  motion: IconMotion,
  team: IconTeam,
};
