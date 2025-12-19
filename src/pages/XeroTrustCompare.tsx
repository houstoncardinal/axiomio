import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Check, 
  X, 
  Shield, 
  Zap, 
  DollarSign, 
  Clock,
  Users,
  Globe2,
  Server,
  Lock,
  Sparkles
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { SEOHead } from '@/components/SEOHead';
import { MagneticButton } from '@/components/MagneticButton';
import { AnimatedGradientText } from '@/components/AnimatedGradientText';
import { PremiumCard } from '@/components/PremiumCard';

const competitors = [
  { 
    name: 'XeroTrust', 
    tagline: 'AI-Native Zero Trust',
    highlight: true 
  },
  { 
    name: 'Cloudflare Access', 
    tagline: 'CDN-First Security',
    highlight: false 
  },
  { 
    name: 'Zscaler', 
    tagline: 'Legacy SSE Leader',
    highlight: false 
  },
  { 
    name: 'Tailscale', 
    tagline: 'WireGuard VPN',
    highlight: false 
  },
];

const comparisonFeatures = [
  {
    category: 'Core Security',
    features: [
      { name: 'Zero Trust Network Access', xeroTrust: true, cloudflare: true, zscaler: true, tailscale: 'partial' },
      { name: 'AI-Powered Threat Detection', xeroTrust: true, cloudflare: 'partial', zscaler: 'partial', tailscale: false },
      { name: 'Continuous Authentication', xeroTrust: true, cloudflare: true, zscaler: true, tailscale: 'partial' },
      { name: 'Device Posture Assessment', xeroTrust: true, cloudflare: true, zscaler: true, tailscale: true },
      { name: 'Behavioral Analytics', xeroTrust: true, cloudflare: 'partial', zscaler: true, tailscale: false },
    ]
  },
  {
    category: 'Deployment & Integration',
    features: [
      { name: 'Agentless Deployment', xeroTrust: true, cloudflare: 'partial', zscaler: false, tailscale: false },
      { name: 'Deploy in Minutes', xeroTrust: true, cloudflare: true, zscaler: false, tailscale: true },
      { name: 'Multi-Cloud Native', xeroTrust: true, cloudflare: true, zscaler: true, tailscale: true },
      { name: 'Legacy App Support', xeroTrust: true, cloudflare: true, zscaler: true, tailscale: 'partial' },
      { name: 'API-First Architecture', xeroTrust: true, cloudflare: true, zscaler: 'partial', tailscale: true },
    ]
  },
  {
    category: 'Advanced Capabilities',
    features: [
      { name: 'Self-Healing Security', xeroTrust: true, cloudflare: false, zscaler: false, tailscale: false },
      { name: 'Predictive Risk Scoring', xeroTrust: true, cloudflare: 'partial', zscaler: 'partial', tailscale: false },
      { name: 'Automated Remediation', xeroTrust: true, cloudflare: 'partial', zscaler: 'partial', tailscale: false },
      { name: 'Real-Time Policy Updates', xeroTrust: true, cloudflare: true, zscaler: true, tailscale: true },
      { name: 'Cross-Platform SSO', xeroTrust: true, cloudflare: true, zscaler: true, tailscale: 'partial' },
    ]
  },
  {
    category: 'Enterprise Features',
    features: [
      { name: 'White-Label Option', xeroTrust: true, cloudflare: false, zscaler: false, tailscale: false },
      { name: 'Custom SLA Guarantees', xeroTrust: true, cloudflare: true, zscaler: true, tailscale: false },
      { name: 'Dedicated Support', xeroTrust: true, cloudflare: true, zscaler: true, tailscale: 'partial' },
      { name: 'On-Premise Option', xeroTrust: true, cloudflare: false, zscaler: 'partial', tailscale: true },
      { name: 'Compliance Automation', xeroTrust: true, cloudflare: 'partial', zscaler: true, tailscale: false },
    ]
  },
];

const differentiators = [
  {
    icon: Zap,
    title: 'AI-Native Architecture',
    description: 'Built from the ground up with AI at its core, not bolted on as an afterthought. Our models learn your environment and adapt in real-time.',
  },
  {
    icon: Clock,
    title: '5-Minute Deployment',
    description: 'Go from signup to protected in minutes, not months. No hardware, no complex configurations, no professional services required.',
  },
  {
    icon: DollarSign,
    title: '50% Lower TCO',
    description: 'Transparent pricing with no hidden fees. Eliminate VPN infrastructure costs and reduce security team overhead.',
  },
  {
    icon: Shield,
    title: 'Self-Healing Security',
    description: 'Automatically detect, contain, and remediate threats without human intervention. Security that gets stronger over time.',
  },
];

const FeatureValue = ({ value }: { value: boolean | string }) => {
  if (value === true) {
    return <Check className="w-5 h-5 text-green-500" />;
  }
  if (value === false) {
    return <X className="w-5 h-5 text-muted-foreground/40" />;
  }
  return <span className="text-xs font-medium text-amber-500 uppercase">Partial</span>;
};

export default function XeroTrustCompare() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <SEOHead
        title="XeroTrust vs Cloudflare vs Zscaler vs Tailscale | Zero Trust Comparison"
        description="Compare XeroTrust with Cloudflare Access, Zscaler, and Tailscale. See why enterprises choose XeroTrust for AI-powered zero trust security."
        keywords="XeroTrust comparison, Cloudflare Access alternative, Zscaler alternative, Tailscale alternative, zero trust comparison, ZTNA comparison"
        canonicalUrl="https://axiomio.com/xerotrust/compare"
      />
      <Navbar />

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-6">
              <Shield className="w-4 h-4" />
              Zero Trust Comparison
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              XeroTrust vs <AnimatedGradientText>The Competition</AnimatedGradientText>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how XeroTrust's AI-native zero trust platform compares to legacy solutions. 
              Make an informed decision for your security infrastructure.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Why XeroTrust Section */}
      <section className="py-20 bg-muted/10">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose XeroTrust?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Purpose-built for the modern enterprise with AI at its core
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all"
              >
                <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/10">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-6">
              <Sparkles className="w-4 h-4" />
              Ready to Switch?
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Experience the XeroTrust Difference
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join leading enterprises who have upgraded their security with AI-native zero trust. 
              Get a personalized demo and see why teams are switching to XeroTrust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton>
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contact">
                    Request Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button variant="hero-outline" size="xl" asChild>
                  <Link to="/xerotrust">
                    Learn More About XeroTrust
                  </Link>
                </Button>
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
