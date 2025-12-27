import { motion, AnimatePresence } from 'framer-motion';
import logo from '@/assets/axiomio-logo-transparent.png';

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen = ({ isLoading }: LoadingScreenProps) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden"
        >
          {/* Animated grid background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, hsl(var(--primary) / 0.1) 1px, transparent 1px),
                linear-gradient(to bottom, hsl(var(--primary) / 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }}
          />

          {/* Animated particles */}
          {[...Array(20)].map((_, i) => {
            const randomXPercent = Math.random() * 100;
            const randomYStartPercent = Math.random() * 100;
            const randomYEndPercent = Math.random() * 100;

            return (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary rounded-full"
                style={{
                  left: `${randomXPercent}%`,
                  top: `${randomYStartPercent}%`,
                }}
                initial={{
                  opacity: 0,
                }}
                animate={{
                  top: `${randomYEndPercent}%`,
                  opacity: [0, 0.6, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "linear",
                }}
              />
            );
          })}

          {/* Radial energy rings */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={`ring-${i}`}
              className="absolute rounded-full border border-primary/20"
              style={{
                width: 300 + i * 150,
                height: 300 + i * 150,
              }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: [0.8, 1.1, 0.8],
                opacity: [0, 0.4, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Central glow orb */}
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-br from-primary/10 via-primary/5 to-transparent blur-[100px]"
          />

          {/* Content container */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Logo container with energy effect */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0, rotateY: -90 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.34, 1.56, 0.64, 1],
                delay: 0.1
              }}
              className="relative"
            >
              {/* Rotating energy ring around logo */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -inset-8"
              >
                <div className="w-full h-full rounded-full border-2 border-dashed border-primary/30" />
              </motion.div>

              {/* Pulsing glow behind logo */}
              <motion.div
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                  scale: [0.95, 1.05, 0.95],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 blur-3xl bg-primary/40 rounded-full"
              />

              {/* Logo */}
              <motion.img
                src={logo}
                alt="AXIOMIO"
                className="relative h-24 w-auto object-contain drop-shadow-2xl"
                animate={{
                  filter: [
                    "drop-shadow(0 0 20px hsl(var(--primary) / 0.3))",
                    "drop-shadow(0 0 40px hsl(var(--primary) / 0.5))",
                    "drop-shadow(0 0 20px hsl(var(--primary) / 0.3))",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Brand name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-8 font-heading text-3xl font-bold text-foreground tracking-wider"
            >
              AXIOMIO
            </motion.h1>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="mt-8 w-64 h-1 bg-muted/30 rounded-full overflow-hidden relative"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary rounded-full"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute inset-0 bg-primary/50 blur-md"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-6 text-xs text-muted-foreground font-light tracking-[0.3em] uppercase"
            >
              Innovation-Led Excellence
            </motion.p>

            {/* Loading text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="mt-4 flex items-center gap-1 text-xs text-muted-foreground"
            >
              <span>Loading</span>
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                >
                  .
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Corner frame accents with animation */}
          {[
            { top: true, left: true, rotate: 0 },
            { top: true, right: true, rotate: 90 },
            { bottom: true, left: true, rotate: -90 },
            { bottom: true, right: true, rotate: 180 },
          ].map((pos, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
              className="absolute w-20 h-20"
              style={{
                ...(pos.top && { top: '2rem' }),
                ...(pos.bottom && { bottom: '2rem' }),
                ...(pos.left && { left: '2rem' }),
                ...(pos.right && { right: '2rem' }),
              }}
            >
              <motion.div
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
                className="w-full h-full border-l-2 border-t-2 border-primary/30"
                style={{ transform: `rotate(${pos.rotate}deg)` }}
              />
            </motion.div>
          ))}

          {/* Bottom gradient fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
