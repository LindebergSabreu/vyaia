export default function Footer() {
  return (
    <footer style={{
      background: "#72979F",
      color: "#fff",
      padding: "32px 0",
      textAlign: "center",
      fontFamily: "Open Sans, sans-serif"
    }}>
      <div style={{ marginBottom: "16px", fontWeight: 600 }}>
        &copy; {new Date().getFullYear()} VYA IA — IA que cuida e transforma
      </div>
      <div style={{ marginBottom: "8px" }}>
        <a href="mailto:contato@vyaia.com.br" style={{
          color: "#fff",
          textDecoration: "underline",
          margin: "0 12px"
        }}>
          contato@vyaia.com.br
        </a>
        |
        <a href="https://instagram.com/vyaia" target="_blank" rel="noopener noreferrer" style={{
          color: "#fff",
          textDecoration: "underline",
          margin: "0 12px"
        }}>
          Instagram
        </a>
      </div>
      <div>
        <small>
          Desenvolvido por VYA IA. Todos os direitos reservados.
        </small>
      </div>
    </footer>
  );
}
