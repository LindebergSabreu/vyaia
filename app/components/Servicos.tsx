'use client';

import styles from './Servicos.module.css';

// Ícones SVG embutidos
const icons = {
  consultoria: (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.svgIcon}>
      <rect width="64" height="64" rx="12" fill="currentColor" opacity="0.1" />
      <path d="M20 32C20 25.37 25.37 20 32 20C38.63 20 44 25.37 44 32C44 38.63 38.63 44 32 44C25.37 44 20 38.63 20 32Z" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M32 28V36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M28 32H36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="32" cy="16" r="2" fill="currentColor"/>
      <circle cx="48" cy="32" r="2" fill="currentColor"/>
      <circle cx="32" cy="48" r="2" fill="currentColor"/>
      <circle cx="16" cy="32" r="2" fill="currentColor"/>
    </svg>
  ),
  solucoes: (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.svgIcon}>
      <rect width="64" height="64" rx="12" fill="currentColor" opacity="0.1" />
      <path d="M32 16L38.5 22.5V32H25.5V22.5L32 16Z" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M25 32H39V48C39 49.1 38.1 50 37 50H27C25.9 50 25 49.1 25 48V32Z" stroke="currentColor" strokeWidth="2" fill="none"/>
      <rect x="27" y="36" width="10" height="8" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    </svg>
  ),
  plataformas: (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.svgIcon}>
      <rect width="64" height="64" rx="12" fill="currentColor" opacity="0.1" />
      <circle cx="20" cy="20" r="4" fill="currentColor"/>
      <circle cx="32" cy="32" r="4" fill="currentColor"/>
      <circle cx="44" cy="20" r="4" fill="currentColor"/>
      <circle cx="44" cy="44" r="4" fill="currentColor"/>
      <circle cx="20" cy="44" r="4" fill="currentColor"/>
      <path d="M20 24V28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M24 20H28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M40 20V24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M44 24V28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M44 40V36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M24 44H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  automacao: (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.svgIcon}>
      <rect width="64" height="64" rx="12" fill="currentColor" opacity="0.1" />
      <circle cx="20" cy="32" r="3" fill="currentColor"/>
      <circle cx="32" cy="20" r="3" fill="currentColor"/>
      <circle cx="44" cy="32" r="3" fill="currentColor"/>
      <circle cx="32" cy="44" r="3" fill="currentColor"/>
      <path d="M22 31L31 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M33 21L42 31" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M43 33L33 43" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M31 43L21 33" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  treinamento: (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.svgIcon}>
      <rect width="64" height="64" rx="12" fill="currentColor" opacity="0.1" />
      <path d="M32 14L42 20V30C42 38 32 44 32 44C32 44 22 38 22 30V20L32 14Z" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M28 30L30.5 32.5L36 27" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
};

const servicos = [
  {
    id: 1,
    title: 'Consultoria Estratégica em IA',
    description:
      'Diagnóstico completo, planejamento estratégico e orientação personalizada para adoção eficaz de IA, alinhada aos seus objetivos de negócio.',
    icon: icons.consultoria,
    color: 'consultoria',
  },
  {
    id: 2,
    title: 'Soluções Customizadas',
    description:
      'Desenvolvimento de produtos e plataformas específicas para setores estratégicos com foco em impacto real.',
    icon: icons.solucoes,
    color: 'solucoes',
  },
  {
    id: 3,
    title: 'Plataformas SaaS & APIs',
    description:
      'Integração facilitada de capacidades de IA ao seu ecossistema. Plataformas escaláveis, robustas e acessíveis.',
    icon: icons.plataformas,
    color: 'plataformas',
  },
  {
    id: 4,
    title: 'Automação de Processos',
    description:
      'RPA, automação de marketing, chatbots inteligentes e assistentes virtuais. Eficiência operacional mensurável.',
    icon: icons.automacao,
    color: 'automacao',
  },
  {
    id: 5,
    title: 'Treinamento & Capacitação',
    description:
      'Programas educacionais e workshops para capacitar equipes na adoção qualificada e contínua de inteligência artificial.',
    icon: icons.treinamento,
    color: 'treinamento',
  },
];

export default function Servicos() {
  return (
    <section className={styles.section} id="servicos">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Nossas Áreas de Atuação</h2>
          <p className={styles.subtitle}>
            Soluções estratégicas de IA adaptadas às necessidades do seu negócio
          </p>
        </div>

        <div className={styles.grid}>
          {servicos.map((servico) => (
            <div
              key={servico.id}
              className={`${styles.card} ${styles[`card--${servico.color}`]}`}
            >
              <div className={styles.iconContainer}>
                <div className={`${styles.icon} ${styles[`icon--${servico.color}`]}`}>
                  {servico.icon}
                </div>
              </div>

              <h3 className={styles.cardTitle}>{servico.title}</h3>

              <p className={styles.cardDescription}>{servico.description}</p>

              <a href="#contato" className={styles.link}>
                Saiba Mais
                <span className={styles.arrow}>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
