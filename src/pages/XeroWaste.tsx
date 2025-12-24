import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  DollarSign,
  TrendingDown,
  BarChart3,
  Zap,
  Cloud,
  AlertTriangle,
  CheckCircle2,
  PieChart,
  Gauge,
  Settings,
  Bot,
  Eye,
  Server,
  Database,
  HardDrive
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PremiumCard } from "@/components/PremiumCard";
import { SectionHeader } from "@/components/SectionHeader";
import { SEOHead } from "@/components/SEOHead";
import { MagneticButton } from "@/components/MagneticButton";
import { AnimatedGradientText } from "@/components/AnimatedGradientText";

const features = [
  {
    icon: Eye,
    title: "Real-Time Visibility",
    description: "Complete visibility into cloud spend across AWS, Azure, and GCP with real-time dashboards and alerts.",
  },
  {
    icon: Bot,
    title: "AI-Powered Optimization",
    description: "Machine learning models identify waste patterns and recommend optimizations automatically.",
  },
  {
    icon: TrendingDown,
    title: "Automated Rightsizing",
    description: "Automatically identify and resize over-provisioned resources to eliminate waste.",
  },
  {
    icon: Settings,
    title: "Reserved Instance Management",
    description: "Optimize reserved instance coverage and savings plans for maximum ROI.",
  },
  {
    icon: AlertTriangle,
    title: "Anomaly Detection",
    description: "AI-driven detection of cost anomalies and unexpected spend before they impact budgets.",
  },
  {
    icon: PieChart,
    title: "Cost Allocation",
    description: "Granular cost allocation and showback/chargeback reporting by team, project, or application.",
  },
];

const stats = [
  { value: "35%", label: "Average Savings" },
  { value: "< 24hrs", label: "Time to Value" },
  { value: "Real-time", label: "Cost Insights" },
  { value: "10x", label: "ROI" },
];

const wasteTypes = [
  { name: "Idle Resources", percentage: "23%", description: "Unused EC2, RDS instances running 24/7" },
  { name: "Over-Provisioned", percentage: "31%", description: "Resources sized larger than needed" },
  { name: "Unattached Storage", percentage: "18%", description: "Orphaned EBS volumes and snapshots" },
  { name: "Missing Reservations", percentage: "28%", description: "On-demand pricing for predictable workloads" },
];

const xeroWasteSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://axiomio.com/xerowaste/#product",
  "name": "XeroWaste",
  "applicationCategory": "BusinessApplication",
  "applicationSubCategory": "FinOps Platform",
  "description": "AI-powered cloud cost optimization platform that eliminates waste, maximizes savings, and delivers real-time visibility across AWS, Azure, and GCP.",
  "url": "https://axiomio.com/xerowaste",
  "featureList": [
    "Real-Time Cost Visibility",
    "AI-Powered Optimization",
    "Automated Rightsizing",
    "Reserved Instance Management",
    "Anomaly Detection",
    "Cost Allocation & Showback"
  ],
  "offers": {
    "@type": "Offer",
    "description": "Cloud cost optimization with average 35% savings"
  },
  "provider": { "@id": "https://axiomio.com/#organization" }
};

