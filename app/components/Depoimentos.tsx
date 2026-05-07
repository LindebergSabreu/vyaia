const testimonials = [
  {
    quote:
      "A Vya IA nos ajudou a enxergar onde a automação faria diferença de verdade. O projeto saiu do diagnóstico para a operação com muito mais clareza.",
    author: "André",
    company: "HealthTech Paulista",
    role: "CEO",
  },
  {
    quote:
      "O time traduziu tecnologia em decisões simples. A adoção foi mais tranquila porque a conversa envolveu processo, pessoas e governança.",
    author: "Marina",
    company: "Grupo Educacional RJ",
    role: "Diretora de Inovação",
  },
  {
    quote:
      "Não foi apenas implementação. Tivemos priorização, acompanhamento e uma leitura estratégica do que realmente valia automatizar.",
    author: "Carlos",
    company: "E-commerce B2B",
    role: "Diretor de Operações",
  },
];

export default function Depoimentos() {
  return (
    <section className="section testimonials-section" id="depoimentos">
      <div className="container">
        <div className="section-heading">
          <p className="section-kicker">Confiança</p>
          <h2 className="section-title">Projetos orientados por impacto, não por hype.</h2>
          <p className="section-subtitle">
            A Vya IA trabalha para que cada iniciativa tenha um problema claro, um caminho viável e indicadores de evolução.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <article key={testimonial.author} className="testimonial-card">
              <p>&quot;{testimonial.quote}&quot;</p>
              <footer>
                <strong>{testimonial.author}</strong>
                <span>{testimonial.role} · {testimonial.company}</span>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
