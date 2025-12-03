import React from 'react';
import { Twitter, Github, Linkedin } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-light tracking-tight text-white mb-4">lysandr</h3>
            <p className="text-gray-400 max-w-sm mb-6">
              The first financial infrastructure for autonomous agents. 
              Empowering the next generation of AI-driven commerce.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Product</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Wallets</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Payments</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Compliance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Integrations</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Lysandr Inc. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <button onClick={() => onNavigate('impressum')} className="hover:text-white transition-colors">Impressum</button>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};