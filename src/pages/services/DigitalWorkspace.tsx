import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Monitor,
  Shield,
  Lock,
  Eye,
  CheckCircle2,
  Cloud,
  Users,
  Video,
  Laptop
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
    icon: Monitor,
    title: "Virtual Desktop Infrastructure",
    subtitle: "VDI",
    description: "Deliver secure, scalable virtual desktops to any device with enterprise-grade performance.",
    capabilities: [
      "Cloud-Based VDI",
      "Multi-Device Access",
      "Persistent & Non-Persistent",
      "GPU Acceleration",
      "High Availability",
    ],
  },
  {
    icon: Users,
    title: "Cloud Collaboration",
    description: "Enable seamless collaboration with integrated tools for messaging, file sharing, and project management.",
    capabilities: [
      "Document Collaboration",
      "Real-Time Messaging",
      "File Sharing & Sync",
      "Project Management",
      "Version Control",
    ],
  },
  {
    icon: Shield,
    title: "Secure Remote Access",
    description: "Provide secure access to corporate resources from anywhere with zero-trust network access.",
    capabilities: [
      "Zero Trust Network Access",
      "Multi-Factor Authentication",
      "VPN-Less Access",
      "Conditional Access Policies",
      "Data Loss Prevention",
    ],
  },
  {
    icon: Video,
    title: "Unified Communications",
    description: "Integrate voice, video, and messaging into a single platform for seamless collaboration.",
    capabilities: [
      "Video Conferencing",
      "Voice over IP (VoIP)",
      "Instant Messaging",
      "Screen Sharing",
      "Call Analytics",
    ],
  },
];

const stats = [
  { value: "99.9%", label: "Uptime", description: "Enterprise SLA guarantee" },
  { value: "50%", label: "Cost Savings", description: "Reduced infrastructure costs" },
  { value: "Anywhere", label: "Access", description: "Work from any location" },
  { value: "Enterprise", label: "Security", description: "Zero-trust architecture" },
];

export default function DigitalWorkspace() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <SEOHead
        title="Digital Workspace Solutions | VDI, Collaboration & Remote Access | Axiomio"
        description="Empower your remote workforce with virtual desktop infrastructure, cloud collaboration, and secure remote access. Achieve 99.9% uptime and 50% cost savings with enterprise security."
        keywords="digital workspace, virtual desktop infrastructure, VDI, cloud collaboration, remote access, unified communications, virtual desktop, remote work, endpoint management"
        canonicalUrl="https://axiomio.com/services/digital-workspace"
        pageType="services"
      />
      <Navbar />

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 via-background to-background" />
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl" />
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
              <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-500 border border-indigo-500/20">
                <Laptop className="h-8 w-8" />
              </div>
              <span className="text-sm font-semibold text-indigo-500 uppercase tracking-wider">
                Digital Workspace
              </span>
            </motion.div>

            <motion.h1
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Empower Your{" "}
              <span className="text-indigo-500">Remote Workforce</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Complete digital workspace solutions with VDI, cloud collaboration, and secure remote access.
              Enable productivity from anywhere with 99.9% uptime and enterprise-grade security.
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
                  <div className="text-2xl md:text-3xl font-bold text-indigo-500 mb-1">{stat.value}</div>
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
            label="Digital Workspace Services"
            title="Complete Remote Work Solutions"
            description="From virtual desktops to collaboration tools, we enable seamless remote productivity."
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
                <PremiumCard className="h-full group hover:border-indigo-500/30 transition-all duration-300">
                  <div className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-500 border border-indigo-500/20 group-hover:bg-indigo-500/20 transition-colors">
                        <service.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-semibold text-foreground group-hover:text-indigo-500 transition-colors">
                          {service.title}
                        </h3>
                        {service.subtitle && (
                          <p className="text-sm text-indigo-500/70">{service.subtitle}</p>
                        )}
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>

                    <ul className="space-y-2">
                      {service.capabilities.map((cap) => (
                        <li key={cap} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-indigo-500/60 flex-shrink-0" />
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
              Transform Your Workspace Today
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Get a free digital workspace assessment and discover how to empower remote work.
            </p>
            <MagneticButton>
              <Button variant="hero" size="xl" className="bg-indigo-500 hover:bg-indigo-600" asChild>
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
