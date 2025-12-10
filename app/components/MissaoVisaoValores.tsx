import React from 'react';
import styles from './MissaoVisaoValores.module.css';

export default function MissaoVisaoValores() {
  const essenceItems = [
    {
      icon: '💜',
      title: 'Cuidador',
      description: 'Humanização genuína. Colocamos pessoas no centro da tecnologia, promovendo empatia, suporte autêntico e cuidado contínuo em cada etapa da transformação.'
    },
    {
      icon: '⭐',
      title: 'Especialista',
      description: 'Excelência técnica comprovada. Expertise em IA generativa, algoritmos avançados e soluções inovadoras que geram resultados mensuráveis e transformação real.'
    },
    {
      icon: '👁️',
      title: 'Visionário',
      description: 'Antecipamos tendências e criamos o futuro. Inovação disruptiva aliada a visão estratégica, posicionando seu negócio como líder da transformação digital.'
    }
  ];

  const missionItems = [
    {
      icon: '🎯',
      title: 'Missão',
      description: 'Oferecer soluções de inteligência artificial de alto impacto que humanizam a tecnologia, potencializam capacidades humanas e geram transformação real nos negócios e na vida das pessoas.'
    },
    {
      icon: '⭐',
      title: 'Visão',
      description: 'Ser referência nacional em inovação tecnológica e humanização da IA, combinando expertise técnica, empatia genuína e visão futurista para liderar a transformação digital ética e sustentável no Brasil.'
    }
  ];

  const valuesItems = [
    {
      icon: '🎯',
      title: 'Missão',
      description: 'Oferecer soluções de inteligência artificial de alto impacto que humanizam a tecnologia, potencializam capacidades humanas e geram transformação real nos negócios e na vida das pessoas.'
    },
    {
      icon: '⭐',
      title: 'Visão',
      description: 'Ser referência nacional em inovação tecnológica e humanização da IA, combinando expertise técnica, empatia genuína e visão futurista para liderar a transformação digital ética e sustentável no Brasil.'
    },
    {
      icon: '❤️',
      title: 'Valores',
      description: ''
    }
  ];

  return (
    <section id="missao-visao-valores" className={styles.section}>
    <div className={styles.container}>
      <div className={styles.content}>
        {/* Seção Missão, Visão e Valores */}
        <section className={styles.section}>
          <h2 className={styles.title}>Missão, Visão e Valores</h2>
          <div className={styles.cardsGrid}>
            {missionItems.map((item, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.cardIcon}>{item.icon}</div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.description}</p>
              </div>
            ))}
            <div className={styles.card}>
              <div className={styles.cardIcon}>❤️</div>
              <h3 className={styles.cardTitle}>Valores</h3>
              <ul className={styles.valuesList}>
                <li><strong>Humanização</strong> — Pessoas no centro da tecnologia</li>
                <li><strong>Excelência Técnica</strong> — Expertise e credibilidade</li>
                <li><strong>Inovação</strong> — Antecipação e disrupção</li>
                <li><strong>Transparência</strong> — Ética e clareza</li>
                <li><strong>Compromisso com o Cliente</strong> — Personalização e impacto real</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
    </section>
  );
}
