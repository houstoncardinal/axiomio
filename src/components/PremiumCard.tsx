import { motion } from "framer-motion";
import { ReactNode, useRef, useState } from "react";

interface PremiumCardProps {
  children: ReactNode;
  className?: string;
  glowOnHover?: boolean;
}

export function PremiumCard({ children, className = "", glowOnHover = true }: PremiumCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden rounded-2xl ${className}`}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      {/* Gradient border */}
      <div className="absolute inset-0 rounded-2xl p-px bg-gradient-to-br from-border via-border/50 to-border">
        <div className="absolute inset-px rounded-2xl bg-card" />
      </div>

      {/* Hover glow effect */}
      {glowOnHover && isHovered && (
        <motion.div
          className="absolute w-64 h-64 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, hsl(192 100% 50% / 0.15) 0%, transparent 70%)",
            left: mousePosition.x - 128,
            top: mousePosition.y - 128,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>

      {/* Shine effect on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(105deg, transparent 40%, hsl(192 100% 90% / 0.03) 45%, hsl(192 100% 90% / 0.06) 50%, hsl(192 100% 90% / 0.03) 55%, transparent 60%)",
        }}
        initial={{ x: "-100%" }}
        animate={isHovered ? { x: "100%" } : { x: "-100%" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
    </motion.div>
  );
}
