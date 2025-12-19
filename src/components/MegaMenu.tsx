import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Brain, 
  Cpu, 
  LineChart, 
  Zap, 
  ArrowRight, 
  Sparkles,
  Target,
  Layers,
  Shield,
  TrendingUp,
  Network,
  BarChart3,
  Workflow,
  Settings2,
  Database,
  Cloud,
  Lock,
  Lightbulb,
  Users,
  Rocket
} from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    id: "strategy",
    slug: "strategy-advisory",
    icon: LineChart,
    title: "Strategy & Advisory",
    subtitle: "Executive guidance for complex decisions",
    description: "Navigate uncertainty with frameworks built on deep analysis and industry insight.",
    color: "from-blue-500/20 to-indigo-500/10",
    accent: "text-blue-400",
    capabilities: [
      { name: "Strategic Roadmap Development", icon: Target },
      { name: "Market & Competitive Analysis", icon: TrendingUp },
      { name: "Organizational Design", icon: Users },
      { name: "Investment Thesis Development", icon: BarChart3 },
    ],
  },
  {
    id: "technology",
    slug: "technology-systems",
    icon: Cpu,
    title: "Technology & Systems",
    subtitle: "Architecture that scales with ambition",
    description: "Enterprise-grade systems delivering reliability today, adaptable for tomorrow.",
    color: "from-emerald-500/20 to-teal-500/10",
    accent: "text-emerald-400",
    capabilities: [
      { name: "Enterprise Architecture", icon: Layers },
      { name: "Cloud Infrastructure", icon: Cloud },
      { name: "System Integration", icon: Network },
      { name: "Platform Modernization", icon: Settings2 },
    ],
  },
  {
    id: "ai",
    slug: "ai-automation",
    icon: Brain,
    title: "AI Automation with Cloud DevOps",
    subtitle: "AI workforce for modern operations",
    description: "AI-driven automation for DevOps, SRE, and cloud operations—replacing manual processes with intelligent automation.",
    color: "from-violet-500/20 to-purple-500/10",
    accent: "text-violet-400",
    capabilities: [
      { name: "AI-Powered DevOps", icon: Workflow },
      { name: "Cloud Automation", icon: Cloud },
      { name: "Intelligent SRE", icon: Sparkles },
      { name: "MLOps & AIOps", icon: Database },
    ],
  },
  {
    id: "cybersecurity",
    slug: "cybersecurity",
    icon: Shield,
    title: "Cyber Security Services",
    subtitle: "End-to-end enterprise protection",
    description: "Comprehensive cybersecurity across cloud, network, and endpoints with AI-driven threat detection.",
    color: "from-red-500/20 to-orange-500/10",
    accent: "text-red-400",
    capabilities: [
      { name: "Cloud Security (CSPM/CWPP)", icon: Cloud },
      { name: "Network Security", icon: Network },
      { name: "Threat Detection & Response", icon: Shield },
      { name: "Compliance & Governance", icon: Lock },
    ],
  },
  {
    id: "transformation",
    slug: "digital-transformation",
    icon: Zap,
    title: "Digital Transformation",
    subtitle: "Change that creates lasting value",
    description: "Complex organizational change with methodologies ensuring adoption and sustainability.",
    color: "from-amber-500/20 to-orange-500/10",
    accent: "text-amber-400",
    capabilities: [
      { name: "Transformation Strategy", icon: Rocket },
      { name: "Change Management", icon: Users },
      { name: "Process Redesign", icon: Workflow },
      { name: "Capability Building", icon: Shield },
    ],
  },
  {
    id: "xerotrust",
    slug: "xerotrust",
    icon: Lock,
    title: "XeroTrust",
    subtitle: "Zero-Trust Network Access",
    description: "Enterprise security without VPN complexity. 10x faster with AI-driven protection.",
    color: "from-cyan-500/20 to-emerald-500/10",
    accent: "text-cyan-400",
    capabilities: [
      { name: "Zero-Trust Architecture", icon: Shield },
      { name: "WireGuard Encryption", icon: Lock },
      { name: "SSO & MFA Integration", icon: Users },
      { name: "AI-Driven Security", icon: Brain },
    ],
  },
];

