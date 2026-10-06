"use client";

import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { Container } from "@/components/Container";
import { contactInfo, services } from "@/lib/content";
import { btnSolid, cn } from "@/lib/ui";

const fieldClass =
  "w-full rounded-input border border-obsidian bg-paper px-5 py-[13px] text-body placeholder:text-muted";
const labelClass = "text-[13px] font-medium tracking-[-0.01em]";

export function Contact() {
  const selectRef = useRef<HTMLSelectElement>(null);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const link = target?.closest("[data-service]");
      if (!link || !selectRef.current) {
        return;
      }
      selectRef.current.value = link.getAttribute("data-service") ?? "";
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      setStatus("Confira os campos destacados para enviar.");
      form.reportValidity();
      return;
    }

    const data = new FormData(form);
    const name = String(data.get("nome") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const type = String(data.get("tipo") ?? "");
    const message = String(data.get("mensagem") ?? "").trim();
    const subject = `Pedido de orçamento — ${type} (${name})`;
    const body = `Olá, Marina!\n\nNome: ${name}\nE-mail: ${email}\nTipo de ensaio: ${type}\n\n${message}\n`;

    setStatus("Abrindo seu aplicativo de e-mail com a mensagem pronta…");
    window.location.href = `mailto:${contactInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contato" aria-labelledby="contato-title" className="section-pad">
      <Container className="grid grid-cols-[minmax(0,7fr)_minmax(0,5fr)] gap-[clamp(40px,6vw,80px)] max-[900px]:grid-cols-1">
        <div>
          <h2 id="contato-title" className="text-heading-lg text-balance">
            Vamos criar juntas?
          </h2>
          <p className="mt-5 max-w-[48ch]">
            Me conte a data, o lugar e a história. Respondo em até 48 horas, de segunda a sexta.
          </p>
          <form onSubmit={onSubmit} className="mt-9 flex max-w-[560px] flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="nome" className={labelClass}>
                Nome
              </label>
              <input
                id="nome"
                name="nome"
                type="text"
                autoComplete="name"
                required
                placeholder="Como posso te chamar?"
                className={fieldClass}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className={labelClass}>
                E-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="voce@email.com"
                className={fieldClass}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="tipo" className={labelClass}>
                Tipo de ensaio
              </label>
              <select
                ref={selectRef}
                id="tipo"
                name="tipo"
                required
                defaultValue=""
                className={cn(fieldClass, "select-chevron appearance-none pr-12")}
              >
                <option value="" disabled>
                  Selecione uma opção
                </option>
                {services.map((service) => (
                  <option key={service.value} value={service.value}>
                    {service.value}
                  </option>
                ))}
                <option value="Outro assunto">Outro assunto</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="mensagem" className={labelClass}>
                Mensagem
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                rows={5}
                required
                placeholder="Data, lugar e um pouco da sua história."
                className={cn(fieldClass, "min-h-[150px] resize-y rounded-card")}
              />
            </div>
            <button type="submit" className={cn(btnSolid, "mt-1 self-start")}>
              Enviar mensagem
            </button>
            <p className="m-0 text-[13px] text-muted">
              O envio abre seu aplicativo de e-mail com a mensagem pronta.
            </p>
            <p role="status" aria-live="polite" className="m-0 min-h-[1.5em] text-body-sm font-medium">
              {status}
            </p>
          </form>
        </div>
        <div>
          <dl className="m-0">
            <div className="grid gap-1.5 border-t border-obsidian/25 py-[18px] last:border-b">
              <dt className="text-micro uppercase text-muted">E-mail</dt>
              <dd className="m-0">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="underline decoration-1 underline-offset-4 hover:decoration-2"
                >
                  {contactInfo.email}
                </a>
              </dd>
            </div>
            <div className="grid gap-1.5 border-t border-obsidian/25 py-[18px] last:border-b">
              <dt className="text-micro uppercase text-muted">WhatsApp</dt>
              <dd className="m-0">
                <a
                  href={contactInfo.whatsappHref}
                  target="_blank"
                  rel="noopener"
                  className="underline decoration-1 underline-offset-4 hover:decoration-2"
                >
                  {contactInfo.whatsapp}
                </a>
              </dd>
            </div>
            <div className="grid gap-1.5 border-t border-obsidian/25 py-[18px] last:border-b">
              <dt className="text-micro uppercase text-muted">Instagram</dt>
              <dd className="m-0">
                <a
                  href={contactInfo.instagramHref}
                  target="_blank"
                  rel="noopener"
                  className="underline decoration-1 underline-offset-4 hover:decoration-2"
                >
                  {contactInfo.instagram}
                </a>
              </dd>
            </div>
            <div className="grid gap-1.5 border-t border-obsidian/25 py-[18px] last:border-b">
              <dt className="text-micro uppercase text-muted">Estúdio</dt>
              <dd className="m-0">
                {contactInfo.studio.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
        </div>
      </Container>
    </section>
  );
}
