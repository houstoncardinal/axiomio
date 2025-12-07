export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      analytics_events: {
        Row: {
          created_at: string
          event_type: string
          id: string
          metadata: Json | null
          page_path: string | null
          session_id: string | null
        }
        Insert: {
          created_at?: string
          event_type: string
          id?: string
          metadata?: Json | null
          page_path?: string | null
          session_id?: string | null
        }
        Update: {
          created_at?: string
          event_type?: string
          id?: string
          metadata?: Json | null
          page_path?: string | null
          session_id?: string | null
        }
        Relationships: []
      }
      contact_inquiries: {
        Row: {
          company: string | null
          created_at: string
          email: string
          id: string
          message: string
          name: string
          status: string
          updated_at: string
        }
        Insert: {
          company?: string | null
          created_at?: string
          email: string
          id?: string
          message: string
          name: string
          status?: string
          updated_at?: string
        }
        Update: {
          company?: string | null
          created_at?: string
          email?: string
          id?: string
          message?: string
          name?: string
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      leads: {
        Row: {
          assigned_to: string | null
          budget_range: string | null
          company_name: string
          company_size: string | null
          contact_email: string
          contact_name: string
          contact_phone: string | null
          contact_role: string | null
          converted_at: string | null
          converted_to_client_id: string | null
          created_at: string
          estimated_cloud_spend: string | null
          id: string
          lead_score: number | null
          lead_type: string
          next_action: string | null
          next_action_date: string | null
          notes: string | null
          pain_points: string[] | null
          source: string | null
          status: string
          timeline: string | null
          updated_at: string
        }
        Insert: {
          assigned_to?: string | null
          budget_range?: string | null
          company_name: string
          company_size?: string | null
          contact_email: string
          contact_name: string
          contact_phone?: string | null
          contact_role?: string | null
          converted_at?: string | null
          converted_to_client_id?: string | null
          created_at?: string
          estimated_cloud_spend?: string | null
          id?: string
          lead_score?: number | null
          lead_type: string
          next_action?: string | null
          next_action_date?: string | null
          notes?: string | null
          pain_points?: string[] | null
          source?: string | null
          status?: string
          timeline?: string | null
          updated_at?: string
        }
        Update: {
          assigned_to?: string | null
          budget_range?: string | null
          company_name?: string
          company_size?: string | null
          contact_email?: string
          contact_name?: string
          contact_phone?: string | null
          contact_role?: string | null
          converted_at?: string | null
          converted_to_client_id?: string | null
          created_at?: string
          estimated_cloud_spend?: string | null
          id?: string
          lead_score?: number | null
          lead_type?: string
          next_action?: string | null
          next_action_date?: string | null
          notes?: string | null
          pain_points?: string[] | null
          source?: string | null
          status?: string
          timeline?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "leads_converted_to_client_id_fkey"
            columns: ["converted_to_client_id"]
            isOneToOne: false
            referencedRelation: "xops360_clients"
            referencedColumns: ["id"]
          },
        ]
      }
      page_content: {
        Row: {
          content: Json
          created_at: string
          id: string
          page_slug: string
          section_key: string
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          content?: Json
          created_at?: string
          id?: string
          page_slug: string
          section_key: string
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          content?: Json
          created_at?: string
          id?: string
          page_slug?: string
          section_key?: string
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          email: string | null
          full_name: string | null
          id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      service_engagements: {
        Row: {
          billing_type: string | null
          client_id: string | null
          contract_value: number | null
          created_at: string
          deliverables: Json | null
          description: string | null
          end_date: string | null
          engagement_name: string
          id: string
          service_type: string
          start_date: string | null
          status: string
          updated_at: string
        }
        Insert: {
          billing_type?: string | null
          client_id?: string | null
          contract_value?: number | null
          created_at?: string
          deliverables?: Json | null
          description?: string | null
          end_date?: string | null
          engagement_name: string
          id?: string
          service_type: string
          start_date?: string | null
          status?: string
          updated_at?: string
        }
        Update: {
          billing_type?: string | null
          client_id?: string | null
          contract_value?: number | null
          created_at?: string
          deliverables?: Json | null
          description?: string | null
          end_date?: string | null
          engagement_name?: string
          id?: string
          service_type?: string
          start_date?: string | null
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "service_engagements_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "xops360_clients"
            referencedColumns: ["id"]
          },
        ]
      }
      site_settings: {
        Row: {
          description: string | null
          id: string
          key: string
          updated_at: string
          updated_by: string | null
          value: Json
        }
        Insert: {
          description?: string | null
          id?: string
          key: string
          updated_at?: string
          updated_by?: string | null
          value?: Json
        }
        Update: {
          description?: string | null
          id?: string
          key?: string
          updated_at?: string
          updated_by?: string | null
          value?: Json
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      xops360_clients: {
        Row: {
          client_type: string
          clients_managed: number | null
          cloud_spend_monthly: number | null
          company_name: string
          company_size: string | null
          contract_end: string | null
          contract_start: string | null
          contract_value: number | null
          created_at: string
          engineers_count: number | null
          id: string
          industry: string | null
          primary_cloud: string[] | null
          primary_contact_email: string | null
          primary_contact_name: string | null
          primary_contact_role: string | null
          status: string
          updated_at: string
        }
        Insert: {
          client_type: string
          clients_managed?: number | null
          cloud_spend_monthly?: number | null
          company_name: string
          company_size?: string | null
          contract_end?: string | null
          contract_start?: string | null
          contract_value?: number | null
          created_at?: string
          engineers_count?: number | null
          id?: string
          industry?: string | null
          primary_cloud?: string[] | null
          primary_contact_email?: string | null
          primary_contact_name?: string | null
          primary_contact_role?: string | null
          status?: string
          updated_at?: string
        }
        Update: {
          client_type?: string
          clients_managed?: number | null
          cloud_spend_monthly?: number | null
          company_name?: string
          company_size?: string | null
          contract_end?: string | null
          contract_start?: string | null
          contract_value?: number | null
          created_at?: string
          engineers_count?: number | null
          id?: string
          industry?: string | null
          primary_cloud?: string[] | null
          primary_contact_email?: string | null
          primary_contact_name?: string | null
          primary_contact_role?: string | null
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      xops360_deployments: {
        Row: {
          client_id: string
          cloud_accounts_connected: number | null
          created_at: string
          deployed_at: string | null
          deployment_name: string
          environment: string
          health_score: number | null
          id: string
          integrations_count: number | null
          last_health_check: string | null
          modules_enabled: string[] | null
          status: string
          updated_at: string
        }
        Insert: {
          client_id: string
          cloud_accounts_connected?: number | null
          created_at?: string
          deployed_at?: string | null
          deployment_name: string
          environment?: string
          health_score?: number | null
          id?: string
          integrations_count?: number | null
          last_health_check?: string | null
          modules_enabled?: string[] | null
          status?: string
          updated_at?: string
        }
        Update: {
          client_id?: string
          cloud_accounts_connected?: number | null
          created_at?: string
          deployed_at?: string | null
          deployment_name?: string
          environment?: string
          health_score?: number | null
          id?: string
          integrations_count?: number | null
          last_health_check?: string | null
          modules_enabled?: string[] | null
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "xops360_deployments_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "xops360_clients"
            referencedColumns: ["id"]
          },
        ]
      }
      xops360_integrations: {
        Row: {
          config: Json | null
          created_at: string
          deployment_id: string
          id: string
          integration_name: string
          integration_type: string
          last_sync_at: string | null
          provider: string
          status: string
        }
        Insert: {
          config?: Json | null
          created_at?: string
          deployment_id: string
          id?: string
          integration_name: string
          integration_type: string
          last_sync_at?: string | null
          provider: string
          status?: string
        }
        Update: {
          config?: Json | null
          created_at?: string
          deployment_id?: string
          id?: string
          integration_name?: string
          integration_type?: string
          last_sync_at?: string | null
          provider?: string
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "xops360_integrations_deployment_id_fkey"
            columns: ["deployment_id"]
            isOneToOne: false
            referencedRelation: "xops360_deployments"
            referencedColumns: ["id"]
          },
        ]
      }
      xops360_metrics: {
        Row: {
          automations_executed: number | null
          avg_mttr_minutes: number | null
          cloud_spend_after: number | null
          cloud_spend_before: number | null
          compliance_score: number | null
          cost_savings: number | null
          created_at: string
          deployment_id: string
          engineer_hours_saved: number | null
          id: string
          incidents_auto_resolved: number | null
          incidents_detected: number | null
          metric_date: string
          security_alerts: number | null
          tickets_prevented: number | null
        }
        Insert: {
          automations_executed?: number | null
          avg_mttr_minutes?: number | null
          cloud_spend_after?: number | null
          cloud_spend_before?: number | null
          compliance_score?: number | null
          cost_savings?: number | null
          created_at?: string
          deployment_id: string
          engineer_hours_saved?: number | null
          id?: string
          incidents_auto_resolved?: number | null
          incidents_detected?: number | null
          metric_date?: string
          security_alerts?: number | null
          tickets_prevented?: number | null
        }
        Update: {
          automations_executed?: number | null
          avg_mttr_minutes?: number | null
          cloud_spend_after?: number | null
          cloud_spend_before?: number | null
          compliance_score?: number | null
          cost_savings?: number | null
          created_at?: string
          deployment_id?: string
          engineer_hours_saved?: number | null
          id?: string
          incidents_auto_resolved?: number | null
          incidents_detected?: number | null
          metric_date?: string
          security_alerts?: number | null
          tickets_prevented?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "xops360_metrics_deployment_id_fkey"
            columns: ["deployment_id"]
            isOneToOne: false
            referencedRelation: "xops360_deployments"
            referencedColumns: ["id"]
          },
        ]
      }
      xops360_runbooks: {
        Row: {
          avg_execution_time_seconds: number | null
          category: string
          client_id: string | null
          created_at: string
          description: string | null
          execution_count: number | null
          id: string
          last_executed_at: string | null
          name: string
          status: string
          success_rate: number | null
          trigger_type: string
          updated_at: string
        }
        Insert: {
          avg_execution_time_seconds?: number | null
          category: string
          client_id?: string | null
          created_at?: string
          description?: string | null
          execution_count?: number | null
          id?: string
          last_executed_at?: string | null
          name: string
          status?: string
          success_rate?: number | null
          trigger_type: string
          updated_at?: string
        }
        Update: {
          avg_execution_time_seconds?: number | null
          category?: string
          client_id?: string | null
          created_at?: string
          description?: string | null
          execution_count?: number | null
          id?: string
          last_executed_at?: string | null
          name?: string
          status?: string
          success_rate?: number | null
          trigger_type?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "xops360_runbooks_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "xops360_clients"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "moderator" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "moderator", "user"],
    },
  },
} as const
