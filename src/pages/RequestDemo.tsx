import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, CheckCircle, Clock, Play, Shield, Sparkles, Users, Zap, Building2, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { SEOHead } from "@/components/SEOHead";

const demoFeatures = [
  {
    icon: Zap,
    title: "Live Platform Walkthrough",
    description: "See Xops360 and XeroTrust in action with real use cases",
  },
  {
    icon: Users,
    title: "Personalized Experience",
    description: "Demo tailored to your industry and specific challenges",
  },
  {
    icon: Shield,
    title: "Security Deep Dive",
    description: "Explore our zero-trust architecture and compliance features",
  },
];

const trustedBy = [
  "Fortune 500 Companies",
  "Global Financial Institutions",
  "Healthcare Leaders",
  "Technology Innovators",
];

export default function RequestDemo() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      // Submit to Netlify
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });

      toast({
        title: "Demo Request Received!",
        description: "Our team will reach out within 24 hours to schedule your personalized demo.",
      });

      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const openCalendly = () => {
    window.open("https://calendly.com/kishan-k", "_blank", "noopener,noreferrer");
  };

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <SEOHead
        title="Request a Demo | AXIOMIO Xops360 & XeroTrust Platform"
        description="Schedule a personalized demo of AXIOMIO's Xops360 platform and XeroTrust security solution. See how we can transform your operations with AI-powered automation."
        keywords="Xops360 demo, XeroTrust demo, DevOps platform demo, cloud security demo, AI automation demo, enterprise technology demo"
        canonicalUrl="https://axiomio.com/request-a-demo"
        pageType="product"
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-28 pb-12 lg:pt-36 lg:pb-16 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/5" />
          <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px]" />
          
          {/* Animated particles */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary/40 rounded-full"
            animate={{ y: [0, -20, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-1/3 right-1/3 w-2 h-2 bg-secondary/40 rounded-full"
            animate={{ y: [0, 15, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          />
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-sm font-bold text-primary uppercase tracking-wider mb-6 px-5 py-2.5 rounded-full border border-primary/30 bg-primary/10"
            >
              <Play className="w-4 h-4" />
              Request a Demo
            </motion.div>
            
            <motion.h1 
              className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.05] mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              See{" "}
              <span className="text-gradient">Xops360</span>
              {" "}& <span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">XeroTrust</span>
              {" "}in Action
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Get a personalized walkthrough of our AI-powered platform and discover 
              how we can transform your operations in just 30 minutes.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Features Strip */}
      <section className="py-8 border-y border-border/50 bg-muted/20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-12">
            {demoFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <feature.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            
            {/* Left Side - Calendly Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="sticky top-32">
                <span className="inline-flex items-center gap-2 text-sm font-medium text-primary uppercase tracking-wider mb-4">
                  <Calendar className="w-4 h-4" />
                  Fastest Way to Get Started
                </span>
                
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Schedule Your Demo Instantly
                </h2>
                
                <p className="text-muted-foreground mb-8">
                  Pick a convenient time and get a live walkthrough of our platform 
                  with one of our solution experts.
                </p>

                {/* Calendly Card */}
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 border border-primary/20 mb-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg shadow-primary/25">
                      <Calendar className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-foreground">30-Minute Demo</h3>
                      <p className="text-sm text-muted-foreground">Video call with screen sharing</p>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {[
                      "Live product demonstration",
                      "Q&A with platform expert",
                      "Custom use case discussion",
                      "Implementation timeline review",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-foreground">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Button variant="hero" size="xl" className="w-full" onClick={openCalendly}>
                    <Calendar className="mr-2 h-5 w-5" />
                    Pick a Time
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center mt-4">
                    Powered by Calendly • No account required
                  </p>
                </div>

                {/* Trust Indicators */}
                <div className="bg-muted/30 rounded-2xl p-6 border border-border">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">Trusted by</p>
                  <div className="flex flex-wrap gap-2">
                    {trustedBy.map((company) => (
                      <span 
                        key={company} 
                        className="text-xs px-3 py-1.5 rounded-full bg-background border border-border text-muted-foreground"
                      >
                        {company}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Demo Request Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-card rounded-3xl p-8 lg:p-10 border border-border shadow-xl">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-secondary/10">
                    <Sparkles className="h-5 w-5 text-secondary" />
                  </div>
                  <h2 className="font-heading text-2xl font-bold text-foreground">
                    Request Your Demo
                  </h2>
                </div>
                <p className="text-muted-foreground mb-8">
                  Fill out the form and we'll reach out to schedule your personalized demo.
                </p>
                
                <form onSubmit={handleSubmit} name="demo-request" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" className="space-y-5">
                  {/* Hidden fields for Netlify form detection */}
                  <input type="hidden" name="form-name" value="demo-request" />
                  <div hidden>
                    <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-foreground font-medium">
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="John"
                        required
                        className="h-12 bg-muted/30 border-border focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-foreground font-medium">
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Smith"
                        required
                        className="h-12 bg-muted/30 border-border focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground font-medium">
                      Work Email *
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@company.com"
                        required
                        className="h-12 pl-10 bg-muted/30 border-border focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground font-medium">
                      Phone Number
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        className="h-12 pl-10 bg-muted/30 border-border focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-foreground font-medium">
                      Company Name *
                    </Label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="company"
                        name="company"
                        placeholder="Your Organization"
                        required
                        className="h-12 pl-10 bg-muted/30 border-border focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="companySize" className="text-foreground font-medium">
                        Company Size
                      </Label>
                      <Select name="companySize">
                        <SelectTrigger className="h-12 bg-muted/30 border-border">
                          <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-50">1-50 employees</SelectItem>
                          <SelectItem value="51-200">51-200 employees</SelectItem>
                          <SelectItem value="201-500">201-500 employees</SelectItem>
                          <SelectItem value="501-1000">501-1000 employees</SelectItem>
                          <SelectItem value="1000+">1000+ employees</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="interest" className="text-foreground font-medium">
                        Primary Interest
                      </Label>
                      <Select name="interest">
                        <SelectTrigger className="h-12 bg-muted/30 border-border">
                          <SelectValue placeholder="Select interest" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="xops360">Xops360 Platform</SelectItem>
                          <SelectItem value="xerotrust">XeroTrust Security</SelectItem>
                          <SelectItem value="both">Both Solutions</SelectItem>
                          <SelectItem value="consulting">Consulting Services</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground font-medium">
                      Tell us about your goals
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="What challenges are you looking to solve? What are your main goals?"
                      rows={4}
                      className="bg-muted/30 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="xl" 
                    className="w-full h-14"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full mr-2"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Request Your Demo
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>

                  <div className="flex items-start gap-3 pt-2">
                    <Shield className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                    <p className="text-xs text-muted-foreground">
                      Your information is secure. We'll never share your data with third parties.
                    </p>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 lg:py-20 bg-muted/20 border-y border-border/50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-8">
                Join 150+ enterprises transforming their operations
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { value: "$100M+", label: "Value Delivered" },
                  { value: "98%", label: "Client Retention" },
                  { value: "40+", label: "Countries" },
                  { value: "150+", label: "Enterprise Clients" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="font-heading text-3xl lg:text-4xl font-bold text-primary mb-1">
                      {stat.value}
                    </div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}