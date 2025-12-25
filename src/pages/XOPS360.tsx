import React, { useRef } from 'react';
import { motion } from 'framer-motion';
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
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { AnimatedGradientText } from '@/components/AnimatedGradientText';
import { MagneticButton } from '@/components/MagneticButton';
import { PremiumCard } from '@/components/PremiumCard';
import { SEOHead } from '@/components/SEOHead';
import { xops360PageSchema } from '@/lib/seo-schemas-enhanced';

const problems = [
  {
    icon: TrendingUp,
    title: 'Unpredictable Cost Escalation',
    description: 'Cloud bills surge monthly with no transparent breakdown of spending drivers. Finance teams lack visibility into which services, teams, or workloads are consuming budget.',
  },
  {
    icon: AlertTriangle,
    title: 'Hidden Security Exposures',
    description: 'Image vulnerabilities in cloud AMIs and ECR containers remain undetected until scheduled audits, creating critical security windows and compliance risks.',
  },
  {
    icon: DollarSign,
    title: 'Silent Budget Erosion',
    description: 'Idle instances, over-provisioned resources, and forgotten workloads continuously drain budget. Without real-time visibility, waste compounds across quarters.',
  },
  {
    icon: Layers,
    title: 'The Multi-Account Challenge',
    description: 'Distributed cloud environments spanning multiple accounts, regions, and services eliminate unified visibility. Teams operate reactively through disparate tools.',
  },
  {
    icon: Calendar,
    title: 'Annual Reviews Aren\'t Enough',
    description: 'Traditional cloud Well-Architected Reviews occur once yearly, leaving 364 days of potential inefficiencies unaddressed and optimization opportunities unrealized.',
  },
];

const capabilities = [
  {
    icon: Bot,
    title: 'Cloud Cost Optimization Agent',
    description: 'Conversational AI agent provides instant answers about cost drivers, optimization opportunities, and resource utilization patterns across your entire cloud footprint.',
    features: ['Discover idle and over-provisioned resources', 'See cost drivers by account, team, or workload', 'Get prioritized optimization recommendations'],
  },
  {
    icon: BarChart3,
    title: 'Real-Time Cost Intelligence',
    description: 'Live visibility into cloud spending patterns with actionable recommendations. Identify savings opportunities as they emerge, not months later in quarterly reviews.',
    features: ['Live views of spend across regions and services', 'Early warnings on anomalies and budget overruns', 'Recommendations that translate directly into savings'],
  },
  {
    icon: Shield,
    title: 'Continuous Cloud Security Posture Management (CSPM)',
    description: 'Continuous security posture management identifies, prioritizes, and remediates misconfigurations and vulnerabilities.',
    features: ['Continuous scanning against leading security frameworks', 'Risk-ranked findings with clear remediation guidance', 'Always-on monitoring to maintain compliance posture'],
  },
  {
    icon: Eye,
    title: 'Image & Container Vulnerability Scanning',
    description: 'Automated security assessments for cloud AMIs and ECR container images detect vulnerabilities before deployment, preventing security incidents.',
    features: ['Automated checks for cloud images and containers', 'Catch vulnerabilities pre-deployment', 'Reduce security windows and compliance gaps'],
  },
  {
    icon: FileCheck,
    title: 'Cloud WAR AI Module',
    description: 'Continuous Well-Architected Review insights covering cost optimization, reliability, performance efficiency, security, and operational excellence pillars.',
    features: ['Ongoing insights across WAR pillars', 'Recommendations aligned with cloud best practices', 'Track improvements and prove ROI over time'],
  },
  {
    icon: Search,
    title: 'Agentic Security – NLP Vulnerability Detection',
    description: 'Natural language-driven security scanning for websites, IPs, and domains. Input any target and receive comprehensive vulnerability reports.',
    features: ['Open ports and exposure mapping', 'Vulnerability reporting in clear, human language', 'Instant security snapshots for any domain/IP'],
  },
  {
    icon: Network,
    title: 'Unified Asset & Idle Resource Management',
    description: 'Single-pane visibility across all cloud assets, regions, and accounts. Instantly identify idle resources, obsolete workloads, and optimization candidates.',
    features: ['Single-pane view across all cloud assets', 'Instant identification of idle workloads', 'One place to drive ongoing optimization'],
  },
];

