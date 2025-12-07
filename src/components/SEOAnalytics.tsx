// ============================================
// SEO ANALYTICS TRACKING COMPONENT
// Self-learning engagement and performance tracking
// ============================================

import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import {
  trackPageView,
  trackScrollDepth,
  trackCoreWebVitals,
  trackConversion,
} from '@/lib/seo-analytics';

interface SEOAnalyticsProps {
  pageType: string;
  pageTitle: string;
}

export const SEOAnalytics: React.FC<SEOAnalyticsProps> = ({ pageType, pageTitle }) => {
  const location = useLocation();
  const hasTracked = useRef(false);
  
  // Track page views
  useEffect(() => {
    if (hasTracked.current) return;
    hasTracked.current = true;
    
    // Parse UTM parameters
    const params = new URLSearchParams(location.search);
    
    trackPageView({
      pagePath: location.pathname,
      pageTitle,
      pageType,
      utm_source: params.get('utm_source') || undefined,
      utm_medium: params.get('utm_medium') || undefined,
      utm_campaign: params.get('utm_campaign') || undefined,
    });
    
    // Track Core Web Vitals
    trackCoreWebVitals();
    
    return () => {
      hasTracked.current = false;
    };
  }, [location.pathname, pageTitle, pageType]);
  
  // Track scroll depth
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);
      trackScrollDepth(scrollPercent);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Track CTA clicks
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const button = target.closest('button, a');
      
      if (button) {
        const text = button.textContent?.toLowerCase() || '';
        const href = button.getAttribute('href') || '';
        
        // Detect conversion-oriented clicks
        if (
          text.includes('demo') ||
          text.includes('contact') ||
          text.includes('get started') ||
          text.includes('request') ||
          href.includes('/contact')
        ) {
          trackConversion('cta_click', {
            text,
            href,
            page: location.pathname,
          });
        }
      }
    };
    
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [location.pathname]);
  
  return null;
};

export default SEOAnalytics;
