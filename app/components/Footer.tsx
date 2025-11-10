export default function Footer() {
  return (
    <footer id="contato" style={{
      background: "#f7fafc",
      padding: "42px 0 22px 0",
      textAlign: "center",
      borderTop: "2px solid #e2e5ea"
    }}>
      <h2 style={{
        fontFamily: "'Playfair Display', serif",
        color: "#72979F",
        fontWeight: 700,
        fontSize: "1.4rem",
        margin: 0
      }}>
        Contato
      </h2>
      <p style={{ color: "#3a474b", marginTop: "13px", marginBottom: 0 }}>
        contato@vyaia.com.br<br />
        (11) 99999-9999
      </p>
      <p style={{ color: "#a6b4bc", marginTop: "18px", fontSize: "0.95rem" }}>
        © {new Date().getFullYear()} Vya IA – IA que cuida e transforma.
      </p>
    </footer>
  );
}
