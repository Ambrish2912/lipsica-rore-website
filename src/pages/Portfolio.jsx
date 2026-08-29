import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Maximize2 } from 'lucide-react';
import ArtworkLightbox from '../components/ArtworkLightbox';
import './Portfolio.css';

export default function Portfolio() {
  const [selectedArtworkIndex, setSelectedArtworkIndex] = useState(null);

  // Reusable Artwork Data Architecture
  const artworks = [
    {
      id: 'receiving-abundance',
      title: 'Receiving Abundance',
      series: 'Awakenings with Muza',
      year: '2025',
      description: 'A sacred mandala representing inner receptivity and trust in divine flow. It calls the viewer to open the heart to spiritual and material blessings.',
      medium: 'Mixed Media (Wood & Acrylic)',
      dimensions: '18” W × 24” H',
      image: null,
      symbolicTheme: 'Sacred Mandala • Receptivity & Flow',
      palette: 'Warm Ivory, Deep Plum, Champagne Gold, Natural Wood',
    },
    {
      id: 'sacred-direction',
      title: 'Sacred Direction',
      series: 'Awakenings with Muza',
      year: '2025',
      description: 'This piece speaks to alignment—arrows as symbols of guided movement, divine purpose, and trust in the journey. Rooted in earth, pointing toward soul realization.',
      medium: 'Mixed Media (Acrylic & Wood)',
      dimensions: '18” W × 24” H',
      image: null,
      symbolicTheme: 'Divine Navigation • Purpose & Alignment',
      palette: 'Charcoal, Earth Umber, Dusty Rose, Gold Accents',
    },
  ];

  const artisticThemes = [
    { label: 'Healing', nuance: 'Restoration of personal & collective wholeness' },
    { label: 'Transformation', nuance: 'Inner alchemy and conscious evolution' },
    { label: 'Feminine Energy', nuance: 'Intuitive flow and nurturing strength' },
    { label: 'Spirituality', nuance: 'Sacred geometry and universal connection' },
    { label: 'Nature', nuance: 'Organic cycles and elemental textures' },
    { label: 'Inner Reflection', nuance: 'Contemplative pause and stillness' },
    { label: 'Resilience', nuance: 'Memory, strength, and renewal' },
    { label: 'Self-Reclamation', nuance: 'Awakening innate sovereignty' },
  ];

  return (
    <div className="art-portfolio-page">
      {/* 1. ART PAGE HERO */}
      <section className="art-hero-section" aria-label="Art and Portfolio Introduction">
        <div className="art-hero-ambient-glow"></div>
        <div className="container">
          <div className="art-hero-container">
            <div className="art-hero-eyebrow hero-reveal-eyebrow">
              <span>THE ART</span>
            </div>

            <h1 className="art-hero-headline hero-reveal-heading">
              Art as a <span className="headline-italic">Visual Meditation</span>
            </h1>

            <p className="art-hero-subtext hero-reveal-subtext">
              “Through layered textures, organic materials, and symbolic forms, Lipsica Rore explores emotional depth, resilience, spiritual transformation, and the quiet reclamation of beauty.”
            </p>

            <div className="art-hero-meta-row hero-reveal-meta">
              <div className="art-location-pill">
                <MapPin size={14} className="meta-icon" />
                <span>Niagara-on-the-Lake, Canada</span>
              </div>
              <span className="meta-divider">•</span>
              <span className="art-discipline-label">Multidisciplinary Practice</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ARTISTIC FOCUS: THE LANGUAGE OF THE WORK */}
      <section className="art-focus-section" aria-label="The Language of the Work">
        <div className="container">
          <div className="art-focus-editorial">
            <div className="art-focus-header">
              <span className="art-gold-eyebrow">CREATIVE ALCHEMY</span>
              <h2 className="art-serif-heading">The Language of the Work</h2>
            </div>

            <div className="art-focus-body-grid">
              <div className="focus-lead-block">
                <p className="focus-lead-text">
                  Lipsica Rore’s practice unites <strong>intuitive symbolism</strong>, <strong>organic materials</strong>, and <strong>feminine archetypes</strong> into evocative multidimensional creations.
                </p>
                <div className="focus-gold-line"></div>
              </div>

              <div className="focus-elements-block">
                <p className="focus-paragraph">
                  Through the visceral synergy of <strong>layered textures</strong>, nuanced <strong>color</strong>, and fluid <strong>organic form</strong>, each piece becomes an altar for <strong>spiritual symbolism</strong> and <strong>inner transformation</strong>.
                </p>
                <p className="focus-paragraph">
                  Natural woods, raw acrylics, and tactile dimensions allow the viewer to move beyond aesthetic appreciation into quiet spiritual contemplation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED SERIES: AWAKENINGS WITH MUZA */}
      <section className="art-series-section" aria-label="Featured Series: Awakenings with Muza">
        <div className="container">
          <div className="series-curatorial-header">
            <span className="series-badge">FEATURED 2025 SERIES</span>
            <h2 className="series-title">Awakenings with Muza</h2>
            <p className="series-description">
              “This 2025 series explores inner receptivity, alignment, guided movement, spiritual transformation, and connection with the unseen wisdom within.”
            </p>
          </div>

          {/* 4 & 5. CURATED GALLERY EXHIBITION PRESENTATIONS */}
          <div className="curated-gallery-showcase">
            {artworks.map((artwork, idx) => (
              <article
                key={artwork.id}
                className={`curated-artwork-display ${idx % 2 === 0 ? 'layout-standard' : 'layout-reversed'}`}
                aria-label={`Curated presentation of ${artwork.title}`}
              >
                {/* Artwork Museum Presentation Frame (Interactive Clickable Trigger) */}
                <div className="artwork-gallery-presentation-column">
                  <div
                    className="museum-exhibition-frame interactive-frame"
                    onClick={() => setSelectedArtworkIndex(idx)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setSelectedArtworkIndex(idx);
                      }
                    }}
                    aria-label={`View full details for ${artwork.title}`}
                  >
                    <div className="museum-canvas-viewport">
                      {artwork.image ? (
                        <img
                          src={artwork.image}
                          alt={artwork.title}
                          className="museum-artwork-real-image"
                          loading="lazy"
                        />
                      ) : (
                        /* Sophisticated Museum Placeholder Canvas with Series Watermark */
                        <div className="museum-placeholder-sanctuary" role="img" aria-label={artwork.title}>
                          <div className="canvas-subtle-weave"></div>

                          {/* Dedicated Sacred Geometric Aura based on piece */}
                          <div className="sacred-piece-aura" aria-hidden="true">
                            <svg viewBox="0 0 340 420" fill="none" xmlns="http://www.w3.org/2000/svg" className="piece-aura-svg">
                              <circle cx="170" cy="210" r="140" stroke="#C6A15B" strokeWidth="0.8" strokeDasharray="4 6" opacity="0.45" />
                              <circle cx="170" cy="210" r="105" stroke="#B9828F" strokeWidth="0.9" opacity="0.4" />
                              <circle cx="170" cy="210" r="70" stroke="#32152E" strokeWidth="0.8" opacity="0.3" />

                              {artwork.id === 'receiving-abundance' ? (
                                <>
                                  <path d="M170 80 Q240 210 170 340 Q100 210 170 80 Z" stroke="#C6A15B" strokeWidth="1" opacity="0.6" />
                                  <path d="M40 210 Q170 140 300 210 Q170 280 40 210 Z" stroke="#B9828F" strokeWidth="1" opacity="0.5" />
                                  <circle cx="170" cy="210" r="5" fill="#C6A15B" />
                                </>
                              ) : (
                                <>
                                  <path d="M170 50 L170 370" stroke="#C6A15B" strokeWidth="1.2" opacity="0.65" />
                                  <path d="M130 110 L170 50 L210 110" stroke="#C6A15B" strokeWidth="1.2" opacity="0.75" />
                                  <path d="M140 180 L170 135 L200 180" stroke="#B9828F" strokeWidth="1" opacity="0.5" />
                                  <path d="M150 250 L170 220 L190 250" stroke="#32152E" strokeWidth="0.8" opacity="0.4" />
                                </>
                              )}
                            </svg>
                          </div>

                          <div className="canvas-curatorial-seal">
                            <span className="seal-series">{artwork.series}</span>
                            <span className="seal-artwork-title">{artwork.title}</span>
                            <span className="seal-year">{artwork.year}</span>
                          </div>
                        </div>
                      )}

                      {/* Subtle Interactive Hover Overlay */}
                      <div className="artwork-hover-overlay" aria-hidden="true">
                        <span className="hover-action-pill">
                          <Maximize2 size={13} className="hover-action-icon" />
                          <span>VIEW ARTWORK &rarr;</span>
                        </span>
                      </div>
                    </div>
                    <div className="museum-frame-gold-accent"></div>
                  </div>
                </div>

                {/* Artwork Curatorial Information Column */}
                <div className="artwork-gallery-details-column">
                  <div className="details-header-row">
                    <span className="details-series-badge">{artwork.series} &bull; {artwork.year}</span>
                    <span className="details-index-pill">0{idx + 1}</span>
                  </div>

                  <h3
                    className="artwork-curatorial-title interactive-title"
                    onClick={() => setSelectedArtworkIndex(idx)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setSelectedArtworkIndex(idx);
                      }
                    }}
                    aria-label={`Open details for ${artwork.title}`}
                  >
                    {artwork.title}
                  </h3>

                  <p className="artwork-curatorial-description">
                    {artwork.description}
                  </p>

                  <div className="artwork-specs-sheet">
                    <div className="spec-row">
                      <span className="spec-label">MEDIUM</span>
                      <span className="spec-value">{artwork.medium}</span>
                    </div>

                    <div className="spec-row">
                      <span className="spec-label">DIMENSIONS</span>
                      <span className="spec-value">{artwork.dimensions}</span>
                    </div>

                    <div className="spec-row">
                      <span className="spec-label">THEMATIC RESONANCE</span>
                      <span className="spec-value highlight-gold">{artwork.symbolicTheme}</span>
                    </div>
                  </div>

                  <div className="artwork-actions-row">
                    <button
                      type="button"
                      className="btn btn-primary gallery-view-btn"
                      onClick={() => setSelectedArtworkIndex(idx)}
                    >
                      <span>VIEW ARTWORK</span>
                      <ArrowRight size={14} />
                    </button>

                    <Link to="/contact" className="btn btn-outline gallery-inquire-btn">
                      <span>INQUIRE ABOUT THIS PIECE</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. MUZA CONNECTION: THE PRESENCE OF MUZA */}
      <section className="art-muza-connection-section" aria-label="The Presence of Muza">
        <div className="container">
          <div className="muza-connection-card">
            <div className="muza-connection-watermark" aria-hidden="true">MUZA</div>
            <div className="muza-connection-content">
              <span className="art-gold-eyebrow">INTUITIVE ORIGIN</span>
              <h2 className="art-serif-heading">The Presence of Muza</h2>

              <blockquote className="muza-connection-quote">
                “Muza is Lipsica’s inner muse—an intuitive, feminine voice that speaks through symbol, texture, and color.”
              </blockquote>

              <p className="muza-connection-text">
                “Each painting emerges from silence, shaped by visions received through meditation, and rooted in the sacred interplay between inner stillness and natural rhythm.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. ARTISTIC THEMES (Refined Typographic Presentation) */}
      <section className="art-themes-section" aria-label="Artistic Themes">
        <div className="container">
          <div className="themes-section-intro">
            <span className="art-gold-eyebrow">CORE MOTIFS</span>
            <h2 className="art-serif-heading">Themes</h2>
            <p className="themes-intro-text">
              The overarching spiritual, psychological, and natural inquiries animating each body of work.
            </p>
          </div>

          <div className="themes-typographic-grid">
            {artisticThemes.map((theme, i) => (
              <div key={i} className="theme-typographic-row">
                <div className="theme-num-box">
                  <span className="theme-num">0{i + 1}</span>
                  <span className="theme-dash"></span>
                </div>
                <div className="theme-content-box">
                  <h3 className="theme-term">{theme.label}</h3>
                  <p className="theme-subnote">{theme.nuance}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. ARTIST QUOTE (Full-Width Deep Plum Sanctuary) */}
      <section className="art-focal-quote-section" aria-label="Artist Philosophy Quote">
        <div className="quote-ambient-aura"></div>
        <div className="container">
          <div className="art-focal-quote-wrapper">
            <div className="quote-sacred-mark" aria-hidden="true">
              <span className="sacred-star">&#10022;</span>
            </div>

            <blockquote className="art-focal-blockquote">
              “I don’t create to impress—<span className="quote-line-highlight">I create to connect.”</span>
            </blockquote>

            <div className="quote-gold-divider"></div>

            <cite className="art-quote-author">— Lipsica Rore</cite>
          </div>
        </div>
      </section>

      {/* 11. EXHIBITION CTA */}
      <section className="art-exhibition-cta-section" aria-label="Continue to Exhibitions">
        <div className="container">
          <div className="art-cta-box">
            <div className="cta-halo-glow"></div>
            <div className="cta-inner-content">
              <span className="cta-eyebrow-tag">THE ARTISTIC JOURNEY</span>
              <h2 className="cta-heading-title">Continue the Journey</h2>
              <p className="cta-subheading-text">
                Explore the exhibitions and milestones that have shaped Lipsica Rore’s artistic journey.
              </p>

              <div className="cta-buttons-wrap">
                <Link to="/exhibitions" className="btn btn-primary cta-btn-exhibition">
                  <span>VIEW EXHIBITIONS</span>
                  <ArrowRight size={15} className="cta-arrow" />
                </Link>
                <Link to="/about" className="btn btn-secondary-light cta-btn-about">
                  <span>ABOUT THE ARTIST</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fullscreen Artwork Lightbox */}
      <ArtworkLightbox
        isOpen={selectedArtworkIndex !== null}
        onClose={() => setSelectedArtworkIndex(null)}
        artworks={artworks}
        currentIndex={selectedArtworkIndex || 0}
        onIndexChange={(newIdx) => setSelectedArtworkIndex(newIdx)}
      />
    </div>
  );
}
