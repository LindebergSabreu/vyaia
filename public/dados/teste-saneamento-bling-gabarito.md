# Gabarito — CSV sintético com sujeiras

Selecione ponto e vírgula e mantenha o mapeamento sugerido. Não é necessário ativar regras NCM.
Esperado: **16 registros, 8 liberados e 8 pendentes**.
A posição abaixo conta registros após o cabeçalho, não linhas físicas (há descrição com quebra de linha).

| Registro | Resultado esperado |
|---|---|
| 1 | Remover espaços externos do código e descrição; preservar 000001 |
| 2 | Converter R$ 1.234,56 para 1234.56 internamente |
| 3 | Padronizar unidade para UN |
| 4 | Remover espaços externos da origem e pontuação do NCM |
| 5 | Normalizar preço 00012,5 para 12.50 |
| 6 | Preservar aspas, ponto e vírgula e quebra de linha da descrição |
| 7 | Preservar código longo e zeros à esquerda |
| 8 | Aceitar preço zero como 0.00 |
| 9 e 10 | Marcar ambos como pendentes por código duplicado após remover espaços |
| 11 | Pendente: descrição vazia |
| 12 | Pendente: preço com três casas decimais; não arredondar por suposição |
| 13 | Pendente: NCM não encontrado |
| 14 | Pendente: origem fora do perfil |
| 15 | Pendente: unidade não confirmada |
| 16 | Pendente: descrição com início de fórmula |

O saneamento é técnico: não inventa descrição, unidade, origem ou classificação fiscal.
Todos os registros são sintéticos. Não importe em produção.
