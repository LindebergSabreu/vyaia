export type Rule = 'exact' | 'trim' | 'decimal-br' | 'bling-code';
export type Pair = { source: string; target: string; rule: Rule };
export type Finding = { status: 'igual' | 'diferente' | 'ausente' | 'extra' | 'duplicada' | 'chave vazia'; key: string; sourceLine?: number; targetLine?: number; field?: string; sourceValue?: string; targetValue?: string };
export function normalize(value: string, rule: Rule): string {
  if (rule === 'trim') return value.trim();
  if (rule === 'bling-code') return value.endsWith('\t') ? value.slice(0, -1) : value;
  if (rule === 'decimal-br') {
    if (!/^-?(?:\d+|\d{1,3}(?:\.\d{3})+)(?:,\d+)?$/.test(value)) throw new Error(`Decimal brasileiro inválido: ${value}`);
    const negative = value.startsWith('-');
    const [a, b = ''] = value.replace(/^-/, '').replace(/\./g, '').split(',');
    const integer = a.replace(/^0+(?=\d)/, ''); const fraction = b.replace(/0+$/, '');
    return (negative && (integer !== '0' || fraction) ? '-' : '') + integer + (fraction ? '.' + fraction : '');
  }
  return value;
}
export function compare(source: string[][], target: string[][], sourceKey: string, targetKey: string, keyRule: Rule, pairs: Pair[]): Finding[] {
  if (!source[0]?.includes(sourceKey) || !target[0]?.includes(targetKey)) throw new Error('Selecione uma chave em cada arquivo.');
  if (!pairs.length) throw new Error('Mapeie pelo menos um campo para comparar.');
  if (pairs.some(p => !source[0].includes(p.source) || !target[0].includes(p.target))) throw new Error('Mapeamento contém coluna inexistente.');
  if (new Set(pairs.map(p=>p.source)).size !== pairs.length || new Set(pairs.map(p=>p.target)).size !== pairs.length) throw new Error('Não repita colunas no mapeamento.');
  const findings: Finding[] = [];
  const index = (table: string[][], keyName: string, side: 'sourceLine' | 'targetLine') => {
    const groups = new Map<string, { row: string[]; line: number }[]>(); const pos = table[0].indexOf(keyName);
    table.slice(1).forEach((row, i) => {
      const key = normalize(row[pos], keyRule);
      if (!key.trim()) { findings.push({status:'chave vazia',key,[side]:i+2}); return; }
      const group = groups.get(key);
      if (group) group.push({row,line:i+2});
      else groups.set(key,[{row,line:i+2}]);
    });
    return groups;
  };
  const left = index(source,sourceKey,'sourceLine'), right = index(target,targetKey,'targetLine');
  for (const key of new Set([...left.keys(), ...right.keys()])) {
    const a=left.get(key)||[], b=right.get(key)||[];
    if (a.length>1 || b.length>1) {
      for (const item of a) findings.push({status:'duplicada',key,sourceLine:item.line});
      for (const item of b) findings.push({status:'duplicada',key,targetLine:item.line});
      continue;
    }
    if (!a.length) {findings.push({status:'extra',key,targetLine:b[0].line});continue;}
    if (!b.length) {findings.push({status:'ausente',key,sourceLine:a[0].line});continue;}
    let same=true;
    for(const p of pairs) {
      const av=a[0].row[source[0].indexOf(p.source)], bv=b[0].row[target[0].indexOf(p.target)];
      let equal=false;
      try { equal=normalize(av,p.rule)===normalize(bv,p.rule); }
      catch { throw new Error(`Formato inválido no campo ${p.source} ↔ ${p.target}, chave ${key}. Revise a regra; nenhuma comparação foi concluída.`); }
      if(!equal){same=false;findings.push({status:'diferente',key,sourceLine:a[0].line,targetLine:b[0].line,field:`${p.source} ↔ ${p.target}`,sourceValue:av,targetValue:bv});}
    }
    if(same)findings.push({status:'igual',key,sourceLine:a[0].line,targetLine:b[0].line});
  }
  return findings;
}
export function reportHTML(findings: Finding[], configuration: string): string {
 const esc=(s:string)=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
 return `<!doctype html><html lang="pt-BR"><meta charset="utf-8"><title>Vya Confere</title><style>body{font:16px Arial;color:#1f3a52;padding:32px}table{border-collapse:collapse;width:100%}td,th{border:1px solid #ccd;padding:10px;white-space:pre-wrap}pre{white-space:pre-wrap}</style><h1>Vya Dados · Confere</h1><p>Diferenças técnicas precisam de interpretação; não comprovam erro de negócio. Registros com chave duplicada não são comparados por campo.</p><pre>${esc(configuration)}</pre><table><tr><th>Situação</th><th>Chave</th><th>Registro origem</th><th>Registro destino</th><th>Campo</th><th>Origem</th><th>Destino</th></tr>${findings.map(f=>`<tr>${[f.status,f.key,String(f.sourceLine||''),String(f.targetLine||''),f.field||'',f.sourceValue||'',f.targetValue||''].map(v=>`<td>${esc(v)}</td>`).join('')}</tr>`).join('')}</table></html>`;
}
