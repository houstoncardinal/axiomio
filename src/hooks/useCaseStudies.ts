import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useEffect } from 'react';
import type { Json } from '@/integrations/supabase/types';

export interface CaseStudyMetric {
  icon: string;
  value: string;
  label: string;
}

export interface CaseStudy {
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

export function useCaseStudies(options?: { featured?: boolean; limit?: number }) {
  const query = useQuery({
    queryKey: ['case-studies', options],
    queryFn: async () => {
      let q = supabase
        .from('case_studies')
        .select('*')
        .eq('is_published', true)
        .order('display_order', { ascending: true });

      if (options?.featured) {
        q = q.eq('featured', true);
      }

      if (options?.limit) {
        q = q.limit(options.limit);
      }

      const { data, error } = await q;
      if (error) throw error;
      return (data || []).map(transformCaseStudy);
    },
  });

  // Set up realtime subscription
  useEffect(() => {
    const channel = supabase
      .channel('case-studies-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'case_studies',
        },
        () => {
          query.refetch();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [query]);

  return query;
}

export function useCaseStudy(slug: string) {
  return useQuery({
    queryKey: ['case-study', slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('case_studies')
        .select('*')
        .eq('slug', slug)
        .eq('is_published', true)
        .single();

      if (error) throw error;
      return transformCaseStudy(data);
    },
    enabled: !!slug,
  });
}