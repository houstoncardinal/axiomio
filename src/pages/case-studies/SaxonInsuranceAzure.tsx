import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  CheckCircle,
  Target,
  Cloud,
  Globe,
  Clock,
  TrendingUp,
  TrendingDown,
  Server,
  Quote,
  Users,
  MapPin
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SEOHead } from '@/components/SEOHead';
import { MagneticButton } from '@/components/MagneticButton';

const SaxonInsuranceAzure = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <SEOHead
        title="Saxon Insurance Case Study | Datacenter Exit & Azure Migration | Axiomio"
        description="How Axiomio helped Saxon Insurance exit their datacenter and migrate to Microsoft Azure with zero downtime, eliminating latency and achieving disaster recovery in one month."
        keywords="Saxon Insurance, Azure migration, datacenter exit, zero downtime migration, Azure Site Recovery, disaster recovery, cloud migration, Cayman Islands"
        canonicalUrl="https://axiomio.com/case-studies/saxon-insurance-azure"
      />

      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-br from-white via-slate-50 to-slate-100">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
          <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/8 via-blue-500/6 to-indigo-500/8 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-r from-emerald-500/6 via-teal-500/6 to-green-500/8 rounded-full blur-[100px]" />
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
              <nav className="flex items-center space-x-2 text-sm text-slate-600">
                <Link to="/" className="hover:text-slate-900 transition-colors">Home</Link>
                <span className="text-slate-400">/</span>
                <Link to="/case-studies" className="hover:text-slate-900 transition-colors">Case Studies</Link>
                <span className="text-slate-400">/</span>
                <span className="text-slate-900 font-medium">Saxon Insurance</span>
              </nav>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200/60 mb-6">
                  <Globe className="w-4 h-4 text-cyan-600" />
                  <span className="text-sm font-medium text-cyan-900">Insurance & Financial Services</span>
                </div>

                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                  Zero Downtime
                  <span className="block text-slate-700">Datacenter Exit</span>
                </h1>

                <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
                  How Axiomio helped Saxon Insurance exit their datacenter and migrate to Microsoft Azure in one month with zero downtime, eliminating latency and establishing disaster recovery.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white rounded-xl p-6 border border-slate-200/80 shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-cyan-100">
                        <Zap className="w-5 h-5 text-cyan-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-slate-900">0</div>
                        <div className="text-xs text-slate-600 font-medium">Downtime</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 border border-slate-200/80 shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-blue-100">
                        <Clock className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-slate-900">1 Mo</div>
                        <div className="text-xs text-slate-600 font-medium">Migration</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <MagneticButton>
                    <Button variant="hero" size="lg" asChild>
                      <Link to="/contact">
                        Start Azure Migration
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </MagneticButton>
                  <MagneticButton>
                    <Button variant="hero-outline" size="lg" asChild>
                      <Link to="/services/migration-and-modernization">
                        Learn About Migration
                      </Link>
                    </Button>
                  </MagneticButton>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="lg:pl-8">
                <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-lg">
                  <h3 className="font-heading text-xl font-bold text-slate-900 mb-6 text-center">Migration Results</h3>

                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200/60">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-cyan-100">
                          <Zap className="w-5 h-5 text-cyan-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900">Zero Downtime</div>
                          <div className="text-sm text-slate-600">Seamless Migration</div>
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-cyan-600">✓</div>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200/60">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-emerald-100">
                          <TrendingDown className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900">No Latency</div>
                          <div className="text-sm text-slate-600">Improved Performance</div>
                        </div>
                      </div>
                      <div className="text-lg font-bold text-emerald-600">100%</div>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/60">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-blue-100">
                          <ShieldCheck className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900">Disaster Recovery</div>
                          <div className="text-sm text-slate-600">Multi-Region</div>
                        </div>
                      </div>
                      <div className="text-lg font-bold text-blue-600">Active</div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-200">
                    <div className="flex items-center justify-between text-sm text-slate-600 mb-3">
                      <span>Migration Timeline</span>
                      <span className="font-medium">4 Weeks</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full w-full"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* About Saxon Insurance */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-6">About Saxon Insurance</h2>
              <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                A wholly Caymanian-owned insurance provider offering online auto insurance services for 50 years in the Cayman Islands.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <h4 className="font-semibold text-slate-900 mb-3">Critical Challenges</h4>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Single datacenter dependency creating business risk</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Application performance degradation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Persistent latency issues affecting customers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>No disaster recovery capabilities</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-6 border border-cyan-200/60">
                  <h4 className="font-semibold text-slate-900 mb-2">Migration Objective</h4>
                  <p className="text-slate-700 text-sm">
                    Exit datacenter operations without service interruption, improve performance, and establish robust disaster recovery across multiple Azure regions.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-slate-600" />
                    Location & History
                  </h4>
                  <p className="text-slate-600 text-sm">
                    50 years serving the Cayman Islands with wholly Caymanian ownership, providing online auto insurance services to local customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-6">Azure Migration Architecture</h2>
            </motion.div>

            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 shadow-lg flex-shrink-0">
                    <Cloud className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-bold text-slate-900 mb-3">Azure Site Recovery Migration</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Migrated all infrastructure to Microsoft Azure using Azure Site Recovery Vault with Windows PowerShell automation, completing the full datacenter exit in just 4 weeks.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-cyan-100 text-cyan-800 border-cyan-200">Azure Site Recovery</Badge>
                      <Badge className="bg-cyan-100 text-cyan-800 border-cyan-200">PowerShell</Badge>
                      <Badge className="bg-cyan-100 text-cyan-800 border-cyan-200">Zero Downtime</Badge>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 shadow-lg flex-shrink-0">
                    <ShieldCheck className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-bold text-slate-900 mb-3">Multi-Region Disaster Recovery</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Established comprehensive disaster recovery processes across multiple Azure regions, ensuring business continuity and data protection with automated failover capabilities.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200">Multi-Region DR</Badge>
                      <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200">Auto Failover</Badge>
                      <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200">Business Continuity</Badge>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg flex-shrink-0">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-bold text-slate-900 mb-3">Performance Optimization & Cost Savings</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Eliminated latency issues, improved application performance, and achieved automated resource optimization leading to significant cost savings and enhanced user experience.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-blue-100 text-blue-800 border-blue-200">Zero Latency</Badge>
                      <Badge className="bg-blue-100 text-blue-800 border-blue-200">Cost Optimized</Badge>
                      <Badge className="bg-blue-100 text-blue-800 border-blue-200">Auto Scaling</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-6">Transformational Results</h2>
            </motion.div>

            <div className="bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 rounded-3xl p-10 border border-cyan-200/60 shadow-xl">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-cyan-100 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-cyan-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Zero Downtime Exit</h4>
                      <p className="text-slate-600 text-sm">Complete datacenter migration without service interruption</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-cyan-100 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-cyan-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Latency Eliminated</h4>
                      <p className="text-slate-600 text-sm">Improved application performance and user experience</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-cyan-100 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-cyan-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">One Month Migration</h4>
                      <p className="text-slate-600 text-sm">Rapid deployment from assessment to production</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-cyan-100 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-cyan-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Disaster Recovery</h4>
                      <p className="text-slate-600 text-sm">Multi-region DR ensuring business continuity</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-cyan-100 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-cyan-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Cost Optimization</h4>
                      <p className="text-slate-600 text-sm">Automated resource management reducing TCO</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-cyan-100 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-cyan-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Enhanced Resilience</h4>
                      <p className="text-slate-600 text-sm">Eliminated single point of failure risk</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.1),transparent_70%)]" />
        <div className="container relative mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Exit Your Datacenter
                <span className="block text-slate-300">with Zero Downtime?</span>
              </h2>

              <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
                Get expert Azure migration, disaster recovery, and performance optimization for your insurance platform.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MagneticButton>
                  <Button variant="hero" size="lg" className="bg-white text-slate-900 hover:bg-slate-100" asChild>
                    <Link to="/contact">
                      Start Your Azure Migration
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </MagneticButton>
                <MagneticButton>
                  <Button variant="hero-outline" size="lg" className="border-slate-300 text-white hover:bg-slate-800" asChild>
                    <Link to="/services/migration-and-modernization">
                      Learn About Migration Services
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

export default SaxonInsuranceAzure;
