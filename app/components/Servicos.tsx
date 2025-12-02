'use client';

import styles from './SobreVYA.module.css';

export default function SobreVYA() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>

        {/* Introdução - Propósito */}
        <div className={styles.section}>
          <h2 className={styles.title}>Por que a VYA IA existe?</h2>
          <p className={styles.paragraph}>
            A VYA IA nasceu com o propósito de humanizar a inteligência artificial, colocando as pessoas no centro da inovação. Acreditamos que a tecnologia deve servir para potencializar capacidades humanas, criar conexões genuínas e transformar vidas e negócios de forma ética e sustentável.
          </p>
        </div>

        {/* Os Três Pilares */}
        <div className={styles.section}>
          <h2 className={styles.title}>Nossos Pilares</h2>
          <div className={styles.pillarsGrid}>
            {/* Cuidador */}
            <div className={styles.pillarCard}>
              <div className={styles.icon}>💜</div>
              <h3 className={styles.pillarTitle}>Cuidador</h3>
              <p className={styles.pillarText}>
                Humanização genuína. Colocamos pessoas no centro da tecnologia, promovendo empatia, suporte autêntico e cuidado contínuo em cada etapa da transformação.
              </p>
            </div>
            {/* Especialista */}
            <div className={styles.pillarCard}>
              <div className={styles.icon}>⭐</div>
              <h3 className={styles.pillarTitle}>Especialista</h3>
              <p className={styles.pillarText}>
                Expertise técnica comprovada. Domínio em IA generativa, algoritmos avançados e soluções inovadoras que geram resultados mensuráveis e impacto real.
              </p>
            </div>
            {/* Visionário */}
            <div className={styles.pillarCard}>
              <div className={styles.icon}>✨</div>
              <h3 className={styles.pillarTitle}>Visionário</h3>
              <p className={styles.pillarText}>
                Antecipamos tendências e criamos o futuro. Inovação disruptiva aliada a uma visão estratégica que posiciona seu negócio como líder na transformação digital ética.
              </p>
            </div>
          </div>
        </div>

        {/* Como Trabalhamos */}
        <div className={styles.section}>
          <h2 className={styles.title}>Como Trabalhamos</h2>
          <ul className={styles.list}>
            <li>Consultoria personalizada para entender suas necessidades específicas.</li>
            <li>Soluções sob medida, alinhadas à sua estratégia de negócio.</li>
            <li>Implementação de SaaS, automações e treinamentos para acelerar resultados.</li>
            <li>Inovação contínua com foco em impacto sustentável.</li>
            <li>Parceria de longo prazo, com suporte e evolução constante.</li>
            <li>Compromisso com ética, transparência e resultados concretos.</li>
          </ul>
        </div>

        {/* Por que nos escolher */}
        <div className={styles.section}>
          <h2 className={styles.title}>Por que escolher a VYA IA?</h2>
          <ul className={styles.list}>
            <li><strong>Humanização:</strong> Tecnologia com empatia e conexão real.</li>
            <li><strong>Expertise:</strong> Equipe com profundo conhecimento técnico.</li>
            <li><strong>Transparência:</strong> Processo aberto e confiável.</li>
            <li><strong>Parceria:</strong> Seu sucesso é nossa prioridade.</li>
            <li><strong>Impacto:</strong> Resultados que transformam negócios e vidas.</li>
            <li><strong>Visão Futurista:</strong> Liderando a inovação ética no Brasil.</li>
          </ul>
        </div>

        {/* Compromisso */}
        <div className={styles.section}>
          <h2 className={styles.title}>Nosso Compromisso</h2>
          <p className={styles.paragraph}>
            Construímos o futuro da IA junto com você, com ética, inovação e impacto real. Nosso objetivo é transformar sua visão em realidade, com soluções humanas, tecnológicas e sustentáveis.
          </p>
        </div>

      </div>
    </section>
  );
}
