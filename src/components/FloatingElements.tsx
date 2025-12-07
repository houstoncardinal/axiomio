import { motion } from "framer-motion";

export function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-1/4 right-[15%] w-px h-32 bg-gradient-to-b from-transparent via-primary/40 to-transparent"
        animate={{ 
          y: [0, -50, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div
        className="absolute top-[60%] left-[10%] w-px h-24 bg-gradient-to-b from-transparent via-secondary/30 to-transparent"
        animate={{ 
          y: [0, 40, 0],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Rotating ring */}
      <motion.div
        className="absolute top-[20%] right-[8%] w-48 h-48 border border-primary/10 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <motion.div 
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-primary/60 rounded-full"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>

      {/* Floating dots constellation */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/50 rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.8,
          }}
        />
      ))}

      {/* Gradient lines */}
      <motion.div
        className="absolute bottom-[30%] right-[20%] w-32 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, hsl(192 100% 50% / 0.3), transparent)",
        }}
        animate={{ 
          x: [0, 30, 0],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div
        className="absolute top-[45%] left-[5%] w-24 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, hsl(265 70% 58% / 0.25), transparent)",
        }}
        animate={{ 
          x: [0, -20, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-30">
        <motion.div
          className="absolute inset-0"
          style={{
            background: "conic-gradient(from 180deg at 100% 0%, transparent 0deg, hsl(192 100% 50% / 0.1) 90deg, transparent 180deg)",
          }}
          animate={{ rotate: [0, 15, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}
