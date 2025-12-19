import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shield,
  Zap,
  CheckCircle2,
  AlertTriangle,
  Lock,
  Globe2,
  Server,
  User,
  Smartphone,
  Laptop,
  Cloud,
  Eye,
  ShieldCheck,
  Activity,
  XCircle,
  Play,
  RotateCcw,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedGradientText } from '@/components/AnimatedGradientText';
import { PremiumCard } from '@/components/PremiumCard';

const deploymentSteps = [
  {
    id: 1,
    title: 'Identity Verification',
    description: 'User initiates connection request',
    icon: User,
    status: 'pending',
  },
  {
    id: 2,
    title: 'Device Posture Check',
    description: 'Analyzing device security compliance',
    icon: Laptop,
    status: 'pending',
  },
  {
    id: 3,
    title: 'Policy Evaluation',
    description: 'Checking access policies and permissions',
    icon: Lock,
    status: 'pending',
  },
  {
    id: 4,
    title: 'Threat Detection',
    description: 'AI scanning for anomalies',
    icon: Eye,
    status: 'pending',
  },
  {
    id: 5,
    title: 'Secure Connection',
    description: 'Establishing encrypted tunnel',
    icon: ShieldCheck,
    status: 'pending',
  },
];

const threatEvents = [
  { type: 'blocked', message: 'Brute force attempt blocked', source: '192.168.1.45', severity: 'high' },
  { type: 'warning', message: 'Unusual login location detected', source: 'user@company.com', severity: 'medium' },
  { type: 'blocked', message: 'Malware signature detected', source: 'endpoint-042', severity: 'critical' },
  { type: 'info', message: 'New device registered', source: 'MacBook Pro M3', severity: 'low' },
  { type: 'blocked', message: 'SQL injection attempt prevented', source: 'api.company.com', severity: 'high' },
  { type: 'warning', message: 'Certificate expiring soon', source: 'auth.company.com', severity: 'medium' },
  { type: 'blocked', message: 'Unauthorized API access denied', source: '10.0.0.234', severity: 'high' },
  { type: 'info', message: 'MFA successfully verified', source: 'admin@company.com', severity: 'low' },
];

