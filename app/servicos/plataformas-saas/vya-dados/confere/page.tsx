import type { Metadata } from 'next';
import Link from 'next/link';
import Comparer from './Comparer';
import s from '../../dados.module.css';
export const metadata: Metadata = {title:'Confere | Vya Dados',alternates:{canonical:'/servicos/plataformas-saas/vya-dados/confere'}};
export default function ConferePage(){return <div className={s.page}>
<nav className={s.breadcrumb} aria-label="Caminho da página"><Link href="/servicos/plataformas-saas">Plataformas SaaS & APIs</Link> / <Link href="/servicos/plataformas-saas/vya-dados">Vya Dados</Link> / Confere</nav>
<section className={s.hero}><span className={s.kicker}>Demonstração local · Vya Dados</span><h1>Confere</h1><p>Compare duas exportações por chave e campos definidos. Identifique ausências, registros extras, duplicidades e diferenças sem alterar os dados de origem.</p><div className={s.actions}><a href="#comparacao" className={s.button}>Comparar arquivos →</a></div></section>
<p className={s.note}>Use dados sintéticos. Arquivos são processados no navegador, sem envio do conteúdo ao servidor ou armazenamento pela aplicação. Uma diferença técnica não significa erro de negócio.</p>
<Comparer />
<section className={s.panel}><h2>Limites deste incremento</h2><p>CSV e TSV em UTF-8, até 2 MB e 5.000 registros por arquivo. Uma coluna de chave por arquivo, sem chaves compostas. Colunas fora do mapeamento não são comparadas. Chaves duplicadas ou vazias impedem a comparação dos respectivos registros. Nenhuma equivalência de entidades é deduzida.</p><p>Regras são explícitas: texto exato, remoção de espaços externos ou decimal brasileiro sem conversão para ponto flutuante. Para exportações Bling, a regra de chave opcional remove exatamente uma tabulação final. Não há acesso ao ERP, correção automática ou atualização de cadastros.</p></section></div>;}
