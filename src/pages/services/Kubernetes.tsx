import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Box, 
  Layers, 
  Network, 
  Settings, 
  CheckCircle2,
  Shield,
  Gauge,
  RefreshCw,
  Container
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
    icon: Box,
    title: "Kubernetes Implementation",
    description: "Design and deploy production-ready Kubernetes clusters on any cloud or on-premises.",
    capabilities: [
      "Cluster Architecture Design",
      "Multi-cloud Kubernetes (EKS, AKS, GKE)",
      "On-premises K8s Deployment",
      "High Availability Setup",
      "Disaster Recovery",
    ],
  },
  {
    icon: Layers,
    title: "Microservices Architecture",
    description: "Transform monoliths into scalable, maintainable microservices architectures.",
    capabilities: [
      "Service Decomposition",
      "API Gateway Setup",
      "Service Mesh Implementation",
      "Event-Driven Architecture",
      "Domain-Driven Design",
    ],
  },
  {
    icon: Network,
    title: "Service Mesh & Networking",
    description: "Implement advanced networking with service mesh for observability and security.",
    capabilities: [
      "Istio Implementation",
      "Linkerd Setup",
      "Traffic Management",
      "mTLS Encryption",
      "Advanced Load Balancing",
    ],
  },
  {
    icon: Shield,
    title: "Kubernetes Security",
    description: "Secure your Kubernetes clusters with best practices and compliance.",
    capabilities: [
      "RBAC Configuration",
      "Network Policies",
      "Pod Security Standards",
      "Secrets Management",
      "Image Security Scanning",
    ],
  },
];

const stats = [
  { value: "70%", label: "Resource Efficiency", description: "Better utilization with K8s" },
  { value: "5x", label: "Faster Deployments", description: "With container orchestration" },
  { value: "99.99%", label: "Uptime SLA", description: "High availability clusters" },
  { value: "50%", label: "Cost Savings", description: "Infrastructure optimization" },
];

export default function Kubernetes() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <SEOHead
        title="Kubernetes & Microservices Services | Container Orchestration | AXIOMIO"
        description="Expert Kubernetes services: cluster implementation, microservices architecture, service mesh, and K8s security. EKS, AKS, GKE specialists. 70% better resource efficiency."
        keywords="kubernetes, microservices, container orchestration, EKS, AKS, GKE, service mesh, istio, kubernetes security, docker, container platform"
        canonicalUrl="https://axiomio.com/services/kubernetes"
        pageType="services"
      />
      <Navbar />
      
      {/* Hero Section */}
      <header className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 via-background to-background" />
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl" />
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
              <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-500 border border-indigo-500/20">
                <Container className="h-8 w-8" />
              </div>
              <span className="text-sm font-semibold text-indigo-500 uppercase tracking-wider">
                Kubernetes & Microservices
              </span>
            </motion.div>
            
            <motion.h1 
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Scale with{" "}
              <span className="text-indigo-500">Container Orchestration</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Deploy, manage, and scale containerized applications with Kubernetes. 
              Build resilient microservices architectures that grow with your business.
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
                  <div className="text-2xl md:text-3xl font-bold text-indigo-500 mb-1">{stat.value}</div>
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
            label="K8s Services"
            title="Complete Container Platform"
            description="From cluster setup to microservices, we help you build and run containerized applications at scale."
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
                <PremiumCard className="h-full group hover:border-indigo-500/30 transition-all duration-300">
                  <div className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-500 border border-indigo-500/20 group-hover:bg-indigo-500/20 transition-colors">
                        <service.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-semibold text-foreground group-hover:text-indigo-500 transition-colors">
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
                          <CheckCircle2 className="h-4 w-4 text-indigo-500/60 flex-shrink-0" />
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
              Ready to Containerize?
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Get expert guidance on your Kubernetes journey from assessment to production.
            </p>
            <MagneticButton>
              <Button variant="hero" size="xl" className="bg-indigo-500 hover:bg-indigo-600" asChild>
                <Link to="/contact">
                  Start Your K8s Journey
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
