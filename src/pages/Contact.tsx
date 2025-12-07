import { useState } from "react";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroBackground } from "@/components/HeroBackground";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message received",
      description: "We'll be in touch within 24 hours.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32">
        <HeroBackground />
        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-6 fade-up">
              Contact
            </span>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-8 fade-up-delay-1">
              Let's discuss what's{" "}
              <span className="text-gradient">possible</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl fade-up-delay-2">
              Whether you're facing a complex challenge or exploring new opportunities, 
              we're here to help you navigate what's next.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="glass-card rounded-2xl p-8 lg:p-12">
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
                      className="bg-muted/50 border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-foreground">Last Name</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Smith" 
                      required 
                      className="bg-muted/50 border-border focus:border-primary"
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
                    className="bg-muted/50 border-border focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-foreground">Company</Label>
                  <Input 
                    id="company" 
                    placeholder="Your Organization" 
                    className="bg-muted/50 border-border focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">How can we help?</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your challenge or opportunity..."
                    required
                    rows={6}
                    className="bg-muted/50 border-border focus:border-primary resize-none"
                  />
                </div>
                
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
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-12">
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
                    depth and discuss how we might be able to help.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
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
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
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
                </div>
              </div>
              
              <div className="glass-card rounded-xl p-6">
                <p className="text-muted-foreground text-sm">
                  <strong className="text-foreground">Confidentiality assured.</strong>{" "}
                  All conversations are treated with discretion. We understand the 
                  sensitivity of strategic discussions and maintain appropriate 
                  confidentiality throughout our engagements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
