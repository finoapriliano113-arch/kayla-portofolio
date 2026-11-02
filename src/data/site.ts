import studioFlatlay from "@/assets/studio-flatlay.jpg";
import videoPoster from "@/assets/video-poster.jpg";

/**
 * ---------------------------------------------------------------------------
 *  ASET GAMBAR
 *  Foto profil dibaca dari src/assets/kayla-portrait.(jpg|jpeg|png|webp).
 *  Jika file itu belum ada, website TIDAK error — Hero otomatis menampilkan
 *  placeholder. Cukup taruh fotonya di folder tersebut (rasio ideal 3:4).
 * ---------------------------------------------------------------------------
 */
const portraitModules = import.meta.glob<string>(
  "../assets/kayla-portrait.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" },
);
const kaylaPortrait: string | undefined = Object.values(portraitModules)[0];

export const MEDIA = {
  /** Foto profil hero — sumber: https://photos.app.goo.gl/buL1smEiVHDHu7fYA */
  heroPortrait: kaylaPortrait,
  /** Foto pendukung section About */
  studioFlatlay,
  /** Thumbnail video — sumber asli: https://photos.app.goo.gl/YiBW8fzmhZySYEjB8 */
  videoPoster,
  /**
   * Isi dengan URL file video (mp4/webm) yang sudah diunggah ke hosting
   * agar video bisa diputar langsung di dalam website.
   * Contoh: "https://cdn.example.com/kayla/showreel.mp4"
   */
  videoSrc: "" as string,
};

export const PROFILE = {
  brand: "KAYLA®",
  name: "Kayla Nauri Azzahra",
  role: "Creative Designer & Multimedia Enthusiast",
  tagline: "Transforming ideas into meaningful visual experiences.",
  heroDescription:
    "Siswi SMK jurusan Desain Komunikasi Visual yang memiliki passion dalam desain grafis, ilustrasi digital, fotografi, videografi, dan multimedia.",
  birthDate: "14 Januari 2010",
  school: "SMK Informatika Tulangan",
  major: "Desain Komunikasi Visual (DKV)",
  studyPeriod: "2025 – Sekarang",
  location: "Tulangan, Sidoarjo — Indonesia",
  brandingStatement:
    "Siswi SMK Jurusan Desain Komunikasi Visual yang kreatif, adaptif, dan memiliki ketertarikan tinggi pada industri multimedia. Memiliki pemahaman yang baik dalam pembuatan desain grafis, ilustrasi digital, fotografi produk, hingga penyuntingan video. Terbiasa menggunakan software kreatif seperti Adobe Illustrator, Canva, Alight Motion, CapCut, dan Ibis Paint X. Siap berkontribusi secara aktif dan belajar alur kerja profesional di industri kreatif.",
  futureVision:
    "Terus mengembangkan kemampuan di bidang desain komunikasi visual dan multimedia, memperluas pengalaman dalam industri kreatif, serta menghasilkan karya visual yang inovatif, komunikatif, dan memiliki nilai estetika. Saya ingin berkembang menjadi seorang graphic designer dan multimedia creative yang mampu menciptakan solusi visual serta memberikan dampak positif melalui kreativitas.",
  footerQuote: "Creativity is not just what I do, it's how I see the world.",
  contact: {
    whatsappDisplay: "0895-3698-18877",
    email: "Kaylanauriazzahra@gmail.com",
    instagram: "@kaylanauree",
  },
};

export const LINKS = {
  whatsapp: "https://wa.me/62895369818877",
  email: "mailto:Kaylanauriazzahra@gmail.com",
  instagram: "https://www.instagram.com/kaylanauree/",
  behance: "https://www.behance.net/kaylanau1",
  photoShare: "https://photos.app.goo.gl/buL1smEiVHDHu7fYA",
  videoShare: "https://photos.app.goo.gl/YiBW8fzmhZySYEjB8",
};

export const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Me" },
  { id: "skills", label: "Skills" },
  { id: "portfolio", label: "Portfolio" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
] as const;

export type Passion = {
  index: string;
  title: string;
  desc: string;
  icon: "pen" | "press" | "camera" | "motion" | "team";
};

export const PASSIONS: Passion[] = [
  {
    index: "01",
    title: "Graphic Design",
    desc: "Merancang poster, brosur trifold, dan media promosi sesuai brief.",
    icon: "pen",
  },
  {
    index: "02",
    title: "Prepress & Print Production",
    desc: "Menyiapkan berkas pre-press hingga produksi cetak fisik.",
    icon: "press",
  },
  {
    index: "03",
    title: "Photography & Videography",
    desc: "Mengambil foto dan video lapangan dengan komposisi yang tepat.",
    icon: "camera",
  },
  {
    index: "04",
    title: "Video Editing & Motion Graphics",
    desc: "Mengedit video, color grading, dan membuat motion graphics dasar.",
    icon: "motion",
  },
  {
    index: "05",
    title: "Creative Collaboration",
    desc: "Berpikir kreatif, komunikatif, dan terbiasa bekerja dalam tim.",
    icon: "team",
  },
];

