import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Plus, Search, Mail, Building2, TrendingUp, Calendar } from 'lucide-react';
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

const Leads: React.FC = () => {
  const queryClient = useQueryClient();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const [formData, setFormData] = useState({
    company_name: '',
    lead_type: 'unknown',
    source: '',
    status: 'new',
    contact_name: '',
    contact_email: '',
    contact_phone: '',
    contact_role: '',
    company_size: '',
    estimated_cloud_spend: '',
    timeline: '',
    notes: '',
  });

  const { data: leads, isLoading } = useQuery({
    queryKey: ['leads', searchTerm, filterStatus],
    queryFn: async () => {
      let query = supabase.from('leads').select('*').order('created_at', { ascending: false });

      if (searchTerm) {
        query = query.or(`company_name.ilike.%${searchTerm}%,contact_name.ilike.%${searchTerm}%`);
      }
      if (filterStatus !== 'all') {
        query = query.eq('status', filterStatus);
      }

      const { data, error } = await query;
      if (error) throw error;
      return data;
    },
  });

  const createMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const { error } = await supabase.from('leads').insert(data);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['leads'] });
      setIsDialogOpen(false);
      setFormData({
        company_name: '',
        lead_type: 'unknown',
        source: '',
        status: 'new',
        contact_name: '',
        contact_email: '',
        contact_phone: '',
        contact_role: '',
        company_size: '',
        estimated_cloud_spend: '',
        timeline: '',
        notes: '',
      });
      toast({ title: 'Lead created successfully' });
    },
    onError: () => {
      toast({ title: 'Failed to create lead', variant: 'destructive' });
    },
  });

  const updateStatusMutation = useMutation({
    mutationFn: async ({ id, status }: { id: string; status: string }) => {
      const { error } = await supabase.from('leads').update({ status, updated_at: new Date().toISOString() }).eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['leads'] });
      toast({ title: 'Status updated' });
    },
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-primary/10 text-primary';
      case 'contacted': return 'bg-blue-500/10 text-blue-400';
      case 'qualified': return 'bg-amber-500/10 text-amber-400';
      case 'proposal': return 'bg-purple-500/10 text-purple-400';
      case 'negotiation': return 'bg-orange-500/10 text-orange-400';
      case 'won': return 'bg-emerald-500/10 text-emerald-400';
      case 'lost': return 'bg-rose-500/10 text-rose-400';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'msp': return 'bg-secondary/10 text-secondary';
      case 'enterprise': return 'bg-blue-500/10 text-blue-400';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const statusSteps = ['new', 'contacted', 'qualified', 'proposal', 'negotiation', 'won'];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-heading text-3xl font-bold text-foreground mb-2">Lead Pipeline</h1>
          <p className="text-muted-foreground">Track and manage your sales pipeline</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-primary hover:bg-primary/90 gap-2">
              <Plus className="w-4 h-4" />
              Add Lead
            </Button>
          </DialogTrigger>
          <DialogContent className="glass-premium border-border/30 max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="font-heading text-xl">Add New Lead</DialogTitle>
            </DialogHeader>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                createMutation.mutate(formData);
              }}
              className="space-y-6 mt-4"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <Label>Company Name *</Label>
                  <Input
                    value={formData.company_name}
                    onChange={(e) => setFormData({ ...formData, company_name: e.target.value })}
                    className="mt-1 bg-muted/50"
                    required
                  />
                </div>
                <div>
                  <Label>Lead Type</Label>
                  <Select value={formData.lead_type} onValueChange={(v) => setFormData({ ...formData, lead_type: v })}>
                    <SelectTrigger className="mt-1 bg-muted/50">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="msp">MSP</SelectItem>
                      <SelectItem value="enterprise">Enterprise</SelectItem>
                      <SelectItem value="unknown">Unknown</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Source</Label>
                  <Input
                    value={formData.source}
                    onChange={(e) => setFormData({ ...formData, source: e.target.value })}
                    className="mt-1 bg-muted/50"
                    placeholder="e.g., Website, Referral, Event"
                  />
                </div>
                <div>
                  <Label>Contact Name *</Label>
                  <Input
                    value={formData.contact_name}
                    onChange={(e) => setFormData({ ...formData, contact_name: e.target.value })}
                    className="mt-1 bg-muted/50"
                    required
                  />
                </div>
                <div>
                  <Label>Contact Email *</Label>
                  <Input
                    type="email"
                    value={formData.contact_email}
                    onChange={(e) => setFormData({ ...formData, contact_email: e.target.value })}
                    className="mt-1 bg-muted/50"
                    required
                  />
                </div>
                <div>
                  <Label>Contact Role</Label>
                  <Input
                    value={formData.contact_role}
                    onChange={(e) => setFormData({ ...formData, contact_role: e.target.value })}
                    className="mt-1 bg-muted/50"
                    placeholder="e.g., CTO, VP Engineering"
                  />
                </div>
                <div>
                  <Label>Estimated Cloud Spend</Label>
                  <Input
                    value={formData.estimated_cloud_spend}
                    onChange={(e) => setFormData({ ...formData, estimated_cloud_spend: e.target.value })}
                    className="mt-1 bg-muted/50"
                    placeholder="e.g., $50K-100K/mo"
                  />
                </div>
                <div className="col-span-2">
                  <Label>Notes</Label>
                  <Textarea
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="mt-1 bg-muted/50"
                    rows={3}
                    placeholder="Initial conversation notes..."
                  />
                </div>
              </div>

              <div className="flex justify-end gap-3">
                <Button type="button" variant="ghost" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" className="bg-primary hover:bg-primary/90">
                  Create Lead
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Pipeline Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {statusSteps.concat(['lost']).map((status) => {
          const count = leads?.filter((l) => l.status === status).length || 0;
          return (
            <div
              key={status}
              className={`p-4 rounded-xl text-center cursor-pointer transition-all ${
                filterStatus === status ? 'ring-2 ring-primary' : ''
              } ${getStatusColor(status)}`}
              onClick={() => setFilterStatus(filterStatus === status ? 'all' : status)}
            >
              <p className="font-heading text-2xl font-bold">{count}</p>
              <p className="text-xs capitalize">{status}</p>
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
            placeholder="Search leads..."
            className="pl-10 bg-muted/50"
          />
        </div>
      </div>

      {/* Leads List */}
      {isLoading ? (
        <div className="flex items-center justify-center py-12">
          <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
        </div>
      ) : leads && leads.length > 0 ? (
        <div className="space-y-4">
          {leads.map((lead, index) => (
            <motion.div
              key={lead.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.03 }}
            >
              <PremiumCard>
                <div className="p-6 flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-heading font-semibold text-foreground">{lead.company_name}</h3>
                      <p className="text-sm text-muted-foreground">{lead.contact_name} • {lead.contact_role}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className={`px-2 py-1 rounded-md text-xs font-medium uppercase ${getTypeColor(lead.lead_type)}`}>
                      {lead.lead_type}
                    </span>
                    <span className={`px-2 py-1 rounded-md text-xs font-medium capitalize ${getStatusColor(lead.status)}`}>
                      {lead.status}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Select
                      value={lead.status}
                      onValueChange={(v) => updateStatusMutation.mutate({ id: lead.id, status: v })}
                    >
                      <SelectTrigger className="w-[140px] bg-muted/50">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">New</SelectItem>
                        <SelectItem value="contacted">Contacted</SelectItem>
                        <SelectItem value="qualified">Qualified</SelectItem>
                        <SelectItem value="proposal">Proposal</SelectItem>
                        <SelectItem value="negotiation">Negotiation</SelectItem>
                        <SelectItem value="won">Won</SelectItem>
                        <SelectItem value="lost">Lost</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </PremiumCard>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="glass-premium rounded-2xl p-12 text-center">
          <Target className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="font-heading text-lg font-semibold text-foreground mb-2">No leads yet</h3>
          <p className="text-muted-foreground mb-4">Start building your pipeline</p>
          <Button onClick={() => setIsDialogOpen(true)} className="bg-primary hover:bg-primary/90 gap-2">
            <Plus className="w-4 h-4" />
            Add Lead
          </Button>
        </div>
      )}
    </div>
  );
};

export default Leads;
