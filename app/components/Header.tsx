'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { label: 'Nossa Essência', href: '#nossa-essencia' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Dúvidas', href: '#faq' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Sobre', href: '#sobre' },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logoSection}>
          <div className={styles.logoWrapper}>
            <img
              src="https://agi-prod-file-upload-public-main-use1.s3.amazonaws.com/91d5a39e-6bd4-4c58-8428-eb62730448e4"
              alt="VYA IA Logo"
              className={styles.logoImg}
            />
          </div>
          <p className={styles.tagline}>
            Consultoria em IA <br /> de Alto Impacto
          </p>
        </Link>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#contato" className={styles.ctaButton}>
          Começar Agora
        </a>

        <button className={styles.menuToggle} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
