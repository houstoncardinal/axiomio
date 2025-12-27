import { motion } from "framer-motion";
import { ArrowRight, Cloud, Cpu, Network, FileCode, Rocket, CheckCircle2, Server, Database, Container, Settings } from "lucide-react";
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
  { name: "Cloud & Platform Engineering", url: "https://axiomio.com/services/cloud-platform-engineering" },
]);

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://axiomio.com/services/cloud-platform-engineering/#service",
  "name": "Cloud & Platform Engineering",
  "serviceType": "Cloud Infrastructure and Platform Engineering",
  "description": "Build and run modern cloud foundations with enterprise-grade architecture, infrastructure, and modernization services. Scalable, reliable cloud platforms for business growth.",
  "url": "https://axiomio.com/services/cloud-platform-engineering",
  "provider": { "@id": "https://axiomio.com/#organization" },
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Cloud Platform Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Technology & Systems" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Kubernetes" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Infrastructure as Code" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Migration & Modernization" } }
    ]
  }
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [breadcrumbSchema, serviceSchema, organizationSchema]
};

const subServices = [
  {
    id: "technology-systems",
    title: "Technology & Systems",
    subtitle: "Scalable Architecture",
    icon: Cpu,
    color: "from-emerald-500 to-teal-400",
    description: "Enterprise-grade systems delivering reliability today. Scalable architecture, high-availability infrastructure, and fault-tolerant designs.",
    capabilities: [
      "Enterprise architecture design",
      "High-availability infrastructure",
      "Multi-cloud & hybrid cloud solutions",
      "Performance optimization",
      "Disaster recovery planning",
      "Capacity planning & scaling",
    ],
    metrics: [
      { value: "99.99%", label: "Uptime SLA" },
      { value: "10x", label: "Scalability" },
      { value: "50%", label: "Cost Savings" },
    ],
    useCases: [
      "Enterprise cloud platforms",
      "High-traffic applications",
      "Mission-critical systems",
      "Global infrastructure",
    ],
    route: "/services/technology-systems",
  },
  {
    id: "kubernetes",
    title: "Kubernetes",
    subtitle: "Container Orchestration",
    icon: Network,
    color: "from-indigo-500 to-blue-400",
    description: "Production-grade Kubernetes implementations for cloud-native applications. Container orchestration, microservices, and platform engineering.",
    capabilities: [
      "Kubernetes cluster design & setup",
      "Helm chart development",
      "Service mesh (Istio, Linkerd)",
      "Ingress & load balancing",
      "StatefulSets & persistent storage",
      "Multi-cluster management",
    ],
    metrics: [
      { value: "1000+", label: "Pods Managed" },
      { value: "99.9%", label: "Cluster Uptime" },
      { value: "5x", label: "Deploy Speed" },
    ],
    useCases: [
      "Microservices platforms",
      "Cloud-native applications",
      "Multi-tenant systems",
      "Edge computing",
    ],
    route: "/services/kubernetes",
  },
  {
    id: "infrastructure-as-code",
    title: "Infrastructure as Code",
    subtitle: "Automated Provisioning",
    icon: FileCode,
    color: "from-purple-500 to-pink-400",
    description: "Terraform, CloudFormation, and Pulumi for automated infrastructure management. Declarative infrastructure, version control, and GitOps workflows.",
    capabilities: [
      "Terraform module development",
      "AWS CloudFormation templates",
      "Pulumi infrastructure code",
      "GitOps workflows",
      "State management",
      "Policy as Code (OPA, Sentinel)",
    ],
    metrics: [
      { value: "90%", label: "Automation" },
      { value: "80%", label: "Faster Provisioning" },
      { value: "Zero", label: "Drift" },
    ],
    useCases: [
      "Infrastructure automation",
      "Multi-environment management",
      "Compliance as Code",
      "Self-service platforms",
    ],
    route: "/services/infrastructure-as-code",
  },
  {
    id: "migration-modernization",
    title: "Migration & Modernization",
    subtitle: "Cloud Migration",
    icon: Rocket,
    color: "from-violet-500 to-purple-400",
    description: "Seamless cloud migration and application modernization with zero downtime. Lift-and-shift, re-platforming, and cloud-native refactoring.",
    capabilities: [
      "Cloud migration strategy & planning",
      "Application assessment & discovery",
      "Lift-and-shift migrations",
      "Re-platforming & refactoring",
      "Data migration & synchronization",
      "Legacy modernization",
    ],
    metrics: [
      { value: "Zero", label: "Downtime" },
      { value: "100%", label: "Data Integrity" },
      { value: "60%", label: "Cost Reduction" },
    ],
    useCases: [
      "Datacenter exits",
      "Cloud consolidation",
      "Legacy app modernization",
      "Hybrid cloud setup",
    ],
    route: "/services/migration-modernization",
  },
];

