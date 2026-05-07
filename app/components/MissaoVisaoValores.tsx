import styles from "./MissaoVisaoValores.module.css";

const missionItems = [
  {
    icon: "M",
    title: "Missão",
    description:
      "Aplicar inteligência artificial de forma responsável para melhorar processos, apoiar decisões e gerar impacto real em empresas brasileiras.",
  },
  {
    icon: "V",
    title: "Visão",
    description:
      "Ser referência em projetos de IA que combinam profundidade técnica, governança, clareza executiva e cuidado com pessoas.",
  },
];

const values = [
  ["Humanização", "pessoas no centro da transformação"],
  ["Excelência técnica", "decisões baseadas em método e dados"],
  ["Transparência", "expectativas claras do diagnóstico à entrega"],
  ["Responsabilidade", "segurança, privacidade e governança desde o início"],
  ["Impacto real", "prioridade para o que melhora a operação"],
];

export default function MissaoVisaoValores() {
  return (
    <section id="missao-visao-valores" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Missão, visão e valores</h2>
          <p className={styles.subtitle}>
            A tecnologia é importante. Mas o que sustenta um bom projeto de IA é o equilíbrio entre estratégia, execução e responsabilidade.
          </p>
          <div className={styles.cardsGrid}>
            {missionItems.map((item) => (
              <div key={item.title} className={styles.card}>
                <div className={styles.cardIcon}>{item.icon}</div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.description}</p>
              </div>
            ))}
            <div className={styles.card}>
              <div className={styles.cardIcon}>+</div>
              <h3 className={styles.cardTitle}>Valores</h3>
              <ul className={styles.valuesList}>
                {values.map(([title, description]) => (
                  <li key={title}>
                    <strong>{title}</strong> - {description}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