export function XeroTrustInteractiveDemo() {
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState(deploymentSteps);
  const [threats, setThreats] = useState<typeof threatEvents>([]);
  const [stats, setStats] = useState({
    threatsBlocked: 0,
    requestsProcessed: 0,
    avgLatency: 0,
  });

  useEffect(() => {
    if (isRunning && currentStep < steps.length) {
      const timer = setTimeout(() => {
        setSteps((prev) =>
          prev.map((step, idx) =>
            idx === currentStep ? { ...step, status: 'completed' } : step
          )
        );
        setCurrentStep((prev) => prev + 1);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [isRunning, currentStep, steps.length]);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        const randomThreat = threatEvents[Math.floor(Math.random() * threatEvents.length)];
        setThreats((prev) => [
          { ...randomThreat, id: Date.now() } as any,
          ...prev.slice(0, 5),
        ]);
        setStats((prev) => ({
          threatsBlocked: prev.threatsBlocked + (randomThreat.type === 'blocked' ? 1 : 0),
          requestsProcessed: prev.requestsProcessed + Math.floor(Math.random() * 100) + 50,
          avgLatency: Math.max(5, prev.avgLatency + (Math.random() - 0.5) * 2),
        }));
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isRunning]);

  const startDemo = () => {
    setIsRunning(true);
    setCurrentStep(0);
    setSteps(deploymentSteps);
    setThreats([]);
    setStats({ threatsBlocked: 0, requestsProcessed: 0, avgLatency: 12 });
  };

  const resetDemo = () => {
    setIsRunning(false);
    setCurrentStep(0);
    setSteps(deploymentSteps);
    setThreats([]);
    setStats({ threatsBlocked: 0, requestsProcessed: 0, avgLatency: 0 });
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'text-destructive bg-destructive/10 border-destructive/30';
      case 'high':
        return 'text-orange-500 bg-orange-500/10 border-orange-500/30';
      case 'medium':
        return 'text-yellow-500 bg-yellow-500/10 border-yellow-500/30';
      default:
        return 'text-secondary bg-secondary/10 border-secondary/30';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blocked':
        return XCircle;
      case 'warning':
        return AlertTriangle;
      default:
        return CheckCircle2;
    }
  };

  return (
    <section className="py-28 lg:py-36 relative bg-muted/10">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-secondary mb-4">
            Interactive Demo
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            See XeroTrust <AnimatedGradientText>In Action</AnimatedGradientText>
          </h2>
          <p className="text-lg text-muted-foreground">
            Watch how XeroTrust deploys in real-time and protects your infrastructure from threats
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Deployment Flow */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <PremiumCard className="h-full">
              <div className="p-8">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center border border-secondary/20">
                      <Zap className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-foreground">Deployment Flow</h3>
                      <p className="text-sm text-muted-foreground">Zero Trust access request</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {!isRunning ? (
                      <Button onClick={startDemo} size="sm" variant="secondary" className="gap-2">
                        <Play className="w-4 h-4" />
                        Start Demo
                      </Button>
                    ) : (
                      <Button onClick={resetDemo} size="sm" variant="outline" className="gap-2">
                        <RotateCcw className="w-4 h-4" />
                        Reset
                      </Button>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  {steps.map((step, index) => (
                    <motion.div
                      key={step.id}
                      className={`relative flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 ${
                        step.status === 'completed'
                          ? 'bg-secondary/10 border-secondary/30'
                          : index === currentStep && isRunning
                          ? 'bg-primary/10 border-primary/30 animate-pulse'
                          : 'bg-muted/30 border-border/50'
                      }`}
                    >
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                          step.status === 'completed'
                            ? 'bg-secondary/20 text-secondary'
                            : index === currentStep && isRunning
                            ? 'bg-primary/20 text-primary'
                            : 'bg-muted text-muted-foreground'
                        }`}
                      >
                        {step.status === 'completed' ? (
                          <CheckCircle2 className="w-6 h-6" />
                        ) : (
                          <step.icon className="w-6 h-6" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{step.title}</h4>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                      {step.status === 'completed' && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="text-xs font-medium text-secondary bg-secondary/10 px-2 py-1 rounded-full"
                        >
                          ✓ Passed
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>

                {currentStep === steps.length && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 p-4 rounded-xl bg-secondary/10 border border-secondary/30 text-center"
                  >
                    <ShieldCheck className="w-8 h-8 text-secondary mx-auto mb-2" />
                    <p className="font-semibold text-secondary">Secure Connection Established</p>
                    <p className="text-sm text-muted-foreground">All checks passed in 5.2 seconds</p>
                  </motion.div>
                )}
              </div>
            </PremiumCard>
          </motion.div>

          {/* Threat Detection */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <PremiumCard className="h-full">
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center border border-destructive/20">
                    <Activity className="w-5 h-5 text-destructive" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-foreground">Live Threat Monitor</h3>
                    <p className="text-sm text-muted-foreground">Real-time security events</p>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-muted/50 text-center">
                    <p className="font-heading text-2xl font-bold text-destructive">{stats.threatsBlocked}</p>
                    <p className="text-xs text-muted-foreground">Threats Blocked</p>
                  </div>
                  <div className="p-3 rounded-xl bg-muted/50 text-center">
                    <p className="font-heading text-2xl font-bold text-secondary">{stats.requestsProcessed.toLocaleString()}</p>
                    <p className="text-xs text-muted-foreground">Requests</p>
                  </div>
                  <div className="p-3 rounded-xl bg-muted/50 text-center">
                    <p className="font-heading text-2xl font-bold text-primary">{stats.avgLatency.toFixed(1)}ms</p>
                    <p className="text-xs text-muted-foreground">Avg Latency</p>
                  </div>
                </div>

                {/* Threat Feed */}
                <div className="space-y-3 min-h-[280px]">
                  <AnimatePresence mode="popLayout">
                    {threats.length === 0 ? (
                      <div className="flex flex-col items-center justify-center h-[280px] text-muted-foreground">
                        <Shield className="w-12 h-12 mb-3 opacity-30" />
                        <p className="text-sm">Start the demo to see live threats</p>
                      </div>
                    ) : (
                      threats.map((threat: any, index) => {
                        const Icon = getTypeIcon(threat.type);
                        return (
                          <motion.div
                            key={threat.id}
                            initial={{ opacity: 0, x: 20, height: 0 }}
                            animate={{ opacity: 1, x: 0, height: 'auto' }}
                            exit={{ opacity: 0, x: -20, height: 0 }}
                            className={`flex items-center gap-3 p-3 rounded-xl border ${getSeverityColor(threat.severity)}`}
                          >
                            <Icon className="w-5 h-5 flex-shrink-0" />
                            <div className="flex-1 min-w-0">
                              <p className="font-medium text-foreground text-sm truncate">{threat.message}</p>
                              <p className="text-xs opacity-70 truncate">{threat.source}</p>
                            </div>
                            <span className="text-xs font-medium uppercase">{threat.severity}</span>
                          </motion.div>
                        );
                      })
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </PremiumCard>
          </motion.div>
        </div>

        {/* Network Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <PremiumCard>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                  <Globe2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground">Global Network Status</h3>
                  <p className="text-sm text-muted-foreground">XeroTrust edge network visualization</p>
                </div>
              </div>

              <div className="relative h-48 overflow-hidden rounded-xl bg-muted/30 border border-border/50">
                {/* Animated network nodes */}
                <svg className="w-full h-full" viewBox="0 0 800 200">
                  {/* Connection lines */}
                  {[
                    { x1: 100, y1: 100, x2: 400, y2: 100 },
                    { x1: 400, y1: 100, x2: 700, y2: 100 },
                    { x1: 400, y1: 100, x2: 250, y2: 50 },
                    { x1: 400, y1: 100, x2: 550, y2: 50 },
                    { x1: 400, y1: 100, x2: 250, y2: 150 },
                    { x1: 400, y1: 100, x2: 550, y2: 150 },
                  ].map((line, i) => (
                    <motion.line
                      key={i}
                      x1={line.x1}
                      y1={line.y1}
                      x2={line.x2}
                      y2={line.y2}
                      stroke="hsl(var(--secondary))"
                      strokeWidth="2"
                      strokeOpacity="0.3"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                    />
                  ))}

                  {/* Data flow animations */}
                  {isRunning && [0, 1, 2].map((i) => (
                    <motion.circle
                      key={i}
                      r="4"
                      fill="hsl(var(--secondary))"
                      initial={{ cx: 100, cy: 100 }}
                      animate={{
                        cx: [100, 400, 700],
                        cy: [100, 100, 100],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 1,
                        ease: 'linear',
                      }}
                    />
                  ))}

                  {/* Network nodes */}
                  {[
                    { cx: 100, cy: 100, label: 'Users', icon: User },
                    { cx: 400, cy: 100, label: 'XeroTrust', icon: Shield },
                    { cx: 700, cy: 100, label: 'Resources', icon: Cloud },
                    { cx: 250, cy: 50, label: 'Mobile', icon: Smartphone },
                    { cx: 550, cy: 50, label: 'Desktop', icon: Laptop },
                    { cx: 250, cy: 150, label: 'Apps', icon: Server },
                    { cx: 550, cy: 150, label: 'APIs', icon: Globe2 },
                  ].map((node, i) => (
                    <g key={i}>
                      <motion.circle
                        cx={node.cx}
                        cy={node.cy}
                        r={i === 1 ? 30 : 20}
                        fill="hsl(var(--muted))"
                        stroke={i === 1 ? 'hsl(var(--secondary))' : 'hsl(var(--border))'}
                        strokeWidth="2"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      />
                      <text
                        x={node.cx}
                        y={node.cy + 45}
                        textAnchor="middle"
                        className="fill-muted-foreground text-xs"
                      >
                        {node.label}
                      </text>
                    </g>
                  ))}

                  {/* Central shield icon indicator */}
                  <motion.circle
                    cx={400}
                    cy={100}
                    r={35}
                    fill="none"
                    stroke="hsl(var(--secondary))"
                    strokeWidth="2"
                    strokeDasharray="5 5"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    style={{ transformOrigin: '400px 100px' }}
                  />
                </svg>
              </div>
            </div>
          </PremiumCard>
        </motion.div>
      </div>
    </section>
  );
}
