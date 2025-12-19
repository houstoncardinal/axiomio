import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Shield,
  Zap,
  Lock,
  Globe2,
  Users,
  CheckCircle2,
  Play,
  Sparkles,
  Brain,
  Server,
  Clock,
  DollarSign,
  BarChart3,
  Eye,
  Fingerprint,
  Network,
  ShieldCheck,
  Activity,
  Bot,
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
import { XeroTrustROICalculator } from '@/components/XeroTrustROICalculator';
import { XeroTrustInteractiveDemo } from '@/components/XeroTrustInteractiveDemo';
import { XeroTrustTestimonials } from '@/components/XeroTrustTestimonials';

const capabilities = [
  {
    icon: Brain,
    title: 'AI-Powered Threat Detection',
    description: 'Machine learning models that detect anomalies and threats in real-time, adapting to your unique environment.',
  },
  {
    icon: Fingerprint,
    title: 'Continuous Authentication',
    description: 'Never trust, always verify. Continuous identity validation throughout every session.',
  },
  {
    icon: Network,
    title: 'Micro-Segmentation',
    description: 'Granular access controls that limit lateral movement and contain breaches automatically.',
  },
  {
    icon: ShieldCheck,
    title: 'Device Trust Scoring',
    description: 'Real-time device posture assessment that blocks compromised endpoints before they connect.',
  },
  {
    icon: Activity,
    title: 'Behavioral Analytics',
    description: 'User and entity behavior analysis that flags suspicious patterns and prevents insider threats.',
  },
];

