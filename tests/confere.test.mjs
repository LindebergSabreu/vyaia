import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {compare,normalize,reportHTML} from '../lib/confere/engine.ts';
import {parseCSV} from '../lib/bling/engine.ts';
const pair=[{source:'valor',target:'valor',rule:'exact'}];
test('amostra identifica iguais, divergência, ausente, extra e grupo duplicado',()=>{
 const read=n=>parseCSV(readFileSync(new URL('../public/dados/confere/'+n+'.csv',import.meta.url),'utf8'));
 const r=compare(read('origem'),read('destino'),'codigo','codigo','exact',[{source:'descricao',target:'descricao',rule:'exact'},{source:'preco',target:'preco',rule:'decimal-br'}]);
 assert.equal(r.filter(x=>x.status==='igual').length,2);
 assert.equal(r.filter(x=>x.status==='diferente').length,1);
 assert.equal(r.filter(x=>x.status==='ausente').length,1);
 assert.equal(r.filter(x=>x.status==='extra').length,1);
 assert.equal(r.filter(x=>x.status==='duplicada').length,3);
});
test('zeros nas chaves são significativos e chaves vazias não são pareadas',()=>{
 const r=compare([['id','valor'],['001','a'],['','b']],[['id','valor'],['1','a'],['','b']],'id','id','exact',pair);
 assert.equal(r.filter(x=>x.status==='chave vazia').length,2);assert.equal(r.filter(x=>x.status==='igual').length,0);
});
test('decimal sem perda de precisão e normalização somente por regra explícita',()=>{
 assert.equal(normalize('9.007.199.254.740.993,2300','decimal-br'),'9007199254740993.23');
 assert.equal(normalize('-0,00','decimal-br'),'0');assert.throws(()=>normalize('1,2,3','decimal-br'));
 assert.equal(normalize('001\t','bling-code'),'001');assert.equal(normalize('001\t\t','bling-code'),'001\t');
 assert.notEqual(normalize(' a ','exact'),normalize('a','exact'));
});
test('mapeamento inválido, decimal inválido e relatório seguro',()=>{
 const a=[['id','valor'],['001','12,00']];
 assert.throws(()=>compare(a,a,'id','id','exact',[]));
 assert.throws(()=>compare(a,a,'id','id','exact',[...pair,...pair]));
 assert.throws(()=>compare(a,[['id','valor'],['001','abc']],'id','id','exact',[{...pair[0],rule:'decimal-br'}]));
 assert.ok(reportHTML([], '<script>').includes('&lt;script&gt;'));
});

test('grade com 5.000 registros: conta chaves, filtra e ordena além da primeira página', async()=>{
 const {resultRecords,selectRecords,groupRecords}=await import('../lib/confere/results.ts');
 const source=[['id','valor','nome'],...Array.from({length:5000},(_,i)=>[String(i).padStart(6,'0'),'10,00',`Produto ${i}`])];
 const target=source.map((row,i)=>i===4999?[row[0],'12,00','Nome alterado']:row.slice());
 const findings=compare(source,target,'id','id','exact',[{source:'valor',target:'valor',rule:'decimal-br'},{source:'nome',target:'nome',rule:'exact'}]);
 const records=resultRecords(findings,source,target);
 assert.equal(findings.length,5001);assert.equal(records.length,5000);
 const options={status:'todos',search:'',field:'',sort:'key',direction:1,group:''};
 const differences=selectRecords(records,{...options,status:'diferente'});
 assert.equal(differences.length,1);assert.equal(differences[0].key,'004998');assert.equal(differences[0].findings.length,2);
 assert.equal(selectRecords(records,{...options,search:'Nome alterado'})[0].key,'004998');
 assert.equal(selectRecords(records,{...options,search:'Produto 4999'})[0].key,'004999');
 assert.equal(selectRecords(records,{...options,direction:-1})[0].key,'004999');
 const groups=groupRecords(differences,'field');assert.equal(groups.length,2);assert.equal(groups[0].records[0].id,groups[1].records[0].id);
 assert.equal(selectRecords(records,{...options,field:'nome ↔ nome'}).length,1);
 assert.equal(groupRecords(differences,'field','nome ↔ nome').length,1);
});
test('grade agrupa duplicidades sem parear e mantém chaves vazias independentes',async()=>{
 const {resultRecords,groupRecords}=await import('../lib/confere/results.ts');
 const a=[['id','valor'],['001','a'],['001','b'],['','c']];
 const b=[['id','valor'],['001','a'],['','d']];
 const records=resultRecords(compare(a,b,'id','id','exact',pair));
 assert.equal(records.length,3);assert.equal(records.filter(r=>r.status==='duplicada').length,1);
 assert.equal(records.find(r=>r.status==='duplicada').findings.length,3);
 assert.equal(records.filter(r=>r.status==='chave vazia').length,2);
 assert.deepEqual(groupRecords(records,'status').map(g=>g.records.length).sort(),[1,2]);
});
test('5.000 linhas com a mesma chave preservam todas as evidências sem pareamento',async()=>{
 const {resultRecords}=await import('../lib/confere/results.ts');
 const table=[['id','valor'],...Array.from({length:5000},()=>['0001','a'])];
 const findings=compare(table,table,'id','id','exact',pair);
 assert.equal(findings.length,10000);
 const records=resultRecords(findings);
 assert.equal(records.length,1);assert.equal(records[0].status,'duplicada');assert.equal(records[0].findings.length,10000);
});
