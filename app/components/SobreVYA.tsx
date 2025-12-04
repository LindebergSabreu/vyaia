'use client';

import styles from './SobreVYA.module.css';

export default function SobreVYA() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Hero da Seção */}
        <div className={styles.header}>
          <h2 className={styles.title}>Quem é a Vya IA</h2>
          <p className={styles.subtitle}>
            A história de uma consultoria criada para transformar o jeito como empresas usam inteligência artificial.
          </p>
        </div>

        <div className={styles.storytelling}>
          {/* Capítulo 1 – O cenário que incomodava */}
          <div className={styles.storyBlock}>
            <h3 className={styles.storyTitle}>Tudo começou com um incômodo</h3>
            <p className={styles.storyText}>
              Antes da Vya IA existir como empresa, já existia uma percepção clara: a inteligência artificial estava
              ganhando espaço nos negócios, mas a forma como era implementada deixava um rastro de frustração.
            </p>
            <p className={styles.storyText}>
              De um lado, promessas exageradas de “IA que resolve tudo sozinha”. Do outro, times confusos, processos
              engessados e projetos caros que não saíam do papel ou não geravam resultado concreto.
            </p>
            <p className={styles.storyText}>
              Faltava alguém que traduzisse tecnologia em impacto real, com linguagem simples, responsabilidade
              e foco no que mais importa: pessoas, processos e contexto de negócio.
            </p>
          </div>

          {/* Capítulo 2 – A decisão de criar a Vya IA */}
          <div className={styles.storyBlock}>
            <h3 className={styles.storyTitle}>Por que a Vya IA nasceu</h3>
            <p className={styles.storyText}>
              A Vya IA nasce exatamente desse ponto de ruptura: da vontade de unir alta tecnologia com alta
              consciência sobre o impacto que ela causa dentro de uma empresa.
            </p>
            <p className={styles.storyText}>
              Em vez de vender “soluções prontas”, a proposta foi construir uma consultoria que escuta, analisa,
              questiona e só então desenha a melhor forma de usar IA em cada realidade. Nem sempre isso significa
              o projeto mais complexo; quase sempre significa o projeto certo.
            </p>
            <p className={styles.storyText}>
              A Vya IA surge como parceira estratégica para quem entendeu que IA não é um modismo, mas também
              não é mágica. É ferramenta — poderosa — que precisa ser guiada por visão, método e responsabilidade.
            </p>
          </div>

          {/* Capítulo 3 – A alma da marca: os arquétipos */}
          <div className={styles.storyBlock}>
            <h3 className={styles.storyTitle}>A personalidade da Vya IA</h3>
            <p className={styles.storyText}>
              A identidade da Vya IA combina três forças: o cuidado de quem olha para pessoas, a profundidade técnica
              de quem domina o que faz e a visão de quem enxerga alguns anos à frente.
            </p>

            <div className={styles.pillarsGrid}>
              <div className={styles.pillarCard}>
                <div className={styles.pillarIcon}>💜</div>
                <h4 className={styles.pillarName}>O Cuidador</h4>
                <p className={styles.pillarText}>
                  Representa o compromisso em proteger tempo, energia e recursos dos clientes. Cada recomendação
                  leva em conta o impacto sobre equipes, cultura e experiência do usuário final.
                </p>
              </div>

              <div className={styles.pillarCard}>
                <div className={styles.pillarIcon}>⭐</div>
                <h4 className={styles.pillarName}>O Especialista</h4>
                <p className={styles.pillarText}>
                  Garante profundidade técnica, rigor na escolha de modelos, ferramentas e arquiteturas, além de
                  uma visão crítica sobre riscos, limitações e trade-offs de cada solução.
                </p>
              </div>

              <div className={styles.pillarCard}>
                <div className={styles.pillarIcon}>✨</div>
                <h4 className={styles.pillarName}>O Visionário</h4>
                <p className={styles.pillarText}>
                  Puxa a conversa para o futuro. Ajuda empresas a se posicionarem em nichos de alto crescimento,
                  explorando IA generativa, agentes e automações que abrem novas frentes de negócio.
                </p>
              </div>
            </div>
          </div>

          {/* Capítulo 4 – O contexto brasileiro e o foco em alto impacto */}
          <div className={styles.storyBlock}>
            <h3 className={styles.storyTitle}>Por que o Brasil precisa da Vya IA</h3>
            <p className={styles.storyText}>
              O mercado brasileiro vive um momento único: milhões de empresas já ouviram falar de IA,
              mas poucas conseguiram transformar curiosidade em resultados concretos, repetíveis e escaláveis.
            </p>
            <p className={styles.storyText}>
              A Vya IA escolheu atuar justamente nessa fronteira: ajudar negócios a sair do discurso para a prática,
              conectando automação, dados e inteligência artificial a objetivos claros de receita, eficiência
              e diferenciação competitiva.
            </p>
            <p className={styles.storyText}>
              Isso significa priorizar projetos de alto impacto: aqueles que destravam gargalos críticos,
              liberam tempo de times inteiros e abrem espaço para novos modelos de negócio.
            </p>
          </div>

          {/* Capítulo 5 – Como a Vya IA enxerga cada cliente */}
          <div className={styles.storyBlock}>
            <h3 className={styles.storyTitle}>Como olhamos para cada projeto</h3>
            <p className={styles.storyText}>
              Cada empresa que chega até a Vya IA não é tratada como “mais um cliente”, mas como um sistema vivo:
              com história, cultura, limitações, talentos e ambições próprias.
            </p>
            <p className={styles.storyText}>
              Por isso, antes de falar em ferramentas ou modelos, a conversa sempre começa entendendo onde a IA
              faz sentido — e onde não faz. Em muitos casos, o primeiro passo é organizar processos,
              treinar times e criar uma base mínima para que a tecnologia não vire mais uma camada de ruído.
            </p>
            <p className={styles.storyText}>
              A estratégia vem antes da automação. A automação vem antes da sofisticação extrema. E, em todas as fases,
              a Vya IA atua como parceira, não como mera fornecedora.
            </p>
          </div>

          {/* Capítulo 6 – O que a Vya IA quer construir daqui pra frente */}
          <div className={styles.storyBlock}>
            <h3 className={styles.storyTitle}>O futuro que queremos construir</h3>
            <p className={styles.storyText}>
              A Vya IA não nasceu para ser apenas mais uma consultoria de IA. O objetivo é se tornar referência
              em projetos que combinam inteligência artificial, ética, impacto real e visão de longo prazo.
            </p>
            <p className={styles.storyText}>
              Isso significa desenvolver um ecossistema: clientes mais maduros, times mais preparados,
              produtos mais inteligentes e um mercado mais consciente sobre o uso responsável da tecnologia.
            </p>
            <p className={styles.storyText}>
              Em outras palavras, a Vya IA quer ser lembrada não só pelos projetos que entrega,
              mas pelo padrão de qualidade e consciência que ajuda a estabelecer no mercado brasileiro de IA.
            </p>
          </div>

          {/* Fechamento */}
          <div className={styles.closingBlock}>
            <h3 className={styles.storyTitle}>Em essência, quem somos</h3>
            <p className={styles.closingText}>
              A Vya IA é a síntese de três compromissos: cuidar de pessoas e negócios, dominar profundamente a tecnologia
              e enxergar oportunidades onde a maioria ainda vê apenas risco ou modismo.
            </p>
            <p className={styles.closingText}>
              A inteligência artificial é o meio. O fim é construir empresas mais fortes, humanas e preparadas
              para o futuro.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
