// ============================================
// JSON-LD STRUCTURED DATA FOR ALL SERVICE PAGES
// Comprehensive schemas for AI and search engines
// ============================================

import { SERVICE_CATEGORIES, PRODUCTS } from '@/config/services.config';

// Base organization reference
const organizationRef = {
  "@type": "Organization",
  "@id": "https://axiomio.com/#organization",
  name: "AXIOMIO",
  url: "https://axiomio.com",
  logo: "https://axiomio.com/logo.png",
};

// Helper to create breadcrumb schema
const createBreadcrumb = (items: { name: string; url: string }[]) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

// ============================================
// STRATEGY, TRANSFORMATION & ADVISORY
// ============================================
export const strategyTransformationAdvisorySchema = {
  "@context": "https://schema.org",
  "@graph": [
    createBreadcrumb([
      { name: "Home", url: "https://axiomio.com/" },
      { name: "Services", url: "https://axiomio.com/services" },
      { name: "Strategy, Transformation & Advisory", url: "https://axiomio.com/services/strategy-transformation-advisory" },
    ]),
    {
      "@type": "Service",
      "@id": "https://axiomio.com/services/strategy-transformation-advisory/#service",
      name: "Strategy, Transformation & Advisory Services",
      description: "Navigate uncertainty with strategic roadmaps, organizational design, and change management that ensures lasting transformation for Fortune 500 enterprises.",
      url: "https://axiomio.com/services/strategy-transformation-advisory",
      serviceType: "Strategy Consulting",
      category: "Enterprise Consulting",
      provider: organizationRef,
      areaServed: "Worldwide",
      audience: {
        "@type": "BusinessAudience",
        audienceType: "Enterprise Organizations",
        numberOfEmployees: { "@type": "QuantitativeValue", minValue: 500 },
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Strategy & Transformation Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Strategy & Advisory",
              description: "Executive-level strategic guidance for complex digital initiatives and enterprise strategy.",
              url: "https://axiomio.com/services/strategy-advisory",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Digital Transformation",
              description: "Complex organizational change management ensuring lasting digital adoption.",
              url: "https://axiomio.com/services/digital-transformation",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Ops Excellence",
              description: "Integrated platform for FinOps, SecOps, CloudOps, and DevOps excellence.",
              url: "https://axiomio.com/services/ops-excellence",
            },
          },
        ],
      },
      termsOfService: "https://axiomio.com/terms",
      availableChannel: {
        "@type": "ServiceChannel",
        serviceType: "Consulting Engagement",
        serviceUrl: "https://axiomio.com/contact",
      },
    },
    organizationRef,
  ],
};

// ============================================
// CLOUD & PLATFORM ENGINEERING
// ============================================
export const cloudPlatformEngineeringSchema = {
  "@context": "https://schema.org",
  "@graph": [
    createBreadcrumb([
      { name: "Home", url: "https://axiomio.com/" },
      { name: "Services", url: "https://axiomio.com/services" },
      { name: "Cloud & Platform Engineering", url: "https://axiomio.com/services/cloud-platform-engineering" },
    ]),
    {
      "@type": "Service",
      "@id": "https://axiomio.com/services/cloud-platform-engineering/#service",
      name: "Cloud & Platform Engineering Services",
      description: "Build and run modern cloud foundations with enterprise-grade architecture, infrastructure, and modernization services for AWS, Azure, and Google Cloud.",
      url: "https://axiomio.com/services/cloud-platform-engineering",
      serviceType: "Cloud Engineering",
      category: "Cloud Services",
      provider: organizationRef,
      areaServed: "Worldwide",
      audience: {
        "@type": "BusinessAudience",
        audienceType: "Enterprise Organizations",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Cloud & Platform Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Technology & Systems",
              description: "Enterprise-grade systems delivering scalability and reliability.",
              url: "https://axiomio.com/services/technology-systems",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Kubernetes",
              description: "Production-grade Kubernetes implementations for cloud-native applications.",
              url: "https://axiomio.com/services/kubernetes",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Infrastructure as Code",
              description: "Terraform, CloudFormation, and Pulumi for automated infrastructure management.",
              url: "https://axiomio.com/services/infrastructure-as-code",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Migration & Modernization",
              description: "Seamless cloud migration and application modernization with zero downtime.",
              url: "https://axiomio.com/services/migration-modernization",
            },
          },
        ],
      },
    },
    organizationRef,
  ],
};

