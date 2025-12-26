import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Shield,
  Lock,
  Eye,
  CheckCircle2,
  UserCheck,
  Smartphone,
  Network,
  Fingerprint
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
    icon: UserCheck,
    title: "Identity & Access Management",
    description: "Implement comprehensive IAM with multi-factor authentication and least privilege access controls.",
    capabilities: [
      "Multi-Factor Authentication",
      "Single Sign-On (SSO)",
      "Privileged Access Management",
      "Identity Federation",
      "Access Policy Enforcement",
    ],
  },
  {
    icon: Smartphone,
    title: "Device Security",
    description: "Secure and manage all devices accessing your network with continuous health monitoring.",
    capabilities: [
      "Device Posture Checking",
      "Endpoint Protection",
      "Mobile Device Management",
      "BYOD Security",
      "Compliance Validation",
    ],
  },
  {
    icon: Network,
    title: "Network Segmentation",
    description: "Divide your network into secure zones with granular access controls and traffic monitoring.",
    capabilities: [
      "Micro-Segmentation",
      "Software-Defined Perimeter",
      "East-West Traffic Control",
      "Application-Level Segmentation",
      "Dynamic Policy Enforcement",
    ],
  },
  {
    icon: Fingerprint,
    title: "Continuous Authentication",
    description: "Verify user identity and device health continuously throughout sessions with adaptive policies.",
    capabilities: [
      "Risk-Based Authentication",
      "Behavioral Analytics",
      "Session Monitoring",
      "Adaptive Access Policies",
      "Real-Time Threat Response",
    ],
  },
];

const stats = [
  { value: "80%", label: "Fewer Breaches", description: "With zero trust implementation" },
  { value: "Zero", label: "Implicit Trust", description: "Verify every access request" },
  { value: "24/7", label: "Continuous Verification", description: "Always-on security validation" },
  { value: "98%", label: "Threat Reduction", description: "Advanced threat prevention" },
];

export default function ZeroTrustSecurity() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <SEOHead
        title="Zero Trust Security | Never Trust, Always Verify | Axiomio"
        description="Implement zero trust security architecture with continuous verification, identity management, and micro-segmentation. Reduce breaches by 80% with our comprehensive zero trust solutions."
        keywords="zero trust security, zero trust architecture, identity and access management, IAM, micro-segmentation, continuous authentication, device security, least privilege access"
        canonicalUrl="https://axiomio.com/services/zero-trust-security"
        pageType="services"
      />
      <Navbar />

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 via-background to-background" />
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-rose-500/10 rounded-full blur-3xl" />
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
                <ShieldCheck className="h-8 w-8" />
              </div>
              <span className="text-sm font-semibold text-red-500 uppercase tracking-wider">
                Zero Trust Security
              </span>
            </motion.div>

            <motion.h1
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Never Trust,{" "}
              <span className="text-red-500">Always Verify</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Implement comprehensive zero trust architecture with continuous verification, identity management,
              and micro-segmentation. Eliminate implicit trust and reduce breaches by 80%.
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
                  <div className="text-2xl md:text-3xl font-bold text-red-500 mb-1">{stat.value}</div>
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
            label="Zero Trust Security Services"
            title="Comprehensive Zero Trust Implementation"
            description="From identity to network, we secure every access point with continuous verification."
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
              Implement Zero Trust Today
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Get a free zero trust security assessment and discover your path to continuous verification.
            </p>
            <MagneticButton>
              <Button variant="hero" size="xl" className="bg-red-500 hover:bg-red-600" asChild>
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
