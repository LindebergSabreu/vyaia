'use client';

import Header from './components/Header';
import Hero from './components/Hero';
import MissaoVisaoValores from './components/MissaoVisaoValores';
import Servicos from './components/Servicos';
import FAQ from './components/FAQ';
import Depoimentos from './components/Depoimentos';
import SobreVYA from './components/SobreVYA';
import CTA from './components/CTA';
import Contato from './components/Contato';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <MissaoVisaoValores />
      <Servicos />
      <FAQ />
      <Depoimentos />
      <SobreVYA />
      <CTA />
      <Contato />
      <Footer />
    </>
  );
}
