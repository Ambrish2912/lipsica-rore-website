import React from 'react';
import './HeroArtwork.css';

/**
 * Reusable, museum-grade Hero Artwork presentation component.
 * When real artwork assets become available, simply supply the `imageSrc` prop
 * (e.g. `<HeroArtwork imageSrc="/path/to/artwork.jpg" />`) without changing any layout.
 */
export default function HeroArtwork({
  imageSrc = null,
  title = 'Awakenings with Muza',
  signature = 'Muza',
}) {
  return (
    <div className="hero-art-display">
      {/* Subtle atmospheric dusty-rose & champagne aura */}
      <div className="art-aura-shape" aria-hidden="true"></div>

      {/* Museum-Grade Fine Art Frame */}
      <div className="gallery-frame-container">
        <div className="gallery-frame-outer">
          {/* Subtle Corner Accents */}
          <span className="frame-corner top-left" aria-hidden="true"></span>
          <span className="frame-corner top-right" aria-hidden="true"></span>
          <span className="frame-corner bottom-left" aria-hidden="true"></span>
          <span className="frame-corner bottom-right" aria-hidden="true"></span>

          {/* Archival Museum Matting */}
          <div className="gallery-mat">
            <div className="gallery-canvas-viewport">
              {imageSrc ? (
                /* Real Artwork Image Mode */
                <div className="real-artwork-wrapper">
                  <img
                    src={imageSrc}
                    alt={title}
                    className="real-artwork-image"
                    loading="eager"
                  />
                  {signature && (
                    <div className="canvas-muza-signature">
                      <span className="signature-symbol">&#10022;</span>
                      <span className="signature-text">{signature}</span>
                    </div>
                  )}
                </div>
              ) : (
                /* Temporary Abstract MUZA Canvas */
                <div className="artistic-canvas-composition" role="img" aria-label={title}>
                  <div className="canvas-texture-layer"></div>
                  <div className="canvas-organic-arc arc-1"></div>
                  <div className="canvas-organic-arc arc-2"></div>
                  <div className="canvas-sacred-center">
                    <div className="sacred-solar-core"></div>
                    <div className="sacred-outer-halo"></div>
                  </div>
                  <div className="canvas-gold-meridian"></div>

                  {/* Integrated Signature */}
                  <div className="canvas-muza-signature">
                    <span className="signature-symbol">&#10022;</span>
                    <span className="signature-text">{signature}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
