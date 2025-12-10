'use client';

import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export default function AutomacaoProcessos() {
  return (
    <>
      <Header />
      <main>
        <section style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '40px' }}>
            <h1 style={{ color: '#7C6FD8', fontSize: '2.5rem', marginBottom: '20px' }}>
              Automação de Processos
            </h1>
            <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.6' }}>
              RPA, automação de marketing, chatbots inteligentes e assistentes virtuais. Eficiência operacional mensurável.
            </p>
          </div>

          <div style={{ backgroundColor: '#f9f9f9', padding: '30px', borderRadius: '8px', marginBottom: '40px' }}>
            <h2 style={{ color: '#7C6FD8', marginBottom: '20px' }}>Tecnologias que implementamos</h2>
            <ul style={{ lineHeight: '2', color: '#555' }}>
              <li>✓ Robotic Process Automation (RPA)</li>
              <li>✓ Chatbots e assistentes virtuais com IA</li>
              <li>✓ Marketing automation inteligente</li>
              <li>✓ OCR e processamento de documentos</li>
              <li>✓ Workflows automatizados com lógica de negócio</li>
              <li>✓ Monitoramento e otimização contínua</li>
            </ul>
          </div>

          <div style={{ backgroundColor: '#F3E5FF', padding: '30px', borderRadius: '8px' }}>
            <h2 style={{ color: '#7C6FD8', marginBottom: '20px' }}>Resultados esperados</h2>
            <p style={{ color: '#555', lineHeight: '1.6' }}>
              Redução de custos operacionais de 30-60%, aumento de produtividade, menos erros humanos e 
              equipes focadas em atividades estratégicas de maior valor.
            </p>
          </div>

          <div style={{ marginTop: '40px', textAlign: 'center' }}>
            <a href="/#contato" style={{
              backgroundColor: '#7C6FD8',
              color: 'white',
              padding: '15px 40px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '1.1rem',
              display: 'inline-block'
            }}>
              Automatizar Processo
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