// ============================================
// DEVOPS, PLATFORM OPS & AUTOMATION
// ============================================
export const devopsPlatformOpsAutomationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    createBreadcrumb([
      { name: "Home", url: "https://axiomio.com/" },
      { name: "Services", url: "https://axiomio.com/services" },
      { name: "DevOps, Platform Ops & Automation", url: "https://axiomio.com/services/devops-platformops-automation" },
    ]),
    {
      "@type": "Service",
      "@id": "https://axiomio.com/services/devops-platformops-automation/#service",
      name: "DevOps, Platform Ops & Automation Services",
      description: "Accelerate delivery with DevOps, AI-powered automation, and secure software supply chain practices. Powered by XOPS360 platform.",
      url: "https://axiomio.com/services/devops-platformops-automation",
      serviceType: "DevOps Consulting",
      category: "Technology Services",
      provider: organizationRef,
      areaServed: "Worldwide",
      isRelatedTo: {
        "@type": "SoftwareApplication",
        name: "XOPS360",
        url: "https://axiomio.com/xops360",
        applicationCategory: "BusinessApplication",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "DevOps & Automation Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "DevOps Services",
              description: "Accelerate software delivery with world-class CI/CD and DevOps practices.",
              url: "https://axiomio.com/services/devops-services",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI & Cloud DevOps",
              description: "AI-driven automation for DevOps, SRE, and cloud operations.",
              url: "https://axiomio.com/services/ai-automation",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Software Supply Chain Security",
              description: "Secure your software supply chain with SAST, SCA, and DevSecOps practices.",
              url: "https://axiomio.com/services/software-supply-chain-security",
            },
          },
        ],
      },
    },
    organizationRef,
  ],
};

// ============================================
// CLOUD SECURITY & ZERO TRUST
// ============================================
export const cloudSecurityZeroTrustSchema = {
  "@context": "https://schema.org",
  "@graph": [
    createBreadcrumb([
      { name: "Home", url: "https://axiomio.com/" },
      { name: "Services", url: "https://axiomio.com/services" },
      { name: "Cloud Security & Zero Trust", url: "https://axiomio.com/services/cloud-security-zerotrust" },
    ]),
    {
      "@type": "Service",
      "@id": "https://axiomio.com/services/cloud-security-zerotrust/#service",
      name: "Cloud Security & Zero Trust Services",
      description: "Comprehensive cloud security with zero trust architecture, CSPM, CWPP, and advanced threat protection. Powered by XeroTrust platform.",
      url: "https://axiomio.com/services/cloud-security-zerotrust",
      serviceType: "Cybersecurity Services",
      category: "Security Services",
      provider: organizationRef,
      areaServed: "Worldwide",
      isRelatedTo: {
        "@type": "SoftwareApplication",
        name: "XeroTrust",
        url: "https://axiomio.com/xerotrust",
        applicationCategory: "SecurityApplication",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Security Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Cyber Security",
              description: "Comprehensive enterprise cybersecurity with AI-driven threat detection.",
              url: "https://axiomio.com/services/cybersecurity",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Cloud Security",
              description: "Cloud security posture management (CSPM) and workload protection (CWPP).",
              url: "https://axiomio.com/services/cloud-security",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Zero Trust Security",
              description: "Identity-centric zero trust architecture with continuous verification.",
              url: "https://axiomio.com/services/zero-trust-security",
            },
          },
        ],
      },
    },
    organizationRef,
  ],
};

