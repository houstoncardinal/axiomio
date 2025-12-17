import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Server, Building2, Zap, BarChart3, Link as LinkIcon, ArrowRight, Activity, TrendingUp } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { PremiumCard } from '@/components/PremiumCard';
import { Button } from '@/components/ui/button';

const XOPS360Overview: React.FC = () => {
  const { data: stats } = useQuery({
    queryKey: ['xops360-overview-stats'],
    queryFn: async () => {
      const [clients, deployments, runbooks, integrations] = await Promise.all([
        supabase.from('xops360_clients').select('*', { count: 'exact', head: true }),
        supabase.from('xops360_deployments').select('*', { count: 'exact', head: true }),
        supabase.from('xops360_runbooks').select('*', { count: 'exact', head: true }).eq('status', 'active'),
        supabase.from('xops360_integrations').select('*', { count: 'exact', head: true }).eq('status', 'connected'),
      ]);
      return {
        clients: clients.count || 0,
        deployments: deployments.count || 0,
        runbooks: runbooks.count || 0,
        integrations: integrations.count || 0,
      };
    },
  });

  const sections = [
    {
      title: 'Clients',
      description: 'Manage XOPS360 platform clients - MSPs and Enterprises',
      icon: Building2,
      path: '/admin/xops360/clients',
      stat: stats?.clients || 0,
      color: 'from-primary/20 to-primary/5',
    },
    {
      title: 'Deployments',
      description: 'Monitor active platform deployments and health',
      icon: Server,
      path: '/admin/xops360/deployments',
      stat: stats?.deployments || 0,
      color: 'from-blue-500/20 to-blue-500/5',
    },
    {
      title: 'Runbooks',
      description: 'Create and manage automation workflows',
      icon: Zap,
      path: '/admin/xops360/runbooks',
      stat: stats?.runbooks || 0,
      color: 'from-secondary/20 to-secondary/5',
    },
    {
      title: 'Integrations',
      description: 'Connect with cloud providers, tools, and services',
      icon: LinkIcon,
      path: '/admin/xops360/integrations',
      stat: stats?.integrations || 0,
      color: 'from-emerald-500/20 to-emerald-500/5',
    },
    {
      title: 'Metrics',
      description: 'Platform-wide analytics and performance data',
      icon: BarChart3,
      path: '/admin/xops360/metrics',
      stat: null,
      color: 'from-amber-500/20 to-amber-500/5',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-3xl font-bold text-gradient mb-2">XOPS360 Platform</h1>
          <p className="text-muted-foreground">The CloudOps Automation Engine Management Console</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/10 text-emerald-400">
          <Activity className="w-4 h-4" />
          <span className="text-sm font-medium">All Systems Operational</span>
        </div>
      </div>

      {/* Platform Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <PremiumCard>
          <div className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <p className="font-heading text-4xl font-bold text-gradient">{stats?.clients || 0}</p>
                <p className="text-muted-foreground mt-1">Total Clients</p>
              </div>
              <div className="text-center">
                <p className="font-heading text-4xl font-bold text-gradient">{stats?.deployments || 0}</p>
                <p className="text-muted-foreground mt-1">Active Deployments</p>
              </div>
              <div className="text-center">
                <p className="font-heading text-4xl font-bold text-gradient">{stats?.runbooks || 0}</p>
                <p className="text-muted-foreground mt-1">Active Runbooks</p>
              </div>
              <div className="text-center">
                <p className="font-heading text-4xl font-bold text-gradient">{stats?.integrations || 0}</p>
                <p className="text-muted-foreground mt-1">Connected Integrations</p>
              </div>
            </div>
          </div>
        </PremiumCard>
      </motion.div>

      {/* Section Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link to={section.path}>
              <PremiumCard className="h-full group">
                <div className={`p-6 bg-gradient-to-br ${section.color}`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-background/50 flex items-center justify-center">
                      <section.icon className="w-6 h-6 text-foreground" />
                    </div>
                    {section.stat !== null && (
                      <span className="font-heading text-2xl font-bold text-foreground">{section.stat}</span>
                    )}
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {section.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">{section.description}</p>
                  <div className="flex items-center gap-2 text-primary text-sm font-medium">
                    Manage
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </PremiumCard>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Quick Start */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <PremiumCard>
          <div className="p-6 border-b border-border/30">
            <h2 className="font-heading text-xl font-semibold text-foreground">Quick Start Guide</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { step: 1, title: 'Add Client', description: 'Create an MSP or Enterprise client profile' },
                { step: 2, title: 'Deploy Platform', description: 'Set up XOPS360 deployment for the client' },
                { step: 3, title: 'Connect Integrations', description: 'Link cloud providers and tools' },
                { step: 4, title: 'Configure Runbooks', description: 'Create automation workflows' },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-heading font-bold text-primary">{item.step}</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </PremiumCard>
      </motion.div>
    </div>
  );
};

export default XOPS360Overview;
