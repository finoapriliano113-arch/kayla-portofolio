import { motion } from "framer-motion";
import { IconSparkle } from "@/components/ui/Icons";
import { Reveal, SectionHeading } from "@/components/ui/Primitives";
import { ACHIEVEMENTS } from "@/data/site";

const RESERVED_SLOTS = ["Slot 01", "Slot 02", "Slot 03"];

export default function Achievements() {
  const hasItems = ACHIEVEMENTS.length > 0;

  return (
    <section id="achievements" className="relative overflow-hidden bg-paper py-24 md:py-32">
      <div className="u-gridlines-dark pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeading
          index="08"
          label="Achievements"
          tone="dark"
          align="center"
          title={
            <>
              Milestones, <span className="font-editorial font-normal italic text-flame">honestly</span>{" "}
              earned
            </>
          }
          description="Bagian ini hanya diisi dengan pencapaian yang benar-benar terjadi — tidak ada yang dikarang."
        />

        {hasItems ? (
          <ul className="mx-auto mt-14 max-w-3xl divide-y divide-ink/12 border-y border-ink/12">
            {ACHIEVEMENTS.map((a, i) => (
              <motion.li
                key={`${a.year}-${a.title}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group flex items-center gap-6 py-6 transition-colors duration-400 hover:text-flame"
              >
                <span className="font-display text-sm font-bold tracking-[0.14em] text-flame tabular-nums">
                  {a.year}
                </span>
                <span className="font-display text-lg font-bold tracking-tight text-ink uppercase transition-colors group-hover:text-flame">
                  {a.title}
                </span>
                <span className="ml-auto text-sm text-ink/50">{a.org}</span>
              </motion.li>
            ))}
          </ul>
        ) : (
          <Reveal delay={0.1}>
            <div className="mx-auto mt-14 max-w-4xl">
              <div className="relative border border-dashed border-ink/25 bg-paper-2/50 p-8 text-center md:p-14">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-paper px-4">
                  <span className="u-label text-flame">In progress</span>
                </span>

                <IconSparkle className="mx-auto h-6 w-6 text-flame" />
                <p className="mx-auto mt-6 max-w-2xl font-editorial text-[1.5rem] leading-snug text-ink italic md:text-[2.1rem] md:leading-[1.25]">
                  &ldquo;Every creative journey starts with a first step. More achievements coming
                  soon.&rdquo;
                </p>

                <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {RESERVED_SLOTS.map((slot, i) => (
                    <motion.div
                      key={slot}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.55, delay: 0.15 + i * 0.08 }}
                      className="group flex items-center justify-between gap-3 border border-ink/15 bg-paper px-5 py-4 text-left transition-all duration-500 hover:-translate-y-1 hover:border-flame"
                    >
                      <div>
                        <p className="u-label text-ink/40 transition-colors group-hover:text-flame">
                          {slot}
                        </p>
                        <p className="mt-1.5 font-display text-sm font-semibold text-ink/70">
                          Segera diisi
                        </p>
                      </div>
                      <span className="h-2.5 w-2.5 rotate-45 border border-ink/25 transition-colors duration-500 group-hover:border-flame group-hover:bg-flame" />
                    </motion.div>
                  ))}
                </div>

                <p className="mt-8 text-xs leading-relaxed text-ink/45">
                  Area ini siap diperbarui begitu ada prestasi baru — cukup tambahkan datanya di{" "}
                  <code className="rounded bg-ink/8 px-1.5 py-0.5 font-display text-[0.7rem] text-ink/70">
                    src/data/site.ts
                  </code>
                  .
                </p>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
