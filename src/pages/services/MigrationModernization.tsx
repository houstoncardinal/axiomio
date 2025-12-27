import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Cloud,
  Server,
  Database,
  CheckCircle2,
  Zap,
  RefreshCw,
  Layers,
  Target,
  TrendingUp,
  Shield,
  DollarSign,
  Rocket,
  Search,
  Lock,
  Settings,
  BarChart3,
  Container,
  Box,
  Code2
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
    title: "Legacy Application Migration",
    description: "Seamlessly migrate on-premises applications to AWS, Azure, or GCP with minimal disruption and enhanced scalability.",
    capabilities: [
      "Assessment & migration planning",
      "Lift & shift strategies",
      "Database migration services",
      "Application refactoring",
      "Hybrid cloud configuration",
    ],
  },
  {
    icon: RefreshCw,
    title: "Application Modernization",
    description: "Transform legacy applications with cloud-native technologies including containers, microservices, and APIs.",
    capabilities: [
      "Microservices architecture design",
      "Containerization with Docker/K8s",
      "Serverless transformation",
      "API-first development",
      "Event-driven architecture",
    ],
  },
  {
    icon: Container,
    title: "Cloud-Native Development",
    description: "Build new applications from the ground up using modern cloud-native technologies and best practices.",
    capabilities: [
      "Container-based applications",
      "Kubernetes orchestration",
      "Serverless architectures",
      "12-factor app methodology",
      "CI/CD automation",
    ],
  },
  {
    icon: BarChart3,
    title: "Infrastructure Optimization",
    description: "Ensure cost-efficiency and maximize resource utilization across your cloud environment.",
    capabilities: [
      "Cost optimization analysis",
      "Resource right-sizing",
      "Performance optimization",
      "Auto-scaling configuration",
      "FinOps best practices",
    ],
  },
];

const methodology = [
  {
    number: "01",
    title: "Assessment & Planning",
    icon: Search,
    description: "Comprehensive infrastructure evaluation and migration strategy development.",
    deliverables: [
      "Current state assessment",
      "Cloud readiness evaluation",
      "Migration roadmap creation",
      "Risk mitigation planning",
    ],
  },
  {
    number: "02",
    title: "Secure Migration",
    icon: Lock,
    description: "Managed transition to cloud with security embedded throughout, minimizing business disruption.",
    deliverables: [
      "Phased migration execution",
      "Security-first approach",
      "Data integrity validation",
      "Minimal downtime deployment",
    ],
  },
  {
    number: "03",
    title: "Application Modernization",
    icon: Code2,
    description: "Transform applications leveraging cloud-native technologies and modern architectural patterns.",
    deliverables: [
      "Containerization & orchestration",
      "Microservices implementation",
      "API modernization",
      "Serverless integration",
    ],
  },
  {
    number: "04",
    title: "Optimization & Management",
    icon: Settings,
    description: "Fine-tune your cloud environment for peak efficiency and ongoing cost management.",
    deliverables: [
      "Performance optimization",
      "Cost optimization analysis",
      "Continuous monitoring setup",
      "Well-Architected review",
    ],
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Enhanced Agility",
    description: "On-demand resource scaling enabling rapid response to changing business demands and market conditions.",
  },
  {
    icon: DollarSign,
    title: "Reduced Costs",
    description: "Eliminate physical infrastructure management overhead and optimize cloud spending with FinOps practices.",
  },
  {
    icon: Shield,
    title: "Improved Security",
    description: "Leverage advanced cloud provider security features and compliance frameworks for enhanced protection.",
  },
  {
    icon: Rocket,
    title: "Modernized Applications",
    description: "Transform legacy systems with containers, microservices, and APIs for faster innovation cycles.",
  },
];

const useCases = [
  {
    title: "Legacy Application Migration",
    description: "Move on-premises applications to cloud platforms for improved scalability, reliability, and cost-efficiency.",
    metrics: "30% cost reduction",
  },
  {
    title: "Application Modernization",
    description: "Transform existing applications with cloud-native technologies to accelerate development and deployment.",
    metrics: "3x faster delivery",
  },
  {
    title: "Cloud-Native Development",
    description: "Build new applications using containers, microservices, and serverless architectures from day one.",
    metrics: "50% faster TTM",
  },
  {
    title: "Infrastructure Optimization",
    description: "Right-size resources, implement auto-scaling, and optimize costs across your entire cloud footprint.",
    metrics: "40% cost savings",
  },
];

const tools = [
  {
    name: "AWS Migration Hub",
    description: "Native AWS migration tools for tracking and managing application migrations.",
    logo: "/logos/aws-badges/tiered-badge.png",
  },
  {
    name: "Azure Migrate",
    description: "Comprehensive migration services for Azure cloud environments.",
    logo: "/src/assets/partners/azure.png",
  },
  {
    name: "Well-Architected Framework",
    description: "AWS & Azure best practice frameworks for optimal cloud architecture.",
    logo: "/logos/aws-badges/tiered-badge.png",
  },
];

const stats = [
  { value: "30%", label: "Cost Reduction", description: "Average operational savings achieved" },
  { value: "90%", label: "Legacy Apps", description: "Need modernization for digital success" },
  { value: "99.9%", label: "Uptime", description: "Enhanced disaster recovery capabilities" },
  { value: "3x", label: "Faster Delivery", description: "Post-modernization deployment speed" },
];

