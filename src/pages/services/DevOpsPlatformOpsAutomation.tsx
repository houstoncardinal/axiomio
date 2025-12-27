import { motion } from "framer-motion";
import { ArrowRight, Workflow, Brain, PackageCheck, GitBranch, CheckCircle2, Bot, Activity, Zap, BarChart3, Container, Settings } from "lucide-react";
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
  { name: "DevOps, Platform Ops & Automation", url: "https://axiomio.com/services/devops-platformops-automation" },
]);

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://axiomio.com/services/devops-platformops-automation/#service",
  "name": "DevOps, Platform Ops & Automation",
  "serviceType": "DevOps and Platform Engineering",
  "description": "Accelerate delivery with DevOps, AI-powered automation, and secure software supply chain practices. Speed, reliability, and automation for modern software delivery.",
  "url": "https://axiomio.com/services/devops-platformops-automation",
  "provider": { "@id": "https://axiomio.com/#organization" },
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "DevOps and Automation Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "DevOps Services" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI & Cloud DevOps" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Software Supply Chain Security" } }
    ]
  }
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [breadcrumbSchema, serviceSchema, organizationSchema]
};

const subServices = [
  {
    id: "devops-services",
    title: "DevOps Services",
    subtitle: "CI/CD & Automation",
    icon: Workflow,
    color: "from-blue-500 to-cyan-400",
    description: "Accelerate software delivery with world-class DevOps practices, automated CI/CD pipelines, and streamlined deployment processes.",
    capabilities: [
      "CI/CD pipeline design & automation",
      "Jenkins, GitLab CI, GitHub Actions",
      "Automated testing integration",
      "Release management & deployment",
      "Infrastructure as Code (Terraform)",
      "GitOps workflows",
    ],
    metrics: [
      { value: "50x", label: "Faster Deployments" },
      { value: "95%", label: "Success Rate" },
      { value: "80%", label: "Less Manual Work" },
    ],
    useCases: [
      "Continuous deployment pipelines",
      "Microservices deployment",
      "Platform engineering",
      "Developer productivity",
    ],
    route: "/services/devops-services",
  },
  {
    id: "ai-automation",
    title: "AI & Cloud DevOps",
    subtitle: "Intelligent Operations",
    icon: Brain,
    color: "from-violet-500 to-purple-400",
    description: "AI-driven automation for DevOps, SRE, and cloud operations. Predictive insights, automated remediation, and intelligent runbooks.",
    capabilities: [
      "AI-powered predictive alerting",
      "Automated incident response",
      "Intelligent runbook automation",
      "Anomaly detection & root cause analysis",
      "ML-driven capacity planning",
      "AIOps platform integration",
    ],
    metrics: [
      { value: "70%", label: "Incident Reduction" },
      { value: "10x", label: "Faster MTTR" },
      { value: "90%", label: "Auto-remediation" },
    ],
    useCases: [
      "Self-healing systems",
      "Predictive monitoring",
      "Automated SRE",
      "Intelligent alerting",
    ],
    route: "/services/ai-automation",
  },
  {
    id: "software-supply-chain-security",
    title: "Software Supply Chain Security",
    subtitle: "DevSecOps",
    icon: PackageCheck,
    color: "from-purple-500 to-violet-400",
    description: "Secure your software supply chain with SAST, SCA, container security, and IaC scanning. Build security into every stage of development.",
    capabilities: [
      "Static Application Security Testing (SAST)",
      "Software Composition Analysis (SCA)",
      "Container & image scanning",
      "IaC security scanning",
      "Dependency vulnerability management",
      "SBOM (Software Bill of Materials)",
    ],
    metrics: [
      { value: "100%", label: "Code Coverage" },
      { value: "<5min", label: "Scan Time" },
      { value: "Zero", label: "Critical Vulns" },
    ],
    useCases: [
      "Shift-left security",
      "Compliance automation",
      "Open source risk management",
      "Secure CI/CD pipelines",
    ],
    route: "/services/software-supply-chain-security",
  },
];

const platformFeatures = [
  {
    icon: Bot,
    title: "AI-Powered Automation",
    description: "Machine learning algorithms that learn from your operations and automate routine tasks.",
  },
  {
    icon: Activity,
    title: "Real-Time Observability",
    description: "Unified monitoring across all pipelines with intelligent alerting and root cause analysis.",
  },
  {
    icon: Zap,
    title: "Self-Healing Pipelines",
    description: "Automated remediation that detects and resolves issues before they impact deployments.",
  },
  {
    icon: BarChart3,
    title: "Unified Analytics",
    description: "Cross-pipeline insights that connect code quality, security, performance, and delivery metrics.",
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

export default function DevOpsPlatformOpsAutomation() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <SEOHead
        title="DevOps, Platform Ops & Automation | CI/CD, AI Automation, DevSecOps | AXIOMIO"
        description="Accelerate delivery with DevOps, AI-powered automation, and secure software supply chain practices. CI/CD pipelines, intelligent operations, and Xops360 integration for speed and reliability."
        keywords="DevOps, Platform Ops, CI/CD, AI automation, DevSecOps, software supply chain security, Xops360, AIOps, GitOps, container security, SAST, SCA, automated deployment"
        canonicalUrl="https://axiomio.com/services/devops-platformops-automation"
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
              className="inline-flex items-center gap-2 text-sm font-medium text-violet-400 uppercase tracking-wider mb-6 px-4 py-2 rounded-xl border border-violet-400/20 bg-violet-500/5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <span className="w-2 h-2 bg-violet-400 rounded-full animate-pulse" aria-hidden="true" />
              DevOps · Platform Ops · Automation
            </motion.span>

            <motion.h1
              className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Accelerate delivery with{" "}
              <span className="text-gradient">intelligent automation</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Speed, reliability, and automation for modern software delivery. CI/CD pipelines,
              AI-powered operations, and secure supply chain practices powered by Xops360.
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
                    Request a Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button variant="hero-outline" size="xl" asChild>
                  <Link to="/xops360">
                    Explore Xops360 Platform
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
            label="Comprehensive DevOps Services"
            title="From code to production, securely and efficiently"
            description="Integrated DevOps, AI automation, and security practices that work together as a unified delivery system."
          />

          <div className="mt-16 space-y-12">
            {subServices.map((service, index) => (
              <SubServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Xops360 Integration CTA */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 text-sm font-medium text-primary uppercase tracking-wider mb-6">
              <Activity className="w-4 h-4" />
              Powered by Xops360
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Unified platform for{" "}
              <span className="text-gradient">DevOps excellence</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Xops360 brings together CI/CD, monitoring, security, and cost optimization
              into a single intelligent platform that accelerates your delivery pipeline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton>
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contact">
                    Schedule a Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button variant="outline" size="xl" asChild>
                  <Link to="/xops360">
                    Learn About Xops360
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
