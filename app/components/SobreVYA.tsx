'use client';

import styles from './SobreVYA.module.css';

export default function SobreVYA() {
  return (
    <section id="sobrevyaia" className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>A Vya IA</h1>
          <p className={styles.subtitle}>
            A história de uma consultoria criada para transformar o jeito como empresas usam inteligência artificial.
          </p>
        </header>

        <div className={styles.storytelling}>
          <article className={styles.storyBlock}>
            <h2 className={styles.storyTitle}>O Contexto</h2>
            <p className={styles.storyText}>
              Antes da Vya IA existir como empresa, já existia uma percepção clara: a inteligência artificial estava ganhando espaço nos negócios, mas a forma como era implementada deixava um rastro de frustração.
            </p>
            <p className={styles.storyText}>
              De um lado, promessas exageradas de <strong>"IA que resolve tudo sozinha"</strong>. Do outro, times confusos, processos engessados e projetos caros que não saíam do papel ou não geravam resultado concreto.
            </p>
            <p className={styles.storyText}>
              Faltava alguém que traduzisse tecnologia em impacto real, com linguagem simples, responsabilidade e foco no que mais importa: <strong>pessoas, processos e contexto de negócio</strong>.
            </p>
          </article>

          <article className={styles.storyBlock}>
            <h2 className={styles.storyTitle}>A Ruptura</h2>
            <p className={styles.storyText}>
              A Vya IA nasce exatamente desse ponto de ruptura: da vontade de unir <strong>alta tecnologia com alta consciência</strong> sobre o impacto que ela causa dentro de uma empresa.
            </p>
            <p className={styles.storyText}>
              Em vez de vender "soluções prontas", a proposta foi construir uma consultoria que <strong>escuta, analisa, questiona e só então desenha</strong> a melhor forma de usar IA em cada realidade. Nem sempre isso significa o projeto mais complexo; quase sempre significa o <strong>projeto certo</strong>.
            </p>
          </article>

          <article className={styles.storyBlock}>
            <h2 className={styles.storyTitle}>O Posicionamento</h2>
            <p className={styles.storyText}>
              A Vya IA surge como <strong>parceira estratégica</strong> para quem entendeu que IA não é um modismo, mas também não é mágica. É ferramenta — poderosa — que precisa ser guiada por visão, método e responsabilidade.
            </p>

            <div className={styles.pillarsGrid}>
              <div className={styles.pillarCard}>
                <span className={styles.pillarIcon}>❤️</span>
                <h3 className={styles.pillarName}>Cuidado</h3>
                <p className={styles.pillarText}>Representa o compromisso em proteger tempo, energia e recursos dos clientes.</p>
              </div>
              <div className={styles.pillarCard}>
                <span className={styles.pillarIcon}>⚙️</span>
                <h3 className={styles.pillarName}>Profundidade Técnica</h3>
                <p className={styles.pillarText}>Garante rigor na escolha de modelos, ferramentas e arquiteturas.</p>
              </div>
              <div className={styles.pillarCard}>
                <span className={styles.pillarIcon}>🚀</span>
                <h3 className={styles.pillarName}>Visão Estratégica</h3>
                <p className={styles.pillarText}>Enxerga oportunidades alguns anos à frente no mercado.</p>
              </div>
            </div>
          </article>

          <article className={styles.storyBlock}>
            <h2 className={styles.storyTitle}>O Mercado Brasileiro</h2>
            <p className={styles.storyText}>
              O mercado brasileiro vive um momento único: milhões de empresas já ouviram falar de IA, mas poucas conseguiram transformar curiosidade em <strong>resultados concretos, repetíveis e escaláveis</strong>.
            </p>
            <p className={styles.storyText}>
              A Vya IA escolheu atuar justamente nessa fronteira: ajudar negócios a sair do discurso para a prática, conectando automação, dados e inteligência artificial a <strong>objetivos claros de receita, eficiência e diferenciação competitiva</strong>.
            </p>

            <div className={styles.servicesGrid}>
              <div className={styles.serviceItem}>
                <span className={styles.serviceIcon}>🎯</span>
                <h4>Impacto de Alto Valor</h4>
                <p>Prioriza projetos que destravam gargalos críticos e liberam tempo de times inteiros.</p>
              </div>
              <div className={styles.serviceItem}>
                <span className={styles.serviceIcon}>🔍</span>
                <h4>Contextualização Profunda</h4>
                <p>Trata cada empresa como um sistema vivo com história, cultura e ambições próprias.</p>
              </div>
              <div className={styles.serviceItem}>
                <span className={styles.serviceIcon}>🛠️</span>
                <h4>Estratégia Antes da Tecnologia</h4>
                <p>A estratégia vem antes da automação, e a automação vem antes da sofisticação extrema.</p>
              </div>
            </div>
          </article>

          <article className={styles.storyBlock}>
            <h2 className={styles.storyTitle}>Por Que Vya IA?</h2>
            <div className={styles.reasonsGrid}>
              <div className={styles.reasonCard}>
                <span className={styles.checkmark}>✓</span>
                <h4>Parceria, Não Fornecimento</h4>
                <p>A Vya IA atua como parceira em todas as fases, não como mera fornecedora de soluções.</p>
              </div>
              <div className={styles.reasonCard}>
                <span className={styles.checkmark}>✓</span>
                <h4>Visão de Longo Prazo</h4>
                <p>Olha para o futuro e posiciona empresas em nichos de alto crescimento com IA.</p>
              </div>
              <div className={styles.reasonCard}>
                <span className={styles.checkmark}>✓</span>
                <h4>Rigor + Responsabilidade</h4>
                <p>Combina domínio técnico profundo com consciência sobre impacto real em pessoas e negócios.</p>
              </div>
              <div className={styles.reasonCard}>
                <span className={styles.checkmark}>✓</span>
                <h4>Mercado Brasileiro</h4>
                <p>Especializada em levar IA do discurso para a prática em empresas brasileiras reais.</p>
              </div>
            </div>
          </article>

          <article className={styles.storyBlock}>
            <div className={styles.closingBlock}>
              <p className={styles.closingText}>
                A Vya IA não nasceu para ser apenas mais uma consultoria de IA. O objetivo é se tornar <strong>referência em projetos que combinam inteligência artificial, ética, impacto real e visão de longo prazo</strong>.
              </p>
              <p className={styles.closingText}>
                A inteligência artificial é o <strong>meio</strong>. O fim é construir <strong>empresas mais fortes, humanas e preparadas para o futuro</strong>.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
