"use client";

/* eslint-disable @next/next/no-img-element -- testimonial.css sizes .profile-image */

import { useEffect, useRef, useState } from "react";

const DAFFA = {
  image:
    "https://images.tokopedia.net/img/cache/100-square/tPxBYm/2022/3/3/dc0da022-652d-486d-a5cf-485278fc730d.jpg",
  text: "Pengiriman aman, barang sangat sesuai dengan yang ada di gambar, kualitas barang sangat bagus, kayu solid dan kokoh, kaki tebal dan kokoh. Overall bagus banget produknya",
  author: "Daffa",
};
const TRIATMOJOYO = {
  image:
    "https://images.tokopedia.net/img/cache/100-square/user-1/2019/3/26/2152149/2152149_be908194-7d9f-43d6-b67f-c877514945ed.jpg",
  text: "Kualitas kayu mejanya bagus, besi warna doff cocok sama mejanya, gampang di rakit. Sesuai sama deskripsi produk. Semoga barangnya awet",
  author: "Triatmojoyo",
};

// The page showed these two reviews alternating across six slides.
const SLIDES = [DAFFA, TRIATMOJOYO, DAFFA, TRIATMOJOYO, DAFFA, TRIATMOJOYO];
const AUTO_MS = 5000;
const SWIPE_THRESHOLD = 50;

/** landingpage/testimonial.blade.php: auto-advancing review slider. */
export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(0);

  const change = (step: number) =>
    setIndex((i) => (i + step + SLIDES.length) % SLIDES.length);

  useEffect(() => {
    const timer = setInterval(() => change(1), AUTO_MS);
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") change(-1);
      else if (e.key === "ArrowRight") change(1);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      clearInterval(timer);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <section
      id="testimonial"
      className="mb-5 px-lg-5 d-flex d-md-block justify-content-center align-items-center"
    >
      <div className="testimonial-section container-fluid">
        <div
          className="slider-container"
          onTouchStart={(e) => {
            touchStartX.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            const diff = touchStartX.current - e.changedTouches[0].clientX;
            if (Math.abs(diff) > SWIPE_THRESHOLD) change(diff > 0 ? 1 : -1);
          }}
        >
          {SLIDES.map((slide, i) => (
            <div key={i} className={`slide${i === index ? " active" : ""}`}>
              <img src={slide.image} alt="Profile" className="profile-image" loading="lazy" />
              <div className="testimonial-text">{slide.text}</div>
              <div className="author-name">{slide.author}</div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <button type="button" className="nav-arrows prev" aria-label="Previous review" onClick={() => change(-1)}>
          ‹
        </button>
        <button type="button" className="nav-arrows next" aria-label="Next review" onClick={() => change(1)}>
          ›
        </button>

        {/* Dots */}
        <div className="dots-container">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`dot${i === index ? " active" : ""}`}
              style={{ border: 0, padding: 0 }} // was a <div>; drop button chrome
              aria-label={`Review ${i + 1}`}
              onClick={() => setIndex(i)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
