import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Layers, BarChart3, Workflow, Shield, Zap, Globe2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AnimatedGradientText } from "./AnimatedGradientText";
import { MagneticButton } from "./MagneticButton";

const features = [
  {
    icon: Workflow,
    title: "Unified Operations",
    description: "Consolidate DevOps, DataOps, MLOps, and AIOps into a single, intelligent framework.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Intelligence",
    description: "AI-powered analytics that provide actionable insights across your entire operational stack.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Built-in compliance, governance, and security controls that scale with your organization.",
  },
  {
    icon: Zap,
    title: "Automated Workflows",
    description: "Self-healing systems and intelligent automation that reduce manual intervention by 80%.",
  },
  {
    icon: Layers,
    title: "Seamless Integration",
    description: "Connect with 200+ enterprise tools and platforms through our universal adapter layer.",
  },
  {
    icon: Globe2,
    title: "Global Scale",
    description: "Deploy across multi-cloud and hybrid environments with consistent performance worldwide.",
  },
];

export function XOPS360Section() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.95, 1]);

  return (
    <section ref={containerRef} className="py-32 lg:py-44 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px]"
          style={{
            background: "radial-gradient(circle, hsl(195 100% 50% / 0.08) 0%, transparent 60%)",
          }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Animated rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/10"
              style={{
                width: 400 + i * 200,
                height: 400 + i * 200,
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 30 + i * 10, repeat: Infinity, ease: "linear" }}
            />
          ))}
        </div>
      </div>

      <motion.div 
        className="container relative z-10 mx-auto px-6 lg:px-8"
        style={{ opacity, scale }}
      >
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary px-5 py-2 rounded-full border border-primary/30 bg-primary/10">
              <motion.span
                className="w-2 h-2 bg-primary rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              Flagship Platform
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6"
          >
            Introducing <AnimatedGradientText>XOPS360</AnimatedGradientText>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed"
          >
            The next-generation operations platform that unifies DevOps, DataOps, MLOps, and AIOps 
            into a single intelligent ecosystem. Transform operational complexity into competitive advantage.
          </motion.p>
        </div>

        {/* Central visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto mb-20"
        >
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden glass-premium border border-primary/20">
            {/* Inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
            
            {/* Grid pattern */}
            <div 
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `linear-gradient(hsl(195 100% 50%) 1px, transparent 1px),
                                 linear-gradient(90deg, hsl(195 100% 50%) 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
              }}
            />

            {/* XOPS360 Logo/Visual */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="relative"
                animate={{ rotateY: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                {/* Central hub */}
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-glow-intense">
                  <span className="font-heading text-2xl font-bold text-primary-foreground">X360</span>
                </div>

                {/* Orbiting elements */}
                {["DevOps", "DataOps", "MLOps", "AIOps"].map((label, i) => (
                  <motion.div
                    key={label}
                    className="absolute top-1/2 left-1/2"
                    style={{
                      width: 280,
                      height: 280,
                      marginLeft: -140,
                      marginTop: -140,
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15 + i * 2, repeat: Infinity, ease: "linear" }}
                  >
                    <div 
                      className="absolute px-4 py-2 rounded-full bg-muted/80 backdrop-blur-sm border border-border text-sm font-medium text-foreground"
                      style={{
                        top: 0,
                        left: "50%",
                        transform: `translateX(-50%) rotate(${i * 90}deg)`,
                      }}
                    >
                      {label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-24 h-24 border-l-2 border-t-2 border-primary/30 rounded-tl-3xl" />
            <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-secondary/30 rounded-br-3xl" />
          </div>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-muted/50 to-muted/20 border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit mb-5 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <MagneticButton>
            <Button variant="hero" size="xl" asChild>
              <Link to="/services">
                Explore XOPS360
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </MagneticButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
