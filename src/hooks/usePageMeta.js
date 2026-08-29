import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PAGE_METAS = {
  '/': {
    title: 'Lipsica Rore | Home',
    description: 'Explore the multidisciplinary art, spiritual luxury, and leadership journey of Lipsica Rore.',
  },
  '/about': {
    title: 'Lipsica Rore | About',
    description: 'Learn about Lipsica Rore — multidisciplinary artist, healthcare professional, and community leader.',
  },
  '/art': {
    title: 'Lipsica Rore | Art & Portfolio',
    description: 'Explore the fine art collection and portfolio by Lipsica Rore, featuring Receiving Abundance and Sacred Direction.',
  },
  '/exhibitions': {
    title: 'Lipsica Rore | Exhibitions',
    description: 'Curated archive and chronology of solo and group art exhibitions by Lipsica Rore across India, Canada, and the USA.',
  },
  '/leadership': {
    title: 'Lipsica Rore | Leadership & Impact',
    description: 'Discover Lipsica Rore’s impact in healthcare, governance, women empowerment through Sakhi Mandal, and community leadership.',
  },
  '/media': {
    title: 'Lipsica Rore | Media & Recognition',
    description: 'Press archive, publications on alternative therapies, keynote speaking, and civic recognition for Lipsica Rore.',
  },
  '/cv': {
    title: 'Lipsica Rore | Professional Journey',
    description: 'Curriculum Vitae and professional journey of Lipsica Rore spanning healthcare, governance, and creative practice.',
  },
  '/contact': {
    title: 'Lipsica Rore | Contact',
    description: 'Get in touch with Lipsica Rore for art inquiries, exhibitions, collaborations, and leadership initiatives.',
  },
};

export default function usePageMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = PAGE_METAS[pathname] || {
      title: 'Lipsica Rore — Multidisciplinary Artist | Community Leader | Visionary Creator',
      description: 'Lipsica Rore — Multidisciplinary Artist | Community Leader | Visionary Creator. Portfolio, Exhibitions, Leadership, and Journey.',
    };

    document.title = meta.title;

    let metaDescTag = document.querySelector('meta[name="description"]');
    if (!metaDescTag) {
      metaDescTag = document.createElement('meta');
      metaDescTag.setAttribute('name', 'description');
      document.head.appendChild(metaDescTag);
    }
    metaDescTag.setAttribute('content', meta.description);
  }, [pathname]);
}
