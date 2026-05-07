import Link from "next/link";
import styles from "./CTA.module.css";

export default function CTA() {
  return (
    <section className={styles.section} role="region" aria-label="Chamada para ação">
      <div className={styles.container}>
        <div>
          <p className={styles.kicker}>Próximo passo</p>
          <h2 className={styles.title}>Leve uma oportunidade real de IA para a mesa.</h2>
        </div>
        <p className={styles.subtitle}>
          Em uma conversa inicial, avaliamos cenário, prioridade e o melhor caminho para começar sem desperdício de tempo ou orçamento.
        </p>
        <Link href="/#contato" className={styles.button}>
          Agendar conversa
        </Link>
      </div>
    </section>
  );
}
