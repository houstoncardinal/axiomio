import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingDown, TrendingUp, Zap, Clock, ShieldCheck, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MagneticButton } from "@/components/MagneticButton";

const caseStudies = [
  {
    client: "Sciffer Analytics",
    industry: "AI & Content Analytics",
    title: "Sciffer Enhances Security with Axiom",
    description: "Singapore-based startup Reflexion.ai secured their AI platform with comprehensive DevSecOps implementation and ISO 27001 compliance.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
    metrics: [
      { icon: Zap, value: "100%", label: "ISO Compliant" },
      { icon: TrendingUp, value: "DevSecOps", label: "Framework" },
      { icon: ShieldCheck, value: "Proactive", label: "Security" },
      { icon: Clock, value: "48hrs", label: "Assessment" },
    ],
    tags: ["Security", "DevSecOps", "ISO 27001", "Azure"],
    link: "/case-studies/sciffer-enhances-security-with-axiom",
  },
  {
    client: "EnParadigm",
    industry: "EdTech & Learning Solutions",
    title: "Reduced Deployment Time by 87.5% with AWS DevOps Pipeline",
    description: "Mid-sized EdTech firm migrated from on-premises to AWS with automated one-click DevOps pipeline, eliminating manual deployments and security vulnerabilities.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800",
    metrics: [
      { icon: TrendingDown, value: "87.5%", label: "Time Reduction" },
      { icon: Clock, value: "1 Hour", label: "Deployment Time" },
      { icon: ShieldCheck, value: "DDoS", label: "Prevention" },
      { icon: Zap, value: "One-Click", label: "Deployment" },
    ],
    tags: ["AWS", "DevOps", "CI/CD", "CloudFormation"],
    link: "/case-studies/enparadigm",
  },
  {
    client: "DreamCasino",
    industry: "Gaming & Entertainment",
    title: "Scales Up While Reducing Costs by 30% Using AWS",
    description: "DreamCasino partnered with Axiomio to modernize their cloud infrastructure, achieving significant cost savings while improving scalability and performance.",
    image: "https://axiomio.com/wp-content/uploads/2025/08/DreamCasino.png",
    metrics: [
      { icon: TrendingDown, value: "30%", label: "Cost Reduction" },
      { icon: TrendingUp, value: "5x", label: "Scalability" },
      { icon: Zap, value: "99.99%", label: "Uptime" },
      { icon: Clock, value: "60%", label: "Faster Deployment" },
    ],
    tags: ["AWS", "Cloud Migration", "Cost Optimization"],
    link: "/blog",
  },
  {
    client: "Enterprise Healthcare",
    industry: "Healthcare",
    title: "HIPAA-Compliant Cloud Transformation",
    description: "Migrated legacy healthcare systems to a fully compliant cloud infrastructure, enabling better patient care through modern technology.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&q=80&w=800",
    metrics: [
      { icon: TrendingDown, value: "45%", label: "Infrastructure Costs" },
      { icon: Zap, value: "100%", label: "HIPAA Compliant" },
      { icon: TrendingUp, value: "3x", label: "Data Processing" },
      { icon: Clock, value: "40%", label: "Time Savings" },
    ],
    tags: ["Azure", "Security", "Compliance"],
    link: "/contact",
  },
  {
    client: "Global FinTech",
    industry: "Financial Services",
    title: "Real-Time Fraud Detection with AI/ML Pipeline",
    description: "Implemented AI-powered fraud detection system processing millions of transactions per second with sub-millisecond response times.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    metrics: [
      { icon: TrendingDown, value: "85%", label: "Fraud Reduction" },
      { icon: Zap, value: "<1ms", label: "Response Time" },
      { icon: TrendingUp, value: "10M+", label: "Daily Transactions" },
      { icon: Clock, value: "24/7", label: "Monitoring" },
    ],
    tags: ["AI/ML", "AWS", "Real-Time Analytics"],
    link: "/contact",
  },
  {
    client: "enParadigm",
    industry: "SaaS & Sales Enablement",
    title: "Cloud SOC Implementation with Real-Time Threat Detection",
    description: "Implemented comprehensive Cloud Security Operations Center with AWS GuardDuty, Security Hub, and Kibana for 24/7 monitoring and compliance.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    metrics: [
      { icon: ShieldCheck, value: "24/7", label: "Monitoring" },
      { icon: Zap, value: "Real-Time", label: "Alerts" },
      { icon: TrendingUp, value: "CIS", label: "Compliance" },
      { icon: Clock, value: "365", label: "Support" },
    ],
    tags: ["AWS GuardDuty", "Security Hub", "SOC", "Compliance"],
    link: "/case-studies/enparadigm-soc",
  },
  {
    client: "Blue Yonder",
    industry: "Supply Chain Management",
    title: "Enterprise Citrix Infrastructure for 4,000 Global Users",
    description: "Deployed Citrix 7.15 across Azure and 8 global data centers with GSLB, enabling seamless access for 4,000 concurrent users worldwide.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    metrics: [
      { icon: TrendingUp, value: "4,000", label: "Users" },
      { icon: Zap, value: "8 DC", label: "Data Centers" },
      { icon: ShieldCheck, value: "GSLB", label: "Load Balancing" },
      { icon: Clock, value: "Azure", label: "Hybrid Cloud" },
    ],
    tags: ["Citrix", "Azure", "GSLB", "Virtual Apps"],
    link: "/case-studies/blue-yonder-citrix",
  },
  {
    client: "Saxon Insurance",
    industry: "Insurance",
    title: "Zero Downtime Datacenter Exit to Microsoft Azure",
    description: "Migrated 50-year-old insurance provider from datacenter to Azure in one month with zero downtime, eliminating latency and establishing disaster recovery.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
    metrics: [
      { icon: Zap, value: "0", label: "Downtime" },
      { icon: Clock, value: "1 Month", label: "Migration" },
      { icon: TrendingDown, value: "Zero", label: "Latency" },
      { icon: ShieldCheck, value: "Multi-Region", label: "DR" },
    ],
    tags: ["Azure", "Site Recovery", "Zero Downtime", "DR"],
    link: "/case-studies/saxon-insurance-azure",
  },
  {
    client: "Arch Law",
    industry: "Legal Technology",
    title: "Cloud-Based Smart Contracts Platform Enhancement",
    description: "Enhanced OpenLaw platform with Annature eSignature integration, account management, and collaboration tools using Firebase and Vue.js.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800",
    metrics: [
      { icon: Zap, value: "eSign", label: "Integration" },
      { icon: TrendingUp, value: "Multi-Party", label: "Collaboration" },
      { icon: ShieldCheck, value: "Firebase", label: "Backend" },
      { icon: Clock, value: "Vue.js", label: "Frontend" },
    ],
    tags: ["Smart Contracts", "eSignature", "Firebase", "Vue.js"],
    link: "/case-studies/arch-law-smart-contracts",
  },
  {
    client: "OneForce",
    industry: "AI & Automation",
    title: "Build, Operate & Transfer Model with AWS Serverless",
    description: "Rapidly launched cloud-native AI SaaS platform using BOT model with AWS Lambda, Aurora Serverless, and Cognito, eliminating hiring delays.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
    metrics: [
      { icon: Zap, value: "BOT", label: "Model" },
      { icon: TrendingUp, value: "Serverless", label: "Architecture" },
      { icon: ShieldCheck, value: "Cognito", label: "Auth" },
      { icon: Clock, value: "Fast", label: "Launch" },
    ],
    tags: ["AWS Lambda", "Aurora Serverless", "BOT Model", "AI"],
    link: "/case-studies/oneforce-bot",
  },
];

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-background">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-primary">Success Stories</span>
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Real Results, Real Impact
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how we've helped enterprises across industries achieve transformational results through cloud innovation, security, and operational excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 lg:py-20 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.client}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.client}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />

                    {/* Industry Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-primary-foreground text-xs px-3 py-1 shadow-lg">
                        {study.industry}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 lg:p-8 flex-1 flex flex-col">
                    {/* Client Name */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xl font-bold text-foreground">{study.client}</span>
                      <div className="h-px bg-border flex-1" />
                    </div>

                    {/* Title */}
                    <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors">
                      {study.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                      {study.description}
                    </p>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {study.metrics.map((metric) => {
                        const Icon = metric.icon;
                        return (
                          <div
                            key={metric.label}
                            className="p-3 rounded-xl bg-muted/50 border border-border/50 hover:bg-muted transition-colors"
                          >
                            <Icon className="w-4 h-4 text-primary mb-1" />
                            <div className="font-heading text-lg font-bold text-foreground">
                              {metric.value}
                            </div>
                            <div className="text-xs text-muted-foreground font-medium">{metric.label}</div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {study.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs px-3 py-1 border-border/60">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <MagneticButton>
                      <Button variant="hero" size="default" className="w-full" asChild>
                        <Link to={study.link}>
                          Read Full Case Study
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </MagneticButton>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-24 relative overflow-hidden bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to become our next success story?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how Axiomio can help you achieve transformational results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton>
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contact">
                    Start Your Transformation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button variant="hero-outline" size="xl" asChild>
                  <Link to="/approach">
                    See Our Approach
                  </Link>
                </Button>
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
