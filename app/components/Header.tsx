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
  { label: 'Nossa Essência', href: '/#missao-visao-valores' },
  { label: 'Serviços', href: '/#servicos' },
  { label: 'Dúvidas', href: '/#faq' },
  { label: 'Sobre', href: '/#sobrevyaia' },
];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexShrink: 0 }}>
        <Link href="/#hero" className={styles.logo}>
          <img 
            src="/logo-vya-ia.webp" 
            alt="Vya IA Logo" 
            className={styles.logoImage}
            style={{ height: '85px', width: 'auto', objectFit: 'contain' }}
          />

        </Link>

          <p style={{ margin: 0, fontSize: '14px', color: '#7b68ee', fontWeight: 500, lineHeight: 1.3 }}>
            Inteligência que cuida e transforma
          </p>
        </div>

        <button
          className={styles.menuToggle}
          onClick={toggleMenu}
          aria-label="Menu toggle"
        >
          ☰
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={styles.navLink}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="#contato" className={styles.ctaButton}>
          Contato
        </Link>
      </div>
    </header>
  );
}
