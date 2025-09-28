import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollRevealManager
 * Observes elements tagged with data-reveal. Adds `reveal-init` class initially,
 * then swaps to `reveal-in` (and applies stagger to children marked with data-reveal-child)
 * when they enter the viewport. Supports directional offsets via data-reveal-from="left|right|bottom|top".
 * Optional attributes:
 *  - data-reveal-threshold="0.2" (override default intersection threshold)
 *  - data-reveal-delay="150" (base delay in ms before revealing parent)
 *  - data-reveal-stagger (if present, children with [data-reveal-child] will be staggered)
 */
const ScrollRevealManager: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const DEFAULT_THRESHOLD = 0.15;
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    if (!elements.length) return; // nothing to observe

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const baseDelay = parseInt(el.getAttribute('data-reveal-delay') || '0', 10);
          const stagger = el.hasAttribute('data-reveal-stagger');

            // If stagger, process children first
          if (stagger) {
            const children = Array.from(el.querySelectorAll<HTMLElement>('[data-reveal-child]'));
            children.forEach((child, index) => {
              child.classList.add('reveal-init');
              // allow directional overrides per child
              const childDelay = baseDelay + index * 110; // 110ms spacing
              child.style.transitionDelay = childDelay + 'ms';
              requestAnimationFrame(() => {
                child.classList.add('reveal-in');
              });
            });
          }

          // Reveal the parent element (after its base delay)
          el.style.transitionDelay = baseDelay + 'ms';
          el.classList.add('reveal-in');
          observer.unobserve(el);
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -5% 0px',
      threshold: elements.map(el => parseFloat(el.getAttribute('data-reveal-threshold') || '') || DEFAULT_THRESHOLD)
    });

    // Prime elements with initial class
    elements.forEach(el => {
      // Avoid re-adding if already revealed (e.g., navigating back)
      if (!el.classList.contains('reveal-in')) {
        el.classList.add('reveal-init');
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  return null;
};

export default ScrollRevealManager;