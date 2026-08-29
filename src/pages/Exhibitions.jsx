import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Newspaper } from 'lucide-react';
import './Exhibitions.css';

export default function Exhibitions() {
  const [activeEraFilter, setActiveEraFilter] = useState('all');
  const [hasScrolled, setHasScrolled] = useState(false);

  // Scroll cue visibility tracking
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

  // Master Exhibition Archive Data Structure
  const exhibitionsData = [
    {
      id: 'ex-2026-muza',
      year: '2026',
      month: '',
      title: 'Muza',
      venue: 'Exhibition Super Fair 2026',
      location: 'Brooklyn, USA',
      era: 'recent',
      eraLabel: 'RECENT WORK (2026–2024)',
      isLatest: true,
    },
    {
      id: 'ex-2025-southampton',
      year: '2025',
      month: '',
      title: 'Introspection',
      venue: 'Southampton Art Exhibition',
      location: 'USA',
      era: 'recent',
      eraLabel: 'RECENT WORK (2026–2024)',
    },
    {
      id: 'ex-2025-muza-inner-voice',
      year: '2025',
      month: 'February 2025',
      title: 'Muza: Inner Voice',
      venue: 'Art on Wheels',
      location: 'Niagara Falls, USA',
      era: 'recent',
      eraLabel: 'RECENT WORK (2026–2024)',
    },
    {
      id: 'ex-2024-introspection',
      year: '2024',
      month: 'September 2024',
      title: 'Introspection',
      venue: 'Art on Wheels',
      location: 'Niagara Falls, USA',
      era: 'recent',
      eraLabel: 'RECENT WORK (2026–2024)',
    },
    {
      id: 'ex-2024-reflections',
      year: '2024',
      month: 'March 2024',
      title: 'Reflections of Introspection',
      venue: 'Art on Wheels',
      location: 'Niagara Falls, USA',
      era: 'recent',
      eraLabel: 'RECENT WORK (2026–2024)',
    },
    {
      id: 'ex-2023-lundys',
      year: '2023',
      month: 'July 2023',
      title: 'Healing Dimensions',
      venue: 'Lundy’s Manor',
      location: 'Niagara Falls, Canada',
      era: 'healing-dimensions',
      eraLabel: 'HEALING & REFLECTION (2023)',
    },
    {
      id: 'ex-2023-white-oaks',
      year: '2023',
      month: 'June 2023',
      title: 'Healing Dimensions',
      venue: 'White Oaks',
      location: 'Niagara-on-the-Lake, Canada',
      era: 'healing-dimensions',
      eraLabel: 'HEALING & REFLECTION (2023)',
    },
    {
      id: 'ex-2012-ahmedabad',
      year: '2012',
      month: 'September 2012',
      title: 'Healing – Ahmedabad',
      venue: 'Ahmedabad Art Gallery',
      location: 'India',
      era: 'earlier',
      eraLabel: 'EARLIER WORK (2012–2009)',
    },
    {
      id: 'ex-2009-healing-earth',
      year: '2009',
      month: 'March 2009',
      title: 'Healing Earth',
      venue: 'Hutchison Art Gallery',
      location: 'Ahmedabad, India',
      mediaCoverage: 'Ahmedabad Mirror',
      era: 'earlier',
      eraLabel: 'EARLIER WORK (2012–2009)',
    },
  ];

  const eraGroups = [
    { key: 'all', label: 'All Exhibitions' },
    { key: 'recent', label: 'Recent Work (2026–2024)' },
    { key: 'healing-dimensions', label: 'Healing & Reflection (2023)' },
    { key: 'earlier', label: 'Earlier Work (2012–2009)' },
  ];

  const filteredExhibitions = activeEraFilter === 'all'
    ? exhibitionsData
    : exhibitionsData.filter((item) => item.era === activeEraFilter);

  const latestExhibition = exhibitionsData.find((item) => item.isLatest) || exhibitionsData[0];

  const evolutionaryMilestones = [
    { title: 'Healing Earth', year: '2009', location: 'Ahmedabad' },
    { title: 'Healing – Ahmedabad', year: '2012', location: 'India' },
    { title: 'Healing Dimensions', year: '2023', location: 'Canada' },
    { title: 'Reflections of Introspection', year: '2024', location: 'USA' },
    { title: 'Introspection', year: '2024–2025', location: 'USA' },
    { title: 'Muza: Inner Voice', year: '2025', location: 'USA' },
    { title: 'Muza', year: '2026', location: 'Brooklyn, USA' },
  ];

  return (
    <div className="exhibitions-page">
      {/* 1. PAGE HERO (Refined, Compact, With Disappearing Scroll Cue) */}
      <section className="exhibitions-hero-section" aria-label="Exhibitions Archive Introduction">
        <div className="exhibitions-hero-ambient"></div>
        <div className="container">
          <div className="exhibitions-hero-content">
            <div className="exhibitions-hero-eyebrow hero-reveal-eyebrow">
              <span>EXHIBITIONS</span>
            </div>

            <h1 className="exhibitions-hero-headline hero-reveal-heading">
              An Artistic Journey <br />
              <span className="headline-italic">Through Time</span>
            </h1>

            <p className="exhibitions-hero-subtext hero-reveal-subtext">
              “From Ahmedabad to Niagara and beyond, Lipsica Rore’s work has evolved through years of exploration, reflection, healing and intuitive expression.”
            </p>

            <div className="exhibitions-geography-pill hero-reveal-meta">
              <MapPin size={14} className="geography-pin-icon" />
              <span>INDIA &bull; CANADA &bull; UNITED STATES</span>
            </div>
          </div>
        </div>

        {/* Subtle Scroll Cue */}
        <div
          className={`hero-scroll-cue ${hasScrolled ? 'scrolled-hidden' : ''}`}
          aria-hidden="true"
        >
          <span className="scroll-cue-text">EXPLORE THE JOURNEY</span>
          <span className="scroll-cue-arrow">&darr;</span>
        </div>
      </section>

      {/* 2. LATEST EXHIBITION (Visually Dominant Asymmetric Deep Plum Showcase) */}
      <section className="latest-showcase-section" aria-label="Latest Exhibition Feature">
        <div className="latest-transition-divider" aria-hidden="true">
          <div className="transition-line-accent"></div>
        </div>

        <div className="latest-showcase-glow"></div>
        <div className="container">
          <div className="latest-exhibition-card">
            {/* Asymmetric Composition */}
            <div className="latest-card-content">
              {/* Left Asymmetric Side: Big 2026 & Status Badge */}
              <div className="latest-year-column">
                <div className="latest-badge-row">
                  <span className="latest-status-tag">LATEST EXHIBITION</span>
                </div>
                <span className="latest-dominant-year">2026</span>
                
                {/* Decorative Sacred Geometry Motif */}
                <div className="latest-muza-motif" aria-hidden="true">
                  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="latest-motif-svg">
                    <circle cx="60" cy="60" r="50" stroke="#C6A15B" strokeWidth="0.8" opacity="0.35" strokeDasharray="3 5" />
                    <circle cx="60" cy="60" r="35" stroke="#B9828F" strokeWidth="0.9" opacity="0.4" />
                    <circle cx="60" cy="60" r="4" fill="#C6A15B" />
                  </svg>
                </div>
              </div>

              {/* Right Asymmetric Side: Title, Venue, Location */}
              <div className="latest-details-column">
                <div className="latest-title-row">
                  <h2 className="latest-exhibition-title">{latestExhibition.title}</h2>
                  <div className="latest-title-underline"></div>
                </div>

                <div className="latest-event-meta">
                  <p className="latest-event-name">{latestExhibition.venue}</p>
                  <p className="latest-location-line">
                    <MapPin size={14} className="latest-pin-icon" />
                    <span>{latestExhibition.location}</span>
                  </p>
                </div>

                <p className="latest-context-text">
                  Presenting the intuitive series <em>Muza</em> at the contemporary Exhibition Super Fair in Brooklyn, New York.
                </p>

                <Link to="/contact" className="btn btn-gold-ghost latest-inquire-btn">
                  <span>INQUIRE ABOUT THIS SHOW</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            <div className="latest-gold-accent-frame"></div>
          </div>
        </div>
      </section>

      {/* 3, 4 & 5. SELECTED EXHIBITION TIMELINE & GROUPING */}
      <section className="exhibitions-archive-section" aria-label="Selected Exhibition History Timeline">
        <div className="container">
          <div className="archive-section-header">
            <span className="archive-gold-eyebrow">CURATED ARCHIVE</span>
            <h2 className="archive-serif-heading">Selected Exhibition History</h2>
            <p className="archive-subtitle-text">
              A chronological survey of solo and group exhibitions across North America and South Asia.
            </p>

            {/* Era Filter Selector */}
            <div className="era-filters-row" role="tablist" aria-label="Exhibition Eras">
              {eraGroups.map((era) => (
                <button
                  key={era.key}
                  role="tab"
                  aria-selected={activeEraFilter === era.key}
                  onClick={() => setActiveEraFilter(era.key)}
                  className={`era-filter-pill ${activeEraFilter === era.key ? 'active' : ''}`}
                >
                  {era.label}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Museum Timeline */}
          <div className="gallery-timeline-container reveal-on-scroll">
            <div className="timeline-spine-line" aria-hidden="true"></div>

            <div className="timeline-entries-list">
              {filteredExhibitions.map((exhibition, idx) => (
                <div
                  key={exhibition.id}
                  className={`gallery-timeline-row ${idx % 2 === 0 ? 'row-left' : 'row-right'}`}
                >
                  {/* Left / Primary Year Pillar */}
                  <div className="timeline-year-block">
                    <span className="timeline-large-year">{exhibition.year}</span>
                    {exhibition.month && (
                      <span className="timeline-sub-month">{exhibition.month}</span>
                    )}
                  </div>

                  {/* Center Node Marker */}
                  <div className="timeline-node-column" aria-hidden="true">
                    <span className="node-outer-halo"></span>
                    <span className="node-center-dot"></span>
                  </div>

                  {/* Content Exhibition Showcase */}
                  <div className="timeline-details-block">
                    <article className="timeline-exhibition-card">
                      {exhibition.isLatest && (
                        <span className="card-latest-badge">LATEST</span>
                      )}

                      {exhibition.month && (
                        <span className="card-mobile-month-pill">{exhibition.month}</span>
                      )}

                      <h3 className="card-exhibition-title">{exhibition.title}</h3>
                      <p className="card-venue-name">{exhibition.venue}</p>

                      <div className="card-location-row">
                        <MapPin size={13} className="card-location-icon" />
                        <span className="card-location-val">{exhibition.location}</span>
                      </div>

                      {exhibition.mediaCoverage && (
                        <div className="card-media-highlight">
                          <Newspaper size={14} className="media-icon" />
                          <span>Featured in: <strong>{exhibition.mediaCoverage}</strong></span>
                        </div>
                      )}
                    </article>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Subtle Visual Transition Connector to Evolution */}
          <div className="timeline-journey-transition" aria-hidden="true">
            <div className="transition-line-top"></div>
            <div className="transition-star-emblem">&#10022;</div>
            <div className="transition-line-bottom"></div>
          </div>
        </div>
      </section>

      {/* 6. ARTISTIC THREAD: FROM HEALING TO AWAKENING */}
      <section className="evolution-reflection-section" aria-label="Curatorial Reflection: From Healing to Awakening">
        <div className="container">
          <div className="evolution-card-wrapper reveal-on-scroll">
            <span className="archive-gold-eyebrow">CURATORIAL OBSERVATION</span>
            <h2 className="evolution-title">From Healing to Awakening</h2>

            <blockquote className="evolution-quote">
              “Across her exhibition history, recurring ideas of healing, introspection and the inner voice appear throughout Lipsica Rore’s work.”
            </blockquote>

            <p className="evolution-subtext">
              The continuous thread of healing and inner reflection reflects an artistic journey that began with elemental connection to the earth and has blossomed into the intuitive guidance of Muza.
            </p>

            {/* Sequence of Supported Exhibitions */}
            <div className="evolution-milestone-flow">
              {evolutionaryMilestones.map((item, i) => (
                <div key={i} className="milestone-flow-item">
                  <span className="milestone-title">{item.title}</span>
                  <span className="milestone-meta">{item.year} &bull; {item.location}</span>
                  {i < evolutionaryMilestones.length - 1 && (
                    <span className="milestone-arrow" aria-hidden="true">&rarr;</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. MEDIA SECTION */}
      <section className="media-spotlight-section" aria-label="Media Spotlight">
        <div className="container">
          <div className="media-spotlight-card reveal-on-scroll">
            <span className="media-eyebrow-tag">MEDIA</span>
            <h3 className="media-spotlight-title">Featured in Press</h3>
            <p className="media-spotlight-text">
              Selected solo exhibitions and artistic contributions have been documented in prominent press coverage.
            </p>
            <div className="media-outlet-badge">
              <Newspaper size={18} className="outlet-icon" />
              <span className="outlet-name">Ahmedabad Mirror</span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA (Continue the Journey) */}
      <section className="exhibition-cta-section" aria-label="Continue the Journey">
        <div className="container">
          <div className="exhibition-cta-box reveal-on-scroll">
            <div className="cta-halo-glow"></div>
            <div className="cta-content-inner">
              <span className="cta-gold-badge">CONTINUE THE JOURNEY</span>
              <h2 className="cta-serif-title">Continue the Journey</h2>
              <p className="cta-lead-text">
                Explore the wider story behind the art, leadership and creative practice.
              </p>

              <div className="cta-actions-row">
                <Link to="/leadership" className="btn btn-primary cta-btn-contact">
                  <span>LEADERSHIP &amp; IMPACT</span>
                  <ArrowRight size={15} className="cta-arrow" />
                </Link>
                <Link to="/contact" className="btn btn-secondary-light cta-btn-art">
                  <span>CONTACT LIPSICA</span>
                  <ArrowRight size={15} className="cta-arrow" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