// ============================================
// THREAT DETECTION, VULNERABILITY & RESPONSE
// ============================================
export const threatDetectionVulnerabilitySchema = {
  "@context": "https://schema.org",
  "@graph": [
    createBreadcrumb([
      { name: "Home", url: "https://axiomio.com/" },
      { name: "Services", url: "https://axiomio.com/services" },
      { name: "Threat Detection & Response", url: "https://axiomio.com/services/threat-detection-vulnerability-response" },
    ]),
    {
      "@type": "Service",
      "@id": "https://axiomio.com/services/threat-detection-vulnerability-response/#service",
      name: "Threat Detection, Vulnerability & Response Services",
      description: "Proactive threat detection, vulnerability management, and rapid incident response to protect against cyberattacks and ransomware.",
      url: "https://axiomio.com/services/threat-detection-vulnerability-response",
      serviceType: "Security Operations",
      category: "Security Services",
      provider: organizationRef,
      areaServed: "Worldwide",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Threat & Vulnerability Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Vulnerability Management",
              description: "Continuous vulnerability assessment and penetration testing (VAPT).",
              url: "https://axiomio.com/services/vulnerability-management",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Threat Detection & Ransomware Protection",
              description: "Real-time AI-powered threat detection and ransomware protection.",
              url: "https://axiomio.com/services/threat-detection-ransomware",
            },
          },
        ],
      },
    },
    organizationRef,
  ],
};

// ============================================
// OBSERVABILITY & RELIABILITY ENGINEERING
// ============================================
export const observabilityReliabilitySchema = {
  "@context": "https://schema.org",
  "@graph": [
    createBreadcrumb([
      { name: "Home", url: "https://axiomio.com/" },
      { name: "Services", url: "https://axiomio.com/services" },
      { name: "Observability & Reliability", url: "https://axiomio.com/services/observability-reliability-engineering" },
    ]),
    {
      "@type": "Service",
      "@id": "https://axiomio.com/services/observability-reliability-engineering/#service",
      name: "Observability & Reliability Engineering Services",
      description: "Comprehensive observability and reliability engineering for full-stack visibility, performance optimization, and 99.99% uptime.",
      url: "https://axiomio.com/services/observability-reliability-engineering",
      serviceType: "Site Reliability Engineering",
      category: "Technology Services",
      provider: organizationRef,
      areaServed: "Worldwide",
      isRelatedTo: {
        "@type": "SoftwareApplication",
        name: "XOPS360",
        url: "https://axiomio.com/xops360",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Observability Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Observability & Monitoring",
              description: "Complete observability with APM, infrastructure monitoring, and log analytics.",
              url: "https://axiomio.com/services/observability-monitoring",
            },
          },
        ],
      },
    },
    organizationRef,
  ],
};

// ============================================
// FINOPS, COST & VALUE OPTIMIZATION
// ============================================
export const finopsCostOptimizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    createBreadcrumb([
      { name: "Home", url: "https://axiomio.com/" },
      { name: "Services", url: "https://axiomio.com/services" },
      { name: "FinOps & Cost Optimization", url: "https://axiomio.com/services/finops-cost-value-optimization" },
    ]),
    {
      "@type": "Service",
      "@id": "https://axiomio.com/services/finops-cost-value-optimization/#service",
      name: "FinOps, Cost & Value Optimization Services",
      description: "Maximize cloud ROI with FinOps practices, cost visibility, governance, and continuous optimization. Achieve 70% average cost reduction.",
      url: "https://axiomio.com/services/finops-cost-value-optimization",
      serviceType: "FinOps Consulting",
      category: "Cloud Financial Management",
      provider: organizationRef,
      areaServed: "Worldwide",
      isRelatedTo: {
        "@type": "SoftwareApplication",
        name: "XOPS360",
        url: "https://axiomio.com/xops360",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "FinOps Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Cloud FinOps",
              description: "Comprehensive cloud cost visibility, optimization, and governance.",
              url: "https://axiomio.com/services/cloud-finops",
            },
          },
        ],
      },
    },
    organizationRef,
  ],
};

