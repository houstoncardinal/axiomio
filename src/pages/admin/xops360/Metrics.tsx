import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, DollarSign, Zap, Shield, Clock, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { PremiumCard } from '@/components/PremiumCard';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

// Mock data for demonstration
const incidentData = [
  { date: 'Mon', detected: 45, resolved: 42 },
  { date: 'Tue', detected: 52, resolved: 50 },
  { date: 'Wed', detected: 38, resolved: 38 },
  { date: 'Thu', detected: 65, resolved: 62 },
  { date: 'Fri', detected: 48, resolved: 47 },
  { date: 'Sat', detected: 25, resolved: 25 },
  { date: 'Sun', detected: 18, resolved: 18 },
];

const costData = [
  { month: 'Jan', before: 85000, after: 62000 },
  { month: 'Feb', before: 92000, after: 65000 },
  { month: 'Mar', before: 88000, after: 58000 },
  { month: 'Apr', before: 95000, after: 61000 },
  { month: 'May', before: 102000, after: 68000 },
  { month: 'Jun', before: 98000, after: 64000 },
];

const automationByCategory = [
  { name: 'CloudOps', value: 35, color: 'hsl(195, 100%, 50%)' },
  { name: 'FinOps', value: 25, color: 'hsl(160, 85%, 45%)' },
  { name: 'SecOps', value: 20, color: 'hsl(350, 90%, 60%)' },
  { name: 'DevOps', value: 15, color: 'hsl(220, 90%, 60%)' },
  { name: 'Other', value: 5, color: 'hsl(230, 15%, 50%)' },
];

