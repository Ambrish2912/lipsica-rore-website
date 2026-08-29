import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Compass, Heart, Award } from 'lucide-react';
import HeroArtwork from '../components/HeroArtwork';
import ArtworkCard from '../components/ArtworkCard';
import './Home.css';

export default function Home() {
  const artworks = [
    {
      id: 'receiving-abundance',
      title: 'Receiving Abundance',
      description: 'A sacred mandala inviting connection to the flow of universal abundance.',
      medium: 'Mixed Media (Wood & Acrylic)',
      dimensions: '18” W × 24” H',
      category: 'SELECTED WORK',
      image: null,
      link: '/art',
    },
    {
      id: 'sacred-direction',
      title: 'Sacred Direction',
      description: 'A visual representation of purpose and divine navigation—arrows that speak of movement with meaning.',
      medium: 'Mixed Media (Acrylic & Wood)',
      dimensions: '18” W × 24” H',
      category: 'SELECTED WORK',
      image: null,
      link: '/art',
    },
    {
      id: 'awakenings-with-muza',
      title: 'Awakenings with Muza',
      description: '2025 Series exploring the intuitive feminine muse.',
      category: 'SELECTED WORK',
      image: null,
      link: '/art',
    },
  ];

  const latestExhibition = {
    year: '2026',
    title: 'Muza',
    exhibition: 'Exhibition Super Fair 2026',
    location: 'Brooklyn, USA',
    label: 'LATEST EXHIBITION',
  };

  const selectedExhibitions = [
    {
      year: '2025',
      title: 'Introspection',
      venue: 'Southampton Art Exhibition',
      location: 'USA',
    },
    {
      year: '2024',
      title: 'Introspection',
      venue: 'Art on Wheels',
      location: 'USA',
    },
    {
      year: '2024',
      title: 'Reflections of Introspection',
      venue: 'Art on Wheels',
      location: 'USA',
    },
    {
      year: '2023',
      title: 'Healing Dimensions',
      venue: 'White Oaks & Lundy’s Manor',
      location: 'Canada',
    },
    {
      year: '2012',
      title: 'Healing',
      venue: 'Ahmedabad Art Gallery',
      location: 'India',
    },
    {
      year: '2009',
      title: 'Healing Earth',
      venue: 'Hutchison Art Gallery',
      location: 'Ahmedabad, India',
      mediaCoverage: 'Ahmedabad Mirror',
    },
  ];

  const leadershipAreas = [
    {
      number: '01',
      category: 'HEALTHCARE',
      title: 'Multi-specialty Physiotherapy Clinics (India)',
      role: 'Founder & Business Owner',
      details: [
        'Clinical specialization: Orthopaedic musculoskeletal',
        'Experience in hospital administration and operational leadership at Apollo Hospital.',
      ],
    },
    {
      number: '02',
      category: 'SOCIAL IMPACT',
      title: 'Sakhi Mandal Initiative (GSWT)',
      role: 'Lead',
      details: [
        'Empowered 30,000+ women through structured self-help group programs.',
        'The initiative was recognized as a pilot project for women empowerment in Gujarat, India.',
      ],
    },
    {
      number: '03',
      category: 'GOVERNANCE',
      items: [
        { role: 'Director', org: 'Xcellon Industries Limited' },
        { role: 'Director', org: 'Gujarat Social Welfare Trust' },
        { role: 'Board Member', org: 'NISPA' },
      ],
    },
    {
      number: '04',
      category: 'COMMUNITY LEADERSHIP',
      items: [
        { role: 'President', org: 'Ridley College Family Guild' },
        { role: 'Founder', org: 'Niagara Art Contest (NPMC Initiative)' },
      ],
      details: [
        'Recognized by the Mayor of Niagara-on-the-Lake.',
      ],
    },
  ];

  return (
    <div className="home-page">
      {/* 1. HERO SECTION */}
      <section className="hero-section" aria-label="Introduction and Hero">
        <div className="hero-ambient-aura"></div>
        <div className="hero-container">
          {/* Left Column: Editorial Statement */}
          <div className="hero-content">
            <div className="hero-eyebrow">
              <span>MULTIDISCIPLINARY ARTIST</span>
              <span className="eyebrow-dot">&bull;</span>
              <span>COMMUNITY LEADER</span>
              <span className="eyebrow-dot">&bull;</span>
              <span>VISIONARY CREATOR</span>
            </div>

            <h1 className="hero-headline">
              <span className="headline-row">Art that Heals.</span>
              <span className="headline-row">Leadership that</span>
              <span className="headline-row headline-accent">Empowers.</span>
            </h1>

            <p className="hero-subtext">
              “Guided by Muza, my inner muse, I create art that invites reflection, healing, and transformation.”
            </p>

            <div className="hero-actions">
              <Link to="/art" className="btn btn-primary hero-btn-primary">
                <span>DISCOVER MY ART</span>
                <ArrowRight size={15} className="btn-arrow" />
              </Link>
              <Link to="/exhibitions" className="btn btn-secondary hero-btn-secondary">
                <span>VIEW EXHIBITIONS</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Museum-Grade Artwork Presentation */}
          <div className="hero-visual-column">
            <HeroArtwork
              title="Awakenings with Muza"
              signature="Muza"
            />
          </div>
        </div>
      </section>

      {/* 2. ABOUT PREVIEW */}
      <section className="about-preview-section" aria-label="About the Artist Preview">
        <div className="container">
          <div className="about-preview-grid">
            <div className="about-visual-side">
              <div className="about-frame">
                <div className="about-frame-inner">
                  <div className="artistic-portrait-placeholder">
                    <div className="sacred-geometry-pattern">
                      <div className="sacred-ring ring-1"></div>
                      <div className="sacred-ring ring-2"></div>
                      <div className="sacred-ring ring-3"></div>
                      <div className="portrait-monogram">LR</div>
                    </div>
                    <span className="portrait-caption">The Sanctuary of Intuition</span>
                  </div>
                </div>
                <div className="frame-gold-border"></div>
              </div>
            </div>

            <div className="about-text-side">
              <div className="section-badge">
                <span>Philosophy &amp; Essence</span>
              </div>
              <h2 className="section-title">The Artist Behind the Vision</h2>
              
              <div className="about-paragraphs">
                <p className="lead-paragraph">
                  Lipsica Rore is a multidisciplinary artist whose work explores the sacred relationship between the inner self and the natural world.
                </p>
                <p>
                  Rooted in intuitive artistic practice, her creations bridge deep spiritual reflection and tangible forms. Through vibrant textures and natural mediums, she channels feminine energy, transformation, and healing—awakening viewers to their own inner muse, <em>Muza</em>.
                </p>
              </div>

              <div className="pillars-grid">
                <div className="pillar-item">
                  <Sparkles className="pillar-icon" size={20} />
                  <span>Spiritual Healing</span>
                </div>
                <div className="pillar-item">
                  <Heart className="pillar-icon" size={20} />
                  <span>Feminine Energy</span>
                </div>
                <div className="pillar-item">
                  <Compass className="pillar-icon" size={20} />
                  <span>Transformation</span>
                </div>
                <div className="pillar-item">
                  <Award className="pillar-icon" size={20} />
                  <span>Intuitive Practice</span>
                </div>
              </div>

              <div className="about-cta-wrap">
                <Link to="/about" className="btn btn-outline">
                  <span>EXPLORE HER STORY</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED ARTWORKS */}
      <section className="featured-artworks-section" aria-label="Featured Artworks">
        <div className="artworks-ambient-glow"></div>
        <div className="container">
          {/* Gallery Wall Section Header */}
          <div className="artworks-section-header">
            <div className="artworks-header-text">
              <span className="artworks-eyebrow">SELECTED WORKS</span>
              <h2 className="artworks-main-title">Featured Artworks</h2>
              <p className="artworks-subtitle">A glimpse into my latest creations.</p>
            </div>
            <div className="artworks-header-action">
              <Link to="/art" className="artworks-view-all-link">
                <span>VIEW ALL ARTWORKS</span>
                <ArrowRight size={16} className="view-all-arrow" />
              </Link>
            </div>
          </div>

          {/* 3-Column Gallery Exhibition Grid */}
          <div className="artworks-grid">
            {artworks.map((art) => (
              <ArtworkCard key={art.id} artwork={art} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. EXHIBITIONS HIGHLIGHT (Dark Plum Contemporary Gallery Timeline) */}
      <section className="exhibitions-highlight-section" aria-label="Exhibitions and Artistic Journey">
        <div className="exhibitions-ambient-aura"></div>
        <div className="container">
          {/* Section Header */}
          <div className="exhibitions-intro-header">
            <span className="exhibitions-gold-eyebrow">EXHIBITIONS</span>
            <h2 className="exhibitions-main-title">Exhibitions &amp; Artistic Journey</h2>
            <p className="exhibitions-intro-quote">
              “Lipsica Rore’s multidisciplinary artistic practice has been presented across India, Canada, and the United States.”
            </p>
          </div>

          {/* Featured Latest Exhibition Showcase Card */}
          <div className="featured-exhibition-showcase">
            <div className="featured-showcase-inner">
              <div className="showcase-badge-row">
                <span className="showcase-status-badge">{latestExhibition.label}</span>
                <span className="showcase-year-pill">{latestExhibition.year}</span>
              </div>
              <div className="showcase-body">
                <div className="showcase-main-info">
                  <h3 className="showcase-title">{latestExhibition.title}</h3>
                  <p className="showcase-event-name">{latestExhibition.exhibition}</p>
                </div>
                <div className="showcase-location-box">
                  <span className="showcase-location-label">Location</span>
                  <p className="showcase-location-val">{latestExhibition.location}</p>
                </div>
              </div>
              <div className="showcase-gold-frame-accent"></div>
            </div>
          </div>

          {/* Selected Exhibitions Artistic Timeline */}
          <div className="artistic-timeline-container">
            <div className="timeline-central-spine"></div>
            <div className="timeline-items-list">
              {selectedExhibitions.map((item, idx) => (
                <div key={idx} className={`timeline-entry-row ${idx % 2 === 0 ? 'entry-left' : 'entry-right'}`}>
                  {/* Year Pillar */}
                  <div className="timeline-year-column">
                    <span className="timeline-year-text">{item.year}</span>
                  </div>

                  {/* Node Dot */}
                  <div className="timeline-node-marker">
                    <span className="node-outer-ring"></span>
                    <span className="node-inner-dot"></span>
                  </div>

                  {/* Content Card */}
                  <div className="timeline-content-column">
                    <div className="timeline-event-card">
                      <span className="timeline-mobile-year-pill">{item.year}</span>
                      <h4 className="timeline-show-title">{item.title}</h4>
                      <p className="timeline-venue-name">{item.venue}</p>
                      <p className="timeline-location-text">{item.location}</p>
                      {item.mediaCoverage && (
                        <div className="timeline-media-badge">
                          <span>Media Coverage: <strong>{item.mediaCoverage}</strong></span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Understated CTA */}
          <div className="exhibitions-bottom-cta-wrap">
            <Link to="/exhibitions" className="btn btn-gold-ghost exhibitions-cta-btn">
              <span>VIEW FULL EXHIBITION HISTORY</span>
              <ArrowRight size={16} className="exhibitions-arrow" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. LEADERSHIP & SOCIAL IMPACT — BEYOND THE CANVAS */}
      <section className="leadership-section" aria-label="Beyond the Canvas — Leadership and Social Impact">
        <div className="leadership-ambient-glow"></div>
        {/* Subtle organic abstract background motif */}
        <div className="leadership-bg-organic" aria-hidden="true">
          <svg viewBox="0 0 700 700" fill="none" xmlns="http://www.w3.org/2000/svg" className="leadership-bg-svg">
            <path d="M50 350 C150 150 450 100 650 350 C450 600 150 550 50 350 Z" stroke="#C6A15B" strokeWidth="0.8" strokeDasharray="4 6" opacity="0.1" />
            <circle cx="350" cy="350" r="280" stroke="#B9828F" strokeWidth="0.7" opacity="0.08" />
            <circle cx="350" cy="350" r="190" stroke="#C6A15B" strokeWidth="0.6" opacity="0.12" />
            <path d="M350 70 Q450 350 350 630" stroke="#C6A15B" strokeWidth="0.8" opacity="0.1" />
          </svg>
        </div>

        <div className="container">
          {/* Section Intro */}
          <div className="leadership-intro-header">
            <span className="leadership-eyebrow">BEYOND THE CANVAS</span>
            <h2 className="leadership-main-title">Leadership that Creates Impact</h2>
            <p className="leadership-supporting-text">
              “Her journey extends beyond the canvas — spanning healthcare, entrepreneurship, governance, women's empowerment, and community leadership.”
            </p>
          </div>

          {/* Asymmetric Editorial Content Layout with Visual Connection */}
          <div className="leadership-editorial-layout">
            {/* Left Column: Dominant Impact Statement & Organic Visual Element */}
            <div className="leadership-impact-showcase">
              <div className="impact-showcase-card">
                {/* Organic Visual Element: Abstract Growth & Community Curves */}
                <div className="impact-organic-graphic" aria-hidden="true">
                  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="organic-svg">
                    <circle cx="100" cy="100" r="88" stroke="#C6A15B" strokeWidth="0.75" strokeDasharray="3 4" opacity="0.45" />
                    <circle cx="100" cy="100" r="68" stroke="#B9828F" strokeWidth="0.85" opacity="0.35" />
                    <circle cx="100" cy="100" r="46" stroke="#C6A15B" strokeWidth="1" opacity="0.3" />
                    {/* Interlocking Petals / Community Embrace Motif */}
                    <path d="M100 24 C130 55 160 85 100 176" stroke="#C6A15B" strokeWidth="1.1" opacity="0.5" />
                    <path d="M100 24 C70 55 40 85 100 176" stroke="#C6A15B" strokeWidth="1.1" opacity="0.5" />
                    <path d="M24 100 C55 70 85 40 176 100" stroke="#B9828F" strokeWidth="1" opacity="0.4" />
                    <path d="M24 100 C55 130 85 160 176 100" stroke="#B9828F" strokeWidth="1" opacity="0.4" />
                    <circle cx="100" cy="100" r="5" fill="#C6A15B" opacity="0.85" />
                  </svg>
                </div>

                <div className="impact-statement-content">
                  <span className="impact-stat-number">
                    30,000<span className="stat-gold-plus">+</span>
                  </span>
                  <h3 className="impact-stat-title">Women Empowered</h3>
                  <p className="impact-stat-subtitle">Through the Sakhi Mandal Initiative</p>
                  
                  <div className="impact-divider-line"></div>
                  
                  <p className="impact-narrative-note">
                    A landmark self-help initiative under the Gujarat Social Welfare Trust, creating lasting pathways for grassroots self-reliance, empowerment, and social transformation.
                  </p>
                </div>
                
                <div className="impact-corner-gold-accent"></div>
              </div>
            </div>

            {/* Right Column: Four Leadership Areas in Refined 2x2 Composition */}
            <div className="leadership-areas-grid">
              {leadershipAreas.map((area, idx) => (
                <div key={idx} className="leadership-area-card">
                  <div className="area-card-header">
                    <span className="area-number-tag">
                      {area.number} — <span className="area-category-name">{area.category}</span>
                    </span>
                    <span className="area-gold-dot"></span>
                  </div>

                  <div className="area-card-body">
                    {area.role && (
                      <div className="area-primary-role">
                        <span className="role-label">{area.role}</span>
                        <h4 className="role-org-name">{area.title}</h4>
                      </div>
                    )}

                    {area.items && (
                      <div className="area-roles-stack">
                        {area.items.map((item, i) => (
                          <div key={i} className="area-role-row">
                            <span className="area-role-bullet">&bull;</span>
                            <div className="area-role-text">
                              <strong className="area-role-designation">{item.role}</strong> — {item.org}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {area.details && (
                      <div className="area-details-list">
                        {area.details.map((detail, dIdx) => (
                          <p key={dIdx} className="area-detail-line">
                            {detail}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="area-card-hover-line"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Minimalist Editorial CTA */}
          <div className="leadership-bottom-cta-wrap">
            <Link to="/leadership" className="leadership-editorial-cta">
              <span className="cta-text">EXPLORE HER LEADERSHIP JOURNEY</span>
              <ArrowRight size={16} className="cta-arrow" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. GUIDED BY MUZA — THE INNER MUSE */}
      <section className="muza-statement-section" aria-label="Guided by Muza — The Inner Muse">
        {/* Atmospheric Ambient Auras & Canvas Texture Backing */}
        <div className="muza-ambient-aura-1"></div>
        <div className="muza-ambient-aura-2"></div>
        <div className="muza-bg-canvas-texture" aria-hidden="true"></div>

        <div className="container muza-container">
          {/* Top Editorial Split Layout */}
          <div className="muza-editorial-split">
            {/* Left Column: Narrative, Philosophy & Artist Statement */}
            <div className="muza-narrative-column">
              <div className="muza-eyebrow-wrap">
                <span className="muza-eyebrow">THE INNER MUSE</span>
              </div>

              <h2 className="muza-main-heading">Guided by Muza</h2>

              <p className="muza-intro-lead">
                “Muza is Lipsica’s inner muse — an intuitive feminine force that guides her creative journey and inspires healing, harmony, empowerment and awakening.”
              </p>

              <div className="muza-meditation-blocks">
                <p className="muza-body-paragraph">
                  “My art is a quiet invitation—to pause, to feel, to remember. Each piece is a visual meditation, shaped by the sacred dialogue between the inner self and the natural world.”
                </p>
                <p className="muza-body-paragraph">
                  “Through layered textures, organic materials, and symbolic forms, I explore emotional depth, resilience, and spiritual transformation.”
                </p>
              </div>
            </div>

            {/* Right Column: Abstract Atmospheric Muse Visual */}
            <div className="muza-visual-column">
              <div className="muza-artistic-visual-card">
                {/* Layered Abstract Botanical & Concentric Spiritual Curves */}
                <div className="muza-abstract-art-frame">
                  <svg viewBox="0 0 400 480" fill="none" xmlns="http://www.w3.org/2000/svg" className="muza-atmospheric-svg" aria-hidden="true">
                    <defs>
                      <radialGradient id="muzaRoseGlow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#B9828F" stopOpacity="0.25" />
                        <stop offset="60%" stopColor="#C6A15B" stopOpacity="0.12" />
                        <stop offset="100%" stopColor="#F8F3EC" stopOpacity="0" />
                      </radialGradient>
                      <radialGradient id="muzaGoldCore" cx="50%" cy="50%" r="45%">
                        <stop offset="0%" stopColor="#C6A15B" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#C6A15B" stopOpacity="0" />
                      </radialGradient>
                    </defs>

                    {/* Soft atmospheric gradient aura */}
                    <circle cx="200" cy="220" r="160" fill="url(#muzaRoseGlow)" />
                    <circle cx="200" cy="220" r="90" fill="url(#muzaGoldCore)" />

                    {/* Sacred Concentric Rings */}
                    <circle cx="200" cy="220" r="150" stroke="#C6A15B" strokeWidth="0.8" strokeDasharray="3 5" opacity="0.5" />
                    <circle cx="200" cy="220" r="120" stroke="#B9828F" strokeWidth="0.9" opacity="0.4" />
                    <circle cx="200" cy="220" r="80" stroke="#32152E" strokeWidth="0.75" strokeDasharray="2 4" opacity="0.3" />
                    <circle cx="200" cy="220" r="45" stroke="#C6A15B" strokeWidth="1" opacity="0.6" />

                    {/* Flowing Organic Botanical & Feminine Energy Waves */}
                    <path d="M200 40 C260 120 320 200 200 360 C120 260 140 120 200 40 Z" stroke="#C6A15B" strokeWidth="1.2" opacity="0.65" />
                    <path d="M70 220 C140 160 260 160 330 220 C260 280 140 280 70 220 Z" stroke="#B9828F" strokeWidth="1" opacity="0.5" />
                    <path d="M120 100 Q200 220 280 340" stroke="#C6A15B" strokeWidth="0.9" opacity="0.45" />
                    <path d="M280 100 Q200 220 120 340" stroke="#C6A15B" strokeWidth="0.9" opacity="0.45" />

                    {/* Delicate Intuitive Petal Accents */}
                    <path d="M200 130 C225 175 225 225 200 270 C175 225 175 175 200 130 Z" stroke="#32152E" strokeWidth="0.8" opacity="0.35" />
                    <circle cx="200" cy="220" r="4" fill="#C6A15B" />
                  </svg>

                  {/* Muza Signature Mark — An artistic seal, not a UI label */}
                  <div className="muza-signature-mark-container">
                    <div className="muza-sig-line"></div>
                    <span className="muza-sig-text">MUZA</span>
                    <div className="muza-sig-line"></div>
                  </div>
                </div>

                <div className="muza-card-gold-border"></div>
              </div>
            </div>
          </div>

          {/* Emotional Focal Point Quote */}
          <div className="muza-focal-quote-section">
            <div className="muza-quote-gold-divider" aria-hidden="true"></div>
            
            <blockquote className="muza-focal-blockquote">
              <span className="focal-quote-line">“I don’t create to impress—</span>
              <span className="focal-quote-line highlight-connect">I create to connect.”</span>
            </blockquote>

            <div className="muza-author-signoff">
              <span className="author-name">— Lipsica Rore</span>
            </div>
          </div>

          {/* Minimalist Bottom CTA */}
          <div className="muza-bottom-cta-wrap">
            <Link to="/art" className="muza-discover-link">
              <span className="discover-text">DISCOVER THE ART</span>
              <ArrowRight size={15} className="discover-arrow" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. CONTACT / EXHIBITION CTA */}
      <section className="final-cta-section" aria-label="Contact and Consultation">
        <div className="container">
          <div className="final-cta-box">
            <div className="cta-decorative-halo"></div>
            <div className="cta-content">
              <span className="cta-badge">Collaboration &bull; Inquiries</span>
              <h2 className="cta-title">Let the Art Begin a Conversation</h2>
              <p className="cta-description">
                For exhibitions, collaborations, gallery opportunities, or to connect with Lipsica Rore, get in touch.
              </p>

              <div className="cta-buttons-row">
                <Link to="/contact" className="btn btn-primary btn-large">
                  <span>GET IN TOUCH</span>
                  <ArrowRight size={16} />
                </Link>
                <Link to="/art" className="btn btn-secondary-light btn-large">
                  <span>VIEW MY ART</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
