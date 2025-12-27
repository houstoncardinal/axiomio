import { motion } from "framer-motion";
import { ArrowRight, Shield, Cloud, Lock, CheckCircle2, ShieldCheck, Eye, AlertTriangle, Server, Key } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GridBackground } from "@/components/GridBackground";
import { SectionHeader } from "@/components/SectionHeader";
import { SEOHead } from "@/components/SEOHead";
import { MagneticButton } from "@/components/MagneticButton";
import { createBreadcrumbSchema, organizationSchema } from "@/lib/seo-schemas";

const breadcrumbSchema = createBreadcrumbSchema([
  { name: "Home", url: "https://axiomio.com/" },
  { name: "Services", url: "https://axiomio.com/services" },
  { name: "Cloud Security & Zero Trust", url: "https://axiomio.com/services/cloud-security-zerotrust" },
]);

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://axiomio.com/services/cloud-security-zerotrust/#service",
  "name": "Cloud Security & Zero Trust",
  "serviceType": "Cloud Security and Zero Trust Architecture",
  "description": "Comprehensive cloud security with zero trust architecture, CSPM, CWPP, and advanced threat protection. Preventive security architecture for enterprise cloud environments.",
  "url": "https://axiomio.com/services/cloud-security-zerotrust",
  "provider": { "@id": "https://axiomio.com/#organization" },
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Cloud Security Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cyber Security" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cloud Security" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Zero Trust Security" } }
    ]
  }
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [breadcrumbSchema, serviceSchema, organizationSchema]
};

const subServices = [
  {
    id: "cybersecurity",
    title: "Cyber Security",
    subtitle: "Enterprise Protection",
    icon: Shield,
    color: "from-red-500 to-orange-400",
    description: "Comprehensive cybersecurity with AI-driven threat detection, SIEM integration, and 24/7 security operations.",
    capabilities: [
      "Security Information & Event Management (SIEM)",
      "Threat intelligence integration",
      "Security Operations Center (SOC)",
      "Incident response & forensics",
      "Security awareness training",
      "Compliance management (SOC2, ISO, HIPAA)",
    ],
    metrics: [
      { value: "99.9%", label: "Threat Detection" },
      { value: "<5min", label: "MTTD" },
      { value: "24/7", label: "SOC Monitoring" },
    ],
    useCases: [
      "Enterprise security monitoring",
      "Threat hunting & detection",
      "Compliance automation",
      "Incident response",
    ],
    route: "/services/cybersecurity",
  },
  {
    id: "cloud-security",
    title: "Cloud Security",
    subtitle: "CSPM/CWPP",
    icon: Cloud,
    color: "from-sky-500 to-blue-400",
    description: "Secure cloud environments with Cloud Security Posture Management (CSPM) and Cloud Workload Protection Platform (CWPP).",
    capabilities: [
      "Cloud Security Posture Management",
      "Cloud Workload Protection Platform",
      "Multi-cloud security visibility",
      "Misconfiguration detection & remediation",
      "Container & serverless security",
      "Compliance monitoring & reporting",
    ],
    metrics: [
      { value: "100%", label: "Cloud Visibility" },
      { value: "Auto", label: "Remediation" },
      { value: "Zero", label: "Misconfigs" },
    ],
    useCases: [
      "Multi-cloud security",
      "Container security",
      "Serverless protection",
      "Compliance automation",
    ],
    route: "/services/cloud-security",
  },
  {
    id: "zero-trust-security",
    title: "Zero Trust Security",
    subtitle: "Never Trust, Always Verify",
    icon: Lock,
    color: "from-slate-500 to-gray-400",
    description: "Implement zero trust architecture with identity-centric security, continuous verification, and adaptive access control.",
    capabilities: [
      "Identity & Access Management (IAM)",
      "Multi-Factor Authentication (MFA)",
      "Continuous verification & validation",
      "Micro-segmentation",
      "Least privilege access",
      "Adaptive policy enforcement",
    ],
    metrics: [
      { value: "100%", label: "Identity Verified" },
      { value: "<10ms", label: "Policy Decision" },
      { value: "Zero", label: "Implicit Trust" },
    ],
    useCases: [
      "Zero trust network access",
      "Remote workforce security",
      "Cloud application access",
      "Third-party access control",
    ],
    route: "/services/zero-trust-security",
  },
];

const platformFeatures = [
  {
    icon: ShieldCheck,
    title: "Identity-Centric Security",
    description: "Verify every user, device, and workload continuously with identity-based access controls.",
  },
  {
    icon: Eye,
    title: "Continuous Monitoring",
    description: "Real-time visibility across all cloud environments with intelligent threat detection.",
  },
  {
    icon: Server,
    title: "Workload Protection",
    description: "Protect VMs, containers, and serverless functions with runtime security.",
  },
  {
    icon: Key,
    title: "Adaptive Access Control",
    description: "Context-aware policies that adapt to risk levels and user behavior.",
  },
];

