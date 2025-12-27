import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GridBackground } from "@/components/GridBackground";
import { SectionHeader } from "@/components/SectionHeader";
import { SEOHead } from "@/components/SEOHead";
import { servicesPageSchema } from "@/lib/seo-schemas-enhanced";
import { MagneticButton } from "@/components/MagneticButton";
import { SERVICE_CATEGORIES, PRODUCTS } from "@/config/services.config";


export default function Services() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <SEOHead
        title="Enterprise Consulting Services | Strategy, AI, Digital Transformation | AXIOMIO"
        description="AXIOMIO's enterprise consulting services: Strategy & Advisory, Technology & Systems, AI & Automation, and Digital Transformation. Xops360 platform for intelligent operations. Trusted by Fortune 500."
        keywords="enterprise consulting services, technology consulting, strategy consulting, AI consulting, digital transformation services, enterprise architecture, DevOps consulting, MLOps, AIOps, cloud consulting, IT strategy"
        canonicalUrl="https://axiomio.com/services"
        pageType="services"
        structuredData={servicesPageSchema}
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
              Our Services
            </motion.span>
            
            <motion.h1 
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Capabilities built for{" "}
              <span className="text-gradient">consequential challenges</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              From strategic vision to technical execution, we deliver the full 
              spectrum of capabilities needed to navigate complex transformation.
            </motion.p>
          </motion.div>
        </div>
      </header>

      {/* Services Grid */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="space-y-16">
            {SERVICE_CATEGORIES.map((category, index) => (
              <motion.div
                key={category.id}
                id={category.id}
                className="scroll-mt-32"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Link
                  to={category.route}
                  className="block group"
                >
                  <div className="glass-card rounded-2xl p-8 lg:p-12 transition-all duration-500 hover:shadow-glow hover:border-primary/30">
                    <div className="grid lg:grid-cols-3 gap-8 items-start">
                      <div className="lg:col-span-2">
                        <div className="flex items-start gap-6">
                          <motion.div
                            className={`p-4 rounded-xl bg-gradient-to-br ${category.color}/20 to-${category.color}/5 border border-${category.accent}/20 flex-shrink-0`}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 400 }}
                            style={{
                              background: `linear-gradient(to bottom right, ${category.color.replace('from-', 'var(--color-')}20, ${category.color.replace('from-', 'var(--color-')}05)`,
                              borderColor: `${category.accent}33`
                            }}
                          >
                            <category.icon className="h-8 w-8" style={{ color: category.accent }} />
                          </motion.div>
                          <div className="flex-1">
                            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                              {category.title}
                            </h2>
                            <p className="text-lg mb-4" style={{ color: category.accent }}>
                              {category.subtitle}
                            </p>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                              {category.description}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-6">
                        <div>
                          <h4 className="font-heading font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-4">
                            Includes
                          </h4>
                          <ul className="space-y-2">
                            {category.subServices.map((sub) => (
                              <li
                                key={sub.id}
                                className="flex items-start gap-2 text-sm text-muted-foreground"
                              >
                                <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: category.accent }} />
                                <span>{sub.title}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {category.relatedProducts && category.relatedProducts.length > 0 && (
                          <div className="pt-4 border-t border-border/50">
                            <p className="text-xs text-muted-foreground mb-2">Powered by</p>
                            <div className="flex flex-wrap gap-2">
                              {category.relatedProducts.map(productKey => {
                                const product = PRODUCTS[productKey];
                                return (
                                  <Link
                                    key={productKey}
                                    to={product.route}
                                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-muted/50 hover:bg-muted text-xs font-medium transition-colors"
                                  >
                                    <product.icon className="w-3 h-3" />
                                    {product.name}
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        )}

                        <div className="mt-auto flex items-center text-primary font-medium group-hover:gap-3 transition-all">
                          <span>Explore category</span>
                          <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>

                {index < SERVICE_CATEGORIES.length - 1 && (
                  <motion.div
                    className="mt-16 h-px bg-gradient-to-r from-transparent via-border to-transparent"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  />
                )}
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
              Not sure where to start?
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Many engagements begin with a discovery session to understand your 
              challenges and opportunities. Let's find the right starting point together.
            </p>
            <MagneticButton>
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Schedule a Discovery Call
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