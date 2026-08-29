import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import BackToTop from './BackToTop';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Layout() {
  const location = useLocation();
  useScrollReveal();

  return (
    <>
      <a href="#main-content" className="skip-to-content">Skip to content</a>
      <ScrollToTop />
      <Navbar />
      <main className="main-content" id="main-content">
        <div key={location.pathname} className="page-transition-wrapper">
          <Outlet />
        </div>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
