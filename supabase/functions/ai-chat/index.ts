import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SYSTEM_PROMPT = `You are AXIA, the AI assistant for Axiom.io - an innovation-led modern Managed Service Provider (MSP) powered by an AI workforce.

About Axiom.io:
- We are a next-generation MSP that combines human expertise with AI-powered automation
- Our core offerings include: Cloud Infrastructure, Cybersecurity (XeroTrust), AI & Automation, Digital Transformation, and XOPS360 platform
- XeroTrust is our proprietary zero-trust security framework
- XOPS360 is our unified operations platform for complete infrastructure visibility
- We serve enterprise clients across various industries

Key differentiators:
- AI-powered workforce that augments human capabilities
- Proactive monitoring and automated incident resolution
- 24/7 intelligent operations with predictive analytics
- Industry-leading certifications (AWS, Azure, Google Cloud, Citrix, Acronis)

Your personality:
- Professional yet approachable
- Knowledgeable about enterprise IT, cloud, and cybersecurity
- Helpful and solution-oriented
- Concise but thorough

When answering:
- If asked about specific services, provide helpful overviews
- For pricing or detailed proposals, recommend scheduling a consultation via the Contact page
- Be enthusiastic about innovation and technology
- Highlight how AI transforms traditional MSP services`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limits exceeded, please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Service temporarily unavailable." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(JSON.stringify({ error: "AI service error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Chat error:", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
