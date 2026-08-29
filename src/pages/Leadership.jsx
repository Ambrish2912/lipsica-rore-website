import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Award, CheckCircle2, Building2, BookOpen, Mic, GraduationCap } from 'lucide-react';
import './Leadership.css';

export default function Leadership() {
  const directorships = [
    {
      role: 'Director',
      organization: 'Xcellon Industries Limited',
      note: 'Corporate governance and strategic oversight',
    },
    {
      role: 'Director',
      organization: 'Gujarat Social Welfare Trust',
      note: 'Institutional social development and program strategy',
    },
    {
      role: 'Board Member',
      organization: 'NISPA',
      sub: 'Network of Independent Schools Parents Association',
      note: 'Governance, regional membership, and parent community advocacy',
    },
  ];

  const communityRoles = [
    {
      role: 'President',
      organization: 'Ridley College Family Guild',
      period: '2025–2026',
      description: 'Leading guild governance, parent community engagement, and family enrichment programming.',
    },
    {
      role: 'Board Member & Co-Chair, Membership',
      organization: 'NISPA',
      period: '2023–Present',
      description: 'Overseeing membership development, independent school community networking, and outreach.',
    },
    {
      role: 'Director, Junior Tennis Program',
      organization: 'Fort Erie Tennis Club',
      period: '2020–2022',
      description: 'Directing youth athletics, player development pathways, and regional sports programming.',
    },
    {
      role: 'Director',
      organization: 'Gujarat Social Welfare Trust',
      period: '2005–2008',
      description: 'Spearheading women empowerment programs and state-wide community self-help groups.',
    },
  ];

  const communityInitiatives = [
    {
      title: 'Niagara Art Contest',
      context: 'NPMC Initiative • Founder',
      note: 'Recognized by the Mayor of Niagara-on-the-Lake for fostering youth and community arts engagement.',
    },
    {
      title: 'NSPA Welcome Breakfast',
      context: 'Host & Lead Organizer • 2025',
      note: 'Welcoming independent school parent delegates and fostering inter-school connection.',
    },
    {
      title: 'Community Recipe Book',
      context: 'Multi-Family Cultural Initiative • Initiator',
      note: 'A collaborative living archive celebrating diverse family heritages and culinary traditions.',
    },
    {
      title: 'Family Bowling & Appreciation Event',
      context: 'Organizer • May 2026',
      note: 'Community appreciation and cross-generational bonding event.',
    },
  ];

  const qualifications = [
    {
      title: 'Master’s in Physiotherapy (Orthopedics)',
      type: 'POSTGRADUATE DEGREE',
      focus: 'Advanced Musculoskeletal & Clinical Rehabilitation',
    },
    {
      title: 'Bachelor’s in Physiotherapy',
      type: 'UNDERGRADUATE DEGREE',
      focus: 'Clinical Physical Therapy & Human Anatomy',
    },
    {
      title: 'Degree in Hospital Administration & Healthcare Management',
      type: 'EXECUTIVE QUALIFICATION',
      focus: 'Healthcare Operations & Institutional Leadership',
    },
    {
      title: 'Certification — Art of Rhetoric: Persuasive Communication',
      type: 'EXECUTIVE CERTIFICATE',
      focus: 'Harvard University',
    },
    {
      title: 'Pursuing — Negotiation & Leadership',
      type: 'EXECUTIVE EDUCATION (IN PROGRESS)',
      focus: 'Yale University',
    },
  ];

  return (
    <div className="leadership-page">
      {/* 1. PAGE HERO */}
      <section className="leadership-hero-section" aria-label="Leadership Hero">
        <div className="leadership-hero-ambient"></div>
        <div className="container">
          <div className="leadership-hero-grid">
            {/* Left Column: Narrative Headline */}
            <div className="leadership-hero-content">
              <div className="leadership-hero-eyebrow">
                <span>LEADERSHIP &amp; IMPACT</span>
              </div>

              <h1 className="leadership-hero-headline">
                Beyond the <br />
                <span className="headline-italic">Canvas</span>
              </h1>

              <p className="leadership-hero-subtext">
                “A multidisciplinary journey across healthcare, entrepreneurship, social development, governance, and community leadership.”
              </p>

              <div className="leadership-hero-location">
                <MapPin size={14} className="hero-pin-icon" />
                <span>Niagara-on-the-Lake, Canada</span>
              </div>
            </div>

            {/* Right Column: Editorial Visual Frame */}
            <div className="leadership-hero-visual">
              <div className="leadership-portrait-frame">
                <div className="leadership-sanctuary-inner">
                  <div className="leadership-aura-svg-box" aria-hidden="true">
                    <svg viewBox="0 0 320 380" fill="none" xmlns="http://www.w3.org/2000/svg" className="leadership-aura-svg">
                      <circle cx="160" cy="190" r="135" stroke="#C6A15B" strokeWidth="0.8" strokeDasharray="4 6" opacity="0.4" />
                      <circle cx="160" cy="190" r="100" stroke="#B9828F" strokeWidth="0.85" opacity="0.35" />
                      <circle cx="160" cy="190" r="65" stroke="#C6A15B" strokeWidth="1" opacity="0.5" />
                      <path d="M160 45 L160 335" stroke="#C6A15B" strokeWidth="0.8" opacity="0.4" />
                      <path d="M25 190 L295 190" stroke="#C6A15B" strokeWidth="0.8" opacity="0.4" />
                      <circle cx="160" cy="190" r="4" fill="#C6A15B" />
                    </svg>
                  </div>
                  <div className="leadership-seal-content">
                    <span className="seal-monogram">LR</span>
                    <span className="seal-subtitle">Executive &bull; Civic &bull; Creative</span>
                  </div>
                </div>
                <div className="leadership-frame-gold-border"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROFILE / POSITIONING */}
      <section className="leadership-profile-section" aria-label="A Multidisciplinary Leader">
        <div className="container">
          <div className="profile-editorial-card">
            <span className="section-gold-eyebrow">EXECUTIVE &amp; CIVIC PROFILE</span>
            <h2 className="profile-serif-heading">A Multidisciplinary Leader</h2>
            <blockquote className="profile-lead-statement">
              “Multidisciplinary leader with demonstrated impact across healthcare, business, social development, governance, and the arts. Proven ability to build, scale, and lead initiatives at community, institutional, and international levels, with a strong focus on execution, sustainability, and measurable outcomes.”
            </blockquote>
            <div className="profile-gold-divider"></div>
          </div>
        </div>
      </section>

      {/* 3 & 8. SOCIAL IMPACT & WOMEN'S EMPOWERMENT (Deep Plum Sanctuary) */}
      <section className="social-impact-section" aria-label="Social Impact and Sakhi Mandal">
        <div className="social-impact-glow"></div>
        <div className="container">
          <div className="social-impact-card">
            <div className="impact-header-row">
              <span className="impact-gold-tag">SOCIAL IMPACT</span>
              <span className="impact-state-tag">GUJARAT, INDIA</span>
            </div>

            <div className="impact-focal-layout">
              {/* Left Column: 30,000+ Metric Focus */}
              <div className="impact-metric-column">
                <span className="impact-huge-number">30,000+</span>
                <span className="impact-huge-label">Women Empowered</span>
                <span className="impact-huge-sub">Through the Sakhi Mandal Initiative (GSWT)</span>
              </div>

              {/* Right Column: Context & Recognition */}
              <div className="impact-narrative-column">
                <div className="impact-passage-block">
                  <h3 className="impact-narrative-title">Empowering Women Through Action</h3>
                  <p className="impact-narrative-p">
                    “Empowered 30,000+ women through structured self-help group programs.”
                  </p>
                  <p className="impact-narrative-p">
                    “A community-centered initiative focused on structured self-help and empowerment.”
                  </p>
                  <div className="impact-highlight-badge">
                    <CheckCircle2 size={16} className="badge-check-icon" />
                    <span>Recognized as a pilot project for women empowerment in Gujarat, India.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="impact-gold-frame-accent"></div>
          </div>
        </div>
      </section>

      {/* 4. HEALTHCARE & ENTREPRENEURSHIP */}
      <section className="healthcare-section" aria-label="Healthcare and Entrepreneurship">
        <div className="container">
          <div className="healthcare-header-block">
            <span className="section-gold-eyebrow">CLINICAL &amp; ENTERPRISE</span>
            <h2 className="section-serif-title">Healthcare &amp; Entrepreneurship</h2>
            <p className="healthcare-subtitle">
              Grounding restorative human care in clinical discipline and scalable health operations.
            </p>
          </div>

          <div className="healthcare-grid">
            {/* Left Card: Clinical Enterprise */}
            <div className="healthcare-card">
              <div className="card-top-icon">
                <Building2 size={24} className="card-icon-gold" />
              </div>
              <span className="card-category-tag">CLINICAL PRACTICE</span>
              <h3 className="healthcare-card-title">Founder &amp; Business Owner</h3>
              <p className="healthcare-card-org">Multi-specialty Physiotherapy Clinics (India)</p>
              
              <div className="healthcare-spec-badge">
                <span className="spec-dot">&bull;</span>
                <span>Clinical Specialization: <strong>Orthopaedic Musculoskeletal</strong></span>
              </div>

              <p className="healthcare-card-body">
                Founded and directed clinical facilities specializing in rehabilitation, movement therapy, and patient-centered musculoskeletal recovery.
              </p>
            </div>

            {/* Right Card: Hospital Administration */}
            <div className="healthcare-card">
              <div className="card-top-icon">
                <Award size={24} className="card-icon-gold" />
              </div>
              <span className="card-category-tag">INSTITUTIONAL GOVERNANCE</span>
              <h3 className="healthcare-card-title">Hospital Administration</h3>
              <p className="healthcare-card-org">Apollo Hospital, India</p>

              <div className="healthcare-spec-badge">
                <span className="spec-dot">&bull;</span>
                <span>Operational Leadership &amp; Administration</span>
              </div>

              <p className="healthcare-card-body">
                Delivered hospital administrative and operational oversight, aligning multidisciplinary care teams with stringent healthcare management standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. GOVERNANCE & DIRECTORSHIPS */}
      <section className="governance-section" aria-label="Governance and Directorships">
        <div className="container">
          <div className="governance-wrapper">
            <div className="governance-header">
              <span className="section-gold-eyebrow">FIDUCIARY &amp; BOARD OVERSIGHT</span>
              <h2 className="section-serif-title">Governance &amp; Directorships</h2>
            </div>

            <div className="governance-list">
              {directorships.map((d, idx) => (
                <div key={idx} className="governance-item">
                  <div className="gov-num-col">
                    <span className="gov-num">0{idx + 1}</span>
                  </div>
                  <div className="gov-info-col">
                    <div className="gov-role-line">
                      <span className="gov-role">{d.role}</span>
                      <span className="gov-sep">—</span>
                      <h3 className="gov-org">{d.organization}</h3>
                    </div>
                    {d.sub && <p className="gov-sub">{d.sub}</p>}
                    <p className="gov-note">{d.note}</p>
                  </div>
                  <div className="gov-gold-dash"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. COMMUNITY LEADERSHIP */}
      <section className="community-section" aria-label="Community Leadership Roles">
        <div className="container">
          <div className="community-header">
            <span className="section-gold-eyebrow">CIVIC ENGAGEMENT</span>
            <h2 className="section-serif-title">Community Leadership</h2>
            <p className="community-subtitle">Active board stewardship and regional civic leadership.</p>
          </div>

          <div className="community-grid">
            {communityRoles.map((role, idx) => (
              <div key={idx} className="community-card">
                <div className="community-card-header">
                  <span className="community-period-badge">{role.period}</span>
                  <span className="community-index">0{idx + 1}</span>
                </div>
                <h3 className="community-role-title">{role.role}</h3>
                <p className="community-org-name">{role.organization}</p>
                <p className="community-role-desc">{role.description}</p>
                <div className="community-card-bottom-line"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SELECT COMMUNITY INITIATIVES: BUILDING COMMUNITY */}
      <section className="initiatives-section" aria-label="Building Community Initiatives">
        <div className="container">
          <div className="initiatives-header">
            <span className="section-gold-eyebrow">LOCAL ADVOCACY</span>
            <h2 className="section-serif-title">Building Community</h2>
            <p className="initiatives-subtitle">Grassroots cultural, family, and educational initiatives.</p>
          </div>

          <div className="initiatives-grid">
            {communityInitiatives.map((item, idx) => (
              <div key={idx} className="initiative-editorial-card">
                <div className="initiative-marker-row">
                  <span className="initiative-icon-spark">&#10022;</span>
                  <span className="initiative-context-tag">{item.context}</span>
                </div>
                <h3 className="initiative-title">{item.title}</h3>
                <p className="initiative-note">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. COMMUNICATION & PUBLIC SPEAKING */}
      <section className="speaking-section" aria-label="Media, Publications and Speaking">
        <div className="container">
          <div className="speaking-editorial-card">
            <div className="speaking-header">
              <span className="section-gold-eyebrow">THOUGHT LEADERSHIP</span>
              <h2 className="section-serif-title">Media, Publications &amp; Speaking</h2>
            </div>

            <div className="speaking-items-grid">
              <div className="speaking-item">
                <div className="speaking-icon-box">
                  <BookOpen size={20} className="speaking-gold-icon" />
                </div>
                <div className="speaking-content">
                  <span className="speaking-label">MEDIA RECOGNITION</span>
                  <h3 className="speaking-name">Featured Press</h3>
                  <p className="speaking-desc">
                    Featured in <strong>Ahmedabad Mirror</strong> and regional publications for solo &amp; group art exhibitions.
                  </p>
                </div>
              </div>

              <div className="speaking-item">
                <div className="speaking-icon-box">
                  <BookOpen size={20} className="speaking-gold-icon" />
                </div>
                <div className="speaking-content">
                  <span className="speaking-label">WRITTEN CONTRIBUTIONS</span>
                  <h3 className="speaking-name">Published Author</h3>
                  <p className="speaking-desc">
                    Published articles on <strong>Alternative Therapies</strong> and holistic restorative modalities.
                  </p>
                </div>
              </div>

              <div className="speaking-item">
                <div className="speaking-icon-box">
                  <Mic size={20} className="speaking-gold-icon" />
                </div>
                <div className="speaking-content">
                  <span className="speaking-label">KEYNOTE &amp; LECTURES</span>
                  <h3 className="speaking-name">Speaker — Health Series Gujarat</h3>
                  <p className="speaking-desc">
                    Keynote lecture on <strong>Ergonomics, posture and cervical spondylitis</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. ACADEMIC & PROFESSIONAL QUALIFICATIONS */}
      <section className="qualifications-section" aria-label="Academic and Professional Qualifications">
        <div className="container">
          <div className="qualifications-header">
            <span className="section-gold-eyebrow">EDUCATION &amp; CREDENTIALS</span>
            <h2 className="section-serif-title">Academic &amp; Professional Qualifications</h2>
          </div>

          <div className="qualifications-grid">
            {qualifications.map((q, idx) => (
              <div key={idx} className="qualification-card">
                <div className="qual-top-row">
                  <span className="qual-type-tag">{q.type}</span>
                  <GraduationCap size={16} className="qual-icon" />
                </div>
                <h3 className="qual-degree-title">{q.title}</h3>
                <p className="qual-institution-line">{q.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. LEADERSHIP PHILOSOPHY */}
      <section className="philosophy-reflection-section" aria-label="Leadership With Purpose">
        <div className="container">
          <div className="philosophy-reflection-card">
            <span className="section-gold-eyebrow">INTEGRATIVE PRACTICE</span>
            <h2 className="philosophy-reflection-title">Leadership With Purpose</h2>
            <blockquote className="philosophy-reflection-quote">
              “Experience spanning healthcare enterprises, nonprofit leadership, governance roles, and international creative practice, with a consistent track record of building high-impact, scalable initiatives.”
            </blockquote>
          </div>
        </div>
      </section>

      {/* 12. FINAL CALL TO ACTION (Deep Plum Sanctuary) */}
      <section className="leadership-cta-section" aria-label="Explore the Creative Journey CTA">
        <div className="container">
          <div className="leadership-cta-box">
            <div className="cta-ambient-halo"></div>
            <div className="cta-content-wrapper">
              <span className="cta-gold-tag">CONTINUE THE EXPLORATION</span>
              <h2 className="cta-main-title">Explore the Creative Journey</h2>
              <p className="cta-subtitle-text">
                Discover how leadership, healing and creative expression come together in Lipsica Rore’s work.
              </p>

              <div className="cta-actions-group">
                <Link to="/art" className="btn btn-primary cta-btn-art">
                  <span>EXPLORE THE ART</span>
                  <ArrowRight size={15} className="cta-btn-arrow" />
                </Link>
                <Link to="/exhibitions" className="btn btn-secondary-light cta-btn-exhibitions">
                  <span>VIEW EXHIBITIONS</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
