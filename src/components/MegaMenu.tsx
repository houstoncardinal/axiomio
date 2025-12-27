import { useState, useEffect, useRef } from "react";
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
  Rocket,
  Eye,
  RefreshCw,
  FileCode,
  AlertTriangle,
  Monitor,
  PackageCheck
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SERVICE_CATEGORIES, PRODUCTS } from "@/config/services.config";

const servicesOLD = [
  {
    id: "strategy",
    slug: "strategy-advisory",
    icon: LineChart,
    title: "Strategy & Advisory",
    subtitle: "Executive guidance",
    description: "Navigate uncertainty with deep analysis and industry insight.",
    color: "from-blue-500/20 to-indigo-500/10",
    accent: "text-blue-400",
  },
  {
    id: "technology",
    slug: "technology-systems",
    icon: Cpu,
    title: "Technology & Systems",
    subtitle: "Scalable architecture",
    description: "Enterprise-grade systems delivering reliability today.",
    color: "from-emerald-500/20 to-teal-500/10",
    accent: "text-emerald-400",
  },
  {
    id: "ai",
    slug: "ai-automation",
    icon: Brain,
    title: "AI & Cloud DevOps",
    subtitle: "Intelligent operations",
    description: "AI-driven automation for DevOps, SRE, and cloud operations.",
    color: "from-violet-500/20 to-purple-500/10",
    accent: "text-violet-400",
  },
  {
    id: "cybersecurity",
    slug: "cybersecurity",
    icon: Shield,
    title: "Cyber Security",
    subtitle: "Enterprise protection",
    description: "Comprehensive cybersecurity with AI-driven threat detection.",
    color: "from-red-500/20 to-orange-500/10",
    accent: "text-red-400",
  },
  {
    id: "transformation",
    slug: "digital-transformation",
    icon: Zap,
    title: "Digital Transformation",
    subtitle: "Lasting change",
    description: "Complex organizational change ensuring adoption.",
    color: "from-amber-500/20 to-orange-500/10",
    accent: "text-amber-400",
  },
  {
    id: "cloud-security",
    slug: "cloud-security",
    icon: Cloud,
    title: "Cloud Security",
    subtitle: "CSPM/CWPP",
    description: "Secure cloud environments with posture management.",
    color: "from-sky-500/20 to-blue-500/10",
    accent: "text-sky-400",
  },
  {
    id: "devops",
    slug: "devops-services",
    icon: Workflow,
    title: "DevOps Services",
    subtitle: "CI/CD & automation",
    description: "Streamlined development and deployment pipelines.",
    color: "from-orange-500/20 to-red-500/10",
    accent: "text-orange-400",
  },
  {
    id: "finops",
    slug: "cloud-finops",
    icon: BarChart3,
    title: "Cloud FinOps",
    subtitle: "Cost optimization",
    description: "Maximize cloud ROI with intelligent cost management.",
    color: "from-green-500/20 to-emerald-500/10",
    accent: "text-green-400",
  },
  {
    id: "kubernetes",
    slug: "kubernetes",
    icon: Layers,
    title: "Kubernetes",
    subtitle: "Container orchestration",
    description: "Enterprise Kubernetes deployment and management.",
    color: "from-indigo-500/20 to-violet-500/10",
    accent: "text-indigo-400",
  },
  {
    id: "migration",
    slug: "migration-and-modernization",
    icon: Rocket,
    title: "Migration & Modernization",
    subtitle: "Cloud journey",
    description: "Seamless cloud migration and legacy modernization.",
    color: "from-pink-500/20 to-rose-500/10",
    accent: "text-pink-400",
  },
  {
    id: "ops-excellence",
    slug: "ops-excellence",
    icon: Target,
    title: "Ops Excellence",
    subtitle: "Operational maturity",
    description: "Achieve operational excellence across your organization.",
    color: "from-teal-500/20 to-cyan-500/10",
    accent: "text-teal-400",
  },
  {
    id: "vulnerability",
    slug: "vulnerability-management",
    icon: Lock,
    title: "Vulnerability Management",
    subtitle: "Threat mitigation",
    description: "Proactive vulnerability detection and remediation.",
    color: "from-rose-500/20 to-red-500/10",
    accent: "text-rose-400",
  },
  {
    id: "observability",
    slug: "observability-monitoring",
    icon: Eye,
    title: "Observability & Monitoring",
    subtitle: "Full-stack visibility",
    description: "360° visibility across infrastructure with real-time insights.",
    color: "from-blue-500/20 to-cyan-500/10",
    accent: "text-blue-400",
  },
  {
    id: "business-continuity",
    slug: "business-continuity",
    icon: RefreshCw,
    title: "Business Continuity",
    subtitle: "Disaster recovery",
    description: "Comprehensive data protection and rapid recovery capabilities.",
    color: "from-emerald-500/20 to-green-500/10",
    accent: "text-emerald-400",
  },
  {
    id: "supply-chain-security",
    slug: "software-supply-chain-security",
    icon: PackageCheck,
    title: "Software Supply Chain Security",
    subtitle: "DevSecOps",
    description: "Secure your software supply chain with DevSecOps practices.",
    color: "from-violet-500/20 to-purple-500/10",
    accent: "text-violet-400",
  },
  {
    id: "iac",
    slug: "infrastructure-as-code",
    icon: FileCode,
    title: "Infrastructure as Code",
    subtitle: "IaC automation",
    description: "Automate infrastructure with Terraform, Ansible, and more.",
    color: "from-orange-500/20 to-amber-500/10",
    accent: "text-orange-400",
  },
  {
    id: "zero-trust",
    slug: "zero-trust-security",
    icon: Shield,
    title: "Zero Trust Security",
    subtitle: "Never trust, verify",
    description: "Implement zero trust architecture across your organization.",
    color: "from-red-500/20 to-rose-500/10",
    accent: "text-red-400",
  },
  {
    id: "threat-detection",
    slug: "threat-detection-ransomware",
    icon: AlertTriangle,
    title: "Threat Detection & Ransomware",
    subtitle: "Advanced protection",
    description: "Detect and neutralize threats with 24/7 SOC services.",
    color: "from-amber-500/20 to-yellow-500/10",
    accent: "text-amber-400",
  },
  {
    id: "digital-workspace",
    slug: "digital-workspace",
    icon: Monitor,
    title: "Digital Workspace",
    subtitle: "Remote enablement",
    description: "Empower your remote workforce with secure digital workspace solutions.",
    color: "from-indigo-500/20 to-blue-500/10",
    accent: "text-indigo-400",
  },
];

