import { motion } from "framer-motion";
import { IconCheck, IconSparkle } from "@/components/ui/Icons";
import { Reveal, SectionHeading } from "@/components/ui/Primitives";
import { SKILL_GROUPS } from "@/data/site";
import { cn } from "@/utils/cn";

const TOTAL_TOOLS = SKILL_GROUPS.reduce((n, g) => n + g.tools.length, 0);

const SUPPORTING = [
  "Menyusun layout sesuai brief",
  "Ilustrasi & line art digital",
  "Color grading video",
  "Menyiapkan file pre-press",
  "Dokumentasi foto & video lapangan",
  "Motion graphics dasar",
];

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden bg-paper py-24 text-ink md:py-32">
      <div className="u-gridlines-dark pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-32 bottom-0 h-[380px] w-[380px] rounded-full bg-flame/10 blur-[130px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
          <SectionHeading
            index="03"
            label="My Skills"
            tone="dark"
            className="lg:col-span-7"
            title={
              <>
                The <span className="font-editorial font-normal italic text-flame">toolbelt</span>{" "}
                behind the work
              </>
            }
          />
          <Reveal delay={0.15} className="lg:col-span-5">
            <p className="text-[0.95rem] leading-relaxed text-ink/60">
              Daftar software yang benar-benar saya pakai untuk menyelesaikan pekerjaan —
              ditampilkan apa adanya, tanpa angka persentase yang mengarang kemampuan.
            </p>
            <div className="mt-5 flex flex-wrap gap-x-8 gap-y-3 border-t border-ink/12 pt-5">
              <div>
                <p className="font-display text-3xl font-bold text-flame tabular-nums">
                  {String(TOTAL_TOOLS).padStart(2, "0")}
                </p>
                <p className="u-label mt-1 text-ink/45">Creative Tools</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-ink tabular-nums">
                  {String(SKILL_GROUPS.length).padStart(2, "0")}
                </p>
                <p className="u-label mt-1 text-ink/45">Disiplin</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-ink tabular-nums">
                  {String(SUPPORTING.length).padStart(2, "0")}
                </p>
                <p className="u-label mt-1 text-ink/45">Keahlian Pendukung</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ---------- tool groups ---------- */}
        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {SKILL_GROUPS.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.7, delay: gi * 0.09, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "group/card relative border border-ink/12 bg-paper-2/60 p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-ink/25 hover:bg-paper hover:shadow-[0_24px_60px_-30px_rgba(17,17,17,0.45)] md:p-7",
                gi === 2 && "lg:col-span-1",
              )}
            >
              <span
                className="absolute top-0 left-0 h-[3px] w-0 bg-flame transition-all duration-700 ease-out group-hover/card:w-full"
                aria-hidden="true"
              />

              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-base font-bold tracking-[0.02em] text-ink uppercase">
                  {group.title}
                </h3>
                <span className="u-label text-ink/35 tabular-nums">
                  {String(group.tools.length).padStart(2, "0")}
                </span>
              </div>
              <p className="mt-2 text-sm text-ink/50">{group.caption}</p>

              <ul className="mt-6 space-y-2.5">
                {group.tools.map((tool, ti) => (
                  <motion.li
                    key={tool.name}
                    initial={{ opacity: 0, x: -14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 + ti * 0.06 }}
                    className="group flex items-center gap-4 border border-transparent bg-paper/70 p-2.5 transition-all duration-400 hover:border-ink/12 hover:bg-paper"
                  >
                    <span
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] font-display text-sm font-bold text-ink transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105"
                      style={{ backgroundColor: tool.color }}
                      aria-hidden="true"
                    >
                      {tool.mark}
                    </span>
                    <span className="min-w-0">
                      <span className="block font-display text-sm font-semibold tracking-tight text-ink">
                        {tool.name}
                      </span>
                      <span className="block truncate text-xs text-ink/50">{tool.note}</span>
                    </span>
                    <IconCheck className="ml-auto h-4 w-4 shrink-0 text-flame opacity-0 transition-opacity duration-400 group-hover:opacity-100" />
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* ---------- supporting skills ---------- */}
        <Reveal delay={0.1}>
          <div className="mt-5 border border-ink/12 bg-ink p-7 text-paper md:p-9">
            <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-3">
                <IconSparkle className="h-4 w-4 text-flame" />
                <h3 className="font-display text-base font-bold tracking-[0.02em] uppercase">
                  Keahlian pendukung di luar software
                </h3>
              </div>
              <ul className="flex flex-wrap gap-2.5">
                {SUPPORTING.map((s, i) => (
                  <motion.li
                    key={s}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                    className="rounded-full border border-paper/18 px-4 py-2 text-[0.78rem] font-medium text-paper/75 transition-all duration-400 hover:-translate-y-0.5 hover:border-flame hover:bg-flame hover:text-ink"
                  >
                    {s}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
