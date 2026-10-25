# Desenvolvimento local — Vya IA

Abra esta pasta (`vyaia`) no VS Code, pois ela contém o repositório do portal.

## Preparação

Git e GitHub CLI estão instalados, com autenticação na conta LindebergSabreu.
O remoto `origin` aponta para https://github.com/LindebergSabreu/vyaia.git.
O ambiente inicial utiliza Node.js 26.8.1 e npm 11.19.0.

```sh
npm ci
npm run dev -- --hostname 127.0.0.1
```

Acesse http://127.0.0.1:3000. Encerre o servidor com Ctrl+C.
O código atual não exige arquivo .env para iniciar. Nunca versione credenciais.

## VS Code

As extensões sugeridas aparecem em Extensões → Recomendações.
Use Terminal → Executar Tarefa para iniciar o portal, rodar lint ou gerar o build.

## Validação e GitHub

```sh
npm run lint
npm run build
git status
```

Crie branches com o prefixo `codex/` a partir da main atualizada para cada alteração.
Revise o diff antes de criar commits e abra pull requests para revisão.
Antes do primeiro commit, configure `user.name` e `user.email` com a identidade desejada;
esses valores não estavam configurados na preparação inicial.

Publicar em produção exige autorização explícita. Antes de enviar alterações ao GitHub,
confirme como a hospedagem trata pushes e pull requests, pois podem disparar deploys.

A hospedagem e sua configuração de publicação ainda não foram verificadas.


## Vya Dados — teste local do primeiro incremento

Acesse `/servicos/plataformas-saas` para a categoria,
`/servicos/plataformas-saas/vya-dados` para o produto e
`/servicos/plataformas-saas/vya-dados/bling` para a demonstração.

1. Clique em **Usar amostra de 20 produtos**.
2. Confirme o mapeamento. A amostra ativa as duas regras sintéticas de NCM.
3. Clique em **Validar e preparar prévia**: esperado 8 liberados e 12 pendentes.
4. Filtre as pendências e revise as alterações.
5. Marque a revisão e baixe o CSV para Bling. Relatório CSV e auditoria JSON
   também ficam disponíveis. A auditoria contém os valores originais.
6. Para testar outro arquivo, use CSV UTF-8 com até 2 MB e 5.000 registros;
   selecione primeiro o separador e depois o arquivo. Use dados sintéticos.

`npm run test:bling` executa os testes do processamento (Node 26 instalado).
`npm run lint` e `npm run build` verificam o portal.

O processamento do conteúdo ocorre no navegador. Não há API de upload, autenticação ou conexão ao ERP. O progresso confirmado
é salvo em IndexedDB neste navegador e recuperado ao recarregar.
CSV e TSV em UTF-8 estão disponíveis; XLSX não é suportado neste incremento. O separador é sugerido quando há uma única leitura estrutural válida e requer confirmação. O relatório HTML é a opção de leitura; JSON é auditoria técnica.

O modelo Bling de 59 colunas e os códigos NCM foram extraídos dos artefatos
locais do estudo de 25/10/2026. O snapshot NCM guarda o SHA-256 do arquivo-fonte
em `lib/bling/ncm.json`; não há atualização automática nem classificação fiscal
geral. A aplicação não testa se um código já existe no ERP. A nova saída ainda
precisa de aceite no Bling de teste; a conferência automática do retorno não
está implementada.

Decisão de navegação: Bling tem página própria dentro de Vya Dados, sem criar
uma seção principal para um único fluxo. Reavaliar quando existirem outras
ofertas Bling com escopo e demanda definidos.


## Hierarquia revisada em 25/10/2026

Plataformas SaaS & APIs é a categoria; Vya Dados é um produto; Prepara, Importa,
Confere, Unifica e Vigia são módulos. Apenas o fluxo atual Prepara + Importa
é específico para Bling. A proposta dos demais módulos é geral, mas ainda
não há implementação independente ou compatibilidade comprovada com outros destinos.
A rota antiga `/servicos/plataformas-saas/bling` redireciona para
`/servicos/plataformas-saas/vya-dados/bling`. Tudo permanece local.


