'use client';
import { Fragment, useMemo, useState } from 'react';
import { csv } from '@/lib/bling/engine';
import { type Finding, type Pair } from '@/lib/confere/engine';
import { groupRecords, resultRecords, selectRecords, statusLabels, type ResultRecord, type ViewOptions } from '@/lib/confere/results';
import s from './results.module.css';

type Props = { findings: Finding[]; source: string[][]; target: string[][]; names: string[]; pairs: Pair[] };
const displayField = (field:string) => {const [left,right]=field.split(' ↔ ');return left===right?left:field;};
const initial: ViewOptions = { status: 'todos', search: '', field: '', sort: 'key', direction: 1, group: '' };
export default function Results({findings, source, target, names, pairs}: Props) {
  const [options, setOptions] = useState(initial);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(25);
  const [selected, setSelected] = useState<ResultRecord | null>(null);
  const [collapsed, setCollapsed] = useState<Set<string>>(new Set());
  const records = useMemo(() => resultRecords(findings,source,target), [findings,source,target]);
  const counts = useMemo(() => records.reduce((acc,r) => {acc[r.status]++;return acc;}, Object.fromEntries(Object.keys(statusLabels).map(k=>[k,0])) as Record<Finding['status'],number>), [records]);
  const filtered = useMemo(() => selectRecords(records,options),[records,options]);
  const groups = useMemo(() => groupRecords(filtered,options.group,options.field),[filtered,options.group,options.field]);
  const entries = useMemo(() => groups.flatMap(g=>collapsed.has(g.label)?[]:g.records.map(record=>({record,label:g.label,total:g.records.length}))),[groups,collapsed]);
  const pages = Math.max(1,Math.ceil(entries.length/size));
  const currentPage = Math.min(page,pages-1);
  const visible = entries.slice(currentPage*size,(currentPage+1)*size);
  const fields = [...new Set(findings.flatMap(f=>f.field?[f.field]:[]))];
  function update(patch: Partial<ViewOptions>) {setOptions({...options,...patch});setPage(0);setSelected(null);setCollapsed(new Set());}
  function sort(column: ViewOptions['sort']) {update({sort:column,direction:options.sort===column?-options.direction:1});}
  function exportFiltered() {
    const selectedFindings = filtered.flatMap(r=>r.findings.filter(f=>!options.field||f.field===options.field));
    const content = csv([['Situação','Chave','Registro origem','Registro destino','Campo','Valor origem','Valor destino'],...selectedFindings.map(f=>[statusLabels[f.status],f.key,String(f.sourceLine??''),String(f.targetLine??''),f.field??'',f.sourceValue??'',f.targetValue??''])],';');
    const url=URL.createObjectURL(new Blob([content],{type:'text/csv;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='vya-confere-filtrado.csv';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
  }
  const fieldFindings=(r:ResultRecord, groupLabel?:string)=>r.findings.filter(f=>(!options.field||f.field===options.field)&&(!groupLabel||options.group!=='field'||f.field===groupLabel));
  const formatValue=(v:string|undefined)=>v===undefined?'Não se aplica':v===''?'(vazio)':v;
  function cell(r:ResultRecord,side:'sourceValue'|'targetValue', groupLabel:string) {
    const fs=fieldFindings(r,groupLabel).filter(f=>f.field);
    if(!fs.length)return r.status==='igual'?'Igual nos campos mapeados':r.status==='duplicada'?'Pareamento pendente':r.status==='chave vazia'?'Identificação pendente':side==='sourceValue'?(r.status==='ausente'?'Presente':'Não encontrado'):(r.status==='extra'?'Presente':'Não encontrado');
    return fs.map((f,i)=><div key={i} className={s.value}>{fs.length>1&&<small>{displayField(f.field!)}</small>}{formatValue(f[side])}</div>);
  }
  return <div className={s.results}>
    <p>{source.length-1} registros em <strong>{names[0]}</strong> · {target.length-1} em <strong>{names[1]}</strong></p>
    <div className={s.summary} aria-label="Filtrar por situação">
      <button type="button" aria-pressed={options.status==='todos'} onClick={()=>update({status:'todos'})}><strong>{records.length.toLocaleString('pt-BR')}</strong>Todos os resultados</button>
      {Object.entries(statusLabels).map(([status,label])=><button type="button" key={status} aria-pressed={options.status===status} onClick={()=>update({status})}><strong>{counts[status as Finding['status']].toLocaleString('pt-BR')}</strong>{label}</button>)}
    </div>
    <p className={s.help}>Cada resultado representa uma chave. Chaves vazias contam separadamente por registro. Uma chave com vários campos diferentes conta uma vez; chaves repetidas não são pareadas.</p>
    <div className={s.tools}>
      <label>Buscar nos registros<input type="search" value={options.search} onChange={e=>update({search:e.target.value})} placeholder="Chave, descrição ou outro valor" /></label>
      <label>Campo com diferença<select value={options.field} onChange={e=>update({field:e.target.value})}><option value="">Todos os campos</option>{fields.map(f=><option key={f} value={f}>{displayField(f)}</option>)}</select></label>
      <label>Agrupar por<select value={options.group} onChange={e=>update({group:e.target.value as ViewOptions['group']})}><option value="">Sem agrupamento</option><option value="status">Tipo de divergência</option><option value="field">Campo</option></select></label>
      <label>Por página<select value={size} onChange={e=>{setSize(Number(e.target.value));setPage(0);}}>{[25,50,100].map(n=><option key={n}>{n}</option>)}</select></label>
    </div>
    <div className={s.toolbar}><p role="status" aria-live="polite">{filtered.length.toLocaleString('pt-BR')} resultados no filtro</p><button type="button" onClick={()=>update(initial)}>Limpar filtros e ordenação</button><button type="button" disabled={!filtered.length} onClick={exportFiltered}>Baixar CSV filtrado</button></div>
    {options.group&&<><p className={s.help}>{options.group==='field'?'Uma chave pode aparecer em mais de um grupo. O total do filtro conta chaves distintas.':'Grupos consideram todo o filtro.'}</p><div className={s.groups}>{groups.map(g=><button type="button" key={g.label} aria-expanded={!collapsed.has(g.label)} onClick={()=>{const next=new Set(collapsed);if(next.has(g.label))next.delete(g.label);else next.add(g.label);setCollapsed(next);setPage(0);}}>{collapsed.has(g.label)?'▸':'▾'} {options.group==='field'?displayField(g.label):g.label} ({g.records.length})</button>)}</div></>}
    <div className={s.tablewrap} tabIndex={0} role="region" aria-label="Resultados da comparação, tabela com rolagem horizontal"><table className={s.table}><caption>Valores originais. Ordenação textual, sem conversão de códigos ou valores decimais. Clique no cabeçalho para inverter a ordem.</caption><thead><tr>{([['key','Chave'],['status','Situação'],['field','Campo'],['sourceValue',`Origem · ${names[0]}`],['targetValue',`Destino · ${names[1]}`]] as const).map(([column,label])=><th scope="col" key={column} aria-sort={options.sort===column?(options.direction===1?'ascending':'descending'):'none'}><button type="button" onClick={()=>sort(column)}>{label} {options.sort===column?(options.direction===1?'↑':'↓'):'↕'}</button></th>)}<th scope="col">Análise</th></tr></thead><tbody>
      {visible.map(({record:r,label,total},i)=><Fragment key={`${label}:${r.id}`}>
        {options.group&&(i===0||visible[i-1].label!==label)&&<tr className={s.groupRow}><th colSpan={6} scope="rowgroup">{options.group==='field'?displayField(label):label} · {total} resultados no grupo {i===0&&currentPage>0&&entries[currentPage*size-1]?.label===label?'(continuação)':''}</th></tr>}
        <tr><th scope="row">{r.key||'(sem chave)'}</th><td><span className={s.badge}>{statusLabels[r.status]}</span></td><td>{fieldFindings(r,label).filter(f=>f.field).map(f=><div className={s.value} key={f.field}>{displayField(f.field!)}</div>)}{!r.findings.some(f=>f.field)&&(r.status==='igual'?'Todos os mapeados':'Sem comparação por campo')}</td><td>{cell(r,'sourceValue',label)}</td><td>{cell(r,'targetValue',label)}</td><td><button type="button" aria-expanded={selected?.id===r.id} onClick={()=>setSelected(selected?.id===r.id?null:r)}>Analisar<span className={s.srOnly}> chave {r.key||'vazia'}, {statusLabels[r.status]}</span></button></td></tr>
        {selected?.id===r.id&&<tr><td colSpan={6}><section className={s.detail} aria-label={`Detalhes da chave ${r.key||'vazia'}`}><h3>{r.key||'Registro sem chave'}</h3><p>{r.status==='diferente'?'Confira se as diferenças eram esperadas; não significam necessariamente erro de negócio.':r.status==='duplicada'?'Há mais de um registro com esta chave. Nenhum par foi escolhido automaticamente.':r.status==='chave vazia'?'Não foi possível relacionar este registro com segurança.':r.status==='igual'?'Os campos mapeados são iguais segundo as regras confirmadas.':`Chave não encontrada ${r.status==='ausente'?'no destino':'na origem'}.`}</p><div className={s.sides}>{([['Origem',source,'sourceLine'],['Destino',target,'targetLine']] as const).map(([title,table,side])=><RecordSide key={`${r.id}:${side}`} record={r} title={title} table={table} side={side} name={names[side==='sourceLine'?0:1]} pairs={pairs} />)}</div><details><summary>Regras confirmadas para os campos</summary><ul>{pairs.map(p=><li key={p.source}>{p.source} ↔ {p.target}: {{exact:'Texto exato',trim:'Remover espaços externos','decimal-br':'Decimal brasileiro','bling-code':'Remover uma tabulação final (Bling)'}[p.rule]}</li>)}</ul></details></section></td></tr>}
      </Fragment>)}
      {!visible.length&&<tr><td colSpan={6}>Nenhum resultado visível. Revise os filtros ou expanda um grupo.</td></tr>}
    </tbody></table></div>
    <div className={s.pagination}><span>{entries.length?`${currentPage*size+1}–${Math.min((currentPage+1)*size,entries.length)} de ${entries.length.toLocaleString('pt-BR')}`:'0'} {options.group?'posições nos grupos expandidos':'resultados'}</span><div><button type="button" disabled={currentPage===0} onClick={()=>{setPage(currentPage-1);setSelected(null);}}>Anterior</button><label>Página <input type="number" min={1} max={pages} value={currentPage+1} onChange={e=>{setPage(Math.max(0,Math.min(pages-1,Number(e.target.value)-1)));setSelected(null);}} /> de {pages}</label><button type="button" disabled={currentPage===pages-1} onClick={()=>{setPage(currentPage+1);setSelected(null);}}>Próxima</button></div></div>
    <p className={s.help}>Filtros, grupos, ordenação e CSV filtrado abrangem todo o resultado. Os downloads completos abaixo preservam todas as ocorrências, inclusive vários campos da mesma chave.</p>
  </div>;
}

function RecordSide({record:r,title,table,side,name,pairs}: {record:ResultRecord;title:string;table:string[][];side:'sourceLine'|'targetLine';name:string;pairs:Pair[]}) {
  const [page,setPage]=useState(0);
  const lines=[...new Set(r.findings.flatMap(f=>f[side]?[f[side]!]:[]))];
  const pages=Math.max(1,Math.ceil(lines.length/25));
  const format=(v:string|undefined)=>v===undefined?'Não se aplica':v===''?'(vazio)':v;
  return <div><h4>{title} · {name}</h4>{!lines.length?<p>Sem registro relacionado.</p>:<>
    {lines.length>1&&<p>{lines.length} registros relacionados</p>}
    {lines.slice(page*25,(page+1)*25).map(line=><details key={line} open={lines.length===1}><summary>Registro {line} (inclui cabeçalho)</summary><dl>{table[0].map((header,j)=><div key={j}><dt>{header}</dt><dd className={r.findings.some(f=>f.field&&pairs.some(p=>f.field===`${p.source} ↔ ${p.target}`&&(side==='sourceLine'?p.source:p.target)===header))?s.changed:undefined}>{format(table[line-1]?.[j])}</dd></div>)}</dl></details>)}
    {pages>1&&<div className={s.pagination}><button type="button" disabled={page===0} onClick={()=>setPage(page-1)}>Anteriores na {title.toLowerCase()}</button><span>{page+1} / {pages}</span><button type="button" disabled={page===pages-1} onClick={()=>setPage(page+1)}>Próximos na {title.toLowerCase()}</button></div>}
  </>}</div>;
}
