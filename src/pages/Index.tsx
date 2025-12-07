import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Cpu, LineChart, Shield, Zap, Target, Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GridBackground } from "@/components/GridBackground";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionHeader } from "@/components/SectionHeader";
import { ClientLogos } from "@/components/ClientLogos";
import { StatsSection } from "@/components/StatsSection";

const services = [
  {
    icon: LineChart,
    title: "Strategy & Advisory",
    description: "Executive-level strategic guidance that transforms vision into measurable outcomes through systematic analysis and proven methodologies.",
  },
  {
    icon: Cpu,
    title: "Technology & Systems",
    description: "Architect and implement enterprise-grade systems designed for scale, reliability, and long-term operational excellence.",
  },
  {
    icon: Brain,
    title: "AI & Automation",
    description: "Deploy intelligent automation solutions that enhance decision-making, streamline operations, and unlock new capabilities.",
  },
  {
    icon: Zap,
    title: "Digital Transformation",
    description: "Navigate complex organizational change with frameworks that ensure adoption, alignment, and sustainable value creation.",
  },
];

const differentiators = [
  {
    icon: Target,
    title: "Precision-Driven",
    description: "Every recommendation is grounded in data, tested against reality, and refined for your specific context.",
  },
  {
    icon: Shield,
    title: "Enterprise-Ready",
    description: "Solutions built to institutional standards with security, compliance, and governance at the core.",
  },
  {
    icon: Users,
    title: "Partnership Model",
    description: "We work alongside your teams, transferring knowledge and building internal capabilities that endure.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "Insights drawn from diverse industries and markets, adapted to local realities and opportunities.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Index() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <GridBackground />
        
        <div className="container relative z-10 mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <motion.div 
            className="max-w-5xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span 
              variants={itemVariants}
              className="inline-flex items-center gap-2 text-sm font-medium text-primary uppercase tracking-wider mb-6 px-4 py-2 rounded-full border border-primary/20 bg-primary/5"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Technology & Strategy Firm
            </motion.span>
            
            <motion.h1 
              variants={itemVariants}
              className="font-heading text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground leading-[1.05] mb-8"
            >
              Building systems that{" "}
              <span className="relative">
                <span className="text-gradient">define the future</span>
                <motion.span 
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                />
              </span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mb-12"
            >
              Axiomio partners with forward-thinking organizations to architect 
              intelligent solutions that scale with ambition and deliver measurable impact.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Request a Strategy Session
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/services">
                  Explore Our Work
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <motion.div 
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div 
              className="w-1 h-2 bg-primary rounded-full"
              animate={{ y: [0, 8, 0], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Client Logos */}
      <ClientLogos />

      {/* Stats Section */}
      <StatsSection />

      {/* Services Section */}
      <section className="py-24 lg:py-32 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SectionHeader
              label="What We Do"
              title="Enterprise solutions designed for lasting impact"
              description="We deliver comprehensive capabilities that address the full spectrum of digital transformation, from strategy through execution."
            />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-16">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Axiomio Section */}
      <section className="py-24 lg:py-32 relative bg-gradient-to-b from-card/50 to-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <SectionHeader
                label="Why Axiomio"
                title="Precision meets vision"
                description="We operate at the intersection of strategic clarity and technical excellence, building solutions that are as thoughtful as they are powerful."
                align="left"
              />
              
              <div className="mt-8 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  In a landscape crowded with shortcuts and hype, we take the deliberate path. 
                  Every engagement begins with understanding—your business, your challenges, 
                  your opportunities—before a single line of code is written or strategy is proposed.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The result is work that endures: systems that scale, strategies that adapt, 
                  and partnerships that compound value over time.
                </p>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button variant="hero" size="lg" className="mt-8" asChild>
                  <Link to="/about">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {differentiators.map((item, index) => (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="group rounded-xl p-6 bg-gradient-to-br from-muted/40 to-muted/20 border border-border/50 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary w-fit mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h4 className="font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-primary/8 rounded-full blur-[180px]"
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>
        
        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <motion.div 
            className="rounded-3xl p-12 lg:p-20 text-center max-w-5xl mx-auto relative overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            style={{
              background: "linear-gradient(135deg, hsl(220 20% 10% / 0.8) 0%, hsl(220 20% 6% / 0.9) 100%)",
              border: "1px solid hsl(220 15% 18% / 0.5)",
            }}
          >
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-secondary/20 to-transparent" />
            
            <div className="relative z-10">
              <motion.h2 
                className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Ready to build what's next?
              </motion.h2>
              <motion.p 
                className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Let's discuss how Axiomio can help you navigate complexity, 
                accelerate transformation, and achieve outcomes that matter.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contact">
                    Talk to Our Team
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="hero-outline" size="xl" asChild>
                  <Link to="/approach">
                    See Our Approach
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
