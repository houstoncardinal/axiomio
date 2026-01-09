-- Create function to update timestamps if it doesn't exist
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create case_studies table for dynamic case study management
CREATE TABLE public.case_studies (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  client_name TEXT NOT NULL,
  industry TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  image_url TEXT,
  
  -- Metrics as JSONB array: [{icon: "Zap", value: "100%", label: "Reduction"}]
  metrics JSONB NOT NULL DEFAULT '[]'::jsonb,
  
  -- Tags as text array
  tags TEXT[] NOT NULL DEFAULT '{}'::text[],
  
  -- Full case study content (rich text/markdown)
  full_content TEXT,
  
  -- Challenge, solution, results sections
  challenge TEXT,
  solution TEXT,
  results TEXT,
  
  -- Publishing controls
  is_published BOOLEAN NOT NULL DEFAULT false,
  published_at TIMESTAMP WITH TIME ZONE,
  featured BOOLEAN NOT NULL DEFAULT false,
  display_order INTEGER DEFAULT 0,
  
  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_by UUID REFERENCES auth.users(id),
  updated_by UUID REFERENCES auth.users(id)
);

-- Enable Row Level Security
ALTER TABLE public.case_studies ENABLE ROW LEVEL SECURITY;

-- Policy for public read access (only published case studies)
CREATE POLICY "Anyone can view published case studies"
ON public.case_studies
FOR SELECT
USING (is_published = true);

-- Policy for admin full access
CREATE POLICY "Admins can manage case studies"
ON public.case_studies
FOR ALL
USING (has_role(auth.uid(), 'admin'::app_role));

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_case_studies_updated_at
BEFORE UPDATE ON public.case_studies
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Enable realtime for case studies
ALTER PUBLICATION supabase_realtime ADD TABLE public.case_studies;

-- Create index for faster queries
CREATE INDEX idx_case_studies_published ON public.case_studies(is_published, display_order);
CREATE INDEX idx_case_studies_slug ON public.case_studies(slug);