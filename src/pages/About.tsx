import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroBackground } from "@/components/HeroBackground";
import { SectionHeader } from "@/components/SectionHeader";

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
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32">
        <HeroBackground />
        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-6 fade-up">
              About Axiomio
            </span>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-8 fade-up-delay-1">
              Built for the{" "}
              <span className="text-gradient">long game</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl fade-up-delay-2">
              Axiomio exists to help ambitious organizations solve their most 
              consequential challenges—with the precision, depth, and integrity 
              that complex problems demand.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 lg:py-32 bg-card/50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
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
            </div>
            
            <div className="glass-card rounded-2xl p-8 lg:p-12">
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">
                How We Operate
              </h3>
              <ul className="space-y-4">
                {principles.map((principle) => (
                  <li key={principle} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{principle}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionHeader
            label="Our Values"
            title="Principles that guide every decision"
            description="These aren't aspirational statements—they're operational commitments that shape how we work, who we hire, and the outcomes we pursue."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="glass-card rounded-2xl p-8 transition-all duration-500 hover:shadow-glow"
              >
                <div className="flex items-start gap-4">
                  <span className="text-5xl font-heading font-bold text-primary/20">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-card/50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Let's build something that matters
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Whether you're navigating a complex transformation or exploring what's possible, 
              we'd welcome the conversation.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Start a Conversation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
