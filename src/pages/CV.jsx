import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, CheckCircle2, GraduationCap, Building2, Award, BookOpen, Mic } from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';
import './CV.css';

export default function CV() {
  const currentRoles = [
    {
      role: 'President',
      organization: 'Ridley College Family Guild',
      status: 'CURRENT ACTIVE MANDATE',
      focus: 'Family community engagement, educational enrichment, and guild leadership.',
    },
    {
      role: 'Board Member & Co-Chair, Membership',
      organization: 'NISPA',
      sub: 'Network of Independent Schools Parents Association',
      status: 'CURRENT ACTIVE MANDATE',
      focus: 'Regional independent school parent network strategy and membership development.',
    },
  ];

  const qualifications = [
    {
      title: 'Master’s in Physiotherapy (Orthopedics)',
      type: 'POSTGRADUATE DEGREE',
      institution: 'Orthopaedic Musculoskeletal Specialization',
    },
    {
      title: 'Bachelor’s in Physiotherapy',
      type: 'UNDERGRADUATE DEGREE',
      institution: 'Clinical Physical Therapy & Rehabilitation',
    },
    {
      title: 'Degree in Hospital Administration & Healthcare Management',
      type: 'HEALTHCARE MANAGEMENT',
      institution: 'Institutional Healthcare Administration',
    },
    {
      title: 'Certification — Art of Rhetoric: Persuasive Communication',
      type: 'EXECUTIVE CERTIFICATION',
      institution: 'Harvard University',
    },
    {
      title: 'Pursuing — Negotiation & Leadership',
      type: 'EXECUTIVE EDUCATION (IN PROGRESS)',
      institution: 'Yale University',
    },
  ];

  const leadershipRoles = [
    {
      period: '2025–2026',
      role: 'President',
      organization: 'Ridley College Family Guild',
      category: 'COMMUNITY GOVERNANCE',
      description: 'Leading guild governance and fostering active family participation.',
    },
    {
      period: '2023–Present',
      role: 'Board Member & Co-Chair, Membership',
      organization: 'NISPA',
      category: 'REGIONAL NETWORK',
      description: 'Co-chairing membership and school network collaboration across parent associations.',
    },
    {
      period: '2020–2022',
      role: 'Director, Junior Tennis Program',
      organization: 'Fort Erie Tennis Club',
      category: 'YOUTH ATHLETICS',
      description: 'Directed youth athletics programs and community player development.',
    },
    {
      period: '2005–2008',
      role: 'Director',
      organization: 'Gujarat Social Welfare Trust',
      category: 'SOCIAL DEVELOPMENT',
      description: 'Directed social welfare initiatives and women empowerment programs.',
    },
    {
      period: 'Corporate Oversight',
      role: 'Director',
      organization: 'Xcellon Industries Limited',
      category: 'DIRECTORSHIP',
      description: 'Corporate fiduciary stewardship and strategic governance.',
    },
    {
      period: 'Board Member',
      role: 'Board Member',
      organization: 'NISPA',
      category: 'GOVERNANCE',
      description: 'Network of Independent Schools Parents Association board representation.',
    },
  ];

  const selectedExhibitions = [
    { year: '2026', title: 'Muza', venue: 'Exhibition Super Fair 2026', location: 'Brooklyn, USA' },
    { year: '2025', title: 'Introspection', venue: 'Southampton Art Exhibition', location: 'USA' },
    { year: '2024', title: 'Introspection', venue: 'Art on Wheels', location: 'USA' },
    { year: '2024', title: 'Reflections of Introspection', venue: 'Art on Wheels', location: 'USA' },
    { year: '2023', title: 'Healing Dimensions', venue: 'White Oaks & Lundy’s Manor', location: 'Canada' },
    { year: '2012', title: 'Healing', venue: 'Ahmedabad Art Gallery', location: 'India' },
    { year: '2009', title: 'Healing Earth', venue: 'Hutchison Art Gallery', location: 'India' },
  ];

  const communityEngagements = [
    {
      title: 'Niagara Art Contest (NPMC Initiative)',
      role: 'Founder',
      note: 'Recognized by the Mayor of Niagara-on-the-Lake.',
    },
    {
      title: 'NSPA Welcome Breakfast (2025)',
      role: 'Host & Lead Organizer',
      note: 'Facilitating connection across regional independent school parent communities.',
    },
    {
      title: 'Community Recipe Book',
      role: 'Initiator',
      note: 'Multi-family collaborative cultural and culinary heritage archive.',
    },
    {
      title: 'Family Bowling & Appreciation Event',
      role: 'Organizer • May 2026',
      note: 'Community appreciation and cross-generational connection gathering.',
    },
  ];

  return (
    <div className="cv-page">
      {/* 1. PAGE HERO */}
      <section className="cv-hero-section" aria-label="Curriculum Vitae Hero">
        <div className="cv-hero-ambient"></div>
        <div className="container">
          <div className="cv-hero-content">
            <div className="cv-hero-eyebrow hero-reveal-eyebrow">
              <span>PROFESSIONAL JOURNEY</span>
            </div>

            <h1 className="cv-hero-headline hero-reveal-heading">
              A Journey of Purpose <br />
              <span className="headline-italic">&amp; Practice</span>
            </h1>

            <p className="cv-hero-subtext hero-reveal-subtext">
              “An evolving journey across healthcare, entrepreneurship, governance, community leadership and the arts.”
            </p>

            <div className="cv-artist-badge hero-reveal-meta">
              <span className="cv-artist-name">Lipsica Rore</span>
              <span className="cv-artist-dot">&bull;</span>
              <div className="cv-location-inline">
                <MapPin size={13} className="cv-pin-icon" />
                <span>Niagara-on-the-Lake, Canada</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. CURRENT ENGAGEMENT */}
      <section className="cv-current-section" aria-label="Current Active Engagements">
        <div className="container">
          <div className="cv-current-wrapper">
            <span className="cv-gold-eyebrow">CURRENT ENGAGEMENT</span>
            <div className="cv-current-grid">
              {currentRoles.map((item, idx) => (
                <div key={idx} className="current-role-card">
                  <span className="current-status-tag">{item.status}</span>
                  <h3 className="current-role-title">{item.role}</h3>
                  <p className="current-org-name">{item.organization}</p>
                  {item.sub && <p className="current-sub-name">{item.sub}</p>}
                  <p className="current-focus-note">{item.focus}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROFILE */}
      <section className="cv-profile-section" aria-label="Professional Profile">
        <div className="container">
          <div className="cv-profile-card">
            <span className="cv-gold-eyebrow">EXECUTIVE &amp; ARTISTIC DOSSIER</span>
            <h2 className="cv-serif-heading">Profile</h2>
            <blockquote className="cv-profile-statement">
              “Multidisciplinary leader with demonstrated impact across healthcare, business, social development, governance, and the arts. Proven ability to build, scale, and lead initiatives at community, institutional, and international levels, with a strong focus on execution, sustainability, and measurable outcomes.”
            </blockquote>
            <div className="cv-gold-divider"></div>
          </div>
        </div>
      </section>

      {/* 3. ACADEMIC & PROFESSIONAL QUALIFICATIONS */}
      <section className="cv-qualifications-section" aria-label="Academic and Professional Qualifications">
        <div className="container">
          <div className="cv-section-header">
            <span className="cv-gold-eyebrow">EDUCATION &amp; CREDENTIALS</span>
            <h2 className="cv-serif-heading">Academic &amp; Professional Qualifications</h2>
          </div>

          <div className="cv-qualifications-grid">
            {qualifications.map((q, idx) => (
              <div key={idx} className="cv-qual-item">
                <div className="qual-item-header">
                  <span className="qual-tag">{q.type}</span>
                  <GraduationCap size={16} className="qual-gold-icon" />
                </div>
                <h3 className="qual-title">{q.title}</h3>
                <p className="qual-inst">{q.institution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HEALTHCARE & PROFESSIONAL EXPERIENCE */}
      <section className="cv-healthcare-section" aria-label="Healthcare and Entrepreneurship">
        <div className="container">
          <div className="cv-section-header">
            <span className="cv-gold-eyebrow">CLINICAL &amp; ENTERPRISE</span>
            <h2 className="cv-serif-heading">Healthcare &amp; Entrepreneurship</h2>
          </div>

          <div className="cv-healthcare-grid">
            <div className="cv-health-card">
              <div className="health-card-icon">
                <Building2 size={22} className="gold-icon" />
              </div>
              <span className="health-card-eyebrow">CLINICAL PRACTICE</span>
              <h3 className="health-card-title">Founder &amp; Business Owner</h3>
              <p className="health-card-org">Multi-specialty Physiotherapy Clinics (India)</p>
              <div className="health-spec-line">
                <span>Clinical Specialization: <strong>Orthopaedic Musculoskeletal</strong></span>
              </div>
              <p className="health-card-body">
                Founded and directed physical therapy healthcare practices providing restorative rehabilitation and clinical musculoskeletal treatments.
              </p>
            </div>

            <div className="cv-health-card">
              <div className="health-card-icon">
                <Award size={22} className="gold-icon" />
              </div>
              <span className="health-card-eyebrow">HEALTHCARE MANAGEMENT</span>
              <h3 className="health-card-title">Hospital Administration</h3>
              <p className="health-card-org">Apollo Hospital, India</p>
              <div className="health-spec-line">
                <span>Experience in <strong>Hospital Administration &amp; Operational Leadership</strong></span>
              </div>
              <p className="health-card-body">
                Managed operational and institutional administrative workflows, maintaining stringent healthcare standards across hospital departments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LEADERSHIP, DIRECTORSHIPS & GOVERNANCE */}
      <section className="cv-governance-section" aria-label="Leadership Directorships and Governance">
        <div className="container">
          <div className="cv-section-header">
            <span className="cv-gold-eyebrow">GOVERNANCE &amp; TRUST</span>
            <h2 className="cv-serif-heading">Leadership, Directorships &amp; Governance</h2>
          </div>

          <div className="cv-timeline-vertical">
            {leadershipRoles.map((role, idx) => (
              <div key={idx} className="cv-timeline-entry">
                <div className="timeline-left-period">
                  <span className="period-text">{role.period}</span>
                </div>
                <div className="timeline-center-node">
                  <span className="node-ring"></span>
                </div>
                <div className="timeline-right-details">
                  <span className="timeline-cat">{role.category}</span>
                  <h3 className="timeline-role">{role.role}</h3>
                  <p className="timeline-org">{role.organization}</p>
                  <p className="timeline-desc">{role.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SOCIAL IMPACT (Deep Plum Sanctuary) */}
      <section className="cv-impact-section" aria-label="Social Impact">
        <div className="impact-ambient-glow"></div>
        <div className="container">
          <div className="cv-impact-card">
            <div className="impact-top-badge">
              <span className="impact-gold-pill">SOCIAL IMPACT</span>
              <span className="impact-region">GUJARAT, INDIA</span>
            </div>

            <div className="impact-content-grid">
              <div className="impact-num-box">
                <AnimatedCounter target={30000} suffix="+" duration={1800} className="huge-num" />
                <span className="huge-lbl">Women Empowered</span>
                <span className="huge-sub">Through the Sakhi Mandal Initiative (GSWT)</span>
              </div>

              <div className="impact-text-box">
                <p className="impact-p">
                  “Empowered 30,000+ women through structured self-help group programs.”
                </p>
                <div className="impact-check-badge">
                  <CheckCircle2 size={16} className="check-icon" />
                  <span>The initiative was recognized as a pilot project for women empowerment in Gujarat, India.</span>
                </div>
              </div>
            </div>

            <div className="impact-frame-line"></div>
          </div>
        </div>
      </section>

      {/* 7. ART PRACTICE & EXHIBITIONS */}
      <section className="cv-art-section" aria-label="Art Practice and Exhibitions">
        <div className="container">
          <div className="cv-section-header">
            <span className="cv-gold-eyebrow">CREATIVE PRACTICE</span>
            <h2 className="cv-serif-heading">Art Practice &amp; International Exhibitions</h2>
            <p className="cv-subtitle-statement">
              “Multidisciplinary artist with exhibitions across India, Canada, and the United States.”
            </p>
          </div>

          <div className="cv-exhibitions-table">
            {selectedExhibitions.map((ex, idx) => (
              <div key={idx} className="cv-exhibition-row">
                <span className="ex-year">{ex.year}</span>
                <span className="ex-title">{ex.title}</span>
                <span className="ex-venue">{ex.venue}</span>
                <span className="ex-loc">{ex.location}</span>
              </div>
            ))}
          </div>

          <div className="cv-art-action-row">
            <Link to="/exhibitions" className="btn btn-outline cv-exhibitions-btn">
              <span>VIEW FULL EXHIBITION HISTORY</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. MEDIA, PUBLICATIONS & SPEAKING */}
      <section className="cv-media-section" aria-label="Media, Publications and Speaking">
        <div className="container">
          <div className="cv-section-header">
            <span className="cv-gold-eyebrow">DISSEMINATION &amp; PRESS</span>
            <h2 className="cv-serif-heading">Media, Publications &amp; Speaking</h2>
          </div>

          <div className="cv-media-grid">
            <div className="cv-media-box">
              <div className="media-box-icon">
                <BookOpen size={20} className="gold-icon" />
              </div>
              <span className="media-box-tag">FEATURED PRESS</span>
              <h3 className="media-box-title">Ahmedabad Mirror</h3>
              <p className="media-box-desc">
                Featured in <strong>Ahmedabad Mirror</strong> and regional publications in connection with art exhibitions.
              </p>
            </div>

            <div className="cv-media-box">
              <div className="media-box-icon">
                <BookOpen size={20} className="gold-icon" />
              </div>
              <span className="media-box-tag">PUBLICATIONS</span>
              <h3 className="media-box-title">Articles on Alternative Therapies</h3>
              <p className="media-box-desc">
                Published articles on <strong>Alternative Therapies</strong> and holistic wellness modalities.
              </p>
            </div>

            <div className="cv-media-box">
              <div className="media-box-icon">
                <Mic size={20} className="gold-icon" />
              </div>
              <span className="media-box-tag">KEYNOTE SPEAKER</span>
              <h3 className="media-box-title">Health Series Gujarat</h3>
              <p className="media-box-desc">
                Lecture on <strong>Ergonomics, posture and cervical spondylitis</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. COMMUNITY ENGAGEMENT */}
      <section className="cv-community-section" aria-label="Community Engagement">
        <div className="container">
          <div className="cv-section-header">
            <span className="cv-gold-eyebrow">CIVIC INITIATIVES</span>
            <h2 className="cv-serif-heading">Community Engagement</h2>
          </div>

          <div className="cv-community-grid">
            {communityEngagements.map((item, idx) => (
              <div key={idx} className="cv-comm-item">
                <span className="comm-role-tag">{item.role}</span>
                <h3 className="comm-title">{item.title}</h3>
                <p className="comm-note">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. POSITIONING SUMMARY */}
      <section className="cv-summary-section" aria-label="Positioning Summary">
        <div className="container">
          <div className="cv-summary-card">
            <span className="cv-gold-eyebrow">INTEGRATIVE PRACTICE</span>
            <blockquote className="cv-summary-statement">
              “Across healthcare enterprises, nonprofit leadership, governance roles and international creative practice, Lipsica Rore brings together a multidisciplinary approach to building meaningful initiatives and creative experiences.”
            </blockquote>
          </div>
        </div>
      </section>

      {/* 12. CONNECT WITH LIPSICA CTA (Deep Plum Sanctuary) */}
      <section className="cv-cta-section" aria-label="Connect with Lipsica CTA">
        <div className="container">
          <div className="cv-cta-box">
            <div className="cta-halo-glow"></div>
            <div className="cta-content-wrapper">
              <span className="cta-gold-tag">INQUIRIES &amp; COLLABORATION</span>
              <h2 className="cta-main-title">Connect With Lipsica</h2>
              <p className="cta-subtitle-text">
                For professional, community, gallery or collaboration inquiries, get in touch.
              </p>

              <div className="cta-actions-group">
                <Link to="/contact" className="btn btn-primary cta-btn-contact">
                  <span>CONTACT LIPSICA</span>
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
