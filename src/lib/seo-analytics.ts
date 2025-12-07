// ============================================
// INTELLIGENT SEO ANALYTICS & SELF-LEARNING SYSTEM
// Advanced tracking, analysis, and optimization
// ============================================

import { supabase } from "@/integrations/supabase/client";

// Performance metrics tracking
interface PagePerformanceMetrics {
  pagePath: string;
  loadTime: number;
  timeOnPage: number;
  bounceRate: number;
  scrollDepth: number;
  interactions: number;
  conversionActions: string[];
}

interface SEOHealthMetrics {
  overallScore: number;
  technicalScore: number;
  contentScore: number;
  performanceScore: number;
  accessibilityScore: number;
}

// Self-learning engagement patterns
interface EngagementPattern {
  pageType: string;
  avgTimeOnPage: number;
  avgScrollDepth: number;
  popularSections: string[];
  exitPoints: string[];
  conversionRate: number;
}

// Track page view with enhanced metadata
export const trackPageView = async (metadata: {
  pagePath: string;
  pageTitle: string;
  pageType: string;
  referrer?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
}) => {
  const sessionId = getOrCreateSessionId();
  
  try {
    await supabase.from('analytics_events').insert({
      event_type: 'page_view',
      page_path: metadata.pagePath,
      session_id: sessionId,
      metadata: {
        title: metadata.pageTitle,
        type: metadata.pageType,
        referrer: metadata.referrer || document.referrer,
        utm: {
          source: metadata.utm_source,
          medium: metadata.utm_medium,
          campaign: metadata.utm_campaign,
        },
        viewport: {
          width: window.innerWidth,
          height: window.innerHeight,
        },
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error('Analytics tracking error:', error);
  }
};

// Track user interactions for learning
export const trackInteraction = async (
  eventType: string,
  elementId: string,
  metadata?: Record<string, unknown>
) => {
  const sessionId = getOrCreateSessionId();
  
  try {
    await supabase.from('analytics_events').insert({
      event_type: eventType,
      page_path: window.location.pathname,
      session_id: sessionId,
      metadata: {
        elementId,
        ...metadata,
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error('Interaction tracking error:', error);
  }
};

// Track scroll depth for content optimization
export const trackScrollDepth = (() => {
  let maxScrollDepth = 0;
  let tracked = new Set<number>();
  
  return (threshold: number) => {
    if (threshold > maxScrollDepth) {
      maxScrollDepth = threshold;
    }
    
    const milestones = [25, 50, 75, 90, 100];
    milestones.forEach(milestone => {
      if (threshold >= milestone && !tracked.has(milestone)) {
        tracked.add(milestone);
        trackInteraction('scroll_depth', `scroll_${milestone}`, { depth: milestone });
      }
    });
  };
})();

// Track conversions
export const trackConversion = async (
  conversionType: 'contact_form' | 'demo_request' | 'newsletter' | 'download' | 'cta_click',
  metadata?: Record<string, unknown>
) => {
  await trackInteraction('conversion', conversionType, {
    conversionType,
    ...metadata,
    value: getConversionValue(conversionType),
  });
};

// Get session ID
const getOrCreateSessionId = (): string => {
  let sessionId = sessionStorage.getItem('axiomio_session_id');
  if (!sessionId) {
    sessionId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    sessionStorage.setItem('axiomio_session_id', sessionId);
  }
  return sessionId;
};

// Conversion value mapping
const getConversionValue = (type: string): number => {
  const values: Record<string, number> = {
    demo_request: 100,
    contact_form: 75,
    download: 25,
    newsletter: 15,
    cta_click: 10,
  };
  return values[type] || 5;
};

// Core Web Vitals tracking
export const trackCoreWebVitals = () => {
  if (typeof window === 'undefined') return;
  
  // First Contentful Paint
  const paintObserver = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.name === 'first-contentful-paint') {
        trackInteraction('core_web_vital', 'fcp', { value: entry.startTime });
      }
    }
  });
  
  try {
    paintObserver.observe({ entryTypes: ['paint'] });
  } catch (e) {
    // Fallback for unsupported browsers
  }
  
  // Largest Contentful Paint
  const lcpObserver = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    const lastEntry = entries[entries.length - 1];
    trackInteraction('core_web_vital', 'lcp', { value: lastEntry.startTime });
  });
  
  try {
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
  } catch (e) {
    // Fallback
  }
  
  // Cumulative Layout Shift
  let clsValue = 0;
  const clsObserver = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (!(entry as any).hadRecentInput) {
        clsValue += (entry as any).value;
      }
    }
  });
  
  try {
    clsObserver.observe({ entryTypes: ['layout-shift'] });
  } catch (e) {
    // Fallback
  }
  
  // Report CLS on page unload
  window.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      trackInteraction('core_web_vital', 'cls', { value: clsValue });
    }
  });
};

