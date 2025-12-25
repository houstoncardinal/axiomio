import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Eye,
  Activity,
  BarChart3,
  AlertTriangle,
  CheckCircle2,
  Zap,
  Clock,
  TrendingUp,
  Bell,
  Search,
  Target,
  Shield,
  Database,
  LineChart,
  Settings,
  Gauge,
  FileText
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PremiumCard } from "@/components/PremiumCard";
import { SectionHeader } from "@/components/SectionHeader";
import { SEOHead } from "@/components/SEOHead";
import { MagneticButton } from "@/components/MagneticButton";

const useCases = [
  {
    title: "Application Performance Management (APM)",
    description: "Monitor application behavior, track user interactions, and identify performance bottlenecks in real-time.",
    metrics: "5x faster resolution",
    icon: BarChart3,
  },
  {
    title: "Infrastructure Monitoring",
    description: "Comprehensive visibility into servers, containers, networks, and cloud resources across multi-cloud environments.",
    metrics: "40% MTTR reduction",
    icon: Activity,
  },
  {
    title: "Log Management and Analysis",
    description: "Centralized log aggregation with powerful search, pattern detection, and compliance logging capabilities.",
    metrics: "3.3x transformation",
    icon: FileText,
  },
  {
    title: "Capacity Planning",
    description: "Proactive resource optimization through historical trend analysis and predictive capacity forecasting.",
    metrics: "99.9% uptime",
    icon: Gauge,
  },
];

const services = [
  {
    icon: Activity,
    title: "Infrastructure Monitoring",
    description: "Real-time visibility into your entire infrastructure with comprehensive metrics collection and analysis across multi-cloud platforms.",
    capabilities: [
      "Multi-cloud monitoring (AWS, Azure, GCP)",
      "Server & container metrics tracking",
      "Network performance monitoring",
      "Resource utilization insights",
      "Custom dashboard creation",
      "Auto-discovery of infrastructure changes",
    ],
  },
  {
    icon: BarChart3,
    title: "Application Performance Monitoring",
    subtitle: "APM",
    description: "Track application performance, identify bottlenecks, and ensure optimal user experience with distributed tracing and error tracking.",
    capabilities: [
      "End-to-end transaction tracing",
      "Real-time error tracking & debugging",
      "Service dependency mapping",
      "Performance analytics & profiling",
      "User experience monitoring",
      "Code-level insights",
    ],
  },
  {
    icon: Bell,
    title: "Alert & Incident Management",
    description: "Proactive alerting and automated incident response to minimize downtime and impact with intelligent escalation policies.",
    capabilities: [
      "Intelligent alerting & anomaly detection",
      "On-call management & scheduling",
      "Escalation policies & workflows",
      "Incident tracking & collaboration",
      "Post-mortem analysis & reporting",
      "Integration with PagerDuty, Opsgenie",
    ],
  },
  {
    icon: FileText,
    title: "Log Analytics & Insights",
    description: "Centralized log management with powerful search and analysis capabilities for faster troubleshooting and compliance.",
    capabilities: [
      "Centralized log aggregation",
      "Full-text search & filtering",
      "Pattern detection & correlation",
      "Compliance logging & retention",
      "Long-term storage optimization",
      "Security event monitoring",
    ],
  },
];

const methodology = [
  {
    number: "01",
    title: "Deep Integration",
    icon: Settings,
    description: "Seamless integration with your existing infrastructure, applications, and cloud platforms for comprehensive data collection.",
    deliverables: [
      "Multi-cloud integration setup",
      "Custom metrics configuration",
      "Data source connectivity",
      "Agent deployment across infrastructure",
    ],
  },
  {
    number: "02",
    title: "Centralized Logging",
    icon: Database,
    description: "Aggregate logs from all sources into a unified platform with structured indexing for fast search and analysis.",
    deliverables: [
      "Log aggregation pipeline",
      "Structured log parsing",
      "Retention policy configuration",
      "Search index optimization",
    ],
  },
  {
    number: "03",
    title: "Advanced Analytics",
    icon: LineChart,
    description: "Leverage machine learning and statistical analysis to detect anomalies, predict trends, and optimize performance.",
    deliverables: [
      "Anomaly detection rules",
      "Trend analysis dashboards",
      "Predictive capacity models",
      "Performance baseline establishment",
    ],
  },
  {
    number: "04",
    title: "Customizable Dashboards",
    icon: Eye,
    description: "Create role-specific dashboards that provide relevant insights to different teams and stakeholders.",
    deliverables: [
      "Executive overview dashboards",
      "Team-specific metric views",
      "Custom visualization widgets",
      "Real-time data streaming",
    ],
  },
  {
    number: "05",
    title: "Alerting & Notification",
    icon: Bell,
    description: "Intelligent alerting with contextual notifications, escalation workflows, and integration with collaboration tools.",
    deliverables: [
      "Smart alert configuration",
      "Multi-channel notifications",
      "Escalation policy setup",
      "Incident response automation",
    ],
  },
];

