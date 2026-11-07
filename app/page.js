import styles from './page.module.css';
import Link from 'next/link';

const services = [
  {
    id: 1,
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="32" height="32">
        <circle cx="24" cy="24" r="22" fill="#FF6B35" opacity="0.15"/>
        <path d="M24 14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 20c-6.63 0-12 2.69-12 6v2h24v-2c0-3.31-5.37-6-12-6z" fill="#FF6B35"/>
        <path d="M34 22l-1.5 1.5 3 3L34 28l-3-3-1.5 1.5V22z" fill="#FF6B35" opacity="0.8"/>
      </svg>
    ),
    color: '#FF6B35',
    bgColor: 'rgba(255, 107, 53, 0.08)',
    title: 'Occupational Therapy',
    desc: 'Helping children develop the skills needed for daily activities and independence through structured therapeutic exercises.',
    href: '/services#occupational',
  },
  {
    id: 2,
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="32" height="32">
        <circle cx="24" cy="24" r="22" fill="#1B8B3B" opacity="0.15"/>
        <path d="M24 10c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm-8 26v-4c0-4.42 7.16-8 8-8s8 3.58 8 8v4" stroke="#1B8B3B" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        <path d="M14 22c-2.21 0-4 1.79-4 4v8h4" stroke="#1B8B3B" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <path d="M34 22c2.21 0 4 1.79 4 4v8h-4" stroke="#1B8B3B" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <path d="M20 28h8" stroke="#1B8B3B" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    color: '#1B8B3B',
    bgColor: 'rgba(27, 139, 59, 0.08)',
    title: 'Language & Communication',
    desc: 'Building communication bridges through targeted language therapy programs designed for individual needs.',
    href: '/services#language',
  },
  {
    id: 3,
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="32" height="32">
        <circle cx="24" cy="24" r="22" fill="#0891B2" opacity="0.15"/>
        <path d="M8 18a10 10 0 0 1 10-10h8a10 10 0 0 1 10 10v4a10 10 0 0 1-10 10h-2l-6 6v-6H18A10 10 0 0 1 8 22z" stroke="#0891B2" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="18" cy="22" r="2" fill="#0891B2"/>
        <circle cx="24" cy="22" r="2" fill="#0891B2"/>
        <circle cx="30" cy="22" r="2" fill="#0891B2"/>
      </svg>
    ),
    color: '#0891B2',
    bgColor: 'rgba(8, 145, 178, 0.08)',
    title: 'Speech Therapy',
    desc: 'Improving verbal and non-verbal communication skills with evidence-based speech and language intervention.',
    href: '/services#speech',
  },
  {
    id: 4,
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="32" height="32">
        <circle cx="24" cy="24" r="22" fill="#7B5EA7" opacity="0.15"/>
        <rect x="10" y="12" width="28" height="20" rx="3" stroke="#7B5EA7" strokeWidth="2.5" fill="none"/>
        <path d="M16 36h16" stroke="#7B5EA7" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M24 32v4" stroke="#7B5EA7" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M15 22h4M22 18h4M28 22h4M18 26h12" stroke="#7B5EA7" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    color: '#7B5EA7',
    bgColor: 'rgba(123, 94, 167, 0.08)',
    title: 'Special Education',
    desc: 'Individualized educational programs tailored to each child\'s unique learning style and developmental goals.',
    href: '/services#education',
  },
  {
    id: 5,
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="32" height="32">
        <circle cx="24" cy="24" r="22" fill="#FFD200" opacity="0.15"/>
        <circle cx="16" cy="16" r="5" stroke="#E6BC00" strokeWidth="2.5" fill="none"/>
        <circle cx="32" cy="16" r="5" stroke="#E6BC00" strokeWidth="2.5" fill="none"/>
        <circle cx="24" cy="32" r="5" stroke="#E6BC00" strokeWidth="2.5" fill="none"/>
        <path d="M20 19l-2 7M28 19l2 7M20 33l-2-6M28 33l2-6" stroke="#E6BC00" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
      </svg>
    ),
    color: '#E6BC00',
    bgColor: 'rgba(255, 210, 0, 0.08)',
    title: 'Group Therapy',
    desc: 'Structured group sessions that foster social skills, peer interaction, and cooperative learning in a safe environment.',
    href: '/services#group',
  },
  {
    id: 6,
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="32" height="32">
        <circle cx="24" cy="24" r="22" fill="#0D1B5E" opacity="0.12"/>
        <path d="M24 10L28 18H38L30 24L34 32L24 26L14 32L18 24L10 18H20Z" stroke="#0D1B5E" strokeWidth="2" fill="#0D1B5E" opacity="0.7"/>
        <circle cx="24" cy="22" r="4" fill="white" opacity="0.9"/>
      </svg>
    ),
    color: '#0D1B5E',
    bgColor: 'rgba(13, 27, 94, 0.06)',
    title: 'ABA Therapy',
    desc: 'Applied Behavior Analysis therapy using evidence-based techniques to improve social, communication, and learning skills.',
    href: '/services#aba',
  },
];

