import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/utils/cn";

/* ------------------------------------------------------------------ */
/*  Reveal — scroll-triggered fade/slide                               */
/* ------------------------------------------------------------------ */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-70px" }}
      transition={{ duration: reduce ? 0.3 : 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  MaskLine — per-line typographic reveal for big headings            */
/* ------------------------------------------------------------------ */
export function MaskLine({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <span className={cn("block overflow-hidden pb-[0.14em] -mb-[0.14em]", className)}>
      <motion.span
        className="block"
        initial={{ y: "110%", opacity: 0 }}
        whileInView={{ y: "0%", opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  SectionHeading — editorial index + label + big title               */
/* ------------------------------------------------------------------ */
export function SectionHeading({
  index,
  label,
  title,
  description,
  tone = "dark",
  align = "left",
  className,
}: {
  index: string;
  label: string;
  title: ReactNode;
  description?: ReactNode;
  tone?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
}) {
  const dark = tone === "dark"; // dark = section sits on light paper
  return (
    <div
      className={cn(
        "relative",
        align === "center" && "mx-auto max-w-3xl text-center",
        className,
      )}
    >
      <Reveal>
        <div
          className={cn(
            "flex items-center gap-3",
            align === "center" && "justify-center",
          )}
        >
          <span className="u-label text-flame tabular-nums">({index})</span>
          <span className={cn("h-px w-8", dark ? "bg-ink/30" : "bg-paper/30")} />
          <span
            className={cn(
              "u-label",
              dark ? "text-ash-2" : "text-paper/50",
            )}
          >
            {label}
          </span>
        </div>
      </Reveal>

      <h2
        className={cn(
          "mt-5 text-[clamp(2.1rem,6.2vw,4.6rem)]",
          dark ? "text-ink" : "text-paper",
        )}
      >
        <MaskLine>{title}</MaskLine>
      </h2>

      {description && (
        <Reveal delay={0.12}>
          <p
            className={cn(
              "mt-6 max-w-2xl text-[0.975rem] leading-relaxed md:text-lg",
              align === "center" && "mx-auto",
              dark ? "text-ash-2" : "text-paper/60",
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Button                                                             */
/* ------------------------------------------------------------------ */
export function Button({
  children,
  href,
  onClick,
  variant = "solid",
  className,
  external,
  type = "button",
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "solid" | "ghost" | "ghost-dark";
  className?: string;
  external?: boolean;
  type?: "button" | "submit";
}) {
  const cls = cn(
    "btn",
    variant === "solid" && "btn--solid",
    variant === "ghost" && "btn--ghost",
    variant === "ghost-dark" && "btn--ghost-dark",
    className,
  );
  const inner = (
    <>
      <span className="btn__fill" aria-hidden="true" />
      <span className="btn__label">{children}</span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={cls}
        data-cursor="hover"
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {inner}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls} data-cursor="hover">
      {inner}
    </button>
  );
}

/* ------------------------------------------------------------------ */
/*  Marquee                                                            */
/* ------------------------------------------------------------------ */
export function Marquee({
  items,
  tone = "flame",
  reverse = false,
  className,
  separator = "✳",
}: {
  items: string[];
  tone?: "flame" | "ink" | "outline";
  reverse?: boolean;
  className?: string;
  separator?: string;
}) {
  const row = [...items, ...items];
  return (
    <div
      className={cn(
        "marquee relative w-full overflow-hidden select-none",
        reverse && "marquee--reverse",
        tone === "flame" && "bg-flame text-ink",
        tone === "ink" && "bg-ink text-paper",
        className,
      )}
      aria-hidden="true"
    >
      <div className="marquee__track items-center gap-8 py-3.5 md:gap-12 md:py-4">
        {row.map((word, i) => (
          <span key={`${word}-${i}`} className="flex items-center gap-8 md:gap-12">
            <span
              className={cn(
                "font-display text-sm font-semibold tracking-[0.16em] uppercase whitespace-nowrap md:text-base",
                tone === "outline" && "u-stroke-text",
              )}
            >
              {word}
            </span>
            <span className="text-xs opacity-60">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  ScrollProgress — thin flame bar pinned to the top                  */
/* ------------------------------------------------------------------ */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    restDelta: 0.001,
  });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 z-[90] h-[3px] w-full origin-left bg-flame"
      aria-hidden="true"
    />
  );
}

/* ------------------------------------------------------------------ */
/*  Grain + vignette overlay                                           */
/* ------------------------------------------------------------------ */
export function Grain() {
  return (
    <div
      className="u-grain pointer-events-none fixed inset-0 z-[80] opacity-[0.05] mix-blend-overlay"
      aria-hidden="true"
    />
  );
}

/* ------------------------------------------------------------------ */
/*  Cursor — flame ring follower (fine pointers only)                  */
/* ------------------------------------------------------------------ */
export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const reduce = useReducedMotion();
  const ring = useRef<HTMLDivElement | null>(null);
  const dot = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine || reduce) return;

    setEnabled(true);
    document.documentElement.classList.add("u-cursor-none");

    let lastX = window.innerWidth / 2;
    let lastY = window.innerHeight / 2;
    let rx = lastX;
    let ry = lastY;
    let raf = 0;

    const place = (el: HTMLElement | null, x: number, y: number) => {
      if (el) el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    };

    place(dot.current, lastX, lastY);
    place(ring.current, lastX, lastY);

    const onMove = (e: MouseEvent) => {
      lastX = e.clientX;
      lastY = e.clientY;
      place(dot.current, lastX, lastY);
      const t = e.target as HTMLElement | null;
      setHovering(
        !!t?.closest("a, button, [data-cursor='hover'], input, textarea, select"),
      );
    };

    const loop = () => {
      rx += (lastX - rx) * 0.16;
      ry += (lastY - ry) * 0.16;
      place(ring.current, rx, ry);
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("u-cursor-none");
    };
  }, [reduce]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={ring}
        style={{ transform: "translate3d(-120px, -120px, 0) translate(-50%, -50%)" }}
        className={cn(
          "pointer-events-none fixed top-0 left-0 z-[95] rounded-full border transition-[width,height,background-color,border-color] duration-300 ease-out",
          hovering
            ? "h-12 w-12 border-flame bg-flame/15"
            : "h-8 w-8 border-paper/45 bg-transparent",
        )}
        aria-hidden="true"
      />
      <div
        ref={dot}
        style={{ transform: "translate3d(-120px, -120px, 0) translate(-50%, -50%)" }}
        className={cn(
          "pointer-events-none fixed top-0 left-0 z-[95] h-1.5 w-1.5 rounded-full bg-flame transition-opacity duration-300",
          hovering ? "opacity-0" : "opacity-100",
        )}
        aria-hidden="true"
      />
    </>
  );
}


