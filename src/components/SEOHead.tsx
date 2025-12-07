import { useEffect, useCallback } from "react";
import { SEOAnalytics } from "./SEOAnalytics";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: "website" | "article" | "service" | "product";
  structuredData?: object | object[];
  noIndex?: boolean;
  pageType?: string;
  // Additional SEO properties
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  locale?: string;
  alternateLocales?: string[];
  twitterCreator?: string;
  articleSection?: string;
  // Preconnect and prefetch
  preconnectUrls?: string[];
  prefetchUrls?: string[];
}

export function SEOHead({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = "https://axiomio.com/og-image.jpg",
  ogType = "website",
  structuredData,
  noIndex = false,
  pageType = "page",
  author = "Axiomio",
  publishedTime,
  modifiedTime,
  locale = "en_US",
  alternateLocales = [],
  twitterCreator = "@axiomio",
  articleSection,
  preconnectUrls = [],
  prefetchUrls = [],
}: SEOHeadProps) {
  
  // Memoized meta tag updater
  const updateMeta = useCallback((name: string, content: string, property = false) => {
    const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
    let meta = document.querySelector(selector) as HTMLMetaElement;
    if (!meta) {
      meta = document.createElement("meta");
      if (property) {
        meta.setAttribute("property", name);
      } else {
        meta.setAttribute("name", name);
      }
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", content);
  }, []);

  // Update link tags
  const updateLink = useCallback((rel: string, href: string, attributes?: Record<string, string>) => {
    let link = document.querySelector(`link[rel="${rel}"]${attributes?.hreflang ? `[hreflang="${attributes.hreflang}"]` : ''}`) as HTMLLinkElement;
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      if (attributes) {
        Object.entries(attributes).forEach(([key, value]) => {
          link.setAttribute(key, value);
        });
      }
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }, []);

  // Add preconnect links for performance
  const addPreconnect = useCallback((url: string) => {
    if (!document.querySelector(`link[rel="preconnect"][href="${url}"]`)) {
      const link = document.createElement("link");
      link.rel = "preconnect";
      link.href = url;
      link.crossOrigin = "anonymous";
      document.head.appendChild(link);
    }
  }, []);

  // Add prefetch for anticipated navigation
  const addPrefetch = useCallback((url: string) => {
    if (!document.querySelector(`link[rel="prefetch"][href="${url}"]`)) {
      const link = document.createElement("link");
      link.rel = "prefetch";
      link.href = url;
      document.head.appendChild(link);
    }
  }, []);

  useEffect(() => {
    // Update document title with brand
    const brandedTitle = title.includes("Axiomio") ? title : `${title} | Axiomio`;
    document.title = brandedTitle;

    // Primary Meta Tags
    updateMeta("description", description);
    updateMeta("author", author);
    
    if (keywords) {
      updateMeta("keywords", keywords);
    }

    // Robots directives
    if (noIndex) {
      updateMeta("robots", "noindex, nofollow");
    } else {
      updateMeta("robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
      updateMeta("googlebot", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
      updateMeta("bingbot", "index, follow");
    }

    // Open Graph Tags
    updateMeta("og:title", brandedTitle, true);
    updateMeta("og:description", description, true);
    updateMeta("og:type", ogType === "service" ? "website" : ogType, true);
    updateMeta("og:image", ogImage, true);
    updateMeta("og:image:width", "1200", true);
    updateMeta("og:image:height", "630", true);
    updateMeta("og:image:alt", `${title} - Axiomio`, true);
    updateMeta("og:site_name", "Axiomio", true);
    updateMeta("og:locale", locale, true);
    
    if (canonicalUrl) {
      updateMeta("og:url", canonicalUrl, true);
    }

    // Alternate locales
    alternateLocales.forEach((altLocale) => {
      updateMeta(`og:locale:alternate`, altLocale, true);
    });

    // Article-specific Open Graph
    if (ogType === "article") {
      if (publishedTime) updateMeta("article:published_time", publishedTime, true);
      if (modifiedTime) updateMeta("article:modified_time", modifiedTime, true);
      if (articleSection) updateMeta("article:section", articleSection, true);
      updateMeta("article:author", author, true);
    }

    // Twitter Card Tags
    updateMeta("twitter:card", "summary_large_image");
    updateMeta("twitter:title", brandedTitle);
    updateMeta("twitter:description", description);
    updateMeta("twitter:image", ogImage);
    updateMeta("twitter:image:alt", `${title} - Axiomio`);
    updateMeta("twitter:site", "@axiomio");
    updateMeta("twitter:creator", twitterCreator);

    // Additional SEO Tags
    updateMeta("format-detection", "telephone=no");
    updateMeta("theme-color", "#00d4ff");
    updateMeta("msapplication-TileColor", "#030712");
    updateMeta("apple-mobile-web-app-capable", "yes");
    updateMeta("apple-mobile-web-app-status-bar-style", "black-translucent");
    updateMeta("apple-mobile-web-app-title", "Axiomio");

    // Canonical URL
    if (canonicalUrl) {
      updateLink("canonical", canonicalUrl);
    }

    // Preconnect for performance
    const defaultPreconnects = [
      "https://fonts.googleapis.com",
      "https://fonts.gstatic.com",
    ];
    [...defaultPreconnects, ...preconnectUrls].forEach(addPreconnect);

    // Prefetch anticipated pages
    prefetchUrls.forEach(addPrefetch);

    // Structured Data (supports multiple schemas)
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => script.remove());

    if (structuredData) {
      const schemas = Array.isArray(structuredData) ? structuredData : [structuredData];
      schemas.forEach((schema, index) => {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.id = `structured-data-${index}`;
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
      });
    }

    // Cleanup function
    return () => {
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      scripts.forEach(script => script.remove());
    };
  }, [
    title, description, keywords, canonicalUrl, ogImage, ogType, 
    structuredData, noIndex, author, publishedTime, modifiedTime,
    locale, alternateLocales, twitterCreator, articleSection,
    preconnectUrls, prefetchUrls, updateMeta, updateLink, addPreconnect, addPrefetch
  ]);

  return <SEOAnalytics pageType={pageType} pageTitle={title} />;
}
