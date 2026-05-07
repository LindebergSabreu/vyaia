import styles from "./FAQ.module.css";

const faqs = [
  {
    id: 1,
    pergunta: "Como começa um projeto com a Vya IA?",
    resposta:
      "Começamos com diagnóstico do cenário, objetivos, processos e dados disponíveis. A partir disso, priorizamos oportunidades e desenhamos um plano de execução realista.",
  },
  {
    id: 2,
    pergunta: "A Vya IA atende pequenas e médias empresas?",
    resposta:
      "Sim. O escopo é ajustado à maturidade, orçamento e urgência de cada empresa. A prioridade é encontrar aplicações que gerem impacto mensurável.",
  },
  {
    id: 3,
    pergunta: "Vocês desenvolvem soluções ou apenas consultoria?",
    resposta:
      "Atuamos nas duas frentes: estratégia, desenho técnico, implementação, integração, treinamento e evolução contínua do projeto.",
  },
  {
    id: 4,
    pergunta: "Como vocês lidam com segurança e governança?",
    resposta:
      "Avaliamos riscos, dados sensíveis, responsabilidades, rastreabilidade e limites de uso desde o início. IA só faz sentido quando pode ser operada com confiança.",
  },
];

export default function FAQ() {
  return (
    <section className={styles.section} id="faq" role="region" aria-label="Perguntas frequentes">
      <div className="container">
        <div className="section-heading">
          <p className="section-kicker">FAQ</p>
          <h2 className="section-title">Perguntas frequentes</h2>
        </div>

        <div className={styles.list}>
          {faqs.map((faq) => (
            <details key={faq.id} className={styles.item}>
              <summary className={styles.question}>
                {faq.pergunta}
                <span className={styles.icon}>+</span>
              </summary>
              <div className={styles.answer}>
                <p>{faq.resposta}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
