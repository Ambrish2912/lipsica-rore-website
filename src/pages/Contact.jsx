import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Phone, MapPin, CheckCircle, Info } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'General',
    subject: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const inquiryCategories = [
    {
      label: 'EXHIBITIONS',
      desc: 'For gallery and exhibition opportunities.',
    },
    {
      label: 'COLLABORATIONS',
      desc: 'For creative and professional collaborations.',
    },
    {
      label: 'MEDIA & SPEAKING',
      desc: 'For media opportunities and speaking inquiries.',
    },
    {
      label: 'GENERAL',
      desc: 'For connecting with Lipsica Rore.',
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in all required fields (Name, Email, and Message).');
      return;
    }
    setFormSubmitted(true);
  };

  return (
    <div className="contact-page">
      {/* 1. CONTACT HERO */}
      <section className="contact-hero-section" aria-label="Contact Introduction">
        <div className="contact-hero-ambient"></div>
        <div className="container">
          <div className="contact-hero-container">
            <div className="contact-hero-eyebrow">
              <span>GET IN TOUCH</span>
            </div>

            <h1 className="contact-hero-headline">
              Let the Art Begin <br />
              <span className="headline-italic">a Conversation</span>
            </h1>

            <p className="contact-hero-subtext">
              “For exhibitions, collaborations, gallery opportunities, or to connect with Lipsica Rore, get in touch.”
            </p>

            <div className="contact-hero-gold-line"></div>
          </div>
        </div>
      </section>

      {/* 2, 3, 4 & 5. MAIN CONTACT & INQUIRY SPLIT SECTION */}
      <section className="contact-main-section" aria-label="Contact Information and Inquiries">
        <div className="container">
          <div className="contact-editorial-layout">
            
            {/* Left Column: Direct Info, Inquiry Types, & Location */}
            <div className="contact-info-column">
              {/* Direct Details Box */}
              <div className="contact-channels-card">
                <span className="contact-block-tag">DIRECT CHANNELS</span>
                <h2 className="contact-block-title">Connect Directly</h2>

                <div className="channel-entries-list">
                  <div className="channel-item">
                    <div className="channel-icon-pill">
                      <Mail size={16} className="channel-gold-icon" />
                    </div>
                    <div className="channel-text-group">
                      <span className="channel-label">EMAIL</span>
                      <a href="mailto:lipsica@yahoo.co.in" className="channel-value-link">
                        lipsica@yahoo.co.in
                      </a>
                    </div>
                  </div>

                  <div className="channel-gold-divider"></div>

                  <div className="channel-item">
                    <div className="channel-icon-pill">
                      <Phone size={16} className="channel-gold-icon" />
                    </div>
                    <div className="channel-text-group">
                      <span className="channel-label">PHONE</span>
                      <a href="tel:+16479630111" className="channel-value-link">
                        +1 647-963-0111
                      </a>
                    </div>
                  </div>

                  <div className="channel-gold-divider"></div>

                  <div className="channel-item">
                    <div className="channel-icon-pill">
                      <MapPin size={16} className="channel-gold-icon" />
                    </div>
                    <div className="channel-text-group">
                      <span className="channel-label">LOCATION</span>
                      <span className="channel-value-text">
                        Niagara-on-the-Lake, Canada
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Inquiry Categories */}
              <div className="inquiry-types-card">
                <span className="contact-block-tag">START A CONVERSATION</span>
                <h3 className="inquiry-card-heading">Inquiry Pathways</h3>

                <div className="inquiry-types-grid">
                  {inquiryCategories.map((cat, idx) => (
                    <div key={idx} className="inquiry-type-item">
                      <span className="inquiry-type-label">{cat.label}</span>
                      <p className="inquiry-type-desc">{cat.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5. Artist Location Note */}
              <div className="location-quiet-card">
                <div className="location-header-row">
                  <MapPin size={16} className="loc-gold-icon" />
                  <h3 className="location-heading">Based in Niagara-on-the-Lake</h3>
                </div>
                <p className="location-text">Niagara-on-the-Lake, Canada</p>
              </div>
            </div>

            {/* Right Column: Premium Contact Form */}
            <div className="contact-form-column">
              <div className="contact-form-card">
                <div className="form-card-header">
                  <span className="contact-block-tag">SEND A MESSAGE</span>
                  <h2 className="form-main-heading">Inquiry Form</h2>
                  <p className="form-sub-heading">
                    Please share your thoughts or collaboration inquiry below.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="form-feedback-notice" role="alert">
                    <div className="feedback-icon-box">
                      <CheckCircle size={24} className="feedback-check-icon" />
                    </div>
                    <div className="feedback-content">
                      <h3 className="feedback-title">Thank You, {formData.name}</h3>
                      <p className="feedback-text">
                        Thank you. Your message is ready to be submitted once email delivery is connected.
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setFormSubmitted(false);
                          setFormData({ name: '', email: '', inquiryType: 'General', subject: '', message: '' });
                        }}
                        className="btn btn-outline feedback-reset-btn"
                      >
                        Send Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form className="gallery-contact-form" onSubmit={handleSubmit} noValidate>
                    {errorMessage && (
                      <div className="form-error-banner" role="alert">
                        <Info size={16} className="error-icon" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <div className="form-row form-row-split">
                      <div className="form-group">
                        <label htmlFor="contact-name" className="form-label">
                          YOUR NAME <span className="required-star">*</span>
                        </label>
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="e.g. Eleanor Vance"
                          className="form-input"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="contact-email" className="form-label">
                          EMAIL ADDRESS <span className="required-star">*</span>
                        </label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="e.g. eleanor@example.com"
                          className="form-input"
                        />
                      </div>
                    </div>

                    <div className="form-row form-row-split">
                      <div className="form-group">
                        <label htmlFor="contact-type" className="form-label">
                          INQUIRY TYPE
                        </label>
                        <select
                          id="contact-type"
                          name="inquiryType"
                          value={formData.inquiryType}
                          onChange={handleInputChange}
                          className="form-select"
                        >
                          <option value="Exhibition">Exhibition</option>
                          <option value="Collaboration">Collaboration</option>
                          <option value="Media & Speaking">Media &amp; Speaking</option>
                          <option value="General">General</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="contact-subject" className="form-label">
                          SUBJECT
                        </label>
                        <input
                          id="contact-subject"
                          name="subject"
                          type="text"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="e.g. Gallery Exhibition Inquiry"
                          className="form-input"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="contact-message" className="form-label">
                        MESSAGE <span className="required-star">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Write your message here..."
                        className="form-textarea"
                      ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary form-submit-btn">
                      <span>SEND MESSAGE</span>
                      <ArrowRight size={15} className="btn-arrow-icon" />
                    </button>
                  </form>
                )}

                <div className="form-gold-frame-accent"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. FINAL ARTISTIC STATEMENT (Deep Plum Sanctuary) */}
      <section className="contact-quote-section" aria-label="Artist Connect Quote">
        <div className="quote-ambient-aura"></div>
        <div className="container">
          <div className="contact-quote-wrapper">
            <div className="quote-sacred-badge">
              <span className="quote-star">&#10022;</span>
            </div>

            <blockquote className="contact-focal-quote">
              “I don’t create to impress—<span className="quote-highlight">I create to connect.”</span>
            </blockquote>

            <div className="contact-quote-divider"></div>

            <cite className="contact-quote-author">— Lipsica Rore</cite>
          </div>
        </div>
      </section>

      {/* 7. FINAL CALL TO ACTION */}
      <section className="contact-cta-section" aria-label="Explore the Work">
        <div className="container">
          <div className="contact-cta-box">
            <div className="cta-ambient-halo"></div>
            <div className="cta-content-wrapper">
              <span className="cta-gold-tag">CONTINUE THE JOURNEY</span>
              <h2 className="cta-main-title">Explore the Work</h2>
              <p className="cta-subtitle-text">
                Discover the artworks, exhibitions and creative journey shaped by Muza.
              </p>

              <div className="cta-actions-group">
                <Link to="/art" className="btn btn-primary cta-btn-art">
                  <span>VIEW ART</span>
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
