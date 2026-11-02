import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { IconArrowUpRight } from "@/components/ui/Icons";
import { Reveal, SectionHeading } from "@/components/ui/Primitives";
import { EXPERIENCES } from "@/data/site";

export default function Experience() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 78%", "end 62%"],
  });
  const line = useSpring(scrollYProgress, { stiffness: 90, damping: 24, restDelta: 0.001 });
  const height = useTransform(line, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="relative overflow-hidden bg-paper-2 py-24 text-ink md:py-32">
      <div className="u-gridlines-dark pointer-events-none absolute inset-0 opacity-55" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
          <SectionHeading
            index="05"
            label="Experience"
            tone="dark"
            className="lg:col-span-7"
            title={
              <>
                My creative{" "}
                <span className="font-editorial font-normal italic text-flame">experience</span>
              </>
            }
          />
          <Reveal delay={0.14} className="lg:col-span-5">
            <p className="text-[0.95rem] leading-relaxed text-ink/60">
              Pengalaman nyata di lapangan — dari eksekusi visual, proses produksi, sampai
              berbicara di depan publik.
            </p>
          </Reveal>
        </div>

        <div ref={ref} className="relative mt-16">
          {/* rail */}
          <div
            className="absolute top-2 bottom-2 left-[27px] w-px bg-ink/12 md:left-[76px]"
            aria-hidden="true"
          >
            <motion.div
              style={{ height }}
              className="w-full origin-top bg-flame"
              aria-hidden="true"
            />
          </div>

          <ol className="space-y-5">
            {EXPERIENCES.map((exp, i) => (
              <motion.li
                key={exp.no}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.75, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="group relative grid grid-cols-[56px_1fr] items-start gap-x-5 md:grid-cols-[152px_1fr] md:gap-x-8"
              >
                {/* node */}
                <div className="relative flex h-14 items-center justify-center md:h-20">
                  <span className="absolute left-[27px] h-3.5 w-3.5 -translate-x-1/2 rotate-45 border border-ink/25 bg-paper-2 transition-all duration-500 group-hover:rotate-0 group-hover:border-flame group-hover:bg-flame md:left-[76px] md:h-4 md:w-4" />
                  <span className="ml-auto mr-6 hidden font-display text-4xl font-bold text-ink/12 tabular-nums transition-colors duration-500 group-hover:text-flame md:mr-8 md:block md:text-6xl">
                    {exp.no}
                  </span>
                </div>

                {/* card */}
                <article className="relative mb-1 w-full overflow-hidden border border-ink/12 bg-paper p-6 transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:border-flame/60 group-hover:shadow-[0_28px_60px_-38px_rgba(17,17,17,0.55)] md:p-8">
                  <span
                    className="absolute top-0 left-0 h-full w-[3px] origin-top scale-y-0 bg-flame transition-transform duration-600 ease-out group-hover:scale-y-100"
                    aria-hidden="true"
                  />
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <h3 className="max-w-xl font-display text-lg font-bold tracking-[-0.02em] text-ink uppercase md:text-2xl">
                      {exp.title}
                    </h3>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink/15 text-ink/45 transition-all duration-500 group-hover:rotate-45 group-hover:border-flame group-hover:bg-flame group-hover:text-ink">
                      <IconArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                  <p className="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-ink/62">
                    {exp.desc}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {exp.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-ink/15 bg-paper-2/70 px-3 py-1 font-display text-[0.65rem] font-semibold tracking-[0.12em] text-ink/55 uppercase transition-colors duration-400 group-hover:border-ink/25 group-hover:text-ink/75"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-5 block font-display text-xs font-bold tracking-[0.2em] text-flame tabular-nums md:hidden">
                    {exp.no} / 05
                  </span>
                </article>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
