'use client';

import styles from './FAQ.module.css';

const faqs = [
  {
    id: 1,
    pergunta: 'O que é consultoria em IA?',
    resposta:
      'Consultoria em IA é um serviço especializado que ajuda empresas a diagnosticar oportunidades, planejar estratégias e implementar soluções de inteligência artificial alinhadas aos seus objetivos de negócio. A Vya IA oferece abordagem humanizada que equilibra expertise técnica com cuidado genuíno.',
  },
  {
    id: 2,
    pergunta: 'Vocês atendem empresas de qual tamanho?',
    resposta:
      'Atendemos desde PMEs até corporações. Nossas soluções são personalizadas para o seu estágio de maturidade em IA, orçamento e complexidade. O importante é o impacto real que a tecnologia pode gerar no seu negócio.',
  },
  {
    id: 3,
    pergunta: 'Qual é o ROI esperado de uma implementação de IA?',
    resposta:
      'O ROI varia conforme o nicho e solução, mas clientes típicos veem retorno entre 200-600% em 12 meses, através de aumento de produtividade, redução de custos e novas receitas. Fazemos análise específica na consultoria inicial.',
  },
  {
    id: 4,
    pergunta: 'Vocês garantem que a IA é ética e segura?',
    resposta:
      'Sim. Transparência e ética no uso de IA são valores centrais da Vya IA. Implementamos protocolos de segurança, privacidade de dados e viés justo em todas as soluções, alinhadas às normas regulatórias brasileiras.',
  },
];

export default function FAQ() {
  return (
    <section className={styles.section} id="faq" role="region" aria-label="Perguntas frequentes">
      <div className="container">
        <h2 className="section-title">Perguntas Frequentes</h2>

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