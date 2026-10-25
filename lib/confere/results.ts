import type { Finding } from './engine';

export const statusLabels: Record<Finding['status'], string> = {
  igual: 'Iguais', diferente: 'Com diferenças', ausente: 'Só na origem',
  extra: 'Só no destino', duplicada: 'Chaves repetidas', 'chave vazia': 'Sem chave',
};
export type ResultRecord = { id: string; key: string; status: Finding['status']; findings: Finding[]; searchText?: string };
export type ViewOptions = { status: string; search: string; field: string; sort: 'key' | 'status' | 'field' | 'sourceValue' | 'targetValue'; direction: number; group: '' | 'status' | 'field' };
export type ResultGroup = { label: string; records: ResultRecord[] };

// One record per key; blank keys stay separate because their identity is unknown.
export function resultRecords(findings: Finding[], source?: string[][], target?: string[][]): ResultRecord[] {
  const records = new Map<string, ResultRecord>();
  for (const f of findings) {
    const id = f.status === 'chave vazia' ? `blank:${f.sourceLine ? 'source' : 'target'}:${f.sourceLine ?? f.targetLine}` : `key:${f.key}`;
    let record = records.get(id);
    if (!record) { record = { id, key: f.key, status: f.status, findings: [] }; records.set(id, record); }
    record.findings.push(f);
  }
  return [...records.values()].map(r => ({ ...r, searchText: r.findings.flatMap(f => [
    ...(f.sourceLine && source ? source[f.sourceLine - 1] ?? [] : []),
    ...(f.targetLine && target ? target[f.targetLine - 1] ?? [] : []),
  ]).join('\n').toLocaleLowerCase('pt-BR') }));
}
export function selectRecords(records: ResultRecord[], options: ViewOptions): ResultRecord[] {
  const search = options.search.toLocaleLowerCase('pt-BR');
  const value = (r: ResultRecord) => options.sort === 'key' ? r.key : options.sort === 'status' ? statusLabels[r.status] : r.findings.map(f => f[options.sort as 'field' | 'sourceValue' | 'targetValue'] ?? '').join('\n');
  return records.filter(r => (options.status === 'todos' || r.status === options.status)
    && (!options.field || r.findings.some(f => f.field === options.field))
    && (!search || r.searchText?.includes(search) || [r.key, ...r.findings.flatMap(f => [f.field, f.sourceValue, f.targetValue])].some(v => v?.toLocaleLowerCase('pt-BR').includes(search))))
    .sort((a, b) => options.direction * value(a).localeCompare(value(b), 'pt-BR', { numeric: false }) || a.id.localeCompare(b.id));
}
export function groupRecords(records: ResultRecord[], group: ViewOptions['group'], field = ''): ResultGroup[] {
  if (!group) return [{ label: 'Resultados', records }];
  const groups = new Map<string, ResultRecord[]>();
  for (const r of records) {
    const labels = group === 'status' ? [statusLabels[r.status]] : [...new Set(r.findings.map(f => f.field ?? 'Sem comparação por campo').filter(f => !field || f === field))];
    for (const label of labels) { const list = groups.get(label) ?? []; list.push(r); groups.set(label, list); }
  }
  return [...groups].map(([label, records]) => ({ label, records })).sort((a,b) => a.label.localeCompare(b.label, 'pt-BR'));
}
