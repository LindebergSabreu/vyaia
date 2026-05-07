import Link from "next/link";

export default function GestaoTrafegoPago() {
  const styles = {
    section: { padding: "60px 20px", maxWidth: "1200px", margin: "0 auto" },
    titleBlock: { marginBottom: "40px" },
    h1: { color: "#4DBCF1", fontSize: "2.5rem", marginBottom: "20px" },
    p: { fontSize: "1.1rem", color: "#666", lineHeight: 1.7 as const },

    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: "18px",
      marginTop: "24px",
      marginBottom: "40px",
    },

    card: {
      backgroundColor: "#f9f9f9",
      padding: "22px",
      borderRadius: "10px",
      border: "1px solid #eee",
    },
    cardTitle: { color: "#2b2b2b", marginBottom: "10px", fontSize: "1.05rem" },
    cardText: { color: "#555", lineHeight: 1.6 },

    cardBlue: {
      backgroundColor: "#E0F2FE",
      padding: "28px",
      borderRadius: "10px",
      marginTop: "10px",
    },
    h2: { color: "#4DBCF1", marginBottom: "16px" },
    ul: { lineHeight: "2", color: "#555", margin: 0, paddingLeft: "18px" },

    ctaWrap: { marginTop: "40px", textAlign: "center" as const },
    cta: {
      backgroundColor: "#4DBCF1",
      color: "white",
      padding: "15px 40px",
      borderRadius: "8px",
      textDecoration: "none",
      fontSize: "1.1rem",
      display: "inline-block",
      fontWeight: 800,
    },
    micro: { marginTop: "14px", fontSize: "0.95rem", color: "#6b7280" },
  };

  return (
    <main>
      <section style={styles.section}>
        <div style={styles.titleBlock}>
          <h1 style={styles.h1}>Gestão de Tráfego Pago</h1>
          <p style={styles.p}>
            Planejamento, execução e otimização contínua de campanhas para gerar
            demanda real — com rastreio correto, criativos adequados e decisões
            baseadas em dados. Sem “hype”: foco em retorno, previsibilidade e
            consistência.
          </p>
        </div>

        <div style={styles.grid}>
          <div style={styles.card}>
            <div style={styles.cardTitle}>🎯 Estratégia e Funil</div>
            <p style={styles.cardText}>
              Definição de público, oferta, mensagem, estrutura do funil e metas
              claras (leads, vendas, agendamentos ou tráfego qualificado).
            </p>
          </div>

          <div style={styles.card}>
            <div style={styles.cardTitle}>📈 Otimização e Escala</div>
            <p style={styles.cardText}>
              Ajustes semanais com base em performance: orçamento, segmentação,
              criativos, palavras-chave, remarketing e testes A/B.
            </p>
          </div>

          <div style={styles.card}>
            <div style={styles.cardTitle}>🧩 Tracking e Qualidade de Dados</div>
            <p style={styles.cardText}>
              Configuração e validação de eventos/conversões (quando aplicável),
              garantindo que você tome decisão com dados confiáveis.
            </p>
          </div>

          <div style={styles.card}>
            <div style={styles.cardTitle}>🗂️ Relatórios e Gestão</div>
            <p style={styles.cardText}>
              Relatórios objetivos e leitura executiva: o que foi feito, o que
              funcionou, o que mudou e o próximo passo.
            </p>
          </div>
        </div>

        <div style={styles.cardBlue}>
          <h2 style={styles.h2}>O que entregamos</h2>
          <ul style={styles.ul}>
            <li>✓ Diagnóstico inicial e plano de campanha</li>
            <li>✓ Estruturação de campanhas e grupos (quando aplicável)</li>
            <li>✓ Otimização contínua com rotina e critérios claros</li>
            <li>✓ Controle de orçamento e eficiência por objetivo</li>
            <li>✓ Relatórios e recomendações de melhoria</li>
            <li>✓ Integração com estratégia de conteúdo (quando fizer sentido)</li>
          </ul>

          <p style={{ marginTop: "16px", color: "#555", lineHeight: 1.6 }}>
            Atendemos negócios e projetos com perfil institucional. Sem promessas
            milagrosas — o diferencial está em método, consistência e execução.
          </p>
        </div>

        <div style={styles.ctaWrap}>
          <Link href="/#contato" style={styles.cta}>
            Quero uma análise do meu tráfego
          </Link>
          <div style={styles.micro}>
            Resposta objetiva. Sem enrolação. Direto ao plano de ação.
          </div>
        </div>
      </section>
    </main>
  );
}
