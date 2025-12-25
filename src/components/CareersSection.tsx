import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, MapPin, Clock, Zap, Users, Rocket, Heart } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const openPositions = [
  {
    title: "Senior Cloud Architect",
    department: "Engineering",
    location: "Remote / Bangalore",
    type: "Full-time",
    tags: ["AWS", "Azure", "Kubernetes"],
  },
  {
    title: "DevOps Engineer",
    department: "Operations",
    location: "Remote / Hyderabad",
    type: "Full-time",
    tags: ["CI/CD", "Terraform", "Docker"],
  },
  {
    title: "Security Analyst",
    department: "Security",
    location: "Remote",
    type: "Full-time",
    tags: ["SIEM", "SOC", "Incident Response"],
  },
  {
    title: "Solutions Consultant",
    department: "Sales",
    location: "US / UK",
    type: "Full-time",
    tags: ["Cloud", "Pre-sales", "Architecture"],
  },
];

const perks = [
  {
    icon: Rocket,
    title: "Growth Opportunities",
    description: "Career advancement with learning budgets and certifications",
  },
  {
    icon: Users,
    title: "Remote-First Culture",
    description: "Work from anywhere with flexible hours",
  },
  {
    icon: Heart,
    title: "Comprehensive Benefits",
    description: "Health insurance, wellness programs, and PTO",
  },
  {
    icon: Zap,
    title: "Cutting-Edge Tech",
    description: "Work with the latest cloud and AI technologies",
  },
];

export function CareersSection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionHeader
            label="We're Hiring"
            title="Join Our Team"
            description="Be part of a team that's shaping the future of cloud and AI operations. We're looking for talented individuals who are passionate about technology."
          />
        </motion.div>

        {/* Perks Grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((perk, index) => (
            <motion.div
              key={perk.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <perk.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-heading text-lg font-semibold text-foreground mb-2">
                {perk.title}
              </h4>
              <p className="text-sm text-muted-foreground">{perk.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Open Positions */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">
            Open Positions
          </h3>

          <div className="space-y-4 max-w-3xl mx-auto">
            {openPositions.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">{job.department}</span>
                    </div>
                    <h4 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {job.title}
                    </h4>
                    <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {job.type}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {job.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button variant="outline" className="shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground mb-4">
            Don't see a role that fits? We're always looking for talent.
          </p>
          <Button variant="hero" asChild>
            <Link to="/contact">
              Send Your Resume
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
