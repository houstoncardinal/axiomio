import { motion } from "framer-motion";
import { MapPin, Phone, Building2 } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

const offices = [
  {
    city: "Hyderabad",
    country: "India",
    type: "Head Office",
    address: "Financial District - Kapil Kavuri Hub, Plot no.144, Survey no. 37, Nanakramguda, Telangana 500032",
    isHQ: true,
  },
  {
    city: "Hyderabad",
    country: "India",
    type: "Development Center",
    address: "Kompally - Flat no 413, 414, 4th floor, NCL Ganga Plaza, Petbasheerbad, Quthbullapur, Telangana 500067",
    isHQ: false,
  },
  {
    city: "Bengaluru",
    country: "India",
    type: "Office",
    address: "18/20, 1st Flr, Clayworks Create, BLR 560076",
    isHQ: false,
  },
  {
    city: "Newark",
    country: "USA",
    type: "Americas HQ",
    address: "37600 Central Ct. Ste. 270, Newark, CA 94560",
    phone: ["323-499-3203", "872-314-6100", "510-706-0560"],
    isHQ: false,
  },
  {
    city: "Dubai",
    country: "UAE",
    type: "Middle East Office",
    address: "5th Floor, 502, Iris Bay, opp. JW Marriott Hotel, Business Bay, Dubai",
    isHQ: false,
  },
  {
    city: "Edinburgh",
    country: "UK",
    type: "UK Office",
    address: "2 Horsburgh Gardens, Balerno, Edinburgh EH14 7BY",
    phone: ["+44 7740588303"],
    isHQ: false,
  },
];

export function OfficeLocationsSection() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionHeader
            label="Global Presence"
            title="Our Offices"
            description="With offices across major technology hubs, we provide local expertise with global reach."
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {offices.map((office, index) => (
            <motion.div
              key={`${office.city}-${office.type}`}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className={`glass-card rounded-2xl p-6 h-full hover:border-primary/30 transition-all duration-300 ${office.isHQ ? 'border-primary/30 bg-primary/5' : ''}`}>
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl ${office.isHQ ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'} group-hover:bg-primary/20 group-hover:text-primary transition-colors`}>
                      {office.isHQ ? <Building2 className="h-5 w-5" /> : <MapPin className="h-5 w-5" />}
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {office.city}
                      </h3>
                      <p className="text-sm text-muted-foreground">{office.country}</p>
                    </div>
                  </div>
                  {office.isHQ && (
                    <span className="px-2 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs font-medium text-primary">
                      HQ
                    </span>
                  )}
                </div>

                {/* Type */}
                <p className="text-sm font-medium text-primary/70 mb-3">{office.type}</p>

                {/* Address */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {office.address}
                </p>

                {/* Phone numbers */}
                {office.phone && office.phone.length > 0 && (
                  <div className="pt-4 border-t border-border/50">
                    <div className="flex items-start gap-2">
                      <Phone className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <div className="space-y-1">
                        {office.phone.map((num) => (
                          <a
                            key={num}
                            href={`tel:${num.replace(/\D/g, '')}`}
                            className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            {num}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
