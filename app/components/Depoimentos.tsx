'use client';

export default function Depoimentos() {
  const testimonials = [
    {
      quote: 'A VYA IA revolucionou nossa eficiência operacional com soluções personalizadas. Em 3 meses, aumentamos produtividade em 45%.',
      author: 'André',
      company: 'HealthTech Paulista',
      role: 'CEO & Founder',
      avatar: '🏥',
    },
    {
      quote: 'Finalmente uma IA com olhar humano. Nosso time se sentiu cuidado, não automatizado. Isso fez toda diferença na adoção.',
      author: 'Marina',
      company: 'Grupo Educacional RJ',
      role: 'Diretora de Inovação',
      avatar: '📚',
    },
    {
      quote: 'Não foi só implementação de tecnologia. Foram parcerias reais, consultoria estratégica e suporte genuíno em cada etapa.',
      author: 'Carlos',
      company: 'E-commerce Marketplace',
      role: 'Director de Operações',
      avatar: '🛍️',
    },
  ];

  return (
    <section
      id="depoimentos"
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
      {/* Headline da seção - ATUALIZADO */}
      <div style={{ textAlign: 'center', marginBottom: '72px' }}>
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
          Histórias de impacto real com inteligência artificial humanizada
        </h2>
        <p
          style={{
            fontSize: '1.08rem',
            color: '#505050',
            maxWidth: '680px',
            margin: '0 auto',
            lineHeight: '1.54',
          }}
        >
          Empresas, times e líderes que transformaram seus desafios com a VYA IA.
        </p>
      </div>

      {/* Grid de depoimentos */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '36px',
          width: '100%',
        }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            style={{
              padding: '40px 32px',
              borderRadius: '14px',
              background: '#ffffff',
              border: '1px solid #e5e7eb',
              transition: 'all 0.3s ease',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '360px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 12px 36px #e2e5ea44';
              e.currentTarget.style.borderColor = '#FAA084';
              e.currentTarget.style.transform = 'translateY(-6px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = '#e5e7eb';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {/* Quote marcas */}
            <div
              style={{
                fontSize: '2.8rem',
                color: '#FAA084',
                marginBottom: '16px',
                opacity: 0.4,
              }}
            >
              "
            </div>

            {/* Texto do depoimento */}
            <p
              style={{
                fontSize: '1.02rem',
                color: '#393f41',
                lineHeight: '1.72',
                marginBottom: '28px',
                margin: '0 0 28px 0',
                fontStyle: 'italic',
                fontWeight: 500,
              }}
            >
              {testimonial.quote}
            </p>

            {/* Divisor */}
            <div
              style={{
                width: '100%',
                height: '1px',
                background: 'linear-gradient(90deg, transparent 0%, #e5e7eb 50%, transparent 100%)',
                marginBottom: '24px',
              }}
            />

            {/* Avatar + Info do autor */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #FAA084 0%, #f7956d 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '28px',
                  flexShrink: 0,
                }}
              >
                {testimonial.avatar}
              </div>
              <div style={{ flex: 1 }}>
                <p
                  style={{
                    fontSize: '1.02rem',
                    color: '#28445F',
                    fontWeight: 600,
                    margin: '0',
                  }}
                >
                  {testimonial.author}
                </p>
                <p
                  style={{
                    fontSize: '0.92rem',
                    color: '#6b7280',
                    margin: '4px 0 0 0',
                  }}
                >
                  {testimonial.role}
                </p>
                <p
                  style={{
                    fontSize: '0.86rem',
                    color: '#9ca3af',
                    fontWeight: 500,
                    margin: '2px 0 0 0',
                  }}
                >
                  {testimonial.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA sutil de fechamento */}
      <div
        style={{
          marginTop: '72px',
          textAlign: 'center',
          maxWidth: '700px',
          padding: '0',
        }}
      >
        <p
          style={{
            fontSize: '1.1rem',
            color: '#505050',
            lineHeight: '1.68',
            margin: '0',
          }}
        >
          Quer saber como podemos gerar impacto similar em sua organização? <br />
          <span style={{ color: '#28445F', fontWeight: 600 }}>
            Agende uma conversa com nosso time de especialistas.
          </span>
        </p>
      </div>
    </section>
  );
}
