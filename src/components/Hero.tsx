import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { useState, type PointerEvent } from "react";
import { IconArrowDown, IconArrowUpRight, IconSparkle } from "@/components/ui/Icons";
import PlaceholderArt from "@/components/ui/PlaceholderArt";
import { Button, MaskLine, Reveal } from "@/components/ui/Primitives";
import { LINKS, MEDIA, PROFILE } from "@/data/site";

function RotatingBadge() {
  const reduce = useReducedMotion();
  return (
    <div className="pointer-events-none absolute -bottom-7 -left-3 h-24 w-24 sm:-left-8 sm:h-32 sm:w-32 lg:-left-10">
      <svg
        viewBox="0 0 120 120"
        className={reduce ? "h-full w-full" : "u-spin-slow h-full w-full"}
        aria-hidden="true"
      >
        <defs>
          <path id="badge-circle" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
        </defs>
        <circle cx="60" cy="60" r="58" fill="#111111" stroke="rgba(255,255,255,0.14)" />
        <text
          fill="#FF6B35"
          fontFamily="Space Grotesk, sans-serif"
          fontSize="10.5"
          fontWeight="600"
          letterSpacing="2.6"
        >
          <textPath href="#badge-circle" startOffset="0%">
            CREATIVE DESIGNER ✳ MULTIMEDIA ✳ DKV ✳
          </textPath>
        </text>
      </svg>
      <IconSparkle className="absolute top-1/2 left-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 text-paper" />
    </div>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  const [portraitOk, setPortraitOk] = useState(true);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 60, damping: 18, mass: 0.6 });

  const portraitX = useTransform(sx, [-0.5, 0.5], [16, -16]);
  const portraitY = useTransform(sy, [-0.5, 0.5], [12, -12]);
  const glowX = useTransform(sx, [-0.5, 0.5], [-50, 50]);
  const glowY = useTransform(sy, [-0.5, 0.5], [-34, 34]);
  const gridX = useTransform(sx, [-0.5, 0.5], [-8, 8]);

  const onMove = (e: PointerEvent<HTMLElement>) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  const stats = [
    { k: "05", v: "Bidang Kreatif" },
    { k: "08", v: "Tools Dikuasai" },
    { k: "DKV", v: "Sejak 2025" },
  ];

  return (
    <section
      id="home"
      onPointerMove={onMove}
      className="relative isolate overflow-hidden bg-ink pt-32 pb-0 md:pt-40"
    >
      {/* layered ambient background */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <motion.div style={{ x: gridX }} className="u-gridlines absolute inset-0 opacity-70" />
        <div className="u-dotgrid absolute inset-x-0 bottom-0 h-64 opacity-40 [mask-image:linear-gradient(to_top,black,transparent)]" />
        <motion.div
          style={{ x: glowX, y: glowY }}
          className="absolute top-[6%] right-[6%] h-[520px] w-[520px] rounded-full bg-flame/22 blur-[130px]"
        />
        <div className="absolute bottom-[18%] left-[-10%] h-[420px] w-[420px] rounded-full bg-flame/10 blur-[140px]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
      </div>

      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-8">
        {/* ---------------- copy ---------------- */}
        <div className="lg:col-span-7 xl:col-span-7">
          <Reveal delay={0.1}>
            <div className="inline-flex items-center gap-3 rounded-full border border-paper/15 bg-paper/5 py-1.5 pr-4 pl-2 backdrop-blur-sm">
              <span className="relative flex h-2 w-2 text-flame">
                <span className="u-pulse absolute inset-0 rounded-full" />
                <span className="relative h-2 w-2 rounded-full bg-flame" />
              </span>
              <span className="u-label text-paper/70">
                Open to collaborate · {PROFILE.location.split("—")[0].trim()}
              </span>
            </div>
          </Reveal>

          <div className="mt-8 flex items-center gap-4">
            <span className="h-px w-10 bg-flame md:w-16" />
            <p className="font-display text-sm font-medium tracking-[0.34em] text-paper/60 uppercase md:text-base">
              Hello, I&rsquo;m
            </p>
          </div>

          <h1 className="mt-5 font-display text-[clamp(2.9rem,9.4vw,7.4rem)] font-bold tracking-[-0.05em] uppercase">
            <MaskLine delay={0.15}>
              <span className="text-paper">Kayla</span>
            </MaskLine>
            <MaskLine delay={0.24}>
              <span className="u-stroke-text">Nauri</span>
            </MaskLine>
            <MaskLine delay={0.33}>
              <span className="relative inline-block text-flame">
                Azzahra
                <svg
                  viewBox="0 0 400 14"
                  preserveAspectRatio="none"
                  className="absolute -bottom-1 left-0 h-2.5 w-full text-flame/70"
                  aria-hidden="true"
                >
                  <motion.path
                    d="M2 9C70 3 150 12 220 6s120-2 178 3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1.15, duration: 1.1, ease: "easeInOut" }}
                  />
                </svg>
              </span>
            </MaskLine>
          </h1>

          <Reveal delay={0.5}>
            <p className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 font-display text-sm font-semibold tracking-[0.1em] text-paper uppercase sm:text-base">
              <span className="h-2 w-2 rotate-45 bg-flame" />
              Creative Designer
              <span className="text-paper/30">&amp;</span>
              Multimedia Enthusiast.
            </p>
          </Reveal>

          <Reveal delay={0.58}>
            <p className="mt-6 max-w-xl font-editorial text-[1.45rem] leading-snug text-paper/85 italic md:text-[1.75rem]">
              &ldquo;{PROFILE.tagline}&rdquo;
            </p>
          </Reveal>

          <Reveal delay={0.66}>
            <p className="mt-6 max-w-xl text-[0.95rem] leading-relaxed text-paper/55 md:text-base">
              {PROFILE.heroDescription}
            </p>
          </Reveal>

          <Reveal delay={0.74}>
            <div className="mt-9 flex flex-wrap items-center gap-3.5">
              <Button href="#portfolio" variant="solid">
                Explore My Works
                <IconArrowDown className="h-4 w-4" />
              </Button>
              <Button href="#about" variant="ghost">
                About Me
                <IconArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.85}>
            <dl className="mt-12 flex flex-wrap gap-x-10 gap-y-5 border-t border-paper/10 pt-7">
              {stats.map((s) => (
                <div key={s.v}>
                  <dt className="font-display text-3xl font-bold text-flame tabular-nums md:text-4xl">
                    {s.k}
                  </dt>
                  <dd className="mt-1 u-label text-paper/45">{s.v}</dd>
                </div>
              ))}
              <a
                href={LINKS.behance}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="hover"
                className="u-link ml-auto self-end font-display text-xs font-semibold tracking-[0.14em] text-paper/60 uppercase transition-colors hover:text-flame"
              >
                Behance Portfolio ↗
              </a>
            </dl>
          </Reveal>
        </div>

        {/* ---------------- portrait ---------------- */}
        <div className="relative lg:col-span-5">
          <Reveal delay={0.35} y={40}>
            <motion.div
              style={{ x: portraitX, y: portraitY }}
              className="group relative mx-auto w-full max-w-[420px] lg:max-w-none"
            >
              {/* offset frame */}
              <div
                className="absolute -top-5 -right-5 h-full w-full rounded-[2px] border border-flame/45 transition-transform duration-700 ease-out group-hover:-translate-y-2 group-hover:translate-x-2"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-6 -left-6 h-24 w-24 bg-flame/12"
                aria-hidden="true"
              />

              <div className="relative overflow-hidden rounded-[2px] border border-paper/12 bg-ink-2">
                <div className="relative aspect-3/4 w-full overflow-hidden">
                  <div className="h-full w-full transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]">
                    {portraitOk && MEDIA.heroPortrait ? (
                      <img
                        src={MEDIA.heroPortrait}
                        alt="Kayla Nauri Azzahra — siswi SMK jurusan Desain Komunikasi Visual, Creative Designer & Multimedia Enthusiast"
                        width={1086}
                        height={1448}
                        loading="eager"
                        fetchPriority="high"
                        decoding="async"
                        onError={() => setPortraitOk(false)}
                        className="h-full w-full object-cover object-center"
                      />
                    ) : (
                      <PlaceholderArt variant={2} />
                    )}
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/5 to-transparent opacity-85" />
                  <div className="pointer-events-none absolute inset-0 bg-flame/0 mix-blend-color transition-colors duration-700 group-hover:bg-flame/12" />

                  {/* crop marks */}
                  {[
                    "top-3 left-3 border-t border-l",
                    "top-3 right-3 border-t border-r",
                    "bottom-3 left-3 border-b border-l",
                    "bottom-3 right-3 border-b border-r",
                  ].map((c) => (
                    <span
                      key={c}
                      className={`absolute h-5 w-5 border-paper/45 ${c}`}
                      aria-hidden="true"
                    />
                  ))}

                  {/* caption */}
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
                    <div>
                      <p className="u-label text-flame">Portrait / 2026</p>
                      <p className="mt-1.5 font-display text-sm font-semibold tracking-tight text-paper">
                        {PROFILE.name}
                      </p>
                    </div>
                    <p className="font-display text-[0.65rem] tracking-[0.2em] text-paper/45 uppercase">
                      DKV · SMK IT
                    </p>
                  </div>
                </div>
              </div>

              <RotatingBadge />
            </motion.div>
          </Reveal>
        </div>
      </div>

      {/* scroll cue */}
      <div className="mx-auto mt-16 flex max-w-[1400px] items-center justify-between gap-6 px-5 pb-8 sm:px-8">
        <div className="flex items-center gap-3 text-paper/40">
          <motion.span
            animate={reduce ? {} : { y: [0, 7, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <IconArrowDown className="h-4 w-4 text-flame" />
          </motion.span>
          <span className="u-label">Scroll to explore</span>
        </div>
        <span className="hidden font-display text-[0.65rem] tracking-[0.3em] text-paper/25 uppercase sm:block">
          {PROFILE.brand} — Portfolio 2026
        </span>
      </div>
    </section>
  );
}
