import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Brain, Cpu, LineChart, Zap, Sparkles, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PremiumCard } from "@/components/PremiumCard";
import { CounterBadge } from "@/components/CounterBadge";
import { SectionHeader } from "@/components/SectionHeader";
import { XOPS360Section } from "@/components/XOPS360Section";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CapabilitiesGrid } from "@/components/CapabilitiesGrid";
import { MetricsShowcase } from "@/components/MetricsShowcase";
import { MountainVisualization } from "@/components/MountainVisualization";
import { DifferentiatorsStack } from "@/components/DifferentiatorsStack";
import { SEOHead } from "@/components/SEOHead";
import { homepageSchema } from "@/lib/seo-schemas-enhanced";
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
      <SEOHead
        title="Axiomio | Enterprise Technology & Strategy Consulting | XOPS360 Platform"
        description="Axiomio is a global technology and strategy consulting firm. Our XOPS360 platform unifies DevOps, DataOps, MLOps & AIOps. Digital transformation, AI automation & enterprise systems for Fortune 500 companies."
        keywords="technology consulting, strategy consulting, digital transformation, AI automation, enterprise architecture, DevOps, MLOps, AIOps, DataOps, XOPS360, cloud consulting, machine learning consulting, enterprise systems, IT consulting, Deloitte alternative, Accenture alternative"
        canonicalUrl="https://axiomio.com/"
        ogType="website"
        structuredData={homepageSchema}
      />
      <Navbar />
      
      {/* Hero Section */}
      <header ref={heroRef} className="relative min-h-[100vh] flex items-center pt-20" role="banner">
        {/* Background - Clean and professional */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-background" />
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
        </div>
        
        <motion.div 
          className="container relative z-10 mx-auto px-6 lg:px-8 py-20 lg:py-28"
          style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
        >
          <div className="max-w-5xl mx-auto">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 flex justify-center lg:justify-start"
            >
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                <Sparkles className="w-3.5 h-3.5" />
                Powered by XOPS360
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h1 
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight mb-6 text-center lg:text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              The future of{" "}
              <span className="text-primary">intelligent</span>
              <br />
              operations
            </motion.h1>
            
            {/* Subheadline */}
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-10 text-center lg:text-left mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Axiomio's XOPS360 platform unifies DevOps, DataOps, SecOps, and AIOps into a single 
              intelligent ecosystem—transforming operational complexity into competitive advantage.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Request a Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/xops360">
                  Explore XOPS360
                </Link>
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              className="mt-16 pt-10 border-t border-border/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground/60 mb-6 text-center lg:text-left">
                Trusted by enterprise leaders
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-x-10 gap-y-4">
                {["Fortune 500", "Tech Giants", "Financial Leaders", "Global Enterprises"].map((name, i) => (
                  <motion.span
                    key={name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 + i * 0.1 }}
                    className="text-muted-foreground/50 font-medium text-sm"
                  >
                    {name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </header>

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

      {/* Mountain Visualization Section */}
      <MountainVisualization />

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

      {/* Why Axiomio Section - Interactive Card Stack */}
      <DifferentiatorsStack />

      {/* CTA Section */}
      <section className="py-24 lg:py-32 relative overflow-hidden bg-muted/30">
        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <motion.div 
            className="relative max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Card */}
            <div className="bg-background rounded-2xl p-10 lg:p-16 text-center border border-border shadow-lg relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-primary/5 to-transparent" />
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-primary/5 to-transparent" />
              
              <div className="relative z-10">
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-6"
                >
                  <span className="w-6 h-px bg-primary" />
                  Start Your Transformation
                  <span className="w-6 h-px bg-primary" />
                </motion.span>
                
                <motion.h2 
                  className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Ready to experience <span className="text-primary">XOPS360</span>?
                </motion.h2>
                <motion.p 
                  className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Let's discuss how Axiomio and XOPS360 can help you navigate complexity, 
                  accelerate transformation, and achieve outcomes that matter.
                </motion.p>
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Button variant="premium" size="xl" asChild>
                    <Link to="/contact">
                      Schedule a Demo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="hero-outline" size="xl" asChild>
                    <Link to="/approach">
                      See Our Approach
                    </Link>
                  </Button>
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
