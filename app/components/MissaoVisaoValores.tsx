export default function MissaoVisaoValores() {
  return (
    <section id="valores" style={{
      background: "#f7fafc",
      padding: "60px 0",
      textAlign: "center"
    }}>
      <h2 style={{
        fontFamily: "'Playfair Display', serif",
        fontWeight: 700,
        color: "#72979F",
        fontSize: "2rem"
      }}>Valores</h2>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "38px",
        marginTop: "36px"
      }}>
        <div>
          <h4 style={{ margin: 0, color: "#72979F", fontWeight: 700 }}>Missão</h4>
          <p>Promover transformação positiva entregando soluções de IA que cuidam de pessoas, empresas e comunidades.</p>
        </div>
        <div>
          <h4 style={{ margin: 0, color: "#72979F", fontWeight: 700 }}>Visão</h4>
          <p>Ser referência nacional em inteligência emocional, social e operacional com tecnologia acessível.</p>
        </div>
        <div>
          <h4 style={{ margin: 0, color: "#72979F", fontWeight: 700 }}>Valores</h4>
          <p>Ética, empatia, inovação útil e compromisso com impacto real.</p>
        </div>
      </div>
    </section>
  );
}
