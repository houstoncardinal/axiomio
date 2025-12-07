import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  Eye, 
  MessageSquare,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

const StatCard: React.FC<{
  title: string;
  value: string;
  change: number;
  icon: React.ElementType;
  delay?: number;
}> = ({ title, value, change, icon: Icon, delay = 0 }) => {
  const isPositive = change >= 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="glass-premium rounded-2xl p-6 border border-border/30"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div className={`flex items-center gap-1 text-sm ${isPositive ? 'text-emerald-400' : 'text-rose-400'}`}>
          {isPositive ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
          {Math.abs(change)}%
        </div>
      </div>
      <h3 className="text-muted-foreground text-sm mb-1">{title}</h3>
      <p className="font-heading text-3xl font-bold text-foreground">{value}</p>
    </motion.div>
  );
};

const Dashboard: React.FC = () => {
  const { data: inquiriesCount } = useQuery({
    queryKey: ['inquiries-count'],
    queryFn: async () => {
      const { count } = await supabase
        .from('contact_inquiries')
        .select('*', { count: 'exact', head: true });
      return count || 0;
    },
  });

  const { data: profilesCount } = useQuery({
    queryKey: ['profiles-count'],
    queryFn: async () => {
      const { count } = await supabase
        .from('profiles')
        .select('*', { count: 'exact', head: true });
      return count || 0;
    },
  });

  const { data: recentInquiries } = useQuery({
    queryKey: ['recent-inquiries'],
    queryFn: async () => {
      const { data } = await supabase
        .from('contact_inquiries')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(5);
      return data || [];
    },
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="font-heading text-3xl font-bold text-foreground mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Welcome to your admin dashboard</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Views"
          value="24.5K"
          change={12.5}
          icon={Eye}
          delay={0}
        />
        <StatCard
          title="Users"
          value={profilesCount?.toString() || '0'}
          change={8.2}
          icon={Users}
          delay={0.1}
        />
        <StatCard
          title="Inquiries"
          value={inquiriesCount?.toString() || '0'}
          change={-2.4}
          icon={MessageSquare}
          delay={0.2}
        />
        <StatCard
          title="Conversion"
          value="3.2%"
          change={5.1}
          icon={TrendingUp}
          delay={0.3}
        />
      </div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="glass-premium rounded-2xl border border-border/30 overflow-hidden"
      >
        <div className="p-6 border-b border-border/30">
          <h2 className="font-heading text-xl font-semibold text-foreground">Recent Inquiries</h2>
        </div>
        <div className="divide-y divide-border/30">
          {recentInquiries && recentInquiries.length > 0 ? (
            recentInquiries.map((inquiry) => (
              <div key={inquiry.id} className="p-6 flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">{inquiry.name}</p>
                  <p className="text-sm text-muted-foreground">{inquiry.email}</p>
                </div>
                <div className="text-right">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    inquiry.status === 'new' 
                      ? 'bg-primary/10 text-primary' 
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {inquiry.status}
                  </span>
                  <p className="text-xs text-muted-foreground mt-1">
                    {new Date(inquiry.created_at).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="p-12 text-center text-muted-foreground">
              No inquiries yet
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
