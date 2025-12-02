'use client';

import styles from './SobreVYA.module.css';

interface Card {
  title: string;
  content: string;
}

const cards: Card[] = [
  {
    title: 'Missão',
    content:
      'Oferecer soluções de IA que potencializam capacidades humanas gerando transformação real.',
  },
  {
    title: 'Visão',
    content:
      'Ser referência nacional em inovação e humanização da IA.',
  },
  {
    title: 'Valores',
    content:
      'Humanização • Excelência Técnica • Inovação • Transparência',
  },
];

export default function SobreVYA() {
  return (
    <section className={styles.section} id="sobre">
      <div className={styles.container}>
        {/* Heading */}
        <div className={styles.header}>
          <h1 className={styles.title}>Sobre a VYA IA</h1>
        </div>

        {/* Intro Text */}
        <div className={styles.intro}>
          <p className={styles.introText}>
            A VYA IA nasceu para transformar negócios e vidas através da inteligência artificial de alto impacto. 
            Nossa missão é <span className={styles.highlight}>humanizar a tecnologia</span>, colocando pessoas 
            no centro de cada solução.
          </p>
        </div>

        {/* Cards Grid */}
        <div className={styles.cardsGrid}>
          {cards.map((card, index) => (
            <div key={index} className={styles.card}>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardContent}>{card.content}</p>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className={styles.bottomText}>
          <p>
            Inspirados pelos arquétipos Cuidador, Especialista e Visionário, atuamos como parceiros 
            orientando cada cliente em sua jornada digital.
          </p>
        </div>
      </div>
    </section>
  );
}
