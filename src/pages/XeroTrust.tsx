import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
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
  Key,
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
import { createBreadcrumbSchema, organizationSchema } from '@/lib/seo-schemas';

const breadcrumbSchema = createBreadcrumbSchema([
  { name: "Home", url: "https://axiomio.com/" },
  { name: "XeroTrust", url: "https://axiomio.com/xerotrust" },
]);

const xeroTrustSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://axiomio.com/xerotrust/#product",
  "name": "XeroTrust",
  "applicationCategory": "SecurityApplication",
  "applicationSubCategory": "Zero-Trust Network Access (ZTNA)",
  "description": "Modern zero-trust network access powered by WireGuard. Peer-to-peer mesh networking with sub-20ms latency. Deploy in 5 minutes. 95% latency reduction vs VPNs.",
  "url": "https://axiomio.com/xerotrust",
  "operatingSystem": "Windows, Linux (macOS, iOS, Android coming soon)",
  "offers": [
    {
      "@type": "Offer",
      "name": "Starter",
      "price": "8",
      "priceCurrency": "USD",
      "description": "For small teams up to 50 users"
    },
    {
      "@type": "Offer",
      "name": "Business",
      "price": "15",
      "priceCurrency": "USD",
      "description": "For growing organizations with unlimited users"
    },
    {
      "@type": "Offer",
      "name": "Enterprise",
      "description": "Custom pricing for large organizations"
    }
  ],
  "featureList": [
    "WireGuard Encryption (ChaCha20-Poly1305, AES-GCM)",
    "Sub-20ms Latency",
    "Automatic NAT Traversal",
    "Device Posture Checks",
    "Auto-Discovery & Routing",
    "Self-Hostable Relay Servers",
    "5-Minute Deployment",
    "Granular Access Control"
  ],
  "provider": { "@id": "https://axiomio.com/#organization" },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "150"
  }
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [breadcrumbSchema, xeroTrustSchema, organizationSchema]
};

const capabilities = [
  {
    icon: Shield,
    title: 'WireGuard Encryption',
    description: 'Military-grade ChaCha20-Poly1305 and AES-GCM encryption standards for unbreakable security.',
  },
  {
    icon: Zap,
    title: 'Sub-20ms Latency',
    description: 'Direct peer-to-peer connections eliminate traditional VPN bottlenecks for lightning-fast access.',
  },
  {
    icon: Network,
    title: 'Automatic NAT Traversal',
    description: 'Seamless hole-punching capability behind firewalls and mobile networks without manual configuration.',
  },
  {
    icon: ShieldCheck,
    title: 'Device Posture Checks',
    description: 'Continuous verification of disk encryption, antivirus status, and OS patches before granting access.',
  },
  {
    icon: Globe2,
    title: 'Auto-Discovery & Routing',
    description: 'Intelligent peer discovery and optimal routing without complex manual network configuration.',
  },
  {
    icon: Server,
    title: 'Self-Hostable Relay',
    description: 'Deploy on-premises or cloud relay servers for complete control over your security infrastructure.',
  },
];

