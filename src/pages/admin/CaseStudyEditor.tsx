import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  ArrowLeft,
  Save,
  Eye,
  ExternalLink,
  Plus,
  X,
  Trash2,
} from 'lucide-react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import type { Json } from '@/integrations/supabase/types';

interface CaseStudyMetric {
  icon: string;
  value: string;
  label: string;
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

const emptyFormData = {
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

const CaseStudyEditor: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const isNew = id === 'new';

  const [formData, setFormData] = useState(emptyFormData);
  const [newTag, setNewTag] = useState('');
  const [newMetric, setNewMetric] = useState<CaseStudyMetric>({ icon: 'Zap', value: '', label: '' });
  const [hasChanges, setHasChanges] = useState(false);

  // Fetch existing case study
  const { data: existingStudy, isLoading } = useQuery({
    queryKey: ['case-study-edit', id],
    queryFn: async () => {
      if (isNew) return null;
      const { data, error } = await supabase
        .from('case_studies')
        .select('*')
        .eq('id', id)
        .single();
      if (error) throw error;
      return data;
    },
    enabled: !isNew && !!id,
  });

  // Populate form with existing data
  useEffect(() => {
    if (existingStudy) {
      setFormData({
        client_name: existingStudy.client_name,
        industry: existingStudy.industry,
        title: existingStudy.title,
        description: existingStudy.description,
        slug: existingStudy.slug,
        image_url: existingStudy.image_url || '',
        metrics: (existingStudy.metrics as unknown as CaseStudyMetric[]) || [],
        tags: existingStudy.tags || [],
        full_content: existingStudy.full_content || '',
        challenge: existingStudy.challenge || '',
        solution: existingStudy.solution || '',
        results: existingStudy.results || '',
        is_published: existingStudy.is_published,
        featured: existingStudy.featured,
        display_order: existingStudy.display_order || 0,
      });
    }
  }, [existingStudy]);

  // Save mutation
  const saveMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
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
        ...(data.is_published && !existingStudy?.published_at ? { published_at: new Date().toISOString() } : {}),
      };

