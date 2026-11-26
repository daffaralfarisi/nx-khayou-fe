"use client";

import Link from "next/link";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const SLIDES = [
  {
    image: "/images/backgrounds/lsmin1.webp",
    title: ["Premium Visual Appearance", "Simplicity and Durability"],
  },
  {
    image: "/images/backgrounds/ls2.webp",
    title: ["Minimalist, functional,", "revolutionary."],
  },
  {
    image: "/images/backgrounds/ls3.webp",
    title: ["Minimalist, functional,", "revolutionary."],
  },
];

/** landingpage/slider.blade.php (was a Swiper 5 `thm-swiper__slider`). */
export default function HeroSlider() {
  return (
    <section className="main-slider">
      <Swiper
        className="swiper-container thm-swiper__slider"
        modules={[Autoplay, EffectFade, Pagination]}
        slidesPerView={1}
        loop
        effect="fade"
        autoplay={{ delay: 4000 }}
        pagination={{ el: "#main-slider-pagination", type: "bullets", clickable: true }}
      >
        {SLIDES.map((slide, i) => (
          <SwiperSlide key={i}>
            <div
              className="main-slider__bg"
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="main-slider__content">
                    <div className="main-slider__sub-title-box"></div>
                    <h2 className="main-slider__title">
                      {slide.title[0]} <br /> {slide.title[1]}
                    </h2>
                    <div className="main-slider__btn-and-call-box">
                      <div className="main-slider__btn-box">
                        <Link href="/shop/khayou-set-bundle" className="thm-btn main-slider__btn">
                          Read more<span></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div slot="container-end" className="swiper-pagination" id="main-slider-pagination"></div>
      </Swiper>
    </section>
  );
}
