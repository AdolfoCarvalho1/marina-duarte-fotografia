import Image from "next/image";
import { Container } from "@/components/Container";
import { stats } from "@/lib/content";

export function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-title" className="section-pad">
      <Container className="grid grid-cols-[minmax(0,5fr)_minmax(0,7fr)] items-start gap-[clamp(32px,5vw,64px)] max-[900px]:grid-cols-1">
        <div>
          <Image
            src="/img/about.jpg"
            alt="Fotógrafa segurando uma câmera analógica em campo aberto"
            width={1200}
            height={1500}
            sizes="(max-width: 900px) 100vw, 40vw"
            className="aspect-[4/5] w-full rounded-card object-cover"
          />
        </div>
        <div>
          <h2 id="sobre-title" className="max-w-[16ch] text-heading-lg text-balance">
            Antes de apertar, eu escuto.
          </h2>
          <p className="mt-5 max-w-[60ch]">
            Sou Marina Duarte, fotógrafa paulistana. Há doze anos faço do encontro com cada pessoa
            um pequeno ritual: conversar, respirar, esperar a luz certa. Nada de poses engessadas —
            o que me interessa é o que existe entre uma instrução e a risada.
          </p>
          <p className="mt-5 max-w-[60ch]">
            Já fotografei campanhas, casamentos e madrugadas de verão. Em todos os casos, busco a
            mesma coisa: a verdade de um instante que não ia voltar.
          </p>
          <dl className="mt-12 grid grid-cols-3 gap-5 border-t border-obsidian pt-6">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse">
                <dt className="mb-2 text-micro uppercase text-muted">{stat.label}</dt>
                <dd className="m-0 text-stat">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
