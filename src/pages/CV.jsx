import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, CheckCircle2, GraduationCap, Building2, Award, BookOpen, Mic, Palette } from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';
import './CV.css';

export default function CV() {
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

  const timelineEntries = [
    {
      period: '2025–2026',
      role: 'President',
      organization: 'Ridley College Family Guild',
      category: 'COMMUNITY GOVERNANCE',
      description: 'Leading guild governance, parent community engagement, and family enrichment programming.',
    },
    {
      period: '2023–Present',
      role: 'Board Member & Co-Chair, Membership',
      organization: 'NISPA (Network of Independent Schools Parents Association)',
      category: 'REGIONAL NETWORK',
      description: 'Overseeing membership development, independent school community networking, and parent advocacy.',
    },
    {
      period: '2020–2022',
      role: 'Director, Junior Tennis Program',
      organization: 'Fort Erie Tennis Club',
      category: 'YOUTH ATHLETICS',
      description: 'Directing youth athletics programs, player development pathways, and regional sports programming.',
    },
    {
      period: '2005–2008',
      role: 'Director',
      organization: 'Gujarat Social Welfare Trust',
      category: 'SOCIAL DEVELOPMENT',
      description: 'Spearheading women empowerment programs and state-wide community self-help groups.',
    },
  ];

  const professionalHighlights = [
    {
      role: 'Director',
      organization: 'Xcellon Industries Limited',
      note: 'Corporate fiduciary stewardship and strategic governance.',
    },
    {
      role: 'Director',
      organization: 'Gujarat Social Welfare Trust',
      note: 'Institutional social development and program strategy.',
    },
    {
      role: 'Board Member',
      organization: 'NISPA',
      sub: 'Network of Independent Schools Parents Association',
      note: 'Governance, regional membership, and parent community advocacy.',
    },
    {
      role: 'Founder & Business Owner',
      organization: 'Multi-specialty Physiotherapy Clinics (India)',
      note: 'Clinical leadership in orthopaedic musculoskeletal rehabilitation.',
    },
    {
      role: 'Hospital Administration',
      organization: 'Apollo Hospital, India',
      note: 'Operational leadership and healthcare administration standards.',
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
      type: 'EXECUTIVE CERTIFICATE',
      institution: 'Harvard University',
    },
    {
      title: 'Pursuing — Negotiation & Leadership',
      type: 'EXECUTIVE EDUCATION (IN PROGRESS)',
      institution: 'Yale University',
      isPursuing: true,
    },
  ];

  const leadershipRoles = [
    {
      role: 'Director',
      organization: 'Xcellon Industries Limited',
      detail: 'Corporate fiduciary stewardship and strategic governance oversight.',
    },
    {
      role: 'Director',
      organization: 'Gujarat Social Welfare Trust',
      detail: 'Spearheading statewide social development and women empowerment.',
    },
    {
      role: 'Board Member',
      organization: 'NISPA',
      sub: 'Network of Independent Schools Parents Association',
      detail: 'Governance, regional membership, and independent school parent advocacy.',
    },
    {
      role: 'President (2025–2026)',
      organization: 'Ridley College Family Guild',
      detail: 'Leading guild governance and family community enrichment.',
    },
    {
      role: 'Board Member & Co-Chair, Membership (2023–Present)',
      organization: 'NISPA',
      detail: 'Co-chairing membership and school network collaboration.',
    },
    {
      role: 'Director, Junior Tennis Program (2020–2022)',
      organization: 'Fort Erie Tennis Club',
      detail: 'Directing youth athletics development and regional sports programs.',
    },
    {
      role: 'Director (2005–2008)',
      organization: 'Gujarat Social Welfare Trust',
      detail: 'Directing statewide social welfare and community self-help groups.',
    },
  ];

  const communityEngagements = [
    {
      title: 'Founder — Niagara Art Contest',
      context: 'NPMC Initiative',
      note: 'Recognized by the Mayor of Niagara-on-the-Lake.',
    },
    {
      title: 'Hosted NSPA Welcome Breakfast',
      context: '2025 Initiative',
      note: 'Facilitating connection across regional independent school parent communities.',
    },
    {
      title: 'Initiated Community Recipe Book',
      context: 'Living Archive',
      note: 'A collaborative living archive celebrating diverse family heritages.',
    },
    {
      title: 'Organized Family Bowling & Appreciation Event',
      context: 'May 2026 Event',
      note: 'Cross-generational gathering celebrating community appreciation.',
    },
  ];

  return (
    <div className="cv-page">
      {/* 1. HERO SECTION (Compact, Editorial, Scroll Cue) */}
      <section className="cv-hero-section" aria-label="Curriculum Vitae Hero">
        <div className="cv-hero-ambient"></div>
        <div className="container">
          <div className="cv-hero-content">
            <div className="cv-hero-eyebrow hero-reveal-eyebrow">
              <span>CURRICULUM VITAE</span>
            </div>

            <h1 className="cv-hero-headline hero-reveal-heading">
              A Journey of <br />
              <span className="headline-italic">Practice &amp; Purpose</span>
            </h1>

            <p className="cv-hero-subtext hero-reveal-subtext">
              “Multidisciplinary leader and contemporary artist with demonstrated impact across healthcare, business, social development, governance, and the arts.”
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

          {/* Subtle Scroll Cue */}
          <div
            className={`cv-scroll-cue ${hasScrolled ? 'scrolled-hidden' : ''}`}
            aria-hidden="true"
          >
            <span className="scroll-cue-text">EXPLORE THE JOURNEY</span>
            <span className="scroll-cue-arrow">&darr;</span>
          </div>
        </div>
      </section>

      {/* 2. PROFESSIONAL JOURNEY (Vertical Timeline) */}
      <section className="cv-timeline-section" aria-label="Professional Journey Timeline">
        <div className="container">
          <div className="cv-section-header reveal-on-scroll">
            <span className="cv-gold-eyebrow">CHRONOLOGY</span>
            <h2 className="cv-serif-heading">Professional Journey</h2>
            <p className="cv-section-sub">
              An evolving journey across institutional leadership, board governance, and community stewardship.
            </p>
          </div>

          <div className="cv-timeline-container reveal-on-scroll">
            <div className="cv-timeline-spine" aria-hidden="true"></div>
            <div className="cv-timeline-list">
              {timelineEntries.map((item, idx) => (
                <div key={idx} className="cv-timeline-item">
                  <div className="timeline-year-col">
                    <span className="timeline-large-year">{item.period}</span>
                  </div>

                  <div className="timeline-marker-col" aria-hidden="true">
                    <span className="timeline-node-ring"></span>
                    <span className="timeline-node-core"></span>
                  </div>

                  <div className="timeline-card-col">
                    <article className="cv-timeline-card">
                      <span className="cv-card-cat-badge">{item.category}</span>
                      <h3 className="cv-card-role">{item.role}</h3>
                      <p className="cv-card-org">{item.organization}</p>
                      <p className="cv-card-desc">{item.description}</p>
                    </article>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. CAREER HIGHLIGHTS (2-Column Editorial Grid) */}
      <section className="cv-highlights-section" aria-label="Professional Highlights">
        <div className="container">
          <div className="cv-section-header reveal-on-scroll">
            <span className="cv-gold-eyebrow">DISTINCTION</span>
            <h2 className="cv-serif-heading">Professional Highlights</h2>
          </div>

          <div className="cv-highlights-grid reveal-on-scroll">
            {professionalHighlights.map((h, idx) => (
              <div key={idx} className="cv-highlight-box">
                <div className="highlight-num">0{idx + 1}</div>
                <div className="highlight-content">
                  <h3 className="highlight-role">{h.role}</h3>
                  <p className="highlight-org">{h.organization}</p>
                  {h.sub && <p className="highlight-sub">{h.sub}</p>}
                  <p className="highlight-note">{h.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ACADEMIC & PROFESSIONAL QUALIFICATIONS */}
      <section className="cv-qualifications-section" aria-label="Academic and Professional Qualifications">
        <div className="container">
          <div className="cv-section-header reveal-on-scroll">
            <span className="cv-gold-eyebrow">EDUCATION &amp; CREDENTIALS</span>
            <h2 className="cv-serif-heading">Academic &amp; Professional Qualifications</h2>
          </div>

          <div className="cv-qualifications-grid reveal-on-scroll">
            {qualifications.map((q, idx) => (
              <div key={idx} className={`cv-qual-item ${q.isPursuing ? 'pursuing-item' : ''}`}>
                <div className="qual-item-header">
                  <span className={`qual-tag ${q.isPursuing ? 'tag-pursuing' : ''}`}>{q.type}</span>
                  <GraduationCap size={16} className="qual-gold-icon" />
                </div>
                <h3 className="qual-title">{q.title}</h3>
                <p className="qual-inst">{q.institution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HEALTHCARE & CLINICAL PRACTICE */}
      <section className="cv-healthcare-section" aria-label="Healthcare and Clinical Practice">
        <div className="container">
          <div className="cv-section-header reveal-on-scroll">
            <span className="cv-gold-eyebrow">CLINICAL &amp; ENTERPRISE</span>
            <h2 className="cv-serif-heading">Healthcare &amp; Clinical Practice</h2>
          </div>

          <div className="cv-healthcare-grid reveal-on-scroll">
            <div className="cv-health-card">
              <div className="health-card-icon" aria-hidden="true">
                <Building2 size={22} className="gold-icon" />
              </div>
              <span className="health-card-eyebrow">FOUNDER &amp; BUSINESS OWNER</span>
              <h3 className="health-card-title">Multi-specialty Physiotherapy Clinics (India)</h3>
              <div className="health-spec-line">
                <span>Clinical Specialization: <strong>Orthopaedic musculoskeletal</strong></span>
              </div>
              <p className="health-card-body">
                Founded and directed physical therapy healthcare facilities providing clinical musculoskeletal rehabilitation, movement therapy, and patient-centered recovery.
              </p>
            </div>

            <div className="cv-health-card">
              <div className="health-card-icon" aria-hidden="true">
                <Award size={22} className="gold-icon" />
              </div>
              <span className="health-card-eyebrow">HEALTHCARE MANAGEMENT</span>
              <h3 className="health-card-title">Hospital Administration</h3>
              <p className="health-card-org">Apollo Hospital, India</p>
              <div className="health-spec-line">
                <span>Experience in <strong>Hospital Administration &amp; Operational Leadership</strong></span>
              </div>
              <p className="health-card-body">
                Managed operational oversight and hospital administrative coordination, maintaining stringent healthcare standards across multidisciplinary teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. LEADERSHIP & GOVERNANCE */}
      <section className="cv-governance-section" aria-label="Leadership and Governance">
        <div className="container">
          <div className="cv-section-header reveal-on-scroll">
            <span className="cv-gold-eyebrow">GOVERNANCE &amp; TRUST</span>
            <h2 className="cv-serif-heading">Leadership &amp; Governance</h2>
          </div>

          <div className="cv-gov-list reveal-on-scroll">
            {leadershipRoles.map((role, idx) => (
              <div key={idx} className="cv-gov-row">
                <div className="gov-num-pill">0{idx + 1}</div>
                <div className="gov-content-block">
                  <h3 className="gov-role-title">{role.role}</h3>
                  <p className="gov-org-title">{role.organization}</p>
                  {role.sub && <p className="gov-sub-note">({role.sub})</p>}
                  <p className="gov-detail-p">{role.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. COMMUNITY & SOCIAL IMPACT (Deep Plum Centerpiece) */}
      <section className="cv-impact-section" aria-label="Community and Social Impact">
        <div className="impact-ambient-glow" aria-hidden="true"></div>
        <div className="container">
          <div className="cv-impact-card reveal-on-scroll">
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

            <div className="cv-civic-sub-grid">
              {communityEngagements.map((item, idx) => (
                <div key={idx} className="cv-civic-item">
                  <span className="civic-context-tag">{item.context}</span>
                  <h4 className="civic-item-title">{item.title}</h4>
                  <p className="civic-item-note">{item.note}</p>
                </div>
              ))}
            </div>

            <div className="impact-frame-line" aria-hidden="true"></div>
          </div>
        </div>
      </section>

      {/* 8. ARTISTIC PRACTICE */}
      <section className="cv-art-section" aria-label="Artistic Practice">
        <div className="container">
          <div className="cv-art-inner-card reveal-on-scroll">
            <div className="art-card-top-icon" aria-hidden="true">
              <Palette size={26} className="gold-icon" />
            </div>
            <span className="cv-gold-eyebrow">CREATIVE IDENTITY</span>
            <h2 className="cv-serif-heading">Artistic Practice</h2>
            <blockquote className="art-practice-quote">
              “Multidisciplinary artist with international exhibitions across India, Canada, and the United States. Exploring visual meditation, healing, introspection, and intuitive creative practice through Muza.”
            </blockquote>
            <div className="art-card-action">
              <Link to="/art" className="btn btn-outline cv-exhibitions-btn">
                <span>EXPLORE ART PORTFOLIO</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 9. MEDIA & SPEAKING */}
      <section className="cv-media-section" aria-label="Media and Speaking">
        <div className="container">
          <div className="cv-section-header reveal-on-scroll">
            <span className="cv-gold-eyebrow">DISSEMINATION &amp; PRESS</span>
            <h2 className="cv-serif-heading">Media &amp; Speaking</h2>
          </div>

          <div className="cv-media-grid reveal-on-scroll">
            <div className="cv-media-box">
              <div className="media-box-icon" aria-hidden="true">
                <BookOpen size={20} className="gold-icon" />
              </div>
              <span className="media-box-tag">FEATURED PRESS</span>
              <h3 className="media-box-title">Ahmedabad Mirror</h3>
              <p className="media-box-desc">
                Featured in <strong>Ahmedabad Mirror</strong> and regional publications in connection with art exhibitions.
              </p>
            </div>

            <div className="cv-media-box">
              <div className="media-box-icon" aria-hidden="true">
                <BookOpen size={20} className="gold-icon" />
              </div>
              <span className="media-box-tag">PUBLICATIONS</span>
              <h3 className="media-box-title">Articles on Alternative Therapies</h3>
              <p className="media-box-desc">
                Published articles on <strong>Alternative Therapies</strong> and holistic wellness modalities.
              </p>
            </div>

            <div className="cv-media-box">
              <div className="media-box-icon" aria-hidden="true">
                <Mic size={20} className="gold-icon" />
              </div>
              <span className="media-box-tag">KEYNOTE SPEAKER</span>
              <h3 className="media-box-title">Health Series Gujarat</h3>
              <p className="media-box-desc">
                Speaker on <strong>Ergonomics, posture and cervical spondylitis</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. SIGNATURE STATEMENT (Deep Plum Sanctuary) */}
      <section className="cv-quote-sanctuary" aria-label="Signature Artist Statement">
        <div className="quote-ambient-glow" aria-hidden="true"></div>
        <div className="container">
          <div className="cv-quote-box reveal-on-scroll">
            <div className="quote-spark-icon" aria-hidden="true">&#10022;</div>
            <blockquote className="cv-sanctuary-quote">
              “I don’t create to impress—<span className="quote-emphasis">I create to connect.”</span>
            </blockquote>
            <div className="quote-gold-divider" aria-hidden="true"></div>
            <cite className="quote-attribution">— Lipsica Rore</cite>
          </div>
        </div>
      </section>

      {/* 11. FINAL CALL TO ACTION */}
      <section className="cv-cta-section" aria-label="Continue the Journey CTA">
        <div className="container">
          <div className="cv-cta-box reveal-on-scroll">
            <div className="cta-halo-glow" aria-hidden="true"></div>
            <div className="cta-content-wrapper">
              <span className="cta-gold-tag">CONTINUE THE JOURNEY</span>
              <h2 className="cta-main-title">Continue the Journey</h2>
              <p className="cta-subtitle-text">
                Explore the art, exhibitions and leadership story.
              </p>

              <div className="cta-actions-group">
                <Link to="/art" className="btn btn-primary cta-btn-primary">
                  <span>EXPLORE THE ART</span>
                  <ArrowRight size={15} className="cta-btn-arrow" />
                </Link>
                <Link to="/contact" className="btn btn-secondary-light cta-btn-secondary">
                  <span>CONTACT LIPSICA</span>
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
