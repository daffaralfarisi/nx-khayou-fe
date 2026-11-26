import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BundlePage from "@/components/shop/BundlePage";
import ProductDetailView from "@/components/shop/ProductDetailView";
import { BUNDLE, PRODUCTS, getProduct } from "@/data/products";
import { DEFAULT_OPEN_GRAPH } from "@/lib/site";

// Only the four known products exist; anything else is a 404 (Laravel
// rendered its 404 page with status 200).
export const dynamicParams = false;

export function generateStaticParams() {
  return [{ slug: BUNDLE.slug }, ...PRODUCTS.map((p) => ({ slug: p.slug }))];
}

export async function generateMetadata({ params }: PageProps<"/shop/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const seo = slug === BUNDLE.slug ? BUNDLE.seo : getProduct(slug)?.seo;
  if (!seo) return {};

  const url = `/shop/${slug}`;
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: { canonical: url },
    openGraph: {
      ...DEFAULT_OPEN_GRAPH,
      title: seo.title,
      description: seo.description,
      url,
      images: seo.image,
    },
  };
}

/** /shop/{slug}: the bundle page for khayou-set-bundle, otherwise a product. */
export default async function ShopPage({ params }: PageProps<"/shop/[slug]">) {
  const { slug } = await params;
  if (slug === BUNDLE.slug) return <BundlePage />;

  const product = getProduct(slug);
  if (!product) notFound();
  return <ProductDetailView product={product} />;
}
