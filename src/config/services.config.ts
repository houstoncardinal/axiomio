import type { LucideIcon } from "lucide-react";
import {
  LineChart,
  Cpu,
  Brain,
  Shield,
  Zap,
  Cloud,
  Workflow,
  BarChart3,
  Network,
  Settings2,
  Database,
  Lock,
  Lightbulb,
  Users,
  Rocket,
  Eye,
  RefreshCw,
  FileCode,
  AlertTriangle,
  Monitor,
  PackageCheck,
  TrendingUp,
  Target,
  Server,
  Container,
  GitBranch,
  Gauge,
  DollarSign,
  ShieldCheck,
  Activity,
  HardDrive,
  Wifi
} from "lucide-react";

export interface SubService {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  description: string;
  color: string; // gradient classes
  accent: string; // text color class
  route: string;
}

export interface ServiceCategory {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  description: string;
  color: string;
  accent: string;
  route: string;
  subServices: SubService[];
  relatedProducts?: Array<'xops360' | 'xerotrust'>;
  featuredOnHomepage?: boolean;
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "strategy-transformation-advisory",
    slug: "strategy-transformation-advisory",
    title: "Strategy, Transformation & Advisory",
    subtitle: "Executive alignment & change",
    icon: Target,
    description: "Navigate uncertainty with strategic roadmaps, organizational design, and change management that ensures lasting transformation.",
    color: "from-blue-500/20 to-indigo-500/10",
    accent: "text-blue-400",
    route: "/services/strategy-transformation-advisory",
    featuredOnHomepage: true,
    subServices: [
      {
        id: "strategy-advisory",
        slug: "strategy-advisory",
        title: "Strategy & Advisory",
        subtitle: "Executive guidance",
        icon: LineChart,
        description: "Navigate uncertainty with deep analysis and industry insight.",
        color: "from-blue-500/20 to-indigo-500/10",
        accent: "text-blue-400",
        route: "/services/strategy-advisory",
      },
      {
        id: "digital-transformation",
        slug: "digital-transformation",
        title: "Digital Transformation",
        subtitle: "Lasting change",
        icon: Zap,
        description: "Complex organizational change ensuring adoption.",
        color: "from-amber-500/20 to-orange-500/10",
        accent: "text-amber-400",
        route: "/services/digital-transformation",
      },
      {
        id: "ops-excellence",
        slug: "ops-excellence",
        title: "Ops Excellence",
        subtitle: "Unified operations",
        icon: TrendingUp,
        description: "Integrated platform for FinOps, SecOps, CloudOps, and DevOps excellence.",
        color: "from-indigo-500/20 to-purple-500/10",
        accent: "text-indigo-400",
        route: "/services/ops-excellence",
      },
    ],
  },
  {
    id: "cloud-platform-engineering",
    slug: "cloud-platform-engineering",
    title: "Cloud & Platform Engineering",
    subtitle: "Modern cloud foundations",
    icon: Cloud,
    description: "Build and run modern cloud foundations with enterprise-grade architecture, infrastructure, and modernization services.",
    color: "from-emerald-500/20 to-teal-500/10",
    accent: "text-emerald-400",
    route: "/services/cloud-platform-engineering",
    featuredOnHomepage: true,
    subServices: [
      {
        id: "technology-systems",
        slug: "technology-systems",
        title: "Technology & Systems",
        subtitle: "Scalable architecture",
        icon: Cpu,
        description: "Enterprise-grade systems delivering reliability today.",
        color: "from-emerald-500/20 to-teal-500/10",
        accent: "text-emerald-400",
        route: "/services/technology-systems",
      },
      {
        id: "kubernetes",
        slug: "kubernetes",
        title: "Kubernetes",
        subtitle: "Container orchestration",
        icon: Network,
        description: "Production-grade Kubernetes implementations for cloud-native applications.",
        color: "from-indigo-500/20 to-blue-500/10",
        accent: "text-indigo-400",
        route: "/services/kubernetes",
      },
      {
        id: "infrastructure-as-code",
        slug: "infrastructure-as-code",
        title: "Infrastructure as Code",
        subtitle: "Automated provisioning",
        icon: FileCode,
        description: "Terraform, CloudFormation, and Pulumi for automated infrastructure management.",
        color: "from-purple-500/20 to-pink-500/10",
        accent: "text-purple-400",
        route: "/services/infrastructure-as-code",
      },
      {
        id: "migration-modernization",
        slug: "migration-modernization",
        title: "Migration & Modernization",
        subtitle: "Cloud migration",
        icon: Rocket,
        description: "Seamless cloud migration and application modernization with zero downtime.",
        color: "from-violet-500/20 to-purple-500/10",
        accent: "text-violet-400",
        route: "/services/migration-modernization",
      },
    ],
  },
  {
    id: "devops-platformops-automation",
    slug: "devops-platformops-automation",
    title: "DevOps, Platform Ops & Automation",
    subtitle: "Speed, reliability & automation",
    icon: Workflow,
    description: "Accelerate delivery with DevOps, AI-powered automation, and secure software supply chain practices.",
    color: "from-violet-500/20 to-purple-500/10",
    accent: "text-violet-400",
    route: "/services/devops-platformops-automation",
    featuredOnHomepage: true,
    relatedProducts: ['xops360'],
    subServices: [
      {
        id: "devops-services",
        slug: "devops-services",
        title: "DevOps Services",
        subtitle: "CI/CD & automation",
        icon: Workflow,
        description: "Accelerate software delivery with world-class DevOps practices.",
        color: "from-blue-500/20 to-cyan-500/10",
        accent: "text-blue-400",
        route: "/services/devops-services",
      },
      {
        id: "ai-automation",
        slug: "ai-automation",
        title: "AI & Cloud DevOps",
        subtitle: "Intelligent operations",
        icon: Brain,
        description: "AI-driven automation for DevOps, SRE, and cloud operations.",
        color: "from-violet-500/20 to-purple-500/10",
        accent: "text-violet-400",
        route: "/services/ai-automation",
      },
      {
        id: "software-supply-chain-security",
        slug: "software-supply-chain-security",
        title: "Software Supply Chain Security",
        subtitle: "DevSecOps",
        icon: PackageCheck,
        description: "Secure your software supply chain with SAST, SCA, and IaC security.",
        color: "from-purple-500/20 to-violet-500/10",
        accent: "text-purple-400",
        route: "/services/software-supply-chain-security",
      },
    ],
  },
  {
    id: "cloud-security-zerotrust",
    slug: "cloud-security-zerotrust",
    title: "Cloud Security & Zero Trust",
    subtitle: "Preventive security architecture",
    icon: Shield,
    description: "Comprehensive cloud security with zero trust architecture, CSPM, CWPP, and advanced threat protection.",
    color: "from-red-500/20 to-orange-500/10",
    accent: "text-red-400",
    route: "/services/cloud-security-zerotrust",
    featuredOnHomepage: true,
    relatedProducts: ['xerotrust'],
    subServices: [
      {
        id: "cybersecurity",
        slug: "cybersecurity",
        title: "Cyber Security",
        subtitle: "Enterprise protection",
        icon: Shield,
        description: "Comprehensive cybersecurity with AI-driven threat detection.",
        color: "from-red-500/20 to-orange-500/10",
        accent: "text-red-400",
        route: "/services/cybersecurity",
      },
      {
        id: "cloud-security",
        slug: "cloud-security",
        title: "Cloud Security",
        subtitle: "CSPM/CWPP",
        icon: Cloud,
        description: "Secure cloud environments with posture management.",
        color: "from-sky-500/20 to-blue-500/10",
        accent: "text-sky-400",
        route: "/services/cloud-security",
      },
      {
        id: "zero-trust-security",
        slug: "zero-trust-security",
        title: "Zero Trust Security",
        subtitle: "Never trust, always verify",
        icon: Lock,
        description: "Implement zero trust architecture with identity-centric security.",
        color: "from-slate-500/20 to-gray-500/10",
        accent: "text-slate-400",
        route: "/services/zero-trust-security",
      },
    ],
  },
  {
    id: "threat-detection-vulnerability-response",
    slug: "threat-detection-vulnerability-response",
    title: "Threat Detection, Vulnerability & Response",
    subtitle: "Detect, respond, recover",
    icon: AlertTriangle,
    description: "Proactive threat detection, vulnerability management, and rapid incident response to protect against attacks.",
    color: "from-amber-500/20 to-orange-500/10",
    accent: "text-amber-400",
    route: "/services/threat-detection-vulnerability-response",
    subServices: [
      {
        id: "vulnerability-management",
        slug: "vulnerability-management",
        title: "Vulnerability Management",
        subtitle: "VAPT & security testing",
        icon: Eye,
        description: "Continuous vulnerability assessment and penetration testing.",
        color: "from-orange-500/20 to-red-500/10",
        accent: "text-orange-400",
        route: "/services/vulnerability-management",
      },
      {
        id: "threat-detection-ransomware",
        slug: "threat-detection-ransomware",
        title: "Threat Detection & Ransomware",
        subtitle: "Advanced protection",
        icon: AlertTriangle,
        description: "Real-time threat detection and ransomware protection with AI.",
        color: "from-yellow-500/20 to-amber-500/10",
        accent: "text-yellow-400",
        route: "/services/threat-detection-ransomware",
      },
    ],
  },
  {
    id: "observability-reliability-engineering",
    slug: "observability-reliability-engineering",
    title: "Observability & Reliability Engineering",
    subtitle: "Visibility, performance & uptime",
    icon: Monitor,
    description: "Comprehensive observability and reliability engineering for visibility, performance optimization, and 99.99% uptime.",
    color: "from-cyan-500/20 to-blue-500/10",
    accent: "text-cyan-400",
    route: "/services/observability-reliability-engineering",
    relatedProducts: ['xops360'],
    subServices: [
      {
        id: "observability-monitoring",
        slug: "observability-monitoring",
        title: "Observability & Monitoring",
        subtitle: "Full-stack visibility",
        icon: Monitor,
        description: "Complete observability with APM, infrastructure monitoring, and log analytics.",
        color: "from-blue-500/20 to-cyan-500/10",
        accent: "text-blue-400",
        route: "/services/observability-monitoring",
      },
    ],
  },
  {
    id: "finops-cost-value-optimization",
    slug: "finops-cost-value-optimization",
    title: "FinOps, Cost & Value Optimization",
    subtitle: "Financial efficiency & ROI",
    icon: DollarSign,
    description: "Maximize cloud ROI with FinOps practices, cost visibility, and continuous optimization.",
    color: "from-green-500/20 to-emerald-500/10",
    accent: "text-green-400",
    route: "/services/finops-cost-value-optimization",
    relatedProducts: ['xops360'],
    subServices: [
      {
        id: "cloud-finops",
        slug: "cloud-finops",
        title: "Cloud FinOps",
        subtitle: "Cost optimization",
        icon: BarChart3,
        description: "Maximize cloud ROI with comprehensive cost visibility and optimization.",
        color: "from-green-500/20 to-emerald-500/10",
        accent: "text-green-400",
        route: "/services/cloud-finops",
      },
    ],
  },
  {
    id: "business-continuity-digital-workplace",
    slug: "business-continuity-digital-workplace",
    title: "Business Continuity & Digital Workplace",
    subtitle: "Workforce enablement & resilience",
    icon: HardDrive,
    description: "Ensure business resilience with disaster recovery, business continuity planning, and modern digital workplace solutions.",
    color: "from-indigo-500/20 to-purple-500/10",
    accent: "text-indigo-400",
    route: "/services/business-continuity-digital-workplace",
    subServices: [
      {
        id: "business-continuity",
        slug: "business-continuity",
        title: "Business Continuity",
        subtitle: "DR & resilience",
        icon: RefreshCw,
        description: "Comprehensive disaster recovery and business continuity planning.",
        color: "from-emerald-500/20 to-green-500/10",
        accent: "text-emerald-400",
        route: "/services/business-continuity",
      },
      {
        id: "digital-workspace",
        slug: "digital-workspace",
        title: "Digital Workspace",
        subtitle: "Modern workplace",
        icon: Wifi,
        description: "Enable secure, productive remote work with modern digital workspace solutions.",
        color: "from-sky-500/20 to-cyan-500/10",
        accent: "text-sky-400",
        route: "/services/digital-workspace",
      },
    ],
  },
];

