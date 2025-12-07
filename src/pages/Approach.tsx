import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroBackground } from "@/components/HeroBackground";
import { SectionHeader } from "@/components/SectionHeader";

const phases = [
  {
    number: "01",
    title: "Discover",
    subtitle: "Deep understanding before action",
    description: "We begin every engagement by immersing ourselves in your context—your business model, competitive landscape, organizational dynamics, and strategic objectives. This isn't a checkbox exercise; it's the foundation that makes everything else possible.",
    details: [
      "Stakeholder interviews and alignment sessions",
      "Current state assessment and analysis",
      "Competitive and market landscape review",
      "Technology and capability audit",
      "Opportunity and risk identification",
    ],
  },
  {
    number: "02",
    title: "Define",
    subtitle: "Clarity through rigorous framing",
    description: "With deep understanding established, we articulate the problem space with precision, define success criteria that matter, and develop strategic options that represent genuine alternatives—not variations on a predetermined answer.",
    details: [
      "Problem statement and scope definition",
      "Success metrics and KPI framework",
      "Strategic option development",
      "Business case and ROI modeling",
      "Stakeholder alignment and governance",
    ],
  },
  {
    number: "03",
    title: "Design",
    subtitle: "Architecture for durability",
    description: "We design solutions that address immediate needs while building for long-term adaptability. This phase produces detailed blueprints that consider technical feasibility, organizational capacity, and implementation realities.",
    details: [
      "Solution architecture and design",
      "Implementation roadmap and phasing",
      "Resource and capability planning",
      "Risk mitigation strategies",
      "Change management framework",
    ],
  },
  {
    number: "04",
    title: "Deliver",
    subtitle: "Execution with discipline",
    description: "Implementation is where plans meet reality. We execute with the rigor and adaptability that complex programs demand, maintaining transparency through clear milestones and honest communication about progress and challenges.",
    details: [
      "Agile delivery and sprint management",
      "Quality assurance and testing",
      "Stakeholder communication and reporting",
      "Issue resolution and adaptation",
      "Knowledge transfer and documentation",
    ],
  },
  {
    number: "05",
    title: "Develop",
    subtitle: "Building lasting capability",
    description: "The ultimate measure of success is whether your organization emerges stronger. We focus on building internal capabilities, transferring knowledge, and establishing practices that sustain value long after the engagement concludes.",
    details: [
      "Team training and enablement",
      "Operational handoff and support",
      "Performance monitoring and optimization",
      "Continuous improvement frameworks",
      "Long-term partnership and advisory",
    ],
  },
];

export default function Approach() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32">
        <HeroBackground />
        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-6 fade-up">
              Our Approach
            </span>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-8 fade-up-delay-1">
              Methodology built on{" "}
              <span className="text-gradient">deliberate precision</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl fade-up-delay-2">
              Our approach reflects a belief that the best outcomes emerge from 
              rigorous understanding, careful design, and disciplined execution.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 lg:py-32 bg-card/50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                label="Philosophy"
                title="Why process matters"
                align="left"
              />
              <div className="mt-8 space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  In complex environments, the quality of outcomes is directly tied to 
                  the quality of the process that produces them. We've developed our 
                  methodology through years of high-stakes engagements, refining it 
                  based on what actually works—not what sounds good in proposals.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The result is an approach that's structured enough to ensure 
                  consistency and rigor, yet flexible enough to adapt to the unique 
                  realities of each engagement. We don't believe in one-size-fits-all 
                  solutions, but we do believe in disciplined thinking applied 
                  consistently.
                </p>
              </div>
            </div>
            
            <div className="glass-card rounded-2xl p-8 lg:p-12">
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-8">
                Core Principles
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-heading font-semibold text-primary mb-2">
                    Understanding First
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    We invest significant effort upfront to understand your context deeply 
                    before proposing solutions.
                  </p>
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-primary mb-2">
                    Honest Assessment
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    We tell you what you need to hear, not what's comfortable. 
                    Trust is built on truth.
                  </p>
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-primary mb-2">
                    Adaptive Execution
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Plans are starting points. We maintain discipline while adapting 
                    to emerging realities.
                  </p>
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-primary mb-2">
                    Lasting Value
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Our goal is to leave you stronger than we found you—with capabilities 
                    that endure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phases Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionHeader
            label="The Process"
            title="Five phases of deliberate transformation"
            description="Each phase builds on the previous, creating a cumulative foundation for sustainable success."
          />
          
          <div className="mt-16 space-y-12">
            {phases.map((phase, index) => (
              <div 
                key={phase.number}
                className="glass-card rounded-2xl p-8 lg:p-12 transition-all duration-500 hover:shadow-glow"
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  <div>
                    <span className="text-6xl font-heading font-bold text-primary/20">
                      {phase.number}
                    </span>
                    <h3 className="font-heading text-2xl font-bold text-foreground mt-2">
                      {phase.title}
                    </h3>
                    <p className="text-primary mt-1">
                      {phase.subtitle}
                    </p>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {phase.description}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {phase.details.map((detail) => (
                        <div 
                          key={detail}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          {detail}
                        </div>
                      ))}
                    </div>
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
              See our approach in action
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Every engagement is unique, but the discipline is consistent. 
              Let's discuss how this methodology would apply to your specific situation.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Start the Conversation
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
