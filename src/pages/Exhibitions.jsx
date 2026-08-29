import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Newspaper } from 'lucide-react';
import './Exhibitions.css';

export default function Exhibitions() {
  const [activeEraFilter, setActiveEraFilter] = useState('all');

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
    },
    {
      id: 'ex-2025-muza-inner-voice',
      year: '2025',
      month: 'February 2025',
      title: 'Muza: Inner Voice',
      venue: 'Art on Wheels',
      location: 'Niagara Falls, USA',
      era: 'recent',
    },
    {
      id: 'ex-2024-introspection',
      year: '2024',
      month: 'September 2024',
      title: 'Introspection',
      venue: 'Art on Wheels',
      location: 'Niagara Falls, USA',
      era: 'recent',
    },
    {
      id: 'ex-2024-reflections',
      year: '2024',
      month: 'March 2024',
      title: 'Reflections of Introspection',
      venue: 'Art on Wheels',
      location: 'Niagara Falls, USA',
      era: 'recent',
    },
    {
      id: 'ex-2023-lundys',
      year: '2023',
      month: 'July 2023',
      title: 'Healing Dimensions',
      venue: 'Lundy’s Manor',
      location: 'Niagara Falls, Canada',
      era: 'healing-dimensions',
    },
    {
      id: 'ex-2023-white-oaks',
      year: '2023',
      month: 'June 2023',
      title: 'Healing Dimensions',
      venue: 'White Oaks',
      location: 'Niagara-on-the-Lake, Canada',
      era: 'healing-dimensions',
    },
    {
      id: 'ex-2012-ahmedabad',
      year: '2012',
      month: 'September 2012',
      title: 'Healing – Ahmedabad',
      venue: 'Ahmedabad Art Gallery',
      location: 'India',
      era: 'earlier',
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
    },
  ];

  const eraGroups = [
    { key: 'all', label: 'All Exhibitions' },
    { key: 'recent', label: '2026–2024 Recent Work' },
    { key: 'healing-dimensions', label: '2023 Healing Dimensions' },
    { key: 'earlier', label: '2012–2009 Earlier Works' },
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
      {/* 1. PAGE HERO */}
      <section className="exhibitions-hero-section" aria-label="Exhibitions Archive Introduction">
        <div className="exhibitions-hero-ambient"></div>
        <div className="container">
          <div className="exhibitions-hero-content">
            <div className="exhibitions-hero-eyebrow">
              <span>EXHIBITIONS</span>
            </div>

            <h1 className="exhibitions-hero-headline">
              An Artistic Journey <br />
              <span className="headline-italic">Through Time</span>
            </h1>

            <p className="exhibitions-hero-subtext">
              “From Ahmedabad to Niagara and beyond, Lipsica Rore’s work has evolved through years of exploration, reflection, healing and intuitive expression.”
            </p>

            <div className="exhibitions-geography-pill">
              <MapPin size={14} className="geography-pin-icon" />
              <span>India &bull; Canada &bull; United States</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LATEST EXHIBITION (Deep Plum Milestone Showcase) */}
      <section className="latest-showcase-section" aria-label="Latest Exhibition Feature">
        <div className="latest-showcase-glow"></div>
        <div className="container">
          <div className="latest-exhibition-card">
            <div className="latest-badge-row">
              <span className="latest-status-tag">LATEST EXHIBITION</span>
              <span className="latest-year-display">{latestExhibition.year}</span>
            </div>

            <div className="latest-card-content">
              <div className="latest-info-side">
                <h2 className="latest-exhibition-title">{latestExhibition.title}</h2>
                <p className="latest-event-name">{latestExhibition.venue}</p>
                <p className="latest-location-line">{latestExhibition.location}</p>
              </div>

              <div className="latest-context-side">
                <span className="latest-context-label">NEWEST MILESTONE</span>
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
          <div className="gallery-timeline-container">
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

                  {/* Content Exhibition Showcase Card */}
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
        </div>
      </section>

      {/* 6. ARTISTIC EVOLUTION: FROM HEALING TO AWAKENING */}
      <section className="evolution-reflection-section" aria-label="Curatorial Reflection: From Healing to Awakening">
        <div className="container">
          <div className="evolution-card-wrapper">
            <span className="archive-gold-eyebrow">CURATORIAL REFLECTION</span>
            <h2 className="evolution-title">From Healing to Awakening</h2>
            
            <blockquote className="evolution-quote">
              “Across her exhibition history, recurring ideas of healing, introspection and the inner voice appear throughout Lipsica Rore’s work.”
            </blockquote>

            <p className="evolution-subtext">
              The continuous thread of healing and inner reflection reflects an artistic journey that began with elemental connection to the earth and has blossomed into the intuitive guidance of Muza.
            </p>

            {/* Sequence of Exhibitions */}
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

      {/* 7. MEDIA COVERAGE SECTION */}
      <section className="media-spotlight-section" aria-label="Media Spotlight">
        <div className="container">
          <div className="media-spotlight-card">
            <span className="media-eyebrow-tag">MEDIA RECOGNITION</span>
            <h3 className="media-spotlight-title">Documented Across Continents</h3>
            <p className="media-spotlight-text">
              Selected solo exhibitions and artistic contributions have been highlighted in prominent press coverage.
            </p>
            <div className="media-outlet-badge">
              <Newspaper size={18} className="outlet-icon" />
              <span className="outlet-name">Ahmedabad Mirror</span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. EXHIBITION INQUIRY CTA (Deep Plum Sanctuary) */}
      <section className="exhibition-cta-section" aria-label="Exhibition Inquiry CTA">
        <div className="container">
          <div className="exhibition-cta-box">
            <div className="cta-halo-glow"></div>
            <div className="cta-content-inner">
              <span className="cta-gold-badge">GALLERY &bull; INQUIRIES</span>
              <h2 className="cta-serif-title">Bring the Work Into Your Space</h2>
              <p className="cta-lead-text">
                For exhibition opportunities, collaborations, or gallery inquiries, connect with Lipsica Rore.
              </p>

              <div className="cta-actions-row">
                <Link to="/contact" className="btn btn-primary cta-btn-contact">
                  <span>CONTACT LIPSICA</span>
                  <ArrowRight size={15} className="cta-arrow" />
                </Link>
                <Link to="/art" className="btn btn-secondary-light cta-btn-art">
                  <span>VIEW ARTWORKS</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
