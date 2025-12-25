import { motion } from "framer-motion";
import { Linkedin, Github, Twitter } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

const teamMembers = [
  {
    name: "Prasanna Kumar Galla",
    role: "CEO",
    bio: "Driving innovation with integrity, and leading the way to a smarter, more connected world",
    image: "https://axiomio.com/wp-content/uploads/2024/05/team-prasanna-venkatesan.png",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Chaitanya Kumar Alluri",
    role: "CTO",
    bio: "Driving innovation with technology, guiding today's solutions to shape tomorrow's success",
    image: "https://axiomio.com/wp-content/uploads/2024/05/team-chaitanya-kumar-alluri.png",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Kishan Kalidindi",
    role: "Head Of Sales",
    bio: "Driving growth with vision, forging partnerships with purpose, and leading sales with integrity",
    image: "https://axiomio.com/wp-content/uploads/2024/05/team-kishan-kalidindi.png",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Raghu Varma Ruddarraju",
    role: "PMO / Managed Services Head",
    bio: "Empowering teams to deliver excellence and drive transformation in every project",
    image: "https://axiomio.com/wp-content/uploads/2024/05/team-raghu-varma-ruddarraju.png",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Anil Kumar Lakineni",
    role: "Cloud Security Lead",
    bio: "Securing your cloud, empowering your business",
    image: "https://axiomio.com/wp-content/uploads/2024/05/team-anil-kumar-lakineni.png",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Ravindra Namburi",
    role: "Cloud Professional Services Head",
    bio: "Empowering your cloud journey with expert guidance and next-generation solutions",
    image: "https://axiomio.com/wp-content/uploads/2024/05/team-ravindra-namburi.png",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Masquer Shajjad",
    role: "Data & ML Practice Head",
    bio: "Empowering decisions with data-driven precision and machine learning innovation",
    image: "https://axiomio.com/wp-content/uploads/2024/05/team-masquer-shajjad.png",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Sriram Kesavarapu",
    role: "Cloud Practices Lead",
    bio: "Crafting cloud solutions that empower innovation and secure futures",
    image: "https://axiomio.com/wp-content/uploads/2024/05/team-sriram-kesavarapu.png",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Aishwarya Lingampally",
    role: "PR Relations & Customer Care",
    bio: "Building bridges between aspirations and achievements, with every interaction",
    image: "https://axiomio.com/wp-content/uploads/2024/05/team-aishwarya-lingampally.png",
    linkedin: "https://www.linkedin.com/",
  },
];

export function TeamSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionHeader
            label="Our Team"
            title="Dedicated Leadership"
            description="Meet the experts driving innovation and excellence at Axiomio."
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="glass-card rounded-2xl p-6 text-center hover:border-primary/30 transition-all duration-300 h-full flex flex-col">
                {/* Avatar */}
                <div className="relative mx-auto mb-5">
                  <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-primary/10 group-hover:border-primary/30 transition-all duration-300">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&size=112&background=5046e5&color=fff`;
                      }}
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full">
                    <span className="text-xs font-medium text-primary">{member.role}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex justify-center gap-3 mt-4 pt-4 border-t border-border/50">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hiring CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-4 glass-card rounded-2xl px-8 py-5">
            <span className="text-3xl">🚀</span>
            <div className="text-left">
              <h4 className="font-heading font-semibold text-foreground">We're Hiring!</h4>
              <p className="text-sm text-muted-foreground">Join our team of innovators</p>
            </div>
            <a
              href="/contact"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-xl text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              View Positions
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