      if (isNew) {
        const { data: newData, error } = await supabase
          .from('case_studies')
          .insert({ ...payload, created_by: user?.id })
          .select()
          .single();
        if (error) throw error;
        return newData;
      } else {
        const { error } = await supabase
          .from('case_studies')
          .update(payload)
          .eq('id', id);
        if (error) throw error;
        return { id };
      }
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['admin-case-studies'] });
      queryClient.invalidateQueries({ queryKey: ['admin-case-studies-overview'] });
      toast.success(isNew ? 'Case study created!' : 'Case study saved!');
      setHasChanges(false);
      if (isNew && data?.id) {
        navigate(`/admin/case-studies/${data.id}`, { replace: true });
      }
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  // Delete mutation
  const deleteMutation = useMutation({
    mutationFn: async () => {
      const { error } = await supabase.from('case_studies').delete().eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-case-studies'] });
      queryClient.invalidateQueries({ queryKey: ['admin-case-studies-overview'] });
      toast.success('Case study deleted!');
      navigate('/admin/case-studies');
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  const handleChange = (updates: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...updates }));
    setHasChanges(true);
  };

  const generateSlug = () => {
    const slug = formData.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    handleChange({ slug });
  };

  const addTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      handleChange({ tags: [...formData.tags, newTag.trim()] });
      setNewTag('');
    }
  };

  const removeTag = (tag: string) => {
    handleChange({ tags: formData.tags.filter((t) => t !== tag) });
  };

  const addMetric = () => {
    if (newMetric.value && newMetric.label) {
      handleChange({ metrics: [...formData.metrics, newMetric] });
      setNewMetric({ icon: 'Zap', value: '', label: '' });
    }
  };

  const removeMetric = (index: number) => {
    handleChange({ metrics: formData.metrics.filter((_, i) => i !== index) });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveMutation.mutate(formData);
  };

  if (!isNew && isLoading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate('/admin/case-studies')}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="font-heading text-2xl font-bold text-foreground">
              {isNew ? 'Create Case Study' : 'Edit Case Study'}
            </h1>
            {!isNew && formData.slug && (
              <p className="text-sm text-muted-foreground">/case-studies/{formData.slug}</p>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          {!isNew && formData.is_published && (
            <Button
              variant="outline"
              onClick={() => window.open(`/case-studies/${formData.slug}`, '_blank')}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View Live
            </Button>
          )}
          <Button
            variant="hero"
            onClick={handleSubmit}
            disabled={saveMutation.isPending}
          >
            <Save className="w-4 h-4 mr-2" />
            {saveMutation.isPending ? 'Saving...' : 'Save'}
          </Button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Basic Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-premium rounded-2xl p-6 border border-border/30 space-y-6"
        >
          <h2 className="font-heading text-lg font-semibold text-foreground">Basic Information</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="client_name">Client Name *</Label>
              <Input
                id="client_name"
                value={formData.client_name}
                onChange={(e) => handleChange({ client_name: e.target.value })}
                placeholder="e.g., Acme Corporation"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="industry">Industry *</Label>
              <Select
                value={formData.industry}
                onValueChange={(v) => handleChange({ industry: v })}
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
              onChange={(e) => handleChange({ title: e.target.value })}
              placeholder="e.g., Reduced Cloud Costs by 45%"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="slug">URL Slug *</Label>
              <div className="flex gap-2">
                <Input
                  id="slug"
                  value={formData.slug}
                  onChange={(e) => handleChange({ slug: e.target.value })}
                  placeholder="client-name-project"
                  required
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
                onChange={(e) => handleChange({ display_order: parseInt(e.target.value) || 0 })}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Short Description *</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleChange({ description: e.target.value })}
              placeholder="Brief overview of the case study..."
              rows={3}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="image_url">Featured Image URL</Label>
            <div className="flex gap-4">
              <Input
                id="image_url"
                value={formData.image_url}
                onChange={(e) => handleChange({ image_url: e.target.value })}
                placeholder="https://..."
                className="flex-1"
              />
              {formData.image_url && (
                <img
                  src={formData.image_url}
                  alt="Preview"
                  className="w-20 h-20 rounded-lg object-cover border border-border"
                />
              )}
            </div>
          </div>
        </motion.div>

        {/* Metrics Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-premium rounded-2xl p-6 border border-border/30 space-y-4"
        >
          <h2 className="font-heading text-lg font-semibold text-foreground">Key Metrics</h2>

          <div className="flex flex-wrap gap-2">
            {formData.metrics.map((metric, idx) => (
              <Badge key={idx} variant="secondary" className="px-3 py-2 flex items-center gap-2">
                <span className="font-bold">{metric.value}</span>
                <span className="text-muted-foreground">{metric.label}</span>
                <button type="button" onClick={() => removeMetric(idx)}>
                  <X className="w-3 h-3" />
                </button>
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
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
              placeholder="Label (e.g., Cost Reduction)"
              value={newMetric.label}
              onChange={(e) => setNewMetric({ ...newMetric, label: e.target.value })}
              className="flex-1 min-w-[200px]"
            />
            <Button type="button" variant="outline" onClick={addMetric}>
              <Plus className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>

        {/* Tags Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-premium rounded-2xl p-6 border border-border/30 space-y-4"
        >
          <h2 className="font-heading text-lg font-semibold text-foreground">Tags</h2>

          <div className="flex flex-wrap gap-2">
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
              className="flex-1"
            />
            <Button type="button" variant="outline" onClick={addTag}>
              <Plus className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>

        {/* Detailed Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-premium rounded-2xl p-6 border border-border/30 space-y-6"
        >
          <h2 className="font-heading text-lg font-semibold text-foreground">Detailed Content</h2>

          <div className="space-y-2">
            <Label htmlFor="challenge">Challenge</Label>
            <Textarea
              id="challenge"
              value={formData.challenge}
              onChange={(e) => handleChange({ challenge: e.target.value })}
              placeholder="Describe the client's challenge..."
              rows={4}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="solution">Solution</Label>
            <Textarea
              id="solution"
              value={formData.solution}
              onChange={(e) => handleChange({ solution: e.target.value })}
              placeholder="Describe how AXIOMIO solved the challenge..."
              rows={4}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="results">Results</Label>
            <Textarea
              id="results"
              value={formData.results}
              onChange={(e) => handleChange({ results: e.target.value })}
              placeholder="Describe the outcomes and results..."
              rows={4}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="full_content">Additional Content (Markdown)</Label>
            <Textarea
              id="full_content"
              value={formData.full_content}
              onChange={(e) => handleChange({ full_content: e.target.value })}
              placeholder="Additional detailed content..."
              rows={8}
              className="font-mono text-sm"
            />
          </div>
        </motion.div>

        {/* Publishing Options Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-premium rounded-2xl p-6 border border-border/30"
        >
          <h2 className="font-heading text-lg font-semibold text-foreground mb-4">Publishing</h2>

          <div className="flex flex-wrap items-center gap-8">
            <div className="flex items-center gap-3">
              <Switch
                id="is_published"
                checked={formData.is_published}
                onCheckedChange={(checked) => handleChange({ is_published: checked })}
              />
              <Label htmlFor="is_published" className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                Published
              </Label>
            </div>
            <div className="flex items-center gap-3">
              <Switch
                id="featured"
                checked={formData.featured}
                onCheckedChange={(checked) => handleChange({ featured: checked })}
              />
              <Label htmlFor="featured" className="flex items-center gap-2">
                <span className="text-amber-500">★</span>
                Featured
              </Label>
            </div>
          </div>
        </motion.div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-4">
          {!isNew && (
            <Button
              type="button"
              variant="destructive"
              onClick={() => {
                if (confirm('Are you sure you want to delete this case study?')) {
                  deleteMutation.mutate();
                }
              }}
              disabled={deleteMutation.isPending}
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Delete
            </Button>
          )}
          <div className="flex-1" />
          <Button
            type="submit"
            variant="hero"
            size="lg"
            disabled={saveMutation.isPending}
          >
            <Save className="w-4 h-4 mr-2" />
            {saveMutation.isPending ? 'Saving...' : isNew ? 'Create Case Study' : 'Save Changes'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CaseStudyEditor;