const stats = [
  { number: '500+', label: 'Children Helped', icon: '👦' },
  { number: '6+', label: 'Therapy Programs', icon: '🎯' },
  { number: '98%', label: 'Parent Satisfaction', icon: '❤️' },
  { number: '5+', label: 'Years Experience', icon: '🏆' },
];

export default function HomePage() {
  return (
    <>
      {/* ============ HERO SECTION ============ */}
      <section className={styles.hero} id="home">
        {/* Decorative background shapes */}
        <div className={styles.heroBg}>
          <div className={styles.heroBgCircle1}></div>
          <div className={styles.heroBgCircle2}></div>
          <div className={styles.heroBgDots}></div>
        </div>

        <div className={`container ${styles.heroInner}`}>
          {/* Left Content */}
          <div className={styles.heroContent}>
            {/* Badge */}
            <div className={styles.heroBadge}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--gold)">
                <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" stroke="var(--gold)" strokeWidth="2" fill="none"/>
              </svg>
              Certificate of Incorporation No. U87900BR2026NPL088791
            </div>

            <h1 className={styles.heroTitle}>
              <span className={styles.heroTitleLine1}>D Sun Rehab</span>
              <span className={styles.heroTitleLine2}>&amp; Autism Centre</span>
            </h1>

            <p className={styles.heroTagline}>
              <em>Empowering Abilities, Enriching Lives</em>
            </p>

            <p className={styles.heroDesc}>
              We support every child to reach their full potential in a caring and inclusive environment. 
              Providing specialized therapy services with compassion, expertise, and dedication.
            </p>

            <div className={styles.heroActions}>
              <a href="tel:+917541833357" className={`btn btn-primary ${styles.heroBtnCall}`} id="hero-call-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                Book Appointment
              </a>
              <a
                href="https://wa.me/917541833357"
                target="_blank"
                rel="noopener noreferrer"
                className={`btn btn-whatsapp ${styles.heroBtnWA}`}
                id="hero-whatsapp-btn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </a>
              <Link href="/services" className={`btn btn-outline ${styles.heroBtnServices}`} id="hero-services-btn"
                style={{color: 'var(--navy)', border: '2px solid var(--navy-light)', borderRadius: 'var(--radius-full)', padding: '14px 28px', fontWeight: 600}}>
                Our Services ↓
              </Link>
            </div>
          </div>

          {/* Right Visual */}
          <div className={styles.heroVisual}>
            <div className={styles.heroCard}>
              {/* Big Logo Visual */}
              <div className={styles.heroLogoWrap}>
                <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.heroLogo}>
                  {/* Outer ring */}
                  <circle cx="100" cy="100" r="95" fill="#0D1B5E" stroke="#FFD200" strokeWidth="5"/>
                  <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(255,210,0,0.2)" strokeWidth="1.5"/>
                  {/* Colorful arcs */}
                  <path d="M100 20 A80 80 0 0 1 180 100" stroke="#FF6B35" strokeWidth="8" fill="none" strokeLinecap="round"/>
                  <path d="M180 100 A80 80 0 0 1 100 180" stroke="#25D366" strokeWidth="8" fill="none" strokeLinecap="round"/>
                  <path d="M100 180 A80 80 0 0 1 20 100" stroke="#1B8B3B" strokeWidth="8" fill="none" strokeLinecap="round"/>
                  <path d="M20 100 A80 80 0 0 1 100 20" stroke="#FFD200" strokeWidth="8" fill="none" strokeLinecap="round"/>
                  {/* Stars */}
                  <text x="22" y="38" fontSize="16" fill="#FFD200">★</text>
                  <text x="160" y="38" fontSize="16" fill="#FFD200">★</text>
                  {/* DS Text */}
                  <text x="100" y="118" fontSize="60" fontWeight="900" fill="#FFD200" textAnchor="middle" fontFamily="Outfit, sans-serif">DS</text>
                </svg>

                {/* Floating info cards */}
                <div className={styles.floatCard1}>
                  <span className={styles.floatCardIcon}>🎯</span>
                  <div>
                    <p className={styles.floatCardNum}>500+</p>
                    <p className={styles.floatCardLabel}>Children Helped</p>
                  </div>
                </div>

                <div className={styles.floatCard2}>
                  <span className={styles.floatCardIcon}>⭐</span>
                  <div>
                    <p className={styles.floatCardNum}>98%</p>
                    <p className={styles.floatCardLabel}>Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission Highlight */}
            <div className={styles.missionCard}>
              <div className={styles.missionIcon}>
                <svg viewBox="0 0 40 40" fill="none" width="36" height="36">
                  <circle cx="20" cy="20" r="18" fill="rgba(27,139,59,0.15)"/>
                  <path d="M20 8C13.37 8 8 13.37 8 20c0 6.63 5.37 12 12 12s12-5.37 12-12c0-6.63-5.37-12-12-12zm-1 17l-5-5 1.41-1.41L19 22.17l7.59-7.59L28 16l-9 9z" fill="#1B8B3B"/>
                </svg>
              </div>
              <p className={styles.missionText}>
                We support every child to reach their full potential in a <strong>caring and inclusive</strong> environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ STATS SECTION ============ */}
      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            {stats.map((stat, i) => (
              <div key={i} className={styles.statCard} id={`stat-${i}`}>
                <div className={styles.statEmoji}>{stat.icon}</div>
                <p className={styles.statNumber}>{stat.number}</p>
                <p className={styles.statLabel}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SERVICES SECTION ============ */}
      <section className={`${styles.servicesSection} section`} id="services">
        <div className="container">
          {/* Heading */}
          <div className={styles.sectionHead}>
            <span className="section-label">What We Offer</span>
            <h2 className="section-title">Our Therapy Services</h2>
            <div className="gold-line"></div>
            <p className="section-desc">
              We offer a comprehensive range of specialized therapy services designed to help every child unlock their unique potential.
            </p>
          </div>

          {/* Services Grid */}
          <div className={styles.servicesGrid}>
            {services.map((service) => (
              <Link href={service.href} key={service.id} className={styles.serviceCard} id={`service-card-${service.id}`}>
                <div className={styles.serviceIconWrap} style={{ background: service.bgColor }}>
                  {service.icon}
                </div>
                <h3 className={styles.serviceTitle} style={{ color: service.color }}>
                  {service.title}
                </h3>
                <p className={styles.serviceDesc}>{service.desc}</p>
                <span className={styles.serviceLearn} style={{ color: service.color }}>
                  Learn More →
                </span>
              </Link>
            ))}
          </div>

          <div className={styles.servicesFooter}>
            <Link href="/services" className="btn btn-primary" id="view-all-services-btn">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ============ ABOUT / MISSION SECTION ============ */}
      <section className={`${styles.aboutSection} section`} id="about">
        <div className="container">
          <div className={styles.aboutGrid}>
            {/* Left */}
            <div className={styles.aboutLeft}>
              <span className="section-label">Who We Are</span>
              <h2 className="section-title">Dedicated to Every Child's Growth & Happiness</h2>
              <div className="gold-line"></div>
              <p className={styles.aboutDesc}>
                D Sun Rehab & Autism Centre is a certified therapy and rehabilitation centre based in Patna, Bihar. 
                We specialize in providing evidence-based therapeutic interventions for children with autism and other developmental needs.
              </p>
              <p className={styles.aboutDesc}>
                Our team of qualified therapists and educators work closely with families to create personalized care plans 
                that help each child develop essential life skills in a supportive, nurturing environment.
              </p>

              {/* Key Points */}
              <div className={styles.aboutPoints}>
                {[
                  { icon: '✅', text: 'Certified & Registered Centre (Reg No: U87900BR2026NPL088791)' },
                  { icon: '👨‍⚕️', text: 'Team of qualified therapists and special educators' },
                  { icon: '🧩', text: 'Individualized therapy plans for each child' },
                  { icon: '❤️', text: 'Caring, inclusive and child-friendly environment' },
                ].map((point, i) => (
                  <div key={i} className={styles.aboutPoint}>
                    <span className={styles.pointIcon}>{point.icon}</span>
                    <p>{point.text}</p>
                  </div>
                ))}
              </div>

              <div className={styles.aboutActions}>
                <Link href="/about" className="btn btn-primary" id="about-learn-more-btn">
                  Learn More About Us
                </Link>
                <Link href="/contact" className="btn btn-green" id="about-contact-btn">
                  Get In Touch
                </Link>
              </div>
            </div>

            {/* Right */}
            <div className={styles.aboutRight}>
              {/* Visual with SVG illustration */}
              <div className={styles.aboutVisual}>
                <div className={styles.aboutImgMain}>
                  <svg viewBox="0 0 400 340" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.aboutSvg}>
                    {/* Room background */}
                    <rect width="400" height="340" fill="#E8F5E9" rx="20"/>
                    {/* Floor */}
                    <rect y="260" width="400" height="80" fill="#C8E6C9" rx="0"/>
                    {/* Blue mat */}
                    <rect x="40" y="230" width="320" height="40" fill="#1565C0" rx="6" opacity="0.7"/>
                    {/* Yellow mat section */}
                    <rect x="200" y="230" width="160" height="40" fill="#FFD200" rx="0" opacity="0.8"/>
                    {/* Tunnel toy */}
                    <ellipse cx="130" cy="210" rx="60" ry="30" fill="#E53935" opacity="0.8"/>
                    <ellipse cx="130" cy="210" rx="45" ry="22" fill="#EF9A9A" opacity="0.6"/>
                    {/* Balance pad */}
                    <rect x="280" y="200" width="80" height="30" fill="#FF7043" rx="8" opacity="0.8"/>
                    {/* Swing ropes */}
                    <line x1="320" y1="0" x2="320" y2="160" stroke="#795548" strokeWidth="3"/>
                    <line x1="360" y1="0" x2="360" y2="160" stroke="#795548" strokeWidth="3"/>
                    {/* Swing seat */}
                    <rect x="310" y="155" width="60" height="12" fill="#FFD200" rx="4"/>
                    {/* Colorful rings/stacker */}
                    <circle cx="100" cy="240" r="25" fill="#E53935" opacity="0.9"/>
                    <circle cx="100" cy="235" r="20" fill="#FFD200" opacity="0.9"/>
                    <circle cx="100" cy="231" r="15" fill="#43A047" opacity="0.9"/>
                    <circle cx="100" cy="228" r="10" fill="#1565C0" opacity="0.9"/>
                    <rect x="97" y="210" width="6" height="35" fill="#795548" rx="3"/>
                    {/* Ladder wall */}
                    <rect x="350" y="60" width="20" height="200" fill="#8D6E63" rx="4" opacity="0.6"/>
                    <rect x="350" y="80" width="30" height="8" fill="#6D4C41" rx="2" opacity="0.7"/>
                    <rect x="350" y="100" width="30" height="8" fill="#6D4C41" rx="2" opacity="0.7"/>
                    <rect x="350" y="120" width="30" height="8" fill="#6D4C41" rx="2" opacity="0.7"/>
                    <rect x="350" y="140" width="30" height="8" fill="#6D4C41" rx="2" opacity="0.7"/>
                    <rect x="350" y="160" width="30" height="8" fill="#6D4C41" rx="2" opacity="0.7"/>
                    {/* Child figure */}
                    <circle cx="200" cy="175" r="22" fill="#FFCC80"/>
                    <rect x="185" y="197" width="30" height="40" rx="6" fill="#1565C0"/>
                    <rect x="178" y="200" width="12" height="32" rx="5" fill="#FFCC80"/>
                    <rect x="210" y="200" width="12" height="32" rx="5" fill="#FFCC80"/>
                    <rect x="188" y="237" width="10" height="28" rx="5" fill="#37474F"/>
                    <rect x="202" y="237" width="10" height="28" rx="5" fill="#37474F"/>
                    {/* Happy face */}
                    <circle cx="193" cy="172" r="3" fill="#5D4037"/>
                    <circle cx="207" cy="172" r="3" fill="#5D4037"/>
                    <path d="M193 182 Q200 188 207 182" stroke="#5D4037" strokeWidth="2" fill="none" strokeLinecap="round"/>
                    {/* Window */}
                    <rect x="20" y="30" width="80" height="60" rx="6" fill="white" opacity="0.8"/>
                    <line x1="60" y1="30" x2="60" y2="90" stroke="#BDBDBD" strokeWidth="2"/>
                    <line x1="20" y1="60" x2="100" y2="60" stroke="#BDBDBD" strokeWidth="2"/>
                    {/* AC unit */}
                    <rect x="140" y="20" width="60" height="24" rx="4" fill="#ECEFF1" stroke="#CFD8DC" strokeWidth="1.5"/>
                    <line x1="145" y1="30" x2="195" y2="30" stroke="#B0BEC5" strokeWidth="1.5"/>
                    {/* Plants/decor */}
                    <circle cx="50" cy="215" r="15" fill="#43A047" opacity="0.7"/>
                    <circle cx="40" cy="225" r="10" fill="#388E3C" opacity="0.7"/>
                    <circle cx="60" cy="222" r="12" fill="#66BB6A" opacity="0.7"/>
                    <rect x="47" y="225" width="6" height="20" fill="#8D6E63" rx="2"/>
                    {/* Shelves with toys */}
                    <rect x="300" y="100" width="80" height="10" fill="#8D6E63" rx="2"/>
                    <rect x="300" y="130" width="80" height="10" fill="#8D6E63" rx="2"/>
                    <circle cx="315" cy="97" r="8" fill="#E53935" opacity="0.8"/>
                    <circle cx="330" cy="97" r="8" fill="#FFD200" opacity="0.8"/>
                    <circle cx="345" cy="97" r="8" fill="#43A047" opacity="0.8"/>
                  </svg>
                </div>

                {/* Overlay badge */}
                <div className={styles.aboutBadge}>
                  <div className={styles.aboutBadgeIcon}>🏆</div>
                  <div>
                    <p className={styles.aboutBadgeNum}>Certified</p>
                    <p className={styles.aboutBadgeLabel}>Rehab Centre</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA SECTION ============ */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaBg}>
          <div className={styles.ctaCircle1}></div>
          <div className={styles.ctaCircle2}></div>
        </div>
        <div className={`container ${styles.ctaInner}`}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to Start Your Child's Journey?</h2>
            <p className={styles.ctaDesc}>
              Contact us today to schedule an assessment and learn how our expert therapists can help your child thrive.
            </p>
          </div>
          <div className={styles.ctaActions}>
            <a href="tel:+917541833357" className={`btn btn-primary ${styles.ctaBtn}`} id="cta-call-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              Call: 75418 33357
            </a>
            <a
              href="https://wa.me/917541833357"
              target="_blank"
              rel="noopener noreferrer"
              className={`btn btn-whatsapp ${styles.ctaBtn}`}
              id="cta-whatsapp-btn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
            <Link href="/contact" className={styles.ctaBtnOutline} id="cta-contact-btn">
              Contact Us →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
