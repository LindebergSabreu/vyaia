import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { parseCSV, prepare, blingCSV, csv, fields } from '../lib/bling/engine.ts';
const sample = readFileSync(new URL('../public/dados/amostra-bling.csv', import.meta.url), 'utf8');
const codes = JSON.parse(readFileSync(new URL('../lib/bling/ncm.json', import.meta.url))).codes;
const headers = JSON.parse(readFileSync(new URL('../lib/bling/headers.json', import.meta.url)));
const mapping = Object.fromEntries(fields.map(f => [f,f]));
test('reproduz a amostra: 8 liberados, 12 pendentes e valores preservados', () => {
 const result = prepare(parseCSV(sample), mapping, codes, true);
 assert.equal(result.filter(r => !r.issues.length).length, 8);
 assert.deepEqual(result.filter(r => !r.issues.length).map(r => r.line - 1), [1,2,3,4,5,6,18,19]);
 assert.equal(result[1].values.preco_venda, '1234.56');
 assert.equal(result[18].values.sku, '0000000000000000000012340');
 assert.equal(result[17].values.descricao, 'Caneta "Especial"; azul\nVYA TESTE');
 const exported = parseCSV(blingCSV(result, headers), ',');
 assert.equal(exported.length, 9); assert.equal(exported[0].length, 59);
 assert.equal(exported[1][headers.indexOf('Código')], '000001');
 assert.equal(exported[2][headers.indexOf('Preço')], '1234,56');
 assert.equal(exported[1][headers.indexOf('Estoque')], '');
});
test('NCM não é inventado: preenchimento é opcional e limitado a regras explícitas', () => {
 const result = prepare(parseCSV(sample), mapping, codes, false);
 assert.equal(result.filter(r => !r.issues.length).length, 6);
 assert.ok(result[2].issues.length); assert.ok(result[11].issues.length);
});
test('rejeita arquivos malformados e mapeamento duplicado', () => {
 for (const input of ['a;a\n1;2', 'a;b\n1', 'a;b\n"x;2', 'a;b\n"x"z;2']) assert.throws(() => parseCSV(input));
 assert.throws(() => prepare(parseCSV(sample), {...mapping, descricao:'sku'}, codes, true));
});
test('CSV preserva aspas, quebras e impede fórmula no relatório', () => {
 const parsed = parseCSV(csv([['a','b'],['=1+1','texto "com aspas"\ne quebra']]), ',');
 assert.equal(parsed[1][0], "'=1+1"); assert.equal(parsed[1][1], 'texto "com aspas"\ne quebra');
});

test('detecta separador e não adivinha arquivo ambíguo; relatório escapa HTML', async () => {
 const {detectDelimiter, readableReport} = await import('../lib/bling/engine.ts');
 assert.equal(detectDelimiter(sample), ';');
 assert.equal(detectDelimiter('sku\tdescricao\n001\tCaneta'), '\t');
 assert.equal(detectDelimiter('a,b\n1,2'), ',');
 assert.equal(detectDelimiter('a;b,c\n1;2,3'), null);
 const r = prepare(parseCSV(sample), mapping, codes, true);
 assert.ok(readableReport(r, '<script>alert(1)</script>').includes('&lt;script&gt;'));
 assert.ok(!readableReport(r, '<script>alert(1)</script>').includes('<script>'));
});

test('revisão corrige mapeamento personalizado, preserva original e revalida duplicidades', async () => {
 const {reviewResults,blingCSV} = await import('../lib/bling/engine.ts');
 const t=parseCSV('codigo;nome;valor;medida;fiscal;pais\n001;;12,50;UN;96081000;0\n001;Caneta;12,50;UN;96081000;0');
 const m={sku:'codigo',descricao:'nome',preco_venda:'valor',unidade:'medida',ncm:'fiscal',origem:'pais',ficha_tecnica:''};
 const reviewed=reviewResults(t,m,codes,false,{edits:{2:{descricao:'Caneta corrigida',sku:'002'}},excluded:[]});
 assert.equal(reviewed.filter(r=>!r.issues.length).length,2);
 assert.equal(reviewed[0].original.nome,'');assert.equal(reviewed[0].values.descricao,'Caneta corrigida');
 assert.ok(reviewed[0].changes.some(c=>c.includes('Correção confirmada')));
 const excluded=reviewResults(t,m,codes,false,{edits:{},excluded:[2]});
 assert.equal(excluded[0].excluded,true);assert.equal(excluded[1].issues.length,0);
 assert.equal(parseCSV(blingCSV(excluded,headers),',').length,2);
 const restored=reviewResults(t,m,codes,false,{edits:{},excluded:[]});assert.ok(restored[1].issues.length);
});
test('corrigir um campo não libera registro com outros erros e exclusão total bloqueia exportação',async()=>{
 const {reviewResults,blingCSV}=await import('../lib/bling/engine.ts');
 const t=parseCSV(sample);
 const reviewed=reviewResults(t,mapping,codes,true,{edits:{9:{preco_venda:'10,00',descricao:''}},excluded:[]});
 assert.ok(reviewed.find(r=>r.line===9).issues.some(i=>i.includes('Descrição')));
 const excluded=reviewResults(t,mapping,codes,true,{edits:{},excluded:t.slice(1).map((_,i)=>i+2)});
 assert.throws(()=>blingCSV(excluded,headers));
});

test('correção de múltiplos registros preserva a entrada e revalida o lote completo',async()=>{
 const {reviewResults}=await import('../lib/bling/engine.ts');
 const table=parseCSV(readFileSync(new URL('../public/dados/teste-saneamento-bling.csv',import.meta.url),'utf8'));
 const snapshot=JSON.stringify(table);
 const result=reviewResults(table,mapping,codes,false,{edits:{12:{descricao:'Descrição confirmada'},16:{unidade:'UN'}},excluded:[]});
 assert.equal(result.filter(r=>!r.excluded&&!r.issues.length).length,10);
 assert.equal(result.find(r=>r.line===12).values.descricao,'Descrição confirmada');
 assert.equal(result.find(r=>r.line===16).values.unidade,'UN');
 assert.equal(JSON.stringify(table),snapshot);
});
