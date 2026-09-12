import { useEffect, useState } from 'react'

const mdmTools = ['Apple Business Manager', 'Apple School Manager', 'Jamf Pro', 'Jamf School', 'Jamf Protect', 'Hexnode UEM', 'eSchoolPad (eSP)']

const skills = [
  { number: '01', title: 'Mobile Device Management', items: mdmTools },
  { number: '02', title: 'Networking & Security', items: ['TCP/IP', 'VLAN', 'STP', 'DHCP', 'LAN/WAN', 'Firewalls', 'IP Subnetting'] },
  { number: '03', title: 'Network Tools & Infrastructure', items: ['Cisco Packet Tracer', 'Starlink Installation'] },
  { number: '04', title: 'Programming & Troubleshooting', items: ['C++', 'Python', 'MATLAB', 'Network Troubleshooting', 'Code Debugging'] },
  { number: '05', title: 'AI Chatbot Development', items: ['Training Large Language Models', 'ChatGPT', 'Google Text-to-Speech (TTS)', 'Whisper AI (STT)', 'Gradio'] },
  { number: '06', title: 'Productivity & Learning Systems', items: ['Microsoft Office', 'Google Workspace', 'ClassIn LMS'] },
]

const certifications = [
  { title: 'Jamf Security Consultant', issuer: 'Jamf', year: '2026', category: 'MDM', image: '/assets/certifications/jamf-security-consultant.png' },
  { title: 'Jamf Management Engineer', issuer: 'Jamf', year: '2026', category: 'MDM', image: '/assets/certifications/jamf-management-engineer.png' },
  { title: 'Jamf Management Consultant', issuer: 'Jamf', year: '2026', category: 'MDM', image: '/assets/certifications/jamf-management-consultant.png' },
  { title: 'Hexnode Specialist — iOS', issuer: 'Hexnode', year: '2026', category: 'MDM', image: '/assets/certifications/hexnode-specialist-ios.png' },
  { title: 'Hexnode Specialist — macOS', issuer: 'Hexnode', year: '2026', category: 'MDM', image: '/assets/certifications/hexnode-specialist-macos.png' },
  { title: 'Hexnode Certified Expert — tvOS', issuer: 'Hexnode', year: '2026', category: 'MDM', image: '/assets/certifications/hexnode-expert-tvos.png' },
  { title: 'Hexnode Specialist — Windows', issuer: 'Hexnode', year: '2026', category: 'MDM', image: '/assets/certifications/hexnode-specialist-windows.png' },
  { title: 'Hexnode Specialist — Android', issuer: 'Hexnode', year: '2026', category: 'MDM', image: '/assets/certifications/hexnode-specialist-android.png' },
  { title: 'Hexnode Professional — iOS', issuer: 'Hexnode', year: '2026', category: 'MDM', image: '/assets/certifications/hexnode-professional-ios.png' },
  { title: 'Hexnode Professional — macOS', issuer: 'Hexnode', year: '2026', category: 'MDM', image: '/assets/certifications/hexnode-professional-macos.png' },
  { title: 'Hexnode Professional — Windows', issuer: 'Hexnode', year: '2026', category: 'MDM', image: '/assets/certifications/hexnode-professional-windows.png' },
  { title: 'Hexnode Professional — Android', issuer: 'Hexnode', year: '2026', category: 'MDM', image: '/assets/certifications/hexnode-professional-android.png' },
  { title: 'Hexnode UEM Mastery', issuer: 'Hexnode', year: '2026', category: 'MDM', image: '/assets/certifications/hexnode-certified-expert.png' },
  { title: 'Jamf Certified Associate — Jamf Pro', issuer: 'Jamf', year: '2026', category: 'MDM', image: '/assets/certifications/jamf-pro.png' },
  { title: 'Jamf Certified Associate — Jamf School', issuer: 'Jamf', year: '2026', category: 'MDM', image: '/assets/certifications/jamf-school.png' },
  { title: 'Jamf Certified Associate — Jamf Protect', issuer: 'Jamf', year: '2026', category: 'MDM', image: '/assets/certifications/jamf-protect.png' },
  { title: 'Junior Cybersecurity Analyst Career Path', issuer: 'Cisco Networking Academy', year: '2025', category: 'Cybersecurity', image: '/assets/certifications/junior-cybersecurity-analyst.png' },
  { title: 'Cybersecurity Essentials', issuer: 'Cisco Networking Academy', year: '2025', category: 'Cybersecurity', image: '/assets/certifications/cybersecurity-essentials.png' },
  { title: 'Introduction to Cybersecurity', issuer: 'Cisco Networking Academy', year: '2025', category: 'Cybersecurity', image: '/assets/certifications/introduction-to-cybersecurity.png' },
  { title: 'Introduction to Cybersecurity Tools & Cyberattacks V3', issuer: 'IBM | Coursera', year: '2024', category: 'Cybersecurity', image: '/assets/certifications/ibm-cybersecurity-tools.png' },
  { title: 'CCNAv7: Switching, Routing, and Wireless Essentials', issuer: 'Cisco Networking Academy', year: '2024', category: 'Networking', image: '/assets/certifications/ccna-switching-routing-wireless.png' },
  { title: 'CCNAv7: Introduction to Networks', issuer: 'Cisco Networking Academy', year: '2024', category: 'Networking', image: '/assets/certifications/ccna-introduction-to-networks.png' },
  { title: 'Google Workspace Seminar and Workshop', issuer: 'SMSGT Global Technologies Inc.', year: '2024', category: 'Productivity', image: '/assets/certifications/google-workspace-seminar.png' },
]

