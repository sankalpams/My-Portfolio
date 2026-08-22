import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-zinc-900 bg-black text-zinc-500 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-zinc-300 font-medium">
              &copy; {new Date().getFullYear()} {personalInfo.name}
            </div>
            <div className="text-[11px] text-zinc-500">
              BUILT WITH REACT + TYPESCRIPT + TAILWIND CSS • SLTC DATA SCIENCE
            </div>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-all hover:scale-105"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>

        </div>
      </div>
    </footer>
  );
};
