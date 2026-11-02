import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { IconArrowUpRight } from "@/components/ui/Icons";
import { NAV_ITEMS, PROFILE } from "@/data/site";
import { cn } from "@/utils/cn";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("home");
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 24);
    setHidden(latest > prev && latest > 420 && !open);
  });

  useEffect(() => {
    const sections = NAV_ITEMS.map((n) => document.getElementById(n.id)).filter(
      (el): el is HTMLElement => !!el,
    );
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.2, 0.6, 1] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: hidden ? -96 : 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-[70] transition-[background-color,backdrop-filter,border-color,padding] duration-500",
          scrolled
            ? "border-b border-paper/10 bg-ink/70 py-2.5 backdrop-blur-xl backdrop-saturate-150"
            : "border-b border-transparent py-5",
        )}
      >
        <nav
          className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-5 sm:px-8"
          aria-label="Navigasi utama"
        >
          {/* Logo */}
          <a
            href="#home"
            data-cursor="hover"
            className="group flex items-baseline gap-1 font-display text-xl font-bold tracking-[-0.04em] text-paper md:text-2xl"
          >
            <span className="relative">
              KAYLA
              <span className="absolute -top-1 -right-3.5 h-1.5 w-1.5 rounded-full bg-flame transition-transform duration-500 group-hover:scale-150" />
            </span>
            <span className="text-flame">®</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  data-cursor="hover"
                  className={cn(
                    "relative block rounded-full px-4 py-2 font-display text-[0.78rem] font-medium tracking-[0.06em] uppercase transition-colors duration-300",
                    active === item.id ? "text-flame" : "text-paper/65 hover:text-paper",
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute inset-x-4 -bottom-0.5 h-px origin-left bg-flame transition-transform duration-500 ease-out",
                      active === item.id ? "scale-x-100" : "scale-x-0",
                    )}
                  />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              data-cursor="hover"
              className="group relative hidden overflow-hidden rounded-full bg-flame px-5 py-2.5 font-display text-[0.72rem] font-semibold tracking-[0.14em] text-ink uppercase transition-transform duration-500 hover:scale-[1.03] sm:inline-flex sm:items-center sm:gap-2"
            >
              <span className="absolute inset-0 -translate-y-full bg-paper transition-transform duration-500 ease-out group-hover:translate-y-0" />
              <span className="relative flex items-center gap-2">
                Let&rsquo;s Collaborate
                <IconArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>

            {/* Burger */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Tutup menu" : "Buka menu"}
              aria-expanded={open}
              className="relative z-[85] flex h-11 w-11 flex-col items-center justify-center gap-[6px] rounded-full border border-paper/20 transition-colors duration-300 hover:border-flame lg:hidden"
            >
              <span
                className={cn(
                  "block h-[1.5px] w-5 bg-paper transition-all duration-400",
                  open && "translate-y-[3.75px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "block h-[1.5px] w-5 bg-paper transition-all duration-400",
                  open && "-translate-y-[3.75px] -rotate-45",
                )}
              />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "circle(0% at 92% 6%)" }}
            animate={{ clipPath: "circle(150% at 92% 6%)" }}
            exit={{ clipPath: "circle(0% at 92% 6%)" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[65] bg-ink lg:hidden"
          >
            <div className="u-gridlines absolute inset-0 opacity-60" aria-hidden="true" />
            <div className="relative flex h-full flex-col justify-between px-6 pt-28 pb-10">
              <ul className="space-y-1">
                {NAV_ITEMS.map((item, i) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: -28 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.14 + i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <a
                      href={`#${item.id}`}
                      onClick={() => setOpen(false)}
                      className="group flex items-baseline gap-4 border-b border-paper/10 py-4"
                    >
                      <span className="u-label text-flame tabular-nums">
                        0{i + 1}
                      </span>
                      <span className="font-display text-[2rem] font-bold tracking-[-0.04em] text-paper transition-colors duration-300 group-hover:text-flame">
                        {item.label}
                      </span>
                      <IconArrowUpRight className="ml-auto h-5 w-5 self-center text-paper/30 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-flame" />
                    </a>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="space-y-5"
              >
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-full bg-flame py-4 font-display text-sm font-semibold tracking-[0.14em] text-ink uppercase"
                >
                  Let&rsquo;s Collaborate
                  <IconArrowUpRight className="h-4 w-4" />
                </a>
                <p className="text-center font-editorial text-lg text-paper/45 italic">
                  {PROFILE.tagline}
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
