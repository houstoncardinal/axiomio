import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, Clock, Users, Shield, TrendingUp, Zap, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MagneticButton } from "@/components/MagneticButton";
import { SEOHead } from "@/components/SEOHead";

export default function CoforgeVDIAzure() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Coforge VDI Migration to Azure Case Study | AXIOMIO"
        description="How Coforge migrated 5,000+ VDIs to Azure in under 10 weeks with Citrix DaaS, NetScaler, and multi-factor authentication."
        keywords="Coforge, VDI migration, Azure, Citrix DaaS, virtual desktop, Windows 7 migration, NetScaler, MFA"
        ogImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200"
        canonicalUrl="/case-studies/coforge-vdi-azure"
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
            <span className="text-foreground">Coforge VDI Migration</span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                IT Solutions Provider
              </Badge>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Coforge Migrates 5,000+ VDIs to Azure in Under 10 Weeks
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Global IT solutions provider completes urgent Windows 7 EOL migration with zero downtime using Azure, Citrix DaaS, and enhanced security.
              </p>
              <div className="flex flex-wrap gap-4">
                <MagneticButton>
                  <Button variant="hero" size="lg" asChild>
                    <Link to="/contact">
                      Start Your Migration
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
                <Users className="w-8 h-8 text-primary mb-3" />
                <div className="font-heading text-3xl font-bold text-foreground mb-1">5,000+</div>
                <div className="text-sm text-muted-foreground">VDIs Migrated</div>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <Clock className="w-8 h-8 text-primary mb-3" />
                <div className="font-heading text-3xl font-bold text-foreground mb-1">&lt;10 Weeks</div>
                <div className="text-sm text-muted-foreground">Migration Timeline</div>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <Shield className="w-8 h-8 text-primary mb-3" />
                <div className="font-heading text-3xl font-bold text-foreground mb-1">MFA</div>
                <div className="text-sm text-muted-foreground">Enhanced Security</div>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <TrendingUp className="w-8 h-8 text-primary mb-3" />
                <div className="font-heading text-3xl font-bold text-foreground mb-1">On-Demand</div>
                <div className="text-sm text-muted-foreground">Scalability</div>
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
                About Coforge
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Coforge (formerly NIIT Technologies) is a global IT solutions and services provider serving diverse industries including travel, banking, healthcare, manufacturing, media, public sector, and retail. With operations spanning multiple continents, Coforge needed to ensure business continuity during the critical Windows 7 end-of-life transition.
              </p>
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
                  Coforge faced an urgent deadline to migrate their entire virtual desktop infrastructure (VDI) from Windows 7 before the operating system's end-of-life decommission. The organization needed:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-muted-foreground">Immediate cloud relocation to maintain operational continuity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-muted-foreground">Zero downtime during migration of 5,000+ virtual desktops</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-muted-foreground">Enhanced security for external access and authentication</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-muted-foreground">Future-proof infrastructure with on-demand scalability</span>
                  </li>
                </ul>
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
                Axiom recommended a comprehensive Azure cloud migration strategy that included:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                    Data Migration
                  </h3>
                  <p className="text-muted-foreground">
                    Seamless data transfer from on-premises datacenter to Microsoft Azure with minimal disruption.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                    Citrix DaaS Setup
                  </h3>
                  <p className="text-muted-foreground">
                    Desktop-as-a-Service deployment for 5,000+ virtual desktops with optimal performance.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                    NetScaler Gateway
                  </h3>
                  <p className="text-muted-foreground">
                    Citrix ADC configuration for secure external access and traffic management.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                    Multi-Factor Authentication
                  </h3>
                  <p className="text-muted-foreground">
                    Okta and Azure MFA implementation for enhanced security posture.
                  </p>
                </div>
              </div>

              <div className="bg-muted/30 border border-border rounded-2xl p-6">
                <h3 className="font-heading text-lg font-bold text-foreground mb-4">Technologies Deployed</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-primary/30 text-primary">Microsoft Azure</Badge>
                  <Badge variant="outline" className="border-primary/30 text-primary">Citrix DaaS</Badge>
                  <Badge variant="outline" className="border-primary/30 text-primary">Citrix ADC (NetScaler)</Badge>
                  <Badge variant="outline" className="border-primary/30 text-primary">Okta</Badge>
                  <Badge variant="outline" className="border-primary/30 text-primary">Azure MFA</Badge>
                  <Badge variant="outline" className="border-primary/30 text-primary">Windows 10</Badge>
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
                Results & Impact
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-card border border-primary/20 rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-heading text-2xl font-bold text-foreground mb-2">&lt;10 Weeks</div>
                      <div className="text-muted-foreground">Migration completed ahead of Windows 7 EOL deadline</div>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-primary/20 rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-heading text-2xl font-bold text-foreground mb-2">5,000+</div>
                      <div className="text-muted-foreground">Virtual desktops successfully transitioned</div>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-primary/20 rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-heading text-2xl font-bold text-foreground mb-2">Enhanced Security</div>
                      <div className="text-muted-foreground">Multi-factor authentication protecting all access</div>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-primary/20 rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-heading text-2xl font-bold text-foreground mb-2">On-Demand Scaling</div>
                      <div className="text-muted-foreground">Azure enables scaling whenever required</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">Key Outcomes</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Stable, reliable environment with minimal downtime during transition</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Future-ready infrastructure with on-demand scaling capabilities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Improved security posture through multi-factor verification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Operational efficiency through Azure's cloud-native capabilities</span>
                  </li>
                </ul>
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
              Ready to migrate your VDI infrastructure?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how Axiomio can help you achieve a seamless cloud migration with zero downtime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton>
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contact">
                    Start Your Migration
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button variant="hero-outline" size="xl" asChild>
                  <Link to="/services/migration-and-modernization">
                    Migration Services
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
