"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Google Maps iframe that is only inserted when the block approaches the viewport
 * (IntersectionObserver) and additionally uses loading="lazy" — no third-party JS on first paint.
 */
export function MapEmbed({ src, title }: { src: string; title: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShow(true);
          io.disconnect();
        }
      },
      { rootMargin: "400px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative h-full min-h-[24rem] w-full bg-navy-2">
      {show ? (
        <iframe
          src={src}
          title={title}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 h-full w-full border-0 grayscale-[35%] contrast-[1.05]"
          allowFullScreen
        />
      ) : (
        <div className="absolute inset-0 grid place-items-center text-mist">
          <span className="eyebrow">Se încarcă harta…</span>
        </div>
      )}
    </div>
  );
}
