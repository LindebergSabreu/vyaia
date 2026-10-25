import type { Metadata } from 'next';
import Link from 'next/link';
import Importer from './Importer';
import s from '../../dados.module.css';
export const metadata: Metadata = { title: 'Prepara + Importa para Bling', alternates: { canonical: '/servicos/plataformas-saas/vya-dados/bling' } };
export default function BlingPage() {
  return <div className={s.page}>
    <nav aria-label="Caminho da página" className={s.breadcrumb}><Link href="/servicos/plataformas-saas">Plataformas SaaS & APIs</Link> / <Link href="/servicos/plataformas-saas/vya-dados">Vya Dados</Link> / Prepara + Importa para Bling</nav>
    <section className={s.hero}><span className={s.kicker}>Vya Dados · demonstração local</span><h1>Seu catálogo, preparado para o próximo passo no Bling.</h1><p>Mapeie as colunas, confira o que pode seguir e baixe o arquivo de produtos novos. O que precisa de decisão fica separado, com o motivo.</p></section>
    <div className={s.note}>Use somente dados sintéticos neste teste. O processamento ocorre no navegador, sem enviar o conteúdo do CSV ao servidor. O progresso é salvo automaticamente apenas neste navegador e pode ser apagado no painel de sessão. Este fluxo não acessa o Bling e não realiza a importação.</div>
    <Importer />
    <section className={s.panel}><h2>O que este primeiro incremento cobre</h2><p>CSV ou TSV em UTF-8, até 2 MB e 5.000 registros. Produtos simples novos, unidades UN ou CX, preço no formato brasileiro e origem fiscal informada. Não verifica se o código já existe no ERP; não cobre variantes, imagens, atualização de cadastros ou estoque.</p><p>O arquivo de saída usa o modelo de 59 colunas guardado no estudo de 25/10/2026. A prova anterior importou oito produtos sintéticos; a saída desta nova interface ainda precisa de validação no ambiente de teste do Bling. O aceite atual do ERP não é garantido por esta prévia.</p><p>A consulta NCM usa um snapshot local do estudo, sem atualização automática. Código encontrado não comprova classificação fiscal. O preenchimento opcional por ficha técnica cobre apenas os dois exemplos sintéticos da amostra.</p><p>A conferência automática da exportação de retorno do Bling fica para o próximo incremento.</p></section>
  </div>;
}
