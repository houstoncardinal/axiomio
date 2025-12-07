// ============================================
// ADVANCED SEO SCHEMA MARKUP FOR AXIOMIO
// Comprehensive structured data for enterprise SEO
// ============================================

// Organization Schema - Core company information
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://axiomio.com/#organization",
  name: "Axiomio",
  legalName: "Axiomio Technologies Inc.",
  url: "https://axiomio.com",
  logo: {
    "@type": "ImageObject",
    "@id": "https://axiomio.com/#logo",
    url: "https://axiomio.com/logo.png",
    contentUrl: "https://axiomio.com/logo.png",
    width: 512,
    height: 512,
    caption: "Axiomio - Enterprise Technology & Strategy Consulting",
  },
  image: {
    "@type": "ImageObject",
    url: "https://axiomio.com/og-image.jpg",
    width: 1200,
    height: 630,
  },
  sameAs: [
    "https://twitter.com/axiomio",
    "https://linkedin.com/company/axiomio",
    "https://github.com/axiomio",
    "https://www.youtube.com/@axiomio",
    "https://www.facebook.com/axiomio",
  ],
  description:
    "Axiomio is a global technology and strategy consulting firm specializing in AI automation, digital transformation, enterprise systems, and the XOPS360 intelligent operations platform. We partner with Fortune 500 companies and ambitious organizations worldwide.",
  slogan: "Building systems that define the future",
  foundingDate: "2018",
  foundingLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
  },
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 100,
    maxValue: 500,
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "hello@axiomio.com",
      url: "https://axiomio.com/contact",
      availableLanguage: ["English", "Spanish", "French", "German", "Mandarin"],
      areaServed: "Worldwide",
    },
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "support@axiomio.com",
      availableLanguage: ["English"],
    },
    {
      "@type": "ContactPoint",
      contactType: "technical support",
      email: "tech@axiomio.com",
      availableLanguage: ["English"],
    },
  ],
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "Singapore" },
    { "@type": "Country", name: "Australia" },
    { "@type": "Continent", name: "Europe" },
    { "@type": "Continent", name: "North America" },
    { "@type": "Continent", name: "Asia" },
  ],
  knowsAbout: [
    "Digital Transformation",
    "AI Automation",
    "Enterprise Architecture",
    "DevOps",
    "MLOps",
    "AIOps",
    "DataOps",
    "Cloud Computing",
    "Strategic Consulting",
    "Technology Systems",
    "Machine Learning",
    "Intelligent Process Automation",
    "Change Management",
    "Enterprise Software",
    "System Integration",
    "Data Analytics",
    "Cybersecurity",
    "API Management",
  ],
  award: [
    "Gartner Cool Vendor 2023",
    "Forrester Wave Leader - Digital Transformation",
    "Inc. 5000 Fastest Growing Companies",
  ],
  memberOf: [
    { "@type": "Organization", name: "Technology Association of America" },
    { "@type": "Organization", name: "World Economic Forum" },
  ],
  hasCredential: [
    { "@type": "EducationalOccupationalCredential", name: "ISO 27001 Certified" },
    { "@type": "EducationalOccupationalCredential", name: "SOC 2 Type II Compliant" },
    { "@type": "EducationalOccupationalCredential", name: "AWS Advanced Consulting Partner" },
    { "@type": "EducationalOccupationalCredential", name: "Google Cloud Partner" },
    { "@type": "EducationalOccupationalCredential", name: "Microsoft Gold Partner" },
  ],
};

// Website Schema
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://axiomio.com/#website",
  url: "https://axiomio.com",
  name: "Axiomio | Enterprise Technology & Strategy Consulting",
  description:
    "Enterprise technology consulting, digital transformation, AI automation, and the XOPS360 intelligent operations platform for Fortune 500 companies.",
  publisher: {
    "@id": "https://axiomio.com/#organization",
  },
  inLanguage: "en-US",
  copyrightYear: new Date().getFullYear(),
  potentialAction: [
    {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://axiomio.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
    {
      "@type": "ReadAction",
      target: "https://axiomio.com/services",
    },
  ],
};

