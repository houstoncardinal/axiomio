import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GridBackground } from "@/components/GridBackground";
import { SectionHeader } from "@/components/SectionHeader";
import { SEOHead } from "@/components/SEOHead";
import { aboutPageSchema } from "@/lib/seo-schemas-enhanced";

const values = [
  {
    title: "Clarity Over Complexity",
    description: "We distill complex challenges into actionable frameworks, ensuring every stakeholder understands the path forward.",
  },
  {
    title: "Systems Thinking",
    description: "We design solutions that consider interconnections, feedback loops, and long-term implications—not just immediate needs.",
  },
  {
    title: "Measured Execution",
    description: "Every initiative is grounded in metrics that matter, with clear accountability and transparent progress tracking.",
  },
  {
    title: "Enduring Partnerships",
    description: "We invest in relationships that span years, not projects—building trust through consistent delivery and genuine collaboration.",
  },
];

const principles = [
  "Start with understanding, not assumptions",
  "Build for scale from day one",
  "Transfer knowledge, not dependency",
  "Measure what matters, not what's easy",
  "Choose sustainable progress over quick wins",
  "Communicate with precision and transparency",
];

export default function About() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <SEOHead
        title="About Axiomio | Enterprise Technology & Strategy Consulting Firm"
        description="Axiomio is a global technology and strategy consulting firm. Learn about our vision, values, and precision-driven approach to digital transformation and AI implementation for Fortune 500 companies."
        keywords="about Axiomio, technology consulting firm, strategy consulting company, digital transformation consulting, enterprise consulting, AI consulting firm, management consulting"
        canonicalUrl="https://axiomio.com/about"
        pageType="about"
        structuredData={aboutPageSchema}
      />
      <Navbar />
      
      {/* Hero Section */}
      <header className="relative pt-32 pb-24 lg:pt-40 lg:pb-32" role="banner">
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
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" aria-hidden="true" />
              About Axiomio
            </motion.span>
            
            <motion.h1 
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Built for the{" "}
              <span className="text-gradient">long game</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Axiomio exists to help ambitious organizations solve their most 
              consequential challenges—with the precision, depth, and integrity 
              that complex problems demand.
            </motion.p>
          </motion.div>
        </div>
      </header>

      {/* Vision Section */}
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
                label="Our Vision"
                title="Technology that serves strategy"
                align="left"
              />
              <div className="mt-8 space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  The technology landscape is filled with solutions searching for problems. 
                  We take the opposite approach: starting with the strategic challenge, then 
                  architecting the precise capabilities needed to address it.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  This discipline yields systems that are elegant in their purpose, efficient 
                  in their operation, and adaptable as circumstances evolve. It's not about 
                  having the latest technology—it's about having the right technology.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our work spans industries and scales, but the thread is consistent: 
                  organizations with high stakes, complex requirements, and the ambition 
                  to lead rather than follow.
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
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">
                How We Operate
              </h3>
              <ul className="space-y-4">
                {principles.map((principle, index) => (
                  <motion.li 
                    key={principle} 
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{principle}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SectionHeader
              label="Our Values"
              title="Principles that guide every decision"
              description="These aren't aspirational statements—they're operational commitments that shape how we work, who we hire, and the outcomes we pursue."
            />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {values.map((value, index) => (
              <motion.div 
                key={value.title}
                className="glass-card rounded-2xl p-8 transition-all duration-500 hover:shadow-glow group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start gap-4">
                  <span className="text-5xl font-heading font-bold text-primary/20 group-hover:text-primary/40 transition-colors duration-300">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
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
              Let's build something that matters
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Whether you're navigating a complex transformation or exploring what's possible, 
              we'd welcome the conversation.
            </p>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Start a Conversation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}