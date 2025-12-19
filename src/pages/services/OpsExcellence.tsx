import { motion } from "framer-motion";
import { ArrowRight, DollarSign, Shield, Cloud, GitBranch, TrendingUp, Lock, Server, Cpu, BarChart3, Zap, CheckCircle2, Bot, Activity } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GridBackground } from "@/components/GridBackground";
import { SectionHeader } from "@/components/SectionHeader";
import { SEOHead } from "@/components/SEOHead";
import { MagneticButton } from "@/components/MagneticButton";

const opsCategories = [
  {
    id: "finops",
    title: "FinOps",
    subtitle: "Cloud Financial Management",
    icon: DollarSign,
    color: "from-emerald-500 to-teal-400",
    bgGlow: "emerald",
    description: "Optimize cloud spending with data-driven financial operations. Achieve visibility, control, and accountability across your cloud investments.",
    capabilities: [
      "Cost visibility & allocation",
      "Budget forecasting & planning",
      "Anomaly detection & alerts",
      "Reserved instance optimization",
      "Showback & chargeback models",
      "Unit economics tracking",
    ],
    metrics: [
      { value: "30%", label: "Avg. Cost Reduction" },
      { value: "100%", label: "Cost Visibility" },
      { value: "2x", label: "ROI in 6 Months" },
    ],
    useCases: [
      "Multi-cloud cost optimization",
      "Real-time spend monitoring",
      "Resource right-sizing",
      "Waste elimination automation",
    ],
  },
  {
    id: "secops",
    title: "SecOps",
    subtitle: "Security Operations",
    icon: Shield,
    color: "from-red-500 to-orange-400",
    bgGlow: "red",
    description: "Unify security and operations with automated threat detection, response, and compliance. Build security into every layer of your infrastructure.",
    capabilities: [
      "SIEM & log aggregation",
      "Threat intelligence integration",
      "Automated incident response",
      "Compliance monitoring (SOC2, ISO, HIPAA)",
      "Vulnerability management",
      "Zero-trust architecture",
    ],
    metrics: [
      { value: "99.9%", label: "Threat Detection" },
      { value: "< 5min", label: "Mean Time to Detect" },
      { value: "100%", label: "Compliance Score" },
    ],
    useCases: [
      "24/7 security monitoring",
      "Automated remediation",
      "Security posture management",
      "Regulatory compliance",
    ],
  },
  {
    id: "cloudops",
    title: "CloudOps",
    subtitle: "Cloud Operations Excellence",
    icon: Cloud,
    color: "from-blue-500 to-cyan-400",
    bgGlow: "blue",
    description: "Master your cloud infrastructure with automated provisioning, monitoring, and optimization across multi-cloud and hybrid environments.",
    capabilities: [
      "Infrastructure as Code (IaC)",
      "Multi-cloud orchestration",
      "Auto-scaling & optimization",
      "Disaster recovery automation",
      "Performance monitoring",
      "Capacity planning",
    ],
    metrics: [
      { value: "99.99%", label: "Uptime SLA" },
      { value: "60%", label: "Faster Provisioning" },
      { value: "40%", label: "Resource Optimization" },
    ],
    useCases: [
      "Cloud migration & modernization",
      "Hybrid cloud management",
      "Container orchestration",
      "Edge computing integration",
    ],
  },
  {
    id: "devops",
    title: "DevOps",
    subtitle: "Development Operations",
    icon: GitBranch,
    color: "from-violet-500 to-purple-400",
    bgGlow: "violet",
    description: "Accelerate software delivery with automated CI/CD pipelines, GitOps workflows, and developer-first infrastructure management.",
    capabilities: [
      "CI/CD pipeline automation",
      "GitOps & version control",
      "Container orchestration",
      "Release management",
      "Feature flag management",
      "Developer experience (DX) optimization",
    ],
    metrics: [
      { value: "50x", label: "Faster Deployments" },
      { value: "95%", label: "Deployment Success Rate" },
      { value: "80%", label: "Less Manual Work" },
    ],
    useCases: [
      "Continuous deployment",
      "Microservices architecture",
      "Platform engineering",
      "Developer productivity",
    ],
  },
];

const platformFeatures = [
  {
    icon: Bot,
    title: "AI-Powered Automation",
    description: "Machine learning algorithms that learn from your operations and automate routine tasks.",
  },
  {
    icon: Activity,
    title: "Real-Time Observability",
    description: "Unified monitoring across all Ops domains with intelligent alerting and root cause analysis.",
  },
  {
    icon: Zap,
    title: "Self-Healing Systems",
    description: "Automated remediation that detects and resolves issues before they impact users.",
  },
  {
    icon: BarChart3,
    title: "Unified Analytics",
    description: "Cross-domain insights that connect costs, security, performance, and delivery metrics.",
  },
];

