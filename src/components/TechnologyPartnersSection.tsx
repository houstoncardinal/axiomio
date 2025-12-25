import { motion } from "framer-motion";
import { Handshake } from "lucide-react";

// Partner logos
import awsLogo from "@/assets/partners/aws-partner.svg";
import googleCloudLogo from "@/assets/partners/google-cloud.svg";
import azureLogo from "@/assets/partners/azure.svg";
import acronisLogo from "@/assets/partners/acronis.svg";
import citrixLogo from "@/assets/partners/citrix.svg";

const partners = [
  {
    name: "AWS",
    logo: awsLogo,
    description: "Advanced Partner",
  },
  {
    name: "Google Cloud",
    logo: googleCloudLogo,
    description: "Cloud Partner",
  },
  {
    name: "Microsoft Azure",
    logo: azureLogo,
    description: "Solutions Partner",
  },
  {
    name: "Acronis",
    logo: acronisLogo,
    description: "Cyber Protect Partner",
  },
  {
    name: "Citrix",
    logo: citrixLogo,
    description: "Diamond Partner",
  },
];

export function TechnologyPartnersSection() {
  return (
    <section className="py-16 lg:py-20 relative overflow-hidden bg-muted/10">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-4">
            <Handshake className="w-4 h-4" />
            Technology Partners
          </span>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            Powered by <span className="text-primary">Industry Leaders</span>
          </h2>
        </motion.div>

        {/* Partner Logos */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 lg:gap-10">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -2, transition: { duration: 0.3 } }}
              className="group flex flex-col items-center"
            >
              <div className="w-36 h-16 md:w-44 md:h-20 lg:w-48 lg:h-24 flex items-center justify-center px-4 py-3 rounded-xl bg-background border border-border/50 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="w-full h-full object-contain"
                  style={{ maxWidth: '100%', maxHeight: '100%' }}
                />
              </div>
              <span className="mt-2 text-[10px] md:text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors">
                {partner.description}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechnologyPartnersSection;
