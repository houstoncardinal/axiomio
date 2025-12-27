// ============================================
// ENHANCED SEO SCHEMA MARKUP - PAGE SPECIFIC
// Comprehensive structured data for all pages
// ============================================

import {
  organizationSchema,
  websiteSchema,
  professionalServiceSchema,
  faqSchema,
  xops360Schema,
  aggregateRatingSchema,
  corporateContactSchema,
  strategyAdvisorySchema,
  technologySystemsSchema,
  aiAutomationSchema,
  digitalTransformationSchema,
  servicesListSchema,
  createBreadcrumbSchema,
} from './seo-schemas';

// ============================================
// HOMEPAGE COMPREHENSIVE SCHEMA
// ============================================
export const homepageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    organizationSchema,
    websiteSchema,
    professionalServiceSchema,
    faqSchema,
    xops360Schema,
    aggregateRatingSchema,
    {
      "@type": "WebPage",
      "@id": "https://axiomio.com/#webpage",
      url: "https://axiomio.com/",
      name: "Axiomio | Enterprise Technology & Strategy Consulting | Xops360 Platform",
      isPartOf: { "@id": "https://axiomio.com/#website" },
      about: { "@id": "https://axiomio.com/#organization" },
      description: "AXIOMIO is a global technology and strategy consulting firm. Our Xops360 platform unifies DevOps, DataOps, MLOps & AIOps. Digital transformation, AI automation & enterprise systems for Fortune 500 companies.",
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://axiomio.com/og-image.jpg",
      },
      datePublished: "2023-01-01",
      dateModified: new Date().toISOString().split('T')[0],
      inLanguage: "en-US",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://axiomio.com/services"],
        },
        {
          "@type": "ContactAction",
          target: "https://axiomio.com/contact",
        },
      ],
    },
    // SpecialAnnouncement for featured content
    {
      "@type": "SpecialAnnouncement",
      name: "Xops360 Platform Launch",
      text: "AXIOMIO's Xops360 platform unifies DevOps, DataOps, MLOps, and AIOps into a single intelligent automation platform.",
      datePosted: "2024-01-01",
      expires: "2025-12-31",
      category: "https://www.wikidata.org/wiki/Q1047113",
      announcementLocation: {
        "@type": "VirtualLocation",
        url: "https://axiomio.com/xops360",
      },
    },
  ],
};

// ============================================
// ABOUT PAGE SCHEMA
// ============================================
export const aboutPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    createBreadcrumbSchema([
      { name: "Home", url: "https://axiomio.com/" },
      { name: "About", url: "https://axiomio.com/about" },
    ]),
    {
      "@type": "AboutPage",
      "@id": "https://axiomio.com/about/#webpage",
      url: "https://axiomio.com/about",
      name: "About Axiomio | Enterprise Technology & Strategy Consulting Firm",
      description: "Learn about AXIOMIO's vision, values, and precision-driven approach to digital transformation and AI implementation for Fortune 500 companies.",
      isPartOf: { "@id": "https://axiomio.com/#website" },
      about: { "@id": "https://axiomio.com/#organization" },
      mainEntity: {
        "@type": "Organization",
        "@id": "https://axiomio.com/#organization",
      },
      dateModified: new Date().toISOString().split('T')[0],
    },
    organizationSchema,
    // Company values as defined concepts
    {
      "@type": "ItemList",
      name: "Axiomio Core Values",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Clarity Over Complexity",
          description: "We distill complex challenges into actionable frameworks.",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Systems Thinking",
          description: "We design solutions considering interconnections and long-term implications.",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Measured Execution",
          description: "Every initiative is grounded in metrics that matter.",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Enduring Partnerships",
          description: "We invest in relationships that span years, not projects.",
        },
      ],
    },
  ],
};

