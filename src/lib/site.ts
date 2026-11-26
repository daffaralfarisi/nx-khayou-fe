import type { Metadata } from "next";

// Canonical and Open Graph URLs resolve against this, as the Laravel site's
// hardcoded og:url values did.
export const SITE_URL = "https://khayou.id";
export const SITE_NAME = "Khayou";

export const DEFAULT_TITLE = "Jual Meja Kerja & Setup Meja Kerja | Khayou";
export const DEFAULT_DESCRIPTION =
  "Khayou menjual meja kerja, setup meja kerja, deskmate, dan tempat CPU berkualitas untuk produktivitas dan kenyamanan ruang kerja Anda. Temukan solusi workspace terbaik di Khayou.";
export const DEFAULT_SHORT_DESCRIPTION =
  "Khayou menyediakan meja kerja, setup meja kerja, deskmate, dan tempat CPU berkualitas.";
export const DEFAULT_KEYWORDS = [
  "meja kerja",
  "setup meja kerja",
  "deskmate",
  "tempat CPU",
  "jual meja kerja",
  "workspace",
  "Khayou",
];
export const DEFAULT_SHARE_IMAGE = "/images/backgrounds/ls1.webp";

// Metadata merges shallowly: a page that sets openGraph replaces the whole
// object, so pages spread this and add their own url.
export const DEFAULT_OPEN_GRAPH = {
  type: "website",
  siteName: SITE_NAME,
  title: DEFAULT_TITLE,
  description: DEFAULT_SHORT_DESCRIPTION,
  images: DEFAULT_SHARE_IMAGE,
} satisfies Metadata["openGraph"];

export const CONTACT = {
  whatsappNumber: "6282121080408",
  whatsappUrl: "https://wa.me/6282121080408",
  email: "khayouofficial@gmail.com",
  gmailComposeUrl:
    "https://mail.google.com/mail/?view=cm&fs=1&to=khayouofficial@gmail.com",
  instagramUrl: "https://www.instagram.com/khayou.official",
  youtubeUrl: "https://www.youtube.com/@KHAYOU.Official",
  tokopediaUrl: "https://www.tokopedia.com/archive-mrk1506-1726099264",
} as const;

// Menu labels differ from product names, so the menu keeps its own list.
export const SHOP_LINKS = [
  { href: "/shop/khayou-set-bundle", label: "Khayou Set Bundle" },
  { href: "/shop/minima-desk", label: "Khayou Minima" },
  { href: "/shop/legdy-deskshelf", label: "Khayou Ledgy" },
  { href: "/shop/slyde-pc-tray", label: "Khayou Slyde" },
] as const;
