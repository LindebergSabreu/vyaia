export default function Hero() {
  return (
    <section
      style={{
        width: '100%',
        maxWidth: '900px',
        margin: '0 auto',
        padding: '60px 0 48px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        background: 'none',
      }}
    >
      <h1
        style={{
          fontWeight: 700,
          fontFamily: "'Montserrat', Arial, sans-serif",
          fontSize: '2.1rem',
          color: '#28445F',
          marginBottom: '18px',
          letterSpacing: '0',
          lineHeight: '1.18',
        }}
      >
        Inteligência que cuida e transforma
      </h1>

      <p
        style={{
          fontWeight: 400,
          fontFamily: "'Montserrat', Arial, sans-serif",
          fontSize: '1.12rem',
          color: '#393f41',
          marginBottom: '0px',
          maxWidth: '640px',
          opacity: 0.95,
        }}
      >
        Soluções de IA, automação e dados que ampliam possibilidades para pessoas, negócios e sociedade.
      </p>
    </section>
  );
}
