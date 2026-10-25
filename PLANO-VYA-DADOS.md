# Vya Dados — enquadramento e início do desenvolvimento

Data: 25/10/2026.

## Origem e decisão

Referência: chat “00 - Propostas in time”, especialmente a consolidação mais recente,
e os arquivos em `../` do projeto irmão “Vya IA - Negócios e Oportunidades”:

- `divisoes/vya-dados/README.md`
- `divisoes/vya-dados/Briefing-oportunidades-site.md`
- `divisoes/vya-dados/prova-bling/RESULTADO.md`
- `divisoes/vya-dados/prova-bling/CUSTO-IA.md`

Vya Dados é o nome de trabalho de um produto dentro da categoria Plataformas SaaS & APIs, reunindo módulos de dados.
O enquadramento comercial cabe na seção existente; isso não significa que cada serviço
já seja um SaaS, tenha API disponível ou esteja pronto para contratação automática.

## Portfólio e sequência

| Ordem inicial | Oferta | Enquadramento | Limite inicial |
|---|---|---|---|
| 1 | Prepara + Importa para Bling, com conferência | Serviço por lote; candidato a aplicação web | Produtos simples novos, perfil de origem explícito, pendências separadas |
| 2 | Confere | Ferramenta de comparação; futura API possível | Duas exportações, chave e mapeamento definidos |
| 3 | Prepara | Função compartilhada de tratamento | Formatos, colunas e junção por regras explícitas |
| 4 | Unifica | Função de qualidade de dados | Duplicidades objetivas; revisão de identidades ambíguas |
| 5 | Vigia | Candidato a SaaS recorrente | Controles técnicos e alertas após configurar fontes e limites |

Enriquecimento, pesquisa ampla, migração integral e classificação NCM aberta ficam
fora do primeiro ciclo. Preenchimento NCM só com regra/evidência explícita e
tratamento de pendências; a prova com dois casos sintéticos não valida classificação geral.

## Primeiro incremento funcional

Começar por uma demonstração local de Prepara + Importa, reaproveitando o conhecimento
do protótipo existente após revisar seu código e suas regras. Não desenvolver cinco
aplicações independentes de uma vez.

Fluxo previsto: selecionar amostra sintética → definir/confirmar correspondência de
colunas → validar e normalizar → visualizar liberados e pendências → baixar arquivo
para Bling e relatório das transformações. A conferência do retorno será uma etapa
explícita com arquivo exportado do destino; gerar arquivo não comprova importação.

Critérios de aceite:

- Preservar códigos e zeros à esquerda; tratar valores decimais por regra explícita.
- Separar campos ausentes, conflitos e ambiguidades sem inventar dados.
- Relacionar cada transformação e pendência à linha de origem.
- Reproduzir os casos e resultados esperados da prova antes de ampliar layouts.
- Medir tempo humano, processamento e retrabalho; não anunciar margem comprovada.
- Validar lint, build e o fluxo funcional com dados sintéticos.

Sem integração de escrita no ERP, pagamento ou credenciais de produção neste incremento.
Persistência, retenção de uploads, limites de arquivo e autenticação precisam ser
definidos antes de receber dados reais de clientes.

## Adequação do portal

Preservar `/servicos/plataformas-saas` como categoria de produtos; Vya Dados tem página própria em `/servicos/plataformas-saas/vya-dados`. Na evolução dessa
página, apresentar entregas concretas, estágio de cada oferta e chamada coerente
com demonstração/contato. Hoje “Experimentar Plataforma” leva apenas ao contato.

Revisar as afirmações atuais de “SLA garantido e suporte 24/7”, segurança empresarial,
escala e preço por uso antes de associá-las aos produtos: não há comprovação dessas
condições nos materiais consultados. Não mostrar API como disponível antes de implementá-la.

## Estado desta entrega

Enquadramento e sequência registrados; regra de uso do VS Code adicionada ao projeto
e ao repositório. A demonstração local de Prepara + Importa foi implementada em `/servicos/plataformas-saas/vya-dados/bling`,
com mapeamento, validação, prévia, exportação Bling, relatório CSV e auditoria JSON.
A apresentação de Vya Dados foi atualizada. Conferência automática do retorno,
aceite da nova saída no ERP e validação comercial permanecem pendentes. Nada foi publicado.


## Hierarquia revisada em 25/10/2026

Plataformas SaaS & APIs é a categoria; Vya Dados é um produto; Prepara, Importa,
Confere, Unifica e Vigia são módulos. Apenas o fluxo atual Prepara + Importa
é específico para Bling. A proposta dos demais módulos é geral, mas ainda
não há implementação independente ou compatibilidade comprovada com outros destinos.
A rota antiga `/servicos/plataformas-saas/bling` redireciona para
`/servicos/plataformas-saas/vya-dados/bling`. Tudo permanece local.
