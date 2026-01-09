import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  Edit,
  Trash2,
  Eye,
  EyeOff,
  Star,
  StarOff,
  ExternalLink,
  FileText,
  ArrowUpDown,
} from 'lucide-react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
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
  description: string;
  slug: string;
  image_url: string | null;
  metrics: CaseStudyMetric[];
  tags: string[];
  is_published: boolean;
  published_at: string | null;
  featured: boolean;
  display_order: number;
  created_at: string;
  updated_at: string;
}

function transformCaseStudy(raw: {
  id: string;
  client_name: string;
  industry: string;
  title: string;
  description: string;
  slug: string;
  image_url: string | null;
  metrics: Json;
  tags: string[] | null;
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

interface CaseStudyListProps {
  filterType?: 'all' | 'published' | 'featured';
}

const CaseStudyList: React.FC<CaseStudyListProps> = ({ filterType = 'all' }) => {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const [search, setSearch] = useState('');
  const [industryFilter, setIndustryFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'updated_at' | 'display_order' | 'client_name'>('display_order');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  // Fetch case studies
  const { data: caseStudies, isLoading } = useQuery({
    queryKey: ['admin-case-studies', filterType],
    queryFn: async () => {
      let query = supabase
        .from('case_studies')
        .select('*');

      if (filterType === 'published') {
        query = query.eq('is_published', true);
      } else if (filterType === 'featured') {
        query = query.eq('featured', true);
      }

      const { data, error } = await query.order('display_order', { ascending: true });
      if (error) throw error;
      return (data || []).map(transformCaseStudy);
    },
  });

  // Toggle mutations
  const togglePublishMutation = useMutation({
    mutationFn: async ({ id, is_published }: { id: string; is_published: boolean }) => {
      const { error } = await supabase
        .from('case_studies')
        .update({
          is_published,
          published_at: is_published ? new Date().toISOString() : null,
          updated_by: user?.id,
        })
        .eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-case-studies'] });
      queryClient.invalidateQueries({ queryKey: ['admin-case-studies-overview'] });
      toast.success('Status updated!');
    },
  });

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
      queryClient.invalidateQueries({ queryKey: ['admin-case-studies-overview'] });
      toast.success('Featured status updated!');
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from('case_studies').delete().eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-case-studies'] });
      queryClient.invalidateQueries({ queryKey: ['admin-case-studies-overview'] });
      toast.success('Case study deleted!');
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  // Get unique industries for filter
  const industries = useMemo(() => {
    if (!caseStudies) return [];
    return [...new Set(caseStudies.map((s) => s.industry))].sort();
  }, [caseStudies]);

  // Filter and sort
  const filteredStudies = useMemo(() => {
    if (!caseStudies) return [];

    let result = caseStudies;

    // Search filter
    if (search) {
      const searchLower = search.toLowerCase();
      result = result.filter(
        (s) =>
          s.client_name.toLowerCase().includes(searchLower) ||
          s.title.toLowerCase().includes(searchLower) ||
          s.description.toLowerCase().includes(searchLower) ||
          s.tags.some((t) => t.toLowerCase().includes(searchLower))
      );
    }

    // Industry filter
    if (industryFilter !== 'all') {
      result = result.filter((s) => s.industry === industryFilter);
    }

    // Sort
    result = [...result].sort((a, b) => {
      let comparison = 0;
      if (sortBy === 'updated_at') {
        comparison = new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
      } else if (sortBy === 'display_order') {
        comparison = a.display_order - b.display_order;
      } else if (sortBy === 'client_name') {
        comparison = a.client_name.localeCompare(b.client_name);
      }
      return sortOrder === 'asc' ? comparison : -comparison;
    });

    return result;
  }, [caseStudies, search, industryFilter, sortBy, sortOrder]);

  const getTitle = () => {
    switch (filterType) {
      case 'published':
        return 'Published Case Studies';
      case 'featured':
        return 'Featured Case Studies';
      default:
        return 'All Case Studies';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">{getTitle()}</h1>
          <p className="text-muted-foreground">
            {filteredStudies.length} case {filteredStudies.length === 1 ? 'study' : 'studies'}
          </p>
        </div>
        <Link to="/admin/case-studies/new">
          <Button variant="hero">
            <Plus className="w-4 h-4 mr-2" />
            New Case Study
          </Button>
        </Link>
      </div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-premium rounded-xl p-4 border border-border/30 flex flex-col sm:flex-row gap-4"
      >
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search case studies..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={industryFilter} onValueChange={setIndustryFilter}>
          <SelectTrigger className="w-full sm:w-48">
            <Filter className="w-4 h-4 mr-2" />
            <SelectValue placeholder="Industry" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Industries</SelectItem>
            {industries.map((ind) => (
              <SelectItem key={ind} value={ind}>
                {ind}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={sortBy} onValueChange={(v) => setSortBy(v as typeof sortBy)}>
          <SelectTrigger className="w-full sm:w-40">
            <ArrowUpDown className="w-4 h-4 mr-2" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="display_order">Order</SelectItem>
            <SelectItem value="updated_at">Updated</SelectItem>
            <SelectItem value="client_name">Client</SelectItem>
          </SelectContent>
        </Select>
      </motion.div>

      {/* Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="rounded-xl border border-border bg-card overflow-hidden"
      >
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/30">
              <TableHead className="w-12">#</TableHead>
              <TableHead>Case Study</TableHead>
              <TableHead>Industry</TableHead>
              <TableHead>Metrics</TableHead>
              <TableHead className="text-center">Status</TableHead>
              <TableHead className="text-center">Featured</TableHead>
              <TableHead className="text-center">Updated</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={8} className="text-center py-12">
                  <div className="w-6 h-6 border-2 border-primary/30 border-t-primary rounded-full animate-spin mx-auto" />
                </TableCell>
              </TableRow>
            ) : filteredStudies.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} className="text-center py-12">
                  <FileText className="w-12 h-12 mx-auto text-muted-foreground/50 mb-3" />
                  <p className="text-muted-foreground">
                    {search || industryFilter !== 'all'
                      ? 'No case studies match your filters'
                      : 'No case studies yet'}
                  </p>
                  {!search && industryFilter === 'all' && (
                    <Link to="/admin/case-studies/new">
                      <Button variant="outline" className="mt-4">
                        <Plus className="w-4 h-4 mr-2" />
                        Create Your First
                      </Button>
                    </Link>
                  )}
                </TableCell>
              </TableRow>
            ) : (
              filteredStudies.map((study, idx) => (
                <TableRow key={study.id} className="hover:bg-muted/20">
                  <TableCell className="font-medium text-muted-foreground">
                    {study.display_order}
                  </TableCell>
                  <TableCell>
                    <Link to={`/admin/case-studies/${study.id}`} className="flex items-center gap-3 group">
                      {study.image_url ? (
                        <img
                          src={study.image_url}
                          alt={study.title}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                          <FileText className="w-5 h-5 text-muted-foreground" />
                        </div>
                      )}
                      <div>
                        <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {study.client_name}
                        </p>
                        <p className="text-sm text-muted-foreground line-clamp-1">{study.title}</p>
                      </div>
                    </Link>
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
                      onClick={() =>
                        togglePublishMutation.mutate({ id: study.id, is_published: !study.is_published })
                      }
                      className="inline-flex items-center gap-1 px-2 py-1 rounded-md hover:bg-muted transition-colors"
                    >
                      {study.is_published ? (
                        <>
                          <Eye className="w-4 h-4 text-emerald-500" />
                          <span className="text-xs text-emerald-500">Live</span>
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
                      onClick={() =>
                        toggleFeaturedMutation.mutate({ id: study.id, featured: !study.featured })
                      }
                      className="p-1 rounded-md hover:bg-muted transition-colors"
                    >
                      {study.featured ? (
                        <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                      ) : (
                        <StarOff className="w-5 h-5 text-muted-foreground" />
                      )}
                    </button>
                  </TableCell>
                  <TableCell className="text-center text-sm text-muted-foreground">
                    {format(new Date(study.updated_at), 'MMM d, yyyy')}
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem asChild>
                          <Link to={`/admin/case-studies/${study.id}`}>
                            <Edit className="w-4 h-4 mr-2" />
                            Edit
                          </Link>
                        </DropdownMenuItem>
                        {study.is_published && (
                          <DropdownMenuItem
                            onClick={() => window.open(`/case-studies/${study.slug}`, '_blank')}
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View Live
                          </DropdownMenuItem>
                        )}
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          onClick={() => {
                            if (confirm('Are you sure you want to delete this case study?')) {
                              deleteMutation.mutate(study.id);
                            }
                          }}
                          className="text-destructive focus:text-destructive"
                        >
                          <Trash2 className="w-4 h-4 mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </motion.div>
    </div>
  );
};

export default CaseStudyList;