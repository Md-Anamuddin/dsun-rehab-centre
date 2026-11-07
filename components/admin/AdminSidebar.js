'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './AdminSidebar.module.css';

const navItems = [
  {
    href: '/admin',
    label: 'Dashboard',
    exact: true,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
      </svg>
    ),
  },
  {
    href: '/admin/analytics',
    label: 'Web Analytics',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3.5 18.5l6-6 4 4L22 6.92 20.59 5.5l-7.09 8-4-4L2 17l1.5 1.5z"/>
      </svg>
    ),
  },
  {
    href: '/admin/contact-taps',
    label: 'Contact Taps',
    sub: '(WhatsApp/Call)',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
      </svg>
    ),
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  const isActive = (item) => {
    if (item.exact) return pathname === item.href;
    return pathname.startsWith(item.href);
  };

  return (
    <aside className={styles.sidebar}>
      {/* Brand */}
      <div className={styles.brand}>
        <div className={styles.brandIcon}>
          <svg viewBox="0 0 36 36" fill="none" width="28" height="28">
            <rect width="36" height="36" rx="8" fill="#FF6B00"/>
            <text x="18" y="25" fontSize="16" fontWeight="900" fill="white" textAnchor="middle" fontFamily="Outfit,sans-serif">DS</text>
          </svg>
        </div>
        <div className={styles.brandText}>
          <span className={styles.brandName}>Admin Portal</span>
          <span className={styles.brandSub}>D Sun Rehab</span>
        </div>
      </div>

      {/* Nav */}
      <nav className={styles.nav}>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`${styles.navItem} ${isActive(item) ? styles.active : ''}`}
            id={`admin-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
          >
            <span className={styles.navIcon}>{item.icon}</span>
            <span className={styles.navLabel}>
              {item.label}
              {item.sub && <small className={styles.navSub}>{item.sub}</small>}
            </span>
            {isActive(item) && <span className={styles.activeBar}></span>}
          </Link>
        ))}
      </nav>

      {/* Bottom */}
      <div className={styles.sidebarBottom}>
        <Link href="/" className={styles.viewSite} target="_blank">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
          </svg>
          View Website
        </Link>
        <div className={styles.version}>v1.0.0</div>
      </div>
    </aside>
  );
}