const caseStudies = [
  {
    company: 'Sharpsell',
    industry: 'Financial Services • Insurance',
    location: 'India',
    results: ['22% reduction in cloud costs', 'Compliance maintained with cloud Well-Architected Reviews', 'Continuous optimization via posture checks and vulnerability scans'],
    quote: 'Xops360 transformed our cloud operations while ensuring insurance compliance standards.',
  },
  {
    company: 'King & Shaxson',
    industry: 'Financial Services • Trading',
    location: 'United Kingdom • Top UK Banks',
    results: ['25% lower operational costs via smart resource optimization', 'Enhanced security through regular vulnerability scanning', 'Proactive monitoring enables continuous optimization'],
    quote: 'Security and cost optimization delivered simultaneously—exactly what banking requires.',
  },
  {
    company: 'DreamCasino',
    industry: 'Online Gaming Platform',
    location: 'Norway • Global Operations',
    results: ['25%+ reduction in costs via architecture optimization', 'Enhanced scalability supporting high-traffic demand', 'Performance improvements delivering superior user experiences'],
    quote: 'Handling millions of concurrent users while cutting costs—Xops360 made it possible.',
  },
];

const testimonials = [
  {
    metric: '42%',
    metricLabel: 'Cost Reduction',
    quote: "Xops360's AI-driven cost optimization helped us reduce our AWS spending by 42% in just three months. Their platform identified idle resources and provided actionable insights that our team could implement immediately.",
    author: 'Samba',
    role: 'VP of Engineering',
    company: 'Cryptoforce',
    logo: '/logos/client-logos/cryptoforce.png',
  },
  {
    metric: '6 months',
    metricLabel: 'Faster Compliance',
    quote: "The continuous security posture management from Xops360 transformed our compliance journey. We achieved SOC 2 certification 6 months ahead of schedule, with clear remediation guidance every step of the way.",
    author: 'Kishore',
    role: 'CTO',
    company: 'AWONE',
    logo: '/logos/client-logos/AWONE.png',
  },
  {
    metric: '100%',
    metricLabel: 'Visibility',
    quote: "Managing multi-cloud environments was a nightmare until we found Xops360. Their unified dashboard gives us complete visibility across AWS and Azure, helping us optimize costs and maintain security standards effortlessly.",
    author: 'Ganesh',
    role: 'Cloud Infrastructure Lead',
    company: 'CricClubs',
    logo: '/logos/client-logos/cricclubs-logo.png',
  },
];

const steps = [
  { number: '1', title: 'Connect', description: 'Plug in your cloud accounts with secure, read-only access in minutes.' },
  { number: '2', title: 'Observe', description: 'Xops360 builds a 360° view of cost, risk, and compliance posture.' },
  { number: '3', title: 'Optimize', description: 'Use AI-driven insights to right-size resources, remove waste, and fix vulnerabilities.' },
  { number: '4', title: 'Continuously Improve', description: 'Keep your environment optimized and audit-ready with ongoing reviews and alerts.' },
];

const clientLogos = [
  '/logos/client-logos/cryptoforce.png',
  '/logos/client-logos/AWONE.png',
  '/logos/client-logos/sharpsell.png',
  '/logos/client-logos/Ofofo.png',
  '/logos/client-logos/cricclubs-logo.png',
  '/logos/client-logos/penguinai.png',
  '/logos/client-logos/rezorex.png',
  '/logos/client-logos/kands.jpg',
];

