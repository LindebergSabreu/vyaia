export default function Depoimentos() {
  return (
    <section style={{ padding: "48px 0", background: "#f4f5f7", textAlign: "center" }}>
      <h2 style={{ fontFamily: "Montserrat, sans-serif", color: "#7A93A6", marginBottom: "32px" }}>
        Impacto que transforma – veja quem já confia na VYA IA
      </h2>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "32px",
        justifyContent: "center",
        marginTop: "16px"
      }}>
        <div style={{
          background: "#fff",
          borderRadius: "12px",
          boxShadow: "0 2px 4px #e2e2e2",
          padding: "24px",
          maxWidth: "340px"
        }}>
          <p style={{ fontFamily: "Open Sans, sans-serif", fontStyle: "italic" }}>
            “A VYA IA revolucionou nossos processos comerciais. O diagnóstico foi assertivo e a automação fez nosso faturamento crescer mais de 25%.”
          </p>
          <strong style={{ display: "block", marginTop: "16px" }}>João Silva — CEO, InfoprodutoraX</strong>
        </div>
        <div style={{
          background: "#fff",
          borderRadius: "12px",
          boxShadow: "0 2px 4px #e2e2e2",
          padding: "24px",
          maxWidth: "340px"
        }}>
          <p style={{ fontFamily: "Open Sans, sans-serif", fontStyle: "italic" }}>
            “A personalização do chat de IA elevou o atendimento para outro patamar e gerou reconhecimento do nosso diferencial no mercado.”
          </p>
          <strong style={{ display: "block", marginTop: "16px" }}>Maria Garcia — Gestora, Agência Digital</strong>
        </div>
        <div style={{
          background: "#fff",
          borderRadius: "12px",
          boxShadow: "0 2px 4px #e2e2e2",
          padding: "24px",
          maxWidth: "340px"
        }}>
          <p style={{ fontFamily: "Open Sans, sans-serif", fontStyle: "italic" }}>
            “Ótima entrega, equipe técnica acessível e soluções sob medida. Recomendo para qualquer empresa que busca inovação real.”
          </p>
          <strong style={{ display: "block", marginTop: "16px" }}>Carlos Muñoz — Diretor, Clube de Mentoria</strong>
        </div>
      </div>
    </section>
  );
}
