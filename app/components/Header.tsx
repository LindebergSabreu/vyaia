"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./Header.module.css";

const navItems = [
  { label: "Essência", href: "/#missao-visao-valores" },
  { label: "Serviços", href: "/#servicos" },
  { label: "FAQ", href: "/#faq" },
  { label: "Sobre", href: "/#sobrevyaia" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/#hero" className={styles.logoSection} onClick={() => setIsMenuOpen(false)}>
          <span className={styles.logoMark} aria-hidden="true">
            <Image
              src="/logo-vya-ia.png"
              alt=""
              width={1024}
              height={1024}
              priority
              className={styles.logoImage}
            />
          </span>
          <span className={styles.brandCopy}>
            <strong>Vya IA</strong>
            <span>Inteligência que cuida e transforma</span>
          </span>
        </Link>

        <button
          className={styles.menuToggle}
          onClick={() => setIsMenuOpen((value) => !value)}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`} aria-label="Navegação principal">
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

        <Link href="/#contato" className={styles.ctaButton} onClick={() => setIsMenuOpen(false)}>
          Contato
        </Link>
      </div>
    </header>
  );
}
