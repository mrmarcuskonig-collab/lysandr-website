import React from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';

interface NavigationProps {
  onRequestAccess: () => void;
  onHomeClick: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onRequestAccess, onHomeClick }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <button onClick={onHomeClick} className="font-thin text-2xl tracking-tighter text-white select-none hover:text-gray-300 transition-colors focus:outline-none">
              lysandr
            </button>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <Button variant="primary" size="sm" onClick={onRequestAccess}>
                Request Access
              </Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-950 border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="pt-4">
               <Button variant="primary" className="w-full" onClick={() => {
                 setIsOpen(false);
                 onRequestAccess();
               }}>Request Access</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};