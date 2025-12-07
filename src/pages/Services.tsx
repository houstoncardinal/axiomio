import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Cpu, LineChart, Zap, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GridBackground } from "@/components/GridBackground";
import { SectionHeader } from "@/components/SectionHeader";

const services = [
  {
    id: "strategy",
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
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32">
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
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
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
      </section>

      {/* Services Grid */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="space-y-24">
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
                <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <motion.div 
                      className="inline-flex p-4 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary border border-primary/20 mb-6"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <service.icon className="h-8 w-8" />
                    </motion.div>
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                      {service.title}
                    </h2>
                    <p className="text-xl text-primary mb-6">
                      {service.subtitle}
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-8">
                      {service.description}
                    </p>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button variant="hero-outline" size="lg" asChild>
                        <Link to="/contact">
                          Discuss Your Needs
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </motion.div>
                  </div>
                  
                  <div className={`glass-card rounded-2xl p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <h4 className="font-heading font-semibold text-foreground mb-6">
                      Key Capabilities
                    </h4>
                    <ul className="space-y-4">
                      {service.capabilities.map((capability, capIndex) => (
                        <motion.li 
                          key={capability} 
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: capIndex * 0.1, duration: 0.4 }}
                          viewport={{ once: true }}
                        >
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{capability}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {index < services.length - 1 && (
                  <motion.div 
                    className="mt-24 h-px bg-gradient-to-r from-transparent via-border to-transparent"
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
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Schedule a Discovery Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}