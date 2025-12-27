import { motion } from "framer-motion";
import { ArrowRight, Target, LineChart, Zap, TrendingUp, CheckCircle2, Compass, Users, BarChart3, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GridBackground } from "@/components/GridBackground";
import { SectionHeader } from "@/components/SectionHeader";
import { SEOHead } from "@/components/SEOHead";
import { MagneticButton } from "@/components/MagneticButton";
import { createBreadcrumbSchema, organizationSchema } from "@/lib/seo-schemas";

const breadcrumbSchema = createBreadcrumbSchema([
  { name: "Home", url: "https://axiomio.com/" },
  { name: "Services", url: "https://axiomio.com/services" },
  { name: "Strategy, Transformation & Advisory", url: "https://axiomio.com/services/strategy-transformation-advisory" },
]);

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://axiomio.com/services/strategy-transformation-advisory/#service",
  "name": "Strategy, Transformation & Advisory",
  "serviceType": "Strategic Consulting and Digital Transformation",
  "description": "Navigate uncertainty with strategic roadmaps, organizational design, and change management that ensures lasting transformation. Executive alignment and operating model design for enterprise success.",
  "url": "https://axiomio.com/services/strategy-transformation-advisory",
  "provider": { "@id": "https://axiomio.com/#organization" },
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Strategy and Transformation Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Strategy & Advisory" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Digital Transformation" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ops Excellence" } }
    ]
  }
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [breadcrumbSchema, serviceSchema, organizationSchema]
};

const subServices = [
  {
    id: "strategy-advisory",
    title: "Strategy & Advisory",
    subtitle: "Executive Guidance",
    icon: LineChart,
    color: "from-blue-500 to-indigo-400",
    description: "Navigate uncertainty with deep analysis and industry insight. Strategic roadmaps, competitive analysis, and executive decision support.",
    capabilities: [
      "Strategic roadmap development",
      "Market & competitive analysis",
      "Organizational design & governance",
      "Executive decision support",
      "Investment thesis development",
      "Innovation strategy",
    ],
    metrics: [
      { value: "3-5Y", label: "Strategic Planning" },
      { value: "100%", label: "Executive Alignment" },
      { value: "2x", label: "Market Growth" },
    ],
    useCases: [
      "Multi-year strategic planning",
      "M&A strategy & due diligence",
      "Market expansion strategy",
      "Innovation roadmaps",
    ],
    route: "/services/strategy-advisory",
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation",
    subtitle: "Lasting Change",
    icon: Zap,
    color: "from-amber-500 to-orange-400",
    description: "Complex organizational change ensuring adoption. Process redesign, change management, and technology enablement for enterprise transformation.",
    capabilities: [
      "Business process redesign",
      "Change management & adoption",
      "Technology enablement",
      "Operating model transformation",
      "Digital maturity assessment",
      "Stakeholder alignment",
    ],
    metrics: [
      { value: "85%", label: "Adoption Rate" },
      { value: "60%", label: "Faster Processes" },
      { value: "90%", label: "User Satisfaction" },
    ],
    useCases: [
      "Enterprise-wide transformation",
      "Process automation",
      "Digital workplace rollout",
      "Cultural transformation",
    ],
    route: "/services/digital-transformation",
  },
  {
    id: "ops-excellence",
    title: "Ops Excellence",
    subtitle: "Unified Operations",
    icon: TrendingUp,
    color: "from-indigo-500 to-purple-400",
    description: "Integrated platform for FinOps, SecOps, CloudOps, and DevOps excellence. Unified operations framework with AI-powered optimization.",
    capabilities: [
      "Operational excellence framework",
      "FinOps cost optimization",
      "SecOps security operations",
      "CloudOps infrastructure management",
      "DevOps delivery acceleration",
      "Unified observability",
    ],
    metrics: [
      { value: "70%", label: "Cost Reduction" },
      { value: "99.9%", label: "Uptime SLA" },
      { value: "10x", label: "Faster Delivery" },
    ],
    useCases: [
      "Unified operations platform",
      "Multi-domain optimization",
      "Platform engineering",
      "SRE implementation",
    ],
    route: "/services/ops-excellence",
  },
];

const platformFeatures = [
  {
    icon: Compass,
    title: "Strategic Clarity",
    description: "Clear roadmaps that align executive vision with operational execution and measurable outcomes.",
  },
  {
    icon: Users,
    title: "Change Leadership",
    description: "Proven methodologies that ensure organizational adoption and cultural transformation.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Insights",
    description: "Analytics and intelligence that inform strategic decisions with actionable market intelligence.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Focus",
    description: "Identify and prioritize opportunities that align with core competencies and drive growth.",
  },
];

