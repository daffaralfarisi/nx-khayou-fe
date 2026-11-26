"use client";

/* eslint-disable @next/next/no-img-element -- template markup sizes these as plain <img> */

import { Fragment, useCallback, useEffect, useRef, useState } from "react";

/**
 * Product photo grid (one full-width image, then two half-width, repeating)
 * that opens a zoom overlay on click. Was inline script in
 * shop/detail.blade.php; the overlay styles live in detail.css.
 */
export default function ProductGallery({ images, name }: { images: string[]; name: string }) {
  const [open, setOpen] = useState(false);
  const [src, setSrc] = useState<string>();
  const closeRef = useRef<HTMLButtonElement>(null);
  const clearTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const show = (image: string) => {
    clearTimeout(clearTimer.current);
    setSrc(image);
    setOpen(true);
    // Focus the close button once the pop-in animation has started.
    setTimeout(() => closeRef.current?.focus(), 200);
  };

  const hide = useCallback(() => {
    setOpen(false);
    // Keep the image until the fade-out (0.32 s) has finished.
    clearTimer.current = setTimeout(() => setSrc(undefined), 320);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") hide();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, hide]);

  useEffect(() => () => clearTimeout(clearTimer.current), []);

  return (
    <div className="row" style={{ maxHeight: "calc(100vh - 200px)", overflowY: "auto", paddingRight: 8 }}>
      {images.map((image, idx) => (
        <Fragment key={image}>
          <div className={idx % 3 === 0 ? "col-12 col-md-12 mb-3" : "col-12 col-md-6 mb-3"}>
            <img
              src={image}
              className="img-fluid rounded-start w-100 gallery-thumb"
              style={{ height: "25rem", objectFit: "cover", cursor: "pointer" }}
              alt={`${name} - image ${idx + 1}`}
              loading={idx === 0 ? undefined : "lazy"}
              onClick={() => show(image)}
            />
          </div>

          {idx === 0 && (
            <div
              id="product-image-overlay"
              className={open ? "show" : undefined}
              aria-hidden={!open}
              tabIndex={-1}
            >
              <div className="overlay-backdrop" onClick={hide}></div>
              <div className="overlay-content" role="dialog" aria-modal="true" aria-label={`${name} photo`}>
                <button ref={closeRef} type="button" className="overlay-close" aria-label="Close" onClick={hide}>
                  X
                </button>
                {src && <img id="overlay-img" src={src} alt="Preview" />}
              </div>
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
}