## Confere — primeiro incremento local

Rota: `/servicos/plataformas-saas/vya-dados/confere#comparacao`. Use o botão de exemplo
ou dois CSVs/TSVs sintéticos UTF-8 (2 MB e 5.000 registros por arquivo). Confirme
o separador, escolha uma chave em cada lado e mapeie campos e regras. Não há
normalização automática de códigos. A regra decimal aceita somente formato BR.
O relatório distingue registros iguais, campos diferentes, ausentes, extras,
linhas de chaves duplicadas e chaves vazias. Grupos duplicados não são comparados
por campo, mesmo que um dos lados tenha apenas uma linha.

Gabarito do exemplo: 2 iguais; 1 campo diferente; 1 ausente; 1 extra; 3 linhas
em grupo duplicado (2 na origem e 1 no destino). Downloads HTML, CSV e JSON
incluem todas as ocorrências; a prévia mostra até 100. HTML pode ser impresso
em PDF. Nenhum arquivo é enviado ao servidor ou persistido pela aplicação.

Teste do motor: `npm run test:confere`. Testes existentes: `npm run test:bling`.
Não há XLSX, chave composta, comparação direta com banco, equivalência semântica
ou correção de dados. Upload automatizado pode falhar no controle do navegador;
o caminho nativo do seletor deve ser verificado separadamente.


## Resolver pendências — Prepara + Importa

Após validar a entrada, a etapa 3 permite agrupar por motivo, editar todos os
campos de um registro e confirmar a revalidação. Preços continuam no formato BR.
Não se deduzem descrições, identidades ou classificações fiscais.

Para corrigir um grupo: selecione registros, campo e valor; abra a prévia e
confirme. Código/SKU é individual para evitar atribuir um código a vários itens.
A exclusão exige prévia e confirmação, preserva o original e pode ser revertida
por Reincluir ou Desfazer. O lote ativo inteiro é revalidado: excluir uma ocorrência
de duplicidade pode liberar a outra.

Cada decisão invalida o aceite da exportação. Contagens distinguem recebidos,
liberados, pendentes e excluídos. O CSV Bling contém somente liberados ativos;
os relatórios incluem os excluídos. JSON registra tabela original, edições,
exclusões e decisões com estados antes/depois, inclusive desfazer. Mudanças de arquivo, mapeamento ou regras iniciam nova revisão. O progresso
confirmado persiste localmente; a aplicação não grava no ERP.

Validação na interface com amostra de 20: preencher descrição do registro CSV 11
aumentou liberados de 8 para 9; desfazer restaurou 8. Excluir registro 14 deixou
9 liberados, 10 pendentes e 1 excluído; corrigir unidade do 17 para UN resultou
em 10 liberados, 9 pendentes e 1 excluído, exigindo nova confirmação de exportação.


## Sessão local do Prepara + Importa

IndexedDB `vya-bling-local` mantém uma sessão por origem do site e navegador.
Entrada, regras, decisões e histórico de desfazer são salvos automaticamente.
A aplicação mostra salvamento, sucesso ou erro; se falhar, baixe a auditoria.
Ao recarregar, os resultados são recalculados, e o aceite de exportação fica
desmarcado. Rascunhos não confirmados não são salvos. Não há sincronização
entre dispositivos, criptografia própria ou backup remoto. Limpeza dos dados
do navegador remove a sessão. Abas simultâneas podem sobrescrever a sessão:
use uma aba por lote nesta demonstração.

O botão Apagar sessão local e começar de novo remove os dados persistidos e
limpa a tela. Para manter evidência portátil, baixe a auditoria antes de apagar.
O botão Usar CSV com sujeiras carrega o mesmo arquivo público disponibilizado
para download, evitando depender de upload no roteiro demonstrativo.

Teste completo e arquivos baixados: `evidencias/resolucao-pendencias/RESULTADO.md`.

## Confere — grade de análise (25/10/2026)

