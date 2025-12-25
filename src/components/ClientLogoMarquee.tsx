import { motion } from "framer-motion";

// Partner logos
import awsLogo from "@/assets/partners/aws-partner.svg";
import googleCloudLogo from "@/assets/partners/google-cloud.svg";
import azureLogo from "@/assets/partners/azure.svg";
import acronisLogo from "@/assets/partners/acronis.svg";
import citrixLogo from "@/assets/partners/citrix.svg";

// Client logos with actual image paths
const clients = [
  { name: "Kuliza", logo: "/logos/Client Logos/kuliaz.png" },
  { name: "India Accelerator", logo: "/logos/Client Logos/indiaaccelerator.webp" },
  { name: "SciFund Challenge", logo: "/logos/Client Logos/scifund.png" },
  { name: "ECI", logo: "/logos/Client Logos/eci.png" },
  { name: "OFOFO", logo: "/logos/Client Logos/Ofofo.png" },
  { name: "KUN", logo: "/logos/Client Logos/kun.jpg" },
  { name: "Pi Tech", logo: "/logos/Client Logos/pi.jpg" },
  { name: "Ideaspring Capital", logo: "/logos/Client Logos/ideaspring.webp" },
  { name: "Phi Capital", logo: "/logos/Client Logos/phicapital.png" },
  { name: "PenguinAI", logo: "/logos/Client Logos/penguinai.png" },
  { name: "Autodit", logo: "/logos/Client Logos/autodit-1.png" },
  { name: "Kalaam", logo: "/logos/Client Logos/kalaam-.png" },
  { name: "InfyStrat", logo: "/logos/Client Logos/infystrat.png" },
  { name: "Wipro", logo: "/logos/Client Logos/wipro.png" },
  { name: "Cogent", logo: "/logos/Client Logos/COGENT.png" },
  { name: "Avone", logo: "/logos/Client Logos/AWONE.png" },
  { name: "AIS", logo: "/logos/Client Logos/AIS.png" },
  { name: "Alpvest Institute", logo: "/logos/Client Logos/AIF.webp" },
  { name: "Cryptoforce", logo: "/logos/Client Logos/cryptoforce.png" },
  { name: "Fortude", logo: "/logos/Client Logos/fortude.png" },
  { name: "EMFOI", logo: "/logos/Client Logos/emfoi.png" },
  { name: "KIMS Hospitals", logo: "/logos/Client Logos/kims.png" },
  { name: "King & Haxson", logo: "/logos/Client Logos/kingshaxson.png" },
  { name: "Marshall & Sterling", logo: "/logos/Client Logos/marshall.png" },
  { name: "OneForce", logo: "/logos/Client Logos/oneforce.png" },
  { name: "Orchid IT", logo: "/logos/Client Logos/orchid.png" },
  { name: "Pay Capital", logo: "/logos/Client Logos/paycapital.jpg" },
  { name: "N2N", logo: "/logos/Client Logos/N2N.webp" },
  { name: "Roxiler Systems", logo: "/logos/Client Logos/roxiler.png" },
  { name: "Sharpsell", logo: "/logos/Client Logos/sharpsell.png" },
  { name: "Zertain", logo: "/logos/Client Logos/Zertain.png" },
  { name: "FPT", logo: "/logos/Client Logos/FPT.png" },
  { name: "Rezorex", logo: "/logos/Client Logos/rezorex.png" },
  { name: "Manomay", logo: "/logos/Client Logos/manomay.png" },
  { name: "Planify", logo: "/logos/Client Logos/Planify.png" },
  { name: "K&S", logo: "/logos/Client Logos/kands.jpg" },
  { name: "JSJ", logo: "/logos/Client Logos/JSJ_Logo.avif" },
  { name: "CricClubs", logo: "/logos/Client Logos/cricclubs-logo.png" },
  { name: "The Byke", logo: "/logos/Client Logos/the_byke_logo.png" },
];

const partners = [
  { name: "AWS", logo: awsLogo, description: "AWS Advanced Partner" },
  { name: "Google Cloud", logo: googleCloudLogo, description: "Cloud Partner" },
  { name: "Microsoft Azure", logo: azureLogo, description: "Solutions Partner" },
  { name: "Acronis", logo: acronisLogo, description: "Cyber Protect Partner" },
  { name: "Citrix", logo: citrixLogo, description: "Diamond Partner" },
];

const featuredIn = [
  { name: "Forbes", style: "font-serif font-bold" },
  { name: "The CTO Magazine", style: "font-medium" },
  { name: "AP News", style: "font-bold" },
];

interface ClientLogoProps {
  name: string;
  logo: string;
}

function ClientLogo({ name, logo }: ClientLogoProps) {
  return (
    <div className="flex-shrink-0 group cursor-default">
      <div className="h-20 w-40 rounded-xl bg-card/50 border border-border/30 flex items-center justify-center transition-all duration-300 group-hover:border-primary/30 group-hover:bg-primary/5 group-hover:scale-105 px-4 py-3">
        <img
          src={logo}
          alt={name}
          className="max-h-full max-w-full object-contain filter dark:brightness-90"
          loading="lazy"
        />
      </div>
      <p className="text-[10px] text-muted-foreground/40 text-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity truncate w-40">
        {name}
      </p>
    </div>
  );
}

export function ClientLogoMarquee() {
  const firstHalf = clients.slice(0, Math.ceil(clients.length / 2));
  const secondHalf = clients.slice(Math.ceil(clients.length / 2));
  
  const doubledFirst = [...firstHalf, ...firstHalf];
  const doubledSecond = [...secondHalf, ...secondHalf];

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
            <span className="w-8 h-px bg-gradient-to-r from-transparent to-primary" />
            Trusted Partnerships
            <span className="w-8 h-px bg-gradient-to-l from-transparent to-primary" />
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Esteemed Clients
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Powering digital transformation for industry leaders across fintech, healthcare, enterprise, and technology sectors
          </p>
        </motion.div>
      </div>

      {/* Marquee container */}
      <div className="relative">
        {/* Gradient overlays for smooth fade */}
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* First row - scrolling left */}
        <div className="flex overflow-hidden mb-8">
          <motion.div
            className="flex gap-6"
            animate={{ x: [0, -176 * firstHalf.length] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {doubledFirst.map((client, index) => (
              <ClientLogo key={`${client.name}-${index}`} {...client} />
            ))}
          </motion.div>
        </div>

        {/* Second row - scrolling right */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: [-176 * secondHalf.length, 0] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 45,
                ease: "linear",
              },
            }}
          >
            {doubledSecond.map((client, index) => (
              <ClientLogo key={`reverse-${client.name}-${index}`} {...client} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Partners section */}
      <div className="container mx-auto px-6 lg:px-8 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground/60 font-medium">
            Technology Partners
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center items-center gap-4 md:gap-8 lg:gap-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="group flex flex-col items-center"
            >
              <div className="w-32 h-14 md:w-40 md:h-16 lg:w-44 lg:h-20 px-4 py-2 rounded-xl bg-card/80 border border-border/40 flex items-center justify-center transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-lg group-hover:shadow-primary/10 group-hover:scale-105">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="mt-2 text-[10px] md:text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors">
                {partner.description}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Featured In section */}
      <div className="container mx-auto px-6 lg:px-8 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground/60 font-medium">
            As Featured In
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center items-center gap-10 lg:gap-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {featuredIn.map((media, index) => (
            <motion.div
              key={media.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="text-muted-foreground/40 text-xl hover:text-foreground transition-colors cursor-default"
            >
              <span className={media.style}>{media.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