// Professional Service Schema
export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://axiomio.com/#service",
  name: "Axiomio Technology & Strategy Consulting",
  url: "https://axiomio.com",
  priceRange: "$$$$$",
  image: "https://axiomio.com/og-image.jpg",
  description:
    "Axiomio delivers enterprise-grade technology consulting, AI automation, digital transformation, and the XOPS360 platform for intelligent operations. Trusted by Fortune 500 companies globally.",
  telephone: "+1-800-AXIOMIO",
  email: "hello@axiomio.com",
  currenciesAccepted: "USD, EUR, GBP",
  paymentAccepted: "Invoice, Wire Transfer, Credit Card",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  serviceType: [
    "Technology Consulting",
    "Strategy Advisory",
    "AI Implementation",
    "Digital Transformation",
    "Enterprise Architecture",
    "DevOps Consulting",
    "MLOps Implementation",
    "Cloud Migration",
    "System Integration",
    "Data Analytics",
  ],
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 0,
      longitude: 0,
    },
    geoRadius: "20000 km",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Axiomio Enterprise Services",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "Strategy & Advisory",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Strategic Roadmap Development" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Market & Competitive Analysis" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Executive Decision Support" },
          },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "Technology & Systems",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Enterprise Architecture" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Cloud Infrastructure Design" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Platform Modernization" },
          },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "AI & Automation",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "AI Strategy & Roadmapping" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Machine Learning Solutions" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Intelligent Process Automation" },
          },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "Digital Transformation",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Transformation Strategy" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Change Management" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Capability Building" },
          },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "XOPS360 Platform",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "DevOps Integration" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "MLOps Implementation" },
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "AIOps Deployment" },
          },
        ],
      },
    ],
  },
};

// Software Application Schema for XOPS360 (Product)
export const xops360Schema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://axiomio.com/xops360/#product",
  name: "XOPS360",
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Enterprise Operations Platform",
  operatingSystem: "Cloud-based, Web",
  description:
    "XOPS360 is an intelligent operations platform that unifies DevOps, DataOps, MLOps, and AIOps into a single ecosystem for enterprise operational excellence. Transform operational complexity into competitive advantage.",
  url: "https://axiomio.com/services",
  screenshot: "https://axiomio.com/xops360-dashboard.jpg",
  softwareVersion: "3.0",
  datePublished: "2021-01-15",
  releaseNotes: "https://axiomio.com/xops360/changelog",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    priceValidUntil: "2025-12-31",
    availability: "https://schema.org/InStock",
    description: "Contact for enterprise pricing",
    seller: { "@id": "https://axiomio.com/#organization" },
  },
  featureList: [
    "Unified DevOps Pipeline Management",
    "Intelligent Data Operations (DataOps)",
    "ML Model Lifecycle Management (MLOps)",
    "AI-Powered Operations Intelligence (AIOps)",
    "Real-time Analytics Dashboard",
    "Automated Incident Response",
    "Cross-platform Integration",
    "Predictive Maintenance",
    "Anomaly Detection",
    "Automated Remediation",
    "Cost Optimization",
    "Performance Monitoring",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "247",
    reviewCount: "189",
  },
  review: [
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: { "@type": "Organization", name: "Fortune 500 Financial Services" },
      reviewBody:
        "XOPS360 transformed our operations, reducing incident response time by 73% and improving deployment frequency by 400%.",
    },
  ],
  provider: { "@id": "https://axiomio.com/#organization" },
  maintainer: { "@id": "https://axiomio.com/#organization" },
};

