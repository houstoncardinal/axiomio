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

// Top row - 6 partners (major cloud providers + security)
const topRowPartners = [
  { name: "AWS", logo: awsLogo, description: "Advanced Partner" },
  { name: "Microsoft Azure", logo: azureLogo, description: "Solutions Partner" },
  { name: "Google Cloud", logo: googleCloudLogo, description: "Cloud Partner" },
  { name: "Cloudflare", logo: cloudflarelogo, description: "Security Partner" },
  { name: "CrowdStrike", logo: crowdstrikeLogo, description: "Endpoint Security" },
  { name: "Zscaler", logo: zscalerLogo, description: "Zero Trust Partner" },
];

// Bottom row - 5 partners (centered)
const bottomRowPartners = [
  { name: "Veeam", logo: veeamLogo, description: "Backup Partner" },
  { name: "VMware", logo: vmwareLogo, description: "Virtualization Partner" },
  { name: "Tenable", logo: tenableLogo, description: "Security Partner" },
  { name: "Crayon", logo: crayonLogo, description: "Software Partner" },
  { name: "Acronis", logo: acronisLogo, description: "Cyber Protect Partner" },
];

function PartnerCard({ partner, index }: { partner: typeof topRowPartners[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -4, transition: { duration: 0.3 } }}
      className="group flex flex-col items-center"
    >
      <div className="w-[140px] sm:w-[150px] md:w-[160px] h-20 md:h-24 flex items-center justify-center px-4 py-3 rounded-xl bg-background border border-border/50 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/15 transition-all duration-300">
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
  );
}

export function TechnologyPartnersSection() {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-muted/10">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10 mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-4">
            <Handshake className="w-4 h-4" />
            Technology Partners
          </span>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            Powered by <span className="text-primary">Industry Leaders</span>
          </h2>
        </motion.div>

        {/* Desktop Layout (lg+): 6 top, 5 bottom centered */}
        <div className="hidden lg:block">
          {/* Top Row - 6 partners */}
          <div className="flex justify-center gap-6 mb-6">
            {topRowPartners.map((partner, index) => (
              <PartnerCard key={partner.name} partner={partner} index={index} />
            ))}
          </div>
          
          {/* Bottom Row - 5 partners centered */}
          <div className="flex justify-center gap-6">
            {bottomRowPartners.map((partner, index) => (
              <PartnerCard key={partner.name} partner={partner} index={index + 6} />
            ))}
          </div>
        </div>

        {/* Tablet Layout (md to lg): 4-4-3 pattern */}
        <div className="hidden md:block lg:hidden">
          {/* Row 1 - 4 partners */}
          <div className="flex justify-center gap-4 mb-4">
            {[...topRowPartners.slice(0, 4)].map((partner, index) => (
              <PartnerCard key={partner.name} partner={partner} index={index} />
            ))}
          </div>
          
          {/* Row 2 - 4 partners */}
          <div className="flex justify-center gap-4 mb-4">
            {[...topRowPartners.slice(4), ...bottomRowPartners.slice(0, 2)].map((partner, index) => (
              <PartnerCard key={partner.name} partner={partner} index={index + 4} />
            ))}
          </div>
          
          {/* Row 3 - 3 partners centered */}
          <div className="flex justify-center gap-4">
            {bottomRowPartners.slice(2).map((partner, index) => (
              <PartnerCard key={partner.name} partner={partner} index={index + 8} />
            ))}
          </div>
        </div>

        {/* Mobile Layout (sm and below): 3-3-3-2 pattern */}
        <div className="block md:hidden">
          {/* Row 1 - 3 partners */}
          <div className="flex justify-center gap-3 mb-4">
            {topRowPartners.slice(0, 3).map((partner, index) => (
              <PartnerCard key={partner.name} partner={partner} index={index} />
            ))}
          </div>
          
          {/* Row 2 - 3 partners */}
          <div className="flex justify-center gap-3 mb-4">
            {topRowPartners.slice(3, 6).map((partner, index) => (
              <PartnerCard key={partner.name} partner={partner} index={index + 3} />
            ))}
          </div>
          
          {/* Row 3 - 3 partners */}
          <div className="flex justify-center gap-3 mb-4">
            {bottomRowPartners.slice(0, 3).map((partner, index) => (
              <PartnerCard key={partner.name} partner={partner} index={index + 6} />
            ))}
          </div>
          
          {/* Row 4 - 2 partners centered */}
          <div className="flex justify-center gap-3">
            {bottomRowPartners.slice(3).map((partner, index) => (
              <PartnerCard key={partner.name} partner={partner} index={index + 9} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechnologyPartnersSection;