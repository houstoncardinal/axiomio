import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Zap,
  TrendingUp,
  TrendingDown,
  Shield,
  Clock,
  DollarSign,
  Layers,
  BarChart3,
  Workflow,
  Globe2,
  CheckCircle2,
  Sparkles,
  Bot,
  Building2,
  Server,
  Eye,
  AlertTriangle,
  Target,
  Search,
  FileCheck,
  Network,
  Calendar,
  Mail,
  Phone,
  ExternalLink,
  Play,
  ArrowUpRight,
  Activity,
  Lock,
  Cloud,
  Cpu,
  BookOpen,
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { AnimatedGradientText } from '@/components/AnimatedGradientText';
import { MagneticButton } from '@/components/MagneticButton';
import { PremiumCard } from '@/components/PremiumCard';
import { SEOHead } from '@/components/SEOHead';
import { xops360PageSchema } from '@/lib/seo-schemas-enhanced';
import { CapabilitiesGrid } from '@/components/CapabilitiesGrid';

const problems = [
  {
    icon: TrendingUp,
    title: 'Unpredictable Cost Escalation',
    description: 'Cloud bills surge monthly with no transparent breakdown of spending drivers.',
    stat: '40%',
    statLabel: 'avg overspend',
  },
  {
    icon: AlertTriangle,
    title: 'Hidden Security Exposures',
    description: 'Vulnerabilities remain undetected until audits, creating critical security windows.',
    stat: '287',
    statLabel: 'days avg detection',
  },
  {
    icon: DollarSign,
    title: 'Silent Budget Erosion',
    description: 'Idle instances and over-provisioned resources continuously drain budget.',
    stat: '35%',
    statLabel: 'waste typical',
  },
  {
    icon: Layers,
    title: 'Multi-Account Chaos',
    description: 'Distributed environments eliminate unified visibility across services.',
    stat: '12+',
    statLabel: 'tools needed',
  },
  {
    icon: Calendar,
    title: 'Annual Reviews Aren\'t Enough',
    description: 'Traditional cloud Well-Architected Reviews occur once yearly, leaving 364 days of potential inefficiencies unaddressed and optimization opportunities unrealized.',
    stat: '364',
    statLabel: 'days unmonitored',
  },
];

const capabilities = [
  {
    icon: Bot,
    title: 'AI Cost Optimization Agent',
    description: 'Conversational AI provides instant answers about cost drivers and optimization opportunities.',
    features: ['Discover idle resources', 'Cost attribution by team', 'Automated recommendations'],
    gradient: 'from-violet-500/20 to-purple-500/10',
    iconColor: 'text-violet-400',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Cost Intelligence',
    description: 'Live visibility into cloud spending with actionable recommendations as they emerge.',
    features: ['Live spend tracking', 'Anomaly detection', 'Budget forecasting'],
    gradient: 'from-emerald-500/20 to-green-500/10',
    iconColor: 'text-emerald-400',
  },
  {
    icon: Shield,
    title: 'Cloud Security Posture (CSPM)',
    description: 'Continuous security monitoring identifies and remediates misconfigurations.',
    features: ['Framework compliance', 'Risk prioritization', 'Auto-remediation'],
    gradient: 'from-red-500/20 to-orange-500/10',
    iconColor: 'text-red-400',
  },
  {
    icon: Eye,
    title: 'Container Vulnerability Scanning',
    description: 'Automated security for AMIs and ECR images before deployment.',
    features: ['Pre-deploy scanning', 'CVE detection', 'Compliance checks'],
    gradient: 'from-cyan-500/20 to-blue-500/10',
    iconColor: 'text-cyan-400',
  },
  {
    icon: FileCheck,
    title: 'Cloud WAR AI Module',
    description: 'Continuous Well-Architected Review across all pillars.',
    features: ['5 pillar analysis', 'Best practice alignment', 'ROI tracking'],
    gradient: 'from-amber-500/20 to-yellow-500/10',
    iconColor: 'text-amber-400',
  },
  {
    icon: Network,
    title: 'Unified Asset Management',
    description: 'Single-pane visibility across all cloud assets and regions.',
    features: ['Asset inventory', 'Idle detection', 'Optimization candidates'],
    gradient: 'from-indigo-500/20 to-blue-500/10',
    iconColor: 'text-indigo-400',
  },
];

