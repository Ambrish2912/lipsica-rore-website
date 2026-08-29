import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './ArtworkCard.css';

/**
 * Reusable Artwork Card Component for exhibition walls and galleries.
 * Accepts structured artwork data and supports future real artwork images seamlessly.
 */
export default function ArtworkCard({ artwork }) {
  const {
    title,
    description,
    medium,
    dimensions,
    image,
    category = 'SELECTED WORK',
    link = '/art',
  } = artwork;

  // Format medium and dimensions line if present
  const metaString = [medium, dimensions].filter(Boolean).join(' • ');

  return (
    <article className="gallery-artwork-card">
      <Link to={link} className="artwork-card-link" aria-label={`View ${title}`}>
        {/* Frame & Image Container */}
        <div className="artwork-image-frame">
          <div className="artwork-viewport">
            {image ? (
              <img
                src={image}
                alt={title}
                className="artwork-real-img"
                loading="lazy"
              />
            ) : (
              /* High-End Gallery Placeholder Canvas */
              <div className="artwork-placeholder-canvas" role="img" aria-label={title}>
                <div className="placeholder-texture"></div>
                <div className="placeholder-arc arc-outer"></div>
                <div className="placeholder-arc arc-inner"></div>
                <div className="placeholder-core-element">
                  <span className="placeholder-symbol">&#10022;</span>
                  <span className="placeholder-title-hint">{title}</span>
                </div>
              </div>
            )}

            {/* Hover Overlay with Elegant Action */}
            <div className="artwork-card-overlay">
              <span className="overlay-cta-text">
                <span>VIEW ARTWORK</span>
                <ArrowRight size={14} className="overlay-cta-icon" />
              </span>
            </div>
          </div>
          <div className="frame-gold-accent"></div>
        </div>

        {/* Minimal Editorial Artwork Details */}
        <div className="artwork-card-info">
          <span className="artwork-category-tag">{category}</span>
          <h3 className="artwork-card-title">{title}</h3>
          
          {description && (
            <p className="artwork-card-description">{description}</p>
          )}

          {metaString && (
            <p className="artwork-card-meta">{metaString}</p>
          )}
        </div>
      </Link>
    </article>
  );
}
