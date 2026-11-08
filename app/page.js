import Link from 'next/link';
import styles from './page.module.css';

const services = [
  { number: '01', title: 'Occupational Therapy', desc: 'Support for everyday skills, sensory processing, coordination and greater independence through purposeful, child-centred activities.', image: 'photo-1503454537195-1dcabb73ffb9', alt: 'Child engaged in a playful learning activity', tag: 'Everyday independence' },
  { number: '02', title: 'Speech & Language Therapy', desc: 'Individual support to help children express needs, understand language, build vocabulary and connect with the people around them.', image: 'photo-1516627145497-ae6968895b74', alt: 'Parent and child sharing a learning moment', tag: 'Finding their voice' },
  { number: '03', title: 'Special Education', desc: 'Personalised learning experiences that recognise each child’s strengths, encourage curiosity and build confidence step by step.', image: 'photo-1503676260728-1c00da094a0b', alt: 'Child learning with books and colourful materials', tag: 'Learning at their pace' },
  { number: '04', title: 'ABA Therapy', desc: 'Structured, individualised support focused on meaningful skills, positive learning experiences and participation in daily life.', image: 'photo-1476231682828-37e571bc172f', alt: 'Bright, welcoming outdoor environment', tag: 'Skills for daily life' },
  { number: '05', title: 'Language & Communication', desc: 'Activities that encourage understanding, interaction and confidence using the communication methods that work for each child.', image: 'photo-1529390079861-591de354faf5', alt: 'Children learning and communicating together in a supportive group', tag: 'Building connection' },
  { number: '06', title: 'Group Therapy', desc: 'Guided opportunities to practise social interaction, turn-taking, cooperation and learning alongside peers in a supportive setting.', image: 'photo-1529390079861-591de354faf5', alt: 'Children enjoying a group activity', tag: 'Growing together' },
];

const steps = [
  ['01', 'Let’s talk', 'Tell us what you have noticed and what support you are looking for. We will listen and help you understand the next step.'],
  ['02', 'Understand your child', 'We begin by learning about your child’s strengths, interests, needs and everyday experiences.'],
  ['03', 'Plan together', 'Our team discusses suitable support and works with your family towards practical, meaningful goals.'],
  ['04', 'Grow step by step', 'Progress is supported through consistent sessions, family involvement and regular communication.'],
];

