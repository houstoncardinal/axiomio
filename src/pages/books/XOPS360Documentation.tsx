import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, Book, Cloud, Shield, Settings, Users, Database, 
  Cpu, Lock, Globe, Server, FileText, ChevronRight, ChevronDown,
  Zap, DollarSign, Eye, Target, CheckCircle, AlertTriangle,
  Layers, GitBranch, Key, Mail, Phone, ExternalLink
} from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

const sections = [
  {
    id: 'introduction',
    title: 'Introduction',
    icon: Book,
    subsections: [
      { id: 'overview', title: 'Overview' },
      { id: 'key-features', title: 'Key Features' },
      { id: 'current-version', title: 'Current Version' },
    ]
  },
  {
    id: 'features',
    title: 'Feature Overview',
    icon: Zap,
    subsections: [
      { id: 'cloud-finops', title: 'Cloud FinOps' },
      { id: 'cloudops', title: 'CloudOps' },
      { id: 'cyber-security', title: 'Cyber Security' },
      { id: 'cloud-security', title: 'Cloud Security' },
      { id: 'workload-security', title: 'Workload Security' },
      { id: 'ai-assistant', title: 'AI Assistant' },
    ]
  },
  {
    id: 'setup',
    title: 'Initial Setup',
    icon: Settings,
    subsections: [
      { id: 'account-registration', title: 'Account Registration' },
      { id: 'subscription-plans', title: 'Subscription Plans' },
    ]
  },
  {
    id: 'account-management',
    title: 'Account Management',
    icon: Users,
    subsections: [
      { id: 'updating-credentials', title: 'Updating Credentials' },
      { id: 'managing-subscriptions', title: 'Managing Subscriptions' },
    ]
  },
  {
    id: 'integrations',
    title: 'Account Integrations',
    icon: GitBranch,
    subsections: [
      { id: 'aws-integration', title: 'AWS Integration' },
      { id: 'azure-integration', title: 'Azure Integration' },
      { id: 'm365-integration', title: 'Microsoft 365 Integration' },
      { id: 'entra-integration', title: 'Microsoft Entra ID' },
      { id: 'eks-integration', title: 'EKS Integration' },
    ]
  },
  {
    id: 'scans',
    title: 'Security Scans',
    icon: Shield,
    subsections: [
      { id: 'cloudops-scans', title: 'CloudOps Scans' },
      { id: 'cloud-security-scans', title: 'Cloud Security Assessments' },
      { id: 'cyber-security-scans', title: 'Cyber Security Evaluations' },
      { id: 'workload-security-scans', title: 'Workload Security' },
    ]
  },
  {
    id: 'finops',
    title: 'Cloud FinOps',
    icon: DollarSign,
    subsections: [
      { id: 'cost-management', title: 'Cost Management' },
    ]
  },
  {
    id: 'kubernetes',
    title: 'Kubernetes Automation',
    icon: Layers,
    subsections: [
      { id: 'eks-deployment', title: 'EKS Deployment Guide' },
    ]
  },
];

