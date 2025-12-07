import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GridBackground } from "@/components/GridBackground";
import { useToast } from "@/hooks/use-toast";
import { SEOHead } from "@/components/SEOHead";
import { createBreadcrumbSchema } from "@/lib/seo-schemas";

const breadcrumbSchema = createBreadcrumbSchema([
  { name: "Home", url: "https://axiomio.com/" },
  { name: "Contact", url: "https://axiomio.com/contact" },
]);

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Axiomio",
  description: "Contact Axiomio for enterprise technology consulting, digital transformation, and AI automation services.",
  url: "https://axiomio.com/contact",
  mainEntity: {
    "@type": "Organization",
    name: "Axiomio",
    email: "hello@axiomio.com",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "hello@axiomio.com",
      availableLanguage: ["English"],
    },
  },
};

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message received",
      description: "We'll be in touch within 24 hours.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <SEOHead
        title="Contact Axiomio | Enterprise Technology Consulting Inquiry"
        description="Contact Axiomio for enterprise technology consulting, digital transformation, AI automation, and XOPS360 platform inquiries. Schedule a discovery call with our experts."
        keywords="contact Axiomio, technology consulting inquiry, digital transformation consultation, AI consulting contact, enterprise consulting inquiry, schedule consultation"
        canonicalUrl="https://axiomio.com/contact"
        structuredData={{ "@context": "https://schema.org", "@graph": [breadcrumbSchema, contactPageSchema] }}
      />
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
              Contact
            </motion.span>
            
            <motion.h1 
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Let's discuss what's{" "}
              <span className="text-gradient">possible</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Whether you're facing a complex challenge or exploring new opportunities, 
              we're here to help you navigate what's next.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div 
              className="glass-card rounded-2xl p-8 lg:p-12"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-2xl font-bold text-foreground mb-2">
                Start a conversation
              </h2>
              <p className="text-muted-foreground mb-8">
                Tell us about your challenge and we'll respond within 24 hours.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-foreground">First Name</Label>
                    <Input 
                      id="firstName" 
                      placeholder="John" 
                      required 
                      className="bg-muted/50 border-border focus:border-primary transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-foreground">Last Name</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Smith" 
                      required 
                      className="bg-muted/50 border-border focus:border-primary transition-colors"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@company.com" 
                    required 
                    className="bg-muted/50 border-border focus:border-primary transition-colors"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-foreground">Company</Label>
                  <Input 
                    id="company" 
                    placeholder="Your Organization" 
                    className="bg-muted/50 border-border focus:border-primary transition-colors"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">How can we help?</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your challenge or opportunity..."
                    required
                    rows={6}
                    className="bg-muted/50 border-border focus:border-primary resize-none transition-colors"
                  />
                </div>
                
                <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              </form>
            </motion.div>
            
            {/* Contact Info */}
            <motion.div 
              className="space-y-12"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                  What to expect
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    When you reach out, you'll hear back from someone who can actually 
                    help—not a sales script. We believe in starting conversations with 
                    understanding, not pitches.
                  </p>
                  <p>
                    Expect an initial response within 24 hours. If there's a potential 
                    fit, we'll schedule a discovery call to explore your situation in 
                    depth.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <motion.div 
                  className="flex items-start gap-4 group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-1">
                      Email
                    </h4>
                    <a 
                      href="mailto:hello@axiomio.com" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      hello@axiomio.com
                    </a>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start gap-4 group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-1">
                      Location
                    </h4>
                    <p className="text-muted-foreground">
                      Global reach, based in major technology hubs
                    </p>
                  </div>
                </motion.div>
              </div>
              
              <motion.div 
                className="glass-card rounded-xl p-6 flex items-start gap-4"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground text-sm">
                  <strong className="text-foreground">Confidentiality assured.</strong>{" "}
                  All conversations are treated with discretion. We understand the 
                  sensitivity of strategic discussions.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}