import React from 'react';
import { Wallet, Shield, Network, CheckCircle2 } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-zinc-950 relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-white font-medium tracking-wide uppercase text-xs mb-3">
            The Infrastructure
          </h2>
          <h3 className="text-3xl md:text-5xl font-semibold text-white mb-6 tracking-tight">
            A Financial Stack Built for <br/>
            <span className="text-zinc-500">Agents, Not Humans.</span>
          </h3>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg font-light">
            Traditional banking assumes a human is pressing the buttons. 
            We provide the missing layer that lets agents act autonomously and safely.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Feature 1: Unified Payment Rails */}
          <div className="group p-8 rounded-xl bg-zinc-900/30 border border-white/5 hover:border-white/20 transition-all duration-300 flex flex-col">
            <div className="h-10 w-10 bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors border border-white/5">
              <Network className="text-zinc-200" size={20} />
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">Unified Payment Rails</h4>
            <p className="text-zinc-500 font-medium mb-4 text-sm">One API. Every rail.</p>
            <p className="text-zinc-400 leading-relaxed mb-6 flex-grow text-sm">
              We unify ACP (Agent-to-Cloud Protocol), X-402, Stripe, crypto (USDC/ETH), and traditional banking rails like ACH and SEPA. 
              Your agents can pay, verify, and settle across any network.
            </p>
            <div className="pt-6 border-t border-white/5 mt-auto">
              <div className="flex flex-wrap gap-2 mb-3">
                {['ACP', 'X-402', 'Stripe', 'USDC', 'ETH', 'ACH'].map((tag) => (
                   <span key={tag} className="text-[10px] font-mono bg-zinc-900 border border-zinc-800 px-2 py-1 rounded text-zinc-400 uppercase">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Feature 2: Agent Wallets */}
          <div className="group p-8 rounded-xl bg-zinc-900/30 border border-white/5 hover:border-white/20 transition-all duration-300 flex flex-col relative overflow-hidden">
            <div className="h-10 w-10 bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors border border-white/5">
              <Wallet className="text-zinc-200" size={20} />
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">Agent Wallets</h4>
            <p className="text-zinc-500 font-medium mb-4 text-sm">Programmable financial control.</p>
            <p className="text-zinc-400 leading-relaxed mb-6 text-sm">
              Every agent gets a secure, programmable wallet with built-in financial controls. 
              Give your agents freedom to act—without losing control over your money.
            </p>
            <ul className="space-y-3 mt-auto">
              <li className="flex items-start gap-3 text-sm text-zinc-400">
                <CheckCircle2 className="text-white shrink-0" size={16} />
                <span>Spend limits & budgets per task</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-zinc-400">
                <CheckCircle2 className="text-white shrink-0" size={16} />
                <span>Crypto token balances (ERC-20)</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-zinc-400">
                <CheckCircle2 className="text-white shrink-0" size={16} />
                <span>Visual rail management</span>
              </li>
            </ul>
          </div>

          {/* Feature 3: KYAgent & Risk Engine */}
          <div className="group p-8 rounded-xl bg-zinc-900/30 border border-white/5 hover:border-white/20 transition-all duration-300 flex flex-col">
            <div className="h-10 w-10 bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors border border-white/5">
              <Shield className="text-zinc-200" size={20} />
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">KYAgent & Risk Engine</h4>
            <p className="text-zinc-500 font-medium mb-4 text-sm">Zero-trust payments.</p>
            <p className="text-zinc-400 leading-relaxed mb-6 text-sm">
              A new security standard. We verify agent identity, task intent, and transaction integrity before any payment is executed.
              Our risk engine analyzes behavioral patterns to keep agents safe.
            </p>
             <ul className="space-y-3 mt-auto">
              <li className="flex items-start gap-3 text-sm text-zinc-400">
                <CheckCircle2 className="text-white shrink-0" size={16} />
                <span>Verify identity & task intent</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-zinc-400">
                <CheckCircle2 className="text-white shrink-0" size={16} />
                <span>Behavioral anomaly detection</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-zinc-400">
                <CheckCircle2 className="text-white shrink-0" size={16} />
                <span>Real-time guardrail enforcement</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};