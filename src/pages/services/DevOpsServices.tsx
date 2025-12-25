import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  GitBranch, 
  Workflow, 
  Container, 
  Repeat, 
  CheckCircle2,
  Gauge,
  Rocket,
  Settings,
  Monitor
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
    icon: Workflow,
    title: "CI/CD Pipeline Design",
    description: "Build robust, automated pipelines that accelerate your software delivery lifecycle.",
    capabilities: [
      "Pipeline Architecture Design",
      "Jenkins, GitLab CI, GitHub Actions",
      "Automated Testing Integration",
      "Deployment Automation",
      "Release Management",
    ],
  },
  {
    icon: Container,
    title: "Containerization & Orchestration",
    description: "Modernize applications with containers and Kubernetes for scalable, portable deployments.",
    capabilities: [
      "Docker Implementation",
      "Kubernetes Cluster Management",
      "Helm Chart Development",
      "Service Mesh Configuration",
      "Container Security",
    ],
  },
  {
    icon: Settings,
    title: "Infrastructure as Code",
    description: "Automate infrastructure provisioning with code for consistency and repeatability.",
    capabilities: [
      "Terraform Implementation",
      "CloudFormation Templates",
      "Ansible Automation",
      "Configuration Management",
      "GitOps Workflows",
    ],
  },
  {
    icon: Monitor,
    title: "Observability & Monitoring",
    description: "Gain deep insights into your systems with comprehensive monitoring and alerting.",
    capabilities: [
      "Prometheus & Grafana Setup",
      "Log Aggregation (ELK/EFK)",
      "Distributed Tracing",
      "APM Implementation",
      "Alert Management",
    ],
  },
];

const stats = [
  { value: "208x", label: "Faster Deploys", description: "DevOps adopters deploy more frequently" },
  { value: "106x", label: "Faster Lead Time", description: "From commit to deploy" },
  { value: "60%", label: "Reduced MTTR", description: "Mean time to recovery improvement" },
  { value: "3x", label: "Lower Change Failure", description: "Fewer deployment failures" },
];

export default function DevOpsServices() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <SEOHead
        title="DevOps Services | CI/CD, Kubernetes & IaC | Axiomio"
        description="Professional DevOps services: CI/CD pipeline design, Kubernetes orchestration, Infrastructure as Code, and observability. Deploy 208x more frequently."
        keywords="devops services, CI/CD, kubernetes, docker, infrastructure as code, terraform, jenkins, gitlab ci, github actions, container orchestration"
        canonicalUrl="https://axiomio.com/services/devops-services"
        pageType="services"
      />
      <Navbar />
      
      {/* Hero Section */}
      <header className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-background to-background" />
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-violet-500/10 rounded-full blur-3xl" />
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
                <GitBranch className="h-8 w-8" />
              </div>
              <span className="text-sm font-semibold text-blue-500 uppercase tracking-wider">
                DevOps Services
              </span>
            </motion.div>
            
            <motion.h1 
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Accelerate Your{" "}
              <span className="text-blue-500">Software Delivery</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Transform your development lifecycle with DevOps practices that enhance collaboration, 
              automate processes, and achieve faster, more reliable deployments.
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

      {/* Services Grid */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionHeader
            label="DevOps Capabilities"
            title="End-to-End DevOps Transformation"
            description="From CI/CD pipelines to Kubernetes, we help you adopt modern practices for faster delivery."
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
              Ready to Transform Your Delivery Pipeline?
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Schedule a DevOps assessment to identify opportunities for improvement.
            </p>
            <MagneticButton>
              <Button variant="hero" size="xl" className="bg-blue-500 hover:bg-blue-600" asChild>
                <Link to="/contact">
                  Start Your DevOps Journey
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
