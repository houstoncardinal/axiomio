import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  FileCode,
  CheckCircle2,
  GitBranch,
  Settings,
  Cloud,
  Blocks,
  Zap,
  TrendingUp,
  Target,
  Workflow,
  Code2,
  Server,
  Rocket,
  ShieldCheck,
  Gauge,
  Layers
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PremiumCard } from "@/components/PremiumCard";
import { SectionHeader } from "@/components/SectionHeader";
import { SEOHead } from "@/components/SEOHead";
import { MagneticButton } from "@/components/MagneticButton";

const services = [
  {
    icon: Cloud,
    title: "Automated Infrastructure Provisioning",
    description: "Deploy infrastructure across AWS, Azure, GCP, and on-premises environments with code-based automation for consistent, error-free provisioning.",
    capabilities: [
      "Multi-cloud resource provisioning",
      "On-premises bare-metal configuration",
      "Declarative infrastructure definitions",
      "Resource dependency management",
      "Automated state management",
    ],
  },
  {
    icon: Settings,
    title: "Configuration Management",
    description: "Maintain consistent configurations across all environments with automated drift detection and remediation using industry-leading tools.",
    capabilities: [
      "Ansible playbook automation",
      "Multi-node configuration deployment",
      "Configuration drift detection",
      "Compliance policy enforcement",
      "Real-time change tracking",
    ],
  },
  {
    icon: GitBranch,
    title: "Version Control & GitOps",
    description: "Implement Git-based workflows for infrastructure changes with full audit trails, peer reviews, and instant rollback capabilities.",
    capabilities: [
      "Git-based infrastructure workflows",
      "Complete change history tracking",
      "Automated peer review processes",
      "One-click rollback capabilities",
      "Comprehensive audit trails",
    ],
  },
  {
    icon: Workflow,
    title: "CI/CD Pipeline Integration",
    description: "Seamlessly integrate infrastructure provisioning into your continuous delivery pipelines for streamlined deployment automation.",
    capabilities: [
      "Automated deployment pipelines",
      "Pre-deployment validation testing",
      "Security and compliance scanning",
      "Cost estimation before deployment",
      "Automated rollout strategies",
    ],
  },
];

const tools = [
  {
    icon: Code2,
    name: "Terraform",
    description: "Open-source infrastructure definition tool supporting multi-cloud platforms including AWS, Azure, and GCP.",
    features: [
      "Multi-cloud support",
      "Declarative configuration",
      "State management",
      "Provider ecosystem",
    ],
    color: "from-purple-500/20 to-violet-500/10",
    accent: "text-purple-400",
  },
  {
    icon: Server,
    name: "OpenTofu",
    description: "Open-source Terraform fork for infrastructure provisioning with enhanced community governance and features.",
    features: [
      "Terraform-compatible",
      "Open governance model",
      "Enterprise features",
      "Community-driven",
    ],
    color: "from-blue-500/20 to-cyan-500/10",
    accent: "text-blue-400",
  },
  {
    icon: Blocks,
    name: "Ansible",
    description: "Powerful automation platform for configuration management, application deployment, and orchestration.",
    features: [
      "Agentless architecture",
      "YAML-based playbooks",
      "Multi-platform support",
      "Extensive module library",
    ],
    color: "from-red-500/20 to-orange-500/10",
    accent: "text-red-400",
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Automated Efficiency",
    description: "Workflow automation reducing deployment errors and drastically cutting deployment timeframes across all environments.",
  },
  {
    icon: TrendingUp,
    title: "Rapid Scalability",
    description: "Code-based infrastructure enables instant adaptation to fluctuating demands and business growth requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Consistent Reliability",
    description: "Standardized configurations eliminate inconsistencies and ensure predictable infrastructure behavior.",
  },
  {
    icon: Gauge,
    title: "Enhanced Flexibility",
    description: "Improved infrastructure management capabilities with dynamic resource allocation and optimization.",
  },
  {
    icon: Layers,
    title: "Simplified Management",
    description: "Reduced operational complexity through code-based infrastructure control and centralized management.",
  },
];

const useCases = [
  {
    title: "Cloud Resource Provisioning",
    description: "Automate deployment of compute, storage, and networking resources across AWS, Azure, and GCP with consistent configurations.",
  },
  {
    title: "On-Premises Automation",
    description: "Configure and manage bare-metal servers and on-premises infrastructure using code-based automation frameworks.",
  },
  {
    title: "CI/CD Pipeline Integration",
    description: "Integrate infrastructure provisioning into continuous delivery workflows for automated, error-free deployments.",
  },
  {
    title: "Multi-Environment Management",
    description: "Maintain consistent configurations across development, staging, and production environments with version-controlled code.",
  },
];

const stats = [
  { value: "70%", label: "Faster Provisioning", description: "Reduction in infrastructure deployment time" },
  { value: "90%", label: "Fewer Errors", description: "Consistent code-based configuration" },
  { value: "100%", label: "Reproducible", description: "Infrastructure as code approach" },
  { value: "24/7", label: "Automation", description: "Continuous infrastructure management" },
];

