export type Rule = 'preserve' | 'trim' | 'upper' | 'lower' | 'decimal-br' | 'decimal-dot';
export type Column = { source: number; name: string; rule: Rule; required: boolean; enabled: boolean };
export type Prepared = { line: number; original: string[]; values: string[]; changes: string[]; issues: string[] };
export const rules: Record<Rule, string> = { preserve: 'Preservar texto', trim: 'Remover espaços externos', upper: 'Maiúsculas', lower: 'Minúsculas', 'decimal-br': 'Decimal BR → ponto', 'decimal-dot': 'Decimal com ponto → vírgula' };
export function transform(value: string, rule: Rule): string {
  if (rule === 'preserve') return value;
  if (rule === 'trim') return value.trim();
  if (rule === 'upper') return value.toLocaleUpperCase('pt-BR');
  if (rule === 'lower') return value.toLocaleLowerCase('pt-BR');
  if (value === '') return value;
  const br = rule === 'decimal-br';
  const pattern = br ? /^-?(?:\d+|\d{1,3}(?:\.\d{3})+)(?:,\d+)?$/ : /^-?\d+(?:\.\d+)?$/;
  if (!pattern.test(value)) throw new Error(br ? 'Decimal BR inválido' : 'Decimal com ponto inválido');
  return br ? value.replace(/\./g, '').replace(',', '.') : value.replace('.', ',');
}
export function prepare(table: string[][], columns: Column[]): Prepared[] {
  const selected = columns.filter(c => c.enabled);
  if (!selected.length) throw new Error('Selecione pelo menos uma coluna.');
  if (selected.some(c => !c.name.trim()) || new Set(selected.map(c => c.name.trim())).size !== selected.length) throw new Error('Nomes de saída precisam ser preenchidos e únicos.');
  if (selected.some(c => /^[=+@\-]/.test(c.name.trimStart()) || /[\u0000-\u001f\u007f]/.test(c.name))) throw new Error('Nome de saída com fórmula ou controle não permitido.');
  if (selected.some(c => !Number.isInteger(c.source) || c.source < 0 || c.source >= table[0].length || !(c.rule in rules))) throw new Error('Configuração de coluna inválida.');
  return table.slice(1).map((original, i) => {
    const changes: string[] = [], issues: string[] = [];
    const values = selected.map(c => {
      const raw = original[c.source]; let value = raw;
      try { value = transform(raw, c.rule); } catch (e) { issues.push(`${c.name}: ${(e as Error).message}`); }
      if (c.required && !value.trim()) issues.push(`${c.name}: preenchimento obrigatório`);
      if (/^[=+@\-]/.test(value.trimStart()) && !((c.rule === 'decimal-br' || c.rule === 'decimal-dot') && /^-\d/.test(value))) issues.push(`${c.name}: início de fórmula; revisar`);
      if (/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/.test(value)) issues.push(`${c.name}: caractere de controle`);
      if (raw !== value) changes.push(`${c.name}: ${JSON.stringify(raw)} → ${JSON.stringify(value)}`);
      return value;
    });
    return { line: i + 2, original: [...original], values, changes, issues };
  });
}
// Exact data export: do not use spreadsheet sanitization, which would change negative numbers.
// Formula-like text is blocked by prepare; spreadsheet applications may still infer types.
export function outputCSV(rows: string[][], delimiter: string): string {
  if (![',', ';', '\t'].includes(delimiter)) throw new Error('Separador inválido.');
  return '\uFEFF' + rows.map(row => row.map(v => '"' + v.replace(/"/g, '""') + '"').join(delimiter)).join('\r\n');
}
