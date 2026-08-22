import React from 'react';
import { ArrowUp, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-14 border-t border-zinc-800/80 bg-[#050508]/90 backdrop-blur-md text-zinc-300 font-mono text-xs relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Copyright & Subtitle */}
          <div className="space-y-1.5 text-center sm:text-left">
            <div className="text-white font-semibold text-sm tracking-wide flex items-center justify-center sm:justify-start gap-2">
              <span>&copy; {new Date().getFullYear()} {personalInfo.name}</span>
              <span className="text-zinc-600">•</span>
              <span className="text-rose-400 text-xs font-normal">Data Science & ML</span>
            </div>
            <div className="text-xs text-zinc-400 flex items-center justify-center sm:justify-start gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-rose-400" />
              <span>Built with React, TypeScript & Tailwind CSS</span>
              <span className="text-zinc-600">•</span>
              <span className="text-zinc-300 font-medium">SLTC Research</span>
            </div>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 hover:text-white transition-all hover:scale-105 shadow-md hover:border-rose-500/50 group"
            title="Back to Top"
          >
            <span className="text-xs font-medium text-zinc-300 group-hover:text-white">Back to Top</span>
            <ArrowUp className="w-4 h-4 text-rose-400 group-hover:-translate-y-0.5 transition-transform" />
          </button>

        </div>
      </div>
    </footer>
  );
};
