import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Mic, Award } from 'lucide-react';
import './Media.css';

export default function Media() {
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

  const highlights = [
    {
      pillar: 'ART',
      description: 'International exhibitions across India, Canada and the United States.',
    },
    {
      pillar: 'HEALTHCARE',
      description: 'Background in physiotherapy and healthcare administration.',
    },
    {
      pillar: 'COMMUNITY',
      description: 'Leadership and community initiatives in Canada and India.',
    },
    {
      pillar: 'SOCIAL IMPACT',
      description: '30,000+ women empowered through the Sakhi Mandal Initiative.',
    },
  ];

  return (
    <div className="media-page">
      {/* 1. HERO SECTION (Compact, Editorial, Scroll Cue) */}
      <section className="media-hero-section" aria-label="Media and Recognition Hero">
        <div className="media-hero-ambient"></div>
        <div className="container">
          <div className="media-hero-content">
            <div className="media-hero-eyebrow hero-reveal-eyebrow">
              <span>MEDIA &amp; RECOGNITION</span>
            </div>

            <h1 className="media-hero-headline hero-reveal-heading">
              In the <span className="headline-italic">Conversation</span>
            </h1>

            <p className="media-hero-subtext hero-reveal-subtext">
              “From artistic exhibitions and publications to speaking and community recognition, Lipsica Rore’s work continues to connect creativity, healing and leadership.”
            </p>

            <div className="media-hero-line-accent hero-reveal-meta" aria-hidden="true"></div>
          </div>

          {/* Subtle Scroll Cue */}
          <div
            className={`media-scroll-cue ${hasScrolled ? 'scrolled-hidden' : ''}`}
            aria-hidden="true"
          >
            <span className="scroll-cue-text">EXPLORE</span>
            <span className="scroll-cue-arrow">&darr;</span>
          </div>
        </div>
      </section>

      {/* 2. FEATURED MEDIA (Ahmedabad Mirror Focal Point) */}
      <section className="featured-media-section" aria-label="Featured In">
        <div className="container">
          <div className="featured-media-card reveal-on-scroll">
            <div className="featured-media-header">
              <span className="section-gold-eyebrow">FEATURED IN</span>
            </div>

            <div className="featured-press-focal-box">
              <h2 className="featured-press-masthead">Ahmedabad Mirror</h2>
              <span className="featured-press-badge">PRINT &bull; REGIONAL PRESS</span>
            </div>

            <p className="featured-media-description">
              Featured in <strong>Ahmedabad Mirror</strong> and regional publications in connection with art exhibitions.
            </p>

            <div className="featured-card-frame-border" aria-hidden="true"></div>
          </div>
        </div>
      </section>

      {/* 3, 4 & 5. THREE EDITORIAL DOSSIERS: PUBLICATIONS, SPEAKING & RECOGNITION */}
      <section className="media-dossier-section" aria-label="Publications, Speaking and Recognition">
        <div className="container">
          <div className="media-dossier-grid">
            {/* 3. PUBLICATIONS */}
            <div className="dossier-column reveal-on-scroll">
              <div className="dossier-header-row">
                <span className="dossier-index">01</span>
                <span className="dossier-tag">PUBLICATIONS</span>
              </div>

              <div className="dossier-icon-box">
                <BookOpen size={20} className="dossier-gold-icon" />
              </div>

              <h2 className="dossier-title">Articles on Alternative Therapies</h2>
              <p className="dossier-item-body">
                Published articles on Alternative Therapies.
              </p>

              <div className="dossier-gold-line" aria-hidden="true"></div>
            </div>

            {/* 4. SPEAKING & KNOWLEDGE SHARING */}
            <div className="dossier-column reveal-on-scroll">
              <div className="dossier-header-row">
                <span className="dossier-index">02</span>
                <span className="dossier-tag">SPEAKING &amp; KNOWLEDGE SHARING</span>
              </div>

              <div className="dossier-icon-box">
                <Mic size={20} className="dossier-gold-icon" />
              </div>

              <span className="dossier-event-name">Health Series Gujarat</span>
              <div className="dossier-inline-sep" aria-hidden="true"></div>
              <h2 className="dossier-title speaking-topic-title">
                Ergonomics, posture and cervical spondylitis
              </h2>

              <div className="dossier-gold-line" aria-hidden="true"></div>
            </div>

            {/* 5. COMMUNITY RECOGNITION */}
            <div className="dossier-column reveal-on-scroll">
              <div className="dossier-header-row">
                <span className="dossier-index">03</span>
                <span className="dossier-tag">COMMUNITY RECOGNITION</span>
              </div>

              <div className="dossier-icon-box">
                <Award size={20} className="dossier-gold-icon" />
              </div>

              <h2 className="dossier-title">
                Founder — Niagara Art Contest
              </h2>
              <p className="dossier-item-initiative">(NPMC Initiative)</p>
              <p className="dossier-item-body highlight-recognition">
                Recognized by the Mayor of Niagara-on-the-Lake.
              </p>

              <div className="dossier-gold-line" aria-hidden="true"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. EDITORIAL STORY: WHERE ART MEETS IMPACT (Split Layout) */}
      <section className="media-story-section" aria-label="Where Art Meets Impact">
        <div className="container">
          <div className="media-story-card reveal-on-scroll">
            <div className="story-split-layout">
              {/* Left: Large Typography */}
              <div className="story-left-col">
                <span className="section-gold-eyebrow">EDITORIAL NARRATIVE</span>
                <h2 className="story-serif-heading">Where Art Meets Impact</h2>
                <div className="story-gold-line" aria-hidden="true"></div>
              </div>

              {/* Right: Supporting Text */}
              <div className="story-right-col">
                <blockquote className="story-lead-quote">
                  “Lipsica’s creative practice exists alongside a broader journey through healthcare, community leadership, social development and empowerment.”
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. HIGHLIGHT STRIP (Refined Visual Summary with 4 Themes) */}
      <section className="media-highlights-section" aria-label="Core Themes and Highlights">
        <div className="container">
          <div className="highlights-intro reveal-on-scroll">
            <span className="section-gold-eyebrow">INTERDISCIPLINARY OVERVIEW</span>
            <h2 className="section-serif-title">Core Dimensions</h2>
          </div>

          <div className="highlights-strip-grid reveal-on-scroll">
            {highlights.map((item, idx) => (
              <div key={idx} className="highlight-strip-cell">
                <div className="cell-top-meta">
                  <span className="cell-num">0{idx + 1}</span>
                  <span className="cell-pillar-tag">{item.pillar}</span>
                </div>
                <p className="cell-desc">{item.description}</p>
                <div className="cell-bottom-accent" aria-hidden="true"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. QUOTE (Visual Sanctuary in Deep Plum) */}
      <section className="media-quote-sanctuary" aria-label="Artist Connect Philosophy">
        <div className="quote-ambient-glow" aria-hidden="true"></div>
        <div className="container">
          <div className="media-quote-box reveal-on-scroll">
            <div className="quote-spark-icon" aria-hidden="true">&#10022;</div>
            <blockquote className="media-sanctuary-quote">
              “I don’t create to impress—<span className="quote-emphasis">I create to connect.”</span>
            </blockquote>
            <div className="quote-gold-divider" aria-hidden="true"></div>
            <cite className="quote-attribution">— Lipsica Rore</cite>
          </div>
        </div>
      </section>

      {/* 9. MEDIA INQUIRY CTA */}
      <section className="media-cta-section" aria-label="For Media & Speaking Inquiries">
        <div className="container">
          <div className="media-cta-box reveal-on-scroll">
            <div className="cta-halo-glow" aria-hidden="true"></div>
            <div className="cta-content-wrapper">
              <span className="cta-gold-tag">PRESS &bull; COLLABORATIONS &bull; ENGAGEMENTS</span>
              <h2 className="cta-main-title">For Media &amp; Speaking Inquiries</h2>
              <p className="cta-subtitle-text">
                “For media opportunities, speaking engagements, collaborations, or further information, connect with Lipsica Rore.”
              </p>

              <div className="cta-actions-group">
                <Link to="/contact" className="btn btn-primary cta-btn-primary">
                  <span>GET IN TOUCH</span>
                  <ArrowRight size={15} className="cta-btn-arrow" />
                </Link>
                <Link to="/cv" className="btn btn-secondary-light cta-btn-secondary">
                  <span>VIEW PROFESSIONAL JOURNEY</span>
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
