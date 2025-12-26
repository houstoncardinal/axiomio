import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingDown, TrendingUp, Zap, Clock, ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

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
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-12 lg:py-16 relative overflow-hidden bg-slate-50/30">
      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 mb-2">
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-700">Case Studies</span>
          </div>
          <h2 className="font-heading text-xl md:text-2xl font-bold text-slate-900 mb-1">
            Real Results, Real Impact
          </h2>
          <p className="text-slate-600 text-xs max-w-2xl mx-auto leading-relaxed">
            Enterprise transformations that deliver measurable outcomes
          </p>
        </motion.div>

        {/* Ultra-Compact Horizontal Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200 shadow-lg flex items-center justify-center hover:bg-white transition-colors"
            aria-label="Previous case study"
          >
            <ChevronLeft className="w-4 h-4 text-slate-700" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200 shadow-lg flex items-center justify-center hover:bg-white transition-colors"
            aria-label="Next case study"
          >
            <ChevronRight className="w-4 h-4 text-slate-700" />
          </button>

          {/* Horizontal Scroll Container */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-4 lg:gap-6"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.client}
                  className="flex-shrink-0 w-full max-w-sm mx-auto"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    {/* Compact Image */}
                    <div className="relative aspect-[4/3]">
                      <img
                        src={study.image}
                        alt={study.client}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3">
                        <Badge className="bg-white/95 text-slate-900 text-[10px] px-2 py-0.5">
                          {study.industry}
                        </Badge>
                      </div>
                    </div>

                    {/* Ultra-Compact Content */}
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-bold text-slate-900">{study.client}</span>
                        <div className="h-px bg-slate-300 flex-1" />
                      </div>

                      <h3 className="font-heading text-sm font-semibold text-slate-900 mb-2 leading-tight line-clamp-2">
                        {study.title}
                      </h3>

                      <p className="text-slate-600 text-xs leading-tight mb-3 line-clamp-2">
                        {study.description}
                      </p>

                      {/* Mini Metrics Row */}
                      <div className="flex gap-2 mb-3 overflow-x-auto">
                        {study.metrics.slice(0, 3).map((metric) => (
                          <div
                            key={metric.label}
                            className="flex-shrink-0 p-1.5 rounded-md bg-slate-50 border border-slate-200 text-center min-w-[60px]"
                          >
                            <div className="font-heading text-xs font-bold text-slate-900 leading-none">
                              {metric.value}
                            </div>
                            <div className="text-[9px] text-slate-500 font-medium leading-none mt-0.5">{metric.label}</div>
                          </div>
                        ))}
                      </div>

                      {/* Compact Tags */}
                      <div className="flex flex-wrap gap-1 mb-3">
                        {study.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-[9px] px-1.5 py-0.5 border-slate-300 text-slate-700">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <Button variant="default" size="sm" className="w-full bg-slate-900 hover:bg-slate-800 text-white text-xs py-1.5 h-7" asChild>
                        <Link to={study.link}>
                          Read Study
                          <ArrowRight className="ml-1 h-2.5 w-2.5" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-6 mt-6">
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="p-2.5 rounded-lg bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-200 shadow-sm"
              aria-label="Previous case study"
            >
              <ChevronLeft className="w-4 h-4 text-slate-700" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                    index === currentIndex
                      ? "bg-slate-900 scale-125"
                      : "bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to case study ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="p-2.5 rounded-lg bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-200 shadow-sm"
              aria-label="Next case study"
            >
              <ChevronRight className="w-4 h-4 text-slate-700" />
            </button>
          </div>

          {/* Progress Indicator */}
          <div className="mt-4 max-w-xs mx-auto">
            <div className="text-center text-xs text-slate-500 font-medium">
              {currentIndex + 1} of {caseStudies.length}
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-600 mb-4 text-sm">
            Ready to become our next success story?
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="default" size="lg" className="bg-slate-900 hover:bg-slate-800 text-white" asChild>
              <Link to="/contact">
                Start Your Transformation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-slate-300 text-slate-700 hover:bg-slate-50" asChild>
              <Link to="/approach">
                See Our Approach
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
