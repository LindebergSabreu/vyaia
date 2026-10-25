# Continuidade no Codex dentro do VS Code

Atualizado em 25/10/2026. Resumo do chat “Configurar ambiente local da Vya IA”.
Este arquivo transfere contexto, não constitui ordem para implementar todas as ideias.

## Orientação do usuário

Toda codificação passa a ser conduzida pelo usuário com o Codex dentro do VS Code.
O aplicativo desktop fica para discussão, análise e planejamento. A preferência está
registrada nos AGENTS.md da pasta superior e deste repositório. Essa regra permite
trabalhar na sessão do VS Code; não é proibição de implementação dentro do editor.
Seja sincero, independente e sem bajulação. Não invente fatos, fontes ou testes.
Distinga evidência, hipótese e incerteza. Admita limites e corrija erros.
Tudo deve permanecer local para teste. Não publicar, enviar ao GitHub, contratar
serviços nem fazer alterações destrutivas sem autorização explícita aplicável.

## Ambiente

- Repositório: https://github.com/LindebergSabreu/vyaia.git
- Pasta: /Users/lindebergsabreu/Documents/ChatGPT/Vya IA - Desenvolvimento e Codificação/vyaia
- Branch local: codex/ambiente-local.
- Next.js 16.0.8 instalado pelo lockfile, React 19, TypeScript, CSS Modules.
- Node 26.8.1, npm 11.19.0; dependências já instaladas.
- GitHub CLI autenticado como LindebergSabreu. Identidade Git de commits ainda
  não estava configurada na preparação inicial; não inventar nome/e-mail.
- Há uma pasta .git inicializada sem commits na pasta superior. O repositório
  efetivo do portal é a subpasta vyaia: trabalhar nela, sem misturar os dois.
- Iniciar: npm run dev -- --hostname 127.0.0.1
- O servidor foi iniciado neste chat na porta 3000; verificar se continua ativo
  antes de abrir outra instância. Não finalizar processos alheios.
- Verificações: npm run test:bling, npm run lint, npm run build.

## Objetivo e decisões

Implementar serviços/produtos da divisão Vya Dados, com autonomia operacional,
entrada delimitada e resultado verificável, conforme o chat “00 - Propostas in time”.
A prioridade vigente daquele chat é Prepara + Importa para Bling com conferência;
depois Confere, Prepara, Unifica e Vigia. Não desenvolver todos simultaneamente.
Vya Dados fica dentro de “Plataformas SaaS & APIs”. Bling tem uma página própria
nessa linha; uma seção principal “Serviços Bling” foi considerada prematura para
um único fluxo. Não afirmar que isso foi validado comercialmente.

## Implementação local já feita

- /servicos/plataformas-saas apresenta a categoria de produtos.
- /servicos/plataformas-saas/vya-dados apresenta o produto e seus módulos.
- /servicos/plataformas-saas/vya-dados/bling contém a demonstração Prepara + Importa.
- CSV UTF-8, seleção de separador, limite de 2 MB / 5.000 registros.
- Amostra de 20 produtos sintéticos; confirmação/mapeamento de sete campos.
- Valida código, duplicidades, descrição, preço BR, unidades UN/CX, origem 0–8,
  NCM em snapshot local e textos com início de fórmula/caracteres de controle.
- Regras de NCM opcionais limitadas aos dois exemplos sintéticos do estudo.
- Prévia com filtros, motivos e alterações; download Bling de 59 colunas com
  somente liberados; relatório CSV e auditoria JSON com valores originais.
- Conteúdo do CSV processado no navegador. Sem upload ao servidor, persistência,
  autenticação, pagamento ou integração de escrita no ERP.
- Escopo: produtos simples novos. Não cobre estoque, variantes, atualização de
  existentes nem verificação de códigos já cadastrados no ERP.
- A conferência automática do retorno do Bling ainda não está implementada.
- A interface deixou explícito que a nova saída ainda precisa de aceite no ERP
  de teste. Não confundir o êxito da prova anterior com homologação desta interface.

## Arquivos relevantes

- app/servicos/plataformas-saas/page.tsx
- app/servicos/plataformas-saas/dados.module.css
- app/servicos/plataformas-saas/vya-dados/bling/page.tsx
- app/servicos/plataformas-saas/vya-dados/bling/Importer.tsx
- app/components/Servicos.tsx (descrição do cartão atualizada)
- lib/bling/engine.ts, headers.json, ncm.json
- public/dados/amostra-bling.csv
- tests/bling.test.mjs
- .vscode/ (tarefas, configurações e extensões sugeridas)
- DESENVOLVIMENTO.md e PLANO-VYA-DADOS.md

## Evidências e validação realizadas neste chat