// ============================================
// SERVICES INDEX PAGE SCHEMA
// ============================================
export const servicesPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    createBreadcrumbSchema([
      { name: "Home", url: "https://axiomio.com/" },
      { name: "Services", url: "https://axiomio.com/services" },
    ]),
    {
      "@type": "CollectionPage",
      "@id": "https://axiomio.com/services/#webpage",
      url: "https://axiomio.com/services",
      name: "Enterprise Consulting Services | Strategy, AI, Digital Transformation | Axiomio",
      description: "AXIOMIO's enterprise consulting services: Strategy & Advisory, Technology & Systems, AI & Automation, and Digital Transformation. Xops360 platform for intelligent operations.",
      isPartOf: { "@id": "https://axiomio.com/#website" },
      about: { "@id": "https://axiomio.com/#service" },
      mainEntity: servicesListSchema,
      dateModified: new Date().toISOString().split('T')[0],
    },
    professionalServiceSchema,
    servicesListSchema,
    organizationSchema,
  ],
};

// ============================================
// APPROACH PAGE SCHEMA (HowTo)
// ============================================
export const approachPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    createBreadcrumbSchema([
      { name: "Home", url: "https://axiomio.com/" },
      { name: "Approach", url: "https://axiomio.com/approach" },
    ]),
    {
      "@type": "WebPage",
      "@id": "https://axiomio.com/approach/#webpage",
      url: "https://axiomio.com/approach",
      name: "Our Approach | 5-Phase Transformation Methodology | Axiomio",
      description: "AXIOMIO's proven 5-phase methodology: Discover, Define, Design, Deliver, Develop. Systematic approach to enterprise digital transformation.",
      isPartOf: { "@id": "https://axiomio.com/#website" },
      dateModified: new Date().toISOString().split('T')[0],
    },
    {
      "@type": "HowTo",
      "@id": "https://axiomio.com/approach/#methodology",
      name: "Axiomio's 5-Phase Transformation Methodology",
      description: "Our systematic approach to enterprise digital transformation ensures sustainable outcomes through rigorous understanding, careful design, and disciplined execution.",
      totalTime: "P12M",
      estimatedCost: {
        "@type": "MonetaryAmount",
        currency: "USD",
        value: "Custom pricing based on scope",
      },
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Discover",
          text: "Deep understanding before action - immersing in business model, competitive landscape, and strategic objectives.",
          url: "https://axiomio.com/approach#discover",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Define",
          text: "Clarity through rigorous framing - articulating problem space and developing strategic options.",
          url: "https://axiomio.com/approach#define",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Design",
          text: "Architecture for durability - designing solutions for immediate needs and long-term adaptability.",
          url: "https://axiomio.com/approach#design",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Deliver",
          text: "Execution with discipline - implementing with rigor and adaptability.",
          url: "https://axiomio.com/approach#deliver",
        },
        {
          "@type": "HowToStep",
          position: 5,
          name: "Develop",
          text: "Building lasting capability - focusing on internal capabilities that endure.",
          url: "https://axiomio.com/approach#develop",
        },
      ],
      tool: [
        { "@type": "HowToTool", name: "Xops360 Platform" },
        { "@type": "HowToTool", name: "Enterprise Architecture Frameworks" },
        { "@type": "HowToTool", name: "Change Management Methodologies" },
      ],
    },
    organizationSchema,
  ],
};

// ============================================
// CONTACT PAGE SCHEMA
// ============================================
export const contactPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    createBreadcrumbSchema([
      { name: "Home", url: "https://axiomio.com/" },
      { name: "Contact", url: "https://axiomio.com/contact" },
    ]),
    {
      "@type": "ContactPage",
      "@id": "https://axiomio.com/contact/#webpage",
      url: "https://axiomio.com/contact",
      name: "Contact Axiomio | Enterprise Technology Consulting Inquiry",
      description: "Contact AXIOMIO for enterprise technology consulting, digital transformation, AI automation, and Xops360 platform inquiries.",
      isPartOf: { "@id": "https://axiomio.com/#website" },
      mainEntity: corporateContactSchema,
      dateModified: new Date().toISOString().split('T')[0],
    },
    corporateContactSchema,
    {
      "@type": "ContactPoint",
      "@id": "https://axiomio.com/#contactpoint",
      contactType: "sales",
      email: "hello@axiomio.com",
      url: "https://axiomio.com/contact",
      availableLanguage: ["English", "Spanish", "French", "German"],
      areaServed: "Worldwide",
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    },
    organizationSchema,
  ],
};