// ============================================
// BUSINESS CONTINUITY & DIGITAL WORKPLACE
// ============================================
export const businessContinuityDigitalWorkplaceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    createBreadcrumb([
      { name: "Home", url: "https://axiomio.com/" },
      { name: "Services", url: "https://axiomio.com/services" },
      { name: "Business Continuity & Digital Workplace", url: "https://axiomio.com/services/business-continuity-digital-workplace" },
    ]),
    {
      "@type": "Service",
      "@id": "https://axiomio.com/services/business-continuity-digital-workplace/#service",
      name: "Business Continuity & Digital Workplace Services",
      description: "Ensure business resilience with disaster recovery, business continuity planning, and modern digital workplace solutions.",
      url: "https://axiomio.com/services/business-continuity-digital-workplace",
      serviceType: "Business Continuity",
      category: "Enterprise Services",
      provider: organizationRef,
      areaServed: "Worldwide",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Business Continuity Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Business Continuity",
              description: "Comprehensive disaster recovery and business continuity planning.",
              url: "https://axiomio.com/services/business-continuity",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Digital Workspace",
              description: "Enable secure, productive remote work with modern digital workspace solutions.",
              url: "https://axiomio.com/services/digital-workspace",
            },
          },
        ],
      },
    },
    organizationRef,
  ],
};

// ============================================
// INDIVIDUAL SUB-SERVICE SCHEMAS
// ============================================

// Strategy & Advisory
export const strategyAdvisoryServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://axiomio.com/services/strategy-advisory/#service",
  name: "Strategy & Advisory Services",
  description: "Executive-level strategic guidance for complex digital initiatives. Navigate uncertainty with deep analysis, industry insight, and actionable roadmaps.",
  url: "https://axiomio.com/services/strategy-advisory",
  serviceType: "Strategy Consulting",
  provider: organizationRef,
  areaServed: "Worldwide",
  serviceOutput: [
    "Strategic Roadmaps",
    "Market Analysis Reports",
    "Executive Decision Frameworks",
    "Organizational Design Plans",
    "Change Management Strategies",
  ],
};

// Digital Transformation
export const digitalTransformationServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://axiomio.com/services/digital-transformation/#service",
  name: "Digital Transformation Services",
  description: "End-to-end organizational transformation with change management, process redesign, and capability building for lasting digital adoption.",
  url: "https://axiomio.com/services/digital-transformation",
  serviceType: "Digital Transformation",
  provider: organizationRef,
  areaServed: "Worldwide",
  serviceOutput: [
    "Digital Maturity Assessment",
    "Transformation Roadmap",
    "Process Automation",
    "Change Management",
    "Digital Capability Building",
  ],
};

// Kubernetes
export const kubernetesServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://axiomio.com/services/kubernetes/#service",
  name: "Kubernetes Services",
  description: "Production-grade Kubernetes implementations for cloud-native applications. EKS, AKS, GKE expertise with GitOps and service mesh.",
  url: "https://axiomio.com/services/kubernetes",
  serviceType: "Container Orchestration",
  provider: organizationRef,
  areaServed: "Worldwide",
  serviceOutput: [
    "Kubernetes Cluster Design",
    "EKS/AKS/GKE Implementation",
    "GitOps Workflows",
    "Service Mesh Configuration",
    "Container Security",
  ],
};

// Infrastructure as Code
export const infrastructureAsCodeServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://axiomio.com/services/infrastructure-as-code/#service",
  name: "Infrastructure as Code Services",
  description: "Terraform, CloudFormation, and Pulumi for automated infrastructure management. Achieve reproducible, version-controlled infrastructure.",
  url: "https://axiomio.com/services/infrastructure-as-code",
  serviceType: "Infrastructure Automation",
  provider: organizationRef,
  areaServed: "Worldwide",
  serviceOutput: [
    "Terraform Modules",
    "CloudFormation Templates",
    "Pulumi Programs",
    "Infrastructure Pipelines",
    "Policy as Code",
  ],
};

