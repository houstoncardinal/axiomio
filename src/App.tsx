import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { AuthProvider } from "@/contexts/AuthContext";
import { ThemeSwitcher } from "./components/ThemeSwitcher";

// Lazy load all pages to prevent blocking errors
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

// Loading fallback
const PageLoader = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="text-center">
      <div className="w-10 h-10 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
      <p className="text-muted-foreground">Loading...</p>
    </div>
  </div>
);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
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
            <ThemeSwitcher />
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