function SubServiceCard({ service, index }: { service: typeof subServices[0]; index: number }) {
  const Icon = service.icon;

  return (
    <motion.div
      id={service.id}
      className="scroll-mt-32"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="glass-card rounded-2xl p-8 lg:p-12 relative overflow-hidden group hover:border-primary/30 transition-all duration-500">
        {/* Background glow */}
        <div
          className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${service.color} opacity-5 blur-3xl group-hover:opacity-10 transition-opacity duration-500`}
        />

        <div className="relative z-10">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-start gap-6 mb-8">
            <motion.div
              className={`p-4 rounded-xl bg-gradient-to-br ${service.color} text-white shadow-lg`}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Icon className="h-8 w-8" />
            </motion.div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                  {service.title}
                </h2>
                <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
                  {service.subtitle}
                </span>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-4">
                {service.description}
              </p>
              <Link
                to={service.route}
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                View Full {service.title} Details
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-4 mb-8 p-6 bg-muted/30 rounded-xl border border-border/50">
            {service.metrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                  {metric.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* Two columns: Capabilities + Use Cases */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Capabilities */}
            <div>
              <h4 className="font-heading font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-4">
                Core Capabilities
              </h4>
              <ul className="space-y-3">
                {service.capabilities.map((capability) => (
                  <li key={capability} className="flex items-center gap-3 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    {capability}
                  </li>
                ))}
              </ul>
            </div>

            {/* Use Cases */}
            <div>
              <h4 className="font-heading font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-4">
                Use Cases
              </h4>
              <ul className="space-y-3">
                {service.useCases.map((useCase) => (
                  <li key={useCase} className="flex items-center gap-3 text-muted-foreground">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`} />
                    {useCase}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function CloudSecurityZeroTrust() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <SEOHead
        title="Cloud Security & Zero Trust | CSPM, CWPP, Zero Trust Architecture | AXIOMIO"
        description="Comprehensive cloud security with zero trust architecture, CSPM, CWPP, and advanced threat protection. Enterprise security powered by XeroTrust platform."
        keywords="cloud security, zero trust, CSPM, CWPP, cybersecurity, XeroTrust, identity security, cloud workload protection, threat detection, compliance, SOC2, ISO 27001"
        canonicalUrl="https://axiomio.com/services/cloud-security-zerotrust"
        pageType="services"
        structuredData={pageSchema}
      />
      <Navbar />

      {/* Hero Section */}
      <header className="relative pt-32 pb-24 lg:pt-40 lg:pb-32" role="banner">
        <GridBackground />
        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <motion.div
            className="max-w-5xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="inline-flex items-center gap-2 text-sm font-medium text-red-400 uppercase tracking-wider mb-6 px-4 py-2 rounded-xl border border-red-400/20 bg-red-500/5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse" aria-hidden="true" />
              Cloud Security · Zero Trust · Enterprise Protection
            </motion.span>

            <motion.h1
              className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Secure your cloud with{" "}
              <span className="text-gradient">zero trust architecture</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Preventive security architecture with comprehensive cloud protection, continuous verification,
              and adaptive access control. Powered by XeroTrust platform.
            </motion.p>

            {/* Quick navigation */}
            <motion.div
              className="flex flex-wrap justify-center gap-3 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {subServices.map((service) => {
                const Icon = service.icon;
                return (
                  <a
                    key={service.id}
                    href={`#${service.id}`}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${service.color} text-white font-medium text-sm hover:opacity-90 transition-opacity shadow-md`}
                  >
                    <Icon className="w-4 h-4" />
                    {service.title}
                  </a>
                );
              })}
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <MagneticButton>
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contact">
                    Request Security Assessment
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button variant="hero-outline" size="xl" asChild>
                  <Link to="/xerotrust">
                    Explore XeroTrust Platform
                  </Link>
                </Button>
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* Platform Features */}
      <section className="py-16 lg:py-20 bg-muted/20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platformFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="p-6 bg-background rounded-xl border border-border/50 hover:border-primary/30 transition-colors group"
              >
                <feature.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-Services */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionHeader
            label="Comprehensive Security Services"
            title="Protect every layer of your cloud infrastructure"
            description="Integrated security services that work together as a unified defense system powered by zero trust principles."
          />

          <div className="mt-16 space-y-12">
            {subServices.map((service, index) => (
              <SubServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* XeroTrust Integration CTA */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 text-sm font-medium text-secondary uppercase tracking-wider mb-6">
              <ShieldCheck className="w-4 h-4" />
              Powered by XeroTrust
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Zero trust security.{" "}
              <span className="text-gradient">One intelligent platform.</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              XeroTrust brings together identity verification, access control, and continuous monitoring
              into a unified zero trust security platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton>
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contact">
                    Schedule a Security Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button variant="outline" size="xl" asChild>
                  <Link to="/xerotrust">
                    Learn About XeroTrust
                  </Link>
                </Button>
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
