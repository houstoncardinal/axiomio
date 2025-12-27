import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingDown, TrendingUp, Zap, Clock, ChevronLeft, ChevronRight, ShieldCheck, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import { MagneticButton } from "./MagneticButton";

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
    client: "Coforge",
    industry: "IT Solutions Provider",
    title: "Migrates 5,000+ VDIs to Azure in Under 10 Weeks",
    description: "Global IT solutions provider completes urgent Windows 7 EOL migration with zero downtime using Azure, Citrix DaaS, and enhanced security.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    metrics: [
      { icon: TrendingUp, value: "5,000+", label: "VDIs Migrated" },
      { icon: Clock, value: "<10 Weeks", label: "Timeline" },
      { icon: ShieldCheck, value: "MFA", label: "Enhanced Security" },
      { icon: Zap, value: "On-Demand", label: "Scalability" },
    ],
    tags: ["Azure", "Citrix DaaS", "VDI Migration", "MFA"],
    link: "/case-studies/coforge-vdi-azure",
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
];

export function CaseStudiesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const currentStudy = caseStudies[currentIndex];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <section className="py-20 lg:py-24 relative overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-primary">Success Stories</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
            Real Results, Real Impact
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Enterprise transformations that deliver measurable outcomes
          </p>
        </motion.div>

        {/* Single Card Carousel */}
        <div className="max-w-4xl mx-auto relative">
          {/* Navigation Arrows - Desktop */}
          <div className="hidden md:flex">
            <button
              onClick={prevSlide}
              className="absolute -left-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-card border border-border hover:border-primary/40 hover:bg-card/80 shadow-lg flex items-center justify-center transition-all duration-300 group"
              aria-label="Previous case study"
            >
              <ChevronLeft className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute -right-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-card border border-border hover:border-primary/40 hover:bg-card/80 shadow-lg flex items-center justify-center transition-all duration-300 group"
              aria-label="Next case study"
            >
              <ChevronRight className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
            </button>
          </div>

          {/* Card Container with AnimatePresence */}
          <div className="relative overflow-hidden min-h-[600px] flex items-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                }}
                className="w-full"
              >
                {/* Case Study Card */}
                <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-xl hover:shadow-2xl transition-all duration-500">
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Image Side */}
                    <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[400px]">
                      <img
                        src={currentStudy.image}
                        alt={currentStudy.client}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />

                      {/* Industry Badge */}
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-primary text-primary-foreground text-xs px-3 py-1 shadow-lg">
                          {currentStudy.industry}
                        </Badge>
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className="p-8 md:p-10 flex flex-col justify-between">
                      <div>
                        {/* Client Name */}
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-2xl font-bold text-foreground">{currentStudy.client}</span>
                          <div className="h-px bg-border flex-1" />
                        </div>

                        {/* Title */}
                        <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-4 leading-tight">
                          {currentStudy.title}
                        </h3>

                        {/* Description */}
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {currentStudy.description}
                        </p>

                        {/* Metrics Grid */}
                        <div className="grid grid-cols-2 gap-3 mb-6">
                          {currentStudy.metrics.map((metric) => {
                            const Icon = metric.icon;
                            return (
                              <div
                                key={metric.label}
                                className="p-4 rounded-xl bg-muted/50 border border-border/50 hover:bg-muted transition-colors"
                              >
                                <Icon className="w-5 h-5 text-primary mb-2" />
                                <div className="font-heading text-xl font-bold text-foreground">
                                  {metric.value}
                                </div>
                                <div className="text-xs text-muted-foreground font-medium">{metric.label}</div>
                              </div>
                            );
                          })}
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {currentStudy.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs px-3 py-1 border-border/60">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <MagneticButton>
                        <Button variant="hero" size="lg" className="w-full" asChild>
                          <Link to={currentStudy.link}>
                            Read Full Case Study
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </MagneticButton>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-6 mt-8">
            {/* Previous Button - Mobile */}
            <button
              onClick={prevSlide}
              className="md:hidden p-3 rounded-xl bg-card border border-border hover:border-primary/40 hover:bg-card/80 transition-all duration-300 shadow-md"
              aria-label="Previous case study"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? "w-8 h-3 bg-primary"
                      : "w-3 h-3 bg-border hover:bg-primary/50"
                  }`}
                  aria-label={`Go to case study ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button - Mobile */}
            <button
              onClick={nextSlide}
              className="md:hidden p-3 rounded-xl bg-card border border-border hover:border-primary/40 hover:bg-card/80 transition-all duration-300 shadow-md"
              aria-label="Next case study"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>

          {/* Progress Indicator */}
          <div className="mt-4 text-center">
            <span className="text-sm text-muted-foreground font-medium">
              {currentIndex + 1} of {caseStudies.length}
            </span>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-muted-foreground mb-6">
            Ready to become our next success story?
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
  );
}
