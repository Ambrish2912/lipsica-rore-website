import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Exhibitions from './pages/Exhibitions';
import Leadership from './pages/Leadership';
import Media from './pages/Media';
import CV from './pages/CV';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="art" element={<Portfolio />} />
          <Route path="art-portfolio" element={<Portfolio />} />
          <Route path="exhibitions" element={<Exhibitions />} />
          <Route path="leadership" element={<Leadership />} />
          <Route path="leadership-impact" element={<Leadership />} />
          <Route path="media" element={<Media />} />
          <Route path="media-recognition" element={<Media />} />
          <Route path="cv" element={<CV />} />
          <Route path="contact" element={<Contact />} />
          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
