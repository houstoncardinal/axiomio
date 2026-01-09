import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Plus,
  Edit,
  Trash2,
  Eye,
  EyeOff,
  Star,
  StarOff,
  ExternalLink,
  Image as ImageIcon,
  X,
} from 'lucide-react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
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
  description: string;
  slug: string;
  image_url: string | null;
  metrics: CaseStudyMetric[];
  tags: string[];
  full_content: string | null;
  challenge: string | null;
  solution: string | null;
  results: string | null;
  is_published: boolean;
  published_at: string | null;
  featured: boolean;
  display_order: number;
  created_at: string;
  updated_at: string;
}

const ICON_OPTIONS = [
  { value: 'Zap', label: 'Zap (Lightning)' },
  { value: 'TrendingUp', label: 'Trending Up' },
  { value: 'TrendingDown', label: 'Trending Down' },
  { value: 'Clock', label: 'Clock' },
  { value: 'ShieldCheck', label: 'Shield Check' },
  { value: 'Users', label: 'Users' },
  { value: 'DollarSign', label: 'Dollar Sign' },
  { value: 'Percent', label: 'Percent' },
  { value: 'Server', label: 'Server' },
  { value: 'Cloud', label: 'Cloud' },
];

const INDUSTRY_OPTIONS = [
  'AI & Content Analytics',
  'EdTech & Learning Solutions',
  'IT Solutions Provider',
  'Supply Chain Management',
  'Insurance',
  'Legal Technology',
  'AI & Automation',
  'Healthcare',
  'Finance',
  'Retail',
  'Manufacturing',
  'Other',
];

const emptyCaseStudy = {
  client_name: '',
  industry: '',
  title: '',
  description: '',
  slug: '',
  image_url: '',
  metrics: [] as CaseStudyMetric[],
  tags: [] as string[],
  full_content: '',
  challenge: '',
  solution: '',
  results: '',
  is_published: false,
  featured: false,
  display_order: 0,
};

function transformRawCaseStudy(raw: {
  id: string;
  client_name: string;
  industry: string;
  title: string;
  description: string;
  slug: string;
  image_url: string | null;
  metrics: Json;
  tags: string[] | null;
  full_content: string | null;
  challenge: string | null;
  solution: string | null;
  results: string | null;
  is_published: boolean;
  published_at: string | null;
  featured: boolean;
  display_order: number | null;
  created_at: string;
  updated_at: string;
}): CaseStudy {
  return {
    ...raw,
    metrics: (raw.metrics as unknown as CaseStudyMetric[]) || [],
    tags: raw.tags || [],
    display_order: raw.display_order || 0,
  };
}

