import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Cloud, 
  Shield, 
  Lock, 
  Eye, 
  CheckCircle2,
  Server,
  Container,
  Key,
  AlertTriangle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PremiumCard } from "@/components/PremiumCard";
import { SectionHeader } from "@/components/SectionHeader";
import { SEOHead } from "@/components/SEOHead";
import { MagneticButton } from "@/components/MagneticButton";

const services = [
  {
    icon: Eye,
    title: "Cloud Security Posture Management",
    subtitle: "CSPM",
    description: "Continuously monitor and remediate cloud misconfigurations across AWS, Azure, and GCP.",
    capabilities: [
      "Multi-cloud Visibility",
      "Compliance Monitoring",
      "Misconfiguration Detection",
      "Risk Prioritization",
      "Automated Remediation",
    ],
  },
  {
    icon: Server,
    title: "Cloud Workload Protection",
    subtitle: "CWPP",
    description: "Protect workloads across VMs, containers, and serverless with runtime security.",
    capabilities: [
      "VM & Server Protection",
      "Container Security",
      "Serverless Security",
      "Runtime Protection",
      "Vulnerability Management",
    ],
  },
  {
    icon: Container,
    title: "Container & Kubernetes Security",
    description: "Secure your container ecosystem from build to runtime with comprehensive protection.",
    capabilities: [
      "Image Scanning",
      "Registry Security",
      "Kubernetes Hardening",
      "Network Policies",
      "Runtime Threat Detection",
    ],
  },
  {
    icon: Key,
    title: "Cloud Identity & Access",
    description: "Implement least-privilege access and manage cloud identities at scale.",
    capabilities: [
      "IAM Policy Analysis",
      "Privilege Escalation Detection",
      "Cross-account Access Management",
      "Service Account Security",
      "Permission Boundaries",
    ],
  },
];

const stats = [
  { value: "99%", label: "Misconfigurations Found", description: "Before they become breaches" },
  { value: "80%", label: "Breach Cause", description: "Cloud misconfigurations cause breaches" },
  { value: "24/7", label: "Continuous Monitoring", description: "Real-time threat detection" },
  { value: "<15min", label: "Response Time", description: "Average remediation time" },
];

export default function CloudSecurity() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <SEOHead
        title="Cloud Security Services | CSPM, CWPP & Container Security | AXIOMIO"
        description="Enterprise cloud security: CSPM, CWPP, container security, and cloud IAM. Protect AWS, Azure, and GCP workloads with continuous monitoring and automated remediation."
        keywords="cloud security, CSPM, CWPP, container security, kubernetes security, cloud IAM, AWS security, Azure security, GCP security, cloud compliance"
        canonicalUrl="https://axiomio.com/services/cloud-security"
        pageType="services"
      />
      <Navbar />
      
      {/* Hero Section */}
      <header className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-background to-background" />
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl" />
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
              <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-500 border border-cyan-500/20">
                <Cloud className="h-8 w-8" />
              </div>
              <span className="text-sm font-semibold text-cyan-500 uppercase tracking-wider">
                Cloud Security
              </span>
            </motion.div>
            
            <motion.h1 
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Secure Your{" "}
              <span className="text-cyan-500">Cloud Infrastructure</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Comprehensive cloud security with CSPM, CWPP, and container protection. 
              Continuous monitoring and automated remediation across AWS, Azure, and GCP.
            </motion.p>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-xl bg-card/50 border border-border/50">
                  <div className="text-2xl md:text-3xl font-bold text-cyan-500 mb-1">{stat.value}</div>
                  <div className="text-sm font-medium text-foreground mb-1">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">{stat.description}</div>
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
            label="Cloud Security Services"
            title="Multi-Cloud Security Coverage"
            description="From posture management to workload protection, we secure every layer of your cloud."
          />
          
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <PremiumCard className="h-full group hover:border-cyan-500/30 transition-all duration-300">
                  <div className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-500 border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-colors">
                        <service.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-semibold text-foreground group-hover:text-cyan-500 transition-colors">
                          {service.title}
                        </h3>
                        {service.subtitle && (
                          <p className="text-sm text-cyan-500/70">{service.subtitle}</p>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {service.capabilities.map((cap) => (
                        <li key={cap} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-cyan-500/60 flex-shrink-0" />
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

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-card/50 to-background">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Secure Your Cloud Today
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Get a free cloud security assessment and discover your risk exposure.
            </p>
            <MagneticButton>
              <Button variant="hero" size="xl" className="bg-cyan-500 hover:bg-cyan-600" asChild>
                <Link to="/contact">
                  Request Assessment
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
