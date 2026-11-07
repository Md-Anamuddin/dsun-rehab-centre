import styles from './page.module.css';
import Link from 'next/link';

export const metadata = {
  title: 'Contact Us | D Sun Rehab & Autism Centre Patna',
  description:
    'Get in touch with D Sun Rehab & Autism Centre. Call us at 75418 33357, WhatsApp, or visit us at 4th floor ALI RESIDENCY APARTMENTS, Ramna Road, Patna, Bihar 800006.',
};

const contactMethods = [
  {
    id: 'phone',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
      </svg>
    ),
    label: 'Call Us',
    value: '+91 75418 33357',
    sub: 'Available during working hours',
    href: 'tel:+917541833357',
    color: '#0D1B5E',
    bg: 'rgba(13,27,94,0.08)',
    btnLabel: 'Call Now',
    btnClass: 'btn-primary',
  },
  {
    id: 'whatsapp',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
    label: 'WhatsApp',
    value: '+91 75418 33357',
    sub: 'Message us anytime',
    href: 'https://wa.me/917541833357',
    color: '#25D366',
    bg: 'rgba(37,211,102,0.08)',
    btnLabel: 'Open WhatsApp',
    btnClass: 'btn-whatsapp',
    external: true,
  },
  {
    id: 'address',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
    ),
    label: 'Visit Us',
    value: '4th floor ALI RESIDENCY APARTMENTS',
    sub: 'Ramna Road near Patna University, Patna, Bihar 800006',
    href: 'https://www.google.com/maps/search/Ali+Residency+Apartments+Ramna+Road+Patna+University+Patna+Bihar',
    color: '#1B8B3B',
    bg: 'rgba(27,139,59,0.08)',
    btnLabel: 'Get Directions',
    btnClass: 'btn-green',
    external: true,
  },
];