// SEO Health Check
export const calculateSEOHealth = (): SEOHealthMetrics => {
  const checks = {
    hasTitle: !!document.title && document.title.length > 0,
    titleLength: document.title.length >= 30 && document.title.length <= 60,
    hasMetaDescription: !!document.querySelector('meta[name="description"]'),
    metaDescriptionLength: (() => {
      const meta = document.querySelector('meta[name="description"]');
      const content = meta?.getAttribute('content') || '';
      return content.length >= 120 && content.length <= 160;
    })(),
    hasCanonical: !!document.querySelector('link[rel="canonical"]'),
    hasOgTags: !!document.querySelector('meta[property="og:title"]'),
    hasTwitterCards: !!document.querySelector('meta[name="twitter:card"]'),
    hasStructuredData: !!document.querySelector('script[type="application/ld+json"]'),
    hasH1: document.querySelectorAll('h1').length === 1,
    imagesHaveAlt: Array.from(document.images).every(img => img.alt),
    hasViewportMeta: !!document.querySelector('meta[name="viewport"]'),
    isHTTPS: window.location.protocol === 'https:',
  };
  
  const technicalScore = calculateScore([
    checks.hasCanonical,
    checks.hasViewportMeta,
    checks.isHTTPS,
    checks.hasStructuredData,
  ]);
  
  const contentScore = calculateScore([
    checks.hasTitle,
    checks.titleLength,
    checks.hasMetaDescription,
    checks.metaDescriptionLength,
    checks.hasH1,
    checks.imagesHaveAlt,
  ]);
  
  const performanceScore = 85; // Would need real performance data
  
  const accessibilityScore = calculateScore([
    checks.imagesHaveAlt,
    checks.hasH1,
    checks.hasViewportMeta,
  ]);
  
  return {
    overallScore: Math.round((technicalScore + contentScore + performanceScore + accessibilityScore) / 4),
    technicalScore,
    contentScore,
    performanceScore,
    accessibilityScore,
  };
};

const calculateScore = (checks: boolean[]): number => {
  const passed = checks.filter(Boolean).length;
  return Math.round((passed / checks.length) * 100);
};

// Keyword density analysis
export const analyzeKeywordDensity = (targetKeywords: string[]): Record<string, number> => {
  const text = document.body.innerText.toLowerCase();
  const words = text.split(/\s+/).length;
  
  return targetKeywords.reduce((acc, keyword) => {
    const regex = new RegExp(keyword.toLowerCase(), 'gi');
    const matches = text.match(regex) || [];
    acc[keyword] = Math.round((matches.length / words) * 1000) / 10; // Percentage with 1 decimal
    return acc;
  }, {} as Record<string, number>);
};

// Internal link analysis
export const analyzeInternalLinks = (): { total: number; broken: number; external: number } => {
  const links = Array.from(document.querySelectorAll('a[href]'));
  const currentDomain = window.location.hostname;
  
  let internal = 0;
  let external = 0;
  
  links.forEach(link => {
    const href = link.getAttribute('href') || '';
    if (href.startsWith('/') || href.includes(currentDomain)) {
      internal++;
    } else if (href.startsWith('http')) {
      external++;
    }
  });
  
  return {
    total: internal,
    broken: 0, // Would need actual link checking
    external,
  };
};

// Page speed insights
export const getPageSpeedMetrics = (): Record<string, number> => {
  if (typeof window === 'undefined' || typeof performance === 'undefined') {
    return { dns: 0, tcp: 0, ttfb: 0, domLoaded: 0, fullyLoaded: 0 };
  }
  
  // Use modern Navigation Timing API Level 2
  const entries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
  
  if (entries.length > 0) {
    const timing = entries[0];
    return {
      dns: Math.round(timing.domainLookupEnd - timing.domainLookupStart),
      tcp: Math.round(timing.connectEnd - timing.connectStart),
      ttfb: Math.round(timing.responseStart - timing.requestStart),
      domLoaded: Math.round(timing.domContentLoadedEventEnd - timing.startTime),
      fullyLoaded: Math.round(timing.loadEventEnd - timing.startTime),
    };
  }
  
  return { dns: 0, tcp: 0, ttfb: 0, domLoaded: 0, fullyLoaded: 0 };
};
