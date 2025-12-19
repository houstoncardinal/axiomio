import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import { ArrowRight, Layers, BarChart3, Shield, Zap, Globe2, GitBranch, Cloud, Lock, Bot, CircuitBoard } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AnimatedGradientText } from "./AnimatedGradientText";
import { MagneticButton } from "./MagneticButton";

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
    stat: "247 Pipelines",
  },
  { 
    id: "secops", 
    label: "SecOps", 
    color: "#10B981",
    secondaryColor: "#14B8A6",
    icon: Lock,
    metrics: ["Threat Detection", "Compliance", "Zero Trust"],
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
    id: "aiops", 
    label: "AIOps", 
    color: "#F59E0B",
    secondaryColor: "#EF4444",
    icon: Bot,
    metrics: ["AI Workforce", "Auto-Remediation", "Predictive Ops"],
    stat: "82% Automated",
  },
];

// Enterprise-ready node component
const EnterpriseNode = ({ 
  node, 
  index, 
  isHovered, 
  isSelected,
  onHover, 
  onSelect,
  totalNodes,
}: { 
  node: typeof opsNodes[0]; 
  index: number; 
  isHovered: boolean;
  isSelected: boolean;
  onHover: (id: string | null) => void;
  onSelect: (id: string | null) => void;
  totalNodes: number;
}) => {
  const Icon = node.icon;
  // Position nodes in a clean square pattern around center
  const positions = [
    { x: -140, y: -140 }, // Top-left - DevOps
    { x: 140, y: -140 },  // Top-right - SecOps
    { x: 140, y: 140 },   // Bottom-right - CloudOps
    { x: -140, y: 140 },  // Bottom-left - AIOps
  ];
  
  const pos = positions[index];
  const isActive = isHovered || isSelected;
  
  return (
    <motion.div
      className="absolute cursor-pointer"
      style={{
        left: `calc(50% + ${pos.x}px)`,
        top: `calc(50% + ${pos.y}px)`,
        transform: "translate(-50%, -50%)",
        zIndex: isActive ? 50 : 10,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: 1, 
        scale: isActive ? 1.08 : 1,
      }}
      transition={{ 
        delay: 0.4 + index * 0.1, 
        duration: 0.5,
        scale: { duration: 0.2 },
      }}
      onMouseEnter={() => onHover(node.id)}
      onMouseLeave={() => onHover(null)}
      onClick={() => onSelect(isSelected ? null : node.id)}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl blur-xl"
        style={{ backgroundColor: node.color }}
        animate={{
          opacity: isActive ? 0.4 : 0.15,
          scale: isActive ? 1.3 : 1,
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Main node card */}
      <motion.div
        className="relative w-32 h-32 rounded-2xl p-[2px] shadow-xl"
        style={{
          background: `linear-gradient(135deg, ${node.color}, ${node.secondaryColor})`,
        }}
        animate={{
          boxShadow: isActive 
            ? `0 20px 40px -10px ${node.color}50, 0 0 60px ${node.color}20`
            : `0 10px 30px -10px ${node.color}30`,
        }}
      >
        <div className="w-full h-full rounded-[14px] bg-background/95 backdrop-blur-sm flex flex-col items-center justify-center gap-2 p-3">
          <div 
            className="p-2.5 rounded-xl"
            style={{ backgroundColor: `${node.color}15` }}
          >
            <Icon className="w-6 h-6" style={{ color: node.color }} />
          </div>
          <span className="text-sm font-bold text-foreground">{node.label}</span>
          <span className="text-[10px] text-muted-foreground font-medium">{node.stat}</span>
        </div>
      </motion.div>
      
      {/* Hover/Select popup */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          top: pos.y < 0 ? "auto" : "-8px",
          bottom: pos.y < 0 ? "-8px" : "auto",
          transform: pos.y < 0 ? "translate(-50%, 100%)" : "translate(-50%, -100%)",
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: isActive ? 1 : 0,
          scale: isActive ? 1 : 0.9,
        }}
        transition={{ duration: 0.2 }}
      >
        <div className="bg-card/95 backdrop-blur-md border border-border rounded-xl p-4 shadow-2xl min-w-[180px]">
          <div 
            className="text-xs font-bold uppercase tracking-wider mb-3"
            style={{ color: node.color }}
          >
            {node.label} Capabilities
          </div>
          <div className="space-y-2">
            {node.metrics.map((metric, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-foreground">
                <div 
                  className="w-1.5 h-1.5 rounded-full"
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

// Central hub
const CentralHub = ({ isActive }: { isActive: boolean }) => {
  return (
    <motion.div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
    >
      {/* Rotating outer ring */}
      <motion.div
        className="absolute inset-0 w-40 h-40 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
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
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
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
        className="relative w-24 h-24 rounded-full bg-gradient-to-br from-primary via-blue-500 to-secondary p-[3px]"
        animate={{
          boxShadow: isActive 
            ? "0 0 50px hsl(var(--primary) / 0.4), 0 0 100px hsl(var(--primary) / 0.2)"
            : "0 0 30px hsl(var(--primary) / 0.25), 0 0 60px hsl(var(--primary) / 0.1)",
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-full h-full rounded-full bg-background/95 backdrop-blur-md flex flex-col items-center justify-center">
          <CircuitBoard className="w-7 h-7 text-primary mb-0.5" />
          <span className="font-heading text-base font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            X360
          </span>
        </div>
      </motion.div>
      
      {/* Pulse ring */}
      <motion.div
        className="absolute inset-0 w-24 h-24 rounded-full border-2 border-primary/30"
        initial={{ scale: 1, opacity: 0.5 }}
        animate={{ scale: 1.8, opacity: 0 }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
      />
    </motion.div>
  );
};

// Connection lines between nodes and hub
const ConnectionLines = ({ 
  hoveredNode, 
  selectedNode 
}: { 
  hoveredNode: string | null;
  selectedNode: string | null;
}) => {
  const positions = [
    { x: 250 - 140, y: 200 - 140 }, // DevOps
    { x: 250 + 140, y: 200 - 140 }, // SecOps
    { x: 250 + 140, y: 200 + 140 }, // CloudOps
    { x: 250 - 140, y: 200 + 140 }, // AIOps
  ];
  
  const activeNode = hoveredNode || selectedNode;
  
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
      <defs>
        {opsNodes.map((node) => (
          <linearGradient key={`grad-${node.id}`} id={`line-${node.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={node.color} stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
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
            x1="250"
            y1="200"
            x2={pos.x}
            y2={pos.y}
            stroke={`url(#line-${node.id})`}
            strokeWidth={isActive ? 3 : 1.5}
            filter="url(#lineGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: isActive ? 0.9 : 0.4,
            }}
            transition={{ duration: 0.8, delay: 0.2 + i * 0.08 }}
          />
        );
      })}
      
      {/* Cross connections (dashed) */}
      <motion.line
        x1={positions[0].x} y1={positions[0].y}
        x2={positions[2].x} y2={positions[2].y}
        stroke="hsl(var(--primary) / 0.15)"
        strokeWidth="1"
        strokeDasharray="6 6"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, delay: 0.8 }}
      />
      <motion.line
        x1={positions[1].x} y1={positions[1].y}
        x2={positions[3].x} y2={positions[3].y}
        stroke="hsl(var(--primary) / 0.15)"
        strokeWidth="1"
        strokeDasharray="6 6"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, delay: 0.9 }}
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
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 1 + i * 0.1 }}
          />
        );
      })}
    </svg>
  );
};