const photos = {
  hero: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1500&q=88',
  play: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1000&q=85',
  learning: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=85',
};

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function HomePage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroShape} />
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <div className={styles.eyebrow}><span className={styles.eyebrowDot} /> A brighter way to grow</div>
            <h1>Every child has a <em>beautiful</em> way of seeing the world.</h1>
            <p className={styles.heroLead}>At D Sun Rehab & Autism Centre, we celebrate every little step. We work alongside children and families with thoughtful therapy, patient guidance and a belief in each child’s potential.</p>
            <div className={styles.heroActions}>
              <a className={styles.primaryBtn} href="https://wa.me/917541833357?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20D%20Sun%20Rehab%20Centre.">Let’s talk about your child <Arrow /></a>
              <Link className={styles.textBtn} href="/services">Explore our services <span>→</span></Link>
            </div>
            <div className={styles.heroNote}><span className={styles.noteStars}>✳ ✳ ✳</span><span>Compassionate care. Individual journeys. Family partnership.</span></div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.heroImageFrame}>
              <img src={photos.hero} alt="A joyful child playing in a bright, welcoming environment" />
              <div className={styles.imageLabel}><span>♡</span><div><strong>Small steps matter.</strong><small>Every milestone is worth celebrating.</small></div></div>
            </div>
            <div className={styles.heroSticker}><span>GROW</span><strong>at your<br/>own pace</strong><i>✳</i></div>
            <div className={styles.heroOrb} />
          </div>
        </div>
        <div className={styles.heroBottom}><span>CARE THAT SEES THE WHOLE CHILD</span><span className={styles.bottomLine} /><span>PATNA, BIHAR · INDIA</span></div>
      </section>

      <section className={styles.intro}>
        <div className={`container ${styles.introGrid}`}>
          <div><span className={styles.kicker}>MORE THAN THERAPY</span><h2>A place where progress feels personal.</h2></div>
          <div className={styles.introText}><p>Every child is different. Their interests, strengths, communication styles and ways of learning deserve to be understood—not compared. That is why we believe support should begin with listening, patience and a plan shaped around the individual child.</p><p>At D Sun Rehab & Autism Centre, we aim to create a welcoming space where children can explore skills at their own pace and families feel heard, informed and involved throughout the journey.</p><Link href="/about" className={styles.underLink}>Get to know our centre <span>→</span></Link></div>
        </div>
      </section>

      <section className={styles.services}>
        <div className="container">
          <div className={styles.sectionHead}><div><span className={styles.kicker}>HOW WE CAN HELP</span><h2>Support that meets<br/><em>your child where they are.</em></h2></div><p>Our programmes are designed to support communication, learning, participation and everyday development. We work with families to explore the support that best fits each child.</p></div>
          <div className={styles.serviceGrid}>
            {services.map((service) => <article className={styles.serviceCard} key={service.number}>
              <div className={styles.serviceImage}><img src={`https://images.unsplash.com/${service.image}?auto=format&fit=crop&w=900&q=82`} alt={service.alt} loading="lazy"/><span className={styles.serviceNumber}>{service.number}</span></div>
              <div className={styles.serviceBody}><span className={styles.serviceTag}>{service.tag}</span><h3>{service.title}</h3><p>{service.desc}</p><Link href="/services" aria-label={`Learn more about ${service.title}`} className={styles.cardArrow}>Learn more <Arrow /></Link></div>
            </article>)}
          </div>
          <div className={styles.serviceFoot}><span>Not sure where to begin? That’s okay.</span><a href="https://wa.me/917541833357?text=Hello%2C%20I%20need%20guidance%20about%20therapy%20services.">Talk with our team <Arrow /></a></div>
        </div>
      </section>

      <section className={styles.promise}>
        <div className={`container ${styles.promiseGrid}`}>
          <div className={styles.promiseVisual}><img className={styles.promiseMain} src={photos.play} alt="A parent and child sharing a warm moment together" loading="lazy"/><img className={styles.promiseSmall} src={photos.learning} alt="A child exploring a learning activity" loading="lazy"/><div className={styles.promiseNote}>A little progress<br/><strong>is still progress.</strong> ✳</div></div>
          <div className={styles.promiseCopy}><span className={styles.kicker}>OUR BELIEF</span><h2>Different abilities.<br/><em>Endless possibilities.</em></h2><p>We believe children thrive when they feel safe, understood and encouraged. Our approach is rooted in respect for each child’s individuality and in the understanding that development is not a race.</p><p>We value the role families play in a child’s growth. By keeping parents involved, sharing practical guidance and celebrating meaningful milestones, we want every family to feel like an active partner in the process.</p><div className={styles.promisePills}><span>Child-centred</span><span>Family-focused</span><span>Individualised</span></div><Link href="/about" className={styles.darkBtn}>Discover our approach <Arrow /></Link></div>
        </div>
      </section>

      <section className={styles.journey}>
        <div className="container"><div className={styles.journeyHeading}><span className={styles.kicker}>YOUR FIRST STEPS WITH US</span><h2>A clearer path, <em>together.</em></h2><p>Starting therapy can bring questions. We want the first steps to feel welcoming, simple and centred around your family.</p></div>
          <div className={styles.stepsGrid}>{steps.map(([number, title, desc]) => <article className={styles.step} key={number}><span className={styles.stepNo}>{number}</span><div className={styles.stepIcon}>{number === '01' ? '♡' : number === '02' ? '◎' : number === '03' ? '✳' : '↗'}</div><h3>{title}</h3><p>{desc}</p></article>)}</div>
        </div>
      </section>

      <section className={styles.family}>
        <div className={`container ${styles.familyInner}`}><div><span className={styles.kicker}>FAMILIES ARE PART OF THE TEAM</span><h2>Because the best progress happens <em>together.</em></h2><p>Your observations, questions and hopes matter. We encourage open conversations so that the support your child receives can connect with the routines, relationships and experiences that make up everyday life.</p><a href="https://wa.me/917541833357?text=Hello%2C%20I%20would%20like%20to%20speak%20with%20your%20team." className={styles.familyBtn}>Start a conversation <Arrow /></a></div><div className={styles.familyArt}><div className={styles.sunMark}>✳</div><div className={styles.familyQuote}>“Every child deserves to be seen, heard and encouraged.”</div><span className={styles.familyCaption}>A partnership built around your child.</span></div></div>
      </section>

      <section className={styles.cta}>
        <div className={`container ${styles.ctaInner}`}><div><span className={styles.kicker}>WE’RE HERE TO LISTEN</span><h2>Wondering what the next step could be?</h2><p>Reach out to our team. Share your questions, tell us what support you are looking for, and let’s explore the way forward together.</p></div><div className={styles.ctaActions}><a href="tel:+917541833357" className={styles.ctaPhone}>+91 75418 33357</a><a href="https://wa.me/917541833357" className={styles.primaryBtn}>Connect on WhatsApp <Arrow /></a><Link href="/contact" className={styles.ctaLink}>Contact & location →</Link></div></div>
      </section>
    </div>
  );
}
