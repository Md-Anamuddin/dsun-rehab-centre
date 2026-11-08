import styles from './page.module.css';
import Link from 'next/link';

export const metadata = {
  title: 'Our Services | D Sun Rehab & Autism Centre Patna',
  description:
    'Explore our comprehensive therapy services: Occupational Therapy, Language & Communication Therapy, Speech Therapy, Special Education, Group Therapy, and ABA Therapy at D Sun Rehab & Autism Centre, Patna.',
};

const services = [
  {
    id: 'occupational',
    icon: '🤝',
    color: '#FF6B35',
    gradient: 'linear-gradient(135deg, #FF6B35, #FF9A6B)',
    title: 'Occupational Therapy',
    subtitle: 'Building Daily Life Skills',
    desc: 'Occupational Therapy helps children develop the skills necessary to participate in everyday activities. Our therapists assess each child\'s needs and create personalized programs that improve fine motor skills, sensory processing, coordination, and self-care abilities.',
    benefits: [
      'Improves fine and gross motor skills',
      'Enhances sensory processing and integration',
      'Develops self-care and daily living skills',
      'Improves handwriting and academic skills',
      'Builds play and social participation skills',
    ],
    approach: 'Our occupational therapists use a holistic, child-centered approach combining play-based activities, sensory integration techniques, and structured exercises tailored to each child.',
  },
  {
    id: 'language',
    icon: '💬',
    color: '#1B8B3B',
    gradient: 'linear-gradient(135deg, #1B8B3B, #22A347)',
    title: 'Language & Communication Therapy',
    subtitle: 'Building Bridges Through Words',
    desc: 'Language and Communication Therapy focuses on helping children understand and use language effectively. We work on both verbal and non-verbal communication, helping children express their needs, thoughts, and emotions.',
    benefits: [
      'Expressive and receptive language development',
      'Non-verbal communication strategies',
      'Social communication and pragmatics',
      'Augmentative and alternative communication (AAC)',
      'Understanding and following instructions',
    ],
    approach: 'We use evidence-based techniques including naturalistic language teaching, social stories, and visual supports to make language learning engaging and meaningful.',
  },
  {
    id: 'speech',
    icon: '🗣️',
    color: '#0891B2',
    gradient: 'linear-gradient(135deg, #0891B2, #38BDF8)',
    title: 'Speech Therapy',
    subtitle: 'Finding Their Voice',
    desc: 'Speech Therapy addresses articulation, fluency, voice, and language disorders. Our certified speech-language pathologists work with children to improve clarity, confidence, and communication effectiveness.',
    benefits: [
      'Articulation and pronunciation improvement',
      'Fluency and stuttering treatment',
      'Voice disorders management',
      'Oral-motor skill development',
      'Early language intervention',
    ],
    approach: 'Using a combination of oral motor exercises, articulation therapy, and play-based activities, we make speech therapy fun and rewarding for children.',
  },
  {
    id: 'education',
    icon: '📚',
    color: '#7B5EA7',
    gradient: 'linear-gradient(135deg, #7B5EA7, #9B7EC8)',
    title: 'Special Education',
    subtitle: 'Personalized Learning for Every Child',
    desc: 'Our Special Education program provides individualized academic instruction for children with diverse learning needs. We create customized learning environments that celebrate each child\'s unique abilities while addressing their challenges.',
    benefits: [
      'Individualized Education Programs (IEP)',
      'Adaptive learning strategies',
      'Cognitive skill development',
      'Pre-academic and academic skill building',
      'Behavior management in educational settings',
    ],
    approach: 'Our special educators use multi-sensory teaching approaches, visual learning tools, and structured environments to make learning accessible and enjoyable.',
  },
  {
    id: 'group',
    icon: '👥',
    color: '#E6BC00',
    gradient: 'linear-gradient(135deg, #E6BC00, #FFD200)',
    title: 'Group Therapy',
    subtitle: 'Learning Together, Growing Together',
    desc: 'Group Therapy provides a structured setting where children can practice social skills, communication, and cooperative play with peers. These sessions build confidence and prepare children for real-world social interactions.',
    benefits: [
      'Social skills development',
      'Peer interaction and friendship building',
      'Turn-taking and sharing practice',
      'Emotional regulation in social settings',
      'Cooperative play and teamwork',
    ],
    approach: 'Our group sessions are carefully structured by therapists who facilitate positive peer interactions and teach social skills through games, activities, and collaborative projects.',
  },
  {
    id: 'aba',
    icon: '⭐',
    color: '#0D1B5E',
    gradient: 'linear-gradient(135deg, #0D1B5E, #162275)',
    title: 'ABA Therapy',
    subtitle: 'Applied Behavior Analysis',
    desc: 'Applied Behavior Analysis (ABA) is a scientifically validated therapy that uses principles of learning theory to improve socially significant behaviors. ABA therapy is highly effective for children with autism spectrum disorder.',
    benefits: [
      'Reduces problematic behaviors',
      'Increases communication and language skills',
      'Improves attention, focus, and memory',
      'Enhances academic and social skills',
      'Promotes independence in daily activities',
    ],
    approach: 'Our Board Certified Behavior Analysts (BCBAs) design individualized ABA programs using positive reinforcement, natural environment training, and data-driven decision making.',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.pageHero}>
        <div className={styles.pageHeroBg}></div>
        <div className={`container ${styles.pageHeroInner}`}>
          <span className={styles.breadcrumb}>
            <Link href="/">Home</Link> / <span>Services</span>
          </span>
          <h1 className={styles.pageTitle}>Our Therapy Services</h1>
          <p className={styles.pageSubtitle}>
            Comprehensive, evidence-based therapy programs designed to help every child reach their fullest potential.
          </p>
          <div className={styles.pageHeroActions}>
            <a href="tel:+917541833357" className="btn btn-primary" id="services-hero-call-btn">
              Book an Assessment
            </a>
            <a href="https://wa.me/917541833357" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" id="services-hero-wa-btn">
              WhatsApp Enquiry
            </a>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className={`${styles.servicesList} section`}>
        <div className="container">
          <div className={styles.servicesIntro}>
            <span className="section-label">What We Offer</span>
            <h2 className="section-title">6 Specialized Therapy Programs</h2>
            <div className="gold-line"></div>
            <p className="section-desc">
              Children develop new skills in different ways and at different rates. We offer a coordinated range of therapy and learning services that can be considered individually or combined when appropriate. Following an initial discussion and assessment, families can talk with our team about priorities, suitable session formats and goals that are meaningful at home, school and in the community. The descriptions below explain what each service may support; the right plan is always based on the individual child.
            </p>
          </div>

          <div className={styles.servicesDetailGrid}>
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`${styles.serviceDetail} ${index % 2 === 1 ? styles.serviceDetailReverse : ''}`}
              >
                <div className={styles.serviceDetailVisual}>
                  <img className={styles.servicePhoto} src={[
                    "https://images.unsplash.com/photo-1544776193-352d25ca82cd?auto=format&fit=crop&w=1000&q=85",
                    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1000&q=85",
                    "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1000&q=85",
                    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=85",
                    "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1000&q=85",
                    "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1000&q=85"
                  ][index]} alt={`${service.title} session`} />
                  <div className={styles.serviceDetailIcon} style={{ background: service.gradient }}>
                    <span className={styles.serviceDetailEmoji}>{service.icon}</span>
                    <div className={styles.serviceDetailNum}>0{index + 1}</div>
                  </div>
                </div>

                <div className={styles.serviceDetailContent}>
                  <div className={styles.serviceDetailBadge} style={{ color: service.color, background: `${service.color}15`, border: `1px solid ${service.color}30` }}>
                    {service.subtitle}
                  </div>
                  <h2 className={styles.serviceDetailTitle} style={{ color: service.color }}>
                    {service.title}
                  </h2>
                  <p className={styles.serviceDetailDesc}>{service.desc}</p>

                  <div className={styles.serviceDetailBenefits}>
                    <h4 style={{ color: service.color }}>Key Benefits</h4>
                    <ul>
                      {service.benefits.map((b, i) => (
                        <li key={i}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill={service.color} style={{flexShrink: 0, marginTop: 2}}>
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                          </svg>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.serviceDetailApproach}>
                    <p><strong>Our Approach:</strong> {service.approach}</p>
                  </div>

                  <a href="https://wa.me/917541833357" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{width: 'fit-content', marginTop: '8px'}} id={`enquire-${service.id}`}>
                    Enquire Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className={styles.servicesCta}>
        <div className="container" style={{textAlign: 'center'}}>
          <h2 style={{color: 'white', fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(22px, 3vw, 36px)', fontWeight: 800, marginBottom: 12}}>
            Not Sure Which Service Is Right?
          </h2>
          <p style={{color: 'rgba(255,255,255,0.75)', marginBottom: 28, fontSize: 16}}>
            Contact us and our specialists will guide you to the most suitable therapy for your child.
          </p>
          <div style={{display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap'}}>
            <a href="tel:+917541833357" className="btn btn-primary" id="services-cta-call">Call Us: 75418 33357</a>
            <a href="https://wa.me/917541833357" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" id="services-cta-wa">WhatsApp Us</a>
            <Link href="/contact" className="btn" style={{background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.3)'}} id="services-cta-contact">Contact Page</Link>
          </div>
        </div>
      </section>
    </>
  );
}
