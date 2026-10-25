# Teste completo — resolução de pendências e sessão local

Entrada: teste-saneamento-bling.csv, 16 registros sintéticos.

| Etapa | Liberados | Pendentes | Excluídos |
|---|---:|---:|---:|
| Validação inicial | 8 | 8 | 0 |
| Descrição preenchida no registro CSV 12 | 9 | 7 | 0 |
| Unidade UN aplicada em lote ao registro CSV 16 | 10 | 6 | 0 |
| Exclusão do registro CSV 10 (duplicado) | 11 | 4 | 1 |
| Desfazer exclusão | 10 | 6 | 0 |
| Reaplicar exclusão | 11 | 4 | 1 |
| Recarregar: sessão recuperada | 11 | 4 | 1 |
| Desfazer após recuperar | 10 | 6 | 0 |
| Reaplicar exclusão para exportação | 11 | 4 | 1 |

Correção em lote exercitada com um registro selecionado. A operação suporta grupos;
um teste adicional do motor cobre regras em múltiplos registros. Não afirmar que
houve correção de múltiplas linhas neste roteiro de interface.

CSV Bling baixado: 11 registros, códigos únicos, descrição corrigida e unidade UN.
Pendentes não foram exportados; o duplicado excluído não aparece como segunda ocorrência.
Relatório CSV: 16 registros, com 11 LIBERADO, 4 PENDENTE e 1 EXCLUÍDO.
Relatório HTML: resumo compatível. Auditoria: original preservado, revisões,
exclusão e sete decisões com estados antes/depois, incluindo desfazer.

Persistência: IndexedDB local. Após recarregar, mapeamento, decisões e histórico
foram recuperados e o lote recalculado. Confirmação de exportação retornou desmarcada.
Nenhuma importação adicional foi realizada no Bling; todo este teste foi local.


A exclusão da sessão foi verificada em localhost:3000, uma origem separada
da sessão principal em 127.0.0.1:3000: carregar amostra, aguardar salvamento,
apagar, recarregar e confirmar Nenhuma sessão salva / Nenhum arquivo carregado.
A sessão principal foi preservada com 11 liberados, 4 pendentes e 1 excluído.
Evidência visual: sessao-salva.png.
