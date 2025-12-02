'use client';

import styles from './MissaoVisaoValores.module.css';

export default function MissaoVisaoValores() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        {/* Primeira Seção - Os Três Pilares */}
        <div className={styles.section}>
          <h2 className={styles.title}>Nossa Essência</h2>
          <p className={styles.subtitle}>
            Os três pilares que guiam nossa atuação: cuidado, expertise e visão
          </p>

          <div className={styles.cardsGrid}>
            {/* Card Cuidador */}
            <div className={styles.card}>
              <div className={styles.cardIcon}>💜</div>
              <h3 className={styles.cardTitle}>Cuidador</h3>
              <p className={styles.cardDescription}>
                Humanização genuína. Colocamos pessoas no centro da tecnologia, promovendo empatia, suporte autêntico e cuidado contínuo em cada etapa da transformação.
              </p>
            </div>

            {/* Card Especialista */}
            <div className={styles.card}>
              <div className={styles.cardIcon}>⭐</div>
              <h3 className={styles.cardTitle}>Especialista</h3>
              <p className={styles.cardDescription}>
                Excelência técnica comprovada. Expertise em IA generativa, algoritmos avançados e soluções inovadoras que geram resultados mensuráveis e transformação real.
              </p>
            </div>

            {/* Card Visionário */}
            <div className={styles.card}>
              <div className={styles.cardIcon}>👁️</div>
              <h3 className={styles.cardTitle}>Visionário</h3>
              <p className={styles.cardDescription}>
                Antecipamos tendências e criamos o futuro. Inovação disruptiva aliada a visão estratégica, posicionando seu negócio como líder da transformação digital.
              </p>
            </div>
          </div>
        </div>

        {/* Segunda Seção - Missão, Visão e Valores */}
        <div className={styles.section}>
          <h2 className={styles.title}>Missão, Visão e Valores</h2>

          <div className={styles.cardsGrid}>
            {/* Card Missão */}
            <div className={styles.card}>
              <div className={styles.cardIcon}>🎯</div>
              <h3 className={styles.cardTitle}>Missão</h3>
              <p className={styles.cardDescription}>
                Oferecer soluções de inteligência artificial de alto impacto que humanizam a tecnologia, potencializam capacidades humanas e geram transformação real nos negócios e na vida das pessoas.
              </p>
            </div>

            {/* Card Visão */}
            <div className={styles.card}>
              <div className={styles.cardIcon}>✨</div>
              <h3 className={styles.cardTitle}>Visão</h3>
              <p className={styles.cardDescription}>
                Ser referência nacional em inovação tecnológica e humanização da IA, combinando expertise técnica, empatia genuína e visão futurista para liderar a transformação digital ética e sustentável no Brasil.
              </p>
            </div>

            {/* Card Valores */}
            <div className={styles.card}>
              <div className={styles.cardIcon}>⭐</div>
              <h3 className={styles.cardTitle}>Valores</h3>
              <ul className={styles.valuesList}>
                <li><strong>Humanização</strong> — Pessoas no centro da tecnologia</li>
                <li><strong>Excelência Técnica</strong> — Expertise e credibilidade</li>
                <li><strong>Inovação</strong> — Antecipação e disrupção</li>
                <li><strong>Transparência</strong> — Ética e clareza</li>
                <li><strong>Compromisso</strong> — Impacto real e duradouro</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
