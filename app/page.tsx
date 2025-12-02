import Hero from './components/Hero';
import MissaoVisaoValores from './components/MissaoVisaoValores';
import Servicos from './components/Servicos';
import FAQ from './components/FAQ';
import Depoimentos from './components/Depoimentos';
import CTA from './components/CTA';
import Contato from './components/Contato';

export const metadata = {
  title: 'VYA IA - Consultoria em Inteligência Artificial de Alto Impacto',
  description:
    'Consultoria estratégica em IA humanizada. Transformamos negócios com expertise técnica, cuidado genuíno e inovação. Soluções de alto impacto para sua transformação digital.',
  keywords:
    'inteligência artificial, consultoria IA, automação de processos, soluções em IA, transformação digital, machine learning, IA generativa',
  authors: [{ name: 'VYA IA', url: 'https://vyaia.com.br' }],
  openGraph: {
    type: 'website',
    url: 'https://vyaia.com.br',
    title: 'VYA IA - Consultoria em Inteligência Artificial',
    description: 'Transformação digital com expertise técnica e impacto real.',
    images: [
      {
        url: 'https://vyaia.com.br/og-image.png',
        width: 1200,
        height: 630,
        alt: 'VYA IA - Consultoria em IA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VYA IA - Consultoria em Inteligência Artificial',
    description: 'Consultoria estratégica em IA humanizada.',
    images: ['https://vyaia.com.br/og-image.png'],
  },
};

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* 1. Nossa Essência - Missão, Visão e Valores */}
      <section id="nossa-essencia">
        <MissaoVisaoValores />
      </section>

      {/* 2. Serviços */}
      <section id="servicos">
        <Servicos />
      </section>

      {/* 3. Dúvidas - FAQ */}
      <section id="faq">
        <FAQ />
      </section>

      {/* 4. Sobre - SobreVYA */}
      <section id="sobre">
        {/* SobreVYA component would go here if available */}
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <h2>Sobre a VYA IA</h2>
          <p>Descubra nossa história, expertise e compromisso com transformação digital.</p>
        </div>
      </section>

      {/* 5. Depoimentos */}
      <section id="depoimentos">
        <Depoimentos />
      </section>

      {/* CTA - Call to Action */}
      <CTA />

      {/* Contato */}
      <section id="contato">
        <Contato />
      </section>
    </main>
  );
}