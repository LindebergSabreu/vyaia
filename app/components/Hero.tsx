'use client';

import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} role="region" aria-label="Seção introdutória principal">
      <div className={styles.heroOverlay}></div>

      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          A VYA IA cuida dos detalhes para que você cuide do que realmente importa
        </h1>

        <p className={styles.heroSubtitle}>
          Consultoria estratégica em inteligência artificial humanizada, com expertise técnica e impacto real
        </p>

        <Link href="#contato" className="btn btn--primary btn--large">
          <span>Descubra Como Impactamos</span>
          <span className="arrow">→</span>
        </Link>
      </div>
    </section>
  );
}