import { motion } from "framer-motion";
import { ArrowRight, HardDrive, Wifi, RefreshCw, CheckCircle2, Shield, Cloud, Users, Monitor } from "lucide-react";
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
  { name: "Business Continuity & Digital Workplace", url: "https://axiomio.com/services/business-continuity-digital-workplace" },
]);

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://axiomio.com/services/business-continuity-digital-workplace/#service",
  "name": "Business Continuity & Digital Workplace",
  "serviceType": "Business Continuity and Digital Workspace Solutions",
  "description": "Ensure business resilience with disaster recovery, business continuity planning, and modern digital workplace solutions. Workforce enablement and operational resilience.",
  "url": "https://axiomio.com/services/business-continuity-digital-workplace",
  "provider": { "@id": "https://axiomio.com/#organization" },
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Business Continuity Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Business Continuity" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Digital Workspace" } }
    ]
  }
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [breadcrumbSchema, serviceSchema, organizationSchema]
};

const subServices = [
  {
    id: "business-continuity",
    title: "Business Continuity",
    subtitle: "DR & Resilience",
    icon: RefreshCw,
    color: "from-emerald-500 to-green-400",
    description: "Comprehensive disaster recovery and business continuity planning. Ensure operational resilience with backup, DR, and high availability solutions.",
    capabilities: [
      "Disaster recovery planning & implementation",
      "Business impact analysis (BIA)",
      "Backup & restore automation",
      "High availability architecture",
      "Failover & failback procedures",
      "BC/DR testing & validation",
    ],
    metrics: [
      { value: "<15min", label: "Recovery Time" },
      { value: "99.99%", label: "Data Protection" },
      { value: "Zero", label: "Data Loss" },
    ],
    useCases: [
      "Disaster recovery planning",
      "Data backup & protection",
      "Multi-region failover",
      "Business continuity validation",
    ],
    route: "/services/business-continuity",
  },
  {
    id: "digital-workspace",
    title: "Digital Workspace",
    subtitle: "Modern Workplace",
    icon: Wifi,
    color: "from-sky-500 to-cyan-400",
    description: "Enable secure, productive remote work with modern digital workspace solutions. Cloud desktops, collaboration platforms, and endpoint management.",
    capabilities: [
      "Virtual desktop infrastructure (VDI)",
      "Desktop as a Service (DaaS)",
      "Collaboration platform deployment",
      "Endpoint device management",
      "Secure remote access",
      "User experience optimization",
    ],
    metrics: [
      { value: "100%", label: "Remote Enabled" },
      { value: "50%", label: "Productivity Gain" },
      { value: "Secure", label: "Access" },
    ],
    useCases: [
      "Remote workforce enablement",
      "Hybrid work environments",
      "BYOD policies",
      "Global collaboration",
    ],
    route: "/services/digital-workspace",
  },
];

const platformFeatures = [
  {
    icon: Shield,
    title: "Operational Resilience",
    description: "Ensure business continuity with automated disaster recovery and failover systems.",
  },
  {
    icon: Cloud,
    title: "Cloud-First Workplace",
    description: "Modern digital workspace solutions that enable productivity from anywhere.",
  },
  {
    icon: Users,
    title: "Workforce Enablement",
    description: "Empower employees with secure, seamless access to tools and data.",
  },
  {
    icon: Monitor,
    title: "Unified Experience",
    description: "Consistent user experience across devices, locations, and work environments.",
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

export default function BusinessContinuityDigitalWorkplace() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <SEOHead
        title="Business Continuity & Digital Workplace | DR, VDI, Remote Work | AXIOMIO"
        description="Ensure business resilience with disaster recovery and modern digital workplace solutions. Remote work enablement, VDI, and business continuity planning."
        keywords="business continuity, disaster recovery, DR, digital workplace, VDI, DaaS, remote work, virtual desktop, backup, resilience, collaboration platform"
        canonicalUrl="https://axiomio.com/services/business-continuity-digital-workplace"
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
              className="inline-flex items-center gap-2 text-sm font-medium text-indigo-400 uppercase tracking-wider mb-6 px-4 py-2 rounded-xl border border-indigo-400/20 bg-indigo-500/5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" aria-hidden="true" />
              Business Continuity · Digital Workplace
            </motion.span>

            <motion.h1
              className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Keep business running with{" "}
              <span className="text-gradient">resilience & productivity</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Business resilience with disaster recovery planning and workforce enablement
              through modern digital workplace solutions.
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
                    Request DR Assessment
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
            label="Resilience Services"
            title="Business continuity meets modern workplace"
            description="Integrated services that ensure operational resilience while enabling workforce productivity from anywhere."
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
              <HardDrive className="w-4 h-4" />
              Enterprise Resilience
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Protect your business with{" "}
              <span className="text-gradient">continuous availability</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              From disaster recovery to digital workplace solutions, ensure your business
              stays operational and your workforce stays productive.
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
