import Link from 'next/link';
import Preparer from './Preparer';
import s from '../../dados.module.css';
export const metadata = { title: 'Prepara | Vya Dados' };
export default function Page() { return <div className={s.page}>
<nav className={s.breadcrumb} aria-label="Caminho da página"><Link href="/servicos/plataformas-saas/vya-dados">Vya Dados</Link> / Prepara</nav>
<section className={s.hero}><span className={s.kicker}>Demonstração local</span><h1>Prepara</h1><p>Prepare dados para seu próximo uso. Escolha colunas, defina nomes e formatos e confira cada transformação, independentemente do sistema de destino.</p></section>
<p className={s.note}>Use dados sintéticos. CSV UTF-8, até 2 MB e 5.000 registros. Conteúdo processado no navegador, sem envio ao servidor ou persistência. Recarregar descarta a sessão. Não há junções, deduplicação ou importação em sistemas neste incremento.</p>
<Preparer /></div>; }
