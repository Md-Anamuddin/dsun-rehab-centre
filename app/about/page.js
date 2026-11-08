import styles from './page.module.css';
import Link from 'next/link';

export const metadata = {
  title: 'About Us | D Sun Rehab & Autism Centre Patna',
  description:
    'Get to know D Sun Rehab & Autism Centre in Patna, Bihar: our child-centred philosophy, family partnership, therapy services and commitment to supporting children with autism and developmental needs.',
};

const values = [
  { icon: '❤️', title: 'Compassion', desc: 'Every child is treated with the utmost care, respect, and understanding.' },
  { icon: '🎯', title: 'Excellence', desc: 'We uphold the highest standards in evidence-based therapeutic practices.' },
  { icon: '🤝', title: 'Partnership', desc: 'We collaborate closely with families as partners in their child\'s journey.' },
  { icon: '🌟', title: 'Inclusivity', desc: 'We celebrate every child\'s unique abilities and create inclusive spaces.' },
];

const team = [
  {
    name: 'Dr. Rehab Specialist',
    role: 'Centre Director & Lead Therapist',
    icon: '👨‍⚕️',
    color: '#0D1B5E',
    qual: 'M.Sc. Rehabilitation Science',
  },
  {
    name: 'Speech Therapist',
    role: 'Senior Speech-Language Pathologist',
    icon: '🗣️',
    color: '#1B8B3B',
    qual: 'M.Sc. Speech-Language Pathology',
  },
  {
    name: 'OT Specialist',
    role: 'Occupational Therapy Expert',
    icon: '🤲',
    color: '#FF6B35',
    qual: 'B.Sc. Occupational Therapy',
  },
  {
    name: 'ABA Therapist',
    role: 'Board Certified Behavior Analyst',
    icon: '⭐',
    color: '#7B5EA7',
    qual: 'BCBA Certified, M.Ed Special Education',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.pageHero}>
        <div className={styles.pageHeroBg}></div>
        <div className={`container ${styles.pageHeroInner}`}>
          <span className={styles.breadcrumb}>
            <Link href="/">Home</Link> / <span>About Us</span>
          </span>
          <h1 className={styles.pageTitle}>About D Sun Rehab & Autism Centre</h1>
          <p className={styles.pageSubtitle}>
            A certified rehabilitation and therapy centre in Patna dedicated to empowering children with autism and developmental needs.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className={`${styles.missionSection} section`}>
        <div className="container">
          <div className={styles.missionGrid}>
            <div className={styles.missionCard} style={{ borderTopColor: '#FFD200' }}>
              <div className={styles.missionCardIcon} style={{ background: 'rgba(255,210,0,0.1)' }}>🎯</div>
              <h2>Our Mission</h2>
              <p>To provide high-quality, evidence-based therapeutic interventions that empower children with autism and developmental challenges to achieve their maximum potential and lead fulfilling lives in an inclusive society.</p>
            </div>
            <div className={styles.missionCard} style={{ borderTopColor: '#1B8B3B' }}>
              <div className={styles.missionCardIcon} style={{ background: 'rgba(27,139,59,0.1)' }}>🌟</div>
              <h2>Our Vision</h2>
              <p>A world where every child, regardless of ability, is celebrated, supported, and given equal opportunity to grow, learn, and thrive in a caring and inclusive community.</p>
            </div>
            <div className={styles.missionCard} style={{ borderTopColor: '#0D1B5E' }}>
              <div className={styles.missionCardIcon} style={{ background: 'rgba(13,27,94,0.08)' }}>💙</div>
              <h2>Our Promise</h2>
              <p>We commit to treating every child and family with dignity, respect, and compassion. We promise personalized care, transparent communication, and unwavering dedication to your child's progress.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className={`${styles.storySection} section`}>
        <div className="container">
          <div className={styles.storyGrid}>
            <div className={styles.storyVisual}>
              {/* Registration Certificate Visual */}
              <div className={styles.certCard}>
                <div className={styles.certHeader}>
                  <svg viewBox="0 0 80 80" fill="none" width="64" height="64">
                    <circle cx="40" cy="40" r="38" fill="#0D1B5E" stroke="#FFD200" strokeWidth="3"/>
                    <text x="40" y="47" fontSize="22" fontWeight="800" fill="#FFD200" textAnchor="middle" fontFamily="Outfit, sans-serif">DS</text>
                    <path d="M40 12 A28 28 0 0 1 68 40" stroke="#FF6B35" strokeWidth="4" fill="none" strokeLinecap="round"/>
                    <path d="M68 40 A28 28 0 0 1 40 68" stroke="#25D366" strokeWidth="4" fill="none" strokeLinecap="round"/>
                    <path d="M40 68 A28 28 0 0 1 12 40" stroke="#1B8B3B" strokeWidth="4" fill="none" strokeLinecap="round"/>
                    <path d="M12 40 A28 28 0 0 1 40 12" stroke="#FFD200" strokeWidth="4" fill="none" strokeLinecap="round"/>
                  </svg>
                  <div>
                    <h3>D Sun Rehab & Autism Centre</h3>
                    <p>Certificate of Incorporation</p>
                  </div>
                </div>
                <div className={styles.certBody}>
                  <div className={styles.certItem}>
                    <span>Registration No.</span>
                    <strong>U87900BR2026NPL088791</strong>
                  </div>
                  <div className={styles.certItem}>
                    <span>Type</span>
                    <strong>Non-Profit Learning Centre</strong>
                  </div>
                  <div className={styles.certItem}>
                    <span>Location</span>
                    <strong>Patna, Bihar</strong>
                  </div>
                  <div className={styles.certItem}>
                    <span>Status</span>
                    <strong style={{ color: '#1B8B3B' }}>✓ Active & Certified</strong>
                  </div>
                </div>
              </div>

              {/* Stats beside cert */}
              <div className={styles.aboutStats}>
                {[
                  { n: '500+', l: 'Children Helped' },
                  { n: '6+', l: 'Therapy Programs' },
                  { n: '98%', l: 'Parent Satisfaction' },
                ].map((s) => (
                  <div key={s.n} className={styles.aboutStatItem}>
                    <span className={styles.aboutStatNum}>{s.n}</span>
                    <span className={styles.aboutStatLabel}>{s.l}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.storyContent}>
              <span className="section-label">Our Story</span>
              <h2 className="section-title">Empowering Abilities, Enriching Lives</h2>
              <div className="gold-line"></div>
              <p className={styles.storyText}>
                D Sun Rehab & Autism Centre was established with a simple purpose: to offer children and families a welcoming place to seek guidance, build skills and work towards meaningful developmental goals. We recognise that beginning a therapy journey can bring many questions. Our role is to listen carefully, explain available support and help families understand practical next steps.
              </p>
              <p className={styles.storyText}>
                Located in the heart of Patna, Bihar, our centre brings together a team of qualified therapists, special educators, and behavior analysts who are passionate about making a real difference in the lives of children and their families.
              </p>
              <p className={styles.storyText}>
                We understand that every child is unique, with their own strengths, challenges, and learning styles. That's why we take a highly individualized approach to therapy, crafting personalized programs that meet each child where they are and help them grow at their own pace.
              </p>
              <p className={styles.storyText}>
                Our centre is located at Ali Residency Apartments, Ramna Road, near Patna University in Patna. We aim to make sessions structured, welcoming and responsive to each child's sensory, communication and learning needs. We also value the knowledge parents bring: their observations help us understand what is working and where additional support may be useful.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.aboutPhotoSection}>
        <div className="container">
          <div className={styles.aboutPhotoGrid}>
            <img src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1100&q=85" alt="Child taking part in a supported play and learning activity" />
            <div>
              <span className="section-label">Our philosophy</span>
              <h2 className="section-title">Progress is personal. Support should be too.</h2>
              <div className="gold-line"></div>
              <p>There is no single timetable for development. Some children may be working on communication, others on sensory regulation, motor coordination, social participation or everyday routines. We respect these differences and encourage goals that are specific, realistic and useful to the child and family.</p>
              <p>We aim to create a positive partnership in which children are treated with dignity, their strengths are recognised and families feel heard. Therapy is not only about what happens during a session; it is also about helping useful skills become part of daily life.</p>
              <p>We encourage parents and caregivers to share questions, observations and feedback throughout the journey. This ongoing conversation helps the support plan remain relevant as a child grows and their needs change.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={`${styles.valuesSection} section`}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="section-label">What Drives Us</span>
            <h2 className="section-title">Our Core Values</h2>
            <div className="gold-line" style={{ margin: '0 auto 20px' }}></div>
          </div>
          <div className={styles.valuesGrid}>
            {values.map((v, i) => (
              <div key={i} className={styles.valueCard}>
                <div className={styles.valueIcon}>{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className={`${styles.teamSection} section`}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="section-label">The Experts</span>
            <h2 className="section-title">Our Qualified Team</h2>
            <div className="gold-line" style={{ margin: '0 auto 20px' }}></div>
            <p className="section-desc" style={{ margin: '0 auto' }}>
              Our team of certified professionals brings expertise, compassion, and dedication to every therapy session.
            </p>
          </div>
          <div className={styles.teamGrid}>
            {team.map((member, i) => (
              <div key={i} className={styles.teamCard}>
                <div className={styles.teamAvatar} style={{ background: `${member.color}15`, color: member.color }}>
                  <span>{member.icon}</span>
                </div>
                <h3 className={styles.teamName} style={{ color: member.color }}>{member.name}</h3>
                <p className={styles.teamRole}>{member.role}</p>
                <p className={styles.teamQual}>{member.qual}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.aboutCta}>
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h2 style={{ color: 'white', fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(24px, 3vw, 38px)', fontWeight: 800, marginBottom: 12 }}>
            Let's Start Your Child's Journey Today
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: 32, fontSize: 16, maxWidth: 500, margin: '0 auto 32px' }}>
            Schedule a free consultation and discover how we can support your child's growth and development.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:+917541833357" className="btn btn-primary" id="about-cta-call">📞 Call: 75418 33357</a>
            <a href="https://wa.me/917541833357" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" id="about-cta-wa">💬 WhatsApp Us</a>
          </div>
        </div>
      </section>
    </>
  );
}
