import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingDown, TrendingUp, Zap, Clock } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const caseStudies = [
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
];

export function CaseStudiesSection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-muted/20">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionHeader
            label="Case Studies"
            title="Real Results, Real Impact"
            description="Explore how we've helped enterprises transform their operations and achieve measurable outcomes."
          />
        </motion.div>

        <div className="mt-16 space-y-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.client}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.7 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="relative rounded-2xl overflow-hidden aspect-video group">
                  <img
                    src={study.image}
                    alt={study.client}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-primary/90 text-primary-foreground">
                      {study.industry}
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                <span className="text-sm font-medium text-primary">{study.client}</span>
                <h3 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mt-2 mb-4">
                  {study.title}
                </h3>
                <p className="text-muted-foreground mb-6">{study.description}</p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                  {study.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="p-3 rounded-lg bg-background border border-border/50 text-center"
                    >
                      <metric.icon className="w-4 h-4 mx-auto text-primary mb-1" />
                      <div className="font-heading text-xl font-bold text-foreground">
                        {metric.value}
                      </div>
                      <div className="text-xs text-muted-foreground">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {study.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button variant="hero" asChild>
                  <Link to={study.link}>
                    Read Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground mb-4">
            Ready to become our next success story?
          </p>
          <Button variant="outline" size="lg" asChild>
            <Link to="/contact">
              Start Your Transformation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