const pricingTiers = [
  {
    name: 'Free',
    description: 'Perfect for small teams getting started',
    price: '$0',
    period: '/forever',
    features: [
      'WireGuard encryption',
      'Peer-to-peer mesh networking',
      'Device posture checks',
      'Auto NAT traversal',
      'Community support',
      'Up to 5 users',
    ],
    cta: 'Get Started Free',
    highlighted: false,
  },
  {
    name: 'Business',
    description: 'For growing teams and organizations',
    price: 'Custom',
    period: '',
    features: [
      'Everything in Free',
      'Unlimited users',
      'Self-hostable relay servers',
      'Priority support',
      'Advanced policy controls',
      'SSO integration',
    ],
    cta: 'Contact Sales',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    description: 'For large organizations with custom needs',
    price: 'Custom',
    period: '',
    features: [
      'Everything in Business',
      'Dedicated relay infrastructure',
      'Custom compliance support',
      'White-label options',
      'Dedicated success manager',
      'SLA guarantees',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

const stats = [
  { value: '<20ms', label: 'Latency' },
  { value: '5min', label: 'Setup Time' },
  { value: '95%', label: 'Latency Reduction vs VPN' },
  { value: '87%', label: 'Faster Deployment' },
];

const useCases = [
  {
    icon: Users,
    title: 'Remote Workforce Security',
    description: 'Secure access for distributed teams without VPN complexity. Direct peer-to-peer connections that work seamlessly across firewalls and mobile networks.',
    benefits: ['No VPN bottlenecks', 'Automatic NAT traversal', 'Works on mobile networks', 'Sub-20ms latency'],
  },
  {
    icon: Server,
    title: 'DevOps & Container Workloads',
    description: 'Secure Docker containers and Kubernetes workloads with zero-trust access. Self-hostable relay servers for complete control.',
    benefits: ['Docker & K8s support', 'Self-hostable infrastructure', 'One-line installation', 'Complete audit trails'],
  },
  {
    icon: Globe2,
    title: 'Multi-Cloud & Hybrid Access',
    description: 'Unified zero-trust access across cloud providers and on-premises data centers. Auto-discovery and intelligent routing without manual configuration.',
    benefits: ['SOC 2, GDPR, HIPAA ready', 'Cloud-agnostic policies', 'No additional firewalls', 'Granular access control'],
  },
];

const interactiveFeatures = [
  { label: 'Identity Verification', icon: Fingerprint, active: true },
  { label: 'Device Posture', icon: Shield, active: true },
  { label: 'Network Access', icon: Network, active: true },
  { label: 'Threat Detection', icon: Eye, active: true },
  { label: 'Policy Engine', icon: Lock, active: true },
];

const customerStories = [
  {
    id: 'sarah',
    role: 'IT Manager',
    name: 'Sarah',
    title: 'Distributed Remote Teams',
    icon: Users,
    problem: "Sarah's 150-person team is spread across 3 countries. Using Cisco AnyConnect meant 3-day onboarding delays, manual firewall rules, and 300ms latency on DB queries.",
    solution: "With Xerotrust, Sarah deployed agents to all devices in minutes. Peer-to-peer mesh connections replaced the central gateway, dropping latency to 15ms.",
    metrics: [
      { label: 'Onboarding', before: '3 days', after: '30 mins' },
      { label: 'Latency', before: '300ms', after: '15ms' },
      { label: 'Tickets', before: '12/mo', after: '0' },
    ],
  },
  {
    id: 'marcus',
    role: 'DevOps Engineer',
    name: 'Marcus',
    title: 'Multi-Cloud Mesh',
    icon: Server,
    problem: "Marcus manages apps across AWS, GCP, and On-Prem. Building site-to-site VPN tunnels between them was expensive, fragile, and a nightmare to debug.",
    solution: "He installed Xerotrust on all servers. They now communicate on a single flat overlay network. No complex routing, no expensive VPN gateways.",
    metrics: [
      { label: 'Setup Time', before: '2 weeks', after: '30 mins' },
      { label: 'Cross-Cloud Latency', before: '200ms', after: '30ms' },
      { label: 'Security Incidents', before: '4/yr', after: '0' },
    ],
  },
  {
    id: 'jennifer',
    role: 'SecOps',
    name: 'Jennifer',
    title: 'Secure DB Access',
    icon: Lock,
    problem: "Jennifer needs to secure production DBs for a regulated Fintech. Managing Bastion hosts and manual IP whitelisting was insecure and slowed down engineers.",
    solution: "She replaced Bastions with Xerotrust Identity-Aware Access. Engineers authenticate via Okta, pass device posture checks, and get instant access.",
    metrics: [
      { label: 'Audit Time', before: '40 hrs', after: '4 hrs' },
      { label: 'Provisioning', before: '48 hrs', after: '5 mins' },
      { label: 'Bastion Hosts', before: 'Required', after: 'Eliminated' },
    ],
  },
  {
    id: 'priya',
    role: 'Platform Eng',
    name: 'Priya',
    title: 'Kubernetes Networking',
    icon: Network,
    problem: "Pod-to-pod is easy, but connecting K8s to external legacy databases required complex Istio service meshes and fragile firewall rules.",
    solution: "Priya runs Xerotrust as a DaemonSet. Pods get private IPs on the mesh and talk to external DBs securely without complex iptables.",
    metrics: [
      { label: 'Net Setup', before: '2 mos', after: '1 day' },
      { label: 'Troubleshooting', before: 'Weekly', after: 'Rare' },
      { label: 'Security', before: 'Manual', after: 'Automated' },
    ],
  },
  {
    id: 'robert',
    role: 'CISO',
    name: 'Robert',
    title: 'HIPAA Compliance',
    icon: ShieldCheck,
    problem: "Auditors demanded proof of encryption and least-privilege access. The old VPN logs were incomplete, making audit season a living hell.",
    solution: "Robert uses Xerotrust to log every single connection with user identity and device posture context. Compliance reports are auto-generated.",
    metrics: [
      { label: 'Audit Prep', before: '40 hrs', after: '4 hrs' },
      { label: 'Violations', before: '3/yr', after: '0' },
      { label: 'Encryption', before: 'Partial', after: '100% End-to-End' },
    ],
  },
];

function CustomerSuccessStories() {
  const [selectedCustomer, setSelectedCustomer] = useState(customerStories[0]);

  return (
    <section className="py-28 lg:py-36 relative overflow-hidden bg-gradient-to-b from-transparent via-muted/10 to-transparent">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-secondary mb-4">
            Customer Success Stories
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Real Teams, <AnimatedGradientText>Real Results</AnimatedGradientText>
          </h2>
          <p className="text-lg text-muted-foreground">
            See how organizations across industries transformed their security posture with XeroTrust
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Left Column: Customer Cards (25%) */}
            <div className="lg:col-span-1 space-y-4">
              {customerStories.map((customer, index) => (
                <motion.div
                  key={customer.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <button
                    onClick={() => setSelectedCustomer(customer)}
                    className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${
                      selectedCustomer.id === customer.id
                        ? 'bg-gradient-to-br from-secondary/20 to-primary/20 border-2 border-secondary shadow-lg shadow-secondary/20'
                        : 'bg-card/50 border border-border hover:border-secondary/30 hover:bg-card'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all ${
                        selectedCustomer.id === customer.id
                          ? 'bg-secondary/20 border border-secondary/30'
                          : 'bg-muted border border-border'
                      }`}>
                        <customer.icon className={`w-6 h-6 ${
                          selectedCustomer.id === customer.id ? 'text-secondary' : 'text-muted-foreground'
                        }`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`text-xs uppercase tracking-wider mb-1 ${
                          selectedCustomer.id === customer.id ? 'text-secondary' : 'text-muted-foreground'
                        }`}>
                          {customer.role}
                        </p>
                        <p className={`font-heading font-semibold truncate ${
                          selectedCustomer.id === customer.id ? 'text-foreground' : 'text-foreground/70'
                        }`}>
                          {customer.name}
                        </p>
                        <p className="text-xs text-muted-foreground truncate">{customer.title}</p>
                      </div>
                    </div>
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Right Column: Story Details (75%) */}
            <div className="lg:col-span-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedCustomer.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <PremiumCard>
                    <div className="p-8 lg:p-12">
                      {/* Header */}
                      <div className="flex items-start gap-6 mb-8 pb-8 border-b border-border">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center border border-secondary/20 flex-shrink-0">
                          <selectedCustomer.icon className="w-10 h-10 text-secondary" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold uppercase tracking-wider text-secondary mb-2">
                            {selectedCustomer.role}
                          </p>
                          <h3 className="font-heading text-3xl font-bold text-foreground mb-2">
                            {selectedCustomer.title}
                          </h3>
                          <p className="text-lg text-muted-foreground">
                            with <span className="font-semibold text-foreground">{selectedCustomer.name}</span>
                          </p>
                        </div>
                      </div>

                      {/* The Problem */}
                      <div className="mb-8">
                        <h4 className="flex items-center gap-2 font-heading text-xl font-bold text-foreground mb-4">
                          <span className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 text-sm font-bold">!</span>
                          The Problem
                        </h4>
                        <p className="text-foreground/90 leading-relaxed text-lg">
                          {selectedCustomer.problem}
                        </p>
                      </div>

                      {/* The Solution */}
                      <div className="mb-8">
                        <h4 className="flex items-center gap-2 font-heading text-xl font-bold text-foreground mb-4">
                          <span className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500 text-sm">
                            <CheckCircle2 className="w-5 h-5" />
                          </span>
                          The Solution
                        </h4>
                        <p className="text-foreground/90 leading-relaxed text-lg">
                          {selectedCustomer.solution}
                        </p>
                      </div>

                      {/* Measurable Impact */}
                      <div>
                        <h4 className="flex items-center gap-2 font-heading text-xl font-bold text-foreground mb-6">
                          <span className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary text-sm">
                            <BarChart3 className="w-5 h-5" />
                          </span>
                          Measurable Impact
                        </h4>
                        <div className="grid md:grid-cols-3 gap-6">
                          {selectedCustomer.metrics.map((metric, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: i * 0.1 }}
                              className="p-6 rounded-xl bg-gradient-to-br from-muted/50 to-muted/20 border border-border"
                            >
                              <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                                {metric.label}
                              </p>
                              <div className="flex items-center gap-3 mb-2">
                                <span className="text-lg text-muted-foreground line-through">{metric.before}</span>
                                <ArrowRight className="w-5 h-5 text-secondary flex-shrink-0" />
                              </div>
                              <p className="text-2xl font-heading font-bold text-secondary">
                                {metric.after}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </PremiumCard>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function XeroTrust() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  // Fade starts at 70% scroll (much later than before)
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0.95]);

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <SEOHead
        title="XeroTrust | WireGuard-Based Zero Trust Network Access | AXIOMIO"
        description="Modern zero-trust network access powered by WireGuard. Peer-to-peer mesh networking with sub-20ms latency, automatic NAT traversal, and device posture checks. Deploy in 5 minutes. 95% latency reduction vs traditional VPNs."
        keywords="XeroTrust, zero trust security, ZTNA, WireGuard, peer-to-peer VPN, mesh networking, NAT traversal, device posture, network security, VPN alternative, zero friction security"
        canonicalUrl="https://axiomio.com/xerotrust"
        pageType="product"
        structuredData={pageSchema}
      />
      <Navbar />

      {/* Hero Section - Mobile Optimized with Animation */}
      <header ref={heroRef} className="relative min-h-screen flex items-center pt-20 pb-12 lg:pt-24 lg:pb-16 overflow-hidden">
        {/* Background with animated elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-background to-primary/5" />
          <GlowingOrb size={600} color="secondary" className="-top-1/4 -right-1/4 hidden sm:block" delay={0} />
          <GlowingOrb size={500} color="primary" className="top-1/3 -left-1/4 hidden sm:block" delay={2} />
          <ParticleField />
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
        </div>

        <motion.div 
          className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16"
          style={{ opacity: heroOpacity, scale: heroScale }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Left content - Mobile optimized */}
              <div className="text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-4 sm:mb-6"
                >
                  <span className="inline-flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-secondary px-3 sm:px-5 py-1.5 sm:py-2 rounded-full border border-secondary/30 bg-secondary/10">
                    <motion.span
                      className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-secondary rounded-full"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    Zero Trust Platform
                  </span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.6 }}
                  className="mb-4 sm:mb-6"
                >
                  <img
                    src="/logos/xero-trust/_XeroTrust_-lightbcg.png"
                    alt="XeroTrust Logo"
                    className="h-12 w-auto mx-auto lg:mx-0"
                  />
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 sm:mb-6 leading-[1.1] tracking-tight"
                >
                  <AnimatedGradientText>XeroTrust</AnimatedGradientText>
                  <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-2 sm:mt-4 text-foreground font-medium tracking-tight">
                    Zero Trust, Zero Friction
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-base sm:text-lg md:text-xl text-foreground/80 leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0"
                >
                  Secure access for teams. <span className="font-semibold text-foreground">No VPN required.</span> Give employees instant, secure access to internal apps without exposing your entire network.
                  <span className="block mt-2 text-secondary font-semibold">Deploy in 10 minutes.</span>
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
                >
                  <MagneticButton>
                    <Button variant="hero" size="xl" className="w-full sm:w-auto" asChild>
                      <a href="https://calendly.com/hello-axiomio/30min?back=1&month=2025-12" target="_blank" rel="noopener noreferrer">
                        Start Free Trial
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </MagneticButton>
                  <MagneticButton>
                    <Button variant="hero-outline" size="xl" className="w-full sm:w-auto gap-2" asChild>
                      <Link to="/xerotrust/compare">
                        <Shield className="w-4 h-4" />
                        Compare Solutions
                      </Link>
                    </Button>
                  </MagneticButton>
                </motion.div>
              </div>

              {/* Right visual - Show on md+ screens */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="relative hidden md:block"
              >
                <div className="relative aspect-square max-w-md lg:max-w-lg mx-auto min-h-[350px] md:min-h-[400px] lg:min-h-[500px]">
                  {/* Background ambient glow effect - responsive */}
                  <div className="absolute inset-0 flex items-center justify-center z-0">
                    <motion.div
                      className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full bg-secondary/15 blur-3xl"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.4, 0.2],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  </div>

                  {/* Sophisticated connection lines - BEHIND central hub */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none z-5" style={{ zIndex: 5 }}>
                    <defs>
                      <linearGradient id="lineGradientZT" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="hsl(var(--secondary))" stopOpacity="0" />
                        <stop offset="50%" stopColor="hsl(var(--secondary))" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0" />
                      </linearGradient>
                      <filter id="glowZT">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                      <filter id="softGlow">
                        <feGaussianBlur stdDeviation="1.5" result="blur"/>
                        <feFlood floodColor="hsl(var(--secondary))" floodOpacity="0.5"/>
                        <feComposite in2="blur" operator="in"/>
                        <feMerge>
                          <feMergeNode/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>

                    {/* Animated secure connection paths */}
                    {[
                      { x1: '50%', y1: '5%', x2: '50%', y2: '50%' },
                      { x1: '95%', y1: '28%', x2: '50%', y2: '50%' },
                      { x1: '95%', y1: '72%', x2: '50%', y2: '50%' },
                      { x1: '50%', y1: '95%', x2: '50%', y2: '50%' },
                      { x1: '5%', y1: '72%', x2: '50%', y2: '50%' },
                      { x1: '5%', y1: '28%', x2: '50%', y2: '50%' },
                    ].map((line, i) => (
                      <g key={`connection-${i}`}>
                        {/* Base connection line with enhanced glow */}
                        <motion.line
                          x1={line.x1}
                          y1={line.y1}
                          x2={line.x2}
                          y2={line.y2}
                          stroke="url(#lineGradientZT)"
                          strokeWidth="3"
                          strokeDasharray="12 6"
                          filter="url(#glowZT)"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{
                            pathLength: 1,
                            opacity: [0.3, 0.8, 0.3],
                            strokeDashoffset: [0, -18, -36],
                          }}
                          transition={{
                            pathLength: { duration: 1.8, delay: 1.2 + i * 0.15 },
                            opacity: { duration: 4, repeat: Infinity, delay: i * 0.5 },
                            strokeDashoffset: { duration: 4, repeat: Infinity, ease: 'linear' },
                          }}
                        />

                        {/* Enhanced data flow particles */}
                        <motion.circle
                          cx={line.x1}
                          cy={line.y1}
                          r="5"
                          fill="hsl(var(--secondary))"
                          filter="url(#softGlow)"
                        >
                          <animate
                            attributeName="cx"
                            from={line.x1}
                            to={line.x2}
                            dur="3.5s"
                            repeatCount="indefinite"
                            begin={`${i * 0.6}s`}
                          />
                          <animate
                            attributeName="cy"
                            from={line.y1}
                            to={line.y2}
                            dur="3.5s"
                            repeatCount="indefinite"
                            begin={`${i * 0.6}s`}
                          />
                          <animate
                            attributeName="opacity"
                            values="0;0.8;1;0.8;0"
                            dur="3.5s"
                            repeatCount="indefinite"
                            begin={`${i * 0.6}s`}
                          />
                        </motion.circle>

                        {/* Secondary particle for trail effect */}
                        <motion.circle
                          cx={line.x1}
                          cy={line.y1}
                          r="2.5"
                          fill="hsl(var(--primary))"
                          opacity="0.6"
                        >
                          <animate
                            attributeName="cx"
                            from={line.x1}
                            to={line.x2}
                            dur="3.5s"
                            repeatCount="indefinite"
                            begin={`${i * 0.6 + 0.3}s`}
                          />
                          <animate
                            attributeName="cy"
                            from={line.y1}
                            to={line.y2}
                            dur="3.5s"
                            repeatCount="indefinite"
                            begin={`${i * 0.6 + 0.3}s`}
                          />
                          <animate
                            attributeName="opacity"
                            values="0;0.6;0.8;0.6;0"
                            dur="3.5s"
                            repeatCount="indefinite"
                            begin={`${i * 0.6 + 0.3}s`}
                          />
                        </motion.circle>
                      </g>
                    ))}
                  </svg>

                  {/* Central XeroTrust Logo Hub - Clean & Perfectly Sized */}
                  <div className="absolute inset-0 flex items-center justify-center z-30">
                    <motion.div
                      className="relative w-32 sm:w-36 md:w-40 lg:w-44 h-32 sm:h-36 md:h-40 lg:h-44 rounded-3xl bg-gradient-to-br from-secondary/50 via-primary/50 to-secondary/50 p-[3px] shadow-2xl group cursor-pointer"
                      animate={{
                        boxShadow: [
                          '0 20px 60px rgba(var(--secondary-rgb), 0.4), 0 0 80px rgba(var(--secondary-rgb), 0.25)',
                          '0 25px 80px rgba(var(--secondary-rgb), 0.6), 0 0 100px rgba(var(--secondary-rgb), 0.35)',
                          '0 20px 60px rgba(var(--secondary-rgb), 0.4), 0 0 80px rgba(var(--secondary-rgb), 0.25)',
                        ]
                      }}
                      whileHover={{
                        scale: 1.08,
                        boxShadow: '0 30px 90px rgba(var(--secondary-rgb), 0.7), 0 0 120px rgba(var(--secondary-rgb), 0.45)',
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <div className="w-full h-full rounded-3xl bg-white dark:bg-gray-50 flex items-center justify-center p-3 sm:p-3.5 md:p-4 border-2 border-secondary/50 relative overflow-hidden shadow-2xl group-hover:border-secondary/80 transition-all duration-500">
                        {/* Bright white base layer for logo visibility */}
                        <div className="absolute inset-0 bg-white dark:bg-gray-50 rounded-3xl" />

                        {/* Subtle gradient overlays */}
                        <div className="absolute inset-0 bg-gradient-to-br from-secondary/3 via-transparent to-primary/3 rounded-3xl" />

                        {/* Animated grid pattern */}
                        <motion.div
                          className="absolute inset-0 opacity-[0.03]"
                          animate={{
                            backgroundPosition: ['0px 0px', '40px 40px'],
                          }}
                          transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: 'linear',
                          }}
                          style={{
                            backgroundImage: 'linear-gradient(hsl(var(--secondary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--secondary)) 1px, transparent 1px)',
                            backgroundSize: '20px 20px',
                          }}
                        />

                        {/* Enhanced shimmer overlay on hover */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100"
                          transition={{
                            duration: 0.5,
                          }}
                        />

                        {/* Subtle animated shimmer */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-transparent rounded-3xl"
                          animate={{
                            opacity: [0.2, 0.4, 0.2],
                          }}
                          transition={{
                            duration: 3.5,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                        />

                        {/* Logo - perfectly sized */}
                        <motion.div
                          className="relative z-10 w-full h-full flex items-center justify-center"
                          whileHover={{
                            scale: 1.08,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <img
                            src="/logos/xero-trust/_XeroTrust_-lightbcg.png"
                            alt="XeroTrust"
                            className="w-full h-full object-contain select-none drop-shadow-2xl"
                            style={{ transform: 'rotate(0deg)' }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>

                    {/* Clean pulsing verification rings */}
                    {[0, 1, 2, 3].map((i) => (
                      <motion.div
                        key={`ring-${i}`}
                        className="absolute inset-0 flex items-center justify-center pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: [0, 0.12, 0],
                          scale: [1, 1.25 + i * 0.08, 1.8 + i * 0.08],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          delay: i * 1,
                          ease: 'easeOut'
                        }}
                      >
                        <div className="w-32 sm:w-36 md:w-40 lg:w-44 h-32 sm:h-36 md:h-40 lg:h-44 rounded-3xl border-[2px] border-secondary/50" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Network Access Points - Premium Design with Hover Effects */}
                  {[
                    { icon: Users, label: 'Remote Users', position: { top: '5%', left: '50%', translateX: '-50%' }, color: 'from-blue-500 to-blue-600', desc: 'Verified' },
                    { icon: Server, label: 'Infrastructure', position: { top: '28%', right: '5%' }, color: 'from-purple-500 to-purple-600', desc: 'Protected' },
                    { icon: Lock, label: 'Databases', position: { bottom: '28%', right: '5%' }, color: 'from-orange-500 to-orange-600', desc: 'Encrypted' },
                    { icon: Globe2, label: 'Cloud Services', position: { bottom: '5%', left: '50%', translateX: '-50%' }, color: 'from-green-500 to-green-600', desc: 'Secured' },
                    { icon: Shield, label: 'Applications', position: { bottom: '28%', left: '5%' }, color: 'from-teal-500 to-teal-600', desc: 'Monitored' },
                    { icon: Key, label: 'API Gateway', position: { top: '28%', left: '5%' }, color: 'from-pink-500 to-pink-600', desc: 'Authorized' },
                  ].map((node, i) => (
                    <motion.div
                      key={`node-${i}`}
                      className="absolute z-20 group cursor-pointer"
                      style={node.position}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + i * 0.12, duration: 0.6, type: 'spring' }}
                      whileHover={{ scale: 1.15, zIndex: 50 }}
                    >
                      <motion.div
                        className="relative"
                        animate={{
                          y: [0, -8, 0],
                        }}
                        transition={{
                          duration: 3 + i * 0.3,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: i * 0.4,
                        }}
                      >
                        {/* Outer pulse ring - enhanced on hover */}
                        <motion.div
                          className={`absolute -inset-2 sm:-inset-3 rounded-2xl bg-gradient-to-br ${node.color} blur-md`}
                          animate={{
                            opacity: [0, 0.4, 0],
                            scale: [0.9, 1.1, 0.9],
                          }}
                          whileHover={{
                            opacity: 0.7,
                            scale: 1.2,
                          }}
                          transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            delay: i * 0.4,
                          }}
                        />

                        {/* Node card - responsive sizing */}
                        <motion.div
                          className={`relative w-20 h-20 sm:w-22 sm:h-22 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-2xl bg-gradient-to-br ${node.color} p-[2px] shadow-xl transition-all duration-300`}
                          whileHover={{
                            boxShadow: '0 25px 50px rgba(0,0,0,0.3), 0 0 40px rgba(var(--secondary-rgb), 0.5)',
                          }}
                        >
                          <div className="w-full h-full rounded-2xl bg-background/95 backdrop-blur-md flex flex-col items-center justify-center p-2 border border-white/10 relative overflow-hidden group-hover:bg-background/98 transition-all duration-300">
                            {/* Shimmer effect - enhanced on hover */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent"
                              animate={{
                                opacity: [0, 0.5, 0],
                              }}
                              whileHover={{
                                opacity: 0.8,
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                delay: i * 0.5,
                              }}
                            />

                            {/* Icon with hover animation */}
                            <motion.div whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }} transition={{ duration: 0.3 }}>
                              <node.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-foreground mb-1 sm:mb-1.5 relative z-10 group-hover:text-primary transition-colors duration-300" />
                            </motion.div>
                            <span className="text-[9px] sm:text-[10px] md:text-[11px] font-bold text-foreground text-center leading-tight relative z-10 group-hover:text-primary transition-colors duration-300">{node.label}</span>
                            <span className="text-[7px] sm:text-[8px] md:text-[9px] text-muted-foreground mt-0.5 relative z-10 group-hover:text-secondary transition-colors duration-300">{node.desc}</span>
                          </div>
                        </motion.div>

                        {/* Verification badge - animate on hover */}
                        <motion.div
                          className="absolute -top-1 -right-1 sm:-top-1.5 sm:-right-1.5 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-500 border-[2px] sm:border-[3px] border-background flex items-center justify-center shadow-lg"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ delay: 1.3 + i * 0.12, type: 'spring', stiffness: 200 }}
                        >
                          <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
                        </motion.div>

                        {/* Connection pulse indicator - enhanced on hover */}
                        <motion.div
                          className="absolute -bottom-1 -left-1 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-secondary border-2 border-background"
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.6, 1, 0.6],
                          }}
                          whileHover={{
                            scale: 1.5,
                            opacity: 1,
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.3,
                          }}
                        />

                        {/* Tooltip on hover */}
                        <motion.div
                          className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg bg-background/95 backdrop-blur-md border border-border shadow-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50"
                          initial={{ y: -10 }}
                          whileHover={{ y: 0 }}
                        >
                          <span className="text-xs font-medium text-foreground">{node.label}</span>
                          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-background border-l border-t border-border rotate-45" />
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  ))}

                  {/* Sophisticated encrypted connection lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 10 }}>
                    <defs>
                      <linearGradient id="lineGradientZT" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="hsl(var(--secondary))" stopOpacity="0" />
                        <stop offset="50%" stopColor="hsl(var(--secondary))" stopOpacity="0.7" />
                        <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0" />
                      </linearGradient>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>

                    {/* Animated secure connection paths */}
                    {[
                      { x1: '50%', y1: '5%', x2: '50%', y2: '50%' },
                      { x1: '95%', y1: '28%', x2: '50%', y2: '50%' },
                      { x1: '95%', y1: '72%', x2: '50%', y2: '50%' },
                      { x1: '50%', y1: '95%', x2: '50%', y2: '50%' },
                      { x1: '5%', y1: '72%', x2: '50%', y2: '50%' },
                      { x1: '5%', y1: '28%', x2: '50%', y2: '50%' },
                    ].map((line, i) => (
                      <g key={`connection-${i}`}>
                        {/* Main connection line */}
                        <motion.line
                          x1={line.x1}
                          y1={line.y1}
                          x2={line.x2}
                          y2={line.y2}
                          stroke="url(#lineGradientZT)"
                          strokeWidth="2.5"
                          strokeDasharray="10 5"
                          filter="url(#glow)"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{
                            pathLength: 1,
                            opacity: [0.4, 0.9, 0.4],
                            strokeDashoffset: [0, -15, -30],
                          }}
                          transition={{
                            pathLength: { duration: 1.5, delay: 1.2 + i * 0.15 },
                            opacity: { duration: 3, repeat: Infinity, delay: i * 0.4 },
                            strokeDashoffset: { duration: 3, repeat: Infinity, ease: 'linear' },
                          }}
                        />

                        {/* Data flow particles with trail effect */}
                        <motion.circle
                          cx={line.x1}
                          cy={line.y1}
                          r="4"
                          fill="hsl(var(--secondary))"
                          filter="url(#glow)"
                        >
                          <animate
                            attributeName="cx"
                            from={line.x1}
                            to={line.x2}
                            dur="3s"
                            repeatCount="indefinite"
                            begin={`${i * 0.5}s`}
                          />
                          <animate
                            attributeName="cy"
                            from={line.y1}
                            to={line.y2}
                            dur="3s"
                            repeatCount="indefinite"
                            begin={`${i * 0.5}s`}
                          />
                          <animate
                            attributeName="opacity"
                            values="0;1;1;0"
                            dur="3s"
                            repeatCount="indefinite"
                            begin={`${i * 0.5}s`}
                          />
                        </motion.circle>
                      </g>
                    ))}
                  </svg>

                  {/* Premium floating security status badges */}
                  <motion.div
                    className="absolute top-[3%] left-[50%] -translate-x-1/2 z-30"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8, type: 'spring' }}
                  >
                    <motion.div
                      className="px-5 py-2.5 rounded-full bg-green-500/15 backdrop-blur-xl border border-green-500/40 shadow-lg shadow-green-500/20"
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <div className="flex items-center gap-2.5">
                        <motion.div
                          className="w-2.5 h-2.5 rounded-full bg-green-500"
                          animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <span className="text-xs font-bold text-green-600 dark:text-green-400 whitespace-nowrap">All Systems Secure</span>
                      </div>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    className="absolute bottom-[3%] left-[50%] -translate-x-1/2 z-30"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2, type: 'spring' }}
                  >
                    <motion.div
                      className="px-5 py-2.5 rounded-full bg-secondary/15 backdrop-blur-xl border border-secondary/40 shadow-lg shadow-secondary/20"
                      animate={{ y: [0, 3, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                    >
                      <div className="flex items-center gap-2.5">
                        <Zap className="w-3.5 h-3.5 text-secondary" />
                        <span className="text-xs font-bold text-secondary whitespace-nowrap">{'<'}15ms Latency</span>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Additional status indicators */}
                  <motion.div
                    className="absolute top-[20%] left-[2%] z-30"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2.2, type: 'spring' }}
                  >
                    <div className="px-3 py-1.5 rounded-full bg-blue-500/10 backdrop-blur-md border border-blue-500/30 shadow-md">
                      <div className="flex items-center gap-1.5">
                        <Shield className="w-3 h-3 text-blue-500" />
                        <span className="text-[10px] font-semibold text-blue-500">Zero Trust</span>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute top-[20%] right-[2%] z-30"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2.4, type: 'spring' }}
                  >
                    <div className="px-3 py-1.5 rounded-full bg-purple-500/10 backdrop-blur-md border border-purple-500/30 shadow-md">
                      <div className="flex items-center gap-1.5">
                        <Lock className="w-3 h-3 text-purple-500" />
                        <span className="text-[10px] font-semibold text-purple-500">End-to-End</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </header>

      {/* Stats Bar */}
      <section className="py-8 sm:py-12 border-y border-border/30 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-1 sm:mb-2">{stat.value}</p>
                <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What is ZTNA */}
      <section className="py-16 sm:py-20 lg:py-28 relative bg-gradient-to-br from-muted/20 to-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-8 sm:mb-12">
              <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-secondary mb-3 sm:mb-4">
                Zero Trust Explained
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
                What is <AnimatedGradientText>Zero-Trust Network Access</AnimatedGradientText>?
              </h2>
            </div>

            <PremiumCard>
              <div className="p-6 sm:p-8 lg:p-12">
                <div className="flex flex-col sm:flex-row items-start gap-4 mb-6 sm:mb-8">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center flex-shrink-0 border border-secondary/20">
                    <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-secondary" />
                  </div>
                  <div>
                    <p className="text-lg sm:text-xl lg:text-2xl font-heading font-bold text-foreground mb-2 sm:mb-4">
                      "Never trust, always verify."
                    </p>
                    <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                      Unlike legacy networks that trust everything inside the firewall, Zero-Trust authenticates and encrypts every single connection—regardless of location or network.
                    </p>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <p className="text-foreground/90 text-base sm:text-lg font-semibold mb-4 sm:mb-6">XeroTrust implements zero-trust by:</p>
                  {[
                    { num: '1', text: 'Authenticating users and devices', detail: '(SSO, MFA)' },
                    { num: '2', text: 'Verifying device security', detail: '(posture checks)' },
                    { num: '3', text: 'Enforcing granular access policies', detail: '(least-privilege)' },
                    { num: '4', text: 'Encrypting all traffic', detail: '(WireGuard end-to-end)' },
                    { num: '5', text: 'Continuously auditing access', detail: '(logging every connection)' },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
                    >
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0 border border-secondary/30">
                        <span className="text-secondary font-bold text-xs sm:text-sm">{item.num}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-foreground font-semibold text-sm sm:text-base">{item.text}</span>
                        <span className="text-muted-foreground text-xs sm:text-sm ml-1 sm:ml-2 block sm:inline">{item.detail}</span>
                      </div>
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </PremiumCard>
          </motion.div>
        </div>
      </section>

      {/* Four Core Principles */}
      <section className="py-16 sm:py-20 lg:py-28 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20"
          >
            <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-secondary mb-3 sm:mb-4">
              Core Principles
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              Four Pillars of <AnimatedGradientText>Zero-Trust</AnimatedGradientText>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Continuous Verification',
                description: 'Every connection authenticated, authorized, and encrypted. No exceptions.',
                icon: Fingerprint,
              },
              {
                title: 'Least Privilege',
                description: 'Users get ONLY the access they need, nothing more. Reduce attack surface.',
                icon: Lock,
              },
              {
                title: 'Assume Breach',
                description: "Security doesn't stop at the perimeter. Every access is verified.",
                icon: ShieldCheck,
              },
              {
                title: 'Microsegmentation',
                description: 'Network divided into zones; each protected and monitored separately.',
                icon: Network,
              },
            ].map((principle, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <PremiumCard className="h-full hover:shadow-glow transition-shadow duration-300">
                  <div className="p-5 sm:p-6 lg:p-8">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center mb-4 sm:mb-6 border border-secondary/20">
                      <principle.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-secondary" />
                    </div>
                    <h3 className="font-heading text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-2 sm:mb-4">{principle.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base lg:text-lg">{principle.description}</p>
                  </div>
                </PremiumCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 sm:py-20 lg:py-28 relative bg-muted/10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20"
          >
            <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-secondary mb-3 sm:mb-4">
              Use Cases & Real Results
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              Organizations Deliver <AnimatedGradientText>Measurable Impact</AnimatedGradientText>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">
              Real teams, real problems solved, real metrics improved
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <PremiumCard className="h-full">
                  <div className="p-5 sm:p-6 lg:p-8">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center mb-4 sm:mb-6 border border-secondary/20">
                      <useCase.icon className="w-6 h-6 sm:w-7 sm:h-7 text-secondary" />
                    </div>
                    <h3 className="font-heading text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-2 sm:mb-4">{useCase.title}</h3>
                    <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{useCase.description}</p>
                    <ul className="space-y-2 sm:space-y-3">
                      {useCase.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-2 sm:gap-3 text-foreground/90 text-sm sm:text-base">
                          <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0" />
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
      <section className="py-16 sm:py-20 lg:py-28 relative bg-muted/10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20"
          >
            <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-secondary mb-3 sm:mb-4">
              Core Capabilities
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              Enterprise-Grade <AnimatedGradientText>Core Features</AnimatedGradientText>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
              Built on WireGuard's proven cryptographic foundation with intelligent peer-to-peer mesh networking
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {capabilities.map((cap, index) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-card/50 border border-border/50 hover:border-secondary/30 transition-all duration-300"
              >
                <div className="p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-secondary/10 text-secondary w-fit mb-4 sm:mb-5 border border-secondary/20 group-hover:bg-secondary/20 transition-colors">
                  <cap.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <h3 className="font-heading text-base sm:text-lg lg:text-xl font-semibold text-foreground mb-2 sm:mb-3 group-hover:text-secondary transition-colors">
                  {cap.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{cap.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Security, Zero Complexity */}
      <section className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20"
          >
            <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-secondary mb-3 sm:mb-4">
              Enterprise Features
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              Enterprise Security, <AnimatedGradientText>Zero Complexity</AnimatedGradientText>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">
              Advanced identity verification and seamless integrations for enterprise-grade security
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto mb-12 sm:mb-16">
            {/* Identity & Device Verification */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <PremiumCard className="h-full">
                <div className="p-5 sm:p-6 lg:p-8">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center mb-4 sm:mb-6 border border-secondary/20">
                    <Fingerprint className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-secondary" />
                  </div>
                  <h3 className="font-heading text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-2 sm:mb-4">
                    Identity & Device Verification
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                    Continuous verification of user identity and device posture before granting access to any resource.
                  </p>
                  <ul className="space-y-2 sm:space-y-3">
                    {[
                      'Multi-factor authentication (MFA)',
                      'Disk encryption verification',
                      'Antivirus status checks',
                      'OS patch compliance',
                      'Device fingerprinting',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 sm:gap-3 text-foreground/90 text-sm sm:text-base">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </PremiumCard>
            </motion.div>

            {/* SSO Integration */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <PremiumCard className="h-full">
                <div className="p-8 lg:p-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center mb-6 border border-secondary/20">
                    <Users className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                    Seamless SSO Integration
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Integrate with your existing identity provider for centralized user management and authentication.
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { name: 'Okta', available: true },
                      { name: 'Azure AD', available: true },
                      { name: 'Google Workspace', available: true },
                      { name: 'Microsoft 365', available: true },
                      { name: 'SAML 2.0', available: true },
                      { name: 'Custom OIDC', available: true },
                    ].map((provider) => (
                      <div
                        key={provider.name}
                        className="flex items-center gap-2 p-3 rounded-lg bg-muted/30 border border-border"
                      >
                        <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                        <span className="text-sm font-medium text-foreground">{provider.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </PremiumCard>
            </motion.div>
          </div>

          {/* AI-Driven Zero Trust Engine */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <PremiumCard>
              <div className="p-10 lg:p-12 text-center">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center mx-auto mb-6 border border-secondary/20">
                  <Bot className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="font-heading text-3xl font-bold text-foreground mb-4">
                  AI-Driven <AnimatedGradientText>Zero Trust Engine</AnimatedGradientText>
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
                  Adaptive access policies powered by machine learning that automatically adjust security posture based on real-time risk assessment.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      icon: Brain,
                      title: 'Behavioral Analysis',
                      description: 'Detects anomalies in user behavior patterns',
                    },
                    {
                      icon: Activity,
                      title: 'Real-Time Risk Scoring',
                      description: 'Dynamic trust scores based on context',
                    },
                    {
                      icon: ShieldCheck,
                      title: 'Automated Response',
                      description: 'Instant policy adjustments to threats',
                    },
                  ].map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="p-6 rounded-xl bg-muted/30 border border-border"
                    >
                      <feature.icon className="w-8 h-8 text-secondary mx-auto mb-4" />
                      <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </PremiumCard>
          </motion.div>
        </div>
      </section>

      {/* Lightning Performance */}
      <section className="py-28 lg:py-36 relative bg-muted/20">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-secondary mb-4">
              Performance Metrics
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              <AnimatedGradientText>Lightning Performance</AnimatedGradientText> at Scale
            </h2>
            <p className="text-lg text-muted-foreground">
              10x faster than traditional VPNs with peer-to-peer architecture
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Performance Comparison Chart */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <PremiumCard>
                  <div className="p-8">
                    <h3 className="font-heading text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                      <Zap className="w-6 h-6 text-secondary" />
                      Connection Latency
                    </h3>
                    <div className="space-y-6">
                      {[
                        { label: 'Traditional VPN', value: 120, color: 'bg-muted-foreground' },
                        { label: 'Cloud VPN', value: 80, color: 'bg-muted-foreground/80' },
                        { label: 'XeroTrust', value: 18, color: 'bg-gradient-to-r from-secondary to-primary' },
                      ].map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-foreground">{item.label}</span>
                            <span className="text-sm font-bold text-secondary">{item.value}ms</span>
                          </div>
                          <div className="h-3 bg-muted rounded-full overflow-hidden">
                            <motion.div
                              className={item.color}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${(item.value / 120) * 100}%` }}
                              transition={{ duration: 1, delay: i * 0.1 + 0.3 }}
                              viewport={{ once: true }}
                              style={{ height: '100%' }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </PremiumCard>
              </motion.div>

              {/* Setup Time Comparison */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <PremiumCard>
                  <div className="p-8">
                    <h3 className="font-heading text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                      <Clock className="w-6 h-6 text-secondary" />
                      Deployment Time
                    </h3>
                    <div className="space-y-6">
                      {[
                        { label: 'Traditional VPN', value: 100, time: '2-4 weeks', color: 'bg-muted-foreground' },
                        { label: 'Cloud VPN', value: 60, time: '3-5 days', color: 'bg-muted-foreground/80' },
                        { label: 'XeroTrust', value: 5, time: '5 minutes', color: 'bg-gradient-to-r from-secondary to-primary' },
                      ].map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-foreground">{item.label}</span>
                            <span className="text-sm font-bold text-secondary">{item.time}</span>
                          </div>
                          <div className="h-3 bg-muted rounded-full overflow-hidden">
                            <motion.div
                              className={item.color}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${item.value}%` }}
                              transition={{ duration: 1, delay: i * 0.1 + 0.3 }}
                              viewport={{ once: true }}
                              style={{ height: '100%' }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </PremiumCard>
              </motion.div>
            </div>

            {/* Key Performance Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: '<20ms', label: 'Average Latency', icon: Zap },
                { value: '99.99%', label: 'Uptime SLA', icon: ShieldCheck },
                { value: '10x', label: 'Faster Setup', icon: Clock },
                { value: '95%', label: 'Latency Reduction', icon: BarChart3 },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 rounded-xl bg-card border border-border hover:border-secondary/30 transition-all duration-300"
                >
                  <stat.icon className="w-6 h-6 text-secondary mx-auto mb-3" />
                  <p className="font-heading text-3xl font-bold text-gradient mb-1">{stat.value}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Complete Audit Logs */}
      <section className="py-28 lg:py-36 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-secondary mb-4">
                Compliance & Auditing
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                Complete <AnimatedGradientText>Audit Logs</AnimatedGradientText>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Every connection attempt, authentication event, and policy decision is logged with complete context for compliance and forensic analysis.
              </p>
              <ul className="space-y-4">
                {[
                  { icon: Eye, text: 'Real-time activity monitoring', detail: 'Track every connection as it happens' },
                  { icon: Lock, text: 'Immutable audit trail', detail: 'Tamper-proof logging for compliance' },
                  { icon: BarChart3, text: 'Advanced analytics', detail: 'Identify patterns and anomalies' },
                  { icon: ShieldCheck, text: 'Compliance reporting', detail: 'SOC 2, GDPR, HIPAA ready' },
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0 border border-secondary/20">
                      <item.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{item.text}</p>
                      <p className="text-sm text-muted-foreground">{item.detail}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <PremiumCard>
                <div className="p-8">
                  <div className="space-y-3 font-mono text-xs">
                    <div className="text-muted-foreground">$ xerotrust logs --tail 5</div>
                    {[
                      { time: '14:23:45', user: 'sarah@company.com', action: 'CONNECT', resource: 'prod-db-01', status: 'ALLOWED', color: 'text-green-500' },
                      { time: '14:23:42', user: 'mike@company.com', action: 'AUTH', resource: 'vpn-gateway', status: 'MFA_REQUIRED', color: 'text-yellow-500' },
                      { time: '14:23:38', user: 'admin@company.com', action: 'POLICY_UPDATE', resource: 'marketing-team', status: 'SUCCESS', color: 'text-blue-500' },
                      { time: '14:23:35', user: 'john@company.com', action: 'CONNECT', resource: 'dev-server', status: 'DENIED', color: 'text-red-500' },
                      { time: '14:23:31', user: 'lisa@company.com', action: 'POSTURE_CHECK', resource: 'laptop-443', status: 'PASSED', color: 'text-green-500' },
                    ].map((log, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="p-3 rounded-lg bg-muted/50 border border-border overflow-x-auto"
                      >
                        <div className="flex gap-3 items-center whitespace-nowrap">
                          <span className="text-muted-foreground">{log.time}</span>
                          <span className="text-foreground/70">{log.user}</span>
                          <span className="text-secondary">{log.action}</span>
                          <span className="text-foreground/70">{log.resource}</span>
                          <span className={log.color}>{log.status}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </PremiumCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Platform Support & Compliance */}
      <section className="py-20 lg:py-28 relative border-y border-border/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Platform Support */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-secondary mb-4">
                  Platform Support
                </span>
                <h3 className="font-heading text-3xl font-bold text-foreground mb-4">
                  Deploy <AnimatedGradientText>Anywhere</AnimatedGradientText>
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Currently available for Windows and Linux with one-line installation.
                  Full support for Docker containers and Kubernetes workloads.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-muted/30 border border-border">
                  <CheckCircle2 className="w-5 h-5 text-secondary mb-2" />
                  <p className="font-semibold text-foreground">Windows</p>
                  <p className="text-sm text-muted-foreground">Available Now</p>
                </div>
                <div className="p-4 rounded-xl bg-muted/30 border border-border">
                  <CheckCircle2 className="w-5 h-5 text-secondary mb-2" />
                  <p className="font-semibold text-foreground">Linux</p>
                  <p className="text-sm text-muted-foreground">Available Now</p>
                </div>
                <div className="p-4 rounded-xl bg-muted/30 border border-border">
                  <Clock className="w-5 h-5 text-muted-foreground mb-2" />
                  <p className="font-semibold text-foreground">macOS</p>
                  <p className="text-sm text-muted-foreground">Coming Soon</p>
                </div>
                <div className="p-4 rounded-xl bg-muted/30 border border-border">
                  <Clock className="w-5 h-5 text-muted-foreground mb-2" />
                  <p className="font-semibold text-foreground">iOS & Android</p>
                  <p className="text-sm text-muted-foreground">Coming Soon</p>
                </div>
              </div>
            </motion.div>

            {/* Compliance & Security */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-secondary mb-4">
                  Compliance & Security
                </span>
                <h3 className="font-heading text-3xl font-bold text-foreground mb-4">
                  Enterprise <AnimatedGradientText>Ready</AnimatedGradientText>
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Designed for SOC 2, GDPR, and HIPAA compliance with complete audit trails and granular access controls.
                </p>
              </div>
              <ul className="space-y-4">
                {[
                  { icon: ShieldCheck, text: 'SOC 2 Type II Ready' },
                  { icon: Lock, text: 'GDPR Compliant Architecture' },
                  { icon: Activity, text: 'HIPAA-Ready Security Controls' },
                  { icon: Eye, text: 'Complete Audit Trail Logging' },
                  { icon: Network, text: 'No Additional Firewalls Required' },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center border border-secondary/20">
                      <item.icon className="w-5 h-5 text-secondary" />
                    </div>
                    <span className="text-foreground font-medium">{item.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Why XeroTrust vs VPN */}
      <section className="py-28 lg:py-36 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5" />
        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-secondary mb-4">
              Comparison
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why <AnimatedGradientText>XeroTrust</AnimatedGradientText> Beats Traditional VPNs
            </h2>
            <p className="text-lg text-muted-foreground">
              See why modern organizations are replacing legacy VPNs with peer-to-peer zero-trust architecture
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Traditional VPN */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                  <Network className="w-6 h-6 text-muted-foreground" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground">Traditional VPN</h3>
              </div>

              <div className="space-y-4">
                {[
                  { text: 'Centralized bottleneck architecture', bad: true },
                  { text: 'High latency (100ms+)', bad: true },
                  { text: 'Complex manual configuration', bad: true },
                  { text: 'Weeks to deploy', bad: true },
                  { text: 'Implicit trust model', bad: true },
                  { text: 'Limited device verification', bad: true },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-muted/30"
                  >
                    <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-500 text-xs">✕</span>
                    </div>
                    <span className="text-foreground/70">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* XeroTrust */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-gradient">XeroTrust</h3>
              </div>

              <div className="space-y-4">
                {[
                  { text: 'Peer-to-peer mesh network', good: true },
                  { text: 'Ultra-low latency (<20ms)', good: true },
                  { text: 'Auto-discovery & routing', good: true },
                  { text: '5-minute deployment', good: true },
                  { text: 'Zero-trust by default', good: true },
                  { text: 'Continuous device posture checks', good: true },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-r from-secondary/10 to-primary/10 border border-secondary/20"
                  >
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Performance Metrics Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {[
              { metric: '95%', label: 'Lower Latency', icon: Zap },
              { metric: '87%', label: 'Faster Setup', icon: Clock },
              { metric: '100%', label: 'Zero Trust', icon: ShieldCheck },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-card to-background border border-border hover:border-secondary/30 transition-all duration-300"
              >
                <stat.icon className="w-8 h-8 text-secondary mx-auto mb-4" />
                <p className="font-heading text-5xl font-bold text-gradient mb-2">{stat.metric}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-28 lg:py-36 relative bg-muted/10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-secondary mb-4">
              How It Works
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Deploy in <AnimatedGradientText>3 Simple Steps</AnimatedGradientText>
            </h2>
            <p className="text-lg text-muted-foreground">
              From zero to zero-trust in under 5 minutes. No complex configurations, no network engineering degree required.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: '01',
                title: 'Install Agent',
                description: 'Run a single command to install the XeroTrust agent on your devices.',
                code: 'curl -sSL https://get.xerotrust.ai | sh',
                icon: DollarSign,
              },
              {
                step: '02',
                title: 'Configure Policies',
                description: 'Define granular access policies based on user, device, and resource requirements.',
                icon: Lock,
              },
              {
                step: '03',
                title: 'Connect Securely',
                description: 'Automatic peer discovery establishes encrypted connections. Zero manual network configuration.',
                icon: CheckCircle2,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -top-6 left-6">
                  <span className="font-heading text-8xl font-bold text-gradient opacity-20">{item.step}</span>
                </div>

                <PremiumCard className="h-full relative z-10">
                  <div className="p-8">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center mb-6 border border-secondary/20">
                      <item.icon className="w-7 h-7 text-secondary" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-foreground mb-4">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{item.description}</p>

                    {item.code && (
                      <div className="p-4 rounded-lg bg-muted/50 border border-border font-mono text-sm text-secondary overflow-x-auto">
                        {item.code}
                      </div>
                    )}
                  </div>
                </PremiumCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deploy in 60 Seconds */}
      <section className="py-28 lg:py-36 relative overflow-hidden bg-gradient-to-b from-muted/10 to-transparent">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-secondary mb-4">
              Quick Start
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Deploy in <AnimatedGradientText>60 Seconds</AnimatedGradientText>
            </h2>
            <p className="text-lg text-muted-foreground">
              From zero to zero-trust in under a minute. No complex configurations, no IT team required.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <PremiumCard>
                <div className="p-10 lg:p-12">
                  {/* Terminal Header */}
                  <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <span className="text-sm text-muted-foreground ml-4 font-mono">terminal</span>
                  </div>

                  {/* Terminal Content */}
                  <div className="font-mono text-sm space-y-4">
                    {/* Step 1: Install */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-start gap-2">
                        <span className="text-secondary">$</span>
                        <div className="flex-1">
                          <span className="text-foreground">curl -sSL https://get.xerotrust.ai | sh</span>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      viewport={{ once: true }}
                      className="text-muted-foreground pl-4 space-y-1"
                    >
                      <div>⚡ Downloading XeroTrust agent...</div>
                      <div>✓ Installing to /usr/local/bin</div>
                      <div>✓ Creating system service</div>
                      <div className="text-green-500">✓ Installation complete!</div>
                    </motion.div>

                    {/* Step 2: Login */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      viewport={{ once: true }}
                      className="pt-4"
                    >
                      <div className="flex items-start gap-2">
                        <span className="text-secondary">$</span>
                        <div className="flex-1">
                          <span className="text-foreground">xerotrust login</span>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                      viewport={{ once: true }}
                      className="text-muted-foreground pl-4 space-y-1"
                    >
                      <div>Opening browser for authentication...</div>
                      <div>✓ Authenticated as user@company.com</div>
                      <div className="text-green-500">✓ Device registered successfully!</div>
                    </motion.div>

                    {/* Step 3: Connect */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 1.0 }}
                      viewport={{ once: true }}
                      className="pt-4"
                    >
                      <div className="flex items-start gap-2">
                        <span className="text-secondary">$</span>
                        <div className="flex-1">
                          <span className="text-foreground">xerotrust connect</span>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 1.2 }}
                      viewport={{ once: true }}
                      className="text-muted-foreground pl-4 space-y-1"
                    >
                      <div>🔍 Discovering peers...</div>
                      <div>🔗 Establishing encrypted tunnels...</div>
                      <div>✓ Connected to 3 resources</div>
                      <div className="text-green-500 font-semibold pt-2">
                        ✓ Zero-trust network active! Latency: 12ms
                      </div>
                    </motion.div>

                    {/* Status */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 1.4 }}
                      viewport={{ once: true }}
                      className="pt-6 border-t border-border mt-6"
                    >
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="p-4 rounded-lg bg-secondary/10 border border-secondary/20">
                          <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Status</div>
                          <div className="text-green-500 font-semibold">Connected</div>
                        </div>
                        <div className="p-4 rounded-lg bg-secondary/10 border border-secondary/20">
                          <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Latency</div>
                          <div className="text-secondary font-semibold">12ms</div>
                        </div>
                        <div className="p-4 rounded-lg bg-secondary/10 border border-secondary/20">
                          <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Resources</div>
                          <div className="text-secondary font-semibold">3 Active</div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6 }}
                    viewport={{ once: true }}
                    className="mt-10 pt-8 border-t border-border text-center"
                  >
                    <p className="text-muted-foreground mb-6">
                      Ready to experience zero-friction security?
                    </p>
                    <MagneticButton>
                      <Button variant="hero" size="xl" asChild>
                        <Link to="/contact">
                          Get Started Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </MagneticButton>
                  </motion.div>
                </div>
              </PremiumCard>
            </motion.div>

            {/* Key Benefits Below */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-6 mt-12"
            >
              {[
                {
                  icon: Clock,
                  title: 'Under 60 Seconds',
                  description: 'From installation to first connection',
                },
                {
                  icon: Sparkles,
                  title: 'Zero Configuration',
                  description: 'Auto-discovery handles the complexity',
                },
                {
                  icon: ShieldCheck,
                  title: 'Instant Security',
                  description: 'Full zero-trust protection immediately',
                },
              ].map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 rounded-xl bg-card/50 border border-border"
                >
                  <benefit.icon className="w-8 h-8 text-secondary mx-auto mb-4" />
                  <h4 className="font-heading font-semibold text-foreground mb-2">{benefit.title}</h4>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases & Real Results - New Version */}
      <section className="py-28 lg:py-36 relative bg-gradient-to-b from-muted/10 to-transparent">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-secondary mb-4">
              Use Cases & Real Results
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Organizations Deliver <AnimatedGradientText>Measurable Impact</AnimatedGradientText>
            </h2>
            <p className="text-lg text-muted-foreground">
              With zero-trust networking
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Distributed Teams */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <PremiumCard className="h-full">
                <div className="p-8 lg:p-10 flex flex-col h-full">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center mb-6 border border-secondary/20">
                    <Users className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                    Distributed Teams
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                    Secure remote access without VPN bottlenecks
                  </p>

                  <div className="space-y-4 pt-6 border-t border-border">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Onboarding</span>
                      <span className="font-bold text-2xl text-secondary">87% faster</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Latency</span>
                      <span className="font-bold text-2xl text-secondary">95% reduction</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Support Issues</span>
                      <span className="font-bold text-2xl text-secondary">100% eliminated</span>
                    </div>
                  </div>
                </div>
              </PremiumCard>
            </motion.div>

            {/* Multi-Cloud Networks */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <PremiumCard className="h-full">
                <div className="p-8 lg:p-10 flex flex-col h-full">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center mb-6 border border-secondary/20">
                    <Globe2 className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                    Multi-Cloud Networks
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                    Unified connectivity across AWS, GCP, and on-premises
                  </p>

                  <div className="space-y-4 pt-6 border-t border-border">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Region Setup</span>
                      <span className="font-bold text-2xl text-secondary">99% faster</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Cross-Cloud Latency</span>
                      <span className="font-bold text-2xl text-secondary">85% reduction</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Incidents</span>
                      <span className="font-bold text-2xl text-secondary">Eliminated</span>
                    </div>
                  </div>
                </div>
              </PremiumCard>
            </motion.div>

            {/* Compliance & Security */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <PremiumCard className="h-full">
                <div className="p-8 lg:p-10 flex flex-col h-full">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center mb-6 border border-secondary/20">
                    <ShieldCheck className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                    Compliance & Security
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                    Audit-ready database access with zero-trust enforcement
                  </p>

                  <div className="space-y-4 pt-6 border-t border-border">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Audit Time</span>
                      <span className="font-bold text-2xl text-secondary">90% faster</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Provisioning</span>
                      <span className="font-bold text-2xl text-secondary">99.8% faster</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Compliance</span>
                      <span className="font-bold text-2xl text-secondary">100% aligned</span>
                    </div>
                  </div>
                </div>
              </PremiumCard>
            </motion.div>
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
                    <Button variant="hero" size="xl" asChild>
                      <a href="https://calendly.com/hello-axiomio/30min?back=1&month=2025-12" target="_blank" rel="noopener noreferrer">
                        Start Free Trial
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
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


      {/* ROI Calculator */}
      <XeroTrustROICalculator />

      <Footer />
    </div>
  );
}
