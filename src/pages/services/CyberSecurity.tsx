import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  CheckCircle2, 
  Cloud, 
  Network, 
  Server,
  Fingerprint,
  FileCheck,
  ShieldCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PremiumCard } from "@/components/PremiumCard";
import { SectionHeader } from "@/components/SectionHeader";
import { SEOHead } from "@/components/SEOHead";
import { MagneticButton } from "@/components/MagneticButton";
import { createBreadcrumbSchema, organizationSchema } from "@/lib/seo-schemas";

const breadcrumbSchema = createBreadcrumbSchema([
  { name: "Home", url: "https://axiomio.com/" },
  { name: "Services", url: "https://axiomio.com/services" },
  { name: "Cyber Security", url: "https://axiomio.com/services/cybersecurity" },
]);

const cyberSecuritySchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://axiomio.com/services/cybersecurity/#service",
  "name": "Cyber Security Services",
  "serviceType": "Cybersecurity Consulting",
  "description": "Enterprise cybersecurity services including Cloud Security (CSPM/CWPP), Network Security, Threat Detection & Response, Compliance, and AI-driven protection with 24/7 SOC.",
  "url": "https://axiomio.com/services/cybersecurity",
  "provider": { "@id": "https://axiomio.com/#organization" },
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Cybersecurity Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cloud Security (CSPM & CWPP)" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Network Security & Zero Trust" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Threat Detection & Response (MDR)" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Compliance & Governance" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Endpoint Security (EDR/XDR)" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Identity Security (IAM/PAM)" } }
    ]
  }
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [breadcrumbSchema, cyberSecuritySchema, organizationSchema]
};

const services = [
  {
    icon: Cloud,
    title: "Cloud Security",
    subtitle: "CSPM & CWPP",
    description: "Comprehensive cloud security posture management and workload protection across AWS, Azure, and GCP.",
    capabilities: [
      "Cloud Security Posture Management (CSPM)",
      "Cloud Workload Protection (CWPP)",
      "Container & Kubernetes Security",
      "Serverless Security",
      "Cloud Identity & Access Management",
    ],
  },
  {
    icon: Network,
    title: "Network Security",
    subtitle: "Zero Trust Architecture",
    description: "Modern network security with zero-trust principles, micro-segmentation, and AI-driven threat detection.",
    capabilities: [
      "Zero Trust Network Access",
      "Micro-segmentation",
      "Next-Gen Firewall Management",
      "SD-WAN Security",
      "Network Detection & Response (NDR)",
    ],
  },
  {
    icon: Shield,
    title: "Threat Detection & Response",
    subtitle: "24/7 SOC",
    description: "AI-powered security operations center with real-time threat detection, investigation, and automated response.",
    capabilities: [
      "Managed Detection & Response (MDR)",
      "Security Information & Event Management (SIEM)",
      "Threat Intelligence Integration",
      "Incident Response & Forensics",
      "Threat Hunting",
    ],
  },
  {
    icon: FileCheck,
    title: "Compliance & Governance",
    subtitle: "Regulatory Excellence",
    description: "Achieve and maintain compliance with industry standards and regulations through automated controls.",
    capabilities: [
      "SOC 2 Type II Compliance",
      "HIPAA & Healthcare Security",
      "PCI-DSS Compliance",
      "GDPR & Data Privacy",
      "ISO 27001 Certification Support",
    ],
  },
  {
    icon: AlertTriangle,
    title: "VAPT",
    subtitle: "Penetration Testing",
    description: "Comprehensive vulnerability assessment and penetration testing to identify, validate, and mitigate security risks across applications and infrastructure.",
    capabilities: [
      "Web Application & API VAPT",
      "Network Vulnerability Assessments",
      "Mobile Applications (Android & iOS) VAPT",
      "Desktop (thick client) Application VAPT",
      "Security Code Review",
    ],
  },
  {
    icon: Server,
    title: "Endpoint Security",
    subtitle: "EDR & XDR",
    description: "Next-generation endpoint protection with AI-driven detection and automated response capabilities.",
    capabilities: [
      "Endpoint Detection & Response (EDR)",
      "Extended Detection & Response (XDR)",
      "Device Posture Management",
      "Mobile Device Security",
      "Vulnerability Management",
    ],
  },
  {
    icon: Fingerprint,
    title: "Identity Security",
    subtitle: "IAM & PAM",
    description: "Comprehensive identity and access management with privileged access controls and authentication services.",
    capabilities: [
      "Identity & Access Management (IAM)",
      "Privileged Access Management (PAM)",
      "Multi-Factor Authentication (MFA)",
      "Single Sign-On (SSO)",
      "Identity Governance",
    ],
  },
];

const stats = [
  { value: "99.9%", label: "Threat Detection Rate" },
  { value: "<4min", label: "Average Response Time" },
  { value: "24/7", label: "Security Monitoring" },
  { value: "Zero", label: "Breaches" },
];

