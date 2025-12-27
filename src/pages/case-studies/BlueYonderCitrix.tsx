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
  Globe,
  Server,
  Network,
  Quote,
  TrendingUp,
  Building2,
  MapPin
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SEOHead } from '@/components/SEOHead';
import { MagneticButton } from '@/components/MagneticButton';

const BlueYonderCitrix = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <SEOHead
        title="Blue Yonder Case Study | Citrix Infrastructure Deployment for 4,000 Users | Axiomio"
        description="How Axiomio deployed enterprise Citrix infrastructure across Azure and on-premises for Blue Yonder, enabling 4,000 concurrent users across 8 global data centers with GSLB."
        keywords="Blue Yonder, Citrix deployment, Virtual Apps, NetScaler, GSLB, Azure Citrix, supply chain, 4000 users, enterprise virtualization"
        canonicalUrl="https://axiomio.com/case-studies/blue-yonder-citrix"
      />

      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-br from-white via-slate-50 to-slate-100">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
          <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/8 via-indigo-500/6 to-purple-500/8 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/6 via-teal-500/6 to-emerald-500/8 rounded-full blur-[100px]" />
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
                <span className="text-slate-900 font-medium">Blue Yonder</span>
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
                  <Globe className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-900">Supply Chain Management</span>
                </div>

                {/* Title */}
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                  Enterprise Citrix
                  <span className="block text-slate-700">for 4,000 Users</span>
                </h1>

                {/* Description */}
                <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
                  How Axiomio deployed Citrix infrastructure across Azure and 8 global data centers for Blue Yonder, enabling smarter working for 4,000 concurrent users worldwide.
                </p>

                {/* Key Stats */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white rounded-xl p-6 border border-slate-200/80 shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-blue-100">
                        <Users className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-slate-900">4,000</div>
                        <div className="text-xs text-slate-600 font-medium">Users</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 border border-slate-200/80 shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-purple-100">
                        <Server className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-slate-900">8 DC</div>
                        <div className="text-xs text-slate-600 font-medium">Data Centers</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <MagneticButton>
                    <Button variant="hero" size="lg" asChild>
                      <Link to="/contact">
                        Get Citrix Deployment
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </MagneticButton>
                  <MagneticButton>
                    <Button variant="hero-outline" size="lg" asChild>
                      <Link to="/services/digital-workspace">
                        Learn About Digital Workspace
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
                  <h3 className="font-heading text-xl font-bold text-slate-900 mb-6 text-center">Project Scope</h3>

                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/60">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-blue-100">
                          <Users className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900">4,000 Users</div>
                          <div className="text-sm text-slate-600">Concurrent Access</div>
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-blue-600">✓</div>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-purple-50 to-violet-50 border border-purple-200/60">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-purple-100">
                          <Network className="w-5 h-5 text-purple-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900">GSLB</div>
                          <div className="text-sm text-slate-600">Load Balancing</div>
                        </div>
                      </div>
                      <div className="text-lg font-bold text-purple-600">Active</div>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200/60">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-emerald-100">
                          <Server className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900">8 Data Centers</div>
                          <div className="text-sm text-slate-600">Global Deployment</div>
                        </div>
                      </div>
                      <div className="text-lg font-bold text-emerald-600">Live</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* About Blue Yonder */}
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
                About Blue Yonder
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                A leading provider of digital supply chain solutions serving retailers, manufacturers, and logistics providers worldwide since 1985.
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
                    <Building2 className="w-5 h-5 text-slate-600" />
                    Company Profile
                  </h4>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Founded in 1985 in Scottsdale, Arizona</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Digital supply chain management solutions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Serving global retailers, manufacturers, and logistics</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200/60">
                  <h4 className="font-semibold text-slate-900 mb-2">Infrastructure Challenge</h4>
                  <p className="text-slate-700 text-sm">
                    Upgrade from Citrix 6.15 to 7.15 across 8 geographically distributed data centers while maintaining service for 4,000+ concurrent users.
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
                    <Users className="w-5 h-5 text-slate-600" />
                    Client Portfolio
                  </h4>
                  <p className="text-slate-600 text-sm mb-4">Major global retailers and brands rely on Blue Yonder's platform:</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-slate-100 text-slate-800 border-slate-200">Clarks</Badge>
                    <Badge className="bg-slate-100 text-slate-800 border-slate-200">Starbucks</Badge>
                    <Badge className="bg-slate-100 text-slate-800 border-slate-200">Under Armour</Badge>
                    <Badge className="bg-slate-100 text-slate-800 border-slate-200">Dollar General</Badge>
                    <Badge className="bg-slate-100 text-slate-800 border-slate-200">Alshaya</Badge>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-slate-600" />
                    Technical Requirements
                  </h4>
                  <p className="text-slate-600 text-sm">
                    Deploy Citrix 7.15 with NetScaler, resolve Palo Alto firewall compatibility, and enable regional connectivity for global users.
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
                Global Citrix Architecture
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                Hybrid cloud deployment with global server load balancing across Azure and on-premises
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
                  <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg flex-shrink-0">
                    <Network className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-bold text-slate-900 mb-3">Global Server Load Balancing (GSLB)</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Implemented GSLB architecture combining Azure cloud and on-premises Citrix deployment, enabling users to authenticate to their nearest data center for optimal performance.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-blue-100 text-blue-800 border-blue-200">GSLB</Badge>
                      <Badge className="bg-blue-100 text-blue-800 border-blue-200">Hybrid Cloud</Badge>
                      <Badge className="bg-blue-100 text-blue-800 border-blue-200">Regional Routing</Badge>
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
                    <Server className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-bold text-slate-900 mb-3">Citrix Virtual Apps & Desktop Deployment</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Deployed Citrix 7.15 across Azure with Virtual Desktop Agent installations, machine catalogs, delivery groups, and application publishing via StoreFront.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-purple-100 text-purple-800 border-purple-200">Citrix Virtual Apps</Badge>
                      <Badge className="bg-purple-100 text-purple-800 border-purple-200">VDA</Badge>
                      <Badge className="bg-purple-100 text-purple-800 border-purple-200">StoreFront</Badge>
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
                    <ShieldCheck className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-bold text-slate-900 mb-3">Citrix ADC (NetScaler) Integration</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Configured Citrix Application Delivery Controller across all 8 data centers with Palo Alto Networks firewall resolution, ensuring secure and optimized application delivery.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200">Citrix ADC</Badge>
                      <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200">NetScaler</Badge>
                      <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200">Palo Alto Integration</Badge>
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
                  <div className="p-4 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 shadow-lg flex-shrink-0">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-bold text-slate-900 mb-3">PowerShell Automation</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Automated deployment and configuration tasks using PowerShell scripting, streamlining infrastructure provisioning across all regional data centers.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-orange-100 text-orange-800 border-orange-200">PowerShell</Badge>
                      <Badge className="bg-orange-100 text-orange-800 border-orange-200">Automation</Badge>
                      <Badge className="bg-orange-100 text-orange-800 border-orange-200">IaC</Badge>
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
                Enhanced Global Connectivity
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl p-10 border border-blue-200/60 shadow-xl"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-blue-100 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Enhanced Security</h4>
                      <p className="text-slate-600 text-sm">Secure application delivery with Citrix ADC and firewall integration</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-blue-100 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Regional Connectivity</h4>
                      <p className="text-slate-600 text-sm">Users connect to nearest data center for optimal performance</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-blue-100 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">4,000 Concurrent Users</h4>
                      <p className="text-slate-600 text-sm">Seamless access for global workforce across all regions</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-blue-100 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Hybrid Cloud Flexibility</h4>
                      <p className="text-slate-600 text-sm">Azure and on-premises deployment for optimal resource utilization</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-blue-100 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Global Load Balancing</h4>
                      <p className="text-slate-600 text-sm">GSLB ensuring high availability across 8 data centers</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-blue-100 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Enterprise Support</h4>
                      <p className="text-slate-600 text-sm">Benefiting Clarks, Starbucks, Under Armour, and more</p>
                    </div>
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
                <Network className="w-4 h-4 text-slate-300" />
                <span className="text-sm font-medium text-slate-300">Enterprise Virtualization</span>
              </div>

              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Deploy
                <span className="block text-slate-300">Enterprise Citrix Infrastructure?</span>
              </h2>

              <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
                Get global Citrix deployment with GSLB, hybrid cloud architecture, and support for thousands of concurrent users.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MagneticButton>
                  <Button variant="hero" size="lg" className="bg-white text-slate-900 hover:bg-slate-100" asChild>
                    <Link to="/contact">
                      Start Your Citrix Deployment
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </MagneticButton>
                <MagneticButton>
                  <Button variant="hero-outline" size="lg" className="border-slate-300 text-white hover:bg-slate-800" asChild>
                    <Link to="/services/digital-workspace">
                      Learn About Digital Workspace
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

export default BlueYonderCitrix;
