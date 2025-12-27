import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { useState } from "react";

const pressLogos = [
  {
    name: "Business Insider",
    logo: "/logos/press/business-insider.svg",
    url: "https://markets.businessinsider.com/news/stocks/axiomio-disrupts-cloud-security-industry-with-launch-of-ai-powered-x-ops-platform-on-aws-marketplace-1033742303",
  },
  {
    name: "Yahoo Finance",
    logo: "/logos/press/yahoo-finance.svg",
    url: "https://finance.yahoo.com/news/axiomio-disrupts-cloud-security-industry-212400169.html",
  },
  {
    name: "CEO Weekly",
    logo: "/logos/press/ceo-weekly.svg",
    url: "https://ceoweekly.com/how-axiomio-rose-quickly-in-it-consulting-key-strategies/",
  },
  {
    name: "AP News",
    logo: "/logos/press/ap-news.svg",
    url: "https://apnews.com/press-release/marketersmedia/cloud-computing-4a455dc97796ac1db35c50f38eb7b82f",
  },
  {
    name: "The CEO Magazine",
    logo: "/logos/press/ceo-magazine.svg",
    url: "https://www.theceo.in/magazine/the-ceo-magazine/10-leading-digital-marketing-companies-to-watch-in-2024",
  },
  {
    name: "Grit Daily",
    logo: "/logos/press/grit-daily.svg",
    url: "https://gritdaily.com/axiomio-secret-behind-rapid-ascent-it-consulting/",
  },
];

// Component to handle logo loading with fallback
function PressLogo({ logo, name }: { logo: string; name: string }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <span className="font-heading text-xs md:text-sm font-bold text-muted-foreground/60 group-hover:text-foreground transition-colors duration-300 text-center px-2">
        {name}
      </span>
    );
  }

  return (
    <img
      src={logo}
      alt={`${name} logo`}
      className="h-14 md:h-16 lg:h-20 w-auto max-w-full object-contain opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 text-foreground"
      onError={() => setHasError(true)}
      loading="lazy"
    />
  );
}

export function FeaturedInSection() {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionHeader
            label="Press Coverage"
            title="Featured In"
            description="Our work and insights have been recognized by leading business publications worldwide."
          />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6 mt-12">
          {pressLogos.map((press, index) => (
            <motion.a
              key={press.name}
              href={press.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center p-6 lg:p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/40 hover:bg-card/80 hover:shadow-xl transition-all duration-300 min-h-[100px] lg:min-h-[120px] relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Hover background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <PressLogo logo={press.logo} name={press.name} />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Press note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-xs text-muted-foreground/60 uppercase tracking-wider">
            Click any logo to read the full coverage
          </p>
        </motion.div>
      </div>
    </section>
  );
}
