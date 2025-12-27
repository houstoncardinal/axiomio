import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle, Brain, Bot, Sparkles, Eye, MessageSquare, Cog, Network, LineChart, FileSearch } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GridBackground } from "@/components/GridBackground";
import { SectionHeader } from "@/components/SectionHeader";
import { SEOHead } from "@/components/SEOHead";
import { createBreadcrumbSchema, aiAutomationSchema, organizationSchema } from "@/lib/seo-schemas";

const offerings = [
  {
    icon: Bot,
    title: "AIOps & Intelligent Monitoring",
    description: "Deploy AI-driven anomaly detection, predictive alerting, and automated root cause analysis to reduce MTTR and prevent incidents before they impact users.",
  },
  {
    icon: Cog,
    title: "Automated Runbook Execution",
    description: "Transform manual runbooks into intelligent automation workflows that self-heal infrastructure, auto-scale resources, and remediate issues autonomously.",
  },
  {
    icon: Network,
    title: "Infrastructure Intelligence",
    description: "Leverage ML models for capacity planning, resource optimization, and predictive scaling across multi-cloud and hybrid environments.",
  },
  {
    icon: LineChart,
    title: "SRE Automation Platform",
    description: "Build comprehensive SRE tooling with automated SLO tracking, error budgets, chaos engineering, and intelligent incident management.",
  },
  {
    icon: Brain,
    title: "ChatOps & AI Assistants",
    description: "Deploy conversational AI that integrates with Slack, Teams, and PagerDuty to streamline incident response and accelerate troubleshooting.",
  },
  {
    icon: FileSearch,
    title: "Log & Observability Analytics",
    description: "Implement AI-powered log analysis, distributed tracing correlation, and intelligent alerting to surface actionable insights from observability data.",
  },
];

const capabilities = [
  {
    title: "AIOps Stack",
    items: ["Anomaly Detection", "Predictive Alerting", "Event Correlation", "Root Cause Analysis", "Noise Reduction"],
  },
  {
    title: "Automation Platforms",
    items: ["Ansible + AI", "Terraform Automation", "Kubernetes Operators", "Event-Driven Automation", "Self-Healing Systems"],
  },
  {
    title: "Observability AI",
    items: ["Log Analytics ML", "Metrics Intelligence", "Trace Correlation", "SLO Automation", "Incident Prediction"],
  },
  {
    title: "DevOps Intelligence",
    items: ["Pipeline Optimization", "Deployment Analytics", "Change Risk Scoring", "Capacity Forecasting", "Cost Optimization"],
  },
];

const useCases = [
  {
    industry: "FinTech Platform",
    challenge: "A global payments provider faced 500+ daily alerts, overwhelming their SRE team and causing alert fatigue with 45-minute MTTR.",
    outcome: "Deployed AIOps platform with intelligent alert correlation, reducing noise by 85% and cutting MTTR to under 5 minutes.",
  },
  {
    industry: "SaaS Enterprise",
    challenge: "A B2B SaaS company struggled with unpredictable scaling and frequent outages during traffic spikes affecting 10M+ users.",
    outcome: "Implemented predictive auto-scaling with ML models, achieving 99.99% uptime and reducing infrastructure costs by 40%.",
  },
  {
    industry: "Healthcare Tech",
    challenge: "A telemedicine platform needed 24/7 reliability but manual incident response was slow and error-prone across 200+ microservices.",
    outcome: "Built self-healing infrastructure with automated runbooks, resolving 78% of incidents without human intervention.",
  },
];

const process = [
  {
    phase: "Audit",
    description: "Analyze current tooling, incident patterns, and operational bottlenecks to identify automation opportunities.",
  },
  {
    phase: "Design",
    description: "Architect AI-driven automation workflows with appropriate ML models and integration patterns.",
  },
  {
    phase: "Implement",
    description: "Deploy automation incrementally with rigorous testing, rollback capabilities, and human-in-the-loop safeguards.",
  },
  {
    phase: "Validate",
    description: "Measure impact on MTTR, incident volume, and team efficiency with comprehensive observability.",
  },
  {
    phase: "Scale",
    description: "Expand automation coverage, train models on new patterns, and continuously improve based on feedback.",
  },
];

const breadcrumbSchema = createBreadcrumbSchema([
  { name: "Home", url: "https://axiomio.com/" },
  { name: "Services", url: "https://axiomio.com/services" },
  { name: "AI & Automation", url: "https://axiomio.com/services/ai-automation" },
]);

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [breadcrumbSchema, aiAutomationSchema, organizationSchema],
};

