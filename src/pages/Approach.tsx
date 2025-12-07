import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GridBackground } from "@/components/GridBackground";
import { SectionHeader } from "@/components/SectionHeader";

const phases = [
  {
    number: "01",
    title: "Discover",
    subtitle: "Deep understanding before action",
    description: "We begin every engagement by immersing ourselves in your context—your business model, competitive landscape, organizational dynamics, and strategic objectives.",
    details: [
      "Stakeholder interviews and alignment",
      "Current state assessment",
      "Market landscape review",
      "Opportunity identification",
    ],
  },
  {
    number: "02",
    title: "Define",
    subtitle: "Clarity through rigorous framing",
    description: "With deep understanding established, we articulate the problem space with precision and develop strategic options that represent genuine alternatives.",
    details: [
      "Problem statement and scope",
      "Success metrics framework",
      "Strategic option development",
      "Business case modeling",
    ],
  },
  {
    number: "03",
    title: "Design",
    subtitle: "Architecture for durability",
    description: "We design solutions that address immediate needs while building for long-term adaptability, producing detailed blueprints that consider all implementation realities.",
    details: [
      "Solution architecture",
      "Implementation roadmap",
      "Resource planning",
      "Risk mitigation strategies",
    ],
  },
  {
    number: "04",
    title: "Deliver",
    subtitle: "Execution with discipline",
    description: "Implementation is where plans meet reality. We execute with the rigor and adaptability that complex programs demand.",
    details: [
      "Agile delivery management",
      "Quality assurance",
      "Stakeholder communication",
      "Issue resolution",
    ],
  },
  {
    number: "05",
    title: "Develop",
    subtitle: "Building lasting capability",
    description: "The ultimate measure of success is whether your organization emerges stronger. We focus on building internal capabilities that endure.",
    details: [
      "Team enablement",
      "Operational handoff",
      "Performance optimization",
      "Long-term partnership",
    ],
  },
];

export default function Approach() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32">
        <GridBackground />
        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span 
              className="inline-flex items-center gap-2 text-sm font-medium text-primary uppercase tracking-wider mb-6 px-4 py-2 rounded-full border border-primary/20 bg-primary/5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Our Approach
            </motion.span>
            
            <motion.h1 
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Methodology built on{" "}
              <span className="text-gradient">deliberate precision</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Our approach reflects a belief that the best outcomes emerge from 
              rigorous understanding, careful design, and disciplined execution.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
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
                label="Philosophy"
                title="Why process matters"
                align="left"
              />
              <div className="mt-8 space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  In complex environments, the quality of outcomes is directly tied to 
                  the quality of the process that produces them. We've developed our 
                  methodology through years of high-stakes engagements.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The result is an approach that's structured enough to ensure 
                  consistency and rigor, yet flexible enough to adapt to the unique 
                  realities of each engagement.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="glass-card rounded-2xl p-8 lg:p-12"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-8">
                Core Principles
              </h3>
              <div className="space-y-6">
                {[
                  { title: "Understanding First", desc: "We invest significant effort upfront to understand your context deeply." },
                  { title: "Honest Assessment", desc: "We tell you what you need to hear, not what's comfortable." },
                  { title: "Adaptive Execution", desc: "Plans are starting points. We maintain discipline while adapting." },
                  { title: "Lasting Value", desc: "Our goal is to leave you stronger than we found you." },
                ].map((item, index) => (
                  <motion.div 
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="font-heading font-semibold text-primary mb-2">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Phases Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SectionHeader
              label="The Process"
              title="Five phases of deliberate transformation"
              description="Each phase builds on the previous, creating a cumulative foundation for sustainable success."
            />
          </motion.div>
          
          <div className="mt-16 space-y-8">
            {phases.map((phase, index) => (
              <motion.div 
                key={phase.number}
                className="glass-card rounded-2xl p-8 lg:p-12 transition-all duration-500 hover:shadow-glow group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="grid lg:grid-cols-4 gap-8">
                  <div className="lg:col-span-1">
                    <span className="text-6xl font-heading font-bold text-primary/20 group-hover:text-primary/40 transition-colors duration-300">
                      {phase.number}
                    </span>
                    <h3 className="font-heading text-2xl font-bold text-foreground mt-2 group-hover:text-primary transition-colors duration-300">
                      {phase.title}
                    </h3>
                    <p className="text-primary mt-1">
                      {phase.subtitle}
                    </p>
                  </div>
                  
                  <div className="lg:col-span-3">
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {phase.description}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {phase.details.map((detail) => (
                        <div 
                          key={detail}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
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
              See our approach in action
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Every engagement is unique, but the discipline is consistent. 
              Let's discuss how this methodology would apply to your specific situation.
            </p>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Start the Conversation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}