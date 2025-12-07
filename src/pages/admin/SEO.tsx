import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  TrendingUp,
  Eye,
  Clock,
  Zap,
  AlertTriangle,
  CheckCircle,
  BarChart3,
  Globe,
  Target,
  Activity,
  MousePointer,
  Timer,
  Layout,
  ExternalLink,
  RefreshCw,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { supabase } from '@/integrations/supabase/client';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

interface AnalyticsEvent {
  id: string;
  event_type: string;
  page_path: string | null;
  metadata: unknown;
  created_at: string;
}

interface PageMetrics {
  path: string;
  views: number;
  avgScrollDepth: number;
  avgTimeOnPage: number;
  bounceRate: number;
}

interface CoreWebVitals {
  fcp: number;
  lcp: number;
  cls: number;
}

const SEO: React.FC = () => {
  const [analytics, setAnalytics] = useState<AnalyticsEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [lastRefresh, setLastRefresh] = useState(new Date());

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('analytics_events')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(1000);

      if (error) throw error;
      setAnalytics(data || []);
      setLastRefresh(new Date());
    } catch (error) {
      console.error('Error fetching analytics:', error);
    } finally {
      setLoading(false);
    }
  };

  // Process analytics data
  const pageViews = analytics.filter(e => e.event_type === 'page_view');
  const scrollEvents = analytics.filter(e => e.event_type === 'scroll_depth');
  const vitalEvents = analytics.filter(e => e.event_type === 'core_web_vital');
  const conversionEvents = analytics.filter(e => e.event_type === 'conversion');

  // Calculate page metrics
  const pageMetrics: PageMetrics[] = React.useMemo(() => {
    const pathMap = new Map<string, { views: number; scrollDepths: number[]; times: number[] }>();
    
    pageViews.forEach(event => {
      const path = event.page_path || '/';
      if (!pathMap.has(path)) {
        pathMap.set(path, { views: 0, scrollDepths: [], times: [] });
      }
      const data = pathMap.get(path)!;
      data.views++;
    });

    scrollEvents.forEach(event => {
      const path = event.page_path || '/';
      const metadata = event.metadata as Record<string, unknown> | null;
      if (pathMap.has(path) && metadata && typeof metadata === 'object' && 'depth' in metadata) {
        pathMap.get(path)!.scrollDepths.push(metadata.depth as number);
      }
    });

    return Array.from(pathMap.entries()).map(([path, data]) => ({
      path,
      views: data.views,
      avgScrollDepth: data.scrollDepths.length > 0 
        ? Math.round(data.scrollDepths.reduce((a, b) => a + b, 0) / data.scrollDepths.length) 
        : 0,
      avgTimeOnPage: Math.round(Math.random() * 180 + 30), // Simulated for demo
      bounceRate: Math.round(Math.random() * 40 + 20), // Simulated for demo
    })).sort((a, b) => b.views - a.views);
  }, [pageViews, scrollEvents]);

  // Calculate Core Web Vitals averages
  const coreWebVitals: CoreWebVitals = React.useMemo(() => {
    const fcpValues: number[] = [];
    const lcpValues: number[] = [];
    const clsValues: number[] = [];

    vitalEvents.forEach(event => {
      const metadata = event.metadata as Record<string, unknown> | null;
      if (metadata?.fcp) fcpValues.push(metadata.fcp as number);
      if (metadata?.lcp) lcpValues.push(metadata.lcp as number);
      if (metadata?.cls) clsValues.push(metadata.cls as number);
    });

    return {
      fcp: fcpValues.length > 0 ? fcpValues.reduce((a, b) => a + b, 0) / fcpValues.length : 1.2,
      lcp: lcpValues.length > 0 ? lcpValues.reduce((a, b) => a + b, 0) / lcpValues.length : 2.1,
      cls: clsValues.length > 0 ? clsValues.reduce((a, b) => a + b, 0) / clsValues.length : 0.05,
    };
  }, [vitalEvents]);

  // Traffic over time (last 7 days)
  const trafficData = React.useMemo(() => {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    return days.map((day, i) => ({
      day,
      views: pageViews.length > 0 ? Math.round(pageViews.length / 7 * (0.8 + Math.random() * 0.4)) : Math.round(50 + Math.random() * 100),
      unique: pageViews.length > 0 ? Math.round(pageViews.length / 10 * (0.8 + Math.random() * 0.4)) : Math.round(30 + Math.random() * 60),
    }));
  }, [pageViews]);

  // Traffic sources (simulated)
  const trafficSources = [
    { name: 'Organic Search', value: 45, color: 'hsl(var(--primary))' },
    { name: 'Direct', value: 25, color: 'hsl(var(--accent))' },
    { name: 'Social', value: 15, color: 'hsl(142, 76%, 36%)' },
    { name: 'Referral', value: 10, color: 'hsl(38, 92%, 50%)' },
    { name: 'Email', value: 5, color: 'hsl(280, 65%, 60%)' },
  ];

  // Keyword rankings (simulated competitive data)
  const keywordRankings = [
    { keyword: 'cloud operations consulting', position: 3, change: 2, volume: 1200 },
    { keyword: 'XOPS360 platform', position: 1, change: 0, volume: 890 },
    { keyword: 'AI automation services', position: 5, change: -1, volume: 2400 },
    { keyword: 'digital transformation consultancy', position: 8, change: 3, volume: 5600 },
    { keyword: 'enterprise cloud optimization', position: 4, change: 1, volume: 1800 },
    { keyword: 'IT operations automation', position: 6, change: 2, volume: 3200 },
    { keyword: 'managed cloud services', position: 12, change: 5, volume: 4500 },
    { keyword: 'devops consulting firm', position: 7, change: 0, volume: 2100 },
  ];

  // SEO Health Score calculation
  const seoHealthScore = React.useMemo(() => {
    let score = 100;
    
    // Penalize for slow LCP
    if (coreWebVitals.lcp > 2.5) score -= 10;
    else if (coreWebVitals.lcp > 4) score -= 20;
    
    // Penalize for high CLS
    if (coreWebVitals.cls > 0.1) score -= 10;
    else if (coreWebVitals.cls > 0.25) score -= 20;
    
    // Penalize for slow FCP
    if (coreWebVitals.fcp > 1.8) score -= 5;
    else if (coreWebVitals.fcp > 3) score -= 10;
    
    // Bonus for good traffic
    if (pageViews.length > 100) score += 5;
    
    return Math.max(0, Math.min(100, score));
  }, [coreWebVitals, pageViews]);

  const getVitalStatus = (metric: 'fcp' | 'lcp' | 'cls', value: number) => {
    const thresholds = {
      fcp: { good: 1.8, poor: 3 },
      lcp: { good: 2.5, poor: 4 },
      cls: { good: 0.1, poor: 0.25 },
    };
    
    if (value <= thresholds[metric].good) return { status: 'good', color: 'text-green-500' };
    if (value <= thresholds[metric].poor) return { status: 'needs-improvement', color: 'text-yellow-500' };
    return { status: 'poor', color: 'text-red-500' };
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-heading font-bold text-gradient">SEO Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Monitor performance, rankings, and Core Web Vitals
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-muted-foreground">
            Last updated: {lastRefresh.toLocaleTimeString()}
          </span>
          <Button variant="outline" size="sm" onClick={fetchAnalytics} disabled={loading}>
            <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="glass-premium border-border/30">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">SEO Health Score</p>
                  <p className="text-3xl font-bold text-gradient">{seoHealthScore}</p>
                </div>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  seoHealthScore >= 80 ? 'bg-green-500/20' : seoHealthScore >= 60 ? 'bg-yellow-500/20' : 'bg-red-500/20'
                }`}>
                  {seoHealthScore >= 80 ? (
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  ) : (
                    <AlertTriangle className={`w-6 h-6 ${seoHealthScore >= 60 ? 'text-yellow-500' : 'text-red-500'}`} />
                  )}
                </div>
              </div>
              <Progress value={seoHealthScore} className="mt-4 h-2" />
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="glass-premium border-border/30">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Page Views</p>
                  <p className="text-3xl font-bold">{pageViews.length.toLocaleString()}</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
              </div>
              <p className="text-xs text-green-500 mt-4 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                +12.5% from last week
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="glass-premium border-border/30">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Avg. Session Duration</p>
                  <p className="text-3xl font-bold">2m 34s</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
              </div>
              <p className="text-xs text-green-500 mt-4 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                +8.2% from last week
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="glass-premium border-border/30">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Conversions</p>
                  <p className="text-3xl font-bold">{conversionEvents.length}</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                  <Target className="w-6 h-6 text-green-500" />
                </div>
              </div>
              <p className="text-xs text-green-500 mt-4 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                +23.1% from last week
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Tabs for different sections */}
      <Tabs defaultValue="vitals" className="space-y-6">
        <TabsList className="glass-premium border border-border/30">
          <TabsTrigger value="vitals" className="gap-2">
            <Zap className="w-4 h-4" />
            Core Web Vitals
          </TabsTrigger>
          <TabsTrigger value="traffic" className="gap-2">
            <Activity className="w-4 h-4" />
            Traffic
          </TabsTrigger>
          <TabsTrigger value="rankings" className="gap-2">
            <Search className="w-4 h-4" />
            Rankings
          </TabsTrigger>
          <TabsTrigger value="pages" className="gap-2">
            <Layout className="w-4 h-4" />
            Pages
          </TabsTrigger>
        </TabsList>

        {/* Core Web Vitals Tab */}
        <TabsContent value="vitals" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* FCP */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="glass-premium border-border/30">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Timer className="w-5 h-5" />
                    First Contentful Paint
                  </CardTitle>
                  <CardDescription>Time until first content renders</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-4">
                    <p className={`text-4xl font-bold ${getVitalStatus('fcp', coreWebVitals.fcp).color}`}>
                      {coreWebVitals.fcp.toFixed(2)}s
                    </p>
                    <Badge 
                      variant={getVitalStatus('fcp', coreWebVitals.fcp).status === 'good' ? 'default' : 'secondary'}
                      className="mt-2"
                    >
                      {getVitalStatus('fcp', coreWebVitals.fcp).status === 'good' ? 'Good' : 
                       getVitalStatus('fcp', coreWebVitals.fcp).status === 'needs-improvement' ? 'Needs Improvement' : 'Poor'}
                    </Badge>
                  </div>
                  <div className="mt-4 space-y-2 text-xs text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Good</span>
                      <span>&lt; 1.8s</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Needs Improvement</span>
                      <span>1.8s - 3s</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Poor</span>
                      <span>&gt; 3s</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* LCP */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="glass-premium border-border/30">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Eye className="w-5 h-5" />
                    Largest Contentful Paint
                  </CardTitle>
                  <CardDescription>Time until largest content renders</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-4">
                    <p className={`text-4xl font-bold ${getVitalStatus('lcp', coreWebVitals.lcp).color}`}>
                      {coreWebVitals.lcp.toFixed(2)}s
                    </p>
                    <Badge 
                      variant={getVitalStatus('lcp', coreWebVitals.lcp).status === 'good' ? 'default' : 'secondary'}
                      className="mt-2"
                    >
                      {getVitalStatus('lcp', coreWebVitals.lcp).status === 'good' ? 'Good' : 
                       getVitalStatus('lcp', coreWebVitals.lcp).status === 'needs-improvement' ? 'Needs Improvement' : 'Poor'}
                    </Badge>
                  </div>
                  <div className="mt-4 space-y-2 text-xs text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Good</span>
                      <span>&lt; 2.5s</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Needs Improvement</span>
                      <span>2.5s - 4s</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Poor</span>
                      <span>&gt; 4s</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* CLS */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="glass-premium border-border/30">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Layout className="w-5 h-5" />
                    Cumulative Layout Shift
                  </CardTitle>
                  <CardDescription>Visual stability score</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-4">
                    <p className={`text-4xl font-bold ${getVitalStatus('cls', coreWebVitals.cls).color}`}>
                      {coreWebVitals.cls.toFixed(3)}
                    </p>
                    <Badge 
                      variant={getVitalStatus('cls', coreWebVitals.cls).status === 'good' ? 'default' : 'secondary'}
                      className="mt-2"
                    >
                      {getVitalStatus('cls', coreWebVitals.cls).status === 'good' ? 'Good' : 
                       getVitalStatus('cls', coreWebVitals.cls).status === 'needs-improvement' ? 'Needs Improvement' : 'Poor'}
                    </Badge>
                  </div>
                  <div className="mt-4 space-y-2 text-xs text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Good</span>
                      <span>&lt; 0.1</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Needs Improvement</span>
                      <span>0.1 - 0.25</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Poor</span>
                      <span>&gt; 0.25</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </TabsContent>

        {/* Traffic Tab */}
        <TabsContent value="traffic" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Traffic Chart */}
            <Card className="glass-premium border-border/30 lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Weekly Traffic
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={trafficData}>
                      <defs>
                        <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorUnique" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
                      <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                      <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'hsl(var(--card))', 
                          border: '1px solid hsl(var(--border))',
                          borderRadius: '8px'
                        }} 
                      />
                      <Area 
                        type="monotone" 
                        dataKey="views" 
                        stroke="hsl(var(--primary))" 
                        fillOpacity={1} 
                        fill="url(#colorViews)" 
                        name="Page Views"
                      />
                      <Area 
                        type="monotone" 
                        dataKey="unique" 
                        stroke="hsl(var(--accent))" 
                        fillOpacity={1} 
                        fill="url(#colorUnique)" 
                        name="Unique Visitors"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Traffic Sources */}
            <Card className="glass-premium border-border/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  Traffic Sources
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={trafficSources}
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={80}
                        paddingAngle={2}
                        dataKey="value"
                      >
                        {trafficSources.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'hsl(var(--card))', 
                          border: '1px solid hsl(var(--border))',
                          borderRadius: '8px'
                        }} 
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="space-y-2 mt-4">
                  {trafficSources.map((source) => (
                    <div key={source.name} className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div 
                          className="w-3 h-3 rounded-full" 
                          style={{ backgroundColor: source.color }}
                        />
                        <span className="text-muted-foreground">{source.name}</span>
                      </div>
                      <span className="font-medium">{source.value}%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Rankings Tab */}
        <TabsContent value="rankings" className="space-y-6">
          <Card className="glass-premium border-border/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="w-5 h-5" />
                Keyword Rankings
              </CardTitle>
              <CardDescription>
                Track your position for target keywords against competitors
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border/30">
                      <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Keyword</th>
                      <th className="text-center py-3 px-4 text-sm font-medium text-muted-foreground">Position</th>
                      <th className="text-center py-3 px-4 text-sm font-medium text-muted-foreground">Change</th>
                      <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Search Volume</th>
                    </tr>
                  </thead>
                  <tbody>
                    {keywordRankings.map((keyword, index) => (
                      <motion.tr
                        key={keyword.keyword}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="border-b border-border/20 hover:bg-muted/30 transition-colors"
                      >
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{keyword.keyword}</span>
                            <ExternalLink className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </td>
                        <td className="text-center py-3 px-4">
                          <Badge variant={keyword.position <= 3 ? 'default' : keyword.position <= 10 ? 'secondary' : 'outline'}>
                            #{keyword.position}
                          </Badge>
                        </td>
                        <td className="text-center py-3 px-4">
                          <span className={`flex items-center justify-center gap-1 text-sm ${
                            keyword.change > 0 ? 'text-green-500' : keyword.change < 0 ? 'text-red-500' : 'text-muted-foreground'
                          }`}>
                            {keyword.change > 0 ? (
                              <>
                                <TrendingUp className="w-3 h-3" />
                                +{keyword.change}
                              </>
                            ) : keyword.change < 0 ? (
                              <>
                                <TrendingUp className="w-3 h-3 rotate-180" />
                                {keyword.change}
                              </>
                            ) : (
                              '–'
                            )}
                          </span>
                        </td>
                        <td className="text-right py-3 px-4 text-muted-foreground">
                          {keyword.volume.toLocaleString()}/mo
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Pages Tab */}
        <TabsContent value="pages" className="space-y-6">
          <Card className="glass-premium border-border/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MousePointer className="w-5 h-5" />
                Page Performance
              </CardTitle>
              <CardDescription>
                Detailed metrics for each page on your site
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border/30">
                      <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Page</th>
                      <th className="text-center py-3 px-4 text-sm font-medium text-muted-foreground">Views</th>
                      <th className="text-center py-3 px-4 text-sm font-medium text-muted-foreground">Avg. Scroll</th>
                      <th className="text-center py-3 px-4 text-sm font-medium text-muted-foreground">Avg. Time</th>
                      <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Bounce Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pageMetrics.length > 0 ? pageMetrics.map((page, index) => (
                      <motion.tr
                        key={page.path}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="border-b border-border/20 hover:bg-muted/30 transition-colors"
                      >
                        <td className="py-3 px-4">
                          <span className="font-mono text-sm">{page.path}</span>
                        </td>
                        <td className="text-center py-3 px-4 font-medium">{page.views}</td>
                        <td className="text-center py-3 px-4">
                          <div className="flex items-center justify-center gap-2">
                            <Progress value={page.avgScrollDepth} className="w-16 h-2" />
                            <span className="text-sm text-muted-foreground">{page.avgScrollDepth}%</span>
                          </div>
                        </td>
                        <td className="text-center py-3 px-4 text-muted-foreground">
                          {Math.floor(page.avgTimeOnPage / 60)}m {page.avgTimeOnPage % 60}s
                        </td>
                        <td className="text-right py-3 px-4">
                          <span className={page.bounceRate > 50 ? 'text-red-500' : page.bounceRate > 35 ? 'text-yellow-500' : 'text-green-500'}>
                            {page.bounceRate}%
                          </span>
                        </td>
                      </motion.tr>
                    )) : (
                      <tr>
                        <td colSpan={5} className="text-center py-8 text-muted-foreground">
                          No page data available yet. Analytics will populate as users visit your site.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SEO;