// ============================================
// Xops360 PRODUCT PAGE SCHEMA
// ============================================
export const xops360PageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    createBreadcrumbSchema([
      { name: "Home", url: "https://axiomio.com/" },
      { name: "Xops360", url: "https://axiomio.com/xops360" },
    ]),
    {
      "@type": "ProductPage",
      "@id": "https://axiomio.com/xops360/#webpage",
      url: "https://axiomio.com/xops360",
      name: "Xops360 | Enterprise CloudOps Automation Platform | Axiomio",
      description: "Xops360 unifies DevOps, DataOps, MLOps & AIOps into one intelligent automation platform. Reduce incidents by 60%, cut cloud costs by 35%.",
      isPartOf: { "@id": "https://axiomio.com/#website" },
      mainEntity: xops360Schema,
      dateModified: new Date().toISOString().split('T')[0],
    },
    xops360Schema,
    // Product comparison
    {
      "@type": "ItemList",
      name: "Xops360 Use Cases",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "For Managed Service Providers",
          description: "White-label platform for scaling clients without scaling headcount. 2-3x more clients per engineer.",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "For Cloud-Native Enterprises",
          description: "Central CloudOps automation for SRE/DevOps teams. 60% fewer incidents, 35% cost reduction.",
        },
      ],
    },
    organizationSchema,
  ],
};

// ============================================
// SERVICE DETAIL PAGE SCHEMAS
// ============================================
export const strategyAdvisoryPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    createBreadcrumbSchema([
      { name: "Home", url: "https://axiomio.com/" },
      { name: "Services", url: "https://axiomio.com/services" },
      { name: "Strategy & Advisory", url: "https://axiomio.com/services/strategy-advisory" },
    ]),
    {
      "@type": "WebPage",
      "@id": "https://axiomio.com/services/strategy-advisory/#webpage",
      url: "https://axiomio.com/services/strategy-advisory",
      name: "Strategy & Advisory Services | Executive Consulting | Axiomio",
      description: "Executive-level strategic guidance for complex digital initiatives, organizational transformation, and enterprise strategy.",
      isPartOf: { "@id": "https://axiomio.com/#website" },
      mainEntity: strategyAdvisorySchema,
      dateModified: new Date().toISOString().split('T')[0],
    },
    strategyAdvisorySchema,
    organizationSchema,
  ],
};

export const technologySystemsPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    createBreadcrumbSchema([
      { name: "Home", url: "https://axiomio.com/" },
      { name: "Services", url: "https://axiomio.com/services" },
      { name: "Technology & Systems", url: "https://axiomio.com/services/technology-systems" },
    ]),
    {
      "@type": "WebPage",
      "@id": "https://axiomio.com/services/technology-systems/#webpage",
      url: "https://axiomio.com/services/technology-systems",
      name: "Technology & Systems Services | Enterprise Architecture | Axiomio",
      description: "Enterprise architecture, cloud infrastructure, system integration, and platform modernization services.",
      isPartOf: { "@id": "https://axiomio.com/#website" },
      mainEntity: technologySystemsSchema,
      dateModified: new Date().toISOString().split('T')[0],
    },
    technologySystemsSchema,
    organizationSchema,
  ],
};

export const aiAutomationPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    createBreadcrumbSchema([
      { name: "Home", url: "https://axiomio.com/" },
      { name: "Services", url: "https://axiomio.com/services" },
      { name: "AI & Automation", url: "https://axiomio.com/services/ai-automation" },
    ]),
    {
      "@type": "WebPage",
      "@id": "https://axiomio.com/services/ai-automation/#webpage",
      url: "https://axiomio.com/services/ai-automation",
      name: "AI & Automation Services | Machine Learning & MLOps | Axiomio",
      description: "Enterprise AI implementation, machine learning solutions, intelligent process automation, and MLOps consulting.",
      isPartOf: { "@id": "https://axiomio.com/#website" },
      mainEntity: aiAutomationSchema,
      dateModified: new Date().toISOString().split('T')[0],
    },
    aiAutomationSchema,
    organizationSchema,
  ],
};