export default function AIAutomation() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <SEOHead
        title="AI Automation for DevOps & SRE | AIOps & Intelligent Operations | AXIOMIO"
        description="Transform your DevOps and SRE operations with AI-powered automation. Reduce MTTR by 90%, automate incident response, and achieve self-healing infrastructure with our AIOps solutions."
        keywords="AIOps, DevOps automation, SRE automation, intelligent operations, automated incident response, self-healing infrastructure, predictive alerting, automated runbooks, infrastructure automation, observability AI"
        canonicalUrl="https://axiomio.com/services/ai-automation"
        structuredData={pageSchema}
      />
      <Navbar />
      
      {/* Hero Section */}
      <header className="relative pt-32 pb-24 lg:pt-40 lg:pb-32" role="banner">
        <GridBackground />
        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              to="/services" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Services
            </Link>
          </motion.div>
          
          <motion.div 
            className="max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="inline-flex p-4 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary border border-primary/20 mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Brain className="h-10 w-10" />
            </motion.div>
            
            <motion.h1 
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              AI Automation for{" "}
              <span className="text-gradient">DevOps & SRE</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Transform operational excellence with AI-powered automation. Reduce MTTR by 90%, 
              automate incident response, and build self-healing infrastructure that scales.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Explore AI Opportunities
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* Overview Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-card/50 to-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <SectionHeader
                label="Overview"
                title="Intelligent operations at scale"
                align="left"
              />
              <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Modern DevOps and SRE teams are drowning in alerts, manual toil, and reactive 
                  firefighting. Our AI Automation practice transforms operations from reactive 
                  to predictive, enabling teams to focus on innovation instead of incidents.
                </p>
                <p>
                  We implement battle-tested AIOps solutions that integrate with your existing 
                  toolchain—Kubernetes, Prometheus, Datadog, PagerDuty, and more. Our approach 
                  delivers measurable outcomes: reduced MTTR, fewer incidents, and dramatically 
                  lower operational burden.
                </p>
                <p>
                  From intelligent alerting to self-healing infrastructure, from automated 
                  runbooks to predictive scaling, we bring the expertise to turn operational 
                  chaos into engineering excellence.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="glass-card rounded-2xl p-8 lg:p-10"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
                Automation Maturity Journey
              </h3>
              <div className="space-y-6">
                {[
                  { stage: "Reactive", desc: "Manual incident response, alert fatigue, high MTTR" },
                  { stage: "Proactive", desc: "Intelligent alerting, automated triage, runbook automation" },
                  { stage: "Predictive", desc: "ML-driven anomaly detection, capacity forecasting, incident prevention" },
                  { stage: "Autonomous", desc: "Self-healing systems, auto-remediation, minimal human intervention" },
                ].map((item, index) => (
                  <motion.div
                    key={item.stage}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/20 text-primary text-sm font-bold flex items-center justify-center flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{item.stage}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SectionHeader
              label="Offerings"
              title="AIOps & automation solutions"
              description="Production-ready automation capabilities that integrate with your existing DevOps toolchain and deliver immediate value."
            />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {offerings.map((offering, index) => (
              <motion.div
                key={offering.title}
                className="glass-card rounded-2xl p-8 group hover:shadow-glow transition-all duration-500"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit mb-6 group-hover:bg-primary/20 transition-colors">
                  <offering.icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {offering.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {offering.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-card/50 to-background">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SectionHeader
              label="Our Process"
              title="From toil to automation"
              description="A proven methodology for implementing AI automation that reduces operational burden and improves reliability."
            />
          </motion.div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {process.map((step, index) => (
              <motion.div
                key={step.phase}
                className="relative glass-card rounded-2xl p-6 text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 text-primary font-heading font-bold text-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {index + 1}
                </div>
                <h4 className="font-heading font-semibold text-foreground mb-2">
                  {step.phase}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SectionHeader
              label="Technical Capabilities"
              title="Full-stack AIOps expertise"
            />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {capabilities.map((cap, index) => (
              <motion.div
                key={cap.title}
                className="glass-card rounded-2xl p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h4 className="font-heading font-semibold text-primary mb-4">
                  {cap.title}
                </h4>
                <ul className="space-y-2">
                  {cap.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Sparkles className="w-3 h-3 text-primary/50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-card/50 to-background">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SectionHeader
              label="Impact"
              title="Operational excellence delivered"
              description="Real-world AIOps implementations driving measurable reliability and efficiency improvements."
            />
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.industry}
                className="glass-card rounded-2xl p-8"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="text-sm font-medium text-primary uppercase tracking-wider">
                  {useCase.industry}
                </span>
                <h4 className="font-heading text-lg font-semibold text-foreground mt-3 mb-4">
                  {useCase.challenge}
                </h4>
                <div className="pt-4 border-t border-border">
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Outcome
                  </span>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                    {useCase.outcome}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to unlock AI value?
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Let's identify high-impact opportunities and build AI solutions 
              that deliver real results for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Start AI Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/approach">
                  See Our Approach
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}