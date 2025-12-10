import { motion, useScroll, useTransform, useSpring, useMotionValue, animate } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { ArrowRight, Layers, BarChart3, Workflow, Shield, Zap, Globe2, Cpu, Database, Cloud, GitBranch, Activity, Lock, Gauge, Network, Server, Binary, Bot, BrainCircuit, Cog, CircuitBoard } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AnimatedGradientText } from "./AnimatedGradientText";
import { MagneticButton } from "./MagneticButton";

const features = [
  {
    icon: Workflow,
    title: "Unified Operations",
    description: "Consolidate DevOps, DataOps, SecOps, and AIOps into a single, intelligent framework.",
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
    title: "Automated Workflows",
    description: "Self-healing systems and intelligent automation that reduce manual intervention by 80%.",
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

// Enhanced 3D node data with more detail
const opsNodes = [
  { 
    id: "devops", 
    label: "DevOps", 
    color: "from-blue-500 to-cyan-400",
    icon: GitBranch,
    stats: { pipelines: 247, uptime: "99.9%", deploys: "12/day" },
    subNodes: ["CI/CD", "IaC", "Monitoring"]
  },
  { 
    id: "dataops", 
    label: "DataOps", 
    color: "from-violet-500 to-purple-400",
    icon: Database,
    stats: { pipelines: 89, latency: "12ms", throughput: "1.2TB/h" },
    subNodes: ["ETL", "Quality", "Catalog"]
  },
  { 
    id: "secops", 
    label: "SecOps", 
    color: "from-emerald-500 to-teal-400",
    icon: Lock,
    stats: { scans: 1247, threats: "0", compliance: "100%" },
    subNodes: ["SIEM", "Compliance", "Threat Intel"]
  },
  { 
    id: "aiops", 
    label: "AIOps", 
    color: "from-orange-500 to-amber-400",
    icon: Bot,
    stats: { incidents: 156, mttr: "4min", automation: "82%" },
    subNodes: ["Anomaly", "RCA", "Remediation"]
  },
];

// Connection lines between nodes
const connections = [
  { from: 0, to: 1 }, { from: 1, to: 2 }, { from: 2, to: 3 }, { from: 3, to: 0 },
  { from: 0, to: 2 }, { from: 1, to: 3 },
];

// Particle system for data flow visualization
const DataParticle = ({ delay, pathIndex }: { delay: number; pathIndex: number }) => {
  const paths = [
    "M0,50 Q25,20 50,50 T100,50",
    "M0,50 Q25,80 50,50 T100,50",
    "M50,0 Q20,25 50,50 T50,100",
    "M50,0 Q80,25 50,50 T50,100",
  ];
  
  return (
    <motion.div
      className="absolute w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary))]"
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 1, 0],
        scale: [0.5, 1, 1, 0.5],
        x: [0, 100, 200, 300],
        y: [0, -30, 0, 30],
      }}
      transition={{
        duration: 3,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
};

// Interactive 3D Node Component
const Node3D = ({ 
  node, 
  index, 
  isHovered, 
  isSelected,
  onHover, 
  onSelect,
  mouseX,
  mouseY,
}: { 
  node: typeof opsNodes[0]; 
  index: number; 
  isHovered: boolean;
  isSelected: boolean;
  onHover: (id: string | null) => void;
  onSelect: (id: string | null) => void;
  mouseX: number;
  mouseY: number;
}) => {
  const Icon = node.icon;
  const angle = (index * 90) * (Math.PI / 180);
  const radius = 180;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;
  
  // 3D parallax effect based on mouse position
  const parallaxX = (mouseX - 0.5) * 20;
  const parallaxY = (mouseY - 0.5) * 20;
  
  return (
    <motion.div
      className="absolute cursor-pointer"
      style={{
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
        transform: "translate(-50%, -50%)",
        zIndex: isHovered || isSelected ? 50 : 10,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: 1, 
        scale: isHovered || isSelected ? 1.15 : 1,
        x: parallaxX * (1 + index * 0.1),
        y: parallaxY * (1 + index * 0.1),
      }}
      transition={{ 
        delay: 0.5 + index * 0.15, 
        duration: 0.6,
        type: "spring",
        stiffness: 100,
      }}
      onMouseEnter={() => onHover(node.id)}
      onMouseLeave={() => onHover(null)}
      onClick={() => onSelect(isSelected ? null : node.id)}
    >
      {/* Outer glow ring */}
      <motion.div
        className={`absolute inset-0 rounded-full bg-gradient-to-br ${node.color} blur-xl`}
        animate={{
          opacity: isHovered || isSelected ? 0.6 : 0.2,
          scale: isHovered || isSelected ? 1.5 : 1,
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Main node */}
      <motion.div
        className={`relative w-28 h-28 rounded-full bg-gradient-to-br ${node.color} p-[2px] shadow-lg`}
        animate={{
          rotateX: isHovered ? 10 : 0,
          rotateY: isHovered ? -10 : 0,
        }}
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
      >
        <div className="w-full h-full rounded-full bg-background/90 backdrop-blur-sm flex flex-col items-center justify-center gap-1">
          <Icon className="w-8 h-8 text-foreground" />
          <span className="text-sm font-bold text-foreground">{node.label}</span>
        </div>
      </motion.div>
      
      {/* Stats popup on hover/select */}
      <motion.div
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 translate-y-full pointer-events-none"
        initial={{ opacity: 0, y: -10, scale: 0.9 }}
        animate={{
          opacity: isHovered || isSelected ? 1 : 0,
          y: isHovered || isSelected ? 0 : -10,
          scale: isHovered || isSelected ? 1 : 0.9,
        }}
        transition={{ duration: 0.2 }}
      >
        <div className="bg-card/95 backdrop-blur-md border border-border rounded-xl p-4 shadow-2xl min-w-[200px]">
          <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Live Metrics</div>
          <div className="space-y-2">
            {Object.entries(node.stats).map(([key, value]) => (
              <div key={key} className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground capitalize">{key}</span>
                <span className="text-sm font-mono font-bold text-primary">{value}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 pt-3 border-t border-border">
            <div className="text-xs text-muted-foreground mb-2">Sub-modules</div>
            <div className="flex flex-wrap gap-1">
              {node.subNodes.map((sub) => (
                <span key={sub} className="px-2 py-0.5 text-xs bg-primary/10 text-primary rounded-full border border-primary/20">
                  {sub}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Connection points */}
      {[0, 90, 180, 270].map((deg) => (
        <motion.div
          key={deg}
          className="absolute w-2 h-2 rounded-full bg-primary/50"
          style={{
            left: `calc(50% + ${Math.cos(deg * Math.PI / 180) * 56}px - 4px)`,
            top: `calc(50% + ${Math.sin(deg * Math.PI / 180) * 56}px - 4px)`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            delay: deg / 360,
            repeat: Infinity,
          }}
        />
      ))}
    </motion.div>
  );
};

// Central hub component
const CentralHub = ({ 
  isActive, 
  mouseX, 
  mouseY,
  metrics 
}: { 
  isActive: boolean; 
  mouseX: number; 
  mouseY: number;
  metrics: { value: number; label: string }[];
}) => {
  const parallaxX = (mouseX - 0.5) * 10;
  const parallaxY = (mouseY - 0.5) * 10;
  
  return (
    <motion.div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
      animate={{
        x: parallaxX,
        y: parallaxY,
      }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
    >
      {/* Outer rotating ring */}
      <motion.div
        className="absolute inset-0 w-44 h-44 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
              <stop offset="50%" stopColor="hsl(var(--secondary))" stopOpacity="0.4" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <circle
            cx="100"
            cy="100"
            r="85"
            fill="none"
            stroke="url(#ringGradient)"
            strokeWidth="2"
            strokeDasharray="10 5"
          />
        </svg>
      </motion.div>
      
      {/* Middle ring - counter rotation */}
      <motion.div
        className="absolute inset-0 w-36 h-36 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle
            cx="100"
            cy="100"
            r="85"
            fill="none"
            stroke="hsl(var(--primary) / 0.3)"
            strokeWidth="1"
            strokeDasharray="20 10"
          />
        </svg>
      </motion.div>
      
      {/* Core hub */}
      <motion.div
        className="relative w-28 h-28 rounded-full bg-gradient-to-br from-primary via-blue-500 to-secondary p-[3px] shadow-glow-intense"
        whileHover={{ scale: 1.1 }}
        animate={{
          boxShadow: isActive 
            ? "0 0 60px hsl(var(--primary) / 0.5), 0 0 120px hsl(var(--primary) / 0.3)"
            : "0 0 40px hsl(var(--primary) / 0.3), 0 0 80px hsl(var(--primary) / 0.15)",
        }}
      >
        <div className="w-full h-full rounded-full bg-background/95 backdrop-blur-md flex flex-col items-center justify-center">
          <motion.div
            animate={{ rotateY: [0, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <CircuitBoard className="w-8 h-8 text-primary mb-1" />
          </motion.div>
          <span className="font-heading text-lg font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            X360
          </span>
        </div>
      </motion.div>
      
      {/* Orbiting data indicators */}
      {metrics.map((metric, i) => (
        <motion.div
          key={metric.label}
          className="absolute"
          style={{
            width: 160,
            height: 160,
            left: "calc(50% - 80px)",
            top: "calc(50% - 80px)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 25 + i * 5, repeat: Infinity, ease: "linear" }}
        >
          <motion.div
            className="absolute bg-card/90 backdrop-blur-sm border border-border/50 rounded-lg px-2 py-1 text-xs shadow-lg"
            style={{
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
            }}
            whileHover={{ scale: 1.1, zIndex: 100 }}
          >
            <div className="text-primary font-mono font-bold">{metric.value}</div>
            <div className="text-muted-foreground text-[10px]">{metric.label}</div>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};

// Connection line SVG
const ConnectionLines = ({ hoveredNode }: { hoveredNode: string | null }) => {
  const nodePositions = opsNodes.map((_, i) => {
    const angle = (i * 90) * (Math.PI / 180);
    const radius = 180;
    return {
      x: 250 + Math.cos(angle) * radius,
      y: 200 + Math.sin(angle) * radius,
    };
  });
  
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
          <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Connection to center */}
      {nodePositions.map((pos, i) => (
        <motion.line
          key={`center-${i}`}
          x1="250"
          y1="200"
          x2={pos.x}
          y2={pos.y}
          stroke="url(#lineGradient)"
          strokeWidth={hoveredNode === opsNodes[i].id ? 3 : 1.5}
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: hoveredNode === opsNodes[i].id ? 1 : 0.5,
          }}
          transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
        />
      ))}
      
      {/* Inter-node connections */}
      {connections.map((conn, i) => (
        <motion.line
          key={`conn-${i}`}
          x1={nodePositions[conn.from].x}
          y1={nodePositions[conn.from].y}
          x2={nodePositions[conn.to].x}
          y2={nodePositions[conn.to].y}
          stroke="hsl(var(--primary) / 0.2)"
          strokeWidth="1"
          strokeDasharray="4 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 1 + i * 0.1 }}
        />
      ))}
      
      {/* Animated data flow particles */}
      {nodePositions.map((pos, i) => (
        <motion.circle
          key={`particle-${i}`}
          r="3"
          fill="hsl(var(--primary))"
          filter="url(#glow)"
          initial={{ opacity: 0 }}
          animate={{
            cx: [250, pos.x],
            cy: [200, pos.y],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            delay: i * 0.5,
            repeat: Infinity,
            repeatDelay: 1,
          }}
        />
      ))}
    </svg>
  );
};

// Live metrics display
const LiveMetricsBar = ({ metrics }: { metrics: { label: string; value: string; trend: "up" | "down" | "stable" }[] }) => {
  return (
    <motion.div
      className="absolute bottom-4 left-4 right-4 flex justify-center gap-6 z-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5 }}
    >
      {metrics.map((metric, i) => (
        <motion.div
          key={metric.label}
          className="flex items-center gap-2 px-4 py-2 bg-card/80 backdrop-blur-sm rounded-lg border border-border/50"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5 + i * 0.1 }}
          whileHover={{ scale: 1.05, borderColor: "hsl(var(--primary) / 0.5)" }}
        >
          <Activity className={`w-4 h-4 ${
            metric.trend === "up" ? "text-emerald-400" :
            metric.trend === "down" ? "text-red-400" : "text-amber-400"
          }`} />
          <div>
            <div className="text-xs text-muted-foreground">{metric.label}</div>
            <div className="text-sm font-mono font-bold text-foreground">{metric.value}</div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export function XOPS360Section() {
  const containerRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.95, 1]);
  
  // Track mouse position for 3D effect
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!visualRef.current) return;
    const rect = visualRef.current.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  }, []);

  // Animated counter for hub metrics
  const [hubMetrics] = useState([
    { value: 99.9, label: "Uptime %" },
    { value: 247, label: "Pipelines" },
    { value: 12, label: "ms Latency" },
    { value: 82, label: "% Auto" },
  ]);
  
  const liveMetrics = [
    { label: "Incidents/hr", value: "0.3", trend: "down" as const },
    { label: "Deployments", value: "847", trend: "up" as const },
    { label: "Cost Savings", value: "$2.4M", trend: "up" as const },
    { label: "MTTR", value: "4.2min", trend: "down" as const },
  ];

  return (
    <section ref={containerRef} className="py-32 lg:py-44 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1400px]"
          style={{
            background: "radial-gradient(circle, hsl(195 100% 50% / 0.06) 0%, hsl(270 80% 60% / 0.03) 40%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Animated grid */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(195 100% 50%) 1px, transparent 1px),
              linear-gradient(90deg, hsl(195 100% 50%) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
        
        {/* Animated rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                width: 300 + i * 150,
                height: 300 + i * 150,
                border: `1px solid hsl(var(--primary) / ${0.15 - i * 0.02})`,
              }}
              animate={{ 
                rotate: i % 2 === 0 ? 360 : -360,
                scale: [1, 1.02, 1],
              }}
              transition={{ 
                rotate: { duration: 40 + i * 10, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              }}
            />
          ))}
        </div>
      </div>

      <motion.div 
        className="container relative z-10 mx-auto px-6 lg:px-8"
        style={{ opacity, scale }}
      >
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary px-5 py-2 rounded-full border border-primary/30 bg-primary/10">
              <motion.span
                className="w-2 h-2 bg-primary rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              Flagship Platform
              <motion.span
                className="w-2 h-2 bg-secondary rounded-full"
                animate={{ scale: [1.5, 1, 1.5], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6"
          >
            Introducing <AnimatedGradientText>XOPS360</AnimatedGradientText>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed"
          >
            The next-generation operations platform that unifies DevOps, DataOps, MLOps, and AIOps 
            into a single intelligent ecosystem. <span className="text-primary font-medium">Click any node to explore.</span>
          </motion.p>
        </div>

        {/* Central 3D visualization */}
        <motion.div
          ref={visualRef}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="relative max-w-[500px] aspect-square mx-auto mb-20"
          onMouseMove={handleMouseMove}
          style={{ perspective: "1000px" }}
        >
          {/* 3D container with perspective */}
          <motion.div
            className="relative w-full h-full"
            animate={{
              rotateX: (mousePosition.y - 0.5) * 10,
              rotateY: (mousePosition.x - 0.5) * -10,
            }}
            transition={{ type: "spring", stiffness: 100, damping: 30 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Connection lines */}
            <ConnectionLines hoveredNode={hoveredNode || selectedNode} />
            
            {/* Central hub */}
            <CentralHub 
              isActive={hoveredNode !== null || selectedNode !== null}
              mouseX={mousePosition.x}
              mouseY={mousePosition.y}
              metrics={hubMetrics}
            />
            
            {/* Orbital nodes */}
            {opsNodes.map((node, index) => (
              <Node3D
                key={node.id}
                node={node}
                index={index}
                isHovered={hoveredNode === node.id}
                isSelected={selectedNode === node.id}
                onHover={setHoveredNode}
                onSelect={setSelectedNode}
                mouseX={mousePosition.x}
                mouseY={mousePosition.y}
              />
            ))}
            
            {/* Live metrics bar */}
            <LiveMetricsBar metrics={liveMetrics} />
          </motion.div>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-muted/50 to-muted/20 border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit mb-5 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
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
          className="text-center mt-16"
        >
          <MagneticButton>
            <Button variant="hero" size="xl" asChild>
              <Link to="/xops360">
                Explore XOPS360
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </MagneticButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
