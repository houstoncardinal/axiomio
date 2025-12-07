import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Approach from "./pages/Approach";
import Contact from "./pages/Contact";
import XOPS360 from "./pages/XOPS360";
import Auth from "./pages/Auth";
import StrategyAdvisory from "./pages/services/StrategyAdvisory";
import TechnologySystems from "./pages/services/TechnologySystems";
import AIAutomation from "./pages/services/AIAutomation";
import DigitalTransformation from "./pages/services/DigitalTransformation";
import AdminLayout from "./pages/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import Analytics from "./pages/admin/Analytics";
import Content from "./pages/admin/Content";
import Users from "./pages/admin/Users";
import Settings from "./pages/admin/Settings";
import Leads from "./pages/admin/Leads";
import XOPS360Overview from "./pages/admin/xops360/Overview";
import XOPS360Clients from "./pages/admin/xops360/Clients";
import XOPS360Deployments from "./pages/admin/xops360/Deployments";
import XOPS360Runbooks from "./pages/admin/xops360/Runbooks";
import XOPS360Integrations from "./pages/admin/xops360/Integrations";
import XOPS360Metrics from "./pages/admin/xops360/Metrics";
import NotFound from "./pages/NotFound";
import { ThemeSwitcher } from "./components/ThemeSwitcher";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
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
            <ThemeSwitcher />
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