const caseStudies = [
  {
    company: 'Sharpsell',
    industry: 'Financial Services',
    logo: '/logos/client-logos/sharpsell.png',
    results: ['22% cost reduction', 'Continuous compliance', 'Automated optimization'],
    quote: 'Xops360 transformed our cloud operations while ensuring compliance.',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    company: 'King & Shaxson',
    industry: 'Banking & Trading',
    logo: '/logos/client-logos/kingshaxson.png',
    results: ['25% lower costs', 'Enhanced security', 'Proactive monitoring'],
    quote: 'Security and cost optimization delivered simultaneously.',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    company: 'DreamCasino',
    industry: 'Gaming Platform',
    logo: '',
    results: ['25%+ savings', 'Improved scalability', 'Better performance'],
    quote: 'Handling millions of users while cutting costs.',
    color: 'from-purple-500 to-pink-600',
  },
];

const metrics = [
  { value: '22%', label: 'Average Cost Reduction', icon: TrendingDown },
  { value: '100%', label: 'Compliance Maintained', icon: Shield },
  { value: '24/7', label: 'Active Monitoring', icon: Activity },
  { value: '99.9%', label: 'Uptime SLA', icon: Server },
];

const steps = [
  { number: '01', title: 'Connect', description: 'Plug in your cloud accounts with secure, read-only access.', icon: Cloud },
  { number: '02', title: 'Observe', description: 'Build a 360° view of cost, risk, and compliance.', icon: Eye },
  { number: '03', title: 'Optimize', description: 'AI-driven insights to right-size and remove waste.', icon: Cpu },
  { number: '04', title: 'Improve', description: 'Continuous optimization and audit-ready posture.', icon: Target },
];

