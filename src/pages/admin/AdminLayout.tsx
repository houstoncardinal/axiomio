import React from 'react';
import { Outlet, useNavigate, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  FileText,
  LogOut,
  ChevronLeft,
  Menu,
  Plus,
  Eye,
  Star,
  Settings,
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

const navItems = [
  { icon: LayoutDashboard, label: 'Overview', path: '/admin' },
  { icon: FileText, label: 'All Case Studies', path: '/admin/case-studies' },
  { icon: Eye, label: 'Published', path: '/admin/case-studies/published' },
  { icon: Star, label: 'Featured', path: '/admin/case-studies/featured' },
  { icon: Settings, label: 'Settings', path: '/admin/settings' },
];

const AdminLayout: React.FC = () => {
  const { user, isAdmin, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth');
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background flex">
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: collapsed ? 80 : 280 }}
        className={`fixed lg:relative z-50 h-screen glass-premium border-r border-border/30 flex flex-col transition-all overflow-y-auto ${
          mobileOpen ? 'left-0' : '-left-full lg:left-0'
        }`}
      >
        {/* Logo */}
        <div className="p-6 flex items-center justify-between border-b border-border/30">
          {!collapsed && (
            <Link to="/" className="font-heading text-xl font-bold tracking-wider text-gradient">
              AXIOMIO
            </Link>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="w-8 h-8 rounded-lg bg-muted/50 flex items-center justify-center hover:bg-muted transition-colors hidden lg:flex"
          >
            <ChevronLeft className={`w-4 h-4 transition-transform ${collapsed ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Create New Button */}
        <div className="p-4 border-b border-border/30">
          <Link to="/admin/case-studies/new">
            <Button variant="hero" className={`w-full justify-center gap-2 ${collapsed ? 'px-2' : ''}`}>
              <Plus className="w-4 h-4" />
              {!collapsed && 'New Case Study'}
            </Button>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                isActive(item.path)
                  ? 'bg-primary/10 text-primary border border-primary/20'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
              }`}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {!collapsed && <span className="font-medium">{item.label}</span>}
            </Link>
          ))}
        </nav>

        {/* User section */}
        <div className="p-4 border-t border-border/30">
          {!collapsed && (
            <div className="mb-4 p-3 rounded-xl bg-muted/30">
              <p className="text-sm font-medium text-foreground truncate">{user?.email}</p>
              <p className="text-xs text-muted-foreground">{isAdmin ? 'Administrator' : 'User'}</p>
            </div>
          )}
          <Button
            variant="ghost"
            onClick={handleSignOut}
            className={`w-full justify-start gap-3 text-muted-foreground hover:text-destructive ${collapsed ? 'px-4' : ''}`}
          >
            <LogOut className="w-5 h-5" />
            {!collapsed && 'Sign Out'}
          </Button>
        </div>
      </motion.aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Mobile header */}
        <header className="lg:hidden sticky top-0 z-30 glass border-b border-border/30 px-4 py-3 flex items-center gap-4">
          <button
            onClick={() => setMobileOpen(true)}
            className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center"
          >
            <Menu className="w-5 h-5" />
          </button>
          <span className="font-heading text-lg font-bold tracking-wider text-gradient">Case Studies CRM</span>
        </header>

        {/* Page content */}
        <main className="flex-1 p-6 lg:p-8 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;