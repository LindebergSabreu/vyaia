import Image from 'next/image';

export default function Header() {
  return (
    <header
      style={{
        width: "100%",
        background: "#f7fafc",
        borderBottom: "2px solid #e2e5ea",
        padding: "0",
        position: "sticky",
        top: 0,
        zIndex: 30,
        minHeight: "140px",
      }}
    >
      <nav
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          gap: "54px",
          justifyContent: "space-between",
          flexWrap: "wrap",
          height: "100px"
        }}
      >
        {/* Logo à esquerda */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: "160px",
            minWidth: "170px",
            justifyContent: "center",
          }}
        >
          <Image
            src="/LogoSemFundo.png"
            alt="Logo Vya IA"
            width={160}
            height={160}
            priority
            style={{
              background: "none",
              borderRadius: "18px",
              display: "block",
            }}
          />
        </div>
        {/* Slogan institucional centralizado */}
        <section
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              color: "#464646",
              fontSize: "2.1rem",
              letterSpacing: "0.02em",
              lineHeight: 1.13,
              margin: 0,
              textAlign: "center",
              maxWidth: "660px",
            }}
          >
            Inteligência que cuida<br />e transforma!
          </h1>
        </section>
        {/* Menu institucional à direita */}
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            gap: "32px",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          <li><a href="#topo">Início</a></li>
          <li><a href="#servicos">Soluções</a></li>
          <li><a href="#valores">Valores</a></li>
          <li><a href="#depoimentos">Depoimentos</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}
