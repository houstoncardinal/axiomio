import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "./MagneticButton";

const capabilities = [
  {
    title: "FinOps",
    items: ["Cost Visibility & Allocation", "Budget Forecasting", "Reserved Instance Optimization", "Showback & Chargeback"],
    color: "emerald-500",
  },
  {
    title: "SecOps",
    items: ["SIEM & Log Aggregation", "Threat Intelligence", "Automated Incident Response", "Compliance Monitoring"],
    color: "red-500",
  },
  {
    title: "CloudOps",
    items: ["Infrastructure as Code", "Multi-cloud Orchestration", "Auto-scaling & Optimization", "Disaster Recovery"],
    color: "blue-500",
  },
  {
    title: "DevOps",
    items: ["CI/CD Pipeline Automation", "GitOps Workflows", "Container Orchestration", "Release Management"],
    color: "violet-500",
  },
  {
    title: "DataOps",
    items: ["Data Pipeline Automation", "Real-time ETL Processing", "Data Quality Monitoring", "Schema Evolution"],
    color: "primary",
  },
  {
    title: "AIOps",
    items: ["Anomaly Detection", "Predictive Analytics", "Auto-remediation", "Intelligent Alerting"],
    color: "secondary",
  },
];

function CapabilityCard({ capability, index }: { capability: typeof capabilities[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
      className="relative group"
    >
      <div className="relative p-8 rounded-2xl bg-gradient-to-br from-muted/60 to-muted/30 border border-border/50 hover:border-primary/40 transition-all duration-500 h-full overflow-hidden">
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), hsl(var(--${capability.color === 'primary' ? 'primary' : capability.color === 'secondary' ? 'secondary' : '220 100% 60%'}) / 0.1), transparent 40%)`,
          }}
        />

        <div className="relative z-10" style={{ transform: "translateZ(30px)" }}>
          {/* Title */}
          <h3 className="font-heading text-2xl font-semibold text-foreground mb-6 group-hover:text-primary transition-colors">
            {capability.title}
          </h3>

          {/* Items list */}
          <ul className="space-y-4">
            {capability.items.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground/80 transition-colors"
              >
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                {item}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
          <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-${capability.color}/20 to-transparent transform rotate-45 translate-x-20 -translate-y-20`} />
        </div>
      </div>
    </motion.div>
  );
}

export function CapabilitiesGrid() {
  return (
    <section className="py-32 lg:py-44 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex text-sm font-medium uppercase tracking-[0.2em] text-primary mb-6"
          >
            XOPS360 Capabilities
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
          >
            Unified operations, <span className="text-gradient">unlimited potential</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground"
          >
            A comprehensive platform that brings together all your operational needs under one intelligent system.
          </motion.p>
        </div>

        {/* Capabilities grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {capabilities.map((capability, index) => (
            <CapabilityCard key={capability.title} capability={capability} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <MagneticButton>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Request a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
