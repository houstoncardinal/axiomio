import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  CheckCircle,
  Target,
  Users,
  Clock,
  Award,
  Quote,
  TrendingUp,
  Globe,
  Eye,
  Bell,
  Server,
  Lock,
  AlertCircle
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SEOHead } from '@/components/SEOHead';
import { MagneticButton } from '@/components/MagneticButton';

const EnParadigmSOC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <SEOHead
        title="EnParadigm Cloud SOC Case Study | AWS Security Operations Center | Axiomio"
        description="How Axiomio implemented a comprehensive Cloud Security Operations Center for enParadigm using AWS GuardDuty, Security Hub, and Kibana for 24/7 threat detection and compliance monitoring."
        keywords="enParadigm, Cloud SOC, AWS GuardDuty, Security Hub, threat detection, compliance monitoring, Amazon Inspector, CIS Benchmarks, security automation"
        canonicalUrl="https://axiomio.com/case-studies/enparadigm-soc"
      />

      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-br from-white via-slate-50 to-slate-100">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
          <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-gradient-to-r from-red-500/8 via-orange-500/6 to-amber-500/8 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/6 via-indigo-500/6 to-purple-500/8 rounded-full blur-[100px]" />
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <nav className="flex items-center space-x-2 text-sm text-slate-600">
                <Link to="/" className="hover:text-slate-900 transition-colors">Home</Link>
                <span className="text-slate-400">/</span>
                <Link to="/case-studies" className="hover:text-slate-900 transition-colors">Case Studies</Link>
                <span className="text-slate-400">/</span>
                <span className="text-slate-900 font-medium">enParadigm SOC</span>
              </nav>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Industry Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-50 to-orange-50 border border-red-200/60 mb-6">
                  <Globe className="w-4 h-4 text-red-600" />
                  <span className="text-sm font-medium text-red-900">SaaS & Sales Enablement</span>
                </div>

                {/* Title */}
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                  Cloud SOC
                  <span className="block text-slate-700">Implementation</span>
                </h1>

                {/* Description */}
                <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
                  How Axiomio implemented a comprehensive Cloud Security Operations Center for enParadigm with real-time threat detection, compliance monitoring, and 24/7 security expertise.
                </p>

                {/* Key Stats */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white rounded-xl p-6 border border-slate-200/80 shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-red-100">
                        <Eye className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-slate-900">24/7</div>
                        <div className="text-xs text-slate-600 font-medium">Monitoring</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 border border-slate-200/80 shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-blue-100">
                        <Bell className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-slate-900">Real-Time</div>
                        <div className="text-xs text-slate-600 font-medium">Alerts</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <MagneticButton>
                    <Button variant="hero" size="lg" asChild>
                      <Link to="/contact">
                        Get Cloud SOC Solution
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </MagneticButton>
                  <MagneticButton>
                    <Button variant="hero-outline" size="lg" asChild>
                      <Link to="/services/cybersecurity">
                        Learn About Security
                      </Link>
                    </Button>
                  </MagneticButton>
                </div>
              </motion.div>

              {/* Right Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:pl-8"
              >
                <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-lg">
                  <h3 className="font-heading text-xl font-bold text-slate-900 mb-6 text-center">Project Impact</h3>

                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-red-50 to-orange-50 border border-red-200/60">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-red-100">
                          <Eye className="w-5 h-5 text-red-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900">Real-Time Detection</div>
                          <div className="text-sm text-slate-600">Automated Monitoring</div>
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-red-600">✓</div>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/60">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-blue-100">
                          <ShieldCheck className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900">Compliance Ready</div>
                          <div className="text-sm text-slate-600">CIS Benchmarks</div>
                        </div>
                      </div>
                      <div className="text-lg font-bold text-blue-600">Active</div>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200/60">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-emerald-100">
                          <Users className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900">80+ Employees</div>
                          <div className="text-sm text-slate-600">Protected</div>
                        </div>
                      </div>
                      <div className="text-lg font-bold text-emerald-600">365</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* About enParadigm */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 to-white" />
        <div className="container relative mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 mb-6">
                <Globe className="w-4 h-4 text-slate-600" />
                <span className="text-sm font-medium text-slate-700">Company Overview</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                About enParadigm
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                An 80+ employee SaaS company providing sales enablement and readiness platforms to enterprises across IT, Pharma, BFSI, Power & Energy, and Automotive sectors.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-slate-600" />
                    Security Challenges
                  </h4>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Manual threat detection through log analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>No automated alerting systems in place</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Failed to meet industry compliance standards</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 border border-red-200/60">
                  <h4 className="font-semibold text-slate-900 mb-2">Critical Need</h4>
                  <p className="text-slate-700 text-sm">
                    Centralized security monitoring with real-time threat detection, automated incident response, and regulatory compliance capabilities.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <Target className="w-5 h-5 text-slate-600" />
                    Target Markets
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-slate-100 text-slate-800 border-slate-200">IT</Badge>
                    <Badge className="bg-slate-100 text-slate-800 border-slate-200">Pharma</Badge>
                    <Badge className="bg-slate-100 text-slate-800 border-slate-200">BFSI</Badge>
                    <Badge className="bg-slate-100 text-slate-800 border-slate-200">Power & Energy</Badge>
                    <Badge className="bg-slate-100 text-slate-800 border-slate-200">Automotive</Badge>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5 text-slate-600" />
                    Company Size
                  </h4>
                  <p className="text-slate-600 text-sm">
                    80+ employees requiring enterprise-grade security monitoring and protection across their SaaS platform infrastructure.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Implemented */}
      <section className="py-24 bg-slate-50 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 mb-6">
                <Zap className="w-4 h-4 text-slate-600" />
                <span className="text-sm font-medium text-slate-700">Implementation</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Cloud SOC Architecture
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                Comprehensive security operations center leveraging AWS-native security tools
              </p>
            </motion.div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg"
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 shadow-lg flex-shrink-0">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-bold text-slate-900 mb-3">Amazon GuardDuty & Security Hub</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Centralized threat detection analyzing VPC Flow Logs and DNS logs with Security Hub aggregating findings across all AWS security services for unified visibility.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-red-100 text-red-800 border-red-200">GuardDuty</Badge>
                      <Badge className="bg-red-100 text-red-800 border-red-200">Security Hub</Badge>
                      <Badge className="bg-red-100 text-red-800 border-red-200">Real-Time Detection</Badge>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg"
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg flex-shrink-0">
                    <Server className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-bold text-slate-900 mb-3">Kibana/Elasticsearch Dashboard</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Comprehensive monitoring dashboard built on Amazon Elasticsearch providing real-time visualization of security events and threat intelligence.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-blue-100 text-blue-800 border-blue-200">Kibana</Badge>
                      <Badge className="bg-blue-100 text-blue-800 border-blue-200">Elasticsearch</Badge>
                      <Badge className="bg-blue-100 text-blue-800 border-blue-200">Visualization</Badge>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg"
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 shadow-lg flex-shrink-0">
                    <Lock className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-bold text-slate-900 mb-3">Amazon Inspector & CIS Benchmarks</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Automated vulnerability assessment with continuous compliance monitoring against CIS Benchmarks ensuring regulatory adherence and security best practices.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200">Inspector</Badge>
                      <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200">CIS Benchmarks</Badge>
                      <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200">Compliance</Badge>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg"
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 shadow-lg flex-shrink-0">
                    <AlertCircle className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-bold text-slate-900 mb-3">AWS CloudTrail Geolocation Monitoring</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Geolocation-based IP access monitoring detecting suspicious activity patterns and unauthorized access attempts across AWS infrastructure.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-purple-100 text-purple-800 border-purple-200">CloudTrail</Badge>
                      <Badge className="bg-purple-100 text-purple-800 border-purple-200">Geolocation</Badge>
                      <Badge className="bg-purple-100 text-purple-800 border-purple-200">Access Monitoring</Badge>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 mb-6">
                <TrendingUp className="w-4 h-4 text-slate-600" />
                <span className="text-sm font-medium text-slate-700">Outcomes</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Measurable Security Improvements
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 rounded-3xl p-10 border border-red-200/60 shadow-xl"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-red-100 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Real-Time Incident Detection</h4>
                      <p className="text-slate-600 text-sm">Automated threat monitoring replacing manual log analysis</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-red-100 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Vulnerability Assessment</h4>
                      <p className="text-slate-600 text-sm">Continuous scanning identifying software vulnerabilities</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-red-100 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Regulatory Compliance</h4>
                      <p className="text-slate-600 text-sm">CIS Benchmark compliance ensuring industry standards</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-red-100 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">24/7/365 Security Expertise</h4>
                      <p className="text-slate-600 text-sm">Round-the-clock AWS and security team access</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-red-100 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Centralized Visibility</h4>
                      <p className="text-slate-600 text-sm">Unified security dashboard across all AWS services</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-red-100 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Proactive Threat Response</h4>
                      <p className="text-slate-600 text-sm">Automated alerting enabling rapid incident response</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-slate-50 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-3xl p-10 border border-slate-200 shadow-xl">
                <Quote className="w-12 h-12 text-slate-300 mx-auto mb-6" />
                <blockquote className="text-xl text-slate-700 italic mb-8 leading-relaxed text-center max-w-3xl mx-auto">
                  "Axiom's team is extremely proactive and able to identify potential problems and suggest solutions."
                </blockquote>

                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                    <Users className="w-8 h-8 text-slate-600" />
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-slate-900 text-lg">Hanuman Kamma</div>
                    <div className="text-slate-600">Co-founder & CEO</div>
                    <div className="text-sm text-slate-500 mt-1">enParadigm</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.1),transparent_70%)]" />
        <div className="container relative mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-700 border border-slate-600 mb-6">
                <ShieldCheck className="w-4 h-4 text-slate-300" />
                <span className="text-sm font-medium text-slate-300">Secure Your Platform</span>
              </div>

              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Implement
                <span className="block text-slate-300">Cloud SOC for Your Business?</span>
              </h2>

              <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
                Get 24/7 threat detection, compliance monitoring, and AWS security expertise for your SaaS platform.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MagneticButton>
                  <Button variant="hero" size="lg" className="bg-white text-slate-900 hover:bg-slate-100" asChild>
                    <Link to="/contact">
                      Start Cloud SOC Implementation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </MagneticButton>
                <MagneticButton>
                  <Button variant="hero-outline" size="lg" className="border-slate-300 text-white hover:bg-slate-800" asChild>
                    <Link to="/services/cybersecurity">
                      Learn About Security Services
                    </Link>
                  </Button>
                </MagneticButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EnParadigmSOC;
