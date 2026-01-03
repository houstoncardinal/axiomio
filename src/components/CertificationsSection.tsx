import { motion } from "framer-motion";
import { Award, Shield, Cloud, Code, Database, Lock, CheckCircle2 } from "lucide-react";

// All AWS Partner Badges from public/logos/aws-badges folder
const awsPartnerBadges = [
  {
    name: "AWS DevOps Services Competency",
    level: "Competency",
    image: "/logos/aws-badges/aws_devops.png",
    category: "competency",
  },
  {
    name: "AWS Lambda Service Delivery",
    level: "Service Delivery",
    image: "/logos/aws-badges/aws-lambda-sdp.png",
    category: "delivery",
  },
  {
    name: "AWS Qualified Software",
    level: "Qualified Software",
    image: "/logos/aws-badges/qualified-software.png",
    category: "software",
  },
  {
    name: "Amazon DynamoDB Delivery",
    level: "Service Delivery",
    image: "/logos/aws-badges/dynamodb.png",
    category: "delivery",
  },
  {
    name: "Amazon API Gateway Delivery",
    level: "Service Delivery",
    image: "/logos/aws-badges/api-gateway.png",
    category: "delivery",
  },
  {
    name: "Digital Workplace Services",
    level: "Competency",
    image: "/logos/aws-badges/digitalworkplace.png",
    category: "competency",
  },
  {
    name: "L1 MSSP Services Competency",
    level: "Security Competency",
    image: "/logos/aws-badges/l1-mssp.png",
    category: "security",
  },
];

const azureCertifications = [
  {
    name: "Microsoft Azure",
    level: "Partner",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/150px-Microsoft_Azure.svg.png",
  },
];

const competencies = [
  "Immersion Day Partner",
  "Solution Provider",
  "AWS Lambda Delivery",
  "Amazon DynamoDB Delivery",
  "DevOps Services Competency",
  "Amazon API Gateway Delivery",
  "L1 MSSP Services Competency",
  "Digital Workplace Services",
];

export function CertificationsSection() {
  return (
    <section className="py-16 lg:py-20 relative overflow-hidden bg-muted/20">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-[#FF9900]/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-4">
            <Award className="w-4 h-4" />
            Industry Certifications
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Certified by <span className="text-[#FF9900]">AWS</span> & Industry Leaders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our team holds the highest certifications across AWS, Microsoft Azure, and leading technology partners.
          </p>
        </motion.div>

        {/* AWS Advanced Partner - Hero Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="relative bg-gradient-to-br from-[#232F3E] to-[#131A22] rounded-3xl p-8 lg:p-12 overflow-hidden border border-[#FF9900]/20">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div 
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, #FF9900 1px, transparent 0)`,
                  backgroundSize: '40px 40px',
                }}
              />
            </div>
            
            {/* Glow effect */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#FF9900]/20 rounded-full blur-3xl" />
            
            <div className="relative z-10 grid lg:grid-cols-[300px_1fr] gap-10 items-center">
              {/* Main Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-48 h-48 mb-6 relative">
                  <motion.div
                    className="absolute inset-0 bg-[#FF9900]/20 rounded-full blur-2xl"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <img
                    src="/logos/aws-badges/tiered-badge.png"
                    alt="AWS Advanced Tier Services Partner"
                    className="w-full h-full object-contain relative z-10 drop-shadow-2xl"
                  />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-2">
                  AWS Advanced Partner
                </h3>
                <p className="text-[#FF9900] font-semibold text-sm uppercase tracking-wider">
                  Advanced Tier Services
                </p>
              </motion.div>
              
              {/* Competencies Grid */}
              <div>
                <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <Cloud className="w-5 h-5 text-[#FF9900]" />
                  Partner Competencies & Deliveries
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {competencies.map((comp, i) => (
                    <motion.div
                      key={comp}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.05, duration: 0.4 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-2 text-sm text-gray-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#FF9900] flex-shrink-0" />
                      {comp}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* AWS Partner Badges Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-6">
            <Code className="w-5 h-5 text-[#FF9900]" />
            <h3 className="font-heading text-xl font-semibold text-foreground">AWS Partner Badges</h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
            {awsPartnerBadges.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  transition: { duration: 0.3 } 
                }}
                className="group"
              >
                <div className="bg-background rounded-xl border border-border p-4 hover:border-[#FF9900]/40 hover:shadow-lg hover:shadow-[#FF9900]/10 transition-all duration-300 h-full flex flex-col items-center text-center">
                  <div className="w-16 h-16 mb-3 flex items-center justify-center">
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="font-medium text-foreground text-xs leading-tight mb-2 line-clamp-2">
                    {cert.name}
                  </h4>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                    cert.category === "security" 
                      ? "bg-red-500/10 text-red-500"
                      : cert.category === "competency"
                      ? "bg-[#FF9900]/10 text-[#FF9900]"
                      : cert.category === "software"
                      ? "bg-violet-500/10 text-violet-500"
                      : "bg-blue-500/10 text-blue-500"
                  }`}>
                    {cert.level}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Azure Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Database className="w-5 h-5 text-[#0078D4]" />
            <h3 className="font-heading text-xl font-semibold text-foreground">Microsoft Azure Certifications</h3>
          </div>
          
          <div className="flex flex-wrap gap-4">
            {azureCertifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                className="group"
              >
                <div className="bg-background rounded-xl border border-border p-4 hover:border-[#0078D4]/30 hover:shadow-lg hover:shadow-[#0078D4]/10 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 flex-shrink-0">
                      <img
                        src={cert.image}
                        alt={cert.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm leading-tight mb-1">
                        {cert.name}
                      </h4>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                        cert.level === "Expert" 
                          ? "bg-yellow-500/10 text-yellow-600" 
                          : "bg-[#0078D4]/10 text-[#0078D4]"
                      }`}>
                        {cert.level}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center items-center gap-8 pt-8 border-t border-border/50"
        >
          <div className="flex items-center gap-2 text-muted-foreground">
            <Shield className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">100+ Certified Engineers</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Lock className="w-5 h-5 text-secondary" />
            <span className="text-sm font-medium">SOC 2 Type II Compliant</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Award className="w-5 h-5 text-[#FF9900]" />
            <span className="text-sm font-medium">AWS Advanced Partner</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CertificationsSection;
