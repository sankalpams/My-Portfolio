import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className={`relative p-2.5 rounded-xl transition-all duration-300 border border-slate-700/60 dark:border-slate-800 bg-slate-800/40 dark:bg-slate-900/80 hover:bg-slate-800 dark:hover:bg-slate-800 text-slate-300 dark:text-slate-300 hover:text-brand-400 dark:hover:text-brand-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500/50 ${className}`}
      title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {theme === 'dark' ? (
          <Sun className="w-5 h-5 text-amber-400 transition-transform duration-300 hover:rotate-45" />
        ) : (
          <Moon className="w-5 h-5 text-brand-600 transition-transform duration-300 hover:-rotate-12" />
        )}
      </div>
    </button>
  );
};
