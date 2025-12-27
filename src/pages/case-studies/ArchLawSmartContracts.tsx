import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  FileText,
  Zap,
  CheckCircle,
  Users,
  Quote,
  TrendingUp,
  Globe,
  Code,
  Mail,
  Shield,
  Edit3
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SEOHead } from '@/components/SEOHead';
import { MagneticButton } from '@/components/MagneticButton';

const ArchLawSmartContracts = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <SEOHead
        title="Arch Law Case Study | Cloud-Based Smart Contracts Platform Enhancement | Axiomio"
        description="How Axiomio enhanced Arch Law's OpenLaw platform with Annature eSignature integration, Firebase backend, and Vue.js frontend for collaborative legal document management."
        keywords="Arch Law, OpenLaw, smart contracts, legal tech, Vue.js, Firebase, Annature, eSignature, digital law, legal platform"
        canonicalUrl="https://axiomio.com/case-studies/arch-law-smart-contracts"
      />

      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-br from-white via-slate-50 to-slate-100">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
          <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/8 via-violet-500/6 to-indigo-500/8 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-r from-emerald-500/6 via-teal-500/6 to-cyan-500/8 rounded-full blur-[100px]" />
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
              <nav className="flex items-center space-x-2 text-sm text-slate-600">
                <Link to="/" className="hover:text-slate-900 transition-colors">Home</Link>
                <span className="text-slate-400">/</span>
                <Link to="/case-studies" className="hover:text-slate-900 transition-colors">Case Studies</Link>
                <span className="text-slate-400">/</span>
                <span className="text-slate-900 font-medium">Arch Law</span>
              </nav>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-50 to-violet-50 border border-purple-200/60 mb-6">
                  <Globe className="w-4 h-4 text-purple-600" />
                  <span className="text-sm font-medium text-purple-900">Legal Technology</span>
                </div>

                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                  Smart Contracts
                  <span className="block text-slate-700">Platform Enhancement</span>
                </h1>

                <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
                  How Axiomio enhanced Arch Law's OpenLaw platform with digital signature integration, account management, and real-time collaboration tools for modern legal practice.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white rounded-xl p-6 border border-slate-200/80 shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-purple-100">
                        <Edit3 className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-slate-900">eSign</div>
                        <div className="text-xs text-slate-600 font-medium">Integration</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 border border-slate-200/80 shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-violet-100">
                        <Users className="w-5 h-5 text-violet-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-slate-900">Multi</div>
                        <div className="text-xs text-slate-600 font-medium">Collaboration</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <MagneticButton>
                    <Button variant="hero" size="lg" asChild>
                      <Link to="/contact">
                        Build Legal Platform
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </MagneticButton>
                  <MagneticButton>
                    <Button variant="hero-outline" size="lg" asChild>
                      <Link to="/services/ai-automation">
                        Learn About Development
                      </Link>
                    </Button>
                  </MagneticButton>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="lg:pl-8">
                <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-lg">
                  <h3 className="font-heading text-xl font-bold text-slate-900 mb-6 text-center">Key Features</h3>

                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-purple-50 to-violet-50 border border-purple-200/60">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-purple-100">
                          <Edit3 className="w-5 h-5 text-purple-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900">Digital Signatures</div>
                          <div className="text-sm text-slate-600">Annature Integration</div>
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-purple-600">✓</div>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/60">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-blue-100">
                          <Users className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900">Account Types</div>
                          <div className="text-sm text-slate-600">User & Business</div>
                        </div>
                      </div>
                      <div className="text-lg font-bold text-blue-600">Live</div>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200/60">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-emerald-100">
                          <Mail className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900">Notifications</div>
                          <div className="text-sm text-slate-600">SMTP Workflow</div>
                        </div>
                      </div>
                      <div className="text-lg font-bold text-emerald-600">Active</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* About Arch Law */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-6">About Arch Law</h2>
              <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                A digital law firm serving individuals, startups, SMBs, enterprises, and insurance companies through innovative cloud-based practice management.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <h4 className="font-semibold text-slate-900 mb-3">OpenLaw Platform</h4>
                  <p className="text-slate-600 text-sm mb-4">
                    Practice management system enabling independent lawyers to collaborate under one platform while competing collectively for client work through smart contracts and digital workflows.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl p-6 border border-purple-200/60">
                  <h4 className="font-semibold text-slate-900 mb-2">Enhancement Needs</h4>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span>Differentiate single users vs business entities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span>Integrate digital signature capabilities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span>Enable multi-party collaboration tools</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5 text-slate-600" />
                    Client Segments
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-slate-100 text-slate-800 border-slate-200">Individuals</Badge>
                    <Badge className="bg-slate-100 text-slate-800 border-slate-200">Startups</Badge>
                    <Badge className="bg-slate-100 text-slate-800 border-slate-200">SMBs</Badge>
                    <Badge className="bg-slate-100 text-slate-800 border-slate-200">Enterprises</Badge>
                    <Badge className="bg-slate-100 text-slate-800 border-slate-200">Insurance</Badge>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <h4 className="font-semibold text-slate-900 mb-3">Technical Challenge</h4>
                  <p className="text-slate-600 text-sm">
                    Legacy codebase with outdated dependencies requiring modernization while adding new account types, negotiation tools, and eSignature integration.
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
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-6">Platform Enhancements Delivered</h2>
            </motion.div>

            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 shadow-lg flex-shrink-0">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-bold text-slate-900 mb-3">Codebase Modernization</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Upgraded outdated dependencies to current versions using agile development approach, resolved inherited codebase defects, and implemented modern development practices.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-purple-100 text-purple-800 border-purple-200">Dependency Updates</Badge>
                      <Badge className="bg-purple-100 text-purple-800 border-purple-200">Bug Fixes</Badge>
                      <Badge className="bg-purple-100 text-purple-800 border-purple-200">Agile Development</Badge>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg flex-shrink-0">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-bold text-slate-900 mb-3">Account Type Differentiation & Negotiation Tools</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Expanded account system to distinguish single users vs business entities, developed negotiation tool enabling multi-party interactions for collaborative document workflows.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-blue-100 text-blue-800 border-blue-200">Account Management</Badge>
                      <Badge className="bg-blue-100 text-blue-800 border-blue-200">Multi-Party Tools</Badge>
                      <Badge className="bg-blue-100 text-blue-800 border-blue-200">Collaboration</Badge>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 shadow-lg flex-shrink-0">
                    <Edit3 className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-bold text-slate-900 mb-3">Annature eSignature Integration</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Integrated Annature eSignature platform enabling users to execute digital signatures without waiting for physical documents, streamlining legal document execution.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200">Annature</Badge>
                      <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200">Digital Signatures</Badge>
                      <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200">Workflow Automation</Badge>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 shadow-lg flex-shrink-0">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-bold text-slate-900 mb-3">SMTP Notification System</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Implemented SMTP mail server for workflow notifications, enabling users to receive real-time email updates on documentation progress and collaboration activities.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-orange-100 text-orange-800 border-orange-200">SMTP</Badge>
                      <Badge className="bg-orange-100 text-orange-800 border-orange-200">Email Notifications</Badge>
                      <Badge className="bg-orange-100 text-orange-800 border-orange-200">Real-Time Updates</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-6">Technology Stack</h2>
            </motion.div>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {['Firebase', 'Vue.js', 'Node.js', 'Annature eSignature', 'SMTP Services', 'Firebase Framework'].map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-slate-50 rounded-xl p-4 border border-slate-200 text-center hover:bg-slate-100 transition-colors"
                >
                  <div className="text-sm font-medium text-slate-900">{tech}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-6">Platform Capabilities Enhanced</h2>
            </motion.div>

            <div className="bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50 rounded-3xl p-10 border border-purple-200/60 shadow-xl">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-purple-100 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Account Differentiation</h4>
                      <p className="text-slate-600 text-sm">Distinguish documents by account type and template</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-purple-100 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Digital Signatures</h4>
                      <p className="text-slate-600 text-sm">Execute signatures without physical documents</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-purple-100 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Email Notifications</h4>
                      <p className="text-slate-600 text-sm">Real-time progress updates on documentation</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-purple-100 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Multi-Party Negotiation</h4>
                      <p className="text-slate-600 text-sm">Efficient collaboration through negotiation tools</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-purple-100 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Modernized Codebase</h4>
                      <p className="text-slate-600 text-sm">Updated dependencies and resolved defects</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-purple-100 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Production Ready</h4>
                      <p className="text-slate-600 text-sm">All initial elements for market launch delivered</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="bg-white rounded-3xl p-10 border border-slate-200 shadow-xl">
                <Quote className="w-12 h-12 text-slate-300 mx-auto mb-6" />
                <blockquote className="text-xl text-slate-700 italic mb-8 leading-relaxed text-center max-w-3xl mx-auto">
                  "The team at Arch Law worked with Axiom during the formative development phase of our platform. They did a great job building all the initial elements we needed to get the project off the ground and in market."
                </blockquote>

                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                    <Users className="w-8 h-8 text-slate-600" />
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-slate-900 text-lg">Marcus McCarthy</div>
                    <div className="text-slate-600">Director</div>
                    <div className="text-sm text-slate-500 mt-1">Arch Law</div>
                  </div>
                </div>
              </div>
            </motion.div>
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
                Ready to Build Your
                <span className="block text-slate-300">Legal Tech Platform?</span>
              </h2>

              <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
                Get expert development for smart contracts, digital signatures, and collaborative legal workflows.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MagneticButton>
                  <Button variant="hero" size="lg" className="bg-white text-slate-900 hover:bg-slate-100" asChild>
                    <Link to="/contact">
                      Start Your Legal Platform
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </MagneticButton>
                <MagneticButton>
                  <Button variant="hero-outline" size="lg" className="border-slate-300 text-white hover:bg-slate-800" asChild>
                    <Link to="/services/ai-automation">
                      Learn About Development
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

export default ArchLawSmartContracts;
