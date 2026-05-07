import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";

import Footer from "./components/Footer";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: {
    default: "Vya IA | Consultoria em Inteligência Artificial",
    template: "%s | Vya IA",
  },
  description:
    "Consultoria em inteligência artificial para automação, estratégia, soluções customizadas e adoção responsável de IA em empresas.",
  applicationName: "Vya IA",
  metadataBase: new URL("https://vyaia.com.br"),
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.ico" },
  openGraph: {
    type: "website",
    url: "https://vyaia.com.br",
    title: "Vya IA | Consultoria em Inteligência Artificial",
    description: "IA aplicada com método, segurança e foco em resultado real para empresas.",
    siteName: "Vya IA",
    images: [
      {
        url: "/logo-vya-ia.png",
        width: 1024,
        height: 1024,
        alt: "Vya IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vya IA | Consultoria em Inteligência Artificial",
    description: "IA aplicada com método, segurança e foco em resultado real para empresas.",
    images: ["/logo-vya-ia.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Vya IA",
    url: "https://vyaia.com.br",
    logo: "https://vyaia.com.br/logo-vya-ia.png",
    sameAs: [
      "https://linkedin.com/company/vyaia-oficial",
      "https://instagram.com/vyaia_oficial",
    ],
    email: "contato@vyaia.com.br",
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Vya IA",
    url: "https://vyaia.com.br",
  };

  return (
    <html lang="pt-BR">
      <body>
        <a href="#conteudo" className="skip-link">
          Ir para o conteúdo
        </a>
        <Header />
        <main id="conteudo">{children}</main>
        <Footer />
        <Script
          id="jsonld-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <Script
          id="jsonld-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </body>
    </html>
  );
}
