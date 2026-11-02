import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { IconArrowUpRight, IconBehance, IconPlus } from "@/components/ui/Icons";
import PlaceholderArt from "@/components/ui/PlaceholderArt";
import { Button, Reveal, SectionHeading } from "@/components/ui/Primitives";
import { CATEGORIES, LINKS, PORTFOLIO_ITEMS } from "@/data/site";
import { cn } from "@/utils/cn";

const SPANS_ALL = [
  "lg:col-span-5",
  "lg:col-span-7",
  "lg:col-span-6",
  "lg:col-span-6",
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-8",
  "lg:col-span-4",
  "lg:col-span-6",
  "lg:col-span-6",
];
const SPANS_FILTERED = [
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-6",
  "lg:col-span-6",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-6",
  "lg:col-span-6",
];

/** Tinggi kartu diseragamkan per baris agar grid tidak berlubang. */
const CARD_HEIGHT = "h-[290px] sm:h-[340px] lg:h-[430px]";

export default function Portfolio() {
  const [filter, setFilter] = useState<string>("All");

  const items = useMemo(
    () =>
      filter === "All"
        ? PORTFOLIO_ITEMS
        : PORTFOLIO_ITEMS.filter((p) => p.category === filter),
    [filter],
  );

  const spans =
    filter === "All"
      ? SPANS_ALL
      : items.length === 1
        ? ["lg:col-span-12"]
        : items.length === 2
          ? ["lg:col-span-6", "lg:col-span-6"]
          : SPANS_FILTERED;

  return (
    <section id="portfolio" className="relative overflow-hidden bg-ink-2 py-24 md:py-32">
      <div className="u-gridlines pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
      <div
        className="pointer-events-none absolute top-0 left-1/2 h-[300px] w-[720px] -translate-x-1/2 rounded-full bg-flame/10 blur-[140px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
          <SectionHeading
            index="04"
            label="Portfolio"
            tone="light"
            className="lg:col-span-7"
            title={
              <>
                Selected <span className="font-editorial font-normal italic text-flame">creative</span>{" "}
                works
              </>
            }
          />
          <Reveal delay={0.14} className="lg:col-span-5">
            <p className="text-[0.95rem] leading-relaxed text-paper/55">
              A collection of my creative explorations, visual experiments, and design projects.
            </p>
            <div className="mt-5 flex items-start gap-3 border-l border-flame/50 pl-4">
              <IconPlus className="mt-0.5 h-4 w-4 shrink-0 text-flame" />
              <p className="text-xs leading-relaxed text-paper/45">
                Slot karya sedang diisi. Seluruh artwork asli dapat dilihat langsung di{" "}
                <a
                  href={LINKS.behance}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  className="u-link font-semibold text-flame"
                >
                  behance.net/kaylanau1
                </a>
                .
              </p>
            </div>
          </Reveal>
        </div>

        {/* ---------- filters ---------- */}
        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-wrap items-center gap-2 border-y border-paper/10 py-5">
            <span className="u-label mr-3 hidden text-paper/35 sm:block">Filter</span>
            {CATEGORIES.map((c) => {
              const active = filter === c;
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setFilter(c)}
                  data-cursor="hover"
                  className={cn(
                    "relative rounded-full px-4 py-2 font-display text-[0.72rem] font-semibold tracking-[0.1em] uppercase transition-colors duration-300",
                    active ? "text-ink" : "text-paper/55 hover:text-paper",
                  )}
                  aria-pressed={active}
                >
                  {active && (
                    <motion.span
                      layoutId="filter-pill"
                      className="absolute inset-0 rounded-full bg-flame"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative">{c}</span>
                </button>
              );
            })}
            <span className="ml-auto font-display text-[0.7rem] tracking-[0.16em] text-paper/35 uppercase tabular-nums">
              {String(items.length).padStart(2, "0")} items
            </span>
          </div>
        </Reveal>

        {/* ---------- gallery ---------- */}
        <motion.div layout className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
          <AnimatePresence mode="popLayout">
            {items.map((item, i) => (
              <motion.a
                layout
                key={item.id}
                href={LINKS.behance}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="hover"
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.25 } }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                  "group relative isolate block overflow-hidden border border-paper/10 bg-ink transition-colors duration-500 hover:border-flame/70",
                  CARD_HEIGHT,
                  spans[i] ?? "lg:col-span-4",
                )}
                aria-label={`${item.title} — ${item.category} (slot karya, buka Behance)`}
              >
                <div className="relative h-full w-full overflow-hidden">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={`${item.title} — ${item.category}`}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    />
                  ) : (
                    <div className="h-full w-full transition-transform duration-[1200ms] ease-out group-hover:scale-[1.07]">
                      <PlaceholderArt variant={item.art} />
                    </div>
                  )}

                  <span
                    className="pointer-events-none absolute inset-0 bg-ink/20 transition-colors duration-500 group-hover:bg-ink/70"
                    aria-hidden="true"
                  />

                  {/* slot number */}
                  <span className="pointer-events-none absolute top-4 left-4 font-display text-[0.65rem] font-bold tracking-[0.24em] text-paper/60 uppercase tabular-nums">
                    Slot {item.slot}
                  </span>

                  {/* status chip */}
                  <span className="pointer-events-none absolute top-3.5 right-4 flex items-center gap-1.5 rounded-full border border-paper/25 bg-ink/40 px-2.5 py-1 backdrop-blur-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-flame" />
                    <span className="font-display text-[0.58rem] font-semibold tracking-[0.16em] text-paper/80 uppercase">
                      Coming soon
                    </span>
                  </span>

                  {/* caption — selalu terlihat, memperkaya saat hover */}
                  <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/75 to-transparent p-5">
                    <span className="flex items-end justify-between gap-4">
                      <span className="min-w-0">
                        <span className="u-label block text-flame">{item.category}</span>
                        <span className="mt-2 block truncate font-display text-base font-bold tracking-[-0.02em] text-paper uppercase md:text-xl">
                          {item.title}
                        </span>
                        <span className="mt-0 block max-h-0 overflow-hidden text-xs leading-relaxed text-paper/60 opacity-0 transition-all duration-500 ease-out group-hover:mt-2 group-hover:max-h-12 group-hover:opacity-100">
                          Slot karya — lihat artwork asli di Behance.
                        </span>
                      </span>
                      <span className="flex h-11 w-11 shrink-0 -translate-y-2 items-center justify-center rounded-full bg-flame text-ink opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                        <IconArrowUpRight className="h-4 w-4" />
                      </span>
                    </span>
                  </span>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ---------- CTA ---------- */}
        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col items-center gap-6 border-t border-paper/10 pt-12 text-center">
            <p className="max-w-md text-sm leading-relaxed text-paper/50">
              Ingin melihat proses dan hasil karya lengkapnya? Seluruh project saya unggah ke
              Behance.
            </p>
            <Button href={LINKS.behance} variant="solid" external className="px-8 py-4 text-sm">
              <IconBehance className="h-4 w-4" />
              View More on Behance
              <IconArrowUpRight className="h-4 w-4" />
            </Button>
            <span className="u-label text-paper/30">behance.net/kaylanau1</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
