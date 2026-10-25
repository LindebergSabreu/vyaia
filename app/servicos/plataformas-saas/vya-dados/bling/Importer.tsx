'use client';
import { useEffect, useRef, useState } from 'react';
import { blingCSV, csv, detectDelimiter, readableReport, fields, labels, parseCSV, prepare, type Mapping, type Result } from '@/lib/bling/engine';
import {readSession,writeSession,validateSession,type SavedSession,type Decision} from '@/lib/bling/session';
import ReviewEditor from './ReviewEditor';
import {reviewResults, type ReviewState} from '@/lib/bling/engine';
import headers from '@/lib/bling/headers.json';
import ncm from '@/lib/bling/ncm.json';
import s from '../../dados.module.css';
const empty = Object.fromEntries(fields.map(f => [f, ''])) as Mapping;
function download(name: string, content: string, type = 'text/csv;charset=utf-8') {
  const url = URL.createObjectURL(new Blob([content], { type }));
  const a = document.createElement('a'); a.href = url; a.download = name; a.click(); setTimeout(() => URL.revokeObjectURL(url), 1000);
}
export default function Importer() {
  const [table, setTable] = useState<string[][]>([]), [mapping, setMapping] = useState<Mapping>(empty);
  const [delimiter, setDelimiter] = useState(';'), [name, setName] = useState('');
  const [results, setResults] = useState<Result[] | null>(null), [error, setError] = useState('');
  const [fill, setFill] = useState(false), [confirmed, setConfirmed] = useState(false), [filter, setFilter] = useState('all');
  const [busy, setBusy] = useState(false);
  const operation = useRef(0);
  const fileInput = useRef<HTMLInputElement>(null);
  const [rawText, setRawText] = useState('');
  const [separatorConfirmed, setSeparatorConfirmed] = useState(false);
  const [separatorNotice, setSeparatorNotice] = useState('');
  const [review,setReview] = useState<ReviewState>({edits:{},excluded:[]});
  const [history,setHistory] = useState<ReviewState[]>([]);
  const [decisions,setDecisions] = useState<Decision[]>([]);
  const [sessionReady,setSessionReady] = useState(false);
  const [sessionStatus,setSessionStatus] = useState('Verificando sessão salva neste navegador…');
  const savingVersion=useRef(0);
  useEffect(()=>{
    let cancelled=false;
    readSession().then(value=>{
      if(cancelled)return;
      if(!value){setSessionStatus('Nenhuma sessão salva. O progresso será salvo automaticamente neste navegador.');return;}
      const saved=validateSession(value);const parsed=parseCSV(saved.rawText,saved.delimiter);
      // Results are recalculated under current rules; export approval is never restored.
      const restored=saved.hasResults?reviewResults(parsed,saved.mapping,ncm.codes,saved.fill,saved.review):null;
      setRawText(saved.rawText);setDelimiter(saved.delimiter);setName(saved.name);setTable(parsed);setMapping(saved.mapping);setFill(saved.fill);setSeparatorConfirmed(saved.separatorConfirmed);setReview(saved.review);setHistory(saved.history);setDecisions(saved.decisions);setResults(restored);setConfirmed(false);
      setSessionStatus('Sessão recuperada. Confira os resultados e confirme novamente antes de exportar.');
    }).catch(err=>{if(!cancelled)setSessionStatus(`Não foi possível recuperar a sessão: ${(err as Error).message}`);}).finally(()=>{if(!cancelled)setSessionReady(true);});
    return()=>{cancelled=true;};
  },[]);
  useEffect(()=>{
    if(!sessionReady||busy||!rawText||!table.length)return;
    const id=++savingVersion.current;
    const saved:SavedSession={version:1,savedAt:new Date().toISOString(),rawText,delimiter,name,mapping,fill,separatorConfirmed,hasResults:results!==null,review,history,decisions};
    setSessionStatus('Salvando progresso neste navegador…');
    writeSession(saved).then(()=>{if(id===savingVersion.current)setSessionStatus(`Progresso salvo neste navegador às ${new Date(saved.savedAt).toLocaleTimeString('pt-BR')}.`);}).catch(()=>{if(id===savingVersion.current)setSessionStatus('Não foi possível salvar o progresso. Baixe a auditoria antes de sair; o armazenamento pode estar bloqueado ou sem espaço.');});
  },[sessionReady,busy,rawText,table,delimiter,name,mapping,fill,separatorConfirmed,results,review,history,decisions]);
  async function forgetSession(){
    operation.current++;savingVersion.current++;setBusy(true);
    try{await writeSession(null);setRawText('');setTable([]);setName('');setMapping(empty);setSeparatorConfirmed(false);setSeparatorNotice('');setFill(false);clear();if(fileInput.current)fileInput.current.value='';setSessionStatus('Sessão apagada deste navegador.');}catch{setSessionStatus('Não foi possível apagar a sessão local.');}finally{setBusy(false);}
  }
  function decide(next:ReviewState, action:string) {
    try { const nextResults=reviewResults(table,mapping,ncm.codes,fill,next); setHistory([...history,review]); setReview(next); setResults(nextResults); setConfirmed(false); setError(''); setDecisions([...decisions,{action,at:new Date().toISOString(),before:review,after:next}]); } catch(e) {setError((e as Error).message);}
  }
  function undo() {const previous=history.at(-1); if(!previous)return;setResults(reviewResults(table,mapping,ncm.codes,fill,previous));setReview(previous);setHistory(history.slice(0,-1));setConfirmed(false);setDecisions([...decisions,{action:'Desfazer última decisão',at:new Date().toISOString(),before:review,after:previous}]);}
  function clear() { setResults(null); setConfirmed(false); setError(''); setReview({edits:{},excluded:[]});setHistory([]);setDecisions([]); }
  function load(text: string, filename: string, separator = delimiter) {
    const parsed = parseCSV(text, separator);
    setTable(parsed); setMapping(Object.fromEntries(fields.map(f => [f, parsed[0].includes(f) ? f : ''])) as Mapping); setName(filename);
  }
  async function sample(kind:'default'|'dirty'='default') {
    const id = ++operation.current; clear(); setTable([]); setBusy(true);
    try { const response = await fetch(kind==='dirty'?'/dados/teste-saneamento-bling.csv':'/dados/amostra-bling.csv'); if (!response.ok) throw new Error('Não foi possível carregar a amostra.'); const text = await response.text(); if (id !== operation.current) return;
      if (fileInput.current) fileInput.current.value = ''; setRawText(text); setSeparatorConfirmed(true); setSeparatorNotice('Separador conhecido da amostra: ponto e vírgula.'); setDelimiter(';'); const parsed = parseCSV(text); setTable(parsed); setMapping(Object.fromEntries(fields.map(f => [f, f])) as Mapping); setName(kind==='dirty'?'teste-saneamento-bling.csv':'Amostra sintética · 20 registros'); setFill(kind!=='dirty');
    } catch (e) { if (id === operation.current) setError((e as Error).message); } finally { if (id === operation.current) setBusy(false); }
  }
  const accepted = results?.filter(r => !r.excluded && !r.issues.length) || [];
  const visible = (results || []).filter(r => filter === 'all' || (filter === 'excluded' ? !!r.excluded : !r.excluded && (filter === 'pending' ? r.issues.length > 0 : !r.issues.length)));
  return <>
    <aside className={s.panel} aria-label="Sessão local"><h2>Sua sessão neste navegador</h2><p role="status">{sessionStatus}</p><p className={s.small}>Entrada, regras e decisões confirmadas ficam neste navegador, neste computador, até você apagar. Rascunhos ainda não confirmados não são salvos. Não há sincronização, conta ou backup remoto. Em computador compartilhado, apague ao terminar. A confirmação de exportação sempre precisa ser refeita após recarregar.</p><button className={s.secondary} disabled={busy || !sessionReady} onClick={forgetSession}>Apagar sessão local e começar de novo</button></aside>
    <section id="entrada" className={`${s.panel} anchor`} aria-labelledby="titulo-entrada"><h2 id="titulo-entrada">1. Escolha o arquivo</h2><p>Comece pela amostra com erros conhecidos ou envie um CSV sintético. Códigos são tratados como texto para preservar zeros à esquerda.</p>
      <div className={s.actions}><button type="button" className={s.secondary} onClick={()=>sample()} disabled={busy || !sessionReady}>Usar amostra de 20 produtos</button><button type="button" className={s.secondary} disabled={busy || !sessionReady} onClick={()=>sample('dirty')}>Usar CSV com sujeiras (16 registros)</button><a href="/dados/amostra-bling.csv" download className={s.secondary}>Baixar amostra CSV</a><a href="/dados/teste-saneamento-bling.csv" download className={s.secondary}>Baixar CSV com sujeiras</a></div>
      <div className={s.formgrid}><label className={s.field}>Separador do seu CSV<select value={delimiter} disabled={busy || !sessionReady} onChange={e => { operation.current++; setDelimiter(e.target.value); setSeparatorConfirmed(false); clear(); if (rawText) { try { load(rawText, name, e.target.value); setSeparatorNotice('Separador alterado. Confira e confirme.'); } catch (err) { setTable([]); setError((err as Error).message); } } }}><option value=";">Ponto e vírgula (;)</option><option value=",">Vírgula (,)</option><option value={'\t'}>Tabulação</option></select></label>
      <label className={s.field}>Arquivo sintético (CSV ou TSV)<input ref={fileInput} type="file" accept=".csv,.tsv,text/csv,text/tab-separated-values" disabled={busy || !sessionReady} onChange={async e => {
        const file = e.target.files?.[0]; if (!file) return;
        const id = ++operation.current; clear(); setTable([]); setName(file.name); setRawText(''); setSeparatorConfirmed(false); setSeparatorNotice(''); setBusy(true);
        try { if (file.size > 2 * 1024 * 1024) throw new Error('O arquivo excede 2 MB.'); const bytes = await file.arrayBuffer(); const text = new TextDecoder('utf-8', { fatal: true }).decode(bytes); if (id === operation.current) { setRawText(text); const detected = detectDelimiter(text); if (detected) { setDelimiter(detected); load(text, file.name, detected); setSeparatorNotice('Separador identificado automaticamente. Confira a seleção e confirme abaixo.'); } else { setSeparatorNotice('Não foi possível identificar um único separador. Selecione manualmente.'); } } }
        catch (err) { if (id === operation.current) setError(err instanceof TypeError ? 'Codificação inválida. Salve o CSV como UTF-8.' : (err as Error).message); }
        finally { if (id === operation.current) setBusy(false); }
      }} /></label></div>
      <div className={s.fileStatus} role="status">{name && <strong>{name}</strong>}<span>{busy ? 'Lendo arquivo…' : table.length ? `${table.length - 1} registros carregados` : name ? 'Arquivo selecionado; aguardando leitura válida.' : 'Nenhum arquivo carregado.'}</span></div>
      {separatorNotice && <p className={s.small}>{separatorNotice}</p>}
      {table.length > 0 && <label className={s.check}><input type="checkbox" checked={separatorConfirmed} onChange={e => { setSeparatorConfirmed(e.target.checked); clear(); }} /><span>Confirmo o separador selecionado e a leitura das colunas.</span></label>}
    </section>
    {table.length > 0 && separatorConfirmed && <section className={s.panel}><h2>2. Confirme as colunas e as regras</h2><p>As correspondências sugeridas usam os nomes das colunas. Confirme o significado antes de validar.</p>
      <div className={s.formgrid}>{fields.map(f => <label key={f} className={s.field}>{labels[f]}<select value={mapping[f]} onChange={e => { setMapping({ ...mapping, [f]: e.target.value }); clear(); }}><option value="">{f === 'ficha_tecnica' ? 'Não utilizar' : 'Selecione uma coluna'}</option>{table[0].map(h => <option key={h} value={h}>{h}</option>)}</select></label>)}</div>
      <label className={s.check}><input type="checkbox" checked={fill} onChange={e => { setFill(e.target.checked); clear(); }} /><span>Usar as duas regras NCM da amostra sintética (caneta esferográfica e bloco de notas). Não é classificação automática de mercadorias.</span></label>
      <button className={s.button} type="button" onClick={() => { clear(); try { setResults(prepare(table, mapping, ncm.codes, fill)); setFilter('all'); } catch (e) { setError((e as Error).message); } }}>Validar e preparar prévia →</button>
    </section>}
    {error && <p role="alert" className={s.error}>{error}</p>}
    {results && <section className={s.panel} aria-labelledby="resultado"><h2 id="resultado">3. Resolva pendências e revise</h2>
      <div className={s.stats} role="status"><div className={s.stat}><strong>{results.length}</strong>Recebidos</div><div className={s.stat}><strong>{accepted.length}</strong>Liberados nesta prévia</div><div className={s.stat}><strong>{results.filter(r=>!r.excluded && r.issues.length).length}</strong>Pendentes</div><div className={s.stat}><strong>{review.excluded.length}</strong>Excluídos deste lote</div></div>
      <ReviewEditor mapping={mapping} results={results} review={review} onApply={decide} onUndo={undo} canUndo={history.length>0} />
      <p className={s.small}>“Liberado” significa aprovado pelas regras deste perfil. Não confirma existência do produto, classificação fiscal ou aceite pelo Bling. Campos que não pertencem ao mapeamento não vão para o arquivo de importação.</p>
      <label className={s.field}>Exibir registros<select value={filter} onChange={e => setFilter(e.target.value)}><option value="all">Todos</option><option value="accepted">Liberados</option><option value="pending">Pendentes</option><option value="excluded">Excluídos deste lote</option></select></label>
      <div className={s.tablewrap} tabIndex={0} role="region" aria-label="Prévia dos registros, com rolagem horizontal"><table className={s.table}><caption className={s.small}>Primeiros {Math.min(visible.length, 100)} de {visible.length} registros do filtro. O relatório inclui o lote completo. Linha indica a posição lógica no CSV, contando o cabeçalho.</caption><thead><tr><th>Linha / código</th><th>Descrição</th><th>Preço / NCM</th><th>Situação</th><th>Pendências e alterações</th></tr></thead><tbody>{visible.slice(0,100).map(r => <tr key={r.line}><td>{r.line}<br />{r.values.sku || 'Sem código'}</td><td>{r.values.descricao || 'Sem descrição'}</td><td>{r.values.preco_venda}<br />{r.values.ncm || 'NCM ausente'}</td><td className={r.issues.length ? s.pending : s.good}>{r.excluded ? 'Excluído' : r.issues.length ? 'Pendente' : 'Liberado'}</td><td>{[...r.issues, ...r.changes].join('\n') || 'Sem alterações'}</td></tr>)}</tbody></table></div>
      <label className={s.check}><input type="checkbox" checked={confirmed} onChange={e => setConfirmed(e.target.checked)} /><span>Revisei a prévia e entendo que o arquivo contém somente os liberados, para cadastrar produtos novos em um ambiente de teste, sem atualizar estoque.</span></label>
      <div className={s.actions}><button type="button" className={s.button} disabled={!confirmed || !accepted.length} onClick={() => download('vya-bling-produtos-novos.csv', blingCSV(results, headers))}>Baixar arquivo para Bling ({accepted.length})</button>
      <button type="button" className={s.secondary} onClick={() => download('vya-relatorio.html', readableReport(results, name), 'text/html;charset=utf-8')}>Baixar relatório para leitura</button>
      <button type="button" className={s.secondary} onClick={() => download('vya-relatorio.csv', csv([['Registro CSV','Código','Situação','Pendências','Alterações'], ...results.map(r => [String(r.line), r.values.sku, r.excluded ? 'EXCLUÍDO' : r.issues.length ? 'PENDENTE' : 'LIBERADO', r.issues.join(' | '), r.changes.join(' | ')])], ';'))}>Baixar relatório CSV</button>
      <button type="button" className={s.secondary} onClick={() => download('vya-auditoria.json', JSON.stringify({ profile: 'bling-produtos-novos-v1', source: name, mapping, fillNcm: fill, ncmSnapshot: ncm.source, ncmSha256: ncm.sha256, importedToBling: false, originalTable: table, review, decisions, results }, null, 2), 'application/json')}>Auditoria técnica (JSON)</button></div>
      <p className={s.small}>O relatório para leitura abre no navegador e pode ser impresso ou salvo em PDF. A auditoria técnica JSON preserva valores recebidos e normalizados. O relatório CSV protege textos com início de fórmula. Para preservar códigos ao abrir no Excel, importe essa coluna como texto.</p>
    </section>}
  </>;
}
