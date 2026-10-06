import { Container } from "@/components/Container";

export function Intro() {
  return (
    <section aria-labelledby="intro-title" className="section-pad">
      <Container className="grid grid-cols-[minmax(0,7fr)_minmax(0,5fr)] items-end gap-[clamp(32px,5vw,64px)] max-[900px]:grid-cols-1">
        <h2 id="intro-title" className="text-heading-lg text-balance">
          Histórias reais, olhar editorial.
        </h2>
        <p className="m-0 mb-1.5 max-w-[60ch]">
          Retratos, casais, editoriais e lifestyle. Fotografo pessoas como elas são — sem pose
          forçada, sem pressa, com luz natural e tempo para o momento certo acontecer.
        </p>
      </Container>
    </section>
  );
}
