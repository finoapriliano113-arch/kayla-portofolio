import { motion } from "framer-motion";
import { IconArrowUpRight, IconSparkle } from "@/components/ui/Icons";
import { Reveal, SectionHeading } from "@/components/ui/Primitives";
import { LINKS, MEDIA, PROFILE } from "@/data/site";

const FACTS = [
  { k: "Nama", v: PROFILE.name },
  { k: "Tanggal Lahir", v: PROFILE.birthDate },
  { k: "Sekolah", v: PROFILE.school },
  { k: "Jurusan", v: PROFILE.major },
  { k: "Periode", v: PROFILE.studyPeriod },
  { k: "Fokus", v: "Graphic Design · Multimedia" },
];

const TRAITS = ["Kreatif", "Adaptif", "Komunikatif", "Detail-oriented", "Team player"];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-paper-2 py-24 text-ink md:py-32">
      <div className="u-gridlines-dark pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
      <div className="pointer-events-none absolute -top-24 -right-24 h-[420px] w-[420px] rounded-full bg-flame/10 blur-[120px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          {/* ---------- left: heading + copy ---------- */}
          <div className="lg:col-span-7">
            <SectionHeading
              index="01"
              label="About Me"
              tone="dark"
              title={
                <>
                  Get to <span className="font-editorial font-normal italic text-flame">know</span> me
                </>
              }
            />

            <Reveal delay={0.1}>
              <div className="mt-9 flex items-start gap-4">
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rotate-45 bg-flame" />
                <p className="font-display text-xl font-semibold tracking-[-0.02em] text-ink md:text-2xl">
                  {PROFILE.name} — {PROFILE.role}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="mt-6 max-w-2xl text-[1.02rem] leading-[1.85] text-ink/65 md:text-[1.08rem]">
                {PROFILE.brandingStatement}
              </p>
            </Reveal>

            {/* fact sheet with dotted leaders */}
            <Reveal delay={0.26}>
              <dl className="mt-11 border-t border-ink/15">
                {FACTS.map((f, i) => (
                  <motion.div
                    key={f.k}
                    initial={{ opacity: 0, x: -18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    className="group flex items-baseline gap-3 border-b border-ink/10 py-3.5 transition-colors duration-400 hover:border-flame"
                  >
                    <dt className="u-label shrink-0 text-ink/45 transition-colors duration-300 group-hover:text-flame">
                      {f.k}
                    </dt>
                    <span
                      className="h-px flex-1 self-end mb-1.5 bg-[repeating-linear-gradient(to_right,rgba(17,17,17,0.28)_0_1px,transparent_1px_6px)]"
                      aria-hidden="true"
                    />
                    <dd className="shrink-0 text-right font-display text-sm font-semibold tracking-tight text-ink md:text-base">
                      {f.v}
                    </dd>
                  </motion.div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={0.32}>
              <ul className="mt-8 flex flex-wrap gap-2.5">
                {TRAITS.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-ink/20 px-4 py-1.5 font-display text-[0.7rem] font-semibold tracking-[0.12em] text-ink/70 uppercase transition-all duration-400 hover:-translate-y-0.5 hover:border-flame hover:bg-flame hover:text-ink"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* ---------- right: visual ---------- */}
          <div className="lg:col-span-5">
            <Reveal delay={0.14} y={40}>
              <figure className="group relative">
                <div
                  className="absolute -top-4 -left-4 h-full w-full border border-ink/20 transition-transform duration-700 ease-out group-hover:-translate-x-2 group-hover:-translate-y-2"
                  aria-hidden="true"
                />
                <div className="relative overflow-hidden bg-ink">
                  <div className="aspect-4/3 w-full overflow-hidden">
                    <img
                      src={MEDIA.studioFlatlay}
                      alt="Workspace kreatif Kayla — sketsa, color swatch, drawing tablet, dan kamera"
                      width={1100}
                      height={825}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-flame/0 mix-blend-color transition-colors duration-700 group-hover:bg-flame/15" />
                  <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-ink/75 px-3 py-1.5 backdrop-blur-sm">
                    <IconSparkle className="h-3 w-3 text-flame" />
                    <span className="u-label text-paper/80">Studio Diary</span>
                  </div>
                </div>

                <figcaption className="mt-5 flex items-start justify-between gap-4">
                  <p className="max-w-[16rem] font-editorial text-lg leading-snug text-ink/70 italic">
                    &ldquo;Setiap karya dimulai dari sketsa, brief, dan rasa penasaran.&rdquo;
                  </p>
                  <a
                    href={LINKS.behance}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="hover"
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ink text-paper transition-all duration-500 hover:rotate-45 hover:bg-flame hover:text-ink"
                    aria-label="Lihat portfolio Behance"
                  >
                    <IconArrowUpRight className="h-4 w-4" />
                  </a>
                </figcaption>
              </figure>
            </Reveal>

            {/* education card */}
            <Reveal delay={0.26}>
              <div className="mt-10 border border-ink/15 bg-paper p-6">
                <div className="flex items-center justify-between">
                  <span className="u-label text-flame">Education</span>
                  <span className="font-display text-[0.65rem] tracking-[0.2em] text-ink/40 uppercase">
                    {PROFILE.studyPeriod}
                  </span>
                </div>
                <p className="mt-4 font-display text-lg font-bold tracking-tight text-ink">
                  {PROFILE.school}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
                  {PROFILE.major} — mempelajari dasar desain, ilustrasi, fotografi, videografi,
                  hingga proses pracetak dan produksi media.
                </p>
                <div className="mt-5 h-1 w-full overflow-hidden rounded-full bg-ink/10">
                  <motion.div
                    className="h-full rounded-full bg-flame"
                    initial={{ width: 0 }}
                    whileInView={{ width: "38%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
                <p className="mt-2 font-display text-[0.65rem] tracking-[0.16em] text-ink/45 uppercase">
                  Sedang berlangsung · Tahun ke-1
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