export default function Xops360() {
  const heroRef = useRef<HTMLDivElement>(null);

  const openCalendly = () => {
    window.open("https://calendly.com/kishan-k", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <SEOHead
        title="Xops360 | AI-Powered Cloud Optimization Platform | AXIOMIO"
        description="Slash cloud spend, close security gaps, and stay audit-ready with one 360° view. AI-driven cost optimization, continuous security monitoring, and proactive compliance management."
        keywords="Xops360, cloud cost optimization, cloud security, CSPM, FinOps, compliance automation, AWS optimization, Azure optimization, vulnerability scanning, Well-Architected Review"
        canonicalUrl="https://axiomio.com/xops360"
        structuredData={xops360PageSchema}
      />
      <Navbar />

      {/* Hero Section - Immersive */}
      <header ref={heroRef} className="relative min-h-[100vh] flex items-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(var(--secondary)/0.1),transparent_50%)]" />
          
          {/* Simplified Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.2)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.2)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black_40%,transparent_100%)]" />

          {/* Static Orbs - No Animation for Performance */}
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[80px] opacity-40" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[80px] opacity-30" />
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-8 py-32">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-8"
                >
                  <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
                    <div className="flex items-center gap-1.5">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </span>
                      <span className="text-xs font-medium text-green-500">Live Platform</span>
                    </div>
                    <span className="h-4 w-px bg-border" />
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">AI-Powered Cloud Ops</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.6 }}
                  className="mb-8"
                >
                  <img
                    src="/logos/Xops360/Logo_Colored_v1.png"
                    alt="Xops360 Logo"
                    className="h-12 w-auto mx-auto lg:mx-0"
                  />
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.7 }}
                  className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-8"
                >
                  <span className="block">Slash Cloud Spend.</span>
                  <span className="block">Close Security Gaps.</span>
                  <span className="block text-gradient">Stay Audit-Ready.</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-xl lg:text-2xl text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0"
                >
                  Give your teams an AI co-pilot that explains every spike, flags every risk, and finds savings in real time.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                >
                  <MagneticButton>
                    <Button variant="hero" size="xl" asChild className="text-base px-8 py-6">
                      <a href="https://xops360.ai" target="_blank" rel="noopener noreferrer">
                        Start Free Trial
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </a>
                    </Button>
                  </MagneticButton>
                  <MagneticButton>
                    <Button variant="hero-outline" size="xl" onClick={openCalendly} className="text-base px-8 py-6">
                      Talk to an Expert
                    </Button>
                  </MagneticButton>
                </motion.div>

                {/* Documentation CTA */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8"
                >
                  <Link
                    to="/books/xops-360-documentation"
                    className="group inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-primary/10 to-cyan-500/10 border border-primary/30 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                  >
                    <div className="p-2 rounded-lg bg-primary/20">
                      <BookOpen className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">Complete Documentation</p>
                      <p className="text-xs text-muted-foreground">Learn everything about Xops360</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-primary ml-auto group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>

                {/* Trust Badges */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mt-8 pt-8 border-t border-border/50"
                >
                  <p className="text-sm text-muted-foreground mb-4">Available on</p>
                  <div className="flex items-center gap-6 justify-center lg:justify-start flex-wrap">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/50 border border-border/50 hover:border-primary/30 transition-colors">
                      <img src="/logos/aws-badges/tiered-badge.png" alt="AWS" className="h-6 w-auto" loading="lazy" />
                      <span className="text-xs font-medium text-foreground">AWS Marketplace</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/50 border border-border/50 hover:border-primary/30 transition-colors">
                      <img src="/azurelogo.png" alt="Azure" className="h-6 w-auto" loading="lazy" />
                      <span className="text-xs font-medium text-foreground">Azure Marketplace</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right - Interactive Dashboard */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: 50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                className="relative lg:block hidden"
              >
                {/* Static Glow Effect - No Animation */}
                <div className="absolute -inset-6 bg-gradient-to-r from-primary/20 via-cyan-500/20 to-primary/20 rounded-3xl blur-2xl opacity-50" />

                <div className="relative bg-card/90 backdrop-blur-sm rounded-2xl border border-border/50 shadow-2xl overflow-hidden">
                  {/* Header Bar */}
                  <div className="flex items-center justify-between px-6 py-4 border-b border-border/50 bg-gradient-to-r from-muted/40 via-muted/30 to-muted/40">
                    <div className="flex items-center gap-3">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                      </div>
                      <span className="text-xs font-semibold text-muted-foreground tracking-wide">Xops360 Dashboard</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </span>
                      <span className="text-xs font-semibold text-green-500">Live</span>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    {/* Main Stat */}
                    <div className="p-5 rounded-xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-muted-foreground">Monthly Cloud Spend</span>
                        <span className="flex items-center gap-1 text-green-500 text-sm font-bold">
                          <TrendingDown className="w-4 h-4" />
                          -22%
                        </span>
                      </div>
                      <p className="text-4xl font-bold text-foreground mb-1">$847,230</p>
                      <p className="text-xs text-muted-foreground mb-3">Saving $243k/year</p>
                      <div className="mt-3 h-2.5 rounded-full bg-muted/50 overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-primary via-cyan-500 to-green-500 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: '78%' }}
                          transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
                        />
                      </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-3">
                      <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/20 text-center">
                        <p className="text-2xl font-bold text-red-500">3</p>
                        <p className="text-xs text-muted-foreground font-medium">Critical Risks</p>
                      </div>
                      <div className="p-4 rounded-xl bg-green-500/5 border border-green-500/20 text-center">
                        <p className="text-2xl font-bold text-green-500">100%</p>
                        <p className="text-xs text-muted-foreground font-medium">Compliance</p>
                      </div>
                      <div className="p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/20 text-center">
                        <p className="text-2xl font-bold text-cyan-500">47</p>
                        <p className="text-xs text-muted-foreground font-medium">Optimizations</p>
                      </div>
                    </div>

                    {/* AI Insight Card */}
                    <motion.div
                      className="p-4 rounded-xl bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.5 }}
                    >
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-violet-500/20">
                          <Bot className="w-5 h-5 text-violet-400" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-violet-400 mb-1 uppercase tracking-wide">AI Insight</p>
                          <p className="text-sm text-foreground leading-relaxed">15 idle EC2 instances detected. Estimated savings: <span className="font-bold text-green-500">$4,200/mo</span></p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

      </header>

      {/* Problems Section - Bento Style */}
      <section className="py-16 lg:py-20 relative bg-muted/30 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        {/* Background Decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.05),transparent_60%)]" />
        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-20"
          >
            <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.3em] text-primary mb-6 px-4 py-2 rounded-full bg-primary/5 border border-primary/20">
              <AlertTriangle className="w-4 h-4" />
              The Challenge
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              <AnimatedGradientText>Tackling issues before they become problems</AnimatedGradientText>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Organizations face critical cloud challenges that impact efficiency, security, and budget control
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {problems.map((problem, index) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative h-full p-6 rounded-2xl bg-card/80 border border-border hover:border-red-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-red-500/20 to-orange-500/10 text-red-500">
                        <problem.icon className="w-6 h-6" />
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-gradient bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text">{problem.stat}</p>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider">{problem.statLabel}</p>
                      </div>
                    </div>
                    <h3 className="font-heading text-base font-bold text-foreground mb-3 group-hover:text-red-500 transition-colors">{problem.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">{problem.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Intro - Large Typography */}
      <section className="py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.08),transparent_70%)]" />
        {/* Static Background Elements */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-[80px] opacity-40" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-500/8 rounded-full blur-[80px] opacity-40" />
        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 mb-10 p-4 rounded-2xl bg-card/50 border border-border/50"
            >
              <img src="/logos/Xops360/Logo_Sky_Blue.png" alt="Xops360" className="h-16 w-auto" loading="lazy" />
            </motion.div>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
              AI-Powered Cloud Optimization,{' '}
              <AnimatedGradientText>Risk Mitigation & Compliance</AnimatedGradientText>
            </h2>

            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-12 max-w-4xl mx-auto">
              Xops360 delivers comprehensive cloud management through an integrated platform combining AI-driven cost optimization, continuous security monitoring, and proactive compliance management.
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative max-w-3xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-primary/5 via-cyan-500/5 to-primary/5 border border-primary/20"
            >
              <div className="absolute -left-2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-cyan-500 to-primary rounded-full" />
              <Sparkles className="w-8 h-8 text-primary mx-auto mb-4" />
              <blockquote className="text-xl lg:text-2xl font-medium text-foreground italic">
                "Know what you're spending, what's at risk, and what to fix—instantly."
              </blockquote>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Metrics Bar - Floating Cards */}
      <section className="py-12 lg:py-16 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {metrics.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative p-8 rounded-2xl bg-card/80 border border-border hover:border-primary/40 transition-all duration-300 text-center">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                  <p className="font-heading text-4xl lg:text-5xl font-bold text-gradient mb-2">{stat.value}</p>
                  <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Capabilities - Premium Grid */}
      <section className="py-16 lg:py-20 relative bg-muted/30 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.05),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.1)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_40%,transparent_100%)]" />

        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-20"
          >
            <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.3em] text-primary mb-6 px-4 py-2 rounded-full bg-primary/5 border border-primary/20">
              <Sparkles className="w-4 h-4" />
              Platform Capabilities
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Comprehensive Cloud Management <AnimatedGradientText>Powered by AI</AnimatedGradientText>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Six powerful modules working together to optimize, secure, and manage your cloud infrastructure
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {capabilities.map((cap, index) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className={`relative h-full p-8 rounded-2xl bg-card/80 border border-border hover:border-primary/40 transition-all duration-300 overflow-hidden`}>
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${cap.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                  <div className="relative">
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${cap.gradient} w-fit mb-6`}>
                      <cap.icon className={`w-7 h-7 ${cap.iconColor}`} />
                    </div>

                    <h3 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{cap.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed text-sm">{cap.description}</p>

                    <ul className="space-y-3">
                      {cap.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-sm text-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Xops360 Capabilities Grid */}
      <CapabilitiesGrid />

      {/* Case Studies - Cards with Gradient */}
      <section className="py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(var(--primary)/0.05),transparent_60%)]" />
        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-20"
          >
            <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.3em] text-primary mb-6 px-4 py-2 rounded-full bg-primary/5 border border-primary/20">
              <Building2 className="w-4 h-4" />
              Customer Success
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Driving Measurable Results <AnimatedGradientText>Across Industries</AnimatedGradientText>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real organizations achieving significant savings, security improvements, and operational excellence
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.company}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative h-full bg-card/90 rounded-2xl border border-border hover:border-primary/30 overflow-hidden transition-all duration-300">
                  {/* Header */}
                  <div className={`p-6 bg-gradient-to-r ${study.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10" />
                    <div className="relative flex items-center justify-between">
                      <div>
                        <h3 className="font-heading text-2xl font-bold text-white mb-1">{study.company}</h3>
                        <p className="text-white/90 text-sm font-medium">{study.industry}</p>
                      </div>
                      <div className="p-3 rounded-xl bg-white/10">
                        <img src={study.logo} alt={study.company} className="h-10 w-auto object-contain brightness-0 invert" loading="lazy" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <ul className="space-y-3 mb-6">
                      {study.results.map((result) => (
                        <li key={result} className="flex items-center gap-3 text-foreground">
                          <div className="p-1 rounded-full bg-green-500/10">
                            <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                          </div>
                          <span className="font-semibold">{result}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="relative p-4 rounded-xl bg-muted/50 border-l-2 border-primary">
                      <blockquote className="text-muted-foreground italic text-sm">
                        "{study.quote}"
                      </blockquote>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Timeline */}
      <section className="py-16 lg:py-20 relative bg-muted/30 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.05),transparent_60%)]" />
        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-20"
          >
            <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.3em] text-primary mb-6 px-4 py-2 rounded-full bg-primary/5 border border-primary/20">
              <Workflow className="w-4 h-4" />
              Getting Started
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              How Xops360 <AnimatedGradientText>Works</AnimatedGradientText>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Four simple steps to transform your cloud operations and unlock continuous optimization</p>
          </motion.div>

          <div className="relative max-w-6xl mx-auto">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-primary via-cyan-500 to-primary rounded-full opacity-30" />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="flex flex-col items-center text-center">
                    {/* Number Circle */}
                    <div className="relative z-10 mb-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary to-cyan-500 rounded-2xl blur-lg opacity-40" />
                      <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center shadow-xl shadow-primary/20 border border-primary/20">
                        <span className="text-2xl font-bold text-white">{step.number}</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-cyan-500/5 text-primary mb-4 border border-primary/20">
                      <step.icon className="w-7 h-7" />
                    </div>

                    <h3 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <MagneticButton>
              <Button variant="hero" size="xl" asChild className="text-base px-10 py-6">
                <a href="https://xops360.ai" target="_blank" rel="noopener noreferrer">
                  Get Started Today
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[200px]" />
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px]" />
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="relative rounded-3xl overflow-hidden">
              {/* Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-cyan-500 to-primary p-px rounded-3xl">
                <div className="absolute inset-px bg-card rounded-[calc(1.5rem-1px)]" />
              </div>
              
              <div className="relative p-12 lg:p-20">
                <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 items-center">
                  <div>
                    <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-6">
                      Ready to Transform Your{' '}
                      <span className="text-gradient">Cloud Operations?</span>
                    </h2>
                    <p className="text-xl text-muted-foreground mb-10">
                      See how Xops360 can reduce costs, strengthen security, and ensure compliance for your enterprise.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-8">
                      <MagneticButton>
                        <Button variant="hero" size="xl" asChild className="text-base px-8">
                          <a href="https://xops360.ai" target="_blank" rel="noopener noreferrer">
                            Start Free Trial
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </a>
                        </Button>
                      </MagneticButton>
                      <MagneticButton>
                        <Button variant="hero-outline" size="xl" onClick={openCalendly} className="text-base px-8">
                          Schedule a Demo
                        </Button>
                      </MagneticButton>
                    </div>

                    <p className="text-sm text-muted-foreground">No credit card required • Setup in minutes</p>
                  </div>

                  <div className="space-y-4">
                    <a href="mailto:hello@axiomio.com" className="flex items-center gap-4 p-5 rounded-xl bg-muted/50 border border-border hover:border-primary/30 transition-all group">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground group-hover:text-primary transition-colors">hello@axiomio.com</p>
                        <p className="text-sm text-muted-foreground">Email us anytime</p>
                      </div>
                    </a>

                    <a href="tel:+918069290089" className="flex items-center gap-4 p-5 rounded-xl bg-muted/50 border border-border hover:border-primary/30 transition-all group">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground group-hover:text-primary transition-colors">+91 8069290089</p>
                        <p className="text-sm text-muted-foreground">Call our team</p>
                      </div>
                    </a>

                    <button onClick={openCalendly} className="flex items-center gap-4 p-5 rounded-xl bg-muted/50 border border-border hover:border-primary/30 transition-all group w-full text-left">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                        <Calendar className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground group-hover:text-primary transition-colors">Book a Demo</p>
                        <p className="text-sm text-muted-foreground">30-min consultation</p>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