function SectionLabel({ index, children }) { return <div className="section-label"><span>{index}</span><span>{children}</span></div> }
function Arrow() { return <span aria-hidden="true" className="arrow">↗</span> }
function ContactIcon({ type }) {
  if (type === 'email') return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5.5h18v13H3z" /><path d="m3 7 9 6 9-6" /></svg>
  if (type === 'linkedin') return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 8.5V19M5 5v.01M10 19v-6a4 4 0 0 1 8 0v6M10 10v9" /></svg>
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h8l4 4v14H6zM14 3v5h5M9 13h6M9 17h6" /></svg>
}
function ProfileIcon({ type }) {
  if (type === 'role') return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="7" width="18" height="13" rx="1" /><path d="M8 7V4h8v3M3 12h18M10 12v2h4v-2" /></svg>
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 9 9-5 9 5-9 5-9-5Z" /><path d="M6 11v5c2 2 10 2 12 0v-5M21 9v7" /></svg>
}

const pestawayImages = [
  { src: '/assets/pestaway-gui.png', label: 'PestAway sample GUI', alt: 'PestAway sample graphical user interface showing the chatbot, voice input, and question submission flow' },
]

function PestawayStack() {
  const image = pestawayImages[0]

  return (
    <div className="thesis-stack" aria-label="PestAway thesis snapshots">
      <div className="visual-topline"><span>THESIS / 2025</span></div>
      <div className="stack-stage"><img src={image.src} alt={image.alt} /></div>
    </div>
  )
}

function PortfolioProjectVisual() {
  return <div className="portfolio-project-visual" aria-label="Portfolio hero section preview"><img src="/assets/portfolio-hero.png" alt="Portfolio Hero section with JCV branding, navigation, headline, and portrait" /></div>
}

