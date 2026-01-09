import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FileText,
  Eye,
  EyeOff,
  Star,
  Plus,
  TrendingUp,
  Clock,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { PremiumCard } from '@/components/PremiumCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';
import type { Json } from '@/integrations/supabase/types';

interface CaseStudyMetric {
  icon: string;
  value: string;
  label: string;
}

interface CaseStudy {
  id: string;
  client_name: string;
  industry: string;
  title: string;
  slug: string;
  image_url: string | null;
  metrics: CaseStudyMetric[];
  tags: string[];
  is_published: boolean;
  published_at: string | null;
  featured: boolean;
  created_at: string;
  updated_at: string;
}

function transformCaseStudy(raw: {
  id: string;
  client_name: string;
  industry: string;
  title: string;
  slug: string;
  image_url: string | null;
  metrics: Json;
  tags: string[] | null;
  is_published: boolean;
  published_at: string | null;
  featured: boolean;
  created_at: string;
  updated_at: string;
}): CaseStudy {
  return {
    ...raw,
    metrics: (raw.metrics as unknown as CaseStudyMetric[]) || [],
    tags: raw.tags || [],
  };
}

const StatCard: React.FC<{
  title: string;
  value: number;
  icon: React.ElementType;
  color: string;
  delay?: number;
}> = ({ title, value, icon: Icon, color, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className="glass-premium rounded-2xl p-6 border border-border/30"
  >
    <div className="flex items-center justify-between">
      <div>
        <p className="text-muted-foreground text-sm mb-1">{title}</p>
        <p className="font-heading text-4xl font-bold text-foreground">{value}</p>
      </div>
      <div className={`w-14 h-14 rounded-xl ${color} flex items-center justify-center`}>
        <Icon className="w-7 h-7 text-white" />
      </div>
    </div>
  </motion.div>
);

const Dashboard: React.FC = () => {
  const { data: caseStudies, isLoading } = useQuery({
    queryKey: ['admin-case-studies-overview'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('case_studies')
        .select('id, client_name, industry, title, slug, image_url, metrics, tags, is_published, published_at, featured, created_at, updated_at')
        .order('updated_at', { ascending: false });

      if (error) throw error;
      return (data || []).map(transformCaseStudy);
    },
  });

  const totalCount = caseStudies?.length || 0;
  const publishedCount = caseStudies?.filter((s) => s.is_published).length || 0;
  const draftCount = caseStudies?.filter((s) => !s.is_published).length || 0;
  const featuredCount = caseStudies?.filter((s) => s.featured).length || 0;

  const recentStudies = caseStudies?.slice(0, 5) || [];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-3xl font-bold text-foreground mb-2">Case Studies CRM</h1>
          <p className="text-muted-foreground">Manage and publish client success stories</p>
        </div>
        <Link to="/admin/case-studies/new">
          <Button variant="hero" size="lg">
            <Plus className="w-4 h-4 mr-2" />
            New Case Study
          </Button>
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Case Studies"
          value={totalCount}
          icon={FileText}
          color="bg-primary"
          delay={0}
        />
        <StatCard
          title="Published"
          value={publishedCount}
          icon={Eye}
          color="bg-emerald-500"
          delay={0.1}
        />
        <StatCard
          title="Drafts"
          value={draftCount}
          icon={EyeOff}
          color="bg-amber-500"
          delay={0.2}
        />
        <StatCard
          title="Featured"
          value={featuredCount}
          icon={Star}
          color="bg-violet-500"
          delay={0.3}
        />
      </div>

      {/* Quick Actions & Recent */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <PremiumCard className="h-full">
            <div className="p-6 border-b border-border/30">
              <h2 className="font-heading text-xl font-semibold text-foreground">Quick Actions</h2>
            </div>
            <div className="p-4 space-y-2">
              <Link
                to="/admin/case-studies/new"
                className="flex items-center gap-3 p-4 rounded-xl hover:bg-muted/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Plus className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <span className="font-medium text-foreground">Create New</span>
                  <p className="text-sm text-muted-foreground">Add a new case study</p>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
              <Link
                to="/admin/case-studies"
                className="flex items-center gap-3 p-4 rounded-xl hover:bg-muted/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <FileText className="w-5 h-5 text-secondary" />
                </div>
                <div className="flex-1">
                  <span className="font-medium text-foreground">Manage All</span>
                  <p className="text-sm text-muted-foreground">View and edit case studies</p>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-secondary transition-colors" />
              </Link>
              <Link
                to="/case-studies"
                target="_blank"
                className="flex items-center gap-3 p-4 rounded-xl hover:bg-muted/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                  <ExternalLink className="w-5 h-5 text-emerald-500" />
                </div>
                <div className="flex-1">
                  <span className="font-medium text-foreground">View Live</span>
                  <p className="text-sm text-muted-foreground">See published case studies</p>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-emerald-500 transition-colors" />
              </Link>
            </div>
          </PremiumCard>
        </motion.div>

        {/* Recent Case Studies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="lg:col-span-2"
        >
          <PremiumCard>
            <div className="p-6 border-b border-border/30 flex items-center justify-between">
              <h2 className="font-heading text-xl font-semibold text-foreground">Recently Updated</h2>
              <Link to="/admin/case-studies" className="text-primary text-sm hover:underline">
                View All →
              </Link>
            </div>
            <div className="divide-y divide-border/30">
              {isLoading ? (
                <div className="p-8 flex justify-center">
                  <div className="w-6 h-6 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                </div>
              ) : recentStudies.length === 0 ? (
                <div className="p-8 text-center">
                  <FileText className="w-12 h-12 mx-auto text-muted-foreground/50 mb-3" />
                  <p className="text-muted-foreground">No case studies yet</p>
                  <Link to="/admin/case-studies/new">
                    <Button variant="outline" className="mt-4">
                      <Plus className="w-4 h-4 mr-2" />
                      Create Your First
                    </Button>
                  </Link>
                </div>
              ) : (
                recentStudies.map((study) => (
                  <Link
                    key={study.id}
                    to={`/admin/case-studies/${study.id}`}
                    className="p-4 flex items-center gap-4 hover:bg-muted/30 transition-colors"
                  >
                    {study.image_url ? (
                      <img
                        src={study.image_url}
                        alt={study.title}
                        className="w-14 h-14 rounded-lg object-cover flex-shrink-0"
                      />
                    ) : (
                      <div className="w-14 h-14 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                        <FileText className="w-6 h-6 text-muted-foreground" />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-medium text-foreground truncate">{study.client_name}</p>
                        {study.featured && <Star className="w-4 h-4 text-amber-500 fill-amber-500 flex-shrink-0" />}
                      </div>
                      <p className="text-sm text-muted-foreground truncate">{study.title}</p>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <Badge variant={study.is_published ? 'default' : 'secondary'}>
                        {study.is_published ? 'Published' : 'Draft'}
                      </Badge>
                      <div className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {format(new Date(study.updated_at), 'MMM d')}
                      </div>
                    </div>
                  </Link>
                ))
              )}
            </div>
          </PremiumCard>
        </motion.div>
      </div>

      {/* Industries Distribution */}
      {caseStudies && caseStudies.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <PremiumCard>
            <div className="p-6 border-b border-border/30">
              <h2 className="font-heading text-xl font-semibold text-foreground">By Industry</h2>
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2">
                {Object.entries(
                  caseStudies.reduce((acc, study) => {
                    acc[study.industry] = (acc[study.industry] || 0) + 1;
                    return acc;
                  }, {} as Record<string, number>)
                ).map(([industry, count]) => (
                  <Badge key={industry} variant="outline" className="px-3 py-2">
                    {industry}: <span className="font-bold ml-1">{count}</span>
                  </Badge>
                ))}
              </div>
            </div>
          </PremiumCard>
        </motion.div>
      )}
    </div>
  );
};

export default Dashboard;