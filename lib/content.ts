export type WorkCategory = "retratos" | "casais" | "editorial" | "lifestyle";

export type Work = {
  src: string;
  alt: string;
  title: string;
  category: string;
  cat: WorkCategory;
  width: number;
  height: number;
  ratio: "portrait" | "square";
};

export const navLinks = [
  { href: "#portfolio", label: "Portfólio" },
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#contato", label: "Contato" },
];

export const filters: Array<{ value: "todos" | WorkCategory; label: string }> = [
  { value: "todos", label: "Todos" },
  { value: "retratos", label: "Retratos" },
  { value: "casais", label: "Casais" },
  { value: "editorial", label: "Editorial" },
  { value: "lifestyle", label: "Lifestyle" },
];

export const works: Work[] = [
  {
    src: "/img/p1.jpg",
    alt: "Mulher à janela com luz dourada da manhã",
    title: "Clara, luz da manhã",
    category: "Retratos",
    cat: "retratos",
    width: 1000,
    height: 1250,
    ratio: "portrait",
  },
  {
    src: "/img/p3.jpg",
    alt: "Editorial de moda com trench coat em fundo neutro",
    title: "Editorial Ática, verão",
    category: "Editorial",
    cat: "editorial",
    width: 1100,
    height: 1100,
    ratio: "square",
  },
  {
    src: "/img/p2.jpg",
    alt: "Casal sentado em uma pedra na serra",
    title: "Ana & Theo, serra",
    category: "Casais",
    cat: "casais",
    width: 1000,
    height: 1250,
    ratio: "portrait",
  },
  {
    src: "/img/p4.jpg",
    alt: "Mulher segurando uma caneca junto à janela",
    title: "Manhã em casa",
    category: "Lifestyle",
    cat: "lifestyle",
    width: 1000,
    height: 1250,
    ratio: "portrait",
  },
  {
    src: "/img/p5.jpg",
    alt: "Retrato feminino em close, luz natural suave",
    title: "Retrato nº 24",
    category: "Retratos",
    cat: "retratos",
    width: 1100,
    height: 1100,
    ratio: "square",
  },
  {
    src: "/img/p6.jpg",
    alt: "Casal abraçado no campo em luz dourada",
    title: "Beatriz & João, campo",
    category: "Casais",
    cat: "casais",
    width: 1000,
    height: 1250,
    ratio: "portrait",
  },
  {
    src: "/img/p7.jpg",
    alt: "Editorial com vestido de linho em fundo claro",
    title: "Editorial Linho",
    category: "Editorial",
    cat: "editorial",
    width: 1000,
    height: 1250,
    ratio: "portrait",
  },
  {
    src: "/img/p8.jpg",
    alt: "Mulher de costas sob o sol poente",
    title: "Domingo de verão",
    category: "Lifestyle",
    cat: "lifestyle",
    width: 1100,
    height: 1100,
    ratio: "square",
  },
  {
    src: "/img/p9.jpg",
    alt: "Mulher de vestido branco dentro da água",
    title: "Olhos de mar",
    category: "Retratos",
    cat: "retratos",
    width: 1000,
    height: 1250,
    ratio: "portrait",
  },
  {
    src: "/img/p10.jpg",
    alt: "Casal caminhando pela cidade em luz dourada",
    title: "Helena & Rui, cidade",
    category: "Casais",
    cat: "casais",
    width: 1100,
    height: 1100,
    ratio: "square",
  },
  {
    src: "/img/p11.jpg",
    alt: "Retrato com sombras de folhas sobre o rosto",
    title: "Editorial Sombra",
    category: "Editorial",
    cat: "editorial",
    width: 1100,
    height: 1100,
    ratio: "square",
  },
  {
    src: "/img/p12.jpg",
    alt: "Mesa de café com bolo junto à janela",
    title: "Café às sete",
    category: "Lifestyle",
    cat: "lifestyle",
    width: 1000,
    height: 1250,
    ratio: "portrait",
  },
];

export const portraits = [
  { src: "/img/c1.jpg", alt: "Retrato em luz natural junto à janela" },
  { src: "/img/c2.jpg", alt: "Retrato masculino em luz dourada" },
  { src: "/img/c3.jpg", alt: "Retrato editorial contra o céu azul" },
  { src: "/img/c4.jpg", alt: "Retrato em campo aberto no fim da tarde" },
  { src: "/img/c5.jpg", alt: "Retrato sorrindo entre árvores" },
  { src: "/img/c6.jpg", alt: "Retrato com sombras de sol no rosto" },
];

export const stats = [
  { value: "12", label: "Anos de estrada" },
  { value: "480+", label: "Ensaios realizados" },
  { value: "9", label: "Países fotografados" },
];

export const services = [
  {
    tag: "Ensaio · 2 horas",
    title: "Individual",
    description:
      "Um retrato seu, sem pressa. Direção leve para você se sentir à vontade na frente da câmera — em estúdio ou na rua.",
    price: "A partir de R$ 890",
    value: "Ensaio individual",
  },
  {
    tag: "Dia inteiro",
    title: "Casal & Casamento",
    description:
      "Do pré-wedding à festa, uma narrativa documental do seu dia. Sem poses engessadas, sem perder nenhum abraço.",
    price: "A partir de R$ 2.400",
    value: "Casal & casamento",
  },
  {
    tag: "Projeto",
    title: "Editorial & Marca",
    description:
      "Campanhas, lookbooks e conteúdo para marcas que respiram estética própria. Direção, produção e finalização.",
    price: "Sob consulta",
    value: "Editorial & marca",
  },
];

export const testimonial = {
  quote:
    "“A Marina tem um jeito raro de estar presente sem interferir. Nossas fotos parecem lembranças — não poses.”",
  author: "Beatriz Almeida · casamento na Serra da Mantiqueira",
};

export const contactInfo = {
  email: "contato@marinaduarte.com",
  whatsapp: "+55 11 98765-4321",
  whatsappHref: "https://wa.me/5511987654321",
  instagram: "@marinaduarte.foto",
  instagramHref: "https://www.instagram.com/marinaduarte.foto",
  studio: ["Rua Harmonia, 123 · Vila Madalena", "São Paulo — SP"],
};

export const socialLinks = [
  { href: "https://www.instagram.com/marinaduarte.foto", label: "Instagram" },
  { href: "https://www.behance.net", label: "Behance" },
  { href: "https://www.pinterest.com", label: "Pinterest" },
];
