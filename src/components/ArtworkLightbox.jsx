import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import './ArtworkLightbox.css';

export default function ArtworkLightbox({
  isOpen,
  onClose,
  artworks = [],
  currentIndex = 0,
  onIndexChange,
}) {
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);

  const currentArtwork = artworks[currentIndex] || artworks[0];
  const totalArtworks = artworks.length;

  const handlePrev = React.useCallback(() => {
    if (onIndexChange) {
      const prevIndex = (currentIndex - 1 + totalArtworks) % totalArtworks;
      onIndexChange(prevIndex);
    }
  }, [currentIndex, totalArtworks, onIndexChange]);

  const handleNext = React.useCallback(() => {
    if (onIndexChange) {
      const nextIndex = (currentIndex + 1) % totalArtworks;
      onIndexChange(nextIndex);
    }
  }, [currentIndex, totalArtworks, onIndexChange]);

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    // Lock body scroll
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus close button initially for accessibility
    if (closeButtonRef.current) {
      closeButtonRef.current.focus();
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || !currentArtwork) return null;

  const currentFormattedIndex = String(currentIndex + 1).padStart(2, '0');
  const totalFormattedCount = String(totalArtworks).padStart(2, '0');

  return (
    <div
      className="artwork-lightbox-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-artwork-title"
      ref={modalRef}
    >
      <div className="artwork-lightbox-panel">
        {/* Lightbox Top Control Bar */}
        <div className="lightbox-top-bar">
          <div className="lightbox-series-label">
            <span>{currentArtwork.series || 'Art Portfolio'} &bull; {currentArtwork.year}</span>
          </div>

          <div className="lightbox-index-indicator" aria-live="polite">
            <span>{currentFormattedIndex}</span>
            <span className="index-divider">/</span>
            <span>{totalFormattedCount}</span>
          </div>

          <button
            type="button"
            className="lightbox-close-btn"
            onClick={onClose}
            aria-label="Close artwork viewer"
            ref={closeButtonRef}
          >
            <X size={22} />
          </button>
        </div>

        {/* Lightbox Main Content Grid */}
        <div className="lightbox-main-grid">
          {/* Visual Presentation Frame */}
          <div className="lightbox-visual-side">
            <div className="lightbox-museum-frame">
              <div className="lightbox-canvas-matting">
                <div className="lightbox-canvas-viewport">
                  {currentArtwork.image ? (
                    <img
                      src={currentArtwork.image}
                      alt={currentArtwork.title}
                      className="lightbox-real-image"
                    />
                  ) : (
                    <div className="lightbox-placeholder-canvas" role="img" aria-label={currentArtwork.title}>
                      <div className="lightbox-canvas-texture"></div>

                      {/* Sacred Geometric Visual Element */}
                      <div className="lightbox-sacred-aura" aria-hidden="true">
                        <svg viewBox="0 0 340 420" fill="none" xmlns="http://www.w3.org/2000/svg" className="lightbox-piece-svg">
                          <circle cx="170" cy="210" r="140" stroke="#C6A15B" strokeWidth="0.8" strokeDasharray="4 6" opacity="0.45" />
                          <circle cx="170" cy="210" r="105" stroke="#B9828F" strokeWidth="0.9" opacity="0.4" />
                          <circle cx="170" cy="210" r="70" stroke="#32152E" strokeWidth="0.8" opacity="0.3" />

                          {currentArtwork.id === 'receiving-abundance' ? (
                            <>
                              <path d="M170 80 Q240 210 170 340 Q100 210 170 80 Z" stroke="#C6A15B" strokeWidth="1.2" opacity="0.6" />
                              <path d="M40 210 Q170 140 300 210 Q170 280 40 210 Z" stroke="#B9828F" strokeWidth="1.1" opacity="0.5" />
                              <circle cx="170" cy="210" r="6" fill="#C6A15B" />
                            </>
                          ) : (
                            <>
                              <path d="M170 50 L170 370" stroke="#C6A15B" strokeWidth="1.4" opacity="0.7" />
                              <path d="M130 110 L170 50 L210 110" stroke="#C6A15B" strokeWidth="1.4" opacity="0.8" />
                              <path d="M140 180 L170 135 L200 180" stroke="#B9828F" strokeWidth="1.1" opacity="0.55" />
                              <path d="M150 250 L170 220 L190 250" stroke="#32152E" strokeWidth="0.9" opacity="0.45" />
                            </>
                          )}
                        </svg>
                      </div>

                      <div className="lightbox-seal-box">
                        <span className="lightbox-seal-series">{currentArtwork.series}</span>
                        <span className="lightbox-seal-title">{currentArtwork.title}</span>
                        <span className="lightbox-seal-year">{currentArtwork.year}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Curatorial Details Side */}
          <div className="lightbox-details-side">
            <div className="lightbox-details-header">
              <span className="lightbox-gold-eyebrow">{currentArtwork.series}</span>
              <h2 id="lightbox-artwork-title" className="lightbox-artwork-title">
                {currentArtwork.title}
              </h2>
            </div>

            <p className="lightbox-artwork-description">
              {currentArtwork.description}
            </p>

            <div className="lightbox-specs-sheet">
              <div className="lightbox-spec-row">
                <span className="lightbox-spec-label">MEDIUM</span>
                <span className="lightbox-spec-value">{currentArtwork.medium}</span>
              </div>

              <div className="lightbox-spec-row">
                <span className="lightbox-spec-label">DIMENSIONS</span>
                <span className="lightbox-spec-value">{currentArtwork.dimensions}</span>
              </div>

              {currentArtwork.symbolicTheme && (
                <div className="lightbox-spec-row">
                  <span className="lightbox-spec-label">THEMATIC RESONANCE</span>
                  <span className="lightbox-spec-value highlight-gold">{currentArtwork.symbolicTheme}</span>
                </div>
              )}

              {currentArtwork.palette && (
                <div className="lightbox-spec-row">
                  <span className="lightbox-spec-label">PALETTE</span>
                  <span className="lightbox-spec-value">{currentArtwork.palette}</span>
                </div>
              )}
            </div>

            {/* Inquire Action & Navigation Footer */}
            <div className="lightbox-actions-footer">
              <Link
                to="/contact"
                className="btn btn-primary lightbox-inquire-btn"
                onClick={onClose}
              >
                <span>INQUIRE ABOUT THIS PIECE</span>
                <ArrowRight size={15} />
              </Link>

              <div className="lightbox-nav-controls">
                <button
                  type="button"
                  className="lightbox-nav-btn prev-btn"
                  onClick={handlePrev}
                  aria-label="Previous artwork"
                  title="Previous artwork (Left Arrow)"
                >
                  <ChevronLeft size={20} />
                  <span>PREVIOUS</span>
                </button>

                <button
                  type="button"
                  className="lightbox-nav-btn next-btn"
                  onClick={handleNext}
                  aria-label="Next artwork"
                  title="Next artwork (Right Arrow)"
                >
                  <span>NEXT</span>
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            <div className="lightbox-keyboard-hint" aria-hidden="true">
              <span>Navigate with &larr; &rarr; keys &bull; Press Esc to close</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
