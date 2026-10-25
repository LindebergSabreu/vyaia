# Teste Bling — segundo lote sintético

25/10/2026. Importação autorizada pelo usuário neste chat.

Entrada: cópia de teste-saneamento-bling.csv com prefixo VYA-T2- nos códigos, preservando sujeiras e duplicidades. O prefixo evita colisões com os oito produtos da prova anterior.

- Motor local: 16 recebidos, 8 liberados e 8 pendentes.
- Saída: CSV de 59 colunas gerado pelo mesmo motor usado pela interface.
- Bling: operação Cadastrar novos; Atualizar estoque desmarcado; importação concluída com sucesso.
- Exportação posterior: 16 produtos, dos quais 8 pertencem ao novo lote.
- Conferência: 48 campos (Código, Descrição, Unidade, NCM, Origem e Preço), 0 divergências e 0 ausentes.
- Estoque dos oito novos produtos: zero. Nenhum lançamento de estoque solicitado.

Normalização da comparação: uma tabulação final do Código do exportador removida; preço comparado como decimal BR. Aspas, ponto e vírgula e quebra de linha da descrição comparados exatamente.

## Limites e problema observado

O envio automático da entrada à interface pelo controle do navegador ficou em Lendo arquivo. Para concluir a prova de compatibilidade, a saída foi gerada executando o motor local diretamente e enviada ao Bling pelo seletor nativo do macOS. Portanto, este teste comprova motor/exportação/aceite e reconciliação desta amostra, mas não conclui a validação do upload pela interface automatizada.

Os oito registros VYA-T2- permanecem na conta de teste; os anteriores foram preservados. Dados sintéticos, sem validação comercial ou de classificação fiscal geral. Evidências: sucesso.png, saida-bling.csv, retorno-bling.csv e reconciliacao.json.


## Fechamento da leitura pela interface

A investigação posterior selecionou a mesma entrada pelo seletor nativo do macOS.
A interface carregou 16 registros, detectou ponto e vírgula e permitiu confirmar
as colunas, validar e baixar 8 produtos liberados. O download foi comparado byte
a byte com saida-bling.csv, anteriormente importado e reconferido no ERP:
**os arquivos são idênticos**. A cópia está em saida-interface.csv e o hash em
validacao-interface.json. Não foi necessário repetir a importação nem criar mais produtos.

O travamento anterior foi observado no envio automatizado com filechooser.setFiles;
não se reproduziu no seletor nativo nesta rodada. Isso aponta para uma limitação
do caminho de automação, mas a causa interna não foi identificada. Não é prova
de ausência de falhas em todos os navegadores ou arquivos. Nenhum código foi
alterado durante esta investigação. O ciclo desta amostra fica conferido:
entrada na interface → validação → download idêntico → aceite Bling → retorno sem divergências.
