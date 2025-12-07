import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Plus, Search, Filter, MoreVertical, Mail, Phone, Users, DollarSign } from 'lucide-react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { toast } from '@/hooks/use-toast';
import { PremiumCard } from '@/components/PremiumCard';

const XOPS360Clients: React.FC = () => {
  const queryClient = useQueryClient();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const [formData, setFormData] = useState({
    company_name: '',
    client_type: 'enterprise',
    industry: '',
    company_size: '',
    cloud_spend_monthly: '',
    primary_cloud: [] as string[],
    status: 'prospect',
    primary_contact_name: '',
    primary_contact_email: '',
    primary_contact_role: '',
    engineers_count: '',
    clients_managed: '',
  });

  const { data: clients, isLoading } = useQuery({
    queryKey: ['xops360-clients', searchTerm, filterType, filterStatus],
    queryFn: async () => {
      let query = supabase.from('xops360_clients').select('*').order('created_at', { ascending: false });

      if (searchTerm) {
        query = query.ilike('company_name', `%${searchTerm}%`);
      }
      if (filterType !== 'all') {
        query = query.eq('client_type', filterType);
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
      const { error } = await supabase.from('xops360_clients').insert({
        ...data,
        cloud_spend_monthly: data.cloud_spend_monthly ? parseFloat(data.cloud_spend_monthly) : null,
        engineers_count: data.engineers_count ? parseInt(data.engineers_count) : null,
        clients_managed: data.clients_managed ? parseInt(data.clients_managed) : null,
      });
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['xops360-clients'] });
      setIsDialogOpen(false);
      setFormData({
        company_name: '',
        client_type: 'enterprise',
        industry: '',
        company_size: '',
        cloud_spend_monthly: '',
        primary_cloud: [],
        status: 'prospect',
        primary_contact_name: '',
        primary_contact_email: '',
        primary_contact_role: '',
        engineers_count: '',
        clients_managed: '',
      });
      toast({ title: 'Client created successfully' });
    },
    onError: () => {
      toast({ title: 'Failed to create client', variant: 'destructive' });
    },
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-emerald-500/10 text-emerald-400';
      case 'onboarding': return 'bg-amber-500/10 text-amber-400';
      case 'prospect': return 'bg-primary/10 text-primary';
      case 'churned': return 'bg-rose-500/10 text-rose-400';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getTypeColor = (type: string) => {
    return type === 'msp' ? 'bg-secondary/10 text-secondary' : 'bg-blue-500/10 text-blue-400';
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-heading text-3xl font-bold text-foreground mb-2">XOPS360 Clients</h1>
          <p className="text-muted-foreground">Manage your XOPS360 platform clients</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-primary hover:bg-primary/90 gap-2">
              <Plus className="w-4 h-4" />
              Add Client
            </Button>
          </DialogTrigger>
          <DialogContent className="glass-premium border-border/30 max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="font-heading text-xl">Add New XOPS360 Client</DialogTitle>
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
                  <Label>Client Type *</Label>
                  <Select value={formData.client_type} onValueChange={(v) => setFormData({ ...formData, client_type: v })}>
                    <SelectTrigger className="mt-1 bg-muted/50">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="msp">MSP</SelectItem>
                      <SelectItem value="enterprise">Enterprise</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Status</Label>
                  <Select value={formData.status} onValueChange={(v) => setFormData({ ...formData, status: v })}>
                    <SelectTrigger className="mt-1 bg-muted/50">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="prospect">Prospect</SelectItem>
                      <SelectItem value="onboarding">Onboarding</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="churned">Churned</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Industry</Label>
                  <Input
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="mt-1 bg-muted/50"
                    placeholder="e.g., FinTech, Healthcare"
                  />
                </div>
                <div>
                  <Label>Company Size</Label>
                  <Input
                    value={formData.company_size}
                    onChange={(e) => setFormData({ ...formData, company_size: e.target.value })}
                    className="mt-1 bg-muted/50"
                    placeholder="e.g., 50-200 employees"
                  />
                </div>
                <div>
                  <Label>Monthly Cloud Spend ($)</Label>
                  <Input
                    type="number"
                    value={formData.cloud_spend_monthly}
                    onChange={(e) => setFormData({ ...formData, cloud_spend_monthly: e.target.value })}
                    className="mt-1 bg-muted/50"
                    placeholder="e.g., 50000"
                  />
                </div>
                <div>
                  <Label>Engineers Count</Label>
                  <Input
                    type="number"
                    value={formData.engineers_count}
                    onChange={(e) => setFormData({ ...formData, engineers_count: e.target.value })}
                    className="mt-1 bg-muted/50"
                  />
                </div>
              </div>

              <div className="border-t border-border/30 pt-4">
                <h3 className="font-medium text-foreground mb-4">Primary Contact</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Name</Label>
                    <Input
                      value={formData.primary_contact_name}
                      onChange={(e) => setFormData({ ...formData, primary_contact_name: e.target.value })}
                      className="mt-1 bg-muted/50"
                    />
                  </div>
                  <div>
                    <Label>Role</Label>
                    <Input
                      value={formData.primary_contact_role}
                      onChange={(e) => setFormData({ ...formData, primary_contact_role: e.target.value })}
                      className="mt-1 bg-muted/50"
                      placeholder="e.g., CTO, VP Engineering"
                    />
                  </div>
                  <div className="col-span-2">
                    <Label>Email</Label>
                    <Input
                      type="email"
                      value={formData.primary_contact_email}
                      onChange={(e) => setFormData({ ...formData, primary_contact_email: e.target.value })}
                      className="mt-1 bg-muted/50"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-3">
                <Button type="button" variant="ghost" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" className="bg-primary hover:bg-primary/90">
                  Create Client
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search clients..."
            className="pl-10 bg-muted/50"
          />
        </div>
        <Select value={filterType} onValueChange={setFilterType}>
          <SelectTrigger className="w-[150px] bg-muted/50">
            <SelectValue placeholder="Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="msp">MSP</SelectItem>
            <SelectItem value="enterprise">Enterprise</SelectItem>
          </SelectContent>
        </Select>
        <Select value={filterStatus} onValueChange={setFilterStatus}>
          <SelectTrigger className="w-[150px] bg-muted/50">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="prospect">Prospect</SelectItem>
            <SelectItem value="onboarding">Onboarding</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="churned">Churned</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Clients Grid */}
      {isLoading ? (
        <div className="flex items-center justify-center py-12">
          <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
        </div>
      ) : clients && clients.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client, index) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <PremiumCard className="h-full">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Building2 className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-foreground">{client.company_name}</h3>
                        <p className="text-sm text-muted-foreground">{client.industry || 'Industry not set'}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 mb-4">
                    <span className={`px-2 py-1 rounded-md text-xs font-medium uppercase ${getTypeColor(client.client_type)}`}>
                      {client.client_type}
                    </span>
                    <span className={`px-2 py-1 rounded-md text-xs font-medium capitalize ${getStatusColor(client.status)}`}>
                      {client.status}
                    </span>
                  </div>

                  <div className="space-y-2 text-sm">
                    {client.primary_contact_name && (
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="w-4 h-4" />
                        <span>{client.primary_contact_name}</span>
                      </div>
                    )}
                    {client.primary_contact_email && (
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Mail className="w-4 h-4" />
                        <span className="truncate">{client.primary_contact_email}</span>
                      </div>
                    )}
                    {client.cloud_spend_monthly && (
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <DollarSign className="w-4 h-4" />
                        <span>${Number(client.cloud_spend_monthly).toLocaleString()}/mo</span>
                      </div>
                    )}
                  </div>
                </div>
              </PremiumCard>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="glass-premium rounded-2xl p-12 text-center">
          <Building2 className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="font-heading text-lg font-semibold text-foreground mb-2">No clients yet</h3>
          <p className="text-muted-foreground mb-4">Add your first XOPS360 client to get started</p>
          <Button onClick={() => setIsDialogOpen(true)} className="bg-primary hover:bg-primary/90 gap-2">
            <Plus className="w-4 h-4" />
            Add Client
          </Button>
        </div>
      )}
    </div>
  );
};

export default XOPS360Clients;
