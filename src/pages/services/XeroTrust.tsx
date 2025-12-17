import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle, 
  Shield, 
  Zap, 
  Lock, 
  Globe, 
  Fingerprint, 
  Key, 
  Server, 
  Clock, 
  Eye, 
  Network,
  FileCheck,
  Users,
  Cpu,
  Layers
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GridBackground } from "@/components/GridBackground";
import { SectionHeader } from "@/components/SectionHeader";
import { SEOHead } from "@/components/SEOHead";
import { createBreadcrumbSchema, organizationSchema } from "@/lib/seo-schemas";

const coreFeatures = [
  {
    icon: Fingerprint,
    title: "Identity & Device Verification",
    description: "Integrate with SSO providers (Okta, Azure AD, Google Workspace, M365, SAML) with Multi-Factor Authentication support including hardware keys, authenticator apps, and biometric auth.",
  },
  {
    icon: Cpu,
    title: "AI-Driven Zero Trust Engine",
    description: "Adaptive policies and continuous verification powered by intelligent algorithms that learn and respond to threats in real-time.",
  },
  {
    icon: Zap,
    title: "Lightning Performance",
    description: "10x faster than traditional VPNs with peer-to-peer connections and sub-20ms latency. Direct P2P mesh networking eliminates bottlenecks.",
  },
  {
    icon: FileCheck,
    title: "Complete Audit Logs",
    description: "Track every connection, authentication, and policy change for compliance. Full audit trail for SOC 2 & ISO27001 requirements.",
  },
  {
    icon: Clock,
    title: "Rapid Deployment",
    description: "Go live in days, not months. 5-minute setup time with one-command deployment requiring no IT expertise.",
  },
  {
    icon: Server,
    title: "Self-Hostable Relay",
    description: "Your data, your rules. Full control over network data flow with traffic never touching third-party infrastructure.",
  },
];

const zeroPrinciples = [
  {
    title: "Continuous Verification",
    description: "Never trust, always verify. Every request is authenticated and authorized regardless of network location.",
    icon: Eye,
  },
  {
    title: "Least Privilege",
    description: "Grant only the minimum access needed. Users get access to specific resources, not entire networks.",
    icon: Key,
  },
  {
    title: "Assume Breach",
    description: "Design systems assuming attackers are already inside. Minimize blast radius and detect threats early.",
    icon: Shield,
  },
  {
    title: "Microsegmentation",
    description: "Divide networks into secure zones. Isolate workloads and prevent lateral movement of threats.",
    icon: Layers,
  },
];

const howItWorks = [
  {
    step: 1,
    title: "Install Lightweight Agent",
    description: "Supports laptops, servers, VMs, K8s pods, edge devices with single-line installs and container images.",
    icon: Server,
  },
  {
    step: 2,
    title: "Register and Authenticate",
    description: "Agent generates WireGuard keypair, user authenticates via SSO/MFA, receives a private static IP.",
    icon: Fingerprint,
  },
  {
    step: 3,
    title: "Auto-Connect via P2P Mesh",
    description: "Agents establish direct, encrypted WireGuard tunnels with NAT traversal. No central bottleneck.",
    icon: Network,
  },
  {
    step: 4,
    title: "Enforce Zero-Trust Policies",
    description: "Granular policies, real-time posture checks, and full audit trail. Continuous compliance monitoring.",
    icon: Lock,
  },
];

const useCases = [
  {
    title: "Distributed Teams",
    description: "Secure remote access for global teams without VPN complexity. Enable work from anywhere with enterprise-grade security.",
    icon: Users,
  },
  {
    title: "Multi-Cloud Networks",
    description: "Connect resources across AWS, GCP, Azure, and on-premise seamlessly. Unified security layer across all environments.",
    icon: Globe,
  },
  {
    title: "Compliance & Security",
    description: "Meet SOC 2, ISO27001, HIPAA, and other compliance requirements with built-in audit trails and access controls.",
    icon: FileCheck,
  },
];

const enterpriseFeatures = [
  { name: "WireGuard Encryption", icon: Lock },
  { name: "Sub-20ms Latency", icon: Zap },
  { name: "Global NAT Traversal", icon: Globe },
  { name: "Granular Access Control", icon: Key },
  { name: "Device Posture Checks", icon: Shield },
  { name: "Auto-Discovery & Routing", icon: Network },
  { name: "Complete Audit Trail", icon: FileCheck },
  { name: "Cross-Platform Support", icon: Layers },
];

