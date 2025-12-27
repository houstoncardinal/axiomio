import React from 'react';
import { motion } from 'framer-motion';
import { Server, Plus, Activity, CheckCircle2, AlertTriangle, Clock, Settings } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { PremiumCard } from '@/components/PremiumCard';
import { Progress } from '@/components/ui/progress';

const Deployments: React.FC = () => {
  const { data: deployments, isLoading } = useQuery({
    queryKey: ['xops360-deployments'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('xops360_deployments')
        .select(`
          *,
          client:xops360_clients(company_name, client_type)
        `)
        .order('created_at', { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return <CheckCircle2 className="w-5 h-5 text-emerald-400" />;
      case 'deploying': return <Activity className="w-5 h-5 text-blue-400 animate-pulse" />;
      case 'maintenance': return <Settings className="w-5 h-5 text-amber-400" />;
      case 'pending': return <Clock className="w-5 h-5 text-muted-foreground" />;
      default: return <AlertTriangle className="w-5 h-5 text-rose-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-emerald-500/10 text-emerald-400';
      case 'deploying': return 'bg-blue-500/10 text-blue-400';
      case 'maintenance': return 'bg-amber-500/10 text-amber-400';
      case 'pending': return 'bg-muted text-muted-foreground';
      default: return 'bg-rose-500/10 text-rose-400';
    }
  };

  const getHealthColor = (score: number) => {
    if (score >= 90) return 'bg-emerald-500';
    if (score >= 70) return 'bg-amber-500';
    return 'bg-rose-500';
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-heading text-3xl font-bold text-foreground mb-2">Xops360 Deployments</h1>
          <p className="text-muted-foreground">Monitor and manage active platform deployments</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 gap-2">
          <Plus className="w-4 h-4" />
          New Deployment
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Deployments', value: deployments?.length || 0, color: 'primary' },
          { label: 'Active', value: deployments?.filter((d) => d.status === 'active').length || 0, color: 'emerald-400' },
          { label: 'Avg Health Score', value: `${Math.round((deployments?.reduce((acc, d) => acc + (d.health_score || 0), 0) || 0) / (deployments?.length || 1))}%`, color: 'blue-400' },
          { label: 'Total Integrations', value: deployments?.reduce((acc, d) => acc + (d.integrations_count || 0), 0) || 0, color: 'secondary' },
        ].map((stat) => (
          <div key={stat.label} className="glass-card rounded-xl p-4 border border-border/30">
            <p className="text-muted-foreground text-sm mb-1">{stat.label}</p>
            <p className={`font-heading text-2xl font-bold text-${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Deployments List */}
      {isLoading ? (
        <div className="flex items-center justify-center py-12">
          <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
        </div>
      ) : deployments && deployments.length > 0 ? (
        <div className="space-y-4">
          {deployments.map((deployment, index) => (
            <motion.div
              key={deployment.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <PremiumCard>
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    {/* Main info */}
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Server className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-heading font-semibold text-foreground text-lg">
                            {deployment.deployment_name}
                          </h3>
                          {getStatusIcon(deployment.status)}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {deployment.client?.company_name || 'Unassigned'} • {deployment.environment}
                        </p>
                      </div>
                    </div>

                    {/* Modules */}
                    <div className="flex flex-wrap gap-2">
                      {deployment.modules_enabled?.slice(0, 4).map((module: string) => (
                        <span key={module} className="px-2 py-1 rounded-md bg-muted/50 text-xs text-muted-foreground">
                          {module}
                        </span>
                      ))}
                      {deployment.modules_enabled && deployment.modules_enabled.length > 4 && (
                        <span className="px-2 py-1 rounded-md bg-muted/50 text-xs text-muted-foreground">
                          +{deployment.modules_enabled.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Health & Stats */}
                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <p className="text-xs text-muted-foreground mb-1">Health</p>
                        <div className="w-24">
                          <Progress value={deployment.health_score || 0} className="h-2" />
                          <p className="text-xs text-foreground mt-1">{deployment.health_score || 0}%</p>
                        </div>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-muted-foreground mb-1">Cloud Accounts</p>
                        <p className="font-heading text-xl font-bold text-foreground">
                          {deployment.cloud_accounts_connected || 0}
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-muted-foreground mb-1">Integrations</p>
                        <p className="font-heading text-xl font-bold text-foreground">
                          {deployment.integrations_count || 0}
                        </p>
                      </div>
                    </div>

                    <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(deployment.status)}`}>
                      {deployment.status}
                    </span>
                  </div>
                </div>
              </PremiumCard>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="glass-premium rounded-2xl p-12 text-center">
          <Server className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="font-heading text-lg font-semibold text-foreground mb-2">No deployments yet</h3>
          <p className="text-muted-foreground mb-4">Create a client first, then deploy Xops360</p>
        </div>
      )}
    </div>
  );
};

export default Deployments;
