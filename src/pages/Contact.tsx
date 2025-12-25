import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Shield, Phone, Clock, CheckCircle, Send, Calendar, Globe, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { SEOHead } from "@/components/SEOHead";
import { contactPageSchema } from "@/lib/seo-schemas-enhanced";
import { OfficeLocationsSection } from "@/components/OfficeLocationsSection";
import { Link } from "react-router-dom";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Get a response within 24 hours",
    value: "hello@axiomio.com",
    href: "mailto:hello@axiomio.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Mon-Fri from 9am to 6pm",
    value: "+1 (555) 000-0000",
    href: "tel:+15550000000",
  },
  {
    icon: Globe,
    title: "Global Offices",
    description: "Presence in 40+ countries",
    value: "View Locations",
    href: "#locations",
  },
];

const benefits = [
  "Response within 24 hours",
  "Dedicated account manager",
  "No commitment required",
  "Custom solutions tailored to you",
];

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

  const openCalendly = () => {
    window.open("https://calendly.com/kishan-k", "_blank", "noopener,noreferrer");
  };

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <SEOHead
        title="Contact Axiomio | Enterprise Technology Consulting Inquiry"
        description="Contact Axiomio for enterprise technology consulting, digital transformation, AI automation, and XOPS360 platform inquiries. Schedule a discovery call with our experts."
        keywords="contact Axiomio, technology consulting inquiry, digital transformation consultation, AI consulting contact, enterprise consulting inquiry, schedule consultation"
        canonicalUrl="https://axiomio.com/contact"
        pageType="contact"
        structuredData={contactPageSchema}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
          <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px]" />
          
          {/* Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-sm font-medium text-primary uppercase tracking-wider mb-6 px-4 py-2 rounded-full border border-primary/20 bg-primary/5"
            >
              <Sparkles className="w-4 h-4" />
              Get In Touch
            </motion.div>
            
            <motion.h1 
              className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              Let's Build{" "}
              <span className="text-gradient">Something Great</span>
              {" "}Together
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Whether you're exploring new possibilities or ready to transform your operations, 
              we're here to help you achieve extraordinary outcomes.
            </motion.p>

            {/* Quick Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button variant="hero" size="xl" onClick={openCalendly}>
                <Calendar className="mr-2 h-5 w-5" />
                Schedule a Call
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/request-a-demo">
                  Request a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Methods Cards */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-muted/60 to-muted/20 border border-border/50 hover:border-primary/40 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="p-3 w-fit rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                    <method.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-1">
                    {method.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {method.description}
                  </p>
                  <p className="text-primary font-medium group-hover:underline">
                    {method.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Form - Takes 3 columns */}
            <motion.div 
              className="lg:col-span-3"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-card rounded-3xl p-8 lg:p-12 border border-border shadow-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Send className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground">
                    Send us a message
                  </h2>
                </div>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-foreground font-medium">First Name *</Label>
                      <Input 
                        id="firstName" 
                        placeholder="John" 
                        required 
                        className="h-12 bg-muted/30 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-foreground font-medium">Last Name *</Label>
                      <Input 
                        id="lastName" 
                        placeholder="Smith" 
                        required 
                        className="h-12 bg-muted/30 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground font-medium">Work Email *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="john@company.com" 
                        required 
                        className="h-12 bg-muted/30 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-foreground font-medium">Phone Number</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="+1 (555) 000-0000" 
                        className="h-12 bg-muted/30 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-foreground font-medium">Company Name</Label>
                    <Input 
                      id="company" 
                      placeholder="Your Organization" 
                      className="h-12 bg-muted/30 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground font-medium">How can we help? *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your project, challenges, or goals..."
                      required
                      rows={5}
                      className="bg-muted/30 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none transition-all"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="xl" 
                    className="w-full h-14"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our privacy policy. We'll never share your information.
                  </p>
                </form>
              </div>
            </motion.div>
            
            {/* Sidebar Info - Takes 2 columns */}
            <motion.div 
              className="lg:col-span-2 space-y-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* What to Expect */}
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 border border-primary/20">
                <h3 className="font-heading text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  What to Expect
                </h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.li
                      key={benefit}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Privacy Card */}
              <div className="bg-muted/30 rounded-2xl p-6 border border-border">
                <div className="flex items-start gap-4">
                  <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-2">
                      Your Privacy Matters
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      All conversations are confidential. We understand the sensitivity of 
                      strategic discussions and handle your information with care.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Schedule CTA */}
              <div className="bg-card rounded-2xl p-8 border border-border text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                  <Calendar className="w-8 h-8 text-primary-foreground" />
                </div>
                <h4 className="font-heading text-lg font-bold text-foreground mb-2">
                  Prefer to Talk?
                </h4>
                <p className="text-sm text-muted-foreground mb-6">
                  Schedule a 30-minute discovery call at your convenience.
                </p>
                <Button variant="outline" size="lg" className="w-full" onClick={openCalendly}>
                  <Calendar className="mr-2 h-4 w-4" />
                  Book a Meeting
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Calendly Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-flex items-center gap-2 text-sm font-medium text-primary uppercase tracking-wider mb-4">
                <Calendar className="w-4 h-4" />
                Schedule a Meeting
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Book Your Free Consultation
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Pick a time that works for you and let's discuss how we can help transform your business.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-card rounded-3xl p-8 lg:p-12 border border-border shadow-xl"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-foreground">
                      <Clock className="w-4 h-4 text-primary" />
                      30 min
                    </span>
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border text-sm font-medium text-muted-foreground">
                      Video Call
                    </span>
                  </div>

                  <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                    Discovery Call with Our Experts
                  </h3>

                  <ul className="space-y-3 mb-8">
                    {[
                      "Review your current infrastructure",
                      "Discuss your goals and challenges",
                      "Get customized recommendations",
                      "No obligation, completely free",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-3">
                      {["K", "R", "S"].map((initial, i) => (
                        <div
                          key={i}
                          className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-sm font-bold text-primary-foreground border-2 border-background"
                        >
                          {initial}
                        </div>
                      ))}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Cloud & DevOps Experts</p>
                      <p className="text-xs text-muted-foreground">15+ years combined experience</p>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg shadow-primary/25">
                    <Calendar className="w-12 h-12 text-primary-foreground" />
                  </div>
                  <Button variant="hero" size="xl" className="w-full" onClick={openCalendly}>
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Your Call Now
                  </Button>
                  <p className="text-xs text-muted-foreground mt-4">
                    Powered by Calendly • No account required
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <div id="locations">
        <OfficeLocationsSection />
      </div>

      <Footer />
    </main>
  );
}