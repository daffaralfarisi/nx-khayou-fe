"use client";

import { useState } from "react";
import type { Swiper as SwiperInstance } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import type { ProductCard as Card } from "@/data/products";
import ProductCard from "./ProductCard";

/**
 * One centred card at a time with prev/next buttons underneath
 * (#productCarousel2 in landingpage/setup_with_catalog.blade.php; Owl with
 * items: 1, center, loop, stagePadding: 5).
 */
export default function CatalogCarousel({ products }: { products: Card[] }) {
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);

  return (
    <div>
      <div className="owl-carousel owl-theme" id="productCarousel2">
        <Swiper
          className="owl-stage-outer"
          style={{ paddingLeft: 5, paddingRight: 5 }}
          slidesPerView={1}
          centeredSlides
          loop
          onSwiper={setSwiper}
        >
          {products.map((product) => (
            <SwiperSlide key={product.slug}>
              <div className="item d-flex justify-content-center align-items-end">
                <ProductCard product={product} className="prodcard2" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom nav placed below the product cards */}
      <div className="custom-owl-nav d-flex justify-content-center gap-2 mt-3">
        <button
          type="button"
          className="btn btn-outline-dark rounded-pill owl-prev"
          aria-label="Previous"
          onClick={() => swiper?.slidePrev()}
        >
          <i className="fas fa-chevron-left" aria-hidden="true"></i>
        </button>
        <button
          type="button"
          className="btn btn-outline-dark rounded-pill owl-next"
          aria-label="Next"
          onClick={() => swiper?.slideNext()}
        >
          <i className="fas fa-chevron-right" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
}
