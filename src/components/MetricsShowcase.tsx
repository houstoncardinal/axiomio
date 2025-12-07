import { motion } from "framer-motion";
import { TrendingUp, Clock, DollarSign, Shield } from "lucide-react";

const metrics = [
  {
    icon: TrendingUp,
    value: "70%",
    label: "Faster Deployments",
    description: "Accelerate release cycles with automated pipelines",
  },
  {
    icon: Clock,
    value: "80%",
    label: "Less Manual Work",
    description: "Self-healing systems reduce operational burden",
  },
  {
    icon: DollarSign,
    value: "45%",
    label: "Cost Reduction",
    description: "Optimize resource utilization across environments",
  },
  {
    icon: Shield,
    value: "99.99%",
    label: "Uptime Achieved",
    description: "Enterprise-grade reliability and resilience",
  },
];

export function MetricsShowcase() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-gradient-to-b from-card/50 to-background">
      {/* Background effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
          style={{
            background: "conic-gradient(from 0deg, hsl(195 100% 50% / 0.05), hsl(270 80% 60% / 0.05), hsl(195 100% 50% / 0.05))",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex text-sm font-medium uppercase tracking-[0.2em] text-primary mb-4"
          >
            Proven Results
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground"
          >
            Impact that speaks for itself
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div className="relative p-8 rounded-2xl glass-premium text-center h-full">
                {/* Icon */}
                <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-6 group-hover:bg-primary/20 transition-colors">
                  <metric.icon className="h-8 w-8" />
                </div>

                {/* Value */}
                <div className="font-heading text-5xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {metric.value}
                </div>

                {/* Label */}
                <div className="font-semibold text-foreground mb-2">
                  {metric.label}
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground">
                  {metric.description}
                </p>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
