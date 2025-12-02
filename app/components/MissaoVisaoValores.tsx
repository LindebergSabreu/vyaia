'use client';

import styles from './MissaoVisaoValores.module.css';

// Ícones SVG minimalistas - simples e limpos
const icons = {
  heart: (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={styles.svgIcon}>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  ),
  sparkle: (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={styles.svgIcon}>
      <circle cx="12" cy="2" r="1"/>
      <circle cx="12" cy="22" r="1"/>
      <circle cx="2" cy="12" r="1"/>
      <circle cx="22" cy="12" r="1"/>
      <circle cx="19.07" cy="4.93" r="1"/>
      <circle cx="4.93" cy="19.07" r="1"/>
      <circle cx="4.93" cy="4.93" r="1"/>
      <circle cx="19.07" cy="19.07" r="1"/>
    </svg>
  ),
  eye: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg" className={styles.svgIcon}>
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  ),
};

const pillars = [
  {
    id: 'cuidador',
    title: 'Cuidador',
    description:
      'Humanização genuína. Colocamos pessoas no centro da tecnologia, promovendo empatia, suporte autêntico e cuidado contínuo em cada etapa da transformação.',
    icon: icons.heart,
    color: 'heart',
  },
  {
    id: 'especialista',
    title: 'Especialista',
    description:
      'Excelência técnica comprovada. Expertise em IA generativa, algoritmos avançados e soluções inovadoras que geram resultados mensuráveis e transformação real.',
    icon: icons.sparkle,
    color: 'sparkle',
  },
  {
    id: 'visionario',
    title: 'Visionário',
    description:
      'Antecipamos tendências e criamos o futuro. Inovação disruptiva aliada a visão estratégica, posicionando seu negócio como líder da transformação digital.',
    icon: icons.eye,
    color: 'eye',
  },
];

export default function MissaoVisaoValores() {
  return (
    <section className={styles.section} id="nossa-essencia">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Nossa Essência</h2>
          <p className={styles.subtitle}>
            Os três pilares que guiam nossa atuação: cuidado, expertise e visão
          </p>
        </div>

        <div className={styles.grid}>
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className={`${styles.card} ${styles[`card--${pillar.color}`]}`}
            >
              <div className={styles.iconContainer}>
                <div className={`${styles.icon} ${styles[`icon--${pillar.color}`]}`}>
                  {pillar.icon}
                </div>
              </div>

              <h3 className={styles.cardTitle}>{pillar.title}</h3>

              <p className={styles.cardDescription}>{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
