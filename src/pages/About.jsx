import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import './About.css';

export default function About() {
  const coreThemes = [
    { name: 'Healing', desc: 'Restoration of personal & collective wholeness' },
    { name: 'Transformation', desc: 'Inner alchemy and conscious evolution' },
    { name: 'Feminine Energy', desc: 'Intuitive flow, nurturing strength, and receptivity' },
    { name: 'Spirituality', desc: 'Sacred geometry and universal connection' },
    { name: 'Nature', desc: 'Organic cycles, elemental materials, and flora' },
    { name: 'Inner Reflection', desc: 'Silent contemplative pauses and meditation' },
    { name: 'Resilience', desc: 'Strength forged through memory and renewal' },
    { name: 'Self-Reclamation', desc: 'Reawakening innate sovereignty and purpose' },
  ];

  return (
    <div className="about-page">
      {/* 1. ABOUT HERO */}
      <section className="about-hero-section" aria-label="About the Artist Introduction">
        <div className="about-hero-ambient"></div>
        <div className="container">
          <div className="about-hero-grid">
            {/* Left Column: Editorial Statement */}
            <div className="about-hero-content">
              <div className="about-hero-eyebrow hero-reveal-eyebrow">
                <span>ABOUT THE ARTIST</span>
              </div>

              <h1 className="about-hero-headline hero-reveal-heading">
                The Artist Behind <br />
                <span className="headline-italic">the Vision</span>
              </h1>

              <p className="about-hero-subtext hero-reveal-subtext">
                “Lipsica Rore is a multidisciplinary artist whose work bridges the sacred and the intuitive, exploring the feminine force within nature, memory, and inner transformation.”
              </p>

              <div className="about-hero-location hero-reveal-meta">
                <MapPin size={15} className="location-pin-icon" />
                <span>Niagara-on-the-Lake, Canada</span>
              </div>
            </div>

            {/* Right Column: Museum-Grade Portrait Presentation */}
            <div className="about-hero-visual hero-reveal-visual">
              <div className="portrait-showcase-frame">
                <div className="portrait-inner-sanctuary">
                  <div className="portrait-sacred-aura" aria-hidden="true">
                    <svg viewBox="0 0 300 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="portrait-aura-svg">
                      <circle cx="150" cy="180" r="130" stroke="#C6A15B" strokeWidth="0.8" strokeDasharray="3 5" opacity="0.4" />
                      <circle cx="150" cy="180" r="100" stroke="#B9828F" strokeWidth="0.9" opacity="0.35" />
                      <circle cx="150" cy="180" r="65" stroke="#C6A15B" strokeWidth="1" opacity="0.5" />
                      <path d="M150 40 Q210 180 150 320 Q90 180 150 40 Z" stroke="#C6A15B" strokeWidth="0.9" opacity="0.45" />
                      <circle cx="150" cy="180" r="4" fill="#C6A15B" />
                    </svg>
                  </div>
                  <div className="portrait-monogram-box">
                    <span className="portrait-monogram-text">LR</span>
                    <span className="portrait-monogram-caption">Lipsica Rore Studio</span>
                  </div>
                </div>
                <div className="portrait-frame-gold-border"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ARTIST JOURNEY */}
      <section className="about-journey-section" aria-label="Artist Journey and Origins">
        <div className="container">
          <div className="journey-editorial-wrap">
            <div className="journey-header-block">
              <span className="section-gold-eyebrow">BIOGRAPHY &amp; ORIGINS</span>
              <h2 className="section-serif-title">A Journey Rooted in Healing</h2>
            </div>

            <div className="journey-story-grid">
              <div className="journey-column primary-story">
                <p className="journey-lead-text">
                  Lipsica Rore is a multidisciplinary artist whose work explores the sacred relationship between the inner self and the natural world. Her art blends intuitive symbolism, organic materials, and feminine archetypes to offer meditative, transformative experiences.
                </p>
                <div className="journey-gold-divider"></div>
              </div>

              <div className="journey-column secondary-story">
                <p className="journey-body-text">
                  With a background in healthcare, leadership, and women's empowerment, Lipsica brings depth and intentionality to each creation. Her experience as a physiotherapist and administrator informs her deep commitment to healing—personally and collectively.
                </p>
                <p className="journey-body-text">
                  Currently based in Niagara-on-the-Lake, she merges her roles as artist, leader, and community builder.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ARTISTIC PHILOSOPHY (Deep Plum Sanctuary) */}
      <section className="about-philosophy-section" aria-label="The Artistic Practice and Philosophy">
        <div className="philosophy-ambient-glow"></div>
        <div className="container">
          <div className="philosophy-container-inner">
            <div className="philosophy-header">
              <span className="philosophy-gold-eyebrow">THE ARTISTIC PRACTICE</span>
              <h2 className="philosophy-serif-title">Art as a Quiet Invitation</h2>
            </div>

            <div className="philosophy-statements-flow">
              <blockquote className="philosophy-focal-statement">
                “My art is a quiet invitation—to pause, to feel, to remember. Each piece is a visual meditation, shaped by the sacred dialogue between the inner self and the natural world.”
              </blockquote>

              <div className="philosophy-divider-line"></div>

              <div className="philosophy-sub-passages">
                <p className="philosophy-passage">
                  “I work intuitively, guided by visions and the presence of my muse, <strong>Muza</strong>, a feminine force that inspires healing, harmony, and awakening.”
                </p>
                <p className="philosophy-passage">
                  “Through layered textures, organic materials, and symbolic forms, I explore emotional depth, resilience, and spiritual transformation.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MUZA — THE INNER MUSE */}
      <section className="about-muza-section" aria-label="Muza The Inner Muse">
        <div className="container">
          <div className="about-muza-grid">
            {/* Left Column: Typographic Focus */}
            <div className="about-muza-narrative">
              <span className="section-gold-eyebrow">THE CREATIVE FORCE</span>
              <h2 className="section-serif-title">Muza — The Inner Muse</h2>
              
              <p className="about-muza-explanation">
                “Muza represents a sacred feminine force that guides Lipsica's creative journey and infuses her practice with themes of compassion, harmony, and empowerment.”
              </p>

              <div className="muza-large-typographic-emblem">
                <span className="muza-emblem-watermark">MUZA</span>
                <span className="muza-emblem-sub">Intuition &bull; Harmony &bull; Awakening</span>
              </div>
            </div>

            {/* Right Column: Abstract Visual Element */}
            <div className="about-muza-visual">
              <div className="muza-sacred-symbolic-frame">
                <svg viewBox="0 0 360 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="muza-symbolic-svg" aria-hidden="true">
                  <defs>
                    <radialGradient id="aboutMuzaGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#B9828F" stopOpacity="0.22" />
                      <stop offset="65%" stopColor="#C6A15B" stopOpacity="0.1" />
                      <stop offset="100%" stopColor="#F8F3EC" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  <circle cx="180" cy="200" r="150" fill="url(#aboutMuzaGlow)" />
                  <circle cx="180" cy="200" r="140" stroke="#C6A15B" strokeWidth="0.8" strokeDasharray="3 5" opacity="0.45" />
                  <circle cx="180" cy="200" r="105" stroke="#B9828F" strokeWidth="0.9" opacity="0.4" />
                  <circle cx="180" cy="200" r="70" stroke="#32152E" strokeWidth="0.75" strokeDasharray="2 4" opacity="0.3" />

                  {/* Flowing Organic Botanical Lines */}
                  <path d="M180 40 C230 110 280 180 180 340 C110 240 130 110 180 40 Z" stroke="#C6A15B" strokeWidth="1.1" opacity="0.6" />
                  <path d="M60 200 C120 150 240 150 300 200 C240 250 120 250 60 200 Z" stroke="#B9828F" strokeWidth="0.95" opacity="0.45" />
                  <circle cx="180" cy="200" r="5" fill="#C6A15B" />
                </svg>

                <div className="muza-seal-marker">
                  <span className="seal-line"></span>
                  <span className="seal-name">MUZA</span>
                  <span className="seal-line"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HEALING & CREATIVE PRACTICE */}
      <section className="about-healing-section" aria-label="Where Healing Meets Creativity">
        <div className="container">
          <div className="healing-section-header">
            <span className="section-gold-eyebrow">INTEGRATIVE VOCATION</span>
            <h2 className="section-serif-title">Where Healing Meets Creativity</h2>
          </div>

          <div className="healing-split-layout">
            {/* Left Side: Dominant Source-Based Quote */}
            <div className="healing-quote-column">
              <blockquote className="healing-dominant-quote">
                “My background in physiotherapy and healthcare deepens my understanding of healing as both physical and metaphysical—a process of remembering what is whole within us.”
              </blockquote>
              <div className="healing-quote-gold-accent"></div>
            </div>

            {/* Right Side: Supporting Content */}
            <div className="healing-context-column">
              <div className="healing-pillar-card">
                <div className="pillar-header-row">
                  <span className="pillar-icon-box">&#10022;</span>
                  <h3 className="pillar-title">Clinical Foundation to Creative Alchemy</h3>
                </div>
                <p className="pillar-text">
                  With deep clinical specialization in orthopaedic musculoskeletal physiotherapy and hospital operational leadership at Apollo Hospital, Lipsica experienced firsthand the delicate architecture of the human body and spirit.
                </p>
                <p className="pillar-text">
                  Her art translates this clinical precision into metaphysical compassion—viewing each canvas as a restorative sanctuary for inner alignment, resilience, and transformation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ARTISTIC THEMES */}
      <section className="about-themes-section" aria-label="Themes That Shape the Work">
        <div className="container">
          <div className="themes-section-header">
            <span className="section-gold-eyebrow">CORE MOTIFS</span>
            <h2 className="section-serif-title">Themes That Shape the Work</h2>
            <p className="themes-subtitle">Recurring resonances woven across each multidisciplinary creation.</p>
          </div>

          <div className="themes-editorial-grid">
            {coreThemes.map((theme, idx) => (
              <div key={idx} className="theme-editorial-item">
                <div className="theme-item-top">
                  <span className="theme-index">0{idx + 1}</span>
                  <span className="theme-gold-dash"></span>
                </div>
                <h3 className="theme-name">{theme.name}</h3>
                <p className="theme-desc">{theme.desc}</p>
                <div className="theme-bottom-line"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PERSONAL POSITIONING */}
      <section className="about-positioning-section" aria-label="Personal Positioning">
        <div className="container">
          <div className="positioning-editorial-card">
            <span className="positioning-eyebrow">HOLISTIC PRACTICE</span>
            <h2 className="positioning-headline">Artist. Leader. Community Builder.</h2>
            <p className="positioning-statement">
              “Her creative practice is rooted in healing—deeply informed by her background in healthcare, women's empowerment, and community leadership.”
            </p>
            <div className="positioning-facets-row">
              <span className="facet-tag">Contemporary Art</span>
              <span className="facet-dot">&bull;</span>
              <span className="facet-tag">Healthcare &amp; Healing</span>
              <span className="facet-dot">&bull;</span>
              <span className="facet-tag">Social Empowerment</span>
              <span className="facet-dot">&bull;</span>
              <span className="facet-tag">Community Leadership</span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CALL TO ACTION */}
      <section className="about-cta-section" aria-label="Explore the Work">
        <div className="container">
          <div className="about-cta-box">
            <div className="cta-ambient-halo"></div>
            <div className="cta-content-wrapper">
              <span className="cta-gold-tag">CONTINUE THE JOURNEY</span>
              <h2 className="cta-main-title">Explore the Work</h2>
              <p className="cta-subtitle-text">
                Discover the artworks, exhibitions and creative journey shaped by Muza.
              </p>

              <div className="cta-actions-group">
                <Link to="/art" className="btn btn-primary cta-btn-art">
                  <span>VIEW ARTWORKS</span>
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
