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
    { label: 'Sobre', href: '#sobre' },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo Section */}
        <Link href="/" className={styles.logoSection}>
          <div className={styles.logoWrapper}>
            <img
              src="/LogoSemFundo.png"
              alt="VYA IA"
              className={styles.logoImg}
            />
          </div>
          <p className={styles.tagline}>Inteligência que cuida e transforma!</p>
        </Link>

        {/* Navigation */}
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={styles.navLink}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <Link href="#contato" className={styles.ctaButton}>
          Contato
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className={styles.menuToggle}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
