import { Container } from "@/components/Container";
import { testimonial } from "@/lib/content";

export function Testimonial() {
  return (
    <section aria-label="Depoimento" className="section-pad-lg">
      <Container>
        <div className="max-w-[1080px]">
          <blockquote className="m-0 max-w-[20em] text-quote text-balance">
            {testimonial.quote}
          </blockquote>
          <p className="mt-7 text-body-sm text-muted">{testimonial.author}</p>
        </div>
      </Container>
    </section>
  );
}