const faqs = [
  {
    q: 'What age groups do you serve?',
    a: 'We primarily work with children aged 1.5 to 18 years with autism, developmental delays, and related conditions.',
  },
  {
    q: 'How do I book an appointment?',
    a: 'You can call us at 75418 33357 or send a WhatsApp message to the same number. We\'ll schedule an initial assessment at your convenience.',
  },
  {
    q: 'Do you offer home visits?',
    a: 'Currently, we primarily offer in-centre therapy sessions. Please contact us to discuss specific requirements.',
  },
  {
    q: 'How long does each therapy session last?',
    a: 'Standard sessions are 45-60 minutes depending on the therapy type and the child\'s needs. Our therapist will advise the best schedule.',
  },
  {
    q: 'What documents do I need for the first visit?',
    a: 'Please bring previous medical records, reports from other specialists, and any school assessments. These help us create the best plan for your child.',
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.pageHero}>
        <div className={styles.pageHeroBg}></div>
        <div className={`container ${styles.pageHeroInner}`}>
          <span className={styles.breadcrumb}>
            <Link href="/">Home</Link> / <span>Contact</span>
          </span>
          <h1 className={styles.pageTitle}>Get In Touch With Us</h1>
          <p className={styles.pageSubtitle}>
            We'd love to hear from you. Reach out to schedule an assessment, ask questions, or learn more about our services.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className={`${styles.contactMethods} section`}>
        <div className="container">
          <div className={styles.methodsGrid}>
            {contactMethods.map((method) => (
              <div key={method.id} className={styles.methodCard} id={`contact-method-${method.id}`}>
                <div className={styles.methodIcon} style={{ background: method.bg, color: method.color }}>
                  {method.icon}
                </div>
                <p className={styles.methodLabel}>{method.label}</p>
                <p className={styles.methodValue}>{method.value}</p>
                <p className={styles.methodSub}>{method.sub}</p>
                <a
                  href={method.href}
                  className={`btn ${method.btnClass} ${styles.methodBtn}`}
                  target={method.external ? '_blank' : undefined}
                  rel={method.external ? 'noopener noreferrer' : undefined}
                  id={`contact-method-${method.id}-btn`}
                >
                  {method.btnLabel}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map + Info Section */}
      <section className={`${styles.mapSection} section`}>
        <div className="container">
          <div className={styles.mapGrid}>
            {/* Map embed */}
            <div className={styles.mapWrap}>
              <div className={styles.mapHeader}>
                <h3>Find Us on the Map</h3>
                <a
                  href="https://www.google.com/maps/search/Ali+Residency+Apartments+Ramna+Road+near+Patna+University+Patna+Bihar+800006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ padding: '8px 20px', fontSize: '13px' }}
                  id="map-open-btn"
                >
                  Open in Google Maps ↗
                </a>
              </div>
              <div className={styles.mapPlaceholder}>
                {/* Stylized map placeholder */}
                <svg viewBox="0 0 600 380" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.mapSvg}>
                  <rect width="600" height="380" fill="#E8F0F8"/>
                  {/* Roads */}
                  <rect x="0" y="160" width="600" height="24" fill="#C8D8E8" rx="2"/>
                  <rect x="0" y="220" width="600" height="12" fill="#D8E4EE" rx="2"/>
                  <rect x="260" y="0" width="24" height="380" fill="#C8D8E8" rx="2"/>
                  <rect x="380" y="0" width="12" height="380" fill="#D8E4EE" rx="2"/>
                  <rect x="120" y="0" width="12" height="380" fill="#D8E4EE" rx="2"/>
                  {/* Buildings */}
                  <rect x="30" y="40" width="70" height="100" fill="#B0BEC5" rx="4" opacity="0.7"/>
                  <rect x="140" y="60" width="100" height="80" fill="#90A4AE" rx="4" opacity="0.7"/>
                  <rect x="300" y="30" width="60" height="110" fill="#B0BEC5" rx="4" opacity="0.7"/>
                  <rect x="420" y="50" width="80" height="90" fill="#90A4AE" rx="4" opacity="0.7"/>
                  <rect x="30" y="250" width="80" height="100" fill="#B0BEC5" rx="4" opacity="0.7"/>
                  <rect x="150" y="260" width="90" height="90" fill="#90A4AE" rx="4" opacity="0.7"/>
                  <rect x="400" y="250" width="160" height="110" fill="#B0BEC5" rx="4" opacity="0.6"/>
                  {/* Patna University label */}
                  <rect x="390" y="255" width="155" height="100" fill="#1B8B3B" rx="6" opacity="0.2"/>
                  <text x="468" y="308" textAnchor="middle" fontSize="11" fill="#146B2D" fontWeight="600" fontFamily="Inter, sans-serif">Patna University</text>
                  {/* Pin */}
                  <circle cx="272" cy="172" r="22" fill="#0D1B5E" opacity="0.2"/>
                  <circle cx="272" cy="172" r="16" fill="#0D1B5E"/>
                  <circle cx="272" cy="172" r="8" fill="#FFD200"/>
                  <path d="M272 155 L272 140" stroke="#0D1B5E" strokeWidth="2.5" strokeLinecap="round"/>
                  {/* Road labels */}
                  <text x="290" y="156" fontSize="10" fill="#607D8B" fontFamily="Inter, sans-serif">Ramna Road</text>
                  {/* Compass */}
                  <circle cx="545" cy="45" r="24" fill="white" opacity="0.8" stroke="#B0BEC5" strokeWidth="1"/>
                  <text x="545" y="29" textAnchor="middle" fontSize="9" fill="#E53935" fontWeight="700" fontFamily="Inter, sans-serif">N</text>
                  <text x="545" y="62" textAnchor="middle" fontSize="9" fill="#607D8B" fontFamily="Inter, sans-serif">S</text>
                  <text x="526" y="48" textAnchor="middle" fontSize="9" fill="#607D8B" fontFamily="Inter, sans-serif">W</text>
                  <text x="564" y="48" textAnchor="middle" fontSize="9" fill="#607D8B" fontFamily="Inter, sans-serif">E</text>
                  <line x1="545" y1="25" x2="545" y2="47" stroke="#E53935" strokeWidth="2"/>
                  <line x1="545" y1="47" x2="545" y2="65" stroke="#607D8B" strokeWidth="1.5"/>
                </svg>
                <div className={styles.mapPinInfo}>
                  <div className={styles.mapPinDot}></div>
                  <p>4th Floor, ALI RESIDENCY APARTMENTS, Ramna Road, Patna</p>
                </div>
              </div>
            </div>

            {/* Info Panel */}
            <div className={styles.mapInfoPanel}>
              <h3 className={styles.infoPanelTitle}>Centre Information</h3>

              <div className={styles.infoItems}>
                <div className={styles.infoItem}>
                  <div className={styles.infoItemIcon} style={{ background: 'rgba(13,27,94,0.08)', color: 'var(--navy)' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div>
                    <p className={styles.infoItemLabel}>Address</p>
                    <p className={styles.infoItemValue}>4th floor ALI RESIDENCY APARTMENTS, Ramna Road near Patna University, Patna, Bihar 800006.</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoItemIcon} style={{ background: 'rgba(13,27,94,0.08)', color: 'var(--navy)' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <div>
                    <p className={styles.infoItemLabel}>Phone / WhatsApp</p>
                    <a href="tel:+917541833357" className={styles.infoLink} id="contact-page-phone">+91 75418 33357</a>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoItemIcon} style={{ background: 'rgba(27,139,59,0.08)', color: 'var(--green)' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                    </svg>
                  </div>
                  <div>
                    <p className={styles.infoItemLabel}>Working Hours</p>
                    <p className={styles.infoItemValue}>Monday – Saturday: 9:00 AM – 6:00 PM</p>
                    <p style={{ fontSize: 13, color: 'var(--gray-500)' }}>Sunday: Closed</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoItemIcon} style={{ background: 'rgba(255,210,0,0.12)', color: '#9A7800' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  <div>
                    <p className={styles.infoItemLabel}>Registration</p>
                    <p className={styles.infoItemValue}>Reg No: U87900BR2026NPL088791</p>
                    <p style={{ fontSize: 13, color: 'var(--green)', fontWeight: 600 }}>✓ Certified & Active</p>
                  </div>
                </div>
              </div>

              <div className={styles.infoCta}>
                <a href="tel:+917541833357" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} id="info-panel-call">
                  📞 Call: 75418 33357
                </a>
                <a
                  href="https://wa.me/917541833357"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{ width: '100%', justifyContent: 'center' }}
                  id="info-panel-wa"
                >
                  💬 WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`${styles.faqSection} section`}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="section-label">Common Questions</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className="gold-line" style={{ margin: '0 auto' }}></div>
          </div>
          <div className={styles.faqGrid}>
            {faqs.map((faq, i) => (
              <div key={i} className={styles.faqCard} id={`faq-${i + 1}`}>
                <div className={styles.faqQ}>
                  <span className={styles.faqNum}>Q{i + 1}</span>
                  <h4>{faq.q}</h4>
                </div>
                <p className={styles.faqA}>{faq.a}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <p style={{ color: 'var(--gray-500)', marginBottom: 16 }}>Have more questions? We're here to help!</p>
            <a href="https://wa.me/917541833357" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" id="faq-wa-btn">
              💬 Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
