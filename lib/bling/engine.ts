export const fields = ['sku', 'descricao', 'preco_venda', 'unidade', 'ncm', 'origem', 'ficha_tecnica'] as const;
export type Field = typeof fields[number];
export type Mapping = Record<Field, string>;
export type Result = { excluded?: boolean; line: number; original: Record<string, string>; values: Record<Field, string>; issues: string[]; changes: string[] };
export const labels: Record<Field, string> = { sku: 'Código / SKU', descricao: 'Descrição', preco_venda: 'Preço de venda (BR)', unidade: 'Unidade', ncm: 'NCM', origem: 'Origem fiscal', ficha_tecnica: 'Ficha técnica (opcional)' };
export function parseCSV(text: string, delimiter = ';'): string[][] {
  const rows: string[][] = []; let row: string[] = [], cell = '', quoted = false, closed = false;
  text = text.replace(/^\uFEFF/, '');
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quoted) {
      if (c === '"' && text[i + 1] === '"') { cell += '"'; i++; }
      else if (c === '"') { quoted = false; closed = true; }
      else cell += c;
    } else if (c === delimiter || c === '\n' || c === '\r') {
      row.push(cell); cell = ''; closed = false;
      if (c !== delimiter) { if (row.some(v => v !== '')) rows.push(row); row = []; if (c === '\r' && text[i + 1] === '\n') i++; }
    } else if (c === '"') {
      if (cell || closed) throw new Error('Aspas fora de posição no CSV.');
      quoted = true;
    } else { if (closed) throw new Error('Conteúdo após fechamento de aspas.'); cell += c; }
  }
  if (quoted) throw new Error('Aspas não fechadas no CSV.');
  row.push(cell); if (row.some(v => v !== '')) rows.push(row);
  if (rows.length < 2) throw new Error('O CSV precisa de cabeçalho e pelo menos um registro.');
  if (rows.length > 5001) throw new Error('Limite da demonstração: 5.000 registros.');
  if (rows[0].some(v => !v.trim()) || new Set(rows[0]).size !== rows[0].length) throw new Error('Cabeçalhos vazios ou repetidos.');
  if (rows.some(r => r.length !== rows[0].length)) throw new Error('Quantidade de colunas inconsistente. Confira o separador.');
  return rows;
}
const formula = (s: string) => /^[=+\-@]/.test(s.trimStart());
export function csv(rows: string[][], delimiter = ','): string {
  return '\uFEFF' + rows.map(row => row.map(value => {
    // Reports are spreadsheet-safe; blocked source formulas never enter the Bling export.
    const safe = formula(value) ? "'" + value : value;
    return '"' + safe.replace(/"/g, '""') + '"';
  }).join(delimiter)).join('\r\n');
}
export function prepare(table: string[][], mapping: Mapping, ncmCodes: string[], fillNcm: boolean): Result[] {
  const selected = fields.filter(f => f !== 'ficha_tecnica').map(f => mapping[f]);
  if (selected.some(h => !h || !table[0].includes(h)) || new Set(Object.values(mapping).filter(Boolean)).size !== Object.values(mapping).filter(Boolean).length) throw new Error('Mapeie os seis campos obrigatórios, sem repetir colunas.');
  const records = table.slice(1).map(row => Object.fromEntries(table[0].map((h, i) => [h, row[i]])));
  const codes = new Set(ncmCodes); const counts = new Map<string, number>();
  for (const r of records) { const key = r[mapping.sku].trim(); counts.set(key, (counts.get(key) || 0) + 1); }
  const rules: Record<string, string> = { 'caneta esferográfica, tinta azul, escrita manual': '96081000', 'bloco de notas de papel, sem pauta': '48201000' };
  return records.map((original, i) => {
    const raw = Object.fromEntries(fields.map(f => [f, original[mapping[f]] || ''])) as Record<Field, string>;
    const values = Object.fromEntries(fields.map(f => [f, raw[f].trim()])) as Record<Field, string>;
    const issues: string[] = [], changes: string[] = [];
    if (!values.sku || values.sku.length > 60) issues.push('Código ausente ou maior que 60 caracteres');
    if ((counts.get(values.sku) || 0) > 1) issues.push('Código repetido no lote');
    if (!values.descricao) issues.push('Descrição ausente');
    if (fields.some(f => formula(raw[f]))) issues.push('Texto com início de fórmula: revisar');
    if (fields.some(f => /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/.test(raw[f]))) issues.push('Caractere de controle não permitido');
    const price = values.preco_venda.replace(/^R\$\s*/, '').replace(/\u00a0/g, '');
    if (!/^(?:\d+|\d{1,3}(?:\.\d{3})+)(?:,\d{1,2})?$/.test(price)) issues.push('Preço inválido: use formato brasileiro, como 1.234,56');
    else {
      const [integer, decimals = ''] = price.replace(/\./g, '').split(',');
      values.preco_venda = integer.replace(/^0+(?=\d)/, '') + '.' + decimals.padEnd(2, '0');
      if (integer.length > 12) issues.push('Preço excede o limite de 12 dígitos desta demonstração');
    }
    values.unidade = values.unidade.toUpperCase();
    if (!['UN', 'CX'].includes(values.unidade)) issues.push('Unidade fora do perfil: use UN ou CX');
    if (!/^[0-8]$/.test(values.origem)) issues.push('Origem fiscal deve estar entre 0 e 8');
    values.ncm = values.ncm.replace(/\./g, '');
    if (!values.ncm && fillNcm && rules[values.ficha_tecnica.toLowerCase()]) {
      values.ncm = rules[values.ficha_tecnica.toLowerCase()]; changes.push('NCM preenchido por regra da amostra sintética');
    }
    if (!/^\d{8}$/.test(values.ncm) || !codes.has(values.ncm)) issues.push('NCM ausente ou não encontrado no snapshot local');
    for (const f of fields) if (raw[f] !== values[f]) changes.push(`${labels[f]}: ${JSON.stringify(raw[f])} → ${JSON.stringify(values[f])}`);
    return { line: i + 2, original, values, issues, changes };
  });
}
export function blingCSV(results: Result[], headers: string[]) {
  const accepted = results.filter(r => !r.excluded && !r.issues.length);
  if (!accepted.length) throw new Error('Nenhum registro liberado para exportar.');
  return csv([headers, ...accepted.map(({ values: v }) => {
    const row: Record<string, string> = { 'Código': v.sku, 'Descrição': v.descricao, 'Unidade': v.unidade, 'NCM': `${v.ncm.slice(0,4)}.${v.ncm.slice(4,6)}.${v.ncm.slice(6)}`, 'Origem': v.origem, 'Preço': v.preco_venda.replace('.', ','), 'Situação': 'Ativo', 'Produto Variação': 'Produto' };
    return headers.map(h => row[h] || '');
  })]);
}

export function detectDelimiter(text: string): string | null {
  const candidates = [';', ',', '\t'].filter(d => {
    try { return parseCSV(text, d)[0].length > 1; } catch { return false; }
  });
  return candidates.length === 1 ? candidates[0] : null;
}

export function readableReport(results: Result[], source: string): string {
  const esc = (v: string) => v.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const accepted = results.filter(r => !r.excluded && !r.issues.length).length;
  return `<!doctype html><html lang="pt-BR"><meta charset="utf-8"><title>Relatório Vya Dados</title><style>body{font:16px Arial;color:#1f3a52;max-width:1100px;margin:40px auto;padding:20px}table{border-collapse:collapse;width:100%}td,th{padding:12px;border:1px solid #cbd5e1;text-align:left;white-space:pre-wrap;overflow-wrap:anywhere}th{background:#edf5f6}@media print{body{margin:0}}</style><h1>Vya Dados — relatório de preparo</h1><p>Arquivo: ${esc(source)}</p><p><strong>${results.length} recebidos · ${accepted} liberados · ${results.filter(r => !r.excluded && r.issues.length).length} pendentes · ${results.filter(r => r.excluded).length} excluídos</strong></p><p>Liberado significa aprovado pelas regras do perfil, sem confirmar aceite no ERP ou classificação fiscal. Pendências precisam de revisão. Registro CSV conta o cabeçalho, sem contar quebras dentro de um campo.</p><table><thead><tr><th>Registro CSV / Código</th><th>Descrição</th><th>Situação</th><th>O que revisar</th><th>Alterações realizadas</th></tr></thead><tbody>${results.map(r => `<tr><td>${r.line} / ${esc(r.values.sku)}</td><td>${esc(r.values.descricao)}</td><td>${r.excluded ? 'Excluído deste lote' : r.issues.length ? 'Pendente' : 'Liberado'}</td><td>${esc(r.issues.join('\n') || 'Sem pendências')}</td><td>${esc(r.changes.join('\n') || 'Sem alterações')}</td></tr>`).join('')}</tbody></table><p>Relatório local. Nenhuma importação foi executada pela aplicação. Use a função de impressão do navegador para salvar em PDF.</p></html>`;
}


export type ReviewState = { edits: Record<number, Partial<Record<Field, string>>>; excluded: number[] };
export function reviewResults(table: string[][], mapping: Mapping, ncmCodes: string[], fillNcm: boolean, review: ReviewState): Result[] {
  const base = prepare(table, mapping, ncmCodes, fillNcm);
  const excluded = new Set(review.excluded);
  const active = base.filter(r => !excluded.has(r.line));
  const canonical = [Array.from(fields), ...active.map(r => fields.map(f => review.edits[r.line]?.[f] ?? r.original[mapping[f]] ?? ''))];
  const identity = Object.fromEntries(fields.map(f => [f,f])) as Mapping;
  const validated = active.length ? prepare(canonical, identity, ncmCodes, fillNcm) : [];
  const byLine = new Map(active.map((r,i) => [r.line,validated[i]]));
  return base.map(r => {
    const revised = byLine.get(r.line);
    const changes = Object.entries(review.edits[r.line] || {}).filter(([f,v]) => v !== (r.original[mapping[f as Field]] || '')).map(([f,v]) => `Correção confirmada · ${labels[f as Field]}: ${JSON.stringify(r.original[mapping[f as Field]] || '')} → ${JSON.stringify(v)}`);
    if (excluded.has(r.line)) return {...r,excluded:true,changes:[...r.changes,...changes,'Exclusão explícita deste lote; original preservado']};
    return {...revised!, line:r.line, original:r.original, changes:[...changes,...revised!.changes]};
  });
}
