import { motion } from "framer-motion";
import { MorphingCardStack, type CardData } from "@/components/ui/morphing-card-stack";
import { Target, Shield, Users, Globe, Zap, Brain } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const differentiatorCards: CardData[] = [
  {
    id: "precision",
    title: "Precision-Driven",
    description: "Every recommendation is grounded in data and refined for your specific context. We don't do cookie-cutter solutions.",
    icon: <Target className="h-5 w-5" />,
  },
  {
    id: "enterprise",
    title: "Enterprise-Ready",
    description: "Solutions built with security, compliance, and governance at the core. Trusted by Fortune 500 companies worldwide.",
    icon: <Shield className="h-5 w-5" />,
  },
  {
    id: "partnership",
    title: "Partnership Model",
    description: "We work alongside your teams, building capabilities that endure long after our engagement concludes.",
    icon: <Users className="h-5 w-5" />,
  },
  {
    id: "global",
    title: "Global Perspective",
    description: "Insights from diverse industries across 40+ countries, adapted to local opportunities and challenges.",
    icon: <Globe className="h-5 w-5" />,
  },
  {
    id: "agility",
    title: "Agile Execution",
    description: "We move fast without breaking things. Rapid iteration with enterprise-grade reliability and stability.",
    icon: <Zap className="h-5 w-5" />,
  },
  {
    id: "intelligence",
    title: "AI-Native Thinking",
    description: "Every solution leverages intelligent automation and machine learning where it creates real value.",
    icon: <Brain className="h-5 w-5" />,
  },
];

export function DifferentiatorsStack() {
  return (
    <section className="py-28 lg:py-36 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-card/50 to-background" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container relative mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <SectionHeader
              label="Why Axiomio"
              title="Where precision meets vision"
              description="We operate at the intersection of strategic clarity and technical excellence."
              align="left"
            />
            
            <div className="mt-10 space-y-5">
              <p className="text-muted-foreground leading-relaxed text-lg">
                In a landscape crowded with shortcuts and hype, we take the deliberate path. 
                Every engagement begins with understanding—your business, your challenges, 
                your opportunities.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                The result is work that endures: systems that scale, strategies that adapt, 
                and partnerships that compound value over time.
              </p>
            </div>
            
            <Button variant="hero" size="xl" className="mt-10" asChild>
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          {/* Right - Interactive Card Stack */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <MorphingCardStack 
              cards={differentiatorCards} 
              defaultLayout="stack"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default DifferentiatorsStack;
