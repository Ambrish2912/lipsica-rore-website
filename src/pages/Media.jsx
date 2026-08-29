import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Mic, Award } from 'lucide-react';
import './Media.css';

export default function Media() {
  const highlights = [
    {
      pillar: 'ART',
      title: 'Global Exhibition Presence',
      description: 'International exhibitions across India, Canada and the United States.',
    },
    {
      pillar: 'HEALTHCARE',
      title: 'Clinical & Health Administration',
      description: 'Background in physiotherapy and healthcare administration.',
    },
    {
      pillar: 'COMMUNITY',
      title: 'Civic & Educational Leadership',
      description: 'Leadership and community initiatives in Canada and India.',
    },
    {
      pillar: 'SOCIAL IMPACT',
      title: 'Sakhi Mandal Initiative',
      description: '30,000+ women empowered through the Sakhi Mandal Initiative.',
    },
  ];

  return (
    <div className="media-page">
      {/* 1. PAGE HERO */}
      <section className="media-hero-section" aria-label="Media and Recognition Introduction">
        <div className="media-hero-ambient"></div>
        <div className="container">
          <div className="media-hero-container">
            <div className="media-hero-eyebrow">
              <span>MEDIA &amp; RECOGNITION</span>
            </div>

            <h1 className="media-hero-headline">
              In the <span className="headline-italic">Conversation</span>
            </h1>

            <p className="media-hero-subtext">
              “From artistic exhibitions and publications to speaking and community recognition, Lipsica Rore’s work continues to connect creativity, healing and leadership.”
            </p>

            <div className="media-hero-line-accent"></div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED MEDIA */}
      <section className="featured-media-section" aria-label="Featured Media and Press">
        <div className="container">
          <div className="featured-media-card">
            <div className="featured-media-header">
              <span className="media-gold-eyebrow">PRESS ARCHIVE</span>
              <h2 className="media-serif-title">Featured In</h2>
            </div>

            <div className="featured-press-emblem-box">
              <span className="featured-press-masthead">Ahmedabad Mirror</span>
              <span className="featured-press-badge">PRINT &bull; REGIONAL PRESS</span>
            </div>

            <p className="featured-media-description">
              Featured in <strong>Ahmedabad Mirror</strong> and regional publications in connection with art exhibitions.
            </p>

            <div className="featured-card-frame-border"></div>
          </div>
        </div>
      </section>

      {/* 3, 4 & 5. PUBLICATIONS, SPEAKING & RECOGNITION EDITORIAL GRID */}
      <section className="media-dossier-section" aria-label="Publications, Speaking and Recognition">
        <div className="container">
          <div className="media-dossier-grid">
            {/* 3. PUBLICATIONS */}
            <div className="dossier-column">
              <div className="dossier-header-row">
                <span className="dossier-index">01</span>
                <span className="media-gold-eyebrow">WRITTEN CONTRIBUTIONS</span>
              </div>

              <h2 className="dossier-title">Publications</h2>

              <div className="dossier-entry">
                <div className="dossier-icon-pill">
                  <BookOpen size={16} className="dossier-gold-icon" />
                  <span className="dossier-tag">AUTHORED WORK</span>
                </div>

                <h3 className="dossier-item-headline">Articles on Alternative Therapies</h3>
                
                <p className="dossier-item-body">
                  Published articles on Alternative Therapies.
                </p>
                <div className="dossier-sub-divider"></div>
              </div>
            </div>

            {/* 4. SPEAKING & KNOWLEDGE SHARING */}
            <div className="dossier-column">
              <div className="dossier-header-row">
                <span className="dossier-index">02</span>
                <span className="media-gold-eyebrow">PUBLIC LECTURES</span>
              </div>

              <h2 className="dossier-title">Speaking &amp; Knowledge Sharing</h2>

              <div className="dossier-entry">
                <div className="dossier-icon-pill">
                  <Mic size={16} className="dossier-gold-icon" />
                  <span className="dossier-tag">HEALTH SERIES GUJARAT</span>
                </div>

                <h3 className="dossier-item-headline">Ergonomics, Posture and Cervical Spondylitis</h3>
                
                <p className="dossier-item-body">
                  Keynote presentation sharing specialized clinical insights on musculoskeletal alignment and preventative health.
                </p>
                <div className="dossier-sub-divider"></div>
              </div>
            </div>

            {/* 5. COMMUNITY RECOGNITION */}
            <div className="dossier-column">
              <div className="dossier-header-row">
                <span className="dossier-index">03</span>
                <span className="media-gold-eyebrow">CIVIC HONORS</span>
              </div>

              <h2 className="dossier-title">Community Recognition</h2>

              <div className="dossier-entry">
                <div className="dossier-icon-pill">
                  <Award size={16} className="dossier-gold-icon" />
                  <span className="dossier-tag">MUNICIPAL DISTINCTION</span>
                </div>

                <h3 className="dossier-item-headline">Founder — Niagara Art Contest</h3>
                <p className="dossier-item-org">(NPMC Initiative)</p>
                
                <p className="dossier-item-body highlight-civic">
                  Recognized by the Mayor of Niagara-on-the-Lake.
                </p>
                <div className="dossier-sub-divider"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CONNECTION TO ART (Deep Plum Sanctuary) */}
      <section className="media-art-bridge-section" aria-label="Where Art Meets Impact">
        <div className="bridge-ambient-glow"></div>
        <div className="container">
          <div className="media-art-bridge-card">
            <span className="bridge-gold-eyebrow">HOLISTIC INTEGRATION</span>
            <h2 className="bridge-serif-title">Where Art Meets Impact</h2>
            <blockquote className="bridge-statement-quote">
              “Lipsica’s creative practice exists alongside a broader journey through healthcare, community leadership, social development and empowerment.”
            </blockquote>
            <div className="bridge-gold-line"></div>
          </div>
        </div>
      </section>

      {/* 7. SELECTED HIGHLIGHTS */}
      <section className="media-highlights-section" aria-label="Selected Career Highlights">
        <div className="container">
          <div className="highlights-section-intro">
            <span className="media-gold-eyebrow">INTEGRATIVE MILESTONES</span>
            <h2 className="media-serif-title">Selected Highlights</h2>
          </div>

          <div className="highlights-editorial-grid">
            {highlights.map((item, idx) => (
              <div key={idx} className="highlight-editorial-cell">
                <span className="cell-pillar-tag">{item.pillar}</span>
                <h3 className="cell-title">{item.title}</h3>
                <p className="cell-desc">{item.description}</p>
                <div className="cell-bottom-accent"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. EDITORIAL QUOTE (Quiet Contemplative Pause) */}
      <section className="media-quote-section" aria-label="Artist Connect Quote">
        <div className="container">
          <div className="media-quote-inner">
            <div className="quote-star-mark">&#10022;</div>
            <blockquote className="media-quiet-quote">
              “I don’t create to impress—<span className="quote-emphasis">I create to connect.”</span>
            </blockquote>
            <div className="quote-line-sep"></div>
            <cite className="quote-author-name">— Lipsica Rore</cite>
          </div>
        </div>
      </section>

      {/* 9. MEDIA & CONTACT CTA (Deep Plum Sanctuary) */}
      <section className="media-cta-section" aria-label="For Media and Speaking Inquiries">
        <div className="container">
          <div className="media-cta-box">
            <div className="cta-halo-glow"></div>
            <div className="cta-content-wrapper">
              <span className="cta-gold-tag">PRESS &bull; COLLABORATIONS</span>
              <h2 className="cta-main-title">For Media &amp; Speaking Inquiries</h2>
              <p className="cta-subtitle-text">
                For media opportunities, speaking engagements, collaborations, or further information, connect with Lipsica Rore.
              </p>

              <div className="cta-actions-group">
                <Link to="/contact" className="btn btn-primary cta-btn-contact">
                  <span>GET IN TOUCH</span>
                  <ArrowRight size={15} className="cta-btn-arrow" />
                </Link>
                <Link to="/about" className="btn btn-secondary-light cta-btn-about">
                  <span>ABOUT THE ARTIST</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