Implementação local autorizada excepcionalmente no chat desktop. A grade agrupa
as ocorrências por chave, mantém chaves vazias como registros independentes e
conta uma chave duplicada uma vez, preservando todas as linhas no detalhe.

- Contadores clicáveis por situação; busca nos valores dos registros de ambos os arquivos.
- Filtro por campo divergente e ordenação textual crescente/decrescente nos cabeçalhos.
- Agrupamento por situação ou campo, com recolhimento e contagem de cada grupo.
  Uma chave com vários campos divergentes aparece em vários grupos de campo;
  o total filtrado continua contando chaves distintas.
- Paginação de 25, 50 ou 100 resultados, com salto de página. Filtros e ordenação
  abrangem o resultado completo. Grupos recolhidos não entram nas páginas visíveis.
- Ação Analisar mostra registros originais lado a lado, posições (incluem cabeçalho),
  campos divergentes destacados e regras de campo confirmadas. Duplicados não são pareados.
- CSV filtrado inclui todas as ocorrências dos campos selecionados nas chaves filtradas,
  inclusive fora da página e de grupos recolhidos. Downloads completos permanecem disponíveis.

Para verificar, use o exemplo pequeno ou **Usar exemplo de 5.000 registros por arquivo**,
confirme as regras e compare. O exemplo grande produz 5.100 chaves distintas:
4.520 iguais, 180 com diferenças, 100 só na origem, 200 só no destino e 100 chaves
repetidas. Há diferenças de descrição em 60 chaves e de preço em 180 (60 em comum).
Busque `000179` para localizar uma diferença fora da primeira página.

Validação automatizada: `npm run test:confere` inclui comparação de 5.000 registros,
contagens por chave, filtro, busca, ordenação, agrupamento e identidades sem chave.
Limites mantidos: CSV/TSV UTF-8, 2 MB e 5.000 registros por arquivo; processamento
no navegador. Ordenação de valores é textual, não numérica. Não há inferência
semântica, correção automática ou garantia de desempenho além dos cenários testados.

## Prepara — demonstração geral em CSV (25/10/2026)

Rota: `/servicos/plataformas-saas/vya-dados/prepara`. Implementação autorizada
excepcionalmente no chat desktop para esta tarefa. Independente do perfil Bling.
Entrada CSV UTF-8, separador confirmado por seleção (ponto e vírgula, vírgula ou
tabulação), até 2 MB e 5.000 registros. Leitor CSV reaproveitado do módulo existente;
não foi criado um segundo parser. Sem upload, persistência ou acesso a sistemas.

Selecione, renomeie e ordene colunas; escolha preservação exata, remoção de espaços
externos, caixa alta/baixa ou conversão decimal BR ↔ ponto. Cada coluna aceita uma
regra por execução. Campos obrigatórios são opcionais. Decimais são transformados
como strings, sem arredondamento, inferência de moeda ou conversão para Number.
Valores inválidos permanecem originais e geram pendência. Duplicidades não são
removidas nem consideradas erro automaticamente.

Prévia em grade com busca em originais, saída e motivos, filtros, ordenação textual,
25/50/100 registros por página, salto e originais sob demanda. Alterar configuração
invalida a prévia e o aceite. Exportação inclui somente registros sem pendências,
exige revisão explícita e abrange todo o lote. Relatório CSV e auditoria JSON incluem
todos os registros, colunas originais e regras. Relatório CSV neutraliza início de
fórmula; saída de dados mantém os valores e bloqueia texto com início de fórmula.
Decimais negativos válidos são permitidos quando a regra decimal foi selecionada.
Aplicativos de planilha podem inferir tipos: importar identificadores como texto.

Exemplo: selecionar trim para nome, nome obrigatório e decimal BR para valor →
4 recebidos, 2 sem pendências, 2 pendentes, 3 com alterações. Testes do motor:
`npm run test:prepara`. Junções, XLSX, múltiplas regras encadeadas, edição de células,
sessões salvas e importação em destinos ficam fora deste incremento.
