import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Lock, Zap, CheckCircle2, Globe, Users, Fingerprint, ShieldCheck, Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "./MagneticButton";

const features = [
  {
    icon: Zap,
    title: "10x Faster",
    description: "Than legacy VPNs",
  },
  {
    icon: Lock,
    title: "WireGuard",
    description: "Military-grade encryption",
  },
  {
    icon: Fingerprint,
    title: "Zero Trust",
    description: "Never trust, always verify",
  },
  {
    icon: Users,
    title: "SSO Ready",
    description: "Seamless integration",
  },
];

const stats = [
  { value: "99.99%", label: "Uptime SLA" },
  { value: "5min", label: "Deployment" },
  { value: "60%", label: "Cost Savings" },
  { value: "0", label: "Breaches" },
];

const benefits = [
  "AI-powered threat detection",
  "Device posture verification",
  "Micro-segmentation",
  "Real-time analytics",
  "Compliance automation",
  "Global edge network",
];

export function XeroTrustBanner() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        
        {/* Animated mesh gradient */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              radial-gradient(ellipse at 20% 20%, hsl(173 80% 40% / 0.3) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 80%, hsl(199 89% 48% / 0.2) 0%, transparent 50%),
              radial-gradient(ellipse at 50% 50%, hsl(217 91% 60% / 0.15) 0%, transparent 60%)
            `,
          }}
        />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
        
        {/* Animated particles/orbs */}
        <motion.div
          className="absolute top-20 left-[10%] w-64 h-64 rounded-full bg-cyan-500/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-[10%] w-96 h-96 rounded-full bg-teal-500/15 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      
      {/* Borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      
      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-400 bg-cyan-500/10 px-4 py-2 rounded-full border border-cyan-500/30">
                <ShieldCheck className="w-4 h-4" />
                Enterprise Security Platform
              </span>
            </motion.div>
            
            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1]"
            >
              <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
                XeroTrust
              </span>
              <br />
              <span className="text-white/90">
                Security Without Compromise
              </span>
            </motion.h2>
            
            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-slate-300 leading-relaxed mb-8 max-w-xl"
            >
              Eliminate implicit trust. Deploy in minutes. Protect everything. 
              XeroTrust delivers AI-native zero-trust network access that is 
              <span className="text-cyan-400 font-semibold"> 10x faster</span> than legacy VPNs 
              with military-grade WireGuard encryption.
            </motion.p>
            
            {/* Benefits list */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-3 mb-8"
            >
              {benefits.map((benefit, i) => (
                <div key={benefit} className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  {benefit}
                </div>
              ))}
            </motion.div>
            
            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4"
            >
              <MagneticButton>
                <Button 
                  size="xl" 
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white border-0 shadow-lg shadow-cyan-500/25"
                  asChild
                >
                  <Link to="/xerotrust">
                    Explore XeroTrust
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button 
                  variant="outline" 
                  size="xl" 
                  className="border-slate-600 text-white hover:bg-slate-800 hover:border-cyan-500/50"
                  asChild
                >
                  <Link to="/xerotrust/compare">
                    Compare to VPNs
                  </Link>
                </Button>
              </MagneticButton>
            </motion.div>
          </div>
          
          {/* Right Content - Visual */}
          <div className="relative">
            {/* Stats cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4 mb-6"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-5 text-center hover:border-cyan-500/30 transition-colors"
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Feature cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-lg bg-gradient-to-br from-cyan-500 to-teal-500">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-white">Core Capabilities</h4>
                  <p className="text-xs text-slate-400">What makes XeroTrust different</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, i) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 group"
                  >
                    <div className="p-2 rounded-lg bg-slate-700/50 group-hover:bg-cyan-500/20 transition-colors">
                      <feature.icon className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">{feature.title}</div>
                      <div className="text-xs text-slate-400">{feature.description}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Network visualization hint */}
              <div className="mt-6 pt-5 border-t border-slate-700/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Network className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs text-slate-400">Global Edge Network</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-2 h-2 rounded-full bg-cyan-500"
                        animate={{
                          opacity: [0.3, 1, 0.3],
                        }}
                        transition={{
                          duration: 1.5,
                          delay: i * 0.2,
                          repeat: Infinity,
                        }}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-cyan-400 font-medium">50+ PoPs</span>
                </div>
              </div>
            </motion.div>
            
            {/* XeroTrust Logo - decorative */}
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 opacity-40"
              animate={{
                opacity: [0.3, 0.5, 0.3],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <img 
                src="/logos/Xero Trust/_XeroTrust_-darkbcg.png" 
                alt="" 
                className="w-full h-full object-contain"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default XeroTrustBanner;