// Key metrics display
const KeyMetrics = () => {
  const metrics = [
    { value: "99.9%", label: "Uptime SLA" },
    { value: "4 min", label: "Avg MTTR" },
    { value: "82%", label: "Auto-Resolved" },
    { value: "$2.4M", label: "Saved/Year" },
  ];
  
  return (
    <motion.div
      className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2 }}
    >
      {metrics.map((metric, i) => (
        <motion.div
          key={metric.label}
          className="flex flex-col items-center px-4 py-2.5 bg-card/90 backdrop-blur-sm rounded-lg border border-border/50 shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.3 + i * 0.1 }}
          whileHover={{ scale: 1.05, borderColor: "hsl(var(--primary) / 0.4)" }}
        >
          <div className="text-sm font-mono font-bold text-primary">{metric.value}</div>
          <div className="text-[10px] text-muted-foreground">{metric.label}</div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export function XOPS360Section() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.95, 1]);

  return (
    <section ref={containerRef} className="py-20 lg:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] opacity-50"
          style={{
            background: "radial-gradient(circle, hsl(var(--primary) / 0.08) 0%, hsl(var(--primary) / 0.02) 40%, transparent 70%)",
          }}
        />
        
        {/* Subtle grid */}
        <div 
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <motion.div 
        className="container relative z-10 mx-auto px-6 lg:px-8"
        style={{ opacity, scale }}
      >
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary px-5 py-2 rounded-full border border-primary/30 bg-primary/10">
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
            The AI-powered operations platform that replaces traditional manual processes with an 
            intelligent AI workforce. Unifying DevOps, SecOps, CloudOps, and AIOps.{" "}
            <span className="text-primary font-medium">Click any node to explore.</span>
          </motion.p>
        </div>

        {/* Central visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="relative max-w-[500px] aspect-square mx-auto mb-24"
        >
          <div className="relative w-full h-full">
            {/* Connection lines */}
            <ConnectionLines 
              hoveredNode={hoveredNode} 
              selectedNode={selectedNode}
            />
            
            {/* Central hub */}
            <CentralHub isActive={hoveredNode !== null || selectedNode !== null} />
            
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
                totalNodes={opsNodes.length}
              />
            ))}
            
            {/* Key metrics */}
            <KeyMetrics />
          </div>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-muted/50 to-muted/20 border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
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
