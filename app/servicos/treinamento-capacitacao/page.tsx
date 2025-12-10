'use client';

import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export default function TreinamentoCapacitacao() {
  return (
    <>
      <Header />
      <main>
        <section style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '40px' }}>
            <h1 style={{ color: '#4DBCF1', fontSize: '2.5rem', marginBottom: '20px' }}>
              Treinamento & Capacitação
            </h1>
            <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.6' }}>
              Programas educacionais e workshops para capacitar suas equipes na adoção qualificada e contínua de IA.
            </p>
          </div>

          <div style={{ backgroundColor: '#f9f9f9', padding: '30px', borderRadius: '8px', marginBottom: '40px' }}>
            <h2 style={{ color: '#4DBCF1', marginBottom: '20px' }}>Nossos programas</h2>
            <ul style={{ lineHeight: '2', color: '#555' }}>
              <li>✓ Workshops executivos de IA para liderança</li>
              <li>✓ Treinamento técnico para desenvolvedores</li>
              <li>✓ Cursos de IA aplicada por departamento</li>
              <li>✓ Certificações reconhecidas no mercado</li>
              <li>✓ Mentoria contínua pós-treinamento</li>
              <li>✓ Desenvolvimento de cultura de inovação</li>
            </ul>
          </div>

          <div style={{ backgroundColor: '#E0F2FE', padding: '30px', borderRadius: '8px' }}>
            <h2 style={{ color: '#4DBCF1', marginBottom: '20px' }}>Formatos disponíveis</h2>
            <p style={{ color: '#555', lineHeight: '1.6' }}>
              Presencial, online síncrono, assíncrono ou blended. Customizamos o formato e cronograma 
              conforme a disponibilidade e necessidades do seu time.
            </p>
          </div>

          <div style={{ marginTop: '40px', textAlign: 'center' }}>
            <a href="/#contato" style={{
              backgroundColor: '#4DBCF1',
              color: 'white',
              padding: '15px 40px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '1.1rem',
              display: 'inline-block'
            }}>
              Solicitar Treinamento
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
