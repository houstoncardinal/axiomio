import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface CounterBadgeProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
}

export function CounterBadge({ 
  value, 
  suffix = "", 
  prefix = "", 
  label,
  duration = 2 
}: CounterBadgeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration,
        ease: [0.32, 0.72, 0, 1],
        onUpdate: (v) => setDisplayValue(Math.floor(v)),
      });
      return () => controls.stop();
    }
  }, [isInView, value, duration]);

  return (
    <motion.div
      ref={ref}
      className="relative group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="relative p-8 rounded-2xl bg-gradient-to-br from-muted/60 to-muted/20 border border-border/50 overflow-hidden">
        {/* Glow effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
        </div>
        
        <div className="relative z-10">
          <div className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-2 tabular-nums">
            <span className="text-primary">{prefix}</span>
            {displayValue.toLocaleString()}
            <span className="text-primary">{suffix}</span>
          </div>
          <p className="text-muted-foreground text-sm uppercase tracking-wider font-medium">
            {label}
          </p>
        </div>

        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/20 to-transparent transform rotate-45 translate-x-16 -translate-y-16" />
        </div>
      </div>
    </motion.div>
  );
}
