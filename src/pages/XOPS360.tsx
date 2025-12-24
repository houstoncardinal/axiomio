import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Zap,
  TrendingUp,
  Users,
  Shield,
  Clock,
  DollarSign,
  Layers,
  BarChart3,
  Workflow,
  Globe2,
  CheckCircle2,
  Play,
  Sparkles,
  Target,
  Bot,
  Building2,
  Server,
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { AnimatedGradientText } from '@/components/AnimatedGradientText';
import { MagneticButton } from '@/components/MagneticButton';
import { PremiumCard } from '@/components/PremiumCard';
import { GlowingOrb } from '@/components/GlowingOrb';
import { SEOHead } from '@/components/SEOHead';
import { xops360PageSchema } from '@/lib/seo-schemas-enhanced';

const capabilities = [
  {
    icon: Workflow,
    title: 'Unified CloudOps',
    description: 'Consolidate DevOps, DataOps, MLOps, and AIOps into a single intelligent automation layer.',
  },
  {
    icon: Bot,
    title: 'AI-Powered Remediation',
    description: 'Self-healing systems that detect, diagnose, and resolve issues before they impact users.',
  },
  {
    icon: DollarSign,
    title: 'FinOps Intelligence',
    description: 'Real-time cloud cost optimization with actionable recommendations that reduce spend by 30-50%.',
  },
  {
    icon: Shield,
    title: 'SecOps Automation',
    description: 'Continuous compliance monitoring and automated security guardrails across multi-cloud.',
  },
  {
    icon: BarChart3,
    title: 'Predictive Analytics',
    description: 'ML-driven insights that forecast capacity, performance, and cost trends.',
  },
  {
    icon: Layers,
    title: 'Seamless Integrations',
    description: 'Connect to various tools such as AWS, Azure, Microsoft 365, and other integrations.',
  },
];

const mspBenefits = [
  { metric: '2-3x', label: 'More clients per engineer' },
  { metric: '40%', label: 'Higher gross margins' },
  { metric: '80%', label: 'Reduction in repetitive tickets' },
  { metric: '99.9%', label: 'SLA compliance rate' },
];

const enterpriseBenefits = [
  { metric: '60%', label: 'Fewer incidents & alerts' },
  { metric: '75%', label: 'Faster MTTR' },
  { metric: '35%', label: 'Cloud cost reduction' },
  { metric: '10x', label: 'Developer velocity' },
];

const testimonials = [
  {
    quote: "XOPS360 transformed our managed services business. We've scaled from 15 to 45 clients without adding engineers.",
    author: 'Head of Cloud Operations',
    company: 'Leading MSP, North America',
    metrics: '3x client capacity',
  },
  {
    quote: "Our SRE team went from firefighting to proactive optimization. Incidents dropped 70% in the first quarter.",
    author: 'VP of Engineering',
    company: 'Series C FinTech',
    metrics: '70% fewer incidents',
  },
];

const useCases = [
  {
    icon: Building2,
    title: 'For Managed Service Providers',
    description: 'White-label or co-branded platform inside your managed services bundles. Scale clients without scaling headcount.',
    benefits: ['Productize your services', 'Automate runbooks & tickets', 'Improve margins per client', 'Differentiate beyond "24x7 support"'],
  },
  {
    icon: Server,
    title: 'For Cloud-Native Enterprises',
    description: 'Central CloudOps automation layer for internal SRE/DevOps/Platform teams. Reduce toil, control costs, strengthen compliance.',
    benefits: ['Reduce SRE burnout', 'Optimize cloud spend', 'Enforce guardrails without slowing devs', 'Hire less, automate more'],
  },
];

