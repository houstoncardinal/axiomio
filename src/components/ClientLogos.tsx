import { motion } from "framer-motion";

const logos = [
  { name: "Kuliza", initials: "Kuliza" },
  { name: "India Accelerator", initials: "iA" },
  { name: "SciFund Challenge", initials: "SciFund" },
  { name: "Wipro", initials: "Wipro" },
  { name: "FPT", initials: "FPT" },
  { name: "KIMS Hospitals", initials: "KIMS" },
];

export function ClientLogos() {
  return (
    <div className="py-16 border-y border-border/30">
      <div className="container mx-auto px-6 lg:px-8">
        <p className="text-center text-sm text-muted-foreground uppercase tracking-wider mb-10">
          Trusted by industry leaders
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-12 w-24 rounded-lg bg-muted/30 border border-border/30 flex items-center justify-center text-muted-foreground/50 font-heading font-bold text-lg transition-all duration-300 group-hover:text-primary group-hover:border-primary/30 group-hover:bg-primary/5">
                {logo.initials}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
