// Product data, moved from app/Http/Controllers/MainController.php and the
// per-slug blocks of resources/views/layouts/header.blade.php (SEO) and
// pages/shop/detail.blade.php (specs, which the view hardcoded per slug).

import { CONTACT } from "@/lib/site";

/** Card badge; matches the .badge-<name> classes in card.css. */
export type Badge = "new" | "bestseller" | "limited" | "modular";

export const BADGE_LABEL: Record<Badge, string> = {
  new: "NEW",
  bestseller: "BEST SELLER",
  limited: "LIMITED STOCK",
  modular: "MODULAR ADD-ONS",
};

export type ProductSeo = {
  title: string;
  description: string;
  keywords: string[];
  image: string;
};

/** What a product card shows (home carousels, "You may also like"). */
export type ProductCard = {
  slug: string;
  name: string;
  price: number;
  badge: Badge;
  image: string;
};

export type SpecGroup = {
  /** Shown as a dark button-style label above the rows (Minima only). */
  heading?: string;
  rows: [label: string, value: string][];
};

export type ProductDetail = ProductCard & {
  /** Image on the bundle page's product grid (differs from the card image for Minima). */
  gridImage: string;
  description: string;
  descriptionLong: string;
  bannerSpec: string;
  gallery: string[];
  specs: SpecGroup[];
  tokopediaUrl: string;
  seo: ProductSeo;
};

// TODO: every detail page's Buy Now button opened the Minima listing,
// Ledgy and Slyde included. Replace with each product's own link.
const MINIMA_TOKOPEDIA_URL =
  "https://www.tokopedia.com/archive-mrk1506-1726099264/meja-komputer-desk-120x60cm-tinggi-70cm-cable-management-minima-khayou-1732369202482021814?extParam=whid%3D2149602&aff_unique_id=&channel=others&chain_key=";

export const BUNDLE = {
  slug: "khayou-set-bundle",
  name: "Khayou Set Bundle",
  price: 1700000,
  badge: "new",
  image: "/images/products/bundle/bundle1.jpg",
  pageTitle: "Shop - Khayou Set Bundle",
  tokopediaUrl: CONTACT.tokopediaUrl,
  seo: {
    title: "Khayou Set Bundle - Paket Meja Kerja Lengkap & Setup Meja Kerja",
    description:
      "Khayou Set Bundle: paket meja kerja lengkap dan setup meja kerja untuk kenyamanan dan produktivitas maksimal. Lengkap dengan aksesoris pilihan.",
    keywords: ["Khayou Set Bundle", "bundle meja kerja", "setup meja", "paket workspace", "Khayou"],
    image: "/images/products/bundle/bundle1.jpg",
  },
} as const satisfies ProductCard & {
  pageTitle: string;
  tokopediaUrl: string;
  seo: ProductSeo;
};

