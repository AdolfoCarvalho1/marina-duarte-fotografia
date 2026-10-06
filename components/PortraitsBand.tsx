"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/Container";
import { portraits } from "@/lib/content";
import { cn } from "@/lib/ui";

export function PortraitsBand() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) {
      return;
    }
    const update = () => {
      const max = track.scrollWidth - track.clientWidth - 2;
      setAtStart(track.scrollLeft <= 2);
      setAtEnd(track.scrollLeft >= max);
    };
    update();
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      track.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollByStep = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) {
      return;
    }
    const item = track.querySelector(".carousel-item");
    const step = item ? item.getBoundingClientRect().width + 14 : 300;
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  const arrowClass = cn(
    "grid size-[52px] cursor-pointer place-items-center rounded-full border border-obsidian bg-transparent text-obsidian transition-colors duration-300",
    "enabled:hover:bg-obsidian enabled:hover:text-paper",
    "disabled:cursor-default disabled:opacity-30"
  );

  return (
    <section aria-labelledby="band-title" className="section-pad bg-sky-tint">
      <Container>
        <div className="mb-8 flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 id="band-title" className="text-heading-lg text-balance">
              Um rosto de cada vez.
            </h2>
            <p className="mt-4 text-obsidian/75">Seleção de retratos, 2019—2026.</p>
          </div>
          <div className="ml-auto flex gap-2">
            <button
              type="button"
              aria-label="Ver retratos anteriores"
              disabled={atStart}
              onClick={() => scrollByStep(-1)}
              className={arrowClass}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M10 3 5 8l5 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Ver próximos retratos"
              disabled={atEnd}
              onClick={() => scrollByStep(1)}
              className={arrowClass}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="m6 3 5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          ref={trackRef}
          role="region"
          aria-label="Carrossel de retratos"
          tabIndex={0}
          className="snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <ul className="flex gap-[14px]">
            {portraits.map((portrait) => (
              <li
                key={portrait.src}
                className="carousel-item w-[clamp(220px,26vw,340px)] shrink-0 snap-start"
              >
                <Image
                  src={portrait.src}
                  alt={portrait.alt}
                  width={900}
                  height={900}
                  sizes="(max-width: 640px) 60vw, 340px"
                  className="aspect-square w-full rounded-card object-cover"
                />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
