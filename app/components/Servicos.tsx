'use client';

export default function Servicos() {
  return (
    <section
      style={{
        width: '100%',
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '88px 24px 64px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: '#f9fafb',
      }}
    >
      {/* Headline da seção */}
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h2
          style={{
            fontWeight: 700,
            fontFamily: "'Montserrat', Arial, sans-serif",
            fontSize: '2rem',
            color: '#28445F',
            marginBottom: '18px',
            letterSpacing: '-0.5px',
            margin: '0 0 18px 0',
          }}
        >
          Soluções estratégicas de IA para seu negócio
        </h2>
        <p
          style={{
            fontSize: '1.08rem',
            color: '#505050',
            maxWidth: '620px',
            margin: '0 auto',
            lineHeight: '1.54',
          }}
        >
          Consultoria personalizada, automação inteligente e tecnologia de impacto adaptadas aos seus desafios únicos.
        </p>
      </div>

      {/* Grid de 3 soluções */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '36px',
          width: '100%',
        }}
      >
        {/* Solução 1: Diagnóstico e Estratégia */}
        <div
          style={{
            padding: '36px 28px',
            borderRadius: '12px',
            background: '#ffffff',
            border: '1px solid #e5e7eb',
            transition: 'box-shadow 0.3s, border-color 0.3s',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 8px 28px #e2e5ea44';
            e.currentTarget.style.borderColor = '#FAA084';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.borderColor = '#e5e7eb';
          }}
        >
          <h3
            style={{
              fontWeight: 700,
              fontFamily: "'Montserrat', Arial, sans-serif",
              fontSize: '1.24rem',
              color: '#28445F',
              margin: '0 0 12px 0',
            }}
          >
            Diagnóstico e Estratégia
          </h3>
          <p
            style={{
              fontSize: '0.99rem',
              color: '#6b7280',
              lineHeight: '1.6',
              marginBottom: '16px',
              minHeight: '60px',
              margin: '0 0 16px 0',
            }}
          >
            Análise profunda do seu contexto operacional, identificação de oportunidades e planejamento de implementação de IA com base em dados reais.
          </p>
          <div
            style={{
              fontSize: '0.9rem',
              color: '#9ca3af',
              fontStyle: 'italic',
            }}
          >
            Ideal para: Empresas em transição digital, líderes em transformação
          </div>
        </div>

        {/* Solução 2: Automação Inteligente */}
        <div
          style={{
            padding: '36px 28px',
            borderRadius: '12px',
            background: '#ffffff',
            border: '1px solid #e5e7eb',
            transition: 'box-shadow 0.3s, border-color 0.3s',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 8px 28px #e2e5ea44';
            e.currentTarget.style.borderColor = '#FAA084';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.borderColor = '#e5e7eb';
          }}
        >
          <h3
            style={{
              fontWeight: 700,
              fontFamily: "'Montserrat', Arial, sans-serif",
              fontSize: '1.24rem',
              color: '#28445F',
              margin: '0 0 12px 0',
            }}
          >
            Automação Inteligente
          </h3>
          <p
            style={{
              fontSize: '0.99rem',
              color: '#6b7280',
              lineHeight: '1.6',
              marginBottom: '16px',
              minHeight: '60px',
              margin: '0 0 16px 0',
            }}
          >
            Implementação de workflows inteligentes, processamento de dados automatizado e sistemas que liberam seu time para atividades de maior valor estratégico.
          </p>
          <div
            style={{
              fontSize: '0.9rem',
              color: '#9ca3af',
              fontStyle: 'italic',
            }}
          >
            Ideal para: Agências, operações, back-offices de qualquer porte
          </div>
        </div>

        {/* Solução 3: Soluções Personalizadas */}
        <div
          style={{
            padding: '36px 28px',
            borderRadius: '12px',
            background: '#ffffff',
            border: '1px solid #e5e7eb',
            transition: 'box-shadow 0.3s, border-color 0.3s',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 8px 28px #e2e5ea44';
            e.currentTarget.style.borderColor = '#FAA084';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.borderColor = '#e5e7eb';
          }}
        >
          <h3
            style={{
              fontWeight: 700,
              fontFamily: "'Montserrat', Arial, sans-serif",
              fontSize: '1.24rem',
              color: '#28445F',
              margin: '0 0 12px 0',
            }}
          >
            Soluções Personalizadas
          </h3>
          <p
            style={{
              fontSize: '0.99rem',
              color: '#6b7280',
              lineHeight: '1.6',
              marginBottom: '16px',
              minHeight: '60px',
              margin: '0 0 16px 0',
            }}
          >
            Desenvolvimento de soluções sob medida para problemas específicos do seu negócio — desde análise preditiva até modelos de IA aplicados ao seu setor.
          </p>
          <div
            style={{
              fontSize: '0.9rem',
              color: '#9ca3af',
              fontStyle: 'italic',
            }}
          >
            Ideal para: Segmentos especializados, desafios complexos, inovação
          </div>
        </div>
      </div>

      {/* Parágrafo institucional de fechamento */}
      <div
        style={{
          marginTop: '60px',
          textAlign: 'center',
          maxWidth: '720px',
          padding: '32px 24px',
          borderRadius: '12px',
          background: '#ffffff',
          borderLeft: '4px solid #FAA084',
        }}
      >
        <p
          style={{
            fontSize: '1.02rem',
            color: '#393f41',
            lineHeight: '1.62',
            margin: '0',
            fontWeight: 500,
          }}
        >
          Cada solução é pensada com cuidado, implementada com expertise técnica e acompanhada do princípio ao resultado. Consultoria não é apenas entregar — é transformar capacidades e gerar impacto real.
        </p>
      </div>
    </section>
  );
}
