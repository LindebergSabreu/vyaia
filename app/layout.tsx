import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vya IA',
  description: 'Inteligência que cuida e transforma.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
