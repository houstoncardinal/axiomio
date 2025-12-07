import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Brain, Cpu, LineChart, Shield, Zap, Target, Users, Globe, Sparkles, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ParticleField } from "@/components/ParticleField";
import { FloatingElements } from "@/components/FloatingElements";
import { GlowingOrb } from "@/components/GlowingOrb";
import { PremiumCard } from "@/components/PremiumCard";
import { AnimatedGradientText } from "@/components/AnimatedGradientText";
import { MagneticButton } from "@/components/MagneticButton";
import { CounterBadge } from "@/components/CounterBadge";
import { TextReveal } from "@/components/TextReveal";
import { SectionHeader } from "@/components/SectionHeader";
import { XOPS360Section } from "@/components/XOPS360Section";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CapabilitiesGrid } from "@/components/CapabilitiesGrid";
import { MetricsShowcase } from "@/components/MetricsShowcase";
import { useRef } from "react";

const services = [
  {
    icon: LineChart,
    title: "Strategy & Advisory",
    description: "Executive-level strategic guidance that transforms vision into measurable outcomes through systematic analysis.",
    gradient: "from-primary/20 to-blue-500/10",
    link: "/services/strategy-advisory",
  },
  {
    icon: Cpu,
    title: "Technology & Systems",
    description: "Architect and implement enterprise-grade systems designed for scale, reliability, and operational excellence.",
    gradient: "from-blue-500/20 to-violet-500/10",
    link: "/services/technology-systems",
  },
  {
    icon: Brain,
    title: "AI & Automation",
    description: "Deploy intelligent automation solutions that enhance decision-making and unlock new capabilities.",
    gradient: "from-violet-500/20 to-secondary/10",
    link: "/services/ai-automation",
  },
  {
    icon: Zap,
    title: "Digital Transformation",
    description: "Navigate complex organizational change with frameworks that ensure adoption and sustainable value.",
    gradient: "from-secondary/20 to-primary/10",
    link: "/services/digital-transformation",
  },
];

const differentiators = [
  {
    icon: Target,
    title: "Precision-Driven",
    description: "Every recommendation is grounded in data and refined for your specific context.",
  },
  {
    icon: Shield,
    title: "Enterprise-Ready",
    description: "Solutions built with security, compliance, and governance at the core.",
  },
  {
    icon: Users,
    title: "Partnership Model",
    description: "We work alongside your teams, building capabilities that endure.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "Insights from diverse industries, adapted to local opportunities.",
  },
];

const stats = [
  { value: 500, suffix: "M+", label: "Value Delivered" },
  { value: 150, suffix: "+", label: "Enterprise Clients" },
  { value: 98, suffix: "%", label: "Client Retention" },
  { value: 40, suffix: "+", label: "Countries Served" },
];

