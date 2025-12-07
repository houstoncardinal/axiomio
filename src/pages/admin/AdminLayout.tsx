import React from 'react';
import { Outlet, useNavigate, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  BarChart3,
  FileText,
  Users,
  Settings,
  LogOut,
  ChevronLeft,
  Menu,
  Server,
  Target,
  Zap,
  Building2,
  Link as LinkIcon,
  Briefcase,
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/admin' },
  { icon: BarChart3, label: 'Analytics', path: '/admin/analytics' },
  { 
    icon: Server, 
    label: 'XOPS360', 
    path: '/admin/xops360',
    children: [
      { icon: Building2, label: 'Clients', path: '/admin/xops360/clients' },
      { icon: Server, label: 'Deployments', path: '/admin/xops360/deployments' },
      { icon: Zap, label: 'Runbooks', path: '/admin/xops360/runbooks' },
      { icon: LinkIcon, label: 'Integrations', path: '/admin/xops360/integrations' },
      { icon: BarChart3, label: 'Metrics', path: '/admin/xops360/metrics' },
    ]
  },
  { icon: Target, label: 'Leads', path: '/admin/leads' },
  { icon: Briefcase, label: 'Engagements', path: '/admin/engagements' },
  { icon: Users, label: 'Inquiries', path: '/admin/users' },
  { icon: FileText, label: 'Content', path: '/admin/content' },
  { icon: Settings, label: 'Settings', path: '/admin/settings' },
];

const AdminLayout: React.FC = () => {
  const { user, isAdmin, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedGroups, setExpandedGroups] = useState<string[]>(['XOPS360']);

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

  const toggleGroup = (label: string) => {
    setExpandedGroups((prev) =>
      prev.includes(label) ? prev.filter((g) => g !== label) : [...prev, label]
    );
  };

  const isActive = (path: string) => location.pathname === path;
  const isGroupActive = (item: typeof navItems[0]) => {
    if (item.children) {
      return item.children.some((child) => location.pathname.startsWith(child.path));
    }
    return location.pathname === item.path;
  };

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

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => (
            <div key={item.path}>
              {item.children ? (
                <>
                  <button
                    onClick={() => !collapsed && toggleGroup(item.label)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                      isGroupActive(item)
                        ? 'bg-primary/10 text-primary border border-primary/20'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    }`}
                  >
                    <item.icon className="w-5 h-5 flex-shrink-0" />
                    {!collapsed && (
                      <>
                        <span className="font-medium flex-1 text-left">{item.label}</span>
                        <ChevronLeft
                          className={`w-4 h-4 transition-transform ${
                            expandedGroups.includes(item.label) ? '-rotate-90' : 'rotate-180'
                          }`}
                        />
                      </>
                    )}
                  </button>
                  {!collapsed && expandedGroups.includes(item.label) && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          onClick={() => setMobileOpen(false)}
                          className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all text-sm ${
                            isActive(child.path)
                              ? 'bg-primary/10 text-primary'
                              : 'text-muted-foreground hover:text-foreground hover:bg-muted/30'
                          }`}
                        >
                          <child.icon className="w-4 h-4" />
                          <span>{child.label}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
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
              )}
            </div>
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
          <span className="font-heading text-lg font-bold tracking-wider text-gradient">AXIOMIO Admin</span>
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
