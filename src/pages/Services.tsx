import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Cpu, LineChart, Zap, ChevronRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GridBackground } from "@/components/GridBackground";
import { SectionHeader } from "@/components/SectionHeader";
import { SEOHead } from "@/components/SEOHead";
import { servicesPageSchema } from "@/lib/seo-schemas-enhanced";
import { MagneticButton } from "@/components/MagneticButton";

const services = [
  {
    id: "strategy",
    slug: "strategy-advisory",
    icon: LineChart,
    title: "Strategy & Advisory",
    subtitle: "Executive guidance for complex decisions",
    description: "Navigate uncertainty with frameworks built on deep analysis, industry insight, and a commitment to outcomes that compound over time.",
    capabilities: [
      "Strategic roadmap development",
      "Market and competitive analysis",
      "Organizational design",
      "Executive decision support",
      "Investment thesis development",
    ],
  },
  {
    id: "technology",
    slug: "technology-systems",
    icon: Cpu,
    title: "Technology & Systems",
    subtitle: "Architecture that scales with ambition",
    description: "Design and implement enterprise-grade systems that deliver reliability today while adapting to tomorrow's requirements.",
    capabilities: [
      "Enterprise architecture",
      "Cloud infrastructure design",
      "System integration",
      "Platform modernization",
      "Technical due diligence",
    ],
  },
  {
    id: "ai",
    slug: "ai-automation",
    icon: Brain,
    title: "AI & Automation",
    subtitle: "Intelligence applied with precision",
    description: "Deploy machine learning and automation solutions that enhance human decision-making and unlock operational capabilities previously impossible.",
    capabilities: [
      "AI strategy and roadmapping",
      "Machine learning implementation",
      "Intelligent process automation",
      "Data infrastructure",
      "Model governance and MLOps",
    ],
  },
  {
    id: "transformation",
    slug: "digital-transformation",
    icon: Zap,
    title: "Digital Transformation",
    subtitle: "Change that creates lasting value",
    description: "Guide complex organizational change with methodologies that ensure adoption, minimize disruption, and deliver sustainable outcomes.",
    capabilities: [
      "Transformation strategy",
      "Change management",
      "Process redesign",
      "Technology adoption",
      "Capability building",
    ],
  },
  {
    id: "xerotrust",
    slug: "xerotrust",
    icon: Shield,
    title: "XeroTrust",
    subtitle: "Zero-Trust Network Access",
    description: "Enterprise security without VPN complexity. 10x faster than traditional VPNs with AI-driven protection, WireGuard encryption, and seamless SSO integration.",
    capabilities: [
      "Zero-trust architecture",
      "WireGuard encryption",
      "SSO & MFA integration",
      "Device posture checks",
      "AI-driven security engine",
    ],
  },
];

export default function Services() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <SEOHead
        title="Enterprise Consulting Services | Strategy, AI, Digital Transformation | Axiomio"
        description="Axiomio's enterprise consulting services: Strategy & Advisory, Technology & Systems, AI & Automation, and Digital Transformation. XOPS360 platform for intelligent operations. Trusted by Fortune 500."
        keywords="enterprise consulting services, technology consulting, strategy consulting, AI consulting, digital transformation services, enterprise architecture, DevOps consulting, MLOps, AIOps, cloud consulting, IT strategy"
        canonicalUrl="https://axiomio.com/services"
        pageType="services"
        structuredData={servicesPageSchema}
      />
      <Navbar />
      
      {/* Hero Section */}
      <header className="relative pt-32 pb-24 lg:pt-40 lg:pb-32" role="banner">
        <GridBackground />
        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span 
              className="inline-flex items-center gap-2 text-sm font-medium text-primary uppercase tracking-wider mb-6 px-4 py-2 rounded-full border border-primary/20 bg-primary/5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" aria-hidden="true" />
              Our Services
            </motion.span>
            
            <motion.h1 
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Capabilities built for{" "}
              <span className="text-gradient">consequential challenges</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              From strategic vision to technical execution, we deliver the full 
              spectrum of capabilities needed to navigate complex transformation.
            </motion.p>
          </motion.div>
        </div>
      </header>

      {/* Services Grid */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                id={service.id}
                className="scroll-mt-32"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Link 
                  to={`/services/${service.slug}`}
                  className="block group"
                >
                  <div className="glass-card rounded-2xl p-8 lg:p-12 transition-all duration-500 hover:shadow-glow hover:border-primary/30">
                    <div className="grid lg:grid-cols-3 gap-8 items-start">
                      <div className="lg:col-span-2">
                        <div className="flex items-start gap-6">
                          <motion.div 
                            className="p-4 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary border border-primary/20 flex-shrink-0"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <service.icon className="h-8 w-8" />
                          </motion.div>
                          <div className="flex-1">
                            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                              {service.title}
                            </h2>
                            <p className="text-lg text-primary mb-4">
                              {service.subtitle}
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                              {service.description}
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col gap-4">
                        <h4 className="font-heading font-semibold text-sm text-muted-foreground uppercase tracking-wider">
                          Key Capabilities
                        </h4>
                        <ul className="space-y-2">
                          {service.capabilities.slice(0, 4).map((capability) => (
                            <li 
                              key={capability} 
                              className="flex items-center gap-2 text-sm text-muted-foreground"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                              {capability}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-4 flex items-center text-primary font-medium group-hover:gap-3 transition-all">
                          <span>Explore service</span>
                          <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                
                {index < services.length - 1 && (
                  <motion.div 
                    className="mt-16 h-px bg-gradient-to-r from-transparent via-border to-transparent"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-card/50 to-background">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Not sure where to start?
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Many engagements begin with a discovery session to understand your 
              challenges and opportunities. Let's find the right starting point together.
            </p>
            <MagneticButton>
              <Button variant="premium" size="xl" asChild>
                <Link to="/contact">
                  Schedule a Discovery Call
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