export default function MigrationModernization() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <SEOHead
        title="Cloud Migration & Modernization Services | AWS, Azure Migration | AXIOMIO"
        description="Transform legacy systems with expert cloud migration and modernization. 30% cost reduction, 3x faster delivery. Seamless AWS & Azure migration, application modernization, containerization, microservices. Well-Architected Framework certified."
        keywords="cloud migration, application modernization, AWS migration, Azure migration, GCP migration, legacy application migration, containerization, microservices, cloud native development, lift and shift, infrastructure optimization, cloud transformation, digital transformation, well architected framework"
        canonicalUrl="https://axiomio.com/services/migration-and-modernization"
        pageType="services"
      />
      <Navbar />
      
      {/* Hero Section */}
      <header className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 via-background to-background" />
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl" />
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
              <div className="p-3 rounded-xl bg-violet-500/10 text-violet-500 border border-violet-500/20">
                <ArrowUpRight className="h-8 w-8" />
              </div>
              <span className="text-sm font-semibold text-violet-500 uppercase tracking-wider">
                Migration & Modernization
              </span>
            </motion.div>
            
            <motion.h1
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Your Path to{" "}
              <span className="text-violet-500">Cloud Transformation</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Seamless workload and application transitions to the cloud with enhanced agility, scalability, and cost-efficiency.
              Modernize legacy applications with cloud-native technologies and embedded security.
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
                  <div className="text-2xl md:text-3xl font-bold text-violet-500 mb-1">{stat.value}</div>
                  <div className="text-sm font-medium text-foreground mb-1">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">{stat.description}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* Use Cases Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionHeader
            label="Primary Use Cases"
            title="Transform Your Business with Cloud"
            description="Four core scenarios where migration and modernization drive measurable business outcomes."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative h-full p-6 rounded-2xl bg-card/80 border border-border hover:border-violet-500/30 transition-all duration-300 text-center">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-500/10 w-fit mx-auto mb-4">
                    <Target className="w-6 h-6 text-violet-500" />
                  </div>

                  <h3 className="font-heading text-lg font-bold text-foreground mb-3 group-hover:text-violet-500 transition-colors">
                    {useCase.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {useCase.description}
                  </p>

                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20">
                    <TrendingUp className="w-3.5 h-3.5 text-violet-500" />
                    <span className="text-xs font-semibold text-violet-500">{useCase.metrics}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionHeader
            label="Migration Services"
            title="Complete Transformation Journey"
            description="Comprehensive services covering every aspect of your cloud migration and modernization."
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
                <PremiumCard className="h-full group hover:border-violet-500/30 transition-all duration-300">
                  <div className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 rounded-xl bg-violet-500/10 text-violet-500 border border-violet-500/20 group-hover:bg-violet-500/20 transition-colors">
                        <service.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-semibold text-foreground group-hover:text-violet-500 transition-colors">
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
                          <CheckCircle2 className="h-4 w-4 text-violet-500/60 flex-shrink-0" />
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

      {/* Methodology Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionHeader
            label="Our Methodology"
            title="Four-Phase Migration Approach"
            description="Structured methodology ensuring successful cloud transformation with minimal risk and maximum value."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {methodology.map((phase, index) => (
              <motion.div
                key={phase.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative h-full p-6 rounded-2xl bg-card/80 border border-border hover:border-violet-500/30 transition-all duration-300">
                  {/* Phase Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 text-white font-bold text-lg">
                      {phase.number}
                    </div>
                    <div className="p-3 rounded-xl bg-violet-500/10 border border-violet-500/20">
                      <phase.icon className="w-5 h-5 text-violet-500" />
                    </div>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-violet-500 transition-colors">
                    {phase.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {phase.description}
                  </p>

                  <ul className="space-y-2">
                    {phase.deliverables.map((deliverable) => (
                      <li key={deliverable} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="h-3.5 w-3.5 text-violet-500 flex-shrink-0" />
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
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
            title="Why Migrate and Modernize?"
            description="Experience transformative advantages that drive digital success and business growth."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative h-full p-6 rounded-2xl bg-card/80 border border-border hover:border-violet-500/30 transition-all duration-300 text-center">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-500/10 w-fit mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-violet-500" />
                  </div>

                  <h3 className="font-heading text-lg font-bold text-foreground mb-3 group-hover:text-violet-500 transition-colors">
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

      {/* Tools & Frameworks Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionHeader
            label="Tools & Frameworks"
            title="Powered by Industry-Leading Platforms"
            description="Leverage native cloud migration tools and best-practice frameworks for optimal results."
          />

          <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative h-full p-6 rounded-2xl bg-card/80 border border-border hover:border-violet-500/30 transition-all duration-300 text-center">
                  <div className="flex items-center justify-center h-16 mb-4">
                    <img
                      src={tool.logo}
                      alt={tool.name}
                      className="h-12 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                      loading="lazy"
                    />
                  </div>

                  <h3 className="font-heading text-lg font-bold text-foreground mb-3 group-hover:text-violet-500 transition-colors">
                    {tool.name}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {tool.description}
                  </p>
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
              Ready to Transform Your Cloud Infrastructure?
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Get a free migration assessment and discover your path to cloud transformation with expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <MagneticButton>
                <Button variant="hero" size="xl" className="bg-violet-500 hover:bg-violet-600" asChild>
                  <Link to="/contact">
                    Start Your Journey
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
