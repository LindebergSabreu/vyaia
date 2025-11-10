export default function Hero() {
  return (
    <section
      style={{
        width: '100%',
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '88px 24px 64px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        background: 'none',
      }}
    >
      {/* Headline principal */}
      <h1
        style={{
          fontWeight: 700,
          fontFamily: "'Montserrat', Arial, sans-serif",
          fontSize: '2.35rem',
          color: '#28445F',
          marginBottom: '20px',
          letterSpacing: '-0.6px',
          lineHeight: '1.2',
          maxWidth: '780px',
        }}
      >
        Inteligência artificial que cuida, orienta e transforma
      </h1>

      {/* Subheadline institucional */}
      <p
        style={{
          fontWeight: 400,
          fontFamily: "'Montserrat', Arial, sans-serif",
          fontSize: '1.14rem',
          color: '#505050',
          marginBottom: '38px',
          maxWidth: '720px',
          lineHeight: '1.52',
          opacity: 0.94,
        }}
      >
        Combinamos consultoria estratégica, automação inteligente e soluções personalizadas para empresas que buscam crescimento sustentável com tecnologia ética e impacto real.
      </p>

      {/* Triplo valor: áreas de impacto */}
      <div
        style={{
          display: 'flex',
          gap: '32px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          maxWidth: '860px',
          marginTop: '12px',
        }}
      >
        <div style={{ flex: '1 1 220px', textAlign: 'center' }}>
          <p
            style={{
              fontSize: '0.98rem',
              fontFamily: "'Montserrat', Arial, sans-serif",
              color: '#28445F',
              fontWeight: 600,
              marginBottom: '6px',
            }}
          >
            Humanização
          </p>
          <p
            style={{
              fontSize: '0.92rem',
              color: '#6b7280',
              lineHeight: '1.5',
            }}
          >
            Tecnologia que amplifica capacidades humanas
          </p>
        </div>

        <div style={{ flex: '1 1 220px', textAlign: 'center' }}>
          <p
            style={{
              fontSize: '0.98rem',
              fontFamily: "'Montserrat', Arial, sans-serif",
              color: '#28445F',
              fontWeight: 600,
              marginBottom: '6px',
            }}
          >
            Expertise Técnica
          </p>
          <p
            style={{
              fontSize: '0.92rem',
              color: '#6b7280',
              lineHeight: '1.5',
            }}
          >
            Soluções fundamentadas em dados e inovação
          </p>
        </div>

        <div style={{ flex: '1 1 220px', textAlign: 'center' }}>
          <p
            style={{
              fontSize: '0.98rem',
              fontFamily: "'Montserrat', Arial, sans-serif",
              color: '#28445F',
              fontWeight: 600,
              marginBottom: '6px',
            }}
          >
            Visão de Futuro
          </p>
          <p
            style={{
              fontSize: '0.92rem',
              color: '#6b7280',
              lineHeight: '1.5',
            }}
          >
            Antecipamos tendências com ética e propósito
          </p>
        </div>
      </div>
    </section>
  );
}
