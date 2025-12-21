import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  DollarSign, 
  TrendingDown, 
  BarChart3, 
  Zap, 
  Cloud, 
  AlertTriangle,
  CheckCircle2,
  PieChart,
  Gauge,
  Settings,
  Bot,
  Eye
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PremiumCard } from "@/components/PremiumCard";
import { SectionHeader } from "@/components/SectionHeader";
import { SEOHead } from "@/components/SEOHead";
import { MagneticButton } from "@/components/MagneticButton";
import { AnimatedGradientText } from "@/components/AnimatedGradientText";

const features = [
  {
    icon: Eye,
    title: "Real-Time Visibility",
    description: "Complete visibility into cloud spend across AWS, Azure, and GCP with real-time dashboards and alerts.",
  },
  {
    icon: Bot,
    title: "AI-Powered Optimization",
    description: "Machine learning models identify waste patterns and recommend optimizations automatically.",
  },
  {
    icon: TrendingDown,
    title: "Automated Rightsizing",
    description: "Automatically identify and resize over-provisioned resources to eliminate waste.",
  },
  {
    icon: Settings,
    title: "Reserved Instance Management",
    description: "Optimize reserved instance coverage and savings plans for maximum ROI.",
  },
  {
    icon: AlertTriangle,
    title: "Anomaly Detection",
    description: "AI-driven detection of cost anomalies and unexpected spend before they impact budgets.",
  },
  {
    icon: PieChart,
    title: "Cost Allocation",
    description: "Granular cost allocation and showback/chargeback reporting by team, project, or application.",
  },
];

const stats = [
  { value: "35%", label: "Average Savings" },
  { value: "< 24hrs", label: "Time to Value" },
  { value: "Real-time", label: "Cost Insights" },
  { value: "10x", label: "ROI" },
];

const wasteTypes = [
  { name: "Idle Resources", percentage: "23%", description: "Unused EC2, RDS instances running 24/7" },
  { name: "Over-Provisioned", percentage: "31%", description: "Resources sized larger than needed" },
  { name: "Unattached Storage", percentage: "18%", description: "Orphaned EBS volumes and snapshots" },
  { name: "Missing Reservations", percentage: "28%", description: "On-demand pricing for predictable workloads" },
];

const xeroWasteSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://axiomio.com/xerowaste/#product",
  "name": "XeroWaste",
  "applicationCategory": "BusinessApplication",
  "applicationSubCategory": "FinOps Platform",
  "description": "AI-powered cloud cost optimization platform that eliminates waste, maximizes savings, and delivers real-time visibility across AWS, Azure, and GCP.",
  "url": "https://axiomio.com/xerowaste",
  "featureList": [
    "Real-Time Cost Visibility",
    "AI-Powered Optimization",
    "Automated Rightsizing",
    "Reserved Instance Management",
    "Anomaly Detection",
    "Cost Allocation & Showback"
  ],
  "offers": {
    "@type": "Offer",
    "description": "Cloud cost optimization with average 35% savings"
  },
  "provider": { "@id": "https://axiomio.com/#organization" }
};

export default function XeroWaste() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <SEOHead
        title="XeroWaste | AI-Powered Cloud Cost Optimization | FinOps | Axiomio"
        description="Eliminate cloud waste with AI-powered cost optimization. Real-time visibility, automated rightsizing, and FinOps best practices. Average 35% savings across AWS, Azure, GCP."
        keywords="cloud cost optimization, FinOps, cloud waste, AWS cost management, Azure cost optimization, GCP billing, cloud savings, rightsizing, reserved instances, cloud financial management"
        canonicalUrl="https://axiomio.com/xerowaste"
        pageType="product"
        structuredData={xeroWasteSchema}
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
            className="max-w-4xl mx-auto text-center"
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
              <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-green-500 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10">
                <DollarSign className="h-4 w-4" />
                FinOps Platform
              </span>
            </motion.div>
            
            <motion.h1 
              className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <AnimatedGradientText className="from-green-400 via-emerald-500 to-teal-400">XeroWaste</AnimatedGradientText>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              AI-powered cloud cost optimization that eliminates waste, maximizes savings, 
              and delivers real-time visibility across your entire cloud infrastructure.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <MagneticButton>
                <Button variant="hero" size="xl" className="bg-green-500 hover:bg-green-600" asChild>
                  <Link to="/contact">
                    Get Cost Analysis
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button variant="hero-outline" size="xl" asChild>
                  <Link to="/xops360">
                    Part of XOPS360
                  </Link>
                </Button>
              </MagneticButton>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-xl bg-card/50 border border-border/50">
                  <div className="text-2xl md:text-3xl font-bold text-green-500 mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* Waste Analysis Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-card/50 to-background">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionHeader
            label="The Problem"
            title="Where does cloud waste hide?"
            description="Most organizations waste 30-40% of their cloud spend. XeroWaste finds and eliminates every dollar of waste."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {wasteTypes.map((waste, index) => (
              <motion.div
                key={waste.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <PremiumCard className="h-full text-center p-8">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto rounded-full bg-green-500/10 flex items-center justify-center">
                      <span className="text-2xl font-bold text-green-500">{waste.percentage}</span>
                    </div>
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                    {waste.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {waste.description}
                  </p>
                </PremiumCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionHeader
            label="Capabilities"
            title="Complete FinOps platform"
            description="Everything you need to optimize cloud costs and implement FinOps best practices."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <PremiumCard className="h-full group hover:border-green-500/30 transition-all duration-300">
                  <div className="p-8">
                    <div className="p-3 rounded-xl bg-green-500/10 text-green-500 border border-green-500/20 w-fit mb-6 group-hover:bg-green-500/20 transition-colors">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-green-500 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </PremiumCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-card/50 to-background">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionHeader
            label="How It Works"
            title="Start saving in 24 hours"
            description="Quick deployment, immediate insights, continuous optimization."
          />
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              { step: "01", title: "Connect", description: "Connect your AWS, Azure, or GCP accounts in minutes with read-only access." },
              { step: "02", title: "Analyze", description: "AI analyzes your infrastructure and identifies optimization opportunities." },
              { step: "03", title: "Optimize", description: "Implement recommendations automatically or with one-click approval." },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-green-500/10 border-2 border-green-500/30 flex items-center justify-center mb-6">
                  <span className="text-xl font-bold text-green-500">{item.step}</span>
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Stop wasting cloud spend
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Get a free cloud cost analysis and discover how much you could save with XeroWaste.
            </p>
            <MagneticButton>
              <Button variant="premium" size="xl" className="bg-green-500 hover:bg-green-600" asChild>
                <Link to="/contact">
                  Get Free Cost Analysis
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
