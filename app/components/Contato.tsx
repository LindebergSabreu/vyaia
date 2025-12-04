'use client';

import Link from 'next/link';

export default function Contato() {
  return (
    <section className="section" id="contato" role="region" aria-label="Contato">
      <div className="container">
        <h2 className="section-title">Fale com a Vya IA</h2>

        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ textAlign: 'center', marginBottom: '2rem', color: '#9ca3af', fontSize: 'clamp(14px, 3vw, 16px)' }}>
            Para dúvidas, propostas ou suporte, entre em contato pelos canais abaixo:
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '1.5rem',
              marginBottom: '2rem',
            }}
          >
            {/* Email Contato */}
            <div
              style={{
                background: '#f3f4f6',
                padding: '1.5rem',
                borderRadius: '12px',
                textAlign: 'center',
                boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
              }}
            >
              <h3 style={{ color: '#003366', marginBottom: '0.5rem', fontSize: '18px' }}>Email Contato</h3>
              <Link
                href="mailto:contato@vyaia.com.br"
                style={{
                  color: '#7c3aed',
                  fontWeight: 600,
                  fontSize: '16px',
                  textDecoration: 'none',
                }}
              >
                contato@vyaia.com.br
              </Link>
            </div>

            {/* Email Suporte */}
            <div
              style={{
                background: '#f3f4f6',
                padding: '1.5rem',
                borderRadius: '12px',
                textAlign: 'center',
                boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
              }}
            >
              <h3 style={{ color: '#003366', marginBottom: '0.5rem', fontSize: '18px' }}>Email Suporte</h3>
              <Link
                href="mailto:suporte@vyaia.com.br"
                style={{
                  color: '#7c3aed',
                  fontWeight: 600,
                  fontSize: '16px',
                  textDecoration: 'none',
                }}
              >
                suporte@vyaia.com.br
              </Link>
            </div>

            {/* Instagram */}
            <div
              style={{
                background: '#f3f4f6',
                padding: '1.5rem',
                borderRadius: '12px',
                textAlign: 'center',
                boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
              }}
            >
              <h3 style={{ color: '#003366', marginBottom: '0.5rem', fontSize: '18px' }}>Instagram</h3>
              <Link
                href="https://instagram.com/vyaia_oficial"
                target="_blank"
                rel="noopener"
                style={{
                  color: '#7c3aed',
                  fontWeight: 600,
                  fontSize: '16px',
                  textDecoration: 'none',
                }}
              >
                @vyaia_oficial
              </Link>
            </div>

            {/* LinkedIn */}
            <div
              style={{
                background: '#f3f4f6',
                padding: '1.5rem',
                borderRadius: '12px',
                textAlign: 'center',
                boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
              }}
            >
              <h3 style={{ color: '#003366', marginBottom: '0.5rem', fontSize: '18px' }}>LinkedIn</h3>
              <Link
                href="https://linkedin.com/company/vyaia-oficial"
                target="_blank"
                rel="noopener"
                style={{
                  color: '#7c3aed',
                  fontWeight: 600,
                  fontSize: '16px',
                  textDecoration: 'none',
                }}
              >
                @vyaia-oficial
              </Link>
            </div>
          </div>

          <p style={{ textAlign: 'center', color: '#9ca3af', fontSize: '14px', fontStyle: 'italic' }}>
            Atendimento exclusivamente por e-mail ou redes sociais.
          </p>
        </div>
      </div>
    </section>
  );
}