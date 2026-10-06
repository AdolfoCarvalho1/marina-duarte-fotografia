import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  axes: ["opsz"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://marinaduarte.com"),
  title: "Marina Duarte — Fotografia em São Paulo",
  description:
    "Retratos, casais, editorial e lifestyle em luz natural. Portfólio de Marina Duarte, fotógrafa em São Paulo.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Marina Duarte — Fotografia em São Paulo",
    description: "Retratos, casais, editorial e lifestyle em luz natural.",
    images: ["/img/hero.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="bg-paper font-sans text-body text-obsidian antialiased">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-5 focus:z-50 focus:rounded-full focus:bg-stage-black focus:px-5 focus:py-3 focus:text-body focus:text-paper"
        >
          Pular para o conteúdo
        </a>
        <SiteHeader />
        <main id="conteudo">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
