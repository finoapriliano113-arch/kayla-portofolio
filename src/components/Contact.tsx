import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import {
  IconArrowUpRight,
  IconCheck,
  IconCopy,
  IconInstagram,
  IconMail,
  IconWhatsApp,
} from "@/components/ui/Icons";
import { Button, Reveal, SectionHeading } from "@/components/ui/Primitives";
import { LINKS, PROFILE } from "@/data/site";

const PROJECT_TYPES = [
  "Desain poster / brosur",
  "Ilustrasi digital",
  "Fotografi & videografi produk",
  "Editing video / motion graphics",
  "Kolaborasi proyek kreatif",
  "Lainnya",
];

type Channel = {
  key: "wa" | "mail" | "ig";
  label: string;
  value: string;
  href: string;
  icon: typeof IconWhatsApp;
  copyText?: string;
  external?: boolean;
};

export default function Contact() {
  const [name, setName] = useState("");
  const [project, setProject] = useState(PROJECT_TYPES[0]);
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState<string | null>(null);

  const channels: Channel[] = useMemo(
    () => [
      {
        key: "wa",
        label: "WhatsApp",
        value: PROFILE.contact.whatsappDisplay,
        href: LINKS.whatsapp,
        icon: IconWhatsApp,
        copyText: PROFILE.contact.whatsappDisplay.replace(/-/g, ""),
        external: true,
      },
      {
        key: "mail",
        label: "Email",
        value: PROFILE.contact.email,
        href: LINKS.email,
        icon: IconMail,
        copyText: PROFILE.contact.email,
      },
      {
        key: "ig",
        label: "Instagram",
        value: PROFILE.contact.instagram,
        href: LINKS.instagram,
        icon: IconInstagram,
        copyText: "kaylanauree",
        external: true,
      },
    ],
    [],
  );

  const composed = `Halo Kayla, saya ${name.trim() || "…"}.\n\nProyek: ${project}\n${
    message.trim() ? `\n${message.trim()}\n` : ""
  }\nTerima kasih!`;

  const waHref = `${LINKS.whatsapp}?text=${encodeURIComponent(composed)}`;
  const mailHref = `${LINKS.email}?subject=${encodeURIComponent(
    `[Portfolio] ${project} — ${name.trim() || "Kolaborasi"}`,
  )}&body=${encodeURIComponent(composed)}`;

  const copy = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(key);
    window.setTimeout(() => setCopied(null), 2000);
  };

  const field =
    "w-full border border-paper/15 bg-paper/5 px-4 py-3.5 font-body text-sm text-paper placeholder:text-paper/35 transition-colors duration-300 focus:border-flame focus:bg-paper/8 focus:outline-none";

  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-24 md:py-32">
      <div className="u-gridlines pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
      <div
        className="pointer-events-none absolute top-1/4 -right-32 h-[480px] w-[480px] rounded-full bg-flame/16 blur-[150px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeading
          index="09"
          label="Contact Me"
          tone="light"
          title={
            <>
              Let&rsquo;s create something{" "}
              <span className="font-editorial font-normal italic text-flame">amazing!</span>
            </>
          }
          description="Have a creative idea or project in mind? Feel free to connect with me!"
        />

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-12">
          {/* ---------- channels ---------- */}
          <div className="space-y-4 lg:col-span-7">
            {channels.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={c.key}
                  initial={{ opacity: 0, x: -26 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative isolate overflow-hidden border border-paper/12 bg-ink-2/60"
                >
                  <span
                    className="absolute inset-0 -z-10 origin-bottom scale-y-0 bg-flame transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100"
                    aria-hidden="true"
                  />
                  <div className="flex flex-wrap items-center gap-5 p-6 md:p-7">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center border border-paper/15 text-flame transition-all duration-500 group-hover:-rotate-6 group-hover:border-ink/20 group-hover:text-ink">
                      <Icon className="h-6 w-6" />
                    </span>

                    <div className="min-w-0 flex-1">
                      <p className="u-label text-paper/45 transition-colors duration-500 group-hover:text-ink/55">
                        {c.label}
                      </p>
                      <a
                        href={c.href}
                        {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        data-cursor="hover"
                        className="mt-1.5 block truncate font-display text-lg font-bold tracking-[-0.02em] text-paper transition-colors duration-500 group-hover:text-ink md:text-2xl"
                      >
                        {c.value}
                      </a>
                    </div>

                    <div className="flex items-center gap-2">
                      {c.copyText && (
                        <button
                          type="button"
                          onClick={() => copy(c.copyText!, c.key)}
                          data-cursor="hover"
                          aria-label={`Salin ${c.label}`}
                          className="relative flex h-10 w-10 items-center justify-center rounded-full border border-paper/18 text-paper/60 transition-all duration-400 hover:border-flame hover:text-flame group-hover:border-ink/25 group-hover:text-ink"
                        >
                          <AnimatePresence mode="wait" initial={false}>
                            <motion.span
                              key={copied === c.key ? "check" : "copy"}
                              initial={{ opacity: 0, scale: 0.6 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.6 }}
                              transition={{ duration: 0.2 }}
                              className="flex"
                            >
                              {copied === c.key ? (
                                <IconCheck className="h-4 w-4" />
                              ) : (
                                <IconCopy className="h-4 w-4" />
                              )}
                            </motion.span>
                          </AnimatePresence>
                        </button>
                      )}
                      <a
                        href={c.href}
                        {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        data-cursor="hover"
                        aria-label={`Buka ${c.label}`}
                        className="flex h-11 w-11 items-center justify-center rounded-full bg-paper/8 text-paper transition-all duration-500 group-hover:rotate-45 group-hover:bg-ink group-hover:text-flame"
                      >
                        <IconArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* availability */}
            <Reveal delay={0.2}>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border border-paper/12 bg-paper/4 p-6">
                <span className="relative flex h-2.5 w-2.5 text-flame">
                  <span className="u-pulse absolute inset-0 rounded-full" />
                  <span className="relative h-2.5 w-2.5 rounded-full bg-flame" />
                </span>
                <p className="text-sm leading-relaxed text-paper/65">
                  <span className="font-display font-semibold tracking-wide text-paper uppercase">
                    Terbuka untuk kolaborasi
                  </span>{" "}
                  — proyek desain, dokumentasi, editing video, serta kesempatan belajar alur kerja
                  profesional di industri kreatif.
                </p>
              </div>
            </Reveal>

            {/* quick action buttons */}
            <Reveal delay={0.26}>
              <div className="flex flex-wrap gap-3 pt-1">
                <Button href={waHref} variant="solid" external>
                  <IconWhatsApp className="h-4 w-4" />
                  WhatsApp Me
                </Button>
                <Button href={mailHref} variant="ghost">
                  <IconMail className="h-4 w-4" />
                  Send an Email
                </Button>
                <Button href={LINKS.instagram} variant="ghost" external>
                  <IconInstagram className="h-4 w-4" />
                  Instagram
                </Button>
              </div>
            </Reveal>
          </div>

          {/* ---------- composer ---------- */}
          <Reveal delay={0.14} y={36} className="lg:col-span-5">
            <form
              className="relative border border-paper/12 bg-ink-2/70 p-6 backdrop-blur-sm md:p-8"
              onSubmit={(e) => {
                e.preventDefault();
                window.open(waHref, "_blank", "noopener,noreferrer");
              }}
            >
              <span className="absolute -top-3 left-6 bg-ink px-3">
                <span className="u-label text-flame">Quick Message</span>
              </span>

              <p className="mt-2 text-sm leading-relaxed text-paper/55">
                Isi detail singkatnya — pesan akan otomatis tersusun lalu terbuka di WhatsApp atau
                email Anda.
              </p>

              <div className="mt-6 space-y-4">
                <label className="block">
                  <span className="u-label mb-2 block text-paper/45">Nama Anda</span>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Contoh: Rina Studio"
                    className={field}
                    autoComplete="name"
                  />
                </label>

                <label className="block">
                  <span className="u-label mb-2 block text-paper/45">Jenis Proyek</span>
                  <select
                    value={project}
                    onChange={(e) => setProject(e.target.value)}
                    className={`${field} appearance-none bg-[length:14px] bg-[right_1rem_center] bg-no-repeat pr-10 [background-image:url("data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%23FF6B35'%20stroke-width='2'%3E%3Cpath%20d='M6%209l6%206%206-6'/%3E%3C/svg%3E")]`}
                  >
                    {PROJECT_TYPES.map((p) => (
                      <option key={p} value={p} className="bg-ink text-paper">
                        {p}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="u-label mb-2 block text-paper/45">Pesan</span>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    placeholder="Ceritakan singkat ide atau kebutuhan proyeknya…"
                    className={`${field} resize-none`}
                  />
                </label>
              </div>

              <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
                <Button type="submit" variant="solid" className="flex-1">
                  <IconWhatsApp className="h-4 w-4" />
                  Kirim via WhatsApp
                </Button>
                <Button href={mailHref} variant="ghost" className="flex-1">
                  <IconMail className="h-4 w-4" />
                  Kirim via Email
                </Button>
              </div>

              <p className="mt-4 text-[0.7rem] leading-relaxed text-paper/35">
                Tidak ada data yang disimpan di website ini — pesan langsung terbuka di aplikasi
                WhatsApp / email Anda.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
