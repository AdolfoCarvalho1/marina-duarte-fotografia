"use client";

import { useEffect, useRef, useState } from "react";
import { navLinks } from "@/lib/content";
import { btnGhost, btnGhostInverse, btnSolid, btnSolidInverse, cn } from "@/lib/ui";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 56);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 901px)");
    const onChange = () => {
      if (desktop.matches) {
        setOpen(false);
      }
    };
    desktop.addEventListener("change", onChange);
    return () => desktop.removeEventListener("change", onChange);
  }, []);

  const overlay = !scrolled && !open;

  return (
    <header
      data-overlay={overlay ? "true" : undefined}
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        overlay ? "border-transparent bg-transparent" : "border-obsidian bg-paper"
      )}
    >
      <div className="mx-auto grid min-h-[72px] w-full max-w-[1440px] grid-cols-[1fr_auto_1fr] items-center gap-4 px-[clamp(20px,4vw,48px)] max-[900px]:grid-cols-[1fr_auto]">
        <nav aria-label="Principal" className="max-[900px]:hidden">
          <ul className="flex gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "inline-block p-2 no-underline hover:underline hover:underline-offset-4 hover:decoration-1",
                    overlay && "text-paper"
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href="#topo"
          className={cn(
            "justify-self-center font-medium tracking-[-0.02em] no-underline max-[900px]:justify-self-start",
            overlay && "text-paper"
          )}
        >
          Marina Duarte
        </a>
        <div className="flex justify-end gap-2 max-[900px]:hidden">
          <a href="#servicos" className={overlay ? btnGhostInverse : btnGhost}>
            Orçamento
          </a>
          <a href="#contato" className={overlay ? btnSolidInverse : btnSolid}>
            Agendar ensaio
          </a>
        </div>
        <button
          ref={menuButtonRef}
          type="button"
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((value) => !value)}
          className={cn(overlay ? btnGhostInverse : btnGhost, "min-[901px]:hidden")}
        >
          {open ? "Fechar" : "Menu"}
        </button>
      </div>
      <div
        id="menu-mobile"
        hidden={!open}
        className="bg-paper min-[901px]:hidden"
      >
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-1 px-[clamp(20px,4vw,48px)] pt-5 pb-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2.5 text-subheading no-underline hover:underline hover:underline-offset-4"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-4 flex flex-wrap gap-2">
            <a href="#servicos" onClick={() => setOpen(false)} className={btnGhost}>
              Orçamento
            </a>
            <a href="#contato" onClick={() => setOpen(false)} className={btnSolid}>
              Agendar ensaio
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
