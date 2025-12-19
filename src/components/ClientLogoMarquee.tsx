import { motion } from "framer-motion";

// Client logos styled to match the actual branding
const clients = [
  // Row 1
  { name: "Kuliza", display: "kuliza", style: "text-blue-600 font-medium lowercase", hasIcon: true, iconStyle: "text-blue-400" },
  { name: "India Accelerator", display: "iA", style: "font-black text-gray-900 dark:text-white italic", subtext: "INDIA ACCELERATOR" },
  { name: "SciFund Challenge", display: "#SciFund", style: "text-cyan-500 font-bold", subtext: "CHALLENGE" },
  { name: "ECI", display: "ECI", style: "text-gray-800 dark:text-gray-200 font-bold tracking-wide", hasPlus: true },
  { name: "OFOFO", display: "OFOFO", style: "text-cyan-400 font-bold tracking-widest" },
  { name: "KUN", display: "KUN", style: "text-gray-900 dark:text-white font-black tracking-wider" },
  { name: "Pismo", display: "P", style: "text-purple-600 font-bold text-2xl" },
  
  // Row 2
  { name: "Ideaspring Capital", display: "ideaspring", style: "text-blue-500 font-semibold lowercase", subtext: "CAPITAL" },
  { name: "Phi Capital", display: "φ phi capital", style: "text-gray-700 dark:text-gray-300 font-light" },
  { name: "PenguinAI", display: "PenguinAI", style: "text-blue-600 font-semibold", hasIcon: true },
  { name: "Autodit", display: "Autodit", style: "text-blue-400 font-medium italic" },
  { name: "Kalaam", display: "kalaam", style: "text-orange-500 font-semibold", hasFlower: true },
  { name: "InfyStrat", display: "InfyStrat", style: "text-blue-700 font-medium", subtext: "Your IT Strategic Partner" },
  { name: "Wipro", display: "wipro", style: "text-blue-800 dark:text-blue-400 font-medium lowercase", hasPattern: true },
  
  // Row 3
  { name: "Cogent", display: "COGENT", style: "text-orange-500 font-bold tracking-wide" },
  { name: "Avone", display: "AVONE", style: "text-white bg-gray-800 px-3 py-1 rounded font-medium" },
  { name: "AIS", display: "AIS", style: "text-gray-700 dark:text-gray-300 font-bold", hasRedDot: true },
  { name: "Alpvest Institute", display: "Alpvest Institute", style: "text-blue-600 font-medium text-xs", subtext: "for FutureTech." },
  { name: "Cryptoforce", display: "Cryptoforce", style: "text-blue-500 font-semibold", hasX: true },
  { name: "Fortude", display: "FORTUDE", style: "text-gray-900 dark:text-white font-bold tracking-widest" },
  { name: "EMFOI", display: "EMFOI", style: "text-gray-700 dark:text-gray-300 font-semibold", hasIcon: true },
  
  // Row 4
  { name: "KIMS Hospitals", display: "KIMS", style: "text-red-600 font-bold", subtext: "HOSPITALS™" },
  { name: "King & Haxson", display: "KING&HAXSON", style: "text-blue-900 dark:text-blue-300 font-bold text-xs" },
  { name: "Marshall & Sterling", display: "Marshall & Sterling", style: "text-blue-800 dark:text-blue-400 font-serif italic text-sm", subtext: "INSURANCE" },
  { name: "OneForce", display: "ONEFORCE", style: "text-blue-700 dark:text-blue-400 font-black tracking-tight" },
  { name: "Orchid IT", display: "ORCHID", style: "text-blue-500 font-bold italic", subtext: "IT is power..." },
  { name: "Pay Capital", display: "PAY CAPITAL", style: "text-green-600 font-semibold text-xs", hasCircle: true },
  { name: "Pi Tech", display: "Ⓟ", style: "text-emerald-500 font-light text-3xl" },
  
  // Row 5
  { name: "Roxiler Systems", display: "ROXILER", style: "text-gray-900 dark:text-white font-bold", hasX: true, subtext: "SYSTEMS" },
  { name: "Sharpsell", display: "sharpsell", style: "text-amber-500 font-bold lowercase", hasS: true },
  { name: "Zertain", display: "Zertain", style: "text-gray-800 dark:text-gray-200 font-medium" },
  { name: "FPT", display: "FPT", style: "font-black", isFPT: true },
];

const partners = [
  { name: "AWS", display: "AWS", style: "text-orange-500 font-bold" },
  { name: "Google Cloud", display: "Google Cloud", style: "text-blue-500 font-medium" },
  { name: "Microsoft Azure", display: "Azure", style: "text-blue-600 font-semibold" },
  { name: "Acronis", display: "Acronis", style: "text-red-500 font-bold" },
  { name: "Citrix", display: "Citrix", style: "text-gray-700 dark:text-gray-300 font-semibold" },
];

const featuredIn = [
  { name: "Forbes", style: "font-serif font-bold" },
  { name: "The CTO Magazine", style: "font-medium" },
  { name: "AP News", style: "font-bold" },
];

interface ClientLogoProps {
  name: string;
  display: string;
  style: string;
  subtext?: string;
  hasIcon?: boolean;
  iconStyle?: string;
  hasPlus?: boolean;
  hasFlower?: boolean;
  hasPattern?: boolean;
  hasRedDot?: boolean;
  hasX?: boolean;
  hasCircle?: boolean;
  hasS?: boolean;
  isFPT?: boolean;
}

function ClientLogo({ name, display, style, subtext, hasPlus, hasRedDot, isFPT }: ClientLogoProps) {
  return (
    <div className="flex-shrink-0 group cursor-default">
      <div className="h-20 w-40 rounded-xl bg-card/50 border border-border/30 flex flex-col items-center justify-center transition-all duration-300 group-hover:border-primary/30 group-hover:bg-primary/5 group-hover:scale-105 px-3">
        <div className="flex items-center gap-1">
          {hasRedDot && <span className="w-2 h-2 rounded-full bg-red-500 mr-1" />}
          <span className={`${style} whitespace-nowrap`}>
            {display}
            {hasPlus && <sup className="text-cyan-400 font-normal">+</sup>}
          </span>
          {isFPT && (
            <span className="flex">
              <span className="text-blue-600 font-black">F</span>
              <span className="text-orange-500 font-black">P</span>
              <span className="text-green-500 font-black">T</span>
            </span>
          )}
        </div>
        {subtext && (
          <span className="text-[9px] text-muted-foreground/70 uppercase tracking-wider mt-0.5">
            {subtext}
          </span>
        )}
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
          className="flex flex-wrap justify-center items-center gap-8 lg:gap-12"
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
              className="group"
            >
              <div className="h-16 px-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 flex items-center justify-center transition-all duration-300 group-hover:from-primary/20 group-hover:to-primary/10 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-primary/10">
                <span className={`${partner.style} text-lg`}>{partner.display}</span>
              </div>
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