export default function InfrastructureAsCode() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <SEOHead
        title="Infrastructure as Code Services | Terraform, OpenTofu & Ansible | AXIOMIO"
        description="Achieve 70% faster infrastructure provisioning with IaC services. Expert implementation of Terraform, OpenTofu, and Ansible for automated, reproducible infrastructure across AWS, Azure, and GCP. Enterprise-grade automation with GitOps workflows."
        keywords="infrastructure as code, IaC, terraform, opentofu, ansible, infrastructure automation, configuration management, DevOps, GitOps, multi-cloud infrastructure, terraform consulting, ansible automation, IaC implementation, infrastructure provisioning, cloud automation, IaC best practices"
        canonicalUrl="https://axiomio.com/services/infrastructure-as-code"
        pageType="services"
      />
      <Navbar />

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 via-background to-background" />
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-3xl" />
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
              <div className="p-3 rounded-xl bg-orange-500/10 text-orange-500 border border-orange-500/20">
                <FileCode className="h-8 w-8" />
              </div>
              <span className="text-sm font-semibold text-orange-500 uppercase tracking-wider">
                Infrastructure as Code
              </span>
            </motion.div>

            <motion.h1
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Enabling Agile Infrastructure for the{" "}
              <span className="text-orange-500">Modern Enterprise</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Revolutionize IT infrastructure management by utilizing code to automate provisioning and configuration.
              Achieve 70% faster deployments with Terraform, OpenTofu, and Ansible.
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
                  <div className="text-2xl md:text-3xl font-bold text-orange-500 mb-1">{stat.value}</div>
                  <div className="text-sm font-medium text-foreground mb-1">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">{stat.description}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* Services Grid */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionHeader
            label="IaC Services"
            title="Complete Infrastructure Automation"
            description="From provisioning to deployment, automate every aspect of infrastructure management with code-based workflows."
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
                <PremiumCard className="h-full group hover:border-orange-500/30 transition-all duration-300">
                  <div className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 rounded-xl bg-orange-500/10 text-orange-500 border border-orange-500/20 group-hover:bg-orange-500/20 transition-colors">
                        <service.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-semibold text-foreground group-hover:text-orange-500 transition-colors">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>

                    <ul className="space-y-2">
                      {service.capabilities.map((cap) => (
                        <li key={cap} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-orange-500/60 flex-shrink-0" />
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

      {/* Tools & Technologies Section */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionHeader
            label="Tools & Frameworks"
            title="Industry-Leading IaC Platforms"
            description="Leverage the most powerful infrastructure automation tools to transform your operations."
          />

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative h-full p-8 rounded-2xl bg-card/80 border border-border hover:border-orange-500/30 transition-all duration-300 overflow-hidden">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                  <div className="relative">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-orange-500/20 to-amber-500/10 w-fit mb-6">
                      <tool.icon className="w-8 h-8 text-orange-500" />
                    </div>

                    <h3 className="font-heading text-2xl font-bold text-foreground mb-3 group-hover:text-orange-500 transition-colors">
                      {tool.name}
                    </h3>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {tool.description}
                    </p>

                    <ul className="space-y-3">
                      {tool.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-sm text-foreground">
                          <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
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

      {/* Benefits Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionHeader
            label="Key Benefits"
            title="Transform Infrastructure Management"
            description="Experience the powerful advantages of Infrastructure as Code for your enterprise."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mt-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative h-full p-6 rounded-2xl bg-card/80 border border-border hover:border-orange-500/30 transition-all duration-300 text-center">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-orange-500/20 to-amber-500/10 w-fit mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-orange-500" />
                  </div>

                  <h3 className="font-heading text-lg font-bold text-foreground mb-3 group-hover:text-orange-500 transition-colors">
                    {benefit.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionHeader
            label="Real-World Applications"
            title="IaC Use Cases"
            description="Discover how Infrastructure as Code solves critical infrastructure challenges across diverse environments."
          />

          <div className="grid md:grid-cols-2 gap-6 mt-16 max-w-5xl mx-auto">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative h-full p-6 rounded-2xl bg-card/80 border border-border hover:border-orange-500/30 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-orange-500/10 border border-orange-500/20">
                      <Rocket className="w-5 h-5 text-orange-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-orange-500 transition-colors">
                        {useCase.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {useCase.description}
                      </p>
                    </div>
                  </div>
                </div>
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
              Transform Your Infrastructure with Code
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Get a free IaC assessment and discover how to achieve 70% faster deployments with enterprise-grade automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <MagneticButton>
                <Button variant="hero" size="xl" className="bg-orange-500 hover:bg-orange-600" asChild>
                  <Link to="/contact">
                    Get Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </MagneticButton>
              <Link to="/approach" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                Learn about our approach
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
