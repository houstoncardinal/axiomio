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
  FileText
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SEOHead } from '@/components/SEOHead';
import { MagneticButton } from '@/components/MagneticButton';

const ScifferCaseStudy = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <SEOHead
        title="Sciffer Analytics Case Study | DevSecOps & ISO 27001 Implementation | Axiomio"
        description="How Axiomio helped Sciffer Analytics implement comprehensive DevSecOps framework and achieve ISO 27001 compliance for their AI platform Reflexion.ai."
        keywords="Sciffer Analytics, Reflexion.ai, DevSecOps, ISO 27001, security implementation, AI platform security, penetration testing, compliance certification"
        canonicalUrl="https://axiomio.com/case-studies/sciffer-enhances-security-with-axiom"
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
                <span className="text-slate-900 font-medium">Sciffer Analytics</span>
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
                  <span className="text-sm font-medium text-blue-900">AI & Content Analytics Platform</span>
                </div>

                {/* Title */}
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                  Sciffer Enhances
                  <span className="block text-slate-700">Security with Axiom</span>
                </h1>

                {/* Description */}
                <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
                  How Axiomio helped Singapore-based startup Reflexion.ai implement comprehensive DevSecOps framework and achieve ISO 27001 compliance for their AI platform.
                </p>

                {/* Key Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white rounded-xl p-6 border border-slate-200/80 shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-green-100">
                        <ShieldCheck className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-slate-900">100%</div>
                        <div className="text-xs text-slate-600 font-medium">ISO Compliant</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 border border-slate-200/80 shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-blue-100">
                        <Zap className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-slate-900">48hrs</div>
                        <div className="text-xs text-slate-600 font-medium">Assessment</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <MagneticButton>
                    <Button variant="hero" size="lg" asChild>
                      <Link to="/contact">
                        Get Your Security Assessment
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </MagneticButton>
                  <MagneticButton>
                    <Button variant="hero-outline" size="lg" asChild>
                      <Link to="/services/cybersecurity">
                        Learn About DevSecOps
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
                    <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200/60">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-emerald-100">
                          <Award className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900">ISO 27001</div>
                          <div className="text-sm text-slate-600">Certification Achieved</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-emerald-600">✓</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/60">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-blue-100">
                          <Target className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900">DevSecOps</div>
                          <div className="text-sm text-slate-600">Framework Implemented</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-blue-600">Active</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-purple-50 to-violet-50 border border-purple-200/60">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-purple-100">
                          <Clock className="w-5 h-5 text-purple-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900">Assessment</div>
                          <div className="text-sm text-slate-600">Time to Complete</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-purple-600">48hrs</div>
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
                      <div className="bg-gradient-to-r from-blue-500 to-emerald-500 h-2 rounded-full w-full"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* About Sciffer Section - Enhanced */}
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
                About Sciffer Analytics
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                A Singapore-based startup revolutionizing content analytics for broadcasters and media companies through AI-powered collaboration and metadata extraction.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                {/* Sciffer Logo */}
                <div className="mb-8 flex justify-center lg:justify-start">
                  <img
                    src="/case-sciffer-img.png"
                    alt="Sciffer Analytics Logo"
                    className="h-16 w-auto object-contain"
                  />
                </div>

                <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 border border-slate-200/80 shadow-lg">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-slate-900">Reflexion.ai Platform</h3>
                      <p className="text-slate-600">AI-Powered Content Analytics</p>
                    </div>
                  </div>

                  <p className="text-slate-700 leading-relaxed mb-6">
                    A comprehensive AI-based content analytics platform where users can upload videos and extract deep insights through advanced metadata analysis and collaborative storytelling tools.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm text-slate-600">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      <span>Video content analysis & metadata extraction</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-600">
                      <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                      <span>Collaborative content creation tools</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-600">
                      <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                      <span>AI-powered storyboard generation</span>
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
                    Target Market
                  </h4>
                  <p className="text-slate-600 text-sm">
                    Broadcasters, media companies, and content creators seeking advanced AI tools for content analysis and collaboration.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-slate-600" />
                    Business Challenge
                  </h4>
                  <p className="text-slate-600 text-sm">
                    As a growing AI platform handling sensitive media content, Sciffer needed robust security measures to protect their platform and ensure compliance with international standards.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200/60">
                  <h4 className="font-semibold text-slate-900 mb-2">Security Priority</h4>
                  <p className="text-slate-700 text-sm">
                    The client proactively approached Axiom to secure their platform before scaling operations and handling more sensitive media content.
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
                Security & Compliance Objectives
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                Comprehensive security requirements to protect an AI platform handling sensitive media content
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 shadow-lg">
                      <ShieldCheck className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-slate-900">Application Security</h3>
                      <p className="text-slate-600">Web & Infrastructure Protection</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700 text-sm leading-relaxed">Secure application infrastructure and codebase</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700 text-sm leading-relaxed">Protect against vulnerabilities and cyber attacks</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700 text-sm leading-relaxed">Comprehensive penetration testing services</span>
                    </div>
                  </div>

                  <div className="bg-red-50 rounded-lg p-4 border border-red-200/60">
                    <p className="text-red-800 text-sm font-medium">Critical for AI Platform Security</p>
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
                      <Award className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-slate-900">Compliance Certification</h3>
                      <p className="text-slate-600">ISO 27001 Standards</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700 text-sm leading-relaxed">Achieve ISO 27001 certification</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700 text-sm leading-relaxed">Implement international security standards</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                      <span className="text-slate-700 text-sm leading-relaxed">Build trust with enterprise clients</span>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200/60">
                    <p className="text-blue-800 text-sm font-medium">Essential for Enterprise Adoption</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Axiom Section - Enhanced */}
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
                <Users className="w-4 h-4 text-slate-600" />
                <span className="text-sm font-medium text-slate-700">Why Axiom</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                The Right Partner for Enterprise Security
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                5+ years of expertise in cloud security, Azure partnership, and comprehensive security solutions
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
                        <h4 className="font-semibold text-slate-900">Years of Experience</h4>
                        <p className="text-slate-600 text-sm">Specialized in security solutions for startups and SMBs</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-1">
                        <Award className="w-4 h-4 text-indigo-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">Azure Partnership</h4>
                        <p className="text-slate-600 text-sm">Certified Azure partner with deep platform expertise</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0 mt-1">
                        <Users className="w-4 h-4 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">Expert Team</h4>
                        <p className="text-slate-600 text-sm">Skilled engineers specializing in security assessments</p>
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
                        <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">Comprehensive Assessment</h4>
                        <p className="text-slate-600 text-sm">Identify all risks and vulnerabilities systematically</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0 mt-1">
                        <Zap className="w-4 h-4 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">Automated & Manual Testing</h4>
                        <p className="text-slate-600 text-sm">Combined approaches for thorough security coverage</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                        <FileText className="w-4 h-4 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">Detailed Roadmaps</h4>
                        <p className="text-slate-600 text-sm">Actionable remediation plans with clear priorities</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Implemented - Enhanced */}
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
                Security Solutions Delivered
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                Comprehensive security framework implementation with DevSecOps integration and compliance certification
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
                  <div className="p-4 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 shadow-lg flex-shrink-0">
                    <ShieldCheck className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-bold text-slate-900 mb-3">Penetration Testing & Security Assessment</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Comprehensive penetration testing across web applications and infrastructure, with detailed assessment reports and prioritized remediation roadmaps.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-red-100 text-red-800 border-red-200">Vulnerability Assessment</Badge>
                      <Badge className="bg-red-100 text-red-800 border-red-200">Penetration Testing</Badge>
                      <Badge className="bg-red-100 text-red-800 border-red-200">Risk Analysis</Badge>
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
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-bold text-slate-900 mb-3">DevSecOps Framework Implementation</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Integrated security into the development pipeline with SonarQube for code quality and OWASP-ZAP for automated security testing.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-blue-100 text-blue-800 border-blue-200">SonarQube Integration</Badge>
                      <Badge className="bg-blue-100 text-blue-800 border-blue-200">OWASP-ZAP</Badge>
                      <Badge className="bg-blue-100 text-blue-800 border-blue-200">CI/CD Security</Badge>
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
                  <div className="p-4 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg flex-shrink-0">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-bold text-slate-900 mb-3">ISO 27001 Compliance Certification</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Deployed comprehensive Azure policies and security controls required for ISO 27001 certification, ensuring enterprise-grade security standards.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-green-100 text-green-800 border-green-200">ISO 27001</Badge>
                      <Badge className="bg-green-100 text-green-800 border-green-200">Azure Policies</Badge>
                      <Badge className="bg-green-100 text-green-800 border-green-200">Compliance Framework</Badge>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Results - Enhanced */}
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
              <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                Enhanced platform security enabling Sciffer to scale operations with confidence
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 rounded-3xl p-10 border border-emerald-200/60 shadow-xl"
            >
              <div className="text-center mb-8">
                <h3 className="font-heading text-2xl font-bold text-slate-900 mb-2">Platform Security Enhanced</h3>
                <p className="text-slate-700">New security features and capabilities implemented</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-emerald-100 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Advanced Threat Protection</h4>
                      <p className="text-slate-600 text-sm">Multi-layered security defenses against cyber attacks</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-emerald-100 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Compliance Ready</h4>
                      <p className="text-slate-600 text-sm">ISO 27001 certified infrastructure and processes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-emerald-100 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">DevSecOps Integration</h4>
                      <p className="text-slate-600 text-sm">Security built into development lifecycle</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-emerald-100 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Automated Security Testing</h4>
                      <p className="text-slate-600 text-sm">Continuous vulnerability assessment and monitoring</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-emerald-100 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Enterprise Trust</h4>
                      <p className="text-slate-600 text-sm">Credibility boost for enterprise client acquisition</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-emerald-100 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Scalable Security</h4>
                      <p className="text-slate-600 text-sm">Framework ready for future growth and expansion</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial - Enhanced */}
      <section className="py-24 bg-slate-50 relative">
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
                <span className="text-sm font-medium text-slate-700">Client Testimonial</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Partnership That Delivered Results
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
                  "The team at Axiom worked with Sciffer during the formative development phase of our platform. They did a great job building all the initial elements we needed to get the project off the ground and in market. I found the team at Axiom extremely professional, responsive, and capable. I would have no hesitation using them again and recommending them to others."
                </blockquote>

                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                    <Users className="w-8 h-8 text-slate-600" />
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-slate-900 text-lg">Marcus McCarthy</div>
                    <div className="text-slate-600">Director, Arch Law</div>
                    <div className="text-sm text-slate-500 mt-1">Client Partner</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Next Steps - Enhanced */}
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
                <Calendar className="w-4 h-4 text-slate-600" />
                <span className="text-sm font-medium text-slate-700">Implementation</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Ongoing Security Excellence
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                Continuous improvement and proactive security measures for sustained protection
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-3xl p-10 border border-blue-200/60"
            >
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <ShieldCheck className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Implement Security Measures</h3>
                  <p className="text-slate-600 text-sm">Apply recommended security controls and remediation steps to strengthen platform defenses.</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Monitor & Improve</h3>
                  <p className="text-slate-600 text-sm">Continuous monitoring and regular security assessments to maintain optimal protection levels.</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Scale Securely</h3>
                  <p className="text-slate-600 text-sm">Grow operations with confidence, knowing security scales alongside business expansion.</p>
                </div>
              </div>
            </motion.div>
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
                <ShieldCheck className="w-4 h-4 text-slate-300" />
                <span className="text-sm font-medium text-slate-300">Secure Your Platform</span>
              </div>

              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Fortify Your
                <span className="block text-slate-300">AI Platform Security?</span>
              </h2>

              <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
                Get comprehensive DevSecOps implementation, penetration testing, and ISO 27001 compliance certification for your application.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-10">
                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <ShieldCheck className="w-6 h-6 text-green-400 mx-auto mb-2" />
                  <div className="text-sm font-medium text-white">Security Assessment</div>
                  <div className="text-xs text-slate-400">48-hour delivery</div>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <Award className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                  <div className="text-sm font-medium text-white">ISO 27001 Ready</div>
                  <div className="text-xs text-slate-400">Compliance framework</div>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <Target className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                  <div className="text-sm font-medium text-white">DevSecOps Setup</div>
                  <div className="text-xs text-slate-400">Pipeline integration</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MagneticButton>
                  <Button variant="hero" size="lg" className="bg-white text-slate-900 hover:bg-slate-100" asChild>
                    <Link to="/contact">
                      Get Your Security Assessment
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </MagneticButton>
                <MagneticButton>
                  <Button variant="hero-outline" size="lg" className="border-slate-300 text-white hover:bg-slate-800" asChild>
                    <Link to="/services/cybersecurity">
                      Learn About ISO 27001
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

export default ScifferCaseStudy;
