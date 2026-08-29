import React from 'react';
import { NavLink } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h2 className="footer-title">Lipsica Rore</h2>
            <p className="footer-tagline">
              Multidisciplinary Artist &bull; Community Leader &bull; Visionary Creator
            </p>
            <p className="footer-mission">
              Creating art that invites reflection, healing, and transformation through the intuitive feminine energy of Muza.
            </p>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">Navigation</h4>
            <div className="footer-nav-grid">
              <NavLink to="/" className="footer-link">Home</NavLink>
              <NavLink to="/about" className="footer-link">About</NavLink>
              <NavLink to="/art" className="footer-link">Art & Portfolio</NavLink>
              <NavLink to="/exhibitions" className="footer-link">Exhibitions</NavLink>
              <NavLink to="/leadership" className="footer-link">Leadership</NavLink>
              <NavLink to="/media" className="footer-link">Media</NavLink>
              <NavLink to="/cv" className="footer-link">CV</NavLink>
              <NavLink to="/contact" className="footer-link">Contact</NavLink>
            </div>
          </div>

          <div className="footer-column footer-contact-col">
            <h4 className="footer-heading">Inquiries</h4>
            <ul className="footer-contact-list">
              <li>
                <a href="mailto:lipsica@yahoo.co.in" className="footer-contact-link">
                  <Mail size={16} className="footer-icon" />
                  <span>lipsica@yahoo.co.in</span>
                </a>
              </li>
              <li>
                <a href="tel:+16479630111" className="footer-contact-link">
                  <Phone size={16} className="footer-icon" />
                  <span>+1 647-963-0111</span>
                </a>
              </li>
              <li className="footer-contact-item">
                <MapPin size={16} className="footer-icon" />
                <span>Niagara-on-the-Lake, Canada</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} Lipsica Rore. All rights reserved.
          </p>
          <div className="footer-curation">
            <span>Contemporary Art Gallery &times; Spiritual Luxury</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
