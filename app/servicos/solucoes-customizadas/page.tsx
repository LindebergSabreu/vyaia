'use client';

import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export default function SolucoesCustomizadas() {
  return (
    <>
      <Header />
      <main>
        <section style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '40px' }}>
            <h1 style={{ color: '#F5A623', fontSize: '2.5rem', marginBottom: '20px' }}>
              Soluções Customizadas
            </h1>
            <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.6' }}>
              Desenvolvimento de produtos e plataformas específicas para setores estratégicos com foco em impacto real.
            </p>
          </div>

          <div style={{ backgroundColor: '#f9f9f9', padding: '30px', borderRadius: '8px', marginBottom: '40px' }}>
            <h2 style={{ color: '#F5A623', marginBottom: '20px' }}>Nossas soluções incluem</h2>
            <ul style={{ lineHeight: '2', color: '#555' }}>
              <li>✓ Análise de requisitos e especificação técnica</li>
              <li>✓ Desenvolvimento ágil de MVP até produto completo</li>
              <li>✓ Integração com seus sistemas existentes</li>
              <li>✓ Testes rigorosos e garantia de qualidade</li>
              <li>✓ Documentação completa e suporte pós-lançamento</li>
              <li>✓ Manutenção e iteração contínua baseada em feedback</li>
            </ul>
          </div>

          <div style={{ backgroundColor: '#FFF8E7', padding: '30px', borderRadius: '8px' }}>
            <h2 style={{ color: '#F5A623', marginBottom: '20px' }}>Setores atendidos</h2>
            <p style={{ color: '#555', lineHeight: '1.6' }}>
              Saúde, Financeiro, Educação, Manufatura, Varejo e muito mais. Cada solução é adaptada às 
              necessidades específicas do seu segmento.
            </p>
          </div>

          <div style={{ marginTop: '40px', textAlign: 'center' }}>
            <a href="/#contato" style={{
              backgroundColor: '#F5A623',
              color: 'white',
              padding: '15px 40px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '1.1rem',
              display: 'inline-block'
            }}>
              Desenvolver Solução
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