export const PRODUCTS = {
  xops360: {
    id: "xops360",
    name: "Xops360",
    tagline: "Unified CloudOps Platform",
    description: "AI-powered platform unifying FinOps, SecOps, CloudOps, and DevOps in a single pane of glass.",
    icon: Activity,
    route: "/xops360",
    color: "from-primary/20 to-blue-500/10",
    accent: "text-primary",
    stats: [
      { value: "70%", label: "Cost Reduction" },
      { value: "10x", label: "Faster Deployments" },
      { value: "99.9%", label: "Uptime SLA" },
    ],
  },
  xerotrust: {
    id: "xerotrust",
    name: "XeroTrust",
    tagline: "Zero Trust Security",
    description: "Identity-centric zero trust security platform with continuous verification and adaptive access control.",
    icon: ShieldCheck,
    route: "/xerotrust",
    color: "from-secondary/20 to-purple-500/10",
    accent: "text-secondary",
    stats: [
      { value: "100%", label: "Identity Verified" },
      { value: "<10ms", label: "Policy Decision" },
      { value: "Zero", label: "Implicit Trust" },
    ],
  },
};

// Helper to get all sub-services as a flat array
export const getAllSubServices = (): SubService[] => {
  return SERVICE_CATEGORIES.flatMap(category => category.subServices);
};

// Helper to get featured services for homepage
export const getFeaturedServices = (): ServiceCategory[] => {
  return SERVICE_CATEGORIES.filter(category => category.featuredOnHomepage);
};

// Helper to get a service category by slug
export const getServiceCategoryBySlug = (slug: string): ServiceCategory | undefined => {
  return SERVICE_CATEGORIES.find(category => category.slug === slug);
};

// Helper to get a sub-service by slug
export const getSubServiceBySlug = (slug: string): SubService | undefined => {
  const allSubServices = getAllSubServices();
  return allSubServices.find(service => service.slug === slug);
};

// Helper to get parent category for a sub-service
export const getParentCategory = (subServiceSlug: string): ServiceCategory | undefined => {
  return SERVICE_CATEGORIES.find(category =>
    category.subServices.some(sub => sub.slug === subServiceSlug)
  );
};
