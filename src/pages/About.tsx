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
import { MagneticButton } from "@/components/MagneticButton";

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
              className="inline-flex items-center gap-2 text-sm font-medium text-primary uppercase tracking-wider mb-6 px-4 py-2 rounded-xl border border-primary/20 bg-primary/5"
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
              For over 14 years, AxiomIO has been the trusted technology partner across verticals, 
              delivering reliable and secure managed services. Today, we're redefining managed 
              services for the modern era with our Product-led innovations Xops360 and XeroTrust platforms.
            </motion.p>
          </motion.div>
        </div>
      </header>

      {/* Company History Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-card/50 to-background">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <SectionHeader
              label="Our Story"
              title="From vision to reality"
              align="center"
            />
            <div className="mt-12 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-8"
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl font-heading font-bold text-primary/30">2011</span>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-2">Infrastructure Foundations</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Launched hands-on IaaS deployments and 24/7 NOC services to modernize legacy infrastructure, 
                      establishing Axiomio's reputation for reliable, scalable operations enterprises trust.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-8"
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl font-heading font-bold text-primary/30">2015</span>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-2">Private Cloud Pioneers</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Pioneered private cloud architectures with large-scale Citrix VDI rollouts and customized 
                      environments, enabling secure transitions to enterprise-grade virtualization while managing client deployments.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-8"
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl font-heading font-bold text-primary/30">2017</span>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-2">Public Cloud Momentum</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Secured AWS and Azure partnerships for seamless on-premises to public cloud migrations, 
                      automating VDI across banking, finance, and engineering verticals to deliver agility and cost savings.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-8"
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl font-heading font-bold text-primary/30">2020</span>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-2">AWS Advanced Excellence</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Attained AWS Advanced Partner status with MSSP L1, Digital Workspace, and DevOps competencies, 
                      launching cloud-native apps supported by dedicated SOC, SIEM, and cybersecurity teams for compliant security.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-8 border-primary/30"
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl font-heading font-bold text-primary">2025</span>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-2">AI-Driven Transformation</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Unveiled in-house AI platforms Xops360.ai and Xerotrust.ai, automating cloud security, FinOps, 
                      Zero Trust access, and threat remediation with agentic AI that autonomously resolves issues.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SectionHeader
              label="Our Ecosystem"
              title="More than an MSP—a network of excellence"
              description="We've built strategic partnerships across every layer of enterprise technology to deliver comprehensive solutions."
            />
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-16">
            {[
              { title: "Cloud Partners", icon: "☁️", desc: "AWS, Azure, GCP" },
              { title: "ISP Partners", icon: "🌐", desc: "Global connectivity" },
              { title: "Cybersecurity", icon: "🛡️", desc: "Threat protection" },
              { title: "Cloud Security", icon: "🔐", desc: "CSPM & CWPP" },
              { title: "Network Security", icon: "🔒", desc: "Zero trust architecture" },
              { title: "Compliance", icon: "✓", desc: "SOC2, HIPAA, PCI" },
            ].map((partner, index) => (
              <motion.div
                key={partner.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="glass-card rounded-xl p-6 text-center hover:border-primary/30 transition-all duration-300 group"
              >
                <span className="text-3xl mb-3 block">{partner.icon}</span>
                <h4 className="font-heading font-semibold text-foreground text-sm mb-1 group-hover:text-primary transition-colors">
                  {partner.title}
                </h4>
                <p className="text-xs text-muted-foreground">{partner.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
                  As a Modern MSP, AxiomIO blends artificial intelligence, automation, and governance 
                  across every layer of service delivery—elevating traditional infrastructure management 
                  into true intelligence management.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We are more than a managed service provider. We are the intelligence engine powering 
                  secure digital transformation for regulated industries worldwide.
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
            <MagneticButton>
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Start a Conversation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}