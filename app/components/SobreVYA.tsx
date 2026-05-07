import styles from "./SobreVYA.module.css";

const pillars = [
  {
    mark: "01",
    title: "Cuidado",
    text: "Projetos de IA mexem com rotina, dados e decisões. Por isso, a Vya IA conduz cada etapa com clareza e responsabilidade.",
  },
  {
    mark: "02",
    title: "Profundidade técnica",
    text: "A escolha de modelos, ferramentas e integrações parte do problema real, não de modismos ou promessas genéricas.",
  },
  {
    mark: "03",
    title: "Visão estratégica",
    text: "A tecnologia entra como meio para melhorar eficiência, receita, diferenciação e capacidade de decisão.",
  },
];

const reasons = [
  "Diagnóstico antes de implementação",
  "Projetos ajustados ao contexto da empresa",
  "Governança e segurança desde o início",
  "Comunicação executiva, simples e objetiva",
];

export default function SobreVYA() {
  return (
    <section id="sobrevyaia" className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <p className="section-kicker">Sobre a Vya IA</p>
          <h2 className={styles.title}>Uma consultoria para transformar IA em operação.</h2>
          <p className={styles.subtitle}>
            A Vya IA nasceu para ajudar empresas que querem usar inteligência artificial com seriedade: menos improviso, mais método, clareza e resultado mensurável.
          </p>
        </header>

        <div className={styles.storytelling}>
          <article className={styles.storyBlock}>
            <h3 className={styles.storyTitle}>Nossa leitura de mercado</h3>
            <p className={styles.storyText}>
              Muitas empresas já perceberam o potencial da IA, mas ainda encontram dificuldade para transformar interesse em projetos viáveis. Entre ferramentas, dados, riscos e expectativas, falta um caminho seguro para priorizar e executar.
            </p>
            <p className={styles.storyText}>
              A Vya IA atua nessa ponte: traduzimos objetivos de negócio em iniciativas técnicas possíveis, acompanháveis e úteis para a operação.
            </p>
          </article>

          <div className={styles.pillarsGrid}>
            {pillars.map((pillar) => (
              <div key={pillar.title} className={styles.pillarCard}>
                <span className={styles.pillarIcon}>{pillar.mark}</span>
                <h3 className={styles.pillarName}>{pillar.title}</h3>
                <p className={styles.pillarText}>{pillar.text}</p>
              </div>
            ))}
          </div>

          <article className={styles.storyBlock}>
            <h3 className={styles.storyTitle}>Por que escolher a Vya IA?</h3>
            <div className={styles.reasonsGrid}>
              {reasons.map((reason) => (
                <div key={reason} className={styles.reasonCard}>
                  <span className={styles.checkmark}>✓</span>
                  <p>{reason}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
