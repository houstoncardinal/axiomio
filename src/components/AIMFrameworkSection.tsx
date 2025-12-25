import { motion } from "framer-motion";
import { Search, TrendingUp, Settings, ArrowRight, CheckCircle } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
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
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionHeader
            label="Our Methodology"
            title="The AIM Framework"
            description="A proven three-phase approach to transform your technology operations and deliver measurable business outcomes."
          />
        </motion.div>

        {/* Framework Visual */}
        <div className="mt-16 relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-primary to-emerald-500 transform -translate-y-1/2 z-0" />

          <div className="grid lg:grid-cols-3 gap-8 relative z-10">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.7 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Phase Card */}
                <div className={`rounded-2xl bg-card border ${phase.borderColor} p-8 h-full hover:shadow-lg transition-shadow duration-300`}>
                  {/* Phase Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${phase.color} flex items-center justify-center shadow-lg`}>
                      <span className="text-2xl font-bold text-white">{phase.letter}</span>
                    </div>
                    <div className={`p-3 rounded-xl ${phase.bgColor}`}>
                      <phase.icon className="w-6 h-6 text-foreground" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-1">
                    {phase.title}
                  </h3>
                  <p className="text-sm font-medium text-primary mb-4">{phase.subtitle}</p>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6">{phase.description}</p>

                  {/* Deliverables */}
                  <div className="space-y-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Key Deliverables
                    </span>
                    <ul className="space-y-2">
                      {phase.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                          <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Arrow Connector (between cards on mobile) */}
                {index < phases.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <ArrowRight className="w-6 h-6 text-muted-foreground rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground mb-6">
            Start with a free assessment to discover opportunities for improvement.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">
              Get Your Free Assessment
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
