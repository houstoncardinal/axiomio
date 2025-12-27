import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, TrendingDown, TrendingUp, Zap, Shield, CheckCircle2, Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MagneticButton } from "@/components/MagneticButton";
import { SEOHead } from "@/components/SEOHead";

export default function FrontlinePerformanceGroup() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Frontline Performance Group Cloud Modernization Case Study | AXIOMIO"
        description="How Frontline Performance Group saved over $100,000 annually through microservices architecture, Kubernetes, and multi-tier AWS deployment."
        keywords="Frontline Performance Group, cloud modernization, Kubernetes, microservices, AWS, cost optimization, DevOps, hospitality consulting"
        ogImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
        canonical="/case-studies/frontline-performance-group"
      />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-background">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-sm text-muted-foreground mb-8"
          >
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/case-studies" className="hover:text-primary transition-colors">Case Studies</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">Frontline Performance Group</span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Management Consulting / Hospitality
              </Badge>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Frontline Performance Group Saves $100K+ Annually with Cloud Modernization
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Leading hospitality consulting firm transforms monolithic architecture to microservices on Kubernetes, achieving 99% availability and massive cost savings.
              </p>
              <div className="flex flex-wrap gap-4">
                <MagneticButton>
                  <Button variant="hero" size="lg" asChild>
                    <Link to="/contact">
                      Modernize Your Infrastructure
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </MagneticButton>
              </div>
            </motion.div>

            {/* Key Metrics */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <TrendingDown className="w-8 h-8 text-primary mb-3" />
                <div className="font-heading text-3xl font-bold text-foreground mb-1">$100K+</div>
                <div className="text-sm text-muted-foreground">Annual Savings</div>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <TrendingUp className="w-8 h-8 text-primary mb-3" />
                <div className="font-heading text-3xl font-bold text-foreground mb-1">99%</div>
                <div className="text-sm text-muted-foreground">Availability</div>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <Zap className="w-8 h-8 text-primary mb-3" />
                <div className="font-heading text-3xl font-bold text-foreground mb-1">4 Weeks</div>
                <div className="text-sm text-muted-foreground">Implementation</div>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <Shield className="w-8 h-8 text-primary mb-3" />
                <div className="font-heading text-3xl font-bold text-foreground mb-1">VAPT</div>
                <div className="text-sm text-muted-foreground">Security Hardened</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 lg:py-20 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                About Frontline Performance Group
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Frontline Performance Group (FPG) is a leading management consulting firm specializing in change management, staff training, and strategic consulting for hospitality brands. With approximately 200 employees, FPG helps hospitality organizations optimize their operations and drive performance improvements.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">~200 Employees</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Hospitality Services</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Management Consulting</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 lg:py-20 relative bg-muted/20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
                The Challenge
              </h2>
              <div className="bg-card border border-border rounded-2xl p-8">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  FPG's existing infrastructure was built on a monolithic single-tier architecture running on AWS VMs, creating several critical challenges:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-muted/30 rounded-xl p-4">
                    <h4 className="font-semibold text-foreground mb-2">Cost Inefficiency</h4>
                    <p className="text-sm text-muted-foreground">Single-tier architecture causing elevated operational expenses with limited cost optimization</p>
                  </div>
                  <div className="bg-muted/30 rounded-xl p-4">
                    <h4 className="font-semibold text-foreground mb-2">Scalability Limitations</h4>
                    <p className="text-sm text-muted-foreground">Unable to expand resources during demand spikes without over-provisioning</p>
                  </div>
                  <div className="bg-muted/30 rounded-xl p-4">
                    <h4 className="font-semibold text-foreground mb-2">Availability Gaps</h4>
                    <p className="text-sm text-muted-foreground">All VMs concentrated in a single availability zone creating single point of failure</p>
                  </div>
                  <div className="bg-muted/30 rounded-xl p-4">
                    <h4 className="font-semibold text-foreground mb-2">Environment Isolation</h4>
                    <p className="text-sm text-muted-foreground">Lacking proper separation between UAT, staging, and production environments</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 lg:py-20 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
                The Solution
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Axiom redesigned the application from a monolithic AWS VM setup to a microservices-based multi-tier architecture within just 4 weeks, utilizing Kubernetes for deployment automation and scalability.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                    Microservices Architecture
                  </h3>
                  <p className="text-muted-foreground">
                    Transformed monolithic application into containerized microservices deployed on Kubernetes for agility and scalability.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                    Multi-Zone HA
                  </h3>
                  <p className="text-muted-foreground">
                    Implemented multi-zone high availability with disaster recovery protocols and geo-location traffic management.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                    Elastic Load Balancing
                  </h3>
                  <p className="text-muted-foreground">
                    Distributed traffic across application servers with intelligent load balancing for optimal performance.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                    Security Hardening
                  </h3>
                  <p className="text-muted-foreground">
                    Comprehensive VAPT (Vulnerability Assessment and Penetration Testing) with IP whitelisting and security groups.
                  </p>
                </div>
              </div>

              <div className="bg-card border border-border rounded-2xl p-6 mb-8">
                <h3 className="font-heading text-lg font-bold text-foreground mb-4">Key Implementation Details</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Environment segregation across UAT, staging, and production</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">AWS security groups with IP whitelisting for access control</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Automated, adaptive DevOps pipeline for rapid deployment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Container orchestration with Kubernetes for deployment automation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-muted/30 border border-border rounded-2xl p-6">
                <h3 className="font-heading text-lg font-bold text-foreground mb-4">Technologies Deployed</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-primary/30 text-primary">AWS</Badge>
                  <Badge variant="outline" className="border-primary/30 text-primary">Kubernetes</Badge>
                  <Badge variant="outline" className="border-primary/30 text-primary">Docker</Badge>
                  <Badge variant="outline" className="border-primary/30 text-primary">Elastic Load Balancing</Badge>
                  <Badge variant="outline" className="border-primary/30 text-primary">AWS Security Groups</Badge>
                  <Badge variant="outline" className="border-primary/30 text-primary">Multi-AZ</Badge>
                  <Badge variant="outline" className="border-primary/30 text-primary">DevOps Pipeline</Badge>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 lg:py-20 relative bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
                Measurable Results
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-card border border-primary/20 rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <TrendingDown className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-heading text-2xl font-bold text-foreground mb-2">$100,000+</div>
                      <div className="text-muted-foreground">Annual cost savings through optimized cloud infrastructure</div>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-primary/20 rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-heading text-2xl font-bold text-foreground mb-2">99%</div>
                      <div className="text-muted-foreground">Application availability with geo-location traffic management</div>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-primary/20 rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-heading text-2xl font-bold text-foreground mb-2">Increased NPS</div>
                      <div className="text-muted-foreground">Higher Net Promoter Scores from improved user experience</div>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-primary/20 rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-heading text-2xl font-bold text-foreground mb-2">Automated</div>
                      <div className="text-muted-foreground">Adaptive DevOps pipeline for rapid deployment</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">Business Impact</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Over $100,000 in annual cost savings through infrastructure optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">99% application availability enabling consistent service delivery</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Enhanced security posture through VAPT and access controls</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Scalable infrastructure supporting business growth and demand spikes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Improved NPS scores from better application performance and reliability</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partner Info */}
      <section className="py-16 lg:py-20 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-border rounded-2xl p-8">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                  About Axiomio
                </h3>
                <p className="text-muted-foreground mb-4">
                  Axiom is an AWS Advanced Consulting Partner with over 10 years of experience in cloud migrations and modernization. Our team has successfully completed 15+ enterprise migrations involving 50,000+ servers across diverse industries.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="outline" className="border-primary/30 text-primary">AWS Advanced Partner</Badge>
                  <Badge variant="outline" className="border-primary/30 text-primary">10+ Years Experience</Badge>
                  <Badge variant="outline" className="border-primary/30 text-primary">15+ Enterprise Migrations</Badge>
                  <Badge variant="outline" className="border-primary/30 text-primary">50,000+ Servers</Badge>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-24 relative overflow-hidden bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to modernize your cloud infrastructure?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how Axiomio can help you reduce costs, improve availability, and accelerate innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton>
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contact">
                    Start Your Transformation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button variant="hero-outline" size="xl" asChild>
                  <Link to="/services/kubernetes">
                    Kubernetes Services
                  </Link>
                </Button>
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
