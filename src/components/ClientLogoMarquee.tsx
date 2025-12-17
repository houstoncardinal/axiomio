import { motion } from "framer-motion";

const clients = [
  { name: "Tatami", initials: "T" },
  { name: "iA", initials: "iA" },
  { name: "Aeries Group", initials: "AG" },
  { name: "EG2", initials: "EG2" },
  { name: "Criteo", initials: "C" },
  { name: "KUN", initials: "KUN" },
  { name: "Smartek", initials: "ST" },
  { name: "Tile", initials: "T" },
  { name: "Tighe Logistics", initials: "TL" },
  { name: "Port Asia", initials: "PA" },
  { name: "G-Media", initials: "GM" },
  { name: "Expat", initials: "E" },
  { name: "Sollutions", initials: "S" },
  { name: "Azend", initials: "AZ" },
  { name: "X2", initials: "X2" },
  { name: "Sipped", initials: "SP" },
];

const partners = [
  { name: "AWS", initials: "AWS" },
  { name: "Google Cloud", initials: "GC" },
  { name: "Microsoft Azure", initials: "Azure" },
  { name: "Acronis", initials: "AC" },
  { name: "Citrix", initials: "CX" },
];

const featuredIn = [
  { name: "Forbes", initials: "F" },
  { name: "The CTO Magazine", initials: "CTO" },
  { name: "AP News", initials: "AP" },
];

function LogoCard({ name, initials }: { name: string; initials: string }) {
  return (
    <div className="flex-shrink-0 group">
      <div className="h-16 w-32 rounded-xl bg-muted/30 border border-border/30 flex items-center justify-center text-muted-foreground/60 font-heading font-bold text-base transition-all duration-300 group-hover:text-primary group-hover:border-primary/30 group-hover:bg-primary/5 group-hover:scale-105">
        <span className="truncate px-2">{initials}</span>
      </div>
      <p className="text-xs text-muted-foreground/40 text-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
        {name}
      </p>
    </div>
  );
}

export function ClientLogoMarquee() {
  const doubledClients = [...clients, ...clients];

  return (
    <section className="py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-4">
            <span className="w-6 h-px bg-primary" />
            Our Esteemed Clients
            <span className="w-6 h-px bg-primary" />
          </span>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
            Trusted by industry leaders worldwide
          </h2>
        </motion.div>
      </div>

      {/* Marquee container */}
      <div className="relative">
        {/* Gradient overlays for smooth fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* First row - scrolling left */}
        <div className="flex overflow-hidden mb-6">
          <motion.div
            className="flex gap-8"
            animate={{ x: [0, -50 * clients.length] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {doubledClients.map((client, index) => (
              <LogoCard key={`${client.name}-${index}`} name={client.name} initials={client.initials} />
            ))}
          </motion.div>
        </div>

        {/* Second row - scrolling right */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-8"
            animate={{ x: [-50 * clients.length, 0] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 35,
                ease: "linear",
              },
            }}
          >
            {doubledClients.map((client, index) => (
              <LogoCard key={`reverse-${client.name}-${index}`} name={client.name} initials={client.initials} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Partners section */}
      <div className="container mx-auto px-6 lg:px-8 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground/60">
            Partners in Solution
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center items-center gap-6 lg:gap-10"
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
              <div className="h-14 px-6 rounded-xl bg-primary/5 border border-primary/20 flex items-center justify-center text-primary font-heading font-bold text-sm transition-all duration-300 group-hover:bg-primary/10 group-hover:scale-105">
                {partner.initials}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Featured In section */}
      <div className="container mx-auto px-6 lg:px-8 mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground/60">
            Featured In
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center items-center gap-8 lg:gap-12"
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
              className="text-muted-foreground/50 font-heading font-semibold text-lg hover:text-foreground transition-colors cursor-default"
            >
              {media.name}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
