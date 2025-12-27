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
  TrendingDown,
  Globe,
  Calendar,
  FileText,
  Database,
  Cloud,
  Lock,
  Server,
  BarChart3
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SEOHead } from '@/components/SEOHead';
import { MagneticButton } from '@/components/MagneticButton';

const EnParadigmCaseStudy = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <SEOHead
        title="EnParadigm Case Study | AWS DevOps Migration & Infrastructure Modernization | Axiomio"
        description="How Axiomio helped EnParadigm migrate their EdTech platform from on-premises to AWS, reducing deployment time by 87.5% with automated DevOps pipeline and enhanced security."
        keywords="EnParadigm, AWS migration, DevOps pipeline, EdTech infrastructure, cloud migration, deployment automation, CI/CD, CloudFormation, infrastructure modernization"
        canonicalUrl="https://axiomio.com/case-studies/enparadigm"
      />

      <Navbar />

      {/* Enhanced Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-br from-white via-slate-50 to-slate-100">
        {/* Sophisticated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
          <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-gradient-to-r from-orange-500/8 via-amber-500/6 to-yellow-500/8 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/6 via-cyan-500/6 to-teal-500/8 rounded-full blur-[100px]" />
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
                <Link to="/case-studies" className="hover:text-slate-900 transition-colors">Case Studies</Link>
                <span className="text-slate-400">/</span>
                <span className="text-slate-900 font-medium">EnParadigm</span>
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
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200/60 mb-6">
                  <Globe className="w-4 h-4 text-orange-600" />
                  <span className="text-sm font-medium text-orange-900">EdTech & Learning Solutions</span>
                </div>

                {/* Title */}
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                  Reduced Deployment
                  <span className="block text-slate-700">Time by 87.5%</span>
                </h1>

                {/* Description */}
                <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
                  How Axiomio helped EnParadigm migrate from on-premises infrastructure to AWS with automated one-click DevOps pipeline, eliminating manual deployments and security vulnerabilities.
                </p>

                {/* Key Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white rounded-xl p-6 border border-slate-200/80 shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-orange-100">
                        <TrendingDown className="w-5 h-5 text-orange-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-slate-900">87.5%</div>
                        <div className="text-xs text-slate-600 font-medium">Time Reduction</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 border border-slate-200/80 shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-blue-100">
                        <Clock className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-slate-900">1 Hour</div>
                        <div className="text-xs text-slate-600 font-medium">Deployment</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <MagneticButton>
                    <Button variant="hero" size="lg" asChild>
                      <Link to="/contact">
                        Modernize Your Infrastructure
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </MagneticButton>
                  <MagneticButton>
                    <Button variant="hero-outline" size="lg" asChild>
                      <Link to="/services/devops-services">
                        Learn About DevOps
                      </Link>
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
                  <h3 className="font-heading text-xl font-bold text-slate-900 mb-6 text-center">Project Impact</h3>

                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200/60">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-orange-100">
                          <Zap className="w-5 h-5 text-orange-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900">One-Click Deploy</div>
                          <div className="text-sm text-slate-600">Automated Pipeline</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-orange-600">✓</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200/60">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-blue-100">
                          <ShieldCheck className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900">DDoS Protection</div>
                          <div className="text-sm text-slate-600">Enhanced Security</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-blue-600">Active</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200/60">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-emerald-100">
                          <Cloud className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900">5 Servers</div>
                          <div className="text-sm text-slate-600">Migrated to AWS</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-emerald-600">100%</div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="mt-8 pt-6 border-t border-slate-200">
                    <div className="flex items-center justify-between text-sm text-slate-600 mb-3">
                      <span>Project Timeline</span>
                      <span className="font-medium">3 Months</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-orange-500 to-amber-500 h-2 rounded-full w-full"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* About EnParadigm Section - Enhanced */}
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
                About EnParadigm
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                A mid-sized EdTech company providing innovative learning management solutions for educational institutions and corporate training programs.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 border border-slate-200/80 shadow-lg">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 shadow-lg">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-slate-900">Learning Platform</h3>
                      <p className="text-slate-600">EdTech Solutions</p>
                    </div>
                  </div>

                  <p className="text-slate-700 leading-relaxed mb-6">
                    EnParadigm delivers comprehensive learning management systems and educational technology solutions to schools, universities, and enterprises across multiple regions.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm text-slate-600">
                      <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                      <span>Learning management system platform</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-600">
                      <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                      <span>Corporate training solutions</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-600">
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      <span>Educational content delivery</span>
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
                    Infrastructure Challenge
                  </h4>
                  <p className="text-slate-600 text-sm">
                    On-premises infrastructure with manual deployment processes taking 8 hours, limited scalability, and security vulnerabilities including DDoS exposure.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-slate-600" />
                    Business Goals
                  </h4>
                  <p className="text-slate-600 text-sm">
                    Modernize infrastructure, reduce deployment time, enhance security, improve scalability, and lower total cost of ownership through cloud migration.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 border border-orange-200/60">
                  <h4 className="font-semibold text-slate-900 mb-2">Migration Priority</h4>
                  <p className="text-slate-700 text-sm">
                    Migrating 5 production servers from on-premises to AWS while maintaining service availability and establishing automated deployment workflows.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Requirements - Enhanced */}
      <section className="py-24 bg-slate-50 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50" />
        <div className="container relative mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 mb-6">
                <Target className="w-4 h-4 text-slate-600" />
                <span className="text-sm font-medium text-slate-700">Project Requirements</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Migration & Modernization Objectives
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                Comprehensive cloud migration requirements to modernize EdTech infrastructure
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 shadow-lg">
                      <Cloud className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-slate-900">Cloud Migration</h3>
                      <p className="text-slate-600 text-sm">AWS Infrastructure</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700 text-sm leading-relaxed">Migrate 5 servers to AWS</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700 text-sm leading-relaxed">Zero downtime migration</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700 text-sm leading-relaxed">High availability setup</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg">
                      <Zap className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-slate-900">DevOps Automation</h3>
                      <p className="text-slate-600 text-sm">CI/CD Pipeline</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700 text-sm leading-relaxed">One-click deployment</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700 text-sm leading-relaxed">Automated build process</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700 text-sm leading-relaxed">Eliminate manual errors</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 shadow-lg">
                      <ShieldCheck className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-slate-900">Security Hardening</h3>
                      <p className="text-slate-600 text-sm">CIS Benchmarks</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700 text-sm leading-relaxed">DDoS protection</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700 text-sm leading-relaxed">Security compliance</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700 text-sm leading-relaxed">Automated backups</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Implemented - Enhanced */}
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
                <Zap className="w-4 h-4 text-slate-600" />
                <span className="text-sm font-medium text-slate-700">Implementation</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                AWS DevOps Solutions Delivered
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                Comprehensive cloud migration and DevOps automation with enhanced security and monitoring
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
                  <div className="p-4 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 shadow-lg flex-shrink-0">
                    <Server className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-bold text-slate-900 mb-3">AWS Server Migration Service</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Migrated 5 production servers from on-premises infrastructure to AWS using AWS Server Migration Service with zero downtime and seamless transition for users.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-orange-100 text-orange-800 border-orange-200">Server Migration</Badge>
                      <Badge className="bg-orange-100 text-orange-800 border-orange-200">Zero Downtime</Badge>
                      <Badge className="bg-orange-100 text-orange-800 border-orange-200">EC2 Instances</Badge>
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
                  <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg flex-shrink-0">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-bold text-slate-900 mb-3">Automated CI/CD Pipeline</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Implemented one-click deployment pipeline using AWS CodeBuild and CodeCommit, reducing deployment time from 8 hours to just 1 hour while eliminating manual errors.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-blue-100 text-blue-800 border-blue-200">CodeBuild</Badge>
                      <Badge className="bg-blue-100 text-blue-800 border-blue-200">CodeCommit</Badge>
                      <Badge className="bg-blue-100 text-blue-800 border-blue-200">One-Click Deploy</Badge>
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
                  <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 shadow-lg flex-shrink-0">
                    <ShieldCheck className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-bold text-slate-900 mb-3">Security & Compliance Implementation</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Deployed DDoS protection, implemented CIS Benchmark security controls, automated backups, and established comprehensive monitoring with CloudWatch and CloudTrail.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200">DDoS Protection</Badge>
                      <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200">CIS Benchmark</Badge>
                      <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200">CloudWatch</Badge>
                      <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200">KMS Encryption</Badge>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg"
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 shadow-lg flex-shrink-0">
                    <Database className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-bold text-slate-900 mb-3">Database Migration & High Availability</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Migrated databases to Amazon RDS MySQL with multi-AZ deployment for high availability, automated backups, and improved performance with read replicas.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-purple-100 text-purple-800 border-purple-200">RDS MySQL</Badge>
                      <Badge className="bg-purple-100 text-purple-800 border-purple-200">Multi-AZ</Badge>
                      <Badge className="bg-purple-100 text-purple-800 border-purple-200">Auto Backup</Badge>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Results - Enhanced */}
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
                Transformational Business Impact
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                Dramatic improvements in deployment speed, security posture, and operational efficiency
              </p>
            </motion.div>

            {/* Key Metrics */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center mx-auto mb-4">
                  <TrendingDown className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-2">87.5%</div>
                <div className="text-sm text-slate-600 font-medium">Time Reduction</div>
                <div className="text-xs text-slate-500 mt-1">8 hrs → 1 hr</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-2">1-Click</div>
                <div className="text-sm text-slate-600 font-medium">Deployment</div>
                <div className="text-xs text-slate-500 mt-1">Fully Automated</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-2">100%</div>
                <div className="text-sm text-slate-600 font-medium">DDoS Protected</div>
                <div className="text-xs text-slate-500 mt-1">Enhanced Security</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center mx-auto mb-4">
                  <Cloud className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-2">5/5</div>
                <div className="text-sm text-slate-600 font-medium">Servers Migrated</div>
                <div className="text-xs text-slate-500 mt-1">Zero Downtime</div>
              </motion.div>
            </div>

            {/* Detailed Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 rounded-3xl p-10 border border-orange-200/60 shadow-xl"
            >
              <div className="text-center mb-8">
                <h3 className="font-heading text-2xl font-bold text-slate-900 mb-2">Complete Infrastructure Transformation</h3>
                <p className="text-slate-700">Measurable improvements across all operational dimensions</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-orange-100 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Operational Efficiency</h4>
                      <p className="text-slate-600 text-sm">87.5% reduction in deployment time with one-click automation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-orange-100 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Cost Optimization</h4>
                      <p className="text-slate-600 text-sm">Reduced TCO through efficient AWS resource utilization</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-orange-100 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Security Hardening</h4>
                      <p className="text-slate-600 text-sm">CIS Benchmark compliance with DDoS protection and encryption</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-orange-100 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">High Availability</h4>
                      <p className="text-slate-600 text-sm">Multi-AZ deployment ensuring 99.99% uptime SLA</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-orange-100 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Automated Backups</h4>
                      <p className="text-slate-600 text-sm">Daily automated backups with point-in-time recovery</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-orange-100 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Enhanced Monitoring</h4>
                      <p className="text-slate-600 text-sm">Comprehensive CloudWatch monitoring with automated alerts</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-orange-100 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Scalability</h4>
                      <p className="text-slate-600 text-sm">Auto-scaling infrastructure ready for growth</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-orange-100 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Compliance Ready</h4>
                      <p className="text-slate-600 text-sm">AWS security best practices and compliance frameworks</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies Used */}
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
                <BarChart3 className="w-4 h-4 text-slate-600" />
                <span className="text-sm font-medium text-slate-700">Technology Stack</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                AWS Services & Technologies
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                'AWS Server Migration Service',
                'AWS CodeBuild',
                'AWS CodeCommit',
                'Amazon RDS MySQL',
                'AWS KMS',
                'AWS CloudTrail',
                'AWS CloudWatch',
                'AWS SNS',
                'AWS Config',
                'CloudFormation',
                'Multi-AZ Deployment',
                'VPN Gateway'
              ].map((tech, index) => (
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

      {/* CTA Section - Enhanced */}
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
                <span className="text-sm font-medium text-slate-300">Modernize Your Infrastructure</span>
              </div>

              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your
                <span className="block text-slate-300">EdTech Infrastructure?</span>
              </h2>

              <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
                Get AWS cloud migration, automated DevOps pipelines, and enterprise-grade security for your platform.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-10">
                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <Zap className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                  <div className="text-sm font-medium text-white">87.5% Faster</div>
                  <div className="text-xs text-slate-400">Deployment time</div>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <ShieldCheck className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                  <div className="text-sm font-medium text-white">DDoS Protection</div>
                  <div className="text-xs text-slate-400">Enhanced security</div>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <Cloud className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                  <div className="text-sm font-medium text-white">Zero Downtime</div>
                  <div className="text-xs text-slate-400">Migration process</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MagneticButton>
                  <Button variant="hero" size="lg" className="bg-white text-slate-900 hover:bg-slate-100" asChild>
                    <Link to="/contact">
                      Start Your Cloud Migration
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </MagneticButton>
                <MagneticButton>
                  <Button variant="hero-outline" size="lg" className="border-slate-300 text-white hover:bg-slate-800" asChild>
                    <Link to="/services/devops-services">
                      Learn About DevOps
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

export default EnParadigmCaseStudy;
