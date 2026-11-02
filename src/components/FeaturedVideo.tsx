import { useState } from "react";
import { motion } from "framer-motion";
import { IconArrowUpRight, IconMotion, IconPlay } from "@/components/ui/Icons";
import { Reveal, SectionHeading } from "@/components/ui/Primitives";
import { LINKS, MEDIA } from "@/data/site";

const WORKFLOW = [
  {
    n: "01",
    t: "Pra-produksi",
    d: "Membaca brief, menyusun konsep visual, dan menyiapkan kebutuhan alat.",
  },
  {
    n: "02",
    t: "Produksi",
    d: "Pengambilan foto dan video lapangan dengan memperhatikan komposisi.",
  },
  {
    n: "03",
    t: "Pasca-produksi",
    d: "Editing, penyelarasan audio, color grading, dan motion graphics dasar.",
  },
];

export default function FeaturedVideo() {
  const [playing, setPlaying] = useState(false);

  const openSource = () => {
    if (MEDIA.videoSrc) {
      setPlaying(true);
      return;
    }
    window.open(LINKS.videoShare, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="video" className="relative overflow-hidden bg-ink py-24 md:py-32">
      <div className="u-gridlines pointer-events-none absolute inset-0 opacity-45" aria-hidden="true" />
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-[380px] w-[820px] -translate-x-1/2 rounded-full bg-flame/14 blur-[150px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            index="06"
            label="Featured Video"
            tone="light"
            className="max-w-2xl"
            title={
              <>
                Behind the{" "}
                <span className="font-editorial font-normal italic text-flame">creative</span>{" "}
                process
              </>
            }
          />
          <Reveal delay={0.15}>
            <div className="flex items-center gap-3 rounded-full border border-paper/15 bg-paper/5 px-4 py-2">
              <span className="relative flex h-2 w-2 text-flame">
                <span className="u-pulse absolute inset-0 rounded-full" />
                <span className="relative h-2 w-2 rounded-full bg-flame" />
              </span>
              <span className="u-label text-paper/65">Video Showreel</span>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* ---------------- vertical player ---------------- */}
          <Reveal y={40} className="lg:col-span-5">
            <figure className="group relative mx-auto w-full max-w-[380px] lg:mx-0">
              <div
                className="absolute -top-4 -right-4 hidden h-full w-full border border-flame/40 transition-transform duration-700 ease-out group-hover:translate-x-2 group-hover:-translate-y-2 sm:block"
                aria-hidden="true"
              />

              <div className="relative overflow-hidden border border-paper/12 bg-ink-2">
                {/* film perforations */}
                <div
                  className="pointer-events-none absolute inset-y-0 left-0 z-20 w-5 [background:repeating-linear-gradient(to_bottom,#111_0_12px,transparent_12px_22px)]"
                  aria-hidden="true"
                />
                <div
                  className="pointer-events-none absolute inset-y-0 right-0 z-20 w-5 [background:repeating-linear-gradient(to_bottom,#111_0_12px,transparent_12px_22px)]"
                  aria-hidden="true"
                />

                <div className="relative aspect-9/16 w-full">
                  {playing && MEDIA.videoSrc ? (
                    <video
                      className="h-full w-full bg-ink object-contain"
                      src={MEDIA.videoSrc}
                      poster={MEDIA.videoPoster}
                      controls
                      autoPlay
                      playsInline
                      preload="metadata"
                    />
                  ) : (
                    <>
                      <img
                        src={MEDIA.videoPoster}
                        alt="Cuplikan video karya Kayla Nauri Azzahra — behind the creative process"
                        width={720}
                        height={1280}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-ink/45" />

                      {/* hud */}
                      <div className="absolute inset-x-0 top-0 flex items-center justify-between gap-3 px-7 py-4">
                        <span className="u-label text-paper/65">Showreel / 2026</span>
                        <span className="flex items-center gap-2 font-display text-[0.6rem] tracking-[0.22em] text-paper/55 uppercase">
                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-flame" />
                          Rec
                        </span>
                      </div>

                      {/* play */}
                      <button
                        type="button"
                        onClick={openSource}
                        data-cursor="hover"
                        aria-label={
                          MEDIA.videoSrc
                            ? "Putar video showreel"
                            : "Buka video showreel di Google Photos"
                        }
                        className="absolute inset-0 z-10 flex items-center justify-center"
                      >
                        <span className="relative flex h-20 w-20 items-center justify-center rounded-full border border-paper/35 bg-ink/45 text-paper backdrop-blur-md transition-all duration-500 ease-out hover:scale-110 hover:border-flame hover:bg-flame hover:text-ink">
                          <span className="absolute inset-0 rounded-full border border-flame/45 text-flame [animation:pulse-ring_2.8s_cubic-bezier(0.24,0,0.38,1)_infinite]" />
                          <IconPlay className="ml-1 h-7 w-7" />
                        </span>
                      </button>

                      {/* lower third */}
                      <div className="absolute inset-x-0 bottom-0 px-7 pb-6">
                        <span className="inline-flex items-center gap-2 rounded-full border border-paper/20 bg-ink/45 px-3 py-1 backdrop-blur-sm">
                          <IconMotion className="h-3.5 w-3.5 text-flame" />
                          <span className="font-display text-[0.58rem] font-semibold tracking-[0.18em] text-paper/75 uppercase">
                            9:16 · Vertical
                          </span>
                        </span>
                        <p className="mt-3 font-display text-lg leading-tight font-bold tracking-[-0.02em] text-paper uppercase">
                          Creative Process Reel
                        </p>
                        <p className="mt-2 text-xs leading-relaxed text-paper/60">
                          {MEDIA.videoSrc
                            ? "Diputar langsung di halaman ini."
                            : "Video dihosting di Google Photos — tekan play untuk membuka di tab baru."}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>

              <figcaption className="mt-4 flex items-center justify-between gap-3 text-xs">
                <span className="u-label text-paper/40">Fig. 06 — Videography</span>
                <a
                  href={LINKS.videoShare}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  className="u-link font-semibold text-paper/60 transition-colors hover:text-flame"
                >
                  Sumber video ↗
                </a>
              </figcaption>
            </figure>
          </Reveal>

          {/* ---------------- narrative + workflow ---------------- */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <p className="max-w-xl font-editorial text-[1.5rem] leading-snug text-paper/85 italic md:text-[1.9rem] md:leading-[1.35]">
                Karya visual tidak berhenti di tombol shutter — ia tumbuh di ruang editing.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-paper/55 md:text-base">
                Reel ini merekam cara saya bekerja: mengambil gambar di lapangan, menyusunnya di
                timeline, menyelaraskan audio, memberi warna, lalu menambahkan gerak agar pesan
                visualnya sampai.
              </p>
            </Reveal>

            <ol className="mt-10 border-t border-paper/10">
              {WORKFLOW.map((w, i) => (
                <motion.li
                  key={w.n}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative grid grid-cols-[64px_1fr] items-start gap-4 border-b border-paper/10 py-6 transition-colors duration-500 hover:border-flame/60 md:grid-cols-[92px_1fr] md:gap-8 md:py-7"
                >
                  <span className="font-display text-3xl font-bold text-paper/18 tabular-nums transition-colors duration-500 group-hover:text-flame md:text-5xl">
                    {w.n}
                  </span>
                  <span className="block">
                    <span className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <span className="font-display text-base font-bold tracking-[0.02em] text-paper uppercase transition-transform duration-500 group-hover:translate-x-1 md:text-xl">
                        {w.t}
                      </span>
                      <span className="u-label text-flame/80">Tahap {w.n}</span>
                    </span>
                    <span className="mt-2.5 block max-w-lg text-sm leading-relaxed text-paper/55">
                      {w.d}
                    </span>
                  </span>
                  <span className="absolute right-0 bottom-6 hidden h-9 w-9 items-center justify-center rounded-full border border-paper/15 text-paper/40 transition-all duration-500 group-hover:rotate-45 group-hover:border-flame group-hover:text-flame md:flex">
                    <IconArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </motion.li>
              ))}
            </ol>

            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <button
                  type="button"
                  onClick={openSource}
                  data-cursor="hover"
                  className="group inline-flex items-center gap-3 rounded-full bg-flame px-6 py-3.5 font-display text-xs font-semibold tracking-[0.14em] text-ink uppercase transition-transform duration-500 hover:scale-[1.03]"
                >
                  <IconPlay className="h-4 w-4" />
                  {MEDIA.videoSrc ? "Putar Showreel" : "Tonton Video Lengkap"}
                </button>
                <p className="max-w-xs text-xs leading-relaxed text-paper/40">
                  Ingin video diputar langsung di dalam halaman? Unggah file mp4-nya lalu isi{" "}
                  <code className="rounded bg-paper/8 px-1.5 py-0.5 font-display text-[0.68rem] text-paper/70">
                    MEDIA.videoSrc
                  </code>
                  .
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
