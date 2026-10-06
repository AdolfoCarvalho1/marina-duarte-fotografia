# DESIGN.md — Marina Duarte · Fotografia

Sistema documentado a partir do build em `app/globals.css` + `components/`. Mundo visual fixado pelo brief do usuário (estilo Refero "Patreon"): canvas branco editorial onde a única cor vive dentro da fotografia.

## Identidade

Plataforma editorial monocromática. A UI recua para os retratos dominarem: tipografia leve, tracking negativo, pills, hairline `#1a1a1a`, zero sombras, zero gradientes. A riqueza visual vem da fotografia real, nunca de ornamento de interface.

## Tokens — Cor

| Token | Valor | Papel |
|---|---|---|
| `--color-obsidian` | `#1a1a1a` | Texto, bordas hairline, divisores |
| `--color-paper` | `#ffffff` | Canvas, superfícies, texto sobre preto |
| `--color-stage-black` | `#000000` | Único preenchimento de ação (CTA primário) |
| `--color-muted` | `#767676` | Texto secundário pequeno (contraste 4.5:1) |
| `--color-concrete` | `#959595` | Neutro original do guia — reservado a decorativo/disabled |
| `--color-stone` | `#90867a` | Warm accent, uso mínimo |
| `--color-sky-tint` | `#94bbff` | Faixa de seção do carrossel |

Desvio consciente: o guia de referência usa `#959595` para metadados pequenos; aqui `#767676` assume esse papel para manter 4.5:1 em textos de 11–14px. `#959595` segue no sistema, restrito a elementos não textuais/disabled.

## Tokens — Tipografia

Fonte única: **Inter variável** (self-hosted, pesos 100–900; alternativa gratuita indicada pelo próprio style guide para a Oracle). Pesos display 250–300, corpo 400, controles 500.

| Papel | Tamanho | Peso | Line-height | Tracking |
|---|---|---|---|---|
| Display (hero) | `clamp(3.25rem, 10vw, 9rem)` | 250 | 0.88 | -0.055em |
| Heading LG | `clamp(2.25rem, 4.5vw, 3.375rem)` | 250 | 0.98 | -0.04em |
| Citação | `clamp(2rem, 5vw, 3.5rem)` | 250 | 1.1 | -0.035em |
| Título de card | 26px | 300 | 1.1 | -0.023em |
| Corpo | 15px | 400 | 1.5 | -0.018em |
| Micro-label | 11px | 500 | 1.4 | +0.05em (uppercase) |

Regra estrutural: hierarquia por escala e tracking, nunca por peso. Nada acima de 500.

## Formas, espaço e superfícies

- Raios: cards/links/buttons **30px** · inputs **45px** · pills **9999px**. Não existem cantos retos nem valores intermediários.
- Espaço: base 4px; padding de card 24px; gap de elementos 8–14px; seções `clamp(64px, 9vw, 96px)`.
- Largura máxima 1440px; conteúdo textual até ~60ch.
- Elevação: nenhuma. Separação por hairline 1px `#1a1a1a`, espaço em branco e contraste preto/branco.
- Superfícies: Paper (canvas), Sky Tint `#94bbff` (faixa do carrossel), Overlay `rgba(26,26,26,.3)` sobre hero para legibilidade.

## Componentes

- **CTA primário**: fill `#000000`, texto branco, 30px, padding 14×21px — única superfície preta do sistema, uma por viewport (nav/contato).
- **Ghost button**: borda 1px `#1a1a1a`, fundo transparente; hover `rgba(26,26,26,.06)`.
- **Pill de filtro/tag**: borda hairline, 9999px; ativo inverte para obsidian/branco.
- **Card de serviço**: borda hairline 30px, pill tag, sem sombra; preço ancorado ao pé do card.
- **Card de portfólio**: foto 4:5 ou 1:1 com raio 30px, sem chrome; legenda = título 15px + categoria micro muted.
- **Carrossel**: scroll-snap nativo, quadrados, setas circulares ghost (52px) com estado disabled.
- **Inputs**: pill 45px, borda `#1a1a1a`, texto 15px; textarea raio 30px; select com chevron SVG desenhado; placeholder `#767676`.
- **Hero**: foto full-bleed 100svh com overlay sólido `rgba(26,26,26,.3)`; display em duas linhas desencontradas ("A luz das" à esquerda, "coisas simples." alinhada à direita) ocupando quase toda a largura; chip flutuante de "último ensaio" (avatar + link) à direita; seta de scroll e tag de localização na base.
- **Nav**: transparente sobre o hero no topo (texto/bordas/botão em branco, CTA invertido branco-preenchido), vira barra branca com hairline `#1a1a1a` após ~56px de scroll; vira pill "Menu" ≤900px com painel full-width (sempre sólido quando aberto ou rolado).

## Movimento