export type SkillTool = {
  name: string;
  mark: string;
  color: string;
  note: string;
};

export type SkillGroup = {
  title: string;
  caption: string;
  tools: SkillTool[];
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Design & Illustration",
    caption: "Layout, vektor, dan ilustrasi digital.",
    tools: [
      { name: "Canva", mark: "C", color: "#00C4CC", note: "Layout & media promosi" },
      { name: "Adobe Illustrator", mark: "Ai", color: "#FF9A00", note: "Vektor & branding" },
      { name: "CorelDRAW", mark: "CD", color: "#4CAF50", note: "Desain siap cetak" },
      { name: "Ibis Paint X", mark: "ib", color: "#F25C8A", note: "Ilustrasi digital" },
    ],
  },
  {
    title: "Video & Motion",
    caption: "Editing, color grading, dan motion dasar.",
    tools: [
      { name: "CapCut", mark: "CC", color: "#FFFFFF", note: "Editing video pendek" },
      { name: "KineMaster", mark: "KM", color: "#E8452C", note: "Multitrack editing" },
      { name: "Alight Motion", mark: "AM", color: "#7C5CFF", note: "Motion graphics" },
    ],
  },
  {
    title: "Document & Production",
    caption: "Brief, naskah, dan dokumen produksi.",
    tools: [
      { name: "WPS Word", mark: "W", color: "#2D7FF9", note: "Dokumen & laporan" },
    ],
  },
];

export const CATEGORIES = [
  "All",
  "Graphic Design",
  "Digital Illustration",
  "Photography",
  "Videography",
  "Multimedia",
] as const;

export type PortfolioItem = {
  id: string;
  slot: string;
  title: string;
  category: Exclude<(typeof CATEGORIES)[number], "All">;
  art: number;
  ratio: "tall" | "wide" | "square";
};

/**
 * Slot karya. Belum ada artwork asli yang bisa diambil otomatis dari Behance,
 * jadi setiap kartu adalah PLACEHOLDER yang siap diganti dengan karya asli
 * (unggah file ke src/assets/ lalu isi field `image`).
 */
export const PORTFOLIO_ITEMS: (PortfolioItem & { image?: string })[] = [
  { id: "p1", slot: "01", title: "Poster & Media Promosi", category: "Graphic Design", art: 0, ratio: "tall" },
  { id: "p2", slot: "02", title: "Trifold Brochure", category: "Graphic Design", art: 5, ratio: "wide" },
  { id: "p3", slot: "03", title: "Digital Illustration Study", category: "Digital Illustration", art: 1, ratio: "square" },
  { id: "p4", slot: "04", title: "Character & Line Art", category: "Digital Illustration", art: 2, ratio: "tall" },
  { id: "p5", slot: "05", title: "Product Photography", category: "Photography", art: 3, ratio: "wide" },
  { id: "p6", slot: "06", title: "Field Documentation", category: "Photography", art: 4, ratio: "square" },
  { id: "p7", slot: "07", title: "Promotional Video Edit", category: "Videography", art: 6, ratio: "wide" },
  { id: "p8", slot: "08", title: "Motion Graphics Reel", category: "Multimedia", art: 7, ratio: "tall" },
  { id: "p9", slot: "09", title: "Prepress & Print Output", category: "Multimedia", art: 8, ratio: "square" },
  { id: "p10", slot: "10", title: "Social Media Content", category: "Multimedia", art: 9, ratio: "square" },
];

export const EXPERIENCES = [
  {
    no: "01",
    title: "Field Photography & Videography",
    desc: "Melakukan pengambilan foto, dokumentasi, dan eksekusi videografi lapangan.",
    tags: ["Dokumentasi", "Komposisi", "Lighting"],
  },
  {
    no: "02",
    title: "Video Editing & Audio Sync",
    desc: "Melakukan editing, penyelarasan audio, serta membuat motion graphics dasar untuk video promosi.",
    tags: ["Editing", "Color Grading", "Motion"],
  },
  {
    no: "03",
    title: "Visual Promotion Design",
    desc: "Merancang poster, trifold brochure, dan media promosi visual sesuai brief.",
    tags: ["Poster", "Brosur", "Brief"],
  },
  {
    no: "04",
    title: "Prepress & Physical Production",
    desc: "Melakukan proses pracetak dan produksi fisik.",
    tags: ["Pre-press", "Cetak", "Finishing"],
  },
  {
    no: "05",
    title: "Public Speaking",
    desc: "Memiliki pengalaman berbicara di depan publik.",
    tags: ["Presentasi", "Komunikasi"],
  },
];

/**
 * Prestasi ASLI. Biarkan kosong sampai ada pencapaian yang bisa diverifikasi —
 * tambahkan object baru, mis. { year: "2026", title: "...", org: "..." }.
 */
export const ACHIEVEMENTS: { year: string; title: string; org: string }[] = [];

export const MARQUEE_WORDS = [
  "Graphic Design",
  "Illustration",
  "Photography",
  "Videography",
  "Motion Graphics",
  "Prepress",
  "Branding",
  "Visual Storytelling",
];
