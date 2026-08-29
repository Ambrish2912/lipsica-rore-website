import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Hook to automatically observe elements with '.reveal-on-scroll' or '.reveal-stagger'
 * and add the '.revealed' class when they enter the viewport.
 */
export default function useScrollReveal() {
  const location = useLocation();

  useEffect(() => {
    // If prefers-reduced-motion is active, reveal all immediately
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      document.querySelectorAll('.reveal-on-scroll, .reveal-stagger').forEach((el) => {
        el.classList.add('revealed');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    // Give DOM a micro-tick to render
    const timeoutId = setTimeout(() => {
      const targets = document.querySelectorAll('.reveal-on-scroll, .reveal-stagger');
      targets.forEach((target) => {
        observer.observe(target);
      });
    }, 50);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [location.pathname]);
}
