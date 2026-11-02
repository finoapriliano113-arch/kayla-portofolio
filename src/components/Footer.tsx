import { AnimatePresence, motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import {
  IconArrowUpRight,
  IconBehance,
  IconInstagram,
  IconMail,
  IconWhatsApp,
} from "@/components/ui/Icons";
import { LINKS, NAV_ITEMS, PROFILE } from "@/data/site";

const SOCIALS = [
  { label: "Behance", href: LINKS.behance, icon: IconBehance },
  { label: "Instagram", href: LINKS.instagram, icon: IconInstagram },
  { label: "WhatsApp", href: LINKS.whatsapp, icon: IconWhatsApp },
  { label: "Email", href: LINKS.email, icon: IconMail },
];

function WibClock() {
  const [now, setNow] = useState("");
  useEffect(() => {
    const tick = () =>
      setNow(
        new Date().toLocaleTimeString("id-ID", {
          timeZone: "Asia/Jakarta",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      );
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span className="flex items-center gap-2 font-display text-xs tracking-[0.16em] text-paper/45 uppercase tabular-nums">
      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-flame" />
      {now || "--:--:--"} WIB
    </span>
  );
}

export default function Footer() {
  const { scrollYProgress } = useScroll();
  const [showTop, setShowTop] = useState(false);

  useEffect(
    () => scrollYProgress.on("change", (v) => setShowTop(v > 0.14)),
    [scrollYProgress],
  );

  return (
    <footer className="relative overflow-hidden bg-[#0c0c0c] pt-20">
      <div className="u-gridlines pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -bottom-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-flame/12 blur-[150px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        {/* columns */}
        <div className="grid grid-cols-1 gap-10 border-b border-paper/10 pb-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-display text-2xl font-bold tracking-[-0.04em] text-paper">
              {PROFILE.name}
              <span className="text-flame">®</span>
            </p>
            <p className="mt-2 u-label text-paper/45">{PROFILE.role}</p>
            <p className="mt-6 max-w-sm font-editorial text-xl leading-snug text-paper/70 italic">
              &ldquo;{PROFILE.footerQuote}&rdquo;
            </p>
          </div>

          <nav className="md:col-span-3" aria-label="Navigasi footer">
            <p className="u-label text-flame">Menu</p>
            <ul className="mt-5 space-y-2.5">
              {NAV_ITEMS.map((n) => (
                <li key={n.id}>
                  <a
                    href={`#${n.id}`}
                    data-cursor="hover"
                    className="group inline-flex items-center gap-2 text-sm text-paper/55 transition-colors duration-300 hover:text-paper"
                  >
                    <span className="h-px w-0 bg-flame transition-all duration-400 group-hover:w-4" />
                    {n.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#video"
                  data-cursor="hover"
                  className="group inline-flex items-center gap-2 text-sm text-paper/55 transition-colors duration-300 hover:text-paper"
                >
                  <span className="h-px w-0 bg-flame transition-all duration-400 group-hover:w-4" />
                  Featured Video
                </a>
              </li>
            </ul>
          </nav>

          <div className="md:col-span-4">
            <p className="u-label text-flame">Connect</p>
            <ul className="mt-5 space-y-2.5">
              {SOCIALS.map((s) => {
                const Icon = s.icon;
                return (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      {...(s.href.startsWith("mailto:")
                        ? {}
                        : { target: "_blank", rel: "noopener noreferrer" })}
                      data-cursor="hover"
                      className="group flex items-center gap-3 text-sm text-paper/55 transition-colors duration-300 hover:text-flame"
                    >
                      <Icon className="h-4 w-4 transition-transform duration-400 group-hover:-rotate-6" />
                      <span className="u-link">{s.label}</span>
                      <IconArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </a>
                  </li>
                );
              })}
            </ul>
            <p className="mt-6 text-sm text-paper/45">{PROFILE.contact.email}</p>
            <p className="text-sm text-paper/45">{PROFILE.contact.whatsappDisplay}</p>
          </div>
        </div>

        {/* giant wordmark */}
        <div className="group select-none py-10" aria-hidden="true">
          <p className="u-stroke-text text-center font-display text-[clamp(2.2rem,12.5vw,11rem)] leading-[0.85] font-bold tracking-[-0.06em] uppercase transition-colors duration-700 group-hover:text-flame/10">
            Kayla Nauri
          </p>
          <p className="text-center font-display text-[clamp(2.2rem,12.5vw,11rem)] leading-[0.85] font-bold tracking-[-0.06em] text-paper uppercase transition-colors duration-700 group-hover:text-flame">
            Azzahra<span className="align-super text-[0.3em]">®</span>
          </p>
        </div>

        {/* bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-paper/10 py-7 md:flex-row">
          <p className="text-center text-xs text-paper/40 md:text-left">
            © 2026 {PROFILE.name}. All Rights Reserved.
          </p>
          <WibClock />
          <p className="u-label text-paper/30">
            Designed &amp; built with <span className="text-flame">♥</span> in Indonesia
          </p>
        </div>
      </div>

      {/* back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.a
            href="#home"
            data-cursor="hover"
            initial={{ opacity: 0, scale: 0.6, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 16 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            aria-label="Kembali ke atas"
            className="group fixed right-5 bottom-5 z-[60] flex h-12 w-12 items-center justify-center rounded-full border border-paper/20 bg-ink/80 text-paper backdrop-blur-md transition-colors duration-400 hover:border-flame hover:bg-flame hover:text-ink md:right-8 md:bottom-8"
          >
            <IconArrowUpRight className="h-4 w-4 -rotate-45 transition-transform duration-500 group-hover:-translate-y-0.5" />
          </motion.a>
        )}
      </AnimatePresence>
    </footer>
  );
}
