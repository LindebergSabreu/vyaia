import Image from 'next/image';

export default function Hero() {
  return (
    <section
      style={{
        width: '100%',
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '72px 0 48px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: 'none',
        textAlign: 'center',
      }}
    >
      {/* Logo institucional discreto */}
      <Image
        src="/LogoSemFundo.jpg"  // ou outro arquivo institucional do /public
        alt="Vya IA Logo"
        width={100}
        height={100}
        priority
        style={{
          marginBottom: '18px',
          borderRadius: '18px',
          boxShadow: '0 2px 12px #e2e5ea66',
          opacity: 0.93,
        }}
      />

      {/* Título acolhedor e humano */}
      <h1
        style={{
          fontWeight: 700,
          fontFamily: "'Montserrat', Arial, sans-serif",
          fontSize: '2.3rem',
          color: '#28445F',
          marginBottom: '18px',
          letterSpacing: '0px',
          lineHeight: '1.16',
        }}
      >
        Inteligência que cuida e transforma<br />pessoas, negócios e sociedade
      </h1>

      {/* Texto explicativo consultivo */}
      <p
        style={{
          fontWeight: 400,
          fontFamily: "'Montserrat', Arial, sans-serif",
          fontSize: '1.17rem',
          color: '#393f41',
          marginBottom: '26px',
          maxWidth: '660px',
          opacity: 0.94,
        }}
      >
        Soluções de IA pensadas para gerar impacto positivo, orientar decisões com sensibilidade e apoiar a evolução saudável de pessoas, equipes e clientes. Acreditamos que tecnologia só faz sentido quando transforma vidas e oportunidades de forma ética e sustentável.
      </p>

      {/* Bloco sobre parceria, confiança e propósito */}
      <p
        style={{
          fontSize: '1.04rem',
          color: '#505050',
          maxWidth: '540px',
          margin: '0 auto',
          opacity: 0.84,
        }}
      >
        Não vendemos soluções prontas. Construímos parcerias personalizadas, ouvindo, planejando e preparando o terreno para seu crescimento — com tecnologia, ética e comprometimento em cada etapa.
      </p>
    </section>
  );
}
