import Image from "next/image";
import { Container } from "@/components/Container";

export function Hero() {
  return (
    <section
      id="topo"
      aria-label="Apresentação"
      className="relative flex min-h-svh flex-col justify-end overflow-hidden bg-obsidian"
    >
      <div className="absolute inset-0">
        <Image
          src="/img/hero.jpg"
          alt="Retrato editorial de uma mulher em fundo escuro, luz natural suave"
          fill
          sizes="100vw"
          loading="eager"
          fetchPriority="high"
          className="animate-hero-settle object-cover"
        />
      </div>
      <div aria-hidden className="absolute inset-0 bg-obsidian/30" />

      <a
        href="#portfolio"
        className="absolute right-[clamp(20px,4vw,48px)] bottom-[34%] z-[1] hidden animate-rise items-center gap-3 text-paper no-underline [animation-delay:450ms] min-[1100px]:flex"
      >
        <span className="size-14 shrink-0 overflow-hidden rounded-full border border-paper/40">
          <Image
            src="/img/c1.jpg"
            alt=""
            width={900}
            height={900}
            sizes="56px"
            className="h-full w-full object-cover"
          />
        </span>
        <span className="max-w-[24ch]">
          <span className="block text-micro uppercase text-paper/70">Último ensaio</span>
          <span className="mt-1 block text-body leading-snug hover:underline hover:underline-offset-4">
            Beatriz &amp; João, campo →
          </span>
        </span>
      </a>

      <div className="relative z-[1] w-full pb-[clamp(40px,5vw,64px)]">
        <Container>
          <h1 className="animate-rise text-display text-paper [animation-delay:150ms]">
            <span className="block">A luz das</span>
            <span className="block text-right">coisas simples.</span>
          </h1>
          <div className="mt-[clamp(28px,4vw,48px)] flex animate-rise items-end justify-between gap-6 [animation-delay:300ms]">
            <a
              href="#portfolio"
              aria-label="Ir para o portfólio"
              className="text-paper/80 transition-colors duration-300 hover:text-paper"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M12 4v15m0 0 6-6m-6 6-6-6"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <p className="m-0 text-micro uppercase text-paper/80">São Paulo · Desde 2014</p>
          </div>
        </Container>
      </div>
    </section>
  );
}
