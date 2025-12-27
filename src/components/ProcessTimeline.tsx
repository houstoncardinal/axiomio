import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const processSteps = [
  {
    number: "01",
    title: "Discover",
    description: "Deep-dive analysis of your operational landscape, identifying inefficiencies and opportunities for transformation.",
    color: "from-primary to-blue-400",
  },
  {
    number: "02",
    title: "Design",
    description: "Architect a tailored XOPS360 implementation strategy aligned with your business objectives and technical requirements.",
    color: "from-blue-400 to-violet-500",
  },
  {
    number: "03",
    title: "Deploy",
    description: "Execute phased rollout with continuous monitoring, ensuring seamless integration and minimal disruption.",
    color: "from-violet-500 to-secondary",
  },
  {
    number: "04",
    title: "Optimize",
    description: "Continuous refinement powered by AI-driven insights, maximizing ROI and operational excellence.",
    color: "from-secondary to-primary",
  },
];

export function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="py-16 lg:py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        {/* Compact Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4"
          >
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-primary">Our Process</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3"
          >
            Precision-engineered transformation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base md:text-lg text-muted-foreground"
          >
            A systematic approach that turns operational complexity into competitive advantage.
          </motion.p>
        </div>

        {/* Compact Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-border">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary via-violet-500 to-secondary"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Steps - Reduced spacing */}
          <div className="space-y-12 md:space-y-16">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-80px" }}
                className={`relative flex items-center gap-6 lg:gap-12 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content - Compact */}
                <div className={`flex-1 pl-16 lg:pl-0 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                  <motion.div
                    whileHover={{ scale: 1.01, y: -2 }}
                    className="inline-block"
                  >
                    <div className="p-5 md:p-6 rounded-xl bg-gradient-to-br from-muted/60 to-muted/20 border border-border/50 hover:border-primary/30 transition-all duration-300 group">
                      <span className={`inline-block text-4xl md:text-5xl font-heading font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent mb-2`}>
                        {step.number}
                      </span>
                      <h3 className="font-heading text-lg md:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Node - Compact */}
                <div className="absolute left-6 lg:left-1/2 lg:-translate-x-1/2 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.15, type: "spring" }}
                    viewport={{ once: true }}
                    className={`w-3 h-3 rounded-full bg-gradient-to-r ${step.color} shadow-glow`}
                  />
                  <motion.div
                    className={`absolute w-6 h-6 rounded-full bg-gradient-to-r ${step.color} opacity-20`}
                    animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.1, 0.2] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  />
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
