import { Suspense, lazy, Component, ReactNode, useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ThemeProvider } from "next-themes";
import LoadingScreen from "@/components/LoadingScreen";
import AIChatWidget from "@/components/AIChatWidget";
import { ScrollToTop } from "@/components/ScrollToTop";

class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean; error: Error | null }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
          <div className="text-center text-foreground">
            <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
            <p className="text-muted-foreground mb-4">{this.state.error?.message}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="px-4 py-2 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

// Lazy load all pages
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Approach = lazy(() => import("./pages/Approach"));
const Contact = lazy(() => import("./pages/Contact"));
const XOPS360 = lazy(() => import("./pages/XOPS360"));
const Auth = lazy(() => import("./pages/Auth"));
const StrategyAdvisory = lazy(() => import("./pages/services/StrategyAdvisory"));
const TechnologySystems = lazy(() => import("./pages/services/TechnologySystems"));
const AIAutomation = lazy(() => import("./pages/services/AIAutomation"));
const DigitalTransformation = lazy(() => import("./pages/services/DigitalTransformation"));
const OpsExcellence = lazy(() => import("./pages/services/OpsExcellence"));
const XeroTrustService = lazy(() => import("./pages/services/XeroTrust"));
const CyberSecurity = lazy(() => import("./pages/services/CyberSecurity"));
const XeroTrust = lazy(() => import("./pages/XeroTrust"));
const XeroTrustCompare = lazy(() => import("./pages/XeroTrustCompare"));
const XeroWaste = lazy(() => import("./pages/XeroWaste"));
const AdminLayout = lazy(() => import("./pages/admin/AdminLayout"));
const Dashboard = lazy(() => import("./pages/admin/Dashboard"));
const Analytics = lazy(() => import("./pages/admin/Analytics"));
const SEO = lazy(() => import("./pages/admin/SEO"));
const Content = lazy(() => import("./pages/admin/Content"));
const Users = lazy(() => import("./pages/admin/Users"));
const Settings = lazy(() => import("./pages/admin/Settings"));
const Leads = lazy(() => import("./pages/admin/Leads"));
const XOPS360Overview = lazy(() => import("./pages/admin/xops360/Overview"));
const XOPS360Clients = lazy(() => import("./pages/admin/xops360/Clients"));
const XOPS360Deployments = lazy(() => import("./pages/admin/xops360/Deployments"));
const XOPS360Runbooks = lazy(() => import("./pages/admin/xops360/Runbooks"));
const XOPS360Integrations = lazy(() => import("./pages/admin/xops360/Integrations"));
const XOPS360Metrics = lazy(() => import("./pages/admin/xops360/Metrics"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Loading fallback with inline styles for reliability - Light enterprise theme
const PageLoader = () => (
  <div style={{ minHeight: '100vh', backgroundColor: '#f5f7fa', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ textAlign: 'center', color: '#1a1f36' }}>
      <div style={{ width: 40, height: 40, border: '3px solid #5046e5', borderTopColor: 'transparent', borderRadius: '50%', margin: '0 auto 16px', animation: 'spin 1s linear infinite' }} />
      <p style={{ fontWeight: 500 }}>Loading...</p>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  </div>
);

const queryClient = new QueryClient();

const AppContent = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Quick loading - just wait for initial render
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ScrollToTop />
      <LoadingScreen isLoading={isLoading} />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/strategy-advisory" element={<StrategyAdvisory />} />
          <Route path="/services/technology-systems" element={<TechnologySystems />} />
          <Route path="/services/ai-automation" element={<AIAutomation />} />
          <Route path="/services/digital-transformation" element={<DigitalTransformation />} />
          <Route path="/services/ops-excellence" element={<OpsExcellence />} />
          <Route path="/services/xerotrust" element={<XeroTrustService />} />
          <Route path="/services/cybersecurity" element={<CyberSecurity />} />
          <Route path="/xerotrust" element={<XeroTrust />} />
          <Route path="/xerotrust/compare" element={<XeroTrustCompare />} />
          <Route path="/xerowaste" element={<XeroWaste />} />
          <Route path="/xops360" element={<XOPS360 />} />
          <Route path="/approach" element={<Approach />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auth" element={<Auth />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="seo" element={<SEO />} />
            <Route path="content" element={<Content />} />
            <Route path="users" element={<Users />} />
            <Route path="settings" element={<Settings />} />
            <Route path="leads" element={<Leads />} />
            <Route path="xops360" element={<XOPS360Overview />} />
            <Route path="xops360/clients" element={<XOPS360Clients />} />
            <Route path="xops360/deployments" element={<XOPS360Deployments />} />
            <Route path="xops360/runbooks" element={<XOPS360Runbooks />} />
            <Route path="xops360/integrations" element={<XOPS360Integrations />} />
            <Route path="xops360/metrics" element={<XOPS360Metrics />} />
          </Route>
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <AIChatWidget />
    </>
  );
};

const App = () => (
  <ErrorBoundary>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <AppContent />
            </BrowserRouter>
          </TooltipProvider>
        </AuthProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </ErrorBoundary>
);

export default App;
