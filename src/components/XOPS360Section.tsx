import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring, animate } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { ArrowRight, Layers, BarChart3, Shield, Zap, Globe2, GitBranch, Cloud, Lock, Bot } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AnimatedGradientText } from "./AnimatedGradientText";
import { MagneticButton } from "./MagneticButton";
import { useIsMobile } from "@/hooks/use-mobile";

const features = [
  {
    icon: Bot,
    title: "AI Workforce",
    description: "Replace manual operations with intelligent AI agents that automate DevOps, SRE, and cloud management.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Intelligence",
    description: "AI-powered analytics that provide actionable insights across your entire operational stack.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Built-in compliance, governance, and security controls that scale with your organization.",
  },
  {
    icon: Zap,
    title: "Self-Healing Systems",
    description: "Intelligent automation that detects, diagnoses, and resolves issues before they impact users.",
  },
  {
    icon: Layers,
    title: "Seamless Integration",
    description: "Connect with 200+ enterprise tools and platforms through our universal adapter layer.",
  },
  {
    icon: Globe2,
    title: "Global Scale",
    description: "Deploy across multi-cloud and hybrid environments with consistent performance worldwide.",
  },
];

// Operations domains with their service alignments
const opsNodes = [
  { 
    id: "devops", 
    label: "DevOps", 
    color: "#3B82F6",
    secondaryColor: "#06B6D4",
    icon: GitBranch,
    metrics: ["CI/CD Pipelines", "Infrastructure as Code", "Continuous Monitoring"],
    stat: "24 X 7 Pipelines",
  },
  { 
    id: "secops", 
    label: "SecOps", 
    color: "#10B981",
    secondaryColor: "#14B8A6",
    icon: Lock,
    metrics: ["SIEM & Log Aggregation", "Threat Intelligence", "Automated Incident Response", "Compliance Monitoring", "VAPT for Network and Application"],
    stat: "100% Compliance",
  },
  { 
    id: "cloudops", 
    label: "CloudOps", 
    color: "#8B5CF6",
    secondaryColor: "#A855F7",
    icon: Cloud,
    metrics: ["Multi-Cloud", "Cost Optimization", "Auto-Scaling"],
    stat: "40% Cost Savings",
  },
  { 
    id: "aiagents", 
    label: "AI Agents", 
    color: "#F59E0B",
    secondaryColor: "#EF4444",
    icon: Bot,
    metrics: ["AI Workforce", "Auto-Remediation", "Predictive Ops"],
    stat: "82% Automated",
  },
];

// Animated counter hook for metrics
function useAnimatedCounter(end: number, duration: number = 2, shouldStart: boolean = false) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!shouldStart) return;
    
    let startTime: number;
    let animationFrame: number;
    
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };
    
    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, shouldStart]);
  
  return count;
}

// Responsive node positions
function useNodePositions(isMobile: boolean) {
  if (isMobile) {
    // Mobile: 2x2 grid layout with more spacing
    return [
      { x: -70, y: -90 },   // Top-left - DevOps
      { x: 70, y: -90 },    // Top-right - SecOps
      { x: 70, y: 90 },     // Bottom-right - CloudOps
      { x: -70, y: 90 },    // Bottom-left - AIOps
    ];
  }
  // Desktop: wider spread
  return [
    { x: -160, y: -130 }, // Top-left - DevOps
    { x: 160, y: -130 },  // Top-right - SecOps
    { x: 160, y: 130 },   // Bottom-right - CloudOps
    { x: -160, y: 130 },  // Bottom-left - AIOps
  ];
}