export const digitalTransformationPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    createBreadcrumbSchema([
      { name: "Home", url: "https://axiomio.com/" },
      { name: "Services", url: "https://axiomio.com/services" },
      { name: "Digital Transformation", url: "https://axiomio.com/services/digital-transformation" },
    ]),
    {
      "@type": "WebPage",
      "@id": "https://axiomio.com/services/digital-transformation/#webpage",
      url: "https://axiomio.com/services/digital-transformation",
      name: "Digital Transformation Services | Change Management | Axiomio",
      description: "End-to-end organizational transformation with change management, process redesign, and capability building.",
      isPartOf: { "@id": "https://axiomio.com/#website" },
      mainEntity: digitalTransformationSchema,
      dateModified: new Date().toISOString().split('T')[0],
    },
    digitalTransformationSchema,
    organizationSchema,
  ],
};

// ============================================
// SITELINKS SEARCHBOX SCHEMA
// ============================================
export const sitelinksSearchboxSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: "https://axiomio.com",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://axiomio.com/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

// ============================================
// LOCAL BUSINESS SCHEMA (for geo-targeting)
// ============================================
export const localBusinessSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://axiomio.com/#us-office",
    name: "Axiomio - United States",
    image: "https://axiomio.com/logo.png",
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
      addressRegion: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 37.7749,
      longitude: -122.4194,
    },
    url: "https://axiomio.com",
    telephone: "+1-800-AXIOMIO",
    priceRange: "$$$$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    parentOrganization: { "@id": "https://axiomio.com/#organization" },
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://axiomio.com/#uk-office",
    name: "Axiomio - United Kingdom",
    image: "https://axiomio.com/logo.png",
    address: {
      "@type": "PostalAddress",
      addressCountry: "GB",
      addressRegion: "London",
    },
    url: "https://axiomio.com",
    telephone: "+44-800-AXIOMIO",
    priceRange: "$$$$$",
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
    parentOrganization: { "@id": "https://axiomio.com/#organization" },
  },
];

// ============================================
// KNOWLEDGE GRAPH ENRICHMENT
// ============================================
export const knowledgeGraphSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://axiomio.com/#organization",
  name: "Axiomio",
  alternateName: ["AXIOMIO Technologies", "AXIOMIO Consulting"],
  url: "https://axiomio.com",
  logo: "https://axiomio.com/logo.png",
  sameAs: [
    "https://twitter.com/axiomio",
    "https://linkedin.com/company/axiomio",
    "https://github.com/axiomio",
    "https://www.crunchbase.com/organization/axiomio",
    "https://www.glassdoor.com/Overview/Working-at-Axiomio",
  ],
  knowsAbout: [
    "https://en.wikipedia.org/wiki/Digital_transformation",
    "https://en.wikipedia.org/wiki/Artificial_intelligence",
    "https://en.wikipedia.org/wiki/DevOps",
    "https://en.wikipedia.org/wiki/Cloud_computing",
    "https://en.wikipedia.org/wiki/Management_consulting",
    "https://en.wikipedia.org/wiki/Enterprise_architecture",
  ],
  hasCredential: [
    { "@type": "EducationalOccupationalCredential", name: "ISO 27001 Certified" },
    { "@type": "EducationalOccupationalCredential", name: "SOC 2 Type II Compliant" },
    { "@type": "EducationalOccupationalCredential", name: "AWS Advanced Consulting Partner" },
    { "@type": "EducationalOccupationalCredential", name: "Google Cloud Partner" },
    { "@type": "EducationalOccupationalCredential", name: "Microsoft Gold Partner" },
  ],
  award: [
    "Gartner Cool Vendor 2023",
    "Forrester Wave Leader - Digital Transformation",
    "Inc. 5000 Fastest Growing Companies 2023",
    "Deloitte Technology Fast 500",
  ],
  slogan: "Building systems that define the future",
};