export const PRODUCTS: ProductDetail[] = [
  {
    slug: "minima-desk",
    name: "Khayou - Minima (Desk)",
    price: 950000,
    badge: "new",
    image: "/images/products/minima/IMG_7220_1.jpg",
    gridImage: "/images/products/minima/thumb.jpg",
    description:
      "A premium quality desk to enhance the appearance of your workspace to be more aesthetic and neat cable management.",
    descriptionLong:
      "The Minima desk is a modern and minimalist workspace solution, designed for both home and office use. Made from strong, lightweight plywood with a high-quality HPL finish, this desk offers ample surface area for your computer, accessories, and work supplies. Its minimalist design, available in a variety of colors, blends seamlessly with any decor style while enhancing productivity and cable organization.",
    bannerSpec: "/images/products/minima-banner.png",
    gallery: [
      "/images/products/minima/thumb.jpg",
      "/images/products/minima/minima1.jpg",
      "/images/products/minima/minima2.jpg",
      "/images/products/minima/minima3.jpeg",
      "/images/products/minima/minima4.jpg",
      "/images/products/minima/minima5.jpg",
      "/images/products/minima/minima6.jpg",
      "/images/products/minima/minima7.jpg",
      "/images/products/minima/minima8.jpg",
      "/images/products/minima/minima9.jpg",
    ],
    specs: [
      {
        heading: "Top Table",
        rows: [
          ["Material", "High Grade Meranti Plywood 2cm 120 x 60cm"],
          ["Texture Top Surface and Edge", "HPL Teak Wood Matte Finish"],
          ["Bottom Surface", "PVC Leather Coffee Matte Finish"],
          ["Feature", "Knockdown system using insert nut + 5mm Bolt, Black Doff Aluminum"],
          ["Grommet ", "8x8cm, Cable Management Straps"],
          ["Quality", "Smooth Edges"],
        ],
      },
      {
        heading: "Table Leg",
        rows: [
          ["Material", "Stainless Cylinder Diameter 4cm Length 71,5cm"],
          ["Texture", "Flat Texture Black Matte"],
          ["Feature", "Each table leg can be adjusted up to 3cm"],
        ],
      },
    ],
    tokopediaUrl: MINIMA_TOKOPEDIA_URL,
    seo: {
      title: "Minima Desk - Meja Kerja Minimalis untuk Ruang Kerja Modern",
      description:
        "Minima Desk: meja kerja bergaya minimalis dengan desain ramping dan fungsi maksimal untuk ruang kerja modern.",
      keywords: ["Minima Desk", "meja minimalis", "meja kecil", "meja kerja minimalis", "Khayou"],
      image: "/images/products/minima/thumb.jpg",
    },
  },
  {
    // The slug keeps the old "legdy" typo so existing links still work.
    slug: "legdy-deskshelf",
    name: "Khayou - Ledgy (Deskshelf)",
    price: 450000,
    badge: "bestseller",
    image: "/images/products/ledgy/IMG_7183_1.webp",
    gridImage: "/images/products/ledgy/IMG_7183_1.webp",
    description:
      "Deskshelf with premium quality materials to improve the layout of your desk, improve effectiveness and appearance",
    descriptionLong:
      "The Ledgy Deskshelf is a premium monitor stand designed to enhance your workspace. Made from high-quality plywood with a teakwood HPL laminate surface, this stand provides a sturdy platform for your monitor while helping to declutter your desk. Its sleek, strong, and lightweight design makes it the perfect complement to any workspace in the office or at home.",
    bannerSpec: "/images/products/ledgy-banner.png",
    gallery: [
      "/images/products/ledgy/thumb.webp",
      "/images/products/ledgy/ledgy1.jpg",
      "/images/products/ledgy/ledgy2.PNG",
      "/images/products/ledgy/ledgy3.jpg",
      "/images/products/ledgy/ledgy4.jpg",
      "/images/products/ledgy/ledgy5.jpg",
      "/images/products/ledgy/ledgy6.jpg",
    ],
    specs: [
      {
        rows: [
          ["Material", " High Grade Meranti Plywood 2cm 100 x 23,5cm"],
          ["Texture Top Surface and Edge", "HPL Teak Wood Matte Finish and Black Doff wood texture"],
          ["Bottom Surface", "PVC Leather Coffee Matte Finish"],
          ["Feature", "Knockdown system using Minifix Bolt"],
          ["Feet", "Anti-slip Rubber Feet"],
        ],
      },
    ],
    tokopediaUrl: MINIMA_TOKOPEDIA_URL,
    seo: {
      title: "Ledgy DeskShelf - Meja Kerja dengan Rak Penyimpanan Terintegrasi",
      description:
        "Ledgy DeskShelf: meja kerja dengan rak penyimpanan terintegrasi, solusi rapi untuk menyimpan perlengkapan kerja Anda.",
      keywords: ["Ledgy DeskShelf", "meja rak", "meja dengan shelf", "meja penyimpanan", "Khayou"],
      image: "/images/products/ledgy/thumb.webp",
    },
  },
  {
    slug: "slyde-pc-tray",
    name: "Khayou - Slyde (PC Tray)",
    price: 350000,
    badge: "limited",
    image: "/images/products/slide/thumb.jpg",
    gridImage: "/images/products/slide/thumb.jpg",
    description:
      "Premium look for PC Tray with sturdy material and easy to move because it is equipped with lockable wheels.",
    descriptionLong:
      "The Slyde PC Tray is designed to keep your computer case organized, secure, and effortlessly mobile. Crafted from durable plywood and equipped with smooth-rolling wheels with stoppers, it ensures stability while making it easy to reposition your PC whenever needed. Its teakwood finish blends seamlessly with modern, minimalist workspaces, whether placed beside or beneath your desk. A perfect balance of function, style, and cleanliness for your setup.",
    bannerSpec: "/images/products/slyde-banner.png",
    gallery: [
      "/images/products/slide/thumb.jpg",
      "/images/products/slide/slyde1.jpg",
      "/images/products/slide/slyde2.jpg",
      "/images/products/slide/slyde3.jpg",
      "/images/products/slide/slyde4.jpg",
      "/images/products/slide/slyde5.jpg",
      "/images/products/slide/slyde6.jpg",
    ],
    specs: [
      {
        rows: [
          ["Material", "High Grade Meranti Plywood 18mm 25 x 45 x 11cm In-size : 22 x 43,5cm"],
          ["Texture Top Surface and Edge", " HPL Teak Wood Matte Finish and PVC Leather Coffee Matte Finish"],
          ["Bottom Surface", "HPL Teak Wood Matte Finish and Black Doff wood texture"],
          ["Feature", "2 Standard wheels and 2 Stopper wheels"],
          ["Pay Attention", "Make sure the dimensions of your PC case match the dimensions of the tray"],
        ],
      },
    ],
    tokopediaUrl: MINIMA_TOKOPEDIA_URL,
    seo: {
      title: "Slyde PC Tray - Tempat CPU Geser untuk Meja Kerja Rapi",
      description:
        "Slyde PC Tray: tempat CPU geser praktis yang menjaga meja tetap rapi dan memudahkan akses ke perangkat keras Anda.",
      keywords: ["Slyde PC Tray", "tray CPU", "tempat CPU geser", "aksesoris meja", "Khayou"],
      image: "/images/products/slide/thumb.jpg",
    },
  },
];

const toCard = ({ slug, name, price, badge, image }: ProductCard): ProductCard => ({
  slug,
  name,
  price,
  badge,
  image,
});

/** Home page product list, in the Laravel order: bundle first. */
export const CATALOG: ProductCard[] = [toCard(BUNDLE), ...PRODUCTS.map(toCard)];

export function getProduct(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}

/** "You may also like": the other products, then the bundle. */
export function getSuggestions(slug: string): ProductCard[] {
  return [...PRODUCTS.filter((p) => p.slug !== slug).map(toCard), toCard(BUNDLE)];
}

/** Rupiah without decimals, e.g. 1700000 -> "1.700.000" (PHP number_format(x, 0, ',', '.')). */
export function formatPrice(price: number) {
  return Math.round(price)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
