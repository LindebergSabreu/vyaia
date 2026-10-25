import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import s from '../dados.module.css';

export const metadata: Metadata = {
  title: 'Vya Dados',
  alternates: { canonical: '/servicos/plataformas-saas/vya-dados' },
};

const modules = [
  { name: 'Prepara', illustration: 'prepara', imageAlt: 'Tabela com dados irregulares transformada em uma tabela organizada', stage: 'Demonstração local', description: 'Prepare um CSV com seleção, nomes e ordem de colunas, regras explícitas de texto e decimais e rastreabilidade das alterações, independentemente do destino.' },
  { name: 'Importa', illustration: 'importa', imageAlt: 'Dados transferidos de uma tabela para um sistema de destino', stage: 'Demonstração local · Bling', description: 'Preparação para layouts específicos de destino. O primeiro adaptador gera um CSV para produtos novos no Bling; outros destinos ainda não estão implementados.' },
  { name: 'Confere', illustration: 'confere', imageAlt: 'Duas tabelas comparadas com uma diferença destacada', stage: 'Demonstração local', description: 'Compare dois CSVs ou TSVs por chave e mapeamento explícitos. Identifique ausentes, extras, duplicidades e diferenças por campo, com relatório para leitura.' },
  { name: 'Unifica', illustration: 'unifica', imageAlt: 'Dois conjuntos de registros reunidos em uma tabela', stage: 'Planejado', description: 'Consolidação de cadastros e tratamento de duplicidades por critérios explícitos, separando conflitos para revisão. Não será limitado ao Bling.' },
  { name: 'Vigia', illustration: 'vigia', imageAlt: 'Painel com indicadores de dados e um alerta de monitoramento', stage: 'Planejado', description: 'Verificações recorrentes de estrutura, preenchimento e chegada de dados. Fontes, limites e alertas precisarão ser configurados para cada uso.' },
];

export default function VyaDados() {
  return <div className={s.page}>
    <nav aria-label="Caminho da página" className={s.breadcrumb}><Link href="/servicos/plataformas-saas">Plataformas SaaS & APIs</Link> / Vya Dados</nav>
    <section className={s.hero}>
      <span className={s.kicker}>Um produto da Vya IA · em desenvolvimento</span>
      <h1>Vya Dados</h1>
      <p>Prepare arquivos, organize cadastros e confira resultados em um só produto. A proposta é reunir módulos de tratamento, importação e qualidade de dados, com regras claras e histórico das mudanças.</p>
      <div className={s.actions}><a className={s.button} href="#modulos">Conhecer os módulos →</a></div>
    </section>
    <p className={s.note}>Estão disponíveis para demonstração local o Prepara geral em CSV, o fluxo de produtos novos para Bling e a comparação de dois arquivos no Confere. Unifica e Vigia continuam planejados; outros destinos de importação ainda não estão disponíveis.</p>
    <section id="modulos" className="anchor" aria-labelledby="titulo-modulos">
      <h2 id="titulo-modulos">Módulos da Vya Dados</h2>
      <p className={s.intro}>Cada módulo tem uma função. A integração com um sistema específico pertence ao adaptador de destino, sem limitar todo o produto a esse sistema.</p>
      <div className={s.grid}>{modules.map(module => <article className={`${s.card} ${s.moduleCard}`} key={module.name}>
        <div className={s.moduleArt}><Image src={`/dados/ilustracoes/${module.illustration}.svg`} alt={module.imageAlt} width={640} height={360} sizes="(max-width: 760px) 100vw, (max-width: 1000px) 50vw, 350px" /></div>
        <div className={s.moduleCopy}>
        <span className={s.badge}>{module.stage}</span><h3>{module.name}</h3><p>{module.description}</p>{module.name === 'Prepara' && <Link className={s.secondary} href="/servicos/plataformas-saas/vya-dados/prepara">Testar o Prepara →</Link>}{module.name === 'Confere' && <Link className={s.secondary} href="/servicos/plataformas-saas/vya-dados/confere#comparacao">Testar o Confere →</Link>}</div>
      </article>)}</div>
    </section>
    <section className={s.panel} aria-labelledby="bling">
      <span className={s.badge}>Primeiro adaptador · demonstração local</span>
      <h2 id="bling" style={{ marginTop: '16px' }}>Prepara + Importa para Bling</h2>
      <p>Mapeie colunas de um CSV, confira os registros liberados e as pendências e baixe o arquivo para cadastro de produtos simples novos. O processamento ocorre no navegador; o fluxo não acessa o ERP.</p>
      <Link className={s.secondary} href="/servicos/plataformas-saas/vya-dados/bling#entrada">Testar o fluxo Bling →</Link>
      <p className={s.small}>Use dados sintéticos. Uma amostra sintética foi aceita e reconferida no Bling de teste; isso não comprova compatibilidade com qualquer lote. Não há contratação automática, assinatura ou API pública disponível.</p>
    </section>
  </div>;
}
