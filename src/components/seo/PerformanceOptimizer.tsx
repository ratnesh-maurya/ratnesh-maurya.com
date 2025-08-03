'use client';

import { useEffect } from 'react';
import { seoConfig } from '@/lib/seo-config';

// Component to optimize Core Web Vitals and performance
export function PerformanceOptimizer() {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload critical images
      const heroImage = new Image();
      heroImage.src = seoConfig.author.image;
      
      // Preload above-the-fold images
      const criticalImages = [
        '/ratn.jpg',
        '/projects.jpg',
        '/blogs.jpg'
      ];
      
      criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    };

    // Optimize images with lazy loading
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[data-src]');
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || '';
            img.classList.remove('lazy');
            observer.unobserve(img);
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));
    };

    // Optimize third-party scripts
    const optimizeThirdPartyScripts = () => {
      // Delay non-critical scripts
      const delayedScripts = [
        'https://www.googletagmanager.com/gtag/js',
        'https://clarity.microsoft.com/tag'
      ];

      // Load scripts after user interaction or after 3 seconds
      const loadDelayedScripts = () => {
        delayedScripts.forEach(src => {
          const script = document.createElement('script');
          script.src = src;
          script.async = true;
          document.head.appendChild(script);
        });
      };

      // Load on user interaction
      const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
      const loadOnInteraction = () => {
        loadDelayedScripts();
        events.forEach(event => {
          document.removeEventListener(event, loadOnInteraction);
        });
      };

      events.forEach(event => {
        document.addEventListener(event, loadOnInteraction, { passive: true });
      });

      // Fallback: load after 3 seconds
      setTimeout(loadDelayedScripts, 3000);
    };

    // Prefetch next page resources
    const prefetchNextPageResources = () => {
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

    // Initialize optimizations
    preloadCriticalResources();
    optimizeImages();
    optimizeThirdPartyScripts();
    prefetchNextPageResources();

    // Cleanup function
    return () => {
      // Remove event listeners if component unmounts
    };
  }, []);

  return null; // This component doesn't render anything
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

// Web Vitals monitoring component
export function WebVitalsMonitor() {
  useEffect(() => {
    // Monitor Core Web Vitals
    const reportWebVitals = (metric: { name: string; id: string; value: number }) => {
      // Send to analytics
      if (typeof window !== 'undefined' && 'gtag' in window) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          non_interaction: true,
        });
      }
      
      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Web Vital:', metric);
      }
    };

    // Dynamic import of web-vitals library
    import('web-vitals').then((webVitals) => {
      if (webVitals.onCLS) webVitals.onCLS(reportWebVitals);
      if (webVitals.onINP) webVitals.onINP(reportWebVitals); // INP replaced FID in web-vitals v4
      if (webVitals.onFCP) webVitals.onFCP(reportWebVitals);
      if (webVitals.onLCP) webVitals.onLCP(reportWebVitals);
      if (webVitals.onTTFB) webVitals.onTTFB(reportWebVitals);
    }).catch(err => {
      console.warn('Failed to load web-vitals:', err);
    });
  }, []);

  return null;
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

// Critical CSS inlining component
export function CriticalCSS() {
  return (
    <style dangerouslySetInnerHTML={{
      __html: `
        /* Critical CSS for above-the-fold content */
        .hero-section { 
          min-height: 100vh; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
        }
        .lazy { 
          opacity: 0; 
          transition: opacity 0.3s; 
        }
        .lazy.loaded { 
          opacity: 1; 
        }
        /* Prevent layout shift */
        img { 
          max-width: 100%; 
          height: auto; 
        }
        /* Loading skeleton */
        .skeleton {
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: loading 1.5s infinite;
        }
        @keyframes loading {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `
    }} />
  );
}
