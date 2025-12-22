import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle, Brain, Bot, Sparkles, Eye, MessageSquare, Cog, Network, LineChart, FileSearch } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GridBackground } from "@/components/GridBackground";
import { SectionHeader } from "@/components/SectionHeader";
import { SEOHead } from "@/components/SEOHead";
import { createBreadcrumbSchema, aiAutomationSchema, organizationSchema } from "@/lib/seo-schemas";

const offerings = [
  {
    icon: LineChart,
    title: "AI Strategy & Roadmapping",
    description: "Define comprehensive AI strategies aligned with business objectives, including use case prioritization, capability building, and governance frameworks.",
  },
  {
    icon: Brain,
    title: "Machine Learning Solutions",
    description: "Design and deploy production ML systems for prediction, classification, recommendation, and optimization across enterprise use cases.",
  },
  {
    icon: Bot,
    title: "Intelligent Process Automation",
    description: "Combine RPA, ML, and natural language processing to automate complex workflows that require judgment and adaptation.",
  },
  {
    icon: MessageSquare,
    title: "Conversational AI",
    description: "Build sophisticated chatbots and virtual assistants that understand context, handle complexity, and deliver genuine value.",
  },
  {
    icon: Eye,
    title: "Computer Vision",
    description: "Implement visual AI for quality inspection, document processing, surveillance, and augmented reality applications.",
  },
  {
    icon: FileSearch,
    title: "Document Intelligence",
    description: "Extract, classify, and process unstructured documents at scale with high accuracy and continuous learning.",
  },
];

const capabilities = [
  {
    title: "Foundation Models",
    items: ["GPT integration", "Claude deployment", "Fine-tuning", "RAG systems", "Prompt engineering"],
  },
  {
    title: "ML Engineering",
    items: ["Model development", "Feature engineering", "Training pipelines", "Model serving", "A/B testing"],
  },
  {
    title: "DevSecOps",
    items: ["SAST (Static Analysis)", "SCA (Software Composition)", "Security Pipelines", "Vulnerability Scanning", "Compliance as Code"],
  },
  {
    title: "Data Infrastructure",
    items: ["Feature stores", "Data pipelines", "Vector databases", "Data labeling", "Quality frameworks"],
  },
];

const useCases = [
  {
    industry: "Insurance",
    challenge: "A major insurer needed to automate claims processing for 10M+ annual claims while maintaining accuracy and compliance.",
    outcome: "Deployed document AI system achieving 94% straight-through processing, reducing average claim cycle from 14 days to 4 hours.",
  },
  {
    industry: "E-commerce",
    challenge: "A leading marketplace sought to personalize product recommendations across 50M+ SKUs for 200M+ active users.",
    outcome: "Implemented real-time recommendation engine that increased conversion by 34% and average order value by 28%.",
  },
  {
    industry: "Energy",
    challenge: "Utility company required predictive maintenance for 15,000+ assets across transmission and distribution network.",
    outcome: "Built ML platform predicting failures 6 weeks in advance with 92% accuracy, preventing $180M in potential outage costs.",
  },
];

const process = [
  {
    phase: "Assess",
    description: "Evaluate AI readiness, identify high-value use cases, and assess data and infrastructure requirements.",
  },
  {
    phase: "Design",
    description: "Architect solutions with appropriate algorithms, infrastructure, and integration patterns for production deployment.",
  },
  {
    phase: "Build",
    description: "Develop and train models with rigorous experimentation, validation, and performance optimization.",
  },
  {
    phase: "Deploy",
    description: "Implement production-ready solutions with monitoring, scaling, and continuous improvement capabilities.",
  },
  {
    phase: "Operate",
    description: "Maintain model performance, retrain on new data, and evolve capabilities based on business feedback.",
  },
];

const breadcrumbSchema = createBreadcrumbSchema([
  { name: "Home", url: "https://axiomio.com/" },
  { name: "Services", url: "https://axiomio.com/services" },
  { name: "AI & Automation", url: "https://axiomio.com/services/ai-automation" },
]);

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [breadcrumbSchema, aiAutomationSchema, organizationSchema],
};

export default function AIAutomation() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <SEOHead
        title="AI & Automation Services | Machine Learning & MLOps | Axiomio"
        description="Enterprise AI implementation, machine learning solutions, intelligent process automation, and MLOps consulting. Deploy AI that delivers measurable ROI for Fortune 500 companies."
        keywords="AI consulting, machine learning consulting, MLOps, intelligent automation, RPA, conversational AI, computer vision, document AI, AI strategy, enterprise AI, GPT integration, LLM deployment"
        canonicalUrl="https://axiomio.com/services/ai-automation"
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
              <Brain className="h-10 w-10" />
            </motion.div>
            
            <motion.h1 
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              AI &{" "}
              <span className="text-gradient">Automation</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Deploy intelligent automation solutions that enhance decision-making, 
              streamline operations, and unlock capabilities previously impossible.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Explore AI Opportunities
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
                title="AI that delivers real value"
                align="left"
              />
              <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Artificial intelligence has moved from experimental curiosity to strategic 
                  imperative. Our AI & Automation practice helps organizations move beyond 
                  pilots to deploy AI that delivers measurable business value at enterprise scale.
                </p>
                <p>
                  We take a pragmatic approach: identifying high-value use cases, building 
                  production-ready solutions, and establishing the governance and capabilities 
                  needed for long-term success. Not every problem needs AI—but where it can 
                  create value, we know how to make it work.
                </p>
                <p>
                  From foundation model integration to custom ML development, from intelligent 
                  automation to computer vision, we bring the expertise to turn AI potential 
                  into operational reality.
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
                AI Maturity Stages
              </h3>
              <div className="space-y-6">
                {[
                  { stage: "Exploring", desc: "Evaluating AI potential and identifying initial use cases" },
                  { stage: "Piloting", desc: "Running proof-of-concepts and validating technical feasibility" },
                  { stage: "Scaling", desc: "Moving successful pilots to production deployment" },
                  { stage: "Optimizing", desc: "Maximizing value from deployed AI and expanding capabilities" },
                ].map((item, index) => (
                  <motion.div
                    key={item.stage}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/20 text-primary text-sm font-bold flex items-center justify-center flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{item.stage}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
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
              title="AI solutions that work in production"
              description="End-to-end capabilities for enterprise AI, from strategy through deployment and ongoing optimization."
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
              title="From concept to production AI"
              description="A proven methodology for deploying AI that delivers sustainable business value."
            />
          </motion.div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
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
      </section>

      {/* Capabilities Grid */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SectionHeader
              label="Technical Capabilities"
              title="Full-stack AI expertise"
            />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {capabilities.map((cap, index) => (
              <motion.div
                key={cap.title}
                className="glass-card rounded-2xl p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h4 className="font-heading font-semibold text-primary mb-4">
                  {cap.title}
                </h4>
                <ul className="space-y-2">
                  {cap.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Sparkles className="w-3 h-3 text-primary/50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-card/50 to-background">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SectionHeader
              label="Impact"
              title="AI at enterprise scale"
              description="Real-world implementations driving measurable business outcomes."
            />
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.industry}
                className="glass-card rounded-2xl p-8"
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
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to unlock AI value?
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Let's identify high-impact opportunities and build AI solutions 
              that deliver real results for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Start AI Assessment
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