import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Shield,
  Database,
  Clock,
  CheckCircle2,
  Server,
  RefreshCw,
  AlertTriangle,
  FileCheck
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
    icon: Database,
    title: "Data Backup & Recovery",
    description: "Advanced backup solutions with efficient recovery planning to protect your critical data assets.",
    capabilities: [
      "Automated backup scheduling",
      "Multi-region data replication",
      "Point-in-time recovery",
      "Incremental & differential backups",
      "Backup verification & testing",
    ],
  },
  {
    icon: Shield,
    title: "Cyber Resilience",
    description: "Proactive defense measures against cyber threats with immutable backups and ransomware protection.",
    capabilities: [
      "Immutable backup storage",
      "Ransomware detection",
      "Air-gapped backup copies",
      "Privilege access controls",
      "Security monitoring",
    ],
  },
  {
    icon: RefreshCw,
    title: "Disaster Recovery Planning",
    description: "Comprehensive DR procedures to ensure business continuity during unforeseen events.",
    capabilities: [
      "RTO & RPO analysis",
      "Failover automation",
      "AWS Elastic Disaster Recovery",
      "Azure Site Recovery integration",
      "Regular DR testing",
    ],
  },
  {
    icon: Clock,
    title: "High Availability Solutions",
    description: "Minimize downtime with robust high-availability architectures and replication platforms.",
    capabilities: [
      "Multi-AZ deployments",
      "Load balancing",
      "Real-time replication (Zerto, Veeam)",
      "Health monitoring",
      "Auto-scaling & failover",
    ],
  },
];

const stats = [
  { value: "75%", label: "Faster Recovery", description: "vs standard approaches" },
  { value: "< 1hr", label: "Average Downtime", description: "vs 24hr industry average" },
  { value: "99.99%", label: "Data Protection", description: "Guaranteed reliability" },
  { value: "24/7", label: "Monitoring", description: "Continuous protection" },
];

const methodology = [
  { number: "01", title: "Assess & Plan", description: "Infrastructure analysis and customized BDR solution design" },
  { number: "02", title: "Protect & Backup", description: "Implement state-of-the-art backup technology" },
  { number: "03", title: "Develop DR Plan", description: "Comprehensive recovery procedures and protocols" },
  { number: "04", title: "Test & Validate", description: "Thorough testing and team preparation" },
  { number: "05", title: "Monitor & Optimize", description: "Continuous improvement aligned with evolving threats" },
];

export default function BusinessContinuity() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <SEOHead
        title="Business Continuity & Disaster Recovery | BDR Services | AXIOMIO"
        description="Comprehensive business continuity solutions: data backup & recovery, disaster recovery planning, cyber resilience, and high availability. Protect your business with 75% faster recovery."
        keywords="business continuity, disaster recovery, BDR, backup and recovery, cyber resilience, high availability, data protection, ransomware protection, AWS disaster recovery, Azure site recovery"
        canonicalUrl="https://axiomio.com/services/business-continuity"
        pageType="services"
      />
      <Navbar />

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-background to-background" />
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-green-500/10 rounded-full blur-3xl" />
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
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                <Shield className="h-8 w-8" />
              </div>
              <span className="text-sm font-semibold text-emerald-500 uppercase tracking-wider">
                Business Continuity & Disaster Recovery
              </span>
            </motion.div>

            <motion.h1
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Protect Your Business with{" "}
              <span className="text-emerald-500">Rapid Recovery</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Comprehensive data protection, rapid restoration capabilities, and robust cyber resilience.
              Minimize downtime and ensure swift recovery from any disruption.
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
                  <div className="text-2xl md:text-3xl font-bold text-emerald-500 mb-1">{stat.value}</div>
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
            label="BDR Solutions"
            title="Comprehensive Protection & Recovery"
            description="From backup automation to disaster recovery, protect your business against any disruption."
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
                <PremiumCard className="h-full group hover:border-emerald-500/30 transition-all duration-300">
                  <div className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors">
                        <service.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-semibold text-foreground group-hover:text-emerald-500 transition-colors">
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
                          <CheckCircle2 className="h-4 w-4 text-emerald-500/60 flex-shrink-0" />
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

      {/* Methodology Section */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionHeader
            label="Our Approach"
            title="5-Phase BDR Methodology"
            description="Structured approach to implementing and maintaining business continuity."
          />

          <div className="grid md:grid-cols-5 gap-6 mt-16">
            {methodology.map((phase, index) => (
              <motion.div
                key={phase.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 font-bold text-xl mb-4 border border-emerald-500/20">
                    {phase.number}
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {phase.description}
                  </p>
                </div>
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
              Protect Your Business Today
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Get a free business continuity assessment and tailored BDR planning.
            </p>
            <MagneticButton>
              <Button variant="hero" size="xl" className="bg-emerald-500 hover:bg-emerald-600" asChild>
                <Link to="/contact">
                  Request Free Consultation
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
