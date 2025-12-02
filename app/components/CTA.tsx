'use client';

import Link from 'next/link';
import styles from './CTA.module.css';

export default function CTA() {
  return (
    <section className={styles.section} role="region" aria-label="Chamada para ação">
      <div className="container">
        <div className={styles.content}>
          <h2>Pronto para Transformação?</h2>
          <p>Vamos conversar sobre como podemos potencializar seus negócios com inteligência artificial.</p>
          <Link href="#contato" className="btn btn--secondary btn--large">
            Agende uma Consulta
          </Link>
        </div>
      </div>
    </section>
  );
}