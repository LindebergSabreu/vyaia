// app/page.tsx

import Image from 'next/image';
import Header from './components/Header';
import Hero from './components/Hero';
import MissaoVisaoValores from './components/MissaoVisaoValores';
import Servicos from './components/Servicos';
import Depoimentos from './components/Depoimentos';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <MissaoVisaoValores />
      <Servicos />
      <Depoimentos />
      <Footer />
    </main>
  );
}