const featuredOfferings = [
  {
    title: "Xops360",
    subtitle: "AI Operations Platform",
    description: "Our intelligent operations engine powered by AI workforce—transforming how enterprises manage cloud, security, and automation.",
    link: "/xops360",
    color: "from-indigo-500/20 to-violet-500/10",
    accent: "bg-primary",
    logo: "/logos/Xops360/Logo_Sky_Blue.png",
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
    logo: "/logos/xero-trust/_XeroTrust_-lightbcg.png",
    stats: [
      { label: "Faster Access", value: "10x" },
      { label: "Deployment", value: "5min" },
      { label: "Cost Savings", value: "60%" },
    ],
  },
];

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Clear any pending timeout
  const clearHideTimeout = () => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
  };

  // Cleanup on unmount or when menu closes
  useEffect(() => {
    if (!isOpen) {
      clearHideTimeout();
      setHoveredService(null);
    }
    return () => clearHideTimeout();
  }, [isOpen]);

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
                  <div className="p-3 lg:p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <div className="p-1.5 rounded-lg bg-primary/10 border border-primary/20">
                            <Sparkles className="w-4 h-4 text-primary" />
                          </div>
                          <h3 className="text-sm font-bold text-primary uppercase tracking-[0.2em]">
                            Our Services
                          </h3>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Enterprise-grade capabilities for consequential challenges
                        </p>
                      </div>
                      <Link
                        to="/services"
                        onClick={onClose}
                        className="hidden sm:flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors group"
                      >
                        View all
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2">
                      {SERVICE_CATEGORIES.map((service, index) => (
                        <motion.div
                          key={service.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.02 }}
                          onMouseEnter={() => {
                            clearHideTimeout();
                            setHoveredService(service.id);
                          }}
                          onMouseLeave={() => {
                            clearHideTimeout();
                            hideTimeoutRef.current = setTimeout(() => {
                              setHoveredService(null);
                            }, 200);
                          }}
                          className="relative"
                        >
                          <Link
                            to={service.route}
                            onClick={onClose}
                            className="group block h-full"
                          >
                            <div className={cn(
                              "relative p-2.5 rounded-xl border border-border/50 transition-all duration-300 h-full",
                              "hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 hover:scale-x-105 hover:z-10",
                              hoveredService === service.id && "border-primary/30 bg-primary/5"
                            )}>
                              {/* Gradient background on hover */}
                              <div className={cn(
                                "absolute inset-0 rounded-xl bg-gradient-to-br opacity-0 transition-opacity duration-300",
                                service.color,
                                hoveredService === service.id && "opacity-100"
                              )} />

                              {/* Glow effect */}
                              <div className={cn(
                                "absolute -inset-1 rounded-xl bg-gradient-to-br opacity-0 blur-lg transition-opacity duration-300",
                                service.color,
                                hoveredService === service.id && "opacity-50"
                              )} />

                              <div className="relative">
                                {/* Icon */}
                                <div className={cn(
                                  "inline-flex p-2 rounded-lg bg-gradient-to-br border transition-all duration-300 mb-2",
                                  "from-primary/20 to-primary/5 border-primary/20",
                                  hoveredService === service.id && "scale-110 shadow-lg"
                                )}>
                                  <service.icon className={cn(
                                    "h-4 w-4 transition-colors",
                                    hoveredService === service.id ? service.accent : "text-primary"
                                  )} />
                                </div>

                                {/* Title & Subtitle */}
                                <div className="mb-1.5">
                                  <h4 className="font-heading font-bold text-xs text-foreground group-hover:text-primary transition-colors mb-0.5 leading-tight">
                                    {service.title}
                                  </h4>
                                  <p className="text-[9px] font-semibold text-muted-foreground uppercase tracking-wide">
                                    {service.subtitle}
                                  </p>
                                </div>

                                {/* Description */}
                                <p className="text-[11px] text-muted-foreground leading-relaxed mb-1.5">
                                  {service.description}
                                </p>

                                {/* Arrow indicator */}
                                <div className={cn(
                                  "flex items-center gap-1.5 text-[9px] font-semibold text-foreground opacity-0 transition-all duration-300",
                                  hoveredService === service.id && "opacity-100"
                                )}>
                                  Learn more
                                  <ArrowRight className="h-2.5 w-2.5" />
                                </div>
                              </div>
                            </div>
                          </Link>

                          {/* Sub-services hover panel */}
                          {hoveredService === service.id && service.subServices && service.subServices.length > 0 && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              onMouseEnter={() => {
                                clearHideTimeout();
                                setHoveredService(service.id);
                              }}
                              onMouseLeave={() => {
                                clearHideTimeout();
                                hideTimeoutRef.current = setTimeout(() => {
                                  setHoveredService(null);
                                }, 200);
                              }}
                              className="absolute top-full left-0 mt-2 bg-background border border-border rounded-xl shadow-2xl p-3 min-w-[220px] z-50"
                            >
                              <div className="text-[9px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                                {service.subServices.length} Services
                              </div>
                              <div className="space-y-1">
                                {service.subServices.map((subService) => {
                                  const SubIcon = subService.icon;
                                  return (
                                    <Link
                                      key={subService.id}
                                      to={subService.route}
                                      onClick={onClose}
                                      className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-muted transition-colors group"
                                    >
                                      <SubIcon className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                                      <div className="flex-1 min-w-0">
                                        <div className="text-[11px] font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                                          {subService.title}
                                        </div>
                                        <div className="text-[9px] text-muted-foreground truncate">
                                          {subService.subtitle}
                                        </div>
                                      </div>
                                    </Link>
                                  );
                                })}
                              </div>
                            </motion.div>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Featured Sidebar - Both Products */}
                  <div className="relative border-t lg:border-t-0 lg:border-l border-border/50">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />

                    <div className="relative p-4 lg:p-5 h-full flex flex-col">
                      <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                        Featured Products
                      </p>

                      <div className="space-y-3 flex-1">
                        {featuredOfferings.map((offering, index) => (
                          <motion.div
                            key={offering.title}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + index * 0.1 }}
                            className={cn(
                              "relative rounded-lg border border-border/50 p-3 transition-all hover:border-primary/30",
                              "bg-gradient-to-br",
                              offering.color
                            )}
                          >
                            {/* Badge */}
                            <div className={cn(
                              "inline-flex items-center gap-1 text-[9px] font-semibold uppercase tracking-[0.15em] mb-2 px-1.5 py-0.5 rounded-full border",
                              offering.title === "Xops360"
                                ? "text-primary border-primary/30 bg-primary/10"
                                : "text-cyan-500 border-cyan-500/30 bg-cyan-500/10"
                            )}>
                              <Sparkles className="h-2 w-2" />
                              {offering.subtitle}
                            </div>

                            {/* Title with logo */}
                            <div className="flex items-center gap-2 mb-1.5">
                              {'logo' in offering && offering.logo && (
                                <img
                                  src={offering.logo}
                                  alt={offering.title}
                                  className={cn(
                                    "w-auto object-contain",
                                    offering.title === "Xops360" ? "h-9" : "h-5"
                                  )}
                                />
                              )}
                              <h3 className="font-heading text-base font-bold text-foreground">
                                {offering.title}
                              </h3>
                            </div>

                            {/* Description */}
                            <p className="text-[10px] text-muted-foreground mb-2.5 leading-relaxed line-clamp-2">
                              {offering.description}
                            </p>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-1.5 mb-2.5">
                              {offering.stats.map((stat) => (
                                <div
                                  key={stat.label}
                                  className="text-center p-1.5 rounded-md bg-background/50 border border-border/30"
                                >
                                  <div className={cn(
                                    "text-xs font-bold",
                                    offering.title === "Xops360" ? "text-primary" : "text-cyan-500"
                                  )}>
                                    {stat.value}
                                  </div>
                                  <div className="text-[8px] text-muted-foreground uppercase tracking-wider">
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
                                "group flex items-center justify-center gap-1.5 w-full px-2.5 py-1.5 rounded-md font-medium text-[10px] transition-all",
                                offering.title === "Xops360"
                                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                                  : "bg-cyan-500 text-white hover:bg-cyan-600"
                              )}
                            >
                              Explore {offering.title}
                              <ArrowRight className="h-2.5 w-2.5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                      
                      {/* Quick Links */}
                      <div className="pt-3 border-t border-border/50 mt-3">
                        <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                          Quick Links
                        </p>
                        <div className="space-y-1.5">
                          <Link
                            to="/services/ops-excellence"
                            onClick={onClose}
                            className="flex items-center gap-1.5 text-[10px] text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <div className="w-1 h-1 rounded-full bg-emerald-500" />
                            FinOps · SecOps · CloudOps · DevOps
                          </Link>
                          <Link
                            to="/approach"
                            onClick={onClose}
                            className="flex items-center gap-1.5 text-[10px] text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <div className="w-1 h-1 rounded-full bg-primary" />
                            Our Methodology
                          </Link>
                          <Link
                            to="/xerotrust/compare"
                            onClick={onClose}
                            className="flex items-center gap-1.5 text-[10px] text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <div className="w-1 h-1 rounded-full bg-cyan-500" />
                            XeroTrust vs Competitors
                          </Link>
                          <Link
                            to="/contact"
                            onClick={onClose}
                            className="flex items-center gap-1.5 text-[10px] text-muted-foreground hover:text-foreground transition-colors"
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
