export default function Hero() {
  return (
    <section
      style={{
        width: '100%',
        maxWidth: '920px',
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
          fontSize: '2.4rem',
          color: '#28445F',
          marginBottom: '20px',
          letterSpacing: '-0.5px',
          lineHeight: '1.2',
          maxWidth: '720px',
        }}
      >
        Transforme IA em impacto real para seu negócio
      </h1>

      {/* Subheadline de valor */}
      <p
        style={{
          fontWeight: 400,
          fontFamily: "'Montserrat', Arial, sans-serif",
          fontSize: '1.18rem',
          color: '#505050',
          marginBottom: '32px',
          maxWidth: '640px',
          lineHeight: '1.5',
        }}
      >
        Consultoria, automação e soluções personalizadas de IA que potencializam pessoas, otimizam processos e geram crescimento sustentável.
      </p>

      {/* Indicador de social proof sutil */}
      <div
        style={{
          fontSize: '0.95rem',
          color: '#6b7280',
          fontFamily: "'Montserrat', Arial, sans-serif",
          opacity: 0.85,
        }}
      >
        Parceiros de PMEs e corporações que buscam transformação com ética e resultados reais.
      </div>
    </section>
  );
}
