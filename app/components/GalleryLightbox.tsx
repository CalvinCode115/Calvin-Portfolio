"use client";

import { useState, useEffect, useCallback } from "react";

export default function GalleryLightbox({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  const prev = useCallback(
    () => setIdx((i) => (i - 1 + images.length) % images.length),
    [images.length]
  );
  const next = useCallback(
    () => setIdx((i) => (i + 1) % images.length),
    [images.length]
  );
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, prev, next, close]);

  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => { setIdx(i); setOpen(true); }}
            className="group block text-left"
            aria-label={`Open ${alt} photo ${i + 1}`}
          >
            <div className="aspect-video overflow-hidden rounded-xl border border-border">
              <img
                src={src}
                alt={`${alt} photo ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm"
          onClick={close}
        >
          {/* Stop clicks on the inner panel from closing */}
          <div
            className="relative flex items-center justify-center w-full h-full px-4 py-14"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Close */}
            <button
              onClick={close}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-zinc-800 border border-border text-zinc-400 hover:text-white hover:border-zinc-500 flex items-center justify-center transition-colors z-10"
              aria-label="Close"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Counter */}
            <span className="absolute top-4 left-1/2 -translate-x-1/2 text-xs text-zinc-400 bg-zinc-900/80 border border-border rounded-full px-3 py-1 z-10">
              {idx + 1} / {images.length}
            </span>

            {/* Prev */}
            <button
              onClick={prev}
              className="absolute left-4 w-10 h-10 rounded-full bg-zinc-800 border border-border text-zinc-300 hover:border-blue-500 hover:text-blue-400 flex items-center justify-center transition-colors z-10"
              aria-label="Previous image"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            {/* Image */}
            <img
              src={images[idx]}
              alt={`${alt} photo ${idx + 1}`}
              className="max-h-full max-w-full object-contain rounded-xl shadow-2xl"
              style={{ maxHeight: "calc(100vh - 7rem)" }}
            />

            {/* Next */}
            <button
              onClick={next}
              className="absolute right-4 w-10 h-10 rounded-full bg-zinc-800 border border-border text-zinc-300 hover:border-blue-500 hover:text-blue-400 flex items-center justify-center transition-colors z-10"
              aria-label="Next image"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>

          </div>
        </div>
      )}
    </>
  );
}
