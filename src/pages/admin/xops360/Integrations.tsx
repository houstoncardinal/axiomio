import React from 'react';
import { motion } from 'framer-motion';
import { Link as LinkIcon, Plus, CheckCircle2, AlertTriangle, Clock, Cloud, Monitor, GitBranch, Shield, MessageSquare } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { PremiumCard } from '@/components/PremiumCard';

const integrationTypes = [
  { type: 'cloud_provider', label: 'Cloud Providers', icon: Cloud, color: 'bg-blue-500/10 text-blue-400' },
  { type: 'monitoring', label: 'Monitoring', icon: Monitor, color: 'bg-emerald-500/10 text-emerald-400' },
  { type: 'ticketing', label: 'Ticketing', icon: MessageSquare, color: 'bg-amber-500/10 text-amber-400' },
  { type: 'cicd', label: 'CI/CD', icon: GitBranch, color: 'bg-purple-500/10 text-purple-400' },
  { type: 'security', label: 'Security', icon: Shield, color: 'bg-rose-500/10 text-rose-400' },
];

const availableIntegrations = [
  { name: 'AWS', type: 'cloud_provider', logo: '☁️' },
  { name: 'Azure', type: 'cloud_provider', logo: '🔷' },
  { name: 'GCP', type: 'cloud_provider', logo: '🌐' },
  { name: 'Datadog', type: 'monitoring', logo: '📊' },
  { name: 'New Relic', type: 'monitoring', logo: '📈' },
  { name: 'CloudWatch', type: 'monitoring', logo: '⏱️' },
  { name: 'Jira', type: 'ticketing', logo: '🎫' },
  { name: 'ServiceNow', type: 'ticketing', logo: '🔧' },
  { name: 'PagerDuty', type: 'ticketing', logo: '📟' },
  { name: 'GitHub Actions', type: 'cicd', logo: '🐙' },
  { name: 'GitLab CI', type: 'cicd', logo: '🦊' },
  { name: 'Jenkins', type: 'cicd', logo: '🔨' },
  { name: 'Terraform', type: 'iac', logo: '🏗️' },
  { name: 'Ansible', type: 'iac', logo: '⚙️' },
  { name: 'Vault', type: 'security', logo: '🔐' },
  { name: 'Snyk', type: 'security', logo: '🛡️' },
];

const Integrations: React.FC = () => {
  const { data: integrations, isLoading } = useQuery({
    queryKey: ['xops360-integrations'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('xops360_integrations')
        .select(`
          *,
          deployment:xops360_deployments(deployment_name, client:xops360_clients(company_name))
        `)
        .order('created_at', { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'connected': return <CheckCircle2 className="w-4 h-4 text-emerald-400" />;
      case 'error': return <AlertTriangle className="w-4 h-4 text-rose-400" />;
      case 'pending': return <Clock className="w-4 h-4 text-amber-400" />;
      default: return <Clock className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const getTypeInfo = (type: string) => {
    return integrationTypes.find((t) => t.type === type) || { label: type, icon: LinkIcon, color: 'bg-muted text-muted-foreground' };
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-heading text-3xl font-bold text-foreground mb-2">Integrations</h1>
          <p className="text-muted-foreground">Connect XOPS360 with your tools and services</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 gap-2">
          <Plus className="w-4 h-4" />
          Add Integration
        </Button>
      </div>

      {/* Integration Type Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {integrationTypes.map((type) => {
          const count = integrations?.filter((i) => i.integration_type === type.type && i.status === 'connected').length || 0;
          return (
            <div key={type.type} className={`p-4 rounded-xl ${type.color}`}>
              <type.icon className="w-6 h-6 mb-2" />
              <p className="font-heading text-2xl font-bold">{count}</p>
              <p className="text-xs opacity-80">{type.label}</p>
            </div>
          );
        })}
      </div>

      {/* Connected Integrations */}
      <div>
        <h2 className="font-heading text-xl font-semibold text-foreground mb-4">Connected Integrations</h2>
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
          </div>
        ) : integrations && integrations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {integrations.map((integration, index) => {
              const typeInfo = getTypeInfo(integration.integration_type);
              return (
                <motion.div
                  key={integration.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <PremiumCard>
                    <div className="p-5">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-lg ${typeInfo.color} flex items-center justify-center`}>
                            <typeInfo.icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="font-medium text-foreground">{integration.integration_name}</h3>
                            <p className="text-xs text-muted-foreground">{integration.provider}</p>
                          </div>
                        </div>
                        {getStatusIcon(integration.status)}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {integration.deployment?.client?.company_name || 'Unassigned'} • {integration.deployment?.deployment_name}
                      </p>
                      {integration.last_sync_at && (
                        <p className="text-xs text-muted-foreground mt-2">
                          Last sync: {new Date(integration.last_sync_at).toLocaleString()}
                        </p>
                      )}
                    </div>
                  </PremiumCard>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <div className="glass-card rounded-xl p-8 text-center">
            <p className="text-muted-foreground">No integrations connected yet</p>
          </div>
        )}
      </div>

      {/* Available Integrations */}
      <div>
        <h2 className="font-heading text-xl font-semibold text-foreground mb-4">Available Integrations</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {availableIntegrations.map((integration) => (
            <motion.button
              key={integration.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 rounded-xl bg-muted/30 border border-border/30 hover:border-primary/30 transition-all text-center group"
            >
              <span className="text-3xl mb-2 block">{integration.logo}</span>
              <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{integration.name}</p>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Integrations;
