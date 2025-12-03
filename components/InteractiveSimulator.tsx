import React, { useState } from 'react';
import { ShieldCheck, ShieldAlert, Cpu, Activity, RefreshCw } from 'lucide-react';
import { evaluateTransactionPolicy } from '../services/geminiService';
import { PolicyResult, SimulationState } from '../types';
import { Button } from './Button';

export const InteractiveSimulator: React.FC = () => {
  const [simulation, setSimulation] = useState<SimulationState>({
    policy: "Auto-approve infrastructure spend (AWS, GCP, Azure) up to $5,000 if risk score < 20. For general software, cap at $500. Strictly block any transaction categorized as 'Food', 'Travel', or 'Entertainment' to prevent unauthorized agent usage.",
    requestAmount: 2450.00,
    requestVendor: "AWS Web Services",
    requestCategory: "Software",
  });

  const [result, setResult] = useState<PolicyResult | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSimulate = async () => {
    setLoading(true);
    setResult(null);
    try {
      const data = await evaluateTransactionPolicy(simulation);
      setResult(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-20 border-t border-white/5">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-white">
          Policy Engine Simulator
        </h2>
        <p className="text-zinc-400 max-w-2xl mx-auto font-light">
          Test how our AI policy engine intercepts and evaluates agent spending in real-time. 
          Modify the policy or the transaction to see how the Gemini-powered brain reacts.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: Configuration */}
        <div className="bg-zinc-900/30 border border-white/5 rounded-xl p-6 md:p-8 space-y-6">
          <div className="flex items-center gap-2 mb-4">
            <Cpu className="text-white" size={20} />
            <h3 className="font-semibold text-lg text-white">Agent Configuration</h3>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs uppercase tracking-wider font-bold text-zinc-500 mb-2">Active Policy (Natural Language)</label>
              <textarea
                className="w-full bg-[#09090b] border border-zinc-800 rounded-lg p-3 text-sm text-zinc-300 focus:ring-1 focus:ring-white focus:border-white outline-none h-32 resize-none leading-relaxed transition-all"
                value={simulation.policy}
                onChange={(e) => setSimulation({ ...simulation, policy: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
               <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-zinc-500 mb-2">Vendor</label>
                <input
                  type="text"
                  className="w-full bg-[#09090b] border border-zinc-800 rounded-lg p-3 text-sm text-zinc-300 focus:ring-1 focus:ring-white focus:border-white outline-none transition-all"
                  value={simulation.requestVendor}
                  onChange={(e) => setSimulation({ ...simulation, requestVendor: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-zinc-500 mb-2">Amount ($)</label>
                <input
                  type="number"
                  className="w-full bg-[#09090b] border border-zinc-800 rounded-lg p-3 text-sm text-zinc-300 focus:ring-1 focus:ring-white focus:border-white outline-none transition-all"
                  value={simulation.requestAmount}
                  onChange={(e) => setSimulation({ ...simulation, requestAmount: parseFloat(e.target.value) })}
                />
              </div>
            </div>
             <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-zinc-500 mb-2">Category</label>
                <select
                  className="w-full bg-[#09090b] border border-zinc-800 rounded-lg p-3 text-sm text-zinc-300 focus:ring-1 focus:ring-white focus:border-white outline-none transition-all"
                  value={simulation.requestCategory}
                  onChange={(e) => setSimulation({ ...simulation, requestCategory: e.target.value })}
                >
                  <option value="Software">Software</option>
                  <option value="Travel">Travel</option>
                  <option value="Food">Food & Beverage</option>
                  <option value="Advertising">Advertising</option>
                  <option value="Equipment">Equipment</option>
                </select>
              </div>
          </div>

          <Button 
            onClick={handleSimulate} 
            disabled={loading}
            className="w-full mt-4 flex items-center gap-2 justify-center"
          >
            {loading ? <RefreshCw className="animate-spin h-4 w-4" /> : <Activity className="h-4 w-4" />}
            {loading ? "Analyzing Risk..." : "Simulate Transaction"}
          </Button>
        </div>

        {/* Right: Output */}
        <div className="relative bg-[#09090b] border border-zinc-800 rounded-xl p-6 md:p-8 flex flex-col justify-center min-h-[400px]">
           {!result && !loading && (
             <div className="text-center text-zinc-600 flex flex-col items-center">
               <ShieldCheck className="w-16 h-16 mb-4 opacity-20" />
               <p className="font-mono text-sm">Initiate a transaction to see the engine analysis.</p>
             </div>
           )}

           {loading && (
             <div className="flex flex-col items-center justify-center space-y-4">
               <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
               <p className="text-zinc-400 font-mono text-sm">Running Compliance Checks...</p>
             </div>
           )}

           {result && !loading && (
             <div className="space-y-6 animate-pulse-slow">
               <div className="flex items-center justify-between border-b border-zinc-800 pb-6">
                 <div>
                   <h4 className="text-zinc-500 text-xs uppercase tracking-wider font-bold">Status</h4>
                   <div className={`text-3xl font-bold mt-2 flex items-center gap-3 ${result.approved ? 'text-white' : 'text-red-500'}`}>
                     {result.approved ? (
                       <><ShieldCheck className="h-8 w-8 text-emerald-500" /> APPROVED</>
                     ) : (
                       <><ShieldAlert className="h-8 w-8" /> BLOCKED</>
                     )}
                   </div>
                 </div>
                 <div className="text-right">
                   <h4 className="text-zinc-500 text-xs uppercase tracking-wider font-bold">Risk Score</h4>
                   <div className={`text-3xl font-mono font-bold mt-2 ${result.riskScore > 50 ? 'text-red-500' : 'text-white'}`}>
                     {result.riskScore}/100
                   </div>
                 </div>
               </div>

               <div>
                 <h4 className="text-zinc-500 text-xs uppercase tracking-wider font-bold mb-2">Engine Reasoning</h4>
                 <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-lg">
                   <p className="text-zinc-300 leading-relaxed text-sm font-mono">
                     "{result.reason}"
                   </p>
                 </div>
               </div>

               <p className="text-xs text-center text-zinc-600 font-mono pt-4">
                 Audit Log ID: {Math.random().toString(36).substring(7).toUpperCase()}
               </p>
             </div>
           )}
        </div>
      </div>
    </div>
  );
};