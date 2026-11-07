'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={`container ${styles.topBarInner}`}>
          <div className={styles.topBarLeft}>
            <a href="tel:+917541833357" className={styles.topContact} id="header-phone-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              +91 75418 33357
            </a>
            <a
              href="https://wa.me/917541833357"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.topWhatsapp}
              id="header-whatsapp-link"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>
          <div className={styles.topBarRight}>
            <span>Reg No: U87900BR2026NPL088791</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <div className={`container ${styles.headerInner}`}>
          {/* Logo */}
          <Link href="/" className={styles.logo} id="header-logo">
            <div className={styles.logoIcon}>
              <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" width="60" height="60">
                <circle cx="40" cy="40" r="38" fill="#0D1B5E" stroke="#FFD200" strokeWidth="3"/>
                <circle cx="40" cy="40" r="30" fill="none" stroke="rgba(255,210,0,0.3)" strokeWidth="1"/>
                {/* Stars */}
                <text x="10" y="16" fontSize="8" fill="#FFD200">★</text>
                <text x="65" y="16" fontSize="8" fill="#FFD200">★</text>
                {/* DS Text */}
                <text x="40" y="46" fontSize="22" fontWeight="800" fill="#FFD200" textAnchor="middle" fontFamily="Outfit, sans-serif">DS</text>
                {/* Colorful ring arcs */}
                <path d="M40 12 A28 28 0 0 1 68 40" stroke="#FF6B35" strokeWidth="4" fill="none" strokeLinecap="round"/>
                <path d="M68 40 A28 28 0 0 1 40 68" stroke="#25D366" strokeWidth="4" fill="none" strokeLinecap="round"/>
                <path d="M40 68 A28 28 0 0 1 12 40" stroke="#1B8B3B" strokeWidth="4" fill="none" strokeLinecap="round"/>
                <path d="M12 40 A28 28 0 0 1 40 12" stroke="#FFD200" strokeWidth="4" fill="none" strokeLinecap="round"/>
              </svg>
            </div>
            <div className={styles.logoText}>
              <span className={styles.logoName}>D Sun Rehab</span>
              <span className={styles.logoSubtitle}>& Autism Centre</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className={styles.nav} role="navigation" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={styles.navLink} id={`nav-${link.label.toLowerCase().replace(' ', '-')}`}>
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className={styles.headerActions}>
            <a href="tel:+917541833357" className="btn btn-primary" id="header-cta-call" style={{padding: '10px 22px', fontSize: '14px'}}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              Call Now
            </a>

            {/* Mobile Toggle */}
            <button
              className={styles.mobileToggle}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle mobile menu"
              id="mobile-menu-toggle"
            >
              <span className={`${styles.hamburger} ${mobileOpen ? styles.open : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileMenuOpen : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.mobileNavLink}
              onClick={() => setMobileOpen(false)}
              id={`mobile-nav-${link.label.toLowerCase().replace(' ', '-')}`}
            >
              {link.label}
            </Link>
          ))}
          <div className={styles.mobileActions}>
            <a href="tel:+917541833357" className="btn btn-primary" id="mobile-call-btn">
              📞 Call: 75418 33357
            </a>
            <a
              href="https://wa.me/917541833357"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              id="mobile-whatsapp-btn"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
