'use client';

import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export default function ConsultoriaEstrategica() {
  return (
    <>
      <Header />
      <main>
        <section style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '40px' }}>
            <h1 style={{ color: '#135B82', fontSize: '2.5rem', marginBottom: '20px' }}>
              Consultoria Estratégica em IA
            </h1>
            <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.6' }}>
              Diagnóstico completo, planejamento estratégico e orientação personalizada para adoção eficaz de IA, 
              alinhada aos seus objetivos de negócio.
            </p>
          </div>

          <div style={{ backgroundColor: '#f9f9f9', padding: '30px', borderRadius: '8px', marginBottom: '40px' }}>
            <h2 style={{ color: '#135B82', marginBottom: '20px' }}>O que incluímos</h2>
            <ul style={{ lineHeight: '2', color: '#555' }}>
              <li>✓ Análise de maturidade em IA da sua organização</li>
              <li>✓ Identificação de oportunidades estratégicas</li>
              <li>✓ Roadmap de implementação personalizado</li>
              <li>✓ Recomendações de tecnologias e ferramentas</li>
              <li>✓ Estratégia de mudança e capacitação</li>
              <li>✓ Acompanhamento e iteração contínua</li>
            </ul>
          </div>

          <div style={{ backgroundColor: '#E8F4F8', padding: '30px', borderRadius: '8px' }}>
            <h2 style={{ color: '#135B82', marginBottom: '20px' }}>Casos de uso</h2>
            <p style={{ color: '#555', lineHeight: '1.6' }}>
              Desde otimização de processos até criação de novos modelos de negócio impulsionados por IA. 
              Trabalhamos com empresas de todos os tamanhos para transformar suas operações.
            </p>
          </div>

          <div style={{ marginTop: '40px', textAlign: 'center' }}>
            <a href="/#contato" style={{
              backgroundColor: '#135B82',
              color: 'white',
              padding: '15px 40px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '1.1rem',
              display: 'inline-block'
            }}>
              Solicitar Consultoria
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