const platformFeatures = [
  {
    icon: Server,
    title: "Enterprise-Grade Reliability",
    description: "Fault-tolerant architectures with 99.99% uptime SLA and automated failover capabilities.",
  },
  {
    icon: Database,
    title: "Multi-Cloud Expertise",
    description: "AWS, Azure, and GCP certified engineers delivering optimal cloud solutions.",
  },
  {
    icon: Container,
    title: "Cloud-Native Platforms",
    description: "Kubernetes, containers, and serverless for modern application deployment.",
  },
  {
    icon: Settings,
    title: "Automation First",
    description: "Infrastructure as Code and GitOps workflows for consistent, repeatable deployments.",
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
        <div
          className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${service.color} opacity-5 blur-3xl group-hover:opacity-10 transition-opacity duration-500`}
        />

        <div className="relative z-10">
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

          <div className="grid md:grid-cols-2 gap-8">
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

export default function CloudPlatformEngineering() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <SEOHead
        title="Cloud & Platform Engineering | AWS, Azure, Kubernetes, IaC | AXIOMIO"
        description="Build and run modern cloud foundations with enterprise architecture, Kubernetes, Infrastructure as Code, and cloud migration services. Multi-cloud expertise for scalable platforms."
        keywords="cloud platform engineering, AWS, Azure, GCP, Kubernetes, infrastructure as code, Terraform, cloud migration, microservices, container orchestration, cloud architecture"
        canonicalUrl="https://axiomio.com/services/cloud-platform-engineering"
        pageType="services"
        structuredData={pageSchema}
      />
      <Navbar />

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
              className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 uppercase tracking-wider mb-6 px-4 py-2 rounded-xl border border-emerald-400/20 bg-emerald-500/5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" aria-hidden="true" />
              Cloud · Platform · Infrastructure
            </motion.span>

            <motion.h1
              className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Build cloud platforms with{" "}
              <span className="text-gradient">enterprise reliability</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Modern cloud foundations with scalable architecture, Kubernetes orchestration,
              Infrastructure as Code, and seamless cloud migration.
            </motion.p>

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
                    Request Architecture Review
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button variant="hero-outline" size="xl" asChild>
                  <Link to="/case-studies">
                    View Case Studies
                  </Link>
                </Button>
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>
      </header>

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

      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionHeader
            label="Cloud Platform Services"
            title="Foundation for scalable, reliable cloud operations"
            description="Integrated infrastructure, platform, and migration services that work together as a unified cloud foundation."
          />

          <div className="mt-16 space-y-12">
            {subServices.map((service, index) => (
              <SubServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

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
              <Cloud className="w-4 h-4" />
              Multi-Cloud Expertise
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Enterprise cloud platforms built for{" "}
              <span className="text-gradient">scale and resilience</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              From architecture design to migration and modernization, we build cloud platforms
              that deliver 99.99% uptime and seamless scalability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton>
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contact">
                    Schedule Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button variant="outline" size="xl" asChild>
                  <Link to="/approach">
                    See Our Methodology
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
