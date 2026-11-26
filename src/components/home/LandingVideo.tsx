"use client";

import { useEffect, useRef, useState } from "react";

const VIDEO_SRC = "/videos/khayou-v3.mp4";
const PHRASES = [
  "Made For Perfection",
  "Design That Inspires",
  "Quality In Every Detail",
  "Experience The Difference",
  "Crafted With Passion",
];
const PHRASE_MS = 3500; // how long each phrase is shown
const FADE_MS = 600;

/**
 * landingpage/video.blade.php: a muted looping video that only starts
 * downloading when it comes near the viewport, with a dark overlay and
 * rotating text on top. The overlay and text sit in a wrapper around the
 * video instead of being positioned by script.
 */
export default function LandingVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [phrase, setPhrase] = useState(0);
  const [shown, setShown] = useState(true);

  // Lazy-load the 14 MB video ~300px before it scrolls into view.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const load = () => {
      const source = video.querySelector<HTMLSourceElement>("source[data-src]");
      if (!source || source.getAttribute("src")) return;
      source.src = source.dataset.src!;
      video.muted = true;
      video.load();
      video.play().catch(() => {});
    };

    if (!("IntersectionObserver" in window)) {
      load();
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          load();
          io.disconnect();
        }
      },
      { rootMargin: "300px" },
    );
    io.observe(video);
    return () => io.disconnect();
  }, []);

  // Fade the phrase out, swap it, fade back in.
  useEffect(() => {
    let swap: ReturnType<typeof setTimeout>;
    const timer = setInterval(() => {
      setShown(false);
      swap = setTimeout(() => {
        setPhrase((i) => (i + 1) % PHRASES.length);
        setShown(true);
      }, FADE_MS);
    }, PHRASE_MS);
    return () => {
      clearInterval(timer);
      clearTimeout(swap);
    };
  }, []);

  return (
    <section id="landing-video" className="position-relative overflow-hidden mb-5">
      <div className="container-fluid px-lg-5 h-100">
        <div className="position-relative">
          <video
            ref={videoRef}
            id="landing-video-el"
            className="w-100 d-block"
            style={{ objectFit: "cover", zIndex: 0 }}
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            aria-label="Background video (lazy)"
          >
            <source data-src={VIDEO_SRC} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* black overlay, 0.4 opacity */}
          <div
            id="landing-video-overlay"
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 1,
              background: "rgba(0,0,0,0.4)",
              pointerEvents: "none",
            }}
          ></div>

          <div
            id="landing-video-rotating-text"
            className="position-absolute text-center text-white fw-bold"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              maxWidth: "100%",
              pointerEvents: "none",
              textShadow: "0 2px 8px rgba(0,0,0,.7)",
              fontSize: "clamp(1.25rem, 3vw, 2.5rem)",
              zIndex: 2,
            }}
          >
            <span
              className="rv-text"
              style={{
                // Inline, as before, so only the opacity visibly animates.
                transition: "opacity .6s, transform .6s",
                opacity: shown ? 1 : 0,
                transform: shown ? "translateY(0)" : "translateY(-10px)",
              }}
            >
              {PHRASES[phrase]}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