function OpsCard({ category, index }: { category: typeof opsCategories[0]; index: number }) {
  const Icon = category.icon;
  
  return (
    <motion.div
      id={category.id}
      className="scroll-mt-32"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="glass-card rounded-2xl p-8 lg:p-12 relative overflow-hidden group hover:border-primary/30 transition-all duration-500">
        {/* Background glow */}
        <div 
          className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${category.color} opacity-5 blur-3xl group-hover:opacity-10 transition-opacity duration-500`}
        />
        
        <div className="relative z-10">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-start gap-6 mb-8">
            <motion.div 
              className={`p-4 rounded-xl bg-gradient-to-br ${category.color} text-white shadow-lg`}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Icon className="h-8 w-8" />
            </motion.div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                  {category.title}
                </h2>
                <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
                  {category.subtitle}
                </span>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                {category.description}
              </p>
            </div>
          </div>
          
          {/* Metrics */}
          <div className="grid grid-cols-3 gap-4 mb-8 p-6 bg-muted/30 rounded-xl border border-border/50">
            {category.metrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {metric.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{metric.label}</div>
              </div>
            ))}
          </div>
          
          {/* Two columns: Capabilities + Use Cases */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Capabilities */}
            <div>
              <h4 className="font-heading font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-4">
                Core Capabilities
              </h4>
              <ul className="space-y-3">
                {category.capabilities.map((capability) => (
                  <li key={capability} className="flex items-center gap-3 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    {capability}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Use Cases */}
            <div>
              <h4 className="font-heading font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-4">
                Use Cases
              </h4>
              <ul className="space-y-3">
                {category.useCases.map((useCase) => (
                  <li key={useCase} className="flex items-center gap-3 text-muted-foreground">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`} />
                    {useCase}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function OpsExcellence() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <SEOHead
        title="FinOps, SecOps, CloudOps, DevOps Excellence | Unified Operations Platform | Axiomio"
        description="Master your operations with Axiomio's unified platform for FinOps, SecOps, CloudOps, and DevOps. AI-powered automation, real-time observability, and self-healing systems."
        keywords="FinOps, SecOps, CloudOps, DevOps, cloud financial management, security operations, cloud operations, development operations, XOPS360, unified operations, AI automation, cloud optimization"
        canonicalUrl="https://axiomio.com/services/ops-excellence"
        pageType="services"
      />
      <Navbar />
      
      {/* Hero Section */}
      <header className="relative pt-32 pb-24 lg:pt-40 lg:pb-32" role="banner">
        <GridBackground />
        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <motion.div 
            className="max-w-5xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span 
              className="inline-flex items-center gap-2 text-sm font-medium text-primary uppercase tracking-wider mb-6 px-4 py-2 rounded-xl border border-primary/20 bg-primary/5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" aria-hidden="true" />
              Modern MSP · AI Workforce · Product-Led Services
            </motion.span>
            
            <motion.h1 
              className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Master your operations with{" "}
              <span className="text-gradient">unified precision</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Inform decisions, streamline operations, and enhance customer experiences with 
              cutting-edge FinOps, SecOps, CloudOps, and DevOps solutions powered by AI.
            </motion.p>
            
            {/* Quick navigation */}
            <motion.div 
              className="flex flex-wrap justify-center gap-3 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {opsCategories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <a
                    key={cat.id}
                    href={`#${cat.id}`}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${cat.color} text-white font-medium text-sm hover:opacity-90 transition-opacity shadow-md`}
                  >
                    <Icon className="w-4 h-4" />
                    {cat.title}
                  </a>
                );
              })}
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <MagneticButton>
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contact">
                    Request a Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button variant="hero-outline" size="xl" asChild>
                  <Link to="/xops360">
                    Explore XOPS360 Platform
                  </Link>
                </Button>
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* Platform Features */}
      <section className="py-16 lg:py-20 bg-muted/20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platformFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="p-6 bg-background rounded-xl border border-border/50 hover:border-primary/30 transition-colors group"
              >
                <feature.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ops Categories */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionHeader
            label="Unified Operations"
            title="Four pillars of operational excellence"
            description="Each domain is optimized individually while working together as a unified intelligent system."
          />
          
          <div className="mt-16 space-y-12">
            {opsCategories.map((category, index) => (
              <OpsCard key={category.id} category={category} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Integration CTA */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 text-sm font-medium text-primary uppercase tracking-wider mb-6">
              <TrendingUp className="w-4 h-4" />
              Unified Platform
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              All four Ops domains.{" "}
              <span className="text-gradient">One intelligent platform.</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              XOPS360 brings together FinOps, SecOps, CloudOps, and DevOps into a unified 
              ecosystem that learns, adapts, and optimizes your entire operation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton>
                <Button variant="premium" size="xl" asChild>
                  <Link to="/contact">
                    Schedule a Discovery Call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button variant="outline" size="xl" asChild>
                  <Link to="/xops360">
                    Learn About XOPS360
                  </Link>
                </Button>
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
