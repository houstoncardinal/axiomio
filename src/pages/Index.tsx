import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Cpu, LineChart, Zap, Sparkles, ChevronRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PremiumCard } from "@/components/PremiumCard";
import { CounterBadge } from "@/components/CounterBadge";
import { SectionHeader } from "@/components/SectionHeader";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CapabilitiesGrid } from "@/components/CapabilitiesGrid";
import { MetricsShowcase } from "@/components/MetricsShowcase";
import { DifferentiatorsStack } from "@/components/DifferentiatorsStack";
import { SEOHead } from "@/components/SEOHead";
import { homepageSchema } from "@/lib/seo-schemas-enhanced";
import { MagneticButton } from "@/components/MagneticButton";
import { useInViewOnce } from "@/hooks/useInViewOnce";
import { ClientLogoMarquee } from "@/components/ClientLogoMarquee";
import { TechnologyPartnersSection } from "@/components/TechnologyPartnersSection";
import { XeroTrustBanner } from "@/components/XeroTrustBanner";
import { CertificationsSection } from "@/components/CertificationsSection";
import { lazy, Suspense, useRef } from "react";
const LazyXOPS360Section = lazy(() => import("@/components/XOPS360Section").then(m => ({
  default: m.XOPS360Section
})));
const services = [{
  icon: LineChart,
  title: "Strategy & Advisory",
  description: "Executive-level strategic guidance that transforms vision into measurable outcomes through systematic analysis.",
  gradient: "from-primary/20 to-blue-500/10",
  link: "/services/strategy-advisory"
}, {
  icon: Cpu,
  title: "Technology & Systems",
  description: "Architect and implement enterprise-grade systems designed for scale, reliability, and operational excellence.",
  gradient: "from-blue-500/20 to-violet-500/10",
  link: "/services/technology-systems"
}, {
  icon: Brain,
  title: "AI Automation with Cloud DevOps",
  description: "AI workforce for DevOps, SRE, and cloud operations with intelligent DevSecOps automation including SAST & SCA.",
  gradient: "from-violet-500/20 to-secondary/10",
  link: "/services/ai-automation"
}, {
  icon: Shield,
  title: "Cyber Security Services",
  description: "End-to-end cybersecurity: cloud security, network security, threat detection with AI-driven protection.",
  gradient: "from-red-500/20 to-orange-500/10",
  link: "/services/cybersecurity"
}];
const stats = [{
  value: 100,
  prefix: "$",
  suffix: "M+",
  label: "Customers"
}, {
  value: 150,
  suffix: "+",
  label: "Clients"
}, {
  value: 98,
  suffix: "%",
  label: "Client Retention"
}, {
  value: 15,
  suffix: "+",
  label: "Industries Served"
}];
export default function Index() {
  const heroRef = useRef<HTMLDivElement>(null);
  const {
    ref: xopsRef,
    inView: xopsInView
  } = useInViewOnce<HTMLDivElement>("800px");
  return <div className="min-h-screen bg-background overflow-hidden">
      <SEOHead title="Axiomio | Enterprise Technology & Strategy Consulting | XOPS360 Platform" description="Axiomio is a global technology and strategy consulting firm. Our XOPS360 platform unifies DevOps, SecOps, CloudOps & AI Agents. Digital transformation, AI automation & enterprise systems for Fortune 500 companies." keywords="technology consulting, strategy consulting, digital transformation, AI automation, enterprise architecture, DevOps, SecOps, CloudOps, AI Agents, XOPS360, cloud consulting, machine learning consulting, enterprise systems, IT consulting, Deloitte alternative, Accenture alternative" canonicalUrl="https://axiomio.com/" ogType="website" structuredData={homepageSchema} />
      <Navbar />
      
      {/* Hero Section */}
      <header ref={heroRef} className="relative min-h-[100vh] flex items-center pt-20" role="banner">
        {/* Background - Clean and professional */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-background" />
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
        </div>
        
        <div className="container relative z-10 mx-auto px-6 lg:px-8 lg:py-28 py-[50px]">
          <div className="max-w-5xl mx-auto">
            {/* Badge */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} className="mb-8 flex flex-wrap gap-3 justify-center lg:justify-start">
              <Link to="/xops360" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/20 hover:bg-primary/20 transition-colors">
                <Sparkles className="w-3.5 h-3.5" />
                XOPS360
              </Link>
              <Link to="/xerotrust" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-secondary bg-secondary/10 px-4 py-2 rounded-full border border-secondary/20 hover:bg-secondary/20 transition-colors">
                <Shield className="w-3.5 h-3.5" />
                XeroTrust
              </Link>
            </motion.div>

            {/* Main headline */}
            <motion.h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] tracking-tight mb-6 text-center lg:text-left" initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }}>
              <span className="block sm:inline">Your innovation-led </span>
              <span className="text-primary whitespace-nowrap">modern MSP</span>
              <br className="hidden sm:block" />
              <span className="block sm:inline"> powered by an AI workforce</span>
            </motion.h1>
            
            {/* Subheadline */}
            <motion.p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-10 text-center lg:text-left mx-auto lg:mx-0" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.4
          }}>
              Axiomio's XOPS360 platform unifies DevOps, SecOps, CloudOps, and AI Agents into a single 
              intelligent ecosystem—transforming operational complexity into competitive advantage.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.6
          }}>
              <MagneticButton>
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contact">
                    Request a Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button variant="hero-outline" size="xl" asChild>
                  <Link to="/xops360">
                    Explore XOPS360
                  </Link>
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button variant="outline" size="xl" className="border-secondary/30 text-secondary hover:bg-secondary/10" asChild>
                  <Link to="/xerotrust">
                    <Shield className="mr-2 h-4 w-4" />
                    XeroTrust Security
                  </Link>
                </Button>
              </MagneticButton>
            </motion.div>

            {/* Trust indicators */}
            <motion.div className="mt-16 pt-10 border-t border-border/50" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 1,
            duration: 0.8
          }}>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground/60 mb-6 text-center lg:text-left">
                Trusted by enterprise leaders
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-x-10 gap-y-4">
                {["Fortune 500", "Tech Giants", "Financial Leaders", "Global Enterprises"].map((name, i) => <motion.span key={name} initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} transition={{
                delay: 1.2 + i * 0.1
              }} className="text-muted-foreground/50 font-medium text-sm">
                    {name}
                  </motion.span>)}
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-16 lg:py-20 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => <CounterBadge key={stat.label} value={stat.value} suffix={stat.suffix} prefix={stat.label === "Value Delivered" ? "$" : ""} label={stat.label} duration={2 + index * 0.3} />)}
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <TechnologyPartnersSection />

      {/* XOPS360 Feature Section (lazy-mounted) */}
      <div ref={xopsRef}>
        {xopsInView ? <Suspense fallback={<div className="py-20 lg:py-24 bg-muted/10 animate-pulse" aria-label="Loading section" />}>
            <LazyXOPS360Section />
          </Suspense> : <div className="py-20 lg:py-24 bg-muted/10" aria-hidden="true" />}
      </div>

      {/* Metrics Showcase */}
      <MetricsShowcase />

      {/* XeroTrust Banner */}
      <XeroTrustBanner />

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
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <SectionHeader label="Our Services" title="Comprehensive enterprise solutions" description="Beyond XOPS360, we deliver end-to-end capabilities that address the full spectrum of digital transformation." />
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mt-20">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1]
                }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <Link to={service.link}>
                  <PremiumCard className="h-full group">
                    <div className={`p-8 lg:p-10 bg-gradient-to-br ${service.gradient} relative overflow-hidden`}>
                      {/* Animated background glow on hover */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      />
                      
                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-6">
                          <motion.div 
                            className="p-3 rounded-xl bg-primary/10 text-primary border border-primary/20"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            <service.icon className="h-6 w-6" />
                          </motion.div>
                          <motion.div
                            initial={{ x: -10, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: index * 0.15 + 0.3 }}
                            viewport={{ once: true }}
                          >
                            <ChevronRight className="h-5 w-5 text-muted-foreground/50 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                          </motion.div>
                        </div>
                        <h3 className="font-heading text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </PremiumCard>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logo Marquee */}
      <ClientLogoMarquee />

      {/* Certifications Section */}
      <CertificationsSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Why Axiomio Section - Interactive Card Stack */}
      <DifferentiatorsStack />

      {/* CTA Section */}
      <section className="py-24 lg:py-32 relative overflow-hidden bg-muted/30">
        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <motion.div className="relative max-w-4xl mx-auto" initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }}>
            {/* Card */}
            <div className="bg-background rounded-2xl p-10 lg:p-16 text-center border border-border shadow-lg relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-primary/5 to-transparent" />
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-primary/5 to-transparent" />
              
              <div className="relative z-10">
                <motion.span initial={{
                opacity: 0
              }} whileInView={{
                opacity: 1
              }} viewport={{
                once: true
              }} className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-6">
                  <span className="w-6 h-px bg-primary" />
                  Start Your Transformation
                  <span className="w-6 h-px bg-primary" />
                </motion.span>
                
                <motion.h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6" initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                delay: 0.2,
                duration: 0.6
              }} viewport={{
                once: true
              }}>
                  Ready to experience <span className="text-primary">XOPS360</span>?
                </motion.h2>
                <motion.p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10" initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                delay: 0.3,
                duration: 0.6
              }} viewport={{
                once: true
              }}>
                  Let's discuss how Axiomio and XOPS360 can help you navigate complexity, 
                  accelerate transformation, and achieve outcomes that matter.
                </motion.p>
                <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                delay: 0.4,
                duration: 0.6
              }} viewport={{
                once: true
              }}>
                  <MagneticButton>
                    <Button variant="hero" size="xl" asChild>
                      <Link to="/contact">
                        Schedule a Demo
                        <ArrowRight className="ml-2 h-4 w-4" />
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
    </div>;
}