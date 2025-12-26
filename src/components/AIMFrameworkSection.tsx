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
    outcome: "Clarity replaces assumptions",
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
    outcome: "Risk becomes measurable and manageable",
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
    outcome: "Operations run without constant intervention",
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
    <section className="py-20 lg:py-24 relative overflow-hidden bg-gradient-to-b from-background via-slate-50/30 to-background">
      {/* Subtle Professional Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.03),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.05)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_30%,transparent_100%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-8 max-w-7xl">
        {/* Compact Professional Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100/80 border border-slate-200/60 mb-4 backdrop-blur-sm"
          >
            <Target className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-700">Our Methodology</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 leading-tight"
          >
            The <span className="text-slate-700">AIM Framework</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            viewport={{ once: true }}
            className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed"
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
                    <p className="text-muted-foreground leading-relaxed mb-6 text-sm lg:text-base">
                      {phase.description}
                    </p>

                    {/* Outcome Anchor - Emotional Relief */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.15 + 0.1, duration: 0.4 }}
                      viewport={{ once: true }}
                      className={`relative p-4 rounded-xl bg-gradient-to-r ${phase.bgColor} border ${phase.borderColor} mb-8`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${phase.color} shadow-lg`}>
                          <Sparkles className={`w-4 h-4 text-white`} />
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                            What You'll Experience
                          </p>
                          <p className={`text-base font-bold ${phase.accentColor} leading-tight`}>
                            {phase.outcome}
                          </p>
                        </div>
                      </div>
                    </motion.div>

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

        {/* Compact Professional CTA */}
        <motion.div
          className="mt-12 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="relative rounded-2xl overflow-hidden max-w-6xl mx-auto bg-gradient-to-r from-slate-50/80 via-white to-slate-50/80 border border-slate-200/60 shadow-lg">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 mb-4">
                    <Zap className="w-4 h-4 text-slate-600" />
                    <span className="text-sm font-semibold text-slate-700">Ready to Transform?</span>
                  </div>

                  <h3 className="font-heading text-xl lg:text-2xl font-bold text-slate-900 mb-3">
                    Start with a <span className="text-slate-700">Free Assessment</span>
                  </h3>

                  <p className="text-slate-600 mb-6 text-sm lg:text-base leading-relaxed">
                    Discover opportunities for improvement and get a customized roadmap to operational excellence.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button variant="default" size="lg" asChild className="bg-slate-900 hover:bg-slate-800 text-white">
                      <Link to="/contact">
                        Get Your Free Assessment
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>

                    <Button variant="outline" size="lg" asChild className="border-slate-300 text-slate-700 hover:bg-slate-50">
                      <Link to="/about">
                        Learn More
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              </div>

              {/* Right Content - Trust Indicators */}
              <div className="p-8 lg:p-12 bg-gradient-to-br from-slate-900 to-slate-800 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-white font-semibold mb-6 text-lg">Why Choose Our Assessment?</h4>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-slate-200 text-sm">No commitment required</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-slate-200 text-sm">Expert consultation included</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-slate-200 text-sm">Tailored recommendations</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-slate-200 text-sm">Actionable insights within 48 hours</span>
                    </div>
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
