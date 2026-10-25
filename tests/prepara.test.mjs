import { test } from 'node:test';
import assert from 'node:assert/strict';
import { prepare, transform, outputCSV } from '../lib/prepara/engine.ts';
import { parseCSV } from '../lib/bling/engine.ts';
const cols = [{source:0,name:'id',rule:'preserve',required:true,enabled:true},{source:1,name:'valor',rule:'decimal-br',required:true,enabled:true}];
test('preserva identificadores, precisão decimal e originais; separa inválidos',()=>{
 const table=[['id','valor'],['00001','9.007.199.254.740.993,2300'],['00002','1,2,3'],['','12,30']];
 const r=prepare(table,cols);
 assert.deepEqual(r[0].values,['00001','9007199254740993.2300']);
 assert.deepEqual(r[0].original,table[1]);assert.equal(r[0].issues.length,0);
 assert.equal(r[1].issues.length,1);assert.equal(r[1].values[1],'1,2,3');assert.equal(r[2].issues.length,1);
 assert.deepEqual(parseCSV(outputCSV([['id','valor'],r[0].values],';'),';')[1],r[0].values);
});
test('regras explícitas, reordenação e omissão não alteram entrada',()=>{
 const t=[['id','nome','extra'],['001',' Nome ','x']];
 const r=prepare(t,[{source:1,name:'Nome',rule:'trim',enabled:true,required:true},{...cols[0]},{source:2,name:'extra',rule:'preserve',enabled:false,required:false}]);
 assert.deepEqual(r[0].values,['Nome','001']);assert.deepEqual(t[1],['001',' Nome ','x']);
 assert.equal(transform(' a ','preserve'),' a ');assert.equal(transform('ação','upper'),'AÇÃO');
 assert.equal(transform('-0001.2300','decimal-dot'),'-0001,2300');
});
test('bloqueia configurações ambíguas e texto com fórmulas; aceita decimal negativo explícito',()=>{
 const t=[['id','valor'],['=1+1','-12,30']];
 assert.throws(()=>prepare(t,[]));assert.throws(()=>prepare(t,[cols[0],{...cols[1],name:'id'}]));
 assert.throws(()=>prepare(t,[{...cols[0],name:'=x'}]));
 const r=prepare(t,cols)[0];assert.equal(r.issues.length,1);assert.equal(r.values[1],'-12.30');
});
test('5.000 registros, aspas e quebras de linha sobrevivem à exportação',()=>{
 const table=[['id','texto'],...Array.from({length:5000},(_,i)=>[String(i).padStart(6,'0'),'a;"b"\nc'])];
 const r=prepare(table,[cols[0],{...cols[1],rule:'preserve'}]);
 assert.equal(r.length,5000);assert.equal(r.filter(x=>x.issues.length).length,0);
 assert.deepEqual(parseCSV(outputCSV(table,';'),';'),table);
});
