import type { Metadata } from 'next';
import Link from 'next/link';
import s from './dados.module.css';

export const metadata: Metadata = {
  title: 'Plataformas SaaS & APIs',
  alternates: { canonical: '/servicos/plataformas-saas' },
};

export default function PlataformasSaaS() {
  return <div className={s.page}>
    <nav aria-label="Caminho da página" className={s.breadcrumb}><Link href="/#servicos">Serviços</Link> / Plataformas SaaS & APIs</nav>
    <section className={s.hero}>
      <span className={s.kicker}>Produtos digitais da Vya IA</span>
      <h1>Plataformas SaaS & APIs</h1>
      <p>Produtos para resolver necessidades específicas de negócio, com funcionalidades e integrações que evoluem a partir de problemas concretos.</p>
      <div className={s.actions}><a className={s.button} href="#produtos">Explorar os produtos →</a></div>
    </section>
    <section id="produtos" className="anchor" aria-labelledby="titulo-produtos">
      <h2 id="titulo-produtos">Conheça os produtos em desenvolvimento</h2>
      <p className={s.intro}>Este espaço reúne as plataformas da Vya IA. O primeiro produto apresentado é a Vya Dados; novos produtos terão suas próprias páginas conforme forem definidos e desenvolvidos.</p>
      <article className={s.card}>
        <span className={s.badge}>Em desenvolvimento · demonstração local</span>
        <h3>Vya Dados</h3>
        <p>Ferramentas para preparar arquivos, organizar cadastros e conferir dados. Um produto com módulos de tratamento, importação e qualidade, começando por um fluxo de preparo para o Bling.</p>
        <Link className={s.secondary} href="/servicos/plataformas-saas/vya-dados">Conhecer a Vya Dados →</Link>
      </article>
    </section>
    <section className={s.panel}>
      <h2>Uma plataforma para cada necessidade</h2>
      <p>O escopo e o estágio de cada produto são apresentados em sua página. Assinaturas, APIs públicas e integrações só serão anunciadas quando estiverem disponíveis e validadas.</p>
      <Link className={s.secondary} href="/#contato">Conversar sobre uma necessidade</Link>
    </section>
  </div>;
}
