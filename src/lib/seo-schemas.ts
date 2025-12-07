// Organization Schema
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://axiomio.com/#organization",
  name: "Axiomio",
  url: "https://axiomio.com",
  logo: {
    "@type": "ImageObject",
    url: "https://axiomio.com/logo.png",
    width: 512,
    height: 512,
  },
  sameAs: [
    "https://twitter.com/axiomio",
    "https://linkedin.com/company/axiomio",
    "https://github.com/axiomio",
  ],
  description:
    "Axiomio is a global technology and strategy consulting firm specializing in AI automation, digital transformation, enterprise systems, and XOPS360 intelligent operations platform.",
  foundingDate: "2018",
  slogan: "Building systems that define the future",
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "hello@axiomio.com",
      availableLanguage: ["English"],
    },
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "support@axiomio.com",
      availableLanguage: ["English"],
    },
  ],
  areaServed: {
    "@type": "Place",
    name: "Worldwide",
  },
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
  ],
};

// Website Schema
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://axiomio.com/#website",
  url: "https://axiomio.com",
  name: "Axiomio | Technology & Strategy Consulting",
  description:
    "Enterprise technology consulting and digital transformation services. XOPS360 intelligent operations platform.",
  publisher: {
    "@id": "https://axiomio.com/#organization",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://axiomio.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
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
    "Axiomio delivers enterprise-grade technology consulting, AI automation, digital transformation, and the XOPS360 platform for intelligent operations.",
  serviceType: [
    "Technology Consulting",
    "Strategy Advisory",
    "AI Implementation",
    "Digital Transformation",
    "Enterprise Architecture",
    "DevOps Consulting",
    "MLOps Implementation",
  ],
  areaServed: "Worldwide",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Axiomio Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Strategy & Advisory",
          description:
            "Executive-level strategic guidance for complex digital initiatives and organizational transformation.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Technology & Systems",
          description:
            "Enterprise architecture design, cloud infrastructure, and system integration services.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI & Automation",
          description:
            "Machine learning implementation, intelligent process automation, and AI strategy consulting.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Digital Transformation",
          description:
            "End-to-end organizational change management and technology adoption programs.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "XOPS360 Platform",
          description:
            "Unified intelligent operations platform integrating DevOps, DataOps, MLOps, and AIOps.",
        },
      },
    ],
  },
};

// Software Application Schema for XOPS360
export const xops360Schema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "XOPS360",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Cloud-based",
  description:
    "XOPS360 is an intelligent operations platform that unifies DevOps, DataOps, MLOps, and AIOps into a single ecosystem for enterprise operational excellence.",
  offers: {
    "@type": "Offer",
    price: "Contact for pricing",
    priceCurrency: "USD",
  },
  featureList: [
    "Unified DevOps Pipeline Management",
    "Intelligent Data Operations",
    "ML Model Lifecycle Management",
    "AI-Powered Operations Intelligence",
    "Real-time Analytics Dashboard",
    "Automated Incident Response",
    "Cross-platform Integration",
  ],
  provider: {
    "@id": "https://axiomio.com/#organization",
  },
};

// FAQ Schema
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is XOPS360?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "XOPS360 is Axiomio's flagship intelligent operations platform that unifies DevOps, DataOps, MLOps, and AIOps into a single integrated ecosystem. It transforms operational complexity into competitive advantage by providing real-time visibility, automated workflows, and AI-powered insights across your entire technology stack.",
      },
    },
    {
      "@type": "Question",
      name: "How does Axiomio compare to Deloitte and Accenture?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Axiomio differentiates through deep technical expertise, precision-driven methodology, and the proprietary XOPS360 platform. Unlike traditional consulting firms, we combine strategic advisory with hands-on implementation and ongoing operational excellence through our unified platform approach.",
      },
    },
    {
      "@type": "Question",
      name: "What industries does Axiomio serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Axiomio serves Fortune 500 enterprises and ambitious organizations across financial services, healthcare, technology, manufacturing, retail, and energy sectors. Our solutions scale from mid-market to enterprise-level implementations globally.",
      },
    },
    {
      "@type": "Question",
      name: "What is Axiomio's approach to digital transformation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Axiomio follows a five-phase methodology: Discover (understanding), Define (clarity), Design (architecture), Deliver (execution), and Develop (capability building). This systematic approach ensures sustainable outcomes and lasting organizational capability development.",
      },
    },
    {
      "@type": "Question",
      name: "Does Axiomio offer AI and automation services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Axiomio provides comprehensive AI and automation services including AI strategy development, machine learning implementation, intelligent process automation, MLOps, and AI governance. Our XOPS360 platform includes built-in AIOps capabilities for intelligent operations.",
      },
    },
  ],
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
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: service.name,
  description: service.description,
  url: service.url,
  provider: {
    "@id": "https://axiomio.com/#organization",
  },
  areaServed: "Worldwide",
  serviceType: service.name,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: `${service.name} Offerings`,
    itemListElement: service.features.map((feature) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: feature,
      },
    })),
  },
});

// Aggregate Rating Schema (for testimonials)
export const aggregateRatingSchema = {
  "@context": "https://schema.org",
  "@type": "AggregateRating",
  itemReviewed: {
    "@type": "Organization",
    name: "Axiomio",
  },
  ratingValue: "4.9",
  bestRating: "5",
  worstRating: "1",
  ratingCount: "150",
  reviewCount: "87",
};