const tools = [
  {
    name: "Datadog",
    description: "Full-stack observability platform with APM, infrastructure monitoring, log management, and real-time analytics.",
    logo: "/logos/datadog-logo.png",
  },
  {
    name: "Grafana",
    description: "Open-source analytics and monitoring solution with customizable dashboards and multi-data source support.",
    logo: "/logos/grafana-logo.png",
  },
  {
    name: "Prometheus",
    description: "Open-source monitoring and alerting toolkit designed for reliability and scalability in cloud-native environments.",
    logo: "/logos/prometheus-logo.png",
  },
  {
    name: "OpenSearch",
    description: "Distributed search and analytics engine for log analytics, security monitoring, and application search.",
    logo: "/logos/opensearch-logo.png",
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Elevate Application Efficiency",
    description: "Identify and resolve performance bottlenecks with real-time APM insights, ensuring optimal application responsiveness and user satisfaction.",
  },
  {
    icon: Target,
    title: "Unlock Valuable System Insights",
    description: "Gain comprehensive visibility into infrastructure health, resource utilization, and operational patterns to make data-driven decisions.",
  },
  {
    icon: Clock,
    title: "Ensure Swift Issue Resolution",
    description: "Reduce mean time to resolution (MTTR) by 40% with intelligent alerting, centralized logging, and root cause analysis capabilities.",
  },
  {
    icon: TrendingUp,
    title: "System Performance Optimization",
    description: "Leverage historical trends and predictive analytics for proactive capacity planning and continuous performance optimization.",
  },
];

const stats = [
  { value: "40%", label: "MTTR Reduction", description: "Faster issue resolution" },
  { value: "5x", label: "Faster Resolution", description: "vs traditional methods" },
  { value: "3.3x", label: "Transformation", description: "Success rate improvement" },
  { value: "24/7", label: "Monitoring", description: "Continuous surveillance" },
];

