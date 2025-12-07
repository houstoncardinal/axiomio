import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle, Target, TrendingUp, Users, Lightbulb, BarChart3, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GridBackground } from "@/components/GridBackground";
import { SectionHeader } from "@/components/SectionHeader";
import { SEOHead } from "@/components/SEOHead";
import { createBreadcrumbSchema, strategyAdvisorySchema, organizationSchema } from "@/lib/seo-schemas";

const offerings = [
  {
    icon: Compass,
    title: "Strategic Roadmap Development",
    description: "Define multi-year strategic plans with clear milestones, resource requirements, and success metrics that align executive vision with operational reality.",
  },
  {
    icon: BarChart3,
    title: "Market & Competitive Analysis",
    description: "Deep analysis of market dynamics, competitive positioning, and emerging opportunities to inform strategic decision-making with actionable intelligence.",
  },
  {
    icon: Users,
    title: "Organizational Design",
    description: "Structure teams, governance, and operating models to optimize for strategic objectives while building adaptability for future needs.",
  },
  {
    icon: Target,
    title: "Executive Decision Support",
    description: "Provide C-suite leaders with rigorous analysis, scenario planning, and recommendation frameworks for high-stakes decisions.",
  },
  {
    icon: TrendingUp,
    title: "Investment Thesis Development",
    description: "Build compelling investment narratives backed by data-driven market sizing, competitive moats, and growth projections.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Strategy",
    description: "Identify and prioritize innovation opportunities that align with core competencies while expanding strategic optionality.",
  },
];

const process = [
  {
    phase: "Alignment",
    description: "We begin with executive alignment sessions to understand strategic intent, constraints, and success criteria across stakeholder groups.",
  },
  {
    phase: "Discovery",
    description: "Deep dive into market dynamics, competitive landscape, internal capabilities, and organizational readiness through structured research.",
  },
  {
    phase: "Analysis",
    description: "Synthesize findings into strategic frameworks, identify option spaces, and model scenarios with quantified trade-offs.",
  },
  {
    phase: "Recommendation",
    description: "Present clear, actionable recommendations with implementation roadmaps, resource requirements, and risk mitigation strategies.",
  },
  {
    phase: "Activation",
    description: "Support strategy activation through change management, communication planning, and ongoing advisory as execution unfolds.",
  },
];

const useCases = [
  {
    industry: "Financial Services",
    challenge: "A leading asset manager needed to redefine its digital strategy amid rapid market disruption and changing client expectations.",
    outcome: "Delivered a 3-year transformation roadmap that increased digital AUM by 340% and reduced client acquisition costs by 45%.",
  },
  {
    industry: "Healthcare",
    challenge: "A regional health system sought to optimize its care delivery model while preparing for value-based care transitions.",
    outcome: "Designed new operating model that improved patient outcomes by 28% while generating $120M in annual efficiency gains.",
  },
  {
    industry: "Technology",
    challenge: "A growth-stage SaaS company needed strategic clarity on market expansion and product portfolio prioritization.",
    outcome: "Developed market entry strategy that captured 15% market share in new segment within 18 months of launch.",
  },
];

const breadcrumbSchema = createBreadcrumbSchema([
  { name: "Home", url: "https://axiomio.com/" },
  { name: "Services", url: "https://axiomio.com/services" },
  { name: "Strategy & Advisory", url: "https://axiomio.com/services/strategy-advisory" },
]);

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [breadcrumbSchema, strategyAdvisorySchema, organizationSchema],
};