const pricingTiers = [
  {
    name: 'Starter',
    description: 'For small teams getting started with zero trust',
    price: '$8',
    period: '/user/month',
    features: [
      'Up to 50 users',
      'Single sign-on (SSO)',
      'Device trust basic',
      'Standard support',
      '99.9% SLA',
    ],
    cta: 'Start Free Trial',
    highlighted: false,
  },
  {
    name: 'Business',
    description: 'For growing organizations with advanced needs',
    price: '$15',
    period: '/user/month',
    features: [
      'Unlimited users',
      'Advanced threat detection',
      'Behavioral analytics',
      'API access',
      'Priority support',
      '99.95% SLA',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    description: 'For large organizations requiring full control',
    price: 'Custom',
    period: '',
    features: [
      'Everything in Business',
      'Custom AI models',
      'On-premise deployment',
      'White-label option',
      'Dedicated success manager',
      '99.99% SLA',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

const stats = [
  { value: '99.99%', label: 'Uptime SLA' },
  { value: '<5min', label: 'Deploy Time' },
  { value: '85%', label: 'Threat Reduction' },
  { value: '50%', label: 'Lower TCO' },
];

const useCases = [
  {
    icon: Users,
    title: 'Remote Workforce Security',
    description: 'Secure access for distributed teams without VPN complexity. Enable work from anywhere with enterprise-grade protection.',
    benefits: ['No VPN required', 'Device-agnostic access', 'Global edge network', 'Instant provisioning'],
  },
  {
    icon: Server,
    title: 'Multi-Cloud Access',
    description: 'Unified zero trust access across AWS, Azure, GCP, and private data centers. One policy, every cloud.',
    benefits: ['Cloud-agnostic policies', 'Consistent security posture', 'Simplified compliance', 'Reduced complexity'],
  },
];

const interactiveFeatures = [
  { label: 'Identity Verification', icon: Fingerprint, active: true },
  { label: 'Device Posture', icon: Shield, active: true },
  { label: 'Network Access', icon: Network, active: true },
  { label: 'Threat Detection', icon: Eye, active: true },
  { label: 'Policy Engine', icon: Lock, active: true },
];

export default function XeroTrust() {
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
        title="XeroTrust | AI-Powered Zero Trust Security Platform | Axiomio"
        description="XeroTrust delivers AI-native zero trust security. Deploy in minutes, reduce threats by 85%, and cut security costs by 50%. Enterprise-grade protection without complexity."
        keywords="XeroTrust, zero trust security, ZTNA, AI security, identity verification, device trust, network security, continuous authentication"
        canonicalUrl="https://axiomio.com/xerotrust"
      />
      <Navbar />

      {/* Hero Section */}
      <header ref={heroRef} className="relative min-h-[100vh] flex items-center pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-hero-gradient" />
          <GlowingOrb size={900} color="secondary" className="-top-1/4 -right-1/4" delay={0} />
          <GlowingOrb size={700} color="primary" className="top-1/3 -left-1/4" delay={2} />
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
                  <span className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-secondary px-5 py-2 rounded-full border border-secondary/30 bg-secondary/10">
                    <motion.span
                      className="w-2 h-2 bg-secondary rounded-full"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    Zero Trust Platform
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-[1.05]"
                >
                  <AnimatedGradientText>XeroTrust</AnimatedGradientText>
                  <span className="block text-3xl md:text-4xl lg:text-5xl mt-4 text-foreground">
                    AI-Native Zero Trust Security
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl text-foreground/70 leading-relaxed mb-8"
                >
                  Eliminate implicit trust. Deploy in minutes. Protect everything. 
                  XeroTrust combines AI-powered threat detection with continuous verification 
                  to secure your workforce, applications, and data.
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
                        Start Free Trial
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </MagneticButton>
                  <MagneticButton>
                    <Button variant="hero-outline" size="xl" className="gap-2" asChild>
                      <Link to="/xerotrust/compare">
                        <Shield className="w-5 h-5" />
                        Compare Solutions
                      </Link>
                    </Button>
                  </MagneticButton>
                </motion.div>
              </div>

              {/* Right visual - Interactive Shield */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="relative"
              >
                <div className="relative aspect-square max-w-lg mx-auto">
                  {/* Central Shield */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="w-44 h-44 rounded-full bg-gradient-to-br from-secondary via-primary to-secondary flex items-center justify-center shadow-glow-intense"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                    >
                      <div className="w-36 h-36 rounded-full bg-background/90 flex items-center justify-center">
                        <Shield className="w-16 h-16 text-secondary" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Orbiting rings */}
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="absolute inset-0 rounded-full border border-secondary/20"
                      style={{
                        inset: `${i * 40}px`,
                      }}
                      animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                      transition={{ duration: 25 + i * 5, repeat: Infinity, ease: 'linear' }}
                    />
                  ))}

                  {/* Feature Labels */}
                  {interactiveFeatures.map((feature, i) => (
                    <motion.div
                      key={feature.label}
                      className="absolute px-3 py-2 rounded-full bg-muted/80 backdrop-blur-sm border border-border flex items-center gap-2"
                      style={{
                        top: `${15 + Math.sin((i * Math.PI * 2) / 5) * 40}%`,
                        left: `${50 + Math.cos((i * Math.PI * 2) / 5) * 45}%`,
                        transform: 'translate(-50%, -50%)',
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                    >
                      <feature.icon className="w-4 h-4 text-secondary" />
                      <span className="text-xs font-medium text-foreground whitespace-nowrap">{feature.label}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </header>

      {/* Stats Bar */}
      <section className="py-12 border-y border-border/30 bg-muted/20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
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
            <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-secondary mb-4">
              Use Cases
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Security for <AnimatedGradientText>Every Scenario</AnimatedGradientText>
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
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center mb-6 border border-secondary/20">
                      <useCase.icon className="w-7 h-7 text-secondary" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-foreground mb-4">{useCase.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{useCase.description}</p>
                    <ul className="space-y-3">
                      {useCase.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-3 text-foreground/90">
                          <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
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
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-secondary mb-4">
              Core Capabilities
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              AI-Powered <AnimatedGradientText>Security Stack</AnimatedGradientText>
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
                className="group p-8 rounded-2xl bg-card/50 border border-border/50 hover:border-secondary/30 transition-all duration-300"
              >
                <div className="p-3 rounded-xl bg-secondary/10 text-secondary w-fit mb-5 border border-secondary/20 group-hover:bg-secondary/20 transition-colors">
                  <cap.icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-secondary transition-colors">
                  {cap.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{cap.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-28 lg:py-36 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-secondary mb-4">
              Pricing
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Simple, <AnimatedGradientText>Transparent Pricing</AnimatedGradientText>
            </h2>
            <p className="text-lg text-muted-foreground">
              No hidden fees. No surprise charges. Start free and scale as you grow.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative rounded-2xl p-8 ${
                  tier.highlighted 
                    ? 'bg-gradient-to-b from-secondary/10 to-background border-2 border-secondary/50' 
                    : 'bg-card border border-border'
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-secondary text-secondary-foreground text-xs font-semibold px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-2">{tier.name}</h3>
                  <p className="text-sm text-muted-foreground">{tier.description}</p>
                </div>
                <div className="mb-6">
                  <span className="font-heading text-5xl font-bold text-foreground">{tier.price}</span>
                  <span className="text-muted-foreground">{tier.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-foreground/90">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant={tier.highlighted ? 'hero' : 'hero-outline'} 
                  className="w-full"
                  asChild
                >
                  <Link to="/contact">{tier.cta}</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/10">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-background rounded-2xl p-10 lg:p-16 text-center border border-border shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-secondary/10 to-transparent" />
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-secondary/10 to-transparent" />
              
              <div className="relative z-10">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-secondary mb-6">
                  <span className="w-6 h-px bg-secondary" />
                  Start Your Security Transformation
                  <span className="w-6 h-px bg-secondary" />
                </span>
                
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Ready for <span className="text-secondary">Zero Trust</span>?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                  Join thousands of organizations that have eliminated VPN complexity 
                  and strengthened their security posture with XeroTrust.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <MagneticButton>
                    <Button variant="premium" size="xl" asChild>
                      <Link to="/contact">
                        Start Free Trial
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </MagneticButton>
                  <MagneticButton>
                    <Button variant="hero-outline" size="xl" asChild>
                      <Link to="/xerotrust/compare">
                        Compare to Alternatives
                      </Link>
                    </Button>
                  </MagneticButton>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Demo */}
      <XeroTrustInteractiveDemo />

      {/* Testimonials */}
      <XeroTrustTestimonials />

      {/* ROI Calculator */}
      <XeroTrustROICalculator />

      <Footer />
    </div>
  );
}
