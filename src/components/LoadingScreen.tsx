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
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
        >
          {/* Luxury gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
          
          {/* Animated glow orbs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-[400px] h-[400px] rounded-full bg-accent/10 blur-[100px] translate-x-32 translate-y-20"
          />

          {/* Content container */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Logo with elegant animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 0.8, 
                ease: [0.4, 0, 0.2, 1],
                delay: 0.1 
              }}
              className="relative"
            >
              {/* Glow behind logo */}
              <motion.div
                animate={{
                  opacity: [0.4, 0.7, 0.4],
                  scale: [0.98, 1.02, 0.98],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 blur-2xl bg-primary/30 rounded-full"
              />
              
              <img
                src={logo}
                alt="Axiom.io"
                className="relative h-20 w-auto object-contain drop-shadow-2xl"
              />
            </motion.div>

            {/* Elegant loading indicator */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-10 flex items-center gap-2"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: "easeInOut",
                  }}
                  className="w-2 h-2 rounded-full bg-primary"
                />
              ))}
            </motion.div>

            {/* Subtle tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-6 text-sm text-muted-foreground font-light tracking-widest uppercase"
            >
              Innovation-Led Excellence
            </motion.p>
          </div>

          {/* Corner accents */}
          <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-primary/20" />
          <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-primary/20" />
          <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-primary/20" />
          <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-primary/20" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
