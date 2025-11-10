import Header from './components/Header';
import Hero from './components/Hero';
import Servicos from './components/Servicos';
import MissaoVisaoValores from './components/MissaoVisaoValores';
import Depoimentos from './components/Depoimentos';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <div id="topo"></div>
      <Hero />
      <Servicos />
      <MissaoVisaoValores />
      <Depoimentos />
      <Footer />
    </>
  );
}
