"use client";

import Link from "next/link";
import styles from "./Hero.module.css";

const proofPoints = [
  "Diagnóstico antes da ferramenta",
  "Automação com governança",
  "Projetos sob medida para o negócio",
];

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.kicker}>Consultoria em inteligência artificial aplicada</p>
          <h1 id="hero-title" className={styles.title}>
            IA com método, segurança e foco em resultado real.
          </h1>
          <p className={styles.subtitle}>
            A Vya IA ajuda empresas a transformar processos, decisões e produtos com inteligência artificial, sempre conectando tecnologia ao contexto do negócio.
          </p>

          <div className={styles.actions}>
            <Link href="/#contato" className={styles.primaryAction}>
              Falar com especialista
            </Link>
            <Link href="/#servicos" className={styles.secondaryAction}>
              Ver serviços
            </Link>
          </div>

          <dl className={styles.metrics} aria-label="Diferenciais da Vya IA">
            <div>
              <dt>01</dt>
              <dd>Estratégia</dd>
            </div>
            <div>
              <dt>02</dt>
              <dd>Implementação</dd>
            </div>
            <div>
              <dt>03</dt>
              <dd>Evolução contínua</dd>
            </div>
          </dl>
        </div>

        <aside className={styles.visual} aria-label="Modelo de atuação da Vya IA">
          <div className={styles.visualIntro}>
            <span>Diagnóstico executivo</span>
            <strong>Plano de adoção de IA</strong>
          </div>
          <div className={styles.panelHeader}>
            <span>Plano de adoção</span>
            <strong>IA responsável</strong>
          </div>
          <ul className={styles.checklist}>
            {proofPoints.map((item) => (
              <li key={item}>
                <span aria-hidden="true">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <div className={styles.pipeline}>
            <span>Mapear</span>
            <span>Priorizar</span>
            <span>Construir</span>
            <span>Medir</span>
          </div>
        </aside>
      </div>
    </section>
  );
}
