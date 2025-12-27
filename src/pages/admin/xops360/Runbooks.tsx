import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Plus, Search, Play, Pause, Clock, CheckCircle2, AlertTriangle } from 'lucide-react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { toast } from '@/hooks/use-toast';
import { PremiumCard } from '@/components/PremiumCard';

const categories = [
  { value: 'cloudops', label: 'CloudOps', color: 'bg-primary/10 text-primary' },
  { value: 'finops', label: 'FinOps', color: 'bg-emerald-500/10 text-emerald-400' },
  { value: 'secops', label: 'SecOps', color: 'bg-rose-500/10 text-rose-400' },
  { value: 'devops', label: 'DevOps', color: 'bg-blue-500/10 text-blue-400' },
  { value: 'dataops', label: 'DataOps', color: 'bg-purple-500/10 text-purple-400' },
  { value: 'mlops', label: 'MLOps', color: 'bg-amber-500/10 text-amber-400' },
];

const Runbooks: React.FC = () => {
  const queryClient = useQueryClient();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: 'cloudops',
    trigger_type: 'manual',
    status: 'draft',
  });

  const { data: runbooks, isLoading } = useQuery({
    queryKey: ['xops360-runbooks', searchTerm, filterCategory],
    queryFn: async () => {
      let query = supabase.from('xops360_runbooks').select('*').order('created_at', { ascending: false });

      if (searchTerm) {
        query = query.ilike('name', `%${searchTerm}%`);
      }
      if (filterCategory !== 'all') {
        query = query.eq('category', filterCategory);
      }

      const { data, error } = await query;
      if (error) throw error;
      return data;
    },
  });

  const createMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const { error } = await supabase.from('xops360_runbooks').insert(data);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['xops360-runbooks'] });
      setIsDialogOpen(false);
      setFormData({ name: '', description: '', category: 'cloudops', trigger_type: 'manual', status: 'draft' });
      toast({ title: 'Runbook created successfully' });
    },
    onError: () => {
      toast({ title: 'Failed to create runbook', variant: 'destructive' });
    },
  });

  const toggleStatusMutation = useMutation({
    mutationFn: async ({ id, status }: { id: string; status: string }) => {
      const newStatus = status === 'active' ? 'paused' : 'active';
      const { error } = await supabase.from('xops360_runbooks').update({ status: newStatus }).eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['xops360-runbooks'] });
      toast({ title: 'Runbook status updated' });
    },
  });

  const getCategoryColor = (category: string) => {
    return categories.find((c) => c.value === category)?.color || 'bg-muted text-muted-foreground';
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active': return <CheckCircle2 className="w-4 h-4 text-emerald-400" />;
      case 'paused': return <Pause className="w-4 h-4 text-amber-400" />;
      case 'draft': return <Clock className="w-4 h-4 text-muted-foreground" />;
      default: return <AlertTriangle className="w-4 h-4 text-rose-400" />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-heading text-3xl font-bold text-foreground mb-2">Automation Runbooks</h1>
          <p className="text-muted-foreground">Manage Xops360 automation workflows</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-primary hover:bg-primary/90 gap-2">
              <Plus className="w-4 h-4" />
              Create Runbook
            </Button>
          </DialogTrigger>
          <DialogContent className="glass-premium border-border/30">
            <DialogHeader>
              <DialogTitle className="font-heading text-xl">Create Automation Runbook</DialogTitle>
            </DialogHeader>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                createMutation.mutate(formData);
              }}
              className="space-y-6 mt-4"
            >
              <div>
                <Label>Runbook Name *</Label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-1 bg-muted/50"
                  placeholder="e.g., Auto-scale EC2 instances"
                  required
                />
              </div>
              <div>
                <Label>Description</Label>
                <Textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="mt-1 bg-muted/50"
                  rows={3}
                  placeholder="Describe what this runbook does..."
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Category *</Label>
                  <Select value={formData.category} onValueChange={(v) => setFormData({ ...formData, category: v })}>
                    <SelectTrigger className="mt-1 bg-muted/50">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat.value} value={cat.value}>{cat.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Trigger Type</Label>
                  <Select value={formData.trigger_type} onValueChange={(v) => setFormData({ ...formData, trigger_type: v })}>
                    <SelectTrigger className="mt-1 bg-muted/50">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="manual">Manual</SelectItem>
                      <SelectItem value="scheduled">Scheduled</SelectItem>
                      <SelectItem value="event">Event-based</SelectItem>
                      <SelectItem value="alert">Alert-triggered</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex justify-end gap-3">
                <Button type="button" variant="ghost" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" className="bg-primary hover:bg-primary/90">
                  Create Runbook
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Category Stats */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {categories.map((cat) => {
          const count = runbooks?.filter((r) => r.category === cat.value && r.status === 'active').length || 0;
          return (
            <div
              key={cat.value}
              className={`p-4 rounded-xl text-center cursor-pointer transition-all ${
                filterCategory === cat.value ? 'ring-2 ring-primary' : ''
              } ${cat.color}`}
              onClick={() => setFilterCategory(filterCategory === cat.value ? 'all' : cat.value)}
            >
              <p className="font-heading text-2xl font-bold">{count}</p>
              <p className="text-xs">{cat.label}</p>
            </div>
          );
        })}
      </div>

      {/* Filters */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search runbooks..."
            className="pl-10 bg-muted/50"
          />
        </div>
      </div>

      {/* Runbooks Grid */}
      {isLoading ? (
        <div className="flex items-center justify-center py-12">
          <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
        </div>
      ) : runbooks && runbooks.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {runbooks.map((runbook, index) => (
            <motion.div
              key={runbook.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <PremiumCard className="h-full">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Zap className="w-5 h-5 text-primary" />
                      </div>
                      {getStatusIcon(runbook.status)}
                    </div>
                    <span className={`px-2 py-1 rounded-md text-xs font-medium ${getCategoryColor(runbook.category)}`}>
                      {runbook.category}
                    </span>
                  </div>

                  <h3 className="font-heading font-semibold text-foreground mb-2">{runbook.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {runbook.description || 'No description'}
                  </p>

                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span>Trigger: {runbook.trigger_type}</span>
                    <span>{runbook.execution_count || 0} runs</span>
                  </div>

                  {runbook.status !== 'draft' && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full"
                      onClick={() => toggleStatusMutation.mutate({ id: runbook.id, status: runbook.status })}
                    >
                      {runbook.status === 'active' ? (
                        <>
                          <Pause className="w-4 h-4 mr-2" /> Pause
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4 mr-2" /> Activate
                        </>
                      )}
                    </Button>
                  )}
                </div>
              </PremiumCard>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="glass-premium rounded-2xl p-12 text-center">
          <Zap className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="font-heading text-lg font-semibold text-foreground mb-2">No runbooks yet</h3>
          <p className="text-muted-foreground mb-4">Create your first automation runbook</p>
          <Button onClick={() => setIsDialogOpen(true)} className="bg-primary hover:bg-primary/90 gap-2">
            <Plus className="w-4 h-4" />
            Create Runbook
          </Button>
        </div>
      )}
    </div>
  );
};

export default Runbooks;