export default function XeroWaste() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <SEOHead
        title="XeroWaste | AI-Powered Cloud Cost Optimization | FinOps | Axiomio"
        description="Eliminate cloud waste with AI-powered cost optimization. Real-time visibility, automated rightsizing, and FinOps best practices. Average 35% savings across AWS, Azure, GCP."
        keywords="cloud cost optimization, FinOps, cloud waste, AWS cost management, Azure cost optimization, GCP billing, cloud savings, rightsizing, reserved instances, cloud financial management"
        canonicalUrl="https://axiomio.com/xerowaste"
        pageType="product"
        structuredData={xeroWasteSchema}
      />
      <Navbar />
      
      {/* Hero Section */}
      <header className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 min-h-[100vh] flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 via-background to-background" />
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left content */}
              <div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 }}
                  className="mb-6"
                >
                  <span className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-green-500 px-5 py-2 rounded-full border border-green-500/30 bg-green-500/10">
                    <motion.span
                      className="w-2 h-2 bg-green-500 rounded-full"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    FinOps Platform
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-[1.05] tracking-tight"
                >
                  <AnimatedGradientText className="from-green-400 via-emerald-500 to-teal-400">XeroWaste</AnimatedGradientText>
                  <span className="block text-3xl md:text-4xl lg:text-5xl mt-4 text-foreground font-medium tracking-tight">
                    Eliminate Cloud Waste, Maximize Savings
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl text-foreground/80 leading-relaxed mb-8 max-w-2xl"
                >
                  AI-powered cost optimization that <span className="font-semibold text-foreground">eliminates waste</span> and delivers real-time visibility.
                  <span className="block mt-2 text-green-500 font-semibold">Average 35% savings across AWS, Azure, and GCP.</span>
                </motion.p>

                {/* CTAs */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <MagneticButton>
                    <Button variant="hero" size="xl" className="bg-green-500 hover:bg-green-600" asChild>
                      <Link to="/contact">
                        Get Cost Analysis
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </MagneticButton>
                  <MagneticButton>
                    <Button variant="hero-outline" size="xl" asChild>
                      <Link to="/xops360">
                        Part of XOPS360
                      </Link>
                    </Button>
                  </MagneticButton>
                </motion.div>

                {/* Stats */}
                <motion.div
                  className="grid grid-cols-2 gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {stats.map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="text-center p-4 rounded-xl bg-card/50 border border-border/50"
                    >
                      <div className="text-2xl md:text-3xl font-bold text-green-500 mb-1">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Right visual - Cloud Cost Optimization Visualization */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="relative"
              >
                <div className="relative aspect-square max-w-lg mx-auto min-h-[500px]">
                  {/* Central AI Optimization Engine */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-2xl bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 p-1 shadow-2xl"
                    animate={{
                      boxShadow: [
                        '0 20px 60px rgba(34, 197, 94, 0.4)',
                        '0 20px 80px rgba(34, 197, 94, 0.6)',
                        '0 20px 60px rgba(34, 197, 94, 0.4)',
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <div className="w-full h-full rounded-xl bg-background/95 backdrop-blur-sm flex flex-col items-center justify-center">
                      <Bot className="w-10 h-10 text-green-500 mb-2" />
                      <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">AI Engine</span>
                    </div>
                  </motion.div>

                  {/* Cloud Resource Nodes with Waste Indicators */}
                  {[
                    {
                      label: 'Idle EC2',
                      icon: Server,
                      waste: '23%',
                      position: { top: '10%', left: '50%', translateX: '-50%' },
                      color: 'from-red-500 to-orange-500'
                    },
                    {
                      label: 'Over-Provisioned',
                      icon: Database,
                      waste: '31%',
                      position: { top: '30%', right: '10%' },
                      color: 'from-orange-500 to-yellow-500'
                    },
                    {
                      label: 'Unattached Storage',
                      icon: HardDrive,
                      waste: '18%',
                      position: { bottom: '30%', right: '10%' },
                      color: 'from-yellow-500 to-amber-500'
                    },
                    {
                      label: 'Missing Reservations',
                      icon: Cloud,
                      waste: '28%',
                      position: { bottom: '10%', left: '50%', translateX: '-50%' },
                      color: 'from-amber-500 to-red-500'
                    },
                  ].map((resource, i) => {
                    const IconComponent = resource.icon;
                    return (
                      <motion.div
                        key={resource.label}
                        className="absolute group cursor-default"
                        style={resource.position}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                      >
                        {/* Warning pulse for wasteful resources */}
                        <motion.div
                          className="absolute inset-0 -m-3 rounded-2xl border-2 border-red-500/40"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.4, 0.8, 0.4],
                          }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                        />

                        <div className={`relative w-20 h-20 rounded-xl bg-gradient-to-br ${resource.color} p-[2px] shadow-lg`}>
                          <div className="w-full h-full rounded-[10px] bg-background/95 backdrop-blur-sm flex flex-col items-center justify-center relative overflow-hidden">
                            <IconComponent className="w-6 h-6 text-foreground mb-1" />
                            <span className="text-[9px] font-bold text-foreground text-center px-1 leading-tight">{resource.label}</span>
                          </div>
                        </div>

                        {/* Waste percentage badge */}
                        <motion.div
                          className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full bg-red-500 text-white text-[10px] font-bold shadow-lg"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                        >
                          {resource.waste}
                        </motion.div>
                      </motion.div>
                    );
                  })}

                  {/* Animated optimization arrows from AI to resources */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
                    <defs>
                      <linearGradient id="optimizationGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgb(34, 197, 94)" stopOpacity="0" />
                        <stop offset="50%" stopColor="rgb(34, 197, 94)" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="rgb(34, 197, 94)" stopOpacity="0" />
                      </linearGradient>
                      <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                        <polygon points="0 0, 10 3, 0 6" fill="rgb(34, 197, 94)" />
                      </marker>
                    </defs>

                    {/* Optimization paths */}
                    {[
                      { x1: '50%', y1: '50%', x2: '50%', y2: '10%' },
                      { x1: '50%', y1: '50%', x2: '90%', y2: '30%' },
                      { x1: '50%', y1: '50%', x2: '90%', y2: '70%' },
                      { x1: '50%', y1: '50%', x2: '50%', y2: '90%' },
                    ].map((path, i) => (
                      <motion.line
                        key={i}
                        x1={path.x1}
                        y1={path.y1}
                        x2={path.x2}
                        y2={path.y2}
                        stroke="url(#optimizationGradient)"
                        strokeWidth="2"
                        markerEnd="url(#arrowhead)"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                          pathLength: [0, 1],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          pathLength: { delay: 1 + i * 0.3, duration: 1.5, repeat: Infinity, repeatDelay: 2 },
                          opacity: { delay: 1 + i * 0.3, duration: 1.5, repeat: Infinity, repeatDelay: 2 }
                        }}
                      />
                    ))}
                  </svg>

                  {/* Savings indicators */}
                  <motion.div
                    className="absolute top-[5%] left-[5%]"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 }}
                  >
                    <div className="px-4 py-2 rounded-full bg-green-500/10 backdrop-blur-md border border-green-500/30 shadow-lg">
                      <div className="flex items-center gap-2">
                        <TrendingDown className="w-3 h-3 text-green-500" />
                        <span className="text-xs font-semibold text-green-500">35% Savings</span>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute bottom-[5%] right-[5%]"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.4 }}
                  >
                    <div className="px-4 py-2 rounded-full bg-blue-500/10 backdrop-blur-md border border-blue-500/30 shadow-lg">
                      <div className="flex items-center gap-2">
                        <Eye className="w-3 h-3 text-blue-500" />
                        <span className="text-xs font-semibold text-blue-500">Real-time Monitoring</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </header>

      {/* Waste Analysis Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-card/50 to-background">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionHeader
            label="The Problem"
            title="Where does cloud waste hide?"
            description="Most organizations waste 30-40% of their cloud spend. XeroWaste finds and eliminates every dollar of waste."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {wasteTypes.map((waste, index) => (
              <motion.div
                key={waste.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <PremiumCard className="h-full text-center p-8">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto rounded-full bg-green-500/10 flex items-center justify-center">
                      <span className="text-2xl font-bold text-green-500">{waste.percentage}</span>
                    </div>
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                    {waste.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {waste.description}
                  </p>
                </PremiumCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionHeader
            label="Capabilities"
            title="Complete FinOps platform"
            description="Everything you need to optimize cloud costs and implement FinOps best practices."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <PremiumCard className="h-full group hover:border-green-500/30 transition-all duration-300">
                  <div className="p-8">
                    <div className="p-3 rounded-xl bg-green-500/10 text-green-500 border border-green-500/20 w-fit mb-6 group-hover:bg-green-500/20 transition-colors">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-green-500 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </PremiumCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-card/50 to-background">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionHeader
            label="How It Works"
            title="Start saving in 24 hours"
            description="Quick deployment, immediate insights, continuous optimization."
          />
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              { step: "01", title: "Connect", description: "Connect your AWS, Azure, or GCP accounts in minutes with read-only access." },
              { step: "02", title: "Analyze", description: "AI analyzes your infrastructure and identifies optimization opportunities." },
              { step: "03", title: "Optimize", description: "Implement recommendations automatically or with one-click approval." },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-green-500/10 border-2 border-green-500/30 flex items-center justify-center mb-6">
                  <span className="text-xl font-bold text-green-500">{item.step}</span>
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Stop wasting cloud spend
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Get a free cloud cost analysis and discover how much you could save with XeroWaste.
            </p>
            <MagneticButton>
              <Button variant="premium" size="xl" className="bg-green-500 hover:bg-green-600" asChild>
                <Link to="/contact">
                  Get Free Cost Analysis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
