'use client';

import Link from 'next/link';
import styles from './Servicos.module.css';

// Ícones SVG embutidos
const icons = {
  consultoria: (
    <span className={styles.iconWrapper}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="4" y="4" width="24" height="24" rx="8" fill="#F3E8FF" />
        <path
          d="M16 10C13.7909 10 12 11.7909 12 14C12 14.7956 12.2325 15.5384 12.6423 16.1576L11.2929 17.507C11.1054 17.6945 11 17.9489 11 18.2143V19.5C11 19.7761 11.2239 20 11.5 20H12.7857C13.0511 20 13.3055 19.8946 13.493 19.7071L14.8424 18.3577C15.4616 18.7675 16.2044 19 17 19C19.2091 19 21 17.2091 21 15C21 12.7909 19.2091 11 17 11C16.2044 11 15.4616 11.2325 14.8424 11.6423L14.1213 10.9212C13.9482 10.7481 13.6997 10.65 13.4429 10.65C13.1861 10.65 12.9376 10.7481 12.7645 10.9212L11.7071 11.9786C11.3166 12.3691 11.3166 13.0023 11.7071 13.3928C12.0976 13.7833 12.7308 13.7833 13.1213 13.3928L13.5 13.0141C13.8208 13.2621 14.1916 13.45 14.5962 13.5614C14.2079 12.8962 14 12.1687 14 11.4286C14 10.6396 14.6396 10 15.4286 10H16Z"
          fill="#7C3AED"
        />
      </svg>
    </span>
  ),
  solucoes: (
    <span className={styles.iconWrapper}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="4" y="4" width="24" height="24" rx="8" fill="#FFF4E5" />
        <path
          d="M16 10L11 12.5V19.5L16 22L21 19.5V12.5L16 10ZM15.25 12.118L13 13.25L15.25 14.382V12.118ZM16.75 12.118V14.382L19 13.25L16.75 12.118ZM12.5 14.732L14.75 15.864V18.382L12.5 17.25V14.732ZM19.5 14.732V17.25L17.25 18.382V15.864L19.5 14.732ZM16 16.618L17.982 17.618L16 18.618L14.018 17.618L16 16.618Z"
          fill="#F59E0B"
        />
      </svg>
    </span>
  ),
  plataformas: (
    <span className={styles.iconWrapper}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="4" y="4" width="24" height="24" rx="8" fill="#E0F7FA" />
        <path
          d="M11 12C11 10.8954 11.8954 10 13 10H19C20.1046 10 21 10.8954 21 12V20C21 21.1046 20.1046 22 19 22H13C11.8954 22 11 21.1046 11 20V12ZM14 12C13.4477 12 13 12.4477 13 13V19C13 19.5523 13.4477 20 14 20H18C18.5523 20 19 19.5523 19 19V13C19 12.4477 18.5523 12 18 12H14Z"
          fill="#06B6D4"
        />
      </svg>
    </span>
  ),
  automacao: (
    <span className={styles.iconWrapper}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="4" y="4" width="24" height="24" rx="8" fill="#F3E8FF" />
        <path
          d="M16 10C13.7909 10 12 11.7909 12 14V18C12 20.2091 13.7909 22 16 22C18.2091 22 20 20.2091 20 18V14C20 11.7909 18.2091 10 16 10ZM14 14C14 12.8954 14.8954 12 16 12C17.1046 12 18 12.8954 18 14V18C18 19.1046 17.1046 20 16 20C14.8954 20 14 19.1046 14 18V14Z"
          fill="#7C3AED"
        />
      </svg>
    </span>
  ),
  treinamento: (
    <span className={styles.iconWrapper}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="4" y="4" width="24" height="24" rx="8" fill="#E0F2FE" />
        <path
          d="M16 10L11 12.5L16 15L21 12.5L16 10ZM13 14.118V16.5C13 17.8807 14.1193 19 15.5 19H16.5C17.8807 19 19 17.8807 19 16.5V14.118L16 15.618L13 14.118Z"
          fill="#0EA5E9"
        />
      </svg>
    </span>
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
    href: '/servicos/consultoria-estrategica',
  },
  {
    id: 2,
    title: 'Soluções Customizadas',
    description:
      'Desenvolvimento de produtos e plataformas específicas para setores estratégicos com foco em impacto real.',
    icon: icons.solucoes,
    color: 'solucoes',
    href: '/servicos/solucoes-customizadas',
  },
  {
    id: 3,
    title: 'Plataformas SaaS & APIs',
    description:
      'Integração facilitada de capacidades de IA ao seu ecossistema. Plataformas escaláveis, robustas e acessíveis.',
    icon: icons.plataformas,
    color: 'plataformas',
    href: '/servicos/plataformas-saas',
  },
  {
    id: 4,
    title: 'Automação de Processos',
    description:
      'RPA, automação de marketing, chatbots inteligentes e assistentes virtuais. Eficiência operacional mensurável.',
    icon: icons.automacao,
    color: 'automacao',
    href: '/servicos/automacao-processos',
  },
  {
    id: 5,
    title: 'Treinamento & Capacitação',
    description:
      'Programas educacionais e workshops para capacitar equipes na adoção qualificada e contínua de inteligência artificial.',
    icon: icons.treinamento,
    color: 'treinamento',
    href: '/servicos/treinamento-capacitacao',
  },
];

export default function Servicos() {
  return (
    <section id="servicos" className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <p className={styles.kicker}>Nossas Áreas de Atuação</p>
          <h2 className={styles.title}>
            Soluções estratégicas de IA adaptadas às necessidades do seu negócio
          </h2>
        </header>

        <div className={styles.grid}>
          {servicos.map((servico) => (
            <article
              key={servico.id}
              className={`${styles.card} ${styles[servico.color]}`}
            >
              <div className={styles.icon}>{servico.icon}</div>

              <h3 className={styles.cardTitle}>{servico.title}</h3>

              <p className={styles.cardDescription}>{servico.description}</p>

              <Link href={servico.href} className={styles.cardLink}>
                <span>Saiba Mais</span>
                <span className={styles.arrow}>→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
