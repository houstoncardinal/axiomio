import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Settings as SettingsIcon, Palette, Globe, Shield, Save, Check } from 'lucide-react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { toast } from '@/hooks/use-toast';
import { useTheme, Theme } from '@/contexts/ThemeContext';

const Settings: React.FC = () => {
  const queryClient = useQueryClient();
  const { theme, setTheme, themes } = useTheme();
  const [seoTitle, setSeoTitle] = useState(' | Axiomio');
  const [contactEmail, setContactEmail] = useState('contact@axiomio.com');

  const { data: settings } = useQuery({
    queryKey: ['site-settings'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('site_settings')
        .select('*');
      if (error) throw error;
      return data;
    },
  });

  const updateSettingMutation = useMutation({
    mutationFn: async ({ key, value }: { key: string; value: Record<string, string | string[]> }) => {
      const { error } = await supabase
        .from('site_settings')
        .update({ value: value as unknown as Record<string, never>, updated_at: new Date().toISOString() })
        .eq('key', key);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['site-settings'] });
      toast({ title: 'Settings saved successfully' });
    },
    onError: () => {
      toast({ title: 'Failed to save settings', variant: 'destructive' });
    },
  });

  const handleSaveTheme = () => {
    updateSettingMutation.mutate({
      key: 'theme',
      value: { current: theme, available: themes.map((t) => t.id) },
    });
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="font-heading text-3xl font-bold text-foreground mb-2">Settings</h1>
        <p className="text-muted-foreground">Configure your site settings and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Theme Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-premium rounded-2xl border border-border/30 overflow-hidden"
        >
          <div className="p-6 border-b border-border/30 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Palette className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h2 className="font-heading text-lg font-semibold text-foreground">Theme</h2>
              <p className="text-sm text-muted-foreground">Customize the site appearance</p>
            </div>
          </div>
          <div className="p-6 space-y-4">
            <div className="grid grid-cols-2 gap-3">
              {themes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTheme(t.id)}
                  className={`p-4 rounded-xl border transition-all flex items-center gap-3 ${
                    theme === t.id
                      ? 'border-primary bg-primary/10'
                      : 'border-border/30 hover:border-border/50'
                  }`}
                >
                  <div className="flex -space-x-1">
                    <div
                      className="w-5 h-5 rounded-full border-2 border-background"
                      style={{ backgroundColor: t.colors.primary }}
                    />
                    <div
                      className="w-5 h-5 rounded-full border-2 border-background"
                      style={{ backgroundColor: t.colors.accent }}
                    />
                  </div>
                  <span className="text-sm font-medium">{t.name}</span>
                  {theme === t.id && <Check className="w-4 h-4 text-primary ml-auto" />}
                </button>
              ))}
            </div>
            <Button onClick={handleSaveTheme} className="w-full bg-primary hover:bg-primary/90 gap-2">
              <Save className="w-4 h-4" />
              Save Theme
            </Button>
          </div>
        </motion.div>

        {/* SEO Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-premium rounded-2xl border border-border/30 overflow-hidden"
        >
          <div className="p-6 border-b border-border/30 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
              <Globe className="w-5 h-5 text-secondary" />
            </div>
            <div>
              <h2 className="font-heading text-lg font-semibold text-foreground">SEO</h2>
              <p className="text-sm text-muted-foreground">Search engine optimization</p>
            </div>
          </div>
          <div className="p-6 space-y-4">
            <div>
              <Label htmlFor="seoTitle">Title Suffix</Label>
              <Input
                id="seoTitle"
                value={seoTitle}
                onChange={(e) => setSeoTitle(e.target.value)}
                className="mt-2 bg-muted/50 border-border/50"
              />
            </div>
            <Button
              onClick={() =>
                updateSettingMutation.mutate({
                  key: 'seo',
                  value: { title_suffix: seoTitle },
                })
              }
              className="w-full bg-secondary hover:bg-secondary/90 gap-2"
            >
              <Save className="w-4 h-4" />
              Save SEO Settings
            </Button>
          </div>
        </motion.div>

        {/* Contact Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-premium rounded-2xl border border-border/30 overflow-hidden"
        >
          <div className="p-6 border-b border-border/30 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
              <SettingsIcon className="w-5 h-5 text-emerald-500" />
            </div>
            <div>
              <h2 className="font-heading text-lg font-semibold text-foreground">Contact</h2>
              <p className="text-sm text-muted-foreground">Contact information</p>
            </div>
          </div>
          <div className="p-6 space-y-4">
            <div>
              <Label htmlFor="contactEmail">Contact Email</Label>
              <Input
                id="contactEmail"
                type="email"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                className="mt-2 bg-muted/50 border-border/50"
              />
            </div>
            <Button
              onClick={() =>
                updateSettingMutation.mutate({
                  key: 'contact',
                  value: { email: contactEmail },
                })
              }
              className="w-full bg-emerald-500 hover:bg-emerald-600 gap-2"
            >
              <Save className="w-4 h-4" />
              Save Contact Settings
            </Button>
          </div>
        </motion.div>

        {/* Security Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-premium rounded-2xl border border-border/30 overflow-hidden"
        >
          <div className="p-6 border-b border-border/30 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center">
              <Shield className="w-5 h-5 text-rose-500" />
            </div>
            <div>
              <h2 className="font-heading text-lg font-semibold text-foreground">Security</h2>
              <p className="text-sm text-muted-foreground">Access and permissions</p>
            </div>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">Two-factor auth</p>
                <p className="text-sm text-muted-foreground">Extra security layer</p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">Session timeout</p>
                <p className="text-sm text-muted-foreground">Auto-logout after inactivity</p>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Settings;
