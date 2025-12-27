import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, TrendingUp, Eye, Zap, AlertTriangle, CheckCircle, Globe, Target, RefreshCw, ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { supabase } from '@/integrations/supabase/client';

type AnalyticsEvent = {
  id: string;
  event_type: string;
  page_path: string | null;
  metadata: Record<string, unknown> | null;
  created_at: string;
};

export default function SEO() {
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
        .limit(500);

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

  const pageViews = useMemo(() => analytics.filter(e => e.event_type === 'page_view'), [analytics]);
  const vitalEvents = useMemo(() => analytics.filter(e => e.event_type === 'core_web_vital'), [analytics]);
  const conversionEvents = useMemo(() => analytics.filter(e => e.event_type === 'conversion'), [analytics]);
  const scrollEvents = useMemo(() => analytics.filter(e => e.event_type === 'scroll_depth'), [analytics]);

  const coreWebVitals = useMemo(() => {
    const getAvg = (id: string) => {
      const evts = vitalEvents.filter(e => {
        const meta = e.metadata as Record<string, unknown> | null;
        return meta?.elementId === id;
      });
      if (!evts.length) return 0;
      return evts.reduce((acc, e) => {
        const meta = e.metadata as Record<string, unknown> | null;
        return acc + (Number(meta?.value) || 0);
      }, 0) / evts.length;
    };
    return { 
      fcp: Math.round(getAvg('fcp')), 
      lcp: Math.round(getAvg('lcp')), 
      cls: Number(getAvg('cls').toFixed(3)) 
    };
  }, [vitalEvents]);

  const pageMetrics = useMemo(() => {
    const map = new Map<string, { views: number; scrolls: number[] }>();
    pageViews.forEach(e => {
      const p = e.page_path || '/';
      if (!map.has(p)) map.set(p, { views: 0, scrolls: [] });
      const entry = map.get(p);
      if (entry) entry.views++;
    });
    scrollEvents.forEach(e => {
      const p = e.page_path || '/';
      const entry = map.get(p);
      if (entry) {
        const meta = e.metadata as Record<string, unknown> | null;
        entry.scrolls.push(Number(meta?.depth) || 0);
      }
    });
    return Array.from(map.entries()).map(([path, d]) => ({
      path, 
      views: d.views,
      avgScroll: d.scrolls.length ? Math.round(d.scrolls.reduce((a, b) => a + b, 0) / d.scrolls.length) : 0
    })).sort((a, b) => b.views - a.views);
  }, [pageViews, scrollEvents]);

  const healthScore = useMemo(() => {
    let s = 70;
    if (coreWebVitals.lcp > 0 && coreWebVitals.lcp < 2500) s += 10;
    if (coreWebVitals.fcp > 0 && coreWebVitals.fcp < 1800) s += 10;
    if (coreWebVitals.cls >= 0 && coreWebVitals.cls < 0.1) s += 10;
    return Math.min(s, 100);
  }, [coreWebVitals]);

  const getVitalStatus = (metric: 'fcp' | 'lcp' | 'cls', value: number) => {
    const thresholds = { 
      fcp: { good: 1800, poor: 3000 }, 
      lcp: { good: 2500, poor: 4000 }, 
      cls: { good: 0.1, poor: 0.25 } 
    };
    const t = thresholds[metric];
    if (value <= t.good) return { label: 'Good', color: 'text-green-500', bg: 'bg-green-500/20' };
    if (value <= t.poor) return { label: 'Needs Work', color: 'text-yellow-500', bg: 'bg-yellow-500/20' };
    return { label: 'Poor', color: 'text-red-500', bg: 'bg-red-500/20' };
  };

  const keywords = [
    { keyword: 'enterprise technology consulting', position: 3, change: 2, volume: 2400 },
    { keyword: 'digital transformation services', position: 5, change: -1, volume: 1800 },
    { keyword: 'AI automation consulting', position: 7, change: 4, volume: 1200 },
    { keyword: 'Xops360 platform', position: 1, change: 0, volume: 320 },
    { keyword: 'cloud operations platform', position: 12, change: 0, volume: 890 },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">SEO Dashboard</h1>
          <p className="text-muted-foreground mt-1">Monitor performance and rankings</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-muted-foreground">Updated: {lastRefresh.toLocaleTimeString()}</span>
          <Button variant="outline" size="sm" onClick={fetchAnalytics} disabled={loading}>
            <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">SEO Health</p>
                  <p className="text-3xl font-bold">{healthScore}</p>
                </div>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${healthScore >= 80 ? 'bg-green-500/20' : 'bg-yellow-500/20'}`}>
                  {healthScore >= 80 ? <CheckCircle className="w-6 h-6 text-green-500" /> : <AlertTriangle className="w-6 h-6 text-yellow-500" />}
                </div>
              </div>
              <Progress value={healthScore} className="mt-4 h-2" />
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
                <TrendingUp className="w-3 h-3" /> +12.5%
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
                  <Zap className="w-6 h-6 text-accent-foreground" />
                </div>
              </div>
              <p className="text-xs text-green-500 mt-4 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" /> +8.2%
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
                <TrendingUp className="w-3 h-3" /> +23.1%
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <Tabs defaultValue="vitals" className="space-y-6">
        <TabsList className="bg-card/50 border border-border/50">
          <TabsTrigger value="vitals">
            <Zap className="w-4 h-4 mr-1" /> Web Vitals
          </TabsTrigger>
          <TabsTrigger value="rankings">
            <Search className="w-4 h-4 mr-1" /> Rankings
          </TabsTrigger>
          <TabsTrigger value="pages">
            <Globe className="w-4 h-4 mr-1" /> Pages
          </TabsTrigger>
        </TabsList>

        <TabsContent value="vitals" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { key: 'fcp' as const, name: 'First Contentful Paint', value: coreWebVitals.fcp, unit: 'ms' },
              { key: 'lcp' as const, name: 'Largest Contentful Paint', value: coreWebVitals.lcp, unit: 'ms' },
              { key: 'cls' as const, name: 'Cumulative Layout Shift', value: coreWebVitals.cls, unit: '' },
            ].map((metric, index) => {
              const status = getVitalStatus(metric.key, metric.value);
              return (
                <motion.div 
                  key={metric.key} 
                  initial={{ opacity: 0, scale: 0.95 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{metric.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className={`text-4xl font-bold ${status.color}`}>
                          {metric.value}{metric.unit}
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

        <TabsContent value="rankings">
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>
                <Search className="w-5 h-5 inline mr-2" />
                Keyword Rankings
              </CardTitle>
              <CardDescription>Track target keyword positions</CardDescription>
            </CardHeader>
            <CardContent>
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/30">
                    <th className="text-left py-3 px-4 text-sm text-muted-foreground">Keyword</th>
                    <th className="text-center py-3 px-4 text-sm text-muted-foreground">Position</th>
                    <th className="text-center py-3 px-4 text-sm text-muted-foreground">Change</th>
                    <th className="text-right py-3 px-4 text-sm text-muted-foreground">Volume</th>
                  </tr>
                </thead>
                <tbody>
                  {keywords.map((item, index) => (
                    <motion.tr 
                      key={item.keyword} 
                      initial={{ opacity: 0 }} 
                      animate={{ opacity: 1 }} 
                      transition={{ delay: index * 0.05 }} 
                      className="border-b border-border/20 hover:bg-muted/30"
                    >
                      <td className="py-3 px-4 font-medium">{item.keyword}</td>
                      <td className="text-center py-3 px-4">
                        <Badge variant={item.position <= 3 ? 'default' : 'secondary'}>
                          #{item.position}
                        </Badge>
                      </td>
                      <td className="text-center py-3 px-4">
                        <span className={`flex items-center justify-center gap-1 ${
                          item.change > 0 ? 'text-green-500' : item.change < 0 ? 'text-red-500' : 'text-muted-foreground'
                        }`}>
                          {item.change > 0 && <ArrowUpRight className="w-4 h-4" />}
                          {item.change < 0 && <ArrowDownRight className="w-4 h-4" />}
                          {item.change === 0 && <Minus className="w-4 h-4" />}
                          {item.change !== 0 && Math.abs(item.change)}
                        </span>
                      </td>
                      <td className="text-right py-3 px-4 text-muted-foreground">
                        {item.volume.toLocaleString()}/mo
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pages">
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>
                <Globe className="w-5 h-5 inline mr-2" />
                Page Performance
              </CardTitle>
              <CardDescription>Analytics per page</CardDescription>
            </CardHeader>
            <CardContent>
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/30">
                    <th className="text-left py-3 px-4 text-sm text-muted-foreground">Page</th>
                    <th className="text-center py-3 px-4 text-sm text-muted-foreground">Views</th>
                    <th className="text-center py-3 px-4 text-sm text-muted-foreground">Avg. Scroll</th>
                  </tr>
                </thead>
                <tbody>
                  {pageMetrics.length > 0 ? pageMetrics.map((page, index) => (
                    <motion.tr 
                      key={page.path} 
                      initial={{ opacity: 0 }} 
                      animate={{ opacity: 1 }} 
                      transition={{ delay: index * 0.05 }} 
                      className="border-b border-border/20 hover:bg-muted/30"
                    >
                      <td className="py-3 px-4 font-mono text-sm">{page.path}</td>
                      <td className="text-center py-3 px-4 font-medium">{page.views}</td>
                      <td className="text-center py-3 px-4">
                        <div className="flex items-center justify-center gap-2">
                          <Progress value={page.avgScroll} className="w-16 h-2" />
                          <span className="text-sm text-muted-foreground">{page.avgScroll}%</span>
                        </div>
                      </td>
                    </motion.tr>
                  )) : (
                    <tr>
                      <td colSpan={3} className="text-center py-8 text-muted-foreground">
                        No data yet
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
