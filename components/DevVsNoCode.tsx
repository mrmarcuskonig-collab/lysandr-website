import React, { useState } from 'react';
import { Code2, Workflow, Terminal, Box, Play } from 'lucide-react';

export const DevVsNoCode: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dev' | 'nocode'>('dev');

  return (
    <div id="developers" className="py-24 bg-zinc-950 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-white tracking-tight">
            Built for <span className="text-white">Developers</span> & <span className="text-zinc-500">No-Code</span> Builders
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto font-light">
            Whether you're writing Python agents or orchestrating n8n workflows, we handle the financial infrastructure.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="bg-zinc-900/50 border border-zinc-800 p-1 rounded-lg flex">
            <button
              onClick={() => setActiveTab('dev')}
              className={`flex items-center px-6 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === 'dev' 
                  ? 'bg-zinc-800 text-white shadow-sm' 
                  : 'text-zinc-500 hover:text-white'
              }`}
            >
              <Code2 className="w-4 h-4 mr-2" />
              For Developers
            </button>
            <button
              onClick={() => setActiveTab('nocode')}
              className={`flex items-center px-6 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === 'nocode' 
                  ? 'bg-zinc-800 text-white shadow-sm' 
                  : 'text-zinc-500 hover:text-white'
              }`}
            >
              <Workflow className="w-4 h-4 mr-2" />
              For No-Code
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="space-y-8">
            {activeTab === 'dev' ? (
              <>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 rounded-lg text-white border border-white/5">
                    <Terminal className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Typed SDKs</h3>
                    <p className="text-zinc-400 text-sm">Full TypeScript and Python support with auto-completion and type safety.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 rounded-lg text-white border border-white/5">
                    <Box className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Agent Framework Integrations</h3>
                    <p className="text-zinc-400 text-sm">Native hooks for LangChain, AutoGPT, and OpenAI Assistants API.</p>
                  </div>
                </div>
              </>
            ) : (
              <>
                 <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 rounded-lg text-white border border-white/5">
                    <Workflow className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Drag & Drop Workflow Nodes</h3>
                    <p className="text-zinc-400 text-sm">Ready-made blocks for n8n, Zapier, Make, and Bubble.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 rounded-lg text-white border border-white/5">
                    <Play className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Visual Policy Editor</h3>
                    <p className="text-zinc-400 text-sm">Configure spend limits and approval flows without writing code.</p>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Visual Side - IDE Look */}
          <div className="bg-[#09090b] border border-zinc-800 rounded-xl overflow-hidden shadow-2xl min-h-[400px]">
            <div className="flex items-center justify-between px-4 py-3 bg-[#18181b] border-b border-zinc-800">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-[#27272a]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27272a]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27272a]"></div>
              </div>
              <div className="text-xs text-zinc-500 font-mono">
                {activeTab === 'dev' ? 'agent_wallet.py' : 'n8n_workflow_editor'}
              </div>
              <div className="w-10"></div>
            </div>
            
            <div className="p-6 overflow-x-auto bg-[#09090b]">
              {activeTab === 'dev' ? (
                <pre className="font-mono text-sm leading-relaxed">
                  <div className="text-zinc-500 mb-2"># Initialize wallet for specific agent</div>
                  <div>
                    <span className="text-emerald-400">import</span> <span className="text-white">{`{ AgentWallet }`}</span> <span className="text-emerald-400">from</span> <span className="text-orange-300">'@lysandr/sdk'</span>
                  </div>
                  <div className="mt-4">
                    <span className="text-blue-300">wallet</span> <span className="text-white">=</span> <span className="text-yellow-200">AgentWallet</span><span className="text-white">(</span>
                  </div>
                  <div>
                    <span className="text-white">  agent_id=</span><span className="text-orange-300">"marketing_bot_01"</span><span className="text-white">,</span>
                  </div>
                  <div>
                    <span className="text-white">  spend_limit=</span><span className="text-emerald-300">1000</span>
                  </div>
                  <div><span className="text-white">)</span></div>
                  
                  <div className="mt-4 text-zinc-500"># Attempt transaction</div>
                  <div>
                    <span className="text-emerald-400">try:</span>
                  </div>
                  <div>
                    <span className="text-white">  tx = </span><span className="text-emerald-400">await</span> <span className="text-white">wallet.pay(</span>
                  </div>
                  <div>
                    <span className="text-white">    amount=</span><span className="text-emerald-300">50.00</span><span className="text-white">,</span>
                  </div>
                  <div>
                    <span className="text-white">    vendor=</span><span className="text-orange-300">"Google Ads"</span>
                  </div>
                  <div>
                    <span className="text-white">  )</span>
                  </div>
                  <div>
                    <span className="text-white">  print(</span><span className="text-orange-300">f"Paid: {`{tx.id}`}"</span><span className="text-white">)</span>
                  </div>
                  
                  <div className="mt-4">
                    <span className="text-emerald-400">except</span> <span className="text-yellow-200">PolicyViolationError</span> <span className="text-emerald-400">as</span> <span className="text-white">e:</span>
                  </div>
                  <div>
                    <span className="text-white">  print(</span><span className="text-orange-300">f"Blocked: {`{e.reason}`}"</span><span className="text-white">)</span>
                  </div>
                </pre>
              ) : (
                <div className="space-y-4">
                  {/* Mock N8N/Zapier Interface */}
                  <div className="flex items-center justify-between p-4 bg-zinc-900/50 rounded-lg border border-zinc-800 relative">
                    <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-3 h-3 bg-zinc-700 rounded-full border border-black"></div>
                    <div className="flex items-center gap-3">
                      <div className="bg-zinc-800 p-2 rounded text-zinc-400 border border-zinc-700">
                        <Terminal size={16} />
                      </div>
                      <div>
                        <div className="text-[10px] text-zinc-500 uppercase tracking-wider font-bold">Trigger</div>
                        <div className="text-sm font-medium text-white">Gmail - New Invoice</div>
                      </div>
                    </div>
                     <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-3 h-3 bg-zinc-600 rounded-full border border-black"></div>
                  </div>

                   <div className="flex justify-center">
                    <div className="h-6 w-0.5 bg-zinc-800"></div>
                   </div>

                  <div className="flex items-center justify-between p-4 bg-zinc-900/50 rounded-lg border border-white/20 relative shadow-sm">
                    <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-3 h-3 bg-zinc-600 rounded-full border border-black"></div>
                    <div className="flex items-center gap-3">
                      <div className="bg-white text-black p-2 rounded border border-white">
                        <Code2 size={16} />
                      </div>
                      <div>
                        <div className="text-[10px] text-zinc-500 uppercase tracking-wider font-bold">Action</div>
                        <div className="text-sm font-medium text-white">Lysandr - Pay Invoice</div>
                      </div>
                    </div>
                    <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full border border-black"></div>
                  </div>

                  <div className="px-6 py-3 bg-[#18181b] rounded border border-zinc-800 text-xs font-mono text-zinc-400 flex items-center gap-2">
                    <span className="text-emerald-400">●</span> Policy Check Passed: Budget available
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};