export default function ObservabilityMonitoring() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <SEOHead
        title="Observability & Monitoring Services | APM, Infrastructure & Log Analytics | Axiomio"
        description="Achieve 40% faster MTTR with enterprise observability solutions. Expert implementation of Datadog, Grafana, Prometheus, and OpenSearch for APM, infrastructure monitoring, log analytics, and intelligent alerting. Full-stack visibility across AWS, Azure, and GCP."
        keywords="observability, monitoring, APM, application performance monitoring, infrastructure monitoring, log analytics, alerting, incident management, cloud monitoring, performance monitoring, Datadog, Grafana, Prometheus, OpenSearch, MTTR reduction, anomaly detection, distributed tracing, observability platform, log management, capacity planning"
        canonicalUrl="https://axiomio.com/services/observability-monitoring"
        pageType="services"
      />
      <Navbar />

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-background to-background" />
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-3 mb-8"
            >
              <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500 border border-blue-500/20">
                <Eye className="h-8 w-8" />
              </div>
              <span className="text-sm font-semibold text-blue-500 uppercase tracking-wider">
                Observability & Monitoring
              </span>
            </motion.div>

            <motion.h1
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Gain Deep Insights, Ensure{" "}
              <span className="text-blue-500">Optimal Performance</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Comprehensive observability solutions with deep integration, centralized logging, and advanced analytics.
              Reduce MTTR by 40% and achieve 5x faster issue resolution with intelligent monitoring and alerting.
            </motion.p>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-xl bg-card/50 border border-border/50">
                  <div className="text-2xl md:text-3xl font-bold text-blue-500 mb-1">{stat.value}</div>
                  <div className="text-sm font-medium text-foreground mb-1">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">{stat.description}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* Use Cases Section */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionHeader
            label="Use Cases"
            title="Observability Across the Stack"
            description="From application performance to infrastructure health, monitor every layer of your technology ecosystem."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <PremiumCard className="h-full group hover:border-blue-500/30 transition-all duration-300">
                  <div className="p-6">
                    <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500 border border-blue-500/20 inline-flex mb-4 group-hover:bg-blue-500/20 transition-colors">
                      <useCase.icon className="h-6 w-6" />
                    </div>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-xs font-semibold mb-4">
                      {useCase.metrics}
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-3 group-hover:text-blue-500 transition-colors">
                      {useCase.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {useCase.description}
                    </p>
                  </div>
                </PremiumCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionHeader
            label="Monitoring Solutions"
            title="Comprehensive Observability Stack"
            description="From infrastructure metrics to application traces, monitor every layer of your technology stack with enterprise-grade tools."
          />

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <PremiumCard className="h-full group hover:border-blue-500/30 transition-all duration-300">
                  <div className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500 border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                        <service.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-semibold text-foreground group-hover:text-blue-500 transition-colors">
                          {service.title}
                        </h3>
                        {service.subtitle && (
                          <p className="text-sm text-blue-500/70">{service.subtitle}</p>
                        )}
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>

                    <ul className="space-y-2">
                      {service.capabilities.map((cap) => (
                        <li key={cap} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-blue-500/60 flex-shrink-0" />
                          {cap}
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

      {/* 5-Part Methodology Section */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionHeader
            label="Our Approach"
            title="5-Part Observability Methodology"
            description="Structured approach to implementing comprehensive monitoring and observability across your infrastructure."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mt-16">
            {methodology.map((phase, index) => (
              <motion.div
                key={phase.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="lg:col-span-1"
              >
                <PremiumCard className="h-full group hover:border-blue-500/30 transition-all duration-300">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/10 text-blue-500 font-bold text-lg border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                        {phase.number}
                      </div>
                      <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500 group-hover:bg-blue-500/20 transition-colors">
                        <phase.icon className="h-5 w-5" />
                      </div>
                    </div>
                    <h3 className="font-heading text-base font-semibold text-foreground mb-2 group-hover:text-blue-500 transition-colors">
                      {phase.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-4">
                      {phase.description}
                    </p>
                    <div className="space-y-1.5">
                      {phase.deliverables.map((deliverable) => (
                        <div key={deliverable} className="flex items-start gap-1.5">
                          <CheckCircle2 className="h-3 w-3 text-blue-500/60 flex-shrink-0 mt-0.5" />
                          <span className="text-xs text-muted-foreground">{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </PremiumCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionHeader
            label="Tools & Platforms"
            title="Enterprise-Grade Observability Stack"
            description="Leverage industry-leading monitoring and analytics tools for comprehensive visibility."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <PremiumCard className="h-full group hover:border-blue-500/30 transition-all duration-300">
                  <div className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-muted/50 flex items-center justify-center group-hover:bg-blue-500/10 transition-colors">
                      <Database className="h-8 w-8 text-blue-500" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-3 group-hover:text-blue-500 transition-colors">
                      {tool.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {tool.description}
                    </p>
                  </div>
                </PremiumCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionHeader
            label="Key Benefits"
            title="Drive Operational Excellence"
            description="Transform your operations with comprehensive observability and intelligent monitoring."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <PremiumCard className="h-full group hover:border-blue-500/30 transition-all duration-300">
                  <div className="p-6">
                    <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500 border border-blue-500/20 inline-flex mb-4 group-hover:bg-blue-500/20 transition-colors">
                      <benefit.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-3 group-hover:text-blue-500 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </PremiumCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-card/50 to-background">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Gain Complete Visibility Today
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Get a free observability assessment and discover blind spots in your monitoring strategy. Reduce MTTR by 40% with our enterprise solutions.
            </p>
            <MagneticButton>
              <Button variant="hero" size="xl" className="bg-blue-500 hover:bg-blue-600" asChild>
                <Link to="/contact">
                  Request Free Assessment
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
