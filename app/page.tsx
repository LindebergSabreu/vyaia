import Hero from "./components/Hero";
import Servicos from "./components/Servicos";
import MissaoVisaoValores from "./components/MissaoVisaoValores";
import Depoimentos from "./components/Depoimentos";
import FAQ from "./components/FAQ";
import SobreVYA from "./components/SobreVYA";
import Contato from "./components/Contato";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <>
      {/* IDs usados pelo Header: /#hero, /#servicos, /#faq, /#sobrevyaia, /#contato */}
      <section id="hero" className="anchor">
        <Hero />
      </section>

      <section id="missao-visao-valores" className="anchor">
        <MissaoVisaoValores />
      </section>

      <section id="servicos" className="anchor">
        <Servicos />
      </section>

      <section id="depoimentos" className="anchor">
        <Depoimentos />
      </section>

      <section id="faq" className="anchor">
        <FAQ />
      </section>

      <section id="sobrevyaia" className="anchor">
        <SobreVYA />
      </section>

      <section id="cta" className="anchor">
        <CTA />
      </section>

      <section id="contato" className="anchor">
        <Contato />
      </section>
    </>
  );
}
