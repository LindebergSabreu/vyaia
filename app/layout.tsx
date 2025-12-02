import type { Metadata } from 'next';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'VYA IA - Consultoria em Inteligência Artificial',
  description: 'Consultoria estratégica em inteligência artificial humanizada, com expertise técnica e impacto real',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
