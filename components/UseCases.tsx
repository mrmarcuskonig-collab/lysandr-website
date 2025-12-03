import React from 'react';
import { Target, Cloud, Cpu, Server, FileText, ShoppingCart } from 'lucide-react';

const cases = [
  {
    title: 'Ad Spend Automation',
    description: 'Agents dynamically adjust budgets across Google & Meta based on real-time ROAS without human intervention.',
    icon: Target
  },
  {
    title: 'Cloud Spend Optimization',
    description: 'Infrastructure agents spin up/down GPU clusters for training and pay only for active compute time.',
    icon: Cloud
  },
  {
    title: 'Pay-for-Compute (ML/AI)',
    description: 'Micro-transactions for model inference and agent-to-agent service negotiation via crypto or fiat.',
    icon: Cpu
  },
  {
    title: 'API Usage Spend Mgmt',
    description: 'Set hard caps on API vendors (OpenAI, Anthropic) per project. Prevent runway bills from recursive loops.',
    icon: Server
  },
  {
    title: 'Accounts Payable',
    description: 'Autonomous invoice ingestion, validation against POs, and payment scheduling via ACH/Wire.',
    icon: FileText
  },
  {
    title: 'Inventory & Procurement',
    description: 'Supply chain agents restock physical inventory automatically when levels hit defined thresholds.',
    icon: ShoppingCart
  }
];

export const UseCases: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-950 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-white font-medium tracking-wide uppercase text-xs mb-3">
            Customer Jobs
          </h2>
          <h3 className="text-3xl md:text-4xl font-semibold text-white mb-6 tracking-tight">
            Powering the <span className="text-zinc-500">Autonomous Economy</span>
          </h3>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg font-light">
            Agents are becoming your workforce. Lysandr is the secure financial layer that lets them spend real money, tokens, and compute.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((item, idx) => (
            <div key={idx} className="group p-6 rounded-xl bg-zinc-900/30 border border-white/5 hover:border-white/20 transition-all duration-300">
              <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center mb-6 text-zinc-400 group-hover:text-white transition-colors border border-white/5">
                <item.icon size={20} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-medium text-white mb-3">{item.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed font-light">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};