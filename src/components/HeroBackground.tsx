import { motion } from "framer-motion";

export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
      
      {/* Animated gradient orbs with motion */}
      <motion.div 
        className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[120px]"
        animate={{ 
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-1/3 -right-1/4 w-[500px] h-[500px] bg-secondary/12 rounded-full blur-[100px]"
        animate={{ 
          x: [0, -80, 0],
          y: [0, 80, 0],
          scale: [1, 1.15, 1],
          opacity: [0.12, 0.22, 0.12]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div 
        className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[80px]"
        animate={{ 
          x: [0, 60, 0],
          y: [0, -40, 0],
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.18, 0.1]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />
      
      {/* Additional floating orb for depth */}
      <motion.div 
        className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-secondary/8 rounded-full blur-[100px]"
        animate={{ 
          x: [0, -50, 0],
          y: [0, -60, 0],
          opacity: [0.08, 0.15, 0.08]
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 6 }}
      />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
      
      {/* Subtle noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/40 to-background" />
      
      {/* Top edge glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </div>
  );
}
