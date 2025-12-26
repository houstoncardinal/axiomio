import { motion } from "framer-motion";

// Partner logos
import awsLogo from "@/assets/partners/aws-partner.svg";
import googleCloudLogo from "@/assets/partners/google-cloud.svg";
import azureLogo from "@/assets/partners/azure.svg";
import acronisLogo from "@/assets/partners/acronis.svg";
import citrixLogo from "@/assets/partners/citrix.svg";

// Client logos with actual image paths
const clients = [
  { name: "Kuliza", logo: "/logos/client-logos/kuliaz.png" },
  { name: "India Accelerator", logo: "/logos/client-logos/indiaaccelerator.webp" },
  { name: "SciFund Challenge", logo: "/logos/client-logos/scifund.png" },
  { name: "ECI", logo: "/logos/client-logos/eci.png" },
  { name: "OFOFO", logo: "/logos/client-logos/Ofofo.png" },
  { name: "KUN", logo: "/logos/client-logos/kun.jpg" },
  { name: "Pi Tech", logo: "/logos/client-logos/pi.jpg" },
  { name: "Ideaspring Capital", logo: "/logos/client-logos/ideaspring.webp" },
  { name: "Phi Capital", logo: "/logos/client-logos/phicapital.png" },
  { name: "PenguinAI", logo: "/logos/client-logos/penguinai.png" },
  { name: "Autodit", logo: "/logos/client-logos/autodit-1.png" },
  { name: "Kalaam", logo: "/logos/client-logos/kalaam-.png" },
  { name: "InfyStrat", logo: "/logos/client-logos/infystrat.png" },
  { name: "Wipro", logo: "/logos/client-logos/wipro.png" },
  { name: "Cogent", logo: "/logos/client-logos/COGENT.png" },
  { name: "Avone", logo: "/logos/client-logos/AWONE.png" },
  { name: "AIS", logo: "/logos/client-logos/AIS.png" },
  { name: "Alpvest Institute", logo: "/logos/client-logos/AIF.webp" },
  { name: "Cryptoforce", logo: "/logos/client-logos/cryptoforce.png" },
  { name: "Fortude", logo: "/logos/client-logos/fortude.png" },
  { name: "EMFOI", logo: "/logos/client-logos/emfoi.png" },
  { name: "KIMS Hospitals", logo: "/logos/client-logos/kims.png" },
  { name: "King & Haxson", logo: "/logos/client-logos/kingshaxson.png" },
  { name: "Marshall & Sterling", logo: "/logos/client-logos/marshall.png" },
  { name: "OneForce", logo: "/logos/client-logos/oneforce.png" },
  { name: "Orchid IT", logo: "/logos/client-logos/orchid.png" },
  { name: "Pay Capital", logo: "/logos/client-logos/paycapital.jpg" },
  { name: "N2N", logo: "/logos/client-logos/N2N.webp" },
  { name: "Roxiler Systems", logo: "/logos/client-logos/roxiler.png" },
  { name: "Sharpsell", logo: "/logos/client-logos/sharpsell.png" },
  { name: "Zertain", logo: "/logos/client-logos/Zertain.png" },
  { name: "FPT", logo: "/logos/client-logos/FPT.png" },
  { name: "Rezorex", logo: "/logos/client-logos/rezorex.png" },
  { name: "Manomay", logo: "/logos/client-logos/manomay.png" },
  { name: "Planify", logo: "/logos/client-logos/Planify.png" },
  { name: "K&S", logo: "/logos/client-logos/kands.jpg" },
  { name: "JSJ", logo: "/logos/client-logos/JSJ_Logo.avif" },
  { name: "CricClubs", logo: "/logos/client-logos/cricclubs-logo.png" },
  { name: "The Byke", logo: "/logos/client-logos/the_byke_logo.png" },
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
          className="max-h-full max-w-full object-contain dark:brightness-110 dark:contrast-110"
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
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Powering digital transformation for industry leaders across fintech, healthcare, enterprise, and technology sectors
          </p>
          <p className="text-sm text-muted-foreground/80 font-medium max-w-3xl mx-auto italic">
            Trusted by enterprises where downtime costs millions, and security failures aren't an option.
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