function ScrollIndicator() {
  const [progress, setProgress] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  const setScrollFromPointer = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
    const nextProgress = Math.max(0, Math.min(1, (event.clientY - bounds.top) / bounds.height))
    window.scrollTo({ top: nextProgress * scrollableHeight, behavior: 'auto' })
  }

  useEffect(() => {
    const updateProgress = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(scrollableHeight > 0 ? Math.min(1, window.scrollY / scrollableHeight) : 0)
    }
    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)
    return () => {
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [])

  const thumbPosition = `${6 + progress * 88}%`
  const handleKeyDown = (event) => {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
    if (event.key === 'Home') window.scrollTo({ top: 0, behavior: 'smooth' })
    if (event.key === 'End') window.scrollTo({ top: scrollableHeight, behavior: 'smooth' })
    if (event.key === 'PageUp') window.scrollBy({ top: -window.innerHeight * .8, behavior: 'smooth' })
    if (event.key === 'PageDown') window.scrollBy({ top: window.innerHeight * .8, behavior: 'smooth' })
  }

  return <aside className="scroll-indicator" aria-label={`Page scroll progress ${Math.round(progress * 100)} percent`}><span className="scroll-track" role="scrollbar" tabIndex="0" aria-valuemin="0" aria-valuemax="100" aria-valuenow={Math.round(progress * 100)} onPointerDown={(event) => { event.preventDefault(); setIsDragging(true); event.currentTarget.setPointerCapture(event.pointerId); setScrollFromPointer(event) }} onPointerMove={(event) => { if (isDragging) { event.preventDefault(); setScrollFromPointer(event) } }} onPointerUp={(event) => { setIsDragging(false); event.currentTarget.releasePointerCapture(event.pointerId) }} onPointerCancel={(event) => { setIsDragging(false); event.currentTarget.releasePointerCapture(event.pointerId) }} onKeyDown={handleKeyDown}><span className="scroll-fill" style={{ height: `${progress * 100}%` }} /><span className={`scroll-thumb ${isDragging ? 'is-dragging' : ''}`} style={{ top: thumbPosition }}><img src="/assets/scroll-indicator.png" alt="" /></span></span></aside>
}