const Xops360Metrics: React.FC = () => {
  const { data: metrics } = useQuery({
    queryKey: ['xops360-all-metrics'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('xops360_metrics')
        .select('*')
        .order('metric_date', { ascending: false })
        .limit(30);
      if (error) throw error;
      return data;
    },
  });

  // Calculate aggregate metrics
  const totalIncidents = metrics?.reduce((acc, m) => acc + (m.incidents_detected || 0), 0) || 0;
  const autoResolved = metrics?.reduce((acc, m) => acc + (m.incidents_auto_resolved || 0), 0) || 0;
  const totalSavings = metrics?.reduce((acc, m) => acc + Number(m.cost_savings || 0), 0) || 0;
  const totalAutomations = metrics?.reduce((acc, m) => acc + (m.automations_executed || 0), 0) || 0;
  const avgMTTR = metrics?.length
    ? metrics.reduce((acc, m) => acc + Number(m.avg_mttr_minutes || 0), 0) / metrics.length
    : 0;

  const MetricCard: React.FC<{
    title: string;
    value: string;
    change: number;
    icon: React.ElementType;
    color: string;
  }> = ({ title, value, change, icon: Icon, color }) => (
    <PremiumCard>
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center`}>
            <Icon className="w-6 h-6" />
          </div>
          <div className={`flex items-center gap-1 text-sm ${change >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
            {change >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
            {Math.abs(change)}%
          </div>
        </div>
        <p className="text-muted-foreground text-sm mb-1">{title}</p>
        <p className="font-heading text-3xl font-bold text-foreground">{value}</p>
      </div>
    </PremiumCard>
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="font-heading text-3xl font-bold text-foreground mb-2">Xops360 Metrics</h1>
        <p className="text-muted-foreground">Platform-wide performance and analytics</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Cost Savings"
          value={`$${(totalSavings / 1000).toFixed(0)}K`}
          change={12.5}
          icon={DollarSign}
          color="bg-emerald-500/10 text-emerald-400"
        />
        <MetricCard
          title="Auto-Resolved Incidents"
          value={`${totalIncidents > 0 ? Math.round((autoResolved / totalIncidents) * 100) : 0}%`}
          change={8.2}
          icon={CheckCircle2}
          color="bg-primary/10 text-primary"
        />
        <MetricCard
          title="Avg MTTR"
          value={`${avgMTTR.toFixed(1)}m`}
          change={-15.3}
          icon={Clock}
          color="bg-amber-500/10 text-amber-400"
        />
        <MetricCard
          title="Automations Run"
          value={totalAutomations.toLocaleString()}
          change={24.1}
          icon={Zap}
          color="bg-secondary/10 text-secondary"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Incidents Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <PremiumCard>
            <div className="p-6 border-b border-border/30">
              <h3 className="font-heading text-lg font-semibold text-foreground">Incident Resolution</h3>
              <p className="text-sm text-muted-foreground">Detected vs Auto-Resolved (Last 7 Days)</p>
            </div>
            <div className="p-6 h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={incidentData}>
                  <defs>
                    <linearGradient id="colorDetected" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(195, 100%, 50%)" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="hsl(195, 100%, 50%)" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorResolved" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(160, 85%, 45%)" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="hsl(160, 85%, 45%)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(230, 15%, 15%)" />
                  <XAxis dataKey="date" stroke="hsl(220, 15%, 50%)" fontSize={12} />
                  <YAxis stroke="hsl(220, 15%, 50%)" fontSize={12} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(230, 22%, 5%)',
                      border: '1px solid hsl(230, 15%, 15%)',
                      borderRadius: '8px',
                    }}
                  />
                  <Area type="monotone" dataKey="detected" stroke="hsl(195, 100%, 50%)" fill="url(#colorDetected)" />
                  <Area type="monotone" dataKey="resolved" stroke="hsl(160, 85%, 45%)" fill="url(#colorResolved)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </PremiumCard>
        </motion.div>

        {/* Cost Savings Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <PremiumCard>
            <div className="p-6 border-b border-border/30">
              <h3 className="font-heading text-lg font-semibold text-foreground">Cloud Cost Optimization</h3>
              <p className="text-sm text-muted-foreground">Before vs After Xops360 (Monthly)</p>
            </div>
            <div className="p-6 h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={costData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(230, 15%, 15%)" />
                  <XAxis dataKey="month" stroke="hsl(220, 15%, 50%)" fontSize={12} />
                  <YAxis stroke="hsl(220, 15%, 50%)" fontSize={12} tickFormatter={(v) => `$${v / 1000}K`} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(230, 22%, 5%)',
                      border: '1px solid hsl(230, 15%, 15%)',
                      borderRadius: '8px',
                    }}
                    formatter={(value: number) => [`$${value.toLocaleString()}`, '']}
                  />
                  <Bar dataKey="before" fill="hsl(220, 15%, 40%)" name="Before" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="after" fill="hsl(160, 85%, 45%)" name="After" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </PremiumCard>
        </motion.div>
      </div>

      {/* Automation Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-1"
        >
          <PremiumCard className="h-full">
            <div className="p-6 border-b border-border/30">
              <h3 className="font-heading text-lg font-semibold text-foreground">Automations by Category</h3>
            </div>
            <div className="p-6 h-[300px] flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={automationByCategory}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {automationByCategory.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(230, 22%, 5%)',
                      border: '1px solid hsl(230, 15%, 15%)',
                      borderRadius: '8px',
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="px-6 pb-6 grid grid-cols-2 gap-2">
              {automationByCategory.map((cat) => (
                <div key={cat.name} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: cat.color }} />
                  <span className="text-xs text-muted-foreground">{cat.name}</span>
                </div>
              ))}
            </div>
          </PremiumCard>
        </motion.div>

        {/* Performance Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="lg:col-span-2"
        >
          <PremiumCard className="h-full">
            <div className="p-6 border-b border-border/30">
              <h3 className="font-heading text-lg font-semibold text-foreground">Platform Performance Summary</h3>
            </div>
            <div className="p-6 grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { label: 'Uptime', value: '99.99%', icon: CheckCircle2, color: 'text-emerald-400' },
                { label: 'Security Score', value: '98/100', icon: Shield, color: 'text-primary' },
                { label: 'Tickets Prevented', value: '2,847', icon: AlertTriangle, color: 'text-amber-400' },
                { label: 'Engineer Hours Saved', value: '1,240', icon: Clock, color: 'text-blue-400' },
                { label: 'Active Runbooks', value: '156', icon: Zap, color: 'text-secondary' },
                { label: 'Total Integrations', value: '89', icon: TrendingUp, color: 'text-purple-400' },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-xl bg-muted/20">
                  <stat.icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
                  <p className="font-heading text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </PremiumCard>
        </motion.div>
      </div>
    </div>
  );
};

export default Xops360Metrics;
