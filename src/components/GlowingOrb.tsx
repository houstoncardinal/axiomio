import { motion } from "framer-motion";

interface GlowingOrbProps {
  size?: number;
  color?: "primary" | "secondary" | "accent";
  className?: string;
  delay?: number;
}

export function GlowingOrb({ 
  size = 600, 
  color = "primary", 
  className = "",
  delay = 0 
}: GlowingOrbProps) {
  const colorClasses = {
    primary: "bg-primary/20",
    secondary: "bg-secondary/15",
    accent: "bg-accent/15",
  };

  return (
    <motion.div
      className={`absolute rounded-full blur-[120px] ${colorClasses[color]} ${className}`}
      style={{ width: size, height: size }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.6, 0.3],
        x: [0, 30, 0],
        y: [0, -20, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}
