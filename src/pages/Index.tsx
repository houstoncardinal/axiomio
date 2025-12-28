import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ChevronRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PremiumCard } from "@/components/PremiumCard";
import { CounterBadge } from "@/components/CounterBadge";
import { SectionHeader } from "@/components/SectionHeader";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { MetricsShowcase } from "@/components/MetricsShowcase";
import { SEOHead } from "@/components/SEOHead";
import { homepageSchema } from "@/lib/seo-schemas-enhanced";
import { MagneticButton } from "@/components/MagneticButton";
import { useInViewOnce } from "@/hooks/useInViewOnce";
import { ClientLogoMarquee } from "@/components/ClientLogoMarquee";
import { TechnologyPartnersSection } from "@/components/TechnologyPartnersSection";
import { XeroTrustBanner } from "@/components/XeroTrustBanner";
import { CertificationsSection } from "@/components/CertificationsSection";
import { FeaturedInSection } from "@/components/FeaturedInSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { CalendlyWidget } from "@/components/CalendlyWidget";

import { lazy, Suspense, useRef } from "react";
import { getFeaturedServices } from "@/config/services.config";

const LazyXops360Section = lazy(() => import("@/components/XOPS360Section").then(m => ({
  default: m.Xops360Section
})));

const services = getFeaturedServices().map(cat => ({
  icon: cat.icon,
  title: cat.title,
  description: cat.description,
  gradient: `${cat.color}/20 to-primary/10`,
  link: cat.route
}));
const stats = [{
  value: 100,
  prefix: "$",
  suffix: "M+",
  label: "VALUE DELIVERED"
}, {
  value: 98,
  suffix: "%",
  label: "CLIENT RETENTION"
}];
export default function Index() {
  const heroRef = useRef<HTMLDivElement>(null);
  const {
    ref: xopsRef,
    inView: xopsInView
  } = useInViewOnce<HTMLDivElement>("800px");
  return <div className="min-h-screen bg-background overflow-hidden">
      <SEOHead title="Axiomio | Enterprise Technology & Strategy Consulting | Xops360 Platform" description="AXIOMIO is a global technology and strategy consulting firm. Our Xops360 platform unifies DevOps, SecOps, CloudOps & AI Agents. Digital transformation, AI automation & enterprise systems for Fortune 500 companies." keywords="technology consulting, strategy consulting, digital transformation, AI automation, enterprise architecture, DevOps, SecOps, CloudOps, AI Agents, Xops360, cloud consulting, machine learning consulting, enterprise systems, IT consulting, Deloitte alternative, Accenture alternative" canonicalUrl="https://axiomio.com/" ogType="website" structuredData={homepageSchema} />
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
              <Link to="/xops360" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-primary bg-primary/10 px-4 py-2 rounded-lg border border-primary/20 hover:bg-primary/20 transition-colors">
                <Sparkles className="w-3.5 h-3.5" />
                Xops360
              </Link>
              <Link to="/xerotrust" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-secondary bg-secondary/10 px-4 py-2 rounded-lg border border-secondary/20 hover:bg-secondary/20 transition-colors">
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
              Axiomio's Xops360 platform unifies DevOps, SecOps, CloudOps, and AI Agents into a single 
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
                    Explore Xops360
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
      <section className="-mt-8 pb-12 lg:pb-16 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Elegant divider */}
            <div className="flex items-center justify-center mb-8">
              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent flex-1" />
              <div className="px-6">
                <div className="w-2 h-2 rounded-full bg-primary/30" />
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent flex-1" />
            </div>

            {/* Premium stats layout */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 lg:gap-12">
              {stats.map((stat, index) => (
                <div key={stat.label} className="flex-1 max-w-xs">
                  <div className="text-center group">
                    {/* Subtle background glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                    <CounterBadge
                      value={stat.value}
                      suffix={stat.suffix}
                      prefix={stat.prefix || ""}
                      label={stat.label}
                      duration={2 + index * 0.3}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom accent */}
            <div className="flex items-center justify-center mt-8">
              <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent flex-1 max-w-xs" />
            </div>
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <TechnologyPartnersSection />

      {/* Xops360 Feature Section (lazy-mounted) */}
      <div ref={xopsRef}>
        {xopsInView ? <Suspense fallback={<div className="py-20 lg:py-24 bg-muted/10 animate-pulse" aria-label="Loading section" />}>
            <LazyXops360Section />
          </Suspense> : <div className="py-20 lg:py-24 bg-muted/10" aria-hidden="true" />}
      </div>

      {/* Metrics Showcase */}
      <MetricsShowcase />

      {/* Psychological Enhancement - Before vs After */}
      <section className="py-12 lg:py-16 relative overflow-hidden bg-gradient-to-b from-background via-muted/5 to-background">
        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          {/* Ultra-Compact Header */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-8"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 mb-4">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-primary">Transformation</span>
              <ArrowRight className="w-3 h-3 text-primary" />
            </div>
            <h2 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-2">
              From Chaos to Strategic Control
            </h2>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              The measurable transformation Xops360 delivers
            </p>
          </motion.div>

          {/* Ultra-Compact Before/After Cards */}
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
              {/* Before Xops360 - Ultra Compact */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative p-5 rounded-lg bg-card border border-red-500/20 shadow-lg shadow-red-500/5 hover:shadow-xl hover:shadow-red-500/10 transition-all duration-300 overflow-hidden">
                  {/* Light yellow accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-300/60 via-yellow-400/40 to-yellow-300/60" />

                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-6 h-6 rounded-md bg-red-500/15 flex items-center justify-center shadow-sm">
                      <div className="w-2 h-2 rounded-full bg-red-500" />
                    </div>
                    <h3 className="font-heading text-base font-semibold text-foreground">Before Xops360</h3>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-start gap-2.5">
                      <div className="w-1 h-1 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                      <p className="text-xs text-muted-foreground leading-tight">Manual firefighting, siloed tools, fragile pipelines</p>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="w-1 h-1 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                      <p className="text-xs text-muted-foreground leading-tight">Reactive alerts, constant downtime, budget overruns</p>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="w-1 h-1 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                      <p className="text-xs text-muted-foreground leading-tight">Executive frustration, team burnout, missed deadlines</p>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-md bg-red-500/5 border border-red-500/15 shadow-inner">
                    <p className="text-[10px] text-red-600/90 italic font-medium leading-tight">
                      "Every deployment felt like rolling the dice..."
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* After Xops360 - Ultra Compact */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative p-5 rounded-lg bg-card border border-green-500/20 shadow-lg shadow-green-500/5 hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300 overflow-hidden">
                  {/* Light yellow accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-300/60 via-yellow-400/40 to-yellow-300/60" />

                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-6 h-6 rounded-md bg-green-500/15 flex items-center justify-center shadow-sm">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                    </div>
                    <h3 className="font-heading text-base font-semibold text-foreground">After Xops360</h3>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-start gap-2.5">
                      <div className="w-1 h-1 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                      <p className="text-xs text-muted-foreground leading-tight">Self-healing systems, predictable releases, executive visibility</p>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="w-1 h-1 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                      <p className="text-xs text-muted-foreground leading-tight">Proactive insights, 99.99% uptime, cost optimization</p>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="w-1 h-1 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                      <p className="text-xs text-muted-foreground leading-tight">Strategic focus, team empowerment, business acceleration</p>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-md bg-green-500/5 border border-green-500/15 shadow-inner">
                    <p className="text-[10px] text-green-600/90 italic font-medium leading-tight">
                      "Finally, operations that work for us, not against us..."
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Powerful CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              viewport={{ once: true }}
              className="flex justify-center mt-8"
            >
              <MagneticButton>
                <Button variant="hero" size="lg" className="px-6 py-3 text-sm" asChild>
                  <Link to="/xops360">
                    See How Enterprises Use Xops360
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </MagneticButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* XeroTrust Banner */}
      <XeroTrustBanner />

      {/* Process Timeline */}
      <ProcessTimeline />

      {/* Case Studies */}
      <CaseStudiesSection />

      {/* Services Section - Compact */}
      <section className="py-16 lg:py-20 relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <SectionHeader label="Our Services" title="Comprehensive enterprise solutions" description="Beyond Xops360, we deliver end-to-end capabilities that address the full spectrum of digital transformation." />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mt-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                }}
                viewport={{ once: true, margin: "-40px" }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <Link to={service.link}>
                  <PremiumCard className="h-full group">
                    <div className={`p-6 lg:p-7 bg-gradient-to-br ${service.gradient} relative overflow-hidden`}>
                      {/* Animated background glow on hover */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      />

                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-4">
                          <motion.div
                            className="p-2.5 rounded-lg bg-primary/10 text-primary border border-primary/20"
                            whileHover={{ scale: 1.08, rotate: 4 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            <service.icon className="h-5 w-5" />
                          </motion.div>
                          <motion.div
                            initial={{ x: -8, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: index * 0.1 + 0.2 }}
                            viewport={{ once: true }}
                          >
                            <ChevronRight className="h-4 w-4 text-muted-foreground/50 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                          </motion.div>
                        </div>
                        <h3 className="font-heading text-lg md:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
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

      {/* Featured In / Press Section */}
      <FeaturedInSection />

      {/* Calendly Booking */}
      <CalendlyWidget />

      {/* CTA Section */}
      <section className="py-16 lg:py-20 relative overflow-hidden bg-muted/30">
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
            <div className="bg-background rounded-2xl p-8 lg:p-12 text-center border border-border shadow-lg relative overflow-hidden">
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
              }} className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-4">
                  <span className="w-6 h-px bg-primary" />
                  Start Your Transformation
                  <span className="w-6 h-px bg-primary" />
                </motion.span>

                <motion.h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4" initial={{
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
                  Ready to experience <span className="text-primary">Xops360</span>?
                </motion.h2>
                <motion.p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8" initial={{
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
                  Let's discuss how Axiomio and Xops360 can help you navigate complexity, 
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