export default function XOPS360() {
  const heroRef = useRef<HTMLDivElement>(null);

  const openCalendly = () => {
    window.open("https://calendly.com/kishan-k", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <SEOHead
        title="XOPS360 | AI-Powered Cloud Optimization Platform | Axiomio"
        description="Slash cloud spend, close security gaps, and stay audit-ready with one 360° view. AI-driven cost optimization, continuous security monitoring, and proactive compliance management."
        keywords="XOPS360, cloud cost optimization, cloud security, CSPM, FinOps, compliance automation, AWS optimization, Azure optimization, vulnerability scanning, Well-Architected Review"
        canonicalUrl="https://axiomio.com/xops360"
        structuredData={xops360PageSchema}
      />
      <Navbar />

      {/* Hero Section */}
      <header ref={heroRef} className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/8 rounded-full blur-[120px]" />
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6"
                >
                  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary px-4 py-2 rounded-full border border-primary/30 bg-primary/10">
                    <Sparkles className="w-4 h-4" />
                    AI-Powered Cloud Optimization
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-[1.05]"
                >
                  Slash Cloud Spend, Close Security Gaps, and Stay Audit-Ready
                  <span className="block text-gradient mt-2">With One 360° View</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
                >
                  Give your teams an AI co-pilot that explains every spike, flags every risk, and finds savings in real time—without changing a single line of code.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
                >
                  <MagneticButton>
                    <Button variant="hero" size="xl" asChild>
                      <a href="https://xops360.ai" target="_blank" rel="noopener noreferrer">
                        Start Free Trial
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </a>
                    </Button>
                  </MagneticButton>
                  <MagneticButton>
                    <Button variant="hero-outline" size="xl" onClick={openCalendly}>
                      Talk to a Cloud Expert
                    </Button>
                  </MagneticButton>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-sm text-muted-foreground"
                >
                  <p className="mb-3">Trusted by enterprises in Healthcare, Finance, Education, and Gaming</p>
                  <p className="text-xs">Available on AWS Marketplace and Microsoft Azure Marketplace</p>
                </motion.div>
              </div>

              {/* Right - Dashboard Preview */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="relative"
              >
                <div className="bg-card rounded-2xl border border-border shadow-2xl p-6 lg:p-8">
                  {/* Window Controls */}
                  <div className="flex gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>

                  {/* Dashboard Stats */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 rounded-xl bg-muted/50 border border-border">
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Total Cloud Spend</p>
                        <p className="text-2xl lg:text-3xl font-bold text-foreground">$847,230</p>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm font-bold">-22%</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/20">
                        <p className="text-xs text-muted-foreground mb-1">Critical Risks</p>
                        <p className="text-2xl font-bold text-red-500">3</p>
                      </div>
                      <div className="p-4 rounded-xl bg-green-500/5 border border-green-500/20">
                        <p className="text-xs text-muted-foreground mb-1">Compliance</p>
                        <p className="text-2xl font-bold text-green-500">100%</p>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                      <p className="text-xs text-muted-foreground mb-2">Cost Optimization</p>
                      <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-primary to-green-500 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: '78%' }}
                          transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
                        />
                      </div>
                    </div>

                    {/* AI Insight */}
                    <div className="p-4 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
                      <div className="flex items-start gap-3">
                        <Bot className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <p className="text-sm text-foreground">
                          <span className="font-semibold text-primary">AI Insight:</span> 15 idle EC2 instances detected. Estimated monthly savings: $4,200
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </header>

      {/* Problems Section */}
      <section className="py-24 lg:py-32 relative bg-muted/20">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-4">
              The Challenge
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Tackling Issues <AnimatedGradientText>Before They Become Problems</AnimatedGradientText>
            </h2>
            <p className="text-lg text-muted-foreground">
              Enterprise cloud environments face mounting pressure: costs escalate without clear attribution, security vulnerabilities go undetected, and operational complexity obscures optimization opportunities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.slice(0, 3).map((problem, index) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-red-500/30 transition-colors"
              >
                <div className="p-3 rounded-xl bg-red-500/10 text-red-500 w-fit mb-4">
                  <problem.icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{problem.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{problem.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-2xl mx-auto">
            {problems.slice(3).map((problem, index) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (index + 3) * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-red-500/30 transition-colors"
              >
                <div className="p-3 rounded-xl bg-red-500/10 text-red-500 w-fit mb-4">
                  <problem.icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{problem.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{problem.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Intro */}
      <section className="py-24 lg:py-32 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-4">
              Meet Xops360
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              AI-Powered Cloud Optimization, <AnimatedGradientText>Risk Mitigation & Compliance</AnimatedGradientText>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Xops360 delivers comprehensive cloud management through an integrated platform combining AI-driven cost optimization, continuous security monitoring, and proactive compliance management. Bringing everything into one seamless view so finance, security, and engineering teams stay aligned in real time.
            </p>
            <blockquote className="text-xl lg:text-2xl font-medium text-foreground italic border-l-4 border-primary pl-6 text-left max-w-2xl mx-auto">
              "Know what you're spending, what's at risk, and what to fix—instantly."
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Metrics Bar */}
      <section className="py-12 border-y border-border/50 bg-muted/20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '22%', label: 'Average Cost Reduction', sublabel: 'Cost savings via smart resource optimization' },
              { value: '100%', label: 'Compliance Maintained', sublabel: 'Continuous monitoring ensures compliance' },
              { value: '24/7', label: 'Active Monitoring', sublabel: 'Always-on security and performance oversight' },
              { value: '99.9%', label: 'Uptime SLA', sublabel: 'Enterprise-grade reliability' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-2">{stat.value}</p>
                <p className="text-foreground font-medium text-sm">{stat.label}</p>
                <p className="text-muted-foreground text-xs mt-1">{stat.sublabel}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-24 lg:py-32 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-4">
              Key Capabilities
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Comprehensive Cloud Management <AnimatedGradientText>Powered by AI</AnimatedGradientText>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6">
            {capabilities.map((cap, index) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <PremiumCard className="h-full">
                  <div className="p-6 lg:p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-primary/10 text-primary border border-primary/20">
                        <cap.icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-heading text-xl font-bold text-foreground pt-2">{cap.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{cap.description}</p>
                    <ul className="space-y-2">
                      {cap.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          {feature}
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

      {/* Case Studies */}
      <section className="py-24 lg:py-32 relative bg-muted/20">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-4">
              Customer Success
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Driving Measurable Cost Savings <AnimatedGradientText>Across Industries</AnimatedGradientText>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl border border-border p-6 lg:p-8"
              >
                <div className="mb-4">
                  <h3 className="font-heading text-xl font-bold text-foreground">{study.company}</h3>
                  <p className="text-sm text-primary">{study.industry}</p>
                  <p className="text-xs text-muted-foreground mt-1">📍 {study.location}</p>
                </div>

                <ul className="space-y-3 mb-6">
                  {study.results.map((result) => (
                    <li key={result} className="flex items-start gap-2 text-sm text-foreground">
                      <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                      {result}
                    </li>
                  ))}
                </ul>

                <blockquote className="text-sm text-muted-foreground italic border-l-2 border-primary/50 pl-4">
                  "{study.quote}"
                </blockquote>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 lg:py-32 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-4">
              Client Success Stories
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Trusted by <AnimatedGradientText>Industry Leaders</AnimatedGradientText>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <PremiumCard className="h-full">
                  <div className="p-6 lg:p-8">
                    <div className="text-center mb-6">
                      <p className="font-heading text-4xl font-bold text-gradient">{testimonial.metric}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.metricLabel}</p>
                    </div>

                    <blockquote className="text-foreground leading-relaxed mb-6">
                      "{testimonial.quote}"
                    </blockquote>

                    <div className="flex items-center gap-4">
                      <img src={testimonial.logo} alt={testimonial.company} className="h-10 w-auto object-contain dark:invert" />
                      <div>
                        <p className="font-medium text-foreground">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </PremiumCard>
              </motion.div>
            ))}
          </div>

          {/* Client Logos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <p className="text-center text-sm text-muted-foreground mb-8">Powering Innovation for Leading Organizations</p>
            <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
              {clientLogos.map((logo, index) => (
                <motion.img
                  key={index}
                  src={logo}
                  alt="Client logo"
                  className="h-8 lg:h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 dark:invert"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.6 }}
                  whileHover={{ opacity: 1 }}
                  viewport={{ once: true }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 lg:py-32 relative bg-muted/20">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-4">
              Getting Started
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              How Xops360 <AnimatedGradientText>Fits Into Your Stack</AnimatedGradientText>
            </h2>
            <p className="text-lg text-muted-foreground">Four simple steps to transform your cloud operations</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-2xl font-bold text-primary-foreground shadow-lg">
                  {step.number}
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/50 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <MagneticButton>
              <Button variant="hero" size="xl" asChild>
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
      <section className="py-24 lg:py-32 relative">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[120px]" />
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-3xl border border-border p-8 lg:p-16"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                    Ready to Transform Your <span className="text-gradient">Cloud Operations?</span>
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    See how Xops360 can reduce costs, strengthen security, and ensure compliance for your enterprise.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <MagneticButton>
                      <Button variant="hero" size="xl" asChild>
                        <a href="https://xops360.ai" target="_blank" rel="noopener noreferrer">
                          Start Free Trial
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                      </Button>
                    </MagneticButton>
                    <MagneticButton>
                      <Button variant="hero-outline" size="xl" onClick={openCalendly}>
                        Talk to a Cloud Expert
                      </Button>
                    </MagneticButton>
                  </div>

                  <p className="text-xs text-muted-foreground">No credit card required • Setup in minutes</p>
                </div>

                <div className="space-y-4">
                  <a href="mailto:hello@axiomio.com" className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 border border-border hover:border-primary/30 transition-colors group">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium text-foreground">hello@axiomio.com</p>
                    </div>
                  </a>

                  <a href="https://axiomio.com/xops360" className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 border border-border hover:border-primary/30 transition-colors group">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                      <Globe2 className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Website</p>
                      <p className="font-medium text-foreground">axiomio.com/xops360</p>
                    </div>
                  </a>

                  <a href="tel:+13234993203" className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 border border-border hover:border-primary/30 transition-colors group">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Call Us (USA)</p>
                      <p className="font-medium text-foreground">+1 323 499 3203</p>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex justify-center gap-6 mt-8"
            >
              {['99.9% Uptime', 'SOC 2 Compliant', 'Enterprise Grade'].map((badge) => (
                <span key={badge} className="text-xs font-medium text-muted-foreground px-4 py-2 rounded-full border border-border bg-muted/30">
                  {badge}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}