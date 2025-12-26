import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldAlert,
  Shield,
  Lock,
  Eye,
  CheckCircle2,
  Search,
  Activity,
  AlertTriangle,
  Radar
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
    icon: Radar,
    title: "Advanced Threat Detection",
    description: "Identify sophisticated threats with AI-powered detection and real-time monitoring across all environments.",
    capabilities: [
      "AI/ML-Based Detection",
      "Real-Time Monitoring",
      "Multi-Vector Analysis",
      "Zero-Day Detection",
      "Automated Response",
    ],
  },
  {
    icon: ShieldAlert,
    title: "Ransomware Protection",
    description: "Prevent, detect, and respond to ransomware attacks with advanced behavioral analysis and encryption detection.",
    capabilities: [
      "Behavioral Analysis",
      "Encryption Detection",
      "File Integrity Monitoring",
      "Automated Isolation",
      "Backup Verification",
    ],
  },
  {
    icon: Activity,
    title: "Behavioral Analytics",
    description: "Detect anomalous behavior and insider threats with advanced user and entity behavior analytics.",
    capabilities: [
      "User Behavior Analytics",
      "Entity Behavior Analysis",
      "Anomaly Detection",
      "Insider Threat Detection",
      "Risk Scoring",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Incident Response",
    description: "Rapidly respond to security incidents with 24/7 SOC services and automated response playbooks.",
    capabilities: [
      "24/7 SOC Monitoring",
      "Automated Playbooks",
      "Forensic Analysis",
      "Containment Strategies",
      "Threat Intelligence",
    ],
  },
];

const stats = [
  { value: "99.9%", label: "Threat Detection", description: "Advanced AI-powered detection" },
  { value: "<5min", label: "Response Time", description: "Average incident response" },
  { value: "Zero-Day", label: "Protection", description: "Unknown threat detection" },
  { value: "24/7", label: "SOC", description: "Round-the-clock monitoring" },
];

export default function ThreatDetectionRansomware() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <SEOHead
        title="Threat Detection & Ransomware Protection | 24/7 SOC Services | Axiomio"
        description="Advanced threat detection and ransomware protection with 99.9% detection rate and sub-5min response time. 24/7 SOC monitoring, behavioral analytics, and automated incident response."
        keywords="threat detection, ransomware protection, SOC services, behavioral analytics, incident response, threat intelligence, zero-day protection, security monitoring"
        canonicalUrl="https://axiomio.com/services/threat-detection-ransomware"
        pageType="services"
      />
      <Navbar />

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-background to-background" />
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-yellow-500/10 rounded-full blur-3xl" />
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
              <div className="p-3 rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20">
                <ShieldAlert className="h-8 w-8" />
              </div>
              <span className="text-sm font-semibold text-amber-500 uppercase tracking-wider">
                Threat Detection & Ransomware
              </span>
            </motion.div>

            <motion.h1
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Detect and{" "}
              <span className="text-amber-500">Neutralize Threats</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Advanced threat detection and ransomware protection with 24/7 SOC services.
              Achieve 99.9% detection rate with AI-powered monitoring and {'<'}5min response time.
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
                  <div className="text-2xl md:text-3xl font-bold text-amber-500 mb-1">{stat.value}</div>
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
            label="Threat Detection Services"
            title="Comprehensive Threat Protection"
            description="From detection to response, we protect against all threats including ransomware and zero-days."
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
                <PremiumCard className="h-full group hover:border-amber-500/30 transition-all duration-300">
                  <div className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20 group-hover:bg-amber-500/20 transition-colors">
                        <service.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-semibold text-foreground group-hover:text-amber-500 transition-colors">
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
                          <CheckCircle2 className="h-4 w-4 text-amber-500/60 flex-shrink-0" />
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
              Protect Against Threats Today
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Get a free threat detection assessment and discover your security gaps.
            </p>
            <MagneticButton>
              <Button variant="hero" size="xl" className="bg-amber-500 hover:bg-amber-600" asChild>
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
