"use client";

import { useState } from "react";
import type { Swiper as SwiperInstance } from "swiper";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import type { ProductCard as Card } from "@/data/products";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import ProductCard from "./ProductCard";

/**
 * "Our Favorites" (#productCarousel), formerly Owl Carousel with
 * loop, 5 s autoplay paused on hover, and per-width settings:
 *   <576: 1 item · 576: 2 · 768: 2 + arrows · 992: 3 + arrows · 1200: 4.
 * Owl hid arrows and dots whenever every item fit on screen (4 at ≥1200)
 * but kept rotating, and paged its dots by the number of visible items.
 */
export default function FavoritesCarousel({ products }: { products: Card[] }) {
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);
  const [realIndex, setRealIndex] = useState(0);

  // Server render assumes desktop (no arrows or dots), the common case.
  const xl = useMediaQuery("(min-width: 1200px)", true);
  const lg = useMediaQuery("(min-width: 992px)", true);
  const md = useMediaQuery("(min-width: 768px)", true);
  const sm = useMediaQuery("(min-width: 576px)", true);

  const perView = xl ? 4 : lg ? 3 : sm ? 2 : 1;
  const count = products.length;
  const allVisible = count <= perView;
  const navEnabled = md && !allVisible;
  const pages = allVisible ? 0 : Math.ceil(count / perView);
  const activePage = Math.min(Math.floor((realIndex % count) / perView), pages - 1);

  // Swiper's loop needs more slides than fit on screen; Owl cloned items
  // for this, so the list is repeated here.
  const slides = [...products, ...products];

  return (
    <div className="owl-carousel owl-theme" id="productCarousel">
      <Swiper
        className="owl-stage-outer"
        modules={[Autoplay]}
        loop
        spaceBetween={30}
        autoplay={{ delay: 5000, pauseOnMouseEnter: true, disableOnInteraction: false }}
        breakpoints={{
          0: { slidesPerView: 1 },
          576: { slidesPerView: 2 },
          768: { slidesPerView: 2 },
          992: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
        }}
        onSwiper={setSwiper}
        onRealIndexChange={(s) => setRealIndex(s.realIndex)}
      >
        {slides.map((product, i) => (
          <SwiperSlide key={`${product.slug}-${i}`}>
            <div className="item">
              <ProductCard product={product} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={`owl-nav${navEnabled ? "" : " disabled"}`}>
        <button
          type="button"
          className="owl-prev"
          aria-label="Previous"
          onClick={() => swiper?.slidePrev()}
        >
          <i className="fas fa-chevron-left" aria-hidden="true"></i>
        </button>
        <button
          type="button"
          className="owl-next"
          aria-label="Next"
          onClick={() => swiper?.slideNext()}
        >
          <i className="fas fa-chevron-right" aria-hidden="true"></i>
        </button>
      </div>

      <div className={`owl-dots${pages ? "" : " disabled"}`}>
        {Array.from({ length: pages }, (_, page) => (
          <button
            key={page}
            type="button"
            className={`owl-dot${page === activePage ? " active" : ""}`}
            aria-label={`Go to page ${page + 1}`}
            onClick={() => swiper?.slideToLoop(page * perView)}
          >
            <span></span>
          </button>
        ))}
      </div>
    </div>
  );
}
