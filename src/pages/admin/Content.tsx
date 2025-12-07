import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Plus, Edit, Trash2, Save } from 'lucide-react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';

interface PageContent {
  id: string;
  page_slug: string;
  section_key: string;
  content: Record<string, string>;
  updated_at: string;
}

const Content: React.FC = () => {
  const queryClient = useQueryClient();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editContent, setEditContent] = useState<Record<string, string>>({});

  const { data: contents, isLoading } = useQuery({
    queryKey: ['page-content'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('page_content')
        .select('*')
        .order('page_slug');
      if (error) throw error;
      return data as PageContent[];
    },
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, content }: { id: string; content: Record<string, string> }) => {
      const { error } = await supabase
        .from('page_content')
        .update({ content, updated_at: new Date().toISOString() })
        .eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['page-content'] });
      setEditingId(null);
      toast({ title: 'Content updated successfully' });
    },
    onError: () => {
      toast({ title: 'Failed to update content', variant: 'destructive' });
    },
  });

  const handleEdit = (content: PageContent) => {
    setEditingId(content.id);
    setEditContent(content.content as Record<string, string>);
  };

  const handleSave = (id: string) => {
    updateMutation.mutate({ id, content: editContent });
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-3xl font-bold text-foreground mb-2">Content Management</h1>
          <p className="text-muted-foreground">Edit page content and sections</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
          <Plus className="w-4 h-4" />
          Add Content
        </Button>
      </div>

      {/* Content List */}
      <div className="space-y-4">
        {isLoading ? (
          <div className="glass-premium rounded-2xl p-12 text-center">
            <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin mx-auto" />
          </div>
        ) : contents && contents.length > 0 ? (
          contents.map((content) => (
            <motion.div
              key={content.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-premium rounded-2xl border border-border/30 overflow-hidden"
            >
              <div className="p-6 border-b border-border/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">{content.page_slug}</h3>
                    <p className="text-sm text-muted-foreground">{content.section_key}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {editingId === content.id ? (
                    <Button
                      size="sm"
                      onClick={() => handleSave(content.id)}
                      className="bg-emerald-500 hover:bg-emerald-600 text-white gap-2"
                    >
                      <Save className="w-4 h-4" />
                      Save
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleEdit(content)}
                      className="gap-2"
                    >
                      <Edit className="w-4 h-4" />
                      Edit
                    </Button>
                  )}
                </div>
              </div>
              
              {editingId === content.id && (
                <div className="p-6 space-y-4">
                  {Object.entries(editContent).map(([key, value]) => (
                    <div key={key}>
                      <label className="text-sm font-medium text-foreground mb-2 block">{key}</label>
                      {value.length > 100 ? (
                        <Textarea
                          value={value}
                          onChange={(e) => setEditContent({ ...editContent, [key]: e.target.value })}
                          className="bg-muted/50 border-border/50"
                          rows={4}
                        />
                      ) : (
                        <Input
                          value={value}
                          onChange={(e) => setEditContent({ ...editContent, [key]: e.target.value })}
                          className="bg-muted/50 border-border/50"
                        />
                      )}
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))
        ) : (
          <div className="glass-premium rounded-2xl p-12 text-center">
            <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="font-heading text-lg font-semibold text-foreground mb-2">No content yet</h3>
            <p className="text-muted-foreground">Create your first content block to get started</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Content;
