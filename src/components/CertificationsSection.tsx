import { motion } from "framer-motion";
import { Award, Shield, Cloud, Code, Database, Lock } from "lucide-react";

// AWS Badges
import awsDevOpsEngineer from "@/assets/badges/aws-devops-engineer-pro.png";
import awsDeveloperAssociate from "@/assets/badges/aws-developer-associate.png";
import awsSolutionsArchitect from "@/assets/badges/aws-solutions-architect-associate.png";
import awsLogo from "@/assets/badges/aws-logo.png";

// Azure Badges
import azureDeveloper from "@/assets/badges/azure-developer-associate.png";
import azureSecurityEngineer from "@/assets/badges/azure-security-engineer.png";
import azureDataEngineer from "@/assets/badges/azure-data-engineer.png";
import microsoftCsp from "@/assets/badges/microsoft-csp.svg";

// Partner Logos
import acronisLogo from "@/assets/badges/acronis-logo.png";
import citrixLogo from "@/assets/badges/citrix-logo.png";

const awsCertifications = [
  {
    name: "AWS Certified DevOps Engineer",
    level: "Professional",
    image: awsDevOpsEngineer,
  },
  {
    name: "AWS Certified Developer",
    level: "Associate",
    image: awsDeveloperAssociate,
  },
  {
    name: "AWS Certified Solutions Architect",
    level: "Associate",
    image: awsSolutionsArchitect,
  },
];

const azureCertifications = [
  {
    name: "Azure Developer",
    level: "Associate",
    image: azureDeveloper,
  },
  {
    name: "Azure Security Engineer",
    level: "Expert",
    image: azureSecurityEngineer,
  },
  {
    name: "Azure Data Engineer",
    level: "Associate",
    image: azureDataEngineer,
  },
];

const partnerBadges = [
  {
    name: "AWS Advanced Partner",
    description: "Advanced Tier Services",
    logo: awsLogo,
    competencies: [
      "Immersion Day",
      "Solution Provider",
      "AWS Lambda Delivery",
      "Amazon DynamoDB Delivery",
      "DevOps Services Competency",
      "Amazon API Gateway Delivery",
      "L1 MSSP Services Competency",
      "Digital Workplace Services Competency",
    ],
  },
  {
    name: "Microsoft",
    description: "Cloud Solution Provider",
    logo: microsoftCsp,
    competencies: ["Azure", "Office 365"],
  },
  {
    name: "Acronis",
    description: "Cyber Protect Partner",
    logo: acronisLogo,
    competencies: ["Backup Solutions", "Cyber Protection"],
  },
  {
    name: "Citrix",
    description: "Partner Service Provider",
    logo: citrixLogo,
    competencies: ["Diamond Validated"],
  },
];

export function CertificationsSection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-muted/20">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-4">
            <Award className="w-4 h-4" />
            Industry Certifications
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Certified by <span className="text-primary">Industry Leaders</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our team holds the highest certifications across AWS, Microsoft Azure, and leading technology partners.
          </p>
        </motion.div>

        {/* Partner Badges Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <Cloud className="w-5 h-5 text-primary" />
            <h3 className="font-heading text-xl font-semibold text-foreground">Partner Certifications</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerBadges.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                className="group"
              >
                <div className="bg-background rounded-2xl border border-border p-6 h-full hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 mb-4 flex items-center justify-center">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">{partner.name}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{partner.description}</p>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {partner.competencies.slice(0, 3).map((comp) => (
                        <span
                          key={comp}
                          className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                        >
                          {comp}
                        </span>
                      ))}
                      {partner.competencies.length > 3 && (
                        <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                          +{partner.competencies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* AWS Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <Code className="w-5 h-5 text-[#FF9900]" />
            <h3 className="font-heading text-xl font-semibold text-foreground">AWS Certifications</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {awsCertifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                className="group"
              >
                <div className="bg-background rounded-2xl border border-border p-6 hover:border-[#FF9900]/30 hover:shadow-lg hover:shadow-[#FF9900]/10 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 flex-shrink-0">
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
                      <span className="text-xs px-2 py-0.5 rounded-full bg-[#FF9900]/10 text-[#FF9900] font-medium">
                        {cert.level}
                      </span>
                    </div>
                  </div>
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
          <div className="flex items-center gap-3 mb-8">
            <Database className="w-5 h-5 text-[#0078D4]" />
            <h3 className="font-heading text-xl font-semibold text-foreground">Microsoft Azure Certifications</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <div className="bg-background rounded-2xl border border-border p-6 hover:border-[#0078D4]/30 hover:shadow-lg hover:shadow-[#0078D4]/10 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 flex-shrink-0">
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
          className="mt-16 flex flex-wrap justify-center items-center gap-8 pt-12 border-t border-border/50"
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
