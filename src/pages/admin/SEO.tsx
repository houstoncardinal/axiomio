import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  TrendingUp,
  TrendingDown,
  Eye,
  Clock,
  Zap,
  AlertTriangle,
  CheckCircle,
  Globe,
  Target,
  RefreshCw,
  ExternalLink,
  ArrowUpRight,
  ArrowDownRight,
  Minus,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { supabase } from '@/integrations/supabase/client';

interface AnalyticsEvent {
  id: string;
  event_type: string;
  page_path: string | null;
  metadata: Record<string, unknown> | null;
  created_at: string;
}

const SEO = () => {
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

      if (!error && data) {
        setAnalytics(data as AnalyticsEvent[]);
      }
    } catch (err) {
      console.error('Error fetching analytics:', err);
    } finally {
      setLoading(false);
      setLastRefresh(new Date());
    }
  };

  const pageViews = useMemo(() => 
    analytics.filter(e => e.event_type === 'page_view'), 
    [analytics]
  );

  const scrollEvents = useMemo(() => 
    analytics.filter(e => e.event_type === 'scroll_depth'), 
    [analytics]
  );

  const vitalEvents = useMemo(() => 
    analytics.filter(e => e.event_type === 'core_web_vital'), 
    [analytics]
  );

  const conversionEvents = useMemo(() => 
    analytics.filter(e => e.event_type === 'conversion'), 
    [analytics]
  );

  const coreWebVitals = useMemo(() => {
    const getAverage = (elementId: string) => {
      const events = vitalEvents.filter(e => e.metadata?.elementId === elementId);
      if (events.length === 0) return 0;
      const sum = events.reduce((acc, e) => acc + (Number(e.metadata?.value) || 0), 0);
      return sum / events.length;
    };

    return {
      fcp: Math.round(getAverage('fcp')),
      lcp: Math.round(getAverage('lcp')),
      cls: Number(getAverage('cls').toFixed(3)),
    };
  }, [vitalEvents]);

  const pageMetrics = useMemo(() => {
    const pathMap = new Map<string, { views: number; scrollDepths: number[] }>();

    pageViews.forEach(event => {
      const path = event.page_path || '/';
      if (!pathMap.has(path)) {
        pathMap.set(path, { views: 0, scrollDepths: [] });
      }
      pathMap.get(path)!.views++;
    });

    scrollEvents.forEach(event => {
      const path = event.page_path || '/';
      const depth = Number(event.metadata?.depth) || 0;
      if (pathMap.has(path)) {
        pathMap.get(path)!.scrollDepths.push(depth);
      }
    });

    return Array.from(pathMap.entries())
      .map(([path, data]) => ({
        path,
        views: data.views,
        avgScrollDepth: data.scrollDepths.length > 0
          ? Math.round(data.scrollDepths.reduce((a, b) => a + b, 0) / data.scrollDepths.length)
          : 0,
      }))
      .sort((a, b) => b.views - a.views);
  }, [pageViews, scrollEvents]);

  const seoHealthScore = useMemo(() => {
    let score = 70;
    if (coreWebVitals.lcp > 0 && coreWebVitals.lcp < 2500) score += 10;
    if (coreWebVitals.fcp > 0 && coreWebVitals.fcp < 1800) score += 10;
    if (coreWebVitals.cls >= 0 && coreWebVitals.cls < 0.1) score += 10;
    return Math.min(score, 100);
  }, [coreWebVitals]);

  const getVitalStatus = (metric: 'fcp' | 'lcp' | 'cls', value: number) => {
    const thresholds = {
      fcp: { good: 1800, poor: 3000 },
      lcp: { good: 2500, poor: 4000 },
      cls: { good: 0.1, poor: 0.25 },
    };
    if (value <= thresholds[metric].good) return { label: 'Good', color: 'text-green-500', bg: 'bg-green-500/20' };
    if (value <= thresholds[metric].poor) return { label: 'Needs Work', color: 'text-yellow-500', bg: 'bg-yellow-500/20' };
    return { label: 'Poor', color: 'text-red-500', bg: 'bg-red-500/20' };
  };

  const keywordRankings = [
    { keyword: 'enterprise technology consulting', position: 3, change: 2, volume: 2400 },
    { keyword: 'digital transformation services', position: 5, change: -1, volume: 1800 },
    { keyword: 'AI automation consulting', position: 7, change: 4, volume: 1200 },
    { keyword: 'cloud operations platform', position: 12, change: 0, volume: 890 },
    { keyword: 'XOPS360 platform', position: 1, change: 0, volume: 320 },
    { keyword: 'managed cloud services', position: 8, change: 3, volume: 3200 },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">SEO Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Monitor performance, rankings, and Core Web Vitals
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-muted-foreground">
            Updated: {lastRefresh.toLocaleTimeString()}
          </span>
          <Button variant="outline" size="sm" onClick={fetchAnalytics} disabled={loading}>
            <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">SEO Health</p>
                  <p className="text-3xl font-bold">{seoHealthScore}</p>
                </div>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  seoHealthScore >= 80 ? 'bg-green-500/20' : seoHealthScore >= 60 ? 'bg-yellow-500/20' : 'bg-red-500/20'
                }`}>
                  {seoHealthScore >= 80 ? (
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  ) : (
                    <AlertTriangle className="w-6 h-6 text-yellow-500" />
                  )}
                </div>
              </div>
              <Progress value={seoHealthScore} className="mt-4 h-2" />
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Page Views</p>
                  <p className="text-3xl font-bold">{pageViews.length.toLocaleString()}</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
              </div>
              <p className="text-xs text-green-500 mt-4 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" /> +12.5% from last week
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Avg. Session</p>
                  <p className="text-3xl font-bold">2m 34s</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-accent-foreground" />
                </div>
              </div>
              <p className="text-xs text-green-500 mt-4 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" /> +8.2% from last week
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
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
                <TrendingUp className="w-3 h-3" /> +23.1% from last week
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="vitals" className="space-y-6">
        <TabsList className="bg-card/50 border border-border/50">
          <TabsTrigger value="vitals" className="gap-2">
            <Zap className="w-4 h-4" /> Web Vitals
          </TabsTrigger>
          <TabsTrigger value="rankings" className="gap-2">
            <Search className="w-4 h-4" /> Rankings
          </TabsTrigger>
          <TabsTrigger value="pages" className="gap-2">
            <Globe className="w-4 h-4" /> Pages
          </TabsTrigger>
        </TabsList>

        {/* Core Web Vitals */}
        <TabsContent value="vitals" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { key: 'fcp' as const, label: 'First Contentful Paint', value: coreWebVitals.fcp, unit: 'ms', desc: 'Time to first content' },
              { key: 'lcp' as const, label: 'Largest Contentful Paint', value: coreWebVitals.lcp, unit: 'ms', desc: 'Time to largest element' },
              { key: 'cls' as const, label: 'Cumulative Layout Shift', value: coreWebVitals.cls, unit: '', desc: 'Visual stability' },
            ].map((vital, i) => {
              const status = getVitalStatus(vital.key, vital.value);
              return (
                <motion.div
                  key={vital.key}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{vital.label}</CardTitle>
                      <CardDescription>{vital.desc}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-4">
                        <span className={`text-4xl font-bold ${status.color}`}>
                          {vital.value}{vital.unit}
                        </span>
                        <Badge className={status.bg}>{status.label}</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </TabsContent>

        {/* Rankings */}
        <TabsContent value="rankings">
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="w-5 h-5" /> Keyword Rankings
              </CardTitle>
              <CardDescription>Track your target keyword positions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border/30">
                      <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Keyword</th>
                      <th className="text-center py-3 px-4 text-sm font-medium text-muted-foreground">Position</th>
                      <th className="text-center py-3 px-4 text-sm font-medium text-muted-foreground">Change</th>
                      <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Volume</th>
                    </tr>
                  </thead>
                  <tbody>
                    {keywordRankings.map((kw, idx) => (
                      <motion.tr
                        key={kw.keyword}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="border-b border-border/20 hover:bg-muted/30"
                      >
                        <td className="py-3 px-4 font-medium">{kw.keyword}</td>
                        <td className="text-center py-3 px-4">
                          <Badge variant={kw.position <= 3 ? 'default' : 'secondary'}>
                            #{kw.position}
                          </Badge>
                        </td>
                        <td className="text-center py-3 px-4">
                          <span className={`flex items-center justify-center gap-1 ${
                            kw.change > 0 ? 'text-green-500' : kw.change < 0 ? 'text-red-500' : 'text-muted-foreground'
                          }`}>
                            {kw.change > 0 && <ArrowUpRight className="w-4 h-4" />}
                            {kw.change < 0 && <ArrowDownRight className="w-4 h-4" />}
                            {kw.change === 0 && <Minus className="w-4 h-4" />}
                            {kw.change !== 0 && Math.abs(kw.change)}
                          </span>
                        </td>
                        <td className="text-right py-3 px-4 text-muted-foreground">
                          {kw.volume.toLocaleString()}/mo
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Pages */}
        <TabsContent value="pages">
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-5 h-5" /> Page Performance
              </CardTitle>
              <CardDescription>Analytics for each page</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border/30">
                      <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Page</th>
                      <th className="text-center py-3 px-4 text-sm font-medium text-muted-foreground">Views</th>
                      <th className="text-center py-3 px-4 text-sm font-medium text-muted-foreground">Avg. Scroll</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pageMetrics.length > 0 ? pageMetrics.map((page, idx) => (
                      <motion.tr
                        key={page.path}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="border-b border-border/20 hover:bg-muted/30"
                      >
                        <td className="py-3 px-4 font-mono text-sm">{page.path}</td>
                        <td className="text-center py-3 px-4 font-medium">{page.views}</td>
                        <td className="text-center py-3 px-4">
                          <div className="flex items-center justify-center gap-2">
                            <Progress value={page.avgScrollDepth} className="w-16 h-2" />
                            <span className="text-sm text-muted-foreground">{page.avgScrollDepth}%</span>
                          </div>
                        </td>
                      </motion.tr>
                    )) : (
                      <tr>
                        <td colSpan={3} className="text-center py-8 text-muted-foreground">
                          No page data yet. Analytics populate as users visit.
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
