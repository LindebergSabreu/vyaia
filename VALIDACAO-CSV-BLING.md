# Comparação de entrada com exportação do Bling

Entrada: teste-saneamento-bling.csv. Exportação: produtos_2026-10-25-12-17-28.csv.

- Entrada: 16 registros; 8 liberados pelo perfil.
- Exportação: 8 produtos; 6 códigos coincidem com os liberados.
- Ausentes: 000000000000012340, 000008.
- Extras: 0000000000000000000012340, 000018.
- Diferenças nos campos comparados: 8. Detalhes em VALIDACAO-CSV-BLING.json.
- Os códigos do arquivo vya-bling-produtos-novos (1).csv coincidem com os IDs internos desta exportação, não com o campo Código. Isso confirma a correspondência dos números; não comprova em qual etapa ocorreu o mapeamento.

Normalização: remover exatamente uma tabulação final do Código, retirar pontos do NCM e converter preço BR para decimal. Nenhum dado do ERP foi alterado.

Conclusão: esta exportação não corresponde à carga esperada do CSV com sujeiras. Seus registros têm descrições e códigos característicos da amostra anterior de 20 registros. Não há evidência de aceite da nova carga.
