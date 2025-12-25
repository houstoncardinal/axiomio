import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  DollarSign, 
  TrendingDown, 
  BarChart3, 
  PieChart, 
  CheckCircle2,
  Wallet,
  Target,
  Users,
  Zap
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
    icon: BarChart3,
    title: "Cost Visibility & Allocation",
    description: "Gain complete visibility into cloud spending with granular cost allocation and real-time dashboards.",
    capabilities: [
      "Multi-cloud Cost Aggregation",
      "Department & Project Allocation",
      "Real-time Spending Dashboards",
      "Anomaly Detection",
      "Budget Alerts & Forecasting",
    ],
  },
  {
    icon: TrendingDown,
    title: "Cost Optimization",
    description: "Identify and eliminate waste while maximizing the value of every dollar spent on cloud resources.",
    capabilities: [
      "Right-sizing Recommendations",
      "Reserved Instance Planning",
      "Spot Instance Strategy",
      "Idle Resource Detection",
      "Storage Optimization",
    ],
  },
  {
    icon: Users,
    title: "FinOps Culture & Governance",
    description: "Build a cost-conscious culture with clear policies, accountability, and cross-functional collaboration.",
    capabilities: [
      "FinOps Team Enablement",
      "Chargeback/Showback Models",
      "Policy Framework Development",
      "Executive Reporting",
      "Training & Best Practices",
    ],
  },
  {
    icon: Zap,
    title: "Automation & Tooling",
    description: "Leverage automation to continuously optimize costs and enforce governance at scale.",
    capabilities: [
      "Automated Scheduling",
      "Policy-as-Code Implementation",
      "CI/CD Cost Gates",
      "Tag Compliance Automation",
      "Custom Tool Integration",
    ],
  },
];

const stats = [
  { value: "248%", label: "3-Year ROI", description: "Implementing cloud cost optimization" },
  { value: "30%", label: "Average Savings", description: "Cost reduction through FinOps" },
  { value: "40%", label: "Waste Reduction", description: "Idle and over-provisioned resources" },
  { value: "95%", label: "Visibility", description: "Cloud spend attribution" },
];

export default function CloudFinOps() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <SEOHead
        title="Cloud FinOps Services | Cost Optimization & Financial Management | Axiomio"
        description="Expert Cloud FinOps services: cost visibility, optimization, governance, and automation. Achieve 248% ROI with our cloud financial management solutions."
        keywords="cloud finops, cloud cost optimization, finops services, cloud financial management, cost visibility, cloud governance, AWS cost optimization, Azure cost management"
        canonicalUrl="https://axiomio.com/services/cloud-finops"
        pageType="services"
      />
      <Navbar />
      
      {/* Hero Section */}
      <header className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 via-background to-background" />
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-3xl" />
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
              <div className="p-3 rounded-xl bg-green-500/10 text-green-500 border border-green-500/20">
                <DollarSign className="h-8 w-8" />
              </div>
              <span className="text-sm font-semibold text-green-500 uppercase tracking-wider">
                Cloud FinOps
              </span>
            </motion.div>
            
            <motion.h1 
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Optimize Your{" "}
              <span className="text-green-500">Cloud Spend</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Gain visibility, eliminate waste, and align your cloud costs with business goals. 
              Drive financial accountability with our comprehensive FinOps framework.
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
                  <div className="text-2xl md:text-3xl font-bold text-green-500 mb-1">{stat.value}</div>
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
            label="FinOps Services"
            title="Comprehensive Cloud Financial Management"
            description="From visibility to optimization, we help you maximize the value of every cloud dollar."
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
                <PremiumCard className="h-full group hover:border-green-500/30 transition-all duration-300">
                  <div className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 rounded-xl bg-green-500/10 text-green-500 border border-green-500/20 group-hover:bg-green-500/20 transition-colors">
                        <service.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-semibold text-foreground group-hover:text-green-500 transition-colors">
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
                          <CheckCircle2 className="h-4 w-4 text-green-500/60 flex-shrink-0" />
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
              Start Optimizing Your Cloud Spend Today
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Get a free cloud cost assessment and discover your savings potential.
            </p>
            <MagneticButton>
              <Button variant="hero" size="xl" className="bg-green-500 hover:bg-green-600" asChild>
                <Link to="/contact">
                  Get Free Assessment
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
