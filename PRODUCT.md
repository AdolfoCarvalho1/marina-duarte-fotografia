# PRODUCT.md — Marina Duarte · Fotografia

## O que é
Site pessoal de uma fotógrafa (persona fictícia "Marina Duarte", São Paulo). Portfólio visual + serviços + contato. Página única em PT-BR construída com **Next.js 16** (App Router, TypeScript) e **Tailwind CSS v4**: `app/` (layout e página), `components/` (seções), `lib/content.ts` (conteúdo editável), `public/img/` (fotos).

## Modo da superfície
Persuade — o visitante vê o trabalho, reconhece valor e abre um pedido de orçamento. O portfólio lidera como experiência; a conversão é o contato.

## Público e cena
Pessoas, casais e marcas em São Paulo procurando fotografia com luz natural e estética editorial. Cena de uso: celular, rolando o portfólio; e desktop, avaliando orçamento antes de contratar.

## Ação primária
Enviar pedido de orçamento (formulário → e-mail pré-preenchido via `mailto:`). Ação secundária: WhatsApp.

## Provas
Grade de portfólio (12 fotos, filtráveis), carrossel de retratos, depoimento de cliente, bio com números, serviços com faixa de preço.

## Mundo visual (fixado pelo brief do usuário)
Réplica do estilo Refero "Patreon": canvas branco, UI monocromática, a cor só existe dentro da fotografia. Inter variável (local, pesos 200–500), tracking negativo, bottons/cards pill (30px), inputs 45px, pills 9999px, hairline `#1a1a1a`, único CTA preto, zero sombras, zero gradientes. Faixa de seção azul suave `#94bbff`. Tipografia leve > peso.

## Stack e restrições
- Next.js 16.3 (App Router, TypeScript strict) + React 19 + Tailwind CSS v4 (`@theme`).
- Fontes via `next/font` (Inter self-hosted no build; runtime sem requisições ao Google).
- Imagens locais em `public/img/` otimizadas por `next/image`.
- Deploy: build padrão (`npm run build`), ideal para Vercel.
- Acessibilidade: semântica, alt em PT, foco visível, `prefers-reduced-motion`.
- Versão estática anterior preservada em `legacy/`.

## Assets
- 20 fotos do Unsplash em `public/img/` (licença Unsplash; procedência no DESIGN.md).
- Inter carregada via `next/font/google` em `app/layout.tsx`.

## Suposições (usuário deu aval para prosseguir sem revisão)
- Nome, contatos, preços e depoimentos são ficção de portfólio, para edição posterior.
- Formulário usa `mailto:` (sem backend). Para receber de verdade: Formspree/Netlify Forms ou route handler.
