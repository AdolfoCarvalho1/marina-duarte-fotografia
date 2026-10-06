"use client";

import { useState } from "react";
import { Container } from "@/components/Container";
import { PortfolioCard } from "@/components/PortfolioCard";
import { filters, works, type WorkCategory } from "@/lib/content";
import { cn } from "@/lib/ui";

export function Portfolio() {
  const [active, setActive] = useState<"todos" | WorkCategory>("todos");
  const visible = works.filter((work) => active === "todos" || work.cat === active);

  return (
    <section id="portfolio" aria-labelledby="portfolio-title" className="section-pad">
      <Container>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <h2 id="portfolio-title" className="text-heading-lg text-balance">
            Trabalhos selecionados
          </h2>
          <div role="group" aria-label="Filtrar portfólio" className="flex flex-wrap gap-2">
            {filters.map((filter) => {
              const isActive = active === filter.value;
              return (
                <button
                  key={filter.value}
                  type="button"
                  data-filter={filter.value}
                  aria-pressed={isActive}
                  onClick={() => setActive(filter.value)}
                  className={cn(
                    "cursor-pointer rounded-full border border-obsidian px-4 py-[9px] text-body-sm leading-none transition-colors duration-300",
                    isActive
                      ? "bg-obsidian text-paper"
                      : "bg-transparent text-obsidian hover:bg-obsidian/[0.06]"
                  )}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>
        <ul className="columns-3 gap-[14px] max-[1024px]:columns-2 max-[640px]:columns-1">
          {visible.map((work, index) => (
            <PortfolioCard key={work.src} work={work} index={index} />
          ))}
        </ul>
      </Container>
    </section>
  );
}
