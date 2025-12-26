import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Zap,
  CheckCircle,
  Target,
  Users,
  Clock,
  Award,
  Star,
  Quote,
  TrendingUp,
  Globe,
  Calendar,
  FileText,
  Download,
  Cloud,
  Server,
  Lock
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SEOHead } from '@/components/SEOHead';
import { MagneticButton } from '@/components/MagneticButton';

const CoforgeCaseStudy = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <SEOHead
        title="Coforge VDI Migration to Azure | Cloud Migration Case Study | Axiomio"
        description="How Axiomio helped Coforge migrate 5000+ VDIs from Windows 7 datacenter to Azure Cloud with Citrix setup and enhanced security in under 10 weeks."
        keywords="Coforge, VDI migration, Azure Cloud, Citrix, Windows 7 to Windows 10, cloud migration, desktop as a service, DevOps automation"
        canonicalUrl="https://axiomio.com/case-studies/coforge-moves-vdi-azure"
      />

      <Navbar />

      {/* Enhanced Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-br from-white via-slate-50 to-slate-100">
        {/* Sophisticated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
          <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/8 via-indigo-500/6 to-purple-500/8 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-r from-emerald-500/6 via-teal-500/6 to-cyan-500/8 rounded-full blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-slate-400/10 to-slate-600/10 rounded-full blur-[80px]" />
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Breadcrumb Navigation */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <nav className="flex items-center space-x-2 text-sm text-slate-600">
                <Link to="/" className="hover:text-slate-900 transition-colors">Home</Link>
                <span className="text-slate-400">/</span>
                <Link to="/" className="hover:text-slate-900 transition-colors">Case Studies</Link>
                <span className="text-slate-400">/</span>
                <span className="text-slate-900 font-medium">Coforge VDI Migration</span>
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
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/60 mb-6">
                  <Cloud className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-900">VDI Migration & Cloud Transformation</span>
                </div>

                {/* Title */}
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                  Coforge Migrates VDI
                  <span className="block text-slate-700">to Azure with Axiom</span>
                </h1>

                {/* Description */}
                <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
                  How Axiomio helped Coforge migrate 5000+ virtual desktops from Windows 7 datacenter to Azure Cloud with Citrix setup and enhanced security in under 10 weeks.
                </p>

                {/* Key Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white rounded-xl p-6 border border-slate-200/80 shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-green-100">
                        <Server className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-slate-900">5000+</div>
                        <div className="text-xs text-slate-600 font-medium">VDIs Migrated</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 border border-slate-200/80 shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-blue-100">
                        <Clock className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-slate-900">10 Weeks</div>
                        <div className="text-xs text-slate-600 font-medium">Migration Time</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <MagneticButton>
                    <Button variant="hero" size="lg" asChild>
                      <Link to="/contact">
                        Start Your Cloud Migration
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </MagneticButton>
                  <MagneticButton>
                    <Button variant="hero-outline" size="lg" asChild>
                      <a href="#" download>
                        <Download className="mr-2 h-4 w-4" />
                        Download Study
                      </a>
                    </Button>
                  </MagneticButton>
                </div>
              </motion.div>

              {/* Right Content - Enhanced Metrics */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:pl-8"
              >
                <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-lg">
                  <h3 className="font-heading text-xl font-bold text-slate-900 mb-6 text-center">Migration Impact</h3>

                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200/60">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-emerald-100">
                          <Cloud className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900">Azure Migration</div>
                          <div className="text-sm text-slate-600">Complete Success</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-emerald-600">✓</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/60">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-blue-100">
                          <Lock className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900">Security Enhanced</div>
                          <div className="text-sm text-slate-600">MFA Implementation</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-blue-600">Active</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-purple-50 to-violet-50 border border-purple-200/60">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-purple-100">
                          <TrendingUp className="w-5 h-5 text-purple-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900">Scalability</div>
                          <div className="text-sm text-slate-600">On-Demand Resources</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-purple-600">Enabled</div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="mt-8 pt-6 border-t border-slate-200">
                    <div className="flex items-center justify-between text-sm text-slate-600 mb-3">
                      <span>Project Timeline</span>
                      <span className="font-medium">10 Weeks</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-500 to-emerald-500 h-2 rounded-full w-full"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* About Coforge Section */}
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
                About Coforge
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                A leading global IT solutions organization providing cybersecurity, business process solutions, AI and data insights services across travel, banking, healthcare, manufacturing, media, public and retail sectors.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                {/* Coforge Logo */}
                <div className="mb-8 flex justify-center lg:justify-start">
                  <img
                    src="/case-coforge-img.png"
                    alt="Coforge Logo"
                    className="h-16 w-auto object-contain"
                  />
                </div>

                <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 border border-slate-200/80 shadow-lg">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg">
                      <Server className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-slate-900">VDI Migration Challenge</h3>
                      <p className="text-slate-600">Windows 7 End-of-Life Crisis</p>
                    </div>
                  </div>

                  <p className="text-slate-700 leading-relaxed mb-6">
                    Coforge faced an urgent deadline as Windows 7 approached end-of-life. They needed to migrate their entire virtual desktop infrastructure to the cloud before decommissioning their legacy systems.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm text-slate-600">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      <span>5000+ virtual desktops to migrate</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-600">
                      <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                      <span>Windows 7 to Windows 10 upgrade</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-600">
                      <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                      <span>Complete infrastructure modernization</span>
                    </div>
                  </div>
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
                    <Users className="w-5 h-5 text-slate-600" />
                    Industry Focus
                  </h4>
                  <p className="text-slate-600 text-sm">
                    Travel, Banking, Healthcare, Manufacturing, Media, Public Sector, and Retail industries served globally.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <Target className="w-5 h-5 text-slate-600" />
                    Service Portfolio
                  </h4>
                  <p className="text-slate-600 text-sm">
                    Cybersecurity solutions, business process services, AI and data insights, and comprehensive IT transformation.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200/60">
                  <h4 className="font-semibold text-slate-900 mb-2">Migration Urgency</h4>
                  <p className="text-slate-700 text-sm">
                    Windows 7 end-of-life deadline required immediate action to prevent business disruption and security vulnerabilities.
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
                Cloud Migration Solutions Delivered
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                End-to-end VDI migration from datacenter to Azure with enhanced security and scalability
              </p>
            </motion.div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg"
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg flex-shrink-0">
                    <Cloud className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-bold text-slate-900 mb-3">Azure Cloud Migration</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Complete migration of data from existing datacenter to Azure Cloud with Windows 7 to Windows 10 upgrade, completed in under 10 weeks.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-blue-100 text-blue-800 border-blue-200">Data Migration</Badge>
                      <Badge className="bg-blue-100 text-blue-800 border-blue-200">OS Upgrade</Badge>
                      <Badge className="bg-blue-100 text-blue-800 border-blue-200">Azure Infrastructure</Badge>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg"
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg flex-shrink-0">
                    <Server className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-bold text-slate-900 mb-3">Citrix Desktop as a Service Setup</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Complete Citrix infrastructure setup for seamless desktop virtualization and NetScaler gateway configuration for secure external access.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-green-100 text-green-800 border-green-200">Citrix DaaS</Badge>
                      <Badge className="bg-green-100 text-green-800 border-green-200">NetScaler Gateway</Badge>
                      <Badge className="bg-green-100 text-green-800 border-green-200">External Access</Badge>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg"
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 shadow-lg flex-shrink-0">
                    <Lock className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-bold text-slate-900 mb-3">Enhanced Security Implementation</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Two-factor authentication configured using Okta and Azure MFA for secure access to all virtual desktops and applications.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-purple-100 text-purple-800 border-purple-200">Okta Integration</Badge>
                      <Badge className="bg-purple-100 text-purple-800 border-purple-200">Azure MFA</Badge>
                      <Badge className="bg-purple-100 text-purple-800 border-purple-200">2FA Security</Badge>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 mb-6">
                <Server className="w-4 h-4 text-slate-600" />
                <span className="text-sm font-medium text-slate-700">Technology Stack</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Technologies & Platforms Used
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30 rounded-3xl p-10 border border-slate-200/60 shadow-xl"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-blue-100 flex-shrink-0">
                      <Cloud className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Azure Cloud Platform</h4>
                      <p className="text-slate-600 text-sm">Hosting platform for all VDI infrastructure and applications</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-green-100 flex-shrink-0">
                      <Server className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Citrix DaaS</h4>
                      <p className="text-slate-600 text-sm">Desktop as a Service for virtual desktop delivery</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-purple-100 flex-shrink-0">
                      <ShieldCheck className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Citrix ADC</h4>
                      <p className="text-slate-600 text-sm">Application delivery controller for secure external access</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-indigo-100 flex-shrink-0">
                      <Lock className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Okta & Azure MFA</h4>
                      <p className="text-slate-600 text-sm">Two-factor authentication for enhanced security</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results */}
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
                <TrendingUp className="w-4 h-4 text-slate-600" />
                <span className="text-sm font-medium text-slate-700">Outcomes</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Migration Success & Business Impact
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                Successful cloud migration enabling scalability, reliability, and enhanced security
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 rounded-3xl p-10 border border-emerald-200/60 shadow-xl"
            >
              <div className="text-center mb-8">
                <h3 className="font-heading text-2xl font-bold text-slate-900 mb-2">Cloud Migration Completed</h3>
                <p className="text-slate-700">Key achievements and benefits realized</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-emerald-100 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Scalable Infrastructure</h4>
                      <p className="text-slate-600 text-sm">On-demand scaling capabilities for future growth</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-emerald-100 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Enhanced Reliability</h4>
                      <p className="text-slate-600 text-sm">Stable environment with minimal downtime</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-emerald-100 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Operational Efficiency</h4>
                      <p className="text-slate-600 text-sm">Streamlined operations with improved performance</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-emerald-100 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Strengthened Security</h4>
                      <p className="text-slate-600 text-sm">Multi-factor authentication and secure access</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-emerald-100 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Future-Ready Platform</h4>
                      <p className="text-slate-600 text-sm">Modern infrastructure ready for digital transformation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-emerald-100 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Cost Optimization</h4>
                      <p className="text-slate-600 text-sm">Pay-as-you-go model with improved resource utilization</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 mb-6">
                <Quote className="w-4 h-4 text-slate-600" />
                <span className="text-sm font-medium text-slate-700">Client Success</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Migration Success Story
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-3xl p-10 border border-slate-200 shadow-xl">
                <Quote className="w-12 h-12 text-slate-300 mx-auto mb-6" />
                <blockquote className="text-xl text-slate-700 italic mb-8 leading-relaxed text-center max-w-3xl mx-auto">
                  "Moving to Azure has given us the flexibility to scale whenever required. Our environment is now stable and reliable with minimal downtime, enabling us to carry out operations efficiently. The two-factor authentication has significantly strengthened our security posture."
                </blockquote>

                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                    <Users className="w-8 h-8 text-slate-600" />
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-slate-900 text-lg">Coforge IT Team</div>
                    <div className="text-slate-600">Global IT Solutions Provider</div>
                    <div className="text-sm text-slate-500 mt-1">Migration Success</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Axiom Section */}
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
                <Users className="w-4 h-4 text-slate-600" />
                <span className="text-sm font-medium text-slate-700">Why Axiom</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Your Cloud Migration Partner
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                5+ years of DevOps expertise with advanced cloud migration capabilities and EUC competency certification
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl p-8 border border-slate-200">
                  <h3 className="font-heading text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-100">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    Our Expertise
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-sm font-bold text-blue-600">5+</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">Years of DevOps</h4>
                        <p className="text-slate-600 text-sm">20+ end-to-end DevOps projects delivered globally</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-1">
                        <Award className="w-4 h-4 text-indigo-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">EUC Competency</h4>
                        <p className="text-slate-600 text-sm">Certified among top 30 EUC partners worldwide</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0 mt-1">
                        <Cloud className="w-4 h-4 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">Cloud Expertise</h4>
                        <p className="text-slate-600 text-sm">Advanced AWS and Azure consulting partnership</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl p-8 border border-slate-200">
                  <h3 className="font-heading text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100">
                      <Target className="w-5 h-5 text-blue-600" />
                    </div>
                    Our Approach
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                        <Server className="w-4 h-4 text-emerald-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">Infrastructure Migration</h4>
                        <p className="text-slate-600 text-sm">Seamless data and application migration to cloud</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0 mt-1">
                        <ShieldCheck className="w-4 h-4 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">Security First</h4>
                        <p className="text-slate-600 text-sm">Enhanced security with modern authentication</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                        <Zap className="w-4 h-4 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">Rapid Deployment</h4>
                        <p className="text-slate-600 text-sm">Custom automation framework for large-scale migrations</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
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
                <Cloud className="w-4 h-4 text-slate-300" />
                <span className="text-sm font-medium text-slate-300">Cloud Migration</span>
              </div>

              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Migrate Your
                <span className="block text-slate-300">VDI to the Cloud?</span>
              </h2>

              <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
                Get comprehensive VDI migration services with Azure expertise, Citrix implementation, and enhanced security for your organization.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-10">
                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <Cloud className="w-6 h-6 text-green-400 mx-auto mb-2" />
                  <div className="text-sm font-medium text-white">Azure Migration</div>
                  <div className="text-xs text-slate-400">Complete infrastructure</div>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <Server className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                  <div className="text-sm font-medium text-white">Citrix Setup</div>
                  <div className="text-xs text-slate-400">DaaS implementation</div>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <Lock className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                  <div className="text-sm font-medium text-white">Security Enhanced</div>
                  <div className="text-xs text-slate-400">MFA & compliance</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MagneticButton>
                  <Button variant="hero" size="lg" className="bg-white text-slate-900 hover:bg-slate-100" asChild>
                    <Link to="/contact">
                      Start Your Migration
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </MagneticButton>
                <MagneticButton>
                  <Button variant="hero-outline" size="lg" className="border-slate-300 text-white hover:bg-slate-800" asChild>
                    <a href="#" download>
                      <Download className="mr-2 h-4 w-4" />
                      Download Case Study
                    </a>
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

export default CoforgeCaseStudy;
