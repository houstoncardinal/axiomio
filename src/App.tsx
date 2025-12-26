import { Suspense, lazy, Component, ReactNode } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ThemeProvider } from "next-themes";
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
const VulnerabilityManagement = lazy(() => import("./pages/services/VulnerabilityManagement"));
const CloudFinOps = lazy(() => import("./pages/services/CloudFinOps"));
const DevOpsServices = lazy(() => import("./pages/services/DevOpsServices"));
const CloudSecurity = lazy(() => import("./pages/services/CloudSecurity"));
const MigrationModernization = lazy(() => import("./pages/services/MigrationModernization"));
const Kubernetes = lazy(() => import("./pages/services/Kubernetes"));
const ObservabilityMonitoring = lazy(() => import("./pages/services/ObservabilityMonitoring"));
const BusinessContinuity = lazy(() => import("./pages/services/BusinessContinuity"));
const SoftwareSupplyChainSecurity = lazy(() => import("./pages/services/SoftwareSupplyChainSecurity"));
const InfrastructureAsCode = lazy(() => import("./pages/services/InfrastructureAsCode"));
const ZeroTrustSecurity = lazy(() => import("./pages/services/ZeroTrustSecurity"));
const ThreatDetectionRansomware = lazy(() => import("./pages/services/ThreatDetectionRansomware"));
const DigitalWorkspace = lazy(() => import("./pages/services/DigitalWorkspace"));
const Blog = lazy(() => import("./pages/Blog"));
const Careers = lazy(() => import("./pages/Careers"));
const XeroTrust = lazy(() => import("./pages/XeroTrust"));
const XeroTrustCompare = lazy(() => import("./pages/XeroTrustCompare"));
const XeroWaste = lazy(() => import("./pages/XeroWaste"));
const RequestDemo = lazy(() => import("./pages/RequestDemo"));
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
const XOPS360Documentation = lazy(() => import("./pages/books/XOPS360Documentation"));
const ScifferCaseStudy = lazy(() => import("./pages/case-studies/sciffer-enhances-security-with-axiom"));

// Single clean loading screen - white background, smooth and fast
const PageLoader = () => (
  <div style={{ 
    minHeight: '100vh', 
    backgroundColor: '#ffffff', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    transition: 'opacity 0.3s ease-out'
  }}>
    <div style={{ textAlign: 'center' }}>
      <div style={{ 
        width: 32, 
        height: 32, 
        border: '2px solid #e5e7eb', 
        borderTopColor: '#5046e5', 
        borderRadius: '50%', 
        margin: '0 auto', 
        animation: 'spin 0.8s linear infinite' 
      }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  </div>
);

const queryClient = new QueryClient();

const AppContent = () => {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/strategy-advisory" element={<StrategyAdvisory />} />
          <Route path="/services/technology-systems" element={<TechnologySystems />} />
          <Route path="/services/ai-automation" element={<AIAutomation />} />
          <Route path="/services/digital-transformation" element={<DigitalTransformation />} />
          <Route path="/services/ops-excellence" element={<OpsExcellence />} />
          <Route path="/services/xerotrust" element={<XeroTrustService />} />
          <Route path="/services/cybersecurity" element={<CyberSecurity />} />
          <Route path="/services/vulnerability-management" element={<VulnerabilityManagement />} />
          <Route path="/services/cloud-finops" element={<CloudFinOps />} />
          <Route path="/services/devops-services" element={<DevOpsServices />} />
          <Route path="/services/cloud-security" element={<CloudSecurity />} />
          <Route path="/services/migration-and-modernization" element={<MigrationModernization />} />
          <Route path="/services/kubernetes" element={<Kubernetes />} />
          <Route path="/services/observability-monitoring" element={<ObservabilityMonitoring />} />
          <Route path="/services/business-continuity" element={<BusinessContinuity />} />
          <Route path="/services/software-supply-chain-security" element={<SoftwareSupplyChainSecurity />} />
          <Route path="/services/infrastructure-as-code" element={<InfrastructureAsCode />} />
          <Route path="/services/zero-trust-security" element={<ZeroTrustSecurity />} />
          <Route path="/services/threat-detection-ransomware" element={<ThreatDetectionRansomware />} />
          <Route path="/services/digital-workspace" element={<DigitalWorkspace />} />
          <Route path="/xerotrust" element={<XeroTrust />} />
          <Route path="/xerotrust/compare" element={<XeroTrustCompare />} />
          <Route path="/xerowaste" element={<XeroWaste />} />
          <Route path="/xops360" element={<XOPS360 />} />
          <Route path="/approach" element={<Approach />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/request-a-demo" element={<RequestDemo />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/books/xops-360-documentation" element={<XOPS360Documentation />} />
          <Route path="/case-studies/sciffer-enhances-security-with-axiom" element={<ScifferCaseStudy />} />

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
