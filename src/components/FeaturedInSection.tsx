import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";

const pressLogos = [
  {
    name: "Business Insider",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Business_Insider_Logo.svg/440px-Business_Insider_Logo.svg.png",
    url: "https://markets.businessinsider.com/news/stocks/axiomio-disrupts-cloud-security-industry-with-launch-of-ai-powered-x-ops-platform-on-aws-marketplace-1033742303",
  },
  {
    name: "Yahoo Finance",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Yahoo%21_Finance_logo_2021.png/440px-Yahoo%21_Finance_logo_2021.png",
    url: "https://finance.yahoo.com/news/axiomio-disrupts-cloud-security-industry-212400169.html",
  },
  {
    name: "CEO Weekly",
    logo: "https://ceoweekly.com/wp-content/uploads/2023/07/CEO-Weekly-Logo.png",
    url: "https://ceoweekly.com/how-axiomio-rose-quickly-in-it-consulting-key-strategies/",
  },
  {
    name: "AP News",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Associated_Press_logo_2012.svg/440px-Associated_Press_logo_2012.svg.png",
    url: "https://apnews.com/press-release/marketersmedia/cloud-computing-4a455dc97796ac1db35c50f38eb7b82f",
  },
  {
    name: "The CEO Magazine",
    logo: "https://www.theceo.in/wp-content/uploads/2023/05/cropped-The-CEO-Magazine-Logo.png",
    url: "https://www.theceo.in/magazine/the-ceo-magazine/10-leading-digital-marketing-companies-to-watch-in-2024",
  },
  {
    name: "Grit Daily",
    logo: "https://gritdaily.com/wp-content/uploads/2020/07/grit-daily-logo.png",
    url: "https://gritdaily.com/axiomio-secret-behind-rapid-ascent-it-consulting/",
  },
];

export function FeaturedInSection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6 lg:px-8">
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-16">
          {pressLogos.map((press, index) => (
            <motion.a
              key={press.name}
              href={press.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <img
                src={press.logo}
                alt={`${press.name} logo`}
                className="h-8 md:h-10 w-auto object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300 dark:invert dark:brightness-200"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