export default function XOPS360() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <SEOHead
        title="XOPS360 | Enterprise CloudOps Automation Platform | Axiomio"
        description="XOPS360 unifies DevOps, DataOps, MLOps & AIOps into one intelligent automation platform. Reduce incidents by 60%, cut cloud costs by 35%, and scale operations without scaling headcount."
        keywords="XOPS360, CloudOps automation, DevOps platform, AIOps, MLOps, DataOps, cloud automation, SRE automation, incident management, cloud cost optimization, FinOps, SecOps, managed services platform"
        canonicalUrl="https://axiomio.com/xops360"
        structuredData={xops360PageSchema}
      />
      <Navbar />

      {/* Hero Section */}
      <header ref={heroRef} className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden">
        {/* Softer Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-background" />
          <div className="absolute top-0 left-1/4 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-primary/8 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-secondary/6 rounded-full blur-[80px]" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 lg:py-24">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Left content */}
              <div className="text-center lg:text-left order-2 lg:order-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-4 md:mb-6 flex justify-center lg:justify-start"
                >
                  <span className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold uppercase tracking-[0.15em] md:tracking-[0.2em] text-primary px-4 py-2 rounded-full border border-primary/30 bg-primary/10">
                    <motion.span
                      className="w-2 h-2 bg-primary rounded-full"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    Flagship Platform
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 md:mb-6 leading-[1.05] tracking-tight"
                >
                  <AnimatedGradientText>XOPS360</AnimatedGradientText>
                  <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-3 md:mt-4 text-foreground font-medium tracking-tight">
                    The CloudOps Automation Engine
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0"
                >
                  Turn your runbooks and repetitive tickets into <span className="font-semibold text-foreground">reusable automations.</span>
                  <span className="block mt-2 text-secondary font-semibold">Scale operations 2-3x without scaling engineers.</span>
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start"
                >
                  <MagneticButton>
                    <Button variant="hero" size="xl" asChild>
                      <a href="https://xops360.ai" target="_blank" rel="noopener noreferrer">
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                      </a>
                    </Button>
                  </MagneticButton>
                  <MagneticButton>
                    <Button variant="hero-outline" size="xl" className="gap-2" asChild>
                      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                        <Play className="w-4 h-4 md:w-5 md:h-5" />
                        Watch Overview
                      </a>
                    </Button>
                  </MagneticButton>
                </motion.div>
              </div>

              {/* Right visual - Responsive CloudOps Visualization */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="relative w-full order-1 lg:order-2"
              >
                <div className="relative w-full max-w-[320px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px] aspect-square mx-auto">
                  {/* Central XOPS360 Hub */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-2xl bg-gradient-to-br from-primary via-blue-500 to-secondary p-[2px] shadow-2xl z-10"
                    animate={{
                      boxShadow: [
                        '0 10px 40px hsl(var(--primary) / 0.3)',
                        '0 15px 60px hsl(var(--primary) / 0.4)',
                        '0 10px 40px hsl(var(--primary) / 0.3)',
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <div className="w-full h-full rounded-xl bg-background/95 backdrop-blur-sm flex flex-col items-center justify-center">
                      <Workflow className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-primary mb-1 md:mb-2" />
                      <span className="font-heading text-sm sm:text-base md:text-lg font-bold text-gradient">XOPS360</span>
                      <span className="text-[8px] sm:text-[9px] md:text-[10px] text-muted-foreground uppercase tracking-wider">Automation Hub</span>
                    </div>
                  </motion.div>

                  {/* Ops Platform Nodes - Responsive positioning */}
                  {[
                    { label: 'DevOps', icon: Workflow, color: 'from-blue-500 to-blue-600', pos: 'top-[5%] left-1/2 -translate-x-1/2' },
                    { label: 'DataOps', icon: BarChart3, color: 'from-purple-500 to-purple-600', pos: 'top-[25%] right-[5%]' },
                    { label: 'MLOps', icon: Bot, color: 'from-pink-500 to-pink-600', pos: 'bottom-[25%] right-[5%]' },
                    { label: 'AIOps', icon: Zap, color: 'from-orange-500 to-orange-600', pos: 'bottom-[5%] left-1/2 -translate-x-1/2' },
                    { label: 'FinOps', icon: DollarSign, color: 'from-green-500 to-green-600', pos: 'bottom-[25%] left-[5%]' },
                    { label: 'SecOps', icon: Shield, color: 'from-red-500 to-red-600', pos: 'top-[25%] left-[5%]' },
                  ].map((ops, i) => {
                    const IconComponent = ops.icon;
                    return (
                      <motion.div
                        key={ops.label}
                        className={`absolute ${ops.pos}`}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                      >
                        {/* Pulsing ring */}
                        <motion.div
                          className="absolute inset-0 -m-2 rounded-xl border-2 border-primary/20"
                          animate={{
                            scale: [1, 1.15, 1],
                            opacity: [0.2, 0.4, 0.2],
                          }}
                          transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
                        />

                        <div 
                          className={`relative w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-xl bg-gradient-to-br p-[2px] shadow-lg ${ops.color}`}
                        >
                          <div className="w-full h-full rounded-[10px] bg-background/95 backdrop-blur-sm flex flex-col items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50" />
                            <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 relative z-10 text-foreground mb-0.5 md:mb-1" />
                            <span className="text-[8px] sm:text-[9px] md:text-[10px] font-bold relative z-10 text-foreground">{ops.label}</span>
                          </div>
                        </div>

                        {/* Status indicator */}
                        <motion.div
                          className="absolute -top-0.5 -right-0.5 md:-top-1 md:-right-1 w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 rounded-full bg-green-500 border-2 border-background flex items-center justify-center"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                        >
                          <CheckCircle2 className="w-2 h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 text-white" />
                        </motion.div>
                      </motion.div>
                    );
                  })}

                  {/* Animated Connection Lines - Responsive SVG */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                    <defs>
                      <linearGradient id="lineGradientXOPS" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                        <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                      </linearGradient>
                    </defs>

                    {/* Connection paths from center to each ops node */}
                    {[
                      { x1: 50, y1: 50, x2: 50, y2: 12 },
                      { x1: 50, y1: 50, x2: 88, y2: 32 },
                      { x1: 50, y1: 50, x2: 88, y2: 68 },
                      { x1: 50, y1: 50, x2: 50, y2: 88 },
                      { x1: 50, y1: 50, x2: 12, y2: 68 },
                      { x1: 50, y1: 50, x2: 12, y2: 32 },
                    ].map((path, i) => (
                      <motion.line
                        key={i}
                        x1={path.x1}
                        y1={path.y1}
                        x2={path.x2}
                        y2={path.y2}
                        stroke="url(#lineGradientXOPS)"
                        strokeWidth="0.5"
                        strokeDasharray="2,2"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                          pathLength: 1,
                          opacity: 1,
                          strokeDashoffset: [0, -4]
                        }}
                        transition={{
                          pathLength: { delay: 0.8 + i * 0.1, duration: 0.8 },
                          opacity: { delay: 0.8 + i * 0.1, duration: 0.4 },
                          strokeDashoffset: { duration: 1.5, repeat: Infinity, ease: 'linear' }
                        }}
                      />
                    ))}
                  </svg>

                  {/* Floating metrics badges - Hidden on small mobile */}
                  <motion.div
                    className="absolute top-[2%] right-[2%] hidden sm:block"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                  >
                    <div className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-green-500/10 backdrop-blur-md border border-green-500/30 shadow-lg">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-[10px] md:text-xs font-semibold text-green-500">Automated</span>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute bottom-[2%] left-[2%] hidden sm:block"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 }}
                  >
                    <div className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-blue-500/10 backdrop-blur-md border border-blue-500/30 shadow-lg">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-2.5 h-2.5 md:w-3 md:h-3 text-blue-500" />
                        <span className="text-[10px] md:text-xs font-semibold text-blue-500">60% ↓ Incidents</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </header>

      {/* Metrics Bar */}
      <section className="py-12 border-y border-border/30 bg-muted/20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '60%', label: 'Fewer Incidents' },
              { value: '35%', label: 'Cost Reduction' },
              { value: '75%', label: 'Faster MTTR' },
              { value: '2-3x', label: 'Scale Factor' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="font-heading text-4xl md:text-5xl font-bold text-gradient mb-2">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-28 lg:py-36 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-4">
              Built For
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Two Paths to <AnimatedGradientText>Operational Excellence</AnimatedGradientText>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <PremiumCard className="h-full">
                  <div className="p-8 lg:p-10">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 border border-primary/20">
                      <useCase.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-foreground mb-4">{useCase.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{useCase.description}</p>
                    <ul className="space-y-3">
                      {useCase.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-3 text-foreground/90">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                          {benefit}
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

      {/* Capabilities */}
      <section className="py-28 lg:py-36 relative bg-muted/10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-4">
              Core Capabilities
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Everything You Need to <AnimatedGradientText>Automate CloudOps</AnimatedGradientText>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, index) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group p-8 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit mb-5 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                  <cap.icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {cap.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{cap.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Comparison */}
      <section className="py-28 lg:py-36 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-4">
              Proven Results
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Measurable <AnimatedGradientText>Business Impact</AnimatedGradientText>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* MSP Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-premium rounded-2xl p-8 border border-border/30"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground">For MSPs</h3>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {mspBenefits.map((benefit) => (
                  <div key={benefit.label}>
                    <p className="font-heading text-3xl font-bold text-gradient mb-1">{benefit.metric}</p>
                    <p className="text-muted-foreground text-sm">{benefit.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Enterprise Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-premium rounded-2xl p-8 border border-border/30"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Server className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground">For Enterprises</h3>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {enterpriseBenefits.map((benefit) => (
                  <div key={benefit.label}>
                    <p className="font-heading text-3xl font-bold text-gradient mb-1">{benefit.metric}</p>
                    <p className="text-muted-foreground text-sm">{benefit.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 lg:py-36 relative bg-muted/10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <PremiumCard className="h-full">
                  <div className="p-8 lg:p-10">
                    <div className="flex items-center gap-3 mb-6">
                      <Sparkles className="w-6 h-6 text-primary" />
                      <span className="text-sm font-semibold text-primary">{testimonial.metrics}</span>
                    </div>
                    <blockquote className="text-xl text-foreground leading-relaxed mb-8">
                      "{testimonial.quote}"
                    </blockquote>
                    <div>
                      <p className="font-medium text-foreground">{testimonial.author}</p>
                      <p className="text-muted-foreground text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                </PremiumCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 lg:py-36 relative">
        <div className="absolute inset-0">
          <GlowingOrb size={600} color="primary" className="top-1/2 left-1/4 -translate-y-1/2" delay={0} />
          <GlowingOrb size={500} color="secondary" className="top-1/2 right-1/4 -translate-y-1/2" delay={2} />
        </div>
        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Ready to Transform Your <AnimatedGradientText>CloudOps?</AnimatedGradientText>
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join the leading MSPs and enterprises who've automated their way to better margins, 
              fewer incidents, and happier teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                  <Link to="/contact">Talk to Sales</Link>
                </Button>
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