function CertificationArchive() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedIndex, setSelectedIndex] = useState(null)
  const categories = ['All', ...new Set(certifications.map((certification) => certification.category))]
  const visibleCertifications = activeCategory === 'All' ? certifications : certifications.filter((certification) => certification.category === activeCategory)
  const selectedCertification = selectedIndex === null ? null : visibleCertifications[selectedIndex]
  const moveSelection = (direction) => setSelectedIndex((current) => (current + direction + visibleCertifications.length) % visibleCertifications.length)

  useEffect(() => {
    if (selectedIndex === null) return undefined
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        setSelectedIndex((current) => (current - 1 + visibleCertifications.length) % visibleCertifications.length)
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault()
        setSelectedIndex((current) => (current + 1) % visibleCertifications.length)
      }
      if (event.key === 'Escape') setSelectedIndex(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedIndex, visibleCertifications.length])

  return (
    <div className="certifications-panel">
      <div className="certifications-heading"><span className="card-label">Credentials Index</span><h3>Certifications &amp; Badges</h3><p>A visual archive of completed certifications and learning paths.</p><div className="certification-filters" aria-label="Filter certifications">{categories.map((category) => <button className={activeCategory === category ? 'is-active' : ''} type="button" key={category} onClick={() => { setActiveCategory(category); setSelectedIndex(null) }} aria-pressed={activeCategory === category}>{category}</button>)}</div></div>
      <div className="certification-grid">{visibleCertifications.map((certification, index) => <button className="certification-card" type="button" key={certification.title} onClick={() => setSelectedIndex(index)}><span className="certificate-preview">{certification.image ? <img src={certification.image} alt={`${certification.title} certificate`} /> : <span>Certificate<br />Image Pending</span>}</span><span className="certificate-meta"><strong>{certification.title}</strong><small>{certification.issuer} · {certification.year}</small></span></button>)}</div>
      {selectedCertification && <div className="certificate-modal" role="dialog" aria-modal="true" aria-label={selectedCertification.title} onClick={() => setSelectedIndex(null)}><div className="certificate-modal-content" onClick={(event) => event.stopPropagation()}><button className="certificate-close" type="button" onClick={() => setSelectedIndex(null)} aria-label="Close certificate viewer">×</button><button className="certificate-nav certificate-nav-prev" type="button" onClick={() => moveSelection(-1)} aria-label="Previous certification">←</button><div className="certificate-modal-image">{selectedCertification.image ? <img src={selectedCertification.image} alt={`${selectedCertification.title} certificate`} /> : <span>Certificate image<br />to be added</span>}</div><button className="certificate-nav certificate-nav-next" type="button" onClick={() => moveSelection(1)} aria-label="Next certification">→</button><p>{selectedCertification.title}</p><small>{selectedCertification.issuer} · {selectedCertification.year}</small></div></div>}
    </div>
  )
}

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? 'dark' : 'light'
  }, [darkMode])

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 280)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const timer = window.setTimeout(() => {
      setIsLoading(false)
      document.body.style.overflow = ''
    }, reducedMotion ? 850 : 5000)

    return () => {
      window.clearTimeout(timer)
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <div className={`site-shell ${darkMode ? 'dark-theme' : ''}`}>
      {isLoading && <div className="preloader" role="status" aria-live="polite" aria-label="Loading portfolio"><div className="preloader-mark" aria-hidden="true">JCV<span>.</span></div><div className="preloader-track" aria-hidden="true"><span /></div><div className="preloader-meta"><span>Initializing portfolio</span><span>01 / 01</span></div></div>}
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Jastin Brylle Villanueva home">JCV<span className="accent">.</span></a>
        <nav aria-label="Primary navigation">
          <a href="#projects">Projects</a><a href="#about">About Me</a><a href="#stack">Tech Stack</a><a href="#extra">Credentials</a><a href="#contact" className="nav-contact">Get in Touch <Arrow /></a><button className="theme-toggle" type="button" onClick={() => setDarkMode((current) => !current)} aria-pressed={darkMode} aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}><span aria-hidden="true">{darkMode ? '☼' : '◐'}</span> {darkMode ? 'Light' : 'Dark'}</button>
        </nav>
      </header>

      <main id="top">
        <section className="hero-section page-section" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Integration Engineer <span className="status-dot" /> Manila, PH</p>
            <p className="hero-name">Nice to meet you, I&apos;m Jastin Brylle Villanueva.</p>
            <h1 id="hero-title">I make complex<br /><em>systems work together.</em></h1>
            <p className="hero-summary">I explore and integrate tools across <strong>Enterprise and Education Infrastructure</strong> from Apple Device Management and Networks to AI Chatbot Development with a focus on Large Language Models and the documentation that makes them understandable.</p>
            <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <Arrow /></a><a className="text-link" href="#contact">Let&apos;s connect <Arrow /></a></div>
          </div>
          <div className="portrait-column"><div className="portrait-frame"><img className="portrait-image" src={darkMode ? '/assets/portrait-dark.jpg' : '/assets/portrait-light.jpg'} alt={darkMode ? 'Jastin Brylle Villanueva wearing his graduation toga' : 'Jastin Brylle Villanueva in a traditional formal shirt'} /></div></div>
        </section>

        <div className="signal-strip" aria-label="Areas of practice"><span>Mobile Device Management</span><i /><span>Network</span><i /><span>AI Chatbot Development</span></div>

        <section className="page-section projects-section" id="projects" aria-labelledby="projects-title">
          <div className="section-heading"><SectionLabel index="01">Projects</SectionLabel><h2 id="projects-title">Work that connects<br /><em>people to technology.</em></h2><p>Selected work from my academic and professional practice. Internal client material stays private; the thinking, systems, and publicly shareable outcomes remain visible here.</p></div>
          <article className="feature-project thesis-project">
            <PestawayStack />
            <div className="project-content"><div className="project-kicker"><span>Featured Project</span><span>AI / LLM / SPEECH</span></div><h3>PestAway: A Pest Management Chatbot with Integrated Speech Capabilities</h3><p className="project-lede">PestAway is a bilingual (English and Tagalog) speech-enabled AI chatbot developed to help Filipino farmers manage pest control and reduce crop loss through accessible, real-time advice. Using GPT-4 and credible agricultural sources based from the Philippines, an 80,000-item dataset was built and used to fine-tune Large Language Models using SFT, DPO, and ORPO training techniques. The ORPO-trained model delivered top-tier performance, reaching a 0.7316 BERTScore and an average perplexity of 1.5185, while speech recognition models achieved precise voice querying with Character Error Rates as low as 0% to 3.43%. Field testing with farmers, students, and agricultural enthusiasts yielded an average user rating above 4.1 out of 5, with a 100% recommendation rate highlighting the chatbot&apos;s precision, bilingual performance, and real-world utility.</p><p>As a team, we researched, gathered, and prepared an 80,000-item Philippines-based dataset, and fine-tuned the base model via three different techniques: <strong>SFT</strong> (Supervised Fine-Tuning), <strong>DPO</strong> (Direct Preference Optimization), and <strong>ORPO</strong> (Odds Ratio Preference Optimization). We tested whether PestAway understood context and produced accurate and timely answers, and received good results.</p><div className="project-footer"><span>THESIS CONTRIBUTION</span><span className="project-links"><a className="text-link" href="https://ieeexplore.ieee.org/document/11375077" target="_blank" rel="noreferrer">Read the Thesis Paper <Arrow /></a><a className="text-link" href="https://pestaway-ust.github.io/" target="_blank" rel="noreferrer">Open PestAway <Arrow /></a><a className="text-link" href="#contact">Discuss the Project <Arrow /></a></span></div></div>
          </article>
          <article className="feature-project portfolio-project">
            <PortfolioProjectVisual />
            <div className="project-content"><div className="project-kicker"><span>Personal Project</span><span>REACT / VITE / CSS</span></div><h3>Personal Portfolio</h3><p className="project-lede">A responsive portfolio designed to present my work, technical practice, certifications, and engineering background through a clear, interactive experience.</p><p>I built the portfolio to make complex information easy to explore, combining structured content, responsive layouts, light and dark themes, interactive certification viewing, keyboard navigation, and direct contact links.</p><div className="project-footer"><span>DESIGN &amp; DEVELOPMENT</span><span className="project-links"><a className="text-link" href="#top">View the Portfolio <Arrow /></a><a className="text-link" href="https://github.com/jellyrb/jcv-portfolio" target="_blank" rel="noreferrer">GitHub Repository <Arrow /></a><a className="text-link" href="#contact">Discuss the Project <Arrow /></a></span></div></div>
          </article>
          <div className="project-notes"><div><span className="note-number">02</span><strong>Current Integration Practice</strong><p>Exploring Mobile Device Management, Identity and Access Management, Learning Management Systems, Productivity, Network, Security, and Artificial Intelligence solutions for Enterprise and Education environments.</p></div><div><span className="note-number">03</span><strong>Documentation as Infrastructure</strong><p>Turning Proof-of-Concept steps and troubleshooting paths into clear references teams can use and trust.</p></div></div>
        </section>

        <section className="page-section about-section" id="about" aria-labelledby="about-title"><div className="section-heading compact-heading"><SectionLabel index="02">About Me</SectionLabel><h2 id="about-title">A systems thinker with<br /><em>an engineer&apos;s patience.</em></h2></div><div className="about-layout"><figure className="about-photo"><img src="/assets/about-me-upscaled.png" alt="Jastin Brylle Villanueva holding a MacBook during a technology event" /></figure><div className="about-copy"><div className="about-lead"><p>I am an <strong>Integration Engineer</strong> and a Licensed Electronics Engineer and Electronics Technician. My work sits between systems: understanding what each one needs, testing how they behave together, and making the path repeatable for the people who come after.</p></div><div className="about-body"><p>I work across Apple device management, networks, security, learning systems, productivity tools, and applied artificial intelligence. I am also building toward a future in network engineering.</p><p>My approach is practical and investigative: ask the right question, isolate the variables, document what worked, and leave the system clearer than I found it.</p></div></div></div><div className="profile-strip"><div><span className="profile-icon"><ProfileIcon type="role" /></span><span>Current Role</span><strong>Integration Engineer</strong><small>Power Mac Center, Inc.<br />Enterprise &amp; Education Technical Team</small></div><div><span className="profile-icon"><ProfileIcon type="education" /></span><span>Education</span><strong>Bachelor of Science in Electronics Engineering</strong><small>University of Santo Tomas</small></div></div><div className="interest-line"><span>OFF THE CLOCK</span><span>Games <i /> Music <i /> Sports</span></div></section>

        <section className="page-section stack-section" id="stack" aria-labelledby="stack-title"><div className="section-heading"><SectionLabel index="03">Tech Stack</SectionLabel><h2 id="stack-title">The tools are different.<br /><em>The method is consistent.</em></h2><p>A working index of the platforms, concepts, and tools I use to investigate, integrate, and explain technical systems.</p></div><div className="skills-grid">{skills.map((skill) => <div className="skill-item" key={skill.number}><span className="skill-number">{skill.number}</span><h3>{skill.title}</h3><div className="skill-tags">{skill.items.map((item) => <span key={item}>{item}</span>)}</div></div>)}</div></section>

        <section className="page-section extra-section" id="extra" aria-labelledby="extra-title"><div className="section-heading compact-heading"><SectionLabel index="04">Extra & Certifications</SectionLabel><h2 id="extra-title">Proof of practice,<br /><em>not just a list.</em></h2></div><div className="credentials-layout"><div className="license-card"><span className="card-label">Professional Licenses</span><div className="license-row"><span>ECE</span><strong>Licensed Electronics Engineer<small>October 2025</small></strong></div><div className="license-row"><span>ECT</span><strong>Licensed Electronics Technician<small>October 2025</small></strong></div></div><div className="credentials-note"><span className="card-label">Recognition</span><h3>Thesis Recognition</h3><p>PestAway represents the academic work I am most proud of: applying model training, evaluation, and speech capability to a problem grounded in the Philippines.</p><div className="recognition-list"><strong>IEEE Region 10 International Conference TENCON</strong><strong>FUSERS 2025 — Research Colloquium: 1st Runner-Up for Best Video Presentation</strong></div></div></div><CertificationArchive /></section>

        <section className="page-section contact-section" id="contact" aria-labelledby="contact-title"><div className="contact-rule" /><SectionLabel index="05">Contact</SectionLabel><div className="contact-layout"><div><h2 id="contact-title">Let&apos;s connect<br /><em>the next system.</em></h2><p>I&apos;m open to conversations about integration engineering, endpoint management, enterprise and education infrastructure, and network-focused opportunities.</p></div><div className="contact-links"><a href="mailto:villanuevajastin.b.c@gmail.com"><span className="contact-link-main"><span className="contact-icon"><ContactIcon type="email" /></span><span>Email Me</span></span><span className="contact-link-meta">villanuevajastin.b.c@gmail.com <Arrow /></span></a><a href="mailto:jastinbrylle.villanueva@powermaccenter.com"><span className="contact-link-main"><span className="contact-icon"><ContactIcon type="email" /></span><span>Work Email</span></span><span className="contact-link-meta">jastinbrylle.villanueva@powermaccenter.com <Arrow /></span></a><a href="https://www.linkedin.com/in/jastin-brylle-villanueva-ece-ect-5a07672b5/" target="_blank" rel="noreferrer"><span className="contact-link-main"><span className="contact-icon"><ContactIcon type="linkedin" /></span><span>LinkedIn</span></span><span className="contact-link-meta">View My Profile <Arrow /></span></a><a href="https://drive.google.com/file/d/1RlW59AWfB5zLasD2tQEQaB-_4lvzmlAH/view?usp=sharing" target="_blank" rel="noreferrer"><span className="contact-link-main"><span className="contact-icon"><ContactIcon type="resume" /></span><span>Résumé</span></span><span className="contact-link-meta">View Resume PDF <Arrow /></span></a></div></div><footer><span>JCV<span className="accent">.</span> / INTEGRATION ENGINEER</span><span>© 2026</span></footer></section>
      </main>
      <ScrollIndicator />
      {showBackToTop && <a className="back-to-top" href="#top" aria-label="Back to top"><span aria-hidden="true">↑</span><span>Back to Top</span></a>}
    </div>
  )
}

export default App
