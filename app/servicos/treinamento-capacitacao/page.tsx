import Link from "next/link";

export default function TreinamentoCapacitacao() {
  const styles = {
    section: { padding: "60px 20px", maxWidth: "1200px", margin: "0 auto" },
    titleBlock: { marginBottom: "40px" },
    h1: { color: "#4DBCF1", fontSize: "2.5rem", marginBottom: "20px" },
    p: { fontSize: "1.1rem", color: "#666", lineHeight: 1.6 as const },

    cardLight: {
      backgroundColor: "#f9f9f9",
      padding: "30px",
      borderRadius: "8px",
      marginBottom: "40px",
    },
    cardBlue: {
      backgroundColor: "#E0F2FE",
      padding: "30px",
      borderRadius: "8px",
    },
    h2: { color: "#4DBCF1", marginBottom: "20px" },
    ul: { lineHeight: "2", color: "#555" },

    ctaWrap: { marginTop: "40px", textAlign: "center" as const },
    cta: {
      backgroundColor: "#4DBCF1",
      color: "white",
      padding: "15px 40px",
      borderRadius: "8px",
      textDecoration: "none",
      fontSize: "1.1rem",
      display: "inline-block",
      fontWeight: 700,
    },
  };

  return (
    <main>
      <section style={styles.section}>
        <div style={styles.titleBlock}>
          <h1 style={styles.h1}>Treinamento & Capacitação</h1>
          <p style={styles.p}>
            Programas educacionais e workshops para capacitar suas equipes na
            adoção qualificada e contínua de IA.
          </p>
        </div>

        <div style={styles.cardLight}>
          <h2 style={styles.h2}>Nossos programas</h2>
          <ul style={styles.ul}>
            <li>✓ Workshops executivos de IA para liderança</li>
            <li>✓ Treinamento técnico para desenvolvedores</li>
            <li>✓ Cursos de IA aplicada por departamento</li>
            <li>✓ Certificações reconhecidas no mercado</li>
            <li>✓ Mentoria contínua pós-treinamento</li>
            <li>✓ Desenvolvimento de cultura de inovação</li>
          </ul>
        </div>

        <div style={styles.cardBlue}>
          <h2 style={styles.h2}>Formatos disponíveis</h2>
          <p style={{ color: "#555", lineHeight: 1.6 }}>
            Presencial, online síncrono, assíncrono ou blended. Customizamos o
            formato e cronograma conforme a disponibilidade e necessidades do
            seu time.
          </p>
        </div>

        <div style={styles.ctaWrap}>
          <Link href="/#contato" style={styles.cta}>
            Solicitar Treinamento
          </Link>
        </div>
      </section>
    </main>
  );
}
