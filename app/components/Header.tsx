import Image from 'next/image';

export default function Header() {
  return (
    <header style={{
      width: "100%",
      background: "#fff",
      borderBottom: "1px solid #e2e5ea",
      padding: "16px 0"
    }}>
      <nav style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        fontFamily: "Montserrat, sans-serif"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <Image
            src="/Logo.jpg"
            alt="Logo VYA IA"
            width={48}
            height={48}
            style={{ borderRadius: "8px" }}
          />
          <span style={{
            fontWeight: 700,
            color: "#72979F",
            fontSize: "1.35rem",
            letterSpacing: "0.5px"
          }}>
            VYA IA
          </span>
        </div>
        <ul style={{
          display: "flex",
          gap: "32px",
          listStyle: "none",
          margin: 0,
          padding: 0
        }}>
          <li><a href="#servicos" style={{ color: "#222", textDecoration: "none", fontWeight: 600 }}>Serviços</a></li>
          <li><a href="#valores" style={{ color: "#222", textDecoration: "none", fontWeight: 600 }}>Valores</a></li>
          <li><a href="#depoimentos" style={{ color: "#222", textDecoration: "none", fontWeight: 600 }}>Impacto</a></li>
          <li><a href="#contato" style={{
            color: "#FAA084", fontWeight: 700, textDecoration: "none",
            border: "1px solid #faa084", borderRadius: "20px", padding: "4px 22px", marginLeft: "12px"
          }}>Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}
