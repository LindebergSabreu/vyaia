export default function Servicos() {
  return (
    <section style={{
      padding: "48px 0",
      background: "#fff",
      textAlign: "center",
      borderBottom: "1px solid #e2e5ea"
    }}>
      <h2 style={{ fontFamily: "Montserrat, sans-serif", color: "#7A93A6" }}>
        Nossas soluções em IA
      </h2>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "32px",
        marginTop: "32px"
      }}>
        <div style={{
          background: "#f4f5f7", borderRadius: "12px", padding: "24px", width: "320px"
        }}>
          <h3 style={{ color: "#72979F", fontFamily: "Montserrat, sans-serif" }}>
            Consultoria Estratégica
          </h3>
          <p style={{ fontFamily: "Open Sans, sans-serif" }}>
            Diagnóstico e implantação de IA sob medida para empresas e negócios inovadores.
          </p>
        </div>
        <div style={{
          background: "#f4f5f7", borderRadius: "12px", padding: "24px", width: "320px"
        }}>
          <h3 style={{ color: "#72979F", fontFamily: "Montserrat, sans-serif" }}>
            Soluções Customizadas
          </h3>
          <p style={{ fontFamily: "Open Sans, sans-serif" }}>
            Projetos de IA para automação, personalização de processos e otimização estratégica.
          </p>
        </div>
        <div style={{
          background: "#f4f5f7", borderRadius: "12px", padding: "24px", width: "320px"
        }}>
          <h3 style={{ color: "#72979F", fontFamily: "Montserrat, sans-serif" }}>
            Plataformas SaaS & APIs
          </h3>
          <p style={{ fontFamily: "Open Sans, sans-serif" }}>
            Ferramentas prontas para integração, disponibilidade escalável e resultados ágeis.
          </p>
        </div>
        <div style={{
          background: "#f4f5f7", borderRadius: "12px", padding: "24px", width: "320px"
        }}>
          <h3 style={{ color: "#72979F", fontFamily: "Montserrat, sans-serif" }}>
            Treinamentos e Capacitação
          </h3>
          <p style={{ fontFamily: "Open Sans, sans-serif" }}>
            Formação e atualização para equipes e líderes em IA aplicada ao negócio.
          </p>
        </div>
      </div>
      <div style={{ marginTop: "40px" }}>
        <a href="#contato" style={{
          background: "#FAA084", color: "#fff", fontFamily: "Montserrat, sans-serif",
          padding: "12px 36px", borderRadius: "32px", textDecoration: "none", fontWeight: 600
        }}>
          Solicite um diagnóstico gratuito
        </a>
      </div>
    </section>
  );
}
