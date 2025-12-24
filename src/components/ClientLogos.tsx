import { motion } from "framer-motion";

const logos = [
  { name: "Kuliza", logo: "/logos/Client Logos/kuliaz.png" },
  { name: "India Accelerator", logo: "/logos/Client Logos/indiaaccelerator.webp" },
  { name: "SciFund Challenge", logo: "/logos/Client Logos/scifund.png" },
  { name: "Wipro", logo: "/logos/Client Logos/wipro.png" },
  { name: "FPT", logo: "/logos/Client Logos/FPT.png" },
  { name: "KIMS Hospitals", logo: "/logos/Client Logos/kims.png" },
  { name: "Fortude", logo: "/logos/Client Logos/fortude.png" },
  { name: "Cogent", logo: "/logos/Client Logos/COGENT.png" },
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
              <div className="h-16 w-32 rounded-lg bg-muted/30 border border-border/30 flex items-center justify-center p-3 transition-all duration-300 group-hover:border-primary/30 group-hover:bg-primary/5">
                <img
                  src={logo.logo}
                  alt={logo.name}
                  className="max-h-full max-w-full object-contain filter dark:brightness-90"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
