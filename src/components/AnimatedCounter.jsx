import React, { useState, useEffect, useRef } from 'react';

/**
 * High-performance, accessible counter that animates from 0 to target (e.g. 30,000+)
 * Triggers exactly once when entering the viewport using IntersectionObserver.
 */
export default function AnimatedCounter({
  target = 30000,
  suffix = '+',
  duration = 1800,
  className = '',
}) {
  const [count, setCount] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return target;
    }
    return 0;
  });
  const [hasAnimated, setHasAnimated] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return true;
    }
    return false;
  });
  const elementRef = useRef(null);

  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          observer.disconnect();

          let startTime = null;

          const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease-out cubic calculation
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const currentCount = Math.floor(easeOutProgress * target);

            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(target);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    const currentElem = elementRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) observer.unobserve(currentElem);
    };
  }, [target, duration, hasAnimated]);

  const formattedValue = count.toLocaleString();

  return (
    <span
      ref={elementRef}
      className={className}
      aria-label={`${target.toLocaleString()}${suffix}`}
    >
      {formattedValue}
      <span className="stat-gold-plus">{suffix}</span>
    </span>
  );
}
