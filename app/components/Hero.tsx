'use client';

export default function Hero() {
  const handleScroll = () => {
    const element = document.getElementById('sobre');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      style={{
        background: 'linear-gradient(135deg, #5b8ac5 0%, #4a7ba7 100%)',
        padding: 'clamp(4rem, 12vw, 8rem) 1.5rem',
        textAlign: 'center',
        color: 'white',
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Decorative elements */}
      <div
        style={{
          position: 'absolute',
          top: '-100px',
          right: '-100px',
          width: '300px',
          height: '300px',
          background: 'rgba(255, 255, 255, 0.08)',
          borderRadius: '50%',
          pointerEvents: 'none'
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-50px',
          left: '-50px',
          width: '200px',
          height: '200px',
          background: 'rgba(255, 155, 102, 0.1)',
          borderRadius: '50%',
          pointerEvents: 'none'
        }}
      />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '950px' }}>
        {/* Micro-copy / Badge */}
        <div
          style={{
            display: 'inline-block',
            padding: '8px 16px',
            background: 'rgba(255, 255, 255, 0.15)',
            borderRadius: '24px',
            fontSize: '13px',
            fontWeight: '600',
            marginBottom: '1.5rem',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            fontFamily: '"Open Sans", sans-serif',
            letterSpacing: '0.5px'
          }}
        >
          ✨ IA humanizada de alto impacto
        </div>

        {/* Main Headline */}
        <h1
          style={{
            fontSize: 'clamp(32px, 8vw, 60px)',
            fontWeight: '700',
            margin: '0 0 1.5rem 0',
            lineHeight: '1.15',
            letterSpacing: '-0.8px',
            fontFamily: '"Montserrat", sans-serif'
          }}
        >
          A Vya IA cuida dos detalhes para que você cuide do que realmente importa
        </h1>

        {/* Subheadline */}
        <p
          style={{
            fontSize: 'clamp(15px, 2.2vw, 19px)',
            margin: '0 0 0.5rem 0',
            lineHeight: '1.8',
            opacity: 0.98,
            fontFamily: '"Open Sans", sans-serif',
            fontWeight: '400'
          }}
        >
          Consultoria estratégica em inteligência artificial humanizada,
        </p>
        <p
          style={{
            fontSize: 'clamp(15px, 2.2vw, 19px)',
            margin: '0 0 2.5rem 0',
            lineHeight: '1.8',
            opacity: 0.98,
            fontFamily: '"Open Sans", sans-serif',
            fontWeight: '400'
          }}
        >
          com <strong style={{ color: '#ffd700' }}>expertise técnica</strong> e <strong style={{ color: '#ffd700' }}>impacto real</strong>.
        </p>

        {/* Value propositions - three column */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            maxWidth: '800px',
            margin: '2.5rem auto'
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '28px', marginBottom: '8px' }}>🎯</div>
            <p style={{ fontSize: '14px', margin: 0, fontWeight: '500', opacity: 0.95 }}>
              IA Generativa & Automação
            </p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '28px', marginBottom: '8px' }}>💡</div>
            <p style={{ fontSize: '14px', margin: 0, fontWeight: '500', opacity: 0.95 }}>
              Estratégia de Alto Impacto
            </p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '28px', marginBottom: '8px' }}>🚀</div>
            <p style={{ fontSize: '14px', margin: 0, fontWeight: '500', opacity: 0.95 }}>
              Transformação Digital
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={handleScroll}
          style={{
            padding: '16px 40px',
            fontSize: '16px',
            fontWeight: '600',
            color: 'white',
            background: 'linear-gradient(135deg, #a855f7 0%, #9333ea 100%)',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            fontFamily: '"Montserrat", sans-serif',
            boxShadow: '0 6px 20px rgba(168, 85, 247, 0.4)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            marginTop: '1rem'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(168, 85, 247, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(168, 85, 247, 0.4)';
          }}
        >
          Descubra Como Impactamos →
        </button>
      </div>
    </section>
  );
}
