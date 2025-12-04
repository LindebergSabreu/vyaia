'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className="container">
        <div className={styles.content}>
          {/* Brand */}
          <div className={styles.brand}>
            <h3>Vya IA</h3>
            <p>Consultoria em Inteligência Artificial de Alto Impacto</p>
          </div>

          {/* Links */}
          <div className={styles.links}>
            <h4>Links</h4>
            <ul className={styles.linksList}>
              <li>
                <Link href="/" className={styles.link}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="#sobre" className={styles.link}>
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="#servicos" className={styles.link}>
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="#contato" className={styles.link}>
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.contact}>
            <h4>Contato</h4>
            <p className={styles.contactP}>
              <a href="mailto:contato@vyaia.com.br" className={styles.contactLink}>
                contato@vyaia.com.br
              </a>
            </p>
            <p className={styles.contactP}>
              <a href="mailto:suporte@vyaia.com.br" className={styles.contactLink}>
                suporte@vyaia.com.br
              </a>
            </p>
          </div>

          {/* Social */}
          <div className={styles.social}>
            <h4>Siga-nos</h4>
            <div className={styles.socialLinks}>
              <a
                href="https://linkedin.com/company/vyaia-oficial"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener"
                className={styles.socialLink}
              >
                LinkedIn
              </a>
              <a
                href="https://instagram.com/vyaia_oficial"
                aria-label="Instagram"
                target="_blank"
                rel="noopener"
                className={styles.socialLink}
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className={styles.bottom}>
          <p>&copy; 2025 Vya IA. Todos os direitos reservados.</p>
          <div className={styles.legal}>
            <Link href="/privacidade" className={styles.legalLink}>
              Política de Privacidade
            </Link>
            <Link href="/termos" className={styles.legalLink}>
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}