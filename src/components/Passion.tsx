import { motion } from "framer-motion";
import { IconArrowUpRight, PASSION_ICONS } from "@/components/ui/Icons";
import { Reveal, SectionHeading } from "@/components/ui/Primitives";
import { PASSIONS } from "@/data/site";
import { cn } from "@/utils/cn";

/** Asymmetric editorial grid spans (12 col) */
const SPANS = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-5",
  "lg:col-span-7",
  "lg:col-span-12",
];

export default function Passion() {
  return (
    <section id="passion" className="relative overflow-hidden bg-ink py-24 md:py-32">
      <div className="u-gridlines pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <div
        className="pointer-events-none absolute top-1/3 -left-40 h-[500px] w-[500px] rounded-full bg-flame/12 blur-[150px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            index="02"
            label="My Passion"
            tone="light"
            className="max-w-2xl"
            title={
              <>
                Five fields I <span className="u-stroke-text">live</span> for
              </>
            }
          />
          <Reveal delay={0.2}>
            <p className="max-w-xs border-l border-flame/50 pl-5 text-sm leading-relaxed text-paper/55">
              Dari ide di atas kertas sampai hasil cetak dan layar — setiap tahap punya
              perannya sendiri dalam cerita visual.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 lg:grid-cols-12">
          {PASSIONS.map((p, i) => {
            const Icon = PASSION_ICONS[p.icon];
            const wide = SPANS[i] === "lg:col-span-12";
            return (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: 0.75, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                  "group relative isolate overflow-hidden border border-paper/12 bg-ink-2/60 p-7 transition-colors duration-500 hover:border-flame md:p-9",
                  SPANS[i],
                )}
              >
                {/* hover fill sweeps up */}
                <span
                  className="absolute inset-0 -z-10 origin-bottom scale-y-0 bg-flame transition-transform duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100"
                  aria-hidden="true"
                />
                <span
                  className="absolute top-0 right-0 h-16 w-16 -translate-y-8 translate-x-8 rotate-45 bg-flame/15 transition-transform duration-700 group-hover:translate-x-4 group-hover:-translate-y-4"
                  aria-hidden="true"
                />

                <div
                  className={cn(
                    "flex items-start gap-6",
                    wide && "md:items-center md:gap-10",
                  )}
                >
                  <span className="relative flex h-14 w-14 shrink-0 items-center justify-center border border-paper/15 text-flame transition-all duration-500 group-hover:-rotate-6 group-hover:border-ink/25 group-hover:text-ink md:h-16 md:w-16">
                    <Icon className="h-7 w-7 md:h-8 md:w-8" />
                    <span className="absolute -top-2 -left-2 font-display text-[0.6rem] font-bold tracking-[0.14em] text-paper/40 transition-colors duration-500 group-hover:text-ink/50">
                      {p.index}
                    </span>
                  </span>

                  <div className={cn("min-w-0", wide && "md:flex md:flex-1 md:items-baseline md:gap-8")}>
                    <h3
                      className={cn(
                        "font-display text-xl font-bold tracking-[-0.02em] text-paper uppercase transition-colors duration-500 group-hover:text-ink md:text-2xl",
                        wide && "md:text-3xl",
                      )}
                    >
                      {p.title}
                    </h3>
                    <p
                      className={cn(
                        "mt-3 text-sm leading-relaxed text-paper/55 transition-colors duration-500 group-hover:text-ink/75 md:text-[0.95rem]",
                        wide && "md:mt-0 md:max-w-md",
                      )}
                    >
                      {p.desc}
                    </p>
                  </div>

                  <span className="ml-auto hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-paper/15 text-paper/50 transition-all duration-500 group-hover:rotate-45 group-hover:border-ink/25 group-hover:text-ink md:flex">
                    <IconArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
