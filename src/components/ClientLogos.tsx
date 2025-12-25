import { motion } from "framer-motion";

const logos = [
  { name: "Kuliza", logo: "/logos/client-logos/kuliaz.png" },
  { name: "India Accelerator", logo: "/logos/client-logos/indiaaccelerator.webp" },
  { name: "SciFund Challenge", logo: "/logos/client-logos/scifund.png" },
  { name: "Wipro", logo: "/logos/client-logos/wipro.png" },
  { name: "FPT", logo: "/logos/client-logos/FPT.png" },
  { name: "KIMS Hospitals", logo: "/logos/client-logos/kims.png" },
  { name: "Fortude", logo: "/logos/client-logos/fortude.png" },
  { name: "Cogent", logo: "/logos/client-logos/COGENT.png" },
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
                  className="max-h-full max-w-full object-contain dark:brightness-110 dark:contrast-110"
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