export default function StrategyAdvisory() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <SEOHead
        title="Strategy & Advisory Services | Executive Consulting | Axiomio"
        description="Executive-level strategic guidance for Fortune 500 companies. Strategic roadmap development, M&A due diligence, organizational design, and investment thesis development. Outperform Deloitte and McKinsey."
        keywords="strategy consulting, executive advisory, strategic planning, M&A consulting, organizational design, investment thesis, competitive analysis, business strategy, management consulting, enterprise strategy"
        canonicalUrl="https://axiomio.com/services/strategy-advisory"
        structuredData={pageSchema}
      />
      <Navbar />
      
      {/* Hero Section */}
      <header className="relative pt-32 pb-24 lg:pt-40 lg:pb-32" role="banner">
        <GridBackground />
        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              to="/services" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Services
            </Link>
          </motion.div>
          
          <motion.div 
            className="max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="inline-flex p-4 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary border border-primary/20 mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Target className="h-10 w-10" />
            </motion.div>
            
            <motion.h1 
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              Strategy &{" "}
              <span className="text-gradient">Advisory</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Executive-level strategic guidance that transforms vision into measurable outcomes 
              through systematic analysis, proven methodologies, and deep industry expertise.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Schedule a Strategy Session
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* Overview Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-card/50 to-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <SectionHeader
                label="Overview"
                title="Strategic clarity in complex environments"
                align="left"
              />
              <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  In an era of unprecedented disruption, strategic clarity is the ultimate competitive 
                  advantage. Our Strategy & Advisory practice helps leaders navigate complexity, 
                  make high-stakes decisions with confidence, and build organizations capable of 
                  sustained excellence.
                </p>
                <p>
                  We bring a unique combination of rigorous analytical frameworks, deep industry 
                  expertise, and practical implementation experience. Our approach is built on the 
                  belief that strategy without execution is merely aspiration—and execution without 
                  strategy is simply motion.
                </p>
                <p>
                  Whether you're defining a multi-year transformation agenda, evaluating strategic 
                  options, or navigating a critical inflection point, we provide the thinking 
                  partnership and intellectual horsepower that consequential decisions demand.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="glass-card rounded-2xl p-8 lg:p-10"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
                Who We Serve
              </h3>
              <ul className="space-y-4">
                {[
                  "CEOs and executive leadership teams",
                  "Corporate development and M&A teams",
                  "Private equity portfolio companies",
                  "Board of directors and advisory boards",
                  "Founders scaling to enterprise stage",
                  "Transformation and strategy offices",
                ].map((item, index) => (
                  <motion.li 
                    key={item}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SectionHeader
              label="Offerings"
              title="Strategic capabilities that drive results"
              description="Our strategy practice delivers comprehensive advisory services designed to address the most critical challenges facing enterprise leaders."
            />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {offerings.map((offering, index) => (
              <motion.div
                key={offering.title}
                className="glass-card rounded-2xl p-8 group hover:shadow-glow transition-all duration-500"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit mb-6 group-hover:bg-primary/20 transition-colors">
                  <offering.icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {offering.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {offering.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-card/50 to-background">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SectionHeader
              label="Our Process"
              title="How we deliver strategic value"
              description="A proven engagement model that combines analytical rigor with practical wisdom."
            />
          </motion.div>
          
          <div className="mt-16 relative">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {process.map((step, index) => (
                <motion.div
                  key={step.phase}
                  className="relative glass-card rounded-2xl p-6 text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/20 text-primary font-heading font-bold text-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {index + 1}
                  </div>
                  <h4 className="font-heading font-semibold text-foreground mb-2">
                    {step.phase}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SectionHeader
              label="Impact"
              title="Real outcomes for leading organizations"
              description="Selected examples of how our strategic advisory has driven measurable value."
            />
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.industry}
                className="glass-card rounded-2xl p-8 group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="text-sm font-medium text-primary uppercase tracking-wider">
                  {useCase.industry}
                </span>
                <h4 className="font-heading text-lg font-semibold text-foreground mt-3 mb-4">
                  {useCase.challenge}
                </h4>
                <div className="pt-4 border-t border-border">
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Outcome
                  </span>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                    {useCase.outcome}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-card/50 to-background">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to define your strategic direction?
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Let's discuss your strategic challenges and explore how we can help 
              you build clarity, confidence, and competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/approach">
                  See Our Approach
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}