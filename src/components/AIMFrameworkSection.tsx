import { motion } from "framer-motion";
import { Search, TrendingUp, Settings, ArrowRight, CheckCircle, Sparkles, Target, Zap, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const phases = [
  {
    id: "assess",
    letter: "A",
    title: "Assess",
    subtitle: "Comprehensive Analysis",
    icon: Search,
    color: "from-blue-500 to-cyan-500",
    glowColor: "blue-500",
    accentColor: "text-blue-500",
    bgGradient: "from-blue-500/5 via-cyan-500/5 to-transparent",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    description: "Deep-dive discovery into your current state—infrastructure, security posture, processes, and costs.",
    deliverables: [
      "Infrastructure audit & health check",
      "Security vulnerability assessment",
      "Cost optimization analysis",
      "Process gap identification",
      "Technology roadmap recommendations",
    ],
  },
  {
    id: "improve",
    letter: "I",
    title: "Improve",
    subtitle: "Strategic Implementation",
    icon: TrendingUp,
    color: "from-primary to-violet-500",
    glowColor: "primary",
    accentColor: "text-primary",
    bgGradient: "from-primary/5 via-violet-500/5 to-transparent",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/30",
    description: "Execute targeted improvements based on assessment findings with measurable outcomes.",
    deliverables: [
      "Architecture modernization",
      "Security hardening & compliance",
      "Automation implementation",
      "Cost optimization execution",
      "Team enablement & training",
    ],
  },
  {
    id: "maintain",
    letter: "M",
    title: "Maintain",
    subtitle: "Continuous Excellence",
    icon: Settings,
    color: "from-emerald-500 to-green-500",
    glowColor: "emerald-500",
    accentColor: "text-emerald-500",
    bgGradient: "from-emerald-500/5 via-green-500/5 to-transparent",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/30",
    description: "Ongoing management and optimization to ensure sustained performance and security.",
    deliverables: [
      "24/7 monitoring & alerting",
      "Proactive incident response",
      "Regular security updates",
      "Continuous cost optimization",
      "Quarterly business reviews",
    ],
  },
];

export function AIMFrameworkSection() {
  return (
    <section className="py-32 lg:py-40 relative overflow-hidden bg-gradient-to-b from-background via-muted/30 to-background">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(var(--secondary)/0.06),transparent_50%)]" />

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.1)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black_40%,transparent_100%)]" />

        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-500/8 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-primary/8 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-emerald-500/8 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Our Methodology</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
          >
            The <span className="text-gradient bg-gradient-to-r from-blue-500 via-primary to-emerald-500 bg-clip-text">AIM Framework</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            A proven three-phase approach to transform your technology operations and deliver measurable business outcomes.
          </motion.p>
        </motion.div>

        {/* Framework Visual - Redesigned */}
        <div className="mt-20 relative max-w-7xl mx-auto">
          {/* Enhanced Connection Flow */}
          <div className="hidden lg:block absolute top-1/3 left-0 right-0 h-1 transform -translate-y-1/2 z-0">
            <div className="relative h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-primary to-emerald-500 rounded-full opacity-30" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-primary to-emerald-500 rounded-full blur-sm" />
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-6 relative z-10">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1]
                }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Glow Effect on Hover */}
                <div className={`absolute -inset-1 bg-gradient-to-br ${phase.color} rounded-3xl blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />

                {/* Main Card */}
                <div className={`relative rounded-2xl bg-card/80 backdrop-blur-sm border ${phase.borderColor} hover:border-${phase.glowColor}/50 p-8 h-full transition-all duration-300 hover:shadow-2xl overflow-hidden`}>
                  {/* Gradient Background Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${phase.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className="relative z-10">
                    {/* Phase Number Circle - Enhanced */}
                    <div className="flex items-start justify-between mb-8">
                      <div className="relative">
                        {/* Glow ring */}
                        <div className={`absolute -inset-2 bg-gradient-to-br ${phase.color} rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity`} />

                        {/* Main circle */}
                        <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${phase.color} flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform duration-300`}>
                          <span className="text-3xl font-bold text-white drop-shadow-lg">{phase.letter}</span>
                        </div>

                        {/* Phase number badge */}
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-card border-2 border-border flex items-center justify-center">
                          <span className="text-xs font-bold text-foreground">{index + 1}</span>
                        </div>
                      </div>

                      {/* Icon with background */}
                      <div className={`p-4 rounded-xl ${phase.bgColor} border ${phase.borderColor} group-hover:scale-110 transition-transform duration-300`}>
                        <phase.icon className={`w-6 h-6 ${phase.accentColor}`} />
                      </div>
                    </div>

                    {/* Title Section */}
                    <div className="mb-6">
                      <h3 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {phase.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${phase.color}`} />
                        <p className={`text-sm font-bold uppercase tracking-wider ${phase.accentColor}`}>
                          {phase.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed mb-8 text-sm lg:text-base">
                      {phase.description}
                    </p>

                    {/* Deliverables Section - Enhanced */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Target className={`w-4 h-4 ${phase.accentColor}`} />
                        <span className="text-xs font-bold uppercase tracking-wider text-foreground">
                          Key Deliverables
                        </span>
                      </div>

                      <ul className="space-y-3">
                        {phase.deliverables.map((item, idx) => (
                          <motion.li
                            key={item}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.15 + idx * 0.05 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-3 text-sm text-foreground group/item"
                          >
                            <div className={`p-1 rounded-full ${phase.bgColor} mt-0.5`}>
                              <CheckCircle className={`w-3.5 h-3.5 ${phase.accentColor}`} />
                            </div>
                            <span className="flex-1 group-hover/item:text-foreground transition-colors">
                              {item}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${phase.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                </div>

                {/* Arrow Connector (mobile) */}
                {index < phases.length - 1 && (
                  <div className="lg:hidden flex justify-center my-6">
                    <div className={`p-2 rounded-full bg-gradient-to-br ${phase.color}`}>
                      <ArrowRight className="w-5 h-5 text-white rotate-90" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <motion.div
          className="mt-20 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative rounded-3xl overflow-hidden max-w-4xl mx-auto">
            {/* Gradient Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-primary to-emerald-500 p-px rounded-3xl">
              <div className="absolute inset-px bg-card rounded-[calc(1.5rem-1px)]" />
            </div>

            {/* Content */}
            <div className="relative p-12 lg:p-16 text-center">
              {/* Background decoration */}
              <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />

              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
                >
                  <Zap className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">Ready to Transform?</span>
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                  className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4"
                >
                  Start with a <span className="text-gradient bg-gradient-to-r from-blue-500 via-primary to-emerald-500 bg-clip-text">Free Assessment</span>
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                  className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto"
                >
                  Discover opportunities for improvement and get a customized roadmap to operational excellence.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  viewport={{ once: true }}
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                  <Button variant="hero" size="xl" asChild className="group">
                    <Link to="/contact">
                      Get Your Free Assessment
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>

                  <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                    Learn more about our approach
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </motion.div>

                {/* Trust indicators */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  viewport={{ once: true }}
                  className="mt-8 flex items-center justify-center gap-6 text-xs text-muted-foreground"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>No commitment required</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Expert consultation</span>
                  </div>
                  <div className="hidden sm:flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Tailored recommendations</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