function SubServiceCard({ service, index }: { service: typeof subServices[0]; index: number }) {
  const Icon = service.icon;

  return (
    <motion.div
      id={service.id}
      className="scroll-mt-32"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="glass-card rounded-2xl p-8 lg:p-12 relative overflow-hidden group hover:border-primary/30 transition-all duration-500">
        <div
          className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${service.color} opacity-5 blur-3xl group-hover:opacity-10 transition-opacity duration-500`}
        />

        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-start gap-6 mb-8">
            <motion.div
              className={`p-4 rounded-xl bg-gradient-to-br ${service.color} text-white shadow-lg`}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Icon className="h-8 w-8" />
            </motion.div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                  {service.title}
                </h2>
                <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
                  {service.subtitle}
                </span>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-4">
                {service.description}
              </p>
              <Link
                to={service.route}
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                View Full {service.title} Details
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-8 p-6 bg-muted/30 rounded-xl border border-border/50">
            {service.metrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                  {metric.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{metric.label}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-heading font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-4">
                Core Capabilities
              </h4>
              <ul className="space-y-3">
                {service.capabilities.map((capability) => (
                  <li key={capability} className="flex items-center gap-3 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    {capability}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-4">
                Use Cases
              </h4>
              <ul className="space-y-3">
                {service.useCases.map((useCase) => (
                  <li key={useCase} className="flex items-center gap-3 text-muted-foreground">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`} />
                    {useCase}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function StrategyTransformationAdvisory() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <SEOHead
        title="Strategy, Transformation & Advisory | Executive Consulting | AXIOMIO"
        description="Navigate uncertainty with strategic roadmaps, organizational design, and change management. Executive alignment, digital transformation, and operational excellence consulting."
        keywords="strategy consulting, digital transformation, change management, organizational design, executive advisory, strategic planning, operational excellence, business transformation"
        canonicalUrl="https://axiomio.com/services/strategy-transformation-advisory"
        pageType="services"
        structuredData={pageSchema}
      />
      <Navbar />

      <header className="relative pt-32 pb-24 lg:pt-40 lg:pb-32" role="banner">
        <GridBackground />
        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <motion.div
            className="max-w-5xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 uppercase tracking-wider mb-6 px-4 py-2 rounded-xl border border-blue-400/20 bg-blue-500/5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" aria-hidden="true" />
              Strategy · Transformation · Advisory
            </motion.span>

            <motion.h1
              className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Transform your enterprise with{" "}
              <span className="text-gradient">strategic clarity</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Executive alignment, organizational design, and change management that ensures lasting
              transformation from strategy to execution.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-3 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {subServices.map((service) => {
                const Icon = service.icon;
                return (
                  <a
                    key={service.id}
                    href={`#${service.id}`}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${service.color} text-white font-medium text-sm hover:opacity-90 transition-opacity shadow-md`}
                  >
                    <Icon className="w-4 h-4" />
                    {service.title}
                  </a>
                );
              })}
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <MagneticButton>
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contact">
                    Request Executive Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button variant="hero-outline" size="xl" asChild>
                  <Link to="/approach">
                    See Our Approach
                  </Link>
                </Button>
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>
      </header>

      <section className="py-16 lg:py-20 bg-muted/20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platformFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="p-6 bg-background rounded-xl border border-border/50 hover:border-primary/30 transition-colors group"
              >
                <feature.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionHeader
            label="Strategic Services"
            title="From vision to execution with lasting impact"
            description="Integrated strategy, transformation, and advisory services that align leadership, organization, and operations."
          />

          <div className="mt-16 space-y-12">
            {subServices.map((service, index) => (
              <SubServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 text-sm font-medium text-primary uppercase tracking-wider mb-6">
              <Target className="w-4 h-4" />
              Strategic Partnership
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Your strategic partner for{" "}
              <span className="text-gradient">enterprise transformation</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              From boardroom strategy to operational execution, we ensure your transformation
              delivers measurable business outcomes and lasting organizational change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton>
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contact">
                    Schedule a Discovery Call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button variant="outline" size="xl" asChild>
                  <Link to="/case-studies">
                    View Success Stories
                  </Link>
                </Button>
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
