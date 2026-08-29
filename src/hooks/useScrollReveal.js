import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Hook to automatically observe elements with '.reveal-on-scroll' or '.reveal-stagger'
 * and add the '.revealed' class when they enter the viewport.
 * Uses MutationObserver so dynamically added/filtered elements are also observed.
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
        threshold: 0.05,
        rootMargin: '0px 0px -20px 0px',
      }
    );

    const observeTargets = () => {
      const targets = document.querySelectorAll('.reveal-on-scroll:not(.revealed), .reveal-stagger:not(.revealed)');
      targets.forEach((target) => {
        observer.observe(target);
      });
    };

    observeTargets();

    // Observe dynamic DOM changes (e.g. state filters)
    const mutationObserver = new MutationObserver(() => {
      observeTargets();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [location.pathname]);
}
