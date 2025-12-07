import { Link } from "react-router-dom";
import { ArrowRight, Brain, Cpu, LineChart, Shield, Zap, Target, Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroBackground } from "@/components/HeroBackground";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionHeader } from "@/components/SectionHeader";

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

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <HeroBackground />
        <div className="container relative z-10 mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl">
            <div className="fade-up">
              <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-6">
                Technology & Strategy
              </span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] mb-8 fade-up-delay-1">
              Building systems that{" "}
              <span className="text-gradient">define the future</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mb-12 fade-up-delay-2">
              Axiomio partners with forward-thinking organizations to architect 
              intelligent solutions that scale with ambition and deliver measurable impact.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 fade-up-delay-3">
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
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 fade-up-delay-4">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 lg:py-32 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionHeader
            label="What We Do"
            title="Enterprise solutions designed for lasting impact"
            description="We deliver comprehensive capabilities that address the full spectrum of digital transformation, from strategy through execution."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-16">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Axiomio Section */}
      <section className="py-24 lg:py-32 relative bg-card/50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
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
              
              <Button variant="hero" size="lg" className="mt-8" asChild>
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {differentiators.map((item, index) => (
                <div 
                  key={item.title}
                  className="glass-card rounded-xl p-6 transition-all duration-300 hover:scale-105"
                >
                  <div className="p-2 rounded-lg bg-primary/10 text-primary w-fit mb-4">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h4 className="font-heading font-semibold text-foreground mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px]" />
        </div>
        
        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <div className="glass-card rounded-3xl p-12 lg:p-16 text-center max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to build what's next?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Let's discuss how Axiomio can help you navigate complexity, 
              accelerate transformation, and achieve outcomes that matter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
