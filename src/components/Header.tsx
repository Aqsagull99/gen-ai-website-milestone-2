
"use client";

import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Header.module.css';  

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.header}>  
      <div className={styles.logo}></div>  
      <nav>
        <div className={styles.menuToggle} onClick={toggleMenu}>  
          ☰
        </div>
        <ul className={isMenuOpen ? `${styles.active} ${styles.navList}` : styles.navList}> 
          <li><Link href="/" onClick={closeMenu}>Home</Link></li>
          <li><Link href="/about" onClick={closeMenu}>About</Link></li>
          <li><Link href="/works" onClick={closeMenu}>Works</Link></li>
          <li><Link href="/uses" onClick={closeMenu}>Uses</Link></li>
          <li><Link href="#fun-facts-section" onClick={closeMenu}>Funs</Link></li>
          <li><Link href="#ai-intro-section" onClick={closeMenu}>Introduction</Link></li>
          <li><Link href="#contact-section" onClick={closeMenu}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;