// DevOps Services
export const devopsServicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://axiomio.com/services/devops-services/#service",
  name: "DevOps Services",
  description: "Accelerate software delivery with world-class CI/CD pipelines, automated testing, and DevOps culture transformation.",
  url: "https://axiomio.com/services/devops-services",
  serviceType: "DevOps Consulting",
  provider: organizationRef,
  areaServed: "Worldwide",
  serviceOutput: [
    "CI/CD Pipelines",
    "Automated Testing",
    "Release Automation",
    "DevOps Culture Training",
    "Toolchain Optimization",
  ],
};

// Cybersecurity
export const cybersecurityServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://axiomio.com/services/cybersecurity/#service",
  name: "Cybersecurity Services",
  description: "Comprehensive enterprise cybersecurity with AI-driven threat detection, incident response, and security operations center (SOC) services.",
  url: "https://axiomio.com/services/cybersecurity",
  serviceType: "Cybersecurity",
  provider: organizationRef,
  areaServed: "Worldwide",
  serviceOutput: [
    "Security Assessment",
    "SOC Implementation",
    "Threat Intelligence",
    "Incident Response",
    "Security Training",
  ],
};

// Cloud FinOps
export const cloudFinopsServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://axiomio.com/services/cloud-finops/#service",
  name: "Cloud FinOps Services",
  description: "Maximize cloud ROI with comprehensive cost visibility, optimization strategies, and financial governance. Achieve 70% average cost reduction.",
  url: "https://axiomio.com/services/cloud-finops",
  serviceType: "FinOps",
  provider: organizationRef,
  areaServed: "Worldwide",
  serviceOutput: [
    "Cost Visibility Dashboards",
    "Optimization Recommendations",
    "Reserved Instance Planning",
    "Showback/Chargeback",
    "FinOps Culture Building",
  ],
};

// Observability & Monitoring
export const observabilityMonitoringServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://axiomio.com/services/observability-monitoring/#service",
  name: "Observability & Monitoring Services",
  description: "Complete observability with APM, infrastructure monitoring, log analytics, and distributed tracing for full-stack visibility.",
  url: "https://axiomio.com/services/observability-monitoring",
  serviceType: "Observability",
  provider: organizationRef,
  areaServed: "Worldwide",
  serviceOutput: [
    "APM Implementation",
    "Log Analytics",
    "Distributed Tracing",
    "Custom Dashboards",
    "Alerting & Escalation",
  ],
};

// ============================================
// PRODUCT SCHEMAS (XOPS360 & XEROTRUST)
// ============================================
export const xops360ProductSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://axiomio.com/xops360/#product",
  name: "XOPS360",
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "CloudOps Automation Platform",
  operatingSystem: "Cloud-based, Web",
  description: "XOPS360 is AXIOMIO's flagship AI-powered platform that unifies FinOps, SecOps, CloudOps, and DevOps in a single pane of glass. Reduce incidents by 60%, cut cloud costs by 70%.",
  url: "https://axiomio.com/xops360",
  softwareVersion: "3.0",
  releaseNotes: "https://axiomio.com/xops360/changelog",
  screenshot: "https://axiomio.com/xops360-dashboard.jpg",
  offers: [
    {
      "@type": "Offer",
      name: "Starter",
      description: "For small teams getting started with cloud operations",
      priceSpecification: {
        "@type": "PriceSpecification",
        price: "Contact for pricing",
        priceCurrency: "USD",
      },
    },
    {
      "@type": "Offer",
      name: "Professional",
      description: "For growing organizations with advanced needs",
      priceSpecification: {
        "@type": "PriceSpecification",
        price: "Contact for pricing",
        priceCurrency: "USD",
      },
    },
    {
      "@type": "Offer",
      name: "Enterprise",
      description: "For large enterprises with complex multi-cloud environments",
      priceSpecification: {
        "@type": "PriceSpecification",
        price: "Custom pricing",
        priceCurrency: "USD",
      },
    },
  ],
  featureList: [
    "Unified FinOps Dashboard",
    "AI-Powered Cost Optimization",
    "Automated Incident Response",
    "Multi-Cloud Visibility",
    "Self-Healing Infrastructure",
    "Compliance Automation",
    "99.9% Uptime SLA",
    "24/7 AI Operations",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    ratingCount: "247",
  },
  provider: organizationRef,
};

