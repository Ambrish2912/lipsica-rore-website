import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Award, CheckCircle2, Building2, BookOpen, Mic, GraduationCap } from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';
import './Leadership.css';

export default function Leadership() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const directorships = [
    {
      role: 'Director',
      organization: 'Xcellon Industries Limited',
      note: 'Corporate governance and strategic oversight.',
    },
    {
      role: 'Director',
      organization: 'Gujarat Social Welfare Trust',
      note: 'Institutional social development and state-level community programs.',
    },
    {
      role: 'Board Member',
      organization: 'NISPA',
      sub: 'Network of Independent Schools Parents Association',
      note: 'Governance, regional membership, and parent community advocacy.',
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
      description: 'Overseeing membership development, independent school community networking, and regional outreach.',
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
    {
      role: 'Founder',
      organization: 'Niagara Art Contest (NPMC Initiative)',
      period: 'Civic Initiative',
      description: 'Recognized by the Mayor of Niagara-on-the-Lake for fostering youth and community arts engagement.',
    },
  ];

  const communityInitiatives = [
    {
      title: 'Hosted NSPA Welcome Breakfast',
      period: '2025',
      context: 'Host & Lead Organizer',
      note: 'Welcoming independent school parent delegates and fostering regional community connection.',
    },
    {
      title: 'Initiated Community Recipe Book',
      period: 'Living Archive',
      context: 'Multi-Family Initiative',
      note: 'A collaborative living archive celebrating diverse family heritages and culinary traditions.',
    },
    {
      title: 'Organized Family Bowling & Appreciation Event',
      period: 'May 2026',
      context: 'Community Gathering',
      note: 'Cross-generational connection gathering celebrating parent and school community appreciation.',
    },
    {
      title: 'Founder — Niagara Art Contest',
      period: 'NPMC Initiative',
      context: 'Youth Arts Recognition',
      note: 'Recognized by the Mayor of Niagara-on-the-Lake for inspiring local artistic engagement.',
    },
  ];

  const leadershipTimeline = [
    {
      period: '2005–2008',
      role: 'Director',
      organization: 'Gujarat Social Welfare Trust',
      focus: 'Women Empowerment & Sakhi Mandal Initiative',
    },
    {
      period: '2020–2022',
      role: 'Director, Junior Tennis Program',
      organization: 'Fort Erie Tennis Club',
      focus: 'Youth Athletics & Player Development',
    },
    {
      period: '2023–Present',
      role: 'Board Member & Co-Chair, Membership',
      organization: 'NISPA',
      focus: 'Network Governance & Membership Strategy',
    },
    {
      period: '2025–2026',
      role: 'President',
      organization: 'Ridley College Family Guild',
      focus: 'Guild Leadership & Parent Community Engagement',
    },
  ];

  const qualifications = [
    {
      title: 'Master’s in Physiotherapy (Orthopedics)',
      type: 'POSTGRADUATE DEGREE',
      focus: 'Advanced Musculoskeletal & Clinical Rehabilitation',
      institution: 'Master’s Level',
    },
    {
      title: 'Bachelor’s in Physiotherapy',
      type: 'UNDERGRADUATE DEGREE',
      focus: 'Clinical Physical Therapy & Human Anatomy',
      institution: 'Bachelor’s Level',
    },
    {
      title: 'Degree in Hospital Administration & Healthcare Management',
      type: 'EXECUTIVE QUALIFICATION',
      focus: 'Healthcare Operations & Institutional Leadership',
      institution: 'Professional Qualification',
    },
    {
      title: 'Certification — Art of Rhetoric: Persuasive Communication',
      type: 'EXECUTIVE CERTIFICATE',
      focus: 'Persuasive Communication & Executive Speech',
      institution: 'Harvard University',
    },
    {
      title: 'Pursuing — Negotiation & Leadership',
      type: 'EXECUTIVE EDUCATION (IN PROGRESS)',
      focus: 'Executive Negotiation & Strategic Leadership',
      institution: 'Yale University',
      isPursuing: true,
    },
  ];

  return (
    <div className="leadership-page">
      {/* 1. HERO SECTION (Compact, Editorial, With Scroll Cue) */}
      <section className="leadership-hero-section" aria-label="Leadership Hero">
        <div className="leadership-hero-ambient"></div>
        <div className="container">
          <div className="leadership-hero-grid">
            {/* Left Column: Narrative Headline */}
            <div className="leadership-hero-content">
              <div className="leadership-hero-eyebrow hero-reveal-eyebrow">
                <span>LEADERSHIP &amp; IMPACT</span>
              </div>

              <h1 className="leadership-hero-headline hero-reveal-heading">
                Beyond the <br />
                <span className="headline-italic">Canvas</span>
              </h1>

              <p className="leadership-hero-subtext hero-reveal-subtext">
                “An evolving journey across healthcare, entrepreneurship, social development, governance and community leadership.”
              </p>

              <div className="leadership-hero-location hero-reveal-meta">
                <MapPin size={14} className="hero-pin-icon" />
                <span>Niagara-on-the-Lake, Canada</span>
              </div>
            </div>

            {/* Right Column: Editorial Visual Frame (Ready for portrait) */}
            <div className="leadership-hero-visual hero-reveal-visual">
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

          {/* Subtle Scroll Cue */}
          <div
            className={`leadership-scroll-cue ${hasScrolled ? 'scrolled-hidden' : ''}`}
            aria-hidden="true"
          >
            <span className="scroll-cue-text">EXPLORE IMPACT</span>
            <span className="scroll-cue-arrow">&darr;</span>
          </div>
        </div>
      </section>

      {/* 2. PROFILE STATEMENT (A Multidisciplinary Leader) */}
      <section className="leadership-profile-section" aria-label="A Multidisciplinary Leader">
        <div className="container">
          <div className="profile-editorial-statement reveal-on-scroll">
            <span className="section-gold-eyebrow">EXECUTIVE &amp; CIVIC PROFILE</span>
            <h2 className="profile-statement-heading">A Multidisciplinary Leader</h2>
            <blockquote className="profile-large-statement">
              “Multidisciplinary leader with demonstrated impact across healthcare, business, social development, governance, and the arts.”
            </blockquote>
            <p className="profile-supporting-p">
              Proven ability to build, scale, and lead initiatives at community, institutional, and international levels, with a strong focus on execution, sustainability, and measurable outcomes.
            </p>
            <div className="profile-gold-divider"></div>
          </div>
        </div>
      </section>

      {/* 3. 30,000+ IMPACT SECTION (Visual Centerpiece in Deep Plum) */}
      <section className="social-impact-section" aria-label="30,000+ Women Empowered">
        <div className="social-impact-glow"></div>
        <div className="container">
          <div className="social-impact-card reveal-on-scroll">
            <div className="impact-header-row">
              <span className="impact-gold-tag">SOCIAL IMPACT</span>
              <span className="impact-state-tag">GUJARAT, INDIA</span>
            </div>

            <div className="impact-focal-layout">
              {/* Left Column: 30,000+ Metric Focus with Organic Gold Motif */}
              <div className="impact-metric-column">
                <div className="impact-motif-backdrop" aria-hidden="true">
                  <svg viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="impact-radial-svg">
                    <circle cx="120" cy="120" r="110" stroke="#C6A15B" strokeWidth="0.8" opacity="0.3" strokeDasharray="4 6" />
                    <circle cx="120" cy="120" r="85" stroke="#B9828F" strokeWidth="0.9" opacity="0.35" />
                    <circle cx="120" cy="120" r="55" stroke="#C6A15B" strokeWidth="1" opacity="0.4" />
                  </svg>
                </div>
                <AnimatedCounter target={30000} suffix="+" duration={1800} className="impact-huge-number" />
                <span className="impact-huge-label">WOMEN EMPOWERED</span>
                <span className="impact-huge-sub">Through the Sakhi Mandal Initiative (GSWT)</span>
              </div>

              {/* Right Column: Context & Recognition */}
              <div className="impact-narrative-column">
                <div className="impact-passage-block">
                  <h3 className="impact-narrative-title">Empowering Women Through Action</h3>
                  <blockquote className="impact-quote-highlight">
                    “Empowered 30,000+ women through structured self-help group programs.”
                  </blockquote>
                  <p className="impact-narrative-p">
                    “A community-centered initiative focused on structured self-help and empowerment.”
                  </p>
                  <div className="impact-highlight-badge">
                    <CheckCircle2 size={16} className="badge-check-icon" />
                    <span>The initiative was recognized as a pilot project for women empowerment in Gujarat, India.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="impact-gold-frame-accent"></div>
          </div>
        </div>
      </section>

      {/* 4. HEALTHCARE & ENTREPRENEURSHIP (Asymmetric Editorial Layout) */}
      <section className="healthcare-section" aria-label="Healthcare and Entrepreneurship">
        <div className="container">
          <div className="healthcare-header-block reveal-on-scroll">
            <span className="section-gold-eyebrow">CLINICAL &amp; ENTERPRISE</span>
            <h2 className="section-serif-title">Healthcare &amp; Entrepreneurship</h2>
            <p className="healthcare-subtitle">
              Grounding restorative human care in clinical discipline and scalable health operations.
            </p>
          </div>

          <div className="healthcare-asymmetric-grid">
            {/* Left Dominant Card: Clinical Enterprise */}
            <div className="healthcare-card dominant-card reveal-on-scroll">
              <div className="card-top-icon">
                <Building2 size={24} className="card-icon-gold" />
              </div>
              <span className="card-category-tag">CLINICAL PRACTICE &amp; FOUNDERSHIP</span>
              <h3 className="healthcare-card-title">Founder &amp; Business Owner</h3>
              <p className="healthcare-card-org">Multi-specialty Physiotherapy Clinics (India)</p>
              
              <div className="healthcare-spec-badge">
                <span className="spec-dot">&bull;</span>
                <span>Clinical Specialization: <strong>Orthopaedic musculoskeletal</strong></span>
              </div>

              <p className="healthcare-card-body">
                Founded and directed multi-specialty clinical facilities specializing in orthopaedic musculoskeletal rehabilitation, movement therapy, and patient-centered recovery.
              </p>

              <div className="academic-reference-pills">
                <span className="academic-pill">Master’s in Physiotherapy (Orthopedics)</span>
                <span className="academic-pill">Bachelor’s in Physiotherapy</span>
              </div>
            </div>

            {/* Right Card: Hospital Administration */}
            <div className="healthcare-card supportive-card reveal-on-scroll">
              <div className="card-top-icon">
                <Award size={24} className="card-icon-gold" />
              </div>
              <span className="card-category-tag">INSTITUTIONAL LEADERSHIP</span>
              <h3 className="healthcare-card-title">Experience in Hospital Administration</h3>
              <p className="healthcare-card-org">Apollo Hospital, India</p>

              <div className="healthcare-spec-badge">
                <span className="spec-dot">&bull;</span>
                <span>Operational Leadership &amp; Administration</span>
              </div>

              <p className="healthcare-card-body">
                Delivered hospital administrative and operational oversight, managing clinical operations, multidisciplinary coordination, and care protocols.
              </p>

              <div className="academic-reference-pills">
                <span className="academic-pill">Degree in Hospital Administration &amp; Healthcare Management</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. GOVERNANCE & DIRECTORSHIPS (Editorial List with Fine Gold Lines) */}
      <section className="governance-section" aria-label="Governance and Directorships">
        <div className="container">
          <div className="governance-wrapper reveal-on-scroll">
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
                    {d.sub && <p className="gov-sub">({d.sub})</p>}
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
          <div className="community-header reveal-on-scroll">
            <span className="section-gold-eyebrow">CIVIC ENGAGEMENT</span>
            <h2 className="section-serif-title">Community Leadership</h2>
            <p className="community-subtitle">Active board stewardship and regional civic leadership.</p>
          </div>

          <div className="community-grid">
            {communityRoles.map((role, idx) => (
              <div key={idx} className="community-card reveal-on-scroll">
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

      {/* 7. COMMUNITY INITIATIVES (Building Community) */}
      <section className="initiatives-section" aria-label="Building Community Initiatives">
        <div className="container">
          <div className="initiatives-header reveal-on-scroll">
            <span className="section-gold-eyebrow">LOCAL ADVOCACY</span>
            <h2 className="section-serif-title">Building Community</h2>
            <p className="initiatives-subtitle">Grassroots cultural, family, and educational initiatives.</p>
          </div>

          <div className="initiatives-grid">
            {communityInitiatives.map((item, idx) => (
              <div key={idx} className="initiative-editorial-card reveal-on-scroll">
                <div className="initiative-marker-row">
                  <span className="initiative-icon-spark">&#10022;</span>
                  <span className="initiative-context-tag">{item.period}</span>
                </div>
                <h3 className="initiative-title">{item.title}</h3>
                <p className="initiative-note">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. LEADERSHIP TIMELINE (Refined Chronology) */}
      <section className="leadership-timeline-section" aria-label="Leadership Timeline">
        <div className="container">
          <div className="lead-timeline-header reveal-on-scroll">
            <span className="section-gold-eyebrow">CHRONOLOGY</span>
            <h2 className="section-serif-title">Leadership Journey Through Time</h2>
          </div>

          <div className="lead-timeline-container reveal-on-scroll">
            <div className="lead-timeline-spine"></div>
            <div className="lead-timeline-list">
              {leadershipTimeline.map((item, idx) => (
                <div key={idx} className="lead-timeline-item">
                  <div className="lead-timeline-period">
                    <span className="period-year-text">{item.period}</span>
                  </div>
                  <div className="lead-timeline-dot">
                    <span className="dot-halo"></span>
                    <span className="dot-core"></span>
                  </div>
                  <div className="lead-timeline-content">
                    <h3 className="lead-timeline-role">{item.role}</h3>
                    <p className="lead-timeline-org">{item.organization}</p>
                    <p className="lead-timeline-focus">{item.focus}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. MEDIA & SPEAKING (Media, Publications & Speaking) */}
      <section className="speaking-section" aria-label="Media, Publications and Speaking">
        <div className="container">
          <div className="speaking-editorial-card reveal-on-scroll">
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
                  <h3 className="speaking-name">Published Articles</h3>
                  <p className="speaking-desc">
                    Published articles on <strong>Alternative Therapies</strong> and holistic health modalities.
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
                    Keynote lectures on <strong>Ergonomics, posture and cervical spondylitis</strong>.
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
          <div className="qualifications-header reveal-on-scroll">
            <span className="section-gold-eyebrow">EDUCATION &amp; CREDENTIALS</span>
            <h2 className="section-serif-title">Academic &amp; Professional Qualifications</h2>
          </div>

          <div className="qualifications-grid">
            {qualifications.map((q, idx) => (
              <div key={idx} className={`qualification-card ${q.isPursuing ? 'pursuing-card' : ''} reveal-on-scroll`}>
                <div className="qual-top-row">
                  <span className={`qual-type-tag ${q.isPursuing ? 'tag-pursuing' : ''}`}>{q.type}</span>
                  <GraduationCap size={16} className="qual-icon" />
                </div>
                <h3 className="qual-degree-title">{q.title}</h3>
                <p className="qual-institution-line">{q.focus}</p>
                <span className="qual-school-badge">{q.institution}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. ART + LEADERSHIP CONNECTION (Beyond the Canvas) */}
      <section className="philosophy-reflection-section" aria-label="Beyond the Canvas Integration">
        <div className="container">
          <div className="philosophy-reflection-card reveal-on-scroll">
            <span className="section-gold-eyebrow">INTEGRATIVE PRACTICE</span>
            <h2 className="philosophy-reflection-title">Beyond the Canvas</h2>
            <blockquote className="philosophy-reflection-quote">
              “Healthcare, community leadership, governance and creative practice exist alongside one another within Lipsica Rore’s multidisciplinary journey.”
            </blockquote>
            <div className="philosophy-gold-connector" aria-hidden="true">
              <span className="connector-line"></span>
              <span className="connector-spark">&#10022;</span>
              <span className="connector-line"></span>
            </div>
          </div>
        </div>
      </section>

      {/* 12. FINAL CALL TO ACTION (Explore the Creative Journey) */}
      <section className="leadership-cta-section" aria-label="Explore the Creative Journey CTA">
        <div className="container">
          <div className="leadership-cta-box reveal-on-scroll">
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
                  <ArrowRight size={15} className="cta-btn-arrow" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
