import { motion } from "framer-motion";
import { Handshake } from "lucide-react";

// Partner logos
import awsLogo from "@/assets/partners/aws.png";
import azureLogo from "@/assets/partners/azure.png";
import googleCloudLogo from "@/assets/partners/google-cloud.png";
import cloudflarelogo from "@/assets/partners/cloudflare.png";
import crayonLogo from "@/assets/partners/crayon.png";
import veeamLogo from "@/assets/partners/veeam.png";
import vmwareLogo from "@/assets/partners/vmware.png";
import tenableLogo from "@/assets/partners/tenable.png";
import crowdstrikeLogo from "@/assets/partners/crowdstrike.png";
import zscalerLogo from "@/assets/partners/zscaler.png";
import acronisLogo from "@/assets/partners/acronis.svg";

const partners = [
  // Row 1
  { name: "AWS", logo: awsLogo, description: "Advanced Partner" },
  { name: "Microsoft Azure", logo: azureLogo, description: "Solutions Partner" },
  { name: "Google Cloud", logo: googleCloudLogo, description: "Cloud Partner" },
  { name: "Cloudflare", logo: cloudflarelogo, description: "Security Partner" },
  { name: "Crayon", logo: crayonLogo, description: "Software Partner" },
  // Row 2
  { name: "Veeam", logo: veeamLogo, description: "Backup Partner" },
  { name: "VMware", logo: vmwareLogo, description: "Virtualization Partner" },
  { name: "Tenable", logo: tenableLogo, description: "Security Partner" },
  { name: "CrowdStrike", logo: crowdstrikeLogo, description: "Endpoint Security" },
  { name: "Zscaler", logo: zscalerLogo, description: "Zero Trust Partner" },
  // Row 3
  { name: "Acronis", logo: acronisLogo, description: "Cyber Protect Partner" },
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

        {/* Partner Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-4 md:gap-6 justify-items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -2, transition: { duration: 0.3 } }}
              className="group flex flex-col items-center w-full"
            >
              <div className="w-full max-w-[160px] h-20 md:h-24 flex items-center justify-center px-4 py-3 rounded-xl bg-background border border-border/50 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="w-full h-full object-contain dark:invert dark:brightness-200"
                  style={{ maxWidth: '100%', maxHeight: '100%' }}
                />
              </div>
              <span className="mt-2 text-[10px] md:text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors text-center">
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