import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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
import { ParticleField } from '@/components/ParticleField';
import { SEOHead } from '@/components/SEOHead';
import { xops360Schema } from '@/lib/seo-schemas';

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
    title: 'Universal Integration',
    description: 'Connect 200+ tools including AWS, Azure, GCP, Kubernetes, Terraform, and CI/CD pipelines.',
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
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <SEOHead
        title="XOPS360 | Enterprise CloudOps Automation Platform | Axiomio"
        description="XOPS360 unifies DevOps, DataOps, MLOps & AIOps into one intelligent automation platform. Reduce incidents by 60%, cut cloud costs by 35%, and scale operations without scaling headcount."
        keywords="XOPS360, CloudOps automation, DevOps platform, AIOps, MLOps, DataOps, cloud automation, SRE automation, incident management, cloud cost optimization, FinOps, SecOps, managed services platform"
        canonicalUrl="https://axiomio.com/xops360"
        structuredData={xops360Schema}
      />
      <Navbar />

      {/* Hero Section */}
      <header ref={heroRef} className="relative min-h-[100vh] flex items-center pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-hero-gradient" />
          <GlowingOrb size={900} color="primary" className="-top-1/4 -left-1/4" delay={0} />
          <GlowingOrb size={700} color="secondary" className="top-1/3 -right-1/4" delay={2} />
          <ParticleField />
        </div>

        <motion.div
          className="container relative z-10 mx-auto px-6 lg:px-8 py-24"
          style={{ opacity: heroOpacity, scale: heroScale }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left content */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6"
                >
                  <span className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary px-5 py-2 rounded-full border border-primary/30 bg-primary/10">
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
                  className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-[1.05]"
                >
                  <AnimatedGradientText>XOPS360</AnimatedGradientText>
                  <span className="block text-3xl md:text-4xl lg:text-5xl mt-4 text-foreground/90">
                    The CloudOps Automation Engine
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl text-muted-foreground leading-relaxed mb-8"
                >
                  Turn your runbooks and repetitive tickets into reusable automations. 
                  Scale operations 2-3x without scaling engineers—while improving SLAs and margins.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <MagneticButton>
                    <Button variant="hero" size="xl" asChild>
                      <Link to="/contact">
                        Request Demo
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </MagneticButton>
                  <MagneticButton>
                    <Button variant="hero-outline" size="xl" className="gap-2">
                      <Play className="w-5 h-5" />
                      Watch Overview
                    </Button>
                  </MagneticButton>
                </motion.div>
              </div>

              {/* Right visual */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="relative"
              >
                <div className="relative aspect-square max-w-lg mx-auto">
                  {/* Central hub */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="w-40 h-40 rounded-full bg-gradient-to-br from-primary via-blue-500 to-secondary flex items-center justify-center shadow-glow-intense"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                    >
                      <div className="w-32 h-32 rounded-full bg-background/90 flex items-center justify-center">
                        <span className="font-heading text-3xl font-bold text-gradient">X360</span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Orbiting rings */}
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="absolute inset-0 rounded-full border border-primary/20"
                      style={{
                        inset: `${i * 40}px`,
                      }}
                      animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                      transition={{ duration: 20 + i * 5, repeat: Infinity, ease: 'linear' }}
                    >
                      {/* Orbit dots */}
                      {[0, 90, 180, 270].map((angle) => (
                        <div
                          key={angle}
                          className="absolute w-3 h-3 rounded-full bg-primary/60"
                          style={{
                            top: '50%',
                            left: '50%',
                            transform: `rotate(${angle}deg) translateX(${140 - i * 40}px) translateY(-50%)`,
                          }}
                        />
                      ))}
                    </motion.div>
                  ))}

                  {/* Labels */}
                  {['DevOps', 'DataOps', 'MLOps', 'AIOps', 'FinOps', 'SecOps'].map((label, i) => (
                    <motion.div
                      key={label}
                      className="absolute px-3 py-1.5 rounded-full bg-muted/80 backdrop-blur-sm border border-border text-sm font-medium text-foreground"
                      style={{
                        top: `${15 + Math.sin((i * Math.PI * 2) / 6) * 40}%`,
                        left: `${50 + Math.cos((i * Math.PI * 2) / 6) * 45}%`,
                        transform: 'translate(-50%, -50%)',
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                    >
                      {label}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
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