// Enterprise-ready node component with build sequence
const EnterpriseNode = ({ 
  node, 
  index, 
  isHovered, 
  isSelected,
  onHover, 
  onSelect,
  position,
  animationPhase,
  isMobile,
}: { 
  node: typeof opsNodes[0]; 
  index: number; 
  isHovered: boolean;
  isSelected: boolean;
  onHover: (id: string | null) => void;
  onSelect: (id: string | null) => void;
  position: { x: number; y: number };
  animationPhase: number;
  isMobile: boolean;
}) => {
  const Icon = node.icon;
  const isActive = isHovered || isSelected;
  const shouldAnimate = animationPhase >= 3; // Phase 3: nodes snap in
  
  const nodeSize = isMobile ? "w-24 h-24" : "w-32 h-32";
  const iconSize = isMobile ? "w-5 h-5" : "w-6 h-6";
  const iconPadding = isMobile ? "p-2" : "p-2.5";
  const fontSize = isMobile ? "text-xs" : "text-sm";
  const statSize = isMobile ? "text-[8px]" : "text-[10px]";
  
  return (
    <motion.div
      className="absolute cursor-pointer"
      style={{
        left: `calc(50% + ${position.x}px)`,
        top: `calc(50% + ${position.y}px)`,
        transform: "translate(-50%, -50%)",
        zIndex: isActive ? 50 : 10,
      }}
      initial={{ opacity: 0, scale: 0, rotate: -180 }}
      animate={shouldAnimate ? { 
        opacity: 1, 
        scale: isActive ? 1.08 : 1,
        rotate: 0,
      } : { opacity: 0, scale: 0, rotate: -180 }}
      transition={{ 
        delay: index * 0.15, 
        duration: 0.6,
        type: "spring",
        stiffness: 200,
        damping: 20,
        scale: { duration: 0.2 },
      }}
      onMouseEnter={() => !isMobile && onHover(node.id)}
      onMouseLeave={() => !isMobile && onHover(null)}
      onClick={() => onSelect(isSelected ? null : node.id)}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl blur-xl"
        style={{ backgroundColor: node.color }}
        animate={{
          opacity: isActive ? 0.5 : 0.2,
          scale: isActive ? 1.4 : 1,
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Main node card */}
      <motion.div
        className={`relative ${nodeSize} rounded-2xl p-[2px] shadow-xl`}
        style={{
          background: `linear-gradient(135deg, ${node.color}, ${node.secondaryColor})`,
        }}
        animate={{
          boxShadow: isActive 
            ? `0 20px 40px -10px ${node.color}60, 0 0 60px ${node.color}30`
            : `0 10px 30px -10px ${node.color}40`,
        }}
      >
        <div className="w-full h-full rounded-[14px] bg-background/95 backdrop-blur-sm flex flex-col items-center justify-center gap-1.5 p-2">
          <div 
            className={`${iconPadding} rounded-xl`}
            style={{ backgroundColor: `${node.color}20` }}
          >
            <Icon className={iconSize} style={{ color: node.color }} />
          </div>
          <span className={`${fontSize} font-bold text-foreground`}>{node.label}</span>
          <span className={`${statSize} text-muted-foreground font-medium`}>{node.stat}</span>
        </div>
      </motion.div>
      
      {/* Hover/Select popup - positioned to avoid collision */}
      <motion.div
        className="absolute left-1/2 pointer-events-none whitespace-nowrap"
        style={{
          top: position.y < 0 ? "100%" : "auto",
          bottom: position.y >= 0 ? "100%" : "auto",
          transform: "translateX(-50%)",
          marginTop: position.y < 0 ? "12px" : "0",
          marginBottom: position.y >= 0 ? "12px" : "0",
        }}
        initial={{ opacity: 0, scale: 0.9, y: position.y < 0 ? -10 : 10 }}
        animate={{
          opacity: isActive ? 1 : 0,
          scale: isActive ? 1 : 0.9,
          y: isActive ? 0 : (position.y < 0 ? -10 : 10),
        }}
        transition={{ duration: 0.2 }}
      >
        <div className="bg-card/95 backdrop-blur-md border border-border rounded-xl p-3 shadow-2xl min-w-[160px]">
          <div 
            className="text-[10px] font-bold uppercase tracking-wider mb-2"
            style={{ color: node.color }}
          >
            {node.label} Capabilities
          </div>
          <div className="space-y-1.5">
            {node.metrics.map((metric, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-foreground">
                <div 
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: node.color }}
                />
                {metric}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Floating particles around the hub
const HubParticles = ({ animationPhase }: { animationPhase: number }) => {
  const particles = Array.from({ length: 16 }, (_, i) => ({
    id: i,
    angle: (i / 16) * 360,
    radius: 60 + (i % 3) * 20,
    size: 2 + (i % 3),
    speed: 15 + (i % 4) * 5,
    delay: i * 0.1,
  }));
  
  const isPoweredUp = animationPhase >= 2;
  const nodesActive = animationPhase >= 3;
  
  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 25 }}>
      {particles.map((particle) => {
        const initialX = Math.cos((particle.angle * Math.PI) / 180) * particle.radius;
        const initialY = Math.sin((particle.angle * Math.PI) / 180) * particle.radius;
        
        return (
          <motion.div
            key={particle.id}
            className="absolute left-1/2 top-1/2 rounded-full"
            style={{
              width: particle.size,
              height: particle.size,
              background: `radial-gradient(circle, hsl(var(--primary)) 0%, hsl(var(--primary) / 0.3) 100%)`,
              boxShadow: `0 0 ${particle.size * 2}px hsl(var(--primary) / 0.5)`,
            }}
            initial={{ 
              x: 0, 
              y: 0, 
              opacity: 0, 
              scale: 0 
            }}
            animate={isPoweredUp ? {
              x: [initialX, initialX * 1.2, initialX * 0.9, initialX],
              y: [initialY, initialY * 0.9, initialY * 1.15, initialY],
              opacity: nodesActive ? [0.3, 0.8, 0.5, 0.3] : [0.2, 0.5, 0.3, 0.2],
              scale: nodesActive ? [1, 1.3, 0.9, 1] : [0.8, 1, 0.8, 0.8],
            } : { x: 0, y: 0, opacity: 0, scale: 0 }}
            transition={{
              duration: particle.speed,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay,
            }}
          />
        );
      })}
      
      {/* Faster inner particles */}
      {Array.from({ length: 8 }, (_, i) => {
        const angle = (i / 8) * 360 + 22.5;
        const radius = 35 + (i % 2) * 10;
        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;
        
        return (
          <motion.div
            key={`inner-${i}`}
            className="absolute left-1/2 top-1/2 rounded-full bg-secondary"
            style={{
              width: 3,
              height: 3,
              boxShadow: `0 0 6px hsl(var(--secondary) / 0.6)`,
            }}
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={isPoweredUp ? {
              x: [x, x * 1.1, x],
              y: [y, y * 1.1, y],
              opacity: [0.4, 0.9, 0.4],
            } : { x: 0, y: 0, opacity: 0 }}
            transition={{
              duration: 3 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5 + i * 0.15,
            }}
          />
        );
      })}
    </div>
  );
};

// Central hub with power-up animation
const CentralHub = ({ animationPhase, isActive }: { animationPhase: number; isActive: boolean }) => {
  const shouldShow = animationPhase >= 1;
  const isPoweredUp = animationPhase >= 2;
  
  return (
    <motion.div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
      initial={{ opacity: 0, scale: 0 }}
      animate={shouldShow ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 150, damping: 15 }}
    >
      {/* Rotating outer ring */}
      <motion.div
        className="absolute inset-0 w-40 h-40 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isPoweredUp ? { rotate: 360, opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
        transition={{ 
          rotate: { duration: 30, repeat: Infinity, ease: "linear" },
          opacity: { duration: 0.5 },
          scale: { duration: 0.5 },
        }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <linearGradient id="hubRingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
              <stop offset="50%" stopColor="hsl(var(--secondary))" stopOpacity="0.3" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          <circle
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke="url(#hubRingGradient)"
            strokeWidth="2"
            strokeDasharray="8 6"
          />
        </svg>
      </motion.div>
      
      {/* Inner ring - counter rotate */}
      <motion.div
        className="absolute inset-0 w-28 h-28 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
        initial={{ opacity: 0 }}
        animate={isPoweredUp ? { rotate: -360, opacity: 1 } : { opacity: 0 }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          opacity: { duration: 0.5, delay: 0.2 },
        }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle
            cx="100"
            cy="100"
            r="85"
            fill="none"
            stroke="hsl(var(--primary) / 0.25)"
            strokeWidth="1.5"
            strokeDasharray="12 8"
          />
        </svg>
      </motion.div>
      
      {/* Core hub */}
      <motion.div
        className="relative w-20 h-20 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-primary via-blue-500 to-secondary p-[3px]"
        initial={{ boxShadow: "0 0 0 hsl(var(--primary) / 0)" }}
        animate={isPoweredUp ? {
          boxShadow: isActive 
            ? "0 0 60px hsl(var(--primary) / 0.5), 0 0 120px hsl(var(--primary) / 0.25)"
            : "0 0 40px hsl(var(--primary) / 0.35), 0 0 80px hsl(var(--primary) / 0.15)",
        } : { boxShadow: "0 0 0 hsl(var(--primary) / 0)" }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full h-full rounded-full bg-transparent flex items-center justify-center p-2 md:p-3">
          <motion.span 
            className="text-[8px] md:text-xs font-bold text-white tracking-wider"
            initial={{ opacity: 0, scale: 0 }}
            animate={isPoweredUp ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Xops360
          </motion.span>
        </div>
      </motion.div>
      
      {/* Pulse rings */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute inset-0 w-20 h-20 md:w-28 md:h-28 rounded-full border-2 border-primary/30"
          initial={{ scale: 1, opacity: 0 }}
          animate={isPoweredUp ? { scale: [1, 2, 2.5], opacity: [0.5, 0.2, 0] } : { scale: 1, opacity: 0 }}
          transition={{ 
            duration: 2.5, 
            repeat: Infinity, 
            ease: "easeOut",
            delay: i * 0.8,
          }}
        />
      ))}
    </motion.div>
  );
};

// Connection lines with draw animation
const ConnectionLines = ({ 
  animationPhase,
  hoveredNode, 
  selectedNode,
  isMobile,
}: { 
  animationPhase: number;
  hoveredNode: string | null;
  selectedNode: string | null;
  isMobile: boolean;
}) => {
  const shouldDraw = animationPhase >= 2;
  
  const positions = isMobile ? [
    { x: 180 - 70, y: 150 - 90 }, // DevOps
    { x: 180 + 70, y: 150 - 90 }, // SecOps
    { x: 180 + 70, y: 150 + 90 }, // CloudOps
    { x: 180 - 70, y: 150 + 90 }, // AIOps
  ] : [
    { x: 250 - 160, y: 200 - 130 }, // DevOps
    { x: 250 + 160, y: 200 - 130 }, // SecOps
    { x: 250 + 160, y: 200 + 130 }, // CloudOps
    { x: 250 - 160, y: 200 + 130 }, // AIOps
  ];
  
  const centerX = isMobile ? 180 : 250;
  const centerY = isMobile ? 150 : 200;
  
  const activeNode = hoveredNode || selectedNode;
  
  return (
    <svg 
      className="absolute inset-0 w-full h-full pointer-events-none" 
      style={{ zIndex: 5 }}
      viewBox={isMobile ? "0 0 360 300" : "0 0 500 400"}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        {opsNodes.map((node) => (
          <linearGradient key={`grad-${node.id}`} id={`line-${node.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={node.color} stopOpacity="0.7" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.7" />
          </linearGradient>
        ))}
        <filter id="lineGlow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Lines from each node to center */}
      {positions.map((pos, i) => {
        const node = opsNodes[i];
        const isActive = activeNode === node.id;
        return (
          <motion.line
            key={`center-${i}`}
            x1={centerX}
            y1={centerY}
            x2={pos.x}
            y2={pos.y}
            stroke={`url(#line-${node.id})`}
            strokeWidth={isActive ? 3 : 2}
            filter="url(#lineGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={shouldDraw ? { 
              pathLength: 1, 
              opacity: isActive ? 1 : 0.5,
            } : { pathLength: 0, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
          />
        );
      })}
      
      {/* Cross connections (dashed) */}
      <motion.line
        x1={positions[0].x} y1={positions[0].y}
        x2={positions[2].x} y2={positions[2].y}
        stroke="hsl(var(--primary) / 0.2)"
        strokeWidth="1"
        strokeDasharray="6 6"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={shouldDraw ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      />
      <motion.line
        x1={positions[1].x} y1={positions[1].y}
        x2={positions[3].x} y2={positions[3].y}
        stroke="hsl(var(--primary) / 0.2)"
        strokeWidth="1"
        strokeDasharray="6 6"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={shouldDraw ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      />
      
      {/* Perimeter connections */}
      {positions.map((pos, i) => {
        const nextPos = positions[(i + 1) % 4];
        return (
          <motion.line
            key={`perimeter-${i}`}
            x1={pos.x}
            y1={pos.y}
            x2={nextPos.x}
            y2={nextPos.y}
            stroke="hsl(var(--muted-foreground) / 0.15)"
            strokeWidth="1"
            strokeDasharray="4 8"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={shouldDraw ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.8 + i * 0.08 }}
          />
        );
      })}
    </svg>
  );
};

// Key metrics display with count-up animation
const KeyMetrics = ({ animationPhase, isMobile }: { animationPhase: number; isMobile: boolean }) => {
  const shouldAnimate = animationPhase >= 4;
  
  const metricsData = [
    { value: 99.9, suffix: "%", label: "Uptime SLA" },
    { value: 4, suffix: " min", label: "Avg MTTR" },
    { value: 82, suffix: "%", label: "Auto-Resolved" },
    { value: 2.4, prefix: "$", suffix: "M", label: "Saved/Year" },
  ];
  
  return (
    <motion.div
      className="flex flex-wrap justify-center gap-2 md:gap-3 mt-8 md:mt-12"
      initial={{ opacity: 0, y: 30 }}
      animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6 }}
    >
      {metricsData.map((metric, i) => (
        <motion.div
          key={metric.label}
          className="flex flex-col items-center px-3 md:px-5 py-2 md:py-3 bg-card/90 backdrop-blur-sm rounded-xl border border-border/50 shadow-lg"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={shouldAnimate ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
          transition={{ delay: i * 0.1, duration: 0.4 }}
          whileHover={{ scale: 1.05, borderColor: "hsl(var(--primary) / 0.4)" }}
        >
          <AnimatedMetricValue 
            value={metric.value} 
            prefix={metric.prefix} 
            suffix={metric.suffix} 
            shouldAnimate={shouldAnimate}
            delay={i * 0.15}
          />
          <div className="text-[9px] md:text-[10px] text-muted-foreground mt-0.5">{metric.label}</div>
        </motion.div>
      ))}
    </motion.div>
  );
};

// Animated metric value component
const AnimatedMetricValue = ({ 
  value, 
  prefix = "", 
  suffix = "", 
  shouldAnimate,
  delay,
}: { 
  value: number; 
  prefix?: string; 
  suffix?: string;
  shouldAnimate: boolean;
  delay: number;
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  
  useEffect(() => {
    if (!shouldAnimate) {
      setDisplayValue(0);
      return;
    }
    
    const timeout = setTimeout(() => {
      let start = 0;
      const duration = 1500;
      const startTime = Date.now();
      
      const animate = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
        setDisplayValue(eased * value);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }, delay * 1000);
    
    return () => clearTimeout(timeout);
  }, [shouldAnimate, value, delay]);
  
  const formattedValue = value % 1 === 0 
    ? Math.round(displayValue).toString()
    : displayValue.toFixed(1);
  
  return (
    <div className="text-sm md:text-base font-mono font-bold text-primary">
      {prefix}{formattedValue}{suffix}
    </div>
  );
};

export function XOPS360Section() {
  const containerRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [animationPhase, setAnimationPhase] = useState(0);
  
  const isMobile = useIsMobile();
  const nodePositions = useNodePositions(isMobile);
  
  const isInView = useInView(visualRef, { 
    once: true, 
    margin: "-100px",
    amount: 0.3,
  });
  
  // Build sequence: 0 → 1 (hub appears) → 2 (lines draw) → 3 (nodes snap) → 4 (metrics count)
  useEffect(() => {
    if (!isInView) return;
    
    const phases = [
      { phase: 1, delay: 200 },   // Hub appears
      { phase: 2, delay: 800 },   // Lines draw
      { phase: 3, delay: 1400 },  // Nodes snap in
      { phase: 4, delay: 2200 },  // Metrics count up
    ];
    
    const timeouts = phases.map(({ phase, delay }) => 
      setTimeout(() => setAnimationPhase(phase), delay)
    );
    
    return () => timeouts.forEach(clearTimeout);
  }, [isInView]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.15], [0.95, 1]);

  return (
    <section ref={containerRef} className="py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] md:w-[1200px] h-[800px] md:h-[1200px] opacity-50"
          style={{
            background: "radial-gradient(circle, hsl(var(--primary) / 0.08) 0%, hsl(var(--primary) / 0.02) 40%, transparent 70%)",
          }}
        />
        
        {/* Subtle grid */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <motion.div 
        className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8"
        style={{ opacity, scale }}
      >
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 md:mb-6"
          >
            <span className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold uppercase tracking-[0.15em] md:tracking-[0.2em] text-primary px-4 md:px-5 py-2 rounded-full border border-primary/30 bg-primary/10">
              <motion.span
                className="w-2 h-2 bg-primary rounded-full"
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              Flagship Platform
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-4 md:mb-6"
          >
            Introducing <AnimatedGradientText>XOPS360</AnimatedGradientText>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base md:text-xl lg:text-2xl text-muted-foreground leading-relaxed px-2"
          >
            The AI-powered operations platform that replaces traditional manual processes with an 
            intelligent AI workforce.{" "}
            <span className="text-primary font-medium hidden md:inline">Click any node to explore.</span>
            <span className="text-primary font-medium md:hidden">Tap any node to explore.</span>
          </motion.p>
        </div>

        {/* Central visualization with proper containment */}
        <div 
          ref={visualRef}
          className="relative w-full max-w-[360px] md:max-w-[500px] mx-auto"
          style={{ aspectRatio: isMobile ? "360/300" : "500/400" }}
        >
          <div className="relative w-full h-full">
            {/* Connection lines */}
            <ConnectionLines 
              animationPhase={animationPhase}
              hoveredNode={hoveredNode} 
              selectedNode={selectedNode}
              isMobile={isMobile}
            />
            
            {/* Central hub */}
            <CentralHub 
              animationPhase={animationPhase}
              isActive={hoveredNode !== null || selectedNode !== null} 
            />
            
            {/* Floating particles around hub */}
            <HubParticles animationPhase={animationPhase} />
            
            {/* Operation nodes */}
            {opsNodes.map((node, index) => (
              <EnterpriseNode
                key={node.id}
                node={node}
                index={index}
                isHovered={hoveredNode === node.id}
                isSelected={selectedNode === node.id}
                onHover={setHoveredNode}
                onSelect={setSelectedNode}
                position={nodePositions[index]}
                animationPhase={animationPhase}
                isMobile={isMobile}
              />
            ))}
          </div>
        </div>
        
        {/* Key metrics - now outside the visualization to prevent overlap */}
        <KeyMetrics animationPhase={animationPhase} isMobile={isMobile} />

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-16 md:mt-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative p-6 md:p-8 rounded-2xl bg-gradient-to-br from-muted/50 to-muted/20 border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="p-2.5 md:p-3 rounded-xl bg-primary/10 text-primary w-fit mb-4 md:mb-5 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <h3 className="font-heading text-lg md:text-xl font-semibold text-foreground mb-2 md:mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-16"
        >
          <MagneticButton>
            <Button variant="hero" size="xl" asChild>
              <Link to="/xops360">
                Explore XOPS360
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Link>
            </Button>
          </MagneticButton>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default XOPS360Section;
