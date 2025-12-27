import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Globe, Clock } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const pageViewData = [
  { name: 'Mon', views: 2400 },
  { name: 'Tue', views: 1398 },
  { name: 'Wed', views: 9800 },
  { name: 'Thu', views: 3908 },
  { name: 'Fri', views: 4800 },
  { name: 'Sat', views: 3800 },
  { name: 'Sun', views: 4300 },
];

const topPagesData = [
  { page: 'Home', views: 12500 },
  { page: 'Services', views: 8200 },
  { page: 'About', views: 6100 },
  { page: 'Contact', views: 4300 },
  { page: 'Xops360', views: 3200 },
];

const MetricCard: React.FC<{
  title: string;
  value: string;
  subtitle: string;
  icon: React.ElementType;
}> = ({ title, value, subtitle, icon: Icon }) => (
  <div className="glass-card rounded-xl p-5 border border-border/30">
    <div className="flex items-center gap-3 mb-3">
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <span className="text-muted-foreground text-sm">{title}</span>
    </div>
    <p className="font-heading text-2xl font-bold text-foreground">{value}</p>
    <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>
  </div>
);

const Analytics: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="font-heading text-3xl font-bold text-foreground mb-2">Analytics</h1>
        <p className="text-muted-foreground">Track your website performance</p>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard title="Total Sessions" value="45,231" subtitle="Last 7 days" icon={BarChart3} />
        <MetricCard title="Bounce Rate" value="32.4%" subtitle="-2.1% from last week" icon={TrendingUp} />
        <MetricCard title="Avg. Duration" value="4:32" subtitle="Minutes per session" icon={Clock} />
        <MetricCard title="Traffic Sources" value="12" subtitle="Active channels" icon={Globe} />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Page Views Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-premium rounded-2xl p-6 border border-border/30"
        >
          <h3 className="font-heading text-lg font-semibold text-foreground mb-6">Page Views</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={pageViewData}>
                <defs>
                  <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(195, 100%, 50%)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(195, 100%, 50%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(230, 15%, 15%)" />
                <XAxis dataKey="name" stroke="hsl(220, 15%, 50%)" fontSize={12} />
                <YAxis stroke="hsl(220, 15%, 50%)" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(230, 22%, 5%)',
                    border: '1px solid hsl(230, 15%, 15%)',
                    borderRadius: '8px',
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="views"
                  stroke="hsl(195, 100%, 50%)"
                  fillOpacity={1}
                  fill="url(#colorViews)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Top Pages Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-premium rounded-2xl p-6 border border-border/30"
        >
          <h3 className="font-heading text-lg font-semibold text-foreground mb-6">Top Pages</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={topPagesData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(230, 15%, 15%)" />
                <XAxis type="number" stroke="hsl(220, 15%, 50%)" fontSize={12} />
                <YAxis dataKey="page" type="category" stroke="hsl(220, 15%, 50%)" fontSize={12} width={80} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(230, 22%, 5%)',
                    border: '1px solid hsl(230, 15%, 15%)',
                    borderRadius: '8px',
                  }}
                />
                <Bar dataKey="views" fill="hsl(270, 80%, 60%)" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Analytics;