const comparisonData = [
  { feature: "Setup Time", xerotrust: "5 minutes", legacy: "Weeks" },
  { feature: "Network Latency", xerotrust: "15ms", legacy: "300ms" },
  { feature: "Connection Type", xerotrust: "P2P Direct", legacy: "Hub & Spoke" },
  { feature: "Zero Trust Built-in", xerotrust: "Yes", legacy: "No" },
  { feature: "Device Posture Checks", xerotrust: "Yes", legacy: "Limited" },
  { feature: "Self-Hostable", xerotrust: "Yes", legacy: "No" },
];

const breadcrumbSchema = createBreadcrumbSchema([
  { name: "Home", url: "https://axiomio.com/" },
  { name: "Services", url: "https://axiomio.com/services" },
  { name: "XeroTrust", url: "https://axiomio.com/services/xerotrust" },
]);

const xerotrustSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://axiomio.com/services/xerotrust/#product",
  name: "XeroTrust",
  applicationCategory: "SecurityApplication",
  applicationSubCategory: "Zero-Trust Network Access",
  operatingSystem: "Windows, Linux, macOS (coming soon), iOS (coming soon), Android (coming soon)",
  description: "XeroTrust is a Zero-Trust Network Access (ZTNA) platform that provides secure access to internal applications without traditional VPNs. Built on the principle of 'Never trust, always verify' with WireGuard encryption and AI-driven security.",
  url: "https://axiomio.com/services/xerotrust",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free for teams under 25 users",
    availability: "https://schema.org/InStock",
  },
  featureList: [
    "Zero-Trust Network Access",
    "WireGuard Encryption",
    "SSO Integration (Okta, Azure AD, Google Workspace)",
    "Multi-Factor Authentication",
    "Device Posture Checks",
    "AI-Driven Security Engine",
    "P2P Mesh Networking",
    "Sub-20ms Latency",
    "Complete Audit Logs",
    "Self-Hostable Relay",
    "SOC 2 & ISO27001 Compliance",
  ],
  provider: { "@id": "https://axiomio.com/#organization" },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [breadcrumbSchema, xerotrustSchema, organizationSchema],
};

