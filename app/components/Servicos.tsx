import Link from "next/link";
import styles from "./Servicos.module.css";

const servicos = [
  {
    title: "Consultoria estratégica em IA",
    description:
      "Diagnóstico, priorização de casos de uso, roadmap executivo e plano de adoção com governança.",
    color: "consultoria",
    href: "/servicos/consultoria-estrategica",
    label: "Estratégia",
  },
  {
    title: "Soluções customizadas",
    description:
      "Desenvolvimento de agentes, automações, integrações e produtos digitais ajustados ao seu fluxo real.",
    color: "solucoes",
    href: "/servicos/solucoes-customizadas",
    label: "Produto",
  },
  {
    title: "Plataformas SaaS & APIs",
    description:
      "Arquitetura e integração de recursos de IA em sistemas, portais, APIs e plataformas escaláveis.",
    color: "plataformas",
    href: "/servicos/plataformas-saas",
    label: "Tecnologia",
  },
  {
    title: "Automação de processos",
    description:
      "Redução de tarefas repetitivas com fluxos inteligentes, assistentes virtuais e operação monitorável.",
    color: "automacao",
    href: "/servicos/automacao-processos",
    label: "Eficiência",
  },
  {
    title: "Treinamento & capacitação",
    description:
      "Workshops e programas práticos para líderes e equipes adotarem IA com segurança e autonomia.",
    color: "treinamento",
    href: "/servicos/treinamento-capacitacao",
    label: "Cultura",
  },
  {
    title: "Gestão de tráfego pago",
    description:
      "Planejamento, tracking e otimização de campanhas para transformar mídia em demanda qualificada.",
    color: "trafego",
    href: "/servicos/gestao-trafego-pago",
    label: "Crescimento",
  },
];

export default function Servicos() {
  return (
    <section id="servicos" className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <p className={styles.kicker}>Áreas de atuação</p>
          <h2 className={styles.title}>
            Serviços pensados para sair do discurso e chegar na operação.
          </h2>
          <p className={styles.subtitle}>
            Cada projeto começa pelo problema certo: impacto esperado, dados disponíveis, riscos, governança e capacidade de execução.
          </p>
        </header>

        <div className={styles.grid}>
          {servicos.map((servico) => (
            <article key={servico.href} className={`${styles.card} ${styles[servico.color]}`}>
              <span className={styles.badge}>{servico.label}</span>
              <h3 className={styles.cardTitle}>{servico.title}</h3>
              <p className={styles.cardDescription}>{servico.description}</p>
              <Link href={servico.href} className={styles.cardLink}>
                Saiba mais
                <span className={styles.arrow}>→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
