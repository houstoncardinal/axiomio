import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle, Cpu, Cloud, Database, Shield, Workflow, Server, GitBranch, Lock, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GridBackground } from "@/components/GridBackground";
import { SectionHeader } from "@/components/SectionHeader";

const offerings = [
  {
    icon: Layers,
    title: "Enterprise Architecture",
    description: "Design comprehensive technology architectures that align with business strategy, enable scalability, and optimize total cost of ownership.",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Architect and implement cloud-native solutions across AWS, Azure, and GCP with focus on resilience, performance, and cost efficiency.",
  },
  {
    icon: Workflow,
    title: "System Integration",
    description: "Connect disparate systems and data sources into cohesive ecosystems that enable real-time insights and streamlined operations.",
  },
  {
    icon: Server,
    title: "Platform Modernization",
    description: "Transform legacy systems into modern, maintainable platforms without disrupting critical business operations.",
  },
  {
    icon: Shield,
    title: "Security Architecture",
    description: "Build security into every layer with zero-trust frameworks, compliance automation, and threat-resilient infrastructure.",
  },
  {
    icon: GitBranch,
    title: "Technical Due Diligence",
    description: "Comprehensive technology assessments for M&A, investments, and strategic partnerships with actionable risk analysis.",
  },
];

const capabilities = [
  {
    category: "Infrastructure",
    items: ["Multi-cloud architecture", "Container orchestration", "Infrastructure as Code", "Edge computing", "Hybrid deployments"],
  },
  {
    category: "Data",
    items: ["Data lake architecture", "Real-time streaming", "Master data management", "Analytics platforms", "Data governance"],
  },
  {
    category: "Integration",
    items: ["API management", "Event-driven architecture", "Microservices design", "Legacy modernization", "B2B connectivity"],
  },
  {
    category: "Security",
    items: ["Zero-trust architecture", "Identity management", "Compliance automation", "Security operations", "Incident response"],
  },
];

const techStack = [
  { name: "AWS", type: "Cloud" },
  { name: "Azure", type: "Cloud" },
  { name: "GCP", type: "Cloud" },
  { name: "Kubernetes", type: "Container" },
  { name: "Terraform", type: "IaC" },
  { name: "Docker", type: "Container" },
  { name: "Kafka", type: "Streaming" },
  { name: "PostgreSQL", type: "Database" },
  { name: "MongoDB", type: "Database" },
  { name: "Redis", type: "Cache" },
  { name: "GraphQL", type: "API" },
  { name: "Node.js", type: "Runtime" },
];

const useCases = [
  {
    industry: "Financial Services",
    challenge: "A global bank needed to modernize its core banking platform while maintaining 99.99% uptime and regulatory compliance.",
    outcome: "Delivered phased modernization that reduced transaction latency by 85% and enabled real-time fraud detection at scale.",
  },
  {
    industry: "Retail",
    challenge: "An omnichannel retailer required unified commerce platform to integrate 2,000+ stores with digital channels.",
    outcome: "Architected microservices platform handling 50M+ daily transactions with sub-second response times globally.",
  },
  {
    industry: "Manufacturing",
    challenge: "Industrial conglomerate sought to connect 150+ factories with real-time production monitoring and predictive maintenance.",
    outcome: "Implemented IoT platform processing 1B+ daily events, reducing unplanned downtime by 62% and maintenance costs by $45M annually.",
  },
];

export default function TechnologySystems() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32">
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
              <Cpu className="h-10 w-10" />
            </motion.div>
            
            <motion.h1 
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              Technology &{" "}
              <span className="text-gradient">Systems</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Architect and implement enterprise-grade systems designed for scale, 
              reliability, and long-term operational excellence.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Discuss Your Architecture
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

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
                title="Infrastructure that enables ambition"
                align="left"
              />
              <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Technology is the foundation upon which modern enterprises operate. Our Technology 
                  & Systems practice designs and implements the digital infrastructure that enables 
                  organizations to scale, innovate, and compete in an increasingly digital world.
                </p>
                <p>
                  We approach technology not as an end in itself, but as a strategic enabler. Every 
                  architecture decision is evaluated against business objectives, operational realities, 
                  and long-term maintainability. The result is systems that are as elegant in their 
                  design as they are robust in their operation.
                </p>
                <p>
                  From greenfield cloud-native platforms to complex legacy modernization, we bring 
                  the expertise to design systems that perform at scale while remaining adaptable 
                  to evolving requirements.
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
                Technology Expertise
              </h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <motion.span
                    key={tech.name}
                    className="px-3 py-1.5 rounded-full text-sm bg-muted/50 text-muted-foreground border border-border hover:border-primary/50 hover:text-primary transition-colors"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    {tech.name}
                  </motion.span>
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
              title="Enterprise technology capabilities"
              description="Comprehensive services spanning architecture, implementation, and optimization of enterprise systems."
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

      {/* Capabilities Grid */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-card/50 to-background">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SectionHeader
              label="Capabilities"
              title="Deep technical expertise across domains"
            />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {capabilities.map((cap, index) => (
              <motion.div
                key={cap.category}
                className="glass-card rounded-2xl p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h4 className="font-heading font-semibold text-primary mb-4">
                  {cap.category}
                </h4>
                <ul className="space-y-2">
                  {cap.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
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
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SectionHeader
              label="Impact"
              title="Enterprise-scale implementations"
              description="How our technology expertise has transformed critical business infrastructure."
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
      <section className="py-24 lg:py-32 bg-gradient-to-b from-card/50 to-background">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to build for scale?
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Let's discuss your technology challenges and design systems 
              that enable your most ambitious objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Start Technical Discussion
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
    </div>
  );
}