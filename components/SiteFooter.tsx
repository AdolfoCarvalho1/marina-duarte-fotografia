import { Container } from "@/components/Container";
import { navLinks, services, socialLinks } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-obsidian pt-[clamp(48px,6vw,64px)] pb-7">
      <Container>
        <div className="grid grid-cols-[minmax(0,2fr)_repeat(3,minmax(0,1fr))] gap-10 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
          <div>
            <p className="m-0 font-medium tracking-[-0.02em]">Marina Duarte</p>
            <p className="mt-3 max-w-[32ch] text-body-sm text-muted">
              Fotografia de luz natural — retratos, casais e editorial em São Paulo.
            </p>
          </div>
          <nav aria-label="Navegação do rodapé">
            <p className="mb-3.5 text-micro uppercase text-muted">Navegação</p>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="no-underline hover:underline hover:underline-offset-4">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Serviços no rodapé">
            <p className="mb-3.5 text-micro uppercase text-muted">Serviços</p>
            <ul className="flex flex-col gap-2.5">
              {services.map((service) => (
                <li key={service.value}>
                  <a href="#servicos" className="no-underline hover:underline hover:underline-offset-4">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="mb-3.5 text-micro uppercase text-muted">Social</p>
            <ul className="flex flex-col gap-2.5">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener"
                    className="no-underline hover:underline hover:underline-offset-4"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-[clamp(48px,7vw,96px)] text-display">Marina Duarte</p>
        <div className="mt-8 flex flex-wrap justify-between gap-4 border-t border-obsidian/25 pt-[22px] text-[13px] text-muted">
          <p className="m-0">© 2026 Marina Duarte — Todos os direitos reservados.</p>
          <p className="m-0">São Paulo · Brasil</p>
        </div>
      </Container>
    </footer>
  );
}
