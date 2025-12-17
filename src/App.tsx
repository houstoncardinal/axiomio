import { Suspense, lazy, Component, ReactNode } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";

// Error Boundary Component
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
        <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
          <div className="text-center text-white">
            <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
            <p className="text-gray-400 mb-4">{this.state.error?.message}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600"
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
const XeroTrustService = lazy(() => import("./pages/services/XeroTrust"));
const XeroTrust = lazy(() => import("./pages/XeroTrust"));
const XeroTrustCompare = lazy(() => import("./pages/XeroTrustCompare"));
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

// Loading fallback with inline styles for reliability
const PageLoader = () => (
  <div style={{ minHeight: '100vh', backgroundColor: '#030712', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ textAlign: 'center', color: '#f5f5f5' }}>
      <div style={{ width: 40, height: 40, border: '3px solid #00d4ff', borderTopColor: 'transparent', borderRadius: '50%', margin: '0 auto 16px', animation: 'spin 1s linear infinite' }} />
      <p>Loading...</p>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  </div>
);

const queryClient = new QueryClient();

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/strategy-advisory" element={<StrategyAdvisory />} />
                <Route path="/services/technology-systems" element={<TechnologySystems />} />
                <Route path="/services/ai-automation" element={<AIAutomation />} />
                <Route path="/services/digital-transformation" element={<DigitalTransformation />} />
                <Route path="/services/xerotrust" element={<XeroTrustService />} />
                <Route path="/xerotrust" element={<XeroTrust />} />
                <Route path="/xerotrust/compare" element={<XeroTrustCompare />} />
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
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