export default function XeroTrust() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <SEOHead
        title="XeroTrust | Zero-Trust Network Access (ZTNA) | Axiomio"
        description="XeroTrust provides enterprise-grade Zero-Trust Network Access without VPN complexity. 10x faster than traditional VPNs with WireGuard encryption, SSO integration, and AI-driven security. Free for teams under 25."
        keywords="zero trust, ZTNA, zero trust network access, VPN replacement, WireGuard, network security, SSO integration, MFA, device posture, secure remote access, enterprise security"
        canonicalUrl="https://axiomio.com/services/xerotrust"
        structuredData={pageSchema}
      />
      <Navbar />
      
      {/* Hero Section */}
      <header className="relative pt-32 pb-24 lg:pt-40 lg:pb-32" role="banner">
        <GridBackground />
        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              to="/services" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Services
            </Link>
          </motion.div>
          
          <motion.div 
            className="max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="inline-flex p-4 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 text-emerald-500 border border-emerald-500/20 mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Shield className="h-10 w-10" />
            </motion.div>
            
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
            >
              <Zap className="h-4 w-4" />
              Free for teams under 25 users
            </motion.div>
            
            <motion.h1 
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              Xero<span className="text-gradient">Trust</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Zero-Trust Network Access without the VPN complexity. 
              Enterprise security, zero complexity.
            </motion.p>
            
            <motion.p 
              className="text-lg text-muted-foreground/80 leading-relaxed max-w-3xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
            >
              Never trust, always verify. Authenticate and encrypt every connection 
              regardless of location with 10x faster performance than traditional VPNs.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="https://xerotrust.ai" target="_blank" rel="noopener noreferrer">
                  Learn More
                  <Globe className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* Stats Bar */}
      <section className="py-12 bg-gradient-to-r from-emerald-500/10 via-primary/5 to-emerald-500/10 border-y border-border/50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "5 min", label: "Setup Time" },
              { value: "15ms", label: "Network Latency" },
              { value: "10x", label: "Faster Than VPN" },
              { value: "99.9%", label: "Uptime SLA" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Zero Trust Principles */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SectionHeader
              label="Philosophy"
              title="Four Pillars of Zero Trust"
              description="XeroTrust is built on foundational security principles that eliminate implicit trust."
            />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {zeroPrinciples.map((principle, index) => (
              <motion.div
                key={principle.title}
                className="glass-card rounded-2xl p-8 text-center group hover:shadow-glow transition-all duration-500"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="p-4 rounded-xl bg-emerald-500/10 text-emerald-500 w-fit mx-auto mb-6 group-hover:bg-emerald-500/20 transition-colors">
                  <principle.icon className="h-8 w-8" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {principle.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-card/50 to-background">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SectionHeader
              label="Capabilities"
              title="Enterprise Security, Zero Complexity"
              description="Everything you need for secure network access without the overhead of traditional solutions."
            />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {coreFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="glass-card rounded-2xl p-8 group hover:shadow-glow transition-all duration-500"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit mb-6 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SectionHeader
              label="How It Works"
              title="Secure in Under 5 Minutes"
              description="Four simple steps to enterprise-grade zero-trust security."
            />
          </motion.div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <motion.div
                key={step.title}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {/* Connection line */}
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-full h-px bg-gradient-to-r from-primary/50 to-transparent" />
                )}
                
                <div className="glass-card rounded-2xl p-6 text-center group hover:shadow-glow transition-all duration-500">
                  <div className="relative inline-flex items-center justify-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <step.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-emerald-500 text-white font-bold text-sm flex items-center justify-center">
                      {step.step}
                    </div>
                  </div>
                  <h4 className="font-heading font-semibold text-foreground mb-2">
                    {step.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-card/50 to-background">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SectionHeader
              label="Comparison"
              title="XeroTrust vs Legacy VPNs"
              description="See how XeroTrust outperforms traditional VPN solutions."
            />
          </motion.div>
          
          <motion.div
            className="mt-16 max-w-4xl mx-auto glass-card rounded-2xl overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-3 bg-primary/10 p-4 font-semibold text-sm">
              <div className="text-foreground">Feature</div>
              <div className="text-center text-emerald-500">XeroTrust</div>
              <div className="text-center text-muted-foreground">Legacy VPN</div>
            </div>
            {comparisonData.map((row, index) => (
              <div 
                key={row.feature}
                className={`grid grid-cols-3 p-4 text-sm ${index % 2 === 0 ? 'bg-background/50' : 'bg-card/50'}`}
              >
                <div className="text-foreground font-medium">{row.feature}</div>
                <div className="text-center text-emerald-500 font-semibold">{row.xerotrust}</div>
                <div className="text-center text-muted-foreground">{row.legacy}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SectionHeader
              label="Use Cases"
              title="Built for Modern Enterprises"
              description="XeroTrust adapts to your security needs across any environment."
            />
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                className="glass-card rounded-2xl p-8 group hover:shadow-glow transition-all duration-500"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="p-4 rounded-xl bg-primary/10 text-primary w-fit mb-6 group-hover:bg-primary/20 transition-colors">
                  <useCase.icon className="h-8 w-8" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {useCase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Features Grid */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-card/50 to-background">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SectionHeader
              label="Features"
              title="Enterprise-Grade Capabilities"
            />
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            {enterpriseFeatures.map((feature, index) => (
              <motion.div
                key={feature.name}
                className="glass-card rounded-xl p-4 flex items-center gap-3 group hover:bg-primary/5 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <feature.icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  {feature.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            className="relative glass-card rounded-3xl p-12 lg:p-16 text-center overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-primary/5 to-emerald-500/10 pointer-events-none" />
            
            <div className="relative z-10">
              <motion.div
                className="inline-flex p-4 rounded-full bg-emerald-500/20 text-emerald-500 mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Shield className="h-10 w-10" />
              </motion.div>
              
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Ready for Zero Trust Security?
              </h2>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Get enterprise-grade network security in under 5 minutes. 
                Free for teams under 25 users. No credit card required.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contact">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <Link to="/contact">
                    Schedule Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
              
              <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  5-minute setup
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  No credit card required
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  SOC 2 compliant
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
