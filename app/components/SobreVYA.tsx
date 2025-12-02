'use client';

import styles from './SobreVYA.module.css';

export default function SobreVYA() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Hero da Seção */}
        <div className={styles.header}>
          <h2 className={styles.title}>Quem Somos</h2>
          <p className={styles.subtitle}>
            Uma empresa nascida para humanizar a inteligência artificial e transformar negócios
          </p>
        </div>

        {/* Storytelling Principal */}
        <div className={styles.storytelling}>
          <div className={styles.storyBlock}>
            <h3 className={styles.storyTitle}>A VYA IA nasceu de um propósito</h3>
            <p className={styles.storyText}>
              Reconhecemos que a inteligência artificial é <strong>uma das ferramentas mais poderosas</strong> do século XXI.
              Mas também surgiram empresas e equipes frustradas com implementações frias, tecnologias desconexas da realidade
              e promessas vazias que não geram impacto real.
            </p>
            <p className={styles.storyText}>
              Decidimos ser diferente. Nascemos para <strong>colocar as pessoas no centro da tecnologia</strong>,
              entendendo que a melhor IA é aquela que potencializa capacidades humanas, não as substitui.
            </p>
          </div>

          <div className={styles.storyBlock}>
            <h3 className={styles.storyTitle}>Três pilares guiam nossa atuação</h3>

            <div className={styles.pillarsGrid}>
              <div className={styles.pillarCard}>
                <div className={styles.pillarIcon}>💜</div>
                <h4 className={styles.pillarName}>Cuidador</h4>
                <p className={styles.pillarText}>
                  Colocamos cuidado genuíno em cada solução. Entendemos seus desafios, oferecemos suporte
                  autêntico e caminhamos ao seu lado em toda a jornada de transformação.
                </p>
              </div>

              <div className={styles.pillarCard}>
                <div className={styles.pillarIcon}>⭐</div>
                <h4 className={styles.pillarName}>Especialista</h4>
                <p className={styles.pillarText}>
                  Nossa equipe é formada por especialistas em IA generativa, algoritmos avançados e
                  transformação digital. Expertise comprovada e resultados mensuráveis.
                </p>
              </div>

              <div className={styles.pillarCard}>
                <div className={styles.pillarIcon}>✨</div>
                <h4 className={styles.pillarName}>Visionário</h4>
                <p className={styles.pillarText}>
                  Não seguimos tendências, criamos o futuro. Antecipamos oportunidades e posicionamos
                  seu negócio como líder da transformação digital.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.storyBlock}>
            <h3 className={styles.storyTitle}>Como trabalhamos</h3>
            <p className={styles.storyText}>
              A VYA IA combina <strong>expertise técnica profunda</strong> com <strong>empatia genuína</strong>
              para entregar soluções que fazem diferença real. Nossas áreas de atuação incluem:
            </p>

            <div className={styles.servicesGrid}>
              <div className={styles.serviceItem}>
                <div className={styles.serviceIcon}>🎯</div>
                <h4>Consultoria Estratégica</h4>
                <p>Diagnóstico, planejamento e orientação para adoção eficaz de IA em seu negócio.</p>
              </div>

              <div className={styles.serviceItem}>
                <div className={styles.serviceIcon}>🔧</div>
                <h4>Soluções Customizadas</h4>
                <p>Produtos sob medida para setores como saúde, finanças, varejo e logística.</p>
              </div>

              <div className={styles.serviceItem}>
                <div className={styles.serviceIcon}>☁️</div>
                <h4>Plataformas SaaS & APIs</h4>
                <p>Tecnologia escalável e integrável que amplia suas capacidades de IA.</p>
              </div>

              <div className={styles.serviceItem}>
                <div className={styles.serviceIcon}>⚙️</div>
                <h4>Automação de Processos</h4>
                <p>Otimização de workflows, RPA e atendimento automatizado com foco em experiência.</p>
              </div>

              <div className={styles.serviceItem}>
                <div className={styles.serviceIcon}>📚</div>
                <h4>Treinamento & Capacitação</h4>
                <p>Programas educacionais para garantir que sua equipe domine a tecnologia.</p>
              </div>

              <div className={styles.serviceItem}>
                <div className={styles.serviceIcon}>🚀</div>
                <h4>Inovação Aplicada</h4>
                <p>Pesquisa em IA multimodal, agentes autônomos e soluções emergentes.</p>
              </div>
            </div>
          </div>

          <div className={styles.storyBlock}>
            <h3 className={styles.storyTitle}>Por que escolher a VYA IA</h3>

            <div className={styles.reasonsGrid}>
              <div className={styles.reasonCard}>
                <div className={styles.checkmark}>✓</div>
                <h4>Humanização Autêntica</h4>
                <p>Não vendemos hype. Entregamos IA que respeita, amplifica e cuida das pessoas.</p>
              </div>

              <div className={styles.reasonCard}>
                <div className={styles.checkmark}>✓</div>
                <h4>Expertise Comprovada</h4>
                <p>Equipe com histórico de implementações bem-sucedidas e casos reais de impacto.</p>
              </div>

              <div className={styles.reasonCard}>
                <div className={styles.checkmark}>✓</div>
                <h4>Transparência Total</h4>
                <p>Clareza sobre capacidades, limitações e ética no uso da inteligência artificial.</p>
              </div>

              <div className={styles.reasonCard}>
                <div className={styles.checkmark}>✓</div>
                <h4>Parceria Duradoura</h4>
                <p>Não somos fornecedores pontuais. Atuamos como parceiros na sua jornada.</p>
              </div>

              <div className={styles.reasonCard}>
                <div className={styles.checkmark}>✓</div>
                <h4>Impacto Mensurável</h4>
                <p>Cada solução vem acompanhada de métricas claras e ROI definido.</p>
              </div>

              <div className={styles.reasonCard}>
                <div className={styles.checkmark}>✓</div>
                <h4>Visão Futura</h4>
                <p>Posicionamos seu negócio não apenas para hoje, mas para liderar o amanhã.</p>
              </div>
            </div>
          </div>

          <div className={styles.closingBlock}>
            <h3 className={styles.storyTitle}>Nosso Compromisso</h3>
            <p className={styles.closingText}>
              A VYA IA existe para transformar empresas através da inteligência artificial de alto impacto,
              sempre com cuidado genuíno, expertise técnica e visão estratégica.
            </p>
            <p className={styles.closingText}>
              <strong>Construímos o futuro da IA com você, não para você.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