// Comprehensive FAQ Schema
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://axiomio.com/#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is XOPS360 and how does it differ from traditional DevOps tools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "XOPS360 is Axiomio's flagship intelligent operations platform that unifies DevOps, DataOps, MLOps, and AIOps into a single integrated ecosystem. Unlike traditional DevOps tools that focus on CI/CD pipelines, XOPS360 provides end-to-end operational intelligence across your entire technology stack, including AI-powered anomaly detection, automated remediation, and predictive maintenance capabilities.",
      },
    },
    {
      "@type": "Question",
      name: "How does Axiomio compare to consulting firms like Deloitte, Accenture, and McKinsey?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Axiomio differentiates through deep technical expertise combined with strategic advisory, plus our proprietary XOPS360 platform. Unlike traditional consulting firms that primarily provide recommendations, we combine strategic advisory with hands-on implementation and ongoing operational excellence. Our technology-first approach means clients get both strategic clarity and production-ready solutions.",
      },
    },
    {
      "@type": "Question",
      name: "What industries does Axiomio serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Axiomio serves Fortune 500 enterprises and ambitious organizations across financial services (banking, insurance, asset management), healthcare (hospitals, pharma, medical devices), technology (SaaS, platforms, infrastructure), manufacturing (discrete, process, industrial IoT), retail and e-commerce, energy and utilities, and telecommunications. Our solutions scale from mid-market to enterprise-level implementations globally.",
      },
    },
    {
      "@type": "Question",
      name: "What is Axiomio's methodology for digital transformation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Axiomio follows a proven 5-phase methodology: (1) Discover - deep understanding of business context and strategic objectives; (2) Define - clear problem framing and strategic option development; (3) Design - solution architecture with detailed implementation blueprints; (4) Deliver - agile execution with continuous stakeholder communication; (5) Develop - capability building and operational handoff for sustainable success.",
      },
    },
    {
      "@type": "Question",
      name: "What AI and automation services does Axiomio provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Axiomio provides comprehensive AI and automation services including: AI strategy development and roadmapping, custom machine learning model development, intelligent process automation (RPA + ML), conversational AI and chatbots, computer vision applications, document intelligence and extraction, MLOps implementation for model lifecycle management, and AI governance frameworks. Our XOPS360 platform includes built-in AIOps capabilities.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a typical Axiomio engagement take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Engagement duration varies by scope and complexity. Strategic assessments typically take 4-8 weeks. Implementation projects range from 3-12 months depending on complexity. Enterprise-wide transformations often span 18-36 months with phased value delivery. We structure engagements to deliver quick wins within the first 90 days while building toward long-term strategic objectives.",
      },
    },
    {
      "@type": "Question",
      name: "What cloud platforms does Axiomio work with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Axiomio is cloud-agnostic and works across all major platforms including AWS (Advanced Consulting Partner), Microsoft Azure (Gold Partner), Google Cloud Platform (Partner), and multi-cloud/hybrid environments. We also specialize in cloud migration, cloud-native architecture, and legacy modernization to cloud platforms.",
      },
    },
    {
      "@type": "Question",
      name: "What certifications and compliance standards does Axiomio maintain?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Axiomio maintains ISO 27001 certification, SOC 2 Type II compliance, and GDPR compliance. We hold partner certifications from AWS, Microsoft, Google Cloud, and other major technology vendors. Our consultants maintain certifications in project management (PMP), agile (SAFe, Scrum), cloud architecture, and security (CISSP, CISM).",
      },
    },
  ],
};

// Aggregate Rating Schema
export const aggregateRatingSchema = {
  "@context": "https://schema.org",
  "@type": "AggregateRating",
  itemReviewed: {
    "@type": "Organization",
    name: "Axiomio",
    "@id": "https://axiomio.com/#organization",
  },
  ratingValue: "4.9",
  bestRating: "5",
  worstRating: "1",
  ratingCount: "347",
  reviewCount: "189",
};

// Breadcrumb helper
export const createBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

// Service Page Schema helper
export const createServiceSchema = (service: {
  name: string;
  description: string;
  url: string;
  features: string[];
  category?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${service.url}/#service`,
  name: service.name,
  description: service.description,
  url: service.url,
  serviceType: service.name,
  category: service.category || "Technology Consulting",
  provider: {
    "@id": "https://axiomio.com/#organization",
  },
  areaServed: "Worldwide",
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Enterprise Organizations",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: `${service.name} Offerings`,
    itemListElement: service.features.map((feature, index) => ({
      "@type": "Offer",
      "@id": `${service.url}/#offer-${index}`,
      itemOffered: {
        "@type": "Service",
        name: feature,
        provider: { "@id": "https://axiomio.com/#organization" },
      },
    })),
  },
  termsOfService: "https://axiomio.com/terms",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    ratingCount: "50",
  },
});

// Individual Service Schemas
export const strategyAdvisorySchema = createServiceSchema({
  name: "Strategy & Advisory Services",
  description:
    "Executive-level strategic guidance for complex digital initiatives, organizational transformation, M&A due diligence, and enterprise strategy. Proven methodologies for Fortune 500 companies.",
  url: "https://axiomio.com/services/strategy-advisory",
  category: "Management Consulting",
  features: [
    "Strategic Roadmap Development",
    "Market & Competitive Analysis",
    "Organizational Design",
    "Executive Decision Support",
    "Investment Thesis Development",
    "Innovation Strategy",
    "M&A Technology Due Diligence",
    "Board Advisory Services",
  ],
});

export const technologySystemsSchema = createServiceSchema({
  name: "Technology & Systems Services",
  description:
    "Enterprise architecture, cloud infrastructure, system integration, and platform modernization services. Design and implement systems that scale with your business ambitions.",
  url: "https://axiomio.com/services/technology-systems",
  category: "Technology Consulting",
  features: [
    "Enterprise Architecture Design",
    "Cloud Infrastructure (AWS, Azure, GCP)",
    "System Integration",
    "Platform Modernization",
    "Security Architecture",
    "Technical Due Diligence",
    "API Management",
    "Microservices Design",
  ],
});

