export default function Servicos() {
  return (
    <section id="servicos" style={{
      padding: "70px 0 50px 0",
      background: "#fff",
      textAlign: "center"
    }}>
      <h2 style={{
        fontFamily: "'Playfair Display', serif",
        fontWeight: 700,
        color: "#72979F",
        fontSize: "2rem"
      }}>Soluções</h2>
      <ul style={{
        padding: "0",
        margin: "36px auto 0 auto",
        maxWidth: "740px",
        display: "flex",
        gap: "35px",
        flexWrap: "wrap",
        justifyContent: "center",
        listStyle: "none"
      }}>
        <li>
          <strong style={{ color: "#3a4a54" }}>Diagnóstico Inteligente</strong><br />
          Uso de IA para análise preditiva em ambientes de saúde e empresas.
        </li>
        <li>
          <strong style={{ color: "#3a4a54" }}>Automação de Rotinas</strong><br />
          Automatize tarefas operacionais para focar no que realmente importa.
        </li>
        <li>
          <strong style={{ color: "#3a4a54" }}>Personalização</strong><br />
          Soluções adaptadas às necessidades do seu negócio ou área.
        </li>
      </ul>
    </section>
  );
}
