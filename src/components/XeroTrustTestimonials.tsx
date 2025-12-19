import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Shield, Building2 } from 'lucide-react';
import { AnimatedGradientText } from '@/components/AnimatedGradientText';
import { PremiumCard } from '@/components/PremiumCard';

const testimonials = [
  {
    quote: "XeroTrust transformed our security posture overnight. We went from managing 15 different security tools to one unified platform. The AI threat detection caught an advanced persistent threat that our previous SIEM completely missed.",
    author: "Sarah Chen",
    role: "CISO",
    company: "Meridian Financial Group",
    logo: "MFG",
    industry: "Financial Services",
    metric: "85%",
    metricLabel: "Reduction in Security Incidents",
    rating: 5,
  },
  {
    quote: "Deploying XeroTrust across our 50,000+ remote workforce took less than a week. The VPN-less architecture eliminated our biggest support burden and improved employee productivity by removing connection friction.",
    author: "Marcus Thompson",
    role: "VP of IT Infrastructure",
    company: "GlobalTech Industries",
    logo: "GTI",
    industry: "Manufacturing",
    metric: "<5min",
    metricLabel: "Average Deploy Time",
    rating: 5,
  },
  {
    quote: "The continuous authentication and device trust scoring gave us visibility we never had before. We can now see exactly who is accessing what, from which device, and make real-time policy decisions. Game changer for compliance.",
    author: "Dr. Emily Rodriguez",
    role: "Chief Security Officer",
    company: "HealthFirst Networks",
    logo: "HFN",
    industry: "Healthcare",
    metric: "100%",
    metricLabel: "HIPAA Compliance",
    rating: 5,
  },
  {
    quote: "We evaluated Zscaler, Cloudflare, and Palo Alto before choosing XeroTrust. The AI-native approach and the ability to customize threat models for our specific environment made it the clear winner. ROI was positive within 90 days.",
    author: "James Park",
    role: "Director of Cybersecurity",
    company: "Vertex Software",
    logo: "VS",
    industry: "Technology",
    metric: "50%",
    metricLabel: "Lower Total Cost of Ownership",
    rating: 5,
  },
  {
    quote: "After the SolarWinds incident, our board mandated zero trust. XeroTrust delivered exactly what we needed - micro-segmentation, continuous verification, and automated threat response. Our attack surface shrunk by 70%.",
    author: "Michael O'Brien",
    role: "CTO",
    company: "Atlantic Energy Corp",
    logo: "AEC",
    industry: "Energy",
    metric: "70%",
    metricLabel: "Attack Surface Reduction",
    rating: 5,
  },
  {
    quote: "The behavioral analytics in XeroTrust detected insider threat activity that would have cost us millions. The platform flagged unusual data access patterns and automatically isolated the compromised account within seconds.",
    author: "Priya Sharma",
    role: "Head of Information Security",
    company: "Quantum Research Labs",
    logo: "QRL",
    industry: "Research & Development",
    metric: "12sec",
    metricLabel: "Avg Threat Response Time",
    rating: 5,
  },
];

const logos = [
  { name: 'Fortune 500 Enterprise', abbr: 'F500' },
  { name: 'Global Bank', abbr: 'GB' },
  { name: 'Tech Giant', abbr: 'TG' },
  { name: 'Healthcare Leader', abbr: 'HL' },
  { name: 'Energy Corp', abbr: 'EC' },
  { name: 'Manufacturing Co', abbr: 'MC' },
];

export function XeroTrustTestimonials() {
  return (
    <section className="py-28 lg:py-36 relative">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-secondary mb-4">
            Trusted by Industry Leaders
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Security Leaders <AnimatedGradientText>Say About Us</AnimatedGradientText>
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of enterprises who have transformed their security with XeroTrust
          </p>
        </motion.div>

        {/* Logo Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 mb-16"
        >
          {logos.map((logo, i) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 px-6 py-3 rounded-xl bg-muted/50 border border-border/50"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center border border-secondary/20">
                <span className="text-xs font-bold text-secondary">{logo.abbr}</span>
              </div>
              <span className="text-sm font-medium text-muted-foreground">{logo.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <PremiumCard className="h-full">
                <div className="p-6 lg:p-8 flex flex-col h-full">
                  {/* Header with logo and rating */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary via-primary to-secondary flex items-center justify-center text-white font-bold text-sm">
                        {testimonial.logo}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{testimonial.company}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.industry}</p>
                      </div>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                      ))}
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="relative flex-1 mb-6">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-secondary/20" />
                    <p className="text-foreground/90 leading-relaxed pl-6">
                      "{testimonial.quote}"
                    </p>
                  </div>

                  {/* Metric Badge */}
                  <div className="mb-6 p-4 rounded-xl bg-secondary/10 border border-secondary/20">
                    <div className="flex items-center gap-4">
                      <Shield className="w-8 h-8 text-secondary" />
                      <div>
                        <p className="font-heading text-2xl font-bold text-secondary">{testimonial.metric}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.metricLabel}</p>
                      </div>
                    </div>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-muted to-muted-foreground/20 flex items-center justify-center">
                      <span className="text-sm font-semibold text-foreground">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </PremiumCard>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '500+', label: 'Enterprise Customers' },
            { value: '10M+', label: 'Protected Users' },
            { value: '99.99%', label: 'Platform Uptime' },
            { value: '4.9/5', label: 'Customer Rating' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-2xl bg-muted/30 border border-border/50"
            >
              <p className="font-heading text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
