import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle, Zap, Users, RefreshCw, Target, Rocket, BarChart, Puzzle, Lightbulb, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GridBackground } from "@/components/GridBackground";
import { SectionHeader } from "@/components/SectionHeader";

const offerings = [
  {
    icon: Target,
    title: "Transformation Strategy",
    description: "Define comprehensive transformation vision, roadmap, and business case with clear milestones and value realization timelines.",
  },
  {
    icon: Users,
    title: "Change Management",
    description: "Drive adoption through stakeholder engagement, communication strategies, and behavioral change programs that stick.",
  },
  {
    icon: RefreshCw,
    title: "Process Redesign",
    description: "Reimagine end-to-end processes for efficiency, automation-readiness, and improved customer and employee experience.",
  },
  {
    icon: Rocket,
    title: "Technology Adoption",
    description: "Accelerate technology deployment with structured rollout, training, and support programs that maximize utilization.",
  },
  {
    icon: GraduationCap,
    title: "Capability Building",
    description: "Develop internal skills and competencies to sustain transformation momentum and enable continuous improvement.",
  },
  {
    icon: BarChart,
    title: "Performance Management",
    description: "Establish metrics, dashboards, and governance to track progress, identify issues, and celebrate wins.",
  },
];

const pillars = [
  {
    title: "Strategy",
    description: "Clear vision, compelling business case, and realistic roadmap",
    items: ["Vision articulation", "Business case development", "Roadmap design", "Risk assessment"],
  },
  {
    title: "Technology",
    description: "Right solutions, properly implemented and integrated",
    items: ["Platform selection", "Architecture design", "Implementation support", "Integration planning"],
  },
  {
    title: "Process",
    description: "Optimized workflows that leverage new capabilities",
    items: ["Process mapping", "Redesign workshops", "Automation opportunities", "Quality standards"],
  },
  {
    title: "People",
    description: "Engaged workforce with skills to succeed",
    items: ["Change impact assessment", "Training programs", "Communication strategy", "Resistance management"],
  },
];

const useCases = [
  {
    industry: "Banking",
    challenge: "A top-10 bank embarked on enterprise-wide digital transformation affecting 45,000 employees across 3,000 branches.",
    outcome: "Achieved 85% adoption rate within 12 months, $400M in efficiency gains, and NPS improvement from 32 to 67.",
  },
  {
    industry: "Healthcare",
    challenge: "Hospital network needed to implement new EHR system across 25 facilities with minimal disruption to patient care.",
    outcome: "Completed migration in 8 months with zero patient safety incidents and 40% reduction in documentation time.",
  },
  {
    industry: "Consumer Goods",
    challenge: "CPG company required complete supply chain digitization to improve visibility and responsiveness.",
    outcome: "Reduced inventory costs by 23%, improved forecast accuracy by 45%, and decreased time-to-market by 60%.",
  },
];

const phases = [
  {
    number: "01",
    title: "Envision",
    description: "Define transformation vision, assess current state, and build compelling case for change.",
  },
  {
    number: "02",
    title: "Design",
    description: "Architect target operating model, technology solutions, and organizational changes.",
  },
  {
    number: "03",
    title: "Mobilize",
    description: "Establish governance, build teams, and prepare organization for transformation journey.",
  },
  {
    number: "04",
    title: "Execute",
    description: "Implement changes in structured waves with continuous feedback and course correction.",
  },
  {
    number: "05",
    title: "Sustain",
    description: "Embed new ways of working, build internal capabilities, and transition to BAU operations.",
  },
];

export default function DigitalTransformation() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32">
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
              <Zap className="h-10 w-10" />
            </motion.div>
            
            <motion.h1 
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              Digital{" "}
              <span className="text-gradient">Transformation</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Navigate complex organizational change with frameworks that ensure adoption, 
              minimize disruption, and deliver sustainable value creation.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Plan Your Transformation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

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
                title="Transformation that creates lasting value"
                align="left"
              />
              <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Digital transformation is not about technology—it's about fundamentally 
                  reimagining how organizations create value. Our practice helps enterprises 
                  navigate this journey with the strategic vision, operational discipline, 
                  and change leadership that complex transformations demand.
                </p>
                <p>
                  We've seen too many transformations fail not because of technical issues, 
                  but because of organizational ones: unclear vision, change resistance, 
                  inadequate capability building, or loss of momentum. Our approach addresses 
                  these challenges head-on with proven methodologies and deep experience.
                </p>
                <p>
                  Whether you're digitizing operations, reimagining customer experience, or 
                  building entirely new business models, we provide the thinking partnership 
                  and execution support to turn ambitious vision into operational reality.
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
                Transformation Success Factors
              </h3>
              <ul className="space-y-4">
                {[
                  "Clear, compelling vision that inspires action",
                  "Executive sponsorship and visible commitment",
                  "Dedicated resources and realistic timelines",
                  "Structured change management from day one",
                  "Quick wins to build momentum and credibility",
                  "Capability building for long-term sustainability",
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
              title="Comprehensive transformation capabilities"
              description="End-to-end services that address every dimension of successful digital transformation."
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

      {/* Four Pillars Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-card/50 to-background">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SectionHeader
              label="Framework"
              title="Four pillars of transformation"
              description="A holistic approach that addresses every dimension of organizational change."
            />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                className="glass-card rounded-2xl p-6 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h4 className="font-heading text-xl font-bold text-primary mb-2">
                  {pillar.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  {pillar.description}
                </p>
                <ul className="space-y-2">
                  {pillar.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SectionHeader
              label="Journey"
              title="The transformation lifecycle"
              description="A phased approach that builds momentum while managing risk."
            />
          </motion.div>
          
          <div className="mt-16 space-y-6">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.number}
                className="glass-card rounded-2xl p-6 lg:p-8 flex flex-col lg:flex-row gap-6 items-start lg:items-center group hover:shadow-glow transition-all duration-500"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="text-5xl font-heading font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                  {phase.number}
                </span>
                <div>
                  <h4 className="font-heading text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {phase.title}
                  </h4>
                  <p className="text-muted-foreground">
                    {phase.description}
                  </p>
                </div>
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
              title="Transformations that delivered"
              description="How we've helped organizations navigate complex change."
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
              Ready to transform?
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Let's discuss your transformation ambitions and build a roadmap 
              to make them reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Start Transformation Discussion
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
    </div>
  );
}