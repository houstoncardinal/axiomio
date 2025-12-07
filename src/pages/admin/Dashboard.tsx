import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  TrendingUp,
  Users,
  Server,
  DollarSign,
  Activity,
  Zap,
  Target,
  Building2,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  CheckCircle2,
  AlertTriangle,
  BarChart3,
} from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { PremiumCard } from '@/components/PremiumCard';

const StatCard: React.FC<{
  title: string;
  value: string;
  change?: number;
  icon: React.ElementType;
  color?: string;
  delay?: number;
}> = ({ title, value, change, icon: Icon, color = 'primary', delay = 0 }) => {
  const isPositive = change && change >= 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="glass-premium rounded-2xl p-6 border border-border/30"
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 rounded-xl bg-${color}/10 flex items-center justify-center`}>
          <Icon className={`w-6 h-6 text-${color}`} />
        </div>
        {change !== undefined && (
          <div className={`flex items-center gap-1 text-sm ${isPositive ? 'text-emerald-400' : 'text-rose-400'}`}>
            {isPositive ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
            {Math.abs(change)}%
          </div>
        )}
      </div>
      <h3 className="text-muted-foreground text-sm mb-1">{title}</h3>
      <p className="font-heading text-3xl font-bold text-foreground">{value}</p>
    </motion.div>
  );
};

const Dashboard: React.FC = () => {
  const { data: clientsCount } = useQuery({
    queryKey: ['xops360-clients-count'],
    queryFn: async () => {
      const { count } = await supabase
        .from('xops360_clients')
        .select('*', { count: 'exact', head: true })
        .eq('status', 'active');
      return count || 0;
    },
  });

  const { data: deploymentsCount } = useQuery({
    queryKey: ['xops360-deployments-count'],
    queryFn: async () => {
      const { count } = await supabase
        .from('xops360_deployments')
        .select('*', { count: 'exact', head: true })
        .eq('status', 'active');
      return count || 0;
    },
  });

  const { data: leadsCount } = useQuery({
    queryKey: ['leads-count'],
    queryFn: async () => {
      const { count } = await supabase
        .from('leads')
        .select('*', { count: 'exact', head: true })
        .in('status', ['new', 'contacted', 'qualified']);
      return count || 0;
    },
  });

  const { data: inquiriesCount } = useQuery({
    queryKey: ['inquiries-count'],
    queryFn: async () => {
      const { count } = await supabase
        .from('contact_inquiries')
        .select('*', { count: 'exact', head: true })
        .eq('status', 'new');
      return count || 0;
    },
  });

  const { data: recentLeads } = useQuery({
    queryKey: ['recent-leads'],
    queryFn: async () => {
      const { data } = await supabase
        .from('leads')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(5);
      return data || [];
    },
  });

  const { data: recentClients } = useQuery({
    queryKey: ['recent-clients'],
    queryFn: async () => {
      const { data } = await supabase
        .from('xops360_clients')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(5);
      return data || [];
    },
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
      case 'won':
        return 'bg-emerald-500/10 text-emerald-400';
      case 'new':
      case 'prospect':
        return 'bg-primary/10 text-primary';
      case 'onboarding':
      case 'qualified':
        return 'bg-amber-500/10 text-amber-400';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-3xl font-bold text-foreground mb-2">Command Center</h1>
          <p className="text-muted-foreground">XOPS360 Platform Management Dashboard</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Activity className="w-4 h-4 text-emerald-400" />
          <span>All systems operational</span>
        </div>
      </div>

      {/* Primary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Active XOPS360 Clients"
          value={clientsCount?.toString() || '0'}
          change={12.5}
          icon={Building2}
          delay={0}
        />
        <StatCard
          title="Live Deployments"
          value={deploymentsCount?.toString() || '0'}
          change={8.2}
          icon={Server}
          delay={0.1}
        />
        <StatCard
          title="Active Leads"
          value={leadsCount?.toString() || '0'}
          change={-2.4}
          icon={Target}
          delay={0.2}
        />
        <StatCard
          title="New Inquiries"
          value={inquiriesCount?.toString() || '0'}
          change={15.1}
          icon={Users}
          delay={0.3}
        />
      </div>

      {/* XOPS360 Performance Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2"
        >
          <PremiumCard>
            <div className="p-6 border-b border-border/30">
              <div className="flex items-center justify-between">
                <h2 className="font-heading text-xl font-semibold text-foreground">XOPS360 Platform Health</h2>
                <Link to="/admin/xops360" className="text-primary text-sm hover:underline">
                  View All →
                </Link>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/10 flex items-center justify-center mb-3">
                    <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                  </div>
                  <p className="font-heading text-2xl font-bold text-foreground">99.9%</p>
                  <p className="text-sm text-muted-foreground">Uptime</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <Zap className="w-8 h-8 text-primary" />
                  </div>
                  <p className="font-heading text-2xl font-bold text-foreground">2.4K</p>
                  <p className="text-sm text-muted-foreground">Automations/Day</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-secondary/10 flex items-center justify-center mb-3">
                    <DollarSign className="w-8 h-8 text-secondary" />
                  </div>
                  <p className="font-heading text-2xl font-bold text-foreground">$1.2M</p>
                  <p className="text-sm text-muted-foreground">Cost Savings/Mo</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-amber-500/10 flex items-center justify-center mb-3">
                    <Clock className="w-8 h-8 text-amber-400" />
                  </div>
                  <p className="font-heading text-2xl font-bold text-foreground">4.2m</p>
                  <p className="text-sm text-muted-foreground">Avg MTTR</p>
                </div>
              </div>
            </div>
          </PremiumCard>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <PremiumCard className="h-full">
            <div className="p-6 border-b border-border/30">
              <h2 className="font-heading text-xl font-semibold text-foreground">Quick Actions</h2>
            </div>
            <div className="p-4 space-y-2">
              {[
                { label: 'New Client', href: '/admin/xops360/clients', icon: Building2 },
                { label: 'Add Lead', href: '/admin/leads', icon: Target },
                { label: 'New Deployment', href: '/admin/xops360/deployments', icon: Server },
                { label: 'Create Runbook', href: '/admin/xops360/runbooks', icon: Zap },
              ].map((action) => (
                <Link
                  key={action.label}
                  to={action.href}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <action.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">{action.label}</span>
                </Link>
              ))}
            </div>
          </PremiumCard>
        </motion.div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Leads */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <PremiumCard>
            <div className="p-6 border-b border-border/30 flex items-center justify-between">
              <h2 className="font-heading text-lg font-semibold text-foreground">Recent Leads</h2>
              <Link to="/admin/leads" className="text-primary text-sm hover:underline">View All</Link>
            </div>
            <div className="divide-y divide-border/30">
              {recentLeads && recentLeads.length > 0 ? (
                recentLeads.map((lead) => (
                  <div key={lead.id} className="p-4 flex items-center justify-between">
                    <div>
                      <p className="font-medium text-foreground">{lead.company_name}</p>
                      <p className="text-sm text-muted-foreground">{lead.contact_name} • {lead.lead_type.toUpperCase()}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(lead.status)}`}>
                      {lead.status}
                    </span>
                  </div>
                ))
              ) : (
                <div className="p-8 text-center text-muted-foreground">No leads yet</div>
              )}
            </div>
          </PremiumCard>
        </motion.div>

        {/* Recent Clients */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <PremiumCard>
            <div className="p-6 border-b border-border/30 flex items-center justify-between">
              <h2 className="font-heading text-lg font-semibold text-foreground">XOPS360 Clients</h2>
              <Link to="/admin/xops360/clients" className="text-primary text-sm hover:underline">View All</Link>
            </div>
            <div className="divide-y divide-border/30">
              {recentClients && recentClients.length > 0 ? (
                recentClients.map((client) => (
                  <div key={client.id} className="p-4 flex items-center justify-between">
                    <div>
                      <p className="font-medium text-foreground">{client.company_name}</p>
                      <p className="text-sm text-muted-foreground">{client.client_type.toUpperCase()} • {client.industry}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(client.status)}`}>
                      {client.status}
                    </span>
                  </div>
                ))
              ) : (
                <div className="p-8 text-center text-muted-foreground">No clients yet</div>
              )}
            </div>
          </PremiumCard>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