Entrada autoral do hero: a foto assenta (`scale(1.06) → 1`, 2.4s, ease-out exponencial) e o display, chip e base sobem em fade escalonado (0.9s, delays 0.15/0.3/0.45s). No scroll, os cards do portfólio revelam em stagger de 90ms via IntersectionObserver (uma vez só, apenas nessa seção). Todo o resto são transições discretas (0.3–0.7s): hover de links com underline, zoom `scale(1.03)` nos cards de portfólio, scroll suave com `scroll-padding-top: 96px`. `prefers-reduced-motion: reduce` desliga tudo e mantém o conteúdo visível.

## Superfícies do browser

Seleção em obsidian/branco; caret obsidian; scrollbar custom (trilho branco, thumb obsidian pill 12px); foco visível 2px `#1a1a1a` com offset; `underline-offset` 4px em links.

## Acessibilidade

- Semântica com landmarks, `aria-labelledby` por seção, skip link.
- Contraste: corpo `#1a1a1a`, muted pequeno `#767676` (4.5:1), texto branco sobre overlay sólido no hero.
- Imagens com `alt` em português e dimensões intrínsecas (anti-CLS); hero com `loading="eager"` + `fetchPriority="high"` (recomendação do Next 16, que deprecou `priority`), demais `lazy`.
- Filtros com `aria-pressed`, carrossel com região rotulada e setas nomeadas, status do formulário com `aria-live`.
- Teclado: menu fecha com Escape e devolve foco ao botão; foco visível em todos os controles.

## Desvios aceitos do detector (mundo fixado)

1. **Inter** — prescrita pelo style guide de referência como alternativa gratuita à Oracle. Identidade.
2. **Tracking display -0.055em** — o guia exige -0.04 a -0.06em em display para o peso leve não parecer esparso.
3. **Leading display < 1.3** — o guia define 0.87–0.98 para display; a regra de 1.3+ vale para corpo.
4. **Full-bleed hero/faixa** — fotografia de borda a borda é a assinatura do sistema.
5. **Travessões (—)** — pontuação editorial legítima em PT-BR.

## Imagens e procedência

20 fotos baixadas do Unsplash (licença Unsplash) para `assets/img/`, com cróps fixos. Para trocar, substitua o arquivo mantendo o nome:

| Arquivo | Origem (images.unsplash.com/photo-…) |
|---|---|
| hero.jpg | photo-1634510979979-4be6881d31bb |
| p1.jpg | photo-1542466131-3f5813d6a04d |
| p2.jpg | photo-1601938286493-2a958a72f0d4 |
| p3.jpg | photo-1668952135120-7d997b1b3778 |
| p4.jpg | photo-1545386673-7723f55e5490 |
| p5.jpg | photo-1786520995824-c14b85944263 |
| p6.jpg | photo-1742327648139-2f81d97d6d7e |
| p7.jpg | photo-1747396206869-75ea57b325ce |
| p8.jpg | photo-1619896849560-f92c4330f1a6 |
| p9.jpg | photo-1605551443799-3a7dfedced47 |
| p10.jpg | photo-1672707162462-bf3f37ad1c6c |
| p11.jpg | photo-1781819114972-478f14095968 |
| p12.jpg | photo-1529942458412-eda69f76291d |
| c1.jpg | photo-1681048465295-56be17caf8ba |
| c2.jpg | photo-1600486913747-55e5470d6f40 |
| c3.jpg | photo-1662532577856-e8ee8b138a8b |
| c4.jpg | photo-1536063211352-0b94219f6212 |
| c5.jpg | photo-1618463744383-bdf28f447513 |
| c6.jpg | photo-1771919005587-d49d985daa0b |
| about.jpg | photo-1788938594249-407d8be94d89 |

Fontes: Inter via `next/font/google` em `app/layout.tsx` (self-hosted no build; subsets latin/latin-ext + eixo `opsz`, indispensável para o display fechar em uma linha).

## Stack

Next.js 16.3 (App Router, TypeScript strict) · React 19 · Tailwind CSS v4 com tokens em `@theme`. Imagens otimizadas por `next/image`. Scripts: `npm run dev` · `npm run build` · `npm start` · `npm run lint`. A versão estática anterior está preservada em `legacy/`.

## Como personalizar

- **Nome, contatos, preços, textos**: `lib/content.ts` (e `app/layout.tsx` para título/description/OG).
- **Cores/tipografia/espaços**: tokens `@theme` em `app/globals.css`.
- **Formulário**: monta um `mailto:` em `components/Contact.tsx`. Para receber de verdade, trocar por Formspree/Netlify Forms ou route handler.
- **Fotos**: manter nomes de arquivo em `public/img/`; cróps recomendados 4:5 (1000×1250), 1:1 (1100×1100), hero 16:9 (2560×1440).
- **Seções**: componentes independentes em `components/` (Hero, Intro, Portfolio, PortraitsBand, About, Services, Testimonial, Contact, SiteHeader, SiteFooter).
