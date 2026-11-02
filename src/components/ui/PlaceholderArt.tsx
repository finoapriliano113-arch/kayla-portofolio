import { cn } from "@/utils/cn";

/**
 * PlaceholderArt — komposisi grafis SVG unik per kategori karya.
 * Dipakai sebagai thumbnail sementara sampai artwork ASLI dari Behance
 * diunggah. Tidak ada karya fiktif: ini murni elemen visual placeholder.
 */

const INK = "#141414";
const FLAME = "#FF6B35";
const PAPER = "#F4F2EE";
const ASH = "#333333";

type Props = { variant: number; className?: string };

function Defs() {
  return (
    <defs>
      <pattern id="pa-dots" width="10" height="10" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1.6" fill={FLAME} opacity="0.55" />
      </pattern>
      <pattern id="pa-grid" width="25" height="25" patternUnits="userSpaceOnUse">
        <path d="M25 0H0v25" fill="none" stroke={PAPER} strokeOpacity="0.09" strokeWidth="1" />
      </pattern>
      <linearGradient id="pa-glow" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor={FLAME} stopOpacity="0.35" />
        <stop offset="100%" stopColor={FLAME} stopOpacity="0" />
      </linearGradient>
    </defs>
  );
}

export default function PlaceholderArt({ variant, className }: Props) {
  return (
    <svg
      viewBox="0 0 400 500"
      preserveAspectRatio="xMidYMid slice"
      className={cn("h-full w-full", className)}
      role="img"
      aria-label="Placeholder visual karya"
    >
      <rect width="400" height="500" fill={INK} />
      <Defs />

      {variant === 0 && (
        <g>
          <rect width="400" height="500" fill="url(#pa-grid)" />
          <circle cx="300" cy="130" r="150" fill="url(#pa-glow)" />
          <rect
            x="48"
            y="60"
            width="180"
            height="230"
            fill={FLAME}
            className="transition-transform duration-[900ms] ease-out group-hover:-translate-y-3"
          />
          <g fill={PAPER} opacity="0.9">
            <rect x="48" y="320" width="304" height="12" />
            <rect x="48" y="344" width="230" height="12" />
            <rect x="48" y="368" width="272" height="12" opacity="0.5" />
          </g>
          <rect x="248" y="60" width="104" height="104" fill="none" stroke={PAPER} strokeOpacity="0.35" strokeWidth="2" />
          <path d="M48 430h304" stroke={FLAME} strokeWidth="3" />
          <circle cx="248" cy="240" r="52" fill="none" stroke={PAPER} strokeOpacity="0.25" strokeWidth="10" />
        </g>
      )}

      {variant === 1 && (
        <g>
          <rect width="400" height="500" fill="url(#pa-dots)" opacity="0.35" />
          <circle
            cx="200"
            cy="230"
            r="120"
            fill={FLAME}
            className="[transform-box:fill-box] [transform-origin:center] transition-transform duration-[900ms] ease-out group-hover:scale-110"
          />
          <circle cx="140" cy="290" r="90" fill={PAPER} opacity="0.14" />
          <path
            d="M60 380c60-90 120 40 180-50s100 20 100 20"
            fill="none"
            stroke={PAPER}
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.8"
          />
          <path d="M60 420c60-90 120 40 180-50s100 20 100 20" fill="none" stroke={FLAME} strokeWidth="2" strokeLinecap="round" opacity="0.6" />
          <rect x="40" y="40" width="60" height="60" fill="none" stroke={PAPER} strokeOpacity="0.4" strokeWidth="2" />
          <circle cx="330" cy="80" r="18" fill={FLAME} />
        </g>
      )}

      {variant === 2 && (
        <g>
          <rect width="400" height="500" fill="url(#pa-grid)" />
          {[0, 1, 2, 3, 4].map((i) => (
            <path
              key={i}
              d={`M-20 ${120 + i * 62} C 90 ${40 + i * 62}, 250 ${260 + i * 62}, 420 ${110 + i * 62}`}
              fill="none"
              stroke={i % 2 === 0 ? FLAME : PAPER}
              strokeOpacity={i % 2 === 0 ? 0.95 : 0.28}
              strokeWidth={i === 2 ? 4 : 2}
              className="transition-all duration-1000 ease-out group-hover:opacity-100"
              style={{ transitionDelay: `${i * 40}ms` }}
            />
          ))}
          <circle cx="200" cy="250" r="6" fill={PAPER} />
          <circle cx="200" cy="250" r="34" fill="none" stroke={PAPER} strokeOpacity="0.4" strokeWidth="1.5" />
        </g>
      )}

      {variant === 3 && (
        <g>
          <circle cx="200" cy="250" r="180" fill="url(#pa-glow)" />
          <g
            className="[transform-box:fill-box] [transform-origin:center] transition-transform duration-[1200ms] ease-out group-hover:rotate-45"
          >
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <path
                key={i}
                d="M200 130 L296 190 L200 250 Z"
                fill={i % 2 ? FLAME : PAPER}
                opacity={i % 2 ? 0.9 : 0.16}
                transform={`rotate(${i * 60} 200 250)`}
              />
            ))}
          </g>
          <circle cx="200" cy="250" r="120" fill="none" stroke={PAPER} strokeOpacity="0.5" strokeWidth="2" />
          <circle cx="200" cy="250" r="46" fill={INK} stroke={FLAME} strokeWidth="3" />
          <circle cx="186" cy="236" r="10" fill={FLAME} opacity="0.5" />
          {["M40 40h40M40 40v40", "M360 40h-40M360 40v40", "M40 460h40M40 460v-40", "M360 460h-40M360 460v-40"].map((d) => (
            <path key={d} d={d} stroke={PAPER} strokeOpacity="0.6" strokeWidth="2" fill="none" />
          ))}
        </g>
      )}

      {variant === 4 && (
        <g>
          <rect width="400" height="500" fill="url(#pa-grid)" />
          <circle cx="286" cy="150" r="58" fill={FLAME} className="transition-transform duration-[900ms] ease-out group-hover:-translate-y-4" />
          <path d="M0 340 L120 250 L210 330 L290 268 L400 350 V500 H0 Z" fill={PAPER} opacity="0.12" />
          <path d="M0 372 L130 296 L220 366 L300 312 L400 386" fill="none" stroke={PAPER} strokeWidth="2.5" opacity="0.75" />
          <path d="M0 404 L400 404" stroke={ASH} strokeWidth="1" />
          <g fill={FLAME}>
            <rect x="40" y="430" width="70" height="6" />
            <rect x="120" y="430" width="30" height="6" opacity="0.5" />
          </g>
          <rect x="40" y="40" width="90" height="26" fill="none" stroke={PAPER} strokeOpacity="0.4" strokeWidth="1.5" />
        </g>
      )}

      {variant === 5 && (
        <g>
          {[0, 1, 2].map((i) => (
            <g key={i} className="transition-transform duration-[900ms] ease-out group-hover:-translate-y-2" style={{ transitionDelay: `${i * 70}ms` }}>
              <rect x={44 + i * 108} y="70" width="96" height="360" fill={PAPER} opacity={i === 1 ? 0.95 : 0.12} />
              <rect x={44 + i * 108} y="70" width="96" height="360" fill="none" stroke={PAPER} strokeOpacity="0.35" strokeWidth="1.5" />
              <rect x={56 + i * 108} y={i === 1 ? 90 : 100} width={i === 1 ? 72 : 40} height={i === 1 ? 60 : 8} fill={i === 1 ? FLAME : PAPER} opacity={i === 1 ? 1 : 0.4} />
              {[0, 1, 2, 3].map((l) => (
                <rect key={l} x={56 + i * 108} y={180 + l * 20} width={72 - l * 12} height="5" fill={i === 1 ? INK : PAPER} opacity={i === 1 ? 0.55 : 0.25} />
              ))}
              <path d={`M${140 + i * 108} 70V430`} stroke={INK} strokeOpacity="0.5" strokeWidth="1" strokeDasharray="4 4" />
            </g>
          ))}
          <rect width="400" height="500" fill="url(#pa-grid)" opacity="0.5" />
        </g>
      )}

      {variant === 6 && (
        <g>
          <rect width="400" height="500" fill="url(#pa-grid)" />
          <rect x="40" y="60" width="320" height="180" fill={PAPER} opacity="0.08" stroke={PAPER} strokeOpacity="0.3" strokeWidth="1.5" />
          <path d="M170 120l60 30-60 30z" fill={FLAME} className="[transform-box:fill-box] [transform-origin:center] transition-transform duration-700 ease-out group-hover:scale-110" />
          {[0, 1, 2].map((t) => (
            <g key={t}>
              <rect x="40" y={280 + t * 44} width="320" height="30" fill={PAPER} opacity="0.07" />
              <rect
                x={60 + t * 40}
                y={280 + t * 44}
                width={[150, 110, 190][t]}
                height="30"
                fill={t === 1 ? PAPER : FLAME}
                opacity={t === 1 ? 0.85 : 0.9}
                className="transition-all duration-[900ms] ease-out group-hover:opacity-100"
              />
            </g>
          ))}
          <path d="M232 268v148" stroke={FLAME} strokeWidth="2" />
          <path d="M226 268h12l-6 10z" fill={FLAME} />
          <g stroke={PAPER} strokeOpacity="0.35" strokeWidth="2">
            {Array.from({ length: 26 }).map((_, i) => (
              <path key={i} d={`M${46 + i * 12} ${452 - Math.abs(Math.sin(i * 1.7)) * 22}v${Math.abs(Math.sin(i * 1.7)) * 22}`} />
            ))}
          </g>
        </g>
      )}

      {variant === 7 && (
        <g>
          <circle cx="200" cy="250" r="190" fill="url(#pa-glow)" />
          <g className="u-spin-slow [transform-box:fill-box] [transform-origin:center]">
            <circle cx="200" cy="250" r="140" fill="none" stroke={FLAME} strokeWidth="3" strokeDasharray="180 400" strokeLinecap="round" />
            <circle cx="200" cy="250" r="104" fill="none" stroke={PAPER} strokeOpacity="0.45" strokeWidth="2" strokeDasharray="90 320" strokeLinecap="round" />
          </g>
          <circle cx="200" cy="250" r="64" fill="none" stroke={PAPER} strokeOpacity="0.25" strokeWidth="14" />
          <circle cx="200" cy="250" r="18" fill={FLAME} />
          {[0, 1, 2, 3].map((i) => (
            <rect
              key={i}
              x={104 + i * 60}
              y="440"
              width="16"
              height="16"
              transform="rotate(45 112 448)"
              fill={PAPER}
              opacity={0.3 + i * 0.2}
            />
          ))}
          <path d="M40 448h56M304 448h56" stroke={PAPER} strokeOpacity="0.25" strokeWidth="1.5" />
        </g>
      )}

      {variant === 9 && (
        <g>
          <rect width="400" height="500" fill="url(#pa-grid)" />
          {Array.from({ length: 9 }).map((_, i) => {
            const r = Math.floor(i / 3);
            const c = i % 3;
            const filled = i === 4 || i === 0;
            return (
              <g
                key={i}
                className="transition-transform duration-700 ease-out group-hover:-translate-y-2"
                style={{ transitionDelay: `${i * 45}ms` }}
              >
                <rect
                  x={62 + c * 96}
                  y={112 + r * 96}
                  width="80"
                  height="80"
                  fill={filled ? FLAME : PAPER}
                  opacity={filled ? 1 : 0.09}
                  stroke={filled ? "none" : PAPER}
                  strokeOpacity="0.3"
                  strokeWidth="1.5"
                />
                {i === 4 && <circle cx={102 + c * 96} cy={152 + r * 96} r="16" fill={INK} />}
              </g>
            );
          })}
          <rect x="62" y="404" width="276" height="8" fill={PAPER} opacity="0.5" />
          <rect x="62" y="424" width="164" height="8" fill={FLAME} opacity="0.85" />
          <rect x="62" y="60" width="80" height="26" fill="none" stroke={PAPER} strokeOpacity="0.4" strokeWidth="1.5" />
          <circle cx="322" cy="73" r="14" fill={FLAME} />
        </g>
      )}

      {variant === 8 && (
        <g>
          <rect width="400" height="500" fill="url(#pa-grid)" />
          <rect x="60" y="70" width="280" height="200" fill={PAPER} opacity="0.06" stroke={PAPER} strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="6 6" />
          <circle cx="200" cy="170" r="46" fill="none" stroke={FLAME} strokeWidth="2.5" />
          <path d="M200 108v124M138 170h124" stroke={FLAME} strokeWidth="1.2" opacity="0.7" />
          <circle cx="200" cy="170" r="8" fill={FLAME} />
          {[FLAME, PAPER, ASH, "#5A5A5A"].map((c, i) => (
            <rect key={c} x={60 + i * 70} y="300" width="70" height="46" fill={c} opacity={i === 2 ? 0.9 : 1} className="transition-transform duration-700 ease-out group-hover:-translate-y-2" style={{ transitionDelay: `${i * 60}ms` }} />
          ))}
          {["M40 40h30M40 40v30", "M360 40h-30M360 40v30", "M40 460h30M40 460v-30", "M360 460h-30M360 460v-30"].map((d) => (
            <path key={d} d={d} stroke={FLAME} strokeWidth="2" fill="none" />
          ))}
          <g fill={PAPER} opacity="0.55">
            <rect x="60" y="380" width="180" height="8" />
            <rect x="60" y="400" width="120" height="8" />
          </g>
        </g>
      )}
    </svg>
  );
}