- Quatro testes do motor passaram, incluindo 8 liberados / 12 pendentes,
  preservação de identificadores e aspas/quebras, CSV malformado, mapeamento
  duplicado e preenchimento NCM opcional.
- Lint e build passaram. Há avisos não bloqueantes de dependência Baseline antiga,
  depreciações Node e detecção de módulo no teste. Não foram corrigidos.
- Interface testada no navegador: carregar amostra, validar, filtrar liberados,
  confirmar revisão e baixar o CSV. Download conferido: 8 produtos, 59 colunas.
- Snapshot dos códigos NCM e cabeçalhos veio dos arquivos locais da pesquisa,
  não de nova verificação online. NCM não é classificação fiscal geral.
- Não houve commit, push ou publicação. Preservar todas as alterações locais;
  há arquivos novos ainda não rastreados. Conferir git status antes de editar.

## Materiais de negócio e protótipo anterior

Pasta irmã acessível no computador:
/Users/lindebergsabreu/Documents/ChatGPT/Vya IA - Negócios e Oportunidades

Consultar, se necessário:
- divisoes/vya-dados/README.md
- divisoes/vya-dados/Briefing-oportunidades-site.md
- divisoes/vya-dados/prova-bling/RESULTADO.md e CUSTO-IA.md
- divisoes/vya-dados/prova-bling/vya_importa.py e exportar_bling.py
- divisoes/vya-dados/prova-bling/evidencias/reconciliacao_bling.json

O estudo anterior registrou 8 produtos importados no Bling de teste e 48 campos
conferidos sem divergências após tratar uma tabulação do exportador. A comparação
com ChatGPT empatou na amostra; Power Query não foi executado nativamente. Não
há superioridade de precisão, lucro, demanda ou autonomia comercial comprovados.

## Ao retomar

Leia os AGENTS.md, este resumo e os documentos locais. Inspecione o diff e
apresente o entendimento do estado atual e das pendências. Aguarde a orientação
do usuário antes de iniciar novas alterações de código. Não repetir a implementação,
não descartar trabalho local e não publicar nada por inferência.


## Hierarquia revisada em 25/10/2026

Plataformas SaaS & APIs é a categoria; Vya Dados é um produto; Prepara, Importa,
Confere, Unifica e Vigia são módulos. Apenas o fluxo atual Prepara + Importa
é específico para Bling. A proposta dos demais módulos é geral, mas ainda
não há implementação independente ou compatibilidade comprovada com outros destinos.
A rota antiga `/servicos/plataformas-saas/bling` redireciona para
`/servicos/plataformas-saas/vya-dados/bling`. Tudo permanece local.


## Confere — atualização de implementação

Primeiro incremento local implementado em `app/servicos/plataformas-saas/vya-dados/confere`.
Motor puro em `lib/confere/engine.ts`; testes em `tests/confere.test.mjs`; exemplos
em `public/dados/confere`. Página Vya Dados passa a oferecer o teste do Confere.
Consultar DESENVOLVIMENTO.md para regras e limites. Tudo permanece local.


## Separação dos chats e orientação de produto

Este chat continua dedicado ao Prepara + Importa para Bling. Confere deve evoluir
no chat dedicado “Vya Dados — Confere”. Não inferir autorização para desenvolver
outros módulos neste chat. A implementação atual é demonstração local; produto
em operação exigirá definição de contas, isolamento de dados, autenticação,
permissões, cobrança e operação. Usuário propôs tratamento interativo de pendências
(correções de formato e preenchimento de campos), ainda em discussão de escopo.


## Prepara + Importa — resolução de pendências implementada

Componente ReviewEditor.tsx permite edição individual, agrupamento, seleção,
correção em lote com prévia, exclusão explícita, reinclusão e desfazer.
reviewResults em lib/bling/engine.ts revalida todo o lote ativo e preserva
entrada original e posições lógicas. Exportações excluem registros removidos
do lote; auditoria JSON registra decisões e estados antes/depois.
Consultar DESENVOLVIMENTO.md para uso e evidências. Tudo permanece local;
nenhuma nova importação no Bling foi feita neste incremento.


## Persistência local e ciclo de revisão verificado

O Prepara + Importa agora salva progresso em IndexedDB, incluindo a entrada,
mapeamento, decisões e histórico de desfazer. Recarregar recalcula resultados
e exige novo aceite de exportação. O painel permite apagar a sessão.
Rascunhos não confirmados não persistem. Evidências do teste com CSV com sujeiras
em evidencias/resolucao-pendencias/RESULTADO.md (11 liberados, 4 pendentes, 1 excluído
no roteiro final). Nenhuma nova importação foi feita no ERP nesta rodada.
