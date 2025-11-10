export default function Hero() {
  return (
    <section
      style={{
        width: '100%',
        maxWidth: '960px',
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
          fontSize: '2.3rem',
          color: '#28445F',
          marginBottom: '18px',
          letterSpacing: '-0.5px',
          lineHeight: '1.22',
          maxWidth: '740px',
        }}
      >
        IA que entende seu contexto e potencializa resultados
      </h1>

      {/* Subheadline diferenciadora */}
      <p
        style={{
          fontWeight: 500,
          fontFamily: "'Montserrat', Arial, sans-serif",
          fontSize: '1.15rem',
          color: '#393f41',
          marginBottom: '24px',
          maxWidth: '680px',
          lineHeight: '1.48',
          opacity: 0.95,
        }}
      >
        Não oferecemos soluções prontas. Construímos parcerias estratégicas para transformar sua operação com automação inteligente, dados aplicados e inovação ética.
      </p>

      {/* Parágrafo de contexto consultivo */}
      <p
        style={{
          fontSize: '1.02rem',
          color: '#6b7280',
          maxWidth: '620px',
          margin: '0 auto',
          lineHeight: '1.6',
          fontFamily: "'Montserrat', Arial, sans-serif",
        }}
      >
        Da consultoria estratégica até a implementação completa — com cuidado, transparência e expertise técnica em cada etapa.
      </p>
    </section>
  );
}
