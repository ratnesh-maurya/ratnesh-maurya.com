'use client';

import { useEffect } from 'react';
import { seoConfig } from '@/lib/seo-config';

// Minimal performance optimizer
export function PerformanceOptimizer() {
  useEffect(() => {
    // Simple prefetch for critical resources
    const prefetchCriticalResources = () => {
      const links = document.querySelectorAll('a[href^="/"]');
      const linkObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const link = entry.target as HTMLAnchorElement;
            const prefetchLink = document.createElement('link');
            prefetchLink.rel = 'prefetch';
            prefetchLink.href = link.href;
            document.head.appendChild(prefetchLink);
            linkObserver.unobserve(link);
          }
        });
      });

      links.forEach(link => linkObserver.observe(link));
    };

    prefetchCriticalResources();
  }, []);

  return null;
}

// Component for adding preconnect and dns-prefetch links
export function ResourceHints() {
  return (
    <>
      {/* Preconnect to external domains */}
      {seoConfig.performance.preconnectDomains.map(domain => (
        <link key={domain} rel="preconnect" href={domain} crossOrigin="anonymous" />
      ))}

      {/* DNS prefetch for analytics and tracking */}
      {seoConfig.performance.dnsPrefetchDomains.map(domain => (
        <link key={domain} rel="dns-prefetch" href={domain} />
      ))}

      {/* Fonts are loaded via Next.js font optimization */}

      {/* Critical resource hints */}
      <link rel="preload" href="/ratn.jpg" as="image" />
      <link rel="prefetch" href="/projects.jpg" />
      <link rel="prefetch" href="/blogs.jpg" />
      <link rel="prefetch" href="/gallery.jpg" />
    </>
  );
}

// Simple Web Vitals monitoring (no external dependencies)
export function WebVitalsMonitor() {
  return null; // Disabled for minimal build
}

// Service Worker registration for caching
export function ServiceWorkerRegistration() {
  useEffect(() => {
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    }
  }, []);

  return null;
}

// Minimal critical CSS
export function CriticalCSS() {
  return (
    <style dangerouslySetInnerHTML={{
      __html: `
        /* Prevent layout shift */
        img {
          max-width: 100%;
          height: auto;
        }
      `
    }} />
  );
}
