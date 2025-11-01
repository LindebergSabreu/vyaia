import Image from 'next/image';

export default function Header() {
  return (
    <header style={{
      width: "100%",
      background: "#f7fafc",
      borderBottom: "2px solid #e2e5ea",
      padding: "28px 0 18px 0",
      position: "sticky",
      top: 0,
      zIndex: 20
    }}>
      <nav style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "22px"
        }}>
          <Image
            src="/Logo.jpg"
            alt="Logo Via IA"
            width={70}
            height={70}
            priority
            style={{ background: "#fff", borderRadius: "16px" }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 800,
              color: "#72979F",
              fontSize: "2.2rem",
              letterSpacing: "1.1px",
              lineHeight: "105%"
            }}>
              Via IA
            </span>
            <span style={{
              fontFamily: "Open Sans, sans-serif",
              color: "#222",
              fontWeight: 600,
              fontSize: "1.02rem",
              marginTop: "-2px"
            }}>
              IA que cuida e transforma
            </span>
          </div>
        </div>
        <ul style={{
          display: "flex",
          alignItems: "center",
          gap: "28px",
          listStyle: "none",
          margin: 0,
          padding: 0
        }}>
          <li><a href="#servicos" style={{ color: "#444", textDecoration: "none", fontWeight: 700 }}>Soluções</a></li>
          <li><a href="#valores" style={{ color: "#444", textDecoration: "none", fontWeight: 700 }}>Valores</a></li>
          <li><a href="#depoimentos" style={{ color: "#444", textDecoration: "none", fontWeight: 700 }}>Impacto</a></li>
          <li>
            <a href="mailto:contato@viaia.com.br" style={{
              color: "#FAA084", fontWeight: 800, textDecoration: "none",
              border: "1.2px solid #faa084", borderRadius: "22px",
              padding: "6px 24px 6px 24px", marginLeft: "10px"
            }}>
              Contato
            </a>
          </li>
          <li>
            <a href="https://instagram.com/viaia" target="_blank" rel="noopener noreferrer"
               title="Instagram Via IA">
              <img src="/instagram.svg" alt="Instagram" width={29} height={29}
                   style={{ verticalAlign: "middle" }} />
            </a>
          </li>
          {/* Adicione outros ícones de redes sociais aqui */}
        </ul>
      </nav>
    </header>
  );
}
