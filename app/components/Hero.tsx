export default function Hero() {
  return (
    <section id="topo" style={{
      width: "100%",
      minHeight: "320px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "#f7fafc",
      padding: "40px 0 32px 0"
    }}>
      <h2 style={{
        fontFamily: "'Playfair Display', serif",
        fontWeight: 700,
        fontSize: "2.3rem",
        color: "#72979F",
        marginBottom: "16px",
        marginTop: 0,
        textAlign: "center"
      }}>
        Bem-vindo à Vya IA
      </h2>
      <p style={{
        maxWidth: "600px",
        color: "#3a3a3a",
        fontSize: "1.25rem",
        textAlign: "center",
        margin: 0
      }}>
        Soluções inteligentes para transformar e cuidar do seu negócio, saúde, bem-estar e muito mais.
      </p>
    </section>
  );
}