export const xeroTrustProductSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://axiomio.com/xerotrust/#product",
  name: "XeroTrust",
  applicationCategory: "SecurityApplication",
  applicationSubCategory: "Zero Trust Security Platform",
  operatingSystem: "Cloud-based, Web",
  description: "XeroTrust is AXIOMIO's identity-centric zero trust security platform with continuous verification and adaptive access control. Never trust, always verify.",
  url: "https://axiomio.com/xerotrust",
  softwareVersion: "2.0",
  featureList: [
    "Identity-First Security",
    "Continuous Verification",
    "Micro-Segmentation",
    "Adaptive Access Control",
    "Real-Time Threat Detection",
    "Policy Decision <10ms",
    "Zero Implicit Trust",
    "AI-Powered Analytics",
  ],
  offers: {
    "@type": "Offer",
    description: "Contact for enterprise pricing",
    seller: organizationRef,
  },
  provider: organizationRef,
};

// ============================================
// HELPER FUNCTION TO GET SCHEMA BY ROUTE
// ============================================
export const getServiceSchemaByRoute = (route: string): object | null => {
  const schemaMap: Record<string, object> = {
    '/services/strategy-transformation-advisory': strategyTransformationAdvisorySchema,
    '/services/cloud-platform-engineering': cloudPlatformEngineeringSchema,
    '/services/devops-platformops-automation': devopsPlatformOpsAutomationSchema,
    '/services/cloud-security-zerotrust': cloudSecurityZeroTrustSchema,
    '/services/threat-detection-vulnerability-response': threatDetectionVulnerabilitySchema,
    '/services/observability-reliability-engineering': observabilityReliabilitySchema,
    '/services/finops-cost-value-optimization': finopsCostOptimizationSchema,
    '/services/business-continuity-digital-workplace': businessContinuityDigitalWorkplaceSchema,
    '/services/strategy-advisory': strategyAdvisoryServiceSchema,
    '/services/digital-transformation': digitalTransformationServiceSchema,
    '/services/kubernetes': kubernetesServiceSchema,
    '/services/infrastructure-as-code': infrastructureAsCodeServiceSchema,
    '/services/devops-services': devopsServicesSchema,
    '/services/cybersecurity': cybersecurityServiceSchema,
    '/services/cloud-finops': cloudFinopsServiceSchema,
    '/services/observability-monitoring': observabilityMonitoringServiceSchema,
    '/xops360': xops360ProductSchema,
    '/xerotrust': xeroTrustProductSchema,
  };

  return schemaMap[route] || null;
};

// Export all schemas for direct use
export const allServiceSchemas = {
  strategyTransformationAdvisorySchema,
  cloudPlatformEngineeringSchema,
  devopsPlatformOpsAutomationSchema,
  cloudSecurityZeroTrustSchema,
  threatDetectionVulnerabilitySchema,
  observabilityReliabilitySchema,
  finopsCostOptimizationSchema,
  businessContinuityDigitalWorkplaceSchema,
  strategyAdvisoryServiceSchema,
  digitalTransformationServiceSchema,
  kubernetesServiceSchema,
  infrastructureAsCodeServiceSchema,
  devopsServicesSchema,
  cybersecurityServiceSchema,
  cloudFinopsServiceSchema,
  observabilityMonitoringServiceSchema,
  xops360ProductSchema,
  xeroTrustProductSchema,
};
