import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Package,
  Shield,
  Lock,
  Eye,
  CheckCircle2,
  Code,
  FileSearch,
  GitBranch,
  Layers
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
    icon: Shield,
    title: "IaC Security Assurance",
    description: "Scan and secure infrastructure as code before deployment with automated policy enforcement.",
    capabilities: [
      "Terraform Security Scanning",
      "CloudFormation Validation",
      "Policy as Code Enforcement",
      "Pre-deployment Checks",
      "Compliance Verification",
    ],
  },
  {
    icon: Code,
    title: "Static Application Security Testing",
    subtitle: "SAST",
    description: "Identify security vulnerabilities in source code during development with comprehensive scanning.",
    capabilities: [
      "Source Code Analysis",
      "Vulnerability Detection",
      "Code Quality Checks",
      "Security Best Practices",
      "IDE Integration",
    ],
  },
  {
    icon: Layers,
    title: "Software Composition Analysis",
    subtitle: "SCA",
    description: "Track and secure open-source dependencies with continuous vulnerability monitoring.",
    capabilities: [
      "Dependency Scanning",
      "License Compliance",
      "Vulnerability Tracking",
      "Update Recommendations",
      "SBOM Generation",
    ],
  },
  {
    icon: GitBranch,
    title: "Integrated DevSecOps Practices",
    description: "Embed security into your CI/CD pipeline with automated testing and deployment gates.",
    capabilities: [
      "CI/CD Integration",
      "Automated Security Gates",
      "Shift-Left Security",
      "Pipeline Orchestration",
      "Continuous Compliance",
    ],
  },
];

const stats = [
  { value: "43%", label: "Breaches Involve Supply Chain", description: "Critical vulnerability vector" },
  { value: "60%", label: "Reduction in Production Bugs", description: "Through early detection" },
  { value: "50%", label: "Faster Time to Market", description: "Automated security checks" },
  { value: "24/7", label: "Scanning", description: "Continuous vulnerability monitoring" },
];

export default function SoftwareSupplyChainSecurity() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <SEOHead
        title="Software Supply Chain Security | DevSecOps, SAST & SCA | Axiomio"
        description="Fortify your software supply chain with DevSecOps, SAST, SCA, and IaC security. Prevent vulnerabilities before deployment with continuous scanning and automated testing."
        keywords="software supply chain security, DevSecOps, SAST, SCA, IaC security, dependency scanning, vulnerability management, secure SDLC, CI/CD security"
        canonicalUrl="https://axiomio.com/services/software-supply-chain-security"
        pageType="services"
      />
      <Navbar />

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 via-background to-background" />
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl" />
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
              <div className="p-3 rounded-xl bg-violet-500/10 text-violet-500 border border-violet-500/20">
                <Package className="h-8 w-8" />
              </div>
              <span className="text-sm font-semibold text-violet-500 uppercase tracking-wider">
                Supply Chain Security
              </span>
            </motion.div>

            <motion.h1
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Fortify Your{" "}
              <span className="text-violet-500">Software Supply Chain</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Comprehensive supply chain security with DevSecOps, SAST, SCA, and IaC scanning.
              Prevent vulnerabilities before they reach production with automated security testing.
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
                  <div className="text-2xl md:text-3xl font-bold text-violet-500 mb-1">{stat.value}</div>
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
            label="Supply Chain Security Services"
            title="Secure Every Stage of Development"
            description="From code to deployment, we protect your software supply chain with comprehensive security."
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
                <PremiumCard className="h-full group hover:border-violet-500/30 transition-all duration-300">
                  <div className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 rounded-xl bg-violet-500/10 text-violet-500 border border-violet-500/20 group-hover:bg-violet-500/20 transition-colors">
                        <service.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-semibold text-foreground group-hover:text-violet-500 transition-colors">
                          {service.title}
                        </h3>
                        {service.subtitle && (
                          <p className="text-sm text-violet-500/70">{service.subtitle}</p>
                        )}
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>

                    <ul className="space-y-2">
                      {service.capabilities.map((cap) => (
                        <li key={cap} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-violet-500/60 flex-shrink-0" />
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
              Secure Your Supply Chain Today
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Get a free supply chain security assessment and discover your vulnerabilities.
            </p>
            <MagneticButton>
              <Button variant="hero" size="xl" className="bg-violet-500 hover:bg-violet-600" asChild>
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
