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
  Target
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
    title: "Cloud Migration",
    description: "Seamlessly migrate workloads to AWS, Azure, or GCP with minimal disruption.",
    capabilities: [
      "Assessment & Planning",
      "Lift & Shift Migration",
      "Database Migration",
      "Application Refactoring",
      "Hybrid Cloud Setup",
    ],
  },
  {
    icon: RefreshCw,
    title: "Application Modernization",
    description: "Transform legacy applications into cloud-native, scalable solutions.",
    capabilities: [
      "Microservices Architecture",
      "Containerization",
      "Serverless Transformation",
      "API Development",
      "Event-Driven Design",
    ],
  },
  {
    icon: Database,
    title: "Data Migration & Analytics",
    description: "Migrate and modernize data infrastructure for real-time insights.",
    capabilities: [
      "Data Warehouse Migration",
      "Data Lake Implementation",
      "ETL Modernization",
      "Real-time Analytics",
      "Data Governance",
    ],
  },
  {
    icon: Layers,
    title: "Platform Engineering",
    description: "Build internal developer platforms that accelerate delivery.",
    capabilities: [
      "Developer Platform Design",
      "Self-Service Infrastructure",
      "Golden Paths",
      "Platform as a Product",
      "DevEx Optimization",
    ],
  },
];

const stats = [
  { value: "40%", label: "Cost Reduction", description: "Average infrastructure savings" },
  { value: "3x", label: "Faster Time-to-Market", description: "Post-modernization delivery" },
  { value: "99.9%", label: "Uptime Achieved", description: "Cloud infrastructure reliability" },
  { value: "500+", label: "Migrations Completed", description: "Successful cloud transitions" },
];

export default function MigrationModernization() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <SEOHead
        title="Cloud Migration & Modernization Services | Axiomio"
        description="Expert cloud migration and application modernization: AWS, Azure, GCP migration, containerization, microservices, and platform engineering. 40% cost reduction."
        keywords="cloud migration, application modernization, AWS migration, Azure migration, containerization, microservices, platform engineering, digital transformation"
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
              Transform Your{" "}
              <span className="text-violet-500">Legacy Systems</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Migrate, modernize, and optimize your systems with measurable success metrics. 
              Achieve seamless cloud transformation aligned with business goals.
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

      {/* Services Grid */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionHeader
            label="Transformation Services"
            title="Complete Modernization Journey"
            description="From assessment to optimization, we guide your transformation every step of the way."
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
              Ready to Modernize?
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Get a free migration assessment and roadmap for your transformation journey.
            </p>
            <MagneticButton>
              <Button variant="hero" size="xl" className="bg-violet-500 hover:bg-violet-600" asChild>
                <Link to="/contact">
                  Start Your Journey
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
