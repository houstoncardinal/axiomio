-- XOPS360 Clients Table
CREATE TABLE public.xops360_clients (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_name TEXT NOT NULL,
  client_type TEXT NOT NULL CHECK (client_type IN ('msp', 'enterprise')),
  industry TEXT,
  company_size TEXT,
  cloud_spend_monthly DECIMAL(12,2),
  primary_cloud TEXT[] DEFAULT '{}',
  status TEXT NOT NULL DEFAULT 'prospect' CHECK (status IN ('prospect', 'onboarding', 'active', 'churned')),
  contract_value DECIMAL(12,2),
  contract_start DATE,
  contract_end DATE,
  -- Contact info
  primary_contact_name TEXT,
  primary_contact_email TEXT,
  primary_contact_role TEXT,
  -- Metrics
  engineers_count INTEGER,
  clients_managed INTEGER,
  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- XOPS360 Deployments
CREATE TABLE public.xops360_deployments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id UUID REFERENCES public.xops360_clients(id) ON DELETE CASCADE NOT NULL,
  deployment_name TEXT NOT NULL,
  environment TEXT NOT NULL DEFAULT 'production',
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'deploying', 'active', 'maintenance', 'suspended')),
  -- Configuration
  modules_enabled TEXT[] DEFAULT '{}',
  cloud_accounts_connected INTEGER DEFAULT 0,
  integrations_count INTEGER DEFAULT 0,
  -- Health metrics
  health_score INTEGER DEFAULT 100 CHECK (health_score >= 0 AND health_score <= 100),
  last_health_check TIMESTAMP WITH TIME ZONE,
  -- Timestamps
  deployed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- XOPS360 Performance Metrics
CREATE TABLE public.xops360_metrics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  deployment_id UUID REFERENCES public.xops360_deployments(id) ON DELETE CASCADE NOT NULL,
  metric_date DATE NOT NULL DEFAULT CURRENT_DATE,
  -- Incident metrics
  incidents_detected INTEGER DEFAULT 0,
  incidents_auto_resolved INTEGER DEFAULT 0,
  avg_mttr_minutes DECIMAL(10,2),
  -- Cost metrics
  cloud_spend_before DECIMAL(12,2),
  cloud_spend_after DECIMAL(12,2),
  cost_savings DECIMAL(12,2),
  -- Automation metrics
  automations_executed INTEGER DEFAULT 0,
  tickets_prevented INTEGER DEFAULT 0,
  engineer_hours_saved DECIMAL(10,2),
  -- Compliance
  compliance_score INTEGER DEFAULT 100,
  security_alerts INTEGER DEFAULT 0,
  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(deployment_id, metric_date)
);

-- XOPS360 Automation Runbooks
CREATE TABLE public.xops360_runbooks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id UUID REFERENCES public.xops360_clients(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL CHECK (category IN ('cloudops', 'finops', 'secops', 'devops', 'dataops', 'mlops')),
  trigger_type TEXT NOT NULL CHECK (trigger_type IN ('manual', 'scheduled', 'event', 'alert')),
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'active', 'paused', 'archived')),
  execution_count INTEGER DEFAULT 0,
  avg_execution_time_seconds DECIMAL(10,2),
  success_rate DECIMAL(5,2) DEFAULT 100.00,
  last_executed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- XOPS360 Integrations
CREATE TABLE public.xops360_integrations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  deployment_id UUID REFERENCES public.xops360_deployments(id) ON DELETE CASCADE NOT NULL,
  integration_name TEXT NOT NULL,
  integration_type TEXT NOT NULL CHECK (integration_type IN ('cloud_provider', 'monitoring', 'ticketing', 'cicd', 'iac', 'security', 'communication')),
  provider TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'connected', 'error', 'disconnected')),
  last_sync_at TIMESTAMP WITH TIME ZONE,
  config JSONB DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Leads/Prospects Table
CREATE TABLE public.leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_name TEXT NOT NULL,
  lead_type TEXT NOT NULL CHECK (lead_type IN ('msp', 'enterprise', 'unknown')),
  source TEXT,
  status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'qualified', 'proposal', 'negotiation', 'won', 'lost')),
  -- Contact
  contact_name TEXT NOT NULL,
  contact_email TEXT NOT NULL,
  contact_phone TEXT,
  contact_role TEXT,
  -- Qualification
  company_size TEXT,
  estimated_cloud_spend TEXT,
  pain_points TEXT[],
  timeline TEXT,
  budget_range TEXT,
  -- Scoring
  lead_score INTEGER DEFAULT 0 CHECK (lead_score >= 0 AND lead_score <= 100),
  -- Notes
  notes TEXT,
  next_action TEXT,
  next_action_date DATE,
  -- Assignment
  assigned_to UUID REFERENCES auth.users(id),
  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  converted_at TIMESTAMP WITH TIME ZONE,
  converted_to_client_id UUID REFERENCES public.xops360_clients(id)
);

-- Service Engagements
CREATE TABLE public.service_engagements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id UUID REFERENCES public.xops360_clients(id),
  service_type TEXT NOT NULL CHECK (service_type IN ('strategy_advisory', 'technology_systems', 'ai_automation', 'digital_transformation', 'xops360_implementation')),
  engagement_name TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('proposal', 'active', 'paused', 'completed', 'cancelled')),
  start_date DATE,
  end_date DATE,
  contract_value DECIMAL(12,2),
  billing_type TEXT CHECK (billing_type IN ('fixed', 'time_materials', 'retainer', 'subscription')),
  description TEXT,
  deliverables JSONB DEFAULT '[]',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.xops360_clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.xops360_deployments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.xops360_metrics ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.xops360_runbooks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.xops360_integrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.service_engagements ENABLE ROW LEVEL SECURITY;

-- RLS Policies for all tables (admin only)
CREATE POLICY "Admins can manage xops360_clients" ON public.xops360_clients FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can manage xops360_deployments" ON public.xops360_deployments FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can manage xops360_metrics" ON public.xops360_metrics FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can manage xops360_runbooks" ON public.xops360_runbooks FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can manage xops360_integrations" ON public.xops360_integrations FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can manage leads" ON public.leads FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can manage service_engagements" ON public.service_engagements FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin'));