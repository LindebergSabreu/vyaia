import Link from "next/link";

const contacts = [
  {
    title: "Comercial",
    value: "contato@vyaia.com.br",
    href: "mailto:contato@vyaia.com.br",
  },
  {
    title: "Suporte",
    value: "suporte@vyaia.com.br",
    href: "mailto:suporte@vyaia.com.br",
  },
  {
    title: "Instagram",
    value: "@vyaia_oficial",
    href: "https://instagram.com/vyaia_oficial",
  },
  {
    title: "LinkedIn",
    value: "Vya IA",
    href: "https://linkedin.com/company/vyaia-oficial",
  },
];

export default function Contato() {
  return (
    <section className="section contact-section" id="contato" role="region" aria-label="Contato">
      <div className="container">
        <div className="section-heading">
          <p className="section-kicker">Contato</p>
          <h2 className="section-title">Vamos entender onde a IA pode gerar valor no seu negócio.</h2>
          <p className="section-subtitle">
            Envie uma mensagem pelo canal mais conveniente. O retorno é direto, consultivo e sem promessas vagas.
          </p>
        </div>

        <div className="contact-grid">
          {contacts.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="contact-card"
            >
              <span>{item.title}</span>
              <strong>{item.value}</strong>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
