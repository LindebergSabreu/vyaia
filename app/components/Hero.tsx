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
      {/* Logo institucional centralizado */}
      <Image
        src="/LogoSemFundo.jpg"
        alt="Vya IA Logo"
        width={120}
        height={120}
        priority
        style={{
          marginBottom: '22px',
          borderRadius: '18px',
          boxShadow: '0 2px 18px #e2e5ea88',
        }}
      />

      {/* Título forte institucional */}
      <h1
        style={{
          fontWeight: 700,
          fontFamily: "'Montserrat', Arial, sans-serif",
          fontSize: '2.6rem',
          color: '#28445F',
          marginBottom: '22px',
          letterSpacing: '-1px',
          lineHeight: '1.14',
        }}
      >
        Automação e Inteligência Artificial <br /> para transformar negócios
      </h1>

      {/* Frase de impacto contextualizada */}
      <h2
        style={{
          fontWeight: 400,
          fontFamily: "'Montserrat', Arial, sans-serif",
          fontSize: '1.37rem',
          color: '#393f41',
          marginBottom: '28px',
          maxWidth: '620px',
          opacity: '0.93',
        }}
      >
        Soluções escaláveis e personalizadas que aceleram a produtividade, aprimoram decisões e humanizam processos na sua empresa.
      </h2>

      {/* Bloco de valores posicionais VYA IA */}
      <p
        style={{
          fontSize: '1.08rem',
          color: '#505050',
          maxWidth: '520px',
          margin: '0 auto 38px auto',
        }}
      >
        Tecnologia, confiança e automação inteligente a serviço do seu crescimento sustentável. Somos o parceiro que cuida, transforma e gera impacto com IA de alto valor para negócios de qualquer porte e setor.
      </p>

      {/* Chamada para ação */}
      <a
        href="#contato"
        style={{
          display: 'inline-block',
          background: '#FAA084',
          color: '#fff',
          padding: '18px 38px',
          fontFamily: "'Montserrat', Arial, sans-serif",
          fontWeight: 700,
          borderRadius: '33px',
          fontSize: '1.18rem',
          letterSpacing: '0.02em',
          boxShadow: '0 2px 22px #ecd6c9a0',
          transition: 'background 0.18s',
          textDecoration: 'none',
          marginTop: '8px',
        }}
      >
        Comece agora
      </a>
    </section>
  );
}