const CaseStudiesAdmin: React.FC = () => {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingStudy, setEditingStudy] = useState<CaseStudy | null>(null);
  const [formData, setFormData] = useState(emptyCaseStudy);
  const [newTag, setNewTag] = useState('');
  const [newMetric, setNewMetric] = useState<CaseStudyMetric>({ icon: 'Zap', value: '', label: '' });

  // Fetch case studies
  const { data: caseStudies, isLoading } = useQuery({
    queryKey: ['admin-case-studies'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('case_studies')
        .select('*')
        .order('display_order', { ascending: true });
      
      if (error) throw error;
      return (data || []).map(transformRawCaseStudy);
    },
  });

  // Create/Update mutation
  const saveMutation = useMutation({
    mutationFn: async (data: typeof formData & { id?: string }) => {
      const payload = {
        client_name: data.client_name,
        industry: data.industry,
        title: data.title,
        description: data.description,
        slug: data.slug,
        image_url: data.image_url || null,
        metrics: data.metrics as unknown as Json,
        tags: data.tags,
        full_content: data.full_content || null,
        challenge: data.challenge || null,
        solution: data.solution || null,
        results: data.results || null,
        is_published: data.is_published,
        featured: data.featured,
        display_order: data.display_order,
        updated_by: user?.id,
        ...(data.is_published && !editingStudy?.published_at ? { published_at: new Date().toISOString() } : {}),
      };

      if (editingStudy) {
        const { error } = await supabase
          .from('case_studies')
          .update(payload)
          .eq('id', editingStudy.id);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('case_studies')
          .insert({ ...payload, created_by: user?.id });
        if (error) throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-case-studies'] });
      toast.success(editingStudy ? 'Case study updated!' : 'Case study created!');
      handleCloseDialog();
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  // Delete mutation
  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from('case_studies').delete().eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-case-studies'] });
      toast.success('Case study deleted!');
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  // Toggle publish mutation
  const togglePublishMutation = useMutation({
    mutationFn: async ({ id, is_published }: { id: string; is_published: boolean }) => {
      const { error } = await supabase
        .from('case_studies')
        .update({ 
          is_published, 
          published_at: is_published ? new Date().toISOString() : null,
          updated_by: user?.id 
        })
        .eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-case-studies'] });
      toast.success('Publish status updated!');
    },
  });

  // Toggle featured mutation
  const toggleFeaturedMutation = useMutation({
    mutationFn: async ({ id, featured }: { id: string; featured: boolean }) => {
      const { error } = await supabase
        .from('case_studies')
        .update({ featured, updated_by: user?.id })
        .eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-case-studies'] });
      toast.success('Featured status updated!');
    },
  });

  const handleOpenDialog = (study?: CaseStudy) => {
    if (study) {
      setEditingStudy(study);
      setFormData({
        client_name: study.client_name,
        industry: study.industry,
        title: study.title,
        description: study.description,
        slug: study.slug,
        image_url: study.image_url || '',
        metrics: study.metrics || [],
        tags: study.tags || [],
        full_content: study.full_content || '',
        challenge: study.challenge || '',
        solution: study.solution || '',
        results: study.results || '',
        is_published: study.is_published,
        featured: study.featured,
        display_order: study.display_order,
      });
    } else {
      setEditingStudy(null);
      setFormData(emptyCaseStudy);
    }
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setEditingStudy(null);
    setFormData(emptyCaseStudy);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveMutation.mutate(formData);
  };

  const generateSlug = () => {
    const slug = formData.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    setFormData({ ...formData, slug });
  };

  const addTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      setFormData({ ...formData, tags: [...formData.tags, newTag.trim()] });
      setNewTag('');
    }
  };

  const removeTag = (tag: string) => {
    setFormData({ ...formData, tags: formData.tags.filter((t) => t !== tag) });
  };

  const addMetric = () => {
    if (newMetric.value && newMetric.label) {
      setFormData({ ...formData, metrics: [...formData.metrics, newMetric] });
      setNewMetric({ icon: 'Zap', value: '', label: '' });
    }
  };

  const removeMetric = (index: number) => {
    setFormData({ ...formData, metrics: formData.metrics.filter((_, i) => i !== index) });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Case Studies</h1>
          <p className="text-muted-foreground mt-1">
            Manage and publish client success stories
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="hero" onClick={() => handleOpenDialog()}>
              <Plus className="w-4 h-4 mr-2" />
              New Case Study
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingStudy ? 'Edit Case Study' : 'Create New Case Study'}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-6 mt-4">
              {/* Basic Info */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="client_name">Client Name *</Label>
                  <Input
                    id="client_name"
                    value={formData.client_name}
                    onChange={(e) => setFormData({ ...formData, client_name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="industry">Industry *</Label>
                  <Select
                    value={formData.industry}
                    onValueChange={(v) => setFormData({ ...formData, industry: v })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      {INDUSTRY_OPTIONS.map((ind) => (
                        <SelectItem key={ind} value={ind}>
                          {ind}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="slug">URL Slug *</Label>
                  <div className="flex gap-2">
                    <Input
                      id="slug"
                      value={formData.slug}
                      onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                      required
                      placeholder="e.g., client-name-project"
                    />
                    <Button type="button" variant="outline" onClick={generateSlug}>
                      Generate
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="display_order">Display Order</Label>
                  <Input
                    id="display_order"
                    type="number"
                    value={formData.display_order}
                    onChange={(e) => setFormData({ ...formData, display_order: parseInt(e.target.value) || 0 })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Short Description *</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={3}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="image_url">Featured Image URL</Label>
                <div className="flex gap-2">
                  <Input
                    id="image_url"
                    value={formData.image_url}
                    onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                    placeholder="https://..."
                  />
                  {formData.image_url && (
                    <div className="w-16 h-16 rounded-lg overflow-hidden border border-border flex-shrink-0">
                      <img src={formData.image_url} alt="Preview" className="w-full h-full object-cover" />
                    </div>
                  )}
                </div>
              </div>

              {/* Metrics */}
              <div className="space-y-3">
                <Label>Key Metrics</Label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {formData.metrics.map((metric, idx) => (
                    <Badge key={idx} variant="secondary" className="px-3 py-2 flex items-center gap-2">
                      <span className="font-semibold">{metric.value}</span>
                      <span className="text-muted-foreground">{metric.label}</span>
                      <button type="button" onClick={() => removeMetric(idx)}>
                        <X className="w-3 h-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Select
                    value={newMetric.icon}
                    onValueChange={(v) => setNewMetric({ ...newMetric, icon: v })}
                  >
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {ICON_OPTIONS.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Input
                    placeholder="Value (e.g., 87.5%)"
                    value={newMetric.value}
                    onChange={(e) => setNewMetric({ ...newMetric, value: e.target.value })}
                    className="w-32"
                  />
                  <Input
                    placeholder="Label (e.g., Time Reduction)"
                    value={newMetric.label}
                    onChange={(e) => setNewMetric({ ...newMetric, label: e.target.value })}
                    className="flex-1"
                  />
                  <Button type="button" variant="outline" onClick={addMetric}>
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Tags */}
              <div className="space-y-3">
                <Label>Tags</Label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {formData.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="px-3 py-1 flex items-center gap-2">
                      {tag}
                      <button type="button" onClick={() => removeTag(tag)}>
                        <X className="w-3 h-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input
                    placeholder="Add tag (e.g., AWS, DevOps)"
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                  />
                  <Button type="button" variant="outline" onClick={addTag}>
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Detailed Content */}
              <div className="space-y-4 border-t pt-4">
                <h3 className="font-semibold">Detailed Content (Optional)</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="challenge">Challenge</Label>
                  <Textarea
                    id="challenge"
                    value={formData.challenge}
                    onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                    rows={4}
                    placeholder="Describe the client's challenge..."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="solution">Solution</Label>
                  <Textarea
                    id="solution"
                    value={formData.solution}
                    onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                    rows={4}
                    placeholder="Describe how AXIOMIO solved the challenge..."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="results">Results</Label>
                  <Textarea
                    id="results"
                    value={formData.results}
                    onChange={(e) => setFormData({ ...formData, results: e.target.value })}
                    rows={4}
                    placeholder="Describe the outcomes and results..."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="full_content">Full Content (Markdown supported)</Label>
                  <Textarea
                    id="full_content"
                    value={formData.full_content}
                    onChange={(e) => setFormData({ ...formData, full_content: e.target.value })}
                    rows={8}
                    placeholder="Additional detailed content..."
                  />
                </div>
              </div>

              {/* Publishing Options */}
              <div className="flex items-center gap-6 border-t pt-4">
                <div className="flex items-center gap-2">
                  <Switch
                    id="is_published"
                    checked={formData.is_published}
                    onCheckedChange={(checked) => setFormData({ ...formData, is_published: checked })}
                  />
                  <Label htmlFor="is_published">Publish immediately</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Switch
                    id="featured"
                    checked={formData.featured}
                    onCheckedChange={(checked) => setFormData({ ...formData, featured: checked })}
                  />
                  <Label htmlFor="featured">Featured</Label>
                </div>
              </div>

              {/* Submit */}
              <div className="flex justify-end gap-3">
                <Button type="button" variant="outline" onClick={handleCloseDialog}>
                  Cancel
                </Button>
                <Button type="submit" variant="hero" disabled={saveMutation.isPending}>
                  {saveMutation.isPending ? 'Saving...' : editingStudy ? 'Update' : 'Create'}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-xl bg-card border border-border"
        >
          <p className="text-sm text-muted-foreground">Total</p>
          <p className="text-2xl font-bold text-foreground">{caseStudies?.length || 0}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="p-4 rounded-xl bg-card border border-border"
        >
          <p className="text-sm text-muted-foreground">Published</p>
          <p className="text-2xl font-bold text-green-500">
            {caseStudies?.filter((s) => s.is_published).length || 0}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-4 rounded-xl bg-card border border-border"
        >
          <p className="text-sm text-muted-foreground">Draft</p>
          <p className="text-2xl font-bold text-yellow-500">
            {caseStudies?.filter((s) => !s.is_published).length || 0}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="p-4 rounded-xl bg-card border border-border"
        >
          <p className="text-sm text-muted-foreground">Featured</p>
          <p className="text-2xl font-bold text-primary">
            {caseStudies?.filter((s) => s.featured).length || 0}
          </p>
        </motion.div>
      </div>

      {/* Table */}
      <div className="rounded-xl border border-border bg-card overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/30">
              <TableHead className="w-12">#</TableHead>
              <TableHead>Case Study</TableHead>
              <TableHead>Industry</TableHead>
              <TableHead>Metrics</TableHead>
              <TableHead className="text-center">Status</TableHead>
              <TableHead className="text-center">Featured</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-8">
                  <div className="w-6 h-6 border-2 border-primary/30 border-t-primary rounded-full animate-spin mx-auto" />
                </TableCell>
              </TableRow>
            ) : caseStudies?.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                  No case studies yet. Create your first one!
                </TableCell>
              </TableRow>
            ) : (
              caseStudies?.map((study, idx) => (
                <TableRow key={study.id} className="hover:bg-muted/20">
                  <TableCell className="font-medium text-muted-foreground">{idx + 1}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      {study.image_url ? (
                        <img
                          src={study.image_url}
                          alt={study.title}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                          <ImageIcon className="w-5 h-5 text-muted-foreground" />
                        </div>
                      )}
                      <div>
                        <p className="font-medium text-foreground">{study.client_name}</p>
                        <p className="text-sm text-muted-foreground line-clamp-1">{study.title}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">{study.industry}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      {study.metrics?.slice(0, 2).map((m, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {m.value}
                        </Badge>
                      ))}
                      {(study.metrics?.length || 0) > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{study.metrics.length - 2}
                        </Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <button
                      onClick={() => togglePublishMutation.mutate({ id: study.id, is_published: !study.is_published })}
                      className="inline-flex items-center gap-1 px-2 py-1 rounded-md hover:bg-muted transition-colors"
                    >
                      {study.is_published ? (
                        <>
                          <Eye className="w-4 h-4 text-green-500" />
                          <span className="text-xs text-green-500">Live</span>
                        </>
                      ) : (
                        <>
                          <EyeOff className="w-4 h-4 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">Draft</span>
                        </>
                      )}
                    </button>
                  </TableCell>
                  <TableCell className="text-center">
                    <button
                      onClick={() => toggleFeaturedMutation.mutate({ id: study.id, featured: !study.featured })}
                      className="p-1 rounded-md hover:bg-muted transition-colors"
                    >
                      {study.featured ? (
                        <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                      ) : (
                        <StarOff className="w-5 h-5 text-muted-foreground" />
                      )}
                    </button>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => window.open(`/case-studies/${study.slug}`, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => handleOpenDialog(study)}>
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-destructive hover:text-destructive"
                        onClick={() => {
                          if (confirm('Are you sure you want to delete this case study?')) {
                            deleteMutation.mutate(study.id);
                          }
                        }}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default CaseStudiesAdmin;