const XOPS360Documentation = () => {
  const [activeSection, setActiveSection] = useState('introduction');
  const [expandedSections, setExpandedSections] = useState<string[]>(['introduction']);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <Link 
            to="/xops360" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to XOPS360
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20">
                <Book className="w-8 h-8 text-primary" />
              </div>
              <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                Version: Flamingo
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                XOPS360 Documentation
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Complete guide to the all-in-one cloud operations and security platform. 
              Master Cloud FinOps, CloudOps, Cyber Security, and AI-driven insights.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="flex gap-8">
            {/* Sidebar Navigation */}
            <aside className="hidden lg:block w-72 shrink-0">
              <div className="sticky top-24">
                <ScrollArea className="h-[calc(100vh-8rem)] pr-4">
                  <nav className="space-y-2">
                    {sections.map((section) => (
                      <div key={section.id} className="space-y-1">
                        <button
                          onClick={() => {
                            toggleSection(section.id);
                            scrollToSection(section.id);
                          }}
                          className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                            activeSection === section.id || expandedSections.includes(section.id)
                              ? 'bg-primary/10 text-primary'
                              : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                          }`}
                        >
                          <span className="flex items-center gap-2">
                            <section.icon className="w-4 h-4" />
                            {section.title}
                          </span>
                          {expandedSections.includes(section.id) ? (
                            <ChevronDown className="w-4 h-4" />
                          ) : (
                            <ChevronRight className="w-4 h-4" />
                          )}
                        </button>
                        
                        {expandedSections.includes(section.id) && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="ml-6 space-y-1"
                          >
                            {section.subsections.map((sub) => (
                              <button
                                key={sub.id}
                                onClick={() => scrollToSection(sub.id)}
                                className={`w-full text-left px-3 py-1.5 rounded-md text-sm transition-colors ${
                                  activeSection === sub.id
                                    ? 'text-primary font-medium'
                                    : 'text-muted-foreground hover:text-foreground'
                                }`}
                              >
                                {sub.title}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </div>
                    ))}
                  </nav>
                </ScrollArea>
              </div>
            </aside>

            {/* Content Area */}
            <main className="flex-1 max-w-4xl">
              <div className="prose prose-neutral dark:prose-invert max-w-none">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-24 mb-16">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-xl bg-primary/10">
                      <Book className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold m-0">Introduction</h2>
                  </div>
                  
                  <div id="overview" className="scroll-mt-24 mb-12">
                    <h3 className="text-2xl font-semibold mb-4">Overview</h3>
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-muted/50 to-muted/30 border border-border/50">
                      <p className="text-muted-foreground leading-relaxed m-0">
                        Xops 360 Platform is an all-in-one cloud operations and security solution designed to optimize cloud environments, enhance security, and improve financial efficiency. It provides a unified platform for managing <strong className="text-foreground">AWS, Azure, and Microsoft ecosystems</strong>, offering capabilities across Cloud FinOps, CloudOps, Cyber Security, Cloud Security, Workload Security, EKS Automation, and AI-driven insights. By integrating automation, AI assistance, compliance, and real-time insights, Xops 360 ensures streamlined governance, cost optimization, and proactive security management.
                      </p>
                    </div>
                  </div>

                  <div id="key-features" className="scroll-mt-24 mb-12">
                    <h3 className="text-2xl font-semibold mb-6">Key Features</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        { icon: DollarSign, title: 'Cloud FinOps', desc: 'Advanced cost tracking and optimization tools for AWS and Azure.' },
                        { icon: Cloud, title: 'CloudOps', desc: 'Intelligent automation and resource management for cloud environments.' },
                        { icon: Shield, title: 'Cyber Security', desc: 'In-depth security assessments, OSINT analysis, and network security tools.' },
                        { icon: Lock, title: 'Cloud Security', desc: 'Compliance and security frameworks to align with industry standards.' },
                        { icon: Server, title: 'Workload Security', desc: 'Secure cloud workloads across AWS and Azure with robust security controls.' },
                        { icon: Layers, title: 'EKS Automation', desc: 'Seamless Kubernetes cluster deployment in AWS.' },
                        { icon: Cpu, title: 'AI Assistant', desc: 'Interactive AI-powered assistant for generating Cloud FinOps and Cybersecurity reports.' },
                      ].map((feature, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.05 }}
                          className="p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
                        >
                          <div className="flex items-start gap-3">
                            <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                              <feature.icon className="w-4 h-4 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-foreground m-0 mb-1">{feature.title}</h4>
                              <p className="text-sm text-muted-foreground m-0">{feature.desc}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div id="current-version" className="scroll-mt-24">
                    <h3 className="text-2xl font-semibold mb-4">Current Version: Flamingo</h3>
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20">
                      <h4 className="text-lg font-semibold text-primary mb-4">What's New?</h4>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                          <div>
                            <p className="font-medium text-foreground m-0">AI Assistant</p>
                            <p className="text-sm text-muted-foreground m-0">Access an intelligent assistant to generate detailed Cloud FinOps and Cybersecurity reports, empowering teams with instant insights.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                          <div>
                            <p className="font-medium text-foreground m-0">AWS Cost Map</p>
                            <p className="text-sm text-muted-foreground m-0">Visualize and analyze AWS spending patterns through interactive cost maps for deeper financial visibility.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <Separator className="my-12" />

                {/* Features */}
                <section id="features" className="scroll-mt-24 mb-16">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-xl bg-primary/10">
                      <Zap className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold m-0">Feature Overview</h2>
                  </div>
                  
                  <p className="text-muted-foreground mb-8">
                    Cloud cost management, Cloud Ops, Cybersecurity and security scans across AWS, Azure, and Microsoft 365.
                  </p>

                  <div id="cloud-finops" className="scroll-mt-24 mb-10">
                    <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                      <DollarSign className="w-6 h-6 text-primary" />
                      Cloud FinOps
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Managing financial operations within cloud environments, enabling cost optimization and resource allocation.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-1" />
                        <span><strong>AWS & Azure Cost Analyzers</strong> – Gain detailed insights, trends, and optimization opportunities for efficient cloud spending.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-1" />
                        <span><strong>AWS RI Saving</strong> – Estimate potential cost reductions by committing to Reserved Instances across AWS services.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-1" />
                        <span><strong>AWS Costmap</strong> – Visualize and analyze daily AWS service costs and usage trends for better spend optimization.</span>
                      </li>
                    </ul>
                  </div>

                  <div id="cloudops" className="scroll-mt-24 mb-10">
                    <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                      <Cloud className="w-6 h-6 text-primary" />
                      CloudOps
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Efficient management and monitoring of cloud infrastructure.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-1" />
                        <span><strong>Unutilized AWS Resources</strong> – Detects underutilized AWS resources to optimize costs.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-1" />
                        <span><strong>AWS Resource Optimizer</strong> – Identify and right-size underutilized resources across EC2, EBS, RDS, ECS, and Lambda.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-1" />
                        <span><strong>AWS Assets</strong> – Comprehensive inventory of ~30 AWS services within the cloud management tool.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-1" />
                        <span><strong>Azure Assets</strong> – Detailed tracking of ~27 Azure services for streamlined operations.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-1" />
                        <span><strong>Cloud Ops Automation</strong> – Automates provisioning and management of AWS & Azure resources using Terraform.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-1" />
                        <span><strong>EKS Automation</strong> – Seamless Kubernetes cluster deployment in AWS.</span>
                      </li>
                    </ul>
                  </div>

                  <div id="cyber-security" className="scroll-mt-24 mb-10">
                    <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                      <Shield className="w-6 h-6 text-primary" />
                      Cyber Security
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Identify and mitigate risks associated with cyber threats across integrated systems.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-1" />
                        <span><strong>OSINT Analysis</strong> – Monitors public data for leaks and vulnerabilities to mitigate risks.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-1" />
                        <span><strong>DAST (Basic & Advanced)</strong> – Detects and prioritizes web application vulnerabilities.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-1" />
                        <span><strong>Web Directory Enumeration</strong> – Identifies exposed web paths to reduce unauthorized access risks.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-1" />
                        <span><strong>Network Security Vulnerability Assessment</strong> – Pinpoints critical network weaknesses with remediation insights.</span>
                      </li>
                    </ul>
                  </div>

                  <div id="cloud-security" className="scroll-mt-24 mb-10">
                    <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                      <Lock className="w-6 h-6 text-primary" />
                      Cloud Security
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Identify vulnerabilities and ensure compliance within cloud environments.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        'AWS CIS v5.0 – Ensures adherence to industry security best practices.',
                        'AWS PCI DSS v3.2.1 – Maintains a secure environment for cardholder data.',
                        'AWS GDPR – Strengthens compliance with data protection regulations.',
                        'AWS SOC2 – Provides assurance of security controls.',
                        'Azure ISO 27001 – Addresses information security management requirements.',
                        'Azure SOC2 – Enables security auditing and monitoring.',
                        'Azure CIS v2.1.0 – Implements best practices for secure configurations.',
                        'Microsoft 365 Security – Ensures compliance and secure collaboration.',
                        'Entra ID Security – Enhances identity security and compliance.',
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-2 p-3 rounded-lg bg-muted/50">
                          <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div id="workload-security" className="scroll-mt-24 mb-10">
                    <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                      <Server className="w-6 h-6 text-primary" />
                      Workload Security
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Secure workloads deployed across various cloud platforms.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-1" />
                        <span><strong>AWS AMI</strong> – Identifies vulnerabilities in AMIs to improve security.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-1" />
                        <span><strong>AWS ECR</strong> – Detects vulnerabilities in ECR container images.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-1" />
                        <span><strong>Azure ACR</strong> – Ensures secure containerized applications in Azure Container Registry.</span>
                      </li>
                    </ul>
                  </div>

                  <div id="ai-assistant" className="scroll-mt-24">
                    <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                      <Cpu className="w-6 h-6 text-primary" />
                      AI Assistant
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Get real-time insights, recommendations, and summarized reports across AWS services using AI-powered guidance.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
                        <h4 className="font-semibold mb-2">AI for FinOps</h4>
                        <p className="text-sm text-muted-foreground m-0">The AI Assistant will automatically begin generating the FinOps report for the management account integrated with the X-Ops application.</p>
                      </div>
                      <div className="p-4 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
                        <h4 className="font-semibold mb-2">AI for Cybersecurity</h4>
                        <p className="text-sm text-muted-foreground m-0">The AI Assistant will begin generating the Cyber Security report based on the provided details.</p>
                      </div>
                    </div>
                  </div>
                </section>

                <Separator className="my-12" />

                {/* Initial Setup */}
                <section id="setup" className="scroll-mt-24 mb-16">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-xl bg-primary/10">
                      <Settings className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold m-0">Initial Setup</h2>
                  </div>

                  <div id="account-registration" className="scroll-mt-24 mb-10">
                    <h3 className="text-2xl font-semibold mb-4">Account Registration</h3>
                    <p className="text-muted-foreground mb-4">
                      Customers interested in using the Xops 360 Platform can request a new account by following these steps:
                    </p>
                    <ol className="space-y-4">
                      <li className="flex items-start gap-3">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-bold shrink-0">1</span>
                        <span>Visit our website: <a href="https://xops360.ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Xops 360 Platform Free Trial Registration</a></span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-bold shrink-0">2</span>
                        <span>Click on <strong>Sign Up</strong> to get an account request form.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-bold shrink-0">3</span>
                        <span>Complete the account request form with the required details.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-bold shrink-0">4</span>
                        <span>Submit the form. Users will receive an email containing information to set up their password and complete the account setup process.</span>
                      </li>
                    </ol>
                    
                    <div className="mt-6 p-4 rounded-xl bg-muted/50 border border-border/50">
                      <p className="text-sm text-muted-foreground m-0">
                        <strong>Alternative:</strong> You can request an account by contacting us directly at{' '}
                        <a href="mailto:sales@axiomio.com" className="text-primary hover:underline">sales@axiomio.com</a>.
                        For assistance, call us at <strong>+1 510-254-3342</strong>.
                      </p>
                    </div>
                  </div>

                  <div id="subscription-plans" className="scroll-mt-24">
                    <h3 className="text-2xl font-semibold mb-6">Subscription Plans</h3>
                    <p className="text-muted-foreground mb-6">
                      Xops 360 Platform offers flexible subscription plans tailored to meet various security and operational needs.
                    </p>

                    <div className="grid gap-6">
                      {/* Trial */}
                      <div className="p-6 rounded-2xl border border-border/50 bg-card">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="px-3 py-1 rounded-full bg-muted text-sm font-medium">Trial</div>
                          <span className="text-muted-foreground text-sm">1 scan per category</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">Complimentary plan with limited access to core features for evaluation.</p>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="font-semibold mb-2">Cloud FinOps:</p>
                            <ul className="space-y-1 text-muted-foreground">
                              <li>• AWS Cost Analyzer</li>
                              <li>• Azure Cost Analyzer</li>
                              <li>• AWS RI Saving</li>
                              <li>• AWS Costmap</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold mb-2">Cloud Security:</p>
                            <ul className="space-y-1 text-muted-foreground">
                              <li>• AWS CIS Scan</li>
                              <li>• Azure CIS Scan</li>
                            </ul>
                            <p className="font-semibold mt-3 mb-2">Cyber Security:</p>
                            <ul className="space-y-1 text-muted-foreground">
                              <li>• OSINT Analysis</li>
                              <li>• Network vulnerability Discovery</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Basic */}
                      <div className="p-6 rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/5 to-transparent">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">Basic</div>
                          <span className="text-muted-foreground text-sm">3 scans per category</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">Foundational tier offering essential functionalities and baseline capabilities.</p>
                        <div className="grid md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <p className="font-semibold mb-2">Cloud Operations:</p>
                            <ul className="space-y-1 text-muted-foreground">
                              <li>• AWS Unutilized Resources</li>
                              <li>• AWS Assets</li>
                              <li>• Azure Assets</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold mb-2">Cyber Security:</p>
                            <ul className="space-y-1 text-muted-foreground">
                              <li>• DAST Basic</li>
                              <li>• Web Directory Enumeration</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold mb-2">Cloud Security:</p>
                            <ul className="space-y-1 text-muted-foreground">
                              <li>• AWS PCI DSS Compliance</li>
                              <li>• Azure ISO 27001</li>
                              <li>• Microsoft 365 Security</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Advanced */}
                      <div className="p-6 rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/5 to-primary/5">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="px-3 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-white text-sm font-medium">Advanced</div>
                          <span className="text-muted-foreground text-sm">5 scans per category</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">Premium tier offering enhanced capabilities and support for larger-scale operations.</p>
                        <div className="grid md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <p className="font-semibold mb-2">Cloud Operations:</p>
                            <ul className="space-y-1 text-muted-foreground">
                              <li>• AWS Resource Optimizer</li>
                              <li>• AWS Automation</li>
                              <li>• Azure Automation</li>
                            </ul>
                            <p className="font-semibold mt-3 mb-2">Kubernetes:</p>
                            <ul className="space-y-1 text-muted-foreground">
                              <li>• EKS Automation</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold mb-2">Cyber Security:</p>
                            <ul className="space-y-1 text-muted-foreground">
                              <li>• DAST Advanced</li>
                            </ul>
                            <p className="font-semibold mt-3 mb-2">Workload Security:</p>
                            <ul className="space-y-1 text-muted-foreground">
                              <li>• AWS AMI Security</li>
                              <li>• AWS ECR Security</li>
                              <li>• Azure ACR Security</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold mb-2">Cloud Security:</p>
                            <ul className="space-y-1 text-muted-foreground">
                              <li>• AWS GDPR Compliance</li>
                              <li>• AWS SOC2</li>
                              <li>• Azure SOC2</li>
                              <li>• Microsoft Entra ID</li>
                            </ul>
                            <p className="font-semibold mt-3 mb-2">AI Assistant:</p>
                            <ul className="space-y-1 text-muted-foreground">
                              <li>• AI FinOps</li>
                              <li>• AI Cyber Security</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Custom */}
                      <div className="p-6 rounded-2xl border border-border/50 bg-muted/30">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="px-3 py-1 rounded-full bg-foreground text-background text-sm font-medium">Custom Plan</div>
                        </div>
                        <p className="text-muted-foreground m-0">
                          For organizations with unique security and operational requirements, we offer a Custom Plan tailored to specific needs.
                          Contact us at <a href="mailto:sales@axiomio.com" className="text-primary hover:underline">sales@axiomio.com</a> to discuss.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <Separator className="my-12" />

                {/* Account Management */}
                <section id="account-management" className="scroll-mt-24 mb-16">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-xl bg-primary/10">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold m-0">Account & Subscription Management</h2>
                  </div>

                  <div id="updating-credentials" className="scroll-mt-24 mb-10">
                    <h3 className="text-2xl font-semibold mb-4">Updating User Credentials</h3>
                    <p className="text-muted-foreground mb-4">
                      Maintaining account security requires regularly updating user credentials.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="p-4 rounded-xl bg-card border border-border/50">
                        <h4 className="font-semibold mb-3">Change Password</h4>
                        <ol className="space-y-2 text-sm text-muted-foreground">
                          <li>1. Log in to the Platform and access your account.</li>
                          <li>2. Locate the Profile icon in the top-right corner.</li>
                          <li>3. Select "Change Password" from the profile settings.</li>
                          <li>4. Enter your current password for verification.</li>
                          <li>5. Provide and confirm your new password.</li>
                          <li>6. Click "Submit" to confirm the change.</li>
                        </ol>
                      </div>

                      <div className="p-4 rounded-xl bg-card border border-border/50">
                        <h4 className="font-semibold mb-3">Forgot Password</h4>
                        <ol className="space-y-2 text-sm text-muted-foreground">
                          <li>1. Navigate to the login page and click "Forgot password?"</li>
                          <li>2. Enter your registered Email Address.</li>
                          <li>3. Click "Send" to receive a password reset link.</li>
                          <li>4. Check your email inbox (or spam folder).</li>
                          <li>5. Click the reset link and set a new password.</li>
                        </ol>
                      </div>

                      <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30">
                        <div className="flex items-start gap-2">
                          <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0" />
                          <div>
                            <h4 className="font-semibold text-amber-500 mb-1">Password Guidelines</h4>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              <li>• Use at least 8 characters (including alphanumeric and special symbols)</li>
                              <li>• Avoid common words, sequential numbers, or personal details</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="managing-subscriptions" className="scroll-mt-24">
                    <h3 className="text-2xl font-semibold mb-4">Managing Subscriptions</h3>
                    <ol className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-bold shrink-0">1</span>
                        <span>Log in to the Platform with your credentials.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-bold shrink-0">2</span>
                        <span>Locate the Profile icon in the top-right corner and hover to open the dropdown menu.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-bold shrink-0">3</span>
                        <span>Select <strong>Subscription</strong> from the options.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-bold shrink-0">4</span>
                        <span>View and manage your subscription details on the Subscription page.</span>
                      </li>
                    </ol>
                    
                    <div className="mt-6 p-4 rounded-xl bg-muted/50 border border-border/50">
                      <p className="text-sm text-muted-foreground m-0">
                        <strong>Note:</strong> Currently, only subscription upgrades are supported. To upgrade, click "Upgrade" and submit a request form with your Subject and Description. Our team will process your upgrade request.
                      </p>
                    </div>
                  </div>
                </section>

                <Separator className="my-12" />

                {/* Integrations */}
                <section id="integrations" className="scroll-mt-24 mb-16">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-xl bg-primary/10">
                      <GitBranch className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold m-0">Account Integration Procedures</h2>
                  </div>

                  <div id="aws-integration" className="scroll-mt-24 mb-10">
                    <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                      <Cloud className="w-6 h-6 text-orange-500" />
                      AWS Account Integration
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="p-5 rounded-xl bg-card border border-border/50">
                        <h4 className="font-semibold mb-3">Navigating to Integrations</h4>
                        <ol className="space-y-2 text-sm text-muted-foreground">
                          <li>1. Log in to the Platform with your credentials.</li>
                          <li>2. Locate the side navigation panel on the left.</li>
                          <li>3. Click on the <strong>Integrations</strong> tab.</li>
                          <li>4. Click on the <strong>AWS</strong> card to open "Link a New AWS Account" page.</li>
                        </ol>
                        <p className="text-sm text-muted-foreground mt-3 italic">
                          Note: Initially, only AWS Management Account can be linked in this section.
                        </p>
                      </div>

                      <div className="p-5 rounded-xl bg-card border border-border/50">
                        <h4 className="font-semibold mb-3">Initiating Account Integration</h4>
                        <ol className="space-y-2 text-sm text-muted-foreground">
                          <li>1. Click the Information ("i") button to view step-by-step setup guidance.</li>
                          <li>2. Follow the setup guide to create a required CloudFormation stack in the AWS Management Console.</li>
                          <li>3. Once created, navigate to the <strong>Outputs</strong> tab in the stack details page.</li>
                          <li>4. Copy the <strong>AWS Role ARN</strong> from the output.</li>
                          <li>5. Return to the platform's AWS Integration page.</li>
                          <li>6. Provide a suitable name in the AWS Account Name field.</li>
                          <li>7. Paste the copied AWS Role ARN into the designated field.</li>
                          <li>8. Click <strong>Connect</strong> to finalize the integration.</li>
                        </ol>
                      </div>

                      <div className="p-5 rounded-xl bg-card border border-border/50">
                        <h4 className="font-semibold mb-3">Adding a Linked AWS Account</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          If you already have a management account linked and want to add a linked (child) AWS account:
                        </p>
                        <ol className="space-y-2 text-sm text-muted-foreground">
                          <li>1. Navigate to AWS Integration in the Integrations tab.</li>
                          <li>2. Click on "Add Linked Account".</li>
                          <li>3. Enter the required information in the pop-up window.</li>
                          <li>4. Click <strong>Connect</strong> to link the AWS account.</li>
                        </ol>
                      </div>

                      <div className="p-5 rounded-xl bg-card border border-border/50">
                        <h4 className="font-semibold mb-3">AWS Account Management</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="font-medium text-sm mb-2">Update Account Name:</p>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              <li>• Click Edit next to the account name</li>
                              <li>• Enter the new name</li>
                              <li>• Click Proceed to confirm</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-medium text-sm mb-2">Delete Linked Account:</p>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              <li>• Click Delete next to the account</li>
                              <li>• Enter the account name to confirm</li>
                              <li>• Click Delete Account</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="azure-integration" className="scroll-mt-24 mb-10">
                    <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                      <Cloud className="w-6 h-6 text-blue-500" />
                      Azure Account Integration
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="p-5 rounded-xl bg-card border border-border/50">
                        <h4 className="font-semibold mb-3">Registering an Application in Azure</h4>
                        <ol className="space-y-2 text-sm text-muted-foreground">
                          <li>1. Navigate to the Azure Portal.</li>
                          <li>2. Search for <strong>App Registrations</strong> and select it.</li>
                          <li>3. Click on <strong>New Registration</strong>.</li>
                          <li>4. Provide a name for the application.</li>
                          <li>5. Under Supported account types, select "Accounts in this organizational directory only".</li>
                          <li>6. Click <strong>Register</strong> to complete the process.</li>
                        </ol>
                      </div>

                      <div className="p-5 rounded-xl bg-card border border-border/50">
                        <h4 className="font-semibold mb-3">Assigning Permissions</h4>
                        <div className="space-y-4">
                          <div>
                            <p className="font-medium text-sm mb-2">Entra ID Permissions:</p>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              <li>• Search for Entra ID in Azure Portal</li>
                              <li>• Navigate to Properties and toggle "Access management for Azure resources" to Yes</li>
                              <li>• Go to Roles and Administrators</li>
                              <li>• Search for and assign Global Reader role to your application</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-medium text-sm mb-2">Management Group Permissions:</p>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              <li>• Navigate to Management Groups</li>
                              <li>• Select your Subscription under Tenant Group</li>
                              <li>• Go to Access Control (IAM) → Add Role Assignment</li>
                              <li>• Assign Reader role to your application</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="p-5 rounded-xl bg-card border border-border/50">
                        <h4 className="font-semibold mb-3">Adding Certificate for Authentication</h4>
                        <ol className="space-y-2 text-sm text-muted-foreground">
                          <li>1. Copy the Application (Client) ID and Directory (Tenant) ID from your Azure app.</li>
                          <li>2. In Xops 360 Portal, navigate to Integrations → Azure → Add Account.</li>
                          <li>3. Enter a friendly name and provide the App ID and Tenant ID.</li>
                          <li>4. Click <strong>Generate Public Key</strong> & download the generated key.</li>
                          <li>5. Return to Azure Portal → your application → Certificates & Secrets.</li>
                          <li>6. Upload the downloaded certificate file.</li>
                        </ol>
                      </div>
                    </div>
                  </div>

                  <div id="m365-integration" className="scroll-mt-24 mb-10">
                    <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                      <Globe className="w-6 h-6 text-blue-600" />
                      Microsoft 365 Account Integration
                    </h3>
                    
                    <div className="p-5 rounded-xl bg-card border border-border/50">
                      <h4 className="font-semibold mb-3">Integration Steps</h4>
                      <ol className="space-y-2 text-sm text-muted-foreground">
                        <li>1. Navigate to Microsoft Entra Admin Center Portal.</li>
                        <li>2. Register a new application via App Registrations.</li>
                        <li>3. Under API Permissions, add <strong>Office 365 Exchange Online</strong> with <strong>Exchange.ManageAsApp</strong> permission.</li>
                        <li>4. Grant admin consent for the permissions.</li>
                        <li>5. Assign Global Reader role via Entra ID.</li>
                        <li>6. In Xops 360, navigate to Integrations → Microsoft → M365.</li>
                        <li>7. Provide App ID, Tenant ID, and Organization ID.</li>
                        <li>8. Generate and download the public key, then upload to Azure.</li>
                      </ol>
                      <div className="mt-4 p-3 rounded-lg bg-amber-500/10 border border-amber-500/30">
                        <p className="text-sm text-amber-600 dark:text-amber-400 m-0">
                          <strong>Note:</strong> The M365 scan requires all users/accounts to have the O365_BUSINESS_PREMIUM license.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div id="entra-integration" className="scroll-mt-24 mb-10">
                    <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                      <Key className="w-6 h-6 text-purple-500" />
                      Microsoft Entra ID Integration
                    </h3>
                    
                    <div className="p-5 rounded-xl bg-card border border-border/50">
                      <h4 className="font-semibold mb-3">Integration Steps</h4>
                      <ol className="space-y-2 text-sm text-muted-foreground">
                        <li>1. Register an application in Microsoft Entra Admin Center.</li>
                        <li>2. Under API Permissions, add Microsoft Graph with <strong>AccessReview.Read.All</strong> permission.</li>
                        <li>3. Grant admin consent for the permissions.</li>
                        <li>4. Assign Global Reader role to the application.</li>
                        <li>5. Copy App ID, Tenant ID, and Organization ID.</li>
                        <li>6. In Xops 360, navigate to Integrations → Microsoft and add the account.</li>
                        <li>7. Generate public key and upload to your Azure application.</li>
                      </ol>
                    </div>
                  </div>

                  <div id="eks-integration" className="scroll-mt-24">
                    <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                      <Layers className="w-6 h-6 text-orange-500" />
                      EKS Integration
                    </h3>
                    
                    <div className="p-5 rounded-xl bg-card border border-border/50">
                      <h4 className="font-semibold mb-3">Link EKS Account</h4>
                      <ol className="space-y-2 text-sm text-muted-foreground">
                        <li>1. Navigate to Integrations and click on the <strong>EKS</strong> card.</li>
                        <li>2. Click the Information button for setup guidance.</li>
                        <li>3. Create the required CloudFormation stack in AWS Console.</li>
                        <li>4. Copy the AWS Role ARN from the Outputs tab.</li>
                        <li>5. Provide a name and paste the Role ARN in Xops 360.</li>
                        <li>6. Click <strong>Connect</strong> to finalize.</li>
                      </ol>
                    </div>
                  </div>
                </section>

                <Separator className="my-12" />

                {/* Security Scans */}
                <section id="scans" className="scroll-mt-24 mb-16">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-xl bg-primary/10">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold m-0">Performing Security & Operational Scans</h2>
                  </div>

                  <div id="cloudops-scans" className="scroll-mt-24 mb-10">
                    <h3 className="text-2xl font-semibold mb-4">CloudOps Scans</h3>
                    
                    <div className="space-y-4">
                      <div className="p-5 rounded-xl bg-card border border-border/50">
                        <h4 className="font-semibold mb-3">Executing Scans in Cloud Operations</h4>
                        <ol className="space-y-2 text-sm text-muted-foreground">
                          <li>1. Navigate to the <strong>CloudOps</strong> tab in the side navigation.</li>
                          <li>2. Verify an AWS account is added (or click "+ Add Account").</li>
                          <li>3. Choose a scan type: <strong>AWS Unutilized Resources</strong> or <strong>AWS Resource Optimizer</strong>.</li>
                          <li>4. Select the desired AWS account and click <strong>Analyze</strong>.</li>
                          <li>5. Monitor progress and review the generated report.</li>
                        </ol>
                        <div className="mt-4 p-3 rounded-lg bg-blue-500/10 border border-blue-500/30">
                          <p className="text-sm text-blue-600 dark:text-blue-400 m-0">
                            <strong>Tip:</strong> For Resource Optimizer recommendations, ensure AWS Compute Optimizer service is enabled in your linked AWS account.
                          </p>
                        </div>
                      </div>

                      <div className="p-5 rounded-xl bg-card border border-border/50">
                        <h4 className="font-semibold mb-3">Running Assets Scan (AWS/Azure)</h4>
                        <ol className="space-y-2 text-sm text-muted-foreground">
                          <li>1. Navigate to <strong>AWS Assets</strong> or <strong>Azure Assets</strong>.</li>
                          <li>2. Verify your account is connected.</li>
                          <li>3. Click <strong>Fetch Results</strong> to initiate the scan.</li>
                          <li>4. Review results on the Assets Dashboard.</li>
                        </ol>
                      </div>
                    </div>
                  </div>

                  <div id="cloud-security-scans" className="scroll-mt-24 mb-10">
                    <h3 className="text-2xl font-semibold mb-4">Cloud Security Assessments</h3>
                    
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="p-5 rounded-xl bg-card border border-border/50">
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Cloud className="w-5 h-5 text-orange-500" />
                          AWS Security
                        </h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• CIS (Center for Internet Security)</li>
                          <li>• PCI DSS v3.2.1</li>
                          <li>• GDPR</li>
                          <li>• SOC2</li>
                        </ul>
                      </div>
                      <div className="p-5 rounded-xl bg-card border border-border/50">
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Cloud className="w-5 h-5 text-blue-500" />
                          Azure Security
                        </h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• ISO 27001</li>
                          <li>• SOC2</li>
                          <li>• CIS</li>
                        </ul>
                      </div>
                      <div className="p-5 rounded-xl bg-card border border-border/50">
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Globe className="w-5 h-5 text-blue-600" />
                          Microsoft Security
                        </h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• M365 Compliance</li>
                          <li>• Entra ID Security</li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-4 p-5 rounded-xl bg-card border border-border/50">
                      <h4 className="font-semibold mb-3">Running a Cloud Security Scan</h4>
                      <ol className="space-y-2 text-sm text-muted-foreground">
                        <li>1. Navigate to <strong>Cloud Security</strong> and select AWS, Azure, or Microsoft Security.</li>
                        <li>2. Verify your account is connected.</li>
                        <li>3. Choose a compliance framework (CIS, PCI DSS, GDPR, etc.).</li>
                        <li>4. Click <strong>Scan</strong> to initiate the security check.</li>
                        <li>5. Review findings including compliance gaps, misconfigurations, and vulnerabilities.</li>
                      </ol>
                    </div>
                  </div>

                  <div id="cyber-security-scans" className="scroll-mt-24 mb-10">
                    <h3 className="text-2xl font-semibold mb-4">Cyber Security Evaluations</h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-5 rounded-xl bg-card border border-border/50">
                        <h4 className="font-semibold mb-3">OSINT Analysis</h4>
                        <ol className="space-y-2 text-sm text-muted-foreground">
                          <li>1. Navigate to Cyber Security → OSINT Analysis.</li>
                          <li>2. Enter the domain to scan (e.g., example.com).</li>
                          <li>3. Click <strong>Scan</strong> to start.</li>
                          <li>4. Review results for potential vulnerabilities.</li>
                        </ol>
                      </div>
                      <div className="p-5 rounded-xl bg-card border border-border/50">
                        <h4 className="font-semibold mb-3">DAST Scan</h4>
                        <ol className="space-y-2 text-sm text-muted-foreground">
                          <li>1. Navigate to Cyber Security → DAST.</li>
                          <li>2. Enter the domain to scan.</li>
                          <li>3. Choose Basic or Advanced scan.</li>
                          <li>4. Click to start scanning.</li>
                        </ol>
                      </div>
                      <div className="p-5 rounded-xl bg-card border border-border/50">
                        <h4 className="font-semibold mb-3">Web Directory Scan</h4>
                        <ol className="space-y-2 text-sm text-muted-foreground">
                          <li>1. Navigate to Cyber Security → Web Directory.</li>
                          <li>2. Enter the domain.</li>
                          <li>3. Select appropriate tech stack.</li>
                          <li>4. Click <strong>Proceed</strong> to start.</li>
                        </ol>
                      </div>
                      <div className="p-5 rounded-xl bg-card border border-border/50">
                        <h4 className="font-semibold mb-3">Network Security Scan</h4>
                        <ol className="space-y-2 text-sm text-muted-foreground">
                          <li>1. Navigate to Cyber Security → Network Security.</li>
                          <li>2. Enter domain or IP address.</li>
                          <li>3. Click <strong>Scan</strong> to begin.</li>
                          <li>4. Review vulnerabilities and threats.</li>
                        </ol>
                      </div>
                    </div>
                  </div>

                  <div id="workload-security-scans" className="scroll-mt-24">
                    <h3 className="text-2xl font-semibold mb-4">Workload Security Scans</h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-5 rounded-xl bg-card border border-border/50">
                        <h4 className="font-semibold mb-3">AWS (AMI & ECR)</h4>
                        <ol className="space-y-2 text-sm text-muted-foreground">
                          <li>1. Navigate to Workload Security.</li>
                          <li>2. Select AMI or ECR scan type.</li>
                          <li>3. Select target AWS account and click Scan.</li>
                          <li>4. Choose Region and provide Image URI.</li>
                          <li>5. Click <strong>Proceed</strong> to start.</li>
                        </ol>
                      </div>
                      <div className="p-5 rounded-xl bg-card border border-border/50">
                        <h4 className="font-semibold mb-3">Azure (ACR)</h4>
                        <ol className="space-y-2 text-sm text-muted-foreground">
                          <li>1. Navigate to Workload Security → ACR.</li>
                          <li>2. Select target Azure account.</li>
                          <li>3. Choose Region, Registry, Repository.</li>
                          <li>4. Provide Image URI.</li>
                          <li>5. Click <strong>Proceed</strong> to start.</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </section>

                <Separator className="my-12" />

                {/* FinOps */}
                <section id="finops" className="scroll-mt-24 mb-16">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-xl bg-primary/10">
                      <DollarSign className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold m-0">Cloud FinOps</h2>
                  </div>

                  <div id="cost-management" className="scroll-mt-24">
                    <h3 className="text-2xl font-semibold mb-4">Cost Management</h3>
                    <p className="text-muted-foreground mb-6">
                      Cloud FinOps centralizes financial operations for cloud environments, helping teams optimize costs, track usage, and allocate resources efficiently across AWS and Azure.
                    </p>

                    <div className="space-y-6">
                      <div className="p-5 rounded-xl bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/20">
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Eye className="w-5 h-5 text-orange-500" />
                          AWS Cost Analyzer
                        </h4>
                        <ul className="text-sm text-muted-foreground space-y-2">
                          <li>• Deep cost visibility across AWS services like EC2, S3, EKS, VPC, and more.</li>
                          <li>• Tracks daily, monthly, and service-level spending trends.</li>
                          <li>• Detects unexpected spikes or anomalies for proactive cost management.</li>
                          <li>• Supports granular filters (by service, time, or account) for accurate insights.</li>
                        </ul>
                        <p className="text-sm text-green-600 dark:text-green-400 mt-3 italic">
                          ✨ Better than standard tools: Fine-grained service insights and daily tracking for faster anomaly detection.
                        </p>
                      </div>

                      <div className="p-5 rounded-xl bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20">
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Target className="w-5 h-5 text-green-500" />
                          AWS RI Saving
                        </h4>
                        <ul className="text-sm text-muted-foreground space-y-2">
                          <li>• Identifies workloads suited for Reserved Instances (RIs) to reduce costs.</li>
                          <li>• Estimates potential savings vs. on-demand pricing.</li>
                          <li>• Recommends commitment plans based on past usage trends.</li>
                          <li>• Helps align budgets with real workload patterns.</li>
                        </ul>
                        <p className="text-sm text-green-600 dark:text-green-400 mt-3 italic">
                          ✨ Better than standard tools: Actionable recommendations with clear savings estimates.
                        </p>
                      </div>

                      <div className="p-5 rounded-xl bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20">
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Eye className="w-5 h-5 text-blue-500" />
                          Azure Cost Analyzer
                        </h4>
                        <ul className="text-sm text-muted-foreground space-y-2">
                          <li>• End-to-end visibility of Azure spending.</li>
                          <li>• Monthly Spend History for cost trend visualization.</li>
                          <li>• Spend by Location for regional usage insights.</li>
                          <li>• Spend by Service highlighting top cost drivers.</li>
                          <li>• Spend by Subscription to compare environments.</li>
                        </ul>
                        <p className="text-sm text-green-600 dark:text-green-400 mt-3 italic">
                          ✨ Better than Azure default: Unified dashboard with cross-comparison across subscriptions.
                        </p>
                      </div>

                      <div className="p-5 rounded-xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20">
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Database className="w-5 h-5 text-purple-500" />
                          AWS Costmap
                        </h4>
                        <ul className="text-sm text-muted-foreground space-y-2">
                          <li>• Visualizes daily AWS costs and usage trends.</li>
                          <li>• Breaks down spend per service (EC2, EKS, VPC, etc.).</li>
                          <li>• Provides time-based cost tracking for quick anomaly detection.</li>
                          <li>• Allows CSV export for advanced analysis and reporting.</li>
                        </ul>
                        <p className="text-sm text-green-600 dark:text-green-400 mt-3 italic">
                          ✨ Better than standard tools: Shows daily patterns to catch spikes early.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <Separator className="my-12" />

                {/* Kubernetes */}
                <section id="kubernetes" className="scroll-mt-24 mb-16">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-xl bg-primary/10">
                      <Layers className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold m-0">Kubernetes Automation</h2>
                  </div>

                  <p className="text-muted-foreground mb-6">
                    Kubernetes Automation enables seamless creation and management of Kubernetes clusters. It provides step-by-step guidance on deploying clusters with configurable networking, node groups, and authentication settings.
                  </p>

                  <div id="eks-deployment" className="scroll-mt-24">
                    <h3 className="text-2xl font-semibold mb-4">EKS Deployment Guide</h3>
                    
                    <div className="p-5 rounded-xl bg-amber-500/10 border border-amber-500/30 mb-6">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-amber-500 mb-2">Prerequisites</h4>
                          <p className="text-sm text-muted-foreground m-0">
                            Before deploying EKS, ensure that the AWS role created via the Xops 360 portal has the necessary permissions. If no policies are found, please add an AWS account for EKS deployment.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-5 rounded-xl bg-card border border-border/50">
                      <h4 className="font-semibold mb-3">Required IAM Permissions</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Your IAM role needs permissions including but not limited to:
                      </p>
                      <div className="grid md:grid-cols-3 gap-2 text-xs font-mono">
                        {[
                          'ec2:AuthorizeSecurityGroupIngress',
                          'ec2:DescribeInstances',
                          'ec2:AttachInternetGateway',
                          'iam:PutRolePolicy',
                          'iam:AddRoleToInstanceProfile',
                          'ec2:CreateRoute',
                          'ec2:CreateInternetGateway',
                          'eks:DescribeAddon',
                          'iam:DeleteRole',
                          'ec2:RunInstances',
                          'eks:UpdateNodegroupConfig',
                          'eks:ListClusters',
                        ].map((perm, i) => (
                          <div key={i} className="p-2 rounded bg-muted/50 text-muted-foreground">
                            {perm}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>

                {/* Contact Section */}
                <section className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 border border-primary/20">
                  <h3 className="text-2xl font-bold mb-4 text-center">Need Help?</h3>
                  <p className="text-center text-muted-foreground mb-6">
                    Our support team is here to assist you with any questions or challenges.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <a 
                      href="mailto:support@axiomio.com"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      support@axiomio.com
                    </a>
                    <a 
                      href="tel:+15102543342"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-muted text-foreground font-medium hover:bg-muted/80 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      +1 510-254-3342
                    </a>
                    <a 
                      href="https://xops360.ai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-muted text-foreground font-medium hover:bg-muted/80 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Visit XOPS360
                    </a>
                  </div>
                </section>

              </div>
            </main>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default XOPS360Documentation;
