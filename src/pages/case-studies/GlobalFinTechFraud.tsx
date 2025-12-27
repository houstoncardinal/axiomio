import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Zap,
  CheckCircle,
  TrendingDown,
  TrendingUp,
  Shield,
  Clock,
  Activity,
  Users,
  Globe,
  Brain
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SEOHead } from '@/components/SEOHead';
import { MagneticButton } from '@/components/MagneticButton';

const GlobalFinTechFraud = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <SEOHead
        title="Global FinTech Case Study | AI-Powered Fraud Detection | Axiomio"
        description="How Axiomio implemented real-time AI/ML fraud detection for global FinTech, reducing fraud by 85% while processing 10M+ daily transactions with sub-millisecond response."
        keywords="FinTech fraud detection, AI ML pipeline, real-time analytics, AWS fraud prevention, 85% fraud reduction, sub-millisecond response, financial security"
        canonicalUrl="https://axiomio.com/case-studies/global-fintech-fraud"
      />

      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-br from-white via-slate-50 to-slate-100">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
          <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-gradient-to-r from-indigo-500/8 via-purple-500/6 to-violet-500/8 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/6 via-cyan-500/6 to-teal-500/8 rounded-full blur-[100px]" />
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
              <nav className="flex items-center space-x-2 text-sm text-slate-600">
                <Link to="/" className="hover:text-slate-900 transition-colors">Home</Link>
                <span className="text-slate-400">/</span>
                <Link to="/case-studies" className="hover:text-slate-900 transition-colors">Case Studies</Link>
                <span className="text-slate-400">/</span>
                <span className="text-slate-900 font-medium">Global FinTech</span>
              </nav>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200/60 mb-6">
                  <Globe className="w-4 h-4 text-indigo-600" />
                  <span className="text-sm font-medium text-indigo-900">Financial Services</span>
                </div>

                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                  Real-Time Fraud
                  <span className="block text-slate-700">Detection with AI/ML</span>
                </h1>

                <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
                  Implemented AI-powered fraud detection system processing millions of transactions per second with sub-millisecond response times for global FinTech platform.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white rounded-xl p-6 border border-slate-200/80 shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-indigo-100">
                        <TrendingDown className="w-5 h-5 text-indigo-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-slate-900">85%</div>
                        <div className="text-xs text-slate-600 font-medium">Fraud Cut</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 border border-slate-200/80 shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-purple-100">
                        <Zap className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-slate-900">&lt;1ms</div>
                        <div className="text-xs text-slate-600 font-medium">Response</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <MagneticButton>
                    <Button variant="hero" size="lg" asChild>
                      <Link to="/contact">
                        Implement AI Fraud Detection
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </MagneticButton>
                  <MagneticButton>
                    <Button variant="hero-outline" size="lg" asChild>
                      <Link to="/services/ai-automation">
                        Learn About AI/ML
                      </Link>
                    </Button>
                  </MagneticButton>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="lg:pl-8">
                <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-lg">
                  <h3 className="font-heading text-xl font-bold text-slate-900 mb-6 text-center">System Performance</h3>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200/60">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-indigo-100">
                          <TrendingDown className="w-5 h-5 text-indigo-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900">85% Fraud Reduction</div>
                          <div className="text-sm text-slate-600">AI Detection</div>
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-indigo-600">✓</div>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200/60">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-blue-100">
                          <Zap className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900">&lt;1ms Response</div>
                          <div className="text-sm text-slate-600">Real-Time</div>
                        </div>
                      </div>
                      <div className="text-lg font-bold text-blue-600">Live</div>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200/60">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-emerald-100">
                          <TrendingUp className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900">10M+ Transactions</div>
                          <div className="text-sm text-slate-600">Daily Processing</div>
                        </div>
                      </div>
                      <div className="text-lg font-bold text-emerald-600">24/7</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-6">AI/ML Fraud Detection Pipeline</h2>
            </motion.div>

            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg flex-shrink-0">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-bold text-slate-900 mb-3">Machine Learning Models</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Deployed ensemble ML models using AWS SageMaker with gradient boosting and neural networks, trained on billions of historical transactions to detect anomalous patterns in real-time.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-indigo-100 text-indigo-800 border-indigo-200">AWS SageMaker</Badge>
                      <Badge className="bg-indigo-100 text-indigo-800 border-indigo-200">Neural Networks</Badge>
                      <Badge className="bg-indigo-100 text-indigo-800 border-indigo-200">Gradient Boosting</Badge>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg flex-shrink-0">
                    <Activity className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-bold text-slate-900 mb-3">Real-Time Streaming Analytics</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Implemented Amazon Kinesis Data Streams processing 10M+ transactions daily with AWS Lambda for serverless inference, achieving sub-millisecond response times at scale.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-blue-100 text-blue-800 border-blue-200">Kinesis Streams</Badge>
                      <Badge className="bg-blue-100 text-blue-800 border-blue-200">AWS Lambda</Badge>
                      <Badge className="bg-blue-100 text-blue-800 border-blue-200">Real-Time Processing</Badge>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 shadow-lg flex-shrink-0">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-bold text-slate-900 mb-3">24/7 Monitoring & Alerting</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Established comprehensive monitoring with CloudWatch and SNS for instant fraud alerts, automated model retraining pipelines, and continuous performance optimization ensuring 99.99% uptime.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200">CloudWatch</Badge>
                      <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200">SNS Alerts</Badge>
                      <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200">Auto Retraining</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-6">Transformational Fraud Prevention</h2>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                  <TrendingDown className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-2">85%</div>
                <div className="text-sm text-slate-600 font-medium">Fraud Reduction</div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-2">&lt;1ms</div>
                <div className="text-sm text-slate-600 font-medium">Response Time</div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-2">10M+</div>
                <div className="text-sm text-slate-600 font-medium">Daily Transactions</div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-2">24/7</div>
                <div className="text-sm text-slate-600 font-medium">Monitoring</div>
              </motion.div>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-violet-50 rounded-3xl p-10 border border-indigo-200/60 shadow-xl">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-indigo-100 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">85% Fraud Reduction</h4>
                      <p className="text-slate-600 text-sm">AI-powered anomaly detection</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-indigo-100 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Sub-Millisecond Response</h4>
                      <p className="text-slate-600 text-sm">Real-time transaction processing</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-indigo-100 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">10M+ Daily Transactions</h4>
                      <p className="text-slate-600 text-sm">Scalable processing at massive volume</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-indigo-100 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">24/7 Monitoring</h4>
                      <p className="text-slate-600 text-sm">Continuous threat detection and alerts</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-indigo-100 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Automated Model Updates</h4>
                      <p className="text-slate-600 text-sm">Continuous learning from new patterns</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-indigo-100 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">99.99% Uptime</h4>
                      <p className="text-slate-600 text-sm">Mission-critical reliability assured</p>
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
                Ready to Implement
                <span className="block text-slate-300">AI-Powered Fraud Detection?</span>
              </h2>

              <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
                Get real-time ML fraud detection processing millions of transactions with sub-millisecond response times.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MagneticButton>
                  <Button variant="hero" size="lg" className="bg-white text-slate-900 hover:bg-slate-100" asChild>
                    <Link to="/contact">
                      Build AI Fraud System
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </MagneticButton>
                <MagneticButton>
                  <Button variant="hero-outline" size="lg" className="border-slate-300 text-white hover:bg-slate-800" asChild>
                    <Link to="/services/ai-automation">
                      Learn About AI/ML Solutions
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

export default GlobalFinTechFraud;
