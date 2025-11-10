export default function Depoimentos() {
  return (
    <section id="depoimentos" style={{
      background: "#fff",
      padding: "70px 0",
      textAlign: "center"
    }}>
      <h2 style={{
        fontFamily: "'Playfair Display', serif",
        fontWeight: 700,
        color: "#72979F",
        fontSize: "2rem"
      }}>Depoimentos</h2>
      <ul style={{
        maxWidth: "740px",
        margin: "38px auto 0 auto",
        display: "flex",
        gap: "38px",
        flexWrap: "wrap",
        justifyContent: "center",
        listStyle: "none",
        padding: 0
      }}>
        <li>
          <blockquote>"A Vya IA revolucionou nossa eficiência operacional com soluções personalizadas."</blockquote>
          <div style={{ color: "#72979F", fontWeight: 600 }}>André - HealthTech Paulista</div>
        </li>
        <li>
          <blockquote>"Finalmente uma IA com olhar humano. Nosso time se sentiu cuidado."</blockquote>
          <div style={{ color: "#72979F", fontWeight: 600 }}>Marina - Grupo Educacional RJ</div>
        </li>
      </ul>
    </section>
  );
}
