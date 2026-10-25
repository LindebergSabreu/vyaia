import {test} from 'node:test';
import assert from 'node:assert/strict';
import {validateSession} from '../lib/bling/session.ts';
const mapping=Object.fromEntries(['sku','descricao','preco_venda','unidade','ncm','origem','ficha_tecnica'].map(f=>[f,f]));
const state={edits:{2:{descricao:'Correção'}},excluded:[3]};
const session={version:1,savedAt:'2026-10-25T12:00:00Z',rawText:'sku;descricao\n001;Teste',delimiter:';',name:'teste.csv',mapping,fill:false,separatorConfirmed:true,hasResults:true,review:state,history:[{edits:{},excluded:[]}],decisions:[{action:'Editar',at:'2026-10-25T12:00:00Z',before:{edits:{},excluded:[]},after:state}]};
test('sessão serializada preserva originais, edições, exclusões e histórico',()=>{assert.deepEqual(validateSession(JSON.parse(JSON.stringify(session))),session);});
test('recusa sessão corrompida ou incompatível',()=>{for(const value of [null,{}, {...session,version:2},{...session,review:{edits:{2:{ncm:123}},excluded:[]}},{...session,history:[null]},{...session,delimiter:'|'}])assert.throws(()=>validateSession(value));});
