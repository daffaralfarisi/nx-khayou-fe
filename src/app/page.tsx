/* eslint-disable @next/next/no-img-element -- template markup sizes these as plain <img> */

import type { Metadata } from "next";
import Link from "next/link";
import CatalogCarousel from "@/components/home/CatalogCarousel";
import FavoritesCarousel from "@/components/home/FavoritesCarousel";
import HeroSlider from "@/components/home/HeroSlider";
import LandingVideo from "@/components/home/LandingVideo";
import Testimonials from "@/components/home/Testimonials";
import { CATALOG } from "@/data/products";
import { DEFAULT_OPEN_GRAPH } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { ...DEFAULT_OPEN_GRAPH, url: "/" },
};

const WHY_KHAYOU = [
  {
    image: "/images/why/why2.jpg",
    alt: "Modular Design",
    title: "All done by the hands of professional craftsmen.",
    text: "Working according to work instructions and selecting good, quality materials. Work carried out by professionals and supervised by experienced Quality Control.",
    col: "col-lg-4 col-md-6",
    delay: "150ms",
  },
  {
    image: "/images/why/why1.jpg",
    alt: "Manufacturing in Germany",
    title: "Knockdown system to make it easier for users to assemble.",
    text: "Apart from being equipped with a knockdown system, we also prioritize user experience in improving the appearance of your favorite workspace setup and providing a premium appearance that is different from brands on the market.",
    col: "col-lg-4 col-md-6",
    delay: "300ms",
  },
  {
    image: "/images/why/why3.jpg",
    alt: "Experienced Craftsmen",
    title: "The best choice of materials to prioritize durability and aesthetic appearance.",
    text: "Our material selection for each product prioritizes strength and lightness. We pay close attention to finishing, texture, and color to create a more aesthetically pleasing workspace setup.",
    col: "col-lg-4 col-md-12",
    delay: "450ms",
  },
];

/** pages/landingpage/index.blade.php and its partials. */
export default function HomePage() {
  return (
    <>
      <HeroSlider />

      {/* product.blade.php */}
      <section className="products-section">
        <div className="container">
          <h2 className="section-title fw-bold wow fadeInLeft" data-wow-delay="300ms">
            Our Favorites
          </h2>
          <div className="product-carousel wow fadeInRight" data-wow-delay="300ms">
            <FavoritesCarousel products={CATALOG} />
          </div>
        </div>
      </section>

      {/* banner_large.blade.php */}
      <section id="secondBanner" className="mb-5">
        <div className="container-fluid px-lg-5 position-relative">
          <div className="secondBannerContent">
            <div className="secondBannerContentWording wow fadeInUp" data-wow-delay="100ms">
              <h2 className="text-white fw-bold mb-2 fs-1">Discover Our New Collection</h2>
              <p className="text-white mb-3">Explore the latest trends and styles.</p>
              <Link href="/shop/khayou-set-bundle" className="btn btn-light rounded-pill fw-bold px-4">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* why_khayou.blade.php */}
      <section className="py-5 mb-5" style={{ backgroundColor: "#f8f6f3" }}>
        <div className="container-fluid px-lg-5">
          <div className="row mb-5">
            <div className="col-12">
              <h2
                className="display-5 fw-normal"
                style={{
                  color: "#1a1a1a",
                  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                }}
              >
                Why Khayou?
              </h2>
            </div>
          </div>

          <div className="row g-4">
            {WHY_KHAYOU.map((item) => (
              <div key={item.image} className={`${item.col} wow fadeInUp`} data-wow-delay={item.delay}>
                <div className="card border-0 h-100" style={{ backgroundColor: "transparent" }}>
                  <div className="position-relative overflow-hidden rounded-3" style={{ height: 300 }}>
                    <img
                      src={item.image}
                      className="w-100 h-100 object-fit-cover"
                      alt={item.alt}
                      style={{ objectFit: "cover" }}
                      loading="lazy"
                    />
                  </div>
                  <div className="card-body d-flex flex-column px-0 pt-4">
                    <div className="flex-grow-1">
                      <h3 className="h5 fw-semibold mb-3" style={{ color: "#1a1a1a" }}>
                        {item.title}
                      </h3>
                      <p className="text-muted mb-4" style={{ lineHeight: 1.6, fontSize: "0.85rem" }}>
                        {item.text}
                      </p>
                    </div>
                    <Link
                      className="btn btn-dark rounded-pill px-4 py-2 mt-auto align-self-start"
                      style={{ fontSize: 14, backgroundColor: "#000", border: "none" }}
                      href="/about"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* setup_with_catalog.blade.php */}
      <section id="catalogWithSetupImage" className="mb-5">
        <div className="container-fluid px-lg-5 position-relative">
          <div className="row g-0">
            <div
              className="col-md-6 wow slideInLeft mb-4"
              data-wow-delay="100ms"
              data-wow-duration="2500ms"
            >
              <div className="catalogImage"></div>
            </div>
            <div
              className="col-md-6 d-flex align-items-center wow slideInRight"
              data-wow-delay="100ms"
              style={{ overflow: "visible" }}
            >
              <div className="catalogContent mb-3 p-lg-4 w-100">
                <CatalogCarousel products={CATALOG} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <LandingVideo />
      <Testimonials />
    </>
  );
}