const featuredOfferings = [
  {
    title: "XOPS360",
    subtitle: "AI Operations Platform",
    description: "Our intelligent operations engine powered by AI workforce—transforming how enterprises manage cloud, security, and automation.",
    link: "/xops360",
    color: "from-indigo-500/20 to-violet-500/10",
    accent: "bg-primary",
    stats: [
      { label: "Cost Reduction", value: "40%" },
      { label: "Faster Resolution", value: "10x" },
      { label: "Uptime", value: "99.9%" },
    ],
  },
  {
    title: "XeroTrust",
    subtitle: "Zero-Trust Security",
    description: "Zero-trust network access with WireGuard encryption. 10x faster than legacy VPNs with AI-driven threat detection.",
    link: "/xerotrust",
    color: "from-cyan-500/20 to-emerald-500/10",
    accent: "bg-cyan-500",
    stats: [
      { label: "Faster Access", value: "10x" },
      { label: "Deployment", value: "5min" },
      { label: "Cost Savings", value: "60%" },
    ],
  },
  {
    title: "XeroWaste",
    subtitle: "FinOps & Cost Optimization",
    description: "Eliminate cloud waste with AI-powered cost optimization. Real-time insights and automated rightsizing.",
    link: "/xerowaste",
    color: "from-green-500/20 to-emerald-500/10",
    accent: "bg-green-500",
    stats: [
      { label: "Avg Savings", value: "35%" },
      { label: "Detection", value: "Real-time" },
      { label: "ROI", value: "10x" },
    ],
  },
];

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 top-[64px] bg-foreground/5 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Menu Container */}
          <motion.div
            className="fixed left-0 right-0 top-[64px] z-50 overflow-hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <div className="container mx-auto px-6 lg:px-8">
              <motion.div 
                className="relative bg-background border border-border rounded-xl shadow-xl overflow-hidden"
                initial={{ scale: 0.98 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.98 }}
              >
                {/* Decorative gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-primary/3 pointer-events-none" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                
                <div className="relative grid lg:grid-cols-[1fr_340px] gap-0">
                  {/* Services Grid */}
                  <div className="p-8 lg:p-10">
                    <div className="flex items-center justify-between mb-8">
                      <div>
                        <h3 className="text-xs font-semibold text-primary uppercase tracking-[0.2em] mb-1">
                          Our Services
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Enterprise-grade capabilities for consequential challenges
                        </p>
                      </div>
                      <Link
                        to="/services"
                        onClick={onClose}
                        className="hidden sm:flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors group"
                      >
                        View all services
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      {services.map((service, index) => (
                        <motion.div
                          key={service.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                          onMouseEnter={() => setHoveredService(service.id)}
                          onMouseLeave={() => setHoveredService(null)}
                        >
                          <Link
                            to={`/services/${service.slug}`}
                            onClick={onClose}
                            className="group block"
                          >
                            <div className={cn(
                              "relative p-5 rounded-xl border border-border/50 transition-all duration-300",
                              "hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5",
                              hoveredService === service.id && "border-primary/30 bg-primary/5"
                            )}>
                              {/* Gradient background on hover */}
                              <div className={cn(
                                "absolute inset-0 rounded-xl bg-gradient-to-br opacity-0 transition-opacity duration-300",
                                service.color,
                                hoveredService === service.id && "opacity-100"
                              )} />
                              
                              <div className="relative">
                                {/* Header */}
                                <div className="flex items-start gap-4 mb-4">
                                  <div className={cn(
                                    "p-2.5 rounded-lg bg-gradient-to-br border transition-all duration-300",
                                    "from-primary/20 to-primary/5 border-primary/20",
                                    hoveredService === service.id && "scale-110"
                                  )}>
                                    <service.icon className={cn(
                                      "h-5 w-5 transition-colors",
                                      hoveredService === service.id ? service.accent : "text-primary"
                                    )} />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <h4 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                                      {service.title}
                                    </h4>
                                    <p className="text-xs text-muted-foreground truncate">
                                      {service.subtitle}
                                    </p>
                                  </div>
                                </div>
                                
                                {/* Description */}
                                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                                  {service.description}
                                </p>
                                
                                {/* Capabilities */}
                                <div className="space-y-1.5">
                                  {service.capabilities.map((cap) => (
                                    <div 
                                      key={cap.name}
                                      className="flex items-center gap-2 text-xs text-muted-foreground/80 group-hover:text-muted-foreground transition-colors"
                                    >
                                      <cap.icon className="h-3 w-3 text-primary/60" />
                                      <span>{cap.name}</span>
                                    </div>
                                  ))}
                                </div>
                                
                                {/* Arrow indicator */}
                                <div className={cn(
                                  "absolute top-5 right-5 opacity-0 transition-all duration-300",
                                  hoveredService === service.id && "opacity-100"
                                )}>
                                  <ArrowRight className={cn("h-4 w-4", service.accent)} />
                                </div>
                              </div>
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Featured Sidebar - Both Products */}
                  <div className="relative border-t lg:border-t-0 lg:border-l border-border/50">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
                    
                    <div className="relative p-6 lg:p-8 h-full flex flex-col">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                        Featured Products
                      </p>
                      
                      <div className="space-y-4 flex-1">
                        {featuredOfferings.map((offering, index) => (
                          <motion.div
                            key={offering.title}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + index * 0.1 }}
                            className={cn(
                              "relative rounded-xl border border-border/50 p-4 transition-all hover:border-primary/30",
                              "bg-gradient-to-br",
                              offering.color
                            )}
                          >
                            {/* Badge */}
                            <div className={cn(
                              "inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] mb-3 px-2 py-1 rounded-full border",
                              offering.title === "XOPS360" 
                                ? "text-primary border-primary/30 bg-primary/10"
                                : "text-cyan-500 border-cyan-500/30 bg-cyan-500/10"
                            )}>
                              <Sparkles className="h-2.5 w-2.5" />
                              {offering.subtitle}
                            </div>
                            
                            {/* Title */}
                            <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                              {offering.title}
                            </h3>
                            
                            {/* Description */}
                            <p className="text-xs text-muted-foreground mb-4 leading-relaxed line-clamp-2">
                              {offering.description}
                            </p>
                            
                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-2 mb-4">
                              {offering.stats.map((stat) => (
                                <div
                                  key={stat.label}
                                  className="text-center p-2 rounded-lg bg-background/50 border border-border/30"
                                >
                                  <div className={cn(
                                    "text-sm font-bold",
                                    offering.title === "XOPS360" ? "text-primary" : "text-cyan-500"
                                  )}>
                                    {stat.value}
                                  </div>
                                  <div className="text-[9px] text-muted-foreground uppercase tracking-wider">
                                    {stat.label}
                                  </div>
                                </div>
                              ))}
                            </div>
                            
                            {/* CTA */}
                            <Link
                              to={offering.link}
                              onClick={onClose}
                              className={cn(
                                "group flex items-center justify-center gap-2 w-full px-3 py-2 rounded-lg font-medium text-xs transition-all",
                                offering.title === "XOPS360"
                                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                                  : "bg-cyan-500 text-white hover:bg-cyan-600"
                              )}
                            >
                              Explore {offering.title}
                              <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                      
                      {/* Quick Links */}
                      <div className="pt-4 border-t border-border/50 mt-4">
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                          Quick Links
                        </p>
                        <div className="space-y-2">
                          <Link
                            to="/services/ops-excellence"
                            onClick={onClose}
                            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <div className="w-1 h-1 rounded-full bg-emerald-500" />
                            FinOps · SecOps · CloudOps · DevOps
                          </Link>
                          <Link
                            to="/approach"
                            onClick={onClose}
                            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <div className="w-1 h-1 rounded-full bg-primary" />
                            Our Methodology
                          </Link>
                          <Link
                            to="/xerotrust/compare"
                            onClick={onClose}
                            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <div className="w-1 h-1 rounded-full bg-cyan-500" />
                            XeroTrust vs Competitors
                          </Link>
                          <Link
                            to="/contact"
                            onClick={onClose}
                            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <div className="w-1 h-1 rounded-full bg-primary" />
                            Schedule Discovery Call
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
