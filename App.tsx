import React, { useEffect, useState } from 'react';
import { Navigation } from './components/Navigation';
import { Features } from './components/Features';
import { UseCases } from './components/UseCases';
import { DevVsNoCode } from './components/DevVsNoCode';
import { Footer } from './components/Footer';
import { Button } from './components/Button';
import { Impressum } from './components/Impressum';
import { ArrowRight, CheckCircle2, X } from 'lucide-react';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'impressum'>('home');

  // Smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  // Reset scroll position when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const openModal = () => {
    setIsModalOpen(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Restore body scroll
    document.body.style.overflow = 'unset';
  };

  const handleNavigate = (view: string) => {
    if (view === 'impressum') setCurrentView('impressum');
    else setCurrentView('home');
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200 selection:bg-white selection:text-black">
      <Navigation 
        onRequestAccess={openModal} 
        onHomeClick={() => setCurrentView('home')} 
      />
      
      {currentView === 'home' ? (
        <main>
          {/* Hero Section */}
          <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden border-b border-white/5">
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-400 mb-8">
                <span className="flex h-1.5 w-1.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                </span>
                Now accepting early access requests
              </div>
              
              <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-8 text-white">
                The Financial Layer for <br />
                <span className="text-zinc-400">AI Agents</span>
              </h1>
              
              <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Give your AI agents a safe way to spend — across money, tokens, and compute. Approve each transaction or fully automate it, with full governance and control.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                <Button variant="primary" size="lg" className="w-full sm:w-auto group" onClick={openModal}>
                  Request Early Access 
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto" onClick={() => document.getElementById('features')?.scrollIntoView()}>
                  Explore Features
                </Button>
              </div>

              <div className="flex items-center justify-center gap-8 text-zinc-500 text-sm font-medium">
                <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-white"/> KY-A (Agent Identity)</span>
                <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-white"/> Spend Controls</span>
                <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-white"/> Unified Rails</span>
              </div>
            </div>
          </section>

          <Features />
          
          <UseCases />
          
          <DevVsNoCode />
          
          <InteractiveSimulator />
          
          {/* CTA Section */}
          <section id="access" className="py-24 relative overflow-hidden bg-zinc-900/30">
            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
              <h2 className="text-4xl font-semibold mb-6 text-white tracking-tight">Ready to build the autonomous economy?</h2>
              <p className="text-zinc-400 text-lg mb-10 font-light">
                We're working with agent developers, AI-first startups, and enterprise automation teams. 
                Secure your spot on the waitlist today.
              </p>
              
              <Button variant="primary" size="lg" onClick={openModal}>
                Request Access
              </Button>
            </div>
          </section>
        </main>
      ) : (
        <Impressum />
      )}
      
      <Footer onNavigate={handleNavigate} />

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
            onClick={closeModal}
          />
          <div className="relative w-full max-w-2xl bg-[#09090b] border border-zinc-800 rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center p-4 border-b border-zinc-800 bg-zinc-900/50">
              <h3 className="text-lg font-medium text-white pl-2">Request Access</h3>
              <button 
                onClick={closeModal}
                className="text-zinc-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
              >
                <X size={20} />
              </button>
            </div>
            <div className="bg-zinc-950 relative">
               <iframe 
                className="airtable-embed" 
                src="https://airtable.com/embed/appfI6ksS9PIPM7rg/pagIjfzzQiP4YWTwC/form" 
                frameBorder="0" 
                width="100%" 
                height="533" 
                style={{ background: 'transparent' }}
                title="Request Access Form"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
