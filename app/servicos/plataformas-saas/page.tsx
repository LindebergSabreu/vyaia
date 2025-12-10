'use client';

import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export default function PlataformasSaaS() {
  return (
    <>
      <Header />
      <main>
        <section style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '40px' }}>
            <h1 style={{ color: '#4FC3DC', fontSize: '2.5rem', marginBottom: '20px' }}>
              Plataformas SaaS & APIs
            </h1>
            <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.6' }}>
              Integração facilitada de capacidades de IA ao seu ecossistema. Plataformas escaláveis, robustas e acessíveis.
            </p>
          </div>

          <div style={{ backgroundColor: '#f9f9f9', padding: '30px', borderRadius: '8px', marginBottom: '40px' }}>
            <h2 style={{ color: '#4FC3DC', marginBottom: '20px' }}>Benefícios de nossas plataformas</h2>
            <ul style={{ lineHeight: '2', color: '#555' }}>
              <li>✓ Infraestrutura em nuvem altamente escalável</li>
              <li>✓ APIs simples e bem documentadas</li>
              <li>✓ Segurança de nível empresarial</li>
              <li>✓ SLA garantido e suporte 24/7</li>
              <li>✓ Dashboard de analytics e monitoramento</li>
              <li>✓ Preço baseado em uso - pague apenas pelo que usar</li>
            </ul>
          </div>

          <div style={{ backgroundColor: '#E0F7FA', padding: '30px', borderRadius: '8px' }}>
            <h2 style={{ color: '#4FC3DC', marginBottom: '20px' }}>Capacidades disponíveis</h2>
            <p style={{ color: '#555', lineHeight: '1.6' }}>
              Visão computacional, processamento de linguagem natural, análise preditiva, recomendações inteligentes e muito mais. 
              Escolha os módulos que você precisa e adicione novos conforme seu negócio cresce.
            </p>
          </div>

          <div style={{ marginTop: '40px', textAlign: 'center' }}>
            <a href="#contato" style={{
              backgroundColor: '#4FC3DC',
              color: 'white',
              padding: '15px 40px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '1.1rem',
              display: 'inline-block'
            }}>
              Experimentar Plataforma
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
