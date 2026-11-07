'use client';
import { useEffect, useState } from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import { getTapSummary, getAnalyticsSummary } from '@/lib/tracking';

function formatDate() {
  return new Date().toLocaleDateString('en-IN', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  });
}

export default function AdminDashboard() {
  const [taps, setTaps] = useState({ totals: { whatsapp: 0, call: 0, email: 0 }, total: 0, todayTotal: 0 });
  const [analytics, setAnalytics] = useState({ pageViews: 0, sessions: 0, uniqueUsers: 0, inquiries: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTaps(getTapSummary());
    setAnalytics(getAnalyticsSummary(30));
  }, []);

  const statCards = [
    {
      id: 'total-visitors',
      label: 'TOTAL VISITORS',
      value: mounted ? analytics.sessions : '—',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
      ),
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      sub: 'All time sessions',
    },
    {
      id: 'page-views',
      label: 'PAGE VIEWS',
      value: mounted ? analytics.pageViews : '—',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
        </svg>
      ),
      gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
      sub: 'Total screens loaded',
    },
    {
      id: 'whatsapp-taps',
      label: 'WHATSAPP TAPS',
      value: mounted ? taps.totals.whatsapp : '—',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      ),
      gradient: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
      sub: 'WhatsApp button clicks',
    },
    {
      id: 'phone-calls',
      label: 'PHONE CALLS',
      value: mounted ? taps.totals.call : '—',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
      ),
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      sub: 'Phone call button clicks',
    },
    {
      id: 'total-taps',
      label: 'TOTAL CONTACT TAPS',
      value: mounted ? taps.total : '—',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
        </svg>
      ),
      gradient: 'linear-gradient(135deg, #FF6B00 0%, #FFB347 100%)',
      sub: 'WhatsApp + Call combined',
    },
    {
      id: 'unique-users',
      label: 'UNIQUE USERS',
      value: mounted ? analytics.uniqueUsers : '—',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
        </svg>
      ),
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      sub: 'Distinct browser sessions',
    },
    {
      id: 'today-taps',
      label: "TODAY'S TAPS",
      value: mounted ? taps.todayTotal : '—',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/>
        </svg>
      ),
      gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
      sub: "Contacts made today",
    },
    {
      id: 'services',
      label: 'TOTAL SERVICES',
      value: '6',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
        </svg>
      ),
      gradient: 'linear-gradient(135deg, #0D1B5E 0%, #1B8B3B 100%)',
      sub: 'Therapy programs offered',
    },
  ];

  return (
    <div className={styles.page}>
      {/* Top Header */}
      <div className={styles.topbar}>
        <div>
          <h1 className={styles.topbarTitle}>Dashboard</h1>
          <p className={styles.topbarSub}>Overview of your website</p>
        </div>
        <div className={styles.topbarRight}>
          <span className={styles.dateText}>{mounted ? formatDate() : ''}</span>
          <div className={styles.adminAvatar}>A</div>
        </div>
      </div>

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Dashboard</h2>
          <p className={styles.sectionSub}>Welcome back! Here's an overview of your website and contact analytics.</p>
        </div>

        {/* Stat Cards Grid */}
        <div className={styles.statsGrid}>
          {statCards.map((card) => (
            <div key={card.id} className={styles.statCard} id={`stat-${card.id}`} style={{ background: card.gradient }}>
              <div className={styles.statCardIcon}>{card.icon}</div>
              <p className={styles.statCardLabel}>{card.label}</p>
              <p className={styles.statCardValue}>{card.value}</p>
              <p className={styles.statCardSub}>{card.sub}</p>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className={styles.quickActions}>
          <h3 className={styles.qaTitle}>Quick Actions</h3>
          <div className={styles.qaGrid}>
            <Link href="/admin/analytics" className={styles.qaCard} id="qa-analytics">
              <div className={styles.qaIcon} style={{ background: 'rgba(102,126,234,0.12)', color: '#667eea' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.5 18.5l6-6 4 4L22 6.92 20.59 5.5l-7.09 8-4-4L2 17l1.5 1.5z"/>
                </svg>
              </div>
              <div>
                <p className={styles.qaCardTitle}>Web Analytics</p>
                <p className={styles.qaCardSub}>View traffic charts & metrics</p>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#999" style={{marginLeft:'auto'}}>
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/>
              </svg>
            </Link>

            <Link href="/admin/contact-taps" className={styles.qaCard} id="qa-contact-taps">
              <div className={styles.qaIcon} style={{ background: 'rgba(37,211,102,0.12)', color: '#25D366' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <p className={styles.qaCardTitle}>Contact Taps</p>
                <p className={styles.qaCardSub}>WhatsApp & Call tap tracking</p>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#999" style={{marginLeft:'auto'}}>
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/>
              </svg>
            </Link>

            <a href="tel:+917541833357" className={styles.qaCard} id="qa-call-now">
              <div className={styles.qaIcon} style={{ background: 'rgba(245,87,108,0.12)', color: '#f5576c' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <div>
                <p className={styles.qaCardTitle}>Call Centre</p>
                <p className={styles.qaCardSub}>+91 75418 33357</p>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#999" style={{marginLeft:'auto'}}>
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/>
              </svg>
            </a>

            <a href="https://wa.me/917541833357" target="_blank" rel="noopener noreferrer" className={styles.qaCard} id="qa-whatsapp">
              <div className={styles.qaIcon} style={{ background: 'rgba(37,211,102,0.12)', color: '#25D366' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
                </svg>
              </div>
              <div>
                <p className={styles.qaCardTitle}>Open WhatsApp</p>
                <p className={styles.qaCardSub}>Message the centre directly</p>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#999" style={{marginLeft:'auto'}}>
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Centre Info */}
        <div className={styles.infoBox}>
          <div className={styles.infoBoxLeft}>
            <h4>D Sun Rehab & Autism Centre</h4>
            <p>4th floor ALI RESIDENCY APARTMENTS, Ramna Road near Patna University, Patna, Bihar 800006</p>
            <p className={styles.regNo}>Reg No: U87900BR2026NPL088791</p>
          </div>
          <div className={styles.infoBoxRight}>
            <a href="tel:+917541833357" className={styles.infoBtn} id="dashboard-call-btn">
              📞 75418 33357
            </a>
            <a href="https://wa.me/917541833357" target="_blank" rel="noopener noreferrer" className={`${styles.infoBtn} ${styles.waBtn}`} id="dashboard-wa-btn">
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