export default function CyberSecurity() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <SEOHead
        title="Cyber Security Services | Cloud, Network & Threat Protection | AXIOMIO"
        description="Enterprise cybersecurity services: Cloud Security (CSPM/CWPP), Network Security, Zero Trust, Threat Detection & Response (MDR), Compliance. AI-driven protection with 24/7 SOC. Trusted by Fortune 500."
        keywords="cybersecurity services, cloud security, network security, threat detection, CSPM, CWPP, SOC, MDR, zero trust, compliance, HIPAA, SOC2, PCI-DSS, endpoint security, identity security"
        canonicalUrl="https://axiomio.com/services/cybersecurity"
        pageType="services"
        structuredData={pageSchema}
      />
      <Navbar />
      
      {/* Hero Section */}
      <header className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 via-background to-background" />
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-3 mb-8"
            >
              <div className="p-3 rounded-xl bg-red-500/10 text-red-500 border border-red-500/20">
                <Shield className="h-8 w-8" />
              </div>
              <span className="text-sm font-semibold text-red-500 uppercase tracking-wider">
                Cyber Security Services
              </span>
            </motion.div>
            
            <motion.h1 
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              End-to-end enterprise{" "}
              <span className="text-red-500">security protection</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Comprehensive cybersecurity across cloud, network, and endpoints. 
              AI-driven threat detection with 24/7 security operations.
            </motion.p>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center p-4 rounded-xl bg-card/50 border border-border/50">
                  <div className="text-2xl md:text-3xl font-bold text-red-500 mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* Services Grid */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionHeader
            label="Security Services"
            title="Complete security coverage"
            description="From cloud to endpoint, we protect every layer of your enterprise infrastructure."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <PremiumCard className="h-full group hover:border-red-500/30 transition-all duration-300">
                  <div className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 rounded-xl bg-red-500/10 text-red-500 border border-red-500/20 group-hover:bg-red-500/20 transition-colors">
                        <service.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-semibold text-foreground group-hover:text-red-500 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-sm text-red-500/70">{service.subtitle}</p>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {service.capabilities.map((cap) => (
                        <li key={cap} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-red-500/60 flex-shrink-0" />
                          {cap}
                        </li>
                      ))}
                    </ul>
                  </div>
                </PremiumCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* XeroTrust CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-card/50 to-background">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            className="relative rounded-3xl overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-background to-emerald-500/20" />
            <div className="relative p-10 lg:p-16">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div>
                  <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-500 mb-4">
                    <Lock className="h-4 w-4" />
                    Featured Product
                  </span>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                    XeroTrust: Zero-Trust Network Access
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Enterprise security without VPN complexity. 10x faster than legacy VPNs 
                    with WireGuard encryption and AI-driven threat detection.
                  </p>
                  <MagneticButton>
                    <Button variant="hero" size="xl" className="bg-cyan-500 hover:bg-cyan-600" asChild>
                      <Link to="/xerotrust">
                        Explore XeroTrust
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </MagneticButton>
                </div>
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-3xl" />
                    <div className="relative p-10 rounded-full bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 border border-cyan-500/30">
                      <ShieldCheck className="h-32 w-32 text-cyan-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Professional Certifications */}
      <section className="py-16 lg:py-20 bg-muted/20">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
              Professional Certifications
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our security experts hold industry-leading certifications to ensure top-tier protection
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {/* OSCP Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-3"
            >
              <div className="p-6 bg-background rounded-xl border border-border hover:border-primary/30 transition-all shadow-lg hover:shadow-xl">
                <img
                  src="https://images.credly.com/images/ec81134d-e80b-4eb5-ae07-0eb8e1a60fcd/image.png"
                  alt="OSCP - Offensive Security Certified Professional"
                  className="h-24 w-24 object-contain"
                />
              </div>
              <div className="text-center">
                <p className="font-semibold text-foreground">OSCP</p>
                <p className="text-xs text-muted-foreground">Offensive Security</p>
              </div>
            </motion.div>

            {/* CEH Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-3"
            >
              <div className="p-6 bg-background rounded-xl border border-border hover:border-primary/30 transition-all shadow-lg hover:shadow-xl">
                <img
                  src="https://images.credly.com/images/8518fbb4-c0c6-40bc-84f3-28f9ed1b3b99/image.png"
                  alt="CEH - Certified Ethical Hacker"
                  className="h-24 w-24 object-contain"
                />
              </div>
              <div className="text-center">
                <p className="font-semibold text-foreground">CEH</p>
                <p className="text-xs text-muted-foreground">EC-Council</p>
              </div>
            </motion.div>

            {/* CISSP for completeness */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-3"
            >
              <div className="p-6 bg-background rounded-xl border border-border hover:border-primary/30 transition-all shadow-lg hover:shadow-xl">
                <img
                  src="https://images.credly.com/images/9180921d-4a13-429e-95bb-a38115a6e0b4/image.png"
                  alt="CISSP - Certified Information Systems Security Professional"
                  className="h-24 w-24 object-contain"
                />
              </div>
              <div className="text-center">
                <p className="font-semibold text-foreground">CISSP</p>
                <p className="text-xs text-muted-foreground">(ISC)²</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Secure your enterprise today
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Schedule a security assessment to identify vulnerabilities and create 
              a comprehensive protection strategy for your organization.
            </p>
            <MagneticButton>
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Request Security Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