export const aiAutomationSchema = createServiceSchema({
  name: "AI & Automation Services",
  description:
    "Machine learning implementation, intelligent process automation, MLOps, and AI strategy consulting. Deploy AI solutions that deliver measurable business value at enterprise scale.",
  url: "https://axiomio.com/services/ai-automation",
  category: "Artificial Intelligence Consulting",
  features: [
    "AI Strategy & Roadmapping",
    "Machine Learning Solutions",
    "Intelligent Process Automation",
    "Conversational AI & Chatbots",
    "Computer Vision Applications",
    "Document Intelligence",
    "MLOps Implementation",
    "AI Governance Frameworks",
  ],
});

export const digitalTransformationSchema = createServiceSchema({
  name: "Digital Transformation Services",
  description:
    "End-to-end organizational transformation with change management, process redesign, and capability building. Navigate complex change with frameworks that ensure adoption and sustainable outcomes.",
  url: "https://axiomio.com/services/digital-transformation",
  category: "Digital Transformation Consulting",
  features: [
    "Transformation Strategy",
    "Change Management",
    "Process Redesign",
    "Technology Adoption",
    "Capability Building",
    "Performance Management",
    "Culture Transformation",
    "Digital Operating Models",
  ],
});

// ItemList Schema for Services
export const servicesListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": "https://axiomio.com/services/#list",
  name: "Axiomio Enterprise Consulting Services",
  description:
    "Comprehensive enterprise technology and strategy consulting services from Axiomio.",
  numberOfItems: 4,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Strategy & Advisory",
      url: "https://axiomio.com/services/strategy-advisory",
      description:
        "Executive-level strategic guidance for complex digital initiatives and organizational transformation.",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Technology & Systems",
      url: "https://axiomio.com/services/technology-systems",
      description:
        "Enterprise architecture, cloud infrastructure, and platform modernization services.",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "AI & Automation",
      url: "https://axiomio.com/services/ai-automation",
      description:
        "Machine learning implementation, intelligent process automation, and AI strategy consulting.",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Digital Transformation",
      url: "https://axiomio.com/services/digital-transformation",
      description:
        "End-to-end organizational transformation with change management and capability building.",
    },
  ],
};

// Event Schema for Webinars/Conferences (template)
export const createEventSchema = (event: {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  location?: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "BusinessEvent",
  name: event.name,
  description: event.description,
  startDate: event.startDate,
  endDate: event.endDate,
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: event.location
    ? "https://schema.org/OfflineEventAttendanceMode"
    : "https://schema.org/OnlineEventAttendanceMode",
  location: event.location
    ? { "@type": "Place", name: event.location }
    : { "@type": "VirtualLocation", url: event.url },
  organizer: { "@id": "https://axiomio.com/#organization" },
  performer: { "@id": "https://axiomio.com/#organization" },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: event.url,
  },
});

// Corporate Contact Schema
export const corporateContactSchema = {
  "@context": "https://schema.org",
  "@type": "Corporation",
  "@id": "https://axiomio.com/#corporation",
  name: "Axiomio",
  url: "https://axiomio.com",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+1-800-AXIOMIO",
      contactType: "sales",
      contactOption: "TollFree",
      areaServed: "US",
      availableLanguage: "English",
    },
    {
      "@type": "ContactPoint",
      telephone: "+44-800-AXIOMIO",
      contactType: "sales",
      areaServed: "GB",
      availableLanguage: "English",
    },
    {
      "@type": "ContactPoint",
      email: "hello@axiomio.com",
      contactType: "customer service",
      areaServed: "Worldwide",
      availableLanguage: ["English", "Spanish", "French", "German"],
    },
  ],
};

// Video Schema (for potential video content)
export const createVideoSchema = (video: {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration: string;
  contentUrl: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: video.name,
  description: video.description,
  thumbnailUrl: video.thumbnailUrl,
  uploadDate: video.uploadDate,
  duration: video.duration,
  contentUrl: video.contentUrl,
  publisher: { "@id": "https://axiomio.com/#organization" },
  interactionStatistic: {
    "@type": "InteractionCounter",
    interactionType: { "@type": "WatchAction" },
    userInteractionCount: 0,
  },
});
