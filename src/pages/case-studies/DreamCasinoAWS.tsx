import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Zap,
  CheckCircle,
  TrendingDown,
  TrendingUp,
  Cloud,
  DollarSign,
  Users,
  Globe,
  Shield
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SEOHead } from '@/components/SEOHead';
import { MagneticButton } from '@/components/MagneticButton';

const DreamCasinoAWS = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <SEOHead
        title="DreamCasino Case Study | AWS Cloud Optimization & Scalability | Axiomio"
        description="How Axiomio helped DreamCasino reduce costs by 30% while scaling 5x using AWS cloud optimization, achieving 99.99% uptime and 60% faster deployments."
        keywords="DreamCasino, AWS optimization, cloud scalability, cost reduction, gaming platform, 99.99% uptime, auto scaling"
        canonicalUrl="https://axiomio.com/case-studies/dreamcasino-aws"
      />

      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-br from-white via-slate-50 to-slate-100">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
          <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/8 via-pink-500/6 to-rose-500/8 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/6 via-indigo-500/6 to-violet-500/8 rounded-full blur-[100px]" />
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
              <nav className="flex items-center space-x-2 text-sm text-slate-600">
                <Link to="/" className="hover:text-slate-900 transition-colors">Home</Link>
                <span className="text-slate-400">/</span>
                <Link to="/case-studies" className="hover:text-slate-900 transition-colors">Case Studies</Link>
                <span className="text-slate-400">/</span>
                <span className="text-slate-900 font-medium">DreamCasino</span>
              </nav>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200/60 mb-6">
                  <Globe className="w-4 h-4 text-purple-600" />
                  <span className="text-sm font-medium text-purple-900">Gaming & Entertainment</span>
                </div>

                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                  30% Cost Reduction
                  <span className="block text-slate-700">While Scaling 5x</span>
                </h1>

                <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
                  How Axiomio helped DreamCasino modernize their AWS infrastructure, achieving significant cost savings while dramatically improving scalability and performance.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white rounded-xl p-6 border border-slate-200/80 shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-purple-100">
                        <TrendingDown className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-slate-900">30%</div>
                        <div className="text-xs text-slate-600 font-medium">Cost Cut</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 border border-slate-200/80 shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-pink-100">
                        <TrendingUp className="w-5 h-5 text-pink-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-slate-900">5x</div>
                        <div className="text-xs text-slate-600 font-medium">Scalability</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <MagneticButton>
                    <Button variant="hero" size="lg" asChild>
                      <Link to="/contact">
                        Optimize Your AWS
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </MagneticButton>
                  <MagneticButton>
                    <Button variant="hero-outline" size="lg" asChild>
                      <Link to="/services/cloud-finops">
                        Learn About Cloud FinOps
                      </Link>
                    </Button>
                  </MagneticButton>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="lg:pl-8">
                <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-lg">
                  <h3 className="font-heading text-xl font-bold text-slate-900 mb-6 text-center">Key Results</h3>

                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200/60">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-purple-100">
                          <DollarSign className="w-5 h-5 text-purple-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900">30% Lower Costs</div>
                          <div className="text-sm text-slate-600">Optimized Resources</div>
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-purple-600">✓</div>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/60">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-blue-100">
                          <Zap className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900">99.99% Uptime</div>
                          <div className="text-sm text-slate-600">High Availability</div>
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
                          <div className="font-semibold text-slate-900">5x Scalability</div>
                          <div className="text-sm text-slate-600">Auto Scaling</div>
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

      {/* About DreamCasino */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-6">About DreamCasino</h2>
              <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                A leading online gaming and entertainment platform serving millions of users worldwide with real-time gaming experiences.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <h4 className="font-semibold text-slate-900 mb-3">Infrastructure Challenges</h4>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>High AWS costs limiting profitability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Limited scalability during peak gaming hours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Slow deployment cycles affecting time-to-market</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Inefficient resource utilization</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200/60">
                  <h4 className="font-semibold text-slate-900 mb-2">Optimization Goals</h4>
                  <p className="text-slate-700 text-sm">
                    Reduce AWS costs while improving scalability, performance, and deployment speed to support rapid business growth.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5 text-slate-600" />
                    Platform Scale
                  </h4>
                  <p className="text-slate-600 text-sm mb-4">
                    Processing millions of gaming transactions daily with real-time gameplay requiring low latency and high availability.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <h4 className="font-semibold text-slate-900 mb-3">Business Impact</h4>
                  <p className="text-slate-600 text-sm">
                    High infrastructure costs were eating into margins while inability to scale quickly was limiting growth opportunities during peak demand.
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
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-6">AWS Optimization Strategy</h2>
            </motion.div>

            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg flex-shrink-0">
                    <Cloud className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-bold text-slate-900 mb-3">Infrastructure Modernization</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Migrated to containerized architecture with ECS and optimized EC2 instance types, right-sizing resources based on actual usage patterns and implementing Reserved Instances for predictable workloads.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-purple-100 text-purple-800 border-purple-200">ECS</Badge>
                      <Badge className="bg-purple-100 text-purple-800 border-purple-200">EC2 Optimization</Badge>
                      <Badge className="bg-purple-100 text-purple-800 border-purple-200">Reserved Instances</Badge>
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
                    <h3 className="font-heading text-xl font-bold text-slate-900 mb-3">Auto Scaling & Performance</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Implemented intelligent auto-scaling policies with Application Load Balancer, enabling 5x scalability during peak hours while automatically scaling down during low traffic to minimize costs.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-blue-100 text-blue-800 border-blue-200">Auto Scaling</Badge>
                      <Badge className="bg-blue-100 text-blue-800 border-blue-200">ALB</Badge>
                      <Badge className="bg-blue-100 text-blue-800 border-blue-200">Dynamic Scaling</Badge>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 shadow-lg flex-shrink-0">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-bold text-slate-900 mb-3">CI/CD Pipeline Acceleration</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Streamlined deployment process with AWS CodePipeline and CodeDeploy, reducing deployment time by 60% and enabling multiple daily releases with zero downtime blue-green deployments.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200">CodePipeline</Badge>
                      <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200">CodeDeploy</Badge>
                      <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200">Blue-Green</Badge>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 shadow-lg flex-shrink-0">
                    <DollarSign className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-bold text-slate-900 mb-3">Cost Optimization & FinOps</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Implemented comprehensive cost monitoring with AWS Cost Explorer and Trusted Advisor, eliminating waste through spot instances for non-critical workloads and S3 lifecycle policies.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-orange-100 text-orange-800 border-orange-200">Cost Explorer</Badge>
                      <Badge className="bg-orange-100 text-orange-800 border-orange-200">Spot Instances</Badge>
                      <Badge className="bg-orange-100 text-orange-800 border-orange-200">FinOps</Badge>
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
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-6">Exceptional Business Outcomes</h2>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
                  <TrendingDown className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-2">30%</div>
                <div className="text-sm text-slate-600 font-medium">Cost Reduction</div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-2">5x</div>
                <div className="text-sm text-slate-600 font-medium">Scalability</div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-2">99.99%</div>
                <div className="text-sm text-slate-600 font-medium">Uptime</div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-2">60%</div>
                <div className="text-sm text-slate-600 font-medium">Faster Deploy</div>
              </motion.div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 rounded-3xl p-10 border border-purple-200/60 shadow-xl">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-purple-100 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">30% Cost Savings</h4>
                      <p className="text-slate-600 text-sm">Optimized resource utilization and right-sizing</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-purple-100 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">5x Scalability</h4>
                      <p className="text-slate-600 text-sm">Auto-scaling handling peak traffic seamlessly</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-purple-100 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">99.99% Uptime</h4>
                      <p className="text-slate-600 text-sm">High availability with zero-downtime deployments</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-purple-100 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">60% Faster Deployments</h4>
                      <p className="text-slate-600 text-sm">Accelerated CI/CD pipeline with blue-green strategy</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-purple-100 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Real-Time Performance</h4>
                      <p className="text-slate-600 text-sm">Low latency gaming experience maintained</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-purple-100 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Cost Visibility</h4>
                      <p className="text-slate-600 text-sm">Complete FinOps monitoring and optimization</p>
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
                Ready to Optimize Your
                <span className="block text-slate-300">AWS Infrastructure?</span>
              </h2>

              <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
                Get cost reduction, improved scalability, and faster deployments with AWS cloud optimization.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MagneticButton>
                  <Button variant="hero" size="lg" className="bg-white text-slate-900 hover:bg-slate-100" asChild>
                    <Link to="/contact">
                      Start AWS Optimization
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </MagneticButton>
                <MagneticButton>
                  <Button variant="hero-outline" size="lg" className="border-slate-300 text-white hover:bg-slate-800" asChild>
                    <Link to="/services/cloud-finops">
                      Learn About Cloud FinOps
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

export default DreamCasinoAWS;
