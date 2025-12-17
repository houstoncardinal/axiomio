import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Calculator, Users, DollarSign, Clock, TrendingDown, Shield, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface CalculatorInputs {
  employees: number;
  currentVPNCost: number;
  itHoursPerWeek: number;
  securityIncidentsPerYear: number;
}

const defaultInputs: CalculatorInputs = {
  employees: 500,
  currentVPNCost: 15,
  itHoursPerWeek: 20,
  securityIncidentsPerYear: 12,
};

export function XeroTrustROICalculator() {
  const [inputs, setInputs] = useState<CalculatorInputs>(defaultInputs);

  const calculations = useMemo(() => {
    const { employees, currentVPNCost, itHoursPerWeek, securityIncidentsPerYear } = inputs;
    
    // Current costs (annual)
    const currentVPNAnnual = employees * currentVPNCost * 12;
    const itLaborCost = itHoursPerWeek * 52 * 75; // $75/hr avg IT cost
    const incidentCost = securityIncidentsPerYear * 25000; // $25k avg incident cost
    const productivityLoss = employees * 2 * 250 * 50; // 2 hrs/day lost, 250 work days, $50/hr
    
    const totalCurrentCost = currentVPNAnnual + itLaborCost + incidentCost + productivityLoss;
    
    // XeroTrust costs (annual)
    const xeroTrustCost = employees * 8 * 12; // $8/user/month
    const reducedITLabor = itLaborCost * 0.2; // 80% reduction
    const reducedIncidents = incidentCost * 0.1; // 90% reduction
    const reducedProductivityLoss = productivityLoss * 0.1; // 90% reduction (10x faster)
    
    const totalXeroTrustCost = xeroTrustCost + reducedITLabor + reducedIncidents + reducedProductivityLoss;
    
    const annualSavings = totalCurrentCost - totalXeroTrustCost;
    const savingsPercentage = ((annualSavings / totalCurrentCost) * 100).toFixed(0);
    const paybackMonths = Math.ceil((xeroTrustCost / 12) / (annualSavings / 12));
    
    return {
      currentCost: totalCurrentCost,
      xeroTrustCost: totalXeroTrustCost,
      annualSavings,
      savingsPercentage,
      paybackMonths: Math.max(1, paybackMonths),
      breakdown: {
        vpnSavings: currentVPNAnnual - xeroTrustCost,
        itSavings: itLaborCost - reducedITLabor,
        securitySavings: incidentCost - reducedIncidents,
        productivitySavings: productivityLoss - reducedProductivityLoss,
      }
    };
  }, [inputs]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-500 uppercase tracking-[0.2em] mb-4 px-3 py-1.5 rounded-xl border border-cyan-500/30 bg-cyan-500/10">
            <Calculator className="h-3 w-3" />
            ROI Calculator
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Calculate Your Savings
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See how much you can save by switching from legacy VPN to XeroTrust's zero-trust architecture.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Input Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-background border border-border rounded-2xl p-8"
          >
            <h3 className="font-heading text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Your Organization
            </h3>
            
            <div className="space-y-6">
              {/* Employees */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-foreground">Number of Employees</label>
                  <span className="text-sm text-primary font-semibold">{inputs.employees.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="10000"
                  step="50"
                  value={inputs.employees}
                  onChange={(e) => setInputs(prev => ({ ...prev, employees: parseInt(e.target.value) }))}
                  className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>50</span>
                  <span>10,000</span>
                </div>
              </div>

              {/* Current VPN Cost */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-foreground">Current VPN Cost/User/Month</label>
                  <span className="text-sm text-primary font-semibold">${inputs.currentVPNCost}</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="50"
                  step="1"
                  value={inputs.currentVPNCost}
                  onChange={(e) => setInputs(prev => ({ ...prev, currentVPNCost: parseInt(e.target.value) }))}
                  className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>$5</span>
                  <span>$50</span>
                </div>
              </div>

              {/* IT Hours */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-foreground">IT Hours on VPN Support/Week</label>
                  <span className="text-sm text-primary font-semibold">{inputs.itHoursPerWeek}hrs</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="80"
                  step="5"
                  value={inputs.itHoursPerWeek}
                  onChange={(e) => setInputs(prev => ({ ...prev, itHoursPerWeek: parseInt(e.target.value) }))}
                  className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>5hrs</span>
                  <span>80hrs</span>
                </div>
              </div>

              {/* Security Incidents */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-foreground">Security Incidents/Year</label>
                  <span className="text-sm text-primary font-semibold">{inputs.securityIncidentsPerYear}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="50"
                  step="1"
                  value={inputs.securityIncidentsPerYear}
                  onChange={(e) => setInputs(prev => ({ ...prev, securityIncidentsPerYear: parseInt(e.target.value) }))}
                  className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>0</span>
                  <span>50</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Results Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-cyan-500/10 via-background to-emerald-500/10 border border-cyan-500/20 rounded-2xl p-8"
          >
            <h3 className="font-heading text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <TrendingDown className="h-5 w-5 text-cyan-500" />
              Your Estimated Savings
            </h3>

            {/* Main Savings */}
            <div className="bg-background/80 backdrop-blur rounded-xl p-6 mb-6 border border-border/50">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">Annual Savings with XeroTrust</p>
                <p className="font-heading text-4xl md:text-5xl font-bold text-cyan-500 mb-2">
                  {formatCurrency(calculations.annualSavings)}
                </p>
                <p className="text-sm text-emerald-500 font-medium">
                  {calculations.savingsPercentage}% reduction in total cost
                </p>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-background/50 rounded-lg p-4 text-center">
                <Clock className="h-5 w-5 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">{calculations.paybackMonths}</p>
                <p className="text-xs text-muted-foreground">Month Payback</p>
              </div>
              <div className="bg-background/50 rounded-lg p-4 text-center">
                <Shield className="h-5 w-5 text-cyan-500 mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">90%</p>
                <p className="text-xs text-muted-foreground">Fewer Incidents</p>
              </div>
            </div>

            {/* Breakdown */}
            <div className="space-y-3 mb-6">
              <h4 className="text-sm font-semibold text-foreground">Savings Breakdown</h4>
              {[
                { label: "VPN License Savings", value: calculations.breakdown.vpnSavings, icon: DollarSign },
                { label: "IT Labor Savings", value: calculations.breakdown.itSavings, icon: Users },
                { label: "Security Incident Savings", value: calculations.breakdown.securitySavings, icon: Shield },
                { label: "Productivity Gains", value: calculations.breakdown.productivitySavings, icon: Zap },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </div>
                  <span className={cn(
                    "font-medium",
                    item.value > 0 ? "text-emerald-500" : "text-foreground"
                  )}>
                    {item.value > 0 ? "+" : ""}{formatCurrency(item.value)}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              to="/contact"
              className="group flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg bg-cyan-500 text-white font-medium text-sm transition-all hover:bg-cyan-600 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              Get Custom Analysis
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Competitor Comparison Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-sm text-muted-foreground mb-4">
            See how XeroTrust compares to Cloudflare Access, Zscaler, and Tailscale
          </p>
          <Link
            to="/xerotrust/compare"
            className="inline-flex items-center gap-2 text-cyan-500 hover:text-cyan-400 font-medium text-sm transition-colors"
          >
            View Full Comparison
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