export default function Index() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[100vh] flex items-center pt-20">
        {/* Background layers */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-hero-gradient" />
          <GlowingOrb size={800} color="primary" className="-top-1/4 -left-1/4" delay={0} />
          <GlowingOrb size={600} color="secondary" className="top-1/4 -right-1/4" delay={2} />
          <GlowingOrb size={500} color="accent" className="bottom-0 left-1/3" delay={4} />
          <ParticleField />
          <FloatingElements />
        </div>
        
        <motion.div 
          className="container relative z-10 mx-auto px-6 lg:px-8 py-24 lg:py-32"
          style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
        >
          <div className="max-w-6xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground/80 px-6 py-3 rounded-full border border-border/50 bg-muted/30 backdrop-blur-sm">
                <motion.span 
                  className="w-2 h-2 bg-primary rounded-full"
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                Powered by XOPS360
                <Sparkles className="w-4 h-4 text-primary" />
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h1 
              className="font-heading text-5xl md:text-7xl lg:text-8xl xl:text-[6.5rem] font-bold text-foreground leading-[1.02] tracking-tight mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <TextReveal delay={0.3}>
                <span className="block">The future of</span>
              </TextReveal>
              <TextReveal delay={0.5}>
                <span className="block"><AnimatedGradientText>intelligent operations</AnimatedGradientText></span>
              </TextReveal>
            </motion.h1>
            
            {/* Subheadline */}
            <motion.p 
              className="text-xl md:text-2xl lg:text-[1.65rem] text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-14"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Axiomio's XOPS360 platform unifies DevOps, DataOps, MLOps, and AIOps into a single 
              intelligent ecosystem—transforming operational complexity into competitive advantage.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-5 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <MagneticButton>
                <Button variant="hero" size="xl" className="group relative overflow-hidden" asChild>
                  <Link to="/contact">
                    <span className="relative z-10 flex items-center">
                      Request a Demo
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary via-blue-400 to-primary"
                      style={{ backgroundSize: "200% 100%" }}
                      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                  </Link>
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button variant="hero-outline" size="xl" className="backdrop-blur-sm" asChild>
                  <Link to="/services">
                    Explore XOPS360
                  </Link>
                </Button>
              </MagneticButton>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <motion.div 
            className="flex flex-col items-center gap-3"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground/60">Discover more</span>
            <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      {/* Trusted By Section */}
      <section className="py-20 relative border-y border-border/30">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-transparent" />
        <div className="container relative mx-auto px-6 lg:px-8">
          <motion.p 
            className="text-center text-sm uppercase tracking-[0.25em] text-muted-foreground/60 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Trusted by industry leaders worldwide
          </motion.p>
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20">
            {["Fortune 500", "Tech Giants", "Financial Leaders", "Global Enterprises", "Innovators"].map((name, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-muted-foreground/40 font-heading text-lg md:text-xl font-medium hover:text-muted-foreground/60 transition-colors cursor-default"
              >
                {name}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-28 lg:py-36 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <CounterBadge
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                prefix={stat.label === "Value Delivered" ? "$" : ""}
                label={stat.label}
                duration={2 + index * 0.3}
              />
            ))}
          </div>
        </div>
      </section>

      {/* XOPS360 Feature Section */}
      <XOPS360Section />

      {/* Metrics Showcase */}
      <MetricsShowcase />

      {/* Capabilities Grid */}
      <CapabilitiesGrid />

      {/* Process Timeline */}
      <ProcessTimeline />

      {/* Services Section */}
      <section className="py-28 lg:py-36 relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SectionHeader
              label="Our Services"
              title="Comprehensive enterprise solutions"
              description="Beyond XOPS360, we deliver end-to-end capabilities that address the full spectrum of digital transformation."
            />
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mt-20">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Link to={service.link}>
                  <PremiumCard className="h-full">
                    <div className={`p-8 lg:p-10 bg-gradient-to-br ${service.gradient}`}>
                      <div className="flex items-start justify-between mb-6">
                        <div className="p-3 rounded-xl bg-primary/10 text-primary border border-primary/20">
                          <service.icon className="h-6 w-6" />
                        </div>
                        <ChevronRight className="h-5 w-5 text-muted-foreground/50 group-hover:text-primary transition-colors" />
                      </div>
                      <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </PremiumCard>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Why Axiomio Section */}
      <section className="py-28 lg:py-36 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-card/50 to-background" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        
        <div className="container relative mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <SectionHeader
                label="Why Axiomio"
                title="Where precision meets vision"
                description="We operate at the intersection of strategic clarity and technical excellence."
                align="left"
              />
              
              <div className="mt-10 space-y-5">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  In a landscape crowded with shortcuts and hype, we take the deliberate path. 
                  Every engagement begins with understanding—your business, your challenges, 
                  your opportunities.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  The result is work that endures: systems that scale, strategies that adapt, 
                  and partnerships that compound value over time.
                </p>
              </div>
              
              <MagneticButton className="mt-10">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/about">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </MagneticButton>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {differentiators.map((item, index) => (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <PremiumCard className="h-full">
                    <div className="p-7">
                      <div className="p-2.5 rounded-lg bg-primary/10 text-primary w-fit mb-5 border border-primary/20">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <h4 className="font-heading font-semibold text-foreground mb-2 text-lg">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </PremiumCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 lg:py-40 relative overflow-hidden">
        <div className="absolute inset-0">
          <GlowingOrb size={1000} color="primary" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
        
        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <motion.div 
            className="relative max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Card */}
            <div className="glass-premium rounded-3xl p-12 lg:p-20 text-center relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-primary/10 to-transparent" />
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-secondary/10 to-transparent" />
              
              <div className="relative z-10">
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.15em] text-primary mb-6"
                >
                  <span className="w-8 h-px bg-primary" />
                  Start Your Transformation
                  <span className="w-8 h-px bg-primary" />
                </motion.span>
                
                <motion.h2 
                  className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Ready to experience <AnimatedGradientText>XOPS360</AnimatedGradientText>?
                </motion.h2>
                <motion.p 
                  className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Let's discuss how Axiomio and XOPS360 can help you navigate complexity, 
                  accelerate transformation, and achieve outcomes that matter.
                </motion.p>
                <motion.div 
                  className="flex flex-col sm:flex-row gap-5 justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <MagneticButton>
                    <Button variant="hero" size="xl" asChild>
                      <Link to="/contact">
                        Schedule a Demo
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </MagneticButton>
                  <MagneticButton>
                    <Button variant="hero-outline" size="xl" asChild>
                      <Link to="/approach">
                        See Our Approach
                      </Link>
                    </Button>
                  </MagneticButton>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
