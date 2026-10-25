import type { Mapping, ReviewState } from './engine';
export type Decision = {action:string;at:string;before:ReviewState;after:ReviewState};
export type SavedSession = {version:1; savedAt:string; rawText:string; delimiter:string; name:string; mapping:Mapping; fill:boolean; separatorConfirmed:boolean; hasResults:boolean; review:ReviewState; history:ReviewState[]; decisions:Decision[]};
const databaseName='vya-bling-local';
function database():Promise<IDBDatabase>{return new Promise((resolve,reject)=>{const req=indexedDB.open(databaseName,1);req.onupgradeneeded=()=>req.result.createObjectStore('session');req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error);req.onblocked=()=>reject(new Error('Armazenamento local bloqueado por outra aba.'));});}
export async function readSession():Promise<unknown>{const db=await database();return new Promise((resolve,reject)=>{const tx=db.transaction('session','readonly');const req=tx.objectStore('session').get('current');tx.oncomplete=()=>{db.close();resolve(req.result);};tx.onerror=()=>{db.close();reject(tx.error);};});}
async function persistSession(session:SavedSession|null):Promise<void>{const db=await database();return new Promise((resolve,reject)=>{const tx=db.transaction('session','readwrite');if(session)tx.objectStore('session').put(session,'current');else tx.objectStore('session').delete('current');tx.oncomplete=()=>{db.close();resolve();};tx.onerror=()=>{db.close();reject(tx.error);};tx.onabort=()=>{db.close();reject(tx.error||new Error('Gravação local interrompida.'));};});}
export function validateSession(value:unknown):SavedSession{
 if(!value||typeof value!=='object')throw Error('Sessão salva inválida.');
 const s=value as SavedSession;
 const validReview=(r:ReviewState)=>r&&typeof r==='object'&&r.edits&&typeof r.edits==='object'&&Array.isArray(r.excluded)&&r.excluded.every(n=>Number.isInteger(n)&&n>=2)&&Object.entries(r.edits).every(([line,edits])=>Number.isInteger(Number(line))&&Number(line)>=2&&edits&&typeof edits==='object'&&Object.entries(edits).every(([field,v])=>['sku','descricao','preco_venda','unidade','ncm','origem','ficha_tecnica'].includes(field)&&typeof v==='string'));
 if(s.version!==1||typeof s.rawText!=='string'||s.rawText.length>2*1024*1024||![';',',','\t'].includes(s.delimiter)||typeof s.name!=='string'||typeof s.savedAt!=='string'||typeof s.fill!=='boolean'||typeof s.hasResults!=='boolean'||typeof s.separatorConfirmed!=='boolean'||!s.mapping||!['sku','descricao','preco_venda','unidade','ncm','origem','ficha_tecnica'].every(f=>typeof s.mapping[f as keyof Mapping]==='string')||!validReview(s.review)||!Array.isArray(s.history)||!s.history.every(validReview)||!Array.isArray(s.decisions)||!s.decisions.every(d=>d&&typeof d.action==='string'&&typeof d.at==='string'&&validReview(d.before)&&validReview(d.after)))throw Error('Sessão incompatível ou danificada. Selecione novamente o arquivo ou apague a sessão local.');
 return s;
}

let writeQueue:Promise<void>=Promise.resolve();
export function writeSession(session:SavedSession|null):Promise<void>{
 const queued=writeQueue.catch(()=>undefined).then(()=>persistSession(session));
 writeQueue=queued;return queued;
}
