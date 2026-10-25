# Prepara — validação local, 25/10/2026

- Quatro testes do motor passaram: identificadores, precisão acima de Number.MAX_SAFE_INTEGER,
  preservação dos originais, regras, reordenação, omissão, configurações ambíguas,
  fórmulas, decimais negativos, 5.000 registros e round-trip de aspas/quebras.
- Lint e build passaram; avisos existentes sobre Baseline antiga e Node permanecem.
- Rota respondeu HTTP 200.
- Navegador: amostra carregada; trim em nome, nome obrigatório e decimal BR em valor.
  Resultado observado: 4 recebidos, 2 sem pendências, 2 pendentes, 3 com alterações.
  Código 00001 preservado; 1.234,5600 → 1234.5600 e
  9007199254740993,23 → 9007199254740993.23.
- Busca por 00004 deixou uma ocorrência; limpar restaurou quatro. Exportação estava
  desabilitada antes do aceite e habilitada após marcar revisão.
- Não se executou importação em sistema externo. Nenhum push ou publicação.
- Teste de 5.000 registros é do motor; interface grande e upload nativo ainda não
  foram verificados neste incremento. Download pela interface não foi reconferido.
