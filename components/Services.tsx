import { Container } from "@/components/Container";
import { services } from "@/lib/content";

export function Services() {
  return (
    <section id="servicos" aria-labelledby="servicos-title" className="section-pad">
      <Container>
        <h2 id="servicos-title" className="text-heading-lg text-balance">
          Como podemos trabalhar juntas.
        </h2>
        <ul className="mt-10 grid grid-cols-3 gap-[14px] max-[1024px]:grid-cols-1">
          {services.map((service) => (
            <li
              key={service.title}
              className="flex flex-col items-start gap-[14px] rounded-card border border-obsidian bg-paper p-6"
            >
              <p className="m-0 rounded-full border border-obsidian px-[13px] py-[7px] text-micro uppercase">
                {service.tag}
              </p>
              <h3 className="m-0 text-heading-sm">{service.title}</h3>
              <p className="m-0 max-w-[36ch]">{service.description}</p>
              <p className="m-0 mt-auto pt-[14px]">{service.price}</p>
              <a
                href="#contato"
                data-service={service.value}
                className="underline decoration-1 underline-offset-4 hover:decoration-2"
              >
                Pedir orçamento
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
