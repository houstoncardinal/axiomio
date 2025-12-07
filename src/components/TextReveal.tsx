import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TextRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function TextReveal({ children, delay = 0, className = "" }: TextRevealProps) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.33, 1, 0.68, 1],
          delay,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

interface WordRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export function WordReveal({ text, className = "", delay = 0 }: WordRevealProps) {
  const words = text.split(" ");

  return (
    <span className={className}>
      {words.map((word, index) => (
        <span key={index} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            className="inline-block"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              ease: [0.33, 1, 0.68, 1],
              delay: delay + index * 0.05,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

interface CharRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export function CharReveal({ text, className = "", delay = 0 }: CharRevealProps) {
  const chars = text.split("");

  return (
    <span className={className}>
      {chars.map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          initial={{ opacity: 0, y: 50, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 0.4,
            ease: [0.33, 1, 0.68, 1],
            delay: delay + index * 0.02,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}
