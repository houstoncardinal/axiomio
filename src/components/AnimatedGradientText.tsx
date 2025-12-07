import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedGradientTextProps {
  children: ReactNode;
  className?: string;
}

export function AnimatedGradientText({ children, className = "" }: AnimatedGradientTextProps) {
  return (
    <motion.span
      className={`relative inline-block ${className}`}
      style={{
        backgroundImage: "linear-gradient(90deg, hsl(192 100% 65%), hsl(220 100% 70%), hsl(265 70% 68%), hsl(192 100% 65%))",
        backgroundSize: "300% 100%",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
      }}
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {children}
    </motion.span>
  );
}
