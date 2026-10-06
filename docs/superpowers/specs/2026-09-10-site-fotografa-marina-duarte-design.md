# Site Marina Duarte — Design Spec

Data: 2026-09-10 · Status: aprovado pelo usuário para execução direta ("só vai, deixa pronto")
Working dir: `C:\Users\adolf\Desktop\Nova pasta (2)`

## 1. Objetivo

Site pessoal de fotógrafa (persona fictícia "Marina Duarte", São Paulo). Página única estática em PT-BR, sem build step, com imagens e fontes locais. Objetivo do visitante: conhecer o portfólio e pedir orçamento.

## 2. Decisões do brainstorm

- Nicho: portfólio misto (retratos, casais, editorial, lifestyle).
- Nome: fictício, "Marina Duarte" (editável).
- Idioma: português.
- Abordagem: página única estática (HTML + CSS + JS puro).
- Imagens: 20 fotos do Unsplash baixadas para `assets/img/` (licença livre; manifesto de origem registrado no relatório de download), com 3 substituições pontuais (hero escuro para texto branco; p6/p10 casais).
- Fontes: Inter variável self-hosted em `assets/fonts/` (substituta gratuita indicada pelo style guide para a Oracle).

## 3. Design system (fiel ao estilo Refero "Patreon")

| Token | Valor |
|---|---|
| Canvas / Paper | `#ffffff` |
| Texto e bordas (Obsidian) | `#1a1a1a` |
| CTA (Stage Black) | `#000000` |
| Muted pequeno (acessível) | `#767676` (contraste 4.5:1) |
| Concrete (original do guia) | `#959595` — só decorativo/disabled |
| Faixa de seção (Sky Tint) | `#94bbff` |
| Warm accent (Stone) | `#90867a` — uso mínimo |
| Tipografia | Inter variável 100–900; display/headings peso 250–300, body 15px peso 400 |
| Tracking | display `-0.055em`, heading-lg `-0.04em`, body `-0.018em` |
| Raios | cards/links/buttons 30px · inputs 45px · pills 9999px |
| Espaçamento | base 4px; seções 64–96px; gap de elementos 8–14px |
| Proibições do guia | zero sombras, zero gradientes, nenhum CTA cromático, nada de peso 600+ |

## 4. Estrutura da página

1. Nav sticky — links à esquerda, wordmark central, ghost "Orçamento" + CTA preto "Agendar ensaio" à direita; menu pill no mobile.
2. Hero full-bleed `100svh` — foto escura, título branco peso 250 no terço inferior, tag micro "São Paulo · Desde 2014".
3. Abertura editorial — "Histórias reais, olhar editorial." + parágrafo (grid 7/5).
4. Portfólio — 12 fotos em masonry (CSS columns 3/2/1), captions discretas, filtros pill (Todos, Retratos, Casais, Editorial, Lifestyle).
5. Faixa azul `#94bbff` — "Um rosto de cada vez." + carrossel horizontal de 6 retratos quadrados com setas pill.
6. Sobre — retrato 4:5 + bio + números (12 anos, 480+ ensaios, 9 países).
7. Serviços — 3 cards com borda hairline: Individual (R$ 890), Casal & Casamento (R$ 2.400), Editorial & Marca (sob consulta).
8. Depoimento — citação grande peso 250 + autoria.
9. Contato — "Vamos criar juntas?" + formulário (mailto pré-preenchido) + dados de contato.
10. Footer — borda superior hairline, colunas de links, © 2026.

## 5. Direction contract

- THESIS: Um palco branco onde só a fotografia tem cor; o layout recusa o template de agência colorida e deixa a luz natural carregar o valor.
- OWN-WORLD: canvas `#fff`, texto/bordas `#1a1a1a`, CTA `#000`, faixa `#94bbff`, Inter 200–500, pill 30/45/9999, hairline 1px, zero sombra e zero gradiente.
- STORY: o visitante folheia o portfólio → reconhece um olhar consistente → pede orçamento.
- FIRST VIEWPORT: foto full-bleed escura; título branco peso 250 (~150px) no terço inferior esquerdo; tag micro à direita; nav branca fixa no topo.
- FORM: code-led; mundo visual fixado pelo brief do usuário (estilo Refero "Patreon"); sem torneio de conceitos.
- FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

## 6. Comportamento e estados

- Filtros com `aria-pressed`; cards escondem via atributo `hidden`.
- Carrossel com scroll-snap nativo, setas com estado disabled nos extremos.
- Formulário: validação nativa + status em `aria-live`; envio monta `mailto:` com assunto/corpo; atalhos dos cards de serviço pré-selecionam o tipo.
- Header ganha hairline inferior ao rolar; menu mobile fecha em link/Escape.
- Movimento: um único momento autoral (a foto do hero assentando + título subindo) com `prefers-reduced-motion` desligando tudo.
- Superfícies do browser temáticas: seleção, caret, scrollbar, foco visível.

## 7. Acessibilidade e performance

- Semântica de seções com `aria-labelledby`, skip link, alt em português, labels visíveis.
- Contraste: corpo `#1a1a1a`, muted pequeno `#767676` (4.5:1), texto branco sobre foto escura com overlay sólido.
- Imagens com `width`/`height` (anti-CLS), `loading="lazy"` exceto hero (preload + `fetchpriority=high`).
- Fontes locais com `font-display: swap`; preload da woff2 latina e do hero.

## 8. Arquivos

```
index.html
css/styles.css
js/script.js
assets/img/  (hero, p1–p12, c1–c6, about — 20 fotos)
assets/fonts/ (inter-latin.woff2, inter-latin-ext.woff2)
PRODUCT.md · DESIGN.md (no finish)
docs/superpowers/specs/2026-09-10-site-fotografa-marina-duarte-design.md (este arquivo)
```

## 9. Verificação planejada

1. Detector mecânico do Impeccable (`impeccable detect`) sobre HTML/CSS.
2. Screenshots headless (Edge) em 1440 e 390 de largura, inspeção visual em dois passes no máximo.
3. Checagem de conteúdo: todos os `src` existem; formulário monta mailto correto; filtros e carrossel funcionam.

## 10. Suposições

- Contatos, preços e depoimento são ficção de portfólio.
- Sem backend: contato via `mailto:` e WhatsApp.
- Nomes de arquivos de imagem fixados no manifesto para permitir substituições sem tocar no código.
