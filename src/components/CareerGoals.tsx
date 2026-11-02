import { motion } from "framer-motion";
import { IconArrowUpRight, IconSparkle } from "@/components/ui/Icons";
import { Marquee, MaskLine, Reveal } from "@/components/ui/Primitives";
import { PROFILE } from "@/data/site";

const GOALS = [
  {
    k: "01",
    title: "Graphic Designer",
    desc: "Menciptakan solusi visual yang komunikatif, fungsional, dan punya karakter.",
  },
  {
    k: "02",
    title: "Multimedia Creative",
    desc: "Menghidupkan ide lewat video, motion graphics, dan pengalaman multimedia.",
  },
];

export default function CareerGoals() {
  return (
    <section id="vision" className="relative isolate overflow-hidden bg-flame text-ink">
      {/* ambient layers */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="u-dotgrid absolute inset-0 opacity-[0.18] mix-blend-multiply" />
        <div className="absolute top-[-10%] right-[-6%] h-[420px] w-[420px] rounded-full border border-ink/15" />
        <div className="absolute top-[6%] right-[2%] h-[300px] w-[300px] rounded-full border border-ink/10" />
        <div className="absolute bottom-[-18%] left-[-8%] h-[520px] w-[520px] rounded-full bg-ink/8 blur-[90px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 py-24 sm:px-8 md:py-32">
        <div className="flex items-center gap-3">
          <span className="u-label tabular-nums text-ink/60">(07)</span>
          <span className="h-px w-8 bg-ink/30" />
          <span className="u-label text-ink/60">Career Goals</span>
        </div>

        <h2 className="mt-6 font-display text-[clamp(2.6rem,10vw,8rem)] font-bold tracking-[-0.055em] uppercase">
          <MaskLine>My future</MaskLine>
          <MaskLine delay={0.1}>
            <span className="font-editorial font-normal italic">vision</span>
            <span className="ml-4 inline-block align-middle text-flame-3">
              <IconSparkle className="inline h-[0.45em] w-[0.45em] text-ink/70" />
            </span>
          </MaskLine>
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          {/* statement */}
          <Reveal className="lg:col-span-7">
            <p className="border-l-2 border-ink/70 pl-6 font-editorial text-[1.35rem] leading-[1.55] text-ink/85 italic md:text-[1.75rem] md:leading-[1.5]">
              {PROFILE.futureVision}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              {["Inovatif", "Komunikatif", "Estetik", "Berdampak"].map((w, i) => (
                <motion.span
                  key={w}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="rounded-full border border-ink/30 bg-ink/5 px-4 py-2 font-display text-[0.7rem] font-bold tracking-[0.14em] uppercase backdrop-blur-sm transition-colors duration-400 hover:bg-ink hover:text-flame"
                >
                  {w}
                </motion.span>
              ))}
            </div>
          </Reveal>

          {/* goal cards */}
          <div className="space-y-4 lg:col-span-5">
            {GOALS.map((g, i) => (
              <motion.article
                key={g.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden border border-ink/25 bg-ink p-7 text-paper transition-transform duration-500 hover:-translate-y-1.5 md:p-8"
              >
                <span
                  className="absolute inset-0 origin-left scale-x-0 bg-paper transition-transform duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
                  aria-hidden="true"
                />
                <div className="relative flex items-start justify-between gap-4">
                  <span className="u-label text-flame tabular-nums">Target {g.k}</span>
                  <IconArrowUpRight className="h-5 w-5 text-paper/40 transition-all duration-500 group-hover:rotate-45 group-hover:text-ink" />
                </div>
                <h3 className="relative mt-5 font-display text-2xl font-bold tracking-[-0.03em] uppercase transition-colors duration-500 group-hover:text-ink md:text-3xl">
                  {g.title}
                </h3>
                <p className="relative mt-3 max-w-sm text-sm leading-relaxed text-paper/60 transition-colors duration-500 group-hover:text-ink/70">
                  {g.desc}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      {/* bottom marquee */}
      <Marquee
        items={["Graphic Designer", "Multimedia Creative", "Visual Problem Solver", "DKV Student"]}
        tone="ink"
        separator="●"
        className="border-y border-ink/25"
      />
    </section>
  );
}
